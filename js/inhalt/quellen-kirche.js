/* Quellen zum Bauplatz kirche: Holzschnitt 1488 (S. 32, M1), Adalbero (S. 33, M3), Priester 1381 (S. 33, M4), Hildegard (S. 33, M5). */
(function () {
  'use strict';
  var W = (window.W = window.W || {});

  Object.assign(W.quellen, {
    'kirche-lichtenberger': {
      titel: 'Christus und die drei Stände',
      autor: 'Holzschnitt aus Johannes Lichtenbergers Buch „Prognosticatio“ (Erstausgabe 1488; dieselben Holzschnitte auch in der Mainzer Ausgabe von Jacob Meydenbach, 1492)',
      zeit: '1488',
      art: 'bild',
      datei: 'bilder/kirche-lichtenberger.jpg',
      alt: 'Holzschnitt in Schwarz-Weiß. Oben sitzt Christus mit ausgebreiteten Armen auf einem Regenbogen. Links stehen Geistliche, darunter der Papst mit dreifacher Krone und Kreuzstab. Rechts stehen Adlige, vorn der Kaiser mit Krone. Unten bearbeiten zwei Bauern mit Hacken den Boden. Lateinische Inschriften: Tu supplex ora (links), Tu protege (rechts), Tuque labora (unten).',
      buch: true,
      vereinfacht: false,
      nachweis: 'Buch S. 32, M1. Die Beschriftung lautet: Tu supplex ora – du bete demütig! Tu protege – du beschütze! Tuque labora – und du arbeite! Im Buch ist der Holzschnitt farbig abgebildet und auf 1488 datiert (Erstausgabe, Heidelberg). Hier dieselbe Darstellung ohne Farbe aus Wikimedia Commons (Datei „Ständeordnung.jpg“). Commons nennt als Urheber Jacob Meydenbach; das Bild stammt daher wohl aus seinem Mainzer Nachdruck von 1492 (lateinische Ausgabe vom 8. Juni 1492, ISTC il00205000), der die Holzschnitte der Erstausgabe übernahm.',
      lizenz: 'gemeinfrei (Public domain)',
      herkunft: 'https://commons.wikimedia.org/wiki/File:St%C3%A4ndeordnung.jpg'
    },
    'kirche-adalbero': {
      titel: 'Dreigeteilt ist das Haus Gottes',
      autor: 'Bischof Adalbero von Laon (Bischof 977–1030), Gedicht für König Robert II. von Frankreich',
      zeit: 'um 1025',
      art: 'text',
      text: '<p>Dreigeteilt ist das Haus Gottes, welches als eine Einheit zu sehen ist.</p>' +
        '<p>Die einen beten, die anderen kämpfen und wieder andere arbeiten. Diese drei gehören zusammen und ertragen keine Trennung.</p>' +
        '<p>Durch die Aufgaben des einen Standes sind die Werke der beiden anderen erst möglich.</p>' +
        '<p>Durch die gegenseitigen Dienste bereiten sie sich gegenseitig Zuversicht.</p>',
      buch: true,
      vereinfacht: false,
      nachweis: 'Buch S. 33, M3 (zit. nach Stefan Weinfurter, Die Ständegesellschaft, in: Praxis Geschichte 5 (2018), S. 6). Das Buch gibt als Lebensdaten 971–1030 an; belegt ist Adalbero als Bischof von Laon ab 977 bis zu seinem Tod um 1030, sein Geburtsjahr ist unsicher.'
    },
    'kirche-priester': {
      titel: 'Aufruf eines Priesters an die Bauern',
      autor: 'ein Priester (im Buch ohne Namen)',
      zeit: '1381',
      art: 'text',
      text: '<p>Aus welchem Grund sind die, die wir Herren nennen, größere Meister als wir? … Warum halten sie uns in Knechtschaft? ' +
        'Und wenn wir alle von einem Vater und einer Mutter, Adam und Eva, abstammen, inwiefern können sie behaupten und beweisen, ' +
        'dass sie mit besserem Grund als wir Herren sind? Höchstens damit, dass sie uns erbringen und erpflügen lassen, was sie ausgeben.</p>',
      buch: true,
      vereinfacht: false,
      nachweis: 'Buch S. 33, M4 (zit. nach Arno Borst, Lebensformen im Mittelalter, Hamburg (Nikol) 2004, S. 284)'
    },
    'kirche-hildegard': {
      titel: 'Brief an die Äbtissin von Andernach',
      autor: 'Äbtissin Hildegard von Bingen',
      zeit: '1150',
      art: 'text',
      text: '<p>Gott achtet bei jedem Menschen darauf, dass sich der niedere Stand nicht über den höheren erhebe, wie es einst Satan und der erste Mensch getan … ' +
        'Wer steckt all sein Viehzeug zusammen in einen Stall: Rinder, Esel, Schafe, Böcke? Da käme alles übel durcheinander! … ' +
        'Gott teilt sein Volk auf Erden in verschiedene Stände, wie die Engel im Himmel in verschiedene Gruppen geordnet sind, in die einfachen Engel und in die Erzengel.</p>',
      buch: true,
      vereinfacht: false,
      nachweis: 'Buch S. 33, M5 (zit. nach Johannes Bühler, Die Kultur im Mittelalter, Stuttgart (Kröner) 1954, S. 123)'
    }
  });
})();
