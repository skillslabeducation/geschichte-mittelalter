/* Abbildungen als selbst gezeichnetes SVG. Jede Bauplatz-Datei in js/abb/ meldet ihre Abbildungen hier an.
   W.abb.liste ist reine Daten (testbar), W.abb.zeichne baut das SVG-Element. */
(function () {
  'use strict';
  var W = (window.W = window.W || {});

  /* Farben für die Zeichnungen (wie in der Buchmalerei). */
  var F = {
    tinte: '#2b2118', pergament: '#f4ecd8', papier: '#fbf6ea', linie: '#5a4a3a', grau: '#8a7d6b', hell: '#e8dcc0',
    zinnober: '#b8321f', rosa: '#e7b8a8', lapis: '#1f4e8c', hellblau: '#b9cde6', gruen: '#3d6b35', hellgruen: '#c9d9b0',
    gold: '#b8892b', ocker: '#d9b66a', stein: '#b9ad97', dach: '#a3472f', holz: '#8a5a33', wasser: '#7fa7c9', himmel: '#dfe9ef'
  };

  var L = {};
  var BASIS = {};
  var zaehler = 0;

  /** def: { viewBox, titel, strukturen: {id: {label, kurz?, x, y, tx?, ty?, a?}}, basis(o, uid) → SVG-Innenleben als String } */
  function registriere(name, def) {
    if (L[name]) throw new Error('Abbildung doppelt: ' + name);
    L[name] = { viewBox: def.viewBox, titel: def.titel, strukturen: def.strukturen || {} };
    BASIS[name] = def.basis;
  }

  /** Pfeilspitzen in vier Farben: url(#<uid>-p-rot) usw. */
  function pfeilDefs(uid) {
    var farben = { tinte: F.tinte, rot: F.zinnober, gruen: F.gruen, orange: '#d9822b', blau: F.lapis };
    return '<defs>' + Object.keys(farben).map(function (k) {
      return '<marker id="' + uid + '-p-' + k + '" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">' +
        '<path d="M0,0 L10,5 L0,10 z" fill="' + farben[k] + '"/></marker>';
    }).join('') + '</defs>';
  }

  function marken(name, o) {
    var str = L[name].strukturen;
    var out = '';
    var nummern = o.nummern || {};
    var ids = o.beschriftet ? Object.keys(str).filter(function (id) { return !o.nur || o.nur.indexOf(id) >= 0; }) : Object.keys(nummern);
    ids.forEach(function (id) {
      var m = str[id];
      if (!m) return;
      var hv = o.hervorheben && o.hervorheben.indexOf(id) >= 0 ? ' abb-marke--hv' : '';
      if (m.tx != null) out += '<line class="abb-leiter' + hv + '" x1="' + m.x + '" y1="' + m.y + '" x2="' + m.tx + '" y2="' + m.ty + '"/><circle class="abb-ziel" cx="' + m.tx + '" cy="' + m.ty + '" r="2.5"/>';
      if (o.beschriftet) {
        var a = m.a || 'middle';
        var zeilen = (m.kurz || m.label).split('|');
        var y0 = m.y + 4 - (zeilen.length - 1) * 7;
        out += '<text class="abb-label' + (zeilen.length > 1 ? ' abb-label--kurz' : '') + hv + '" x="' + m.x + '" y="' + y0 + '" text-anchor="' + a + '">' +
          zeilen.map(function (z, i) { return '<tspan x="' + m.x + '" dy="' + (i ? 14 : 0) + '">' + W.esc(z) + '</tspan>'; }).join('') + '</text>';
      } else {
        out += '<g class="abb-nr' + hv + '"><circle cx="' + m.x + '" cy="' + m.y + '" r="12"/><text x="' + m.x + '" y="' + (m.y + 5) + '" text-anchor="middle">' + nummern[id] + '</text></g>';
      }
    });
    return out;
  }

  /** SVG als String (für Tests und Druck). opts: { nummern: {id: nr}, beschriftet, nur: id[], hervorheben: id[], … eigene Optionen } */
  function svgText(name, opts) {
    var o = opts || {};
    var def = L[name];
    if (!def) throw new Error('Unbekannte Abbildung: ' + name);
    var uid = 'abb' + (++zaehler);
    return '<svg xmlns="http://www.w3.org/2000/svg" class="abb-svg abb-svg--' + name + '" viewBox="' + def.viewBox + '" role="img" aria-label="' + W.esc(def.titel) + '">' +
      '<title>' + W.esc(def.titel) + '</title>' + pfeilDefs(uid) + BASIS[name](o, uid) + marken(name, o) + '</svg>';
  }

  function zeichne(name, opts) { return W.frag(svgText(name, opts)); }

  W.abb = { F: F, liste: L, registriere: registriere, zeichne: zeichne, svgText: svgText };
})();
