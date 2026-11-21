/* Quellen zum Bauplatz 3: Lehnswesen (Buch S. 24/25). */
(function () {
  'use strict';
  var W = (window.W = window.W || {});

  Object.assign(W.quellen, {
    'lehen-galbert': {
      titel: 'Ein Vasall huldigt Graf Wilhelm I. von der Normandie',
      autor: 'Galbert von Brügge',
      zeit: '12. Jh.',
      art: 'text',
      text: '<p>Der Graf fragte den künftigen Vasallen, ob er ohne Vorbehalte sein Gefolgsmann werden wolle, und er antwortete: „Ich will es.“ ' +
        'Darauf verbündeten sie sich mit einem Kuss, während die Hände des Vasallen in denen des Grafen lagen. ' +
        'Darauf gelobte der Vasall seine Treue …: „Ich verspreche auf meinen Glauben von diesem Augenblick an, dem Grafen Wilhelm treu zu sein und ihm … meinen Eid zu halten, in gutem Glauben und ohne Falsch.“ ' +
        'Zum Dritten schwört er dasselbe auf die Reliquien des Heiligen.</p>',
      buch: true,
      vereinfacht: false,
      nachweis: 'Buch S. 24, M2 (Galbert von Brügge, zit. nach Jacques Le Goff, Das Hochmittelalter, Fischer Weltgeschichte, Frankfurt a. M. 1965, S. 66). ' +
        'Auf dem Buchfoto ist der rechte Rand abgeschnitten. Ergänzt wurden nur Wortenden: „er“, „wolle“, „verbündeten“, „während die“, „lagen“, „Ich“, „diesem Augenblick“, „sein“, „gutem“, „Heiligen“. ' +
        'Abgeglichen mit Galberts Bericht über die Huldigung (Kap. 56, engl. Übersetzung im Medieval Sourcebook der Fordham University, nach der Ausgabe von H. Pirenne, S. 89).'
    },

    'lehen-sachsenspiegel': {
      titel: 'Mannschaft und Eid auf Reliquien',
      autor: 'unbekannter Buchmaler, Heidelberger Bilderhandschrift des Sachsenspiegels',
      zeit: 'um 1300',
      art: 'bild',
      datei: 'bilder/lehen-sachsenspiegel.jpg',
      alt: 'Zwei Bildstreifen aus einer mittelalterlichen Handschrift. Oben legt ein stehender Mann seine aneinandergelegten Hände in die Hände eines sitzenden Herrn mit Krone. ' +
        'Unten strecken zwei Männer ihre Hände über einen Behälter auf einem Ständer, gegenüber stehen zwei weitere Männer.',
      buch: false,
      vereinfacht: false,
      nachweis: 'Heidelberger Bilderhandschrift des Sachsenspiegels (Universitätsbibliothek Heidelberg, Cod. Pal. germ. 164), erste Seite des Lehnrechts, Ausschnitt. ' +
        'Ähnliche Szene wie im Buch S. 24, M1 (gleiche Gesten), aber nicht dasselbe Bild.',
      lizenz: 'gemeinfrei (Public domain)',
      herkunft: 'https://commons.wikimedia.org/wiki/File:Heerschildordnung.jpg'
    },

    'lehen-tours': {
      titel: 'Ein freier Mann begibt sich in den Schutz eines Herrn',
      autor: 'unbekannter Schreiber, Formelsammlung aus Tours',
      zeit: 'Mitte 8. Jh.',
      art: 'text',
      text: '<p>An meinen edlen Herrn N., ich, N.</p>' +
        '<p>Alle wissen, dass ich nichts besitze, wovon ich mich ernähren und kleiden kann. Darum habe ich Euch gebeten, mich in Euren Schutz begeben zu dürfen. Das habe ich getan.</p>' +
        '<p>Ihr sollt mich mit Nahrung und Kleidung unterstützen und versorgen, so wie ich Euch dienen und es mir verdienen kann.</p>' +
        '<p>Ich aber muss Euch, solange ich lebe, Dienst und Gehorsam leisten, wie es sich für einen Freien gehört. Mein Leben lang darf ich mich nicht aus Eurem Schutz und Eurer Macht entfernen.</p>' +
        '<p>Wer von uns beiden diese Abmachung bricht, muss dem anderen eine festgelegte Summe in Münzen zahlen. Darüber werden zwei gleichlautende Schreiben ausgestellt.</p>',
      buch: false,
      vereinfacht: true,
      nachweis: '„N.“ steht für einen Namen: Die Formel ist ein Muster, in das ein Schreiber die echten Namen einsetzte. Formulae Turonenses, Nr. 43 (Formelsammlung aus Tours, Mitte 8. Jh.), vereinfacht nach der deutschen Übersetzung „Tours 43 (deu)“ des Projekts Formulae – Litterae – Chartae, Universität Hamburg (werkstatt.formulae.uni-hamburg.de).'
    }
  });
})();
