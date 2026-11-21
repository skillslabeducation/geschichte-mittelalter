/* Quellen zum Bauplatz kloster: Benediktsregel aus dem Buch (S. 41, M2), eine weitere Stelle der Regel (Kap. 48)
   und der originale Klosterplan von St. Gallen als Bildquelle. */
(function () {
  'use strict';
  var W = (window.W = window.W || {});
  W.quellen = W.quellen || {};

  Object.assign(W.quellen, {
    'kloster-regel': {
      titel: 'Aus der Ordensregel des Benedikt von Nursia',
      autor: 'Benedikt von Nursia',
      zeit: 'um 540 n. Chr.',
      art: 'text',
      text: '<p>Vor allem: Gott, den Herrn, lieben … Ebenso: Den Nächsten lieben wie sich selbst. Nicht falsch aussagen. Alle Menschen ehren. ' +
        'Und keinem anderen antun, was man selbst nicht erleiden möchte … Den Leib in Zucht nehmen. Sich Genüssen nicht hingeben. ' +
        'Das Fasten lieben. Arme bewirten. Nackte bekleiden. Kranke besuchen. Tote begraben. Bedrängten zu Hilfe kommen. ' +
        'Sich dem Treiben der Welt entziehen. Der Liebe zu Christus nichts vorziehen. Den Zorn nicht zur Tat werden lassen. ' +
        'Der Rachsucht nicht einen Augenblick nachgeben …</p>' +
        '<p>Es kommt vor, dass ein Bruder … gegen die Heilige Regel und die Weisungen seiner Vorgesetzten handelt. ' +
        'Wenn er sich so als Verächter erweist, werde er … einmal und ein zweites Mal im Geheimen … ermahnt.</p>' +
        '<p>Wenn er sich nicht bessert, werde er öffentlich vor allen zurechtgewiesen. Wenn er sich aber auch so nicht bessert, ' +
        'treffe ihn die Ausschließung, falls er einsehen kann, was diese Strafe bedeutet. Wenn er es aber nicht versteht, ' +
        'erhalte er eine körperliche Strafe.</p>',
      buch: true,
      vereinfacht: false,
      nachweis: 'Buch S. 41, M2 (Regel des Benedikt, Kap. 4 und Kap. 23; das Buch zitiert nach benediktiner.de, Regula Benedicti, Stand 21.06.2023)'
    },

    'kloster-regel48': {
      titel: 'Aus der Regel des Benedikt: Von der täglichen Handarbeit',
      autor: 'Benedikt von Nursia',
      zeit: 'um 540 n. Chr.',
      art: 'text',
      text: '<p>Müßiggang, also Nichtstun, ist ein Feind der Seele. Deshalb sollen sich die Brüder zu bestimmten Zeiten mit Handarbeit ' +
        'beschäftigen und zu bestimmten Stunden mit dem Lesen heiliger Schriften. …</p>' +
        '<p>Wenn es der Ort oder die Armut verlangt, dass die Brüder die Ernte selbst einbringen, sollen sie darüber nicht unzufrieden sein. ' +
        'Denn dann sind sie wirklich Mönche, wenn sie wie unsere Väter und die Apostel von der Arbeit ihrer Hände leben. ' +
        'Doch soll wegen der Schwachen alles mit Maß geschehen. …</p>' +
        '<p>In der Fastenzeit bekommt jeder ein Buch aus der Bibliothek, das er von Anfang bis Ende lesen soll. ' +
        'Ein oder zwei ältere Brüder sollen in den Lesezeiten durch das Kloster gehen. Sie sehen nach, ob ein träger Bruder ' +
        'nichts tut oder schwätzt, statt zu lesen, und so auch die anderen stört. …</p>' +
        '<p>Kranken Brüdern und Brüdern, die harte Arbeit nicht gewohnt sind, soll man eine solche Arbeit geben, dass sie nicht ' +
        'untätig sind, aber auch nicht von der Last der Arbeit erdrückt werden. Auf ihre Schwäche soll der Abt Rücksicht nehmen.</p>',
      buch: false,
      vereinfacht: true,
      nachweis: 'Regel des Benedikt (Regula Benedicti), Kap. 48 „Von der täglichen Handarbeit“, gekürzt und vereinfacht nach der Übersetzung ' +
        'in der Bibliothek der Kirchenväter (1914), bkv.unifr.ch, verglichen mit dem lateinischen Text'
    },

    'kloster-plan': {
      titel: 'Der Klosterplan von St. Gallen (Original)',
      autor: 'unbekannter Mönch (wohl im Kloster Reichenau)',
      zeit: 'um 820',
      art: 'bild',
      datei: 'bilder/kloster-plan.jpg',
      alt: 'Großes Pergamentblatt mit einem Grundriss in roter Tinte: viele rechteckige Gebäude und Höfe mit kleinen lateinischen Beschriftungen. ' +
        'In der Mitte steht die Kirche senkrecht, mit zwei runden Türmen unten und dem Altarraum oben. Rechts daneben liegt ein quadratischer Hof (Kreuzgang). ' +
        'Unten links steht ein Textblock.',
      buch: false,
      vereinfacht: false,
      nachweis: 'Stiftsbibliothek St. Gallen, Cod. Sang. 1092 (Pergament, ca. 112 × 77,5 cm). Das Buch zeigt auf S. 40 (M1) eine Rekonstruktionszeichnung nach diesem Plan. ' +
        'Im Original ist der Plan gedreht: Die Kirche steht senkrecht, ihre runden Türme sind unten.',
      lizenz: 'gemeinfrei (Public domain)',
      herkunft: 'https://commons.wikimedia.org/wiki/File:Codex_Sangallensis_1092_recto.jpg'
    }
  });
})();
