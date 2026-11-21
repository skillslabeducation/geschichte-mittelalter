/* Bauplatz 5: Dorf und Felder – Leben der Bauern (Buch S. 34/35) */
(function () {
  'use strict';
  var W = (window.W = window.W || {});

  var SAAT = ['Wintersaat', 'Frühjahrssaat', 'Brache'];

  W.bauplaetze.push({
    id: 'dorf', nr: 5, titel: 'Dorf und Felder', thema: 'Leben der Bauern', zeit: 'um 1000–1200', buch: 'S. 34/35', checkliste: 4,
    chronist: 'Hier wohnen die meisten Menschen des Tals, und von ihrer Arbeit leben alle anderen. Aufgeschrieben haben das allerdings meistens wir Mönche, nicht die Bauern selbst.',
    leitfrage: 'Wie lebten die Bauern im Mittelalter, und wie veränderten neue Techniken ihr Leben?',

    karten: [
      {
        titel: 'Ein Dorf im Wald',
        text: '<p>Um 1000 bedeckten riesige Wälder große Teile Europas. Die Bauerndörfer lagen mitten in diesen Wäldern.</p>' +
          '<p>Für neue Ackerflächen fällten die Bauern den Wald mit einfachen Werkzeugen oder brannten ganze Waldstücke nieder. Diese <dfn>Rodung</dfn> war harte Arbeit. Außerdem:</p>' +
          '<ul><li>Sümpfe wurden trockengelegt.</li><li>An vielen Flüssen und Küsten wurden Deiche gegen Überschwemmungen gebaut.</li></ul>' +
          '<p>Die meisten Menschen im Mittelalter waren Bauern. Von ihrer Arbeit lebten auch Adlige und Geistliche.</p>',
        merk: 'Um 1000 bedeckten riesige Wälder Europa. Neues Ackerland gewannen die Bauern durch Rodung, durch das Trockenlegen von Sümpfen und durch Deiche.'
      },
      {
        titel: 'Wohnen und Arbeiten',
        text: '<p>Die Bauernfamilien lebten in einfachen Häusern oder Hütten. Viele bestanden nur aus einem einzigen Raum.</p>' +
          '<ul><li>Geschlafen wurde auf <strong>Stroh</strong>.</li>' +
          '<li>Eine <strong>Feuerstelle</strong> diente zum Kochen und gab Wärme und Helligkeit. Der Rauch zog durch kleine Öffnungen im Dach langsam ab.</li>' +
          '<li>Kerzen konnten sich die Bauern nicht leisten. Kleine Löcher in den Wänden ließen etwas Licht und Luft herein.</li></ul>' +
          '<p>Der harte Arbeitstag begann bei Sonnenaufgang und endete bei Einbruch der Dunkelheit. Eine Uhr hatten die Bauern nicht. Sie bestimmten die Zeit ungefähr nach dem Sonnenstand und den Sternen.</p>',
        merk: 'Bauern wohnten eng und einfach: oft ein einziger Raum, Stroh zum Schlafen, eine Feuerstelle für Kochen, Wärme und Licht. Gearbeitet wurde von Sonnenaufgang bis zur Dunkelheit.'
      },
      {
        titel: 'Essen, Kleidung, Gesundheit',
        text: '<p>Die <dfn>Lebensbedingungen</dfn> der Bauern waren schlecht:</p>' +
          '<ul><li><strong>Essen:</strong> Hauptnahrungsmittel war ein Brei aus verschiedenen Getreidesorten. Dazu sammelte man Früchte, Wurzeln oder Pilze. Fleisch kam nur selten in den Kochtopf.</li>' +
          '<li><strong>Kleidung:</strong> vielfach ausgebessert und grau, denn Färbemittel für leuchtende Farben waren teuer.</li>' +
          '<li><strong>Gesundheit:</strong> Parasiten verbreiteten Krankheiten, gegen die es kein Heilmittel gab. Toiletten waren Löcher in der Erde, oft neben dem Brunnen gegraben. Sie verunreinigten das Trinkwasser.</li></ul>' +
          '<p>Die Hälfte der Kinder starb in den ersten sechs Lebensjahren an <dfn>Unterernährung</dfn> oder Krankheiten. Wer Kindheit und Jugend überlebte, hatte eine <dfn>Lebenserwartung</dfn> von 30 bis 40 Jahren.</p>',
        merk: 'Getreidebrei, graue Kleidung, verunreinigtes Trinkwasser, Krankheiten ohne Heilmittel: Die Lebensbedingungen der Bauern waren schlecht. Die Hälfte der Kinder starb in den ersten sechs Lebensjahren.',
        achtung: '<strong>Aufgepasst</strong>: „Lebenserwartung von 30 bis 40 Jahren“ heißt nicht, dass alle mit etwa 35 starben. Wer Kindheit und Jugend überlebte, hatte laut Buch eine Lebenserwartung von 30 bis 40 Jahren. Viele wurden auch deutlich älter. Viele Kinder starben dagegen schon sehr früh.'
      },
      {
        titel: 'Neue Techniken',
        text: '<p>Wichtige Erfindungen verbesserten die Arbeit der Bauern:</p>' +
          '<ul><li><strong>Wasser- und Windmühlen</strong> entstanden laut Buch ab dem 10. Jahrhundert überall. Sie trieben Geräte zum Mahlen an, außerdem Blasebälge, Schmelzöfen und Schmiedehämmer.</li>' +
          '<li>Der mit Eisen beschlagene <dfn>Räderpflug</dfn> brach die Erde um, statt sie nur anzuritzen.</li>' +
          '<li><strong>Schubkarre</strong> und <strong>Lastkarren</strong> erleichterten den Warentransport. Dazu kam der vierrädrige Wagen.</li>' +
          '<li>Mit dem <dfn>Kummet</dfn> konnten Pferde die doppelte Last ziehen. Sie bekamen auch Hufeisen.</li>' +
          '<li>Ochsen bekamen ein gepolstertes Holzbrett zwischen die Hörner. Sie waren langsamer als Pferde, zogen aber viel schwerere Lasten.</li>' +
          '<li>Im 11. Jahrhundert ersetzte die <dfn>Sense</dfn> die Sichel.</li>' +
          '<li>Gedüngt wurde mit Mist und <dfn>Mergel</dfn>.</li></ul>' +
          '<p><span class="tag tag--zusatz">Zusatz</span> Ganz verschwunden ist die Sichel nicht: Auf dem Monatsbild von 1480 (S. 35, M2) schneidet eine Bäuerin Getreide noch mit der Sichel. Die Sense setzte sich zuerst beim Heumähen durch.</p>',
        merk: 'Mühlen, eiserner Räderpflug, Kummet und Hufeisen, Sense, Wagen und Dünger machten die Arbeit leichter und schneller und die Böden ertragreicher.',
        achtung: '<strong>Aufgepasst</strong>: Das Kummet ist ein gepolsterter Halskragen für Zugpferde, kein Sattel. Und Ochsen waren nicht schneller als Pferde, sondern langsamer. Dafür zogen sie schwerere Lasten.<br><span class="tag tag--zusatz">Zusatz</span> Wassermühlen gab es schon früher, zum Beispiel auf Karls Königshöfen um 800. Ab dem 10. Jahrhundert wurden sie überall gebaut. Windmühlen sind in Europa erst ab dem Ende des 12. Jahrhunderts sicher belegt (zuerst 1185 in England). In der Arbeit darfst du die Angabe des Buchs verwenden.',
        abb: 'neuerungen', abbOpts: { beschriftet: true }
      },
      {
        titel: 'Die Dreifelderwirtschaft',
        text: '<p>Bis zum 11. Jahrhundert ließen die Bauern ein Feld nach der Ernte ein Jahr unbearbeitet („brach“) liegen, damit sich der Boden erholte. Man nennt das heute oft <dfn>Zweifelderwirtschaft</dfn> (Begriff nicht im Buch).</p>' +
          '<p>Eine bedeutende Neuerung war der Übergang zur <dfn>Dreifelderwirtschaft</dfn>. Das Ackerland wurde in drei Felder geteilt. Auf jedem Feld wechselten <dfn>Wintersaat</dfn>, <dfn>Frühjahrssaat</dfn> und <dfn>Brache</dfn> einander ab. Das schonte den Boden, und der Ernteertrag stieg.</p>' +
          '<p><strong>So liest du das Schaubild:</strong> Eine Spalte von oben nach unten zeigt, wie ein Feld von Jahr zu Jahr genutzt wird. Eine Zeile zeigt alle Felder in einem Jahr. Zähle in einer Zeile, wie viele Felder brachliegen, und vergleiche mit der Zweifelderwirtschaft darunter.</p>',
        merk: 'Dreifelderwirtschaft: Auf jedem Feld folgen Wintersaat, Frühjahrssaat und Brache aufeinander. Jedes Jahr ruht nur ein Feld. Das schont den Boden, der Ertrag steigt.',
        achtung: '<strong>Aufgepasst</strong>: Brache heißt nicht, dass ein Feld aufgegeben wird. Es ruht nur ein Jahr, damit sich der Boden erholt. Jedes Jahr liegt ein anderes Feld brach.',
        abb: 'dreifelder'
      },
      {
        titel: 'Mehr Ertrag, mehr Menschen',
        text: '<p>Die neuen Techniken und die Dreifelderwirtschaft hatten große Folgen. Sie bilden eine Kette:</p>' +
          '<ul><li>Räderpflug, Kummet, Sense und Mühlen erleichterten die Arbeit. Dünger aus Mist und Mergel verbesserte die Böden, die Dreifelderwirtschaft schonte sie.</li>' +
          '<li>Der Ernteertrag stieg.</li>' +
          '<li>Durch die neuen Erfindungen konnten mehr Menschen ernährt werden.</li>' +
          '<li>Die Zahl der Bevölkerung wuchs: Im Jahr 1200 lebten auf der Fläche des heutigen Deutschlands fünfmal so viele Menschen wie im Jahr 800.</li></ul>' +
          '<p>Dieses <dfn>Bevölkerungswachstum</dfn> meint das Buch, wenn es nach dem Zusammenhang zwischen neuen Techniken und Bevölkerung fragt.</p>',
        merk: 'Neue Techniken → höherer Ernteertrag → mehr Menschen werden ernährt → die Bevölkerung wächst. Um 1200 lebten im Gebiet des heutigen Deutschlands fünfmal so viele Menschen wie 800.',
        achtung: '<strong>Aufgepasst</strong>: „Fünfmal so viele“ vergleicht das Jahr 800 mit dem Jahr 1200 und gilt für die Fläche des heutigen Deutschlands, nicht für ganz Europa.'
      },
      {
        titel: 'Woher wissen wir das? Quellen prüfen',
        text: '<p>Die Bauern haben kaum etwas über ihr eigenes Leben aufgeschrieben. Lesen und Schreiben konnten im Mittelalter vor allem Geistliche, etwa Mönche und Nonnen, und manche Adlige. Den Alltag der Bauern kennen wir deshalb vor allem aus zwei Arten von Quellen:</p>' +
          '<ul><li><dfn>gegenständliche Quellen</dfn>: Werkzeuge, Geschirr, Reste von Häusern,</li>' +
          '<li><dfn>Bildquellen</dfn>: zum Beispiel <dfn>Monatsbilder</dfn> in Handschriften. Sie zeigen, welche Arbeit in welchem Monat anfiel.</li></ul>' +
          '<p>Die wenigen <dfn>Textquellen</dfn> zum bäuerlichen Alltag wurden in Klöstern und auf Burgen verfasst. Sie zeigen die Bauern so, wie Mönche oder Adlige sie sahen.</p>' +
          '<p><strong>So prüfst du die Sichtweise einer Quelle:</strong></p>' +
          '<ul><li>Wer hat sie gemacht, wann und für wen?</li><li>Was zeigt sie, und was zeigt sie nicht?</li><li>Wessen Blick auf die Bauern sehe ich?</li></ul>' +
          '<p>Beispiel: Das Monatsbild für den März wurde für Herzog Johann von Berry begonnen und nach seinem Tod für andere adlige Besitzer vollendet. Im Hintergrund steht das Schloss des Herzogs. Die Arbeit sieht ordentlich und schön aus. Enge Hütten, Hunger und Krankheit sieht man nicht.</p>',
        merk: 'Den Alltag der Bauern kennen wir vor allem aus gegenständlichen Quellen und Bildquellen. Die wenigen Textquellen stammen aus Klöstern und von Burgen und zeigen die Bauern mit fremden Augen.',
        achtung: '<strong>Aufgepasst</strong>: Ein Bild aus dem Mittelalter ist kein Foto. Es zeigt, was der Maler oder sein Auftraggeber zeigen wollte.',
        quelle: 'dorf-maerz'
      }
    ],

    ueben: [
      {
        id: 'dorf-u1', typ: 'wahl',
        frage: 'Wie gewannen die Bauern um 1000 neue Ackerflächen?',
        optionen: [
          'Sie rodeten den Wald mit einfachen Werkzeugen oder brannten Waldstücke nieder.',
          'Sie bekamen fertige Äcker vom König als Lehen für ihren Kriegsdienst.',
          'Sie kauften Ackerland von Kaufleuten in den nächsten Städten.',
          'Sie pflügten die freien Wiesen zwischen den Dörfern um.'
        ],
        richtig: 0,
        erkl: 'Riesige Wälder bedeckten Europa. Neues Ackerland entstand durch Rodung, das Trockenlegen von Sümpfen und Deiche. Lehen bekamen Adlige, nicht Bauern.'
      },
      {
        id: 'dorf-u2', typ: 'luecke',
        frage: 'Wie wohnten die Bauernfamilien? Wähle die passenden Wörter.',
        text: 'Viele Bauernhäuser bestanden nur aus {einem einzigen Raum|drei Räumen|zwei Stockwerken}. Geschlafen wurde auf {Stroh|Federbetten|Holzpritschen}. Eine {Feuerstelle|Öllampe|Heizung} diente zum Kochen und gab Wärme und Licht. Der Rauch zog durch {kleine Öffnungen im Dach|einen hohen Schornstein|Fenster aus Glas} ab. {Kerzen|Brot|Feuerholz} konnten sich die Bauern nicht leisten.',
        erkl: 'Kerzenlicht gab es nicht. Licht kam von der Feuerstelle und durch kleine Löcher in den Wänden.'
      },
      {
        id: 'dorf-u3', typ: 'sortieren',
        frage: 'Ordne die Merkmale aus dem Darstellungstext (S. 34) den Bereichen zu. So kannst du die Lebensbedingungen später geordnet charakterisieren.',
        kategorien: ['Wohnen', 'Essen und Kleidung', 'Gesundheit'],
        items: [
          ['Geschlafen wurde auf Stroh.', 0],
          ['Der Rauch zog durch kleine Öffnungen im Dach ab.', 0],
          ['Kleine Löcher in den Wänden ließen Licht und Luft herein.', 0],
          ['Hauptnahrung war ein Brei aus verschiedenen Getreidesorten.', 1],
          ['Fleisch kam nur selten in den Kochtopf.', 1],
          ['Die Kleidung war vielfach ausgebessert und grau.', 1],
          ['Parasiten verbreiteten Krankheiten, gegen die es kein Heilmittel gab.', 2],
          ['Toiletten neben dem Brunnen verunreinigten das Trinkwasser.', 2],
          ['Wer Kindheit und Jugend überlebte, hatte eine Lebenserwartung von 30 bis 40 Jahren.', 2]
        ]
      },
      {
        id: 'dorf-u4', typ: 'behauptung',
        aussage: 'Im Mittelalter wurden die Menschen nur 30 bis 40 Jahre alt. Mit etwa 35 starben fast alle.',
        stimmt: false,
        gruende: [
          'Laut Buch hatten Menschen, die Kindheit und Jugend überlebten, eine Lebenserwartung von 30 bis 40 Jahren. Das ist ein Durchschnitt, kein festes Sterbealter.',
          'Die Menschen im Mittelalter wurden genauso alt wie heute, nur die Kinder starben früher.',
          'Es stimmt, denn die Hälfte der Kinder starb schon in den ersten sechs Lebensjahren.',
          'Die Zahl gilt nur für Adlige auf den Burgen. Bauern wurden im Durchschnitt älter.'
        ],
        richtig: 0,
        erkl: 'Zwei Dinge auseinanderhalten: Die Hälfte der Kinder starb sehr früh. Wer Kindheit und Jugend überlebte, hatte laut Buch eine Lebenserwartung von 30 bis 40 Jahren. Viele wurden auch deutlich älter.'
      },
      {
        id: 'dorf-u5', typ: 'mehrfach',
        frage: 'Was wurde laut Darstellungstext mit Wind- und Wasserkraft angetrieben? Wähle alle richtigen.',
        optionen: ['Geräte zum Mahlen', 'Blasebälge', 'Schmelzöfen', 'Schmiedehämmer', 'Räderpflüge', 'Lastkarren'],
        richtig: [0, 1, 2, 3],
        erkl: 'Mühlen trieben Mahlgeräte, Blasebälge, Schmelzöfen und Schmiedehämmer an. Pflüge und Karren wurden von Tieren oder Menschen gezogen.'
      },
      {
        id: 'dorf-u6', typ: 'zuordnen',
        frage: 'Welchen Vorteil brachte jede Neuerung? Ordne zu.',
        paare: [
          ['Kummet', 'Pferde ziehen die doppelte Last.'],
          ['eiserner Räderpflug', 'Er bricht die Erde um, statt sie nur anzuritzen.'],
          ['Sense', 'Man erntet schneller und schneidet die Halme tief unten ab.'],
          ['Mergel', 'Er verbessert vor allem die Qualität der Sandböden.'],
          ['Schubkarre und Lastkarren', 'Sie erleichtern den Warentransport.'],
          ['Wassermühle', 'Sie treibt Geräte zum Mahlen an.']
        ],
        erkl: 'So steht es im Darstellungstext (S. 34) und in den Fußnoten zu M3 (S. 35).'
      },
      {
        id: 'dorf-u7', typ: 'beschriften',
        frage: 'Beschrifte die Neuerungen in der mittelalterlichen Landwirtschaft (vgl. Buch S. 35, M3).',
        abb: 'neuerungen',
        strukturen: ['sense', 'pflug', 'muehle', 'wagen', 'kummet', 'duengung']
      },
      {
        id: 'dorf-u8', typ: 'wahl',
        frage: 'Ochsen bekamen ein gepolstertes Holzbrett zwischen die Hörner. Was stimmt im Vergleich zu Pferden?',
        optionen: [
          'Ochsen waren langsamer, konnten aber viel schwerere Lasten ziehen.',
          'Ochsen waren schneller und konnten auch schwerere Lasten ziehen.',
          'Ochsen waren schneller, konnten aber nur leichtere Lasten ziehen.',
          'Ochsen waren langsamer und konnten auch nur leichtere Lasten ziehen.'
        ],
        richtig: 0,
        erkl: 'Im Buch heißt es: Ochsen waren zwar langsamer als Pferde, konnten jedoch viel schwerere Lasten ziehen.'
      },
      {
        id: 'dorf-u9', typ: 'eingabe',
        frage: 'Wie heißt der mit Leder gepolsterte Halskragen, mit dem Pferde die doppelte Last ziehen konnten?',
        akzeptiert: ['Kummet', 'Kumt'],
        nicht: ['Sattel', 'Joch', 'Hufeisen', 'Zaumzeug'],
        erkl: 'Das Kummet ist ein gepolsterter Halskragen für Zugpferde (Buch S. 34).'
      },
      {
        id: 'dorf-u10', typ: 'wahl',
        frage: 'Lies das Schaubild. Welcher Anteil des Ackerlands liegt jedes Jahr brach?',
        abb: 'dreifelder',
        optionen: [
          'Dreifelderwirtschaft: ein Drittel, Zweifelderwirtschaft: die Hälfte',
          'Dreifelderwirtschaft: die Hälfte, Zweifelderwirtschaft: ein Drittel',
          'Bei beiden Formen jedes Jahr ein Drittel des Ackerlands',
          'Dreifelderwirtschaft: gar nichts, Zweifelderwirtschaft: die Hälfte'
        ],
        richtig: 0,
        erkl: 'Oben ruht in jeder Zeile ein Feld von drei, unten eines von zwei. Bei der Dreifelderwirtschaft wird also jedes Jahr mehr Land bebaut.'
      },
      {
        id: 'dorf-u11', typ: 'tabelle',
        frage: 'Ein anderes Dorf beginnt mit einer anderen Verteilung. Ergänze, wie die drei Felder in den nächsten Jahren genutzt werden.',
        spalten: ['Jahr', 'Feld A', 'Feld B', 'Feld C'],
        zeilen: [
          { kopf: '1. Jahr', zellen: [{ fix: 'Brache' }, { fix: 'Wintersaat' }, { fix: 'Frühjahrssaat' }] },
          { kopf: '2. Jahr', zellen: [{ optionen: SAAT, richtig: 0 }, { optionen: SAAT, richtig: 1 }, { fix: 'Brache' }] },
          { kopf: '3. Jahr', zellen: [{ optionen: SAAT, richtig: 1 }, { optionen: SAAT, richtig: 2 }, { optionen: SAAT, richtig: 0 }] }
        ],
        erkl: 'Auf jedem Feld folgen Wintersaat, Frühjahrssaat und Brache in dieser Reihenfolge aufeinander. In jedem Jahr liegt genau ein Feld brach.'
      },
      {
        id: 'dorf-u12', typ: 'reihenfolge',
        frage: 'Bringe die Folgen der Verbesserungen in der Landwirtschaft in die richtige Reihenfolge. Die Ursache steht oben.',
        schritte: [
          'Neue Techniken wie Räderpflug, Kummet und Sense und die Dreifelderwirtschaft werden eingeführt.',
          'Der Boden wird besser bearbeitet und geschont.',
          'Der Ernteertrag steigt.',
          'Mehr Menschen können ernährt werden.',
          'Die Bevölkerung wächst: Um 1200 leben im Gebiet des heutigen Deutschlands fünfmal so viele Menschen wie 800.'
        ],
        erkl: 'Diese Kette meint das Buch in Aufgabe 4 (S. 35): neue Techniken → mehr Ertrag → mehr Menschen werden satt → Bevölkerungswachstum.'
      },
      {
        id: 'dorf-u13', typ: 'zeitleiste',
        frage: 'Ordne die Ereignisse und Entwicklungen auf der Zeitleiste ein.',
        abschnitte: ['um 800', '10. Jh.', '11. Jh.', '12. Jh.'],
        ereignisse: [
          ['Karl der Große wird in Rom zum Kaiser gekrönt.', 0, '800'],
          ['Überall entstehen Mühlen.', 1, 'ab dem 10. Jh.'],
          ['Bauern roden Wald, legen Sümpfe trocken und bauen Deiche.', 1, 'um 1000'],
          ['Die Sense ersetzt die Sichel.', 2, '11. Jh.'],
          ['Übergang zur Dreifelderwirtschaft. Bis dahin lag ein Feld nach der Ernte ein Jahr brach.', 2, '11. Jh.'],
          ['Im Gebiet des heutigen Deutschlands leben fünfmal so viele Menschen wie im Jahr 800.', 3, '1200']
        ],
        erkl: 'Das Jahr 1000 gehört noch zum 10. Jahrhundert (901–1000), das Jahr 1200 zum 12. Jahrhundert (1101–1200).'
      },
      {
        id: 'dorf-u14', typ: 'mehrfach',
        quelle: 'dorf-maerz',
        frage: 'Beschreibe das Monatsbild für den März genau. Welche Arbeiten sind zu sehen? Wähle alle richtigen.',
        optionen: [
          'Ein Bauer pflügt mit zwei Ochsen und einem Räderpflug.',
          'In einem ummauerten Weinberg arbeiten Bauern an den Reben.',
          'Rechts beugt sich ein Mann über einen Sack mit Saatgut.',
          'Ein Hirte hütet mit seinem Hund Schafe.',
          'Bauern mähen Heu mit der Sense.',
          'Ein Schwein wird geschlachtet.'
        ],
        richtig: [0, 1, 2, 3],
        erkl: 'Im März beginnt die Feldarbeit: pflügen, säen, die Reben beschneiden. Heu mähen gehört in den Frühsommer, Schlachten in den Winter.'
      },
      {
        id: 'dorf-u15', typ: 'zuordnen',
        frage: 'Monatsbilder zeigen, welche Arbeit im Lauf des Jahres anfiel (vgl. Buch S. 35, M2). Was tun die Bauern wann? Ordne zu.',
        paare: [
          ['im Frühjahr (März)', 'pflügen und die Frühjahrssaat säen'],
          ['im Frühsommer (Juni)', 'Heu mähen mit der Sense'],
          ['im Hochsommer (Juli, August)', 'Getreide ernten und dreschen'],
          ['im Herbst (Oktober)', 'die Wintersaat säen'],
          ['im Winter (Dezember)', 'Schweine schlachten']
        ],
        erkl: 'Die Wintersaat heißt so, weil sie im Herbst gesät wird und über den Winter auf dem Feld steht.'
      },
      {
        id: 'dorf-u16', typ: 'wahl',
        quelle: 'dorf-aelfric',
        frage: 'Lies, was der Pflüger erzählt. Warum geht er auch im strengsten Winter aufs Feld?',
        optionen: [
          'Aus Angst vor seinem Herrn',
          'Weil er im Winter mehr Geld verdient',
          'Weil sich der Boden im Winter am leichtesten pflügen lässt',
          'Weil er als freier Bauer selbst so entschieden hat'
        ],
        richtig: 0,
        erkl: 'Er sagt: Kein Winter ist so streng, dass er wagt, zu Hause zu bleiben, aus Angst vor seinem Herrn. Am Ende nennt er den Grund: Er ist nicht frei.'
      },
      {
        id: 'dorf-u17', typ: 'behauptung',
        aussage: 'Weil es Textquellen über Bauern gibt, wissen wir genau, wie die Bauern selbst über ihr Leben dachten.',
        stimmt: false,
        gruende: [
          'Die wenigen Textquellen zum bäuerlichen Alltag entstanden in Klöstern und auf Burgen. Sie zeigen die Sicht von Mönchen oder Adligen, nicht die der Bauern.',
          'Aus dem Mittelalter gibt es überhaupt keine Quellen über Bauern.',
          'Es stimmt, denn viele Bauern schrieben Tagebücher über ihren Alltag.',
          'Die Textquellen über Bauern stammen alle erst aus dem 19. Jahrhundert.'
        ],
        richtig: 0,
        erkl: 'Auch der Pflüger bei Aelfric spricht nicht selbst: Das Gespräch hat ein Mönch als Übung für Klosterschüler geschrieben.'
      },
      {
        id: 'dorf-u18', typ: 'wahl', operatorTraining: true,
        frage: 'Die Aufgabe lautet: „Charakterisiere die Lebensbedingungen der Bauern im Mittelalter.“ Welche Antwort erfüllt den Auftrag am besten?',
        optionen: [
          'Typisch waren harte Lebensbedingungen: Die Familien wohnten in Hütten mit oft nur einem Raum, arbeiteten von Sonnenaufgang bis zur Dunkelheit, aßen meist Getreidebrei und litten an Krankheiten.',
          'Die Bauern schliefen auf Stroh. Die Kleidung war grau. Sie aßen Brei. Toiletten waren Löcher in der Erde. Fleisch gab es selten. Kerzen hatten sie nicht.',
          'Ich finde, die Bauern hatten ein schreckliches Leben. Ich wäre damals nicht gern Bauer gewesen, weil heute alles viel besser ist als im Mittelalter.',
          'Mit dem Kummet konnten Pferde die doppelte Last ziehen, und die Dreifelderwirtschaft schonte den Boden, deshalb stieg der Ernteertrag deutlich.'
        ],
        richtig: 0,
        erkl: 'Charakterisieren heißt: das Typische herausstellen und zusammenfassen. Die reine Aufzählung nennt nur Einzelheiten, die Ich-Antwort bewertet mit heutigen Maßstäben, die Antwort zu Kummet und Dreifelderwirtschaft verfehlt das Thema.'
      },
      {
        id: 'dorf-u19', typ: 'zahl',
        frage: 'Ein Rechenbeispiel: Ein Dorf hat 60 gleich große Ackerstücke. Bei der Zweifelderwirtschaft lag jedes Jahr die Hälfte brach, bei der Dreifelderwirtschaft ein Drittel. Wie viele Ackerstücke kann das Dorf mit der Dreifelderwirtschaft jedes Jahr mehr bestellen?',
        antwort: 10, einheit: 'Ackerstücke', tol: 0,
        erkl: 'Vorher: 60 : 2 = 30 bestellt. Jetzt: 60 − 20 = 40 bestellt. Also 10 Ackerstücke mehr.'
      },
      {
        id: 'dorf-u20', typ: 'mehrfach',
        quelle: 'dorf-juni',
        frage: 'Monatsbild Juni: Welche Arbeiten übernehmen die Frauen auf dem Bild? Wähle alle richtigen (vgl. Buch S. 35, A1a).',
        optionen: [
          'Sie rechen das gemähte Heu zusammen.',
          'Sie schichten das Heu mit einer Gabel auf.',
          'Sie mähen das Gras mit der Sense.',
          'Sie pflügen die Wiese mit zwei Ochsen.',
          'Sie tragen das Heu in Körben zum Palast.'
        ],
        richtig: [0, 1],
        erkl: 'Die Frauen rechen und häufen das Heu, die drei Männer im Hintergrund mähen mit der Sense. Auch auf den Monatsbildern im Buch (S. 35, M2) arbeiten Bäuerinnen mit, zum Beispiel bei der Getreideernte mit der Sichel und mit den Garben beim Dreschen.'
      }
    ],

    erklaeren: [
      {
        id: 'dorf-e1', operator: 'charakterisieren',
        frage: 'Charakterisiere mithilfe des Darstellungstextes (S. 34) die Lebensbedingungen der Bauern im Mittelalter. Nutze den Wortschatz (vgl. Buch S. 35, A2).',
        tipp: 'Ordne nach Bereichen: Wohnen, Arbeit, Essen und Kleidung, Gesundheit. Fasse am Anfang oder am Ende in einem Satz zusammen, was typisch war.',
        begriffe: [
          { name: 'Lebensbedingungen', muster: ['lebensbedingung'] },
          { name: 'Feuerstelle', muster: ['feuerstelle'] },
          { name: 'Stroh', muster: ['stroh'] },
          { name: 'Brei aus Getreide', muster: ['brei'] },
          { name: 'Trinkwasser', muster: ['trinkwasser'] },
          { name: 'Unterernährung', muster: ['unterernaehr'] },
          { name: 'Lebenserwartung', muster: ['lebenserwartung'] }
        ],
        punkte: [
          { text: 'Typisches Gesamtbild genannt: harte, schlechte Lebensbedingungen', p: 1 },
          { text: 'Wohnen: einfache Häuser oder Hütten, oft nur ein Raum, Schlafen auf Stroh, Feuerstelle für Kochen, Wärme und Licht, keine Kerzen', p: 1 },
          { text: 'Arbeit: von Sonnenaufgang bis zum Einbruch der Dunkelheit, Zeit nach Sonnenstand und Sternen', p: 1 },
          { text: 'Essen und Kleidung: Brei aus Getreide, selten Fleisch; graue, ausgebesserte Kleidung, weil Färbemittel teuer waren', p: 1 },
          { text: 'Gesundheit: Krankheiten durch Parasiten ohne Heilmittel, Trinkwasser durch Toiletten neben dem Brunnen verunreinigt', p: 1 },
          { text: 'Die Hälfte der Kinder starb in den ersten sechs Lebensjahren; wer Kindheit und Jugend überlebte, hatte eine Lebenserwartung von 30 bis 40 Jahren (richtig wiedergegeben)', p: 1 }
        ],
        muster: '<p>Die Lebensbedingungen der Bauern im Mittelalter waren sehr hart und ärmlich. Die Familien wohnten in einfachen Hütten, die oft nur aus einem einzigen Raum bestanden. Geschlafen wurde auf Stroh. Eine Feuerstelle diente zum Kochen und gab Wärme und Licht, denn Kerzen konnten sich die Bauern nicht leisten. Der Arbeitstag dauerte von Sonnenaufgang bis zum Einbruch der Dunkelheit. Die Zeit bestimmte man nach dem Sonnenstand.</p>' +
          '<p>Die Hauptnahrung war ein Brei aus Getreide, Fleisch gab es nur selten. Die Kleidung war grau und oft ausgebessert, weil Färbemittel teuer waren. Viele Menschen wurden krank, denn Parasiten verbreiteten Krankheiten, und das Trinkwasser wurde durch Toiletten neben dem Brunnen verunreinigt. Heilmittel gab es nicht. Die Hälfte der Kinder starb in den ersten sechs Lebensjahren an Unterernährung oder Krankheiten. Wer Kindheit und Jugend überlebte, hatte eine Lebenserwartung von 30 bis 40 Jahren.</p>' +
          '<p>Typisch für die Bauern waren also schlechte Lebensbedingungen mit viel Arbeit, wenig Besitz und großer Gefahr durch Krankheiten.</p>'
      },
      {
        id: 'dorf-e2', operator: 'erlaeutern',
        frage: 'Erläutere mithilfe des Darstellungstextes (S. 34, Z. 27–52) und M3, welche Folgen die Verbesserungen in der Landwirtschaft hatten. Gehe dabei auf den Zusammenhang zwischen neuen Techniken und Bevölkerungswachstum ein (vgl. Buch S. 35, A3b und A4).',
        abb: 'neuerungen', abbOpts: { beschriftet: true },
        tipp: 'Baue eine Kette: Neuerung → was sie bewirkt → mehr Ertrag → mehr Menschen werden ernährt → die Bevölkerung wächst. Belege die Schritte mit Beispielen und der Zahl aus dem Buch.',
        begriffe: [
          { name: 'Räderpflug', muster: ['raederpflug', 'pflug'] },
          { name: 'Kummet', muster: ['kummet'] },
          { name: 'Dreifelderwirtschaft', muster: ['dreifelder'] },
          { name: 'Ernteertrag', muster: ['ertrag'] },
          { name: 'ernährt', muster: ['ernaehr'] },
          { name: 'Bevölkerungswachstum', muster: ['bevoelkerung'] }
        ],
        punkte: [
          { text: 'Mindestens zwei Neuerungen mit ihrer Wirkung erläutert, z. B. Räderpflug bricht die Erde um, Kummet: Pferde ziehen die doppelte Last, Sense: schneller ernten, Mühlen treiben Mahlgeräte an, Mergel verbessert Sandböden', p: 2 },
          { text: 'Dreifelderwirtschaft: Wintersaat, Frühjahrssaat und Brache wechseln ab, der Boden wird geschont', p: 1 },
          { text: 'Folge: Der Ernteertrag stieg', p: 1 },
          { text: 'Folge: Mehr Menschen konnten ernährt werden, die Bevölkerung wuchs', p: 1 },
          { text: 'Beleg: Um 1200 lebten auf der Fläche des heutigen Deutschlands fünfmal so viele Menschen wie 800', p: 1 }
        ],
        muster: '<p>Im Mittelalter verbesserten neue Techniken die Arbeit der Bauern. Der mit Eisen beschlagene Räderpflug brach die Erde um, statt sie nur anzuritzen. Mit dem Kummet konnten Pferde die doppelte Last ziehen, und mit der Sense ernteten die Bauern schneller. Wasser- und Windmühlen trieben Geräte zum Mahlen an. Dünger aus Mist und Mergel verbesserte die Böden.</p>' +
          '<p>Eine besonders wichtige Neuerung war die Dreifelderwirtschaft: Auf jedem Feld wechselten Wintersaat, Frühjahrssaat und Brache einander ab. Das schonte den Boden.</p>' +
          '<p>Durch all diese Verbesserungen stieg der Ernteertrag. Deshalb konnten mehr Menschen ernährt werden, und die Bevölkerung wuchs. Das zeigt sich daran, dass im Jahr 1200 auf der Fläche des heutigen Deutschlands fünfmal so viele Menschen lebten wie im Jahr 800.</p>'
      },
      {
        id: 'dorf-e3', operator: 'erklaeren',
        frage: 'Erkläre, warum wir den Alltag der Bauern vor allem aus Bildquellen und gegenständlichen Quellen kennen. Erkläre auch, was es für unser Bild von den Bauern bedeutet, dass die wenigen Textquellen in Klöstern und auf Burgen geschrieben wurden (vgl. Buch S. 35, Bildunterschrift zu M2).',
        tipp: 'Frage dich: Wer konnte im Mittelalter lesen und schreiben? Und mit wessen Augen sehen wir die Bauern dann in den Texten?',
        begriffe: [
          { name: 'Bildquellen', muster: ['bildquelle', 'bilder'] },
          { name: 'gegenständliche Quellen', muster: ['gegenstaendlich', 'sachquelle', 'gegenstaende'] },
          { name: 'Textquellen', muster: ['textquelle'] },
          { name: 'Kloster, Mönche', muster: ['kloster', 'kloest', 'moench', 'nonne'] },
          { name: 'Burg, Adlige', muster: ['burg', 'adlig', 'adel'] },
          { name: 'Sichtweise', muster: ['sicht', 'perspektive', 'augen'] }
        ],
        punkte: [
          { text: 'Die meisten Bauern konnten nicht lesen und schreiben und schrieben deshalb kaum etwas über ihr Leben auf', p: 1 },
          { text: 'Lesen und Schreiben konnten vor allem Geistliche (Mönche, Nonnen) und manche Adlige; deshalb entstanden die Texte in Klöstern und auf Burgen', p: 1 },
          { text: 'Deshalb sind Bildquellen (z. B. Monatsbilder) und gegenständliche Quellen (z. B. Werkzeuge, Hausreste) so wichtig', p: 1 },
          { text: 'Die Textquellen zeigen die Bauern aus der Sicht von Mönchen oder Adligen, nicht aus ihrer eigenen; was die Bauern dachten und fühlten, erfahren wir kaum', p: 1 },
          { text: 'Diese Sicht kann einseitig oder geschönt sein; man muss jede Quelle fragen, wer sie für wen gemacht hat', p: 1 }
        ],
        muster: '<p>Den Alltag der Bauern kennen wir vor allem aus Bildquellen, zum Beispiel aus Monatsbildern, und aus gegenständlichen Quellen wie Werkzeugen oder Resten von Häusern. Das liegt daran, dass die meisten Bauern nicht lesen und schreiben konnten. Deshalb haben sie kaum etwas über ihr eigenes Leben aufgeschrieben.</p>' +
          '<p>Lesen und schreiben konnten im Mittelalter vor allem Geistliche wie Mönche und Nonnen und manche Adlige. Deshalb wurden die wenigen Textquellen über den Alltag der Bauern in Klöstern und auf Burgen verfasst. Das bedeutet, dass wir die Bauern in diesen Texten mit den Augen von Mönchen oder Adligen sehen und nicht so, wie die Bauern sich selbst sahen. Was sie dachten und fühlten, erfahren wir kaum.</p>' +
          '<p>Auch Bilder wurden oft für reiche Auftraggeber gemalt und können den Alltag geschönt zeigen. Man muss also bei jeder Quelle fragen, wer sie gemacht hat und für wen.</p>'
      }
    ],

    hoftag: {
      wissen: [
        {
          id: 'dorf-hw1', typ: 'luecke',
          frage: 'Ergänze den Text zur Feldbestellung.',
          text: 'Bis zum 11. Jahrhundert ließen die Bauern ein Feld nach der Ernte ein Jahr {brach|frei|leer} liegen, damit sich der Boden erholte. Bei der Dreifelderwirtschaft wechselten Wintersaat, {Frühjahrssaat|Weinlese|Viehweide} und Brache einander ab. Das {schonte|zerstörte|verbrauchte} den Boden.'
        },
        {
          id: 'dorf-hw2', typ: 'eingabe',
          frage: 'Wie heißt das mineralhaltige Gestein aus Ton und Kalk, mit dem die Bauern vor allem Sandböden verbesserten?',
          akzeptiert: ['Mergel'],
          nicht: ['Mist', 'Kalk', 'Lehm', 'Ton']
        },
        {
          id: 'dorf-hw3', typ: 'wahl',
          frage: 'Mit welchem neuen Gerät konnten die Bauern ab dem 11. Jahrhundert schneller ernten als mit der Sichel?',
          optionen: ['die Sense', 'der Räderpflug', 'das Kummet', 'die Schubkarre'],
          richtig: 0
        },
        {
          id: 'dorf-hw4', typ: 'wahl',
          frage: 'Im Schaubild ist ein Feld verdeckt. Was gehört an die Stelle mit dem Fragezeichen?',
          abb: 'dreifelder', abbOpts: { verdeckt: ['3-2'] },
          optionen: ['Wintersaat', 'Frühjahrssaat', 'Brache'],
          richtig: 0
        },
        {
          id: 'dorf-hw5', typ: 'zahl',
          frage: 'Wievielmal so viele Menschen lebten im Jahr 1200 auf der Fläche des heutigen Deutschlands wie im Jahr 800?',
          antwort: 5, einheit: 'mal so viele', tol: 0
        },
        {
          id: 'dorf-hw6', typ: 'wahl',
          frage: 'Welcher Anteil der Kinder starb laut Buch in den ersten sechs Lebensjahren?',
          optionen: ['etwa die Hälfte', 'etwa ein Zehntel', 'etwa drei Viertel', 'fast keines'],
          richtig: 0
        }
      ],

      material: [
        {
          id: 'dorf-hm1', quelle: 'dorf-aelfric',
          text: 'Diese Quelle steht nicht im Buch. Lies den Text und die Angaben darunter genau.',
          items: [
            {
              id: 'dorf-hm1-1', typ: 'wahl', p: 1,
              frage: 'Wer hat den Text geschrieben, und wozu?',
              optionen: [
                'Aelfric, ein Mönch, als Übungsgespräch für Schüler einer Klosterschule',
                'Ein Pflüger, der sein eigenes Leben für seine Kinder aufgeschrieben hat',
                'Ein Grundherr, der seinem König über seine Bauern berichtet',
                'Ein Ritter, der auf seiner Burg ein Tagebuch über das Dorf führte'
              ],
              richtig: 0
            },
            {
              id: 'dorf-hm1-2', typ: 'mehrfach', p: 2,
              frage: 'Welche Arbeiten nennt der Pflüger? Wähle alle richtigen.',
              optionen: [
                'die Ochsen aufs Feld treiben und vor den Pflug spannen',
                'jeden Tag einen ganzen Acker oder mehr pflügen',
                'die Futterkrippen mit Heu füllen und die Ochsen tränken',
                'den Mist der Ochsen hinaustragen',
                'das Getreide mit der Sense ernten',
                'das Korn zur Mühle bringen und mahlen'
              ],
              richtig: [0, 1, 2, 3]
            },
            {
              id: 'dorf-hm1-3', typ: 'wahl', p: 1,
              frage: 'Der Pflüger sagt: „… weil ich nicht frei bin.“ Was bedeutet das?',
              optionen: [
                'Er ist ein unfreier Bauer und muss für einen Herrn arbeiten.',
                'Er ist ein freier Bauer mit eigenem Land und leistet Kriegsdienst.',
                'Er ist ein Mönch und hat seinem Abt Gehorsam versprochen.',
                'Er ist ein Gefangener und sitzt im Verlies einer Burg.'
              ],
              richtig: 0,
              erkl: 'Unfreie Bauern waren von ihrem Grundherrn abhängig. Deshalb hat der Pflüger Angst vor seinem Herrn.'
            },
            {
              id: 'dorf-hm1-4', typ: 'behauptung', p: 2,
              aussage: 'Diese Quelle zeigt, wie Bauern selbst über ihr Leben schrieben.',
              stimmt: false,
              gruende: [
                'Ein Mönch hat das Gespräch für den Unterricht geschrieben. Der Pflüger ist eine Figur darin, er hat den Text nicht selbst verfasst.',
                'Es stimmt, denn der Pflüger erzählt in der Ich-Form.',
                'Es stimmt, denn im Mittelalter konnten alle Bauern Latein.',
                'Die Quelle stammt nicht aus dem Mittelalter, sondern aus der Neuzeit.'
              ],
              richtig: 0
            }
          ],
          erkl: {
            id: 'dorf-hm1-e', operator: 'einordnen',
            frage: 'Ordne die Quelle ein: Wer hat sie wann und wozu geschrieben? Erkläre, was das für die Sichtweise auf die Bauern bedeutet.',
            begriffe: [
              { name: 'Mönch', muster: ['moench'] },
              { name: 'Klosterschule', muster: ['kloster'] },
              { name: 'um 1000', muster: ['1000'] },
              { name: 'Sichtweise', muster: ['sicht', 'perspektive', 'augen'] },
              { name: 'unfrei', muster: ['unfrei', 'nicht frei'] }
            ],
            punkte: [
              { text: 'Verfasser und Zeit: Aelfric, ein Mönch und Lehrer in England, um 1000', p: 1 },
              { text: 'Zweck: Übungsgespräch für Schüler einer Klosterschule; der Pflüger ist eine Figur im Gespräch', p: 1 },
              { text: 'Passt zum Buch: Textquellen über Bauern entstanden in Klöstern; der Text zeigt die Sicht eines Mönchs, nicht die eines Bauern', p: 1 },
              { text: 'Trotzdem aufschlussreich: harte Arbeit von früh an, auch im Winter, und Abhängigkeit vom Herrn („nicht frei“)', p: 1 }
            ],
            muster: '<p>Die Quelle stammt von Aelfric, einem Mönch und Lehrer in England. Er schrieb sie um 1000 als lateinisches Übungsgespräch für die Schüler einer Klosterschule. Der Pflüger ist also eine Figur in einem Schulgespräch und hat den Text nicht selbst geschrieben.</p>' +
              '<p>Das passt zu dem, was das Buch sagt: Die wenigen Textquellen über den Alltag der Bauern wurden in Klöstern verfasst. Wir sehen den Pflüger deshalb mit den Augen eines Mönchs. Trotzdem ist die Quelle aufschlussreich: Sie zeigt, dass der Pflüger ab Tagesanbruch hart arbeiten musste, auch im strengen Winter, und dass er als Unfreier Angst vor seinem Herrn hatte.</p>'
          }
        },
        {
          id: 'dorf-hm2', quelle: 'dorf-maerz',
          text: 'Dieses Monatsbild steht nicht im Buch. Schau es dir genau an und lies die Angaben darunter.',
          items: [
            {
              id: 'dorf-hm2-1', typ: 'wahl', p: 1,
              frage: 'Welche Tiere ziehen den Pflug im Vordergrund?',
              optionen: ['zwei Ochsen', 'zwei Pferde mit Kummet', 'ein Esel und ein Pferd', 'vier Kühe'],
              richtig: 0
            },
            {
              id: 'dorf-hm2-2', typ: 'wahl', p: 1,
              frage: 'Welche Neuerung aus M3 (S. 35) erkennst du im Vordergrund?',
              optionen: ['den Räderpflug', 'die Sense', 'die Windmühle', 'den vierrädrigen Wagen'],
              richtig: 0
            },
            {
              id: 'dorf-hm2-3', typ: 'wahl', p: 1,
              frage: 'Im März wird gepflügt und gesät. Zu welchem Teil der Dreifelderwirtschaft passt das?',
              optionen: ['zur Frühjahrssaat', 'zur Wintersaat', 'zur Brache'],
              richtig: 0,
              erkl: 'Die Frühjahrssaat wird im Frühjahr gesät, die Wintersaat schon im Herbst.'
            },
            {
              id: 'dorf-hm2-4', typ: 'wahl', p: 1,
              frage: 'Für wen wurde das Monatsbild gemalt?',
              optionen: [
                'für reiche Adlige, zuerst für Herzog Johann von Berry',
                'für die Bauern des Dorfes, damit sie den Kalender kennen',
                'für den Pflüger, der es in seiner Hütte aufhängte',
                'für eine Dorfschule, in der Bauernkinder lesen lernten'
              ],
              richtig: 0
            },
            {
              id: 'dorf-hm2-5', typ: 'behauptung', p: 2,
              aussage: 'Das Bild zeigt genau, wie hart das Leben der Bauern war.',
              stimmt: false,
              gruende: [
                'Das Bild zeigt nur die Arbeit, ordentlich und schön gemalt. Enge Hütten, Hunger und Krankheit sieht man nicht.',
                'Es stimmt, denn man sieht Bauern bei der Arbeit.',
                'Es stimmt, denn das Bild haben Bauern selbst gemalt.',
                'Das Bild zeigt gar keine Bauern, sondern nur Adlige.'
              ],
              richtig: 0
            }
          ],
          erkl: {
            id: 'dorf-hm2-e', operator: 'untersuchen',
            frage: 'Untersuche, welches Bild vom Leben der Bauern das Monatsbild vermittelt. Beziehe die Angaben zum Auftraggeber ein.',
            begriffe: [
              { name: 'Räderpflug', muster: ['pflug'] },
              { name: 'Ochsen', muster: ['ochse'] },
              { name: 'Herzog, Adel', muster: ['herzog', 'adlig', 'adel'] },
              { name: 'Sichtweise', muster: ['sicht', 'perspektive', 'augen'] }
            ],
            punkte: [
              { text: 'Beschreibung: Pflügen mit zwei Ochsen und Räderpflug, Arbeit im Weinberg, Saatgut, Hirte mit Schafen; im Hintergrund ein Schloss', p: 1 },
              { text: 'Das Bild zeigt die Arbeit geordnet, ruhig und schön, die Landschaft gepflegt', p: 1 },
              { text: 'Es fehlt, was das Buch über die Lebensbedingungen sagt: enge Hütten, Hunger, Krankheit', p: 1 },
              { text: 'Grund: Das Bild wurde für reiche Adlige gemalt (begonnen für Herzog Johann von Berry, nach seinem Tod für andere adlige Besitzer vollendet), im Hintergrund steht das Schloss des Herzogs; es zeigt die Bauern von außen, nicht aus ihrer eigenen Sicht', p: 1 }
            ],
            muster: '<p>Das Monatsbild zeigt die Arbeit im März: Im Vordergrund pflügt ein Bauer mit zwei Ochsen und einem Räderpflug, dahinter arbeiten Bauern in einem Weinberg, ein Mann holt Saatgut aus einem Sack, und ein Hirte hütet Schafe. Im Hintergrund steht ein großes Schloss.</p>' +
              '<p>Die Arbeit wirkt geordnet und ruhig, die Landschaft ist gepflegt und schön. Was das Buch über die Lebensbedingungen der Bauern sagt, also enge Hütten, Hunger und Krankheiten, sieht man nicht. Das liegt daran, dass das Bild für reiche Adlige gemalt wurde: Die Handschrift wurde für Herzog Johann von Berry begonnen, dem das Schloss gehörte, und nach seinem Tod für andere adlige Besitzer vollendet. Es zeigt die Bauern von außen, mit dem Blick eines reichen Auftraggebers, und nicht aus ihrer eigenen Sicht.</p>'
          }
        }
      ],

      schreiben: [
        {
          id: 'dorf-hs1', operator: 'erklaeren',
          frage: 'Erkläre, wie die Dreifelderwirtschaft funktionierte und warum mit ihr mehr Menschen ernährt werden konnten als vorher.',
          begriffe: [
            { name: 'Dreifelderwirtschaft', muster: ['dreifelder'] },
            { name: 'Brache', muster: ['brach'] },
            { name: 'Wintersaat', muster: ['wintersaat'] },
            { name: 'Frühjahrssaat', muster: ['fruehjahrssaat', 'sommersaat'] },
            { name: 'Ernteertrag', muster: ['ertrag'] },
            { name: 'Bevölkerung', muster: ['bevoelkerung'] }
          ],
          punkte: [
            { text: 'Früher (bis zum 11. Jh.): Die Bauern ließen Felder brach liegen, damit sich der Boden erholte', p: 1 },
            { text: 'Nach jeder Ernte ruhte das Feld ein Jahr, viel Land blieb ungenutzt', p: 1 },
            { text: 'Dreifelderwirtschaft: Das Ackerland ist in drei Felder geteilt', p: 1 },
            { text: 'Auf jedem Feld wechseln Wintersaat, Frühjahrssaat und Brache von Jahr zu Jahr ab', p: 1 },
            { text: 'Jedes Jahr liegt nur ein Drittel brach, also wird mehr Land bebaut', p: 1 },
            { text: 'Der Boden wird geschont, der Ernteertrag steigt', p: 1 },
            { text: 'Zusammen mit neuen Techniken (z. B. Räderpflug, Kummet, Dünger) konnten mehr Menschen ernährt werden', p: 1 },
            { text: 'Die Bevölkerung wuchs: um 1200 fünfmal so viele Menschen wie 800 (Fläche des heutigen Deutschlands)', p: 1 }
          ],
          muster: '<p>Bis zum 11. Jahrhundert ließen die Bauern ein Feld nach der Ernte ein Jahr brach liegen, damit sich der Boden erholte. Nach jeder Ernte ruhte das Feld also ein Jahr, und viel Land blieb ungenutzt.</p>' +
            '<p>Bei der Dreifelderwirtschaft wurde das Ackerland in drei Felder geteilt. Auf jedem Feld wechselten Wintersaat, Frühjahrssaat und Brache von Jahr zu Jahr einander ab. Deshalb lag jedes Jahr nur noch ein Drittel des Landes brach, und es konnte mehr Land bebaut werden. Außerdem schonte der Wechsel den Boden, sodass der Ernteertrag stieg.</p>' +
            '<p>Zusammen mit neuen Techniken wie dem eisernen Räderpflug, dem Kummet und der Düngung mit Mist und Mergel konnten so mehr Menschen ernährt werden. Die Bevölkerung wuchs: Im Jahr 1200 lebten auf der Fläche des heutigen Deutschlands fünfmal so viele Menschen wie im Jahr 800.</p>'
        },
        {
          id: 'dorf-hs2', operator: 'beurteilen',
          frage: 'Beurteile, ob die Neuerungen in der Landwirtschaft das Leben der Bauern im Mittelalter grundlegend verbesserten.',
          begriffe: [
            { name: 'Ernteertrag', muster: ['ertrag'] },
            { name: 'Neuerungen', muster: ['neuerung', 'technik', 'pflug', 'kummet'] },
            { name: 'Lebensbedingungen', muster: ['lebensbedingung'] },
            { name: 'Krankheiten', muster: ['krank'] },
            { name: 'Grundherr', muster: ['grundherr'] }
          ],
          punkte: [
            { text: 'Maßstab genannt, z. B. Ernährung, Arbeit, Gesundheit, Wohnen', p: 1 },
            { text: 'Verbesserung: Die Arbeit wurde leichter und schneller, z. B. durch Räderpflug, Kummet, Sense, Mühlen', p: 1 },
            { text: 'Verbesserung: Der Ernteertrag stieg, mehr Menschen konnten ernährt werden', p: 1 },
            { text: 'Beleg: Die Bevölkerung wuchs bis 1200 auf das Fünffache (Fläche des heutigen Deutschlands)', p: 1 },
            { text: 'Dagegen: Wohnen und Arbeitstag blieben hart (Hütten mit einem Raum, Arbeit bis zur Dunkelheit)', p: 1 },
            { text: 'Dagegen: Krankheiten ohne Heilmittel, verunreinigtes Trinkwasser, hohe Kindersterblichkeit', p: 1 },
            { text: 'Dagegen: Die meisten Bauern blieben vom Grundherrn abhängig und mussten Abgaben und Dienste leisten', p: 1 },
            { text: 'Begründetes Fazit als Sachurteil ohne heutige Maßstäbe, z. B.: Vor allem konnten mehr Menschen ernährt werden und die Bevölkerung wuchs; grundlegend besser wurde das Leben der einzelnen Bauern dadurch nicht', p: 1 }
          ],
          muster: '<p>Um das zu beurteilen, schaue ich auf die Arbeit, die Ernährung und die Gesundheit der Bauern. Einerseits brachten die Neuerungen große Vorteile: Mit dem eisernen Räderpflug, dem Kummet, der Sense und den Mühlen wurde die Arbeit leichter und schneller. Die Dreifelderwirtschaft schonte den Boden, und der Ernteertrag stieg. Deshalb konnten mehr Menschen ernährt werden. Das zeigt sich daran, dass um 1200 auf der Fläche des heutigen Deutschlands fünfmal so viele Menschen lebten wie im Jahr 800.</p>' +
            '<p>Andererseits blieben die Lebensbedingungen hart: Die Familien wohnten weiter in einfachen Hütten, arbeiteten von Sonnenaufgang bis zur Dunkelheit und hatten kaum Schutz vor Krankheiten. Die Hälfte der Kinder starb in den ersten sechs Lebensjahren. Außerdem blieben die meisten Bauern von ihrem Grundherrn abhängig und mussten Abgaben und Dienste leisten.</p>' +
            '<p>Insgesamt sorgten die Neuerungen vor allem dafür, dass mehr Menschen ernährt werden konnten und die Bevölkerung wuchs. Grundlegend besser wurde das Leben der einzelnen Bauern dadurch nicht, denn ihr Alltag blieb arm, anstrengend und gefährlich.</p>'
        }
      ]
    },

    geruechte: [
      { id: 'dorf-g1', aussage: 'Viele Bauernhäuser hatten nur einen einzigen Raum.', stimmt: true, erkl: 'Stimmt. Geschlafen wurde auf Stroh, gekocht an der Feuerstelle im selben Raum.' },
      { id: 'dorf-g2', aussage: 'Abends lasen die Bauern bei Kerzenlicht.', stimmt: false, erkl: 'Erfunden. Kerzen konnten sich die Bauern nicht leisten, Licht gab die Feuerstelle.' },
      { id: 'dorf-g3', aussage: 'Mit dem Kummet konnten Pferde die doppelte Last ziehen.', stimmt: true, erkl: 'Stimmt. Das Kummet ist ein mit Leder gepolsterter Halskragen.' },
      { id: 'dorf-g4', aussage: 'Ochsen waren schneller als Pferde.', stimmt: false, erkl: 'Erfunden. Ochsen waren langsamer, zogen aber viel schwerere Lasten.' },
      { id: 'dorf-g5', aussage: 'Bei der Dreifelderwirtschaft liegt jedes Jahr ein Feld brach.', stimmt: true, erkl: 'Stimmt. Jedes Jahr ruht ein anderes der drei Felder.' },
      { id: 'dorf-g6', aussage: 'Im 11. Jahrhundert ersetzte die Sichel die Sense.', stimmt: false, erkl: 'Erfunden. Umgekehrt: Die Sense ersetzte laut Buch die Sichel. Ganz verschwunden ist die Sichel aber nicht.' },
      { id: 'dorf-g7', aussage: 'Um 1200 lebten im Gebiet des heutigen Deutschlands fünfmal so viele Menschen wie 800.', stimmt: true, erkl: 'Stimmt. Mehr Ertrag ernährte mehr Menschen.' },
      { id: 'dorf-g8', aussage: 'Bauern trugen bunte Kleidung, weil Färbemittel billig waren.', stimmt: false, erkl: 'Erfunden. Färbemittel waren teuer, die Kleidung war grau und ausgebessert.' },
      { id: 'dorf-g9', aussage: 'Mergel ist ein Gestein aus Ton und Kalk.', stimmt: true, erkl: 'Stimmt. Mit Mergel düngte man vor allem Sandböden.' },
      { id: 'dorf-g10', aussage: 'Die meisten Texte über den Alltag der Bauern schrieben Bauern selbst.', stimmt: false, erkl: 'Erfunden. Die wenigen Textquellen entstanden in Klöstern und auf Burgen.' }
    ],

    schatz: [
      {
        id: 'dorf-s1',
        titel: 'Über 5600 Mühlen in einem einzigen Königreich',
        text: 'Im Jahr 1086 ließ der englische König Wilhelm der Eroberer in seinem ganzen Reich aufschreiben, wem welches Land gehörte und was dazugehörte: Menschen, Pflüge, Tiere und Mühlen. In diesem „Domesday Book“ zählte eine Forscherin für England 5624 Wassermühlen, spätere Zählungen kommen sogar auf über 6000. Windmühlen sind in Europa dagegen erst später sicher belegt: zum ersten Mal 1185 in England.',
        nachweis: 'Domesday Book (1086); Margaret T. Hodgen: Domesday Water Mills, in: Antiquity 13 (1939), S. 261–279; Mills Archive Trust: From quern to computer. The history of flour milling, Kapitel „Early medieval mills and milling“ und „Medieval mills and milling“ (Windmühle in Weedley, Yorkshire, 1185).'
      }
    ]
  });
})();
