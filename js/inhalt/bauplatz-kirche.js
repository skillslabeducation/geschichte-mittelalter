/* Bauplatz 4: Dorfkirche – Ständegesellschaft (Buch S. 32/33) */
(function () {
  'use strict';
  var W = (window.W = window.W || {});

  /* Quellentext mit Kopfzeile, für Schreibaufgaben mit mehreren Quellen (Text steht nur einmal in quellen-kirche.js). */
  function zitat(id, kopf) {
    var q = W.quellen[id];
    return '<p><strong>' + kopf + '</strong></p>' + (q ? q.text : '');
  }
  var M3 = function () { return zitat('kirche-adalbero', 'M3 – Bischof Adalbero von Laon, um 1025:'); };
  var M5 = function () { return zitat('kirche-hildegard', 'M5 – Äbtissin Hildegard von Bingen an die Äbtissin von Andernach, 1150:'); };

  W.bauplaetze.push({
    id: 'kirche', nr: 4, titel: 'Dorfkirche', thema: 'Ständegesellschaft', zeit: 'ab dem 11. Jh.', buch: 'S. 32/33', checkliste: 3,
    chronist: 'Die Dorfkirche ist ein Gotteshaus. Bischof Adalbero nannte sogar die ganze Gesellschaft ein „Haus Gottes“. Wer kämpfte und wer arbeitete, war meist schon bei der Geburt entschieden.',
    leitfrage: 'Warum hatte im Mittelalter fast jeder Mensch von Geburt an seinen festen Platz, und wie wurde diese Ungleichheit gerechtfertigt?',

    karten: [
      {
        titel: 'Frei oder unfrei',
        text: '<p>In der Antike war die Gesellschaft in zwei Gruppen eingeteilt: Freie und Sklaven. Die Rechtsgelehrten Karls des Großen übernahmen diese Auffassung und legten im Jahr 803 fest: <strong>„Es gibt nichts außer frei und unfrei.“</strong></p>' +
          '<p>Die Unfreien des Mittelalters waren aber nicht völlig rechtlos wie die Sklaven im Altertum. Im Laufe der Jahrhunderte hatten sich Zwischengruppen gebildet, zum Beispiel <dfn>Freigelassene</dfn> oder Hörige.</p>' +
          '<p>Bis ins 19. Jahrhundert entschieden Herkunft, Vermögen und unterschiedliche Rechte über die Stellung eines Menschen. Im Mittelalter war den meisten Menschen schon von Geburt an ein bestimmter Platz zugewiesen.</p>',
        merk: 'Um 800 hieß es: frei oder unfrei. Doch die Unfreien des Mittelalters waren keine rechtlosen Sklaven.',
        achtung: '<strong>Aufgepasst</strong> 803 gehört zum 9. Jahrhundert, nicht zum 8. Das 9. Jahrhundert umfasst die Jahre 801 bis 900.'
      },
      {
        titel: 'Die Lehre von den drei Ständen',
        text: '<p>Ab dem 11. Jahrhundert entwickelten Gelehrte ein neues Bild von der Gesellschaft: die <dfn>Lehre von den drei Ständen</dfn>. Danach wurde jeder Mensch einem <dfn>Stand</dfn> zugewiesen.</p>' +
          '<ul><li><strong>Erster Stand:</strong> die Geistlichen (= <dfn>Klerus</dfn>). Sie beten.</li>' +
          '<li><strong>Zweiter Stand:</strong> die Adligen. Sie kämpfen und schützen.</li>' +
          '<li><strong>Dritter Stand:</strong> alle anderen, wie die Bauern, Handwerker und später die Bürger in den Städten. Sie arbeiten.</li></ul>' +
          '<p>Ein Holzschnitt von 1488 fasst das in drei Befehle: „Tu supplex ora – du bete demütig! Tu protege – du beschütze! Tuque labora – und du arbeite!“</p>',
        abb: 'drei-staende', abbOpts: { beschriftet: true, inschriften: true },
        merk: 'Erster Stand: Geistliche (beten). Zweiter Stand: Adlige (kämpfen und schützen). Dritter Stand: Bauern, Handwerker, später Bürger (arbeiten).',
        achtung: '<strong>Aufgepasst</strong> Die Zählung beginnt bei den Geistlichen: Der erste Stand ist der Klerus, nicht der Adel.'
      },
      {
        titel: 'Rechte und Pflichten',
        text: '<p>Die Stände hatten sehr unterschiedliche Rechte und Pflichten:</p>' +
          '<ul><li>Geistliche und Adlige waren <strong>von Abgaben befreit</strong>. Sie durften keine körperliche Arbeit verrichten.</li>' +
          '<li>Geistliche durften <strong>keinen Kriegsdienst</strong> leisten.</li>' +
          '<li>Adlige und Geistliche lebten von den Abgaben und Diensten der Bauern. Die Bauern waren der <strong>zahlenmäßig weitaus größte Stand</strong>.</li>' +
          '<li>Eine <strong>Heirat</strong> war nur innerhalb eines Standes möglich.</li></ul>' +
          '<p>Die Ständeordnung wurde als <strong>von Gott gegeben</strong> anerkannt. Daher durfte sich niemand gegen sie auflehnen. Diese <dfn>Ständegesellschaft</dfn> galt in den meisten europäischen Ländern bis weit ins 19. Jahrhundert.</p>',
        merk: 'Die ersten beiden Stände waren von Abgaben befreit und lebten von der Arbeit des dritten Standes, des mit Abstand größten.',
        achtung: '<strong>Aufgepasst</strong> Die Bauern waren nicht der kleinste, sondern der größte Stand. Wenige Adlige und Geistliche lebten von sehr vielen Bauern. Und „keine körperliche Arbeit“ galt vor allem für Adlige und für Geistliche wie Bischöfe und Priester. Mönche und Nonnen arbeiteten nach der Regel Benedikts auch mit den Händen: „ora et labora“ (S. 40/41).'
      },
      {
        titel: 'Außerhalb der Ordnung',
        text: '<p>Nicht jeder Mensch hatte in dieser Ordnung einen Platz:</p>' +
          '<ul><li><strong>Nicht erfasst</strong> wurden Frauen, Kinder oder Juden.</li>' +
          '<li>„Unehrenhafte“ Berufe wie der des Totengräbers und des Henkers und Gruppen wie Schausteller und Bettler zählten zu keinem Stand. Sie waren <dfn>Standeslose</dfn>.</li></ul>' +
          '<p>Auch innerhalb eines Standes gab es große Unterschiede. Ein Dorfpriester war arm im Vergleich zu einem Bischof. Und bei einem Adligen war es ein Unterschied, ob er wenig Besitz hatte oder Sohn eines Fürsten war.</p>' +
          '<p><span class="tag tag--zusatz">Zusatz</span> Der erste Stand ist eine Ausnahme: Geistliche hatten keine Kinder, die den Stand erbten. Bischöfe stammten meist aus dem Adel, Dorfpriester und viele Mönche aus dem Bauernstand.</p>',
        merk: 'Standeslose wie Henker, Totengräber, Schausteller und Bettler gehörten zu keinem Stand. Frauen, Kinder und Juden wurden in der Ordnung nicht erfasst.',
        achtung: '<strong>Aufgepasst</strong> Standeslos ist nicht dasselbe wie unfrei. Hörige zum Beispiel waren unfrei, gehörten als Bauern aber zum dritten Stand.'
      },
      {
        titel: 'Ein Schaubild lesen',
        text: '<p>Das Schaubild M2 (S. 33) zeigt die Gesellschaft auf dem Land. So liest du es:</p>' +
          '<ul><li><strong>Oben und unten:</strong> Je höher eine Gruppe steht, desto mehr Macht und Ansehen hatte sie.</li>' +
          '<li><strong>Größe der Fläche:</strong> Je größer die Fläche, desto mehr Menschen gehörten dazu. Die abhängigen Bauern sind mit Abstand die größte Gruppe.</li>' +
          '<li><strong>Links und rechts:</strong> Links stehen die weltlichen Gruppen (<dfn>Hochadel</dfn>, <dfn>Ministeriale</dfn>, Ritter, freie Bauern), rechts die Geistlichkeit.</li></ul>' +
          '<p>Hohe Verwaltungsaufgaben und Kirchenämter waren dem Hochadel und der hohen Geistlichkeit vorbehalten. Ganz unten steht die unterbäuerliche Schicht ohne Landbesitz.</p>',
        abb: 'staendeschaubild', abbOpts: { beschriftet: true },
        merk: 'Ein Schaubild liest du von oben nach unten und nach der Größe der Flächen: Oben standen wenige Mächtige, unten sehr viele abhängige Bauern.',
        achtung: '<strong>Aufgepasst</strong> Ministeriale (Dienstmannen) waren ursprünglich Unfreie. Erst seit dem 12. Jahrhundert verbanden sie sich mit dem Adel zum Ritterstand.'
      },
      {
        titel: 'Das „Haus Gottes“: Begründung und Kritik',
        text: '<p>Warum sollte man diese Ungleichheit hinnehmen? Die Antwort kam aus dem Glauben:</p>' +
          '<ul><li><strong>Bischof Adalbero von Laon</strong> (um 1025, M3): Die Gesellschaft ist das dreigeteilte <dfn>Haus Gottes</dfn>. „Haus Gottes“ meint bei Adalbero kein Gebäude, sondern die ganze Gesellschaft. Die einen beten, die anderen kämpfen, wieder andere arbeiten. Die Stände brauchen einander und dienen sich gegenseitig.</li>' +
          '<li><strong>Äbtissin Hildegard von Bingen</strong> (1150, M5): Gott teilt sein Volk auf Erden in Stände, so wie die Engel im Himmel geordnet sind. Der niedere Stand soll sich nicht über den höheren erheben.</li></ul>' +
          '<p>Es gab aber auch Kritik. Ein <strong>Priester</strong> rief 1381 die Bauern auf (M4): Wenn alle von Adam und Eva abstammen, warum sollen die Herren dann bessere Menschen sein?</p>' +
          '<p>Für heutige Historikerinnen und Historiker beginnt mit der Lehre von den drei Ständen die <dfn>arbeitsteilige Gesellschaft</dfn>: Jeder Stand sollte seinen Teil dazu beitragen, das „Haus Gottes“ in einen guten Zustand zu bringen.</p>',
        quelle: 'kirche-adalbero',
        merk: 'Die Ständeordnung wurde religiös begründet: Gott selbst habe die Menschen in Stände eingeteilt, und jeder Stand habe im „Haus Gottes“ seine Aufgabe.',
        achtung: '<strong>Aufgepasst</strong> Auch der Priester von 1381 argumentiert mit der Bibel (Adam und Eva). Er kommt nur zum umgekehrten Ergebnis: Kein Mensch ist von Geburt an besser.'
      },
      {
        titel: 'Methode: Eine Bildquelle analysieren',
        text: '<p>Eine <dfn>Bildquelle</dfn> stammt aus der Zeit selbst. Sie zeigt nicht einfach, „wie es war“, sondern wie der Künstler oder sein Auftraggeber die Welt sehen wollte. Gehe in drei Schritten vor:</p>' +
          '<ul><li><strong>1. Beschreiben:</strong> Was ist zu sehen? Personen, Kleidung, Gegenstände, Inschriften. Hier noch nichts deuten.</li>' +
          '<li><strong>2. Untersuchen und einordnen:</strong> Wer hat das Bild wann gemacht? Wie ist es aufgebaut: Wer ist oben, wer unten? Was weißt du über die Zeit?</li>' +
          '<li><strong>3. Deuten:</strong> Was will das Bild aussagen? Wie sollte es auf die Menschen damals wirken?</li></ul>' +
          '<p>Am <dfn>Holzschnitt</dfn> von 1488: Oben sitzt Christus auf einem Regenbogen. Neben ihm stehen links die Geistlichen mit dem Papst, rechts die Adligen mit dem Kaiser. Ganz unten arbeiten Bauern. Die Inschriften geben jedem Stand seine Aufgabe. Deutung: Die Ordnung der Stände kommt von Gott.</p>' +
          '<p>Die genauen Arbeitsschritte deiner Klasse stehen im Buch auf S. 27. Gleiche sie dort ab.</p>',
        quelle: 'kirche-lichtenberger',
        merk: 'Erst beschreiben, dann untersuchen und einordnen, zuletzt deuten. Wer sofort deutet, übersieht leicht, was wirklich im Bild steht.',
        achtung: '<strong>Aufgepasst</strong> Ein Schaubild wie M2 ist keine Bildquelle. Es wurde heute gezeichnet, um etwas zu erklären. Der Holzschnitt M1 stammt dagegen aus der Zeit selbst.'
      }
    ],

    ueben: [
      {
        id: 'kirche-u1', typ: 'beschriften', abb: 'drei-staende', strukturen: ['geistlicher', 'adliger', 'bauer'],
        frage: 'Wer betet, wer schützt, wer arbeitet? Ordne jeder Figur ihren Stand und ihre Aufgabe zu. Achte auf die Erkennungszeichen.',
        erkl: 'Erkennungszeichen: Bischofsmütze und Kreuzstab beim Geistlichen, Krone, Schwert und Schild beim Adligen, Hacke und einfacher Kittel beim Bauern.'
      },
      {
        id: 'kirche-u2', typ: 'luecke',
        text: 'In der Antike war die Gesellschaft in {Freie und Sklaven|drei Stände|Grundherren und Hörige} eingeteilt. Die Rechtsgelehrten Karls des Großen legten im Jahr {803|1025|1381} fest: „Es gibt nichts außer frei und unfrei.“ Die Unfreien des Mittelalters waren aber {nicht völlig rechtlos|genauso rechtlos} wie die Sklaven im Altertum. Es gab Zwischengruppen, zum Beispiel die {Freigelassenen|Standeslosen|Adligen} oder die Hörigen.',
        erkl: 'Unfreie wie die Hörigen standen zum Beispiel unter dem Schutz ihres Grundherrn. Sklaven waren dagegen völlig rechtlos.'
      },
      {
        id: 'kirche-u3', typ: 'zuordnen',
        frage: 'Wer gehörte nach der Lehre von den drei Ständen wohin? Ordne zu.',
        paare: [
          ['1. Stand', 'die Geistlichen (Klerus)'],
          ['2. Stand', 'die Adligen'],
          ['3. Stand', 'alle anderen: Bauern, Handwerker, später die Bürger'],
          ['kein Stand', 'Standeslose wie Henker und Bettler']
        ]
      },
      {
        id: 'kirche-u4', typ: 'sortieren',
        frage: 'Sortiere die Menschen in die Stände. Wer gehört zu keinem Stand?',
        kategorien: ['1. Stand', '2. Stand', '3. Stand', 'standeslos'],
        items: [['Bischof', 0], ['Dorfpriester', 0], ['Graf', 1], ['Ritter', 1], ['abhängiger Bauer', 2], ['Handwerker', 2], ['Henker', 3], ['Schausteller', 3], ['Bettler', 3]],
        erkl: 'Auch der arme Dorfpriester gehörte zum ersten Stand, obwohl er viel ärmer war als ein Bischof.'
      },
      {
        id: 'kirche-u5', typ: 'mehrfach',
        frage: 'Was galt im Mittelalter für Geistliche und Adlige? Wähle alle richtigen Aussagen.',
        optionen: ['Sie waren von Abgaben befreit.', 'Sie durften keine körperliche Arbeit verrichten.', 'Sie lebten von den Abgaben und Diensten der Bauern.', 'Sie durften in jeden anderen Stand einheiraten.', 'Sie mussten Frondienste auf den Feldern leisten.'],
        richtig: [0, 1, 2],
        erkl: 'Eine Heirat war nur innerhalb eines Standes möglich, auch für Adlige. Frondienste leisteten die Bauern. Keine körperliche Arbeit: Das galt vor allem für Adlige, Bischöfe und Priester. Mönche und Nonnen arbeiteten nach der Regel Benedikts auch mit den Händen („ora et labora“).'
      },
      {
        id: 'kirche-u6', typ: 'behauptung',
        aussage: 'Die Bauern waren der kleinste Stand. Deshalb mussten sie für die anderen arbeiten.',
        stimmt: false,
        gruende: [
          'Die Bauern waren der zahlenmäßig weitaus größte Stand. Von ihren Abgaben und Diensten lebten die wenigen Adligen und Geistlichen.',
          'Die Bauern waren zwar der kleinste Stand, arbeiteten aber nur für den König, nicht für Adlige und Geistliche.',
          'Die Bauern gehörten zu gar keinem Stand. Sie waren Standeslose.'
        ],
        richtig: 0
      },
      {
        id: 'kirche-u7', typ: 'behauptung',
        aussage: 'Geistliche mussten genauso wie Adlige in den Krieg ziehen.',
        stimmt: false,
        gruende: [
          'Geistliche durften keinen Kriegsdienst leisten. Ihre Aufgabe war das Beten.',
          'Nur die Geistlichen zogen in den Krieg, die Adligen blieben zu Hause.',
          'Geistliche mussten in den Krieg ziehen, weil sie zum dritten Stand gehörten.'
        ],
        richtig: 0,
        erkl: 'Kämpfen und schützen war die Aufgabe des Adels, beten die Aufgabe der Geistlichen.'
      },
      {
        id: 'kirche-u8', typ: 'wahl',
        frage: 'Warum durfte sich im Mittelalter niemand gegen die Ständeordnung auflehnen?',
        optionen: ['Sie wurde als von Gott gegeben anerkannt.', 'Karl der Große hatte sie 803 in einem Gesetz festgelegt.', 'Die Bauern hatten ihr in einem Vertrag zugestimmt.', 'Sie galt nur für die Geistlichen und den Adel.'],
        richtig: 0,
        erkl: '803 legten Karls Rechtsgelehrte nur fest: „Es gibt nichts außer frei und unfrei.“ Die Lehre von den drei Ständen entstand erst ab dem 11. Jahrhundert.'
      },
      {
        id: 'kirche-u9', typ: 'eingabe',
        frage: 'Henker, Totengräber, Schausteller und Bettler zählten zu keinem Stand. Wie nennt man diese Menschen?',
        akzeptiert: ['Standeslose', 'Standeslosen', 'standeslos'],
        nicht: ['Hörige', 'Leibeigene', 'Unfreie', 'Freigelassene'],
        erkl: 'Standeslose standen außerhalb der Ordnung. Unfreie wie die Hörigen gehörten dagegen als Bauern zum dritten Stand.'
      },
      {
        id: 'kirche-u10', typ: 'beschriften', abb: 'staendeschaubild',
        strukturen: ['hochadel', 'ministeriale', 'ritter', 'freieBauern', 'hoheGeistlichkeit', 'niedereGeistlichkeit', 'abhaengigeBauern', 'unterbaeuerlich'],
        frage: 'Beschrifte das Schaubild der ländlichen Gesellschaft (wie M2, S. 33).',
        erkl: 'Links stehen die weltlichen Gruppen, rechts die Geistlichkeit, unten die vielen abhängigen Bauern.'
      },
      {
        id: 'kirche-u11', typ: 'wahl', abb: 'staendeschaubild', abbOpts: { beschriftet: true },
        frage: 'Wie liest man dieses Schaubild richtig?',
        optionen: [
          'Je höher eine Gruppe steht, desto mächtiger war sie. Je größer die Fläche, desto mehr Menschen gehörten dazu.',
          'Je größer die Fläche, desto mächtiger war die Gruppe. Die abhängigen Bauern hatten also die meiste Macht.',
          'Je höher eine Gruppe steht, desto mehr Abgaben musste sie zahlen. Der Hochadel zahlte also am meisten.'
        ],
        richtig: 0,
        erkl: 'Die abhängigen Bauern haben die größte Fläche: Sie waren die größte Gruppe, hatten aber wenig Macht. Adlige und Geistliche waren von Abgaben befreit.'
      },
      {
        id: 'kirche-u12', typ: 'wahl', abb: 'staendeschaubild', abbOpts: { beschriftet: true },
        frage: 'Im Schaubild stehen die Ministerialen auf der Seite des Adels. Warum?',
        optionen: [
          'Seit dem 12. Jahrhundert verbanden sie sich mit dem Adel zum Ritterstand.',
          'Sie stammten alle aus den Familien des Hochadels.',
          'Sie waren freie Bauern, die vom König Land bekommen hatten.'
        ],
        richtig: 0,
        erkl: 'Ministeriale (Dienstmannen) waren ursprünglich Unfreie, die für ihren Herrn Verwaltungsaufgaben oder Kriegsdienst übernahmen.'
      },
      {
        id: 'kirche-u13', typ: 'zuordnen', quelle: 'kirche-lichtenberger',
        frage: 'Bildquelle M1: An welchen Stand richtet sich welche Inschrift?',
        paare: [
          ['<em>Tu supplex ora</em> – du bete demütig!', 'an die Geistlichen (1. Stand)'],
          ['<em>Tu protege</em> – du beschütze!', 'an die Adligen (2. Stand)'],
          ['<em>Tuque labora</em> – und du arbeite!', 'an die Bauern (3. Stand)']
        ],
        erkl: 'Jeder Stand bekommt im Bild seine Aufgabe: beten, schützen, arbeiten.'
      },
      {
        id: 'kirche-u14', typ: 'sortieren', quelle: 'kirche-lichtenberger',
        frage: 'Bildanalyse am Holzschnitt: Zu welchem Arbeitsschritt gehört jeder Satz?',
        kategorien: ['beschreiben', 'untersuchen und einordnen', 'deuten'],
        items: [
          ['Oben sitzt Christus auf einem Regenbogen.', 0],
          ['Unten bearbeiten zwei Bauern mit Hacken den Boden.', 0],
          ['Der Holzschnitt erschien 1488 in einem Buch von Johannes Lichtenberger.', 1],
          ['Als das Bild entstand, galt die Lehre von den drei Ständen schon seit Jahrhunderten.', 1],
          ['Das Bild will zeigen: Christus selbst gibt jedem Stand seine Aufgabe.', 2],
          ['Wer das Bild sah, sollte seinen Platz in der Ordnung annehmen.', 2]
        ],
        erkl: 'Erst beschreiben, was zu sehen ist. Dann klären, wann und in welchem Zusammenhang das Bild entstand. Zuletzt deuten, was es aussagen will.'
      },
      {
        id: 'kirche-u15', typ: 'wahl', quelle: 'kirche-adalbero',
        frage: 'Wie begründet Bischof Adalbero (M3), dass die drei Stände zusammengehören?',
        optionen: [
          'Durch die Aufgaben des einen Standes sind die Werke der anderen erst möglich. Sie dienen sich gegenseitig.',
          'Alle Menschen stammen von Adam und Eva ab. Deshalb sind alle Stände gleich viel wert.',
          'Gott ordnet die Stände so, wie die Engel im Himmel in Engel und Erzengel geordnet sind.',
          'Der König hat die Stände eingeteilt, und alle müssen ihm gehorchen.'
        ],
        richtig: 0,
        erkl: 'Adam und Eva kommen im Aufruf des Priesters (M4) vor, die Engel im Brief Hildegards von Bingen (M5).'
      },
      {
        id: 'kirche-u16', typ: 'wahl', quelle: 'kirche-hildegard',
        frage: 'Hildegard von Bingen (M5) fragt: Wer steckt all sein Viehzeug zusammen in einen Stall? Was will sie damit sagen?',
        optionen: [
          'Wenn man die Stände mischt, kommt alles durcheinander. Jeder soll in seinem Stand bleiben.',
          'Die Bauern sollen ihre Tiere besser versorgen und mehr Ställe bauen.',
          'Alle Menschen gehören in ein gemeinsames Haus. Deshalb sind alle gleich.'
        ],
        richtig: 0,
        erkl: 'Hildegard vergleicht die Stände mit verschiedenen Tierarten. Der niedere Stand soll sich nicht über den höheren erheben.'
      },
      {
        id: 'kirche-u17', typ: 'mehrfach', quelle: 'kirche-priester',
        frage: 'Was kritisiert der Priester in seinem Aufruf von 1381 (M4)? Wähle alle richtigen Aussagen.',
        optionen: [
          'Die Herren halten die Bauern in Knechtschaft.',
          'Wenn alle von Adam und Eva abstammen, können die Herren nicht beweisen, dass sie besser sind.',
          'Die Herren lassen die Bauern erarbeiten, was sie selbst ausgeben.',
          'Die Geistlichen beten zu wenig für die Bauern.',
          'Die Bauern sollen sich nicht über die Herren erheben.'
        ],
        richtig: [0, 1, 2],
        erkl: 'Dass sich der niedere Stand nicht über den höheren erheben soll, schreibt Hildegard von Bingen (M5), also die Gegenseite.'
      },
      {
        id: 'kirche-u18', typ: 'sortieren',
        frage: 'Wer sagt was? Ordne die Sätze den Quellen auf S. 33 zu.',
        kategorien: ['Adalbero (M3)', 'Priester (M4)', 'Hildegard (M5)'],
        items: [
          ['„Dreigeteilt ist das Haus Gottes …“', 0],
          ['„Durch die gegenseitigen Dienste bereiten sie sich gegenseitig Zuversicht.“', 0],
          ['„Warum halten sie uns in Knechtschaft?“', 1],
          ['„… wenn wir alle von einem Vater und einer Mutter, Adam und Eva, abstammen …“', 1],
          ['„… dass sich der niedere Stand nicht über den höheren erhebe …“', 2],
          ['„Gott teilt sein Volk auf Erden in verschiedene Stände …“', 2]
        ],
        erkl: 'Adalbero und Hildegard begründen die Ordnung mit Gott. Der Priester kritisiert sie.'
      },
      {
        id: 'kirche-u19', typ: 'zeitleiste',
        frage: 'Ordne die Ereignisse in die Zeitleiste ein.',
        abschnitte: ['Antike', '9. Jh.', '11. Jh.', '12. Jh.', '14. Jh.', '15. Jh.', '19. Jh.'],
        ereignisse: [
          ['Die Gesellschaft besteht aus Freien und Sklaven', 0, 'Antike'],
          ['Karls Rechtsgelehrte: „Es gibt nichts außer frei und unfrei.“', 1, '803'],
          ['Gelehrte entwickeln die Lehre von den drei Ständen', 2, 'ab dem 11. Jh.'],
          ['Bischof Adalbero schreibt über das dreigeteilte „Haus Gottes“', 2, 'um 1025'],
          ['Hildegard von Bingen schreibt an die Äbtissin von Andernach', 3, '1150'],
          ['Ministeriale verbinden sich mit dem Adel zum Ritterstand', 3, 'seit dem 12. Jh.'],
          ['Ein Priester ruft die Bauern auf: Alle stammen von Adam und Eva ab', 4, '1381'],
          ['Holzschnitt „Christus und die drei Stände“', 5, '1488'],
          ['Die Ständeordnung endet in den meisten Ländern Europas', 6, 'bis weit ins 19. Jh.']
        ],
        erkl: '803 gehört zum 9. Jahrhundert (801–900), 1025 zum 11., 1150 zum 12., 1381 zum 14. und 1488 zum 15. Jahrhundert.'
      },
      {
        id: 'kirche-u20', typ: 'wahl', operatorTraining: true,
        frage: 'Die Aufgabe lautet: „Erkläre, wie die Ständeordnung religiös begründet wurde.“ Welche Antwort erfüllt den Auftrag?',
        optionen: [
          'Es gab drei Stände: die Geistlichen, die Adligen und die Bauern. Die Geistlichen beteten, die Adligen kämpften und die Bauern arbeiteten.',
          'Man glaubte, Gott selbst habe die Menschen in Stände eingeteilt, wie die Engel im Himmel. Deshalb galt die Ordnung als von Gott gegeben, und niemand durfte sich auflehnen.',
          'Ich finde die Ständeordnung ungerecht, weil die Bauern die meiste Arbeit hatten und trotzdem Abgaben zahlen mussten.'
        ],
        richtig: 1,
        erkl: 'Die erste Antwort beschreibt nur, die dritte bewertet. Erklären heißt: Gründe und Zusammenhänge nennen, mit „weil“ und „deshalb“.'
      },
      {
        id: 'kirche-u21', typ: 'sortieren', abb: 'staendeschaubild', abbOpts: { beschriftet: true },
        frage: 'Ordne die Gruppen aus dem Schaubild M2 den drei Ständen zu (vgl. Buch S. 33, A3).',
        kategorien: ['1. Stand', '2. Stand', '3. Stand'],
        items: [
          ['hohe Geistlichkeit', 0],
          ['niedere Geistlichkeit', 0],
          ['Hochadel', 1],
          ['Ministeriale', 1],
          ['Ritter', 1],
          ['freie Bauern', 2],
          ['abhängige Bauern', 2],
          ['unterbäuerliche Schicht ohne Landbesitz', 2]
        ],
        erkl: 'Die Geistlichkeit steht im Schaubild rechts, Hochadel, Ministeriale und Ritter links. Zum dritten Stand gehören laut Darstellungstext „alle anderen wie die Bauern“, also auch Menschen ohne eigenes Land, die auf dem Land arbeiteten.'
      },
      {
        id: 'kirche-u22', typ: 'wahl', abb: 'staendeschaubild', abbOpts: { beschriftet: true },
        frage: 'Welche Gruppe des dritten Standes fehlt im Schaubild M2? Nimm den Darstellungstext zu Hilfe (vgl. Buch S. 33, A3).',
        optionen: [
          'Handwerker und Bürger in den Städten, denn M2 zeigt nur die ländliche Gesellschaft.',
          'Die abhängigen Bauern, denn sie hatten keine Rechte und wurden nicht mitgezählt.',
          'Die Ritter, denn sie gehörten weder zum Adel noch zu den Bauern.',
          'Die Dorfpriester, denn sie waren arm und zählten deshalb zum dritten Stand.'
        ],
        richtig: 0,
        erkl: 'Laut Darstellungstext gehören zum dritten Stand Bauern, Handwerker und später die Bürger in den Städten. M2 ist aber ein Schema der ländlichen Gesellschaft.'
      }
    ],

    erklaeren: [
      {
        id: 'kirche-e1', operator: 'erklaeren',
        frage: 'Erkläre mithilfe von M3 und M5, wie die Einteilung in Stände religiös begründet wurde (vgl. Buch S. 33, A2a. Buch: „Arbeitet heraus“; die Checkliste verlangt „erklären“).',
        material: M3() + M5(),
        tipp: 'Nutze den Wortschatz von S. 32: in Stände eingeteilt sein, einem Stand angehören, über oder unter jemandem stehen, von Gott gegeben.',
        begriffe: [
          { name: 'Stand', muster: ['stand', 'stände'] },
          { name: 'von Gott gegeben', muster: ['gott', 'göttlich'] },
          { name: 'Haus Gottes', muster: ['haus gottes'] },
          { name: 'Engel', muster: ['engel'] },
          { name: 'auflehnen', muster: ['auflehn', 'erheben', 'erhebe'] }
        ],
        punkte: [
          { text: 'Adalbero (M3): Die Gesellschaft ist das „Haus Gottes“. Es ist dreigeteilt, bildet aber eine Einheit.', p: 1 },
          { text: 'Jeder Stand hat eine Aufgabe: Geistliche beten, Adlige kämpfen, Bauern arbeiten.', p: 1 },
          { text: 'Die Stände sind aufeinander angewiesen und dienen sich gegenseitig, deshalb gehören sie zusammen.', p: 1 },
          { text: 'Hildegard (M5): Gott selbst teilt sein Volk in Stände, so wie die Engel im Himmel in Engel und Erzengel geordnet sind.', p: 1 },
          { text: 'Der niedere Stand soll sich nicht über den höheren erheben, wie es einst Satan und der erste Mensch getan haben, sonst käme alles durcheinander (Vergleich mit dem Stall).', p: 1 },
          { text: 'Folgerung: Die Ordnung galt als von Gott gegeben, deshalb durfte sich niemand gegen sie auflehnen.', p: 1 }
        ],
        muster: 'Die Ständeordnung wurde mit dem Glauben an Gott begründet. Bischof Adalbero von Laon schreibt um 1025, dass das „Haus Gottes“ dreigeteilt ist, aber eine Einheit bildet: Die einen beten, die anderen kämpfen und wieder andere arbeiten. Damit meint er die Geistlichen, die Adligen und die Bauern. Jeder Stand hat also eine Aufgabe in Gottes Ordnung. Die Stände gehören zusammen, weil die Arbeit des einen Standes die Werke der anderen erst möglich macht. Sie dienen sich gegenseitig. Hildegard von Bingen begründet die Einteilung 1150 noch deutlicher mit Gott: Gott selbst teilt sein Volk auf Erden in Stände, so wie die Engel im Himmel in Engel und Erzengel geordnet sind. Deshalb soll sich der niedere Stand nicht über den höheren erheben, wie es einst Satan und der erste Mensch getan haben. Mit dem Vergleich vom Stall zeigt sie, dass sonst alles durcheinandergeraten würde. Weil die Ordnung also als von Gott gegeben galt, durfte sich niemand gegen sie auflehnen.'
      },
      {
        id: 'kirche-e2', operator: 'vergleichen',
        frage: 'Vergleiche, wie Adalbero (M3) und Hildegard (M5) die Einteilung begründen. Überprüfe dann mithilfe von M4, inwiefern es auch Kritik gab (vgl. Buch S. 33, A2b).',
        quelle: 'kirche-priester',
        material: M3() + M5(),
        tipp: 'Vergleiche zuerst M3 und M5: Worin stimmen sie überein, was betont Adalbero, was Hildegard? Prüfe dann mit M4, welche Kritik es gab.',
        begriffe: [
          { name: 'Stand', muster: ['stand', 'stände'] },
          { name: 'Gott', muster: ['gott', 'bibel'] },
          { name: 'Adam und Eva', muster: ['adam'] },
          { name: 'Knechtschaft', muster: ['knecht'] },
          { name: 'Kritik', muster: ['kritik', 'kritisier'] }
        ],
        punkte: [
          { text: 'Gemeinsamkeit: Alle drei argumentieren religiös, mit Gott oder der Bibel.', p: 1 },
          { text: 'M3: Adalbero betont die Einheit und die gegenseitigen Dienste. Alle drei Stände brauchen einander.', p: 1 },
          { text: 'M5: Hildegard betont die Rangordnung von oben nach unten (Engel und Erzengel) und die Trennung der Stände (Stall). Der niedere Stand soll sich fügen.', p: 1 },
          { text: 'M4: Weil alle von Adam und Eva abstammen, können die Herren nicht beweisen, dass sie mit besserem Grund Herren sind.', p: 1 },
          { text: 'M4 kritisiert, dass die Herren die Bauern in Knechtschaft halten und von ihrer Arbeit leben.', p: 1 },
          { text: 'Unterschied der Sichtweise: Adalbero und Hildegard gehören als Bischof und Äbtissin zur hohen Geistlichkeit; der Priester wendet sich an die Bauern und stellt sich auf ihre Seite.', p: 1 },
          { text: 'Fazit: Schon im Mittelalter gab es Kritik an der Einteilung, obwohl sie als von Gott gegeben galt.', p: 1 }
        ],
        muster: 'Adalbero (M3) und Hildegard (M5) begründen die Ständeordnung beide mit Gott, setzen aber verschiedene Schwerpunkte. Adalbero betont die Einheit: Das „Haus Gottes“ ist dreigeteilt, aber eins. Die einen beten, die anderen kämpfen, wieder andere arbeiten, und durch die gegenseitigen Dienste brauchen alle drei Stände einander. Hildegard betont dagegen die Rangordnung von oben nach unten: Gott teilt sein Volk in Stände, so wie die Engel im Himmel in einfache Engel und Erzengel geordnet sind. Mit dem Vergleich vom Stall zeigt sie, dass die Stände getrennt bleiben sollen. Der niedere Stand soll sich fügen und sich nicht über den höheren erheben. Überprüft man das mit M4, zeigt sich Kritik: Der Priester von 1381 argumentiert ebenfalls mit der Bibel, kommt aber zum gegenteiligen Ergebnis: Wenn alle Menschen von Adam und Eva abstammen, können die Herren nicht beweisen, dass sie mit besserem Grund Herren sind. Er kritisiert, dass die Herren die Bauern in Knechtschaft halten und von dem leben, was die Bauern erarbeiten. Auch die Sichtweise ist verschieden: Adalbero und Hildegard gehören als Bischof und Äbtissin zur hohen Geistlichkeit. Der Priester wendet sich dagegen an die Bauern und stellt sich auf ihre Seite. Der Vergleich zeigt, dass es schon im Mittelalter Kritik an der Einteilung gab, obwohl sie als von Gott gegeben galt.'
      },
      {
        id: 'kirche-e3', operator: 'erlaeutern',
        frage: 'Erläutere, warum die Ständeordnung heute nicht mehr funktionieren würde (vgl. Buch S. 33, A4b).',
        tipp: 'Geh die Merkmale der Ständeordnung einzeln durch: Platz von Geburt an, Heirat, Abgaben, wer nicht erfasst war, Begründung mit Gott. Nenne jeweils ein Beispiel von heute.',
        begriffe: [
          { name: 'Stand', muster: ['stand', 'stände'] },
          { name: 'Geburt', muster: ['geburt', 'geboren', 'herkunft'] },
          { name: 'gleiche Rechte', muster: ['gleich'] },
          { name: 'Heirat', muster: ['heirat'] },
          { name: 'Abgaben', muster: ['abgabe', 'steuer'] },
          { name: 'von Gott gegeben', muster: ['gott'] }
        ],
        punkte: [
          { text: 'Heute haben alle Menschen die gleichen Rechte, egal aus welcher Familie sie kommen. Damals war den meisten Menschen von Geburt an ein Platz zugewiesen.', p: 1 },
          { text: 'Heute kann man durch Fleiß, Bildung und Können aufsteigen (mit Beispiel).', p: 1 },
          { text: 'Beispiel Heirat: damals nur innerhalb eines Standes, heute darf man frei heiraten.', p: 1 },
          { text: 'Beispiel Abgaben: Damals waren Geistliche und Adlige befreit und lebten von der Arbeit der Bauern, heute zahlen alle nach denselben Gesetzen Steuern.', p: 1 },
          { text: 'Frauen, Kinder und Juden waren nicht erfasst, Standeslose ausgeschlossen. Heute darf niemand benachteiligt werden.', p: 1 },
          { text: 'Die Begründung „von Gott gegeben“ trägt nicht mehr: Nicht alle glauben an Gott, und Gesetze beschließen gewählte Abgeordnete.', p: 1 }
        ],
        muster: 'Die Ständeordnung würde heute nicht mehr funktionieren, weil sie unseren heutigen Grundsätzen widerspricht. Heute haben alle Menschen die gleichen Rechte, egal aus welcher Familie sie kommen. In der Ständeordnung war dagegen den meisten Menschen von Geburt an ein Platz zugewiesen. Heute kann man durch Fleiß, Bildung und Können aufsteigen, zum Beispiel kann das Kind eines Bäckers Ärztin werden. Auch das Heiraten ist heute frei, während früher eine Heirat nur innerhalb eines Standes möglich war. Dass Adlige und Geistliche keine Abgaben zahlen und von der Arbeit der Bauern leben, würde heute niemand hinnehmen, denn alle zahlen nach denselben Gesetzen Steuern. Außerdem wurden Frauen, Kinder und Juden in der Ordnung gar nicht erfasst, und Standeslose wie Henker oder Bettler hatten keinen Platz. Heute darf niemand benachteiligt werden. Schließlich trägt auch die Begründung nicht mehr: Die Ordnung galt als von Gott gegeben. Heute glauben nicht alle Menschen an Gott, und die Gesetze werden von gewählten Abgeordneten gemacht.'
      },
      {
        id: 'kirche-e4', operator: 'nennen',
        frage: 'Nenne mögliche Gründe, warum die Ständeordnung bis ins 19. Jahrhundert hinein bestehen blieb (vgl. Buch S. 33, A4a).',
        tipp: 'Denk daran, wie die Ordnung begründet wurde und wer von ihr profitierte.',
        begriffe: [
          { name: 'von Gott gegeben', muster: ['gott'] },
          { name: 'Abgaben', muster: ['abgabe'] },
          { name: 'Stand', muster: ['stand', 'stände'] }
        ],
        punkte: [
          { text: 'Die Ordnung galt als von Gott gegeben. Wer sich auflehnte, stellte sich gegen Gott.', p: 1 },
          { text: 'Geistliche und Adlige hatten die Macht und Vorteile, zum Beispiel waren sie von Abgaben befreit. Sie wollten das behalten.', p: 1 },
          { text: 'Die Bauern waren abhängig, und weil man nur im eigenen Stand heiraten durfte, blieben die Stände über Generationen getrennt.', p: 1 }
        ],
        muster: 'Die Ständeordnung galt als von Gott gegeben. Wer sich gegen sie auflehnte, stellte sich also gegen Gott, und das wagten nur wenige. Außerdem hatten Geistliche und Adlige die Macht und große Vorteile, zum Beispiel waren sie von Abgaben befreit. Sie hatten kein Interesse daran, etwas zu ändern. Die Bauern waren dagegen von ihren Herren abhängig. Weil man nur innerhalb des eigenen Standes heiraten durfte, blieben die Stände über viele Generationen getrennt.'
      },
      {
        id: 'kirche-e5', operator: 'beurteilenBewerten',
        frage: 'Beurteile, ob die Ständeordnung aus Sicht der Menschen damals gerecht war, und bewerte sie aus heutiger Sicht (vgl. Buch S. 33, M3, M4 und A4b).',
        quelle: 'kirche-priester',
        material: M3(),
        tipp: 'Trenne die beiden Teile sichtbar: Beginne mit „Aus Sicht der Menschen damals …“ und schreibe danach „Aus heutiger Sicht …“. Nenne im Werturteil deinen Maßstab.',
        begriffe: [
          { name: 'Stand', muster: ['stand', 'stände'] },
          { name: 'von Gott gegeben', muster: ['gott'] },
          { name: 'gegenseitige Dienste', muster: ['gegenseitig', 'dienst'] },
          { name: 'Adam und Eva', muster: ['adam'] },
          { name: 'Gleichheit', muster: ['gleich'] },
          { name: 'Grundgesetz', muster: ['grundgesetz'] },
          { name: 'damals / heute', muster: ['damals', 'heute'] }
        ],
        punkte: [
          { text: 'Sachurteil mit M3: Die Ordnung galt als von Gott gegeben; jeder Stand hat im „Haus Gottes“ seine Aufgabe, die Stände dienen sich gegenseitig.', p: 1, art: 'sach' },
          { text: 'Kritik mit M4: Der Priester fragt, warum die Herren besser sein sollen, wenn alle von Adam und Eva abstammen, und spricht von Knechtschaft.', p: 1, art: 'sach' },
          { text: 'Begründetes Fazit aus Sicht der Zeit, z. B.: Den meisten erschien die Ordnung gerecht, weil sie als gottgewollt galt; für die Bauern war sie eine Last, und manche kritisierten sie schon damals.', p: 1, art: 'sach' },
          { text: 'Ein heutiger Maßstab wird genannt, z. B. Gleichheit vor dem Gesetz (Artikel 3 Grundgesetz) oder Chancengleichheit.', p: 1, art: 'wert' },
          { text: 'Eigene, begründete Meinung („Ich finde …, weil …“), die zum genannten Maßstab passt.', p: 1, art: 'wert' },
          { text: 'Sachurteil (damals) und Werturteil (heute) sind erkennbar getrennt.', p: 1 }
        ],
        muster: '<p>Aus Sicht vieler Menschen damals war die Ständeordnung gerecht, denn sie galt als von Gott gegeben. Bischof Adalbero (M3) beschreibt die Gesellschaft als „Haus Gottes“, in dem jeder Stand eine Aufgabe hat: Die Geistlichen beten, die Adligen kämpfen und schützen, die Bauern arbeiten. Durch diese gegenseitigen Dienste brauchen alle einander. Es gab aber schon damals Kritik: Der Priester von 1381 (M4) fragt, warum die Herren besser sein sollen, wenn doch alle Menschen von Adam und Eva abstammen, und er spricht von Knechtschaft. Insgesamt erschien die Ordnung den meisten Menschen damals als gerecht, weil sie als gottgewollt galt. Für die Bauern war sie aber eine schwere Last, und manche hielten sie schon damals für ungerecht.</p>' +
          '<p>Aus heutiger Sicht bewerte ich die Ständeordnung als ungerecht. Mein Maßstab ist die Gleichheit vor dem Gesetz, wie sie in Artikel 3 des Grundgesetzes steht: Niemand darf wegen seiner Herkunft benachteiligt oder bevorzugt werden. In der Ständeordnung entschied dagegen meist die Geburt über das ganze Leben. Wer als Bauernkind geboren wurde, musste Abgaben leisten und hatte kaum eine Chance aufzusteigen, während Adlige davon befreit waren. Ich finde, jeder Mensch sollte die gleichen Chancen haben, egal aus welcher Familie er kommt.</p>'
      }
    ],

    hoftag: {
      wissen: [
        {
          id: 'kirche-hw1', typ: 'wahl',
          frage: 'Wer gehörte nach der Lehre von den drei Ständen zum ersten Stand?',
          optionen: ['die Geistlichen (Klerus)', 'die Adligen', 'die Bauern', 'die Bürger in den Städten'],
          richtig: 0
        },
        {
          id: 'kirche-hw2', typ: 'luecke',
          text: 'Geistliche und Adlige waren von {Abgaben|Gebeten|Gerichten} befreit. Eine Heirat war nur {innerhalb eines Standes|zwischen verschiedenen Ständen|mit Erlaubnis des Königs} möglich.'
        },
        {
          id: 'kirche-hw3', typ: 'eingabe',
          frage: 'Wie heißen die Dienstmannen, die ursprünglich Unfreie waren und sich seit dem 12. Jahrhundert mit dem Adel zum Ritterstand verbanden?',
          akzeptiert: ['Ministeriale', 'Ministerialen', 'Ministerial'],
          nicht: ['Ritter', 'Vasallen', 'Hörige', 'Freigelassene']
        },
        {
          id: 'kirche-hw4', typ: 'zeitleiste',
          frage: 'Ordne in die Zeitleiste ein.',
          abschnitte: ['9. Jh.', '11. Jh.', '14. Jh.', '19. Jh.'],
          ereignisse: [
            ['„Es gibt nichts außer frei und unfrei.“', 0, '803'],
            ['Bischof Adalbero beschreibt das dreigeteilte „Haus Gottes“', 1, 'um 1025'],
            ['Ein Priester ruft die Bauern auf', 2, '1381'],
            ['Ende der Ständeordnung in den meisten Ländern Europas', 3, 'bis weit ins 19. Jh.']
          ]
        },
        {
          id: 'kirche-hw5', typ: 'matrix',
          frage: 'Was traf auf welchen Stand zu? Kreuze an.',
          zeilenKopf: 'Merkmal', spaltenKopf: 'Stand',
          zeilen: ['von Abgaben befreit', 'lebten von den Abgaben und Diensten der Bauern', 'zahlenmäßig größter Stand'],
          spalten: ['Geistliche', 'Adlige', 'Bauern'],
          richtig: [[true, true, false], [true, true, false], [false, false, true]]
        },
        {
          id: 'kirche-hw6', typ: 'wahl',
          frage: 'Welche Menschen zählten zu keinem Stand?',
          optionen: ['Henker und Totengräber', 'Ritter und Ministeriale', 'Bischöfe und Äbte', 'Handwerker und Bürger'],
          richtig: 0
        }
      ],
      material: [
        {
          id: 'kirche-hm1', quelle: 'kirche-lichtenberger',
          text: 'Bildquelle: Holzschnitt „Christus und die drei Stände“, 1488 (Buch S. 32, M1).',
          items: [
            {
              id: 'kirche-hm1-1', typ: 'wahl', p: 1,
              frage: 'Um welche Art von Quelle handelt es sich?',
              optionen: ['eine Bildquelle aus der Zeit selbst', 'ein Schaubild, das heute gezeichnet wurde', 'eine Textquelle, die ein Bild beschreibt'],
              richtig: 0
            },
            {
              id: 'kirche-hm1-2', typ: 'wahl', p: 1,
              frage: 'Wer ist oben, über allen anderen, dargestellt?',
              optionen: ['Christus', 'der Papst', 'der Kaiser', 'ein Bischof'],
              richtig: 0
            },
            {
              id: 'kirche-hm1-3', typ: 'mehrfach', p: 2,
              frage: 'Was zeigt der Aufbau des Bildes? Wähle alle richtigen Aussagen.',
              optionen: ['Christus steht über allen Ständen.', 'Die Bauern sind ganz unten dargestellt.', 'Alle Menschen stehen auf gleicher Höhe nebeneinander.', 'Die Bauern stehen direkt neben Christus.'],
              richtig: [0, 1]
            },
            {
              id: 'kirche-hm1-4', typ: 'behauptung', p: 2,
              aussage: 'Der Holzschnitt zeigt, dass die Menschen damals ihren Stand frei wählen konnten.',
              stimmt: false,
              gruende: [
                'Im Bild gibt Christus selbst jedem Stand seine Aufgabe. Der Platz ist vorgegeben.',
                'Jeder Stand hat eine eigene Inschrift, also durfte sich jeder eine Aufgabe aussuchen.',
                'Das Bild zeigt nur die Bauern und sagt über die anderen Stände nichts.'
              ],
              richtig: 0
            }
          ],
          erkl: {
            id: 'kirche-hm1-e', operator: 'untersuchen',
            frage: 'Untersuche, wie der Holzschnitt die Ständeordnung rechtfertigt. Gehe auf den Bildaufbau und die Inschriften ein.',
            begriffe: [
              { name: 'Christus', muster: ['christus', 'gott'] },
              { name: 'Stand', muster: ['stand', 'stände'] },
              { name: 'Inschrift', muster: ['inschrift', 'beschriftung', 'ora', 'labora'] }
            ],
            punkte: [
              { text: 'Bildaufbau: Christus thront oben über allen Ständen, die Bauern sind ganz unten.', p: 1 },
              { text: 'Die Inschriften geben jedem Stand seine Aufgabe: beten (Geistliche), schützen (Adlige), arbeiten (Bauern).', p: 1 },
              { text: 'Die Ordnung erscheint dadurch als von Gott gegeben.', p: 1 },
              { text: 'Wirkung: Wer das Bild sah, sollte seinen Platz annehmen und sich nicht auflehnen.', p: 1 }
            ],
            muster: 'Der Holzschnitt rechtfertigt die Ständeordnung mit Gott. Oben thront Christus auf einem Regenbogen, er steht also über allen Menschen. Unter ihm sind die Stände angeordnet, die Bauern ganz unten. Die Inschriften geben jedem Stand eine Aufgabe: „Tu supplex ora“ richtet sich an die Geistlichen, „Tu protege“ an die Adligen und „Tuque labora“ an die Bauern. Es wirkt so, als würde Christus selbst die Aufgaben verteilen. Die Ordnung erscheint dadurch als von Gott gegeben. Wer das Bild sah, sollte seinen Platz annehmen und sich nicht gegen die Ordnung auflehnen.'
          }
        },
        {
          id: 'kirche-hm2', quelle: 'kirche-priester',
          text: 'Textquelle: Aufruf eines Priesters an die Bauern, 1381 (Buch S. 33, M4).',
          items: [
            {
              id: 'kirche-hm2-1', typ: 'wahl', p: 1,
              frage: 'An wen richtet sich der Aufruf?',
              optionen: ['an die Bauern', 'an die Herren', 'an den Papst', 'an die Ritter'],
              richtig: 0
            },
            {
              id: 'kirche-hm2-2', typ: 'wahl', p: 1,
              frage: 'Welche Frage steht im Mittelpunkt des Aufrufs?',
              optionen: ['Mit welchem Recht stehen die Herren über den Bauern?', 'Warum zahlen die Bauern so wenig Abgaben?', 'Warum dürfen Geistliche keinen Kriegsdienst leisten?'],
              richtig: 0
            },
            {
              id: 'kirche-hm2-3', typ: 'luecke', p: 2,
              text: 'Der Priester argumentiert mit der {Bibel|Geschichte der Römer|Lehre von den drei Ständen}: Alle Menschen stammen von {Adam und Eva|den Königen|den Engeln} ab.'
            },
            {
              id: 'kirche-hm2-4', typ: 'behauptung', p: 2,
              aussage: 'Der Priester sieht die Ständeordnung genauso wie Bischof Adalbero.',
              stimmt: false,
              gruende: [
                'Adalbero sieht gegenseitige Dienste zum Nutzen aller. Der Priester fragt, warum die Herren überhaupt besser sein sollen, und spricht von Knechtschaft.',
                'Beide sind Geistliche, also vertreten sie dieselbe Meinung.',
                'Der Priester lobt die Herren dafür, dass sie die Bauern beschützen.'
              ],
              richtig: 0
            }
          ],
          erkl: {
            id: 'kirche-hm2-e', operator: 'einordnen',
            frage: 'Ordne den Aufruf in die Geschichte der Ständegesellschaft ein: Wer spricht wann zu wem, und wie passt das zur damaligen Ordnung?',
            begriffe: [
              { name: 'Stand', muster: ['stand', 'stände'] },
              { name: 'Kritik', muster: ['kritik', 'kritisier', 'gegen'] },
              { name: 'von Gott gegeben', muster: ['gott'] }
            ],
            punkte: [
              { text: 'Zeit: 1381, im 14. Jahrhundert. Die Lehre von den drei Ständen galt seit dem 11. Jahrhundert, die Ordnung als von Gott gegeben.', p: 1 },
              { text: 'Verfasser: ein Priester, also selbst Geistlicher, der sich auf die Seite der Bauern stellt.', p: 1 },
              { text: 'Er ruft die Bauern auf und stellt die Herrschaft der Herren in Frage (Knechtschaft, Adam und Eva).', p: 1 },
              { text: 'Gegenstimme zu Adalbero (M3) und Hildegard (M5): Es gab Kritik, doch die Ordnung hielt sich bis weit ins 19. Jahrhundert.', p: 1 }
            ],
            muster: 'Der Aufruf stammt aus dem Jahr 1381, also aus dem 14. Jahrhundert. Damals galt die Lehre von den drei Ständen schon seit dem 11. Jahrhundert, und die Ordnung wurde als von Gott gegeben anerkannt. Der Verfasser ist ein Priester und gehört damit selbst zum ersten Stand. Trotzdem stellt er sich auf die Seite der Bauern und ruft sie auf. Er fragt, mit welchem Recht die Herren über ihnen stehen, wenn doch alle von Adam und Eva abstammen, und kritisiert die Knechtschaft. Damit ist der Aufruf eine Gegenstimme zu Adalbero und Hildegard, die die Ordnung mit Gott rechtfertigen. Er zeigt, dass es schon im Mittelalter Kritik gab. Trotzdem hielt sich die Ständeordnung in den meisten Ländern Europas bis weit ins 19. Jahrhundert.'
          }
        }
      ],
      schreiben: [
        {
          id: 'kirche-hs1', operator: 'erlaeutern',
          frage: 'Erläutere, wie die mittelalterliche Gesellschaft nach der Lehre von den drei Ständen aufgebaut war. Gehe auf die Aufgaben und Rechte der Stände ein und darauf, wer nicht dazugehörte.',
          begriffe: [
            { name: 'Stand', muster: ['stand', 'stände'] },
            { name: 'Klerus / Geistliche', muster: ['klerus', 'geistlich'] },
            { name: 'Adlige', muster: ['adel', 'adlig'] },
            { name: 'Abgaben', muster: ['abgabe'] },
            { name: 'Standeslose', muster: ['standeslos'] }
          ],
          punkte: [
            { text: 'Erster Stand: die Geistlichen (Klerus), ihre Aufgabe ist das Beten.', p: 1 },
            { text: 'Zweiter Stand: die Adligen, sie kämpfen und schützen.', p: 1 },
            { text: 'Dritter Stand: alle anderen wie Bauern, Handwerker und später Bürger; sie arbeiten. Die Bauern sind der größte Stand.', p: 1 },
            { text: 'Geistliche und Adlige waren von Abgaben befreit und durften keine körperliche Arbeit verrichten (vor allem Adlige, Bischöfe und Priester; Mönche arbeiteten auch mit den Händen). Geistliche durften keinen Kriegsdienst leisten.', p: 1 },
            { text: 'Zusammenhang erläutert: Weil Adel und Geistliche nicht körperlich arbeiteten und keine Abgaben zahlten, trug der dritte Stand die Last. Sie lebten von den Abgaben und Diensten der Bauern.', p: 1 },
            { text: 'Der Platz war meist von Geburt an zugewiesen (Ausnahme: Geistliche traten in ihren Stand ein), eine Heirat nur innerhalb eines Standes möglich.', p: 1 },
            { text: 'Standeslose: „unehrenhafte“ Berufe wie Henker und Totengräber, dazu Schausteller und Bettler.', p: 1 },
            { text: 'Nicht erfasst wurden Frauen, Kinder und Juden.', p: 1 }
          ],
          muster: 'Ab dem 11. Jahrhundert wurde die Gesellschaft nach der Lehre von den drei Ständen eingeteilt. Zum ersten Stand gehörten die Geistlichen, also der Klerus. Ihre Aufgabe war das Beten. Den zweiten Stand bildeten die Adligen, die kämpfen und die anderen beschützen sollten. Zum dritten Stand gehörten alle anderen, vor allem die Bauern, aber auch Handwerker und später die Bürger in den Städten. Sie mussten arbeiten. Die Rechte waren sehr ungleich verteilt: Geistliche und Adlige waren von Abgaben befreit und durften keine körperliche Arbeit verrichten. Das galt vor allem für Adlige, Bischöfe und Priester, denn Mönche arbeiteten auch mit den Händen. Geistliche durften außerdem keinen Kriegsdienst leisten. Weil Adel und Geistliche nicht körperlich arbeiteten und keine Abgaben zahlten, trug der dritte Stand die Last: Beide lebten von den Abgaben und Diensten der Bauern, die der zahlenmäßig weitaus größte Stand waren. Zu welchem Stand man gehörte, war meist von Geburt an festgelegt. Eine Ausnahme waren die Geistlichen: Geistlicher wurde man, indem man in diesen Stand eintrat. Eine Heirat war nur innerhalb des eigenen Standes möglich. Manche Menschen standen ganz außerhalb: „Unehrenhafte“ Berufe wie Henker und Totengräber sowie Schausteller und Bettler waren Standeslose. Frauen, Kinder und Juden wurden in der Ordnung gar nicht erfasst.'
        },
        {
          id: 'kirche-hs2', operator: 'beurteilen',
          frage: 'Beurteile, ob die Ständeordnung aus Sicht der Menschen im Mittelalter eine gerechte Ordnung war. Beziehe dich auf M3 und M4.',
          quelle: 'kirche-priester',
          material: M3(),
          tipp: 'Sachurteil: Urteile mit den Augen der Menschen damals. Bedenke verschiedene Sichtweisen, etwa die eines Bischofs und die eines Bauern.',
          begriffe: [
            { name: 'von Gott gegeben', muster: ['gott'] },
            { name: 'Stand', muster: ['stand', 'stände'] },
            { name: 'Abgaben', muster: ['abgabe'] },
            { name: 'Haus Gottes', muster: ['haus gottes'] },
            { name: 'Kritik', muster: ['kritik', 'kritisier'] }
          ],
          punkte: [
            { text: 'Nennt ein Kriterium für das Urteil, z. B. ob die Ordnung den Menschen damals als richtig und nützlich erschien.', p: 1 },
            { text: 'Aus Sicht der Kirche und vieler Menschen war sie gerecht, weil sie als von Gott gegeben galt.', p: 1 },
            { text: 'Adalbero (M3): Jeder Stand hat im „Haus Gottes“ seine Aufgabe, die Stände dienen sich gegenseitig.', p: 1 },
            { text: 'Gegenleistung aus Sicht der Zeit: Die Bauern arbeiteten, dafür schützten die Adligen sie und die Geistlichen beteten für alle.', p: 1 },
            { text: 'Andererseits trugen die Bauern mit Abgaben und Diensten die Last, Geistliche und Adlige waren davon befreit.', p: 1 },
            { text: 'Ein Aufstieg war kaum möglich, eine Heirat nur innerhalb des Standes.', p: 1 },
            { text: 'Schon damals gab es Kritik: Der Priester (M4) fragt, warum die Herren besser sein sollen, wenn alle von Adam und Eva abstammen.', p: 1 },
            { text: 'Begründetes Fazit aus Sicht der Zeit, ohne eigene heutige Meinung.', p: 1 }
          ],
          muster: 'Ob die Ständeordnung damals als gerecht galt, hängt davon ab, aus wessen Sicht man urteilt. Ein wichtiges Kriterium ist, ob die Menschen damals die Ordnung für richtig und nützlich halten konnten. Aus Sicht der Kirche und vieler Menschen war sie gerecht, denn sie galt als von Gott gegeben. Bischof Adalbero beschreibt sie als „Haus Gottes“, in dem jeder Stand eine Aufgabe hat: Die Geistlichen beten, die Adligen kämpfen, die Bauern arbeiten. So dienten sich die Stände gegenseitig: Die Bauern arbeiteten, dafür schützten die Adligen sie, und die Geistlichen beteten für alle. Andererseits trugen die Bauern die größte Last. Sie mussten Abgaben und Dienste leisten, während Adlige und Geistliche davon befreit waren. Aufsteigen konnten sie kaum, und heiraten durften sie nur im eigenen Stand. Dass nicht alle die Ordnung gerecht fanden, zeigt der Aufruf des Priesters von 1381: Wenn alle von Adam und Eva abstammen, warum sollen die Herren dann besser sein? Insgesamt galt die Ständeordnung den meisten Menschen damals als gottgewollt und deshalb als gerecht. Für die Bauern war sie aber eine schwere Last, und schon damals gab es Stimmen, die sie als ungerecht kritisierten.'
        }
      ]
    },

    geruechte: [
      { id: 'kirche-g1', aussage: 'Zum ersten Stand gehörten die Geistlichen.', stimmt: true, erkl: 'Erster Stand: Klerus, zweiter Stand: Adel, dritter Stand: alle anderen.' },
      { id: 'kirche-g2', aussage: 'Die Bauern waren der kleinste Stand.', stimmt: false, erkl: 'Die Bauern waren der zahlenmäßig weitaus größte Stand.' },
      { id: 'kirche-g3', aussage: 'Geistliche durften keinen Kriegsdienst leisten.', stimmt: true, erkl: 'Ihre Aufgabe war das Beten, kämpfen sollte der Adel.' },
      { id: 'kirche-g4', aussage: 'Im Mittelalter durfte man jemanden aus einem anderen Stand heiraten.', stimmt: false, erkl: 'Eine Heirat war nur innerhalb eines Standes möglich.' },
      { id: 'kirche-g5', aussage: 'Henker und Bettler zählten zu keinem Stand.', stimmt: true, erkl: 'Sie waren Standeslose, ebenso Totengräber und Schausteller.' },
      { id: 'kirche-g6', aussage: 'Die Lehre von den drei Ständen stammt aus der Antike.', stimmt: false, erkl: 'Gelehrte entwickelten sie ab dem 11. Jahrhundert. In der Antike gab es Freie und Sklaven.' },
      { id: 'kirche-g7', aussage: 'Adlige waren von Abgaben befreit.', stimmt: true, erkl: 'Geistliche und Adlige lebten von den Abgaben und Diensten der Bauern.' },
      { id: 'kirche-g8', aussage: 'Die Ständeordnung endete schon um 1500.', stimmt: false, erkl: 'Sie galt in den meisten europäischen Ländern bis weit ins 19. Jahrhundert.' },
      { id: 'kirche-g9', aussage: 'Ministeriale waren ursprünglich Unfreie.', stimmt: true, erkl: 'Seit dem 12. Jahrhundert verbanden sie sich mit dem Adel zum Ritterstand.' },
      { id: 'kirche-g10', aussage: 'Hildegard von Bingen kritisierte die Ständeordnung.', stimmt: false, erkl: 'Sie verteidigte sie: Gott teile sein Volk in Stände wie die Engel im Himmel.' }
    ],

    schatz: [
      {
        id: 'kirche-s1',
        titel: 'Der Priester von 1381 hatte einen Namen',
        text: 'Im Buch heißt er nur „ein Priester“. Gemeint ist wohl John Ball aus England. Der Chronist Jean Froissart berichtet, dass Ball in der Grafschaft Kent sonntags nach der Messe zu den Leuten predigte, fast mit denselben Worten wie in M4. 1381 kam es in England zu einem großen Bauernaufstand, und Ball predigte vor den Aufständischen. Berühmt ist ein Reim aus seiner Predigt: „When Adam delved and Eve span, who was then the gentleman?“ Auf Deutsch etwa: Als Adam grub und Eva spann, wer war da der Edelmann? Nach dem Aufstand wurde Ball hingerichtet.',
        nachweis: 'Jean Froissart, Chroniques, Buch II, Kap. 73 (engl. Übersetzung von Thomas Johnes, New York 1857, S. 283); Thomas Walsingham, Historia Anglicana (Predigt in Blackheath, 1381).'
      },
      {
        id: 'kirche-s2',
        titel: 'Warum Hildegard den Brief schrieb',
        text: 'Hildegards Brief (M5) ist eine Antwort. Tengswich, die Vorsteherin der Chorfrauen in Andernach (im Buch „Äbtissin von Andernach“), hatte ihr vorgeworfen, dass sie in ihre Gemeinschaft nur Frauen aus adligen Familien aufnahm. Außerdem störte sie, dass Hildegards Nonnen an Festtagen Schmuck und offenes Haar trugen. Hildegard verteidigte sich mit dem Vergleich vom Stall: Verschiedene Stände sollten nicht durcheinandergemischt werden.',
        nachweis: 'Briefwechsel Tengswich und Hildegard, Brief 52 und 52r, in: Hildegardis Bingensis Epistolarium, hg. von Lieven Van Acker, Bd. 1, Turnhout 1991, Nr. LII–LIIR, S. 125–130; engl. in: The Letters of Hildegard of Bingen, übers. von Joseph L. Baird und Radd K. Ehrman, Bd. 1, Oxford 1994, Nr. 52 und 52r.'
      }
    ]
  });
})();
