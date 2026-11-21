/* Abbildungen zum Bauplatz 3: Lehnswesen (Buch S. 24/25).
   'lehnswesen': vereinfachtes Schaubild wie M3 S. 25, im eigenen Stil neu gezeichnet.
   Drei Ebenen (König, Kronvasallen, Untervasallen), keine Bauern.
   Rote Pfeile nach unten: Schutz, Lehen. Grüne Pfeile nach oben: Kriegs- und Amtsdienste. Orange Doppelpfeile: Treueid.
   Die Grundzeichnung enthält keine Namen: Beschriftungen und Nummern setzt die Basis aus den Strukturen. */
(function () {
  'use strict';
  var W = (window.W = window.W || {});

  var ORANGE = '#d9822b';

  function kasten(x, y, w, h, fill, stroke, sw) {
    return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="4" fill="' + fill + '" stroke="' + stroke + '" stroke-width="' + (sw || 1.2) + '"/>';
  }

  function pfeil(d, farbe, marke, uid, doppelt) {
    return '<path d="' + d + '" fill="none" stroke="' + farbe + '" stroke-width="2.6" stroke-linejoin="round"' +
      (doppelt ? ' marker-start="url(#' + uid + '-p-' + marke + ')"' : '') +
      ' marker-end="url(#' + uid + '-p-' + marke + ')"/>';
  }

  W.abb.registriere('lehnswesen', {
    viewBox: '0 0 360 336',
    titel: 'Vereinfachtes Schaubild des Lehnswesens',
    strukturen: {
      koenig: { label: 'König', x: 180, y: 39 },
      herzoege: { label: 'Herzöge', x: 77, y: 147 },
      grafen: { label: 'Grafen', x: 180, y: 147 },
      bischoefe: { label: 'Bischöfe', x: 283, y: 147 },
      kronvasallen: { label: 'Kronvasallen', x: 180, y: 177 },
      ritter: { label: 'Ritter', x: 77, y: 281 },
      ministerialen: { label: 'Ministerialen', x: 180, y: 281 },
      aebte: { label: 'Äbte und Äbtissinnen', kurz: 'Äbte und|Äbtissinnen', x: 283, y: 281 },
      untervasallen: { label: 'Untervasallen', x: 180, y: 315 },
      schutz: { label: 'Schutz, Lehen', x: 70, y: 100, a: 'start' },
      dienste: { label: 'Kriegs- und Amtsdienste', kurz: 'Kriegs- und|Amtsdienste', x: 290, y: 102, a: 'end' },
      treueid: { label: 'Treueid', x: 189, y: 78, a: 'start' }
    },
    basis: function (o, uid) {
      var F = W.abb.F;
      var s = '';
      // Hintergrund
      s += '<rect x="0" y="0" width="360" height="336" fill="' + F.papier + '"/>';

      // Krone über dem König (nur Zeichen, kein Name)
      s += '<path d="M166,19 L166,8 L172,13 L180,5 L188,13 L194,8 L194,19 Z" fill="' + F.gold + '" stroke="' + F.linie + '" stroke-width="1"/>';
      // König
      s += kasten(120, 22, 120, 34, F.ocker, F.linie, 1.4);

      // Kronvasallen: Block mit drei Feldern
      s += kasten(30, 128, 300, 64, F.hellblau, F.linie, 1.4);
      s += kasten(36, 134, 82, 26, F.papier, F.linie);
      s += kasten(124, 134, 112, 26, F.papier, F.linie);
      s += kasten(242, 134, 82, 26, F.papier, F.linie);

      // Untervasallen: Block mit drei Feldern
      s += kasten(30, 256, 300, 74, F.hellgruen, F.linie, 1.4);
      s += kasten(36, 262, 82, 38, F.papier, F.linie);
      s += kasten(124, 262, 112, 38, F.papier, F.linie);
      s += kasten(242, 262, 82, 38, F.papier, F.linie);

      // Ebene 1: König → Kronvasallen
      s += pfeil('M120,39 H60 V125', F.zinnober, 'rot', uid);            // Schutz, Lehen (nach unten)
      s += pfeil('M300,128 V39 H243', F.gruen, 'gruen', uid);            // Kriegs- und Amtsdienste (nach oben)
      s += pfeil('M180,60 V124', ORANGE, 'orange', uid, true);           // Treueid (beide Richtungen)

      // Ebene 2: Kronvasallen → Untervasallen
      s += pfeil('M60,192 V253', F.zinnober, 'rot', uid);
      s += pfeil('M300,256 V195', F.gruen, 'gruen', uid);
      s += pfeil('M180,196 V252', ORANGE, 'orange', uid, true);

      return s;
    }
  });
})();
