/* Quellen zum Bauplatz pfalz (Buch S. 18–21).
   Einhard: lateinischer Text nach The Latin Library (Vita Karoli Magni), deutsche Übersetzung von Otto Abel (1850, gemeinfrei, de.wikisource „Vita Karoli Magni“). */
(function () {
  'use strict';
  var W = (window.W = window.W || {});

  Object.assign(W.quellen, {
    'pfalz-hofgedicht': {
      titel: 'Ein Mitglied des Königshofs in einem gedichteten Text über Karl den Großen',
      autor: 'ein Mitglied des Königshofs (Paderborner Epos)',
      zeit: 'um 800',
      art: 'text',
      text: '<p>Der König übertrifft alle Könige auf der ganzen Welt an Würde und Weihe, er ist gerechter, und mächtiger als alle ragt er empor. ' +
        'Er ist das Haupt der Welt, die Liebe und die Zierde des Volkes, die bewundernswerte Spitze Europas, der beste Vater, der Held, der Augustus, ' +
        'aber auch mächtig in der Stadt<sup>1</sup>, die als zweites Rom zu neuer Blüte gewaltig emporwächst, mit hoch gebauten Kuppeln, die Sterne berührend.</p>' +
        '<p><small><sup>1</sup> Gemeint ist die Stadt Aachen, wo Karl sich häufig aufhielt.</small></p>',
      buch: true,
      vereinfacht: false,
      nachweis: 'Buch S. 19, M3 (Karolus Magnus et Leo Papa [Paderborner Epos], MG Poetae Latini Medii Aevi; zit. nach: Geschichte in Quellen, Bd. 2, bearb. und übers. v. Wolfgang Lautemann, 2. Aufl., München 1978, S. 68)'
    },
    'pfalz-einhard': {
      titel: 'Einhard über sich selbst und über die Kaiserkrönung',
      autor: 'Einhard, Gelehrter am Hof Karls des Großen',
      zeit: 'geschrieben nach Karls Tod (814)',
      art: 'text',
      text: '<p><em>Aus dem Vorwort:</em> Ich will das Leben meines Herrn und Erziehers, des Königs Karl, beschreiben. Niemand kann das so wahr aufschreiben wie ich, ' +
        'denn ich habe es selbst miterlebt und mit eigenen Augen gesehen. Seit ich an den Hof kam, war ich mit ihm und seinen Kindern befreundet. ' +
        'Er hat mir so viel Gutes getan, dass man mich undankbar nennen könnte, wenn ich sein Leben nicht beschreiben würde.</p>' +
        '<p><em>Aus Kapitel 28:</em> Die Römer hatten Papst Leo schwer misshandelt. Deshalb bat der Papst den König um Schutz. ' +
        'Karl kam nach Rom und blieb dort den ganzen Winter, um die Lage der Kirche wieder in Ordnung zu bringen. ' +
        'Damals erhielt er den Namen Kaiser und Augustus. Dieser Titel war ihm anfangs so zuwider, dass er versicherte: ' +
        'Er hätte an jenem Tag die Kirche nicht betreten, obwohl es ein hohes Fest war, wenn er die Absicht des Papstes vorher gekannt hätte.</p>',
      buch: false,
      vereinfacht: true,
      nachweis: 'Einhard, Vita Karoli Magni (Das Leben Karls des Großen), Vorwort und Kap. 28; vereinfacht nach der Übersetzung von Otto Abel (Kaiser Karls Leben von Einhard, Berlin 1850), geprüft am lateinischen Text'
    },
    'pfalz-einhard-bildung': {
      titel: 'Einhard über Karls Sprachen und seine Versuche, schreiben zu lernen',
      autor: 'Einhard, Gelehrter am Hof Karls des Großen',
      zeit: 'geschrieben nach Karls Tod (814)',
      art: 'text',
      text: '<p>Karl sprach reich und sicher und konnte leicht und klar ausdrücken, was er wollte. Mit großem Fleiß lernte er auch fremde Sprachen: ' +
        'Latein sprach er so gut wie seine Muttersprache, Griechisch konnte er besser verstehen als selbst sprechen. ' +
        'Die Wissenschaften pflegte er mit großer Liebe, und die Gelehrten ehrte er sehr. Bei dem Gelehrten Alkuin lernte er vor allem die Sternkunde. Er lernte auch rechnen.</p>' +
        '<p>Auch zu schreiben versuchte er. Deshalb hatte er im Bett unter dem Kopfkissen Tafeln und kleine Hefte, um in freien Stunden seine Hand an das Schreiben von Buchstaben zu gewöhnen. ' +
        'Doch er brachte es damit nicht weit, weil er zu spät damit angefangen hatte.</p>',
      buch: false,
      vereinfacht: true,
      nachweis: 'Einhard, Vita Karoli Magni (Das Leben Karls des Großen), Kap. 25; vereinfacht nach der Übersetzung von Otto Abel (Kaiser Karls Leben von Einhard, Berlin 1850), geprüft am lateinischen Text'
    }
  });
})();
