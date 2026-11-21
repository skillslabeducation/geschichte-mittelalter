/* Sammelt Gerüchte und Schätze aus allen Bauplätzen und legt die große Zeitleiste fest. Ohne DOM. */
(function () {
  'use strict';
  var W = (window.W = window.W || {});
  var bps = (W.bauplaetze || []).slice().sort(function (a, b) { return a.nr - b.nr; });

  /* Markt-Gerüchte: alle Gerüchte, mit Bauplatz */
  W.geruechte = [];
  bps.forEach(function (bp) { (bp.geruechte || []).forEach(function (g) { W.geruechte.push(Object.assign({ bauplatz: bp.id }, g)); }); });

  /* Schatzkammer: der erste Schatz jedes Bauplatzes, dann zweite Schätze bis höchstens 10. Jeder kostet 15 Pfennige. */
  var erste = [], zweite = [];
  bps.forEach(function (bp) { (bp.schatz || []).forEach(function (s, i) { (i ? zweite : erste).push(Object.assign({ bauplatz: bp.id, kosten: 15 }, s)); }); });
  W.schatz = erste.concat(zweite).slice(0, 10);

  /* Die große Zeitleiste (Jahreszahlen aus dem Buch) */
  W.zeitleisteGesamt = {
    id: 'zeitleiste-gesamt', typ: 'zeitleiste',
    frage: 'Ordne die Ereignisse in die richtigen Zeitabschnitte ein.',
    abschnitte: ['vor 700', '700–799', '800–899', '900–1099', '1100–1249', '1250–1399', 'nach 1400'],
    ereignisse: [
      ['Der letzte weströmische Kaiser wird abgesetzt.', 0, '476'],
      ['Benedikt von Nursia schreibt seine Ordensregel.', 0, 'um 540'],
      ['Karl wird König der Franken.', 1, '768'],
      ['Karl erobert Pavia und wird König der Langobarden.', 1, '774'],
      ['Papst Leo III. krönt Karl in Rom zum Kaiser.', 2, '800'],
      ['Karl stirbt in Aachen, seiner Hauptresidenz.', 2, '814'],
      ['Der Klosterplan von St. Gallen wird gezeichnet.', 2, 'um 820'],
      ['Bischof Adalbero von Laon schreibt: „Die einen beten, die anderen kämpfen und wieder andere arbeiten.“', 3, 'um 1025'],
      ['Die Burg Bentheim wird zum ersten Mal erwähnt.', 3, '1020'],
      ['Hildegard von Bingen schreibt über die gottgewollte Ordnung der Stände.', 4, '1150'],
      ['Auf dem Gebiet des heutigen Deutschlands leben fünfmal so viele Menschen wie im Jahr 800.', 4, '1200'],
      ['Die Manessische Liederhandschrift mit dem Turnierbild entsteht.', 5, 'um 1300'],
      ['Ein Priester ruft die Bauern auf: Alle stammen von Adam und Eva ab.', 5, '1381'],
      ['Der Holzschnitt „Christus und die drei Stände“ von Johannes Lichtenberger erscheint.', 6, '1488'],
      ['Die Ständeordnung gilt in den meisten Ländern Europas noch.', 6, 'bis ins 19. Jh.']
    ],
    erkl: 'Merke dir die Anker: 476 Ende Westroms, 800 Kaiserkrönung, 814 Karls Tod, um 1025 Adalbero, 1381 Kritik an der Ständeordnung.'
  };
})();
