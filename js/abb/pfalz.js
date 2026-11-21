/* Abbildungen zum Bauplatz pfalz (Buch S. 18–21):
   karte-frankenreich: vereinfachte Karte wie M4, S. 19 (Frankenreich 768, Erweiterungen, Grenzmarken, Kirchenstaat).
   pfalz-aachen: vereinfachte Zeichnung der Pfalz Aachen wie M3, S. 21, zum Beschriften. */
(function () {
  'use strict';
  var W = (window.W = window.W || {});
  var F = W.abb.F;

  /* ---------- Karte ---------- */

  /* Einfache Projektion: Länge −10° … 21° → x 0 … 360, Breite 56° … 36° → y 0 … 280. */
  function P(lon, lat) { return [Math.round((lon + 10) * 115) / 10, Math.round((56 - lat) * 140) / 10]; }
  function punkte(liste) { return liste.map(function (p) { var q = P(p[0], p[1]); return q[0] + ',' + q[1]; }); }
  function flaeche(liste) { return 'M' + punkte(liste).join(' L') + ' Z'; }
  function linie(liste) { return 'M' + punkte(liste).join(' L'); }

  /* Küsten, grob vereinfacht (Länge, Breite). */
  var FESTLAND = [
    [21.6, 55.6], [21.1, 55.2], [20, 54.9], [19.5, 54.4], [18.6, 54.4], [17, 54.75], [16, 54.3], [14.6, 53.95], [13.8, 54.15],
    [13, 54.45], [12, 54.2], [11, 54.0], [10.9, 54.35], [10.2, 54.45], [9.9, 54.75], [9.6, 55.0], [9.8, 55.5], [10.3, 56.0], [10.4, 56.3],
    [8.1, 56.3], [8.1, 55.6], [8.6, 55.1], [8.6, 54.5], [8.9, 54.1], [8.8, 53.85], [8.3, 53.5], [7.2, 53.7], [6.9, 53.4], [6, 53.45],
    [5, 53.2], [4.75, 52.95], [4.5, 52.3], [4.1, 51.95], [3.4, 51.4], [2.6, 51.1], [1.6, 50.9], [1.55, 50.2], [0.2, 49.7], [-0.2, 49.3],
    [-1.2, 49.35], [-1.3, 49.65], [-1.9, 49.7], [-1.6, 48.8], [-2, 48.65], [-3, 48.8], [-4.1, 48.7], [-4.75, 48.4], [-4.3, 48.1],
    [-4.5, 47.9], [-3.5, 47.7], [-2.5, 47.4], [-2.1, 47], [-1.2, 46.2], [-1.1, 45.5], [-1.25, 44.5], [-1.55, 43.5], [-1.8, 43.38],
    [-3.8, 43.47], [-5.9, 43.6], [-7.7, 43.75], [-9.3, 43.1], [-8.8, 42.2], [-8.9, 41.2], [-9.4, 39.4], [-9.5, 38.7], [-8.8, 38],
    [-8.9, 37], [-7.4, 37.15], [-6.3, 36.6], [-5.6, 36], [-4.4, 36.7], [-2, 36.8], [-0.7, 37.6], [-0.5, 38.4], [0.2, 38.8], [-0.3, 39.5],
    [0.9, 40.7], [2.2, 41.35], [3.2, 41.9], [3.2, 42.5], [3.05, 43.1], [4, 43.5], [5, 43.35], [6.2, 43.1], [7.4, 43.75], [8.8, 44.4],
    [9.8, 44.05], [10.3, 43.5], [10.6, 42.95], [11.2, 42.4], [12.2, 41.75], [13, 41.25], [14, 40.85], [14.5, 40.6], [15, 40.25],
    [15.7, 40], [16, 39.1], [15.65, 38], [16.1, 38], [16.6, 38.4], [17.15, 39], [16.5, 39.75], [17, 40.45], [17.9, 40.3], [18.5, 40.1],
    [18.4, 40.6], [17.4, 40.95], [16, 41.45], [15.9, 41.9], [14.5, 42.25], [13.6, 43.55], [12.4, 44.2], [12.25, 45.2], [12.6, 45.5],
    [13.7, 45.7], [13.6, 45.1], [13.9, 44.8], [14.3, 45.3], [14.9, 44.9], [15.4, 44.2], [16, 43.5], [17, 43.1], [18.1, 42.6], [19, 42],
    [19.5, 41.6], [19.4, 40.8], [19.5, 40.2], [20.2, 39.7], [21.6, 39.5]
  ];
  var INSELN = [
    [[1.75, 52.7], [1.6, 52.1], [1.45, 51.35], [0.9, 50.95], [0.2, 50.75], [-1, 50.75], [-2, 50.6], [-3.4, 50.6], [-4.2, 50.35], [-5.7, 50.05],
      [-5, 50.55], [-4.2, 51.1], [-3.2, 51.25], [-3.2, 51.4], [-4.2, 51.6], [-5.25, 51.75], [-4.5, 52.2], [-4.1, 52.6], [-4.7, 52.8],
      [-4.3, 53.4], [-3, 53.3], [-2.9, 53.75], [-3.2, 54.1], [-3.6, 54.6], [-3.4, 54.9], [-4.6, 54.7], [-5.1, 55], [-4.9, 55.8], [-5.5, 56.3],
      [-2, 56.3], [-2.1, 55.9], [-1.6, 55.4], [-1.3, 54.6], [-0.4, 54.3], [0.1, 53.6], [0.3, 53.1], [1.3, 52.95]],
    [[-6, 52.2], [-6.05, 53.4], [-6.2, 54], [-5.5, 54.6], [-6.1, 55.3], [-7.3, 55.35], [-8.5, 55.1], [-8.6, 54.3], [-10.1, 54.2], [-9.9, 53.4],
      [-9.4, 52.6], [-10.4, 52.1], [-9.8, 51.5], [-8.4, 51.65], [-7, 52.1]],
    [[12.8, 55.4], [14.3, 55.45], [14.4, 56.3], [12.6, 56.3], [12.95, 55.85]],
    [[11, 55.3], [11.8, 55], [12.6, 55.6], [12.3, 56.1], [11.2, 55.9]],
    [[9.7, 55.5], [10.2, 55.05], [10.85, 55.3], [10.5, 55.6]],
    [[9.45, 43], [9.55, 42.1], [9.2, 41.37], [8.6, 41.8], [8.7, 42.6]],
    [[9.25, 41.2], [9.8, 40.5], [9.65, 39.2], [9.05, 39], [8.4, 39], [8.5, 40], [8.15, 40.95]],
    [[12.4, 38.15], [13.5, 38.2], [15.6, 38.3], [15.1, 37], [14.4, 36.75], [12.6, 37.6]],
    [[2.4, 39.6], [3.4, 39.85], [3.2, 39.3], [2.6, 39.45]]
  ];

  /* Herrschaftsgebiete. Sie dürfen ins Meer ragen, gezeichnet wird nur auf dem Land (clipPath). */
  var REICH_800 = [ // alles, was um 800 zum Reich gehörte (darüber liegt das Reich von 768)
    [6.5, 54.8], [8, 54.35], [10.4, 54.35], [10.6, 53.9], [11.2, 53.3], [11.8, 52.8], [12.1, 52], [11.9, 51.4], [12, 50.4], [12.5, 50.2],
    [13.3, 49.3], [13.8, 48.8], [14.5, 48.5], [14.5, 47.3], [14.5, 46.6], [13.7, 46.4], [13.7, 45.6], [14.3, 45.2], [13.6, 44.6], [14.2, 43.2],
    [14.6, 42.1], [14, 41.9], [13.4, 41.6], [13.2, 41.2], [12.8, 40.8], [11, 42], [9.8, 43.6], [7.7, 43], [3.6, 42.2], [3.2, 42.45],
    [0, 42.75], [-1.8, 43.3], [-3, 44.5], [-3, 47.2], [-1.6, 47.3], [-1.6, 48.65], [-2.2, 49], [-2.2, 49.9], [0, 50.25], [1.3, 50.6],
    [1.9, 51.15], [3, 51.6], [3.5, 53]
  ];
  var REICH_768 = [
    [3.5, 53], [6.8, 54], [7.2, 52.5], [7.6, 51.6], [9, 51.4], [10.2, 51.3], [11.8, 51.2], [12, 50.3], [11.2, 49.3], [10.9, 48.7],
    [10.9, 47.4], [10.4, 46.7], [9.4, 46.4], [8.3, 46.1], [7, 45.9], [6.8, 45.1], [7.1, 44.4], [7.7, 43.6], [7.7, 42], [3.3, 42],
    [3.1, 42.45], [1.5, 42.6], [0, 42.75], [-1.7, 43.25], [-3, 44], [-3, 47.2], [-1.6, 47.3], [-1.6, 48.65], [-2.2, 49], [-2.2, 49.9],
    [0, 50.25], [1.3, 50.6], [1.9, 51.15], [3, 51.6]
  ];
  var MARKEN = [
    [[3.6, 42.6], [3.2, 42.45], [1.5, 42.62], [0, 42.77], [-1.8, 43.27], [-1.8, 42.6], [-1, 42], [0.2, 41.5], [0.8, 40.9], [1.5, 40.6], [3.8, 41.6]], // Spanische Mark
    [[-2.6, 46.9], [-2.6, 48.9], [-1.3, 48.75], [-1.2, 47]], // Bretonische Mark
    [[8, 54.36], [10.3, 54.36], [10.3, 55], [8, 55]], // Dänische Mark
    [[11.9, 51.4], [12.1, 52], [13, 52], [13.2, 50.6], [12.5, 50.2], [12, 50.4]], // Sorbische Mark
    [[14.5, 48.5], [17, 48.6], [18.9, 47.8], [19, 46.2], [16.2, 46.2], [14.5, 46.6], [14.5, 47.3]], // Ostmark und Pannonische Mark
    [[12.3, 46.6], [14.5, 46.6], [16.2, 46.2], [16, 45.3], [14.5, 45], [13.6, 44.8], [13.6, 45.6], [12.3, 45.7]] // Mark Friaul
  ];
  var KIRCHENSTAAT = [[11.2, 42.45], [12, 42.9], [12.3, 43.4], [12, 44], [11.9, 44.7], [12.7, 44.9], [13.8, 43.5], [13, 43], [13.2, 42.4],
    [13.8, 41.7], [13.3, 41.2], [12.5, 41], [11.6, 41.6]];
  var OSTROM = [
    [[11.8, 38.4], [14.8, 38.5], [15, 39.9], [16.7, 39.8], [17.4, 39.2], [16.5, 37.5], [15.5, 36.3], [12, 36.4]],
    [[17.7, 40.7], [18.8, 40.75], [18.8, 39.6], [17.9, 40.2]]
  ];
  /* Rhein erst ab Basel gezeichnet, damit Rhein und Donau getrennt bleiben. */
  var RHEIN = [[7.6, 47.6], [7.8, 48.6], [8.3, 49.5], [8.3, 50], [7.6, 50.4], [7, 50.9], [6.8, 51.4], [6, 51.85], [4.5, 51.9]];
  var DONAU = [[8.5, 48], [10, 48.4], [12.1, 49], [13.4, 48.6], [15, 48.3], [16.4, 48.2], [17.1, 48.1], [18.9, 47.8], [19, 47.5], [18.9, 46],
    [19.5, 45.2], [20.5, 44.8], [21.6, 44.6]];
  var ORTE = { aachen: [6.08, 50.78], paderborn: [8.75, 51.72], ingelheim: [8.07, 49.97], pavia: [9.16, 45.19], rom: [12.5, 41.9] };

  var LILA = '#9a7aae', HELLLILA = '#ddcde6', MARKE = '#9fb6d6', KIRCHE = '#c4553f';

  function ziel(name) { var q = P(ORTE[name][0], ORTE[name][1]); return { tx: q[0], ty: q[1] }; }
  function mit(o, z) { Object.keys(z).forEach(function (k) { o[k] = z[k]; }); return o; }

  W.abb.registriere('karte-frankenreich', {
    viewBox: '0 0 360 352',
    titel: 'Vereinfachte Karte: Das Frankenreich unter Karl dem Großen',
    strukturen: {
      aachen: mit({ label: 'Aachen', x: 168, y: 62, a: 'end' }, ziel('aachen')),
      paderborn: mit({ label: 'Paderborn', x: 198, y: 34, a: 'end' }, ziel('paderborn')),
      ingelheim: mit({ label: 'Ingelheim', x: 182, y: 96, a: 'end' }, ziel('ingelheim')),
      pavia: mit({ label: 'Pavia', x: 196, y: 170, a: 'end' }, ziel('pavia')),
      rom: mit({ label: 'Rom', x: 236, y: 218, a: 'end' }, ziel('rom')),
      sachsen: { label: 'Sachsen', x: 248, y: 46 },
      bayern: { label: 'Bayern', x: 264, y: 114 },
      langobarden: { label: 'Langobardenreich', kurz: 'Langobarden-|reich', x: 314, y: 142, tx: 246, ty: 150 },
      kirchenstaat: { label: 'Kirchenstaat', x: 312, y: 178, tx: 262, ty: 185 },
      spanmark: { label: 'Spanische Mark', x: 116, y: 226, tx: 130, ty: 200 }
    },
    basis: function (o, uid) {
      var land = flaeche(FESTLAND) + ' ' + INSELN.map(flaeche).join(' ');
      var s = '<defs><clipPath id="' + uid + '-land"><path d="' + land + '"/></clipPath>' +
        '<clipPath id="' + uid + '-rahmen"><rect x="0" y="0" width="360" height="282"/></clipPath>' +
        '<pattern id="' + uid + '-mark" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">' +
        '<rect width="6" height="6" fill="' + MARKE + '"/><line x1="0" y1="0" x2="0" y2="6" stroke="' + F.lapis + '" stroke-width="1.4" opacity=".55"/></pattern></defs>';
      s += '<g clip-path="url(#' + uid + '-rahmen)">';
      s += '<rect x="0" y="0" width="360" height="282" fill="' + F.himmel + '"/>';
      s += '<path d="' + land + '" fill="' + F.hell + '"/>';
      s += '<g clip-path="url(#' + uid + '-land)">' +
        '<path d="' + flaeche(REICH_800) + '" fill="' + HELLLILA + '"/>' +
        '<path d="' + flaeche(REICH_768) + '" fill="' + LILA + '"/>' +
        MARKEN.map(function (m) { return '<path d="' + flaeche(m) + '" fill="url(#' + uid + '-mark)"/>'; }).join('') +
        '<path d="' + flaeche(KIRCHENSTAAT) + '" fill="' + KIRCHE + '"/>' +
        OSTROM.map(function (m) { return '<path d="' + flaeche(m) + '" fill="' + F.ocker + '"/>'; }).join('') +
        '</g>';
      s += '<path d="' + land + '" fill="none" stroke="' + F.linie + '" stroke-width=".7"/>';
      s += '<path d="' + linie(RHEIN) + '" fill="none" stroke="' + F.lapis + '" stroke-width="1.8" stroke-linejoin="round"/>';
      s += '<path d="' + linie(DONAU) + '" fill="none" stroke="' + F.lapis + '" stroke-width="1.8" stroke-linejoin="round"/>';
      s += Object.keys(ORTE).map(function (k) { var q = P(ORTE[k][0], ORTE[k][1]); return '<circle cx="' + q[0] + '" cy="' + q[1] + '" r="3.4" fill="' + F.tinte + '" stroke="' + F.papier + '" stroke-width="1.2"/>'; }).join('');
      s += '<text class="abb-text" x="199" y="118" text-anchor="end" font-style="italic" fill="' + F.lapis + '">Rhein</text>';
      s += '<text class="abb-text" x="322" y="104" text-anchor="middle" font-style="italic" fill="' + F.lapis + '">Donau</text>';
      s += '<text class="abb-text" x="172" y="16" text-anchor="middle" font-style="italic" fill="' + F.lapis + '">Nordsee</text>';
      s += '<text class="abb-text" x="40" y="150" text-anchor="middle" font-style="italic" fill="' + F.lapis + '">Atlantik</text>';
      s += '<text class="abb-text" x="175" y="252" text-anchor="middle" font-style="italic" fill="' + F.lapis + '">Mittelmeer</text>';
      s += '</g><rect x=".5" y=".5" width="359" height="281.5" fill="none" stroke="' + F.linie + '"/>';
      function eintrag(x, y, fill, text) {
        return '<rect x="' + x + '" y="' + (y - 9) + '" width="16" height="11" fill="' + fill + '" stroke="' + F.linie + '" stroke-width=".6"/>' +
          '<text class="abb-text" x="' + (x + 22) + '" y="' + y + '">' + text + '</text>';
      }
      s += eintrag(6, 299, LILA, 'Frankenreich 768') + eintrag(6, 316, HELLLILA, 'Gebietserweiterungen Karls') +
        eintrag(6, 333, 'url(#' + uid + '-mark)', 'Grenzmarken Karls') +
        eintrag(200, 299, KIRCHE, 'Kirchenstaat') + eintrag(200, 316, F.ocker, 'Oströmisches Reich') +
        '<circle cx="214" cy="329" r="3.4" fill="' + F.tinte + '" stroke="' + F.papier + '" stroke-width="1.2"/><text class="abb-text" x="222" y="333">Ort</text>';
      s += '<text class="abb-text" x="6" y="349" font-size="11" fill="' + F.grau + '">Vereinfacht nach Buch S. 19, M4. Grenzen ungefähr.</text>';
      return s;
    }
  });

  /* ---------- Pfalz Aachen ---------- */

  function haus(x, y, b, h, dachH, fenster) {
    var s = '<polygon points="' + (x - 4) + ',' + y + ' ' + (x + 5) + ',' + (y - dachH) + ' ' + (x + b - 5) + ',' + (y - dachH) + ' ' + (x + b + 4) + ',' + y +
      '" fill="' + F.dach + '" stroke="' + F.linie + '" stroke-width=".8"/>' +
      '<rect x="' + x + '" y="' + y + '" width="' + b + '" height="' + h + '" fill="' + F.stein + '" stroke="' + F.linie + '" stroke-width=".8"/>';
    for (var i = 0; i < (fenster || 0); i++) {
      var fx = x + 8 + i * ((b - 16) / Math.max(1, fenster - 1)) - 2.5;
      s += '<rect x="' + fx.toFixed(1) + '" y="' + (y + 5) + '" width="5" height="' + Math.min(10, h - 9) + '" rx="2.5" fill="' + F.linie + '"/>';
    }
    return s;
  }
  function huette(x, y) {
    return '<rect x="' + x + '" y="' + y + '" width="34" height="14" fill="' + F.holz + '" stroke="' + F.linie + '" stroke-width=".8"/>' +
      '<polygon points="' + (x - 4) + ',' + y + ' ' + (x + 17) + ',' + (y - 12) + ' ' + (x + 38) + ',' + y + '" fill="' + F.ocker + '" stroke="' + F.linie + '" stroke-width=".8"/>' +
      '<rect x="' + (x + 14) + '" y="' + (y + 5) + '" width="6" height="9" fill="' + F.tinte + '"/>';
  }
  function baum(x, y, r) {
    return '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + F.gruen + '" opacity=".85"/>';
  }
  function vieleck(cx, cy, r, n, drehung) {
    var p = [];
    for (var i = 0; i < n; i++) {
      var w = (Math.PI * 2 * i) / n + (drehung || 0);
      p.push((cx + r * Math.cos(w)).toFixed(1) + ',' + (cy + r * Math.sin(w)).toFixed(1));
    }
    return p.join(' ');
  }

  W.abb.registriere('pfalz-aachen', {
    viewBox: '0 0 360 250',
    titel: 'Vereinfachte Zeichnung der Pfalz Aachen um 800 (nach der Rekonstruktion im Buch S. 21, M3)',
    strukturen: {
      koenigshalle: { label: 'Königshalle', x: 100, y: 62 },
      wohngebaeude: { label: 'Wohngebäude des Königs', kurz: 'Wohngebäude|des Königs', x: 206, y: 54 },
      torhalle: { label: 'Torhalle mit Gerichtssaal', kurz: 'Torhalle mit|Gerichtssaal', x: 166, y: 130 },
      pfalzkapelle: { label: 'Pfalzkapelle', x: 300, y: 142 },
      badehaus: { label: 'Badehaus mit Schwimmbecken', kurz: 'Badehaus mit|Schwimmbecken', x: 294, y: 48 },
      wohnhaeuser: { label: 'Wohnhäuser für Knechte und Mägde', kurz: 'Wohnhäuser für|Knechte und Mägde', x: 66, y: 214 }
    },
    basis: function () {
      var s = '<rect x="0" y="0" width="360" height="250" fill="' + F.hellgruen + '"/>';
      // Wiesen und Wege
      s += '<rect x="8" y="96" width="70" height="52" fill="#bccf9c"/><rect x="196" y="186" width="150" height="56" fill="#bccf9c"/>';
      s += '<rect x="158" y="148" width="16" height="102" fill="' + F.hell + '"/><rect x="0" y="170" width="160" height="10" fill="' + F.hell + '"/>';
      s += '<rect x="232" y="170" width="36" height="16" fill="' + F.hell + '"/>';
      // Badehaus mit Schwimmbecken
      s += '<rect x="246" y="16" width="96" height="66" fill="' + F.dach + '" stroke="' + F.linie + '" stroke-width=".8"/>' +
        '<rect x="258" y="28" width="72" height="42" fill="' + F.hell + '" stroke="' + F.linie + '" stroke-width=".6"/>' +
        '<rect x="268" y="36" width="52" height="26" fill="' + F.wasser + '" stroke="' + F.lapis + '" stroke-width=".8"/>' +
        '<rect x="290" y="70" width="10" height="12" fill="' + F.hell + '"/>';
      // Wohngebäude des Königs
      s += haus(180, 44, 52, 22, 12, 4);
      // Verbindungsgang von der Königshalle zur Kapelle
      s += '<rect x="96" y="80" width="12" height="54" fill="' + F.dach + '" stroke="' + F.linie + '" stroke-width=".8"/>';
      s += '<rect x="96" y="128" width="140" height="6" fill="' + F.dach + '" stroke="' + F.linie + '" stroke-width=".8"/>' +
        '<rect x="96" y="134" width="140" height="9" fill="' + F.stein + '" stroke="' + F.linie + '" stroke-width=".8"/>';
      for (var i = 0; i < 14; i++) s += '<rect x="' + (100 + i * 10) + '" y="136" width="5" height="7" rx="2.5" fill="' + F.linie + '"/>';
      // Königshalle mit Apsis
      s += '<path d="M46,40 A22,22 0 0 0 46,82 Z" fill="' + F.dach + '" stroke="' + F.linie + '" stroke-width=".8"/>';
      s += haus(46, 52, 112, 28, 14, 8);
      // Torhalle
      s += haus(148, 118, 36, 30, 12, 2) + '<path d="M160,148 L160,138 A6,6 0 0 1 172,138 L172,148 Z" fill="' + F.tinte + '"/>';
      // Pfalzkapelle mit Vorhof
      s += '<rect x="234" y="112" width="34" height="58" fill="' + F.hell + '" stroke="' + F.stein + '" stroke-width="6"/>' +
        '<rect x="231" y="109" width="40" height="64" fill="none" stroke="' + F.linie + '" stroke-width=".8"/>';
      s += '<rect x="266" y="126" width="12" height="32" fill="' + F.stein + '" stroke="' + F.linie + '" stroke-width=".8"/>';
      s += '<rect x="326" y="133" width="16" height="18" fill="' + F.dach + '" stroke="' + F.linie + '" stroke-width=".8"/>';
      s += '<polygon points="' + vieleck(302, 142, 28, 16, Math.PI / 16) + '" fill="' + F.stein + '" stroke="' + F.linie + '" stroke-width=".8"/>' +
        '<polygon points="' + vieleck(302, 142, 18, 8, Math.PI / 8) + '" fill="' + F.dach + '" stroke="' + F.linie + '" stroke-width=".8"/>' +
        '<circle cx="302" cy="142" r="4" fill="' + F.gold + '" stroke="' + F.linie + '" stroke-width=".6"/>';
      // Wohnhäuser für Knechte und Mägde
      s += huette(20, 196) + huette(70, 206) + huette(24, 226) + huette(112, 196);
      // Bäume
      s += baum(206, 206, 8) + baum(228, 222, 7) + baum(318, 212, 8) + baum(340, 196, 6) + baum(22, 118, 7) + baum(58, 132, 6) + baum(130, 220, 6);
      return s;
    }
  });
})();
