/* Reine Spiellogik: Bauplatz-Status, Pfennige, Lernplan, Note. Ohne DOM. */
(function () {
  'use strict';
  var W = (window.W = window.W || {});

  var TAG = 86400000;
  var QUOTE = 0.8;    // Anteil der Pflichtübungen, die einmal richtig sein müssen
  var ERKL_OK = 0.6;  // Mindestanteil der selbst vergebenen Punkte je Schreibaufgabe
  var WIEDERHOLUNG = ['schaeden', 'geruechte', 'wachstafel'];

  function parseISO(s) {
    var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(s || '');
    return m ? Date.UTC(+m[1], +m[2] - 1, +m[3]) : NaN;
  }
  function isoAus(ms) { return new Date(ms).toISOString().slice(0, 10); }

  function tageBis(heute, ziel) {
    var a = parseISO(heute), b = parseISO(ziel);
    if (isNaN(a) || isNaN(b)) return NaN;
    return Math.round((b - a) / TAG);
  }

  function heuteISO() {
    var d = new Date();
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  }

  /** Verteilt die offenen Aufgaben auf die Tage vor der Arbeit. Der letzte Tag ist Wiederholung. */
  function lernplan(heute, arbeit, aufgaben) {
    var d = tageBis(heute, arbeit);
    if (!(d > 0)) return [];
    var start = parseISO(heute);
    if (d === 1) return [{ datum: heute, aufgaben: aufgaben.concat(WIEDERHOLUNG) }];
    var tage = d - 1, n = aufgaben.length, plan = [];
    for (var i = 0; i < tage; i++) {
      var teil = aufgaben.slice(Math.floor(i * n / tage), Math.floor((i + 1) * n / tage));
      plan.push({ datum: isoAus(start + i * TAG), aufgaben: teil.length ? teil : ['schaeden', 'geruechte'] });
    }
    plan.push({ datum: isoAus(start + tage * TAG), aufgaben: WIEDERHOLUNG.slice() });
    return plan;
  }

  /** Was noch zu tun ist: offene Bauplätze, dann der Hoftag (falls noch keine Urkunde). */
  function planAufgaben(ids, fertig, urkunde) {
    return ids.filter(function (id) { return !fertig[id]; }).concat(urkunde ? [] : ['hoftag']);
  }

  function gehoertZu(key, bp, orte) {
    if (orte && orte[key]) return orte[key] === bp.id;
    var k = key.indexOf('e:') === 0 ? key.slice(2) : key;
    return k.indexOf(bp.id + '-') === 0;
  }

  /** Fortschritt eines Bauplatzes. stufe: 0 Grundriss, 1 Gerüst, 2 Mauern, 3 fertig (Richtfest). */
  function bauplatzStatus(bp, data) {
    var items = data.items || {}, erkl = data.erkl || {};
    var pflicht = (bp.ueben || []).filter(function (u) { return !u.zusatz; });
    var richtig = pflicht.filter(function (u) { return items[u.id] && items[u.id].ok; }).length;
    var quote = pflicht.length ? richtig / pflicht.length : 1;
    var nk = (bp.karten || []).length;
    var gesehen = data.karten && data.karten[bp.id] != null ? data.karten[bp.id] + 1 : 0;
    var karten = nk ? Math.min(1, gesehen / nk) : 1;
    var schreib = (bp.erklaeren || []).filter(function (e) { return !e.zusatz; });
    var schreibOk = schreib.filter(function (e) { return erkl[e.id] && erkl[e.id].best >= ERKL_OK - 1e-9; }).length;
    var erklOk = schreibOk === schreib.length;

    var fehlt = [];
    if (karten < 1) fehlt.push('Alle Karten unter „Verstehen“ ansehen');
    var noetig = Math.ceil(QUOTE * pflicht.length - 1e-9) - richtig;
    if (noetig > 0) fehlt.push('Noch ' + noetig + (noetig === 1 ? ' Übung' : ' Übungen') + ' richtig lösen');
    schreib.forEach(function (e, i) {
      if (!(erkl[e.id] && erkl[e.id].best >= ERKL_OK - 1e-9)) fehlt.push('Schreibaufgabe ' + (i + 1) + ' mit mindestens 60 %');
    });

    var fertig = karten >= 1 && quote >= QUOTE - 1e-9 && erklOk;
    var anteilSchreib = schreib.length ? schreibOk / schreib.length : 1;
    var p = fertig ? 1 : Math.min(0.95, 0.2 * karten + 0.5 * Math.min(1, quote / QUOTE) + 0.3 * anteilSchreib);
    var angefasst = gesehen > 0 ||
      (bp.ueben || []).some(function (u) { return items[u.id]; }) ||
      (bp.erklaeren || []).some(function (e) { return erkl[e.id]; });
    var stufe = fertig ? 3 : p >= 0.5 ? 2 : angefasst ? 1 : 0;
    var risse = Object.keys(data.schaeden || {}).filter(function (k) { return gehoertZu(k, bp, data.orte); }).length;
    return { p: p, stufe: stufe, fertig: fertig, quote: quote, erklOk: erklOk, karten: karten, fehlt: fertig ? [] : fehlt, risse: risse };
  }

  /** Pfennige werden aus dem Stand berechnet, nicht gezählt: So gibt es nichts doppelt. */
  function pfennige(data, bauplaetze) {
    var items = data.items || {}, erkl = data.erkl || {};
    var verdient = 0;
    Object.keys(items).forEach(function (k) { if (items[k] && items[k].ok) verdient += 1; });
    Object.keys(erkl).forEach(function (k) { if (erkl[k] && erkl[k].best >= ERKL_OK - 1e-9) verdient += 3; });
    (bauplaetze || []).forEach(function (bp) { if (bauplatzStatus(bp, data).fertig) verdient += 10; });
    verdient += 2 * (data.repariert || 0);
    if (data.pruefung && data.pruefung.urkunde) verdient += 20;
    var ausgegeben = 0;
    (W.schatz || []).forEach(function (s) { if (data.schatz && data.schatz[s.id]) ausgegeben += s.kosten; });
    return { verdient: verdient, ausgegeben: ausgegeben, stand: verdient - ausgegeben };
  }

  /** Richtwert-Note aus Prozent (Schlüssel wie bei der Physik-Probearbeit). */
  function note(prozent) {
    if (prozent >= 87.5) return 1;
    if (prozent >= 72.5) return 2;
    if (prozent >= 57.5) return 3;
    if (prozent >= 45) return 4;
    if (prozent >= 20) return 5;
    return 6;
  }

  /** Anteil × Punkte, auf halbe Punkte abgerundet. */
  function punkteRunden(anteil, punkte) { return Math.floor(anteil * punkte * 2 + 1e-9) / 2; }

  W.logic = {
    QUOTE: QUOTE, ERKL_OK: ERKL_OK, WIEDERHOLUNG: WIEDERHOLUNG,
    heuteISO: heuteISO, tageBis: tageBis, lernplan: lernplan, planAufgaben: planAufgaben,
    bauplatzStatus: bauplatzStatus, pfennige: pfennige, note: note, punkteRunden: punkteRunden
  };
})();
