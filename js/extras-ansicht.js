/* Extras: Markt-Gerüchte (60 Sekunden), große Zeitleiste, Schatzkammer, Wachstafel (Druck), Bildnachweis. */
(function () {
  'use strict';
  var W = (window.W = window.W || {});
  var h = function () { return W.h.apply(null, arguments); };
  function karte() { return W.ansichten.karte.apply(null, arguments); }
  var uhr = null;
  function stoppe() { if (uhr) { clearInterval(uhr); uhr = null; } }

  /* ---------- Markt-Gerüchte ---------- */
  function geruechte(host) {
    stoppe();
    var seite = h('div', { class: 'seite' });
    host.appendChild(seite);
    function start() {
      seite.innerHTML = '';
      seite.appendChild(h('h1', null, 'Markt-Gerüchte'));
      seite.appendChild(W.ansichten.chronist('Auf dem Markt wird viel erzählt. Was stimmt, was ist erfunden? Du hast 60 Sekunden. Jede richtige Antwort gibt einen Punkt, jede falsche kostet einen.'));
      seite.appendChild(karte('', h('p', null, 'Bestwert: ', h('strong', null, String(W.state.data.geruechte.best || 0))),
        h('p', { class: 'hinweis-klein' }, 'Falsch beurteilte Gerüchte werden zu Rissen am passenden Gebäude.'),
        h('div', { class: 'aktionen' }, h('button', { type: 'button', class: 'btn btn--haupt', onclick: spiel }, 'Los'))));
    }
    function spiel() {
      var pool = W.shuffle(W.geruechte || []);
      var i = 0, richtig = 0, falsch = [], ende = Date.now() + 60000, gesperrt = false;
      seite.innerHTML = '';
      var zeit = h('span', { class: 'pruef-uhr mono' }, '60');
      var stand = h('span', { class: 'mono' }, '0 Punkte');
      var text = h('p', { class: 'geruecht__text' });
      var meldung = h('p', { class: 'hinweis-klein', 'aria-live': 'polite' }, ' ');
      function zeige() { text.textContent = '„' + pool[i % pool.length].aussage + '“'; }
      function antwort(sagt) {
        if (gesperrt || !pool.length) return;
        var g = pool[i % pool.length];
        var ok = sagt === g.stimmt;
        W.state.itemErgebnis(g.id, ok, g.bauplatz);
        if (ok) { richtig++; meldung.textContent = '✓ Richtig.'; } else { falsch.push(g); meldung.textContent = '✗ ' + (g.stimmt ? 'Das stimmt.' : 'Das ist erfunden.'); }
        stand.textContent = Math.max(0, richtig - falsch.length) + ' Punkte';
        i++;
        gesperrt = true;
        setTimeout(function () { gesperrt = false; if (uhr) zeige(); }, ok ? 250 : 900);
      }
      seite.appendChild(h('div', { class: 'pruef-leiste' }, zeit, stand));
      seite.appendChild(h('div', { class: 'geruecht' }, text));
      seite.appendChild(h('div', { class: 'urteil' },
        h('button', { type: 'button', class: 'opt opt--kurz', onclick: function () { antwort(true); } }, 'Stimmt'),
        h('button', { type: 'button', class: 'opt opt--kurz', onclick: function () { antwort(false); } }, 'Erfunden')));
      seite.appendChild(meldung);
      zeige();
      uhr = setInterval(function () {
        if (!document.body.contains(zeit)) { stoppe(); return; }
        var r = Math.max(0, Math.round((ende - Date.now()) / 1000));
        zeit.textContent = String(r);
        if (r <= 0) { stoppe(); fertig(); }
      }, 250);
      function fertig() {
        var punkte = Math.max(0, richtig - falsch.length);
        var neu = W.state.recordGeruechte(punkte);
        seite.innerHTML = '';
        seite.appendChild(h('h1', null, 'Markt-Gerüchte'));
        seite.appendChild(karte('auswertung', h('p', { class: 'ergebnis' }, String(punkte)),
          h('p', null, richtig + ' richtig, ' + falsch.length + ' falsch.' + (neu ? ' Neuer Bestwert!' : ''))));
        if (falsch.length) seite.appendChild(karte('', h('p', null, h('strong', null, 'Das war falsch:')), h('ul', null, falsch.map(function (g) {
          return h('li', null, '„' + g.aussage + '“ ', h('strong', null, g.stimmt ? 'Stimmt.' : 'Erfunden.'), ' ' + g.erkl);
        }))));
        seite.appendChild(h('div', { class: 'aktionen' }, h('a', { href: '#/', class: 'btn' }, 'Ins Tal'), h('button', { type: 'button', class: 'btn btn--haupt', onclick: spiel }, 'Nochmal')));
      }
    }
    start();
  }

  /* ---------- Zeitleiste ---------- */
  function zeitleiste(host) {
    var seite = h('div', { class: 'seite' }, h('h1', null, 'Die große Zeitleiste'),
      W.ansichten.chronist('Ein Gebäude ohne Ordnung stürzt ein. Mit der Zeit ist es genauso. Bring alles an seinen Platz.'));
    var bereich = h('div');
    seite.appendChild(bereich);
    host.appendChild(seite);
    W.aufgaben.spiele(bereich, [W.zeitleisteGesamt], { titel: 'Zeitleiste', melden: false, scrollen: false, fertigText: 'Ins Tal', onFertig: function () { location.hash = '#/'; } });
  }

  /* ---------- Schatzkammer ---------- */
  function schatz(host) {
    var seite = h('div', { class: 'seite' });
    host.appendChild(seite);
    function zeige() {
      seite.innerHTML = '';
      var stand = W.ansichten.pfennige().stand;
      seite.appendChild(h('h1', null, 'Schatzkammer'));
      seite.appendChild(W.ansichten.chronist('Pfennige bekommst du für jede neu gelöste Aufgabe, für gute Schreibaufgaben, für reparierte Risse und für jedes Richtfest. Hier kannst du sie gegen Geschichten eintauschen, die nicht im Buch stehen.'));
      seite.appendChild(h('p', null, 'Du hast ', h('strong', null, stand + ' Pfennige'), '.'));
      seite.appendChild(h('div', { class: 'schatz' }, (W.schatz || []).map(function (s) {
        var offen = !!W.state.data.schatz[s.id];
        if (offen) return karte('', h('span', { class: 'tag tag--zusatz' }, 'Zusatz'), h('h2', null, s.titel), h('div', { html: s.text }), h('p', { class: 'quelle__nachweis' }, 'Nachweis: ' + s.nachweis));
        return karte('schatz__eintrag--zu', h('h2', null, s.titel),
          h('button', { type: 'button', class: 'btn' + (stand >= s.kosten ? ' btn--haupt' : ''), disabled: stand < s.kosten, onclick: function () {
            if (W.state.schatzOeffnen(s.id, W.ansichten.bauplaetze())) zeige();
          } }, 'Öffnen für ' + s.kosten + ' Pfennige'));
      })));
    }
    zeige();
  }

  /* ---------- Wachstafel ---------- */
  function wachstafel(host) {
    var bps = W.ansichten.bauplaetze();
    var seite = h('div', { class: 'seite wachstafel' },
      h('div', { class: 'aktionen nicht-drucken' }, h('button', { type: 'button', class: 'btn btn--haupt', onclick: function () { window.print(); } }, 'Drucken')),
      h('h1', null, 'Wachstafel · Europa im Mittelalter'));
    bps.forEach(function (bp) {
      seite.appendChild(h('h2', null, bp.nr + ' ' + bp.titel + ': ' + bp.thema + ' (' + bp.zeit + ')'));
      seite.appendChild(h('ul', null, bp.karten.filter(function (k) { return !k.zusatz; }).map(function (k) { return h('li', { html: k.merk }); })));
    });
    var schaubilder = ['grundherrschaft', 'lehnswesen', 'staendeschaubild'].filter(function (n) { return W.abb.liste[n]; });
    if (schaubilder.length) {
      seite.appendChild(h('h2', null, 'Schaubilder'));
      seite.appendChild(h('div', { class: 'schaubilder' }, schaubilder.map(function (n) { return h('figure', { class: 'abb' }, W.abb.zeichne(n, { beschriftet: true, pfeile: true })); })));
    }
    seite.appendChild(h('h2', null, 'Zeitleiste'));
    seite.appendChild(h('ul', { class: 'zeitliste' }, W.zeitleisteGesamt.ereignisse.map(function (e) { return h('li', null, h('strong', null, e[2] + ': '), e[0]); })));
    var begriffe = Object.keys(W.lexikon).sort(function (a, b) { return a.localeCompare(b, 'de'); });
    seite.appendChild(h('div', { class: 'nicht-drucken' },
      h('p', { class: 'hinweis-klein' }, 'Fachbegriffe und Arbeitsaufträge stehen nur hier auf dem Bildschirm. Gedruckt werden Merksätze, Schaubilder und Zeitleiste auf höchstens zwei Seiten.'),
      h('h2', null, 'Fachbegriffe'),
      h('div', { class: 'begriffe' }, begriffe.map(function (b) { return h('p', null, h('strong', null, b + ': '), h('span', { html: W.lexikon[b] })); })),
      h('h2', null, 'Arbeitsaufträge'),
      h('div', { class: 'begriffe' }, Object.keys(W.operatoren).map(function (k) { var o = W.operatoren[k]; return h('p', null, h('strong', null, o.wort + ' (' + o.bereich + '): '), o.bedeutet); }))));
    host.appendChild(seite);
  }

  /* ---------- Bildnachweis ---------- */
  function bilder(host) {
    var bildq = Object.keys(W.quellen).map(function (k) { return W.quellen[k]; }).filter(function (q) { return q.art === 'bild'; });
    host.appendChild(h('div', { class: 'seite' },
      h('h1', null, 'Bildnachweise und Schriften'),
      karte('', h('h2', null, 'Bildquellen'),
        bildq.length ? h('ul', null, bildq.map(function (q) {
          return h('li', null, h('strong', { html: q.titel }), ', ' + [q.autor, q.zeit].filter(Boolean).join(', ') + '. ' + (q.lizenz || '') + '. ',
            q.herkunft ? h('a', { href: q.herkunft, rel: 'noopener', target: '_blank' }, 'Herkunft (Wikimedia Commons)') : null);
        })) : h('p', null, 'Keine.'),
        h('p', { class: 'hinweis-klein' }, 'Alle anderen Abbildungen sind selbst gezeichnet und lehnen sich an die Schaubilder des Schulbuchs an. Es werden keine Bilder aus dem Schulbuch verwendet.')),
      karte('', h('h2', null, 'Schriften'),
        h('p', null, 'Alegreya und Alegreya Sans von Juan Pablo del Peral (Huerta Tipográfica), SIL Open Font License 1.1.')),
      karte('', h('h2', null, 'Quellentexte'),
        h('p', { class: 'hinweis-klein' }, 'Quellen aus dem Schulbuch sind wörtlich übernommen und mit Seite angegeben. Quellen mit dem Hinweis „nicht im Buch“ und „vereinfacht“ sind sinngetreu für Klasse 7 vereinfacht. Der Nachweis steht jeweils unter der Quelle.'))));
  }

  W.extras = { geruechte: geruechte, zeitleiste: zeitleiste, schatz: schatz, wachstafel: wachstafel, bilder: bilder };
})();
