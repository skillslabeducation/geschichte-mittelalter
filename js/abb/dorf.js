/* Abbildungen zum Bauplatz dorf: Dreifelderwirtschaft (Schaubild) und Neuerungen in der Landwirtschaft (zum Beschriften). */
(function () {
  'use strict';
  var W = (window.W = window.W || {});

  /* ---------- Dreifelderwirtschaft ---------- */

  /* Fruchtfolge wie im Buch S. 34: Wintersaat → Frühjahrssaat → Brache → Wintersaat … */
  var FOLGE = ['winter', 'fruehjahr', 'brache'];
  var NAME = { winter: 'Wintersaat', fruehjahr: 'Frühjahrssaat', brache: 'Brache', saat: 'Saat', frage: '?' };

  function fuellung(art) {
    var F = W.abb.F;
    return { winter: F.ocker, fruehjahr: F.hellgruen, brache: '#dccbaa', saat: F.ocker, frage: F.papier }[art];
  }

  /* Kleines Muster im oberen Teil eines Feldes: Ähren, Keimlinge oder Grasbüschel. */
  function muster(art, x, y, w) {
    var F = W.abb.F;
    var s = '';
    var n = Math.max(4, Math.floor(w / 16));
    var schritt = (w - 16) / (n - 1);
    for (var i = 0; i < n; i++) {
      var px = x + 8 + i * schritt;
      if (art === 'winter' || art === 'saat') {
        s += '<line x1="' + px + '" y1="' + (y + 26) + '" x2="' + px + '" y2="' + (y + 10) + '" stroke="' + F.holz + '" stroke-width="1.4"/>' +
          '<ellipse cx="' + px + '" cy="' + (y + 9) + '" rx="2.2" ry="4.5" fill="' + F.gold + '"/>';
      } else if (art === 'fruehjahr') {
        s += '<path d="M' + px + ',' + (y + 26) + ' L' + px + ',' + (y + 16) + ' M' + px + ',' + (y + 20) + ' Q' + (px - 5) + ',' + (y + 15) + ' ' + (px - 6) + ',' + (y + 13) +
          ' M' + px + ',' + (y + 18) + ' Q' + (px + 5) + ',' + (y + 13) + ' ' + (px + 6) + ',' + (y + 11) + '" stroke="' + F.gruen + '" stroke-width="1.6" fill="none"/>';
      } else if (art === 'brache') {
        if (i % 2) continue;
        s += '<path d="M' + (px - 4) + ',' + (y + 26) + ' L' + (px - 2) + ',' + (y + 19) + ' M' + px + ',' + (y + 26) + ' L' + px + ',' + (y + 17) + ' M' + (px + 4) + ',' + (y + 26) + ' L' + (px + 2) + ',' + (y + 19) + '" stroke="' + F.grau + '" stroke-width="1.3" fill="none"/>';
      }
    }
    return s;
  }

  function feld(art, x, y, w, hoehe) {
    var F = W.abb.F;
    var s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + hoehe + '" rx="5" fill="' + fuellung(art) + '" stroke="' + F.linie + '" stroke-width="1.2"' +
      (art === 'frage' ? ' stroke-dasharray="4 3"' : '') + '/>';
    if (art === 'frage') {
      return s + '<text class="abb-titel" style="font-size:24px" x="' + (x + w / 2) + '" y="' + (y + hoehe / 2 + 8) + '" text-anchor="middle">?</text>';
    }
    return s + muster(art, x, y, w) + '<text class="abb-text abb-fett" x="' + (x + w / 2) + '" y="' + (y + hoehe - 8) + '" text-anchor="middle">' + NAME[art] + '</text>';
  }

  W.abb.registriere('dreifelder', {
    viewBox: '0 0 360 384',
    titel: 'Schaubild: Dreifelderwirtschaft über drei Jahre, darunter zum Vergleich die ältere Zweifelderwirtschaft',
    strukturen: {},
    /* o.verdeckt: ['2-1', '3-2', …] (Jahr-Feld) zeigt diese Felder mit Fragezeichen. */
    basis: function (o, uid) {
      var F = W.abb.F;
      var verdeckt = o.verdeckt || [];
      var X0 = 66, B = 94, GAP = 4, H = 46;
      var ys = [52, 112, 172];
      var s = '<rect x="0" y="0" width="360" height="384" fill="' + F.papier + '"/>' +
        '<text class="abb-titel" x="180" y="20" text-anchor="middle">Dreifelderwirtschaft (ab dem 11. Jh.)</text>';
      ['Feld A', 'Feld B', 'Feld C'].forEach(function (t, f) {
        s += '<text class="abb-text abb-fett" x="' + (X0 + f * (B + GAP) + B / 2) + '" y="44" text-anchor="middle">' + t + '</text>';
      });
      ys.forEach(function (y, j) {
        s += '<text class="abb-text abb-fett" x="4" y="' + (y + H / 2 + 4) + '">' + (j + 1) + '. Jahr</text>';
        for (var f = 0; f < 3; f++) {
          var art = FOLGE[(j + f) % 3];
          if (verdeckt.indexOf((j + 1) + '-' + (f + 1)) >= 0) art = 'frage';
          var x = X0 + f * (B + GAP);
          s += feld(art, x, y, B, H);
          if (j < 2) {
            s += '<line x1="' + (x + B / 2) + '" y1="' + (y + H + 1) + '" x2="' + (x + B / 2) + '" y2="' + (ys[j + 1] - 2) + '" stroke="' + F.tinte + '" stroke-width="1.6" marker-end="url(#' + uid + '-p-tinte)"/>';
          }
        }
      });
      /* Vergleich: die ältere Zweifelderwirtschaft */
      var B2 = 143, y2 = [276, 330], H2 = 46;
      s += '<line x1="8" y1="234" x2="352" y2="234" stroke="' + F.hell + '" stroke-width="2"/>' +
        '<text class="abb-text abb-fett" x="180" y="254" text-anchor="middle">Früher: Zweifelderwirtschaft (bis zum 11. Jh.)</text>';
      ['Feld A', 'Feld B'].forEach(function (t, f) {
        s += '<text class="abb-text abb-fett" x="' + (X0 + f * (B2 + GAP) + B2 / 2) + '" y="270" text-anchor="middle">' + t + '</text>';
      });
      y2.forEach(function (y, j) {
        s += '<text class="abb-text abb-fett" x="4" y="' + (y + H2 / 2 + 4) + '">' + (j + 1) + '. Jahr</text>';
        for (var f = 0; f < 2; f++) s += feld((j + f) % 2 ? 'brache' : 'saat', X0 + f * (B2 + GAP), y, B2, H2);
      });
      return s;
    }
  });

  /* ---------- Neuerungen in der Landwirtschaft (Buch S. 35, M3), zum Beschriften ---------- */

  function rad(cx, cy, r, farbe) {
    var s = '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="none" stroke="' + farbe + '" stroke-width="3"/>';
    for (var k = 0; k < 4; k++) {
      var a = k * Math.PI / 4;
      var dx = Math.cos(a) * r, dy = Math.sin(a) * r;
      s += '<line x1="' + (cx - dx).toFixed(1) + '" y1="' + (cy - dy).toFixed(1) + '" x2="' + (cx + dx).toFixed(1) + '" y2="' + (cy + dy).toFixed(1) + '" stroke="' + farbe + '" stroke-width="1.5"/>';
    }
    return s + '<circle cx="' + cx + '" cy="' + cy + '" r="3" fill="' + farbe + '"/>';
  }

  function sense(F) {
    return '<line x1="20" y1="98" x2="160" y2="98" stroke="' + F.hellgruen + '" stroke-width="3"/>' +
      '<path d="M56,94 Q84,58 128,14" stroke="' + F.holz + '" stroke-width="4.5" fill="none" stroke-linecap="round"/>' +
      '<line x1="74" y1="60" x2="92" y2="72" stroke="' + F.holz + '" stroke-width="4" stroke-linecap="round"/>' +
      '<line x1="102" y1="32" x2="118" y2="44" stroke="' + F.holz + '" stroke-width="4" stroke-linecap="round"/>' +
      '<path d="M56,94 Q104,104 150,82 Q108,92 58,86 Z" fill="' + F.stein + '" stroke="' + F.tinte + '" stroke-width="1.3"/>';
  }

  function pflug(F) {
    var s = '<line x1="196" y1="96" x2="356" y2="96" stroke="' + F.holz + '" stroke-width="2" opacity=".6"/>' +
      '<path d="M200,96 L220,92 L240,96 L262,91 L282,96" stroke="' + F.holz + '" stroke-width="2" fill="none" opacity=".6"/>' +
      '<line x1="200" y1="50" x2="318" y2="50" stroke="' + F.holz + '" stroke-width="5" stroke-linecap="round"/>' +
      rad(222, 74, 18, F.holz) +
      '<line x1="222" y1="74" x2="236" y2="50" stroke="' + F.holz + '" stroke-width="3"/>' +
      '<line x1="276" y1="50" x2="284" y2="88" stroke="' + F.grau + '" stroke-width="4"/>' +
      '<path d="M284,94 L328,82 L330,94 Z" fill="' + F.grau + '" stroke="' + F.tinte + '" stroke-width="1.2"/>' +
      '<line x1="300" y1="50" x2="304" y2="86" stroke="' + F.holz + '" stroke-width="4"/>' +
      '<line x1="314" y1="52" x2="346" y2="20" stroke="' + F.holz + '" stroke-width="4" stroke-linecap="round"/>' +
      '<line x1="304" y1="60" x2="340" y2="30" stroke="' + F.holz + '" stroke-width="4" stroke-linecap="round"/>';
    return s;
  }

  function muehle(F) {
    var s = '<path d="M8,232 Q20,226 32,232 T56,232 T80,232 T104,232 L104,244 L8,244 Z" fill="' + F.wasser + '"/>' +
      '<rect x="14" y="190" width="46" height="40" fill="' + F.stein + '" stroke="' + F.linie + '" stroke-width="1.2"/>' +
      '<path d="M10,192 L37,170 L64,192 Z" fill="' + F.dach + '" stroke="' + F.linie + '" stroke-width="1.2"/>' +
      '<rect x="31" y="208" width="11" height="22" fill="' + F.holz + '"/>' +
      rad(78, 218, 18, F.holz);
    /* Bockwindmühle: Haus auf einem Bock, vier Flügel */
    s += '<line x1="136" y1="214" x2="122" y2="244" stroke="' + F.holz + '" stroke-width="3"/>' +
      '<line x1="136" y1="214" x2="150" y2="244" stroke="' + F.holz + '" stroke-width="3"/>' +
      '<line x1="136" y1="214" x2="136" y2="244" stroke="' + F.holz + '" stroke-width="3"/>' +
      '<rect x="122" y="180" width="28" height="36" fill="' + F.holz + '" stroke="' + F.tinte + '" stroke-width="1.2"/>' +
      '<path d="M120,182 L136,170 L152,182 Z" fill="' + F.dach + '" stroke="' + F.tinte + '" stroke-width="1.2"/>';
    [20, 110, 200, 290].forEach(function (w) {
      s += '<g transform="rotate(' + w + ' 128 186)">' +
        '<line x1="128" y1="186" x2="166" y2="186" stroke="' + F.tinte + '" stroke-width="2"/>' +
        '<rect x="140" y="180" width="26" height="7" fill="' + F.papier + '" stroke="' + F.tinte + '" stroke-width="1"/></g>';
    });
    return s + '<circle cx="128" cy="186" r="3" fill="' + F.tinte + '"/>';
  }

  function wagen(F) {
    return '<line x1="196" y1="236" x2="356" y2="236" stroke="' + F.hellgruen + '" stroke-width="3"/>' +
      rad(248, 212, 15, F.grau) + rad(314, 212, 15, F.grau) +
      '<rect x="216" y="178" width="118" height="30" fill="' + F.ocker + '" stroke="' + F.holz + '" stroke-width="2"/>' +
      '<line x1="216" y1="188" x2="334" y2="188" stroke="' + F.holz + '" stroke-width="1.5"/>' +
      '<line x1="216" y1="198" x2="334" y2="198" stroke="' + F.holz + '" stroke-width="1.5"/>' +
      '<line x1="246" y1="178" x2="246" y2="208" stroke="' + F.holz + '" stroke-width="2"/>' +
      '<line x1="276" y1="178" x2="276" y2="208" stroke="' + F.holz + '" stroke-width="2"/>' +
      '<line x1="306" y1="178" x2="306" y2="208" stroke="' + F.holz + '" stroke-width="2"/>' +
      '<line x1="216" y1="204" x2="194" y2="218" stroke="' + F.holz + '" stroke-width="3.5" stroke-linecap="round"/>' +
      rad(236, 218, 17, F.holz) + rad(302, 218, 17, F.holz);
  }

  function pferd(F) {
    var s = '<line x1="10" y1="378" x2="172" y2="378" stroke="' + F.hellgruen + '" stroke-width="3"/>';
    /* Beine */
    [[44, 0], [56, 0], [96, 0], [108, 0]].forEach(function (b) {
      s += '<rect x="' + b[0] + '" y="330" width="7" height="42" rx="2" fill="' + F.holz + '"/>' +
        '<rect x="' + (b[0] - 1) + '" y="370" width="9" height="5" rx="1" fill="' + F.grau + '"/>';
    });
    s += '<path d="M36,318 Q22,330 26,354" stroke="' + F.tinte + '" stroke-width="5" fill="none" stroke-linecap="round"/>' +
      '<ellipse cx="76" cy="322" rx="44" ry="17" fill="' + F.holz + '"/>' +
      '<path d="M104,312 L118,290 L132,296 L118,326 Z" fill="' + F.holz + '"/>' +
      '<path d="M116,290 L128,284 L150,300 L146,310 L130,306 Z" fill="' + F.holz + '"/>' +
      '<path d="M120,288 L122,278 L127,286 Z" fill="' + F.holz + '"/>' +
      '<path d="M104,310 Q110,292 120,286" stroke="' + F.tinte + '" stroke-width="3" fill="none"/>' +
      '<circle cx="136" cy="295" r="1.8" fill="' + F.tinte + '"/>';
    /* Kummet: gepolsterter Kragen um den Hals */
    s += '<ellipse cx="114" cy="308" rx="8" ry="17" transform="rotate(25 114 308)" fill="none" stroke="' + F.tinte + '" stroke-width="7"/>' +
      '<ellipse cx="114" cy="308" rx="8" ry="17" transform="rotate(25 114 308)" fill="none" stroke="' + F.ocker + '" stroke-width="4.5"/>' +
      '<line x1="106" y1="322" x2="36" y2="330" stroke="' + F.tinte + '" stroke-width="2"/>';
    /* Hufeisen, einzeln daneben */
    s += '<path d="M146,372 L146,354 A12,12 0 0 1 170,354 L170,372" fill="none" stroke="' + F.grau + '" stroke-width="5" stroke-linecap="round"/>' +
      '<circle cx="148" cy="360" r="1.2" fill="' + F.papier + '"/><circle cx="168" cy="360" r="1.2" fill="' + F.papier + '"/>' +
      '<circle cx="151" cy="348" r="1.2" fill="' + F.papier + '"/><circle cx="165" cy="348" r="1.2" fill="' + F.papier + '"/>';
    return s;
  }

  function duengung(F) {
    var s = '<rect x="194" y="366" width="160" height="12" fill="' + F.hellgruen + '"/>' +
      '<path d="M200,366 Q214,326 240,322 Q266,326 280,366 Z" fill="' + F.holz + '" stroke="' + F.tinte + '" stroke-width="1.2"/>' +
      '<path d="M216,350 q6,-4 12,0 M236,338 q6,-4 12,0 M250,354 q6,-4 12,0" stroke="' + F.tinte + '" stroke-width="1.2" fill="none"/>' +
      /* Mistgabel neben dem Haufen */
      '<line x1="292" y1="298" x2="292" y2="348" stroke="' + F.holz + '" stroke-width="3.5" stroke-linecap="round"/>' +
      '<path d="M284,348 L300,348 M284,348 L284,364 M292,348 L292,364 M300,348 L300,364" stroke="' + F.grau + '" stroke-width="2.2" fill="none" stroke-linecap="round"/>';
    /* Mergel: helle Brocken aus Ton und Kalk */
    [[318, 358, 10, 7], [334, 360, 9, 6], [342, 350, 9, 7], [326, 346, 8, 6], [314, 344, 6, 5]].forEach(function (b) {
      s += '<ellipse cx="' + b[0] + '" cy="' + b[1] + '" rx="' + b[2] + '" ry="' + b[3] + '" fill="' + F.hell + '" stroke="' + F.grau + '" stroke-width="1.2"/>';
    });
    return s;
  }

  W.abb.registriere('neuerungen', {
    viewBox: '0 0 360 420',
    titel: 'Neuerungen in der mittelalterlichen Landwirtschaft (nach Buch S. 35, M3)',
    strukturen: {
      sense: { label: 'Sense', x: 89, y: 120 },
      pflug: { label: 'eiserner Räderpflug', kurz: 'eiserner|Räderpflug', x: 271, y: 120 },
      muehle: { label: 'Wasser- und Windmühle', kurz: 'Wasser- und|Windmühle', x: 89, y: 262 },
      wagen: { label: 'vierrädriger Wagen', kurz: 'vierrädriger|Wagen', x: 271, y: 262 },
      kummet: { label: 'Pferd mit Kummet und Hufeisen', kurz: 'Pferd mit Kummet|und Hufeisen', x: 89, y: 400 },
      duengung: { label: 'Düngung mit Mist und Mergel', kurz: 'Düngung mit|Mist und Mergel', x: 271, y: 400 }
    },
    basis: function () {
      var F = W.abb.F;
      var s = '<rect x="0" y="0" width="360" height="420" fill="' + F.pergament + '"/>';
      [[2, 2], [182, 2], [2, 142], [182, 142], [2, 282], [182, 282]].forEach(function (p) {
        s += '<rect x="' + p[0] + '" y="' + p[1] + '" width="176" height="136" rx="8" fill="' + F.papier + '" stroke="' + F.hell + '" stroke-width="1.5"/>';
      });
      return s + sense(F) + pflug(F) + muehle(F) + wagen(F) + pferd(F) + duengung(F);
    }
  });
})();
