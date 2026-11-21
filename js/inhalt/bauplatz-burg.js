/* Bauplatz 6: Burg – Ritter und Adlige (Buch S. 36–39) */
(function () {
  'use strict';
  var W = (window.W = window.W || {});

  W.bauplaetze.push({
    id: 'burg', nr: 6, titel: 'Burg', thema: 'Ritter und Adlige', zeit: 'um 1200', buch: 'S. 36–39', checkliste: 4,
    chronist: 'Von außen sieht eine Burg prächtig aus. Wer drinnen einen Winter verbracht hat, erzählt eher von Enge, Kälte und Hundegestank.',
    leitfrage: 'Wie wurde ein adliger Junge zum Ritter, und wie lebte es sich wirklich auf einer Burg?',

    karten: [
      {
        titel: 'Ritter: Adlige und Krieger',
        text: '<p>Im Mittelalter entstanden in Deutschland rund 20 000 Burgen. Etwa 6000 davon gibt es noch, viele nur als Ruinen. Auf den Burgen lebten Ritter mit ihren adligen Familien.</p>' +
          '<p><dfn>Ritter</dfn> waren Adlige und von Beruf Krieger. Ihre Ausbildung für den Kampf begann früh:</p>' +
          '<ul><li>Mit sieben Jahren kam ein Junge als <dfn>Page</dfn> auf eine fremde Burg. Dort lernte er, mit Lanze und Schwert zu kämpfen. Man brachte ihm die Regeln für das <dfn>Turnier</dfn> bei, das ritterliche Kampfspiel. Auch gutes Benehmen gehörte dazu.</li>' +
          '<li>Mit 14 Jahren wurde er <dfn>Knappe</dfn>. Nun begleitete er seinen Herrn zu Turnieren und zog mit ihm in den Kampf.</li>' +
          '<li>Wenn er sich bewährte, wurde er mit etwa 20 Jahren in den Kreis der Ritter aufgenommen. Dazu erhielt er den <dfn>Ritterschlag</dfn>, und es wurde ihm feierlich ein Schwert umgelegt.</li></ul>' +
          '<p>Adlige Mädchen lernten Lesen und Schreiben.</p>',
        merk: 'Ritter waren Adlige und von Beruf Krieger: mit 7 Jahren Page, mit 14 Knappe, mit etwa 20 Jahren Ritterschlag.',
        achtung: '<strong>Aufgepasst</strong>: Erst Page, dann Knappe, nicht umgekehrt. Und den Ritterschlag bekam nur, wer sich als Knappe bewährt hatte.',
        abb: 'ritter-weg', abbOpts: { beschriftet: true }
      },
      {
        titel: 'Turnier, Rüstung und ritterliche Tugenden',
        text: '<p>Das Bild aus der Manessischen Liederhandschrift (um 1300) zeigt ein Turnier: Zwei Ritter kämpfen nach festen Regeln gegeneinander (Buch S. 37, M2).</p>' +
          '<p>Der Ritter schützte seinen Körper mit einem Schild und einem <dfn>Kettenhemd</dfn> aus vielen miteinander verbundenen Eisenringen. Auf dem Kopf trug er einen <dfn>Topfhelm</dfn>, einen Helm, der wie ein Topf aussah.</p>' +
          '<p>Ein Ritter sollte aber nicht nur kämpfen können. Der Dichter Wolfram von Eschenbach schreibt um 1200 im „Parzival“ (M3), wie ein junger Adliger sein soll: Erbarmen mit den Not Leidenden, Großherzigkeit und Güte, die Bereitschaft, anderen zu dienen, und das rechte Augenmaß. Er soll weder verschwenden noch Schätze anhäufen.</p>' +
          '<p>Wie man ein Bild Schritt für Schritt analysiert (beschreiben, untersuchen, deuten), steht im Buch auf S. 27 und auf dem Bauplatz Dorfkirche.</p>',
        merk: 'Zum Ideal des Ritters gehörten neben dem Kampf auch Tugenden: Erbarmen, Güte, anderen dienen und das rechte Maß.',
        achtung: '<strong>Aufgepasst</strong>: Eschenbach beschreibt, wie ein Ritter sein <em>soll</em>, also ein Ideal. Ob die Ritter wirklich so waren, sagt seine Dichtung nicht.',
        quelle: 'burg-turnier'
      },
      {
        titel: 'Die Burg: Wohnsitz und Verteidigungsanlage',
        text: '<p>Ein Burgherr musste sein Herrschaftsgebiet und dessen Bauernfamilien schützen. Die Burg diente der adligen Familie als Wohnort und als Schutz vor Angriffen. Bei Gefahr flüchteten auch die Bauernfamilien der umliegenden Dörfer in die Burganlage.</p>' +
          '<p>Zuerst waren Burgen oft befestigte Holzgebäude auf einem Hügel. Im Laufe der Zeit wurden daraus stark befestigte Wohnsitze aus Stein mit einem <dfn>Bergfried</dfn>: Dieser hohe Turm war das letzte Fluchtgebäude bei einer Belagerung.</p>' +
          '<p>Der Name der Burg wurde meistens zum Familiennamen der adligen Besitzer.</p>' +
          '<p>Ein Beispiel für eine echte Burg ist die Burg Bentheim in Niedersachsen (Buch S. 36, M1). Sie wird im Jahr 1020 zum ersten Mal in schriftlichen Quellen erwähnt. Im 12. Jahrhundert wurde sie zerstört und danach wieder aufgebaut.</p>',
        merk: 'Die Burg war zugleich Wohnsitz der adligen Familie und Verteidigungsanlage. Bei Gefahr bot sie auch den Bauern der Umgebung Schutz.',
        achtung: '<strong>Aufgepasst</strong>: Die Burg schützte nicht nur den Ritter und seine Familie. Bei Gefahr flüchteten auch die Bauern der umliegenden Dörfer hinein.'
      },
      {
        titel: 'Wohnen: eng, kalt und dunkel',
        text: '<p>Weil Burgen vor allem Verteidigungsanlagen waren, hatten sie nur kleine Fenster. Im Winter wurden sie gegen die Kälte mit Holzläden verschlossen. Fenster aus Glas konnten sich nur sehr reiche Adlige leisten.</p>' +
          '<p>Der <dfn>Palas</dfn> war das herrschaftliche Wohngebäude. Er enthielt einen großen Saal mit Holzmöbeln für Festlichkeiten und mehrere Schlafräume. Dazu zählte die <dfn>Kemenate</dfn> (lat. caminata = Kamin), ein Raum, den man heizen konnte.</p>' +
          '<p>Ritter Ulrich von Hutten (1488–1523) beschreibt die Burg eines niederen Adligen: Sie sei nicht für die Behaglichkeit, sondern zur Wehr gebaut. Innen sei es bedrückend eng, voller Vieh- und Pferdeställe, Dunkelkammern und Waffen. Überall stinke es nach Schießpulver, nach den Hunden und ihrem Unrat (M4).</p>',
        merk: 'Burgen waren zur Wehr gebaut, nicht für die Behaglichkeit: kleine Fenster, Enge und Gestank. Warm wurde es am ehesten in der Kemenate.',
        achtung: '<strong>Aufgepasst</strong>: Palas und Pfalz klingen ähnlich. Der Palas ist das Wohngebäude in einer Burg, die Pfalz war eine Herberge für den reisenden König.',
        quelle: 'burg-hutten'
      },
      {
        titel: 'Die Teile einer Burg',
        text: '<p>Die Zeichnung zeigt eine erdachte Burg. Wie die Rekonstruktionszeichnung im Buch (S. 38/39) gab es sie so nie. Sie fasst typische Teile zusammen.</p>' +
          '<ul><li><strong>Verteidigung:</strong> Vor der Burg liegt der Burggraben. Hinein kommt man nur durch das Tor mit Zugbrücke, das ein Torturm schützt. Die <dfn>Wehrmauer</dfn> umgibt die Burg. Oben läuft der <dfn>Wehrgang</dfn>. Durch eine schmale <dfn>Schießscharte</dfn> konnte man auf Angreifer schießen. Vom Wachturm und vom Bergfried hielt man Ausschau.</li>' +
          '<li><strong>Vorburg:</strong> In der <dfn>Vorburg</dfn> lagen Werkstätten, der Stall und die Schmiede.</li>' +
          '<li><strong>Kernburg:</strong> Zur <dfn>Kernburg</dfn> gehörten der Palas mit dem großen Saal, die Kemenate, die Kapelle, der Brunnen und der Bergfried. Unter dem großen Saal lagen die Küche und die Unterkünfte für Knechte und Mägde.</li>' +
          '<li>Außerdem gab es ein <dfn>Verlies</dfn> für Gefangene, einen Burggarten und ein Plumpsklo, das als kleiner Vorbau an der Außenwand hing. In der Amtsstube gab es ein Lager und die Waffenkammer.</li></ul>',
        merk: 'Außen schützen Burggraben, Tor mit Zugbrücke, Wehrmauer und Türme. Innen liegen die Vorburg mit Stall und Werkstätten und die Kernburg mit Palas, Kemenate, Kapelle und Bergfried.',
        achtung: '<strong>Aufgepasst</strong>: Bergfried und Wachturm sind nicht dasselbe. Der Bergfried ist der hohe Turm der Kernburg, in den man sich bei einer Belagerung als Letztes flüchtete.',
        abb: 'burg', abbOpts: { beschriftet: true }
      },
      {
        titel: 'Alltag: viele Menschen, viel Arbeit',
        text: '<p>Auf größeren Burgen wohnten oft viele Hundert Menschen (M3, S. 39):</p>' +
          '<ul><li>die Familie des Burgherrn mit Frauen, Kindern und unverheirateten Verwandten,</li>' +
          '<li>zehn oder mehr Männer als Besatzung, die die Burg bewachten,</li>' +
          '<li>Küchenmeister und Küchenpersonal,</li>' +
          '<li>das <dfn>Gesinde</dfn>: Knechte für die Felder, Weinberge und Wälder und Mägde, die der Burgherrin und ihren Verwandten dienten,</li>' +
          '<li>Handwerker wie Schmiede, Steinmetze und Zimmermänner.</li></ul>' +
          '<p>Der Alltag richtete sich nach dem Stand der Sonne: Man stand mit dem Morgengrauen auf und arbeitete bis zur Dunkelheit. Am wichtigsten war die Versorgung der Menschen, die vom Burgherrn abhängig waren. Deshalb war der Tagesablauf ganz auf die Landwirtschaft ausgerichtet. Nur der Sonntag war frei, für Erholung und Kirchgang. Der große Festsaal wurde nur an besonderen Tagen beheizt. Abends zog man sich in die Kemenaten zurück, weil sie schneller warm wurden.</p>',
        merk: 'Der Alltag auf der Burg richtete sich nach der Sonne und nach der Landwirtschaft. Man arbeitete vom Morgengrauen bis zur Dunkelheit, frei war nur der Sonntag.',
        achtung: '<strong>Aufgepasst</strong>: Auf der Burg lebten nicht nur Ritter und Burgfräulein. Die meisten Menschen dort arbeiteten: Besatzung, Küchenpersonal, Knechte, Mägde und Handwerker.',
        quelle: 'burg-alltag'
      },
      {
        titel: 'Mit Material arbeiten: Wer erzählt hier?',
        text: '<p>Zum Leben der Ritter hast du drei Texte. Frag bei jedem: Wer schreibt, wann und mit welcher Absicht?</p>' +
          '<ul><li><strong>M3, S. 37: Wolfram von Eschenbach</strong>, ein Dichter, um 1200. Seine Dichtung sagt, wie ein junger Adliger sein <em>soll</em>. Sie zeigt ein Ideal, nicht den Alltag.</li>' +
          '<li><strong>M4, S. 37: Ulrich von Hutten</strong>, selbst Ritter, lebte 1488–1523. Er berichtet aus eigener Erfahrung. Er lebte aber rund 300 Jahre nach Eschenbach und erwähnt schon Schießpulver und Büchsen. Und er klagt über sein Leben, das kann seine Schilderung färben.</li>' +
          '<li><strong>M3, S. 39: Planet Wissen</strong>, eine Darstellung von heute. Sie ist keine Quelle aus dem Mittelalter, sondern fasst zusammen, was man heute über das Leben auf Burgen weiß.</li></ul>' +
          '<p>Erst wenn du die Texte so einordnest, kannst du sie richtig auswerten: Ideal oder Alltag? Selbst erlebt oder später zusammengefasst?</p>',
        merk: 'Prüfe bei jedem Material, wer es wann und wozu geschrieben hat: Eine Dichtung zeigt oft ein Ideal, ein Bericht eigene Erfahrungen, eine Darstellung das Wissen von heute.',
        achtung: '<strong>Aufgepasst</strong>: M3 auf S. 39 ist keine Quelle aus dem Mittelalter, sondern eine Darstellung von heute.',
        quelle: 'burg-eschenbach'
      }
    ],

    ueben: [
      {
        id: 'burg-u1', typ: 'reihenfolge',
        frage: 'Wie wurde ein adliger Junge zum Ritter? Bring die Stationen in die richtige Reihenfolge.',
        schritte: [
          'Mit sieben Jahren kommt er als Page auf eine fremde Burg.',
          'Er lernt den Kampf mit Lanze und Schwert, die Regeln der Turniere und gutes Benehmen.',
          'Mit 14 Jahren wird er Knappe.',
          'Er begleitet seinen Herrn zu Turnieren und in den Kampf und bewährt sich.',
          'Mit etwa 20 Jahren erhält er den Ritterschlag, und es wird ihm feierlich ein Schwert umgelegt.'
        ],
        erkl: 'Page (ab 7) → Knappe (ab 14) → Ritterschlag (mit etwa 20). Ritter wurde nur, wer sich als Knappe bewährte.'
      },
      {
        id: 'burg-u2', typ: 'zahl',
        frage: 'Im Mittelalter entstanden in Deutschland rund 20 000 Burgen. Etwa 6000 existieren noch. Wie viel Prozent der Burgen gibt es also noch?',
        antwort: 30, einheit: '%', tol: 1,
        erkl: '6000 von 20 000 sind 3 von 10, also 30 Prozent. Sieben von zehn Burgen sind verschwunden.'
      },
      {
        id: 'burg-u3', typ: 'wahl', quelle: 'burg-eschenbach',
        frage: 'Welche Eigenschaft nennt Wolfram von Eschenbach in M3 <strong>nicht</strong>?',
        optionen: ['Mut und Härte im Kampf', 'Erbarmen mit den Not Leidenden', 'Bereitschaft, anderen zu dienen', 'das rechte Augenmaß'],
        richtig: 0,
        erkl: 'Vom Kämpfen ist in M3 keine Rede. Eschenbach betont Erbarmen, Großherzigkeit, Güte, das Dienen und das rechte Maß.'
      },
      {
        id: 'burg-u4', typ: 'liste', quelle: 'burg-eschenbach',
        frage: 'Nenne drei Eigenschaften eines Ritters, die in M3 hervorgehoben werden (vgl. Buch S. 37, A2).',
        anzahl: 3,
        gruppen: [
          ['Erbarmen', 'Mitleid', 'Barmherzigkeit', 'barmherzig', 'Erbarmen mit den Not Leidenden'],
          ['Großherzigkeit', 'großherzig', 'Großzügigkeit', 'großzügig'],
          ['Güte', 'gütig'],
          ['anderen dienen', 'dienen', 'Dienstbereitschaft', 'Hilfsbereitschaft', 'hilfsbereit'],
          ['das rechte Augenmaß', 'Augenmaß', 'rechtes Maß', 'Maß', 'Maß halten', 'Mäßigung'],
          ['keine Verschwendung', 'nicht verschwenden', 'Sparsamkeit', 'sparsam'],
          ['keine Schätze anhäufen', 'nicht geizig', 'Bescheidenheit', 'bescheiden']
        ],
        erkl: 'Im Text stehen: Erbarmen mit den Not Leidenden, Großherzigkeit, Güte, anderen dienen, das rechte Augenmaß, keine Verschwendung und kein Anhäufen von Schätzen.'
      },
      {
        id: 'burg-u5', typ: 'behauptung',
        aussage: 'Burgen waren vor allem prächtige Wohnhäuser für Adlige.',
        stimmt: false,
        gruende: [
          'Burgen waren vor allem Verteidigungsanlagen. Deshalb hatten sie zum Beispiel nur kleine Fenster.',
          'Burgen waren vor allem Herbergen für den reisenden König und sein Gefolge.',
          'Burgen waren vor allem Klöster, in denen die Ritter beteten.'
        ],
        richtig: 0,
        erkl: 'Herbergen für den reisenden König waren die Pfalzen. Burgen waren Wohnsitz und vor allem Verteidigungsanlage.'
      },
      {
        id: 'burg-u6', typ: 'behauptung',
        aussage: 'Die Burg schützte nur den Ritter und seine Familie.',
        stimmt: false,
        gruende: [
          'Bei Gefahr flüchteten auch die Bauernfamilien der umliegenden Dörfer in die Burg.',
          'Die Burg gehörte dem König, der dort das ganze Jahr wohnte.',
          'Die Bauern wohnten das ganze Jahr über in der Burg.'
        ],
        richtig: 0,
        erkl: 'Ein Burgherr musste sein Herrschaftsgebiet und dessen Bauernfamilien schützen.'
      },
      {
        id: 'burg-u7', typ: 'beschriften', abb: 'burg',
        frage: 'Verteidigung und Sicherheit auf der Burg: Welches Bauteil gehört zu welcher Nummer?',
        strukturen: ['burggraben', 'tor', 'torturm', 'wehrmauer', 'wehrgang', 'schiessscharte', 'wachturm', 'bergfried', 'verlies']
      },
      {
        id: 'burg-u8', typ: 'beschriften', abb: 'burg',
        frage: 'Wohnen und Arbeiten auf der Burg: Welcher Teil gehört zu welcher Nummer?',
        strukturen: ['vorburg', 'kernburg', 'palas', 'saal', 'kemenate', 'kapelle', 'brunnen', 'stall', 'schmiede', 'burggarten', 'plumpsklo']
      },
      {
        id: 'burg-u9', typ: 'zuordnen',
        frage: 'Welche Aufgabe hatte welcher Teil der Burg?',
        paare: [
          ['Bergfried', 'letztes Fluchtgebäude bei einer Belagerung'],
          ['Palas', 'herrschaftliches Wohngebäude mit großem Saal'],
          ['Kemenate', 'Raum, den man heizen konnte'],
          ['Wehrmauer', 'umgibt die Burg und schützt vor Angreifern'],
          ['Vorburg', 'Bereich mit Werkstätten, Stall und Schmiede'],
          ['Kapelle', 'Raum für Gebet und Gottesdienst']
        ]
      },
      {
        id: 'burg-u10', typ: 'sortieren',
        frage: 'Wohnen, Verteidigung oder Versorgung? Ordne die Teile der Burg zu.',
        kategorien: ['Wohnen', 'Verteidigung', 'Versorgung und Arbeit'],
        items: [
          ['Palas', 0], ['Kemenate', 0],
          ['Burggraben', 1], ['Tor mit Zugbrücke', 1], ['Schießscharte', 1], ['Wehrgang', 1],
          ['Schmiede', 2], ['Stall', 2], ['Brunnen', 2], ['Burggarten', 2]
        ],
        erkl: 'Viele Teile dienten der Verteidigung. Das passt zum Buch: Burgen waren vor allem Verteidigungsanlagen.'
      },
      {
        id: 'burg-u11', typ: 'mehrfach', quelle: 'burg-alltag',
        frage: 'Wer lebte laut M3 (S. 39) auf einer größeren Burg? Wähle alle richtigen Gruppen.',
        optionen: [
          'die Familie des Burgherrn mit Frauen, Kindern und unverheirateten Verwandten',
          'zehn oder mehr Männer als Besatzung',
          'Knechte für die Felder, Weinberge und Wälder',
          'Handwerker wie Schmiede, Steinmetze und Zimmermänner',
          'Mönche, die für die Burgbewohner beteten',
          'Hörige, die auf ihren Hufen lebten'
        ],
        richtig: [0, 1, 2, 3],
        erkl: 'Mönche lebten im Kloster und Hörige auf ihren Hufen in den Dörfern. Auf der Burg lebten oft viele Hundert Menschen, die meisten davon arbeiteten.'
      },
      {
        id: 'burg-u12', typ: 'luecke', quelle: 'burg-alltag',
        frage: 'Ergänze nach M3 (S. 39), wie der Alltag auf der Burg aussah.',
        text: 'Der Alltag richtete sich nach dem {Stand der Sonne|Schlag der Turmuhr|Befehl des Königs}. Die Burgbewohner arbeiteten vom {Morgengrauen|Mittag|Abend} bis zur Dunkelheit. Der Tagesablauf war ganz auf die {Landwirtschaft|Jagd|Kriegsführung} ausgerichtet. Frei war nur der {Sonntag|Samstag|Montag}. Der große Festsaal wurde nur {an besonderen Tagen|im Sommer|jeden Abend} beheizt. Abends zog man sich in die {Kemenaten|Ställe|Kapellen} zurück, weil sie schneller warm wurden.'
      },
      {
        id: 'burg-u13', typ: 'mehrfach', quelle: 'burg-hutten-brief',
        frage: 'Lies den Brief Huttens. Welche Aussagen stehen so im Text? Wähle alle richtigen.',
        optionen: [
          'Er geht nicht einmal ein kurzes Stück ohne Waffen aus dem Haus.',
          'Auf der Burg ist es laut: Tiere, Arbeiter und Wagen sind zu hören.',
          'Nach einer schlechten Ernte herrschen Not und Armut.',
          'Der Dienst bei einem Fürsten macht ihn völlig sicher.',
          'Auf der Burg ist es still, weil sie weit weg von allem liegt.'
        ],
        richtig: [0, 1, 2],
        erkl: 'Hutten fürchtet trotz seines Fürsten Überfälle. Und sogar die Wölfe hört man heulen, weil das Haus nah am Wald liegt.'
      },
      {
        id: 'burg-u14', typ: 'zeitleiste',
        frage: 'Ordne die Ereignisse rund um Burg und Ritter auf der Zeitleiste ein.',
        abschnitte: ['1000–1099', '1100–1199', 'um 1200', 'um 1300', 'um 1500'],
        ereignisse: [
          ['Die Burg Bentheim wird zum ersten Mal in schriftlichen Quellen erwähnt.', 0, '1020'],
          ['Die Burg Bentheim wird zerstört und danach wieder aufgebaut.', 1, '12. Jh.'],
          ['Wolfram von Eschenbach dichtet den „Parzival“.', 2, 'um 1200'],
          ['Die Manessische Liederhandschrift mit dem Turnierbild entsteht.', 3, 'um 1300'],
          ['Ritter Ulrich von Hutten beschreibt in einem Brief den Alltag auf seiner Burg.', 4, '1518']
        ]
      },
      {
        id: 'burg-u15', typ: 'wahl', operatorTraining: true,
        frage: 'Die Aufgabe lautet: „Erkläre die Funktion des Bergfrieds.“ Welche Antwort erfüllt den Auftrag?',
        optionen: [
          'Der Bergfried war ein hoher Turm aus Stein. Er stand in der Kernburg, hatte dicke Mauern und nur wenige kleine Fenster.',
          'Der Bergfried war ein hoher Turm aus Stein. Von oben konnte man weit Ausschau halten. Weil er so stark befestigt war, diente er bei einer Belagerung als letztes Fluchtgebäude.',
          'Zur Kernburg gehörten der Bergfried, der Palas, die Kemenate, die Kapelle und der Brunnen.',
          'Ich finde den Bergfried am schönsten, weil er so hoch ist und man von oben bestimmt eine tolle Aussicht hat.'
        ],
        richtig: 1,
        erkl: 'Erklären heißt: sagen, wozu etwas da war und warum. Die anderen Antworten beschreiben nur, zählen nur auf oder geben eine Meinung wieder.'
      },
      {
        id: 'burg-u16', typ: 'sortieren', quelle: 'burg-turnier',
        frage: 'Bildanalyse am Turnierbild: Zu welchem Schritt gehört der Satz? (Die genauen Schritte stehen im Buch auf S. 27.)',
        kategorien: ['beschreiben', 'untersuchen', 'deuten'],
        items: [
          ['Unten kämpfen zwei Ritter zu Pferd mit Lanzen gegeneinander.', 0],
          ['Oben schauen fünf Frauen über eine Mauer mit Zinnen zu.', 0],
          ['Das Bild stammt aus der Manessischen Liederhandschrift von etwa 1300.', 1],
          ['Das Bild wurde von Hand in ein Buch gemalt, es ist eine Buchmalerei.', 1],
          ['Das Bild soll zeigen: Wer im Turnier siegte, gewann Ruhm und Ansehen.', 2],
          ['Das Bild zeigt eher das Ideal des Ritters als seinen engen Alltag auf der Burg.', 2]
        ],
        erkl: 'Beschreiben: nur, was man sieht. Untersuchen: Wer hat das Bild wann und wie gemacht? Deuten: Was will das Bild zeigen?'
      },
      {
        id: 'burg-u17', typ: 'mehrfach', quelle: 'burg-turnier',
        frage: 'Womit schützte der Ritter seinen Körper? Wähle alles, was auf dem Bild und in der Bildunterschrift im Buch vorkommt.',
        optionen: ['Schild', 'Kettenhemd aus vielen Eisenringen', 'Topfhelm', 'Rüstung aus großen, glatten Metallplatten', 'Lederkappe statt Helm'],
        richtig: [0, 1, 2],
        erkl: 'In der Bildunterschrift steht: Schild, Kettenhemd aus vielen miteinander verbundenen Eisenringen und ein Helm, der wie ein Topf aussah.'
      },
      {
        id: 'burg-u18', typ: 'eingabe',
        frage: 'Wie heißt der Raum, den man heizen konnte und dessen Name vom lateinischen Wort caminata (Kamin) kommt?',
        akzeptiert: ['Kemenate', 'Kemenaten'], nicht: ['Kapelle', 'Palas'],
        erkl: 'Die Kemenaten wurden schneller warm als der große Saal. Deshalb zog man sich abends dorthin zurück.'
      },
      {
        id: 'burg-u19', typ: 'eingabe',
        frage: 'Wie heißt das herrschaftliche Wohngebäude einer Burg mit dem großen Saal für Festlichkeiten?',
        akzeptiert: ['Palas'], nicht: ['Pfalz', 'Palast', 'Kemenate'],
        erkl: 'Palas, nicht Pfalz: Eine Pfalz war eine Herberge für den reisenden König.'
      },
      {
        id: 'burg-u20', typ: 'tabelle',
        frage: 'Ordne die drei Texte ein: Was für ein Text ist es, und was zeigt er vor allem?',
        spalten: ['Material', 'Was für ein Text?', 'Was zeigt er vor allem?'],
        zeilen: [
          { kopf: 'M3, S. 37: Wolfram von Eschenbach', zellen: [
            { optionen: ['Dichtung, um 1200', 'Bericht eines Ritters über sein Leben', 'Darstellung von heute'], richtig: 0 },
            { optionen: ['ein Ideal: wie ein Ritter sein soll', 'den unbequemen Alltag eines niederen Adligen', 'einen Überblick über Menschen und Tagesablauf'], richtig: 0 }
          ] },
          { kopf: 'M4, S. 37: Ulrich von Hutten', zellen: [
            { optionen: ['Dichtung, um 1200', 'Bericht eines Ritters über sein Leben', 'Darstellung von heute'], richtig: 1 },
            { optionen: ['ein Ideal: wie ein Ritter sein soll', 'den unbequemen Alltag eines niederen Adligen', 'einen Überblick über Menschen und Tagesablauf'], richtig: 1 }
          ] },
          { kopf: 'M3, S. 39: Planet Wissen', zellen: [
            { optionen: ['Dichtung, um 1200', 'Bericht eines Ritters über sein Leben', 'Darstellung von heute'], richtig: 2 },
            { optionen: ['ein Ideal: wie ein Ritter sein soll', 'den unbequemen Alltag eines niederen Adligen', 'einen Überblick über Menschen und Tagesablauf'], richtig: 2 }
          ] }
        ],
        erkl: 'Nur Eschenbach und Hutten sind Quellen aus dem Mittelalter. M3 auf S. 39 ist eine Darstellung von heute.'
      }
    ],

    erklaeren: [
      {
        id: 'burg-e1', operator: 'beschreiben',
        frage: 'Beschreibe die Erziehung adliger Jungen zu Rittern (vgl. Buch S. 37, A1).',
        tipp: 'Geh der Reihe nach vor: Page, Knappe, Ritterschlag. Nenne jeweils das Alter und was der Junge lernte oder tat.',
        begriffe: [
          { name: 'Page', muster: ['page'] },
          { name: 'Knappe', muster: ['knapp'] },
          { name: 'Ritterschlag', muster: ['ritterschlag'] },
          { name: 'Turnier', muster: ['turnier'] },
          { name: 'Lanze und Schwert', muster: ['lanze', 'schwert'] }
        ],
        punkte: [
          { text: 'Mit sieben Jahren kam der Junge als Page auf eine fremde Burg.', p: 1 },
          { text: 'Der Page lernte, mit Lanze und Schwert zu kämpfen.', p: 1 },
          { text: 'Er lernte die Regeln der Turniere (ritterliche Kampfspiele) und gutes Benehmen.', p: 1 },
          { text: 'Mit 14 Jahren wurde er Knappe: Er begleitete seinen Herrn zu Turnieren und zog mit ihm in den Kampf.', p: 1 },
          { text: 'Wenn er sich bewährte, erhielt er mit etwa 20 Jahren den Ritterschlag, und es wurde ihm feierlich ein Schwert umgelegt.', p: 1 },
          { text: 'Richtige Reihenfolge, ganze Sätze, Fachbegriffe Page, Knappe und Ritterschlag benutzt.', p: 1 }
        ],
        muster: 'Adlige Jungen wurden schon früh auf ihren Beruf als Krieger vorbereitet. Mit sieben Jahren kam ein Junge als Page auf eine fremde Burg. Dort lernte er, mit Lanze und Schwert zu kämpfen. Man brachte ihm auch die Regeln für die Turniere bei, also für die ritterlichen Kampfspiele, und er lernte gutes Benehmen. Mit 14 Jahren wurde der Page zum Knappen. Nun begleitete er seinen Herrn zu Turnieren und zog mit ihm in den Kampf. Wenn er sich dort bewährte, wurde er mit etwa 20 Jahren in den Kreis der Ritter aufgenommen. Dazu erhielt er den Ritterschlag, und es wurde ihm feierlich ein Schwert umgelegt.'
      },
      {
        id: 'burg-e2', operator: 'erklaeren',
        frage: 'Erkläre die Funktionen der folgenden Gebäude und Bauteile: Wehrmauer, Bergfried, Palas (vgl. Buch S. 39, A2).',
        abb: 'burg', abbOpts: { beschriftet: true, nur: ['wehrmauer', 'wehrgang', 'bergfried', 'palas', 'saal'] },
        tipp: 'Sag bei jedem Teil, wozu es diente und warum. Denk daran: Die Burg war Wohnsitz und Verteidigungsanlage.',
        begriffe: [
          { name: 'Wehrmauer', muster: ['wehrmauer'] },
          { name: 'Bergfried', muster: ['bergfried'] },
          { name: 'Palas', muster: ['palas'] },
          { name: 'Belagerung', muster: ['belager'] },
          { name: 'Schutz / Verteidigung', muster: ['schutz', 'schuetz', 'verteidig'] }
        ],
        punkte: [
          { text: 'Wehrmauer: umgab die Burg und schützte sie vor Angreifern.', p: 1 },
          { text: 'Wehrmauer: Vom Wehrgang oben auf der Mauer und durch Schießscharten konnten die Verteidiger kämpfen und Ausschau halten.', p: 1 },
          { text: 'Bergfried: hoher Turm aus Stein, von dem aus man Ausschau halten konnte.', p: 1 },
          { text: 'Bergfried: letztes Fluchtgebäude bei einer Belagerung.', p: 1 },
          { text: 'Palas: herrschaftliches Wohngebäude der adligen Familie.', p: 1 },
          { text: 'Palas: großer Saal mit Holzmöbeln für Festlichkeiten und mehrere Schlafräume.', p: 1 },
          { text: 'Zusammenhang erklärt: Die Burg war Wohnsitz und Verteidigungsanlage zugleich (mit „weil“, „deshalb“, „damit“).', p: 1 }
        ],
        muster: 'Eine Burg war Wohnsitz und Verteidigungsanlage zugleich. Deshalb hatte jedes Bauteil eine bestimmte Aufgabe. Die Wehrmauer umgab die Burg und schützte sie vor Angreifern. Oben auf der Mauer lief der Wehrgang. Von dort und durch die Schießscharten konnten die Verteidiger die Burg bewachen und verteidigen. Der Bergfried war ein hoher Turm aus Stein. Von oben konnte man weit Ausschau halten. Wurde die Burg belagert, war der Bergfried das letzte Fluchtgebäude, in das sich die Bewohner retten konnten. Der Palas war das herrschaftliche Wohngebäude der adligen Familie. Darin lag ein großer Saal mit Holzmöbeln, in dem Feste gefeiert wurden, außerdem gab es mehrere Schlafräume. So diente der Palas vor allem dem Wohnen, Wehrmauer und Bergfried dem Schutz.'
      },
      {
        id: 'burg-e3', operator: 'erlaeutern',
        frage: 'Erläutere die Lebensverhältnisse auf einer Burg. Nutze den Darstellungstext, M1 (S. 36) und M4 (S. 37), gern auch M3 (S. 39) (vgl. Buch S. 37, A3).',
        quelle: 'burg-hutten',
        material: '<p><strong>Aus M1, S. 36 (Foto der Burg Bentheim, Bildunterschrift):</strong> „1 = Bergfried, 2 = Batterieturm (= ein Verteidigungsturm), 3 = äußeres Tor, 4 = inneres Tor, 5 = Katharinenkirche, 6 = Kronenburg (= Wohngebäude der Burgherren), 7 Marstall (= diente zur Unterbringung der Pferde), 8 = Burgbrunnen, 9 = Wehrgang, 10 = Garten“</p>' +
          '<p><strong>Aus M3, S. 39 (Darstellung von heute):</strong> „Mit dem Morgengrauen standen die Burgbewohner auf und arbeiteten bis zur Dunkelheit. … Der große Festsaal wurde nur an besonderen Tagen beheizt. Gegen Abend zogen sich die Burgbewohner in die kleineren Räume zurück, die sogenannten Kemenaten, da diese schneller aufheizten.“</p>',
        tipp: 'Erläutern heißt: erklären und mit Beispielen aus dem Material belegen. Schreib zum Beispiel: „In M4 heißt es …“',
        begriffe: [
          { name: 'Verteidigung / Wehr', muster: ['wehr', 'verteidig'] },
          { name: 'Bergfried', muster: ['bergfried'] },
          { name: 'Enge', muster: ['eng'] },
          { name: 'Kemenate', muster: ['kemenat'] },
          { name: 'Fenster', muster: ['fenster'] },
          { name: 'Kälte / Heizen', muster: ['kalt', 'kaelt', 'heiz'] },
          { name: 'Gestank', muster: ['stink', 'gestank'] }
        ],
        punkte: [
          { text: 'Die Burg war vor allem zur Verteidigung gebaut, nicht für die Behaglichkeit (M4).', p: 1 },
          { text: 'Beleg aus M1 (Burg Bentheim): viele Verteidigungsbauten wie Bergfried, Batterieturm, äußeres und inneres Tor und Wehrgang neben dem Wohngebäude der Burgherren, der Kronenburg.', p: 1 },
          { text: 'Enge: Ställe für Vieh und Pferde, Dunkelkammern und Waffen lagen dicht beieinander (M4).', p: 1 },
          { text: 'Gestank von Schießpulver, Hunden und ihrem Unrat (M4).', p: 1 },
          { text: 'Kälte und Dunkelheit: kleine Fenster, im Winter mit Holzläden verschlossen, Glas nur für sehr reiche Adlige (Darstellungstext).', p: 1 },
          { text: 'Der Festsaal wurde nur an besonderen Tagen beheizt, abends zog man sich in die Kemenaten zurück (M3).', p: 1 },
          { text: 'Langer Arbeitstag vom Morgengrauen bis zur Dunkelheit (M3).', p: 1 },
          { text: 'Aussagen mit Belegen aus dem Material verknüpft und ein Fazit gezogen.', p: 1 }
        ],
        muster: 'Das Leben auf einer Burg war viel unbequemer, als man oft denkt. Das lag vor allem daran, dass Burgen Verteidigungsanlagen waren. Das sieht man am Foto der Burg Bentheim (M1): Neben dem Wohngebäude der Burgherren, der Kronenburg, gibt es viele Bauten für die Verteidigung, zum Beispiel den Bergfried, einen Batterieturm, ein äußeres und ein inneres Tor und einen Wehrgang. Ulrich von Hutten schreibt in M4, die Burg sei „nicht für die Behaglichkeit, sondern zur Wehr erbaut“. Innen war es sehr eng, denn Vieh- und Pferdeställe, Dunkelkammern und Waffen lagen dicht beieinander. Außerdem stank es überall nach Schießpulver und nach den Hunden und ihrem Unrat. Kalt und dunkel war es auch: Die Fenster waren klein und wurden im Winter mit Holzläden verschlossen. Glasfenster konnten sich nur sehr reiche Adlige leisten. Der große Festsaal wurde nur an besonderen Tagen beheizt. Deshalb zogen sich die Bewohner abends in die Kemenaten zurück, weil diese schneller warm wurden (M3). Dazu kam viel Arbeit: Man stand mit dem Morgengrauen auf und arbeitete bis zur Dunkelheit. Insgesamt bot die Burg vor allem Schutz, aber wenig Bequemlichkeit.'
      }
    ],

    hoftag: {
      wissen: [
        {
          id: 'burg-hw1', typ: 'zuordnen',
          frage: 'Wer hatte auf der Burg welche Aufgabe?',
          paare: [
            ['Burgherr', 'musste sein Herrschaftsgebiet und dessen Bauernfamilien schützen'],
            ['Besatzung', 'bewachte die Burg'],
            ['Knechte', 'arbeiteten auf den Feldern, in Weinbergen und Wäldern'],
            ['Mägde', 'dienten der Burgherrin und ihren Verwandten']
          ]
        },
        {
          id: 'burg-hw2', typ: 'luecke',
          text: 'Mit {sieben|zehn|vierzehn} Jahren kam ein adliger Junge als {Page|Knappe|Vasall} auf eine fremde Burg. Mit 14 Jahren wurde er {Knappe|Ritter|Meier}. Bewährte er sich, erhielt er mit etwa {20|14|30} Jahren den {Ritterschlag|Treueid|Zehnt}.'
        },
        {
          id: 'burg-hw3', typ: 'eingabe',
          frage: 'Wie heißt der hohe Turm aus Stein, der bei einer Belagerung das letzte Fluchtgebäude war?',
          akzeptiert: ['Bergfried'], nicht: ['Wachturm', 'Torturm', 'Palas']
        },
        {
          id: 'burg-hw4', typ: 'wahl',
          frage: 'Warum hatten Burgen nur kleine Fenster?',
          optionen: ['Weil Burgen vor allem Verteidigungsanlagen waren.', 'Weil es im Mittelalter noch kein Fensterglas gab.', 'Weil der König große Fenster verboten hatte.', 'Weil man im Palas kein Tageslicht haben wollte.'],
          richtig: 0,
          erkl: 'Glasfenster gab es, aber nur sehr reiche Adlige konnten sie sich leisten. Im Winter verschloss man die kleinen Fenster mit Holzläden.'
        },
        {
          id: 'burg-hw5', typ: 'sortieren',
          frage: 'Vorburg oder Kernburg? Ordne zu.',
          kategorien: ['Vorburg', 'Kernburg'],
          items: [['Stall', 0], ['Schmiede', 0], ['Werkstätten', 0], ['Palas', 1], ['Kapelle', 1], ['Bergfried', 1]]
        },
        {
          id: 'burg-hw6', typ: 'behauptung',
          aussage: 'Ritter waren Bauern, die nebenbei auch kämpften.',
          stimmt: false,
          gruende: ['Ritter waren Adlige und von Beruf Krieger.', 'Ritter waren freie Bauern, die Kriegsdienst leisten mussten.', 'Ritter waren Geistliche, die Burgen verwalteten.'],
          richtig: 0,
          erkl: 'Freie Bauern mussten zwar Kriegsdienst leisten. Ritter aber waren Adlige und von Beruf Krieger.'
        }
      ],
      material: [
        {
          id: 'burg-hm1', quelle: 'burg-hutten-brief',
          text: 'Ulrich von Hutten (1488–1523) war Ritter. 1518 schrieb er einen Brief an seinen Freund Willibald Pirckheimer, der in der Stadt Nürnberg lebte. Darin erklärt er, warum er auf seiner Burg keine Ruhe findet. Der Brief ist derselbe, aus dem M4 (S. 37) stammt. Die folgenden Stellen stehen aber nicht in deinem Buch.',
          items: [
            {
              id: 'burg-hm1-1', typ: 'wahl', p: 1,
              frage: 'Um welche Art von Quelle handelt es sich?',
              optionen: ['einen Brief eines Ritters an einen Freund in der Stadt', 'eine Urkunde des Königs über ein Lehen', 'eine Darstellung aus einem heutigen Schulbuch', 'ein Gedicht über einen idealen Ritter'],
              richtig: 0
            },
            {
              id: 'burg-hm1-2', typ: 'sortieren', p: 2,
              frage: 'Worum geht es in welchem Satz? Ordne zu.',
              kategorien: ['Gefahr', 'Lärm', 'Arbeit und Not'],
              items: [
                ['Feinde des Fürsten können ihn überfallen und wegschleppen.', 0],
                ['Er besucht kein Dorf ohne Waffen.', 0],
                ['Schafe blöken, Rinder brüllen, Hunde bellen.', 1],
                ['Sogar die Wölfe hört man heulen.', 1],
                ['Äcker pflügen, säen, düngen, mähen, dreschen.', 2],
                ['Nach einer schlechten Ernte herrschen Not und Armut.', 2]
              ]
            },
            {
              id: 'burg-hm1-3', typ: 'wahl', p: 1,
              frage: 'Warum dient Hutten einem Fürsten?',
              optionen: ['Er erhofft sich von ihm Schutz.', 'Er muss ihm als Höriger Frondienste leisten.', 'Er will an seinem Hof Lesen und Schreiben lernen.', 'Der Fürst zahlt ihm einen Lohn als Knecht.'],
              richtig: 0
            },
            {
              id: 'burg-hm1-4', typ: 'behauptung', p: 1,
              aussage: 'Hutten führte auf seiner Burg ein ruhiges und sicheres Leben.',
              stimmt: false,
              gruende: ['Er beschreibt ständige Gefahr, Lärm, viel Arbeit und Not nach schlechten Ernten.', 'Er lebte gar nicht auf einer Burg, sondern in einem Kloster.', 'Er war noch ein Page und durfte die Burg nicht verlassen.'],
              richtig: 0
            },
            {
              id: 'burg-hm1-5', typ: 'wahl', p: 1,
              frage: 'Vergleiche mit M3 auf S. 37 (Wolfram von Eschenbach). Welche Aussage trifft zu?',
              optionen: ['Eschenbach beschreibt ein Ideal, Hutten den harten Alltag eines niederen Adligen.', 'Beide beschreiben vor allem den Lärm auf der Burg.', 'Hutten und Eschenbach lebten zur selben Zeit.', 'Eschenbach klagt noch mehr über Gefahren als Hutten.'],
              richtig: 0
            }
          ],
          erkl: {
            id: 'burg-hm1-e', operator: 'einordnen',
            frage: 'Ordne den Brief ein: Wer schrieb ihn, wann, an wen und wozu? Nenne Beispiele aus dem Text, die zu dieser Absicht passen. Begründe kurz, wie glaubwürdig der Brief ist.',
            begriffe: [
              { name: 'Brief', muster: ['brief'] },
              { name: 'Ritter', muster: ['ritter'] },
              { name: 'Fürst', muster: ['fuerst', 'furst'] },
              { name: 'Gefahr', muster: ['gefahr', 'ueberf', 'waffen'] }
            ],
            punkte: [
              { text: 'Verfasser und Zeit: der Ritter Ulrich von Hutten, 1518, also am Ende des Mittelalters.', p: 1 },
              { text: 'Empfänger und Absicht: Brief an seinen Freund Pirckheimer in der Stadt Nürnberg; Hutten will zeigen, dass das Leben auf der Burg weder ruhig noch bequem ist.', p: 1 },
              { text: 'Beispiele aus dem Text zur Absicht: Gefahr (nur bewaffnet unterwegs, Lösegeld), Lärm, viel Arbeit, Not nach schlechter Ernte.', p: 1 },
              { text: 'Begründung der Glaubwürdigkeit: Hutten kennt das Leben aus eigener Erfahrung, er klagt aber und übertreibt vielleicht.', p: 1 }
            ],
            muster: 'Der Text ist ein Brief des Ritters Ulrich von Hutten aus dem Jahr 1518, also vom Ende des Mittelalters. Er schrieb ihn an seinen Freund Willibald Pirckheimer, der in der Stadt Nürnberg lebte. Hutten will ihm zeigen, dass das Leben auf einer Burg nicht ruhig ist. Er geht nur bewaffnet aus dem Haus, weil Feinde seines Fürsten ihn überfallen könnten, und dann müsste er ein hohes Lösegeld zahlen. Außerdem ist es laut, die Arbeit hört nie auf, und nach einer schlechten Ernte herrscht Not. Die Quelle ist glaubwürdig, weil Hutten aus eigener Erfahrung berichtet. Weil er sich bei seinem Freund beklagt, übertreibt er vielleicht ein wenig.'
          }
        },
        {
          id: 'burg-hm2', quelle: 'burg-turnier',
          text: 'Das Bild stammt aus der Manessischen Liederhandschrift (um 1300). Du kennst es aus dem Buch (S. 37, M2).',
          items: [
            {
              id: 'burg-hm2-1', typ: 'mehrfach', p: 2,
              frage: 'Beschreiben: Was ist auf dem Bild zu sehen? Wähle alles Richtige.',
              optionen: ['zwei Ritter zu Pferd, die mit Lanzen kämpfen', 'Frauen, die von einer Mauer aus zuschauen', 'ein Ritter, der vom Pferd stürzt', 'Bauern, die ein Feld pflügen', 'Kanonen, die auf eine Burg schießen'],
              richtig: [0, 1, 2]
            },
            {
              id: 'burg-hm2-2', typ: 'wahl', p: 1,
              frage: 'Untersuchen: Um welche Art von Quelle handelt es sich?',
              optionen: ['eine Buchmalerei aus einer mittelalterlichen Handschrift, um 1300', 'ein Foto von einem Ritterspiel auf einer Burg heute', 'eine Rekonstruktionszeichnung aus einem Schulbuch', 'ein Holzschnitt aus dem Jahr 1488'],
              richtig: 0
            },
            {
              id: 'burg-hm2-3', typ: 'wahl', p: 1,
              frage: 'Untersuchen: Welche Art von Kampf zeigt das Bild?',
              optionen: ['ein Turnier, ein ritterliches Kampfspiel nach Regeln', 'die Belagerung einer Burg', 'eine Schlacht zwischen Rittern und Bauern', 'die Ausbildung eines Pagen mit dem Holzschwert'],
              richtig: 0
            },
            {
              id: 'burg-hm2-4', typ: 'wahl', p: 1,
              frage: 'Deuten: Was will das Bild vor allem zeigen?',
              optionen: ['Tapferkeit und Ansehen eines Ritters vor Zuschauern', 'wie eng und schmutzig es auf einer Burg war', 'wie Bauern ihre Abgaben auf die Burg brachten', 'wie ein Knappe seinem Herrn die Waffen trägt'],
              richtig: 0
            },
            {
              id: 'burg-hm2-5', typ: 'eingabe', p: 1,
              frage: 'Wie heißt die Schutzkleidung aus vielen miteinander verbundenen Eisenringen, die die Ritter auf dem Bild tragen?',
              akzeptiert: ['Kettenhemd', 'Kettenhemden'], nicht: ['Topfhelm', 'Rüstung', 'Schild']
            }
          ],
          erkl: {
            id: 'burg-hm2-e', operator: 'untersuchen',
            frage: 'Untersuche das Turnierbild: Was erfährst du daraus über Ritter, und was zeigt es nicht?',
            begriffe: [
              { name: 'Turnier', muster: ['turnier'] },
              { name: 'Kettenhemd', muster: ['kettenhemd'] },
              { name: 'Topfhelm', muster: ['topfhelm', 'helm'] },
              { name: 'Liederhandschrift', muster: ['handschrift', 'buchmalerei'] }
            ],
            punkte: [
              { text: 'Quellenart und Zeit: Buchmalerei aus der Manessischen Liederhandschrift, um 1300.', p: 1 },
              { text: 'Turnier: Zwei Ritter kämpfen zu Pferd mit Lanzen nach Regeln, einer stürzt, Frauen schauen zu.', p: 1 },
              { text: 'Ausrüstung: Schild, Kettenhemd aus Eisenringen, Topfhelm.', p: 1 },
              { text: 'Grenze: Das Bild zeigt eine prächtige, ideale Szene, nicht den engen, kalten und arbeitsreichen Alltag auf der Burg.', p: 1 }
            ],
            muster: 'Das Bild ist eine Buchmalerei aus der Manessischen Liederhandschrift von etwa 1300. Es zeigt ein Turnier, also ein ritterliches Kampfspiel nach Regeln. Zwei Ritter reiten mit Lanzen aufeinander los, einer stürzt vom Pferd. Oben schauen Frauen von einer Mauer aus zu. Man erkennt die Ausrüstung der Ritter: Schild, Kettenhemd aus Eisenringen und einen Helm, der wie ein Topf aussieht. Das Bild zeigt die Ritter prächtig und tapfer. Über den engen, kalten und arbeitsreichen Alltag auf der Burg erfährt man daraus aber nichts.'
          }
        }
      ],
      schreiben: [
        {
          id: 'burg-hs1', operator: 'erlaeutern',
          frage: 'Erläutere, warum eine Burg zugleich Wohnsitz und Verteidigungsanlage war. Gehe dabei auf mindestens drei Gebäude oder Bauteile ein.',
          begriffe: [
            { name: 'Wohnsitz', muster: ['wohn'] },
            { name: 'Verteidigung / Schutz', muster: ['verteidig', 'schutz', 'schuetz'] },
            { name: 'Bergfried', muster: ['bergfried'] },
            { name: 'Palas', muster: ['palas'] },
            { name: 'Wehrmauer', muster: ['wehrmauer'] },
            { name: 'Burggraben', muster: ['graben'] }
          ],
          punkte: [
            { text: 'Die Burg war der Wohnort der adligen Familie.', p: 1 },
            { text: 'Sie schützte vor Angriffen: Der Burgherr musste sein Gebiet und dessen Bauernfamilien schützen, bei Gefahr flüchteten auch sie in die Burg.', p: 1 },
            { text: 'Entwicklung: Aus befestigten Holzgebäuden wurden stark befestigte Wohnsitze aus Stein.', p: 1 },
            { text: 'Verteidigung: Burggraben, Tor mit Zugbrücke, Wehrmauer mit Wehrgang und Schießscharten.', p: 1 },
            { text: 'Bergfried: hoher Turm, letztes Fluchtgebäude bei einer Belagerung.', p: 1 },
            { text: 'Wohnen: Palas mit großem Saal und Schlafräumen, Kemenate als Raum, den man heizen konnte.', p: 1 },
            { text: 'Folge für das Wohnen: nur kleine Fenster, im Winter mit Holzläden verschlossen, Glas nur für sehr reiche Adlige.', p: 1 },
            { text: 'Mit Beispielen und Fachbegriffen erläutert, Zusammenhang hergestellt (z. B. „Das zeigt sich an …“).', p: 1 }
          ],
          muster: 'Eine Burg hatte zwei Aufgaben. Sie war der Wohnort der adligen Familie, und sie schützte vor Angriffen. Ein Burgherr musste nämlich sein Herrschaftsgebiet und dessen Bauernfamilien schützen. Bei Gefahr flüchteten deshalb auch die Bauern der umliegenden Dörfer in die Burg. Zuerst waren Burgen oft befestigte Holzgebäude, später wurden daraus stark befestigte Wohnsitze aus Stein. Der Verteidigung dienten zum Beispiel der Burggraben, das Tor mit Zugbrücke und die Wehrmauer. Vom Wehrgang aus und durch die Schießscharten konnten die Verteidiger kämpfen. Der Bergfried war ein hoher Turm und das letzte Fluchtgebäude bei einer Belagerung. Zum Wohnen gab es den Palas, das herrschaftliche Wohngebäude mit einem großen Saal für Feste und mit Schlafräumen, und die Kemenate, einen Raum, den man heizen konnte. Weil die Burg aber vor allem eine Verteidigungsanlage war, hatte sie nur kleine Fenster, die im Winter mit Holzläden verschlossen wurden. Das zeigt: Der Schutz war wichtiger als die Bequemlichkeit.'
        },
        {
          id: 'burg-hs2', operator: 'beurteilen',
          frage: 'Ein Mitschüler sagt: „Die Ritter lebten auf ihren Burgen in Luxus.“ Beurteile diese Aussage mit den Augen der Menschen damals. Nutze den Darstellungstext, M4 (S. 37) und M3 (S. 39).',
          tipp: 'Sammle Gründe dafür und dagegen. Vergleiche mit dem Leben der Bauern damals. Deine heutige Meinung gehört nicht in ein Sachurteil.',
          begriffe: [
            { name: 'Behaglichkeit', muster: ['behaglich', 'bequem'] },
            { name: 'Kemenate', muster: ['kemenat'] },
            { name: 'Gesinde', muster: ['gesinde', 'knecht', 'magd', 'maegd'] },
            { name: 'Pacht / Abgaben', muster: ['pacht', 'abgab'] },
            { name: 'Adlige', muster: ['adlig'] }
          ],
          punkte: [
            { text: 'Dafür: Ritter waren Adlige; sie lebten von armen Bauern, denen sie ihr Land verpachteten (M4).', p: 1 },
            { text: 'Dafür: großer Saal für Feste, Küchenpersonal, Knechte und Mägde; sehr reiche Adlige hatten sogar Glasfenster.', p: 1 },
            { text: 'Dagegen: Die Burg war zur Wehr gebaut, nicht für die Behaglichkeit; innen eng, mit Ställen, Dunkelkammern und Waffen, dazu Gestank von Schießpulver, Hunden und ihrem Unrat (M4).', p: 1 },
            { text: 'Einschränkung beachtet: Hutten schreibt 1518 über die Burg eines niederen Adligen; Schießpulver gab es auf Burgen um 1200 noch nicht.', p: 1 },
            { text: 'Dagegen: kalt und dunkel, kleine Fenster mit Holzläden, Festsaal nur an besonderen Tagen beheizt (Darstellungstext, M3).', p: 1 },
            { text: 'Dagegen: Ein niederer Adliger wie Hutten hatte nur geringen Ertrag und brauchte den Schutz eines Fürsten (M4).', p: 1 },
            { text: 'Maßstab der damaligen Zeit: Vergleich mit den Bauern (einfache Hütten, Schlafen auf Stroh) und Unterschied zwischen sehr reichen und niederen Adligen.', p: 1 },
            { text: 'Begründetes Sachurteil ohne heutige Wertung, z. B.: Adlige lebten besser als Bauern, von Luxus kann man aber höchstens bei sehr reichen Adligen sprechen.', p: 1 }
          ],
          muster: 'Die Aussage stimmt nur zum Teil. Für sie spricht, dass Ritter Adlige waren. Sie lebten von armen Bauern, denen sie ihre Äcker, Weinberge und Wiesen verpachteten (M4). Auf einer großen Burg gab es einen Festsaal, Küchenpersonal sowie Knechte und Mägde, und sehr reiche Adlige konnten sich sogar Fenster aus Glas leisten. Gegen die Aussage spricht aber vieles. Hutten schreibt, die Burg sei „nicht für die Behaglichkeit, sondern zur Wehr erbaut“. Innen war es eng, Ställe, Dunkelkammern und Waffen lagen dicht beieinander, und es stank nach Schießpulver und Hunden. Außerdem war es kalt und dunkel: Die Fenster waren klein und wurden im Winter mit Holzläden verschlossen, der Festsaal wurde nur an besonderen Tagen beheizt (M3). Ein niederer Adliger wie Hutten hatte zudem nur einen geringen Ertrag und brauchte den Schutz eines Fürsten. Allerdings muss man beachten: Hutten schreibt erst 1518, und zwar über die Burg eines niederen Adligen. Schießpulver gab es auf den Burgen um 1200 noch nicht. Aus Sicht der Menschen damals lebten die Adligen zwar besser als die Bauern, die in einfachen Hütten auf Stroh schliefen. Von Luxus kann man aber höchstens bei sehr reichen Adligen sprechen. Für die meisten Ritter war die Burg vor allem ein enger, kalter und unbequemer Schutzbau.'
        }
      ]
    },

    geruechte: [
      { id: 'burg-g1', aussage: 'Ritter waren von Beruf Krieger.', stimmt: true, erkl: 'Ritter waren Adlige und von Beruf Krieger.' },
      { id: 'burg-g2', aussage: 'Ein Knappe war jünger als ein Page.', stimmt: false, erkl: 'Umgekehrt: Page ab 7 Jahren, Knappe ab 14 Jahren.' },
      { id: 'burg-g3', aussage: 'Von rund 20 000 Burgen in Deutschland existieren noch etwa 6000.', stimmt: true, erkl: 'So steht es im Buch auf S. 36.' },
      { id: 'burg-g4', aussage: 'Der Bergfried war das letzte Fluchtgebäude bei einer Belagerung.', stimmt: true, erkl: 'Der hohe Turm aus Stein war die letzte Zuflucht.' },
      { id: 'burg-g5', aussage: 'Die meisten Burgen hatten große Glasfenster.', stimmt: false, erkl: 'Burgen hatten kleine Fenster mit Holzläden. Glas konnten sich nur sehr reiche Adlige leisten.' },
      { id: 'burg-g6', aussage: 'Der große Festsaal wurde jeden Tag beheizt.', stimmt: false, erkl: 'Nur an besonderen Tagen. Abends zog man sich in die Kemenaten zurück.' },
      { id: 'burg-g7', aussage: 'Der Name der Burg wurde oft zum Familiennamen ihrer adligen Besitzer.', stimmt: true, erkl: 'Das Buch sagt sogar: meistens.' },
      { id: 'burg-g8', aussage: 'Bei Gefahr durften die Bauern nicht in die Burg.', stimmt: false, erkl: 'Bei Gefahr flüchteten auch die Bauernfamilien der umliegenden Dörfer in die Burg.' },
      { id: 'burg-g9', aussage: 'Der Palas war der Stall für die Pferde.', stimmt: false, erkl: 'Der Palas war das herrschaftliche Wohngebäude mit dem großen Saal.' },
      { id: 'burg-g10', aussage: 'Adlige Mädchen lernten Lesen und Schreiben.', stimmt: true, erkl: 'So steht es im Buch auf S. 36.' }
    ],

    schatz: [
      {
        id: 'burg-s1', titel: 'Eine Handschrift auf Reisen',
        text: 'Die Manessische Liederhandschrift, aus der das Turnierbild stammt, entstand zwischen etwa 1300 und 1340 in Zürich. Sie enthält fast 6000 Strophen von 140 Dichtern. Vor den Liedern von 137 Sängern steht jeweils ein ganzseitiges Bild. Über 230 Jahre lag die Handschrift in der Königlichen Bibliothek in Paris. Erst ein kompliziertes Tauschgeschäft brachte sie 1888 nach Heidelberg, wo sie heute in der Universitätsbibliothek liegt.',
        nachweis: 'Universitätsbibliothek Heidelberg, „Codex Manesse“ (Cod. Pal. germ. 848), digi.ub.uni-heidelberg.de/de/bpd/glanzlichter/codex_manesse.html'
      },
      {
        id: 'burg-s2', titel: 'Ein Dichter ohne Buchstaben?',
        text: 'Wolfram von Eschenbach, von dem M3 stammt, schreibt im „Parzival“ über sich selbst: „ine kan decheinen buochstap“, ungefähr: „Ich kenne keinen Buchstaben.“ Die Forschung deutet das meist anders, als es klingt: Wolfram meinte wohl, dass er ein Laie war und keine lateinische Schule besucht hatte wie die Geistlichen. Kurz davor nennt er den Ritterdienst seine Art: „schildes ambet ist mîn art“.',
        nachweis: 'Wolfram von Eschenbach, Parzival 115,11 und 115,27; Deutung nach Elke Ukena-Best, Artikel „Wolfram von Eschenbach“, in: Neue Deutsche Biographie 28 (2024), S. 468–471'
      }
    ]
  });
})();
