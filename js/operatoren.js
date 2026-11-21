/* Arbeitsaufträge (Operatoren) im Fach Geschichte, nach den üblichen Hamburger und KMK-Operatoren.
   beurteilen = Sachurteil, bewerten = Werturteil (wie im Buch S. 23). Bereich: Anforderungsbereich I–III. */
(function () {
  'use strict';
  var W = (window.W = window.W || {});

  W.operatoren = {
    nennen: {
      wort: 'Nenne', bereich: 'I',
      bedeutet: 'Informationen kurz aufzählen, ohne sie zu erklären.',
      bausteine: ['Erstens …, zweitens …', 'Außerdem …', 'Ein weiteres Beispiel ist …']
    },
    beschreiben: {
      wort: 'Beschreibe', bereich: 'I',
      bedeutet: 'Einen Sachverhalt oder ein Bild genau und geordnet in eigenen Worten wiedergeben, noch ohne zu deuten.',
      bausteine: ['Zuerst … danach … zum Schluss …', 'Auf dem Bild ist … dargestellt.', 'Im Vordergrund sieht man …, im Hintergrund …']
    },
    zusammenfassen: {
      wort: 'Fasse zusammen', bereich: 'I',
      bedeutet: 'Das Wichtigste eines Textes knapp, geordnet und in eigenen Worten wiedergeben.',
      bausteine: ['Der Text handelt von …', 'Der Verfasser sagt, dass …', 'Außerdem betont er, dass …']
    },
    erklaeren: {
      wort: 'Erkläre', bereich: 'II',
      bedeutet: 'Ursachen und Zusammenhänge so darstellen, dass man versteht, warum etwas so war.',
      bausteine: ['Das lag daran, dass …', 'Deshalb …', 'Dadurch …', 'Der Grund dafür war …']
    },
    erlaeutern: {
      wort: 'Erläutere', bereich: 'II',
      bedeutet: 'Erklären und mit Beispielen oder Belegen aus dem Material veranschaulichen.',
      bausteine: ['Das zeigt sich zum Beispiel an …', 'In M2 heißt es …', 'Deshalb …', 'Ein Beispiel dafür ist …']
    },
    herausarbeiten: {
      wort: 'Arbeite heraus', bereich: 'II',
      bedeutet: 'Aus dem Material gezielt bestimmte Informationen herausfinden und geordnet darstellen, auch wenn sie nicht wörtlich dastehen.',
      bausteine: ['Im Text wird deutlich, dass …', 'Daraus geht hervor, dass …', 'Das zeigt sich daran, dass …']
    },
    vergleichen: {
      wort: 'Vergleiche', bereich: 'II',
      bedeutet: 'Gemeinsamkeiten und Unterschiede nach bestimmten Gesichtspunkten gegenüberstellen.',
      bausteine: ['Beide …', 'Im Gegensatz zu … ', 'Während …, …', 'Gemeinsam ist ihnen, dass …']
    },
    charakterisieren: {
      wort: 'Charakterisiere', bereich: 'II',
      bedeutet: 'Das Typische eines Sachverhalts herausstellen und zusammenfassen, worauf es ankommt.',
      bausteine: ['Typisch für … war …', 'Kennzeichnend ist …', 'Insgesamt …']
    },
    untersuchen: {
      wort: 'Untersuche', bereich: 'II',
      bedeutet: 'Material gezielt nach einer Frage auswerten und das Ergebnis darstellen.',
      bausteine: ['Um die Frage zu klären, …', 'Das Material zeigt, dass …', 'Daraus folgt …']
    },
    einordnen: {
      wort: 'Ordne ein', bereich: 'II',
      bedeutet: 'Einen Sachverhalt oder eine Quelle in den zeitlichen und sachlichen Zusammenhang stellen: Wer? Wann? Wozu?',
      bausteine: ['Die Quelle stammt aus …', 'Sie gehört in die Zeit, als …', 'Der Verfasser war …, deshalb …']
    },
    beurteilen: {
      wort: 'Beurteile', bereich: 'III',
      bedeutet: 'Sachurteil: einen Sachverhalt mit Kriterien begründet einschätzen, mit den Augen der Menschen damals. Du urteilst selbst, aber ohne heutige Wertmaßstäbe und ohne „Ich finde …“.',
      bausteine: ['Aus Sicht der Menschen damals …', 'Einerseits … andererseits …', 'Insgesamt war es damals …, weil …']
    },
    bewerten: {
      wort: 'Bewerte', bereich: 'III',
      bedeutet: 'Werturteil: wie beurteilen, aber zusätzlich nach heutigen Wertmaßstäben. Du nennst deinen Maßstab (z. B. Freiheit, Gleichheit vor dem Gesetz) und begründest deine eigene Meinung.',
      bausteine: ['Aus heutiger Sicht …', 'Für mich ist entscheidend, dass …', 'Ich finde …, weil …']
    },
    beurteilenBewerten: {
      wort: 'Beurteile und bewerte', bereich: 'III',
      bedeutet: 'Erst ein Sachurteil mit den Augen der Menschen damals, dann ein Werturteil mit heutigen Maßstäben und deiner begründeten Meinung.',
      bausteine: ['Aus Sicht der Menschen damals …', 'Insgesamt war es damals …, weil …', 'Aus heutiger Sicht …', 'Ich finde …, weil …']
    },
    ueberpruefen: {
      wort: 'Überprüfe', bereich: 'III',
      bedeutet: 'Eine Aussage am Material prüfen und begründet sagen, ob sie stimmt.',
      bausteine: ['Dafür spricht …', 'Dagegen spricht …', 'Die Aussage stimmt (nicht), weil …']
    }
  };
})();
