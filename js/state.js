/* Fortschritt: nur lokal im Browser (localStorage, Schlüssel stein-auf-stein-v1). Kein Protokoll. */
(function () {
  'use strict';
  var W = (window.W = window.W || {});
  var KEY = 'stein-auf-stein-v1';
  var PREFIX = 'STEIN-AUF-STEIN:';

  function fresh() {
    return {
      v: 1, name: '', ton: false, begruesst: false, datum: '',
      items: {}, erkl: {}, entwurf: {}, karten: {}, schaeden: {}, orte: {}, repariert: 0, repariertIds: {}, gefeiert: {}, schatz: {},
      pruefung: { laeufe: [], best: 0, laufend: null, urkunde: null },
      geruechte: { best: 0 }
    };
  }

  function objekt(x) { return x !== null && typeof x === 'object' && !Array.isArray(x); }
  function isoOk(s) { return typeof s === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(s); }

  /** Gespeicherten Stand übernehmen; alles mit falschem Typ wird durch den Grundwert ersetzt. */
  function zusammen(d) {
    var f = fresh();
    Object.keys(f).forEach(function (k) {
      if (d[k] === undefined || k === 'pruefung' || k === 'geruechte') return;
      if (objekt(f[k]) ? objekt(d[k]) : typeof d[k] === typeof f[k]) f[k] = d[k];
    });
    if (f.datum && !isoOk(f.datum)) f.datum = '';
    var p = objekt(d.pruefung) ? d.pruefung : {};
    f.pruefung = {
      laeufe: Array.isArray(p.laeufe) ? p.laeufe.filter(function (x) { return objekt(x) && typeof x.punkte === 'number' && typeof x.max === 'number'; }) : [],
      best: typeof p.best === 'number' ? p.best : 0,
      laufend: objekt(p.laufend) && objekt(p.laufend.antworten) && typeof p.laufend.start === 'number' &&
        typeof p.laufend.dauerMin === 'number' && typeof p.laufend.seed === 'number' ? p.laufend : null,
      urkunde: isoOk(p.urkunde) ? p.urkunde : null
    };
    f.geruechte = { best: objekt(d.geruechte) && typeof d.geruechte.best === 'number' ? d.geruechte.best : 0 };
    return f;
  }

  var listeners = [];
  function emit() { listeners.forEach(function (fn) { try { fn(S.data); } catch (e) { /* weiter */ } }); }

  var S = (W.state = {
    data: fresh(),
    on: function (fn) { listeners.push(fn); },

    load: function () {
      var d = W.store.get(KEY, null);
      S.data = objekt(d) && d.v === 1 ? zusammen(d) : fresh();
      return S.data;
    },
    save: function () { W.store.set(KEY, S.data); emit(); },
    reset: function () { S.data = fresh(); W.store.remove(KEY); emit(); },

    setName: function (n) { S.data.name = String(n || '').trim().slice(0, 30); S.save(); },
    setDatum: function (iso) { S.data.datum = isoOk(iso) ? iso : ''; S.save(); },
    set: function (feld, wert) { S.data[feld] = wert; S.save(); },

    /** Ergebnis einer automatisch geprüften Aufgabe. Fehler werden zu Bauschäden (Rissen).
        ort: Bauplatz-ID, falls sie nicht aus der ID hervorgeht (Hoftag, Gerüchte). */
    itemErgebnis: function (id, richtig, ort) {
      var prev = S.data.items[id] || { ok: false, n: 0 };
      S.data.items[id] = { ok: prev.ok || !!richtig, n: prev.n + 1 };
      if (ort) S.data.orte[id] = ort;
      var behoben = false;
      if (!richtig) S.data.schaeden[id] = 0;
      else if (id in S.data.schaeden) {
        S.data.schaeden[id]++;
        if (S.data.schaeden[id] >= 2) { delete S.data.schaeden[id]; S.data.repariert++; S.data.repariertIds[id] = true; behoben = true; }
      }
      S.save();
      return { behoben: behoben };
    },

    /** Selbst bewertete Schreibaufgabe. Unter 60 % wird sie zum Riss, ab 80 % ist er repariert. */
    erklSpeichern: function (id, r, ort) {
      var prev = S.data.erkl[id] || { best: 0 };
      var p = Math.max(0, Math.min(1, +r.prozent || 0));
      S.data.erkl[id] = { text: r.text || '', haken: (r.haken || []).slice(), prozent: p, best: Math.max(prev.best || 0, p), frage: r.frage || prev.frage || null };
      delete S.data.entwurf[id];
      var k = 'e:' + id;
      if (ort) S.data.orte[k] = ort;
      if (p < W.logic.ERKL_OK - 1e-9) S.data.schaeden[k] = 0;
      else if (p >= 0.8 - 1e-9 && k in S.data.schaeden) { delete S.data.schaeden[k]; S.data.repariert++; S.data.repariertIds[k] = true; }
      S.save();
    },

    /** Entwurf bei jeder Eingabe sichern, ohne die Bewertung zu ändern. */
    erklEntwurf: function (id, text) { S.data.entwurf[id] = String(text || ''); W.store.set(KEY, S.data); },
    erklText: function (id) {
      if (S.data.entwurf[id] != null) return S.data.entwurf[id];
      return S.data.erkl[id] ? S.data.erkl[id].text || '' : '';
    },

    karteGesehen: function (bpId, idx) {
      var bisher = S.data.karten[bpId] == null ? -1 : S.data.karten[bpId];
      if (idx > bisher) { S.data.karten[bpId] = idx; S.save(); }
    },
    schadenListe: function () { return Object.keys(S.data.schaeden); },
    schadenEntfernen: function (id) { if (id in S.data.schaeden) { delete S.data.schaeden[id]; S.save(); } },

    /* Hoftag: Die laufende Probearbeit wird gespeichert und übersteht das Neuladen. */
    pruefungStarten: function (seed, dauerMin) {
      S.data.pruefung.laufend = { seed: seed, start: Date.now(), dauerMin: dauerMin, antworten: {}, abgegeben: false };
      S.save();
    },
    pruefungAntwort: function (key, wert) {
      var l = S.data.pruefung.laufend;
      if (!l) return;
      l.antworten[key] = wert;
      S.save();
    },
    pruefungLaufend: function () { return S.data.pruefung.laufend || null; },
    pruefungAbgeben: function () { var l = S.data.pruefung.laufend; if (l) { l.abgegeben = true; S.save(); } },
    pruefungBeenden: function (e) {
      var q = e.max ? e.punkte / e.max : 0;
      S.data.pruefung.laeufe.push({ punkte: e.punkte, max: e.max, datum: new Date().toISOString() });
      while (S.data.pruefung.laeufe.length > 20) S.data.pruefung.laeufe.shift();
      S.data.pruefung.best = Math.max(S.data.pruefung.best || 0, q);
      if (q >= 0.8 - 1e-9 && !S.data.pruefung.urkunde) S.data.pruefung.urkunde = W.logic.heuteISO();
      S.data.pruefung.laufend = null;
      S.save();
    },
    pruefungVerwerfen: function () { S.data.pruefung.laufend = null; S.save(); },

    recordGeruechte: function (punkte) {
      var neu = punkte > (S.data.geruechte.best || 0);
      if (neu) S.data.geruechte.best = punkte;
      S.save();
      return neu;
    },

    /** Schatz öffnen: kostet Pfennige, einmal bezahlt bleibt er offen. */
    schatzOeffnen: function (id, bauplaetze) {
      if (S.data.schatz[id]) return true;
      var s = (W.schatz || []).filter(function (x) { return x.id === id; })[0];
      if (!s || W.logic.pfennige(S.data, bauplaetze).stand < s.kosten) return false;
      S.data.schatz[id] = true;
      S.save();
      return true;
    },

    /** Richtfest feiern: true beim ersten Mal, danach false. */
    feiern: function (id) {
      if (S.data.gefeiert[id]) return false;
      S.data.gefeiert[id] = true;
      S.save();
      return true;
    },

    /** Fortschritt als Text, um ihn auf ein anderes Gerät zu übertragen. */
    exportCode: function () { return PREFIX + JSON.stringify(S.data); },
    /** Stand aus einem Code lesen, ohne ihn zu übernehmen (null, wenn ungültig). */
    codeLesen: function (code) {
      var t = String(code || '').trim();
      if (t.indexOf(PREFIX) !== 0) return null;
      try {
        var d = JSON.parse(t.slice(PREFIX.length));
        return objekt(d) && d.v === 1 ? zusammen(d) : null;
      } catch (e) { return null; }
    },
    /** Code übernehmen. Der bisherige Stand wird vorher unter stein-auf-stein-v1-vorher gesichert. */
    importCode: function (code) {
      var d = S.codeLesen(code);
      if (!d) return false;
      W.store.set(KEY + '-vorher', S.data);
      S.data = d;
      S.save();
      return true;
    }
  });
})();
