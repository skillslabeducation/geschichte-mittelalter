/* Abbildungen zum Bauplatz fronhof: Schaubild der Grundherrschaft.
   Inhaltlich wie Buch S. 22, M1, im eigenen, schlichten Stil neu gezeichnet.
   Optionen (abbOpts): pfeile: true  → Pfeile mit Beschriftung wie im Buch
                       pfeile: 'buchstaben' → Pfeile A–D mit Buchstaben (zum Zuordnen) */
(function () {
  'use strict';
  var W = (window.W = window.W || {});

  var HERRENLAND = '#f1d5a6';
  var HUFENLAND = '#e4d8ea';
  var HAUT = '#f1d3b3';

  /* Pfeile: Bahn, Farbe, Text wie im Buch. textD läuft so, dass die Schrift wie im Buch gelesen wird. */
  var PFEILE = [
    { key: 'krieg', buchstabe: 'A', d: 'M 26 136 C 20 66, 96 20, 170 30', textD: 'M 26 136 C 20 66, 96 20, 170 30',
      farbe: 'gruen', text: 'Kriegsdienste', bx: 53, by: 66 },
    { key: 'land', buchstabe: 'B', d: 'M 184 58 C 58 80, 36 306, 170 352', textD: 'M 170 352 C 36 306, 58 80, 184 58',
      farbe: 'blau', text: 'Land zum Wohnen und Bewirtschaften, Schutz', bx: 80, by: 214 },
    { key: 'schutz', buchstabe: 'C', d: 'M 202 80 C 206 160, 236 226, 204 246', textD: 'M 204 246 C 236 226, 206 160, 202 80',
      farbe: 'blau', text: 'Schutz, Schlafplatz', bx: 214, by: 167 },
    { key: 'abgabenL', buchstabe: 'D', d: 'M 214 282 C 282 288, 268 164, 228 88', textD: 'M 214 282 C 282 288, 268 164, 228 88',
      farbe: 'rot', text: 'Abgaben, (Fron-)Dienste', bx: 260, by: 238 },
    { key: 'abgabenH', buchstabe: 'E', d: 'M 230 354 C 376 326, 360 90, 222 54', textD: 'M 230 354 C 376 326, 360 90, 222 54',
      farbe: 'rot', text: 'Abgaben, (Fron-)Dienste', bx: 330, by: 250 }
  ];

  function r1(v) { return Math.round(v * 10) / 10; }

  /* Eine Person: x = Mitte, y = Scheitel, s = Größe. */
  function person(F, x, y, s, rock, extra) {
    var p = function (dx, dy) { return r1(x + dx * s) + ' ' + r1(y + dy * s); };
    return '<g>' +
      '<path d="M' + p(-6, 13) + ' L' + p(6, 13) + ' L' + p(9, 36) + ' L' + p(-9, 36) + ' Z" fill="' + rock + '" stroke="' + F.tinte + '" stroke-width="1"/>' +
      '<line x1="' + r1(x - 4 * s) + '" y1="' + r1(y + 36 * s) + '" x2="' + r1(x - 4 * s) + '" y2="' + r1(y + 40 * s) + '" stroke="' + F.tinte + '" stroke-width="1.6"/>' +
      '<line x1="' + r1(x + 4 * s) + '" y1="' + r1(y + 36 * s) + '" x2="' + r1(x + 4 * s) + '" y2="' + r1(y + 40 * s) + '" stroke="' + F.tinte + '" stroke-width="1.6"/>' +
      '<circle cx="' + r1(x) + '" cy="' + r1(y + 6.5 * s) + '" r="' + r1(6 * s) + '" fill="' + HAUT + '" stroke="' + F.tinte + '" stroke-width="1"/>' +
      (extra || '') + '</g>';
  }

  /* Ein Haus: x, y = linke obere Ecke der Wand. */
  function haus(F, x, y, b, hw, wand, dach) {
    var r = b * 0.5;
    var tb = Math.max(4, b * 0.22);
    return '<path d="M' + r1(x - 2) + ' ' + r1(y) + ' L' + r1(x + b / 2) + ' ' + r1(y - r) + ' L' + r1(x + b + 2) + ' ' + r1(y) + ' Z" fill="' + dach + '" stroke="' + F.tinte + '" stroke-width="1"/>' +
      '<rect x="' + r1(x) + '" y="' + r1(y) + '" width="' + r1(b) + '" height="' + r1(hw) + '" fill="' + wand + '" stroke="' + F.tinte + '" stroke-width="1"/>' +
      '<rect x="' + r1(x + b / 2 - tb / 2) + '" y="' + r1(y + hw - tb * 1.5) + '" width="' + r1(tb) + '" height="' + r1(tb * 1.5) + '" fill="' + F.holz + '"/>';
  }

  function baum(F, x, y, r) {
    return '<rect x="' + r1(x - 1.5) + '" y="' + r1(y) + '" width="3" height="' + r1(r + 2) + '" fill="' + F.holz + '"/>' +
      '<circle cx="' + r1(x) + '" cy="' + r1(y) + '" r="' + r1(r) + '" fill="#86a865" stroke="' + F.gruen + '" stroke-width="1"/>';
  }

  function windmuehle(F, x, y) {
    /* x, y = Nabe der Flügel */
    var fl = '<rect x="' + r1(x - 2.5) + '" y="' + r1(y - 18) + '" width="5" height="15"/>' +
      '<rect x="' + r1(x - 2.5) + '" y="' + r1(y + 3) + '" width="5" height="15"/>' +
      '<rect x="' + r1(x - 18) + '" y="' + r1(y - 2.5) + '" width="15" height="5"/>' +
      '<rect x="' + r1(x + 3) + '" y="' + r1(y - 2.5) + '" width="15" height="5"/>';
    return '<path d="M' + r1(x - 5) + ' ' + r1(y + 2) + ' L' + r1(x + 5) + ' ' + r1(y + 2) + ' L' + r1(x + 9) + ' ' + r1(y + 28) + ' L' + r1(x - 9) + ' ' + r1(y + 28) + ' Z" fill="' + F.stein + '" stroke="' + F.tinte + '" stroke-width="1"/>' +
      '<g transform="rotate(45 ' + x + ' ' + y + ')" fill="' + F.papier + '" stroke="' + F.tinte + '" stroke-width="1">' + fl + '</g>' +
      '<circle cx="' + x + '" cy="' + y + '" r="2" fill="' + F.tinte + '"/>';
  }

  function dorf(F, x, y) {
    /* drei kleine Häuser, x, y = linke obere Ecke des ersten */
    return haus(F, x, y + 4, 12, 9, '#c8d6e6', F.lapis) + haus(F, x + 15, y, 12, 9, '#c8d6e6', F.lapis) + haus(F, x + 30, y + 5, 12, 9, '#c8d6e6', F.lapis);
  }

  W.abb.registriere('grundherrschaft', {
    viewBox: '0 0 360 420',
    titel: 'Vereinfachtes Schaubild der mittelalterlichen Grundherrschaft',
    strukturen: {
      grundherr: { label: 'Grundherr', x: 232, y: 24, a: 'start' },
      freieBauern: { label: 'freie Bauern', kurz: 'freie|Bauern', x: 26, y: 216 },
      herrenland: { label: 'Herrenland', x: 42, y: 386, a: 'start' },
      hufenland: { label: 'Hufenland', x: 42, y: 410, a: 'start' },
      herrenhof: { label: 'Herrenhof', x: 158, y: 202 },
      wald: { label: 'Wald', x: 104, y: 232 },
      muehle: { label: 'Mühle', x: 128, y: 286 },
      leibeigene: { label: 'Leibeigene', x: 178, y: 290 },
      meier: { label: 'Meier', x: 292, y: 216 },
      fronhoefe: { label: 'Fronhöfe', x: 290, y: 268 },
      doerfer: { label: 'Dörfer', x: 214, y: 312 },
      hoerige: { label: 'Hörige', x: 206, y: 394 }
    },
    basis: function (o, uid) {
      var F = W.abb.F;
      var FARBEN = { gruen: [F.hellgruen, F.gruen], blau: [F.hellblau, F.lapis], rot: [F.rosa, F.zinnober] };
      var s = '';

      /* eigene Pfeilspitzen (feste Größe, unabhängig von der Breite der Bahn) */
      s += '<defs>' + Object.keys(FARBEN).map(function (k) {
        return '<marker id="' + uid + '-gh-' + k + '" viewBox="0 0 16 20" refX="1" refY="10" markerUnits="userSpaceOnUse" markerWidth="16" markerHeight="20" orient="auto">' +
          '<path d="M0,0 L16,10 L0,20 z" fill="' + FARBEN[k][0] + '" stroke="' + FARBEN[k][1] + '" stroke-width="1.5"/></marker>';
      }).join('') + PFEILE.map(function (pf) {
        return '<path id="' + uid + '-tp-' + pf.key + '" d="' + pf.textD + '" fill="none"/>';
      }).join('') + '</defs>';

      /* Flächen */
      s += '<ellipse cx="204" cy="254" rx="150" ry="130" fill="' + HUFENLAND + '" stroke="#8c76a0" stroke-width="1.5"/>';
      s += '<ellipse cx="206" cy="216" rx="118" ry="84" fill="' + HERRENLAND + '" stroke="' + F.ocker + '" stroke-width="1.5"/>';
      /* Legende ohne Namen (die Namen setzen die Strukturen) */
      s += '<rect x="8" y="379" width="22" height="14" rx="2" fill="' + HERRENLAND + '" stroke="' + F.ocker + '" stroke-width="1.5"/>';
      s += '<rect x="8" y="403" width="22" height="14" rx="2" fill="' + HUFENLAND + '" stroke="#8c76a0" stroke-width="1.5"/>';

      /* Herrenland: Herrenhof, Wald, Mühle, Leibeigene, Meier, Fronhöfe */
      s += haus(F, 136, 166, 40, 22, F.papier, F.dach) + haus(F, 180, 176, 15, 12, F.papier, F.dach);
      s += baum(F, 108, 198, 8) + baum(F, 123, 190, 8) + baum(F, 114, 214, 7);
      s += windmuehle(F, 130, 244);
      s += person(F, 162, 234, 0.9, F.ocker) + person(F, 178, 236, 0.9, F.holz);
      s += person(F, 290, 160, 1, F.gruen, '<line x1="299" y1="168" x2="301" y2="200" stroke="' + F.holz + '" stroke-width="2"/>');
      s += haus(F, 274, 240, 16, 12, F.papier, F.lapis) + haus(F, 296, 236, 16, 12, F.papier, F.lapis);

      /* Hufenland: Dörfer und Hörige */
      s += dorf(F, 146, 308) + dorf(F, 240, 306);
      s += person(F, 194, 328, 1, '#9a8a6a') + person(F, 216, 330, 0.95, '#7a8fb0');

      /* außerhalb: freie Bauern auf eigenem Land */
      s += '<ellipse cx="26" cy="194" rx="23" ry="7" fill="' + F.hellgruen + '" stroke="' + F.gruen + '" stroke-width="1.2"/>';
      s += person(F, 26, 152, 1, '#8c8a5a', '<line x1="36" y1="160" x2="40" y2="192" stroke="' + F.holz + '" stroke-width="2"/>');

      /* Pfeile als breite Bahnen */
      PFEILE.forEach(function (pf) {
        var c = FARBEN[pf.farbe];
        s += '<path d="' + pf.d + '" fill="none" stroke="' + c[1] + '" stroke-width="15"/>';
        s += '<path d="' + pf.d + '" fill="none" stroke="' + c[0] + '" stroke-width="12" marker-end="url(#' + uid + '-gh-' + pf.farbe + ')"/>';
      });

      /* Grundherr oben, über den Pfeilenden */
      s += person(F, 200, 12, 1.3, F.zinnober, '<path d="M190 14 L200 6 L210 14 Z" fill="' + F.gold + '" stroke="' + F.tinte + '" stroke-width="1"/>');

      if (o.pfeile === true) {
        s += PFEILE.map(function (pf) {
          return '<text class="abb-text" dy="0.35em"><textPath href="#' + uid + '-tp-' + pf.key + '" startOffset="50%" text-anchor="middle">' + W.esc(pf.text) + '</textPath></text>';
        }).join('');
      } else if (o.pfeile === 'buchstaben') {
        s += PFEILE.filter(function (pf) { return pf.buchstabe !== 'E'; }).map(function (pf) {
          return '<g><circle cx="' + pf.bx + '" cy="' + pf.by + '" r="10" fill="' + F.papier + '" stroke="' + F.tinte + '" stroke-width="1.5"/>' +
            '<text class="abb-text abb-fett" x="' + pf.bx + '" y="' + (pf.by + 4) + '" text-anchor="middle">' + pf.buchstabe + '</text></g>';
        }).join('');
      }
      return s;
    }
  });
})();
