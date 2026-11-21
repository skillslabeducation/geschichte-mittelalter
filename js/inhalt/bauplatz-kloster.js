/* Bauplatz 7: Kloster – Mönche und Nonnen (Buch S. 40/41) */
(function () {
  'use strict';
  var W = (window.W = window.W || {});
  W.bauplaetze = W.bauplaetze || [];

  W.bauplaetze.push({
    id: 'kloster', nr: 7, titel: 'Kloster', thema: 'Mönche und Nonnen', zeit: 'ab dem 6. Jh.', buch: 'S. 40/41', checkliste: 4,
    chronist: 'Willkommen in meinem Kloster, hier schreibe ich die Chronik des Tals. Gebetet, gearbeitet und gelernt wird bei uns ab drei Uhr morgens.',
    leitfrage: 'Das Kloster: eine eigene Welt? Wie lebten Mönche und Nonnen, und welche Aufgaben erfüllten die Klöster?',

    /* ---------- Verstehen ---------- */
    karten: [
      {
        titel: 'Warum entstand das Mönchtum?',
        text: '<p>Das Wort <dfn>Mönch</dfn> kommt vom griechischen „monachos“: Einsiedler. Die ersten christlichen Mönche gab es im Orient. ' +
          'Sie zogen sich in die Wüsten Ägyptens und Syriens zurück.</p>' +
          '<p>Durch Enthaltsamkeit, die <dfn>Askese</dfn>, wollten sie Christus nahekommen.</p>' +
          '<p>In Westeuropa entstand zuerst in Irland und Schottland eine andere Art des Mönchtums. Die Mönche lösten sich von Familie, ' +
          'Freunden und Heimat, aber sie zogen sich nicht in die Einsamkeit zurück. Sie gingen als <dfn>Missionare</dfn> in die Welt, ' +
          'um das Wort Gottes zu verbreiten. Dabei gründeten sie zahlreiche Klöster.</p>',
        merk: 'Die ersten Mönche lebten als Einsiedler in den Wüsten Ägyptens und Syriens. Mönche aus Irland und Schottland zogen dagegen als Missionare in die Welt und gründeten Klöster.',
        achtung: '<strong>Aufgepasst</strong>: „Monachos“ heißt Einsiedler. Die Mönche aus Irland und Schottland lebten aber gerade nicht in der Einsamkeit, sondern zogen als Missionare durch die Welt.'
      },
      {
        titel: 'Benedikt und die drei Gelübde',
        text: '<p>Als Urvater des Mönchtums im Süden und Westen Europas gilt <strong>Benedikt von Nursia</strong> (480–547). ' +
          'Er gründete das <dfn>Kloster</dfn> Montecassino südlich von Rom. Dort stellte er eine <dfn>Ordensregel</dfn> für Mönche und Nonnen auf.</p>' +
          '<p>Wer nach dieser Ordnung lebte, gehörte zur Mönchsgemeinschaft, dem <dfn>Orden</dfn>. Seine Mitglieder heißen ' +
          '<dfn>Benediktiner</dfn> und Benediktinerinnen. Die Regel verlangte drei <dfn>Gelübde</dfn>, also Versprechen vor Gott:</p>' +
          '<ul><li>ein Leben lang im Kloster bleiben,</li><li>auf Eigentum und Ehe verzichten,</li>' +
          '<li>gehorsam sein gegenüber dem Leiter des Klosters, dem <dfn>Abt</dfn>. Ein Frauenkloster leitete eine <dfn>Äbtissin</dfn>.</li></ul>' +
          '<p>In späteren Jahrhunderten entstanden weitere Orden wie die Zisterzienser, Franziskaner und Dominikaner. ' +
          'Auch Frauen gründeten neue Orden. Eine <dfn>Nonne</dfn> lebte also genauso nach einer Regel wie ein Mönch.</p>',
        merk: 'Benedikt von Nursia (480–547) gründete Montecassino und schrieb Regeln für Mönche und Nonnen. Seine Benediktiner und Benediktinerinnen legten drei Gelübde ab: lebenslang im Kloster bleiben, auf Eigentum und Ehe verzichten, dem Abt oder der Äbtissin gehorchen.',
        achtung: '<strong>Aufgepasst</strong>: Ein Orden ist hier keine Auszeichnung zum Anstecken, sondern eine Gemeinschaft von Mönchen oder Nonnen, die nach derselben Regel leben.'
      },
      {
        titel: 'Ora et labora: Was Klöster leisteten',
        text: '<p>Das Motto „<dfn>Ora et labora</dfn>“ heißt „bete und arbeite“. Es stand für den Alltag der Mönche und Nonnen, ' +
          'die sich nicht nur dem Gebet widmeten.</p>' +
          '<p>Klöster waren nicht nur religiöse Zentren, sondern auch vielseitige Wirtschaftsbetriebe und Herrschaftseinrichtungen:</p>' +
          '<ul>' +
          '<li><strong>Religiöse Zentren:</strong> Gebet und Gottesdienst bestimmten den Tag.</li>' +
          '<li><strong>Wirtschaftsbetriebe:</strong> Jede Klostergemeinschaft sorgte für ihren eigenen Lebensunterhalt, die <dfn>Selbstversorgung</dfn>. ' +
          'Sie arbeitete auf dem Feld, im Klostergarten und züchtete Nutztiere. Es gab Spezialisten wie Schreiner, Bäcker und Apotheker.</li>' +
          '<li><strong>Bildungszentren:</strong> In Schulen gaben die Klöster vorhandenes Wissen weiter und ergänzten es durch eigene Forschungen.</li>' +
          '<li><strong>Herrschaft:</strong> Klöster verwalteten große Ländereien in ihrer Umgebung und hielten dabei Kontakt zur weltlichen Macht.</li>' +
          '</ul>',
        merk: 'Klöster waren religiöse Zentren, Wirtschaftsbetriebe, Bildungszentren und Herrschaftseinrichtungen. Ihr Motto hieß „ora et labora“: bete und arbeite.',
        achtung: '<strong>Aufgepasst</strong>: Mönche und Nonnen haben nicht den ganzen Tag gebetet. Zum Alltag gehörten genauso Arbeit und Studium.'
      },
      {
        titel: 'Einen Klosterplan lesen',
        abb: 'klosterplan', abbOpts: { beschriftet: true },
        quelle: 'kloster-plan',
        text: '<p>Der <strong>Klosterplan von St. Gallen</strong> stammt von etwa 820. Ein Kloster genau nach diesem Plan wurde nie gebaut. ' +
          'Der Plan zeigt aber, was zu einem großen Kloster gehören sollte. Hier siehst du eine vereinfachte Zeichnung und das Original.</p>' +
          '<p><strong>So arbeitest du mit dem Plan:</strong> Ordne jedes Gebäude einem Bereich des Klosterlebens zu (Buch S. 41, A1).</p>' +
          '<ul>' +
          '<li><strong>Glaube und Gebet:</strong> die Kirche, mitten im Kloster</li>' +
          '<li><strong>Leitung:</strong> das Haus des Abtes</li>' +
          '<li><strong>Bildung:</strong> Schule, Bibliothek und das <dfn>Noviziat</dfn> für die Neuen</li>' +
          '<li><strong>Versorgung und Handwerk:</strong> Küche, Brauerei und Bäckerei, Mühlen, Handwerkshaus, Scheune, Ställe, Garten</li>' +
          '<li><strong>Kranke und Gäste:</strong> <dfn>Hospital</dfn>, Ärztehaus mit Apotheke, Gästehaus und <dfn>Herberge</dfn></li>' +
          '</ul>' +
          '<p>Achte auch auf die Lage: Die Kirche steht in der Mitte, und fast alles, was man zum Leben braucht, liegt innerhalb der Mauer.</p>',
        merk: 'Der Klosterplan von St. Gallen (um 820) zeigt ein ideales Kloster, das nie gebaut wurde: in der Mitte die Kirche, rundherum Gebäude für Bildung, Versorgung, Handwerk, Kranke und Gäste.',
        achtung: '<strong>Aufgepasst</strong>: Der Plan ist keine Zeichnung eines echten Klosters. Er zeigt, wie ein Kloster sein sollte. Umgesetzt wurde er nie.'
      },
      {
        titel: 'Ein Tag im Kloster',
        abb: 'tagesablauf', abbOpts: { beschriftet: true },
        text: '<p>Ein normaler Tag im Kloster begann frühmorgens um 3 Uhr mit dem ersten Gebet, der <dfn>Matutin</dfn>. ' +
          'Etwa alle drei Stunden folgte eine weitere Gebetszeit, bis zur <dfn>Komplet</dfn> um 21 Uhr.</p>' +
          '<p><strong>So liest du das Schaubild (M3):</strong> Links steht die Uhrzeit, rechts die Tätigkeit. Die roten Balken sind die sieben Gebetszeiten:</p>' +
          '<ul><li>Matutin 3 Uhr, Prim 6 Uhr, Terz 9 Uhr, Sext 12 Uhr,</li><li>Non 15 Uhr, Vesper 18 Uhr, Komplet 21 Uhr.</li></ul>' +
          '<p>Dazwischen lagen Meditation, Studium und Arbeit, Essen und Reinigung. Freizeit gab es erst am Abend. ' +
          'Nachts wurde geschlafen oder Nachtwache gehalten.</p>',
        merk: 'Der Tag im Kloster war fest geregelt: sieben Gebetszeiten von der Matutin um 3 Uhr bis zur Komplet um 21 Uhr, dazwischen Studium und Arbeit.',
        achtung: '<strong>Aufgepasst</strong>: Die Matutin ist mitten in der Nacht, um 3 Uhr, nicht am Morgen. Im Buch heißt das letzte Gebet „Complet“, meist schreibt man „Komplet“.'
      },
      {
        titel: 'Eine Ordensregel als Quelle lesen',
        quelle: 'kloster-regel',
        text: '<p>Benedikt schrieb um 540 eine Regel für die Mönche und Nonnen seines Ordens (M2). So prüfst du diese Quelle:</p>' +
          '<ul>' +
          '<li><strong>Wer spricht?</strong> Benedikt von Nursia, der Gründer des Ordens. Er legt fest, wie seine Mönche und Nonnen leben sollen.</li>' +
          '<li><strong>Was verlangt er?</strong> Gott und den Nächsten lieben, Verzicht (Fasten, sich Genüssen nicht hingeben) und Hilfe für andere: ' +
          'Arme bewirten, Kranke besuchen, Tote begraben. Außerdem sollen sie sich dem Treiben der Welt entziehen.</li>' +
          '<li><strong>Was passiert bei Verstößen?</strong> Zweimal im Geheimen ermahnen, dann öffentlich zurechtweisen, dann Ausschließung, ' +
          'zuletzt eine körperliche Strafe.</li>' +
          '<li><strong>Was verrät die Quelle nicht?</strong> Eine Regel zeigt, wie das Leben sein <em>sollte</em>. Ob sich alle daran hielten, ' +
          'steht nicht darin. Die Strafen zeigen aber: Es gab Brüder, die gegen die Regel verstießen.</li>' +
          '</ul>',
        merk: 'Eine Ordensregel zeigt, wie Mönche und Nonnen leben sollten. Die Strafen in der Regel verraten, dass es auch Verstöße gab.',
        achtung: '<strong>Aufgepasst</strong>: Wer gegen die Regel verstieß, wurde nicht sofort bestraft. Zuerst wurde er zweimal im Geheimen ermahnt.'
      }
    ],

    /* ---------- Üben ---------- */
    ueben: [
      {
        id: 'kloster-u1', typ: 'wahl',
        frage: 'Das Wort „Mönch“ kommt vom griechischen „monachos“. Was bedeutet es?',
        optionen: ['Einsiedler', 'Bruder', 'Beter', 'Diener'], richtig: 0,
        erkl: 'Die ersten Mönche zogen sich als Einsiedler in die Wüsten Ägyptens und Syriens zurück.'
      },
      {
        id: 'kloster-u2', typ: 'eingabe',
        frage: 'Die ersten Mönche wollten durch Enthaltsamkeit Christus nahekommen. Wie heißt der Fachbegriff für diese Enthaltsamkeit?',
        akzeptiert: ['Askese'], nicht: ['Gelübde', 'Fasten'],
        erkl: 'Askese heißt Enthaltsamkeit, also Verzicht auf Genüsse und Bequemlichkeit.'
      },
      {
        id: 'kloster-u3', typ: 'wahl',
        frage: 'Wodurch unterschieden sich die Mönche aus Irland und Schottland von den ersten Mönchen im Orient?',
        optionen: [
          'Sie zogen als Missionare in die Welt und gründeten Klöster.',
          'Sie zogen sich als Einsiedler in die Wüste zurück.',
          'Sie blieben bei ihren Familien und arbeiteten als Bauern.',
          'Sie lebten als Gelehrte am Hof des Königs.'
        ], richtig: 0,
        erkl: 'Sie lösten sich von Familie und Heimat, zogen sich aber nicht in die Einsamkeit zurück, sondern verbreiteten das Wort Gottes.'
      },
      {
        id: 'kloster-u4', typ: 'mehrfach',
        frage: 'Welche drei Gelübde verlangte die Regel des Benedikt von den Benediktinern und Benediktinerinnen?',
        optionen: ['ein Leben lang im Kloster bleiben', 'auf Eigentum und Ehe verzichten', 'gehorsam sein gegenüber dem Abt',
          'als Missionar in die Welt ziehen', 'jedes Jahr in der Wüste fasten', 'dem König im Krieg dienen'],
        richtig: [0, 1, 2],
        erkl: 'Gelübde sind Versprechen vor Gott. In einem Frauenkloster galt der Gehorsam der Äbtissin.'
      },
      {
        id: 'kloster-u5', typ: 'luecke',
        text: 'Als Urvater des Mönchtums im Süden und Westen Europas gilt Benedikt von {Nursia|Laon|Bingen}. Er lebte von {480 bis 547|748 bis 814|971 bis 1030} ' +
          'und gründete das Kloster {Montecassino|St. Gallen|Aachen} südlich von {Rom|Paris|Köln}.',
        erkl: 'Laon und Bingen gehören zu Adalbero und Hildegard (Ständegesellschaft), 748 bis 814 sind die Lebensdaten Karls des Großen.'
      },
      {
        id: 'kloster-u6', typ: 'zuordnen',
        frage: 'Ordne jedem Begriff die passende Erklärung zu.',
        paare: [
          ['Gelübde', 'Versprechen vor Gott'],
          ['Orden', 'Gemeinschaft, die nach derselben Regel lebt'],
          ['Abt', 'Leiter eines Klosters'],
          ['Äbtissin', 'Leiterin eines Frauenklosters'],
          ['Missionare', 'verbreiten das Wort Gottes in der Welt']
        ]
      },
      {
        id: 'kloster-u7', typ: 'wahl', quelle: 'kloster-regel48',
        frage: 'Diese Stelle aus der Regel kennst du noch nicht. Wann sind die Brüder laut Benedikt „wirklich Mönche“?',
        optionen: ['wenn sie von der Arbeit ihrer Hände leben', 'wenn sie den ganzen Tag in der Kirche beten',
          'wenn sie viele eigene Bücher besitzen', 'wenn sie nie mit anderen Menschen sprechen'],
        richtig: 0,
        erkl: 'Das passt zum Motto „ora et labora“ und zur Selbstversorgung der Klöster.'
      },
      {
        id: 'kloster-u8', typ: 'behauptung',
        aussage: 'Mönche und Nonnen haben im Kloster den ganzen Tag gebetet und sonst nichts getan.',
        stimmt: false,
        gruende: [
          'Nach dem Motto „ora et labora“ gehörten auch Arbeit und Studium zum Alltag.',
          'Gebetet wurde im Kloster nur sonntags in der Kirche.',
          'Mönche mussten als Missionare ständig auf Reisen sein.'
        ],
        richtig: 0,
        erkl: 'Zwischen den sieben Gebetszeiten lagen Studium und Arbeit (M3).'
      },
      {
        id: 'kloster-u9', typ: 'liste',
        frage: 'Nenne drei Aufgaben, die Klöster im Mittelalter erfüllten. Ein bis drei Wörter je Feld genügen.',
        anzahl: 3,
        gruppen: [
          ['religiöses Zentrum', 'religiöse Zentren', 'Religion', 'Gebet', 'beten', 'Gottesdienst', 'Glaube'],
          ['Wirtschaftsbetrieb', 'Wirtschaftsbetriebe', 'Wirtschaft', 'Selbstversorgung', 'Landwirtschaft', 'Handwerk', 'Arbeit', 'arbeiten'],
          ['Bildungszentrum', 'Bildungszentren', 'Bildung', 'Schule', 'Schulen', 'Forschung', 'Unterricht', 'Wissen'],
          ['Verwaltung von Ländereien', 'Verwaltung großer Ländereien', 'Verwaltung', 'Ländereien', 'Herrschaft', 'Herrschaftseinrichtung', 'Herrschaftseinrichtungen'],
          ['Kranke pflegen', 'Krankenpflege', 'Kranke besuchen', 'Hospital', 'Arme bewirten', 'Armenfürsorge', 'Gäste aufnehmen', 'Herberge']
        ],
        erkl: 'Klöster waren religiöse Zentren, Wirtschaftsbetriebe, Bildungszentren und verwalteten große Ländereien. Laut Regel kümmerten sie sich auch um Arme und Kranke.'
      },
      {
        id: 'kloster-u10', typ: 'beschriften', abb: 'klosterplan',
        frage: 'Beschrifte den vereinfachten Klosterplan von St. Gallen (vgl. Buch S. 40, M1).',
        strukturen: ['kirche', 'bibliothek', 'schule', 'abt', 'noviziat', 'hospital', 'aerzte', 'gaeste', 'herberge', 'kueche', 'brauerei', 'friedhof'],
        erkl: 'Die Kirche liegt in der Mitte. Rechts am Rand liegen Hospital, Noviziat und Friedhof, oben Gästehaus, Schule und das Haus des Abtes.'
      },
      {
        id: 'kloster-u11', typ: 'sortieren', abb: 'klosterplan', abbOpts: { beschriftet: true },
        frage: 'Zu welchem Bereich des Klosterlebens gehörte das Gebäude? (vgl. Buch S. 41, A1)',
        kategorien: ['Glaube und Gebet', 'Bildung', 'Versorgung und Handwerk', 'Kranke und Gäste'],
        items: [
          ['Kirche', 0], ['Bibliothek', 1], ['Schule', 1], ['Brauerei und Bäckerei', 2], ['Mühlen', 2],
          ['Handwerkshaus', 2], ['Hospital', 3], ['Ärztehaus mit Apotheke', 3], ['Herberge', 3], ['Gästehaus', 3]
        ]
      },
      {
        id: 'kloster-u12', typ: 'behauptung', quelle: 'kloster-plan',
        frage: 'Sieh dir den originalen Plan an. Ein Mitschüler behauptet:',
        aussage: 'Der Klosterplan von St. Gallen zeigt, wie das Kloster St. Gallen um 820 wirklich aussah.',
        stimmt: false,
        gruende: [
          'Der Plan wurde nie umgesetzt. Er zeigt ein Kloster, wie es sein sollte.',
          'Der Plan stammt erst aus dem 19. Jahrhundert.',
          'Auf dem Plan ist nur die Kirche eingezeichnet.'
        ],
        richtig: 0,
        erkl: 'Der Plan von etwa 820 zeigt ein ideales Kloster mit vielen Gebäuden. Gebaut wurde es so nie.'
      },
      {
        id: 'kloster-u13', typ: 'reihenfolge',
        frage: 'Bringe die sieben Gebetszeiten des Tages in die richtige Reihenfolge, von der Nacht bis zum Abend.',
        schritte: ['Matutin', 'Prim', 'Terz', 'Sext', 'Non', 'Vesper', 'Komplet'],
        erkl: 'Eselsbrücke: Prim, Terz, Sext und Non bedeuten auf Lateinisch die erste, dritte, sechste und neunte Stunde des Tages.'
      },
      {
        id: 'kloster-u14', typ: 'zuordnen', abb: 'tagesablauf', abbOpts: { beschriftet: true },
        frage: 'Lies den Tagesablauf (M3). Was machten die Mönche und Nonnen zu dieser Uhrzeit?',
        paare: [
          ['1 Uhr nachts', 'Schlafen oder Nachtwache'],
          ['4 Uhr', 'Meditation'],
          ['10 Uhr', 'Studium und Arbeit'],
          ['18 Uhr', 'Gebet (Vesper)'],
          ['20 Uhr', 'Freizeit']
        ]
      },
      {
        id: 'kloster-u15', typ: 'zahl', abb: 'tagesablauf', abbOpts: { beschriftet: true },
        frage: 'Lies den Tagesablauf (M3): Wie viele Stunden lagen zwischen der Komplet am Abend und der Matutin in der Nacht?',
        antwort: 6, einheit: 'Stunden',
        erkl: 'Von 21 Uhr bis 3 Uhr sind es 6 Stunden. In dieser Zeit wurde geschlafen oder Nachtwache gehalten.'
      },
      {
        id: 'kloster-u16', typ: 'mehrfach', quelle: 'kloster-regel',
        frage: 'Lies die Regel des Benedikt (M2). Welche Forderungen stehen darin?',
        optionen: ['Arme bewirten', 'Kranke besuchen', 'Das Fasten lieben', 'Sich dem Treiben der Welt entziehen',
          'Für das Kloster viel Besitz sammeln', 'Den Abt jedes Jahr neu wählen'],
        richtig: [0, 1, 2, 3],
        erkl: 'Die Regel verlangt Verzicht und Hilfe für andere. Von Besitz oder Wahlen steht in M2 nichts.'
      },
      {
        id: 'kloster-u17', typ: 'reihenfolge', quelle: 'kloster-regel',
        frage: 'Ein Bruder handelt gegen die Regel. Was passiert laut M2 nacheinander, wenn er sich nicht bessert?',
        schritte: ['zweimal im Geheimen ermahnen', 'öffentlich vor allen zurechtweisen', 'Ausschließung', 'körperliche Strafe'],
        erkl: 'Die Strafen werden Schritt für Schritt härter. Die körperliche Strafe trifft den, der nicht versteht, was die Ausschließung bedeutet.'
      },
      {
        id: 'kloster-u18', typ: 'wahl', operatorTraining: true,
        frage: 'Die Aufgabe lautet: „Beurteile, warum die Klöster im Mittelalter eigene Regeln brauchten.“ Welcher Satz gehört in ein Sachurteil?',
        optionen: [
          'Aus Sicht der Menschen damals waren Regeln nötig, weil viele Menschen ein Leben lang eng zusammenlebten.',
          'Ich finde, dass körperliche Strafen heute auf keinen Fall mehr erlaubt sein dürfen.',
          'In M2 steht, dass man Kranke besuchen und Tote begraben soll.',
          'Benedikt von Nursia lebte von 480 bis 547 und gründete Montecassino.'
        ],
        richtig: 0,
        erkl: 'Ein Sachurteil begründet mit den Augen der Menschen damals. „Ich finde …“ mit heutigen Maßstäben ist ein Werturteil. Die anderen Sätze geben nur Informationen wieder.'
      },
      {
        id: 'kloster-u19', typ: 'zeitleiste',
        frage: 'Ordne die Ereignisse den Jahrhunderten zu.',
        abschnitte: ['5. Jh.', '6. Jh.', '9. Jh.'],
        ereignisse: [
          ['Absetzung des letzten weströmischen Kaisers', 0, '476'],
          ['Benedikt von Nursia wird geboren', 0, '480'],
          ['Benedikt schreibt seine Ordensregel', 1, 'um 540'],
          ['Benedikt stirbt', 1, '547'],
          ['Karl der Große stirbt in Aachen', 2, '814'],
          ['Klosterplan von St. Gallen', 2, 'um 820']
        ],
        erkl: 'Das 5. Jahrhundert umfasst die Jahre 401 bis 500, das 6. die Jahre 501 bis 600 und das 9. die Jahre 801 bis 900.'
      },
      {
        id: 'kloster-u20', typ: 'eingabe',
        frage: 'Ein Kloster für Männer leitete ein Abt. Wie hieß die Leiterin eines Frauenklosters?',
        akzeptiert: ['Äbtissin'], nicht: ['Abt', 'Nonne'],
        erkl: 'Auch Frauen lebten nach Ordensregeln und gründeten eigene Orden. An der Spitze eines Frauenklosters stand eine Äbtissin.'
      }
    ],

    /* ---------- Schreiben ---------- */
    erklaeren: [
      {
        id: 'kloster-e1', operator: 'erklaeren',
        frage: 'Erkläre die drei Gelübde der Benediktiner und Benediktinerinnen und das Motto „ora et labora“. Gehe darauf ein, was sie für das Leben im Kloster bedeuteten. (vgl. Buch S. 40, Darstellungstext)',
        tipp: 'Nenne jedes Gelübde und sag dann, was es im Alltag bedeutete. Beim Motto hilft die Frage: Was taten Mönche und Nonnen außer beten?',
        begriffe: [
          { name: 'Gelübde', muster: ['geluebd'] },
          { name: 'Eigentum', muster: ['eigentum', 'besitz'] },
          { name: 'Abt / Äbtissin', muster: ['abt', 'aebtissin'] },
          { name: 'ora et labora', muster: ['ora et labora', 'bete und arbeite'] },
          { name: 'Selbstversorgung', muster: ['selbstversorg', 'selbst versorg', 'lebensunterhalt'] }
        ],
        punkte: [
          { text: 'Gelübde = Versprechen vor Gott', p: 1 },
          { text: 'erstes Gelübde: ein Leben lang im Kloster bleiben', p: 1 },
          { text: 'zweites Gelübde: auf Eigentum und Ehe verzichten', p: 1 },
          { text: 'drittes Gelübde: gehorsam sein gegenüber dem Abt bzw. der Äbtissin', p: 1 },
          { text: 'Bedeutung: ohne eigene Familie und Besitz ganz für Gott leben, in der Gemeinschaft des Ordens', p: 1 },
          { text: '„ora et labora“ heißt „bete und arbeite“', p: 1 },
          { text: 'im Alltag wechseln Gebet und Arbeit (Feld, Garten, Tiere, Werkstatt, Studium) ab', p: 1 },
          { text: 'Grund: Die Gemeinschaft sorgte durch ihre Arbeit selbst für ihren Lebensunterhalt (Selbstversorgung)', p: 1 }
        ],
        muster: 'Benediktiner und Benediktinerinnen legten drei Gelübde ab. Ein Gelübde ist ein Versprechen vor Gott. Erstens mussten sie ihr ganzes Leben lang im Kloster bleiben. ' +
          'Zweitens verzichteten sie auf Eigentum und auf die Ehe. Drittens mussten sie dem Leiter des Klosters, dem Abt, gehorchen, in einem Frauenkloster der Äbtissin. ' +
          'Dadurch lebten sie ohne eigene Familie und ohne Besitz ganz für Gott in der Gemeinschaft ihres Ordens. Das Motto „ora et labora“ heißt „bete und arbeite“. ' +
          'Es bedeutet, dass sich Mönche und Nonnen nicht nur dem Gebet widmeten. Zwischen den Gebetszeiten arbeiteten sie auf dem Feld, im Klostergarten, mit den Tieren ' +
          'oder in der Werkstatt, und sie studierten. Das war nötig, weil jede Klostergemeinschaft selbst für ihren Lebensunterhalt sorgte.'
      },
      {
        id: 'kloster-e2', operator: 'erlaeutern', abb: 'klosterplan', abbOpts: { beschriftet: true },
        frage: 'Erläutere die Aufgaben der Klöster im Mittelalter. Nutze den Darstellungstext und nenne Beispiele aus dem Klosterplan. (vgl. Buch S. 41, A1)',
        tipp: 'Ordne die Gebäude im Plan Bereichen zu: Gebet, Wirtschaft, Bildung, Kranke und Gäste. Vergiss die Ländereien nicht, die man im Plan nicht sieht.',
        begriffe: [
          { name: 'religiöses Zentrum', muster: ['religioes', 'gebet', 'gottesdienst'] },
          { name: 'Wirtschaftsbetrieb', muster: ['wirtschaft'] },
          { name: 'Selbstversorgung', muster: ['selbstversorg', 'selbst versorg', 'lebensunterhalt'] },
          { name: 'Bildungszentrum', muster: ['bildung', 'schule'] },
          { name: 'Ländereien', muster: ['laendereien'] },
          { name: 'weltliche Macht', muster: ['weltlich'] }
        ],
        punkte: [
          { text: 'religiöse Zentren: Gebet und Gottesdienst, z. B. die Kirche in der Mitte des Plans', p: 1 },
          { text: 'Wirtschaftsbetriebe: Selbstversorgung durch Feldarbeit, Klostergarten und Nutztiere', p: 1 },
          { text: 'Beispiele aus dem Plan für die Versorgung, z. B. Mühlen, Brauerei und Bäckerei, Ställe, Scheune, Garten', p: 1 },
          { text: 'Spezialisten wie Schreiner, Bäcker und Apotheker (z. B. Handwerkshaus, Apotheke)', p: 1 },
          { text: 'Bildungszentren: Schulen und eigene Forschungen, z. B. Schule und Bibliothek im Plan', p: 1 },
          { text: 'Fürsorge für Kranke und Gäste, z. B. Hospital, Ärztehaus, Herberge, Gästehaus', p: 1 },
          { text: 'Verwaltung großer Ländereien und Kontakt zur weltlichen Macht (Herrschaftseinrichtung)', p: 1 }
        ],
        muster: 'Klöster hatten im Mittelalter viele Aufgaben. Sie waren religiöse Zentren. Das zeigt sich am Klosterplan von St. Gallen: Die Kirche steht in der Mitte, ' +
          'dort beteten die Mönche mehrmals am Tag. Außerdem waren Klöster Wirtschaftsbetriebe, denn jede Klostergemeinschaft sorgte selbst für ihren Lebensunterhalt. ' +
          'Dazu gehören im Plan zum Beispiel die Mühlen, die Brauerei und Bäckerei, die Ställe, die Scheune und der Garten. Es gab Spezialisten wie Schreiner, Bäcker und Apotheker. ' +
          'Klöster waren auch Bildungszentren mit Schulen und eigener Forschung, deshalb gibt es im Plan eine Schule und eine Bibliothek. ' +
          'Im Hospital, im Ärztehaus und in der Herberge kümmerte man sich um Kranke und Gäste. Schließlich verwalteten Klöster große Ländereien in ihrer Umgebung ' +
          'und hatten dadurch Kontakt zur weltlichen Macht.'
      },
      {
        id: 'kloster-e3', operator: 'beurteilen', quelle: 'kloster-regel',
        frage: 'Beurteile, warum die Klöster im Mittelalter eigene Regeln brauchten. Nutze den Darstellungstext und M2. (vgl. Buch S. 41, A4b)',
        tipp: 'Ein Sachurteil: Denk mit den Augen der Menschen damals. Wofür sorgten die Regeln im Kloster? Was zeigen die Strafen?',
        begriffe: [
          { name: 'Ordensregel', muster: ['regel'] },
          { name: 'Gehorsam', muster: ['gehorsam', 'gehorch'] },
          { name: 'Abt', muster: ['abt', 'aebtissin'] },
          { name: 'ora et labora', muster: ['ora et labora', 'bete und arbeite'] },
          { name: 'Strafe', muster: ['straf', 'ermahn', 'ausschliess'] },
          { name: 'Gemeinschaft', muster: ['gemeinschaft', 'zusammenleb'] }
        ],
        punkte: [
          { text: 'Viele Menschen lebten ein Leben lang eng zusammen: Das Zusammenleben musste geordnet werden.', p: 1 },
          { text: 'Klare Leitung: Gehorsam gegenüber Abt bzw. Äbtissin (Gelübde)', p: 1 },
          { text: 'Feste Ordnung von Gebet und Arbeit („ora et labora“), damit Gottesdienst und Selbstversorgung funktionierten', p: 1 },
          { text: 'Beleg aus M2: Regeln für ein Leben nah bei Gott, z. B. Gott und den Nächsten lieben, fasten, sich Genüssen nicht hingeben', p: 1 },
          { text: 'Beleg aus M2: Aufgaben gegenüber anderen, z. B. Arme bewirten, Kranke besuchen, Tote begraben', p: 1 },
          { text: 'Strafen in Stufen (geheim ermahnen, öffentlich zurechtweisen, Ausschließung, körperliche Strafe): Es gab Verstöße, die Regel musste durchgesetzt werden.', p: 1 },
          { text: 'Urteil mit den Augen der Menschen damals, ohne eigene Meinung („Aus Sicht der Menschen damals …“)', p: 1 },
          { text: 'Begründetes Fazit, z. B.: Die Regeln waren damals notwendig, weil die Gemeinschaft sonst nicht funktioniert hätte.', p: 1 }
        ],
        muster: 'Aus Sicht der Menschen damals brauchten die Klöster eigene Regeln, weil dort viele Mönche oder Nonnen ein Leben lang eng zusammenlebten. ' +
          'Die Regel des Benedikt legte fest, wie dieses Zusammenleben funktionieren sollte. Alle mussten dem Abt gehorchen, so war klar, wer im Kloster entscheidet. ' +
          'Außerdem gab die Regel dem Tag eine feste Ordnung aus Gebet und Arbeit. Nur so konnte das Kloster ein religiöses Zentrum sein und sich gleichzeitig selbst versorgen. ' +
          'In M2 steht auch, wie man leben soll, um Gott nahezukommen: Gott und den Nächsten lieben, das Fasten lieben und sich Genüssen nicht hingeben. ' +
          'Dazu kommen Aufgaben für andere, zum Beispiel Arme bewirten und Kranke besuchen. Die Strafen in M2 zeigen, dass es Brüder gab, die gegen die Regel verstießen. ' +
          'Deshalb musste die Regel auch sagen, was dann geschieht: erst im Geheimen ermahnen, dann öffentlich zurechtweisen, dann ausschließen. ' +
          'Insgesamt waren eigene Regeln damals notwendig, weil die Gemeinschaft ohne sie nicht zusammengehalten und nicht funktioniert hätte.'
      },
      {
        id: 'kloster-e4', operator: 'beschreiben', abb: 'tagesablauf', abbOpts: { beschriftet: true },
        frage: 'Ein normaler Tag im Kloster begann frühmorgens um drei Uhr. Beschreibe, was dir an diesem Tagesablauf (M3) auffällt. (vgl. Buch S. 41, A2)',
        tipp: 'Geh das Schaubild von oben nach unten durch und nenne die Uhrzeiten. Danach kannst du den Ablauf mit deinem eigenen Tag vergleichen, wie im Buch.',
        begriffe: [
          { name: 'Matutin', muster: ['matutin'] },
          { name: 'Komplet', muster: ['komplet', 'complet'] },
          { name: 'Gebetszeiten', muster: ['gebet'] },
          { name: 'Studium und Arbeit', muster: ['studium', 'studier'] },
          { name: 'Nachtwache', muster: ['nachtwache'] }
        ],
        punkte: [
          { text: 'Beginn um 3 Uhr nachts mit der Matutin', p: 1 },
          { text: 'sieben Gebetszeiten, etwa alle drei Stunden (Prim 6, Terz 9, Sext 12, Non 15, Vesper 18, Komplet 21 Uhr)', p: 1 },
          { text: 'zwischen den Gebeten Studium und Arbeit', p: 1 },
          { text: 'am frühen Morgen Meditation, dazu Zeiten für die Reinigung', p: 1 },
          { text: 'Essen zu festen Zeiten', p: 1 },
          { text: 'Freizeit erst am Abend (ab etwa 19 Uhr)', p: 1 },
          { text: 'nach der Komplet Schlafen oder Nachtwache; eine Auffälligkeit benannt, z. B. sehr früher Beginn oder das Gebet teilt den ganzen Tag ein', p: 1 }
        ],
        muster: 'Der Tagesablauf im Kloster war genau geregelt. Der Tag begann schon um 3 Uhr nachts mit dem ersten Gebet, der Matutin. Danach folgten Meditation und Reinigung. ' +
          'Etwa alle drei Stunden gab es eine weitere Gebetszeit: Prim um 6 Uhr, Terz um 9 Uhr, Sext um 12 Uhr, Non um 15 Uhr, Vesper um 18 Uhr und Komplet um 21 Uhr. ' +
          'Zwischen den Gebeten lagen Studium und Arbeit. Gegessen wurde zu festen Zeiten, meist kurz vor einem Gebet. Freizeit hatten die Mönche und Nonnen erst am Abend nach der Vesper. ' +
          'Nach der Komplet wurde geschlafen oder Nachtwache gehalten. Mir fällt auf, dass der Tag sehr früh beginnt und dass die Gebete den ganzen Tag einteilen.'
      }
    ],

    /* ---------- Hoftag (Probearbeit) ---------- */
    hoftag: {
      wissen: [
        {
          id: 'kloster-hw1', typ: 'luecke',
          text: 'Benediktiner und Benediktinerinnen legten drei {Gelübde|Eide|Lehen} ab: Sie blieben ein Leben lang im {Kloster|Dorf|Heer}, ' +
            'verzichteten auf {Eigentum und Ehe|Gebet und Arbeit|Schule und Bildung} und gehorchten dem {Abt|König|Grafen}.'
        },
        {
          id: 'kloster-hw2', typ: 'zuordnen',
          frage: 'Wozu diente das Gebäude im Kloster? Ordne zu.',
          paare: [['Noviziat', 'Haus für die Neuen im Kloster'], ['Hospital', 'Pflege der Kranken'], ['Bibliothek', 'Aufbewahrung der Bücher'],
            ['Haus des Abtes', 'Wohnung des Klosterleiters'], ['Schule', 'Unterricht']]
        },
        {
          id: 'kloster-hw3', typ: 'mehrfach',
          frage: 'Welche Spezialisten gab es laut Darstellungstext in den Klöstern?',
          optionen: ['Schreiner', 'Bäcker', 'Apotheker', 'Meier', 'Knappen'],
          richtig: [0, 1, 2]
        },
        {
          id: 'kloster-hw4', typ: 'eingabe',
          frage: 'Wie lautet das lateinische Motto der Benediktiner, das „bete und arbeite“ bedeutet?',
          akzeptiert: ['ora et labora'], nicht: ['tu supplex ora', 'tuque labora']
        },
        {
          id: 'kloster-hw5', typ: 'sortieren',
          frage: 'Zu wem passt die Aussage?',
          kategorien: ['erste Mönche im Orient', 'Mönche aus Irland und Schottland', 'Benediktiner'],
          items: [
            ['zogen sich in die Wüsten Ägyptens und Syriens zurück', 0],
            ['wollten durch Askese Christus nahekommen', 0],
            ['gingen als Missionare in die Welt', 1],
            ['gründeten auf ihrem Weg zahlreiche Klöster', 1],
            ['folgten der Regel aus Montecassino', 2],
            ['legten drei Gelübde ab', 2]
          ]
        },
        {
          id: 'kloster-hw6', typ: 'behauptung',
          aussage: 'Ein Leben im Kloster nach einer Ordensregel konnten im Mittelalter nur Männer führen.',
          stimmt: false,
          gruende: [
            'Benedikt schrieb Regeln für Mönche und Nonnen, und Frauen gründeten eigene Orden.',
            'Frauen durften nur als Mägde im Kloster arbeiten.',
            'Nonnen gab es erst nach dem Mittelalter.'
          ],
          richtig: 0
        },
        {
          id: 'kloster-hw7', typ: 'wahl',
          frage: 'Warum hatten viele Klöster Kontakt zur weltlichen Macht?',
          optionen: ['Sie verwalteten große Ländereien in ihrer Umgebung.', 'Die Mönche wurden auf Burgen zu Rittern ausgebildet.',
            'Jedes Kloster stellte ein eigenes Heer für den König.', 'Die Äbte wurden jedes Jahr vom König gewählt.'],
          richtig: 0
        },
        {
          id: 'kloster-hw8', typ: 'mehrfach',
          frage: 'Welche Orden entstanden in späteren Jahrhunderten neben den Benediktinern?',
          optionen: ['Zisterzienser', 'Franziskaner', 'Dominikaner', 'Ministeriale', 'Kronvasallen'],
          richtig: [0, 1, 2]
        },
        {
          id: 'kloster-hw9', typ: 'beschriften', abb: 'klosterplan',
          frage: 'Beschrifte die Gebäude im vereinfachten Klosterplan von St. Gallen.',
          strukturen: ['kirche', 'handwerk', 'muehlen', 'scheune', 'staelle', 'garten']
        }
      ],
      material: [
        {
          id: 'kloster-hm1', quelle: 'kloster-regel48',
          text: 'Eine weitere Stelle aus der Regel des Benedikt. Diesen Text kennst du aus dem Buch nicht.',
          items: [
            {
              id: 'kloster-hm1-1', typ: 'wahl', p: 1,
              frage: 'Um welche Art von Quelle handelt es sich?',
              optionen: ['einen Ausschnitt aus einer Ordensregel für Mönche', 'einen Brief eines Mönchs an den König',
                'eine Urkunde über die Vergabe eines Lehens', 'einen Bericht über den Alltag auf einer Burg'],
              richtig: 0
            },
            {
              id: 'kloster-hm1-2', typ: 'wahl', p: 1,
              frage: 'Was nennt Benedikt einen „Feind der Seele“?',
              optionen: ['den Müßiggang, also das Nichtstun', 'die Arbeit auf dem Feld', 'das Lesen heiliger Schriften', 'die Armut des Klosters'],
              richtig: 0
            },
            {
              id: 'kloster-hm1-3', typ: 'mehrfach', p: 2,
              frage: 'Womit sollen sich die Brüder laut Text beschäftigen? Kreuze alles an, was im Text steht.',
              optionen: ['mit Handarbeit', 'mit dem Lesen heiliger Schriften', 'wenn nötig mit dem Einbringen der Ernte',
                'mit Handel auf dem Markt', 'mit Kriegsdienst für den König'],
              richtig: [0, 1, 2]
            },
            {
              id: 'kloster-hm1-4', typ: 'behauptung', p: 1,
              aussage: 'Laut Text müssen alle Brüder gleich hart arbeiten, auch die kranken.',
              stimmt: false,
              gruende: [
                'Kranke und Schwache bekommen eine Arbeit, die sie nicht erdrückt, und der Abt nimmt Rücksicht.',
                'Kranke Brüder müssen das Kloster sofort verlassen.',
                'Kranke Brüder dürfen gar nicht arbeiten und sollen nur ruhen.'
              ],
              richtig: 0
            },
            {
              id: 'kloster-hm1-5', typ: 'luecke', p: 1,
              text: 'Die Stelle passt zum Motto {ora et labora|tu protege|pater europae}: Handarbeit und {Lesung|Krieg|Handel} wechseln sich zu festen Zeiten ab, ' +
                'damit niemand {müßig|arm|krank} ist.'
            }
          ],
          erkl: {
            id: 'kloster-hm1-e', operator: 'einordnen',
            frage: 'Ordne die Quelle ein: Wer hat sie wann und für wen geschrieben? Erkläre dann, wie die Stelle zum Motto „ora et labora“ und zur Selbstversorgung der Klöster passt.',
            begriffe: [
              { name: 'Ordensregel', muster: ['regel'] },
              { name: 'Benedikt', muster: ['benedikt'] },
              { name: 'ora et labora', muster: ['ora et labora', 'bete und arbeite'] },
              { name: 'Selbstversorgung', muster: ['selbstversorg', 'selbst versorg', 'lebensunterhalt', 'arbeit ihrer haende'] }
            ],
            punkte: [
              { text: 'Verfasser: Benedikt von Nursia, Gründer von Montecassino und des Benediktinerordens', p: 1 },
              { text: 'Art und Zeit: Ordensregel, um 540, für die Mönche (und Nonnen) seines Ordens', p: 1 },
              { text: '„ora et labora“: Handarbeit und Lesung heiliger Schriften wechseln sich zu festen Zeiten ab, Nichtstun soll es nicht geben', p: 1 },
              { text: 'Selbstversorgung: Die Brüder bringen wenn nötig die Ernte selbst ein und leben von der Arbeit ihrer Hände', p: 1 }
            ],
            muster: 'Die Quelle ist ein Ausschnitt aus der Ordensregel des Benedikt von Nursia. Benedikt gründete das Kloster Montecassino und schrieb um 540 Regeln ' +
              'für die Mönche und Nonnen seines Ordens, die Benediktiner. Die Stelle passt zum Motto „ora et labora“, denn die Brüder sollen sich zu festen Zeiten ' +
              'mit Handarbeit und mit dem Lesen heiliger Schriften beschäftigen. Nichtstun gilt als Feind der Seele. Die Stelle passt auch zur Selbstversorgung: ' +
              'Wenn es nötig ist, holen die Brüder die Ernte selbst ein, und sie sind wirkliche Mönche, wenn sie von der Arbeit ihrer Hände leben.'
          }
        },
        {
          id: 'kloster-hm2', abb: 'tagesablauf', abbOpts: { beschriftet: true },
          text: 'Das Schaubild zeigt den Tagesablauf in einem Kloster (nach Buch S. 41, M3).',
          items: [
            {
              id: 'kloster-hm2-1', typ: 'zahl', p: 1,
              frage: 'Wie viele Gebetszeiten hatte ein Tag im Kloster?',
              antwort: 7, einheit: 'Gebetszeiten'
            },
            {
              id: 'kloster-hm2-2', typ: 'zahl', p: 1,
              frage: 'Wie viele Stunden lagen tagsüber zwischen zwei Gebetszeiten, zum Beispiel zwischen Terz und Sext?',
              antwort: 3, einheit: 'Stunden'
            },
            {
              id: 'kloster-hm2-3', typ: 'wahl', p: 1,
              frage: 'Welche Tätigkeit nahm zwischen Prim und Vesper die meiste Zeit ein?',
              optionen: ['Studium und Arbeit', 'Meditation', 'Essen', 'Freizeit'],
              richtig: 0
            },
            {
              id: 'kloster-hm2-4', typ: 'behauptung', p: 1,
              aussage: 'Nach der Komplet konnten alle Mönche bis zum Morgen durchschlafen.',
              stimmt: false,
              gruende: [
                'Um 3 Uhr begann schon die Matutin, und manche hielten Nachtwache.',
                'Nach der Komplet begann die Arbeit auf dem Feld.',
                'Nach der Komplet gab es noch ein Abendessen.'
              ],
              richtig: 0
            },
            {
              id: 'kloster-hm2-5', typ: 'mehrfach', p: 2,
              frage: 'Was zeigt das Schaubild? Kreuze alles an, was stimmt.',
              optionen: ['Der Tag begann um 3 Uhr nachts mit einem Gebet.', 'Die Gebete verteilten sich über Tag und Nacht.',
                'Zwischen den Gebeten wurde studiert und gearbeitet.', 'Freizeit gab es schon am Vormittag.', 'Gebetet wurde nur morgens und abends.'],
              richtig: [0, 1, 2]
            }
          ],
          erkl: {
            id: 'kloster-hm2-e', operator: 'untersuchen',
            frage: 'Untersuche mithilfe des Schaubilds, wie der Tagesablauf das Motto „ora et labora“ umsetzt.',
            begriffe: [
              { name: 'ora et labora', muster: ['ora et labora', 'bete und arbeite'] },
              { name: 'Gebetszeiten', muster: ['gebet'] },
              { name: 'Matutin', muster: ['matutin'] },
              { name: 'Studium und Arbeit', muster: ['studium', 'arbeit'] }
            ],
            punkte: [
              { text: '„ora“: sieben Gebetszeiten über Tag und Nacht, von der Matutin um 3 Uhr bis zur Komplet um 21 Uhr', p: 1 },
              { text: '„labora“: zwischen den Gebeten Studium und Arbeit', p: 1 },
              { text: 'fester Rhythmus: Gebet und Arbeit wechseln sich etwa alle drei Stunden ab', p: 1 },
              { text: 'Ergebnis: Das Gebet gibt den Takt vor und unterbricht die Arbeit, beides gehört im Alltag zusammen', p: 1 }
            ],
            muster: 'Das Schaubild zeigt, dass Beten und Arbeiten den ganzen Tag bestimmten. Für „ora“ stehen die sieben Gebetszeiten. Sie beginnen nachts um 3 Uhr mit der Matutin ' +
              'und enden um 21 Uhr mit der Komplet. Für „labora“ stehen die Blöcke mit Studium und Arbeit zwischen den Gebeten. Gebet und Arbeit wechseln sich etwa alle drei Stunden ab. ' +
              'Daraus folgt: Das Gebet gibt dem Tag den Takt vor und unterbricht immer wieder die Arbeit. Beides gehört im Kloster fest zusammen.'
          }
        }
      ],
      schreiben: [
        {
          id: 'kloster-hs1', operator: 'erlaeutern',
          frage: 'Erläutere die Lebensbedingungen der Mönche und Nonnen im Kloster. Gehe auf die Gelübde, den Tagesablauf und die Arbeit ein.',
          begriffe: [
            { name: 'Gelübde', muster: ['geluebd'] },
            { name: 'Abt / Äbtissin', muster: ['abt', 'aebtissin'] },
            { name: 'Matutin', muster: ['matutin'] },
            { name: 'ora et labora', muster: ['ora et labora', 'bete und arbeite'] },
            { name: 'Selbstversorgung', muster: ['selbstversorg', 'selbst versorg', 'lebensunterhalt'] },
            { name: 'Ordensregel', muster: ['regel'] }
          ],
          punkte: [
            { text: 'Gelübde: ein Leben lang im Kloster bleiben', p: 1 },
            { text: 'Gelübde: Verzicht auf Eigentum und Ehe, Leben in der Gemeinschaft statt in einer Familie', p: 1 },
            { text: 'Gelübde: Gehorsam gegenüber dem Abt bzw. der Äbtissin', p: 1 },
            { text: 'fest geregelter Tag: sieben Gebetszeiten, Beginn um 3 Uhr mit der Matutin', p: 1 },
            { text: 'zwischen den Gebeten Studium und Arbeit, Freizeit erst abends, nachts auch Nachtwache', p: 1 },
            { text: 'Arbeit für die Selbstversorgung: Feld, Klostergarten, Nutztiere, Spezialisten wie Bäcker oder Schreiner', p: 1 },
            { text: 'Leben nach der Regel des Benedikt: Verzicht (z. B. Fasten), Strafen bei Verstößen', p: 1 },
            { text: 'Fazit: Das Leben war streng geregelt und auf Gebet und Arbeit ausgerichtet („ora et labora“).', p: 1 }
          ],
          muster: 'Mönche und Nonnen lebten im Kloster nach festen Regeln, zum Beispiel nach der Regel des Benedikt. Wer eintrat, legte drei Gelübde ab: ' +
            'Er blieb sein Leben lang im Kloster, verzichtete auf Eigentum und Ehe und gehorchte dem Abt, Nonnen gehorchten der Äbtissin. ' +
            'Eine eigene Familie oder eigenen Besitz gab es also nicht, man lebte in der Gemeinschaft des Ordens. Der Tag war genau eingeteilt. ' +
            'Er begann um 3 Uhr nachts mit der Matutin, und bis zur Komplet um 21 Uhr gab es sieben Gebetszeiten. Dazwischen wurde studiert und gearbeitet, ' +
            'Freizeit gab es erst am Abend, und manche hielten nachts Nachtwache. Nach dem Motto „ora et labora“ arbeiteten die Mönche und Nonnen auf dem Feld, ' +
            'im Klostergarten und mit den Nutztieren, denn das Kloster versorgte sich selbst. Es gab auch Spezialisten wie Bäcker, Schreiner und Apotheker. ' +
            'Die Regel verlangte außerdem Verzicht, zum Beispiel das Fasten, und wer gegen sie verstieß, wurde ermahnt und bestraft. ' +
            'Insgesamt war das Leben im Kloster streng geregelt und ganz auf Gebet und Arbeit ausgerichtet.'
        },
        {
          id: 'kloster-hs2', operator: 'beurteilen',
          frage: 'Das Buch fragt in seiner Überschrift: „Das Kloster: Eine eigene Welt?“ Beurteile, ob das Kloster im Mittelalter eine eigene Welt war.',
          begriffe: [
            { name: 'Selbstversorgung', muster: ['selbstversorg', 'selbst versorg', 'lebensunterhalt'] },
            { name: 'Ordensregel', muster: ['regel'] },
            { name: 'Gelübde', muster: ['geluebd'] },
            { name: 'Ländereien', muster: ['laendereien'] },
            { name: 'weltliche Macht', muster: ['weltlich'] },
            { name: 'Herberge / Gäste', muster: ['herberge', 'gaest', 'gast'] }
          ],
          punkte: [
            { text: 'Dafür: abgeschlossene Anlage, Mönche und Nonnen bleiben ein Leben lang im Kloster (Gelübde)', p: 1 },
            { text: 'Dafür: Selbstversorgung mit Feldern, Garten, Tieren, Mühlen und Werkstätten', p: 1 },
            { text: 'Dafür: eigene Regeln, eigener fester Tagesablauf und eigene Strafen', p: 1 },
            { text: 'Dafür: eigene Schule, Bibliothek und Hospital, fast alles innerhalb der Mauer (Klosterplan)', p: 1 },
            { text: 'Dagegen: Klöster verwalteten große Ländereien und hielten Kontakt zur weltlichen Macht.', p: 1 },
            { text: 'Dagegen: Gäste und Arme in Gästehaus und Herberge, Kranke besuchen (M2), Mönche als Missionare in der Welt', p: 1 },
            { text: 'Abwägung mit den Augen der Menschen damals (einerseits … andererseits …), ohne eigene Meinung', p: 1 },
            { text: 'Begründetes Sachurteil, z. B.: in vielem eine eigene Welt, aber keine abgeschlossene, weil …', p: 1 }
          ],
          muster: 'Aus Sicht der Menschen damals spricht vieles dafür, dass das Kloster eine eigene Welt war. Mönche und Nonnen versprachen, ihr ganzes Leben im Kloster zu bleiben. ' +
            'Das Kloster versorgte sich selbst mit Feldern, Garten, Tieren, Mühlen und Werkstätten. Auf dem Klosterplan von St. Gallen liegen sogar Schule, Bibliothek ' +
            'und Hospital innerhalb der Mauer. Außerdem hatte das Kloster eigene Regeln, einen eigenen Tagesablauf und eigene Strafen. ' +
            'Andererseits war das Kloster nicht von der Welt abgeschlossen. Klöster verwalteten große Ländereien in ihrer Umgebung und hielten Kontakt zur weltlichen Macht. ' +
            'Sie nahmen Gäste auf, sollten laut Regel Arme bewirten und Kranke besuchen, und Mönche zogen als Missionare in die Welt. ' +
            'Insgesamt war das Kloster damals in vielem eine eigene Welt, weil es nach eigenen Regeln lebte und sich selbst versorgte. ' +
            'Es war aber keine abgeschlossene Welt, weil es eng mit seiner Umgebung verbunden war.'
        }
      ]
    },

    /* ---------- Markt-Gerüchte ---------- */
    geruechte: [
      { id: 'kloster-g1', aussage: 'Das Wort „Mönch“ kommt vom griechischen „monachos“, Einsiedler.', stimmt: true, erkl: 'Die ersten Mönche lebten als Einsiedler in der Wüste.' },
      { id: 'kloster-g2', aussage: 'Benedikt von Nursia gründete das Kloster St. Gallen.', stimmt: false, erkl: 'Benedikt gründete Montecassino südlich von Rom.' },
      { id: 'kloster-g3', aussage: 'Der Klosterplan von St. Gallen wurde nie umgesetzt.', stimmt: true, erkl: 'Der Plan von etwa 820 zeigt ein ideales Kloster, gebaut wurde es so nie.' },
      { id: 'kloster-g4', aussage: 'Der Tag im Kloster begann um 6 Uhr mit dem Frühstück.', stimmt: false, erkl: 'Er begann um 3 Uhr nachts mit der Matutin, einem Gebet.' },
      { id: 'kloster-g5', aussage: 'Auch Frauen gründeten im Mittelalter Orden.', stimmt: true, erkl: 'Benedikts Regel galt für Mönche und Nonnen, Frauen gründeten auch eigene Orden.' },
      { id: 'kloster-g6', aussage: 'Benediktiner durften eigenes Geld und eigenes Land besitzen.', stimmt: false, erkl: 'Sie legten das Gelübde ab, auf Eigentum zu verzichten.' },
      { id: 'kloster-g7', aussage: '„Ora et labora“ heißt „bete und arbeite“.', stimmt: true, erkl: 'Das Motto stand für den Alltag der Mönche und Nonnen.' },
      { id: 'kloster-g8', aussage: 'Ein Frauenkloster leitete ein Abt.', stimmt: false, erkl: 'Ein Frauenkloster leitete eine Äbtissin.' },
      { id: 'kloster-g9', aussage: 'Klöster hatten Schulen und waren Bildungszentren.', stimmt: true, erkl: 'Sie gaben Wissen in Schulen weiter und forschten selbst.' },
      { id: 'kloster-g10', aussage: 'Wer gegen die Regel des Benedikt verstieß, flog sofort aus dem Kloster.', stimmt: false, erkl: 'Zuerst wurde er zweimal im Geheimen ermahnt, dann öffentlich zurechtgewiesen.' }
    ],

    /* ---------- Schatzkammer ---------- */
    schatz: [
      {
        id: 'kloster-s1', titel: 'Gerettet durch eine Heiligengeschichte',
        text: 'Der Klosterplan von St. Gallen ist etwa 112 × 77 cm groß und besteht aus fünf zusammengenähten Stücken Pergament. Er zeigt 52 Gebäude mit über 300 lateinischen Beischriften. ' +
          'Ende des 12. Jahrhunderts schrieb man in St. Gallen auf seine leere Rückseite eine Lebensgeschichte des heiligen Martin. Später wurde das große Blatt zu einem Heft gefaltet. ' +
          'Wahrscheinlich ist der Plan nur deshalb erhalten geblieben, weil man ihn so weiterverwenden konnte.',
        nachweis: 'Stiftsbibliothek St. Gallen, Cod. Sang. 1092, Handschriftenbeschreibung auf e-codices (www.e-codices.unifr.ch/de/list/one/csg/1092); ' +
          'M. C. Blaich, Rezension zur Faksimile-Ausgabe des Klosterplans, Concilium medii aevi (2015)'
      },
      {
        id: 'kloster-s2', titel: 'Der Plan wird doch noch gebaut',
        text: 'Seit 2013 kann man bei Meßkirch in Baden-Württemberg zusehen, wie auf der Klosterbaustelle Campus Galli ein Kloster nach dem St. Galler Plan entsteht. ' +
          'Gebaut wird mit den Mitteln des 9. Jahrhunderts, also ohne Maschinen und ohne modernes Werkzeug. Fertig sind unter anderem eine Holzkirche, ein Gemüsegarten und eine Kornscheune. ' +
          'Bis die ganze Anlage steht, wird es wohl noch Jahrzehnte dauern.',
        nachweis: 'Projektseite www.campus-galli.de; Artikel „Campus Galli“ in der deutschsprachigen Wikipedia (abgerufen 2026)'
      }
    ]
  });
})();
