/* Der Hoftag: Start, Probearbeit mit Timer (übersteht Neuladen), Abgabe, Selbstbewertung, Auswertung, Urkunde. */
(function () {
  'use strict';
  var W = (window.W = window.W || {});
  var h = function () { return W.h.apply(null, arguments); };
  var timer = null;

  function stoppeTimer() { if (timer) { clearInterval(timer); timer = null; } }
  function restSekunden(l) { return Math.round(l.dauerMin * 60 - (Date.now() - l.start) / 1000); }
  function mmss(s) { s = Math.max(0, s); return String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0'); }
  function pText(p) { return String(p).replace('.', ','); }
  function karte() { return W.ansichten.karte.apply(null, arguments); }
  function ohneQuelle(x) { return Object.assign({}, x, { quelle: null }); }
  function bpTitel(id) { var b = W.ansichten.bpNachId(id); return b ? b.titel : id; }

  /* ---------- Siegel und Urkunde ---------- */
  function siegel() {
    return W.frag('<svg class="siegel" viewBox="0 0 100 100" aria-hidden="true">' +
      '<path d="M50 4 C62 8 70 2 78 12 C88 16 90 26 94 36 C98 48 92 58 96 68 C92 80 82 84 74 92 C62 96 54 100 44 96 C32 98 24 92 16 84 C8 76 6 66 4 56 C2 44 8 36 6 26 C12 16 22 12 30 6 C38 2 44 6 50 4Z" fill="#a3261a"/>' +
      '<circle cx="50" cy="50" r="34" fill="none" stroke="#7a1a10" stroke-width="2"/>' +
      '<circle cx="50" cy="50" r="28" fill="none" stroke="#7a1a10" stroke-width="1"/>' +
      '<path d="M36 62 V44 h4 v-5 h4 v5 h4 v-9 h4 v9 h4 v-5 h4 v5 h4 v18 Z" fill="#7a1a10"/>' +
      '<path d="M47 62 v-6 a3 3 0 0 1 6 0 v6 z" fill="#a3261a"/></svg>');
  }

  function urkunde(datum, punkte, max) {
    var name = W.state.data.name || 'Die Baumeisterin';
    return h('div', { class: 'urkunde' },
      h('h2', null, 'Urkunde'),
      h('p', { class: 'urkunde__text' }, 'Wir, der König, tun kund, dass'),
      h('span', { class: 'urkunde__name' }, name),
      h('p', { class: 'urkunde__text' }, 'das Tal Stein auf Stein erbaut und den Hoftag bestanden hat' + (punkte != null ? ' mit ' + pText(punkte) + ' von ' + max + ' Punkten' : '') + '.'),
      h('p', { class: 'urkunde__text' }, 'Hiermit ernennen wir sie zur Baumeisterin des Königs.'),
      h('p', { class: 'hinweis-klein' }, 'Gegeben am ' + W.ansichten.datumText(datum) + ' ' + String(datum).slice(0, 4)),
      siegel());
  }

  /* ---------- Start ---------- */
  function startseite(host) {
    var d = W.state.data;
    var laeufe = (d.pruefung.laeufe || []).slice(-6).reverse();
    function starten() {
      if (!window.confirm('Hoftag starten? Die Uhr läuft sofort: 45 Minuten.')) return;
      W.state.pruefungStarten(Math.floor(Math.random() * 1e9) + 1, W.hoftag.DAUER);
      location.hash = '#/hoftag/laeuft';
    }
    var fertig = W.ansichten.bauplaetze().filter(function (bp) { return W.ansichten.status(bp).fertig; }).length;
    host.appendChild(h('div', { class: 'seite' },
      h('h1', null, 'Der Hoftag'),
      W.ansichten.chronist(fertig < 7 ? 'Der König kommt ins Tal und prüft dich. Du kannst jederzeit üben gehen, auch wenn noch nicht alles steht.' : 'Alle Gebäude stehen. Der König ist da. Zeig ihm, was du kannst.'),
      karte('', h('p', null, h('strong', null, 'Probearbeit: 45 Minuten, 40 Punkte')),
        h('ul', null,
          h('li', null, 'Teil A · Wissen (14 P.): Begriffe, Zuordnen, Zeitleiste'),
          h('li', null, 'Teil B · Material (10 P.): eine Quelle oder ein Schaubild auswerten'),
          h('li', null, 'Teil C · Schreiben (16 P.): eine Erklär- und eine Urteilsaufgabe')),
        h('p', { class: 'hinweis-klein' }, 'Aufgaben zum Antippen prüft die Seite selbst. Die Schreibteile schreibst du am besten auf Papier und bewertest sie danach mit dem Erwartungshorizont. Ab 80 % bekommst du die Urkunde. Die Note ist ein Richtwert, deine Lehrkraft kann anders werten.'),
        h('div', { class: 'aktionen' }, h('button', { type: 'button', class: 'btn btn--haupt', onclick: starten }, 'Hoftag beginnen'))),
      d.pruefung.urkunde ? urkunde(d.pruefung.urkunde, null, null) : null,
      d.pruefung.urkunde ? h('div', { class: 'aktionen nicht-drucken' }, h('button', { type: 'button', class: 'btn', onclick: function () { window.print(); } }, 'Urkunde drucken')) : null,
      laeufe.length ? h('div', null, h('h2', { class: 'zwischen' }, 'Letzte Hoftage'),
        h('ul', { class: 'plan-ziele' }, laeufe.map(function (l) {
          var p = l.max ? 100 * l.punkte / l.max : 0;
          return h('li', { class: 'hinweis-klein' }, pText(l.punkte) + ' / ' + l.max + ' P. · ' + Math.round(p) + ' % · Note ' + W.logic.note(p));
        }))) : null));
  }

  function fortsetzenFrage(host, l) {
    var r = restSekunden(l);
    host.appendChild(h('div', { class: 'seite' },
      h('h1', null, 'Der Hoftag läuft'),
      karte('', h('p', null, 'Restzeit ', h('strong', { class: 'mono' }, mmss(r))),
        h('p', { class: 'hinweis-klein' }, 'Deine Antworten sind gespeichert.'),
        h('div', { class: 'aktionen aktionen--zwei' },
          h('button', { type: 'button', class: 'btn btn--gefahr', onclick: function () {
            if (window.confirm('Hoftag abbrechen? Die Antworten gehen verloren.')) { W.state.pruefungVerwerfen(); W.app.zeige(); }
          } }, 'Abbrechen'),
          h('button', { type: 'button', class: 'btn btn--haupt', onclick: function () { location.hash = '#/hoftag/laeuft'; } }, 'Fortsetzen')))));
  }

  /* ---------- Probearbeit ---------- */
  function pruefung(host, l) {
    var antworten = l.antworten || {};
    var p = W.hoftag.erzeugen(l.seed);
    var uhr = h('span', { class: 'mono pruef-uhr' }, mmss(restSekunden(l)));
    function abgeben(auto) {
      stoppeTimer();
      W.state.pruefungAbgeben();
      if (auto) W.toast('Die Zeit ist um. Abgegeben.');
      location.hash = '#/hoftag/bewerten';
    }
    var seite = h('div', { class: 'seite' });
    seite.appendChild(h('div', { class: 'pruef-leiste' }, h('span', { class: 'hinweis-klein' }, 'Restzeit'), uhr,
      h('button', { type: 'button', class: 'btn btn--haupt btn--klein', onclick: function () { if (window.confirm('Jetzt abgeben?')) abgeben(false); } }, 'Abgeben')));
    seite.appendChild(h('h1', null, 'Der Hoftag'));
    var nr = 0;
    p.teile.forEach(function (t, ti) {
      var summe = t.aufgaben.reduce(function (s, x) { return s + x.punkte; }, 0);
      seite.appendChild(h('h2', { class: 'zwischen pruef-teil' }, t.name + ' (' + summe + ' P.)'));
      if (ti === 1) {
        if (t.text) seite.appendChild(h('p', { html: t.text }));
        if (t.quelle && W.quelleAnzeigen) seite.appendChild(W.quelleAnzeigen(t.quelle));
        if (t.abb) seite.appendChild(h('figure', { class: 'abb' }, W.abb.zeichne(t.abb, t.abbOpts || { beschriftet: true })));
      }
      t.aufgaben.forEach(function (x) {
        nr++;
        var kopf = h('p', { class: 'pruef-aufgabe__kopf' }, h('span', null, 'Aufgabe ' + nr), h('span', null, pText(x.punkte) + ' P.'));
        if (x.item) {
          var it = ti === 1 ? ohneQuelle(x.item) : x.item;
          var r = W.aufgaben.render(it, { wert: antworten[x.key] });
          var speichern = function () { setTimeout(function () { W.state.pruefungAntwort(x.key, r.antwort()); }, 0); };
          ['input', 'change', 'click'].forEach(function (ev) { r.el.addEventListener(ev, speichern); });
          seite.appendChild(h('section', { class: 'pruef-aufgabe' }, kopf, r.el));
        } else {
          var e = ti === 1 ? ohneQuelle(x.erkl) : x.erkl;
          var ta = h('textarea', { class: 'erkl__text', rows: '6', placeholder: 'Antwort tippen oder auf Papier schreiben', lang: 'de', 'aria-label': 'Antwort zu Aufgabe ' + nr });
          ta.value = antworten[x.key] || '';
          ta.addEventListener('input', function () { W.state.pruefungAntwort(x.key, ta.value); });
          seite.appendChild(h('section', { class: 'pruef-aufgabe' }, kopf, h('div', { class: 'erkl' }, W.schreiben.kopf(e, false), ta)));
        }
      });
    });
    seite.appendChild(h('div', { class: 'aktionen aktionen--zwei' },
      h('button', { type: 'button', class: 'btn btn--gefahr', onclick: function () {
        if (window.confirm('Hoftag abbrechen? Die Antworten gehen verloren.')) { stoppeTimer(); W.state.pruefungVerwerfen(); location.hash = '#/hoftag'; }
      } }, 'Abbrechen'),
      h('button', { type: 'button', class: 'btn btn--haupt', onclick: function () { if (window.confirm('Jetzt abgeben?')) abgeben(false); } }, 'Abgeben')));
    host.appendChild(seite);
    stoppeTimer();
    timer = setInterval(function () {
      if (!document.body.contains(uhr)) { stoppeTimer(); return; }
      var r = restSekunden(l);
      uhr.textContent = mmss(r);
      uhr.classList.toggle('pruef-uhr--knapp', r <= 300);
      if (r <= 0) abgeben(true);
    }, 1000);
  }

  /* ---------- Selbstbewertung ---------- */
  function bewerten(host, l) {
    var antworten = l.antworten || {};
    var p = W.hoftag.erzeugen(l.seed);
    var seite = h('div', { class: 'seite' }, h('h1', null, 'Schreibteile bewerten'),
      h('p', { class: 'hinweis-klein' }, 'Lies deine Antwort (oder dein Blatt), vergleiche mit dem Erwartungshorizont und hake ehrlich ab, was sinngemäß und richtig drin ist.'));
    p.teile.forEach(function (t) {
      t.aufgaben.filter(function (x) { return x.erkl; }).forEach(function (x) {
        var haken = (antworten['bew:' + x.key] || []).slice();
        var anzeige = h('span', { class: 'mono' });
        function neu() {
          var s = Math.min(x.punkte, haken.reduce(function (a, i) { return a + x.erkl.punkte[i].p; }, 0));
          anzeige.textContent = pText(s) + ' / ' + pText(x.punkte);
          W.state.pruefungAntwort('bew:' + x.key, haken.slice());
        }
        var text = antworten[x.key];
        seite.appendChild(h('section', { class: 'erkl pruef-aufgabe' },
          h('p', { class: 'horizont__titel' }, t.name, anzeige),
          h('div', { class: 'frage', html: x.erkl.frage }),
          text && String(text).trim() ? h('blockquote', { class: 'erkl__eigen' }, text) : h('p', { class: 'hinweis-klein' }, '(auf Papier geschrieben)'),
          W.schreiben.horizontListe(x.erkl, haken, neu),
          h('details', { class: 'muster' }, h('summary', null, 'Musterantwort'), h('div', { html: x.erkl.muster }))));
        anzeige.textContent = pText(Math.min(x.punkte, haken.reduce(function (a, i) { return a + x.erkl.punkte[i].p; }, 0))) + ' / ' + pText(x.punkte);
      });
    });
    seite.appendChild(h('div', { class: 'aktionen' }, h('button', { type: 'button', class: 'btn btn--haupt', onclick: function () { auswerten(host, l); } }, 'Auswerten')));
    host.appendChild(seite);
  }

  /* ---------- Auswertung ---------- */
  function auswerten(host, l) {
    var antworten = l.antworten || {};
    var p = W.hoftag.erzeugen(l.seed);
    var bewertung = {};
    Object.keys(antworten).forEach(function (k) { if (k.indexOf('bew:') === 0) bewertung[k.slice(4)] = antworten[k]; });
    var e = W.hoftag.auswerten(p, antworten, bewertung);
    var hatteUrkunde = !!W.state.data.pruefung.urkunde;
    // Fehler werden zu Rissen an den Gebäuden
    var orte = {};
    p.teile.forEach(function (t) { t.aufgaben.forEach(function (x) { orte[x.key] = x.bauplatz; }); });
    e.falsch.forEach(function (key) { W.state.itemErgebnis(key, false, orte[key]); });
    Object.keys(e.erklProzent).forEach(function (key) {
      if (e.erklProzent[key] < W.logic.ERKL_OK - 1e-9) {
        var erkl = W.hoftag.erklNachId(key);
        W.state.erklSpeichern(key, { text: antworten[key] || '', haken: bewertung[key] || [], prozent: e.erklProzent[key], frage: erkl ? erkl.frage : null }, orte[key]);
      }
    });
    W.state.pruefungBeenden({ punkte: e.punkte, max: e.max });
    var prozent = e.max ? 100 * e.punkte / e.max : 0;
    var neuUrkunde = !hatteUrkunde && W.state.data.pruefung.urkunde;
    host.innerHTML = '';
    var seite = h('div', { class: 'seite' }, h('h1', null, 'Auswertung'),
      karte('auswertung', h('p', { class: 'ergebnis' }, pText(e.punkte) + ' / ' + e.max),
        h('p', { class: 'note' }, String(W.logic.note(prozent))),
        h('p', null, Math.round(prozent) + ' % · Note ' + W.logic.note(prozent) + ' (Richtwert)'),
        h('p', { class: 'hinweis-klein' }, 'Schlüssel: ab 87,5 % Note 1, ab 72,5 % Note 2, ab 57,5 % Note 3, ab 45 % Note 4, ab 20 % Note 5. Deine Lehrkraft kann anders werten.')));
    if (neuUrkunde) {
      seite.appendChild(h('div', { class: 'tal' }, W.tal.zeichne(W.ansichten.statusListe(), { vollendet: true })));
      seite.appendChild(urkunde(W.state.data.pruefung.urkunde, e.punkte, e.max));
      seite.appendChild(h('div', { class: 'aktionen nicht-drucken' }, h('button', { type: 'button', class: 'btn', onclick: function () { window.print(); } }, 'Urkunde drucken')));
      if (W.ton) W.ton.glocke();
    } else if (prozent < 80) {
      seite.appendChild(h('p', { class: 'hinweis-klein' }, 'Ab 80 % gibt es die Urkunde. Du schaffst das: erst die Risse reparieren, dann noch ein Hoftag.'));
    }
    // je Teil, mit Bauplätzen zum Wiederholen
    var schwach = {};
    e.teile.forEach(function (t) {
      seite.appendChild(h('h2', { class: 'zwischen' }, t.name + ' · ' + pText(t.punkte) + ' / ' + t.max));
      t.aufgaben.forEach(function (x) { if (x.erreicht < x.max * 0.75) schwach[x.bauplatz] = true; });
    });
    var ids = Object.keys(schwach);
    if (ids.length) seite.appendChild(karte('', h('p', null, h('strong', null, 'Wiederholen: '), ids.map(function (id, i) { return [i ? ' · ' : '', h('a', { href: '#/bau/' + id }, bpTitel(id))]; })),
      h('p', { class: 'hinweis-klein' }, 'Deine Fehler sind jetzt als Risse an den Gebäuden markiert.')));
    // Lösungen
    var loes = h('div');
    var nr = 0;
    p.teile.forEach(function (t, ti) {
      t.aufgaben.forEach(function (x) {
        nr++;
        if (!x.item) return;
        var it = ti === 1 ? ohneQuelle(x.item) : x.item;
        var r = W.aufgaben.render(it, { wert: antworten[x.key] });
        r.zeige();
        var ok = W.aufgaben.richtig(x.item, antworten[x.key]);
        loes.appendChild(h('div', { class: 'pruef-aufgabe' },
          h('p', { class: 'pruef-aufgabe__kopf' }, h('span', null, 'Aufgabe ' + nr), h('span', null, ok ? '✓' : 'Richtig: ' + W.aufgaben.loesungText(x.item))), r.el));
      });
    });
    seite.appendChild(h('details', { class: 'muster' }, h('summary', null, 'Lösungen der Aufgaben ansehen'), loes));
    seite.appendChild(h('div', { class: 'aktionen' }, h('a', { href: '#/', class: 'btn' }, 'Ins Tal'), h('a', { href: '#/hoftag', class: 'btn btn--haupt' }, 'Neuer Hoftag')));
    host.appendChild(seite);
    window.scrollTo(0, 0);
  }

  W.hoftagAnsicht = function (host, args) {
    stoppeTimer();
    var l = W.state.pruefungLaufend();
    var modus = args && args[0];
    if (!l) { if (modus) { location.hash = '#/hoftag'; return; } startseite(host); return; }
    if (l.abgegeben) { bewerten(host, l); return; }
    if (restSekunden(l) <= 0) { W.state.pruefungAbgeben(); bewerten(host, W.state.pruefungLaufend()); return; }
    if (modus === 'laeuft') pruefung(host, l); else fortsetzenFrage(host, l);
  };
  W.hoftagAnsicht.restSekunden = restSekunden;
  W.hoftagAnsicht.urkunde = urkunde;
})();
