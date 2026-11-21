/* Abbildungen zum Bauplatz kirche: Ständeschaubild (wie Buch S. 33, M2, eigener Stil) und die drei Stände (beten, schützen, arbeiten). */
(function () {
  'use strict';
  var W = (window.W = window.W || {});
  var F = W.abb.F;

  /* Farben: Geistlichkeit violett, Adel warm, Bauern grün. Dieselbe Zuordnung in beiden Abbildungen. */
  var C = {
    hochadel: '#d9826f', ritter: F.ocker, ministeriale: F.hellblau, freie: '#a9c48f',
    hoheG: '#9b7bb5', niedereG: '#cdb9dd', abhaengige: F.hellgruen, unten: '#cfc6b4',
    haut: '#f0d2b0'
  };

  function poly(punkte, fill) {
    return '<polygon points="' + punkte + '" fill="' + fill + '" stroke="' + F.linie + '" stroke-width="1.2" stroke-linejoin="round"/>';
  }
  function rect(x, y, w, h, fill, rx) {
    return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '"' + (rx ? ' rx="' + rx + '"' : '') +
      ' fill="' + fill + '" stroke="' + F.linie + '" stroke-width="1.2"/>';
  }

  /* ---------- Schaubild der ländlichen Gesellschaft ---------- */
  W.abb.registriere('staendeschaubild', {
    viewBox: '0 0 360 340',
    titel: 'Schaubild der ländlichen Gesellschaft im Mittelalter (nach Buch S. 33, M2)',
    strukturen: {
      hochadel: { label: 'Hochadel', x: 96, y: 100, tx: 166, ty: 100, a: 'end' },
      ministeriale: { label: 'Ministeriale', x: 96, y: 146, tx: 166, ty: 146, a: 'end' },
      ritter: { label: 'Ritter', x: 96, y: 176, tx: 132, ty: 176, a: 'end' },
      freieBauern: { label: 'freie Bauern', x: 96, y: 210, tx: 128, ty: 210, a: 'end' },
      hoheGeistlichkeit: { label: 'hohe Geistlichkeit', kurz: 'hohe|Geistlichkeit', x: 262, y: 100, tx: 194, ty: 100, a: 'start' },
      niedereGeistlichkeit: { label: 'niedere Geistlichkeit', kurz: 'niedere|Geistlichkeit', x: 262, y: 168, tx: 214, ty: 168, a: 'start' },
      abhaengigeBauern: { label: 'abhängige Bauern', x: 180, y: 262 },
      unterbaeuerlich: { label: 'unterbäuerliche Schicht ohne Landbesitz', kurz: 'unterbäuerliche Schicht|ohne Landbesitz', x: 180, y: 309 }
    },
    basis: function () {
      return rect(40, 292, 280, 36, C.unten, 3) +
        rect(14, 226, 332, 66, C.abhaengige, 16) +
        /* weltliche Seite */
        rect(108, 192, 72, 34, C.freie) +
        rect(118, 132, 32, 60, C.ritter) +
        rect(150, 132, 30, 60, C.ministeriale) +
        poly('130,132 180,132 180,40', C.hochadel) +
        /* geistliche Seite */
        poly('180,132 242,132 242,192 252,192 252,226 180,226', C.niedereG) +
        poly('180,40 180,132 230,132', C.hoheG) +
        '<line x1="180" y1="40" x2="180" y2="226" stroke="' + F.tinte + '" stroke-width="2"/>';
    }
  });

  /* ---------- Die drei Stände: Wer betet, wer schützt, wer arbeitet? ---------- */
  function nische(cx) {
    return '<path d="M' + (cx - 52) + ',214 V92 A52,52 0 0 1 ' + (cx + 52) + ',92 V214 Z" fill="' + F.papier + '" stroke="' + F.linie + '" stroke-width="1.5"/>' +
      '<rect x="' + (cx - 51) + '" y="200" width="102" height="13" fill="' + F.hellgruen + '"/>' +
      '<line x1="' + (cx - 51) + '" y1="200" x2="' + (cx + 51) + '" y2="200" stroke="' + F.gruen + '" stroke-width="1"/>';
  }
  function kopf(cx) {
    return '<circle cx="' + cx + '" cy="98" r="11" fill="' + C.haut + '" stroke="' + F.linie + '" stroke-width="1.2"/>';
  }
  function geistlicher(cx) {
    var s = '';
    /* Gewand */
    s += poly((cx - 16) + ',112 ' + (cx + 16) + ',112 ' + (cx + 26) + ',204 ' + (cx - 26) + ',204', C.hoheG);
    s += poly((cx - 7) + ',112 ' + (cx + 7) + ',112 ' + (cx + 9) + ',204 ' + (cx - 9) + ',204', C.niedereG);
    /* Ärmel und betende Hände */
    s += poly((cx - 16) + ',114 ' + (cx - 3) + ',138 ' + (cx - 9) + ',146 ' + (cx - 22) + ',126', C.hoheG);
    s += poly((cx + 16) + ',114 ' + (cx + 3) + ',138 ' + (cx + 9) + ',146 ' + (cx + 22) + ',126', C.hoheG);
    s += poly((cx - 5) + ',142 ' + cx + ',124 ' + (cx + 5) + ',142', C.haut);
    s += kopf(cx);
    /* Bischofsmütze */
    s += poly((cx - 10) + ',91 ' + (cx - 10) + ',78 ' + cx + ',64 ' + (cx + 10) + ',78 ' + (cx + 10) + ',91', F.papier);
    s += '<line x1="' + cx + '" y1="66" x2="' + cx + '" y2="91" stroke="' + F.gold + '" stroke-width="2"/>';
    /* Kreuzstab */
    s += '<line x1="' + (cx + 34) + '" y1="204" x2="' + (cx + 34) + '" y2="80" stroke="' + F.gold + '" stroke-width="3" stroke-linecap="round"/>';
    s += '<line x1="' + (cx + 27) + '" y1="92" x2="' + (cx + 41) + '" y2="92" stroke="' + F.gold + '" stroke-width="3" stroke-linecap="round"/>';
    return s;
  }
  function adliger(cx) {
    var s = '';
    /* Beine */
    s += rect(cx - 10, 168, 8, 36, F.linie) + rect(cx + 2, 168, 8, 36, F.linie);
    /* Waffenrock */
    s += poly((cx - 15) + ',112 ' + (cx + 15) + ',112 ' + (cx + 20) + ',172 ' + (cx - 20) + ',172', C.hochadel);
    s += '<line x1="' + (cx - 17) + '" y1="146" x2="' + (cx + 17) + '" y2="146" stroke="' + F.gold + '" stroke-width="3"/>';
    /* Schwertarm und Schwert */
    s += '<line x1="' + (cx + 13) + '" y1="116" x2="' + (cx + 22) + '" y2="146" stroke="#c46f5c" stroke-width="6" stroke-linecap="round"/>';
    s += '<line x1="' + (cx + 22) + '" y1="138" x2="' + (cx + 22) + '" y2="70" stroke="#8a8f96" stroke-width="4" stroke-linecap="round"/>';
    s += '<line x1="' + (cx + 14) + '" y1="138" x2="' + (cx + 30) + '" y2="138" stroke="' + F.gold + '" stroke-width="3" stroke-linecap="round"/>';
    s += '<line x1="' + (cx + 22) + '" y1="140" x2="' + (cx + 22) + '" y2="152" stroke="' + F.holz + '" stroke-width="4" stroke-linecap="round"/>';
    s += kopf(cx);
    /* Krone */
    s += poly((cx - 10) + ',90 ' + (cx - 10) + ',79 ' + (cx - 5) + ',85 ' + cx + ',77 ' + (cx + 5) + ',85 ' + (cx + 10) + ',79 ' + (cx + 10) + ',90', F.gold);
    /* Schild */
    s += '<path d="M' + (cx - 38) + ',122 H' + (cx - 12) + ' V144 Q' + (cx - 12) + ',162 ' + (cx - 25) + ',170 Q' + (cx - 38) + ',162 ' + (cx - 38) + ',144 Z" fill="' + F.lapis + '" stroke="' + F.linie + '" stroke-width="1.2"/>';
    s += '<line x1="' + (cx - 36) + '" y1="125" x2="' + (cx - 15) + '" y2="158" stroke="' + F.gold + '" stroke-width="5"/>';
    s += '<circle cx="' + (cx + 22) + '" cy="147" r="3.5" fill="' + C.haut + '"/>';
    return s;
  }
  function bauer(cx) {
    var s = '';
    /* Beine */
    s += rect(cx - 10, 166, 7, 38, F.holz) + rect(cx + 3, 166, 7, 38, F.holz);
    /* Kittel */
    s += poly((cx - 14) + ',112 ' + (cx + 14) + ',112 ' + (cx + 19) + ',170 ' + (cx - 19) + ',170', C.freie);
    s += '<line x1="' + (cx - 16) + '" y1="146" x2="' + (cx + 16) + '" y2="146" stroke="' + F.holz + '" stroke-width="2"/>';
    /* Hacke: Stiel und Blatt */
    s += '<line x1="' + (cx - 8) + '" y1="124" x2="' + (cx + 32) + '" y2="192" stroke="' + F.holz + '" stroke-width="4" stroke-linecap="round"/>';
    s += poly((cx + 24) + ',190 ' + (cx + 42) + ',186 ' + (cx + 44) + ',200 ' + (cx + 30) + ',202', '#8a8f96');
    /* Arme */
    s += '<line x1="' + (cx - 12) + '" y1="116" x2="' + (cx + 2) + '" y2="140" stroke="#86a86c" stroke-width="6" stroke-linecap="round"/>';
    s += '<line x1="' + (cx + 12) + '" y1="116" x2="' + (cx + 12) + '" y2="156" stroke="#86a86c" stroke-width="6" stroke-linecap="round"/>';
    s += '<circle cx="' + (cx + 2) + '" cy="141" r="3.5" fill="' + C.haut + '"/><circle cx="' + (cx + 12) + '" cy="158" r="3.5" fill="' + C.haut + '"/>';
    /* Erdschollen */
    s += '<ellipse cx="' + (cx - 30) + '" cy="203" rx="6" ry="3" fill="' + F.holz + '"/><ellipse cx="' + (cx + 20) + '" cy="205" rx="5" ry="2.5" fill="' + F.holz + '"/>';
    /* Kopf mit Kapuze */
    s += '<path d="M' + (cx - 14) + ',108 Q' + (cx - 15) + ',82 ' + cx + ',82 Q' + (cx + 15) + ',82 ' + (cx + 14) + ',108 Z" fill="' + F.holz + '" stroke="' + F.linie + '" stroke-width="1.2"/>';
    s += '<circle cx="' + cx + '" cy="99" r="9" fill="' + C.haut + '" stroke="' + F.linie + '" stroke-width="1"/>';
    return s;
  }
  function band(cx, text) {
    return '<path d="M' + (cx - 50) + ',12 H' + (cx + 50) + ' L' + (cx + 44) + ',22 L' + (cx + 50) + ',32 H' + (cx - 50) + ' L' + (cx - 44) + ',22 Z" fill="' + F.papier + '" stroke="' + F.zinnober + '" stroke-width="1.2"/>' +
      '<text class="abb-text" x="' + cx + '" y="26" text-anchor="middle" font-style="italic" fill="' + F.zinnober + '">' + text + '</text>';
  }

  W.abb.registriere('drei-staende', {
    viewBox: '0 0 360 254',
    titel: 'Die drei Stände: Wer betet, wer schützt, wer arbeitet?',
    strukturen: {
      geistlicher: { label: 'Geistlicher: betet (1. Stand)', kurz: 'Geistlicher:|betet', x: 62, y: 234 },
      adliger: { label: 'Adliger: schützt (2. Stand)', kurz: 'Adliger:|schützt', x: 180, y: 234 },
      bauer: { label: 'Bauer: arbeitet (3. Stand)', kurz: 'Bauer:|arbeitet', x: 298, y: 234 }
    },
    /* o.inschriften: die lateinischen Inschriften des Holzschnitts von 1488 über den Nischen */
    basis: function (o) {
      var kopfzeile = o.inschriften
        ? band(62, 'Tu supplex ora') + band(180, 'Tu protege') + band(298, 'Tuque labora')
        : '<text class="abb-titel" x="180" y="26" text-anchor="middle">Wer betet, wer schützt, wer arbeitet?</text>';
      return kopfzeile + nische(62) + nische(180) + nische(298) + geistlicher(62) + adliger(180) + bauer(298);
    }
  });
})();
