/* Abbildungen zum Bauplatz kloster: vereinfachter St. Galler Klosterplan (Buch S. 40, M1)
   und Tagesablauf im Kloster (Buch S. 41, M3). Eigene, schlichte Zeichnungen. */
(function () {
  'use strict';
  var W = (window.W = window.W || {});
  var F = W.abb.F;

  function rect(x, y, w, h, fill, extra) {
    return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + fill + '" stroke="' + F.linie + '" stroke-width="1.2"' + (extra || '') + '/>';
  }
  /** Gebäude von oben: Dachfläche mit Firstlinie. */
  function haus(x, y, w, h, fill) {
    var first = w >= h
      ? '<line x1="' + (x + 5) + '" y1="' + (y + h / 2) + '" x2="' + (x + w - 5) + '" y2="' + (y + h / 2) + '"'
      : '<line x1="' + (x + w / 2) + '" y1="' + (y + 5) + '" x2="' + (x + w / 2) + '" y2="' + (y + h - 5) + '"';
    return rect(x, y, w, h, fill || F.rosa) + first + ' stroke="' + F.dach + '" stroke-width="1"/>';
  }
  /** Gebäude um einen Innenhof (Kreuzgang, Hospital, Noviziat). */
  function hof(x, y, w, h, rand) {
    return rect(x, y, w, h, F.rosa) +
      rect(x + rand, y + rand, w - 2 * rand, h - 2 * rand, F.hellgruen) +
      '<line x1="' + (x + w / 2) + '" y1="' + (y + rand) + '" x2="' + (x + w / 2) + '" y2="' + (y + h - rand) + '" stroke="' + F.ocker + '" stroke-width="2"/>' +
      '<line x1="' + (x + rand) + '" y1="' + (y + h / 2) + '" x2="' + (x + w - rand) + '" y2="' + (y + h / 2) + '" stroke="' + F.ocker + '" stroke-width="2"/>';
  }
  function baum(x, y, r) { return '<circle cx="' + x + '" cy="' + y + '" r="' + (r || 6) + '" fill="' + F.gruen + '" stroke="' + F.tinte + '" stroke-width="0.6"/>'; }
  function kreuz(x, y, s) {
    return '<line x1="' + x + '" y1="' + (y - s) + '" x2="' + x + '" y2="' + (y + s) + '" stroke="' + F.tinte + '" stroke-width="1.4"/>' +
      '<line x1="' + (x - s * 0.6) + '" y1="' + (y - s * 0.35) + '" x2="' + (x + s * 0.6) + '" y2="' + (y - s * 0.35) + '" stroke="' + F.tinte + '" stroke-width="1.4"/>';
  }

  /* ---------- Klosterplan von St. Gallen (vereinfacht, Norden oben, Kirche mit Westtürmen links) ---------- */
  W.abb.registriere('klosterplan', {
    viewBox: '0 0 360 400',
    titel: 'Vereinfachter Klosterplan von St. Gallen (nach dem Plan von 820)',
    strukturen: {
      kirche: { label: 'Kirche', x: 148, y: 110 },
      bibliothek: { label: 'Bibliothek', x: 234, y: 80 },
      schule: { label: 'Schule', x: 131, y: 38 },
      abt: { label: 'Haus des Abtes', kurz: 'Haus des|Abtes', x: 206, y: 38 },
      noviziat: { label: 'Noviziat', x: 304, y: 163 },
      hospital: { label: 'Hospital', x: 304, y: 97 },
      aerzte: { label: 'Ärztehaus mit Apotheke', kurz: 'Ärztehaus,|Apotheke', x: 304, y: 38 },
      gaeste: { label: 'Gästehaus', x: 54, y: 38 },
      herberge: { label: 'Herberge', x: 42, y: 171 },
      kueche: { label: 'Küche', x: 99, y: 188 },
      brauerei: { label: 'Brauerei und Bäckerei', kurz: 'Brauerei,|Bäckerei', x: 115, y: 239 },
      muehlen: { label: 'Mühlen', x: 109, y: 294 },
      handwerk: { label: 'Handwerkshaus', x: 202, y: 239 },
      scheune: { label: 'Scheune', x: 196, y: 294 },
      staelle: { label: 'Ställe', x: 43, y: 266 },
      garten: { label: 'Garten', x: 304, y: 300 },
      friedhof: { label: 'Friedhof', x: 304, y: 231 }
    },
    basis: function () {
      var s = '';
      // Gelände und Klostermauer
      s += '<rect x="6" y="6" width="348" height="388" rx="4" fill="' + F.hell + '" stroke="' + F.linie + '" stroke-width="3"/>';
      // Tor im Westen und Weg zur Kirche
      s += '<rect x="6" y="102" width="66" height="16" fill="' + F.ocker + '" opacity="0.55"/>';
      s += '<rect x="2" y="99" width="8" height="22" fill="' + F.holz + '" stroke="' + F.linie + '"/>';
      // Weg in Nord-Süd-Richtung zwischen den Werkstätten
      s += '<rect x="76" y="140" width="6" height="250" fill="' + F.ocker + '" opacity="0.45"/>';
      // Reihe im Norden
      s += haus(16, 16, 76, 44);            // Gästehaus
      s += haus(100, 16, 62, 44);           // Schule
      s += haus(170, 16, 72, 44);           // Haus des Abtes
      s += baum(252, 30, 7) + baum(252, 50, 5);
      s += haus(262, 16, 84, 44);           // Ärztehaus mit Apotheke
      // Kirche: Westtürme, Langhaus, Chor mit Apsis, Bibliothek im Nordosten
      s += haus(84, 88, 130, 44, F.stein);
      s += rect(214, 96, 22, 28, F.stein);
      s += '<path d="M236,96 A14,14 0 0 1 236,124 Z" fill="' + F.stein + '" stroke="' + F.linie + '" stroke-width="1.2"/>';
      s += '<circle cx="78" cy="90" r="10" fill="' + F.stein + '" stroke="' + F.linie + '" stroke-width="1.2"/>';
      s += '<circle cx="78" cy="130" r="10" fill="' + F.stein + '" stroke="' + F.linie + '" stroke-width="1.2"/>';
      s += kreuz(226, 110, 6);
      s += haus(214, 66, 40, 28);           // Bibliothek
      // Kreuzgang südlich der Kirche, daneben Küche und Schlafhaus
      s += hof(120, 140, 76, 68, 12);
      s += baum(158, 174, 5);
      s += haus(84, 168, 30, 40);           // Küche
      s += haus(202, 140, 48, 68);
      // Werkstätten und Wirtschaftsgebäude im Süden
      s += haus(84, 216, 62, 46);           // Brauerei und Bäckerei
      s += haus(154, 216, 96, 46);          // Handwerkshaus
      s += haus(84, 270, 50, 48);           // Mühlen
      s += haus(142, 270, 108, 48, F.ocker);  // Scheune
      s += haus(84, 330, 30, 26) + haus(120, 330, 30, 26);
      s += '<rect x="84" y="364" width="166" height="8" fill="' + F.ocker + '" opacity="0.45"/>';
      // Osten: Hospital und Noviziat mit Innenhof, Friedhof mit Obstbäumen, Garten, Geflügel
      s += hof(262, 68, 84, 58, 12);        // Hospital
      s += hof(262, 134, 84, 58, 12);       // Noviziat
      s += rect(262, 200, 84, 62, F.hellgruen);
      s += baum(272, 210) + baum(336, 210) + baum(272, 252) + baum(336, 252) + baum(290, 207, 5) + baum(318, 255, 5);
      s += kreuz(304, 220, 6) + kreuz(284, 236, 4) + kreuz(324, 236, 4) + kreuz(304, 248, 4);
      s += rect(262, 270, 84, 60, F.ocker);
      [278, 290, 302, 314, 326].forEach(function (x) {
        s += '<rect x="' + (x - 3) + '" y="276" width="6" height="48" fill="' + F.gruen + '" opacity="0.8"/>';
      });
      s += '<circle cx="280" cy="362" r="13" fill="' + F.ocker + '" stroke="' + F.linie + '" stroke-width="1.2"/>';
      s += '<circle cx="328" cy="362" r="13" fill="' + F.ocker + '" stroke="' + F.linie + '" stroke-width="1.2"/>';
      s += haus(296, 352, 16, 20);
      // Westen: Herberge, Ställe, Gesinde
      s += haus(14, 146, 56, 50);           // Herberge
      s += haus(14, 206, 26, 120, F.ocker) + haus(46, 206, 26, 120, F.ocker); // Ställe
      s += haus(14, 336, 58, 50);
      return s;
    }
  });

  /* ---------- Tagesablauf im Kloster (24 Stunden, wie Buch S. 41, M3) ---------- */
  var T = 16, S = 20;                      // 0 Uhr bei y = 16, 20 px je Stunde
  function yh(stunde) { return T + S * stunde; }
  var GEBETE = [['matutin', 'Matutin', 3], ['prim', 'Prim', 6], ['terz', 'Terz', 9], ['sext', 'Sext', 12],
    ['non', 'Non', 15], ['vesper', 'Vesper', 18], ['komplet', 'Komplet', 21]];
  var str = {};
  GEBETE.forEach(function (g) { str[g[0]] = { label: g[1], x: 110, y: yh(g[2]) }; });

  function block(y1, y2, fill, zeile1, zeile2) {
    var s = '<rect x="60" y="' + y1 + '" width="292" height="' + (y2 - y1) + '" fill="' + fill + '" stroke="' + F.papier + '" stroke-width="1"/>';
    if (zeile1) {
      var mitte = (y1 + y2) / 2;
      if (zeile2) {
        s += '<text class="abb-text abb-fett" x="140" y="' + (mitte - 2) + '">' + zeile1 + '</text>';
        s += '<text class="abb-text" style="font-size:11px" x="140" y="' + (mitte + 11) + '">' + zeile2 + '</text>';
      } else {
        s += '<text class="abb-text abb-fett" x="140" y="' + (mitte + 4) + '">' + zeile1 + '</text>';
      }
    }
    return s;
  }
  function essen(y1) {
    return '<rect x="60" y="' + y1 + '" width="292" height="12" fill="' + F.ocker + '" stroke="' + F.papier + '" stroke-width="1"/>' +
      '<text class="abb-text abb-fett" style="font-size:11px" x="140" y="' + (y1 + 10) + '">Essen</text>';
  }

  W.abb.registriere('tagesablauf', {
    viewBox: '0 0 360 512',
    titel: 'Tagesablauf in einem Kloster (nach Buch S. 41, M3)',
    strukturen: str,
    basis: function () {
      var s = '';
      // Zeitachse
      s += '<line x1="52" y1="' + yh(0) + '" x2="52" y2="' + yh(24) + '" stroke="' + F.linie + '" stroke-width="1.5"/>';
      for (var h = 0; h <= 24; h++) {
        s += '<line x1="47" y1="' + yh(h) + '" x2="57" y2="' + yh(h) + '" stroke="' + F.linie + '" stroke-width="1"/>';
        s += '<text class="abb-text" style="font-size:11px" x="44" y="' + (yh(h) + 4) + '" text-anchor="end">' + h + ' Uhr</text>';
      }
      // Tätigkeiten zwischen den Gebeten
      s += block(yh(0), yh(3) - 7, F.hellblau, 'Schlafen oder Nachtwache');
      s += block(yh(3) + 7, yh(6) - 19, F.rosa, 'Meditation', 'anschließend Reinigung');
      s += essen(yh(6) - 19);
      s += block(yh(6) + 7, yh(9) - 19, F.hell, 'Studium und Arbeit');
      s += essen(yh(9) - 19);
      s += block(yh(9) + 7, yh(12) - 19, F.hell, 'Studium und Arbeit');
      s += essen(yh(12) - 19);
      s += block(yh(12) + 7, yh(15) - 19, F.hell, 'Studium und Arbeit');
      s += essen(yh(15) - 19);
      s += block(yh(15) + 7, yh(18) - 7, F.hell, 'Studium und Arbeit', 'anschließend Reinigung');
      s += essen(yh(18) + 7);
      s += block(yh(18) + 19, yh(21) - 7, F.hellgruen, 'Freizeit,', 'Selbstbeschäftigung');
      s += block(yh(21) + 7, yh(24), F.hellblau, 'Schlafen oder Nachtwache');
      // Die sieben Gebetszeiten (Namen setzt die Beschriftung)
      GEBETE.forEach(function (g) {
        var y = yh(g[2]);
        s += '<rect x="60" y="' + (y - 7) + '" width="292" height="14" fill="' + F.zinnober + '"/>';
        s += '<text class="abb-text abb-fett" style="font-size:11px;fill:' + F.papier + '" x="344" y="' + (y + 4) + '" text-anchor="end">Gebet</text>';
      });
      return s;
    }
  });
})();
