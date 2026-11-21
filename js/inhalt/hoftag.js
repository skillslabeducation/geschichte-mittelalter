/* Der Hoftag (Probearbeit): 45 Minuten, 40 Punkte. Teil A Wissen (14 P.), Teil B Material (10 P.), Teil C Schreiben (16 P.).
   Die Aufgaben kommen aus dem Hoftag-Material der Bauplätze. Gleicher Seed, gleiche Probearbeit. Ohne DOM. */
(function () {
  'use strict';
  var W = (window.W = window.W || {});

  var DAUER = 45, MAX = 40, PUNKTE_A = 14;
  var URTEIL = ['beurteilen', 'bewerten', 'beurteilenBewerten', 'ueberpruefen'];

  function mulberry32(a) {
    return function () {
      a |= 0; a = (a + 0x6D2B79F5) | 0;
      var t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  function waehle(rnd, arr) { return arr[Math.floor(rnd() * arr.length)]; }
  function pflicht(x) { return x && !x.zusatz; }
  function bps() { return (W.bauplaetze || []).filter(function (b) { return b.hoftag; }); }
  function p(it) { return it.p == null ? 1 : it.p; }

  /** Probearbeit erzeugen. */
  function erzeugen(seed) {
    var rnd = mulberry32((seed >>> 0) || 1);
    var alle = bps();

    // Teil A: reihum aus jedem Bauplatz, bis 14 Punkte erreicht sind
    var stapel = alle.map(function (bp) { return { bp: bp, items: W.shuffle(bp.hoftag.wissen.filter(pflicht), rnd) }; })
      .filter(function (s) { return s.items.length; });
    var a = [], summe = 0, runde = 0;
    while (summe < PUNKTE_A && stapel.some(function (s) { return s.items.length > runde; })) {
      stapel.forEach(function (s) {
        if (summe >= PUNKTE_A || s.items.length <= runde) return;
        a.push({ key: s.items[runde].id, punkte: 1, item: s.items[runde], bauplatz: s.bp.id });
        summe += 1;
      });
      runde++;
    }

    // Teil B: bei geraden Seeds eine Quelle, die nicht im Buch steht
    var mats = [];
    alle.forEach(function (bp) { (bp.hoftag.material || []).forEach(function (m) { mats.push({ bp: bp, m: m }); }); });
    var unbekannt = mats.filter(function (x) { return x.m.quelle && W.quellen[x.m.quelle] && W.quellen[x.m.quelle].buch === false; });
    var bekannt = mats.filter(function (x) { return unbekannt.indexOf(x) < 0; });
    var pool = (seed % 2 === 0 && unbekannt.length) || !bekannt.length ? unbekannt : bekannt;
    var mb = waehle(rnd, pool);
    var b = {
      name: 'Teil B · Material', id: mb.m.id, quelle: mb.m.quelle || null, abb: mb.m.abb || null, abbOpts: mb.m.abbOpts || null, text: mb.m.text || null, bauplatz: mb.bp.id,
      aufgaben: mb.m.items.map(function (it) { return { key: it.id, punkte: p(it), item: it, bauplatz: mb.bp.id }; })
        .concat([{ key: mb.m.erkl.id, punkte: W.schreiben.summe(mb.m.erkl.punkte), erkl: mb.m.erkl, bauplatz: mb.bp.id }])
    };

    // Teil C: eine Erklär- und eine Urteilsaufgabe aus zwei verschiedenen Bauplätzen
    var erkl = [], urteil = [];
    alle.forEach(function (bp) {
      (bp.hoftag.schreiben || []).filter(pflicht).forEach(function (e) {
        (URTEIL.indexOf(e.operator) >= 0 ? urteil : erkl).push({ bp: bp, e: e });
      });
    });
    var c1 = waehle(rnd, erkl);
    var andere = urteil.filter(function (x) { return x.bp.id !== c1.bp.id && x.bp.id !== mb.bp.id; });
    if (!andere.length) andere = urteil.filter(function (x) { return x.bp.id !== c1.bp.id; });
    var c2 = waehle(rnd, andere.length ? andere : urteil);
    var c = { name: 'Teil C · Schreiben', aufgaben: [c1, c2].map(function (x) { return { key: x.e.id, punkte: W.schreiben.summe(x.e.punkte), erkl: x.e, bauplatz: x.bp.id }; }) };

    return { seed: seed, teile: [{ name: 'Teil A · Wissen', aufgaben: a }, b, c] };
  }

  /** Auswertung: Aufgaben prüft die App (auf halbe Punkte abgerundet), Schreibteile nach angehakten Punkten. */
  function auswerten(pruefung, antworten, bewertung) {
    var gesamt = 0, max = 0, falsch = [], erklProzent = {};
    var teile = pruefung.teile.map(function (t) {
      var liste = t.aufgaben.map(function (x) {
        var erreicht;
        if (x.item) {
          var sc = W.aufgaben.score(x.item, antworten[x.key]);
          erreicht = W.logic.punkteRunden(sc, x.punkte);
          if (sc < 1 - 1e-9) falsch.push(x.key);
        } else {
          var haken = bewertung[x.key] || [];
          erreicht = Math.min(x.punkte, haken.reduce(function (s, i) { return s + (x.erkl.punkte[i] ? x.erkl.punkte[i].p : 0); }, 0));
          erklProzent[x.key] = x.punkte ? erreicht / x.punkte : 0;
        }
        return { key: x.key, erreicht: erreicht, max: x.punkte, bauplatz: x.bauplatz };
      });
      var e = liste.reduce(function (s, x) { return s + x.erreicht; }, 0);
      var m = liste.reduce(function (s, x) { return s + x.max; }, 0);
      gesamt += e; max += m;
      return { name: t.name, punkte: e, max: m, aufgaben: liste };
    });
    return { punkte: gesamt, max: max, teile: teile, falsch: falsch, erklProzent: erklProzent };
  }

  function itemNachId(id) {
    var gef = null;
    bps().forEach(function (bp) {
      bp.hoftag.wissen.forEach(function (it) { if (it.id === id) gef = it; });
      (bp.hoftag.material || []).forEach(function (m) { m.items.forEach(function (it) { if (it.id === id) gef = it; }); });
    });
    return gef;
  }
  function erklNachId(id) {
    var gef = null;
    bps().forEach(function (bp) {
      (bp.hoftag.schreiben || []).forEach(function (e) { if (e.id === id) gef = e; });
      (bp.hoftag.material || []).forEach(function (m) { if (m.erkl && m.erkl.id === id) gef = m.erkl; });
    });
    return gef;
  }

  W.hoftag = { erzeugen: erzeugen, auswerten: auswerten, itemNachId: itemNachId, erklNachId: erklNachId, DAUER: DAUER, MAX: MAX };
})();
