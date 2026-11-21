/* Sammelstellen für die Inhalte. Jeder Bauplatz liefert eigene Dateien:
   bauplatz-<id>.js (W.bauplaetze.push), lexikon-<id>.js und quellen-<id>.js (Object.assign). */
(function () {
  'use strict';
  var W = (window.W = window.W || {});
  var h = function () { return W.h.apply(null, arguments); };

  W.bauplaetze = W.bauplaetze || [];
  W.lexikon = W.lexikon || {};
  W.quellen = W.quellen || {};

  /** Lexikon-Eintrag zu einem Begriff (Groß-/Kleinschreibung egal). */
  W.lexikonEintrag = function (begriff) {
    var k = String(begriff || '').trim().toLowerCase();
    var treffer = null;
    Object.keys(W.lexikon).forEach(function (b) { if (b.toLowerCase() === k) treffer = { begriff: b, text: W.lexikon[b] }; });
    return treffer;
  };

  /** Quelle als Kasten: Kopf (Art, Titel, Autor, Zeit, „vereinfacht“), Text oder Bild, Nachweis. */
  W.quelleAnzeigen = function (id) {
    var q = W.quellen[id];
    if (!q) return null;
    var art = q.art === 'bild' ? 'Bildquelle' : 'Textquelle';
    return h('figure', { class: 'quelle quelle--' + (q.art || 'text') },
      h('figcaption', { class: 'quelle__kopf' },
        h('span', { class: 'quelle__art' }, art),
        q.buch ? null : h('span', { class: 'quelle__neu' }, 'nicht im Buch'),
        q.vereinfacht ? h('span', { class: 'quelle__vereinfacht' }, 'vereinfacht') : null,
        h('strong', { class: 'quelle__titel', html: q.titel }),
        h('span', { class: 'quelle__wer' }, [q.autor, q.zeit].filter(Boolean).join(', '))),
      q.art === 'bild'
        ? h('img', { class: 'quelle__bild', src: q.datei, alt: q.alt || q.titel, loading: 'lazy' })
        : h('div', { class: 'quelle__text', html: q.text }),
      h('p', { class: 'quelle__nachweis' }, q.nachweis));
  };
})();
