/* Abbildungen zum Bauplatz burg: erdachte Burg zum Beschriften, Weg zum Ritter. */
(function () {
  'use strict';
  var W = (window.W = window.W || {});
  var F = W.abb.F;

  var FELS = '#a99f8a', SAND = '#eadfbf', DUNKEL = '#3b3128', FEUER = '#d9822b', SEITE = '#a3967f', WAND = '#efe5cc';
  var RAND = ' stroke="' + F.linie + '" stroke-width="1"';

  function rect(x, y, w, h, fill, ohneRand) {
    return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + fill + '"' + (ohneRand ? '' : RAND) + '/>';
  }
  function poly(pts, fill, ohneRand) {
    return '<polygon points="' + pts + '" fill="' + fill + '"' + (ohneRand ? '' : RAND) + '/>';
  }
  function linie(x1, y1, x2, y2, farbe, breite, extra) {
    return '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" stroke="' + farbe + '" stroke-width="' + (breite || 1) + '"' + (extra || '') + '/>';
  }
  /** Zinnen: kleine Mauerzähne von x0 bis x1 auf Höhe y. */
  function zinnen(x0, x1, y, fill) {
    var s = '';
    for (var x = x0; x + 7 <= x1; x += 11) s += rect(x, y - 8, 7, 8, fill);
    return s;
  }
  /** Mauerfugen als feine Linien. */
  function fugen(x0, y0, x1, y1) {
    var s = '', z = 0;
    for (var y = y0 + 9; y < y1; y += 9) {
      s += linie(x0, y, x1, y, F.linie, 0.6, ' opacity="0.3"');
      for (var x = x0 + (z % 2 ? 8 : 16); x < x1; x += 16) s += linie(x, y - 9, x, y, F.linie, 0.6, ' opacity="0.3"');
      z++;
    }
    return s;
  }
  /** Schießscharte in Kreuzform. */
  function scharte(x, y) { return rect(x - 1.5, y, 3, 18, DUNKEL, true) + rect(x - 4.5, y + 7, 9, 3, DUNKEL, true); }
  function rauch(x, y) {
    return '<path d="M' + x + ',' + y + ' c-6,-7 6,-12 -1,-20 c-5,-6 4,-10 1,-16" fill="none" stroke="' + F.grau + '" stroke-width="2" opacity="0.55"/>';
  }

  W.abb.registriere('burg', {
    viewBox: '0 0 360 360',
    titel: 'Erdachte mittelalterliche Burg mit Vorburg und Kernburg',
    strukturen: {
      bergfried: { label: 'Bergfried', x: 212, y: 56 },
      palas: { label: 'Palas', x: 74, y: 72 },
      saal: { label: 'großer Saal', x: 74, y: 105 },
      kemenate: { label: 'Kemenate', x: 138, y: 144 },
      kapelle: { label: 'Kapelle', x: 171, y: 107 },
      plumpsklo: { label: 'Plumpsklo', x: 16, y: 150, tx: 24, ty: 134, a: 'start' },
      brunnen: { label: 'Brunnen', x: 66, y: 176, tx: 85, ty: 174, a: 'end' },
      burggarten: { label: 'Burggarten', x: 137, y: 174 },
      kernburg: { label: 'Kernburg', x: 206, y: 168 },
      vorburg: { label: 'Vorburg', x: 276, y: 224 },
      stall: { label: 'Stall', x: 250, y: 202 },
      schmiede: { label: 'Schmiede', x: 305, y: 190 },
      wachturm: { label: 'Wachturm', x: 345, y: 176, a: 'end' },
      torturm: { label: 'Torturm', x: 201, y: 224 },
      wehrgang: { label: 'Wehrgang', x: 110, y: 229 },
      wehrmauer: { label: 'Wehrmauer', x: 110, y: 268 },
      schiessscharte: { label: 'Schießscharte', x: 290, y: 282, tx: 290, ty: 260 },
      verlies: { label: 'Verlies', x: 25, y: 240, tx: 25, ty: 266 },
      tor: { label: 'Tor mit Zugbrücke', kurz: 'Tor mit|Zugbrücke', x: 201, y: 310 },
      burggraben: { label: 'Burggraben', x: 100, y: 307 }
    },
    basis: function () {
      var s = '';
      /* Himmel, ferne Hügel, Fels */
      s += rect(0, 0, 360, 360, F.himmel, true);
      s += '<path d="M0,150 C40,128 90,138 130,146 C180,122 260,136 300,124 C330,116 350,122 360,126 L360,300 L0,300 Z" fill="' + F.hellgruen + '"/>';
      s += poly('0,176 16,150 16,300 0,300', FELS, true);

      /* Kernburg: Hof */
      s += rect(16, 148, 214, 42, SAND, true);

      /* Bergfried */
      s += rect(194, 22, 36, 128, F.stein) + fugen(194, 22, 230, 150);
      s += rect(194, 14, 6, 8, F.stein) + rect(204, 14, 6, 8, F.stein) + rect(214, 14, 6, 8, F.stein) + rect(224, 14, 6, 8, F.stein);
      s += rect(210, 30, 3, 10, DUNKEL, true) + rect(210, 84, 3, 10, DUNKEL, true) + rect(210, 118, 3, 10, DUNKEL, true);

      /* Palas mit großem Saal (aufgeschnitten) */
      s += rect(30, 84, 88, 66, F.stein) + fugen(30, 118, 118, 150);
      s += poly('24,86 74,50 124,86', F.dach);
      s += rect(40, 92, 68, 26, F.papier);
      s += '<path d="M52,96 h6 v5 q-3,4 -6,0 z" fill="' + F.zinnober + '"/><path d="M64,96 h6 v5 q-3,4 -6,0 z" fill="' + F.lapis + '"/>';
      s += rect(94, 96, 10, 22, F.grau) + rect(96, 104, 6, 14, DUNKEL, true) + '<path d="M96.5,118 q2.5,-9 5,0 z" fill="' + FEUER + '"/>';
      s += rect(46, 109, 38, 3, F.holz, true) + linie(49, 112, 49, 117, F.holz, 1.5) + linie(81, 112, 81, 117, F.holz, 1.5) + rect(46, 114, 38, 2, F.holz, true);
      s += '<path d="M46,135 v-6 a2.5,2.5 0 0 1 5,0 v6 z M62,135 v-6 a2.5,2.5 0 0 1 5,0 v6 z M78,135 v-6 a2.5,2.5 0 0 1 5,0 v6 z" fill="' + DUNKEL + '"/>';
      s += '<path d="M96,150 v-12 a6,6 0 0 1 12,0 v12 z" fill="' + DUNKEL + '"/>';

      /* Plumpsklo als Vorbau an der Außenwand */
      s += poly('16,117 30,117 30,111', F.dach) + rect(18, 117, 12, 14, F.holz) + rect(21, 131, 6, 3, DUNKEL, true) + linie(18, 131, 30, 139, F.holz, 1.5);

      /* Kemenate mit Kamin (aufgeschnitten) */
      s += rect(139, 80, 7, 18, F.stein) + rauch(142, 78);
      s += rect(118, 104, 32, 46, F.stein);
      s += poly('115,106 134,88 153,106', F.dach);
      s += rect(122, 110, 24, 22, F.papier);
      s += poly('124,112 134,112 132,118 126,118', F.grau) + rect(126, 118, 6, 10, DUNKEL, true) + '<path d="M127,128 q2,-7 4,0 z" fill="' + FEUER + '"/>';
      s += rect(136, 122, 3, 8, F.holz, true) + rect(138, 125, 7, 4, F.zinnober, true);

      /* Kapelle */
      s += rect(154, 116, 34, 34, WAND);
      s += poly('150,118 171,94 192,118', F.dach);
      s += linie(171, 82, 171, 95, F.gold, 2) + linie(166, 86, 176, 86, F.gold, 2);
      s += '<circle cx="171" cy="127" r="4" fill="' + F.hellblau + '"' + RAND + '/>';
      s += '<path d="M166,150 v-7 a5,5 0 0 1 10,0 v7 z" fill="' + DUNKEL + '"/>';

      /* Brunnen im Hof */
      s += rect(84, 172, 16, 10, F.stein) + rect(85, 159, 2, 13, F.holz, true) + rect(97, 159, 2, 13, F.holz, true);
      s += poly('81,161 92,152 103,161', F.dach) + linie(86, 163, 98, 163, F.holz, 1.5) + linie(92, 163, 92, 168, F.tinte, 0.8) + rect(90, 167, 4, 4, F.holz, true);

      /* Burggarten */
      s += rect(104, 160, 64, 24, F.hellgruen) ;
      for (var gi = 0; gi < 6; gi++) {
        s += '<circle cx="' + (110 + gi * 10.5) + '" cy="166" r="2.6" fill="' + F.gruen + '"/>';
        s += '<circle cx="' + (110 + gi * 10.5) + '" cy="172" r="2.2" fill="' + (gi % 2 ? F.zinnober : F.gruen) + '"/>';
        s += '<circle cx="' + (110 + gi * 10.5) + '" cy="178" r="2.6" fill="' + F.gruen + '"/>';
      }

      /* Mauer der Kernburg (Vorderseite) und Seitenwand */
      s += rect(16, 188, 214, 52, F.stein) + fugen(16, 188, 230, 240);
      s += poly('230,150 238,156 238,240 230,240', SEITE);

      /* Vorburg: Boden, Stall, Schmiede */
      s += rect(238, 186, 84, 54, SAND, true);
      s += rect(242, 186, 44, 30, WAND) + poly('238,188 264,168 290,188', F.dach);
      s += rect(256, 196, 16, 20, DUNKEL) + rect(256, 206, 16, 10, F.holz) + linie(256, 206, 272, 216, DUNKEL, 1) + linie(272, 206, 256, 216, DUNKEL, 1);
      s += rect(275, 209, 9, 7, F.ocker) + linie(275, 212.5, 284, 212.5, F.holz, 0.8);
      s += rect(311, 174, 6, 14, F.stein) + rauch(314, 172);
      s += rect(292, 194, 26, 22, WAND) + poly('289,196 305,182 321,196', F.dach);
      s += rect(296, 202, 12, 14, DUNKEL) + '<circle cx="302" cy="212" r="3" fill="' + FEUER + '"/>';
      s += '<path d="M309,210 h9 l-2,3 h-2 v3 h-2 v-3 h-2 z" fill="' + F.tinte + '"/>';

      /* Wachturm */
      s += rect(324, 150, 26, 142, F.stein) + fugen(324, 150, 350, 292);
      s += rect(320, 128, 34, 22, F.holz) + rect(326, 134, 6, 8, DUNKEL, true) + rect(342, 134, 6, 8, DUNKEL, true);
      s += poly('316,130 337,106 358,130', F.dach);

      /* Eckturm links mit Verlies (aufgeschnitten) */
      s += rect(6, 216, 38, 76, F.stein) + fugen(6, 216, 44, 292) + zinnen(6, 44, 216, F.stein);
      s += rect(24, 226, 3, 10, DUNKEL, true);
      s += rect(12, 256, 26, 30, DUNKEL) + rect(21, 256, 8, 3, F.grau, true);
      for (var vi = 0; vi < 4; vi++) s += linie(16 + vi * 6, 259, 16 + vi * 6, 286, F.grau, 1, ' opacity="0.7"');

      /* Wehrmauer vorne: links mit hölzernem Wehrgang, rechts mit Zinnen */
      s += rect(44, 240, 278, 52, F.stein) + fugen(44, 240, 322, 292);
      s += zinnen(224, 322, 240, F.stein);
      s += rect(44, 220, 136, 20, F.holz);
      for (var wi = 0; wi < 17; wi++) s += linie(48 + wi * 8, 220, 48 + wi * 8, 240, F.tinte, 0.6, ' opacity="0.3"');
      for (var oi = 0; oi < 8; oi++) s += rect(50 + oi * 16, 226, 6, 8, DUNKEL, true);
      s += poly('40,222 184,222 180,212 44,212', F.dach);
      s += scharte(70, 252) + scharte(150, 252) + scharte(250, 250) + scharte(290, 249);

      /* Torturm mit Tor */
      s += rect(180, 196, 42, 96, F.stein) + fugen(180, 196, 222, 292) + zinnen(180, 222, 196, F.stein);
      s += rect(199, 199, 3, 9, DUNKEL, true);
      s += '<path d="M189,292 L189,266 A12,12 0 0 1 213,266 L213,292 Z" fill="' + DUNKEL + '"/>';
      for (var ti = 0; ti < 5; ti++) s += linie(193 + ti * 4, 258, 193 + ti * 4, 276, F.grau, 1);
      s += linie(189, 266, 213, 266, F.grau, 1) + linie(189, 272, 213, 272, F.grau, 1);
      s += '<circle cx="185" cy="258" r="1.8" fill="' + F.tinte + '"/><circle cx="217" cy="258" r="1.8" fill="' + F.tinte + '"/>';

      /* Burggraben, Zugbrücke, Vordergrund */
      s += rect(0, 292, 360, 30, F.wasser, true) + linie(0, 292, 360, 292, F.linie, 1) + linie(0, 322, 360, 322, F.linie, 1);
      s += '<path d="M14,303 q6,-3 12,0 t12,0 M240,310 q6,-3 12,0 t12,0 M300,300 q6,-3 12,0 t12,0 M130,314 q6,-3 12,0 t12,0" fill="none" stroke="' + F.hellblau + '" stroke-width="1.5"/>';
      s += rect(0, 322, 360, 38, F.hellgruen, true);
      s += poly('183,323 219,323 240,360 162,360', '#e2cf9c', true);
      s += poly('189,292 213,292 219,324 183,324', F.holz);
      for (var bi = 1; bi < 5; bi++) s += linie(188 - bi, 292 + bi * 6.4, 214 + bi, 292 + bi * 6.4, F.tinte, 0.7, ' opacity="0.45"');
      s += linie(185, 258, 184, 322, F.tinte, 1, ' stroke-dasharray="2 2"') + linie(217, 258, 218, 322, F.tinte, 1, ' stroke-dasharray="2 2"');
      return s;
    }
  });

  /* ---------- Der Weg zum Ritter: Page → Knappe → Ritterschlag ---------- */

  /** Einfache Figur: Füße bei (x, y), Größe s. */
  function figur(x, y, s, tunika) {
    var k = function (v) { return Math.round(v * 10) / 10; };
    return rect(k(x - 4.5 * s), k(y - 13 * s), k(3.5 * s), k(13 * s), F.tinte, true) +
      rect(k(x + 1 * s), k(y - 13 * s), k(3.5 * s), k(13 * s), F.tinte, true) +
      linie(k(x - 5 * s), k(y - 28 * s), k(x - 10 * s), k(y - 16 * s), tunika, k(3 * s), ' stroke-linecap="round"') +
      linie(k(x + 5 * s), k(y - 28 * s), k(x + 10 * s), k(y - 16 * s), tunika, k(3 * s), ' stroke-linecap="round"') +
      poly(k(x - 8 * s) + ',' + k(y - 12 * s) + ' ' + k(x + 8 * s) + ',' + k(y - 12 * s) + ' ' + k(x + 5 * s) + ',' + k(y - 30 * s) + ' ' + k(x - 5 * s) + ',' + k(y - 30 * s), tunika) +
      '<circle cx="' + x + '" cy="' + k(y - 35 * s) + '" r="' + k(5 * s) + '" fill="' + F.rosa + '"' + RAND + '/>';
  }
  function zeilen(x, y0, liste, fett) {
    return liste.map(function (t, i) {
      return '<text class="abb-text' + (fett && i === 0 ? ' abb-fett' : '') + '" x="' + x + '" y="' + (y0 + i * 13) + '" text-anchor="middle"' + (i ? ' style="font-size:11px"' : '') + '>' + W.esc(t) + '</text>';
    }).join('');
  }

  W.abb.registriere('ritter-weg', {
    viewBox: '0 0 360 222',
    titel: 'Der Weg eines adligen Jungen zum Ritter',
    strukturen: {
      page: { label: 'Page', x: 64, y: 100 },
      knappe: { label: 'Knappe', x: 180, y: 50 },
      ritterschlag: { label: 'Ritterschlag', x: 296, y: 18 }
    },
    basis: function (o, uid) {
      var s = '';
      s += rect(8, 150, 112, 66, F.hell) + rect(124, 118, 112, 98, F.hell) + rect(240, 86, 112, 130, F.hell);
      s += zeilen(64, 168, ['ab 7 Jahren', 'Lanze, Schwert,', 'Turnierregeln,', 'gutes Benehmen'], true);
      s += zeilen(180, 136, ['ab 14 Jahren', 'begleitet seinen', 'Herrn zu Turnieren', 'und in den Kampf'], true);
      s += zeilen(296, 104, ['etwa 20 Jahre', 'wenn er sich', 'bewährt hat:', 'ein Schwert wird', 'feierlich umgelegt'], true);
      /* Pfeile */
      s += '<path d="M104,138 Q120,118 136,108" fill="none" stroke="' + F.zinnober + '" stroke-width="2" marker-end="url(#' + uid + '-p-rot)"/>';
      s += '<path d="M220,106 Q236,86 252,76" fill="none" stroke="' + F.zinnober + '" stroke-width="2" marker-end="url(#' + uid + '-p-rot)"/>';
      /* Page mit Holzschwert */
      s += figur(64, 150, 0.9, F.lapis) + linie(73, 135, 81, 116, F.holz, 2.5, ' stroke-linecap="round"');
      /* Knappe mit Schild und Lanze */
      s += linie(192, 118, 196, 68, F.holz, 2.5) + poly('195,61 199,69 195,71', F.grau);
      s += figur(180, 118, 1.1, F.gruen);
      s += '<path d="M163,90 h11 v9 q-5.5,8 -11,0 z" fill="' + F.zinnober + '"' + RAND + '/>';
      /* Ritter mit umgelegtem Schwert */
      s += figur(296, 86, 1.3, F.zinnober);
      s += linie(287, 68, 305, 68, F.gold, 2.5) + linie(301, 68, 310, 84, F.grau, 3, ' stroke-linecap="round"') + linie(298, 70, 304, 66, F.tinte, 2);
      return s;
    }
  });
})();
