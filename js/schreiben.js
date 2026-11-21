/* Schreib-Training: Operator verstehen, tippen oder auf Papier schreiben, Fachbegriff-Radar,
   Erwartungshorizont zum Abhaken (getrennt nach Sach- und Werturteil), Musterantwort. */
(function () {
  'use strict';
  var W = (window.W = window.W || {});
  var h = function () { return W.h.apply(null, arguments); };

  function summe(punkte) { return punkte.reduce(function (s, p) { return s + p.p; }, 0); }
  function pText(p) { return String(p).replace('.', ',') + (p === 1 ? ' Punkt' : ' Punkte'); }
  function zahl(x) { return String(x).replace('.', ','); }
  function op(a) { return W.operatoren[a.operator] || null; }

  /** Kopf einer Schreibaufgabe: Operator mit Bedeutung, Frage, Material. Auch für den Hoftag. */
  function kopf(a, mitPunkten) {
    var o = op(a);
    return h('div', { class: 'erkl__kopf' },
      a.zusatz ? h('span', { class: 'tag tag--zusatz' }, 'Zusatz') : null,
      o ? h('p', { class: 'operator' }, h('span', { class: 'operator__wort' }, o.wort), h('span', { class: 'operator__bereich' }, 'Bereich ' + o.bereich),
        h('span', { class: 'operator__text' }, o.bedeutet)) : null,
      a.quelle && W.quelleAnzeigen ? W.quelleAnzeigen(a.quelle) : null,
      a.material ? h('div', { class: 'material', html: a.material }) : null,
      a.abb && W.abb ? h('figure', { class: 'abb' }, W.abb.zeichne(a.abb, a.abbOpts || {})) : null,
      h('div', { class: 'frage', html: a.frage }),
      mitPunkten === false ? null : h('p', { class: 'hinweis-klein' }, 'Erwartet: ' + pText(summe(a.punkte)) + '. Schreib in ganzen Sätzen und benutze Fachbegriffe.'));
  }

  /** Erwartungshorizont als Liste zum Abhaken. Punkte mit art 'sach'/'wert' stehen unter eigenen Überschriften. */
  function horizontListe(a, haken, onToggle) {
    function punkt(p, i) {
      var an = haken.indexOf(i) >= 0;
      var b = h('button', { type: 'button', class: 'check__punkt' + (an ? ' an' : ''), 'aria-pressed': an ? 'true' : 'false', onclick: function () {
        var k = haken.indexOf(i);
        if (k >= 0) haken.splice(k, 1); else haken.push(i);
        b.classList.toggle('an', k < 0);
        b.setAttribute('aria-pressed', k < 0 ? 'true' : 'false');
        if (onToggle) onToggle();
      } }, h('span', { class: 'check__box' }), h('span', { class: 'check__text', html: p.text }), h('span', { class: 'check__p mono' }, zahl(p.p) + ' P.'));
      return h('li', null, b);
    }
    var gruppen = [['', null], ['Sachurteil (damals)', 'sach'], ['Werturteil (heute)', 'wert']];
    var hatArt = a.punkte.some(function (p) { return p.art; });
    if (!hatArt) return h('ul', { class: 'check' }, a.punkte.map(punkt));
    return h('div', null, gruppen.map(function (g) {
      var drin = [];
      a.punkte.forEach(function (p, i) { if ((p.art || null) === g[1]) drin.push(punkt(p, i)); });
      if (!drin.length) return null;
      return h('div', null, g[0] ? h('p', { class: 'check__gruppe' }, g[0]) : null, h('ul', { class: 'check' }, drin));
    }));
  }

  /** host: Element. a: Schreibaufgabe. opts: { onFertig(prozent), speichern: true, direkt, sofortBewerten, modus, text, ort } */
  function render(host, a, opts) {
    opts = opts || {};
    var modus = null;
    var text = opts.text != null ? opts.text : W.state.erklText(a.id);
    var o = op(a);

    function start() {
      host.innerHTML = '';
      var tipp = a.tipp ? h('details', { class: 'tipp' }, h('summary', null, 'Tipp'), h('p', { html: a.tipp })) : null;
      var bausteine = o ? h('details', { class: 'tipp' }, h('summary', null, 'Satzbausteine zu „' + o.wort + '“'),
        h('ul', { class: 'bausteine' }, o.bausteine.map(function (b) { return h('li', null, b); }))) : null;
      host.appendChild(h('div', { class: 'erkl' }, kopf(a), tipp, bausteine,
        h('p', { class: 'hinweis-klein' }, 'In der Arbeit schreibst du von Hand. Papier ist das beste Training.'),
        h('div', { class: 'aktionen aktionen--zwei' },
          h('button', { type: 'button', class: 'btn', onclick: function () { modus = 'papier'; papier(); } }, 'Auf Papier'),
          h('button', { type: 'button', class: 'btn btn--haupt', onclick: function () { modus = 'tippen'; tippen(); } }, 'Hier tippen'))));
    }

    function tippen() {
      host.innerHTML = '';
      var ta = h('textarea', { class: 'erkl__text', rows: '8', placeholder: 'Deine Antwort …', spellcheck: 'true', lang: 'de', 'aria-label': 'Deine Antwort' });
      ta.value = text;
      ta.addEventListener('input', function () { text = ta.value; if (opts.speichern !== false) W.state.erklEntwurf(a.id, ta.value); });
      host.appendChild(h('div', { class: 'erkl' }, kopf(a), ta,
        h('div', { class: 'aktionen' },
          h('button', { type: 'button', class: 'btn btn--haupt', onclick: function () { text = ta.value; bewerten(); } }, 'Fertig, vergleichen'))));
      ta.focus();
    }

    function papier() {
      host.innerHTML = '';
      host.appendChild(h('div', { class: 'erkl' }, kopf(a),
        h('div', { class: 'papier' }, h('p', null, 'Schreib deine Antwort jetzt auf ein Blatt. Erst wenn du fertig bist, vergleichst du mit dem Erwartungshorizont.')),
        h('div', { class: 'aktionen' },
          h('button', { type: 'button', class: 'btn btn--haupt', onclick: function () { bewerten(); } }, 'Fertig, vergleichen'))));
    }

    function bewerten() {
      host.innerHTML = '';
      var haken = [];
      var radar = modus === 'tippen' && text.trim() ? W.text.radar(text, a.begriffe) : null;
      var max = summe(a.punkte);
      var anzeige = h('span', { class: 'mono' }, '0 / ' + zahl(max));
      function neu() {
        var s = haken.reduce(function (x, i) { return x + a.punkte[i].p; }, 0);
        anzeige.textContent = zahl(s) + ' / ' + zahl(max);
      }
      host.appendChild(h('div', { class: 'erkl' }, kopf(a, false),
        modus === 'tippen' && text.trim() ? h('blockquote', { class: 'erkl__eigen' }, text) : null,
        radar ? h('div', { class: 'radar' }, h('p', { class: 'radar__titel' }, 'Fachbegriff-Radar'),
          h('div', { class: 'chips' }, radar.map(function (r) { return h('span', { class: 'chip-klein ' + (r.gefunden ? 'chip-klein--an' : '') }, (r.gefunden ? '✓ ' : '· ') + r.name); })),
          h('p', { class: 'hinweis-klein' }, 'Nur ein Hinweis: Grün heißt, das Wort kommt vor, nicht, dass der Satz stimmt.')) : null,
        h('div', { class: 'horizont' }, h('p', { class: 'horizont__titel' }, 'Erwartungshorizont ', anzeige),
          h('p', { class: 'hinweis-klein' }, 'Hake ehrlich ab, was in deiner Antwort sinngemäß und richtig vorkommt.'), horizontListe(a, haken, neu)),
        h('details', { class: 'muster', open: modus === 'papier' }, h('summary', null, 'Musterantwort'), h('div', { html: a.muster })),
        h('div', { class: 'aktionen' }, h('button', { type: 'button', class: 'btn btn--haupt', onclick: function () { speichern(haken, max); } }, 'Bewertung speichern'))));
    }

    function speichern(haken, max) {
      var s = haken.reduce(function (x, i) { return x + a.punkte[i].p; }, 0);
      var prozent = max ? s / max : 0;
      if (opts.speichern !== false) W.state.erklSpeichern(a.id, { text: text, haken: haken, prozent: prozent, frage: a.frage }, opts.ort);
      if (opts.direkt) { opts.onFertig(prozent, haken, text); return; }
      host.innerHTML = '';
      var gut = prozent >= W.logic.ERKL_OK - 1e-9;
      host.appendChild(h('div', { class: 'erkl erkl--ende' },
        h('p', { class: 'ergebnis mono' }, zahl(s) + ' / ' + zahl(max)),
        h('p', null, gut && W.state.data.schaeden['e:' + a.id] != null ? 'Für die Reparatur des Risses brauchst du mindestens 80 %. Lies die Musterantwort und versuch es noch einmal.' : gut ? (prozent >= 0.99 ? 'Vollständig. So sieht eine Antwort für volle Punkte aus.' : 'Das reicht für den Bauplatz. Für volle Punkte schau dir an, was gefehlt hat.')
          : 'Noch zu dünn. Die Aufgabe ist jetzt als Riss im Tal markiert. Lies die Musterantwort und schreib sie später noch einmal mit eigenen Worten.'),
        h('div', { class: 'aktionen aktionen--zwei' },
          h('button', { type: 'button', class: 'btn', onclick: start }, 'Nochmal schreiben'),
          h('button', { type: 'button', class: 'btn btn--haupt', onclick: function () { if (opts.onFertig) opts.onFertig(prozent); } }, 'Fertig'))));
    }

    if (opts.sofortBewerten) { modus = opts.modus || 'tippen'; bewerten(); } else start();
  }

  W.schreiben = { render: render, summe: summe, kopf: kopf, horizontListe: horizontListe };
})();
