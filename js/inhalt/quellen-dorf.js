/* Quellen zum Bauplatz dorf (Leben der Bauern, Buch S. 34/35). */
(function () {
  'use strict';
  var W = (window.W = window.W || {});

  Object.assign(W.quellen, {
    'dorf-aelfric': {
      titel: 'Ein Pflüger erzählt von seiner Arbeit (aus einem Schulgespräch)',
      autor: 'Aelfric, Mönch und Lehrer in England',
      zeit: 'um 1000',
      art: 'text',
      text: '<p><strong>Lehrer:</strong> Was sagst du, Pflüger? Wie verrichtest du deine Arbeit?</p>' +
        '<p><strong>Pflüger:</strong> Ach, Herr, ich arbeite sehr hart. Bei Tagesanbruch gehe ich hinaus, treibe die Ochsen aufs Feld und spanne sie vor den Pflug. ' +
        'Kein Winter ist so streng, dass ich es wage, mich zu Hause zu verstecken, denn ich habe Angst vor meinem Herrn. ' +
        'Wenn die Ochsen eingespannt und Pflugschar und Pflugmesser am Pflug befestigt sind, muss ich jeden Tag einen ganzen Acker pflügen oder mehr.</p>' +
        '<p><strong>Lehrer:</strong> Hast du einen Helfer?</p>' +
        '<p><strong>Pflüger:</strong> Ich habe einen Jungen, der die Ochsen mit einem Stachelstock antreibt. Er ist jetzt heiser von der Kälte und vom Schreien.</p>' +
        '<p><strong>Lehrer:</strong> Was tust du sonst noch am Tag?</p>' +
        '<p><strong>Pflüger:</strong> Noch viel mehr. Ich muss die Futterkrippen der Ochsen mit Heu füllen, ihnen Wasser geben und ihren Mist hinaustragen.</p>' +
        '<p><strong>Lehrer:</strong> Oh, oh, das ist eine große Mühe!</p>' +
        '<p><strong>Pflüger:</strong> Ja, Herr, es ist eine große Mühe, weil ich nicht frei bin.</p>',
      buch: false,
      vereinfacht: true,
      nachweis: 'Aelfric (Ælfric von Eynsham), Colloquium: ein lateinisches Übungsgespräch für Schüler einer Klosterschule, um 1000, mit altenglischer Übersetzung zwischen den Zeilen. ' +
        'Abschnitt über den Pflüger, gekürzt und vereinfacht nach der englischen Übersetzung in S. H. Gem, An Anglo-Saxon Abbot: Ælfric of Eynsham, Edinburgh 1912, S. 183–195 (Internet Medieval Sourcebook), verglichen mit dem altenglischen Text.'
    },
    'dorf-maerz': {
      titel: 'Monatsbild März: Pflügen, Säen und Arbeit im Weinberg',
      autor: 'Brüder von Limburg, Buchmaler des Herzogs Johann von Berry; die Figuren wohl von einem späteren Maler ergänzt',
      zeit: 'um 1412–1416, vollendet um 1440',
      art: 'bild',
      datei: 'bilder/dorf-maerz.jpg',
      alt: 'Kalenderbild für den März. Im Vordergrund pflügt ein Bauer mit zwei Ochsen und einem Räderpflug. In der Mitte arbeiten Bauern in einem ummauerten Weinberg an den Reben, rechts beugt sich ein Mann über einen Sack mit Saatgut. Links hinten hütet ein Hirte mit seinem Hund Schafe. Im Hintergrund steht das Schloss Lusignan des Herzogs, darüber ein Halbkreis mit Sternzeichen und Kalendertagen.',
      buch: false,
      vereinfacht: false,
      nachweis: 'Stundenbuch „Les Très Riches Heures du duc de Berry“, Kalenderblatt März (fol. 3v), Musée Condé, Chantilly, Ms. 65. ' +
        'Die Handschrift wurde für Herzog Johann von Berry begonnen und nach seinem Tod (1416) für andere adlige Besitzer vollendet. ' +
        'Nicht dasselbe Bild wie im Buch: Das Buch zeigt auf S. 35 (M2) Monatsbilder aus einer anderen französischen Handschrift von 1480.',
      lizenz: 'gemeinfrei (Public domain)',
      herkunft: 'https://commons.wikimedia.org/wiki/File:Les_Tr%C3%A8s_Riches_Heures_du_duc_de_Berry_mars.jpg'
    },
    'dorf-juni': {
      titel: 'Monatsbild Juni: Heuernte',
      autor: 'Brüder von Limburg, Buchmaler des Herzogs Johann von Berry',
      zeit: 'um 1412–1416',
      art: 'bild',
      datei: 'bilder/dorf-juni.jpg',
      alt: 'Kalenderbild für den Juni. Im Vordergrund arbeiten zwei Frauen auf einer Wiese: Die linke recht das gemähte Heu mit einem Holzrechen zusammen, die rechte schichtet es mit einer Holzgabel auf. Dahinter stehen schon mehrere Heuhaufen. Rechts mähen drei Männer das Gras mit Sensen. Im Hintergrund eine Mauer und ein großer Palast mit einer hohen gotischen Kapelle, darüber ein Halbkreis mit Sternzeichen und Kalendertagen.',
      buch: false,
      vereinfacht: false,
      nachweis: 'Stundenbuch „Les Très Riches Heures du duc de Berry“, Kalenderblatt Juni (fol. 6v), Musée Condé, Chantilly, Ms. 65. ' +
        'Die Handschrift wurde für Herzog Johann von Berry begonnen und nach seinem Tod (1416) für andere adlige Besitzer vollendet. Im Hintergrund der Königspalast in Paris mit der Sainte-Chapelle. ' +
        'Nicht dasselbe Bild wie im Buch: Das Buch zeigt auf S. 35 (M2) Monatsbilder aus einer anderen französischen Handschrift von 1480.',
      lizenz: 'gemeinfrei (Public domain)',
      herkunft: 'https://commons.wikimedia.org/wiki/File:Les_Tr%C3%A8s_Riches_Heures_du_duc_de_Berry_juin.jpg'
    }
  });
})();
