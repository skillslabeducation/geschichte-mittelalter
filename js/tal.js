/* Das Tal: Landschaft mit sieben Bauplätzen. Jeder Bauplatz wächst in vier Stufen:
   0 abgesteckt (Grundriss), 1 Gerüst, 2 Mauern, 3 fertig (Richtfest). Risse zeigen offene Bauschäden. */
(function () {
  'use strict';
  var W = (window.W = window.W || {});

  var STUFEN = ['abgesteckt', 'Gerüst steht', 'im Bau', 'fertig'];

  /* Gebäude aus Blöcken: x = linke Kante, y = Boden, w, h = Wandhöhe, dach: sattel | turm | kuppel | zinnen */
  var BAU = {
    pfalz: { name: 'Königspfalz', ox: 135, oy: 110, bloecke: [
      { x: 96, y: 110, w: 48, h: 20, dach: 'sattel', rot: true },
      { x: 144, y: 110, w: 10, h: 12, dach: 'sattel' },
      { x: 154, y: 110, w: 26, h: 26, dach: 'kuppel' }
    ], extra: function (F) { return kreuz(167, 72, F); } },
    fronhof: { name: 'Fronhof', ox: 150, oy: 207, bloecke: [
      { x: 122, y: 207, w: 40, h: 18, dach: 'sattel', rot: true },
      { x: 164, y: 207, w: 28, h: 14, dach: 'sattel', holz: true }
    ], extra: function (F) { return rauch(134, 177) + huhn(198, 205, F) + huhn(206, 207, F); } },
    kirche: { name: 'Dorfkirche', ox: 238, oy: 172, bloecke: [
      { x: 218, y: 172, w: 30, h: 18, dach: 'sattel' },
      { x: 248, y: 172, w: 12, h: 34, dach: 'turm' }
    ], extra: function (F) { return kreuz(254, 122, F); } },
    burg: { name: 'Burg', ox: 318, oy: 92, bloecke: [
      { x: 278, y: 92, w: 68, h: 14, dach: 'zinnen' },
      { x: 284, y: 92, w: 26, h: 26, dach: 'sattel', rot: true },
      { x: 318, y: 92, w: 16, h: 46, dach: 'zinnen' }
    ], extra: function (F) { return rauch(292, 62); } },
    kloster: { name: 'Kloster', ox: 62, oy: 174, bloecke: [
      { x: 22, y: 174, w: 44, h: 22, dach: 'sattel' },
      { x: 66, y: 174, w: 12, h: 40, dach: 'turm' },
      { x: 80, y: 174, w: 34, h: 14, dach: 'sattel', rot: true }
    ], extra: function (F) { return kreuz(72, 126, F) + rauch(100, 152); } }
  };

  function kreuz(x, y, F) { return '<path d="M' + x + ' ' + y + 'v-10M' + (x - 4) + ' ' + (y - 6) + 'h8" stroke="' + F.gold + '" stroke-width="2"/>'; }
  function rauch(x, y) {
    return '<g class="tal-rauch"><circle cx="' + x + '" cy="' + y + '" r="3" fill="#d9d4cb"/><circle cx="' + (x + 4) + '" cy="' + (y - 6) + '" r="4" fill="#e4e0d8"/><circle cx="' + (x + 1) + '" cy="' + (y - 13) + '" r="4.5" fill="#ece9e3"/></g>';
  }
  function huhn(x, y, F) { return '<ellipse cx="' + x + '" cy="' + (y - 3) + '" rx="3" ry="2.4" fill="#fff" stroke="' + F.linie + '" stroke-width=".6"/><circle cx="' + (x + 2.5) + '" cy="' + (y - 5) + '" r="1.3" fill="' + F.zinnober + '"/>'; }

  function dachPfad(b) {
    var top = b.y - b.h;
    if (b.dach === 'sattel') return 'M' + (b.x - 3) + ' ' + top + 'L' + (b.x + b.w / 2) + ' ' + (top - Math.max(9, b.w * 0.32)) + 'L' + (b.x + b.w + 3) + ' ' + top + 'Z';
    if (b.dach === 'turm') return 'M' + (b.x - 2) + ' ' + top + 'L' + (b.x + b.w / 2) + ' ' + (top - b.w * 1.4) + 'L' + (b.x + b.w + 2) + ' ' + top + 'Z';
    if (b.dach === 'kuppel') return 'M' + b.x + ' ' + top + 'Q' + (b.x + b.w / 2) + ' ' + (top - b.w * 0.75) + ' ' + (b.x + b.w) + ' ' + top + 'Z';
    return '';
  }
  function zinnen(b, farbe) {
    var top = b.y - b.h, out = '';
    for (var x = b.x; x < b.x + b.w - 2; x += 6) out += '<rect x="' + x + '" y="' + (top - 4) + '" width="3.5" height="4" fill="' + farbe + '"/>';
    return out;
  }
  function silhouette(b) {
    var top = b.y - b.h;
    var d = 'M' + b.x + ' ' + b.y + 'V' + top + 'H' + (b.x + b.w) + 'V' + b.y + 'Z';
    return d + ' ' + dachPfad(b);
  }

  /** Ein Gebäude in seiner Stufe. */
  function gebaeude(def, stufe, F) {
    var out = '';
    def.bloecke.forEach(function (b, i) {
      var top = b.y - b.h;
      if (stufe === 0) {
        out += '<path d="' + silhouette(b) + '" fill="none" stroke="' + F.holz + '" stroke-width="1" stroke-dasharray="3 3" opacity=".7"/>';
        out += '<rect x="' + b.x + '" y="' + (b.y - 2) + '" width="' + b.w + '" height="2" fill="' + F.ocker + '"/>';
        return;
      }
      var wand = b.holz ? F.ocker : F.stein;
      var hoehe = stufe === 1 ? Math.round(b.h * 0.35) : b.h;
      if (stufe === 1) out += '<path d="' + silhouette(b) + '" fill="none" stroke="' + F.holz + '" stroke-width=".8" stroke-dasharray="3 3" opacity=".5"/>';
      out += '<rect x="' + b.x + '" y="' + (b.y - hoehe) + '" width="' + b.w + '" height="' + hoehe + '" fill="' + wand + '" stroke="' + F.linie + '" stroke-width=".8"/>';
      if (stufe < 3) {
        // Gerüst: Stangen und Bretter
        var gx = [b.x - 3, b.x + b.w + 3];
        gx.forEach(function (x) { out += '<line x1="' + x + '" y1="' + b.y + '" x2="' + x + '" y2="' + (top - 4) + '" stroke="' + F.holz + '" stroke-width="1.2"/>'; });
        for (var y = b.y - 8; y > top - 2; y -= 9) out += '<line x1="' + (b.x - 4) + '" y1="' + y + '" x2="' + (b.x + b.w + 4) + '" y2="' + y + '" stroke="' + F.holz + '" stroke-width="1"/>';
        return;
      }
      // fertig: Dach, Fenster, Tür
      if (b.dach === 'zinnen') out += zinnen(b, wand);
      else out += '<path d="' + dachPfad(b) + '" fill="' + (b.rot ? F.dach : F.lapis) + '" stroke="' + F.linie + '" stroke-width=".8"/>';
      var fenster = Math.max(1, Math.floor(b.w / 12));
      for (var f = 0; f < fenster; f++) {
        var fx = b.x + (f + 0.5) * b.w / fenster - 1.8;
        out += '<rect x="' + fx + '" y="' + (top + Math.min(6, b.h / 3)) + '" width="3.6" height="5" rx="1.8" fill="' + F.tinte + '" opacity=".75"/>';
      }
      if (i === 0) out += '<path d="M' + (b.x + b.w / 2 - 3) + ' ' + b.y + 'v-6a3 3 0 0 1 6 0v6z" fill="' + F.holz + '"/>';
    });
    if (stufe === 3 && def.extra) out += def.extra(F);
    return out;
  }

  /** Das Dorf: Hütten, drei Felder (Dreifelderwirtschaft), Windmühle. */
  function dorf(stufe, F) {
    var huetten = [[276, 214], [298, 218], [320, 213]];
    var felder = [[244, 232, F.hellgruen, '#9bbf7a'], [296, 232, '#e7cf7a', '#c9a94a'], [348, 232, '#c8a27a', '#a98256']];
    var out = '';
    felder.forEach(function (fd, i) {
      var x = fd[0], y = fd[1], w = 48, h = 20;
      if (stufe === 0 || (stufe === 1 && i > 0) || (stufe === 2 && i > 1)) {
        out += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="none" stroke="' + F.holz + '" stroke-dasharray="3 3" opacity=".7"/>';
        return;
      }
      out += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + fd[2] + '" stroke="' + F.linie + '" stroke-width=".6"/>';
      for (var r = y + 4; r < y + h; r += 4) out += '<line x1="' + (x + 2) + '" y1="' + r + '" x2="' + (x + w - 2) + '" y2="' + r + '" stroke="' + fd[3] + '" stroke-width="1"/>';
    });
    huetten.forEach(function (p, i) {
      var b = { x: p[0], y: p[1], w: 16, h: 9, dach: 'sattel' };
      if (stufe === 0) { out += '<path d="' + silhouette(b) + '" fill="none" stroke="' + F.holz + '" stroke-dasharray="3 3" opacity=".7"/>'; return; }
      if (stufe === 1 && i > 0) { out += '<path d="' + silhouette(b) + '" fill="none" stroke="' + F.holz + '" stroke-dasharray="3 3" opacity=".6"/>'; return; }
      out += '<rect x="' + b.x + '" y="' + (b.y - b.h) + '" width="' + b.w + '" height="' + b.h + '" fill="' + F.ocker + '" stroke="' + F.linie + '" stroke-width=".7"/>';
      out += '<path d="' + dachPfad(b) + '" fill="#c9a24e" stroke="' + F.linie + '" stroke-width=".7"/>';
      if (stufe === 3 && i === 1) out += rauch(306, 196);
    });
    // Windmühle
    if (stufe >= 2) {
      out += '<path d="M370 214 L374 192 L382 192 L386 214 Z" fill="' + F.stein + '" stroke="' + F.linie + '" stroke-width=".7"/>';
      if (stufe === 3) out += '<g stroke="' + F.holz + '" stroke-width="2"><line x1="378" y1="194" x2="366" y2="180"/><line x1="378" y1="194" x2="392" y2="182"/><line x1="378" y1="194" x2="366" y2="208"/><line x1="378" y1="194" x2="390" y2="208"/></g><circle cx="378" cy="194" r="2" fill="' + F.tinte + '"/>';
    } else out += '<path d="M370 214 L374 192 L382 192 L386 214 Z" fill="none" stroke="' + F.holz + '" stroke-dasharray="3 3" opacity=".7"/>';
    return out;
  }

  /** Das Lehnswesen: Wege und Wappenbanner verbinden die Gebäude. */
  var WEGE = [
    'M138 112 C150 140 200 150 236 172',      // Pfalz – Dorfkirche
    'M138 112 C190 104 250 98 300 94',         // Pfalz – Burg
    'M120 112 C100 140 80 160 70 174',         // Pfalz – Kloster
    'M150 208 C180 196 210 184 236 174',       // Fronhof – Dorfkirche
    'M236 174 C260 190 280 205 300 214',       // Dorfkirche – Dorf
    'M70 176 C95 195 120 205 140 208'          // Kloster – Fronhof
  ];
  var BANNER = [[196, 134], [236, 100], [104, 132], [186, 196], [272, 198]];
  function lehen(stufe, F) {
    var out = '';
    WEGE.forEach(function (d) {
      if (stufe === 0) out += '<path d="' + d + '" fill="none" stroke="' + F.holz + '" stroke-width="1" stroke-dasharray="1 5" opacity=".6"/>';
      else if (stufe === 1) out += '<path d="' + d + '" fill="none" stroke="' + F.ocker + '" stroke-width="3" stroke-dasharray="6 5" stroke-linecap="round"/>';
      else out += '<path d="' + d + '" fill="none" stroke="#d6bb86" stroke-width="5" stroke-linecap="round"/><path d="' + d + '" fill="none" stroke="#e6d3a8" stroke-width="2" stroke-linecap="round"/>';
    });
    return out;
  }
  function banner(stufe, F) {
    var out = '';
    if (stufe === 3) BANNER.forEach(function (p, i) {
      var farbe = i % 2 ? F.lapis : F.zinnober;
      out += '<line x1="' + p[0] + '" y1="' + p[1] + '" x2="' + p[0] + '" y2="' + (p[1] - 18) + '" stroke="' + F.holz + '" stroke-width="1.4"/>' +
        '<path class="tal-fahne" d="M' + p[0] + ' ' + (p[1] - 18) + 'h10l-3 4 3 4h-10z" fill="' + farbe + '"/>';
    });
    return out;
  }

  function landschaft(F) {
    return '<defs><linearGradient id="tal-himmel" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#cfe0ea"/><stop offset="1" stop-color="#eef1e8"/></linearGradient></defs>' +
      '<rect width="400" height="260" fill="url(#tal-himmel)"/>' +
      '<path d="M0 92 Q60 66 120 86 T240 78 T400 70 V260 H0Z" fill="#b8cc9a"/>' +
      '<path d="M236 104 Q300 54 400 66 V140 H236Z" fill="#a9bf88"/>' +                 // Burghügel
      '<path d="M0 108 Q80 96 160 112 T300 120 T400 116 V260 H0Z" fill="#c9d9b0"/>' +    // Wiese
      '<g fill="#6f8f55">' + [12, 24, 36, 196, 208, 360, 372, 384].map(function (x, i) { return '<circle cx="' + x + '" cy="' + (i < 3 ? 96 : i < 5 ? 112 : 110) + '" r="8"/>'; }).join('') + '</g>' +
      '<path d="M0 140 C60 134 100 152 160 148 S260 134 300 152 S370 182 400 178" fill="none" stroke="' + F.wasser + '" stroke-width="9" stroke-linecap="round"/>' +
      '<path d="M0 140 C60 134 100 152 160 148 S260 134 300 152 S370 182 400 178" fill="none" stroke="#a9c6de" stroke-width="3" stroke-linecap="round"/>';
  }

  function riss(x, y, n, F) {
    if (!n) return '';
    return '<g class="tal-riss"><circle cx="' + x + '" cy="' + y + '" r="8" fill="' + F.zinnober + '" stroke="#fff" stroke-width="1.5"/><text x="' + x + '" y="' + (y + 4) + '" text-anchor="middle">' + n + '</text></g>';
  }

  var ZIELE = {
    pfalz: { x: 92, y: 60, w: 92, h: 62, rx: 182, ry: 76 },
    fronhof: { x: 118, y: 170, w: 96, h: 46, rx: 196, ry: 182 },
    lehen: { x: 182, y: 94, w: 52, h: 40, rx: 0, ry: 0 },
    kirche: { x: 214, y: 112, w: 50, h: 70, rx: 264, ry: 132 },
    dorf: { x: 240, y: 186, w: 156, h: 70, rx: 392, ry: 196 },
    burg: { x: 272, y: 30, w: 80, h: 72, rx: 350, ry: 44 },
    kloster: { x: 16, y: 120, w: 102, h: 64, rx: 114, ry: 150 }
  };
  var NAMEN = { pfalz: [138, 124], fronhof: [157, 221], lehen: [208, 120], kirche: [239, 186], dorf: [318, 228], burg: [312, 106], kloster: [66, 188] };

  /** statusListe: [{id, nr, titel, stufe, risse}]. opts: { vollendet } → SVG-Element */
  function zeichne(statusListe, opts) {
    var F = W.abb.F;
    opts = opts || {};
    var st = {};
    (statusListe || []).forEach(function (s) { st[s.id] = s; });
    function stufe(id) { return st[id] ? st[id].stufe : 0; }
    var svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 260" role="group" aria-label="Das Tal mit sieben Bauplätzen">' + landschaft(F);
    svg += lehen(stufe('lehen'), F);
    svg += dorf(stufe('dorf'), F);
    ['burg', 'pfalz', 'kirche', 'kloster', 'fronhof'].forEach(function (id) { svg += gebaeude(BAU[id], stufe(id), F); });
    svg += banner(stufe('lehen'), F);
    if (opts.vollendet) {
      [[326, 40], [167, 62], [254, 112], [72, 116]].forEach(function (p, i) {
        svg += '<line x1="' + p[0] + '" y1="' + p[1] + '" x2="' + p[0] + '" y2="' + (p[1] - 14) + '" stroke="' + F.tinte + '" stroke-width="1"/><path class="tal-fahne" d="M' + p[0] + ' ' + (p[1] - 14) + 'h12l-3 3.5 3 3.5h-12z" fill="' + (i % 2 ? F.lapis : F.gold) + '"/>';
      });
    }
    // Klickflächen, Namen, Risse
    Object.keys(ZIELE).forEach(function (id) {
      var z = ZIELE[id], s = st[id] || { nr: '', titel: id, stufe: 0, risse: 0 };
      var label = 'Bauplatz ' + s.nr + ': ' + s.titel + ', ' + STUFEN[s.stufe || 0] + (s.risse ? ', ' + s.risse + (s.risse === 1 ? ' Riss' : ' Risse') : '');
      var n = NAMEN[id];
      svg += '<a href="#/bau/' + id + '" class="tal-bau" aria-label="' + W.esc(label) + '">' +
        '<rect class="tal-fokus" x="' + z.x + '" y="' + z.y + '" width="' + z.w + '" height="' + z.h + '" rx="8" fill="transparent"/>' +
        '<text class="tal-name" x="' + n[0] + '" y="' + n[1] + '" text-anchor="middle">' + W.esc(s.titel) + '</text>' +
        (id === 'lehen' ? riss(n[0] + 58, n[1] - 4, s.risse, F) : riss(z.rx, z.ry, s.risse, F)) + '</a>';
    });
    return W.frag(svg + '</svg>');
  }

  W.tal = { zeichne: zeichne, STUFEN: STUFEN };
})();
