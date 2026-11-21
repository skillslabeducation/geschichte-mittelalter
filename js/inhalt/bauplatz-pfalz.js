/* Bauplatz 1: Königspfalz – Karl der Große (Buch S. 18–21) */
(function () {
  'use strict';
  var W = (window.W = window.W || {});

  var TABELLE_M4 = '<p><strong>Lebensmittel für eine Pfalz</strong> (Buch S. 21, M4): Nahrungsbedarf des Königs mit seinem Gefolge (etwa 1000 Mann), Pfalz Ingelheim, geschätzte Werte für das Jahr 800.</p>' +
    '<table><thead><tr><th></th><th>Fleisch</th><th>Getreide</th><th>Wein</th></tr></thead><tbody>' +
    '<tr><th>je Mann und Tag</th><td>2 kg</td><td>2 kg</td><td>3 l</td></tr>' +
    '<tr><th>1000 Mann in 10 Tagen</th><td>20 000 kg</td><td>20 000 kg</td><td>30 000 l</td></tr></tbody></table>' +
    '<p>Um 800 wurden aus den Schlachttieren (Schweine und Schafe) nur je 10 kg Fleisch gewonnen. Eine große Pfalz wie Ingelheim hatte wohl nicht mehr als 2000 Schlachttiere.</p>';

  var TABELLE_M5 = '<p><strong>Aufenthalte Karls während seiner ganzen Regierungszeit</strong> (Auswahl, Buch S. 21, M5)</p>' +
    '<table><thead><tr><th>Ort</th><th>Aufenthalte</th><th>Lage</th></tr></thead><tbody>' +
    '<tr><td>Aachen</td><td>27</td><td>zwischen Maas und Rhein</td></tr>' +
    '<tr><td>Worms</td><td>16</td><td>am Rhein</td></tr>' +
    '<tr><td>Herstal</td><td>12</td><td>an der Maas</td></tr>' +
    '<tr><td>Diedenhofen</td><td>7</td><td>an der Mosel</td></tr>' +
    '<tr><td>Düren</td><td>6</td><td>nahe Aachen</td></tr>' +
    '<tr><td>Quierzy</td><td>6</td><td>im Norden des heutigen Frankreichs</td></tr></tbody></table>';

  W.bauplaetze.push({
    id: 'pfalz', nr: 1, titel: 'Königspfalz', thema: 'Karl der Große', zeit: 'um 800', buch: 'S. 18–21', checkliste: 1,
    chronist: 'Unser erster Gast ist ein König ohne Hauptstadt, der trotzdem große Teile Europas regierte. Bau ihm eine Pfalz, lange bleibt er sowieso nicht.',
    leitfrage: 'Karl der Große, der „Vater Europas“? Wie wurde er Kaiser, und wie regierte er ein so großes Reich ohne Hauptstadt?',

    karten: [
      {
        titel: 'Karl erobert ein großes Reich',
        abb: 'karte-frankenreich', abbOpts: { beschriftet: true },
        text: '<p>Der <dfn>Frankenkönig</dfn> Karl trat 768 das Erbe seines Vaters Pippin an. Mit 1,84 Metern überragte er fast alle Männer seiner Zeit. Über drei Jahrzehnte führte er Krieg.</p>' +
          '<ul><li><strong>Langobarden:</strong> Ein Hilferuf des Papstes löste 773 einen Feldzug gegen die <dfn>Langobarden</dfn> in Norditalien aus. 774 eroberte Karl ihre Hauptstadt Pavia, setzte sich ihre Königskrone auf und nannte sich „König der Franken und Langobarden“.</li>' +
          '<li><strong>Sachsen:</strong> Den längsten Krieg, über 30 Jahre, führte Karl gegen die germanischen <dfn>Sachsen</dfn>. Immer wieder gab es Aufstände. Karl unterdrückte den Widerstand mit aller Härte und zwang die Sachsen, das Christentum zu übernehmen.</li></ul>' +
          '<p>Um 800 hatte Karl das Reich seines Vaters an Größe <strong>verdoppelt</strong>. Er hatte eine politische Einheit der christlichen Völker im Westen und in der Mitte Europas geschaffen.</p>',
        merk: 'Durch Kriege gegen Langobarden und Sachsen verdoppelte Karl das Frankenreich bis 800.',
        achtung: '<strong>Aufgepasst:</strong> Die Sachsen lebten im heutigen Niedersachsen, nicht im heutigen Bundesland Sachsen.'
      },
      {
        titel: 'Weihnachten 800: Karl wird Kaiser',
        text: '<p>Am Weihnachtstag des Jahres 800 krönte <dfn>Papst Leo III.</dfn> Karl in Rom zum Kaiser. Mit dieser <dfn>Kaiserkrönung</dfn> gab es zum ersten Mal seit 476 wieder einen Kaiser im Westen Europas. Im Jahr 476 war der letzte weströmische Kaiser abgesetzt worden.</p>' +
          '<ul><li>Den Beinamen „der Große“ bekam Karl schon zu Lebzeiten.</li>' +
          '<li>Seine Kaiserwürde sah er als ein Amt, das ihm „<dfn>von Gottes Gnaden</dfn>“ übertragen war.</li>' +
          '<li>Als Kaiser war er das weltliche Oberhaupt aller katholischen Christen.</li></ul>' +
          '<p>814 starb Karl in seiner Lieblingspfalz Aachen. Nach seinem Tod entwickelten sich aus den Gebieten des Frankenreichs die Länder Deutschland und Frankreich.</p>',
        merk: 'Am Weihnachtstag 800 krönte Papst Leo III. Karl in Rom zum Kaiser. Erstmals seit 476 gab es wieder einen Kaiser im Westen.',
        achtung: '<strong>Aufgepasst:</strong> Der Papst krönte Karl, nicht umgekehrt. Das Krönungsrecht lag beim Papst.'
      },
      {
        titel: 'Kaiser und Kaisertum',
        text: '<p>Der Titel <dfn>Kaiser</dfn> war der höchste weltliche Herrschertitel in Europa. Das Wort wurde vom Namen <strong>Caesar</strong> abgeleitet.</p>' +
          '<ul><li>Mit Karls Krönung lebte die römische <dfn>Reichsidee</dfn> wieder auf: die Schaffung eines großen, geeinten Reichs.</li>' +
          '<li>Das Krönungsrecht lag beim Papst. Dadurch nahm der Papst Einfluss auf den weltlichen Bereich.</li>' +
          '<li>Die Kaiser des Mittelalters verbanden mit der Kaiserkrone den Herrschaftsanspruch über Italien und sahen sich als Beschützer der Christen.</li></ul>' +
          '<p>Mitten in Italien lag der <dfn>Kirchenstaat</dfn>. Dieses Gebiet hatte Karls Vater Pippin dem Papst geschenkt. Heute gibt es davon nur noch den sehr kleinen Vatikanstaat in Rom.</p>',
        merk: 'Kaiser ist der höchste weltliche Herrschertitel (von Caesar). Gekrönt wurde der Kaiser vom Papst. Der Kaiser sah sich als Beschützer der Christen.',
        achtung: '<strong>Aufgepasst:</strong> Kaiser und König sind nicht dasselbe. Karl war seit 768 König der Franken. Im Jahr 800 bekam er dazu den höheren Titel Kaiser.'
      },
      {
        titel: 'Quelle prüfen: Wer lobt hier wen?',
        quelle: 'pfalz-hofgedicht',
        text: '<p>M3 ist eine <strong>Quelle</strong> aus Karls Zeit. So prüfst du, was sie taugt:</p>' +
          '<ul><li><strong>Wer spricht?</strong> Ein Mitglied des Königshofs. Der Verfasser gehört selbst zum Hof des Königs.</li>' +
          '<li><strong>Wann?</strong> Um 800, also zu Karls Lebzeiten.</li>' +
          '<li><strong>Was wird behauptet?</strong> Karl übertrifft alle Könige der Welt. Er ist „der beste Vater“, „der <dfn>Augustus</dfn>“ und die „Spitze Europas“. Aachen wächst als „zweites Rom“.</li>' +
          '<li><strong>Ist die Quelle neutral?</strong> Nein. Der Verfasser will den König loben. Was Karl schlecht aussehen lässt, fehlt ganz, zum Beispiel die Härte gegen die Sachsen.</li></ul>' +
          '<p>Trotzdem ist M3 wertvoll: Sie zeigt, wie man Karl am Hof sehen wollte. Schon seine Zeitgenossen nannten ihn „<dfn>pater europae</dfn>“, Vater Europas.</p>',
        merk: 'Bei jeder Quelle fragen: Wer spricht? Wann? Was wird behauptet? Ist der Verfasser neutral?',
        achtung: '<strong>Aufgepasst:</strong> Der Darstellungstext im Buch ist keine Quelle. Er wurde heute geschrieben. M3 ist eine Quelle, denn sie stammt aus Karls Zeit.'
      },
      {
        titel: 'Regieren vom Sattel aus',
        text: '<p>Karls Reich umfasste weite Teile des heutigen Frankreichs, Deutschlands und Italiens. So ein großes Gebiet war schwer zu verwalten. Eine feste Hauptstadt gab es nicht. Karl regierte so:</p>' +
          '<ul><li>Er setzte <dfn>Grafen</dfn> ein, die sein Vertrauen genossen und seine Befehle ausführten.</li>' +
          '<li>Er entsandte <dfn>Boten</dfn>.</li>' +
          '<li>Vor allem aber reiste er selbst durch das Reich. Rund 80 000 Kilometer soll er mit seinen Pferden zurückgelegt haben.</li></ul>' +
          '<p>Fast tausend Gefolgsleute reisten mit, darunter die königliche Familie und seine Berater. Mit schwer bepackten Ochsenkarren kämpfte sich der Tross auf den Resten alter Römerstraßen durch riesige Wälder. Am schnellsten und sichersten war der Weg auf den Flüssen Rhein und Donau. Für Frauen, Kinder und Bedienstete war das Reisen sehr anstrengend. Viele erkrankten oder starben unterwegs.</p>' +
          '<p>Diese Art zu herrschen heißt <dfn>Reisekönigtum</dfn>. Regieren bedeutete, politische und rechtliche Entscheidungen vor Ort zu treffen. An den Rändern des Reichs lagen <dfn>Grenzmarken</dfn>. Sie wurden von Grafen verwaltet und dienten der Grenzsicherung.</p>',
        merk: 'Reisekönigtum: Der König hatte keine feste Hauptstadt. Er reiste mit seinem Gefolge durch das Reich und entschied vor Ort.',
        achtung: '<strong>Aufgepasst:</strong> Aachen war keine Hauptstadt wie heute Berlin. Erst nach der Kaiserkrönung machte Karl die Pfalz Aachen zu seiner Hauptresidenz.'
      },
      {
        titel: 'Pfalzen: Herbergen für den König',
        text: '<p>Das große <dfn>Gefolge</dfn> des Königs war schwer unterzubringen und zu ernähren. Deshalb entstanden mit der Zeit Pfalzen. Eine <dfn>Pfalz</dfn> (von lat. <em>palatium</em> = Palast) war eine große Gebäudeanlage, in der viele Hundert Menschen unterkommen konnten. Dort konnte sich der König mehrere Wochen aufhalten. Wichtige Pfalzen lagen zum Beispiel in Aachen, Ingelheim und Paderborn. Auf seinen Reisen hielt sich der König auch oft in großen Klöstern auf.</p>' +
          '<p><strong>Wie lange reichten die Vorräte?</strong> Ein Beispiel aus der Pfalz Ingelheim um 800 (geschätzte Werte, M4): Jeder Mann brauchte am Tag 2 kg Fleisch, 2 kg Getreide und 3 l Wein. Das Gefolge hatte etwa 1000 Mann. Ein Schlachttier brachte nur 10 kg Fleisch, und eine große Pfalz hatte wohl nicht mehr als 2000 Schlachttiere. Rechne nach: Das Fleisch reichte nur wenige Tage. Dann musste der Hof weiterziehen.</p>',
        merk: 'Eine Pfalz (lat. palatium = Palast) war eine Herberge für den König und sein Gefolge. Weil die Vorräte nur kurz reichten, zog der Hof weiter.',
        achtung: '<strong>Aufgepasst:</strong> Eine Pfalz ist keine Burg. Sie war eine große Herberge für den reisenden König und sein Gefolge und ein Ort, an dem er regierte.'
      },
      {
        titel: 'Die Pfalz Aachen',
        abb: 'pfalz-aachen', abbOpts: { beschriftet: true },
        text: '<p>Nach seiner Kaiserkrönung reiste Karl weniger. Er machte die Pfalz Aachen zu seiner <strong>Hauptresidenz</strong>. Warum gerade Aachen?</p>' +
          '<ul><li>Die Umgebung bot beste Gelegenheiten zur Jagd.</li>' +
          '<li>Karl war ein ausgezeichneter Schwimmer und badete gern in den heißen Wasserquellen Aachens. Die Badestunden nutzte er auch, um Politik zu betreiben. Zeitweise begleiteten ihn etwa hundert Menschen beim Baden, darunter viele seiner Berater.</li></ul>' +
          '<p>Zur Pfalz gehörten eine Königshalle (47 × 20 m), das Wohngebäude des Königs, eine Torhalle mit Gerichtssaal, Badehäuser mit Schwimmbecken, Wohnhäuser für Knechte und Mägde und die <dfn>Pfalzkapelle</dfn>. In der Kapelle steht Karls Thron aus Holz und Marmorplatten direkt gegenüber dem Hochaltar: Herrschaft und Religion sind hier miteinander verbunden. Die Pfalzkapelle ist bis heute der Kern des Aachener Doms.</p>' +
          '<p>In Aachen war Karl insgesamt 27-mal, öfter als in Worms (16-mal) oder Herstal (12-mal).</p>',
        merk: 'Ab 800 war Aachen Karls Hauptresidenz: Jagd, heiße Quellen und eine große Pfalz mit Königshalle, Gerichtssaal und Pfalzkapelle.'
      }
    ],

    ueben: [
      {
        id: 'pfalz-u1', typ: 'luecke',
        frage: 'Karls Eroberungen: Wähle die passenden Wörter.',
        text: 'Ein Hilferuf des {Papstes|Kaisers|Grafen} löste 773 einen Feldzug gegen die {Langobarden|Sachsen|Bretonen} in Norditalien aus. 774 eroberte Karl ihre Hauptstadt {Pavia|Rom|Ravenna}. Den längsten Krieg, über {30|3|300} Jahre, führte er gegen die {Sachsen|Langobarden|Bayern}.',
        erkl: 'Langobarden: 773/774, Hauptstadt Pavia. Sachsen: über 30 Jahre Krieg, Zwang zum Christentum.'
      },
      {
        id: 'pfalz-u2', typ: 'mehrfach',
        frage: 'Lies die Karte. Welche Gebiete kamen unter Karl <strong>neu</strong> zum Frankenreich hinzu? Achte auf die Farben der Legende.',
        abb: 'karte-frankenreich', abbOpts: { beschriftet: true },
        optionen: ['Sachsen', 'Bayern', 'das Langobardenreich in Norditalien', 'der Kirchenstaat', 'das Gebiet um Aachen', 'das Gebiet um Ingelheim'],
        richtig: [0, 1, 2],
        erkl: 'Hell gefärbt sind Karls Gebietserweiterungen. Aachen und Ingelheim lagen schon im Reich von 768. Der Kirchenstaat gehörte dem Papst.'
      },
      {
        id: 'pfalz-u3', typ: 'zuordnen',
        frage: 'Wer oder was ist gemeint? Ordne zu.',
        paare: [
          ['Pippin', 'Karls Vater, der dem Papst den Kirchenstaat geschenkt hatte'],
          ['Papst Leo III.', 'krönte Karl am Weihnachtstag 800 in Rom'],
          ['Langobarden', 'Volk in Norditalien mit der Hauptstadt Pavia'],
          ['Sachsen', 'germanisches Volk im heutigen Niedersachsen'],
          ['Grafen', 'genossen Karls Vertrauen und führten seine Befehle aus']
        ]
      },
      {
        id: 'pfalz-u4', typ: 'zeitleiste',
        frage: 'Ordne die Ereignisse in die Zeitleiste ein.',
        abschnitte: ['5. Jahrhundert', 'Karl ist König (768–799)', 'Karl ist Kaiser (800–814)', 'nach Karls Tod'],
        ereignisse: [
          ['Der letzte weströmische Kaiser wird abgesetzt.', 0, '476'],
          ['Karl tritt das Erbe seines Vaters Pippin an.', 1, '768'],
          ['Auf einen Hilferuf des Papstes zieht Karl gegen die Langobarden.', 1, '773'],
          ['Karl erobert Pavia und nennt sich „König der Franken und Langobarden“.', 1, '774'],
          ['Papst Leo III. krönt Karl in Rom zum Kaiser.', 2, '800'],
          ['Karl stirbt in seiner Lieblingspfalz Aachen.', 2, '814'],
          ['Aus dem Frankenreich entwickeln sich Deutschland und Frankreich.', 3, 'nach 814']
        ]
      },
      {
        id: 'pfalz-u5', typ: 'behauptung',
        aussage: 'Im Jahr 800 krönte Karl der Große Papst Leo III. in Rom.',
        stimmt: false,
        gruende: [
          'Es war umgekehrt: Papst Leo III. krönte Karl zum Kaiser. Das Krönungsrecht lag beim Papst.',
          'Die Krönung fand nicht in Rom statt, sondern in Karls Pfalz in Aachen.',
          'Karl wurde nie gekrönt. Er gab sich den Kaisertitel einfach selbst.'
        ],
        richtig: 0,
        erkl: 'Merke die Richtung: Der Papst krönt den Kaiser. So nahm der Papst Einfluss auf den weltlichen Bereich.'
      },
      {
        id: 'pfalz-u6', typ: 'luecke',
        frage: 'Kaiserkrönung und Kaisertum: Wähle die passenden Wörter.',
        text: 'Am Weihnachtstag 800 wurde Karl von {Papst Leo III.|seinem Vater Pippin|einem Grafen} in {Rom|Aachen|Pavia} zum Kaiser gekrönt. Erstmals seit {476|768|774} gab es damit wieder einen Kaiser im Westen Europas. Das Wort Kaiser wurde vom Namen {Caesar|Karl|Augustus} abgeleitet. Karl sah seine Kaiserwürde als ein Amt {von Gottes Gnaden|von Volkes Gnaden|von Papstes Gnaden}.',
        erkl: '476 wurde der letzte weströmische Kaiser abgesetzt. „Von Gottes Gnaden“ heißt: Karl sah sein Amt als von Gott übertragen.'
      },
      {
        id: 'pfalz-u7', typ: 'matrix',
        frage: 'Kaiser oder Papst? Kreuze an, auf wen die Aussage zutrifft.',
        zeilenKopf: 'Aussage', spaltenKopf: 'trifft zu auf',
        zeilen: ['krönte am Weihnachtstag 800 in Rom', 'wurde am Weihnachtstag 800 in Rom gekrönt', 'hatte das Krönungsrecht', 'war das weltliche Oberhaupt aller katholischen Christen', 'sah sich als Beschützer der Christen', 'besaß den Kirchenstaat in Italien'],
        spalten: ['Kaiser Karl', 'Papst Leo III.'],
        richtig: [[false, true], [true, false], [false, true], [true, false], [true, false], [false, true]],
        erkl: 'Der Papst krönte und hatte das Krönungsrecht. Karl wurde gekrönt und war als Kaiser das weltliche Oberhaupt der katholischen Christen.'
      },
      {
        id: 'pfalz-u8', typ: 'wahl',
        quelle: 'pfalz-hofgedicht',
        frage: 'Wer hat M3 verfasst, und was folgt daraus für die Quelle?',
        optionen: [
          'Ein Mitglied des Königshofs. Er lobt Karl, die Quelle ist nicht neutral.',
          'Ein Gegner Karls. Er will den König schlecht aussehen lassen.',
          'Ein heutiger Historiker. Er beschreibt Karl ganz neutral.',
          'Papst Leo III. Er schreibt ein Gebet für den neuen Kaiser.'
        ],
        richtig: 0,
        erkl: 'Der Verfasser gehört zum Hof. Er zeigt, wie man Karl dort sehen wollte, nicht unbedingt, wie Karl wirklich war.'
      },
      {
        id: 'pfalz-u9', typ: 'mehrfach',
        quelle: 'pfalz-hofgedicht',
        frage: 'Welche Aussagen stehen so in M3?',
        optionen: [
          'Karl übertrifft alle Könige auf der ganzen Welt.',
          'Karl wird „der beste Vater“ und „der Augustus“ genannt.',
          'Aachen wächst als „zweites Rom“ zu neuer Blüte.',
          'Karl hat den Widerstand der Sachsen hart unterdrückt.',
          'Karl hat das Reich nur mit Gewalt vergrößert.'
        ],
        richtig: [0, 1, 2],
        erkl: 'Von Krieg und Härte sagt das Lobgedicht nichts. Ein Hofdichter lässt weg, was den König schlecht aussehen lässt.'
      },
      {
        id: 'pfalz-u10', typ: 'sortieren',
        quelle: 'pfalz-hofgedicht',
        frage: 'Darstellung oder Quelle? Ordne jeden Satz zu: Steht er im Darstellungstext des Buchs (heute geschrieben) oder im Hofgedicht M3 (um 800)?',
        kategorien: ['Darstellungstext (heute)', 'Hofgedicht M3 (um 800)'],
        items: [
          ['Mit 1,84 Metern überragte Karl fast alle Männer seiner Zeit.', 0],
          ['Den Widerstand der Sachsen ließ Karl mit aller Härte unterdrücken.', 0],
          ['Um 800 hatte Karl das Reich seines Vaters an Größe verdoppelt.', 0],
          ['Der König ist gerechter und mächtiger als alle.', 1],
          ['Er ist das Haupt der Welt und die Zierde des Volkes.', 1],
          ['Die Stadt wächst als zweites Rom mit Kuppeln, die die Sterne berühren.', 1]
        ],
        erkl: 'Der Darstellungstext nennt Tatsachen, auch unangenehme. Die Quelle lobt und übertreibt.'
      },
      {
        id: 'pfalz-u11', typ: 'wahl',
        quelle: 'pfalz-einhard-bildung',
        frage: 'Diese Quelle kennst du noch nicht. Was erfährst du aus Einhards Bericht über Karls Bildung?',
        optionen: [
          'Karl sprach Latein, lernte bei Gelehrten und versuchte spät noch, schreiben zu lernen, mit wenig Erfolg.',
          'Karl konnte schon als Kind fließend schreiben und schrieb seine Briefe immer selbst.',
          'Karl hielt nichts von Bildung und schickte die Gelehrten von seinem Hof fort.',
          'Karl sprach nur seine Muttersprache und lernte keine fremden Sprachen.'
        ],
        richtig: 0,
        erkl: 'Einhard lobt Karls Fleiß, verschweigt aber nicht, dass das Schreibenlernen zu spät begann.'
      },
      {
        id: 'pfalz-u12', typ: 'eingabe',
        frage: 'Wie heißt die Art zu herrschen, bei der der König keine feste Hauptstadt hat, sondern mit seinem Gefolge durch das Reich zieht und vor Ort entscheidet?',
        akzeptiert: ['Reisekönigtum', 'Reisekoenigtum'],
        nicht: ['Kaisertum', 'Lehnswesen', 'Königtum'],
        erkl: 'Reisekönigtum: Regieren bedeutete, politische und rechtliche Entscheidungen vor Ort zu treffen.'
      },
      {
        id: 'pfalz-u13', typ: 'wahl', operatorTraining: true,
        frage: 'Die Aufgabe lautet: „<strong>Erkläre</strong>, warum Karl so viel reiste.“ Welche Antwort erfüllt den Arbeitsauftrag am besten?',
        optionen: [
          'Karl reiste mit fast tausend Gefolgsleuten auf alten Römerstraßen und auf Rhein und Donau. Er soll rund 80 000 Kilometer zurückgelegt haben.',
          'Karl hatte keine feste Hauptstadt, und Regieren hieß, vor Ort zu entscheiden. Deshalb musste er selbst hinreisen. Außerdem reichten die Vorräte einer Pfalz nur kurz.',
          'Ich finde, Karl hätte lieber an einem Ort bleiben sollen, weil das Reisen für alle viel zu anstrengend und gefährlich war.',
          'Karl war König der Franken und später Kaiser. Er reiste sehr viel durch sein großes Reich, vor allem zu seinen Pfalzen.'
        ],
        richtig: 1,
        erkl: 'Erklären heißt: Gründe nennen und verknüpfen (weil, deshalb). Die erste Antwort beschreibt nur die Reisen, die dritte ist eine Meinung, die vierte bleibt bei Fakten ohne Grund.'
      },
      {
        id: 'pfalz-u14', typ: 'zahl',
        material: TABELLE_M4,
        frage: 'Eine Pfalz hat 2000 Schlachttiere, jedes liefert 10 kg Fleisch. Das Gefolge hat 1000 Mann, jeder isst 2 kg Fleisch am Tag. Wie viele Tage reicht das Fleisch?',
        antwort: 10, einheit: 'Tage', tol: 0,
        erkl: '2000 × 10 kg = 20 000 kg Fleisch. 1000 Mann essen 2000 kg am Tag. 20 000 : 2000 = 10 Tage. Danach musste der Hof weiterziehen.'
      },
      {
        id: 'pfalz-u15', typ: 'wahl',
        material: TABELLE_M5,
        frage: 'Arbeite aus der Tabelle heraus: In welchem Gebiet des Frankenreichs hielt Karl sich besonders häufig auf? (vgl. Buch S. 21, A2)',
        optionen: [
          'im Norden des Reichs, rund um Rhein, Maas und Mosel',
          'in Italien, rund um Rom und Pavia',
          'im Süden, an der Küste des Mittelmeers',
          'im Osten, in Bayern an der Donau'
        ],
        richtig: 0,
        erkl: 'Alle Orte der Liste liegen im Norden des Frankenreichs. Am häufigsten war Karl in Aachen, nämlich 27-mal.'
      },
      {
        id: 'pfalz-u16', typ: 'eingabe',
        frage: 'Das Wort „Pfalz“ kommt aus dem Lateinischen. Wie lautet das lateinische Wort?',
        akzeptiert: ['palatium'],
        nicht: ['Palast', 'Pfalz', 'Palais'],
        erkl: 'Pfalz kommt von lat. palatium = Palast.'
      },
      {
        id: 'pfalz-u17', typ: 'beschriften',
        frage: 'Beschrifte die Pfalz Aachen (vereinfacht nach M3, Buch S. 21).',
        abb: 'pfalz-aachen',
        strukturen: ['koenigshalle', 'wohngebaeude', 'torhalle', 'pfalzkapelle', 'badehaus', 'wohnhaeuser'],
        erkl: 'Die achteckige Pfalzkapelle ist bis heute der Kern des Aachener Doms.'
      },
      {
        id: 'pfalz-u18', typ: 'zuordnen',
        frage: 'Wozu diente welcher Teil der Pfalz Aachen? Ordne zu.',
        paare: [
          ['Königshalle', 'großer Saal (47 × 20 m) für viele Menschen'],
          ['Torhalle mit Gerichtssaal', 'hier wurde Recht gesprochen'],
          ['Pfalzkapelle', 'Gottesdienst, Karls Thron gegenüber dem Hochaltar'],
          ['Badehaus mit Schwimmbecken', 'Baden im heißen Quellwasser, auch Politik mit Beratern'],
          ['Wohnhäuser für Knechte und Mägde', 'Unterkunft für die Bediensteten']
        ],
        erkl: 'In einer Pfalz konnte der König wohnen, beraten, Recht sprechen und beten: alles, was zum Regieren vor Ort gehörte.'
      },
      {
        id: 'pfalz-u19', typ: 'behauptung',
        aussage: 'Eine Pfalz war eine Burg, in der sich der König vor seinen Feinden verteidigte.',
        stimmt: false,
        gruende: [
          'Eine Pfalz war eine große Gebäudeanlage, eine Herberge für den reisenden König und sein Gefolge, in der er auch regierte.',
          'Eine Pfalz war ein Kloster, in dem nur Mönche lebten und der König nie übernachtete.',
          'Eine Pfalz war Karls feste Hauptstadt, die er nach 768 nie mehr verließ.'
        ],
        richtig: 0,
        erkl: 'Pfalz kommt von palatium = Palast. Sie war Herberge und Regierungsort, keine Verteidigungsanlage wie eine Burg.'
      }
    ],

    erklaeren: [
      {
        id: 'pfalz-e1', operator: 'herausarbeiten',
        frage: 'Arbeite heraus, was im Darstellungstext zum Verhältnis von Karl und dem Papst gesagt wird. (vgl. Buch S. 19, A1)',
        tipp: 'Sammle alle Stellen, an denen der Papst vorkommt: 773, 800 und der Begriffskasten „Kaiser“. Ordne dann: Was tat der Papst für Karl, was tat Karl für den Papst?',
        begriffe: [
          { name: 'Papst', muster: ['papst'] },
          { name: 'Langobarden', muster: ['langobard'] },
          { name: 'Kaiserkrönung', muster: ['kaiserkr', 'gekroent', 'kroente', 'kroenung'] },
          { name: 'Krönungsrecht', muster: ['kroenungsrecht'] },
          { name: 'Beschützer', muster: ['beschuetz', 'schutz'] }
        ],
        punkte: [
          { text: 'Die enge Verbindung zwischen dem Papst und dem fränkischen König setzte sich unter Karl fort.', p: 1 },
          { text: '773: Auf einen Hilferuf des Papstes zog Karl gegen die Langobarden und eroberte 774 Pavia. Karl half dem Papst also mit seinem Heer.', p: 1 },
          { text: 'Am Weihnachtstag 800 krönte Papst Leo III. Karl in Rom zum Kaiser.', p: 1 },
          { text: 'Das Krönungsrecht lag beim Papst. Dadurch nahm er Einfluss auf den weltlichen Bereich.', p: 1 },
          { text: 'Als Kaiser war Karl das weltliche Oberhaupt aller katholischen Christen. Die Kaiser sahen sich als Beschützer der Christen.', p: 1 },
          { text: 'Ergebnis: Beide waren aufeinander angewiesen. Der Papst brauchte Karls Hilfe, Karl brauchte den Papst für die Kaiserkrone.', p: 1 }
        ],
        muster: '<p>Im Darstellungstext wird deutlich, dass Karl und der Papst eng verbunden waren. Diese enge Verbindung zwischen dem Papst in Rom und dem fränkischen König setzte sich unter Karl fort. 773 bat der Papst Karl um Hilfe. Daraufhin zog Karl gegen die Langobarden in Norditalien und eroberte 774 ihre Hauptstadt Pavia. Karl half dem Papst also mit seinem Heer.</p>' +
          '<p>Am Weihnachtstag 800 krönte Papst Leo III. Karl in Rom zum Kaiser. Das Krönungsrecht lag beim Papst, dadurch nahm er Einfluss auf den weltlichen Bereich. Als Kaiser war Karl das weltliche Oberhaupt aller katholischen Christen, und die Kaiser sahen sich als Beschützer der Christen.</p>' +
          '<p>Daraus geht hervor, dass beide aufeinander angewiesen waren: Der Papst brauchte Karls Hilfe und Schutz, und Karl brauchte den Papst, um Kaiser zu werden.</p>'
      },
      {
        id: 'pfalz-e2', operator: 'erklaeren',
        frage: 'Erkläre mithilfe des Darstellungstextes und des Begriffskastens „Reisekönigtum“, warum Karl so viel reiste. (vgl. Buch S. 21, A1)',
        tipp: 'Denk an drei Dinge: die Größe des Reichs, was „regieren“ damals bedeutete, und die Vorräte einer Pfalz (M4).',
        begriffe: [
          { name: 'Reisekönigtum', muster: ['reisekoenig'] },
          { name: 'Hauptstadt', muster: ['hauptstadt'] },
          { name: 'Pfalz', muster: ['pfalz'] },
          { name: 'Grafen', muster: ['graf'] },
          { name: 'Gefolge', muster: ['gefolg'] }
        ],
        punkte: [
          { text: 'Das Reich war sehr groß (weite Teile Frankreichs, Deutschlands und Italiens) und schwer zu verwalten.', p: 1 },
          { text: 'Es gab keine feste Hauptstadt. Karl regierte als Reisekönig.', p: 1 },
          { text: 'Regieren bedeutete, politische und rechtliche Entscheidungen vor Ort zu treffen. Deshalb musste Karl selbst hinreisen.', p: 1 },
          { text: 'Karl setzte zwar Grafen ein und schickte Boten, vor allem aber reiste er selbst.', p: 1 },
          { text: 'Das Gefolge (fast tausend Menschen) war schwer zu ernähren: Die Vorräte einer Pfalz reichten nur etwa 10 Tage (M4), dann musste der Hof weiterziehen.', p: 1 },
          { text: 'Die Gründe sind mit „weil“ oder „deshalb“ verknüpft, also erklärt und nicht nur beschrieben.', p: 1 }
        ],
        muster: '<p>Karl reiste so viel, weil er ein riesiges Reich regierte. Es umfasste weite Teile des heutigen Frankreichs, Deutschlands und Italiens, und so ein großes Gebiet war schwer zu verwalten. Eine feste Hauptstadt gab es nicht. Man spricht deshalb vom Reisekönigtum: Regieren bedeutete damals, politische und rechtliche Entscheidungen vor Ort zu treffen.</p>' +
          '<p>Karl setzte zwar Grafen ein, die seine Befehle ausführten, und er schickte Boten. Vor allem aber musste er selbst in die Teile seines Reichs reisen. Dazu kam die Versorgung: Das Gefolge bestand aus fast tausend Menschen. In einer Pfalz wie Ingelheim reichte das Fleisch nur etwa zehn Tage. Deshalb musste der Hof immer wieder weiterziehen.</p>'
      },
      {
        id: 'pfalz-e3', operator: 'beurteilen',
        quelle: 'pfalz-hofgedicht',
        frage: 'Beurteile, ob Karl der Große den Beinamen „Vater Europas“ verdient. Beziehe die Quelle M3 ein und beachte, wer sie verfasst hat. (vgl. Buch S. 18 und S. 19, A5)',
        tipp: 'Sachurteil: Prüfe mit Fakten aus dem Buch, was für und was gegen den Beinamen spricht, und beachte, wer M3 geschrieben hat. Keine eigene Meinung wie „ich finde“.',
        begriffe: [
          { name: 'Kaiser', muster: ['kaiser'] },
          { name: 'Europa', muster: ['europ'] },
          { name: 'Sachsen', muster: ['sachsen'] },
          { name: 'Königshof / Hof', muster: ['hof'] },
          { name: 'neutral', muster: ['neutral'] }
        ],
        punkte: [
          { text: 'Dafür: Karl verdoppelte das Reich und schuf eine politische Einheit der christlichen Völker im Westen und in der Mitte Europas.', p: 1 },
          { text: 'Dafür: Sein Reich umfasste große Teile des heutigen Frankreichs, Deutschlands und Italiens. Daraus entwickelten sich später Deutschland und Frankreich.', p: 1 },
          { text: 'Dafür: Mit der Kaiserkrönung 800 gab es erstmals seit 476 wieder einen Kaiser im Westen. Die römische Reichsidee lebte wieder auf.', p: 1 },
          { text: 'Dagegen: Das Reich entstand durch Eroberungskriege. Die Sachsen wurden mit aller Härte unterdrückt und zum Christentum gezwungen.', p: 1 },
          { text: 'Einschränkung: Nicht ganz Europa gehörte dazu, zum Beispiel nicht Britannien und nicht das Oströmische Reich (Karte).', p: 1 },
          { text: 'M3: Der Verfasser gehört zum Königshof. Er lobt Karl („der beste Vater“, „Spitze Europas“) und ist nicht neutral.', p: 1 },
          { text: 'Deshalb zeigt M3 vor allem, wie man Karl am Hof sehen wollte, und ist kein Beweis, dass der Beiname stimmt.', p: 1 },
          { text: 'Abwägendes Ergebnis mit Begründung, aus Sicht der Zeit und ohne „ich finde“.', p: 1 }
        ],
        muster: '<p>Aus Sicht der Menschen damals war der Beiname „Vater Europas“ gut nachvollziehbar. Karl hatte das Reich seines Vaters bis 800 verdoppelt und eine politische Einheit der christlichen Völker im Westen und in der Mitte Europas geschaffen. Sein Reich umfasste große Teile des heutigen Frankreichs, Deutschlands und Italiens, und später entwickelten sich daraus Deutschland und Frankreich. Mit der Kaiserkrönung im Jahr 800 gab es außerdem zum ersten Mal seit 476 wieder einen Kaiser im Westen.</p>' +
          '<p>Andererseits entstand dieses Reich durch Kriege. Den Widerstand der Sachsen ließ Karl mit aller Härte unterdrücken und zwang sie zum Christentum. Außerdem gehörte nicht ganz Europa dazu, zum Beispiel nicht Britannien und nicht das Oströmische Reich.</p>' +
          '<p>Die Quelle M3 nennt Karl „den besten Vater“ und die „Spitze Europas“. Sie stammt aber von einem Mitglied des Königshofs und ist nicht neutral. Sie zeigt vor allem, wie man Karl am Hof sehen wollte.</p>' +
          '<p>Insgesamt passt der Beiname, weil Karl große Teile Europas in einem Reich verband. Er ist aber auch ein Lob von Hofleuten, das die Gewalt der Eroberungen verschweigt.</p>'
      }
    ],

    hoftag: {
      wissen: [
        {
          id: 'pfalz-hw1', typ: 'reihenfolge',
          frage: 'Franken und Papst: Bringe die Ereignisse in die richtige zeitliche Reihenfolge.',
          schritte: [
            'Pippin schenkt dem Papst den Kirchenstaat.',
            'Karl tritt das Erbe seines Vaters Pippin an.',
            'Der Papst ruft Karl gegen die Langobarden zu Hilfe.',
            'Karl nennt sich „König der Franken und Langobarden“.',
            'Papst Leo III. krönt Karl in Rom zum Kaiser.',
            'Karl macht die Pfalz Aachen zu seiner Hauptresidenz.'
          ]
        },
        {
          id: 'pfalz-hw2', typ: 'wahl',
          frage: 'Karl betrachtete seine Kaiserwürde als ein Amt „von Gottes Gnaden“. Was bedeutet das?',
          optionen: [
            'Er sah sein Amt als von Gott übertragen an.',
            'Er bat Gott um Gnade für die besiegten Sachsen.',
            'Der Papst hatte ihn für seine Kriege begnadigt.',
            'Er durfte nur mit Zustimmung des Volkes regieren.'
          ],
          richtig: 0
        },
        {
          id: 'pfalz-hw3', typ: 'eingabe',
          frage: 'Wie heißen die Grenzgebiete des Frankenreichs, die von Grafen verwaltet wurden und der Grenzsicherung dienten?',
          akzeptiert: ['Grenzmarken', 'Grenzmark', 'Marken', 'Mark'],
          nicht: ['Pfalzen', 'Pfalz', 'Grafschaften', 'Kirchenstaat']
        },
        {
          id: 'pfalz-hw4', typ: 'luecke',
          frage: 'Das Reisekönigtum: Wähle die passenden Wörter.',
          text: 'Karl reiste mit fast {tausend|hundert|zehntausend} Gefolgsleuten durch das Reich. Am schnellsten und sichersten war der Weg auf den Flüssen {Rhein und Donau|Elbe und Oder|Po und Tiber}. Nach der Kaiserkrönung wurde {Aachen|Rom|Paderborn} seine Hauptresidenz.'
        },
        {
          id: 'pfalz-hw5', typ: 'sortieren',
          frage: 'Langobarden oder Sachsen? Ordne zu.',
          kategorien: ['Langobarden', 'Sachsen'],
          items: [
            ['Hauptstadt Pavia', 0],
            ['Feldzug nach einem Hilferuf des Papstes', 0],
            ['Karl setzte sich ihre Königskrone auf.', 0],
            ['Krieg über mehr als 30 Jahre', 1],
            ['lebten im heutigen Niedersachsen', 1],
            ['wurden zur Übernahme des Christentums gezwungen', 1]
          ]
        },
        {
          id: 'pfalz-hw6', typ: 'zuordnen',
          frage: 'Ordne jedem Begriff die passende Erklärung zu.',
          paare: [
            ['Pfalz', 'Herberge für den König und sein Gefolge'],
            ['Reisekönigtum', 'Herrschaft ohne feste Hauptstadt, Entscheidungen vor Ort'],
            ['Kaiser', 'höchster weltlicher Herrschertitel, abgeleitet von Caesar'],
            ['pater europae', 'lateinisch für „Vater Europas“'],
            ['Kirchenstaat', 'Gebiet in Italien, das Pippin dem Papst geschenkt hatte']
          ]
        }
      ],
      material: [
        {
          id: 'pfalz-hm1', quelle: 'pfalz-einhard',
          text: 'Diese Quelle steht nicht in deinem Buch. Einhard war ein Gelehrter, der viele Jahre am Hof Karls des Großen lebte. Nach Karls Tod schrieb er dessen Lebensgeschichte.',
          items: [
            {
              id: 'pfalz-hm1-1', typ: 'wahl', p: 1,
              frage: 'Wer berichtet hier?',
              optionen: [
                'ein Gelehrter vom Hof, der Karl gut kannte und ihm viel verdankte',
                'ein Gesandter des oströmischen Kaisers, der Karl nur einmal sah',
                'ein Sachse, der viele Jahre lang gegen Karl gekämpft hatte',
                'Papst Leo III., der seine eigene Krönungsrede aufschrieb'
              ],
              richtig: 0
            },
            {
              id: 'pfalz-hm1-2', typ: 'wahl', p: 1,
              frage: 'Ordne die Quelle ein: Von welchem Ereignis berichtet Einhard im Kapitel 28?',
              optionen: [
                'von der Kaiserkrönung am Weihnachtstag 800 in Rom',
                'von der Eroberung Pavias im Jahr 774',
                'von Karls Tod in Aachen im Jahr 814',
                'von der Absetzung des letzten weströmischen Kaisers 476'
              ],
              richtig: 0
            },
            {
              id: 'pfalz-hm1-3', typ: 'mehrfach', p: 2,
              frage: 'Was steht in der Quelle?',
              optionen: [
                'Die Römer hatten Papst Leo schwer misshandelt.',
                'Der Papst bat Karl um Schutz.',
                'Karl blieb den ganzen Winter in Rom.',
                'Karl wurde in seiner Pfalz in Aachen gekrönt.',
                'Karl setzte sich die Kaiserkrone selbst auf.'
              ],
              richtig: [0, 1, 2]
            },
            {
              id: 'pfalz-hm1-4', typ: 'wahl', p: 1,
              frage: 'Was berichtet Einhard über Karls Haltung zum Kaisertitel?',
              optionen: [
                'Der Titel sei Karl anfangs so zuwider gewesen, dass er die Kirche nicht betreten hätte, wenn er die Absicht des Papstes gekannt hätte.',
                'Karl habe den Papst schon lange gebeten, ihn endlich zum Kaiser zu krönen, und sich sehr über die Krone gefreut.',
                'Karl habe den Kaisertitel sofort zurückgegeben und sich danach nie wieder Kaiser genannt.',
                'Karl habe den Papst gezwungen, ihn am Weihnachtstag in der Kirche zum Kaiser zu krönen.'
              ],
              richtig: 0
            },
            {
              id: 'pfalz-hm1-5', typ: 'behauptung', p: 1,
              aussage: 'Einhards Bericht beweist, dass Karl gar nicht Kaiser werden wollte.',
              stimmt: false,
              gruende: [
                'Einhard war Karl dankbar und wollte ihn gut darstellen. Er gibt nur wieder, was Karl selbst versichert haben soll.',
                'Einhard war ein Gegner Karls und hat die ganze Geschichte frei erfunden.',
                'Karl hat den Kaisertitel nie getragen, deshalb kann der Bericht nicht stimmen.'
              ],
              richtig: 0
            }
          ],
          erkl: {
            id: 'pfalz-hm1-e', operator: 'einordnen',
            frage: 'Ordne Einhards Bericht ein: Wer schreibt wann über welches Ereignis? Erkläre, was das für die Sichtweise der Quelle bedeutet.',
            begriffe: [
              { name: 'Einhard', muster: ['einhard'] },
              { name: 'Hof', muster: ['hof'] },
              { name: 'Kaiserkrönung', muster: ['kaiserkr', 'gekroent', 'kroenung'] },
              { name: 'neutral', muster: ['neutral'] }
            ],
            punkte: [
              { text: 'Wer: Einhard, ein Gelehrter am Hof Karls, der Karl gut kannte, ihn seinen Herrn und Erzieher nennt und ihm viel verdankte.', p: 1 },
              { text: 'Wann: Er schrieb nach Karls Tod (814), also Jahre nach dem Ereignis.', p: 1 },
              { text: 'Was: die Kaiserkrönung am Weihnachtstag 800 in Rom durch Papst Leo III.', p: 1 },
              { text: 'Sichtweise: nicht neutral. Einhard will Karl gut darstellen, als einen König, der nicht nach dem Kaisertitel gierte. Er gibt Karls eigene Aussage wieder.', p: 1 }
            ],
            muster: '<p>Die Quelle stammt von Einhard. Er war ein Gelehrter am Hof Karls des Großen, kannte Karl gut und nennt ihn seinen Herrn und Erzieher. Er schrieb Karls Lebensgeschichte nach dessen Tod im Jahr 814, also viele Jahre nach dem Ereignis.</p>' +
              '<p>Im Kapitel 28 berichtet er von der Kaiserkrönung am Weihnachtstag 800 in Rom durch Papst Leo III. Einhard schreibt, Karl sei der Kaisertitel zuerst zuwider gewesen. Er hätte die Kirche nicht betreten, wenn er die Absicht des Papstes gekannt hätte.</p>' +
              '<p>Die Quelle ist nicht neutral. Einhard verdankte Karl viel und wollte ihn gut darstellen. Er gibt außerdem nur wieder, was Karl selbst versichert haben soll. Ob Karl wirklich überrascht war, beweist der Bericht deshalb nicht.</p>'
          }
        }
      ],
      schreiben: [
        {
          id: 'pfalz-hs1', operator: 'erklaeren',
          abb: 'karte-frankenreich', abbOpts: { beschriftet: true },
          frage: 'Erkläre mithilfe der Karte und deines Wissens, wie Karl der Große seinen Machtbereich erweiterte. (vgl. Buch S. 19, A4a)',
          begriffe: [
            { name: 'Langobarden', muster: ['langobard'] },
            { name: 'Sachsen', muster: ['sachsen'] },
            { name: 'Grenzmarken', muster: ['grenzmark', 'spanische mark'] },
            { name: 'Papst', muster: ['papst'] },
            { name: 'Kaiser', muster: ['kaiser'] }
          ],
          punkte: [
            { text: 'Ausgangspunkt: 768 übernahm Karl das Frankenreich seines Vaters Pippin (dunkle Fläche auf der Karte).', p: 1 },
            { text: 'Langobarden: Auf einen Hilferuf des Papstes zog Karl 773 nach Norditalien und eroberte 774 die Hauptstadt Pavia.', p: 1 },
            { text: 'Er setzte sich die Königskrone der Langobarden auf und nannte sich „König der Franken und Langobarden“.', p: 1 },
            { text: 'Sachsen: Über 30 Jahre Krieg. Karl unterdrückte den Widerstand mit Härte und zwang die Sachsen zum Christentum.', p: 1 },
            { text: 'Die Karte zeigt weitere Gebietserweiterungen, zum Beispiel Bayern.', p: 1 },
            { text: 'An den Grenzen sicherten Grenzmarken (zum Beispiel die Spanische Mark) das Reich. Sie wurden von Grafen verwaltet.', p: 1 },
            { text: 'Ergebnis: Um 800 war das Reich doppelt so groß wie das Reich Pippins, eine politische Einheit der christlichen Völker im Westen und in der Mitte Europas.', p: 1 },
            { text: 'Die Kaiserkrönung 800 durch Papst Leo III. machte Karl zum weltlichen Oberhaupt aller katholischen Christen.', p: 1 }
          ],
          muster: '<p>Karl übernahm 768 das Frankenreich seines Vaters Pippin. Auf der Karte ist es dunkel gefärbt. Er erweiterte seinen Machtbereich vor allem durch Kriege. Auf einen Hilferuf des Papstes zog er 773 gegen die Langobarden in Norditalien. 774 eroberte er ihre Hauptstadt Pavia, setzte sich ihre Königskrone auf und nannte sich „König der Franken und Langobarden“.</p>' +
            '<p>Den längsten Krieg führte er über 30 Jahre gegen die Sachsen im heutigen Niedersachsen. Er unterdrückte ihren Widerstand mit aller Härte und zwang sie zum Christentum. Die Karte zeigt außerdem, dass auch Bayern hinzukam. An den Grenzen ließ Karl Grenzmarken wie die Spanische Mark einrichten, die von Grafen verwaltet wurden und das Reich sicherten.</p>' +
            '<p>Dadurch war das Reich um 800 doppelt so groß wie das Reich seines Vaters. Es bildete eine politische Einheit der christlichen Völker im Westen und in der Mitte Europas. Mit der Kaiserkrönung durch Papst Leo III. im Jahr 800 wurde Karl außerdem das weltliche Oberhaupt aller katholischen Christen.</p>'
        },
        {
          id: 'pfalz-hs2', operator: 'ueberpruefen',
          frage: 'Überprüfe die Aussage: „Seit der Kaiserkrönung im Jahr 800 war Karl mächtiger als der Papst.“',
          begriffe: [
            { name: 'Krönungsrecht', muster: ['kroenungsrecht'] },
            { name: 'weltlich', muster: ['weltlich'] },
            { name: 'Beschützer', muster: ['beschuetz', 'schutz'] },
            { name: 'Kirchenstaat', muster: ['kirchenstaat'] }
          ],
          punkte: [
            { text: 'Dafür: Als Kaiser war Karl das weltliche Oberhaupt aller katholischen Christen.', p: 1 },
            { text: 'Dafür: Er beherrschte ein riesiges Reich. Die Kaiser verbanden mit der Krone den Herrschaftsanspruch über Italien.', p: 1 },
            { text: 'Dafür: Der Papst war auf Karls Hilfe angewiesen (Hilferuf 773, Feldzug gegen die Langobarden). Die Kaiser sahen sich als Beschützer der Christen.', p: 1 },
            { text: 'Dagegen: Das Krönungsrecht lag beim Papst. Ohne ihn konnte Karl nicht Kaiser werden.', p: 1 },
            { text: 'Dagegen: Durch das Krönungsrecht nahm der Papst Einfluss auf den weltlichen Bereich.', p: 1 },
            { text: 'Dagegen: Der Papst besaß mit dem Kirchenstaat ein eigenes Gebiet in Italien.', p: 1 },
            { text: 'Begründetes Ergebnis: Die Aussage stimmt nur teilweise. Kaiser und Papst waren aufeinander angewiesen.', p: 1 },
            { text: 'Sachlich mit Belegen aus dem Buch, ohne eigene Meinung („ich finde“).', p: 1 }
          ],
          muster: '<p>Für die Aussage spricht, dass Karl als Kaiser das weltliche Oberhaupt aller katholischen Christen war. Er beherrschte ein riesiges Reich, und die Kaiser verbanden mit der Krone den Herrschaftsanspruch über Italien. Außerdem war der Papst auf Karl angewiesen: Schon 773 hatte er Karl um Hilfe gegen die Langobarden gebeten, und die Kaiser sahen sich als Beschützer der Christen.</p>' +
            '<p>Gegen die Aussage spricht, dass das Krönungsrecht beim Papst lag. Ohne den Papst konnte Karl nicht Kaiser werden. Dadurch nahm der Papst Einfluss auf den weltlichen Bereich. Außerdem besaß der Papst mit dem Kirchenstaat ein eigenes Gebiet in Italien.</p>' +
            '<p>Die Aussage stimmt also nur teilweise. Karl hatte mehr Land und Soldaten, aber Kaiser und Papst waren aufeinander angewiesen: Der Papst brauchte Karls Schutz, und Karl brauchte den Papst für die Kaiserkrone.</p>'
        }
      ]
    },

    geruechte: [
      { id: 'pfalz-g1', aussage: 'Karl der Große wurde am Weihnachtstag 800 in Rom zum Kaiser gekrönt.', stimmt: true, erkl: 'Papst Leo III. krönte ihn am Weihnachtstag 800 in Rom.' },
      { id: 'pfalz-g2', aussage: 'Karl der Große krönte den Papst.', stimmt: false, erkl: 'Umgekehrt: Der Papst krönte Karl. Das Krönungsrecht lag beim Papst.' },
      { id: 'pfalz-g3', aussage: 'Karl regierte von einer festen Hauptstadt aus.', stimmt: false, erkl: 'Er reiste mit seinem Gefolge durch das Reich (Reisekönigtum).' },
      { id: 'pfalz-g4', aussage: '„Pfalz“ kommt vom lateinischen „palatium“, Palast.', stimmt: true, erkl: 'Pfalz = palatium = Palast, eine Herberge für den König und sein Gefolge.' },
      { id: 'pfalz-g5', aussage: 'Karl soll auf seinen Reisen rund 80 000 Kilometer zurückgelegt haben.', stimmt: true, erkl: 'So schätzt man es nach heutigen Berechnungen.' },
      { id: 'pfalz-g6', aussage: 'Den Krieg gegen die Sachsen gewann Karl in wenigen Wochen.', stimmt: false, erkl: 'Es war sein längster Krieg, über 30 Jahre.' },
      { id: 'pfalz-g7', aussage: 'In Aachen hielt sich Karl 27-mal auf.', stimmt: true, erkl: 'Aachen wurde nach der Kaiserkrönung seine Hauptresidenz.' },
      { id: 'pfalz-g8', aussage: 'Im Jahr 476 wurde Karl der Große geboren.', stimmt: false, erkl: '476 wurde der letzte weströmische Kaiser abgesetzt. Karl lebte vermutlich von 748 bis 814.' },
      { id: 'pfalz-g9', aussage: 'Karl war mit 1,84 Metern größer als fast alle Männer seiner Zeit.', stimmt: true, erkl: 'Für damals war das außergewöhnlich groß.' },
      { id: 'pfalz-g10', aussage: 'Ein Gedicht eines Hofmitglieds ist eine neutrale Quelle über den König.', stimmt: false, erkl: 'Der Verfasser gehört zum Hof und lobt den König, die Quelle ist nicht neutral.' }
    ],

    schatz: [
      {
        id: 'pfalz-s1', titel: 'Ein Elefant für den Kaiser',
        text: 'Der Kalif Harun ar-Raschid aus Bagdad schickte Karl einen Elefanten. Er hieß Abul Abaz. Ein Gesandter namens Isaak brachte ihn übers Mittelmeer nach Italien. Weil Schnee auf den Alpen lag, überwinterte er in Vercelli. Im Juli 802 kam der Elefant in Aachen an. Er starb 810 plötzlich, als Karl mit seinem Heer an der Lippe lagerte.',
        nachweis: 'Reichsannalen (Annales regni Francorum) zu den Jahren 801, 802 und 810; Einhard, Vita Karoli Magni, Kap. 16'
      },
      {
        id: 'pfalz-s2', titel: 'Woher der „Vater Europas“ stammt',
        text: 'Die Worte „pater Europae“ stehen in genau dem lateinischen Gedicht, aus dem auch M3 stammt. Dort heißt Karl „rex pater Europae“, König und Vater Europas. Der berühmte Beiname kommt also von einem Dichter am Hof, der Karl loben wollte.',
        nachweis: 'Karolus Magnus et Leo Papa (Paderborner Epos, um 800); lateinischer Text in Migne, Patrologia Latina Bd. 98 (Wikisource: „Carmen (PL 098)“)'
      }
    ]
  });
})();
