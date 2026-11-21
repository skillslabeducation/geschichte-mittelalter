/* Bauplatz 3: Straßen und Banner – Lehnswesen (Buch S. 24/25) */
(function () {
  'use strict';
  var W = (window.W = window.W || {});

  W.bauplaetze.push({
    id: 'lehen', nr: 3, titel: 'Straßen und Banner', thema: 'Lehnswesen', zeit: 'seit dem 8. Jh.', buch: 'S. 24/25', checkliste: 2,
    chronist: 'Ein König ohne Beamte und ohne eigenes Heer, und trotzdem hält sein Reich zusammen. Die Wege und Banner hier im Tal verraten dir, womit: mit Land gegen Treue.',
    leitfrage: 'Welche Bedeutung hatte das Lehnswesen für die Königsherrschaft im Mittelalter?',

    karten: [
      {
        titel: 'Ein König ohne Behörden',
        text: '<p>Heute regieren Staaten mit Tausenden von Beamten, Polizisten und Richtern. Solche Behörden hatten die Könige im Mittelalter nicht.</p>' +
          '<p>Ein König verdankte seine Macht den geistlichen und adligen <dfn>Fürsten</dfn>, denn sie wählten ihn zum König. Auch nach der Krönung brauchte er sie, um seine Herrschaft im Reich durchzusetzen:</p>' +
          '<ul><li>Er hatte <strong>kein eigenes Heer</strong>. Im Krieg war er auf die Unterstützung der Fürsten angewiesen.</li>' +
          '<li>Als <dfn>Reisekönig</dfn> war er nie lange an einem Ort. Er musste sich darauf verlassen, dass die Fürsten im ganzen Reich in seinem Interesse handelten.</li></ul>',
        merk: 'Der König verdankte seine Macht den Fürsten: Sie wählten ihn, und ohne Behörden und ohne eigenes Heer war er auf sie angewiesen.',
        achtung: '<strong>Aufgepasst</strong>: Der König im Mittelalter war nicht allmächtig. Ohne die Fürsten konnte er seine Herrschaft im Reich nicht durchsetzen. Dass die Fürsten den König wählten, sagt das Buch für das Mittelalter allgemein. Karl der Große trat 768 das Erbe seines Vaters Pippin an.'
      },
      {
        titel: 'Land gegen Treue: So entstand das Lehnswesen',
        text: '<p>Für die Adligen zahlte sich der Dienst am König aus. Als Gegenleistung für ihre Gefolgschaft erhielten sie:</p>' +
          '<ul><li>Land,</li><li>eine Burg oder</li><li>ein besonderes Recht, zum Beispiel das Recht, einen Markt zu gründen.</li></ul>' +
          '<p>Diese Leihgabe auf Lebenszeit nannte man <dfn>Lehen</dfn>. Gleichzeitig band der König die Adligen durch einen <dfn>Treueid</dfn> an seine Person.</p>' +
          '<p>Anders als heute gab es noch keine schriftliche <dfn>Verfassung</dfn>, in der die staatliche Ordnung dauerhaft geregelt war. So entwickelte sich seit dem 8. Jahrhundert das <dfn>Lehnswesen</dfn>: <strong>Herrschaft durch persönliche Bindung</strong>.</p>',
        merk: 'Lehen = Leihgabe auf Lebenszeit. Der König gab Land, Burgen oder Rechte und band die Adligen durch einen Treueid an sich: Herrschaft durch persönliche Bindung.',
        achtung: '<strong>Aufgepasst</strong>: Ein Lehen war kein Geschenk. Es war auf Lebenszeit geliehen, und der Vasall musste dafür Dienste leisten.'
      },
      {
        titel: 'Lehnsherr und Vasall',
        text: '<p>Wer ein Lehen vergab, war der <dfn>Lehnsherr</dfn>. Wer es empfing, war der Lehnsmann oder <dfn>Vasall</dfn>.</p>' +
          '<p>Beide begaben sich in ein <strong>gegenseitig verpflichtendes Verhältnis</strong> und schuldeten einander Treue:</p>' +
          '<ul><li>Der Herr erwartete <strong>im Frieden Rat</strong> und <strong>im Kriegsfall militärische Hilfe</strong>.</li>' +
          '<li>Als Gegenleistung belohnte er den Vasallen mit einem Lehen.</li></ul>' +
          '<p>Nicht nur Land wurde als Lehen vergeben, sondern auch <strong>Ämter</strong> oder <strong>Rechte</strong> wie das <dfn>Münzrecht</dfn>.</p>',
        merk: 'Lehnsherr und Vasall schuldeten einander Treue. Der Herr gab das Lehen, der Vasall leistete im Frieden Rat und im Krieg militärische Hilfe.',
        achtung: '<strong>Aufgepasst</strong>: Die Pflichten gingen in beide Richtungen. Nicht nur der Vasall schuldete Treue, sondern auch der Lehnsherr.'
      },
      {
        titel: 'Die Vergabe von Lehen in drei Teilen',
        quelle: 'lehen-sachsenspiegel',
        text: '<p>Ein Lehen wurde feierlich übergeben. Die Übergabe bestand aus drei Teilen:</p>' +
          '<ul><li><strong>1. <dfn>Mannschaft</dfn>:</strong> Der Vasall gab seine zusammengelegten Hände in die Hände des Herrn. Der umschloss sie als Zeichen von Schutz und gegenseitiger Treue.</li>' +
          '<li><strong>2. Treueid</strong> des Vasallen: Er versprach Rat und Hilfe.</li>' +
          '<li><strong>3. <dfn>Lehnsübergabe</dfn>:</strong> Je nach Art des Lehens übergab der Herr dem Vasallen ein Symbol.</li></ul>' +
          '<p>Für dieses feierliche Treueversprechen sagt man auch: einem Herrn <dfn>huldigen</dfn>.</p>' +
          '<p>Das Bild stammt aus dem <dfn>Sachsenspiegel</dfn>. Oben siehst du die Mannschaft, unten schwören Männer einen Eid auf <dfn>Reliquien</dfn>. Ein ähnliches Bild steht in deinem Buch als M1.</p>',
        merk: 'Mannschaft (Hände in die Hände), Treueid (Rat und Hilfe versprechen), Lehnsübergabe (ein Symbol): In diesen drei Teilen wurde ein Lehen vergeben.',
        achtung: '<strong>Aufgepasst</strong>: „Mannschaft“ meint hier keine Sportmannschaft, sondern die Geste mit den Händen. Damit wurde der Vasall zum Gefolgsmann seines Herrn.'
      },
      {
        titel: 'Methode: Eine Quelle mit dem Darstellungstext vergleichen',
        quelle: 'lehen-galbert',
        text: '<p>In M2 berichtet Galbert von Brügge, wie ein Vasall einem Grafen huldigt. So vergleichst du die Quelle mit der Beschreibung der Lehnsvergabe im Buch:</p>' +
          '<ul><li><strong>Der Reihe nach lesen:</strong> Was geschieht zuerst, was danach?</li>' +
          '<li><strong>Zuordnen:</strong> „Die Hände des Vasallen in denen des Grafen“ ist die <strong>Mannschaft</strong>. „Ich verspreche …, dem Grafen Wilhelm treu zu sein“ ist der <strong>Treueid</strong>. Zum Dritten schwört der Vasall ihn noch einmal auf die Reliquien.</li>' +
          '<li><strong>Unterschiede finden:</strong> In M2 kommen zusätzlich die Frage nach „ohne Vorbehalte“, die Antwort „Ich will es“ und ein Kuss vor. Die Lehnsübergabe mit einem Symbol steht im Auszug nicht.</li></ul>',
        merk: 'Beim Vergleichen ordnest du jede Stelle der Quelle einem Begriff aus dem Darstellungstext zu und sagst dann, was gleich ist, was fehlt und was dazukommt.',
        achtung: '<strong>Aufgepasst</strong>: Was im Auszug fehlt, muss nicht gefehlt haben. Der Text ist gekürzt, das zeigen die Auslassungszeichen „…“.'
      },
      {
        titel: 'Kronvasallen und Untervasallen',
        abb: 'lehnswesen', abbOpts: { beschriftet: true },
        text: '<p>Herzöge, Grafen und Bischöfe waren die Vasallen des Königs. Man nannte sie <dfn>Kronvasallen</dfn>. Sie übten Ämter in der Reichsverwaltung aus.</p>' +
          '<p>Kronvasallen konnten Teile ihres Lehens weiterverleihen, zum Beispiel an Ritter, <dfn>Ministerialen</dfn>, Äbte und Äbtissinnen. Diese <dfn>Untervasallen</dfn> waren ihrem unmittelbaren Lehnsherrn zur Treue verpflichtet, <strong>aber nicht mehr dem König</strong>.</p>' +
          '<p>Ein Kronvasall war also beides: <strong>Vasall</strong> des Königs und <strong>Lehnsherr</strong> seiner Untervasallen.</p>',
        merk: 'Ein Kronvasall war zugleich Vasall (des Königs) und Lehnsherr (seiner Untervasallen). Die Untervasallen schuldeten dem König keine Treue.',
        achtung: '<strong>Aufgepasst</strong>: Auch Bischöfe, Äbte und Äbtissinnen konnten Vasallen sein. Bauern dagegen kommen im Schaubild nicht vor: Sie waren keine Vasallen.'
      },
      {
        titel: 'Methode: Ein Schaubild untersuchen',
        abb: 'lehnswesen', abbOpts: { beschriftet: true, hervorheben: ['schutz', 'dienste', 'treueid'] },
        text: '<p>Das Schaubild M3 zeigt das Lehnswesen vereinfacht. So untersuchst du es:</p>' +
          '<ul><li><strong>Thema:</strong> Was zeigt das Schaubild laut Titel?</li>' +
          '<li><strong>Aufbau:</strong> Welche Ebenen gibt es? Oben steht der König, darunter die Kronvasallen, unten die Untervasallen.</li>' +
          '<li><strong>Legende:</strong> Was bedeuten Farben und Pfeile? Rot nach unten: Schutz, Lehen. Grün nach oben: Kriegs- und Amtsdienste. Orange in beide Richtungen: Treueid.</li>' +
          '<li><strong>Aussage:</strong> Was zeigt das Schaubild insgesamt? Fasse es in ein, zwei Sätzen zusammen.</li>' +
          '<li><strong>Grenzen:</strong> Was zeigt es nicht? Zum Beispiel fehlen die Bauern, und man sieht nicht, wie das Lehnswesen entstanden ist.</li></ul>' +
          '<p>Die genauen Arbeitsschritte deiner Klasse stehen im Buch auf S. 162.</p>',
        merk: 'Erst Thema und Legende klären, dann Ebenen und Pfeile beschreiben, dann die Aussage formulieren und zuletzt sagen, was das Schaubild nicht zeigt.',
        achtung: '<strong>Aufgepasst</strong>: Ein Schaubild ist vereinfacht. Es zeigt nicht jede Einzelheit, sondern nur die wichtigsten Beziehungen.'
      }
    ],

    ueben: [
      {
        id: 'lehen-u1', typ: 'wahl',
        frage: 'Warum waren die Könige im Mittelalter auf die Fürsten angewiesen?',
        optionen: [
          'Sie hatten keine Behörden und kein eigenes Heer, und die Fürsten wählten sie.',
          'Die Fürsten bezahlten die Beamten, Polizisten und Richter des Königs.',
          'Die Fürsten hatten die schriftliche Verfassung des Reiches verfasst.',
          'Die Fürsten verwalteten für den König seine feste Hauptstadt.'
        ],
        richtig: 0,
        erkl: 'Ohne Behörden und ohne eigenes Heer brauchte der König die Fürsten, um seine Herrschaft durchzusetzen. Eine Verfassung gab es noch nicht.'
      },
      {
        id: 'lehen-u2', typ: 'luecke',
        text: 'Als Gegenleistung für ihre {Gefolgschaft|Abgaben|Frondienste} erhielten die Adligen Land, eine Burg oder ein besonderes Recht. Diese Leihgabe auf {Lebenszeit|ein Jahr|alle Zeiten} nannte man {Lehen|Zehnt|Hufe}. Gleichzeitig band der König die Adligen durch einen {Treueid|Kaufvertrag|Frondienst} an seine Person.',
        erkl: 'So steht es im Buch auf S. 24. Zehnt, Hufe und Frondienste gehören zur Grundherrschaft.'
      },
      {
        id: 'lehen-u3', typ: 'mehrfach',
        frage: 'Was konnte als Lehen vergeben werden? Wähle alles Passende.',
        optionen: ['Land', 'eine Burg', 'ein Amt in der Reichsverwaltung', 'ein Recht, zum Beispiel das Münzrecht', 'ein Sitz in einem gewählten Parlament', 'die Befreiung von allen Diensten'],
        richtig: [0, 1, 2, 3],
        erkl: 'Nicht nur Land: Auch Burgen, Ämter und Rechte wie das Münzrecht oder das Recht, einen Markt zu gründen, wurden als Lehen vergeben. Frei von Diensten war ein Vasall nie.'
      },
      {
        id: 'lehen-u4', typ: 'behauptung',
        aussage: 'Ein Lehen war ein Geschenk. Der Vasall durfte es behalten, auch wenn er seinem Herrn nicht mehr diente.',
        stimmt: false,
        gruende: [
          'Das Lehen war nur auf Lebenszeit geliehen, und der Vasall musste dafür Dienste leisten.',
          'Das Lehen gehörte immer der Kirche, deshalb durfte es niemand behalten.',
          'Ein Lehen bestand nur aus Geld, und Geld musste man zurückzahlen.',
          'Der Vasall musste jedes Lehen schon nach einem Jahr zurückgeben.'
        ],
        richtig: 0,
        erkl: 'Lehen ist nicht gleich Geschenk: Es war eine Leihgabe auf Lebenszeit, gebunden an Treue und Dienste.'
      },
      {
        id: 'lehen-u5', typ: 'eingabe',
        frage: 'Wie nennt man den Lehnsmann, der ein Lehen empfängt und dafür Dienste leistet? Schreib den Fachbegriff.',
        akzeptiert: ['Vasall', 'Vasallen', 'Lehnsmann', 'Lehensmann'],
        nicht: ['Lehnsherr', 'Lehnsherrn', 'Lehen', 'Höriger', 'Hörige', 'Leibeigener', 'Leibeigene'],
        erkl: 'Vasall oder Lehnsmann. Der Lehnsherr ist der, der das Lehen vergibt.'
      },
      {
        id: 'lehen-u6', typ: 'tabelle',
        frage: 'Ein Geben und Nehmen: Wer gibt was, wer bekommt was?',
        spalten: ['', 'gibt', 'bekommt'],
        zeilen: [
          { kopf: 'Lehnsherr', zellen: [
            { optionen: ['Schutz und ein Lehen', 'Rat und militärische Hilfe', 'Abgaben und Frondienste'], richtig: 0 },
            { optionen: ['Schutz und ein Lehen', 'Rat und militärische Hilfe', 'Abgaben und Frondienste'], richtig: 1 }
          ] },
          { kopf: 'Vasall', zellen: [
            { optionen: ['Schutz und ein Lehen', 'Rat und militärische Hilfe', 'Abgaben und Frondienste'], richtig: 1 },
            { optionen: ['Schutz und ein Lehen', 'Rat und militärische Hilfe', 'Abgaben und Frondienste'], richtig: 0 }
          ] }
        ],
        erkl: 'Schutz und Lehen gehen vom Herrn zum Vasallen, Rat und militärische Hilfe vom Vasallen zum Herrn. Abgaben und Frondienste leisteten Bauern in der Grundherrschaft.'
      },
      {
        id: 'lehen-u7', typ: 'zuordnen',
        frage: 'Ordne jedem Begriff die passende Erklärung zu.',
        paare: [
          ['Lehen', 'lebenslang geliehenes Gut: Land, Burg, Amt oder Recht'],
          ['Lehnsherr', 'vergibt das Lehen und erwartet Rat und Hilfe'],
          ['Vasall', 'empfängt das Lehen und leistet dafür Dienste'],
          ['Treueid', 'Versprechen des Vasallen, Rat und Hilfe zu leisten'],
          ['Kronvasallen', 'Herzöge, Grafen und Bischöfe als Vasallen des Königs'],
          ['Untervasallen', 'erhalten ihr Lehen von einem Kronvasallen']
        ]
      },
      {
        id: 'lehen-u8', typ: 'reihenfolge',
        frage: 'In welcher Reihenfolge lief die Vergabe eines Lehens ab?',
        schritte: [
          'Der Vasall legt seine zusammengelegten Hände in die Hände des Herrn.',
          'Der Vasall verspricht Rat und Hilfe.',
          'Der Herr übergibt ein Symbol für das Lehen.',
          'Der Vasall leistet seinem Herrn Dienste: Rat im Frieden, Hilfe im Krieg.'
        ],
        erkl: 'Erst die Mannschaft, dann der Treueid, dann die Lehnsübergabe. Danach musste der Vasall seine Dienste leisten.'
      },
      {
        id: 'lehen-u9', typ: 'wahl', quelle: 'lehen-sachsenspiegel',
        frage: 'Sieh dir den oberen Bildstreifen an. Welcher Teil der Lehnsvergabe ist dargestellt?',
        optionen: ['die Mannschaft', 'die Lehnsübergabe', 'der Ritterschlag', 'die Abgabe des Zehnten'],
        richtig: 0,
        erkl: 'Der Mann legt seine aneinandergelegten Hände in die Hände des sitzenden Herrn: Das ist die Mannschaft.'
      },
      {
        id: 'lehen-u10', typ: 'mehrfach', quelle: 'lehen-galbert',
        frage: 'Welche Teile der Lehnsvergabe findest du im Auszug von Galberts Bericht (M2)?',
        optionen: [
          'Mannschaft: Die Hände des Vasallen liegen in denen des Grafen.',
          'Treueid: Der Vasall verspricht, dem Grafen treu zu sein.',
          'Lehnsübergabe: Der Graf übergibt ein Symbol für das Lehen.',
          'Abgaben: Der Vasall liefert dem Grafen den Zehnt ab.'
        ],
        richtig: [0, 1],
        erkl: 'Mannschaft und Treueid stehen in M2. Eine Lehnsübergabe kommt im Auszug nicht vor. Den Zehnt mussten Hörige in der Grundherrschaft abgeben.'
      },
      {
        id: 'lehen-u11', typ: 'wahl', quelle: 'lehen-galbert',
        frage: 'Was erfährst du aus dem Auszug in M2 <strong>nicht</strong>?',
        optionen: [
          'welches Lehen der Vasall bekam',
          'ob der Vasall Gefolgsmann werden wollte',
          'wie Graf und Vasall sich verbündeten',
          'worauf der Vasall zum Schluss schwor'
        ],
        richtig: 0,
        erkl: 'Über das Lehen selbst steht im Auszug nichts. Er beschreibt die Frage des Grafen, die Mannschaft mit dem Kuss und den Treueid.'
      },
      {
        id: 'lehen-u12', typ: 'beschriften',
        frage: 'Beschrifte das Schaubild zum Lehnswesen.',
        abb: 'lehnswesen',
        strukturen: ['koenig', 'kronvasallen', 'untervasallen', 'schutz', 'dienste', 'treueid'],
        erkl: 'Rote Pfeile nach unten: Schutz, Lehen. Grüne Pfeile nach oben: Kriegs- und Amtsdienste. Orange Pfeile in beide Richtungen: Treueid.'
      },
      {
        id: 'lehen-u13', typ: 'sortieren',
        frage: 'Kronvasall oder Untervasall? Ordne nach dem Schaubild M3.',
        kategorien: ['Kronvasallen', 'Untervasallen'],
        items: [['Herzöge', 0], ['Grafen', 0], ['Bischöfe', 0], ['Ritter', 1], ['Ministerialen', 1], ['Äbte und Äbtissinnen', 1]],
        erkl: 'Herzöge, Grafen und Bischöfe sind Vasallen des Königs. Ritter, Ministerialen, Äbte und Äbtissinnen erhalten ihr Lehen von einem Kronvasallen.'
      },
      {
        id: 'lehen-u14', typ: 'behauptung',
        frage: 'Überprüfe die Aussage mithilfe des Schaubilds.',
        abb: 'lehnswesen', abbOpts: { beschriftet: true },
        aussage: 'Ein Kronvasall war zugleich Vasall und Lehnsherr.',
        stimmt: true,
        gruende: [
          'Er erhielt sein Lehen vom König und gab Teile davon an Untervasallen weiter.',
          'Er war Vasall des Königs und zugleich Lehnsherr des Königs.',
          'Nur der König konnte Lehnsherr sein, alle anderen waren nur Vasallen.',
          'Er war der Lehnsherr der Bauern, die auf seinem Land arbeiteten.'
        ],
        richtig: 0,
        erkl: 'Gegenüber dem König war der Kronvasall Vasall, gegenüber seinen Untervasallen war er Lehnsherr. Bauern waren keine Vasallen.'
      },
      {
        id: 'lehen-u15', typ: 'wahl',
        frage: 'Untervasallen waren ihrem unmittelbaren Lehnsherrn, aber nicht mehr dem König zur Treue verpflichtet. Welche Folge hatte das für den König?',
        optionen: [
          'Er war darauf angewiesen, dass seine Kronvasallen treu blieben, denn die Untervasallen folgten ihrem eigenen Herrn.',
          'Er konnte die Untervasallen jederzeit selbst und ohne ihren Lehnsherrn zum Kriegsdienst rufen.',
          'Er bekam von den Untervasallen doppelt so viele Dienste wie von seinen eigenen Kronvasallen.',
          'Er musste jedem einzelnen Untervasallen im Reich selbst ein Lehen geben und ihn schützen.'
        ],
        richtig: 0,
        erkl: 'Die Bindung lief Stufe für Stufe. Auf die Untervasallen hatte der König keinen direkten Zugriff, nur über ihre Lehnsherren, die Kronvasallen.'
      },
      {
        id: 'lehen-u16', typ: 'zeitleiste',
        frage: 'Ordne die Ereignisse auf der Zeitleiste ein.',
        abschnitte: ['5. Jh.', '8. Jh.', '9. Jh.', '11. Jh.', '13./14. Jh.'],
        ereignisse: [
          ['Absetzung des letzten weströmischen Kaisers', 0, '476'],
          ['Das Lehnswesen beginnt sich zu entwickeln', 1, 'seit dem 8. Jh.'],
          ['Karl der Große tritt das Erbe seines Vaters an', 1, '768'],
          ['Karl der Große stirbt in Aachen', 2, '814'],
          ['Die Lehre von den drei Ständen entsteht', 3, 'ab dem 11. Jh.'],
          ['Die Bilderhandschrift des Sachsenspiegels (M1) entsteht', 4, '13./14. Jh.']
        ],
        erkl: 'Das Lehnswesen entwickelte sich seit dem 8. Jahrhundert, also schon zur Zeit Karls des Großen und lange vor der Lehre von den drei Ständen.'
      },
      {
        id: 'lehen-u17', typ: 'mehrfach', quelle: 'lehen-tours',
        frage: 'Lies die unbekannte Quelle. Was soll der Herr dem Mann geben?',
        optionen: ['Nahrung', 'Kleidung', 'Schutz', 'Land als Lehen', 'eine Burg'],
        richtig: [0, 1, 2],
        erkl: 'Der Herr nimmt den Mann in seinen Schutz und versorgt ihn mit Nahrung und Kleidung. Von Land oder einer Burg ist nicht die Rede.'
      },
      {
        id: 'lehen-u18', typ: 'wahl', operatorTraining: true,
        frage: 'Die Aufgabe lautet: „Erkläre, wie das Lehnswesen entstand.“ Welche Antwort erfüllt den Arbeitsauftrag?',
        optionen: [
          'Die Könige hatten weder Behörden noch ein eigenes Heer und brauchten deshalb die Fürsten. Dafür gaben sie ihnen Lehen und banden sie durch einen Treueid an sich.',
          'Im Schaubild steht oben der König, in der Mitte die Kronvasallen und unten die Untervasallen. Rote Pfeile zeigen nach unten, grüne Pfeile nach oben.',
          'Wichtige Begriffe zum Lehnswesen sind Lehen, Lehnsherr, Vasall, Treueid, Kronvasallen, Untervasallen, Mannschaft und Lehnsübergabe.',
          'Ich finde das Lehnswesen ungerecht, weil nur Adlige und hohe Geistliche ein Lehen bekamen und die meisten Menschen leer ausgingen.'
        ],
        richtig: 0,
        erkl: 'Erklären heißt: Gründe und Zusammenhänge zeigen (deshalb, dafür). Die zweite Antwort beschreibt nur, die dritte nennt nur Begriffe, die vierte ist ein Werturteil.'
      },
      {
        id: 'lehen-u19', typ: 'wahl', operatorTraining: true,
        frage: 'Die Aufgabe lautet: „Beurteile, ob das Lehnswesen für die Herrschaft im Mittelalter unentbehrlich war.“ Was verlangt der Operator „Beurteile“?',
        optionen: [
          'Ein begründetes Sachurteil mit den Augen der Menschen damals, mit Argumenten und einem Fazit.',
          'Deine eigene Meinung nach heutigen Werten, zum Beispiel ob das Lehnswesen gerecht war.',
          'Eine genaue Beschreibung des Schaubilds M3, ganz ohne ein eigenes Urteil.',
          'Eine vollständige Aufzählung aller Kronvasallen und Untervasallen.'
        ],
        richtig: 0,
        erkl: 'Beurteilen heißt: ein Sachurteil mit Kriterien der damaligen Zeit. Die eigene Meinung nach heutigen Werten gehört zum Bewerten (Werturteil).'
      },
      {
        id: 'lehen-u20', typ: 'behauptung',
        frage: 'Überprüfe die Aussage mithilfe des Schaubilds M3.',
        abb: 'lehnswesen', abbOpts: { beschriftet: true },
        aussage: 'Jeder Lehnsherr und Vasall war zugleich Gefolgsmann des Königs.',
        stimmt: false,
        gruende: [
          'Untervasallen waren nur ihrem unmittelbaren Lehnsherrn zur Treue verpflichtet, nicht mehr dem König.',
          'Es war umgekehrt: Nur die Untervasallen waren dem König verpflichtet, die Kronvasallen nicht.',
          'Ein Lehnsherr schuldete niemandem Treue. Treue mussten nur die Vasallen leisten.'
        ],
        richtig: 0,
        erkl: 'Die Treue lief Stufe für Stufe. Gefolgsleute des Königs waren nur die Kronvasallen. Ritter, Ministerialen, Äbte und Äbtissinnen waren nur ihrem eigenen Lehnsherrn verpflichtet.'
      }
    ],

    erklaeren: [
      {
        id: 'lehen-e1', operator: 'erklaeren',
        frage: 'Erkläre mithilfe des Darstellungstextes und des Schaubilds, wie das Lehnswesen entstand. Nutze dazu den Wortschatz: jemandem seine Macht verdanken, als Gegenleistung für …, einen Treueid leisten, die persönliche Bindung. (vgl. Buch S. 24, A1)',
        abb: 'lehnswesen', abbOpts: { beschriftet: true },
        tipp: 'Beginne mit dem Problem des Königs (keine Behörden, kein eigenes Heer). Erkläre dann, wie Lehen und Treueid dieses Problem lösten.',
        begriffe: [
          { name: 'Fürsten', muster: ['fuerst'] },
          { name: 'Lehen', muster: ['lehen'] },
          { name: 'Treueid', muster: ['treueid', 'treue'] },
          { name: 'Gegenleistung', muster: ['gegenleistung'] },
          { name: 'persönliche Bindung', muster: ['bindung', 'gebunden'] },
          { name: 'Vasall', muster: ['vasall'] }
        ],
        punkte: [
          { text: 'Die Könige hatten keine Behörden (keine Beamten, Polizisten oder Richter), um ihr Reich zu regieren.', p: 1 },
          { text: 'Der König verdankte seine Macht den Fürsten, die ihn wählten, und war ohne eigenes Heer im Krieg auf ihre Unterstützung angewiesen.', p: 1 },
          { text: 'Als Reisekönig musste er sich darauf verlassen, dass die Fürsten im ganzen Reich in seinem Interesse handelten.', p: 1 },
          { text: 'Als Gegenleistung für ihre Gefolgschaft erhielten die Adligen ein Lehen (Land, eine Burg oder ein Recht) als Leihgabe auf Lebenszeit.', p: 1 },
          { text: 'Durch einen Treueid band der König sie an seine Person, denn eine schriftliche Verfassung gab es nicht.', p: 1 },
          { text: 'So entstand seit dem 8. Jahrhundert das Lehnswesen: Herrschaft durch persönliche Bindung, die über die Kronvasallen bis zu den Untervasallen reichte.', p: 1 }
        ],
        muster: 'Im Mittelalter hatten die Könige noch keine Behörden mit Beamten, Polizisten und Richtern. Ein König verdankte seine Macht den geistlichen und adligen Fürsten, die ihn zum König wählten. Da er kein eigenes Heer hatte, war er im Krieg auf ihre Unterstützung angewiesen. Als Reisekönig musste er sich außerdem darauf verlassen, dass die Fürsten im ganzen Reich in seinem Interesse handelten. ' +
          'Deshalb gab der König den Adligen als Gegenleistung für ihre Gefolgschaft Land, eine Burg oder ein Recht, zum Beispiel das Recht, einen Markt zu gründen. Diese Leihgabe auf Lebenszeit nannte man Lehen. Zugleich leisteten die Adligen einen Treueid und waren so persönlich an den König gebunden, denn eine schriftliche Verfassung gab es noch nicht. ' +
          'Die Kronvasallen konnten Teile ihres Lehens an Untervasallen weitergeben. So entwickelte sich seit dem 8. Jahrhundert das Lehnswesen: Herrschaft durch persönliche Bindung.'
      },
      {
        id: 'lehen-e2', operator: 'erlaeutern',
        frage: 'Erläutere mithilfe der Begriffsinformation „Die Vergabe von Lehen“ die drei Teile der Lehnsvergabe: Mannschaft, Treueid und Lehnsübergabe. Belege sie, wo es geht, mit M2. (vgl. Buch S. 24, A2)',
        quelle: 'lehen-galbert',
        tipp: 'Denk auch an das Bild aus dem Sachsenspiegel (M1): Oben siehst du die Mannschaft. Sag ausdrücklich, welcher Teil in M2 fehlt.',
        begriffe: [
          { name: 'Mannschaft', muster: ['mannschaft'] },
          { name: 'Treueid', muster: ['treueid', 'eid'] },
          { name: 'Lehnsübergabe', muster: ['lehnsuebergabe', 'uebergabe', 'symbol'] },
          { name: 'Vasall', muster: ['vasall'] },
          { name: 'Lehnsherr', muster: ['lehnsherr', 'herrn'] }
        ],
        punkte: [
          { text: 'Mannschaft: Der Vasall gibt seine zusammengelegten Hände in die Hände des Herrn, der sie umschließt.', p: 1 },
          { text: 'Die Mannschaft ist ein Zeichen von Schutz und gegenseitiger Treue.', p: 1 },
          { text: 'Beleg aus M2: Die Hände des Vasallen lagen in denen des Grafen, dazu verbündeten sie sich mit einem Kuss.', p: 1 },
          { text: 'Treueid: Der Vasall verspricht Rat und Hilfe.', p: 1 },
          { text: 'Beleg aus M2: „Ich verspreche …, dem Grafen Wilhelm treu zu sein“; zum Dritten schwört er dasselbe auf die Reliquien.', p: 1 },
          { text: 'Lehnsübergabe: Der Herr übergibt je nach Art des Lehens ein Symbol. Im Auszug von M2 kommt sie nicht vor.', p: 1 }
        ],
        muster: 'Die Vergabe eines Lehens bestand aus drei Teilen. Zuerst kam die Mannschaft: Der Vasall gab seine zusammengelegten Hände in die Hände des Herrn, und der Herr umschloss sie. Das war ein Zeichen von Schutz und gegenseitiger Treue. In M2 zeigt sich das daran, dass die Hände des Vasallen in denen des Grafen lagen. Vorher hatte der Graf gefragt, ob er ohne Vorbehalte sein Gefolgsmann werden wolle, und der Vasall hatte „Ich will es“ geantwortet. Außerdem verbündeten sich beide mit einem Kuss. ' +
          'Danach leistete der Vasall den Treueid und versprach Rat und Hilfe. In M2 sagt er zum Beispiel: „Ich verspreche auf meinen Glauben …, dem Grafen Wilhelm treu zu sein.“ Zum Dritten schwört er dasselbe auf die Reliquien. ' +
          'Zuletzt kam die Lehnsübergabe: Je nach Art des Lehens übergab der Herr dem Vasallen ein Symbol. Diesen Teil beschreibt der Auszug in M2 nicht.'
      },
      {
        id: 'lehen-e3', operator: 'beurteilen',
        frage: 'Beurteile, ob das Lehnswesen für die Herrschaft im Mittelalter unentbehrlich war. (vgl. Buch S. 24, A6b)',
        tipp: 'Sachurteil: Denk mit den Augen der Menschen damals. Was hätte der König ohne Lehnswesen gehabt? Wo lagen die Schwächen? Zum Schluss ein begründetes Fazit.',
        begriffe: [
          { name: 'Lehnswesen', muster: ['lehnswesen'] },
          { name: 'Fürsten oder Kronvasallen', muster: ['fuerst', 'kronvasall'] },
          { name: 'Treue', muster: ['treue'] },
          { name: 'Untervasallen', muster: ['untervasall'] },
          { name: 'Behörden', muster: ['behoerde'] },
          { name: 'Reisekönig', muster: ['reisekoenig'] }
        ],
        punkte: [
          { text: 'Dafür: Ohne Behörden, Beamte und schriftliche Verfassung brauchte der König ein anderes Mittel, um im ganzen Reich zu herrschen.', p: 1 },
          { text: 'Dafür: Ohne eigenes Heer bekam er nur über seine Vasallen militärische Hilfe im Krieg.', p: 1 },
          { text: 'Dafür: Als Reisekönig konnte er nicht überall sein; die Kronvasallen übten für ihn Ämter in der Reichsverwaltung aus.', p: 1 },
          { text: 'Dagegen oder Schwäche: Alles hing von der Treue einzelner Personen ab; Untervasallen waren dem König nicht zur Treue verpflichtet.', p: 1 },
          { text: 'Dagegen oder Schwäche: Der König verdankte seine Macht den Fürsten, die ihn wählten, und war von ihnen abhängig.', p: 1 },
          { text: 'Dagegen: Es gab auch andere Mittel. Karl der Große regierte zum Beispiel auch mit Grafen und Boten.', p: 1 },
          { text: 'Begründetes Fazit aus Sicht der damaligen Zeit (z. B. unter den Bedingungen damals unentbehrlich, aber mit Schwächen), ohne heutige Wertmaßstäbe.', p: 1 }
        ],
        muster: 'Aus Sicht der Menschen damals war das Lehnswesen für die Herrschaft unentbehrlich. Die Könige hatten keine Behörden mit Beamten, Polizisten und Richtern, und es gab keine schriftliche Verfassung. Durch das Lehnswesen konnten sie trotzdem im ganzen Reich herrschen, denn die Kronvasallen übten für sie Ämter in der Reichsverwaltung aus. Da der König kein eigenes Heer hatte, bekam er nur über seine Vasallen militärische Hilfe im Krieg. Als Reisekönig war er außerdem darauf angewiesen, dass die Fürsten in seinem Interesse handelten, wenn er nicht da war. ' +
          'Andererseits machte das Lehnswesen den König abhängig. Er verdankte seine Macht den Fürsten, die ihn wählten, und alles hing von ihrer Treue ab. Die Untervasallen waren dem König nicht einmal zur Treue verpflichtet. Außerdem gab es auch andere Mittel: Karl der Große regierte zum Beispiel auch mit Grafen und Boten. ' +
          'Insgesamt war das Lehnswesen damals trotzdem unentbehrlich, weil es unter den Bedingungen damals kaum ein anderes Mittel gab, ein so großes Reich zusammenzuhalten. Es hatte aber Schwächen, weil es auf persönlicher Bindung beruhte.'
      },
      {
        id: 'lehen-e4', operator: 'vergleichen',
        frage: 'Vergleiche den Bericht über die Huldigung (M2) mit der Beschreibung der Vergabe von Lehen im Buch (S. 25). (vgl. Buch S. 24, A3)',
        quelle: 'lehen-galbert',
        material: '<p><strong>Die Vergabe von Lehen (Buch S. 25):</strong> Die Übergabe des Lehens bestand aus drei Teilen: 1. Mannschaft: Der Vasall gab seine zusammengelegten Hände in die Hände des Herrn; der umschloss sie als Zeichen von Schutz und gegenseitiger Treue. 2. Treueid des Vasallen: Der Vasall versprach Rat und Hilfe. 3. Lehnsübergabe an den Vasallen: Je nach Art des Lehens wird ein Symbol übergeben.</p>',
        tipp: 'Geh M2 Satz für Satz durch und ordne jede Stelle einem der drei Teile zu. Sammle dann Gemeinsamkeiten und Unterschiede und schreib zum Schluss ein Ergebnis.',
        begriffe: [
          { name: 'Mannschaft', muster: ['mannschaft'] },
          { name: 'Treueid', muster: ['treueid', 'eid'] },
          { name: 'Lehnsübergabe', muster: ['lehnsuebergabe', 'uebergabe', 'symbol'] },
          { name: 'Reliquien', muster: ['reliquie'] },
          { name: 'Gemeinsamkeit / Unterschied', muster: ['gemeinsam', 'unterschied', 'anders'] }
        ],
        punkte: [
          { text: 'Gemeinsamkeit Mannschaft: In M2 liegen die Hände des Vasallen in denen des Grafen. Im Buch gibt der Vasall seine zusammengelegten Hände in die Hände des Herrn.', p: 1 },
          { text: 'Gemeinsamkeit Treueid: In M2 verspricht der Vasall, dem Grafen treu zu sein und seinen Eid zu halten. Im Buch verspricht er mit dem Treueid Rat und Hilfe.', p: 1 },
          { text: 'Unterschied: In M2 fragt der Graf zuerst, ob der Vasall ohne Vorbehalte sein Gefolgsmann werden will, und der Vasall antwortet „Ich will es“.', p: 1 },
          { text: 'Unterschied: In M2 verbünden sich beide mit einem Kuss, und der Vasall schwört zusätzlich auf die Reliquien.', p: 1 },
          { text: 'Im Auszug von M2 fehlt die Lehnsübergabe mit einem Symbol.', p: 1 },
          { text: 'Ergebnis: Der Ablauf ist im Kern gleich (Mannschaft und Treueid). M2 schildert ihn ausführlicher, das Buch fasst ihn in drei Teilen zusammen.', p: 1 }
        ],
        muster: 'M2 und die Beschreibung im Buch haben viel gemeinsam. Im Buch gibt der Vasall bei der Mannschaft seine zusammengelegten Hände in die Hände des Herrn. Genau das beschreibt auch Galbert: Die Hände des Vasallen lagen in denen des Grafen. Auch den Treueid gibt es in beiden Texten. Im Buch verspricht der Vasall Rat und Hilfe, in M2 verspricht er, dem Grafen treu zu sein und seinen Eid zu halten. ' +
          'Es gibt aber auch Unterschiede. In M2 fragt der Graf zuerst, ob der Vasall ohne Vorbehalte sein Gefolgsmann werden will, und der Vasall antwortet: „Ich will es.“ Außerdem verbünden sich beide mit einem Kuss, und zum Dritten schwört der Vasall seine Treue noch einmal auf die Reliquien. Das alles steht nicht in der Beschreibung im Buch. Dafür fehlt im Auszug von M2 die Lehnsübergabe mit einem Symbol. ' +
          'Insgesamt ist der Ablauf im Kern gleich: Mannschaft und Treueid kommen in beiden Texten vor. M2 schildert die Huldigung aber viel ausführlicher, während das Buch sie in drei Teilen zusammenfasst.'
      }
    ],

    hoftag: {
      wissen: [
        {
          id: 'lehen-hw1', typ: 'eingabe',
          frage: 'Wie heißt die Leihgabe auf Lebenszeit, die ein Vasall von seinem Lehnsherrn erhielt? (Fachbegriff)',
          akzeptiert: ['Lehen', 'Lehn'],
          nicht: ['Zehnt', 'Zehnte', 'Hufe', 'Lehnsherr', 'Lehnswesen']
        },
        {
          id: 'lehen-hw2', typ: 'liste',
          frage: 'Nenne die drei Teile, aus denen die Vergabe eines Lehens bestand.',
          anzahl: 3,
          gruppen: [
            ['Mannschaft'],
            ['Treueid', 'Eid', 'Treueschwur', 'Lehnseid'],
            ['Lehnsübergabe', 'Lehensübergabe', 'Übergabe des Lehens', 'Übergabe', 'Symbol']
          ]
        },
        {
          id: 'lehen-hw3', typ: 'wahl',
          frage: 'Ein Ritter hat sein Lehen von einem Herzog erhalten. Wem ist er nach dem Buch zur Treue verpflichtet?',
          optionen: [
            'nur dem Herzog, seinem unmittelbaren Lehnsherrn',
            'nur dem König, dem obersten Lehnsherrn',
            'dem Herzog und dem König gleichermaßen',
            'niemandem, denn Ritter waren frei'
          ],
          richtig: 0
        },
        {
          id: 'lehen-hw4', typ: 'luecke',
          text: '{Herzöge|Ritter|Äbte}, Grafen und {Bischöfe|Ministerialen|Bauern} waren Vasallen des Königs. Man nannte sie {Kronvasallen|Untervasallen|Lehnsherren}. Der Herr erwartete von seinem Vasallen im Frieden {Rat|Abgaben|Frondienste} und im Kriegsfall {militärische Hilfe|den Zehnt|Geld}.'
        },
        {
          id: 'lehen-hw5', typ: 'matrix',
          frage: 'Von wem kommt was? Kreuze an (auch beides ist möglich).',
          zeilenKopf: 'Leistung', spaltenKopf: 'kommt',
          zeilen: ['Schutz', 'Lehen', 'Rat', 'militärische Hilfe', 'Treue'],
          spalten: ['vom Lehnsherrn', 'vom Vasallen'],
          richtig: [[true, false], [true, false], [false, true], [false, true], [true, true]]
        },
        {
          id: 'lehen-hw6', typ: 'behauptung',
          aussage: 'Im Schaubild des Lehnswesens stehen die Bauern ganz unten als Untervasallen.',
          stimmt: false,
          gruende: [
            'Bauern waren keine Vasallen. Unten stehen Ritter, Ministerialen, Äbte und Äbtissinnen.',
            'Bauern stehen in der Mitte, weil sie den Kronvasallen Abgaben zahlten.',
            'Bauern stehen ganz oben neben dem König, weil sie alle ernährten.'
          ],
          richtig: 0
        }
      ],

      material: [
        {
          id: 'lehen-hm1', quelle: 'lehen-tours',
          text: 'Diese Quelle steht nicht in deinem Buch. Sie stammt aus einer Sammlung von Musterurkunden aus der Stadt Tours im Frankenreich. „N.“ steht für einen Namen, den der Schreiber einsetzte.',
          items: [
            {
              id: 'lehen-hm1-1', typ: 'wahl', p: 1,
              frage: 'Wer spricht in der Quelle?',
              optionen: ['ein freier Mann, der nichts besitzt', 'ein Graf, der einen Vasallen sucht', 'ein König, der ein Lehen vergibt', 'ein Leibeigener, der freigelassen wird'],
              richtig: 0
            },
            {
              id: 'lehen-hm1-2', typ: 'mehrfach', p: 1,
              frage: 'Was verspricht der Mann seinem Herrn?',
              optionen: ['Dienst und Gehorsam, solange er lebt', 'sich nie aus dem Schutz des Herrn zu entfernen', 'jedes Jahr den Zehnt seiner Ernte', 'militärische Hilfe mit eigenen Rittern'],
              richtig: [0, 1]
            },
            {
              id: 'lehen-hm1-3', typ: 'behauptung', p: 2,
              aussage: 'Die Quelle beschreibt eine Belehnung: Der Mann wird Vasall und erhält ein Lehen.',
              stimmt: false,
              gruende: [
                'Der Mann bekommt Schutz, Nahrung und Kleidung, aber kein Lehen wie Land, eine Burg oder ein Recht.',
                'Der Mann ist unfrei und durfte deshalb kein Lehen erhalten.',
                'In der Quelle verspricht der Herr dem Mann überhaupt nichts.'
              ],
              richtig: 0
            },
            {
              id: 'lehen-hm1-4', typ: 'sortieren', p: 2,
              frage: 'Was hat die Quelle mit dem Lehnswesen gemeinsam, was ist anders? Ordne zu.',
              kategorien: ['wie im Lehnswesen', 'anders als im Lehnswesen'],
              items: [
                ['Der Mann begibt sich in den Schutz eines Herrn.', 0],
                ['Die Bindung gilt ein Leben lang.', 0],
                ['Der Mann schuldet seinem Herrn Dienst.', 0],
                ['Der Mann bekommt Nahrung und Kleidung statt Land, einer Burg oder eines Rechts.', 1],
                ['Der Mann ist arm und besitzt nichts.', 1]
              ]
            }
          ],
          erkl: {
            id: 'lehen-hm1-e', operator: 'einordnen',
            frage: 'Ordne die Quelle ein: Was für ein Text ist das, aus welcher Zeit, und wer begibt sich hier in wessen Schutz? Erkläre, was sie mit der Entstehung des Lehnswesens zu tun hat.',
            begriffe: [
              { name: 'Schutz', muster: ['schutz'] },
              { name: 'Dienst', muster: ['dienst'] },
              { name: 'Lehnswesen', muster: ['lehnswesen'] },
              { name: '8. Jahrhundert', muster: ['8 jahrhundert', '8 jh'] },
              { name: 'persönliche Bindung', muster: ['bindung', 'gebunden'] }
            ],
            punkte: [
              { text: 'Es ist eine Musterurkunde (Formel) aus Tours aus der Mitte des 8. Jahrhunderts; ein Schreiber setzte die Namen ein.', p: 1 },
              { text: 'Ein freier Mann ohne Besitz begibt sich in den Schutz eines Herrn, der ihn versorgt; dafür schuldet er ihm lebenslang Dienst und Gehorsam.', p: 1 },
              { text: 'Das ist eine persönliche Bindung mit Pflichten auf beiden Seiten, wie im Lehnswesen, das sich seit dem 8. Jahrhundert entwickelte.', p: 1 },
              { text: 'Unterschied: Der Mann erhält kein Lehen und ist kein Adliger; es geht um seine Versorgung, nicht um Herrschaft im Reich.', p: 1 }
            ],
            muster: 'Die Quelle ist eine Musterurkunde aus einer Formelsammlung aus Tours. Sie stammt aus der Mitte des 8. Jahrhunderts. Ein Schreiber konnte für „N.“ die echten Namen einsetzen. In der Formel begibt sich ein freier Mann, der nichts besitzt, in den Schutz eines Herrn. Der Herr soll ihn mit Nahrung und Kleidung versorgen. Dafür muss der Mann ihm ein Leben lang Dienst und Gehorsam leisten und darf seinen Schutz nicht verlassen. ' +
              'Damit zeigt die Quelle eine persönliche Bindung mit Pflichten auf beiden Seiten, wie es sie auch im Lehnswesen gab, das sich seit dem 8. Jahrhundert entwickelte. Anders als ein Vasall bekommt der Mann aber kein Lehen, und er ist kein Adliger, sondern arm. Es geht um sein Überleben und nicht um die Herrschaft im Reich.'
          }
        },
        {
          id: 'lehen-hm2', quelle: 'lehen-sachsenspiegel',
          text: 'Diese Bilder stammen aus einer Handschrift des Sachsenspiegels, eines Rechtsbuchs aus dem Mittelalter. Sie stehen so nicht in deinem Buch.',
          items: [
            {
              id: 'lehen-hm2-1', typ: 'wahl', p: 1,
              frage: 'Beschreibe den oberen Bildstreifen: Was tut der stehende Mann?',
              optionen: [
                'Er legt seine aneinandergelegten Hände in die Hände des sitzenden Herrn.',
                'Er überreicht dem sitzenden Herrn ein Schwert als Geschenk.',
                'Er kniet nieder und küsst dem sitzenden Herrn die Füße.',
                'Er nimmt vom sitzenden Herrn eine Fahne als Lehen entgegen.'
              ],
              richtig: 0
            },
            {
              id: 'lehen-hm2-2', typ: 'eingabe', p: 1,
              frage: 'Wie heißt dieser Teil der Lehnsvergabe? (Fachbegriff)',
              akzeptiert: ['Mannschaft'],
              nicht: ['Treueid', 'Lehnsübergabe', 'Lehnsuebergabe', 'Lehen']
            },
            {
              id: 'lehen-hm2-3', typ: 'wahl', p: 1,
              frage: 'Im unteren Bildstreifen steht ein Behälter auf einem Ständer. Welche Stelle aus M2 hilft dir, diese Szene zu deuten?',
              optionen: [
                '„Zum Dritten schwört er dasselbe auf die Reliquien …“',
                '„Darauf verbündeten sie sich mit einem Kuss …“',
                '„Der Graf fragte den künftigen Vasallen …“',
                '„… und er antwortete: ‚Ich will es.‘“'
              ],
              richtig: 0
            },
            {
              id: 'lehen-hm2-4', typ: 'behauptung', p: 1,
              aussage: 'Der Maler hat die Szenen genau so gezeichnet, wie er sie an einem bestimmten Tag gesehen hat.',
              stimmt: false,
              gruende: [
                'Die Bilder erklären die Regeln eines Rechtsbuchs. Sie zeigen typische Handlungen, keinen bestimmten Tag.',
                'Der Maler war bei jeder Lehnsvergabe im ganzen Reich selbst dabei.',
                'Die Bilder zeigen die Kaiserkrönung Karls des Großen im Jahr 800.'
              ],
              richtig: 0
            },
            {
              id: 'lehen-hm2-5', typ: 'sortieren', p: 2,
              frage: 'Was siehst du im Bild, was deutest du mit deinem Wissen? Ordne zu.',
              kategorien: ['sehe ich im Bild', 'deute ich mit Wissen'],
              items: [
                ['Ein Mann legt seine Hände in die Hände eines sitzenden Herrn.', 0],
                ['Der sitzende Herr trägt eine Krone.', 0],
                ['Auf einem Ständer steht ein Behälter.', 0],
                ['Der Mann wird gerade Gefolgsmann dieses Herrn.', 1],
                ['In dem Behälter liegen Reliquien.', 1],
                ['Die Männer leisten einen Eid.', 1]
              ]
            }
          ],
          erkl: {
            id: 'lehen-hm2-e', operator: 'untersuchen',
            frage: 'Untersuche, was die beiden Bildstreifen über die Vergabe von Lehen aussagen. Benutze die Begriffe Mannschaft und Treueid und nenne, was die Bilder nicht zeigen.',
            begriffe: [
              { name: 'Mannschaft', muster: ['mannschaft'] },
              { name: 'Treueid', muster: ['treueid', 'eid'] },
              { name: 'Reliquien', muster: ['reliquie'] },
              { name: 'Lehnsübergabe', muster: ['lehnsuebergabe', 'symbol'] }
            ],
            punkte: [
              { text: 'Oben: Mannschaft. Der Mann legt seine Hände in die Hände des sitzenden Herrn, als Zeichen von Schutz und gegenseitiger Treue.', p: 1 },
              { text: 'Unten: Eid auf Reliquien. Das passt zum Treueid, bei dem der Vasall Rat und Hilfe verspricht (vgl. M2).', p: 1 },
              { text: 'Einordnung: Bilderhandschrift des Sachsenspiegels, eines Rechtsbuchs, um 1300; die Bilder zeigen typische Handlungen nach dem Recht.', p: 1 },
              { text: 'Grenze: Die Lehnsübergabe mit einem Symbol und das Lehen selbst sind nicht zu sehen.', p: 1 }
            ],
            muster: 'Die Bilder stammen aus einer Bilderhandschrift des Sachsenspiegels, eines Rechtsbuchs, und sind um 1300 entstanden. Sie zeigen typische Handlungen, wie sie nach dem Recht ablaufen sollten. Im oberen Bildstreifen legt ein Mann seine aneinandergelegten Hände in die Hände eines sitzenden Herrn. Das ist die Mannschaft, ein Zeichen von Schutz und gegenseitiger Treue. ' +
              'Im unteren Streifen strecken Männer ihre Hände über einen Behälter. Das deute ich als Eid auf Reliquien, denn auch in M2 schwört der Vasall auf die Reliquien. Das passt zum Treueid, mit dem der Vasall Rat und Hilfe verspricht. Nicht zu sehen sind die Lehnsübergabe mit einem Symbol und das Lehen selbst.'
          }
        }
      ],

      schreiben: [
        {
          id: 'lehen-hs1', operator: 'erlaeutern',
          frage: 'Erläutere mithilfe des Schaubilds M3 die Beziehungen zwischen König, Kronvasallen und Untervasallen. Gehe auf die Pfeile „Schutz, Lehen“, „Kriegs- und Amtsdienste“ und „Treueid“ ein. (vgl. Buch S. 24, A4 und A5)',
          abb: 'lehnswesen', abbOpts: { beschriftet: true },
          begriffe: [
            { name: 'Kronvasallen', muster: ['kronvasall'] },
            { name: 'Untervasallen', muster: ['untervasall'] },
            { name: 'Lehnsherr', muster: ['lehnsherr'] },
            { name: 'Lehen', muster: ['lehen'] },
            { name: 'Treueid', muster: ['treueid', 'treue'] },
            { name: 'Kriegs- und Amtsdienste', muster: ['dienst'] }
          ],
          punkte: [
            { text: 'Der König steht oben; er ist der Lehnsherr der Kronvasallen.', p: 1 },
            { text: 'Kronvasallen sind Herzöge, Grafen und Bischöfe; sie übten Ämter in der Reichsverwaltung aus.', p: 1 },
            { text: 'Der König gibt ihnen Schutz und ein Lehen (rote Pfeile nach unten), zum Beispiel Land, eine Burg, ein Amt oder ein Recht.', p: 1 },
            { text: 'Die Kronvasallen leisten Kriegsdienste (militärische Hilfe im Krieg) und Amtsdienste (Ämter in der Reichsverwaltung), grüne Pfeile nach oben; im Frieden schulden sie Rat.', p: 1 },
            { text: 'Treueid (orange Doppelpfeile): Beide schulden einander Treue, das Verhältnis ist gegenseitig.', p: 1 },
            { text: 'Kronvasallen verleihen Teile ihres Lehens an Untervasallen weiter: Ritter, Ministerialen, Äbte und Äbtissinnen.', p: 1 },
            { text: 'Ein Kronvasall ist damit zugleich Vasall (des Königs) und Lehnsherr (seiner Untervasallen).', p: 1 },
            { text: 'Untervasallen sind nur ihrem unmittelbaren Lehnsherrn zur Treue verpflichtet, nicht mehr dem König.', p: 1 }
          ],
          muster: 'Das Schaubild M3 zeigt das Lehnswesen in drei Ebenen. Oben steht der König. Er ist der Lehnsherr der Kronvasallen. Das sind Herzöge, Grafen und Bischöfe, die Ämter in der Reichsverwaltung ausübten. Der König gibt ihnen Schutz und ein Lehen, zum Beispiel Land, eine Burg, ein Amt oder ein Recht. Das zeigen die roten Pfeile nach unten. Dafür leisten die Kronvasallen dem König Kriegsdienste, also militärische Hilfe im Krieg, und Amtsdienste, also Ämter in der Reichsverwaltung. Das zeigen die grünen Pfeile nach oben. Im Frieden schulden sie ihm außerdem Rat. ' +
            'Die orangen Doppelpfeile stehen für den Treueid: Beide Seiten schuldeten einander Treue, das Verhältnis war also gegenseitig. ' +
            'Die Kronvasallen konnten Teile ihres Lehens an Untervasallen weiterverleihen, zum Beispiel an Ritter, Ministerialen, Äbte und Äbtissinnen. Deshalb war ein Kronvasall zugleich Vasall des Königs und Lehnsherr seiner Untervasallen. Die Untervasallen waren aber nur ihrem unmittelbaren Lehnsherrn zur Treue verpflichtet, nicht mehr dem König.'
        },
        {
          id: 'lehen-hs2', operator: 'beurteilenBewerten',
          frage: 'Beurteile und bewerte, ob „Herrschaft durch persönliche Bindung“ eine gute Grundlage für die Herrschaft im Mittelalter war. (vgl. Buch S. 24, A6a)',
          tipp: 'Erst das Sachurteil mit den Augen der Menschen damals, dann das Werturteil: Nenne deinen heutigen Maßstab und deine Meinung.',
          begriffe: [
            { name: 'persönliche Bindung', muster: ['bindung'] },
            { name: 'Treueid', muster: ['treueid', 'treue'] },
            { name: 'Lehen', muster: ['lehen'] },
            { name: 'Untervasallen', muster: ['untervasall'] },
            { name: 'Verfassung', muster: ['verfassung'] }
          ],
          punkte: [
            { text: 'Damals: Ohne Behörden, eigenes Heer und Verfassung sicherte die persönliche Bindung dem König Rat und militärische Hilfe im ganzen Reich; der Vasall erhielt dafür Schutz und ein Lehen.', p: 1, art: 'sach' },
            { text: 'Herrschaft beruhte auf Beziehungen zwischen Personen (Treue, Gegenseitigkeit), nicht auf Ämtern, Gesetzen oder einer Verfassung.', p: 1, art: 'sach' },
            { text: 'Damals: Schwäche. Alles hing von der Treue einzelner Personen ab; Untervasallen waren dem König nicht zur Treue verpflichtet.', p: 1, art: 'sach' },
            { text: 'Ein begründetes Sachurteil als Fazit aus Sicht der damaligen Zeit.', p: 1, art: 'sach' },
            { text: 'Ein heutiger Maßstab wird offen genannt (z. B. Herrschaft nach Gesetzen und Verfassung, Gleichheit, Mitbestimmung).', p: 1, art: 'wert' },
            { text: 'Das Lehnswesen wird an diesem Maßstab gemessen und begründet beurteilt (z. B. Macht hing an Personen statt an Gesetzen; nur Adlige und hohe Geistliche bekamen Lehen).', p: 2, art: 'wert' },
            { text: 'Die eigene Meinung wird klar formuliert („Ich finde …, weil …“).', p: 1, art: 'wert' }
          ],
          muster: 'Sachurteil: Aus Sicht der Menschen damals war die Herrschaft durch persönliche Bindung eine sinnvolle Grundlage. Der König hatte keine Behörden, kein eigenes Heer und keine schriftliche Verfassung. Durch Lehen und Treueid bekam er trotzdem Rat, Kriegsdienste und Amtsdienste im ganzen Reich. Auch die Vasallen hatten etwas davon, denn sie erhielten Schutz und ein Lehen. Die Herrschaft beruhte also auf Beziehungen zwischen Personen, auf Treue und Gegenseitigkeit, und nicht auf Ämtern, Gesetzen oder einer Verfassung. Andererseits hing alles von der Treue einzelner Menschen ab, und die Untervasallen waren dem König nicht einmal zur Treue verpflichtet. Insgesamt war die persönliche Bindung damals eine brauchbare, aber unsichere Grundlage. ' +
            'Werturteil: Für mich ist entscheidend, dass Herrschaft an Gesetze gebunden ist, die für alle gleich gelten. Aus heutiger Sicht finde ich die Herrschaft durch persönliche Bindung deshalb keine gute Grundlage, weil die Macht davon abhing, wer wem treu war, und nicht von einer Verfassung. Außerdem bekamen nur Adlige und hohe Geistliche Lehen, die meisten Menschen hatten keinen Einfluss.'
        }
      ]
    },

    geruechte: [
      { id: 'lehen-g1', aussage: 'Ein Lehen war eine Leihgabe auf Lebenszeit.', stimmt: true, erkl: 'Stimmt: Das Lehen war ein lebenslang geliehenes Gut, kein Geschenk.' },
      { id: 'lehen-g2', aussage: 'Der König im Mittelalter regierte mit Tausenden von Beamten.', stimmt: false, erkl: 'Erfunden: Er hatte keine Behörden und war deshalb auf die Fürsten angewiesen.' },
      { id: 'lehen-g3', aussage: 'Auch Bischöfe konnten Vasallen des Königs sein.', stimmt: true, erkl: 'Stimmt: Herzöge, Grafen und Bischöfe waren Kronvasallen.' },
      { id: 'lehen-g4', aussage: 'Untervasallen waren direkt dem König zur Treue verpflichtet.', stimmt: false, erkl: 'Erfunden: Sie waren nur ihrem unmittelbaren Lehnsherrn verpflichtet, nicht mehr dem König.' },
      { id: 'lehen-g5', aussage: 'Bei der Mannschaft legte der Vasall seine Hände in die Hände des Herrn.', stimmt: true, erkl: 'Stimmt: ein Zeichen von Schutz und gegenseitiger Treue.' },
      { id: 'lehen-g6', aussage: 'Als Lehen konnte nur Land vergeben werden.', stimmt: false, erkl: 'Erfunden: Auch Burgen, Ämter und Rechte wie das Münzrecht wurden als Lehen vergeben.' },
      { id: 'lehen-g7', aussage: 'Das Lehnswesen entwickelte sich seit dem 8. Jahrhundert.', stimmt: true, erkl: 'Stimmt: So steht es im Buch auf S. 24.' },
      { id: 'lehen-g8', aussage: 'Im Schaubild des Lehnswesens stehen die Bauern ganz unten.', stimmt: false, erkl: 'Erfunden: Im Schaubild kommen keine Bauern vor. Unten stehen die Untervasallen.' },
      { id: 'lehen-g9', aussage: 'Im Mittelalter verdankte ein König seine Macht oft den Fürsten, die ihn zum König wählten.', stimmt: true, erkl: 'Stimmt: So steht es im Buch auf S. 24. Auch nach der Krönung brauchte der König die Fürsten.' },
      { id: 'lehen-g10', aussage: 'Eine schriftliche Verfassung regelte im Mittelalter die Ordnung im Reich.', stimmt: false, erkl: 'Erfunden: Eine schriftliche Verfassung gab es noch nicht. Deshalb waren persönliche Bindungen so wichtig.' }
    ],

    schatz: [
      {
        id: 'lehen-s1', titel: 'Ein Stäbchen als Symbol',
        text: 'Der Auszug in deinem Buch endet mit dem Eid auf die Reliquien. Galberts Bericht geht aber noch weiter: Der Graf hielt ein kleines Stäbchen in der Hand und übergab damit allen, die ihm gehuldigt hatten, ihr Lehen. Das Stäbchen war das Symbol der Lehnsübergabe, also der dritte Teil, der im Auszug fehlt. Die Huldigung fand im Jahr 1127 in Brügge in Flandern statt. Der Graf ist Wilhelm aus dem Haus der Normandie, der 1127 Graf von Flandern wurde, nicht Wilhelm der Eroberer.',
        nachweis: 'Galbert von Brügge, Bericht über die Ermordung Karls des Guten, Grafen von Flandern, Kap. 56 (Ausgabe H. Pirenne, 1891, S. 89); englische Übersetzung: Medieval Sourcebook, Fordham University, „Fief Ceremonies, 12th Century“.'
      },
      {
        id: 'lehen-s2', titel: 'Fahne oder Zepter',
        text: 'Welches Symbol bei der Lehnsübergabe überreicht wurde, hing vom Lehen ab. Nach dem Sachsenspiegel belehnte der Herrscher die weltlichen Fürsten mit einer Fahne, die geistlichen Fürsten, zum Beispiel Bischöfe, mit einem Zepter. Deshalb sprach man von Fahnlehen und Zepterlehen.',
        nachweis: 'Sachsenspiegel (Eike von Repgow, um 1220 bis 1235), Landrecht Buch III, Art. 60 § 1; vgl. den Artikel „Fahnlehen“ in der deutschsprachigen Wikipedia.'
      }
    ]
  });
})();
