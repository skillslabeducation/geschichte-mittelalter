/* Ansichten: Tal, Bauplatz (Verstehen, Üben, Schreiben), Bauschäden, Plan, Einstellungen, Begrüßung. */
(function () {
  'use strict';
  var W = (window.W = window.W || {});
  var h = function () { return W.h.apply(null, arguments); };

  /* ---------- Daten-Hilfen ---------- */

  function bauplaetze() { return (W.bauplaetze || []).slice().sort(function (a, b) { return a.nr - b.nr; }); }
  function bpNachId(id) { return bauplaetze().filter(function (b) { return b.id === id; })[0]; }
  function status(bp) { return W.logic.bauplatzStatus(bp, W.state.data); }
  function statusListe() {
    return bauplaetze().map(function (bp) { var s = status(bp); return { id: bp.id, nr: bp.nr, titel: bp.titel, stufe: s.stufe, risse: s.risse, fertig: s.fertig }; });
  }
  function fertigAnzahl() { return bauplaetze().filter(function (bp) { return status(bp).fertig; }).length; }
  function pfennige() { return W.logic.pfennige(W.state.data, bauplaetze()); }

  /** Ein Gerücht als spielbare Aufgabe (für die Reparatur von Rissen). */
  function geruechtItem(g, bp) {
    return { id: g.id, typ: 'wahl', fest: true, frage: 'Stimmt dieses Gerücht?<br>„' + g.aussage + '“', optionen: ['Stimmt.', 'Erfunden.'], richtig: g.stimmt ? 0 : 1, erkl: g.erkl, bauplatz: bp.id };
  }

  function itemNachId(id) {
    var gef = null;
    bauplaetze().forEach(function (bp) {
      var alle = (bp.ueben || []).concat((bp.hoftag && bp.hoftag.wissen) || []);
      ((bp.hoftag && bp.hoftag.material) || []).forEach(function (m) { alle = alle.concat(m.items || []); });
      alle.forEach(function (it) { if (it.id === id) gef = it; });
      (bp.geruechte || []).forEach(function (g) { if (g.id === id) gef = geruechtItem(g, bp); });
    });
    if (!gef && W.zeitleisteGesamt && W.zeitleisteGesamt.id === id) gef = W.zeitleisteGesamt;
    return gef;
  }
  function erklNachId(id) {
    var gef = null;
    bauplaetze().forEach(function (bp) {
      var alle = (bp.erklaeren || []).concat((bp.hoftag && bp.hoftag.schreiben) || []);
      ((bp.hoftag && bp.hoftag.material) || []).forEach(function (m) { if (m.erkl) alle.push(m.erkl); });
      alle.forEach(function (e) { if (e.id === id) gef = { erkl: e, bp: bp }; });
    });
    return gef;
  }
  function bpVonId(id) {
    var k = id.indexOf('e:') === 0 ? id.slice(2) : id;
    return bpNachId(k.split('-')[0]) || null;
  }

  /** Bauschäden, die sich einer Aufgabe zuordnen lassen. Verwaiste Einträge werden still entfernt. */
  function schaeden() {
    var out = [];
    W.state.schadenListe().forEach(function (k) {
      if (k.indexOf('e:') === 0) { var e = erklNachId(k.slice(2)); if (e) out.push({ key: k, erkl: e.erkl, bp: e.bp }); else W.state.schadenEntfernen(k); }
      else { var it = itemNachId(k); if (it) out.push({ key: k, item: it, bp: bpVonId(k) }); else W.state.schadenEntfernen(k); }
    });
    return out;
  }
  function schadenAnzahl() { return W.state.schadenListe().length; }

  function rang() {
    var n = fertigAnzahl();
    if (W.logic.vollendet(W.state.data, bauplaetze())) return 'Baumeisterin des Königs';
    if (n >= 6) return 'Meisterin';
    if (n >= 3) return 'Gesellin';
    return 'Lehrling';
  }

  /* ---------- Bausteine ---------- */

  function karte(cls) { var args = Array.prototype.slice.call(arguments, 1); return h.apply(null, ['section', { class: 'karte ' + (cls || '') }].concat(args)); }
  function link(href, text, cls) { return h('a', { href: href, class: cls || '' }, text); }
  function chronist(text) { return h('div', { class: 'chronist' }, h('span', { class: 'chronist__wer' }, 'Der Chronist'), h('span', { html: text })); }
  function kuerzen(t, n) { if (t.length <= n) return t; var s = t.slice(0, n); var i = s.lastIndexOf(' '); return (i > 40 ? s.slice(0, i) : s) + ' …'; }
  function prozent(x) { return Math.round(100 * x) + ' %'; }
  function datumText(iso) {
    var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso || '');
    if (!m) return iso || '';
    var tage = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];
    var d = new Date(+m[1], +m[2] - 1, +m[3]);
    return tage[d.getDay()] + ', ' + (+m[3]) + '.' + (+m[2]) + '.';
  }
  function stufenPille(s) {
    if (s.fertig) return h('span', { class: 'pille pille--fertig' }, '✓ fertig');
    if (s.stufe === 0) return h('span', { class: 'pille' }, 'abgesteckt');
    return h('span', { class: 'pille pille--bau' }, prozent(s.p));
  }

  var ZIEL_TEXT = { hoftag: 'Hoftag (Probearbeit)', schaeden: 'Bauschäden reparieren', geruechte: 'Markt-Gerüchte', wachstafel: 'Wachstafel lesen' };
  function zielLink(z) {
    var bp = bpNachId(z);
    if (bp) return link('#/bau/' + bp.id, bp.nr + ' ' + bp.titel + ' (' + bp.thema + ')');
    return link('#/' + z, ZIEL_TEXT[z] || z);
  }

  function naechster() {
    var offen = bauplaetze().filter(function (bp) { return !status(bp).fertig; });
    return offen[0] || null;
  }

  /* ---------- Lexikon (antippbare Fachbegriffe) ---------- */

  function lexikonZu() { var l = document.querySelector('.lexikon'); if (l) l.remove(); }
  function lexikonZeigen(begriff) {
    lexikonZu();
    var e = W.lexikonEintrag(begriff);
    if (!e) return;
    var box = h('div', { class: 'lexikon', role: 'dialog', 'aria-label': 'Lexikon: ' + e.begriff },
      h('div', { class: 'lexikon__kopf' }, h('p', { class: 'lexikon__begriff' }, e.begriff),
        h('button', { type: 'button', class: 'lexikon__zu', 'aria-label': 'Schließen', onclick: lexikonZu }, '×')),
      h('p', { html: e.text }));
    document.body.appendChild(box);
    var zu = box.querySelector('.lexikon__zu');
    if (zu) zu.focus();
  }
  function dfnAktivieren(root) {
    Array.prototype.forEach.call(root.querySelectorAll('dfn'), function (d) {
      if (!W.lexikonEintrag(d.textContent)) return;
      d.setAttribute('tabindex', '0');
      d.setAttribute('role', 'button');
      d.setAttribute('aria-label', d.textContent + ': im Lexikon nachschlagen');
      d.addEventListener('click', function () { lexikonZeigen(d.textContent); });
      d.addEventListener('keydown', function (ev) { if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); lexikonZeigen(d.textContent); } });
    });
  }
  if (typeof document !== 'undefined' && document.addEventListener) {
    document.addEventListener('keydown', function (ev) { if (ev.key === 'Escape') lexikonZu(); });
    document.addEventListener('click', function (ev) {
      var t = ev.target;
      if (!document.querySelector('.lexikon') || !t || !t.closest) return;
      if (!t.closest('.lexikon') && !t.closest('dfn')) lexikonZu();
    });
    window.addEventListener('hashchange', lexikonZu);
  }

  /* ---------- Richtfest-Wächter ---------- */

  /** Neu fertige Bauplätze feiern (Toast und Glocke), jeden nur einmal. Läuft nach jeder Änderung des Stands. */
  function richtfestPruefen() {
    bauplaetze().forEach(function (bp) {
      if (W.state.data.gefeiert[bp.id] || !status(bp).fertig) return;
      if (W.state.feiern(bp.id)) { W.toast('Richtfest! ' + bp.titel + ' steht.', 'ok'); if (W.ton) W.ton.glocke(); }
    });
  }
  /** Beim Start: schon fertige Bauplätze still als gefeiert merken (z. B. nach einem Import). */
  function stillFeiern() {
    var neu = false;
    bauplaetze().forEach(function (bp) { if (!W.state.data.gefeiert[bp.id] && status(bp).fertig) { W.state.data.gefeiert[bp.id] = true; neu = true; } });
    if (neu) W.state.save();
  }

  /* ---------- Tal ---------- */

  function tal(host) {
    var d = W.state.data;
    var liste = statusListe();
    var seite = h('div', { class: 'seite' });
    var vollendet = W.logic.vollendet(d, bauplaetze());
    seite.appendChild(h('h1', { class: 'sr-only' }, 'Das Tal'));
    seite.appendChild(h('div', { class: 'tal' }, W.tal.zeichne(liste, { vollendet: vollendet })));
    var n = fertigAnzahl();
    var nx = naechster();
    var angefangen = liste.some(function (s) { return s.stufe > 0; });
    seite.appendChild(chronist(n === 0 && !angefangen ? 'Ein leeres Tal, sieben abgesteckte Bauplätze. Jedes Gebäude steht erst, wenn du sein Thema kannst. Fang bei der Königspfalz an.'
      : n < 7 ? (n ? n + ' von 7 Bauplätzen stehen. ' : 'Die ersten Mauern wachsen. ') + (nx ? 'Als Nächstes: ' + nx.titel + ' (' + Math.round(100 * status(nx).p) + ' %).' : '')
        : vollendet ? 'Das Tal ist vollendet. Der König war zufrieden.' : 'Alle sieben Gebäude stehen. Jetzt fehlt nur noch der Hoftag.'));

    var t = W.logic.tageBis(W.logic.heuteISO(), d.datum);
    if (d.datum && t >= 0) {
      seite.appendChild(karte('', h('a', { href: '#/plan', class: 'countdown', style: { textDecoration: 'none', color: 'inherit' } },
        h('span', { class: 'countdown__zahl' }, t === 0 ? 'heute' : String(t)),
        h('span', null, h('p', { class: 'countdown__titel' }, t === 0 ? 'Heute ist die Arbeit.' : t === 1 ? 'Noch 1 Tag bis zur Arbeit' : 'Noch ' + t + ' Tage bis zur Arbeit'),
          h('span', { class: 'hinweis-klein' }, 'Zum Lernplan')))));
    } else if (!d.datum) {
      seite.appendChild(h('p', { class: 'hinweis-klein' }, 'Tipp: Trag im ', link('#/plan', 'Plan'), ' das Datum der Arbeit ein, dann bekommst du einen Lernplan.'));
    }

    seite.appendChild(h('h2', { class: 'zwischen' }, 'Bauplätze'));
    var next = naechster();
    seite.appendChild(h('ul', { class: 'bauliste' }, bauplaetze().map(function (bp) {
      var s = status(bp);
      return h('li', null, h('a', { href: '#/bau/' + bp.id, class: 'bau' + (s.fertig ? ' bau--fertig' : '') + (next && next.id === bp.id ? ' bau--next' : '') },
        h('span', { class: 'bau__nr' }, String(bp.nr)),
        h('span', { class: 'bau__mitte' }, h('span', { class: 'bau__titel' }, bp.titel), h('span', { class: 'bau__thema' }, bp.thema + ' · ' + bp.zeit),
          s.fertig ? null : h('span', { class: 'balken' }, h('span', { style: { width: Math.round(100 * s.p) + '%' } }))),
        h('span', { class: 'bau__rechts' }, stufenPille(s), s.risse ? h('span', { class: 'pille pille--riss' }, s.risse + (s.risse === 1 ? ' Riss' : ' Risse')) : null)));
    })));

    var sch = schadenAnzahl();
    seite.appendChild(h('div', { class: 'kacheln' },
      h('a', { href: '#/schaeden', class: 'kachel' + (sch ? ' kachel--rot' : '') }, h('span', { class: 'kachel__titel' }, 'Bauschäden'), sch ? sch + (sch === 1 ? ' Riss reparieren' : ' Risse reparieren') : 'Keine Risse'),
      h('a', { href: '#/hoftag', class: 'kachel kachel--gold' }, h('span', { class: 'kachel__titel' }, 'Der Hoftag'), d.pruefung.urkunde ? 'Urkunde erhalten' : 'Probearbeit, 45 Minuten'),
      h('a', { href: '#/geruechte', class: 'kachel' }, h('span', { class: 'kachel__titel' }, 'Markt-Gerüchte'), d.geruechte.best ? 'Bestwert ' + d.geruechte.best : '60 Sekunden: stimmt oder erfunden?'),
      h('a', { href: '#/zeitleiste', class: 'kachel' }, h('span', { class: 'kachel__titel' }, 'Zeitleiste'), 'Alles an seinen Platz'),
      h('a', { href: '#/schatz', class: 'kachel' }, h('span', { class: 'kachel__titel' }, 'Schatzkammer'), pfennige().stand + ' Pfennige'),
      h('a', { href: '#/wachstafel', class: 'kachel' }, h('span', { class: 'kachel__titel' }, 'Wachstafel'), 'Spickzettel zum Drucken')));
    host.appendChild(seite);
  }

  /* ---------- Bauplatz ---------- */

  var INITIAL_FARBEN = ['', 'initiale--blau', 'initiale--gruen'];

  function bauplatz(host, id, tab) {
    var bp = bpNachId(id);
    if (!bp) { location.hash = '#/'; return; }
    tab = tab || 'verstehen';
    var seite = h('div', { class: 'seite' });
    seite.appendChild(link('#/', '← Zurück ins Tal', 'zurueck'));
    seite.appendChild(h('header', { class: 'bp__kopf' },
      h('span', { class: 'initiale ' + INITIAL_FARBEN[bp.nr % 3], 'aria-hidden': 'true' }, bp.titel.charAt(0)),
      h('p', { class: 'bp__meta' }, 'Bauplatz ' + bp.nr + ' · ' + bp.zeit + ' · Buch ' + bp.buch),
      h('h1', { class: 'bp__titel' }, bp.titel),
      h('p', { class: 'bp__meta' }, bp.thema)));
    seite.appendChild(h('nav', { class: 'tabs', 'aria-label': 'Bereiche' }, [['verstehen', 'Verstehen'], ['ueben', 'Üben'], ['schreiben', 'Schreiben']].map(function (t) {
      return h('a', { href: '#/bau/' + bp.id + '/' + t[0], class: 'reiter' + (tab === t[0] ? ' reiter--an' : ''), 'aria-current': tab === t[0] ? 'page' : null }, t[1]);
    })));
    var bereich = h('div', { class: 'bereich' });
    seite.appendChild(bereich);
    var fussnote = h('div');
    seite.appendChild(fussnote);
    host.appendChild(seite);

    function fuss() {
      fussnote.innerHTML = '';
      var s = status(bp);
      if (s.fertig) fussnote.appendChild(karte('richtfest', h('p', null, h('strong', null, 'Richtfest!'), ' ' + bp.titel + ' steht im Tal.'),
        s.risse ? h('p', { class: 'hinweis-klein' }, 'Noch ' + s.risse + (s.risse === 1 ? ' Riss' : ' Risse') + ' in den ', link('#/schaeden', 'Bauschäden'), '.') : null));
      else fussnote.appendChild(h('div', { class: 'fehlt' }, h('p', { class: 'fehlt__titel' }, 'Bis zum Richtfest fehlt noch:'), h('ul', null, s.fehlt.map(function (f) { return h('li', null, f); }))));
      richtfestPruefen();
    }

    if (tab === 'verstehen') verstehen(bp, bereich, fuss);
    else if (tab === 'ueben') ueben(bp, bereich, fuss);
    else schreibenTab(bp, bereich, fuss);
    fuss();
  }

  function verstehen(bp, host, fuss) {
    var gesehen = W.state.data.karten[bp.id];
    var i = 0;
    function zeige() {
      host.innerHTML = '';
      var k = bp.karten[i];
      W.state.karteGesehen(bp.id, i);
      if (i === 0) {
        host.appendChild(chronist(bp.chronist));
        host.appendChild(karte('leitfrage', h('p', { class: 'leitfrage__titel' }, 'Leitfrage'), h('p', { html: bp.leitfrage })));
      }
      var text = h('div', { class: 'wissen__text', html: k.text });
      var box = h('article', { class: 'wissen' },
        h('div', { class: 'wissen__kopf' }, h('span', null, 'Karte ' + (i + 1) + ' von ' + bp.karten.length), k.zusatz ? h('span', { class: 'tag tag--zusatz' }, 'Zusatz') : null),
        h('h2', { html: k.titel }),
        k.quelle && W.quelleAnzeigen ? W.quelleAnzeigen(k.quelle) : null,
        k.abb ? h('figure', { class: 'abb' }, W.abb.zeichne(k.abb, k.abbOpts || { beschriftet: true })) : null,
        text,
        h('div', { class: 'merk' }, h('strong', null, 'Merke'), h('p', { html: k.merk })),
        k.achtung ? h('div', { class: 'achtung', html: k.achtung }) : null);
      dfnAktivieren(box);
      host.appendChild(box);
      var letzte = i === bp.karten.length - 1;
      host.appendChild(h('div', { class: 'karten-nav' },
        h('button', { type: 'button', class: 'btn', disabled: i === 0, onclick: function () { i--; zeige(); host.scrollIntoView({ block: 'start' }); } }, '← Zurück'),
        h('div', { class: 'punkte-reihe', 'aria-hidden': 'true' }, bp.karten.map(function (x, j) { return h('span', { class: j <= Math.max(i, W.state.data.karten[bp.id]) ? 'an' : '' }); })),
        letzte ? h('a', { href: '#/bau/' + bp.id + '/ueben', class: 'btn btn--haupt' }, 'Zum Üben →')
          : h('button', { type: 'button', class: 'btn btn--haupt', onclick: function () { i++; zeige(); host.scrollIntoView({ block: 'start' }); } }, 'Weiter →')));
      fuss();
    }
    if (gesehen != null && gesehen < bp.karten.length - 1) i = gesehen + 1;
    zeige();
  }

  function ueben(bp, host, fuss) {
    function start() {
      host.innerHTML = '';
      var offen = bp.ueben.filter(function (u) { var r = W.state.data.items[u.id]; return !(r && r.ok); });
      var s = status(bp);
      host.appendChild(karte('', h('p', null, bp.ueben.length + ' Aufgaben, davon ' + (bp.ueben.length - offen.length) + ' schon einmal richtig gelöst.'),
        h('p', { class: 'hinweis-klein' }, 'Fürs Richtfest brauchst du 80 % der Aufgaben einmal richtig. Fehler werden zu Rissen im Tal.'),
        h('div', { class: 'aktionen aktionen--zwei' },
          offen.length && offen.length < bp.ueben.length ? h('button', { type: 'button', class: 'btn', onclick: function () { spielen(offen); } }, 'Nur offene (' + offen.length + ')') : null,
          h('button', { type: 'button', class: 'btn btn--haupt', onclick: function () { spielen(bp.ueben); } }, s.quote > 0 ? 'Alle Aufgaben' : 'Los geht’s'))));
    }
    function spielen(items) {
      W.aufgaben.spiele(host, items, { titel: bp.titel, onEnde: fuss, onFertig: function () { start(); fuss(); } });
    }
    start();
  }

  function schreibenTab(bp, host, fuss) {
    function liste() {
      host.innerHTML = '';
      host.appendChild(h('p', { class: 'hinweis-klein' }, 'In der Arbeit bringen die Schreibaufgaben die meisten Punkte. Jede Aufgabe braucht fürs Richtfest mindestens 60 % deiner selbst vergebenen Punkte.'));
      host.appendChild(h('ul', { class: 'erkl-liste' }, bp.erklaeren.map(function (e, i) {
        var r = W.state.data.erkl[e.id];
        var o = W.operatoren[e.operator];
        return h('li', null, h('button', { type: 'button', class: 'erkl-zeile', onclick: function () { oeffnen(e); } },
          h('span', { class: 'erkl-zeile__op' }, (i + 1) + '.'),
          h('span', { class: 'erkl-zeile__frage' }, W.aufgaben.ohneTags(e.frage)),
          h('span', { class: 'erkl-zeile__p ' + (r ? (r.best >= W.logic.ERKL_OK ? 'gut' : 'schwach') : '') }, r ? prozent(r.best) : 'offen')));
      })));
    }
    function oeffnen(e) {
      W.schreiben.render(host, e, { onFertig: function () { liste(); fuss(); } });
      host.scrollIntoView({ block: 'start' });
    }
    liste();
  }

  /* ---------- Bauschäden ---------- */

  function schaedenSeite(host) {
    var seite = h('div', { class: 'seite' });
    seite.appendChild(h('h1', null, 'Bauschäden'));
    var liste = schaeden();
    if (!liste.length) {
      seite.appendChild(karte('', h('p', null, 'Keine Risse im Tal. Alles, was du falsch hattest, ist repariert.'), h('p', { class: 'hinweis-klein' }, 'Neue Risse entstehen, wenn du eine Aufgabe falsch löst.')));
      host.appendChild(seite);
      return;
    }
    seite.appendChild(chronist('Ein Riss ist repariert, wenn du die Aufgabe zweimal hintereinander richtig löst. Bei Schreibaufgaben reicht einmal mit mindestens 80 %.'));
    var items = liste.filter(function (x) { return x.item; });
    var erkl = liste.filter(function (x) { return x.erkl; });
    var bereich = h('div', { class: 'bereich' });
    if (items.length) {
      seite.appendChild(karte('', h('p', null, h('strong', null, items.length + (items.length === 1 ? ' Aufgabe' : ' Aufgaben')), ' mit Rissen: ',
        items.map(function (x) { return x.bp ? x.bp.titel : ''; }).filter(function (v, i, a) { return v && a.indexOf(v) === i; }).join(', ') + '.'),
        h('div', { class: 'aktionen' }, h('button', { type: 'button', class: 'btn btn--haupt', onclick: function () {
          W.aufgaben.spiele(bereich, items.map(function (x) { return x.item; }), { titel: 'Reparatur', onFertig: function () { W.app.zeige(); } });
          bereich.scrollIntoView({ block: 'start' });
        } }, 'Risse reparieren'))));
    }
    if (erkl.length) {
      seite.appendChild(h('h2', { class: 'zwischen' }, 'Schreibaufgaben unter 60 %'));
      seite.appendChild(h('ul', { class: 'erkl-liste' }, erkl.map(function (x) {
        var o = W.operatoren[x.erkl.operator];
        return h('li', null, h('button', { type: 'button', class: 'erkl-zeile', onclick: function () {
          W.schreiben.render(bereich, x.erkl, { ort: x.bp ? x.bp.id : null, onFertig: function () { W.app.zeige(); } });
          bereich.scrollIntoView({ block: 'start' });
        } }, h('span', { class: 'erkl-zeile__op' }, o ? o.wort : ''), h('span', { class: 'erkl-zeile__frage' }, (x.bp ? x.bp.titel + ': ' : '') + kuerzen(W.aufgaben.ohneTags(x.erkl.frage), 120))));
      })));
    }
    seite.appendChild(bereich);
    host.appendChild(seite);
  }

  /* ---------- Plan ---------- */

  function plan(host) {
    var d = W.state.data;
    var seite = h('div', { class: 'seite' });
    seite.appendChild(h('h1', null, 'Lernplan'));
    var heute = W.logic.heuteISO();
    var inp = h('input', { type: 'date', class: 'eingabe', value: d.datum || '', min: heute, 'aria-label': 'Datum der Arbeit' });
    inp.addEventListener('change', function () { W.state.setDatum(inp.value); W.app.zeige(); });
    seite.appendChild(karte('', h('label', { class: 'feld' }, h('span', null, 'Wann schreibst du die Geschichtsarbeit?'), inp),
      d.datum ? h('button', { type: 'button', class: 'btn btn--klein', onclick: function () { W.state.setDatum(''); W.app.zeige(); } }, 'Datum löschen') : null));
    var t = W.logic.tageBis(heute, d.datum);
    if (!d.datum) {
      seite.appendChild(h('p', { class: 'hinweis-klein' }, 'Ohne Datum gibt es keinen Plan. Du kannst trotzdem jederzeit im Tal lernen.'));
    } else if (t < 0) {
      seite.appendChild(karte('', h('p', null, 'Die Arbeit war am ' + datumText(d.datum) + ' Trag ein neues Datum ein, falls noch eine kommt.')));
    } else if (t === 0) {
      seite.appendChild(karte('plan-tag--heute', h('p', { class: 'plan-tag__kopf' }, 'Heute ist die Arbeit. Viel Erfolg!'),
        h('p', null, 'Lies vorher noch einmal die ', link('#/wachstafel', 'Wachstafel'), ' und spiel eine Runde ', link('#/geruechte', 'Markt-Gerüchte'), '.')));
    } else {
      var fertig = {};
      bauplaetze().forEach(function (bp) { fertig[bp.id] = status(bp).fertig; });
      var aufgaben = W.logic.planAufgaben(bauplaetze().map(function (b) { return b.id; }), fertig, d.pruefung.urkunde);
      var p = W.logic.lernplan(heute, d.datum, aufgaben);
      seite.appendChild(h('p', null, 'Noch ' + t + (t === 1 ? ' Tag' : ' Tage') + ' bis zur Arbeit am ' + datumText(d.datum)));
      p.forEach(function (tag, i) {
        seite.appendChild(karte(i === 0 ? 'plan-tag--heute' : '', h('p', { class: 'plan-tag__kopf' }, (i === 0 ? 'Heute, ' : '') + datumText(tag.datum)),
          h('ul', { class: 'plan-ziele' }, tag.aufgaben.map(function (z) { return h('li', null, zielLink(z)); }))));
      });
    }
    host.appendChild(seite);
  }

  /* ---------- Einstellungen ---------- */

  function einstellungen(host) {
    var d = W.state.data;
    var seite = h('div', { class: 'seite' });
    seite.appendChild(h('h1', null, 'Einstellungen'));
    var name = h('input', { type: 'text', class: 'eingabe', maxlength: '30', value: d.name || '', autocomplete: 'off', 'aria-label': 'Vorname' });
    name.addEventListener('change', function () { W.state.setName(name.value); W.toast('Gespeichert'); });
    var ton = h('input', { type: 'checkbox' });
    ton.checked = !!d.ton;
    ton.addEventListener('change', function () { W.state.set('ton', ton.checked); if (ton.checked) W.ton.richtig(); });
    seite.appendChild(karte('', h('label', { class: 'feld' }, h('span', null, 'Dein Vorname fürs Namensschild (bleibt nur auf diesem Gerät)'), name),
      h('label', { class: 'schalter' }, ton, h('span', null, 'Töne (Glocke beim Richtfest)'))));

    var raus = h('textarea', { class: 'erkl__text erkl__text--klein', rows: '3', readonly: true, placeholder: 'Hier erscheint dein Code.', 'aria-label': 'Dein Fortschritt-Code' });
    var code = h('textarea', { class: 'erkl__text erkl__text--klein', rows: '3', placeholder: 'Hier einen Code einfügen …', 'aria-label': 'Fortschritt-Code einfügen' });
    function kurzStand(x) {
      var f = bauplaetze().filter(function (bp) { return W.logic.bauplatzStatus(bp, x).fertig; }).length;
      return f + ' von 7 Bauplätzen fertig, ' + W.logic.pfennige(x, bauplaetze()).stand + ' Pfennige' + (x.name ? ', Name ' + x.name : '');
    }
    seite.appendChild(karte('', h('h2', null, 'Fortschritt übertragen'),
      h('p', { class: 'hinweis-klein' }, 'Kopiere den Code und füge ihn auf dem anderen Gerät hier ein, zum Beispiel vom Handy aufs iPad. Sichere ihn auch ab und zu, zum Beispiel in einer Nachricht an dich selbst.'),
      raus, code,
      h('div', { class: 'aktionen aktionen--zwei' },
        h('button', { type: 'button', class: 'btn', onclick: function () {
          raus.value = W.state.exportCode();
          var markieren = function () { raus.select(); W.toast('Code erzeugt. Bitte kopieren.'); };
          try {
            if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(raus.value).then(function () { W.toast('Code in die Zwischenablage kopiert', 'ok'); }, markieren);
            else markieren();
          } catch (e) { markieren(); }
        } }, 'Code erzeugen'),
        h('button', { type: 'button', class: 'btn btn--haupt', onclick: function () {
          var neu = W.state.codeLesen(code.value);
          if (!neu) { W.toast('Das ist kein gültiger Code dieser Seite.'); return; }
          if (!window.confirm('Jetzt auf diesem Gerät: ' + kurzStand(W.state.data) + '.\nIm Code: ' + kurzStand(neu) + '.\n\nDer Stand auf diesem Gerät wird ersetzt. Fortfahren?')) return;
          if (W.state.importCode(code.value)) { W.toast('Fortschritt übernommen', 'ok'); W.app.zeige(); }
        } }, 'Code übernehmen'))));

    seite.appendChild(karte('', h('h2', null, 'Neu anfangen'),
      h('p', { class: 'hinweis-klein' }, 'Löscht deinen ganzen Fortschritt auf diesem Gerät.'),
      h('button', { type: 'button', class: 'btn btn--gefahr', onclick: function () {
        if (window.confirm('Wirklich alles löschen? Das Tal ist dann wieder leer.')) { W.state.reset(); location.hash = '#/'; W.app.zeige(); W.ansichten.begruessung(W.app.zeige); }
      } }, 'Alles zurücksetzen')));
    seite.appendChild(h('p', { class: 'hinweis-klein' }, link('#/bilder', 'Bildnachweise und Schriften'), ' · Die Seite speichert nur auf diesem Gerät. Es gibt kein Konto und kein Tracking.'));
    host.appendChild(seite);
  }

  /* ---------- Begrüßung ---------- */

  function begruessung(fertig) {
    var inp = h('input', { type: 'text', class: 'eingabe', maxlength: '30', placeholder: 'Vorname (freiwillig)', autocomplete: 'off', 'aria-label': 'Vorname' });
    var dlg = h('div', { class: 'dialog', role: 'dialog', 'aria-modal': 'true', 'aria-label': 'Willkommen' },
      h('div', { class: 'dialog__box' },
        h('h1', null, 'Stein auf Stein'),
        h('p', null, 'Vor dir liegt ein leeres Tal im Mittelalter. Sieben Bauplätze sind abgesteckt: eine Königspfalz, ein Fronhof, Straßen mit Bannern, eine Dorfkirche, ein Dorf mit Feldern, eine Burg und ein Kloster.'),
        h('p', null, 'Du bist die Baumeisterin. Jedes Gebäude steht erst, wenn du sein Thema für die Geschichtsarbeit kannst. Am Ende kommt der König zum Hoftag und prüft dich.'),
        h('p', { class: 'hinweis-klein' }, 'Tipp für iPhone und iPad: Leg die Seite zuerst über „Teilen → Zum Home-Bildschirm“ ab und lerne dann nur dort. Safari und der Home-Bildschirm speichern getrennt.'),
        h('label', { class: 'feld' }, h('span', null, 'Wie heißt du? Der Name bleibt nur auf diesem Gerät.'), inp),
        h('div', { class: 'aktionen' }, h('button', { type: 'button', class: 'btn btn--haupt', onclick: function () {
          W.state.setName(inp.value);
          W.state.set('begruesst', true);
          dlg.remove();
          if (fertig) fertig();
        } }, 'Grundstein legen'))));
    document.body.appendChild(dlg);
    inp.focus();
  }

  W.ansichten = {
    bauplaetze: bauplaetze, bpNachId: bpNachId, status: status, statusListe: statusListe, pfennige: pfennige, rang: rang,
    itemNachId: itemNachId, erklNachId: erklNachId, schadenAnzahl: schadenAnzahl, geruechtItem: geruechtItem,
    karte: karte, chronist: chronist, link: link, datumText: datumText, dfnAktivieren: dfnAktivieren, richtfestPruefen: richtfestPruefen, stillFeiern: stillFeiern,
    tal: tal, bauplatz: bauplatz, schaeden: schaedenSeite, plan: plan, einstellungen: einstellungen, begruessung: begruessung
  };
})();
