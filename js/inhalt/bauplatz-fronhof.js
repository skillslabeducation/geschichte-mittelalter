/* Bauplatz 2: Fronhof – Grundherrschaft (Buch S. 22/23) */
(function () {
  'use strict';
  var W = (window.W = window.W || {});

  var WORTSCHATZ = '<p><strong>Wortschatz (Buch S. 23):</strong> von einem Grundherrn abhängig sein · unfrei/hörig sein · Abgaben und Frondienste leisten · unter dem Schutz der Grundherren stehen · an das Land gebunden sein · den Zins entrichten</p>';
  var M4 = '<p><strong>Frage (Buch S. 23, M4): Warum begaben sich freie Bauern in die Abhängigkeit?</strong></p>' +
    '<ul><li><strong>Sachurteil</strong>, mit den Augen der Menschen damals: Wie würden die Menschen in der Vergangenheit diese Frage beantworten?</li>' +
    '<li><strong>Werturteil</strong>, mit den Augen der Menschen heute: Wie würdest du diese Frage aus heutiger Sicht beantworten?</li></ul>';

  W.bauplaetze.push({
    id: 'fronhof', nr: 2, titel: 'Fronhof', thema: 'Grundherrschaft', zeit: 'um 1000', buch: 'S. 22/23', checkliste: 2,
    chronist: 'Auf diesem Hof wird mehr abgeliefert als geerntet, jedenfalls aus Sicht der Bauern. Zähl ruhig die Hühner nach.',
    leitfrage: 'Was bedeutete es für die Bauern, „unfrei“ zu sein?',

    karten: [
      {
        titel: 'Wem gehörte das Land?',
        text: '<p>Die meisten Menschen im Mittelalter waren Bauern. Nur die wenigsten von ihnen waren frei. Ihr Herr, der <dfn>Grundherr</dfn>, besaß das Land, auf dem sie lebten und arbeiteten.</p>' +
          '<p>Grundherr konnte ein Adliger sein, etwa ein Graf. Es gab auch Grundherren, die Geistliche waren, zum Beispiel ein Bischof oder der Abt eines Klosters. Auch der König war ein Grundherr.</p>' +
          '<p>Im Laufe des Mittelalters wurden immer mehr Bauern von einem Grundherrn abhängig. Diese Ordnung heißt <dfn>Grundherrschaft</dfn>.</p>',
        merk: 'In der Grundherrschaft gehörte das Land dem Grundherrn. Die Bauern lebten und arbeiteten darauf und waren von ihm abhängig.'
      },
      {
        titel: 'Leibeigene und Hörige',
        text: '<p>In der Grundherrschaft gab es unterschiedliche Formen der Abhängigkeit:</p>' +
          '<ul><li><dfn>Leibeigene</dfn> lebten und arbeiteten auf dem Hof des Grundherrn, dem <dfn>Herrenhof</dfn>. Sie gehörten zum persönlichen Besitz des Grundherrn.</li>' +
          '<li><dfn>Hörige</dfn> lebten und wirtschafteten auf <dfn>Hufen</dfn>. Das waren kleine Bauernhöfe mit etwas Land. Sie gehörten dem Grundherrn und lagen in Dörfern, abseits von Herrenhof und <dfn>Herrenland</dfn>. Hörige durften das Land ohne Zustimmung des Grundherrn nicht verlassen.</li></ul>' +
          '<p>Beide waren <dfn>unfrei</dfn>. Dafür standen sie unter dem Schutz des Grundherrn. Die Hörigen mussten nicht in den Krieg ziehen. Bei Missernten versorgte der Grundherr seine Bauern mit Lebensmitteln. Für seine Leibeigenen und Hörigen war er auch Richter.</p>',
        merk: 'Leibeigene lebten auf dem Herrenhof und gehörten dem Grundherrn persönlich. Hörige lebten auf Hufen in Dörfern und waren an das Land gebunden.',
        achtung: '<strong>Aufgepasst:</strong> Hörige sind keine Leibeigenen. Leibeigene lebten auf dem Herrenhof als persönlicher Besitz des Grundherrn. Hörige wirtschafteten auf ihrer Hufe im Dorf, durften aber nicht ohne Zustimmung wegziehen.'
      },
      {
        titel: 'Freie Bauern',
        text: '<p><dfn>Freie Bauern</dfn> besaßen eigenes Land. Sie durften sich frei bewegen und den Wohnort wechseln. Dafür mussten sie <dfn>Kriegsdienst</dfn> leisten.</p>' +
          '<p>Die Freiheit hatte ihren Preis: Bei Missernten, Krankheit oder Verletzung konnten freie Bauern ihre Familien oft nicht mehr ernähren. Dann begaben sie sich freiwillig in die Grundherrschaft und wurden Hörige.</p>' +
          '<p>Als Hörige waren sie unfrei. Aber der Grundherr bot ihnen Schutz und befreite sie vom Kriegsdienst.</p>',
        merk: 'Freie Bauern hatten eigenes Land und durften wegziehen, mussten aber Kriegsdienst leisten. In Not begaben sich viele freiwillig in die Grundherrschaft.',
        achtung: '<strong>Aufgepasst:</strong> Den Kriegsdienst leisteten die freien Bauern, nicht die Hörigen. Gerade die Befreiung vom Kriegsdienst machte die Grundherrschaft für manche freie Bauern attraktiv.'
      },
      {
        titel: 'Abgaben und Dienste',
        text: '<p>Die hörigen Bauern mussten dem Grundherrn <dfn>Abgaben</dfn> und Dienste leisten.</p>' +
          '<ul><li>Ihre Abgaben lieferten sie auf einem <dfn>Fronhof</dfn> ab (althochdeutsch fro = Herr). Hier wohnte auch der <dfn>Meier</dfn>. Er war der Verwalter, dem mehrere Hufen und die Bauern darauf unterstellt waren.</li>' +
          '<li>Von ihren Erträgen mussten sie jährlich einen festgelegten Anteil abliefern, den <dfn>Zehnt</dfn>.</li>' +
          '<li>Außerdem leisteten sie <dfn>Frondienste</dfn>. Das waren vor allem landwirtschaftliche Arbeiten auf dem Herrenhof oder auf einem der Fronhöfe.</li></ul>' +
          '<p>Im Laufe des Mittelalters wurden die Frondienste zunehmend durch Geldzahlungen ersetzt.</p>',
        merk: 'Hörige lieferten Abgaben wie den Zehnt auf dem Fronhof ab und leisteten Frondienste. Der Meier verwaltete den Fronhof und mehrere Hufen.',
        achtung: '<strong>Aufgepasst:</strong> Der Zehnt war oft mehr als ein Zehntel. Abzugeben war nicht jedes zehnte, sondern immer das erste von zehn Hühnern. Pech für den Bauern, der nur acht Hühner hatte!'
      },
      {
        titel: 'Ein Schaubild lesen',
        abb: 'grundherrschaft', abbOpts: { beschriftet: true, pfeile: true },
        text: '<p>Das Schaubild (wie Buch S. 22, M1) zeigt die Grundherrschaft vereinfacht. So liest du es:</p>' +
          '<ul><li><strong>Flächen:</strong> Innen liegt das Herrenland mit Herrenhof, Mühle, Wald, Leibeigenen, Meier und Fronhöfen. Darum herum liegt das <dfn>Hufenland</dfn> mit den Dörfern der Hörigen. Die freien Bauern stehen außerhalb.</li>' +
          '<li><strong>Pfeile:</strong> Jeder Pfeil steht für eine Leistung. Lies ihn vom Anfang bis zur Spitze: Wer gibt wem was?</li>' +
          '<li><strong>Hin und zurück:</strong> Zu den Hörigen und Leibeigenen gehen Land, Schutz und Schlafplatz. Zurück zum Grundherrn gehen Abgaben und (Fron-)Dienste. Daran erkennst du Rechte und Pflichten.</li></ul>' +
          '<p>Ein Schaubild ordnet und vereinfacht. Es zeigt keinen echten Ort.</p>',
        merk: 'Im Schaubild steht jeder Pfeil für eine Leistung: vom Grundherrn Land, Schutz und Schlafplatz, zum Grundherrn Abgaben, (Fron-)Dienste und Kriegsdienste.'
      },
      {
        titel: 'Sachurteil und Werturteil',
        text: '<p>Im Buch (S. 23, M4) wird eine Frage auf zwei Arten beurteilt: Warum begaben sich freie Bauern in die Abhängigkeit?</p>' +
          '<ul><li>Ein <dfn>Sachurteil</dfn> urteilt mit den Augen der Menschen damals. Wie hätten sie die Frage beantwortet? Du begründest mit dem, was damals wichtig und möglich war, ohne deine eigene Meinung.</li>' +
          '<li>Ein <dfn>Werturteil</dfn> urteilt mit den Augen der Menschen heute. Du nennst deine eigene Meinung und den Maßstab, nach dem du urteilst, zum Beispiel Freiheit oder gleiche Rechte für alle.</li></ul>' +
          '<p>Im Arbeitsauftrag erkennst du, was verlangt ist: <strong>Beurteile</strong> verlangt ein Sachurteil, <strong>bewerte</strong> ein Werturteil, <strong>beurteile und bewerte</strong> beides nacheinander.</p>',
        merk: 'Sachurteil: mit den Augen der Menschen damals, ohne eigene Meinung. Werturteil: mit den Augen von heute, mit eigener, begründeter Meinung.',
        achtung: '<strong>Aufgepasst:</strong> „Ich finde …“ gehört nur ins Werturteil. Im Sachurteil zählt, was den Menschen damals wichtig war, zum Beispiel das Überleben der Familie.'
      },
      {
        titel: 'Eine Bildquelle: Fronarbeit',
        quelle: 'fronhof-fronarbeit',
        text: '<p>Die Buchmalerei stammt aus dem Psalter der Königin Maria, einer englischen Handschrift aus dem 14. Jahrhundert (Buch S. 23, M2). So gehst du vor:</p>' +
          '<ul><li><strong>Beschreiben:</strong> Drei Menschen schneiden gebückt mit Sicheln Getreide und halten Garben. Links steht ein Mann in einem langen blauen Gewand und zeigt mit einem langen Stab auf sie.</li>' +
          '<li><strong>Untersuchen:</strong> Wer könnten die Personen sein? Die Arbeitenden könnten hörige Bauern bei der Fronarbeit sein. Der Mann mit dem Stab arbeitet nicht mit. Er könnte ein Aufseher des Grundherrn sein.</li>' +
          '<li><strong>Deuten:</strong> Welches Verhältnis zeigt das Bild? Einer gibt die Anweisungen und kontrolliert, die anderen müssen arbeiten.</li></ul>',
        merk: 'Bei einer Bildquelle erst genau beschreiben, dann untersuchen, wer die Personen sein könnten, und zuletzt deuten, welches Verhältnis das Bild zeigt.'
      }
    ],

    ueben: [
      {
        id: 'fronhof-u1', typ: 'mehrfach',
        frage: 'Wer konnte im Mittelalter Grundherr sein?',
        optionen: ['ein Adliger, zum Beispiel ein Graf', 'ein Geistlicher, zum Beispiel ein Bischof oder Abt', 'der König', 'der Meier auf dem Fronhof', 'ein höriger Bauer'],
        richtig: [0, 1, 2],
        erkl: 'Grundherren waren Adlige, Geistliche und auch der König. Der Meier war nur der Verwalter eines Fronhofs.'
      },
      {
        id: 'fronhof-u2', typ: 'sortieren',
        frage: 'Leibeigene, Hörige oder freie Bauern? Ordne jede Aussage der richtigen Gruppe zu.',
        kategorien: ['Leibeigene', 'Hörige', 'freie Bauern'],
        items: [
          ['lebten und arbeiteten auf dem Herrenhof', 0],
          ['gehörten zum persönlichen Besitz des Grundherrn', 0],
          ['lebten und wirtschafteten auf Hufen in Dörfern', 1],
          ['durften das Land ohne Zustimmung des Grundherrn nicht verlassen und mussten nicht in den Krieg ziehen', 1],
          ['besaßen eigenes Land', 2],
          ['mussten Kriegsdienst leisten', 2],
          ['durften sich frei bewegen und den Wohnort wechseln', 2]
        ],
        erkl: 'Leibeigene: Herrenhof, persönlicher Besitz. Hörige: Hufe im Dorf, an das Land gebunden, kein Kriegsdienst. Freie Bauern: eigenes Land, frei, aber Kriegsdienst.'
      },
      {
        id: 'fronhof-u3', typ: 'behauptung',
        aussage: 'Hörige und Leibeigene sind dasselbe. Beide lebten auf dem Herrenhof.',
        stimmt: false,
        gruende: [
          'Nur die Leibeigenen lebten auf dem Herrenhof. Die Hörigen lebten auf Hufen in Dörfern abseits davon.',
          'Die Hörigen waren frei und durften jederzeit wegziehen, die Leibeigenen nicht.',
          'Es war umgekehrt: Die Leibeigenen lebten in den Dörfern, die Hörigen auf dem Herrenhof.'
        ],
        richtig: 0,
        erkl: 'Beide waren unfrei, aber auf verschiedene Weise: Leibeigene gehörten dem Grundherrn persönlich, Hörige waren an ihre Hufe gebunden.'
      },
      {
        id: 'fronhof-u4', typ: 'beschriften', abb: 'grundherrschaft',
        frage: 'Wer ist wer? Ordne den Nummern im Schaubild die Menschen zu.',
        strukturen: ['grundherr', 'leibeigene', 'hoerige', 'freieBauern', 'meier']
      },
      {
        id: 'fronhof-u5', typ: 'beschriften', abb: 'grundherrschaft',
        frage: 'Ordne den Nummern im Schaubild die Flächen und Orte zu.',
        strukturen: ['herrenland', 'hufenland', 'herrenhof', 'muehle', 'wald', 'fronhoefe', 'doerfer']
      },
      {
        id: 'fronhof-u6', typ: 'zuordnen', abb: 'grundherrschaft', abbOpts: { beschriftet: true, pfeile: 'buchstaben' },
        frage: 'Wofür stehen die Pfeile A bis D im Schaubild? Achte darauf, von wem zu wem sie zeigen.',
        paare: [
          ['Pfeil A', 'Kriegsdienste'],
          ['Pfeil B', 'Land zum Wohnen und Bewirtschaften, Schutz'],
          ['Pfeil C', 'Schutz, Schlafplatz'],
          ['Pfeil D', 'Abgaben, (Fron-)Dienste']
        ],
        erkl: 'A: Die freien Bauern leisten Kriegsdienste. B: Die Hörigen bekommen Land und Schutz. C: Die Leibeigenen bekommen Schutz und einen Schlafplatz. D: Die Leibeigenen leisten Abgaben und (Fron-)Dienste.'
      },
      {
        id: 'fronhof-u7', typ: 'luecke',
        frage: 'Sachurteil nach Buch S. 23, M4: So hätten die Menschen damals die Frage „Warum begaben sich freie Bauern in die Abhängigkeit?“ beantwortet. Fülle die Lücken.',
        text: 'Im Falle, dass ein {freier|höriger|leibeigener} Bauer krank oder im Krieg verletzt wird, kann er nicht mehr {arbeiten|kämpfen|beten}. Dann ist er zwar frei, kann aber sich und seine {Familie|Nachbarn|Grundherren} nicht mehr versorgen. Begibt er sich in einem solchen Fall in die {Grundherrschaft|Freiheit|Stadt}, können er und seine Familie überleben, denn der {Grundherr|Meier|Nachbar} bietet dem Bauern Schutz und befreit ihn vom Kriegsdienst. Dafür verlangt er aber {Abgaben|Kriegsdienste|Gebete} und {Dienste|Kriegsdienste|Gebete}.',
        erkl: 'Das Sachurteil denkt wie die Menschen damals: Für einen kranken oder verletzten Bauern ging es ums Überleben der Familie.'
      },
      {
        id: 'fronhof-u8', typ: 'luecke',
        frage: 'Werturteil nach Buch S. 23, M4: So kann man die Frage aus heutiger Sicht beantworten. Fülle die Lücken.',
        text: 'Ein {freier|höriger|reicher} Bauer in Not musste sich zwischen Freiheit und Überleben entscheiden. Es ist deshalb verständlich, dass sich freie Bauern in die {Abhängigkeit|Freiheit|Stadt} begaben. Der Grundherr war sehr mächtig und die Bauern hatten nicht die gleichen {Rechte|Häuser|Felder} und Möglichkeiten wie er. Heute sind alle Menschen {frei|reich|gesund} und wir müssen uns dieser Frage nicht stellen, da wir bei Krankheit Unterstützung von der Familie, aber auch von Versicherungen oder dem Staat erhalten. Unsere Freiheit wird durch {Gesetze|Grundherren|Soldaten} geschützt, die für alle gleich sind.',
        erkl: 'Das Werturteil misst die Vergangenheit an heutigen Werten: Freiheit und gleiche Rechte für alle, geschützt durch Gesetze.'
      },
      {
        id: 'fronhof-u9', typ: 'sortieren',
        frage: 'Sachurteil oder Werturteil? Ordne jeden Satz zu.',
        kategorien: ['Sachurteil (damals)', 'Werturteil (heute)'],
        items: [
          ['Für einen kranken Bauern war die Grundherrschaft damals oft die einzige Möglichkeit, seine Familie zu ernähren.', 0],
          ['Aus Sicht der Menschen damals war der Schutz bei Missernten wichtiger als die Freiheit.', 0],
          ['Viele Bauern hielten es damals für vernünftig, Abgaben zu leisten, wenn sie dafür nicht in den Krieg ziehen mussten.', 0],
          ['Ein Bauer konnte damals nicht auf Hilfe von Versicherungen oder vom Staat hoffen. Deshalb war der Schutz des Grundherrn für ihn wertvoll.', 0],
          ['Ich finde es ungerecht, dass die Hörigen nicht selbst entscheiden durften, wo sie wohnen.', 1],
          ['Nach heutigen Maßstäben verletzt die Unfreiheit der Hörigen das Recht jedes Menschen auf Freiheit.', 1],
          ['Für mich ist entscheidend, dass alle vor dem Gesetz gleich sind. Deshalb lehne ich es ab, dass der Grundherr zugleich Richter über seine Bauern war.', 1],
          ['Aus heutiger Sicht ist es gut, dass niemand mehr seine Freiheit aufgeben muss, um bei Krankheit versorgt zu werden.', 1]
        ],
        erkl: 'Sachurteile denken mit den Augen von damals. Werturteile erkennst du an heutigen Maßstäben und an der eigenen Meinung („Ich finde …“, „Für mich …“).'
      },
      {
        id: 'fronhof-u10', typ: 'wahl', operatorTraining: true,
        frage: 'Die Aufgabe lautet: „Beurteile, warum sich freie Bauern in die Hörigkeit begaben.“ Welche Antwort erfüllt den Auftrag?',
        optionen: [
          'Aus Sicht der Bauern damals war es verständlich: Bei Krankheit oder Missernte konnten sie ihre Familie nicht ernähren, und der Grundherr bot Schutz und Versorgung.',
          'Ich finde es falsch, dass Bauern ihre Freiheit aufgeben mussten. Heute schützen uns Gesetze, die für alle gleich sind, und das ist viel besser so.',
          'Freie Bauern besaßen eigenes Land und leisteten Kriegsdienst. Hörige lebten auf Hufen, lieferten Abgaben ab und leisteten Frondienste.'
        ],
        richtig: 0,
        erkl: '„Beurteile“ verlangt ein Sachurteil mit den Augen der Menschen damals. Die Antwort mit „Ich finde …“ ist ein Werturteil von heute, die Antwort über Land und Hufen beschreibt nur.'
      },
      {
        id: 'fronhof-u11', typ: 'eingabe',
        frage: 'Wie hießen die kleinen Bauernhöfe mit etwas Land, auf denen die Hörigen lebten?',
        akzeptiert: ['Hufen', 'Hufe', 'die Hufen'],
        nicht: ['Fronhof', 'Fronhöfe', 'Herrenhof'],
        erkl: 'Hufen gehörten dem Grundherrn und lagen in Dörfern, abseits von Herrenhof und Herrenland.'
      },
      {
        id: 'fronhof-u12', typ: 'eingabe',
        frage: 'Wie hießen die unfreien Bauern, die auf Hufen lebten und das Land ohne Zustimmung des Grundherrn nicht verlassen durften?',
        akzeptiert: ['Hörige', 'Hörigen', 'die Hörigen'],
        nicht: ['Leibeigene', 'Leibeigenen'],
        erkl: 'Hörige waren an das Land gebunden. Leibeigene lebten dagegen auf dem Herrenhof.'
      },
      {
        id: 'fronhof-u13', typ: 'zahl',
        frage: 'Beim Zehnt war immer das erste von zehn Hühnern abzugeben. Pech für den Bauern, der nur acht Hühner hatte: Auch er musste eins abgeben. Wie viel Prozent seiner Hühner waren das?',
        antwort: 12.5, einheit: '%', tol: 0.5,
        erkl: '1 von 8 Hühnern sind 12,5 %. Ein echtes Zehntel wären nur 10 %. Deshalb war der Zehnt oft mehr als ein Zehntel.'
      },
      {
        id: 'fronhof-u14', typ: 'wahl', quelle: 'fronhof-fronarbeit',
        frage: 'Was zeigt die Bildquelle?',
        optionen: [
          'Bauern ernten mit Sicheln Getreide, ein Mann mit einem langen Stab beaufsichtigt sie.',
          'Bauern liefern auf einem Fronhof Hühner und Eier beim Meier ab.',
          'Ein Grundherr übergibt freien Bauern ein Stück Land für ihre Familien.'
        ],
        richtig: 0,
        erkl: 'Das Bild zeigt Fronarbeit bei der Getreideernte. Abgaben auf dem Fronhof sind nicht zu sehen.'
      },
      {
        id: 'fronhof-u15', typ: 'mehrfach', quelle: 'fronhof-fronarbeit',
        frage: 'Woran erkennst du im Bild, dass der Mann links eine besondere Stellung hat?',
        optionen: [
          'Er steht aufrecht und arbeitet nicht mit.',
          'Er zeigt mit einem langen Stab auf die Arbeitenden.',
          'Er trägt eine Krone wie ein König.',
          'Er schneidet selbst das meiste Getreide.'
        ],
        richtig: [0, 1],
        erkl: 'Er arbeitet nicht selbst, sondern zeigt mit dem Stab auf die anderen. Er könnte ein Aufseher des Grundherrn sein.'
      },
      {
        id: 'fronhof-u16', typ: 'wahl', quelle: 'fronhof-capitulare',
        frage: 'Diese Quelle kennst du nicht aus dem Buch. Wer gibt hier wem Anweisungen?',
        optionen: [
          'Karl der Große als Grundherr seiner Königsgüter gibt seinen Verwaltern Anweisungen.',
          'Ein höriger Bauer beschwert sich beim König über seinen Verwalter.',
          'Ein Meier berichtet dem König, was die Bauern abgeliefert haben.'
        ],
        richtig: 0,
        erkl: 'Das Capitulare de villis enthält Vorschriften, die um 800 im Namen Karls des Großen für die Verwalter seiner Güter erlassen wurden. Karl ist hier selbst Grundherr.'
      },
      {
        id: 'fronhof-u17', typ: 'reihenfolge', startFest: true,
        frage: 'Vom freien Bauern zum Hörigen: Bringe die Schritte in eine sinnvolle Reihenfolge.',
        schritte: [
          'Ein freier Bauer bewirtschaftet sein eigenes Land und leistet Kriegsdienst.',
          'Im Krieg wird er verletzt und kann nicht mehr arbeiten.',
          'Er kann seine Familie nicht mehr ernähren.',
          'Er begibt sich freiwillig in die Grundherrschaft.',
          'Der Grundherr gibt ihm Land zum Wohnen und Bewirtschaften und Schutz.',
          'Dafür liefert er Abgaben auf dem Fronhof ab und leistet Frondienste.'
        ],
        erkl: 'In Not tauschte der Bauer seine Freiheit gegen Schutz und Versorgung. Dafür schuldete er dem Grundherrn Abgaben und Dienste.'
      },
      {
        id: 'fronhof-u18', typ: 'luecke',
        frage: 'Abgaben und Dienste: Wähle die passenden Wörter.',
        text: 'Die hörigen Bauern lieferten ihre Abgaben auf einem {Fronhof|Marktplatz|Kirchhof} ab. Dort wohnte auch der {Meier|Grundherr|Abt}, der Verwalter. Die {Frondienste|Kriegsdienste|Gebete} waren vor allem landwirtschaftliche Arbeiten auf dem Herrenhof oder einem Fronhof. Im Laufe des Mittelalters wurden sie zunehmend durch {Geldzahlungen|Kriegsdienste|Geschenke} ersetzt.',
        erkl: 'Fronhof kommt von althochdeutsch fro = Herr. Der Meier verwaltete dort mehrere Hufen.'
      },
      {
        id: 'fronhof-u19', typ: 'wahl', operatorTraining: true,
        frage: 'Was verlangt der Arbeitsauftrag „Bewerte …“?',
        optionen: [
          'ein Urteil nach heutigen Wertmaßstäben, mit deiner eigenen, begründeten Meinung',
          'ein Urteil nur mit den Augen der Menschen damals, ohne deine eigene Meinung',
          'eine genaue Beschreibung des Materials, ganz ohne eigenes Urteil'
        ],
        richtig: 0,
        erkl: '„Bewerte“ verlangt ein Werturteil. Das Urteil mit den Augen von damals ist das Sachurteil, das verlangt „Beurteile“.'
      }
    ],

    erklaeren: [
      {
        id: 'fronhof-e1', operator: 'erlaeutern',
        frage: 'In der Grundherrschaft gab es Leibeigene, Hörige und freie Bauern. Erläutere mithilfe des Darstellungstextes, welche Rechte und Pflichten sie gegenüber dem Grundherrn hatten. Nutze dazu auch den Wortschatz (vgl. Buch S. 23, A1).',
        material: WORTSCHATZ,
        tipp: 'Gehe Gruppe für Gruppe vor: erst Leibeigene, dann Hörige, dann freie Bauern. Nenne jeweils, was sie bekamen oder durften (Rechte) und was sie leisten mussten (Pflichten), und gib Beispiele.',
        begriffe: [
          { name: 'Leibeigene', muster: ['leibeigen'] },
          { name: 'Hörige', muster: ['hoerig'] },
          { name: 'freie Bauern', muster: ['freie bauer', 'freien bauer'] },
          { name: 'Herrenhof', muster: ['herrenhof'] },
          { name: 'Hufe', muster: ['hufe'] },
          { name: 'Abgaben', muster: ['abgabe'] },
          { name: 'Frondienste', muster: ['frondienst', 'fron'] },
          { name: 'Schutz', muster: ['schutz', 'schuetz'] },
          { name: 'Kriegsdienst', muster: ['kriegsdienst', 'krieg'] }
        ],
        punkte: [
          { text: 'Leibeigene lebten und arbeiteten auf dem Herrenhof und gehörten zum persönlichen Besitz des Grundherrn.', p: 1 },
          { text: 'Leibeigene bekamen Schutz und einen Schlafplatz. Dafür leisteten sie Abgaben und (Fron-)Dienste.', p: 1 },
          { text: 'Hörige lebten auf Hufen, die dem Grundherrn gehörten. Sie waren unfrei und durften das Land ohne seine Zustimmung nicht verlassen.', p: 1 },
          { text: 'Rechte der Hörigen: Land zum Wohnen und Bewirtschaften, Schutz, Versorgung mit Lebensmitteln bei Missernten, kein Kriegsdienst.', p: 1 },
          { text: 'Pflichten der Hörigen: Abgaben wie den Zehnt auf dem Fronhof abliefern und Frondienste leisten.', p: 1 },
          { text: 'Für Leibeigene und Hörige war der Grundherr auch Richter.', p: 1 },
          { text: 'Freie Bauern besaßen eigenes Land und durften sich frei bewegen und den Wohnort wechseln.', p: 1 },
          { text: 'Freie Bauern mussten Kriegsdienst leisten.', p: 1 },
          { text: 'Mindestens ein Beispiel als Beleg, z. B. das erste von zehn Hühnern beim Zehnt oder Arbeit auf dem Herrenhof als Frondienst.', p: 1 }
        ],
        muster: '<p>In der Grundherrschaft hatten die drei Gruppen unterschiedliche Rechte und Pflichten. Die Leibeigenen lebten und arbeiteten auf dem Herrenhof und gehörten zum persönlichen Besitz des Grundherrn. Er gab ihnen Schutz und einen Schlafplatz, dafür mussten sie Abgaben und Dienste leisten.</p>' +
          '<p>Die Hörigen lebten auf Hufen, also kleinen Bauernhöfen in Dörfern, die dem Grundherrn gehörten. Sie waren unfrei und durften das Land ohne seine Zustimmung nicht verlassen. Dafür standen sie unter seinem Schutz, mussten nicht in den Krieg ziehen und wurden bei Missernten mit Lebensmitteln versorgt. Ihre Pflichten waren Abgaben und Frondienste. Zum Beispiel mussten sie jedes Jahr den Zehnt auf dem Fronhof abliefern. Das war oft mehr als ein Zehntel, weil immer das erste von zehn Hühnern abzugeben war. Außerdem arbeiteten sie auf dem Herrenhof oder einem Fronhof. Für Leibeigene und Hörige war der Grundherr auch Richter.</p>' +
          '<p>Die freien Bauern dagegen besaßen eigenes Land und durften sich frei bewegen und den Wohnort wechseln. Ihre Pflicht war der Kriegsdienst.</p>'
      },
      {
        id: 'fronhof-e2', operator: 'beurteilenBewerten',
        frage: 'Beurteile und bewerte das Problem, warum sich freie Bauern in die Hörigkeit begaben. Nutze dazu die Fragen aus M4 (vgl. Buch S. 23, A3a).',
        material: M4,
        tipp: 'Trenne die beiden Teile sichtbar: Beginne mit „Aus Sicht der Menschen damals …“ und schreibe danach „Aus heutiger Sicht …“. Nenne im Werturteil deinen Maßstab.',
        begriffe: [
          { name: 'freie Bauern', muster: ['freie bauer', 'freien bauer', 'freier bauer'] },
          { name: 'Grundherr', muster: ['grundherr'] },
          { name: 'Schutz', muster: ['schutz', 'schuetz'] },
          { name: 'Kriegsdienst', muster: ['kriegsdienst', 'krieg'] },
          { name: 'Abgaben', muster: ['abgabe'] },
          { name: 'Freiheit', muster: ['freiheit'] },
          { name: 'damals / heute', muster: ['damals', 'heute'] }
        ],
        punkte: [
          { text: 'Lage des freien Bauern in Not: Bei Missernte, Krankheit oder Verletzung konnte er nicht mehr arbeiten und seine Familie nicht ernähren.', p: 1, art: 'sach' },
          { text: 'Was die Grundherrschaft bot: Schutz, Versorgung bei Missernten, Befreiung vom Kriegsdienst, Land zum Bewirtschaften.', p: 1, art: 'sach' },
          { text: 'Der Preis dafür: Abgaben und Dienste, Verlust der Freiheit (an das Land gebunden).', p: 1, art: 'sach' },
          { text: 'Begründetes Sachurteil aus Sicht der Menschen damals, z. B.: Es war verständlich, weil das Überleben der Familie wichtiger war als die Freiheit.', p: 1, art: 'sach' },
          { text: 'Ein heutiger Maßstab wird genannt, z. B. Freiheit, gleiche Rechte oder Gleichheit vor dem Gesetz.', p: 1, art: 'wert' },
          { text: 'Vergleich mit heute: Heute helfen Familie, Versicherungen und Staat, und Gesetze schützen unsere Freiheit.', p: 1, art: 'wert' },
          { text: 'Eigene, begründete Meinung („Ich finde …, weil …“), die zum genannten Maßstab passt.', p: 1, art: 'wert' }
        ],
        muster: '<p>Aus Sicht der Menschen damals war es verständlich, dass sich freie Bauern in die Hörigkeit begaben. Wurde ein freier Bauer krank oder im Krieg verletzt, konnte er nicht mehr arbeiten. Dann war er zwar frei, konnte aber sich und seine Familie nicht mehr versorgen. In der Grundherrschaft konnten er und seine Familie überleben, denn der Grundherr bot ihm Schutz, versorgte ihn bei Missernten und befreite ihn vom Kriegsdienst. Dafür musste der Bauer Abgaben und Dienste leisten und durfte das Land nicht mehr verlassen. Insgesamt war es damals für viele die vernünftigste Entscheidung, weil das Überleben der Familie wichtiger war als die Freiheit.</p>' +
          '<p>Aus heutiger Sicht finde ich die Entscheidung verständlich, die Lage der Bauern aber ungerecht. Für mich ist entscheidend, dass alle Menschen frei sind und die gleichen Rechte haben. Die Bauern mussten sich zwischen Freiheit und Überleben entscheiden, weil der Grundherr viel mächtiger war als sie. Heute muss das niemand mehr, denn bei Krankheit helfen die Familie, Versicherungen und der Staat, und unsere Freiheit wird durch Gesetze geschützt, die für alle gleich sind.</p>'
      },
      {
        id: 'fronhof-e3', operator: 'erklaeren',
        frage: 'Erkläre den Unterschied zwischen einem historischen Sachurteil und einem historischen Werturteil in eigenen Worten (vgl. Buch S. 23, A3b).',
        tipp: 'Erkläre erst das Sachurteil, dann das Werturteil, und zeige den Unterschied an einem Beispiel, etwa an den freien Bauern.',
        begriffe: [
          { name: 'Sachurteil', muster: ['sachurteil'] },
          { name: 'Werturteil', muster: ['werturteil'] },
          { name: 'damals', muster: ['damals', 'vergangenheit'] },
          { name: 'heute', muster: ['heute', 'heutig'] },
          { name: 'Meinung', muster: ['meinung'] },
          { name: 'Maßstab / Werte', muster: ['massstab', 'werte'] }
        ],
        punkte: [
          { text: 'Ein Sachurteil urteilt mit den Augen der Menschen damals: Wie hätten sie die Frage beantwortet?', p: 1 },
          { text: 'Im Sachurteil begründet man mit dem, was damals wichtig und möglich war, ohne die eigene Meinung.', p: 1 },
          { text: 'Ein Werturteil urteilt mit den Augen der Menschen heute, nach heutigen Werten wie Freiheit oder gleichen Rechten.', p: 1 },
          { text: 'Im Werturteil nennt man die eigene Meinung offen und begründet sie.', p: 1 },
          { text: 'Ein passendes Beispiel, z. B. die freien Bauern: damals verständlich, um zu überleben; heute ungerecht, weil sie ihre Freiheit aufgeben mussten.', p: 1 },
          { text: 'Begründung, warum man beide Urteile trennt, z. B. weil die Menschen damals die heutigen Rechte und Hilfen noch nicht hatten.', p: 1 }
        ],
        muster: '<p>Ein historisches Sachurteil beurteilt eine Frage mit den Augen der Menschen damals. Man überlegt, wie die Menschen in der Vergangenheit die Frage beantwortet hätten, und begründet mit dem, was damals wichtig und möglich war. Die eigene Meinung spielt dabei keine Rolle.</p>' +
          '<p>Ein historisches Werturteil beurteilt die Frage dagegen mit den Augen der Menschen heute. Man misst die Vergangenheit an heutigen Werten wie Freiheit oder gleichen Rechten für alle und sagt offen und begründet seine eigene Meinung.</p>' +
          '<p>Zum Beispiel ist es im Sachurteil verständlich, dass sich freie Bauern in Not in die Hörigkeit begaben, weil sie so mit ihrer Familie überleben konnten. Im Werturteil kann man es trotzdem ungerecht finden, dass sie dafür ihre Freiheit aufgeben mussten. Man trennt die beiden Urteile, weil die Menschen damals unsere heutigen Rechte und Hilfen noch nicht hatten.</p>'
      }
    ],

    hoftag: {
      wissen: [
        {
          id: 'fronhof-hw1', typ: 'wahl',
          frage: 'Was bedeutet das althochdeutsche Wort „fro“ in „Fronhof“ und „Frondienst“?',
          optionen: ['Herr', 'froh', 'Feld'],
          richtig: 0,
          erkl: 'fro = Herr. Ein Fronhof ist ein Hof des Herrn, ein Frondienst ein Dienst für den Herrn.'
        },
        {
          id: 'fronhof-hw2', typ: 'liste', anzahl: 2,
          frage: 'Nenne zwei Dinge oder Menschen, die im Schaubild der Grundherrschaft zum Herrenland gehören (außer dem Herrenhof).',
          gruppen: [['Mühle', 'Muehle'], ['Wald'], ['Fronhöfe', 'Fronhof'], ['Meier'], ['Leibeigene', 'Leibeigenen']]
        },
        {
          id: 'fronhof-hw3', typ: 'matrix',
          frage: 'Was trifft auf welche Gruppe zu? Kreuze an.',
          zeilenKopf: 'Merkmal', spaltenKopf: 'Gruppe',
          zeilen: ['besaßen eigenes Land', 'standen unter dem Schutz des Grundherrn', 'durften frei wegziehen', 'der Grundherr war ihr Richter'],
          spalten: ['Leibeigene', 'Hörige', 'freie Bauern'],
          richtig: [
            [false, false, true],
            [true, true, false],
            [false, false, true],
            [true, true, false]
          ],
          erkl: 'Leibeigene und Hörige standen unter dem Schutz und der Gerichtsbarkeit des Grundherrn. Freie Bauern hatten eigenes Land und durften wegziehen.'
        },
        {
          id: 'fronhof-hw4', typ: 'eingabe',
          frage: 'Wie hieß der festgelegte Anteil vom Ertrag, den die hörigen Bauern jedes Jahr abliefern mussten?',
          akzeptiert: ['Zehnt', 'Zehnte', 'der Zehnt', 'Zehnten'],
          nicht: ['Zehntel'],
          erkl: 'Der Zehnt war oft mehr als ein Zehntel.'
        },
        {
          id: 'fronhof-hw5', typ: 'behauptung',
          aussage: 'Freie Bauern mussten keinen Kriegsdienst leisten, weil sie eigenes Land besaßen.',
          stimmt: false,
          gruende: [
            'Freie Bauern mussten Kriegsdienst leisten. Die Hörigen waren davon befreit.',
            'Kriegsdienst mussten nur die Leibeigenen auf dem Herrenhof leisten.',
            'Kriegsdienst leisteten nur Adlige, Bauern zogen nie in den Krieg.'
          ],
          richtig: 0,
          erkl: 'Das Land gab den freien Bauern Freiheit, aber keine Befreiung vom Kriegsdienst.'
        },
        {
          id: 'fronhof-hw6', typ: 'zuordnen',
          frage: 'Ordne jedem Begriff die passende Erklärung zu.',
          paare: [
            ['Meier', 'Verwalter auf dem Fronhof'],
            ['Hufe', 'kleiner Bauernhof mit etwas Land'],
            ['Zehnt', 'festgelegter Anteil vom Ertrag'],
            ['Frondienst', 'Arbeit auf dem Herrenhof oder einem Fronhof']
          ]
        },
        {
          id: 'fronhof-hw7', typ: 'luecke',
          text: 'Ein {Sachurteil|Werturteil|Vorurteil} urteilt mit den Augen der Menschen damals. Ein {Werturteil|Sachurteil|Vorurteil} urteilt mit den Augen der Menschen heute.'
        }
      ],
      material: [
        {
          id: 'fronhof-hm1', quelle: 'fronhof-capitulare',
          text: 'Diese Quelle kennst du nicht aus dem Buch. Lies sie genau und beantworte die Fragen.',
          items: [
            {
              id: 'fronhof-hm1-1', typ: 'wahl', p: 1,
              frage: 'Um welche Art von Quelle handelt es sich?',
              optionen: ['Vorschriften eines Herrschers für die Verwalter seiner Güter', 'Bericht eines Bauern über seine Arbeit auf der Hufe', 'Lobgedicht eines Hofdichters auf Karl den Großen'],
              richtig: 0
            },
            {
              id: 'fronhof-hm1-2', typ: 'mehrfach', p: 1,
              frage: 'Welche Leistungen der Bauern werden in der Quelle genannt?',
              optionen: ['Hühner und Eier (Kapitel 39)', 'Pflügen für die Königsgüter (Kapitel 62)', 'Kriegsdienst für den König', 'Geldzahlungen an den Papst'],
              richtig: [0, 1]
            },
            {
              id: 'fronhof-hm1-3', typ: 'zuordnen', p: 2,
              frage: 'Ordne jedem Kapitel seinen Inhalt zu.',
              paare: [
                ['Kapitel 2', 'Die Leute sollen gut versorgt werden und nicht verarmen.'],
                ['Kapitel 3', 'Die Verwalter dürfen die Leute nicht für sich arbeiten lassen.'],
                ['Kapitel 39', 'Hühner und Eier annehmen und Überzähliges verkaufen lassen.'],
                ['Kapitel 62', 'Jedes Jahr zu Weihnachten melden, was die Güter eingebracht haben.']
              ]
            },
            {
              id: 'fronhof-hm1-4', typ: 'behauptung', p: 1,
              aussage: 'Dem König ging es in dieser Quelle nur um seine Einnahmen. Wie es seinen Leuten ging, war ihm egal.',
              stimmt: false,
              gruende: [
                'In Kapitel 2 und 3 verlangt er, dass seine Leute versorgt und von den Verwaltern nicht ausgenutzt werden.',
                'In Kapitel 62 verzichtet er ausdrücklich auf alle Abgaben seiner Bauern.',
                'Die Quelle sagt überhaupt nichts über Abgaben oder Einnahmen.'
              ],
              richtig: 0
            },
            {
              id: 'fronhof-hm1-5', typ: 'luecke', p: 1,
              frage: 'Übertrage die Quelle in die Begriffe des Buchs.',
              text: 'Karl ist hier der {Grundherr|Meier|Hörige} seiner Königsgüter. Die Bauern auf den Hufen, die jedes Jahr Hühner und Eier abgeben, entsprechen den {Hörigen|freien Bauern|Leibeigenen}.'
            }
          ],
          erkl: {
            id: 'fronhof-hm1-e', operator: 'untersuchen',
            frage: 'Untersuche, was die Quelle über das Verhältnis zwischen dem Grundherrn und seinen Bauern verrät. Ordne die Quelle dabei kurz ein: Wer? Wann? Für wen?',
            begriffe: [
              { name: 'Grundherr', muster: ['grundherr'] },
              { name: 'Abgaben', muster: ['abgabe', 'huehner', 'eier'] },
              { name: 'Verwalter', muster: ['verwalter'] },
              { name: 'Sichtweise', muster: ['sicht', 'perspektive'] }
            ],
            punkte: [
              { text: 'Einordnung: Vorschriften aus der Zeit um 800, erlassen im Namen Karls des Großen für die Verwalter seiner Königsgüter. Karl ist hier selbst Grundherr.', p: 1 },
              { text: 'Pflichten der Bauern: Abgaben wie Hühner und Eier, Dienste wie das Pflügen; der König will genau wissen, was seine Güter einbringen.', p: 1 },
              { text: 'Schutz: Die Leute sollen versorgt werden und nicht verarmen; die Verwalter dürfen sie nicht für sich arbeiten lassen oder Geschenke nehmen.', p: 1 },
              { text: 'Sichtweise: Die Quelle zeigt die Sicht des Grundherrn und wie es sein sollte, nicht sicher, wie es wirklich war.', p: 1 }
            ],
            muster: '<p>Die Quelle enthält Vorschriften, die um 800 im Namen Karls des Großen für die Verwalter seiner Königsgüter erlassen wurden. Karl ist hier also selbst Grundherr. Die Quelle zeigt, dass die Bauern auf den Hufen Abgaben leisten mussten, zum Beispiel jedes Jahr Hühner und Eier, und Dienste wie das Pflügen. Der König wollte jedes Jahr zu Weihnachten genau wissen, was seine Güter eingebracht hatten. Gleichzeitig verlangt er, dass seine Leute gut versorgt werden und nicht verarmen, und er verbietet den Verwaltern, sie für sich selbst arbeiten zu lassen oder Geschenke von ihnen zu nehmen. Die Quelle zeigt aber nur die Sicht des Grundherrn und wie es sein sollte. Ob sich alle Verwalter daran hielten, erfahren wir aus ihr nicht.</p>'
          }
        },
        {
          id: 'fronhof-hm2', quelle: 'fronhof-fronarbeit',
          text: 'Bildquelle aus dem Buch (S. 23, M2). Sieh dir das Bild genau an.',
          items: [
            {
              id: 'fronhof-hm2-1', typ: 'wahl', p: 1,
              frage: 'Welche Arbeit verrichten die gebückten Menschen?',
              optionen: ['Sie schneiden Getreide mit Sicheln und halten Garben.', 'Sie pflügen ein Feld mit einem Räderpflug.', 'Sie mahlen Getreide in einer Mühle.'],
              richtig: 0
            },
            {
              id: 'fronhof-hm2-2', typ: 'wahl', p: 1,
              frage: 'Wer könnte der Mann mit dem langen Stab sein?',
              optionen: ['ein Aufseher, der für den Grundherrn die Arbeit überwacht', 'ein freier Bauer, der seinen Nachbarn bei der Ernte hilft', 'ein Mönch, der den Bauern aus der Bibel vorliest'],
              richtig: 0
            },
            {
              id: 'fronhof-hm2-3', typ: 'mehrfach', p: 2,
              frage: 'Welche Bildelemente zeigen das Verhältnis zwischen den Personen?',
              optionen: [
                'Der Mann links steht aufrecht, die anderen arbeiten gebückt.',
                'Er zeigt mit dem langen Stab auf die Arbeitenden.',
                'Alle Personen arbeiten gemeinsam mit Sicheln.',
                'Die Arbeitenden sitzen mit dem Mann an einem Tisch.'
              ],
              richtig: [0, 1]
            },
            {
              id: 'fronhof-hm2-4', typ: 'luecke', p: 1,
              text: 'Die Arbeit, die hörige Bauern für den Grundherrn leisten mussten, nennt man {Frondienst|Kriegsdienst|Zehnt}. Das Bild stammt aus dem {14.|8.|19.} Jahrhundert.'
            },
            {
              id: 'fronhof-hm2-5', typ: 'behauptung', p: 1,
              aussage: 'Das Bild zeigt genau, wie Fronarbeit überall in Europa ablief.',
              stimmt: false,
              gruende: [
                'Es ist eine englische Buchmalerei. Der Maler zeigt die Arbeit so, wie er sie darstellen wollte, nicht für ganz Europa.',
                'Fronarbeit gab es im Mittelalter nur in England.',
                'Auf dem Bild arbeiten gar keine Bauern, sondern Mönche.'
              ],
              richtig: 0
            }
          ],
          erkl: {
            id: 'fronhof-hm2-e', operator: 'untersuchen',
            frage: 'Untersuche die Bildquelle: Wer könnten die abgebildeten Personen sein? Welches Verhältnis zwischen ihnen kommt im Bild zum Ausdruck?',
            begriffe: [
              { name: 'Frondienst', muster: ['frondienst', 'fronarbeit'] },
              { name: 'Hörige', muster: ['hoerig'] },
              { name: 'Grundherr', muster: ['grundherr'] },
              { name: 'Aufseher / Verwalter', muster: ['aufseher', 'verwalter', 'meier'] }
            ],
            punkte: [
              { text: 'Beschreibung: Drei Menschen schneiden gebückt Getreide mit Sicheln, links steht ein Mann mit einem langen Stab.', p: 1 },
              { text: 'Personen: Die Arbeitenden könnten hörige Bauern bei der Fronarbeit sein, der Mann ein Aufseher oder Verwalter des Grundherrn.', p: 1 },
              { text: 'Verhältnis: Über- und Unterordnung. Er kontrolliert und gibt Anweisungen, die Bauern müssen arbeiten.', p: 1 },
              { text: 'Einordnung: Frondienste waren landwirtschaftliche Arbeiten für den Grundherrn; englische Buchmalerei aus dem 14. Jahrhundert.', p: 1 }
            ],
            muster: '<p>Auf der englischen Buchmalerei aus dem 14. Jahrhundert sieht man drei Menschen, die gebückt mit Sicheln Getreide schneiden und Garben halten. Links steht aufrecht ein Mann in einem langen blauen Gewand und zeigt mit einem langen Stab auf sie. Die Arbeitenden könnten hörige Bauern sein, die Frondienst auf den Feldern ihres Grundherrn leisten. Der Mann ist wahrscheinlich ein Aufseher oder Verwalter des Grundherrn. Das Bild zeigt ein Verhältnis von Über- und Unterordnung: Der Aufseher arbeitet nicht mit, sondern kontrolliert und gibt Anweisungen, während die Bauern schwer arbeiten müssen.</p>'
          }
        }
      ],
      schreiben: [
        {
          id: 'fronhof-hs1', operator: 'erklaeren',
          frage: 'Erkläre, wie die Grundherrschaft organisiert war. Gehe auf den Grundherrn, das Herrenland und das Hufenland sowie auf die Abgaben und Dienste ein.',
          begriffe: [
            { name: 'Grundherr', muster: ['grundherr'] },
            { name: 'Herrenhof', muster: ['herrenhof'] },
            { name: 'Hufe', muster: ['hufe'] },
            { name: 'Fronhof', muster: ['fronhof', 'fronhoef'] },
            { name: 'Meier', muster: ['meier'] },
            { name: 'Zehnt', muster: ['zehnt'] },
            { name: 'Frondienste', muster: ['frondienst'] }
          ],
          punkte: [
            { text: 'Der Grundherr besaß das Land. Grundherren waren Adlige, Geistliche oder der König.', p: 1 },
            { text: 'Zum Herrenland gehörten Herrenhof, Mühle, Wald und Fronhöfe.', p: 1 },
            { text: 'Auf dem Herrenhof lebten und arbeiteten die Leibeigenen, die zum persönlichen Besitz des Grundherrn gehörten.', p: 1 },
            { text: 'Im Hufenland lebten die Hörigen auf Hufen in Dörfern und waren an das Land gebunden.', p: 1 },
            { text: 'Die Abgaben wurden auf einem Fronhof abgeliefert, wo der Meier wohnte, der Verwalter mehrerer Hufen.', p: 1 },
            { text: 'Der Zehnt war ein festgelegter Anteil vom Ertrag, oft mehr als ein Zehntel.', p: 1 },
            { text: 'Frondienste waren vor allem landwirtschaftliche Arbeiten auf dem Herrenhof oder einem Fronhof; später wurden sie oft durch Geld ersetzt.', p: 1 },
            { text: 'Gegenleistung des Grundherrn: Land zum Wohnen und Bewirtschaften, Schutz, Lebensmittel bei Missernten; er war auch Richter.', p: 1 }
          ],
          muster: '<p>In der Grundherrschaft besaß ein Grundherr das Land, auf dem die Bauern lebten und arbeiteten. Grundherr konnte ein Adliger wie ein Graf, ein Geistlicher wie ein Bischof oder Abt oder auch der König sein. Zum Herrenland gehörten der Herrenhof, die Mühle, der Wald und die Fronhöfe. Auf dem Herrenhof lebten und arbeiteten die Leibeigenen, die zum persönlichen Besitz des Grundherrn gehörten.</p>' +
            '<p>Abseits davon lag das Hufenland mit den Dörfern. Dort lebten die Hörigen auf Hufen, kleinen Bauernhöfen mit etwas Land, die dem Grundherrn gehörten. Sie waren an das Land gebunden. Ihre Abgaben lieferten sie auf einem Fronhof ab. Dort wohnte der Meier, der Verwalter, dem mehrere Hufen unterstellt waren. Jedes Jahr mussten sie den Zehnt abgeben, einen festgelegten Anteil ihres Ertrags, der oft mehr als ein Zehntel war. Außerdem leisteten sie Frondienste, also vor allem landwirtschaftliche Arbeit auf dem Herrenhof oder einem Fronhof. Später wurden diese Dienste zunehmend durch Geld ersetzt.</p>' +
            '<p>Der Grundherr gab den Bauern dafür Land zum Wohnen und Bewirtschaften und Schutz. Bei Missernten versorgte er sie mit Lebensmitteln, und er war auch ihr Richter.</p>'
        },
        {
          id: 'fronhof-hs2', operator: 'beurteilen',
          frage: 'Beurteile, ob die Grundherrschaft für die hörigen Bauern damals mehr Vorteile oder mehr Nachteile hatte.',
          tipp: 'Sachurteil: Urteile mit den Augen der Menschen damals, nicht nach heutigen Maßstäben.',
          begriffe: [
            { name: 'Hörige', muster: ['hoerig'] },
            { name: 'Schutz', muster: ['schutz', 'schuetz'] },
            { name: 'Kriegsdienst', muster: ['kriegsdienst', 'krieg'] },
            { name: 'unfrei', muster: ['unfrei'] },
            { name: 'Abgaben', muster: ['abgabe'] },
            { name: 'Frondienste', muster: ['frondienst'] }
          ],
          punkte: [
            { text: 'Vorteil: Schutz durch den Grundherrn.', p: 1 },
            { text: 'Vorteil: Versorgung mit Lebensmitteln bei Missernten.', p: 1 },
            { text: 'Vorteil: Hörige mussten nicht in den Krieg ziehen.', p: 1 },
            { text: 'Vorteil: Sie bekamen Land zum Wohnen und Bewirtschaften (Hufe).', p: 1 },
            { text: 'Nachteil: Sie waren unfrei und durften das Land ohne Zustimmung des Grundherrn nicht verlassen.', p: 1 },
            { text: 'Nachteil: Abgaben wie der Zehnt (oft mehr als ein Zehntel) und Frondienste.', p: 1 },
            { text: 'Nachteil: Der Grundherr war zugleich ihr Richter, sie waren stark von ihm abhängig.', p: 1 },
            { text: 'Begründetes Gesamturteil aus Sicht der Menschen damals, ohne heutige Maßstäbe (z. B. Sicherheit und Überleben wogen für viele schwerer als Freiheit).', p: 1 }
          ],
          muster: '<p>Aus Sicht der hörigen Bauern damals hatte die Grundherrschaft Vorteile und Nachteile. Ein Vorteil war der Schutz durch den Grundherrn. Bei Missernten versorgte er sie mit Lebensmitteln, und sie mussten nicht in den Krieg ziehen. Außerdem bekamen sie eine Hufe, also Land zum Wohnen und Bewirtschaften.</p>' +
            '<p>Andererseits waren sie unfrei und durften das Land ohne Zustimmung des Grundherrn nicht verlassen. Sie mussten Abgaben wie den Zehnt leisten, der oft mehr als ein Zehntel betrug, und Frondienste auf dem Herrenhof oder einem Fronhof. Da der Grundherr auch ihr Richter war, waren sie stark von ihm abhängig.</p>' +
            '<p>Insgesamt überwogen damals für viele Bauern die Vorteile, weil Sicherheit und das Überleben der Familie in einer Zeit mit Missernten und Kriegen wichtiger waren als Freiheit. Das zeigt sich auch daran, dass sich sogar freie Bauern freiwillig in die Grundherrschaft begaben.</p>'
        }
      ]
    },

    geruechte: [
      { id: 'fronhof-g1', aussage: 'Der Zehnt war immer genau ein Zehntel der Ernte.', stimmt: false, erkl: 'Oft war es mehr: Abzugeben war das erste von zehn Hühnern, auch wenn ein Bauer nur acht hatte.' },
      { id: 'fronhof-g2', aussage: 'Auch der König war ein Grundherr.', stimmt: true, erkl: 'Grundherren waren Adlige, Geistliche und auch der König.' },
      { id: 'fronhof-g3', aussage: 'Hörige mussten in den Krieg ziehen.', stimmt: false, erkl: 'Hörige mussten nicht in den Krieg ziehen. Kriegsdienst leisteten die freien Bauern.' },
      { id: 'fronhof-g4', aussage: 'Leibeigene gehörten zum persönlichen Besitz des Grundherrn.', stimmt: true, erkl: 'Sie lebten und arbeiteten auf dem Herrenhof und gehörten dem Grundherrn persönlich.' },
      { id: 'fronhof-g5', aussage: 'Das althochdeutsche „fro“ in „Fronhof“ bedeutet „froh“.', stimmt: false, erkl: 'fro bedeutet „Herr“. Ein Fronhof ist ein Hof des Herrn.' },
      { id: 'fronhof-g6', aussage: 'Freie Bauern durften ihren Wohnort wechseln.', stimmt: true, erkl: 'Sie durften sich frei bewegen, mussten aber Kriegsdienst leisten.' },
      { id: 'fronhof-g7', aussage: 'Der Meier war der Grundherr eines Dorfes.', stimmt: false, erkl: 'Der Meier war der Verwalter auf einem Fronhof, nicht der Grundherr.' },
      { id: 'fronhof-g8', aussage: 'Frondienste wurden im Laufe des Mittelalters zunehmend durch Geldzahlungen ersetzt.', stimmt: true, erkl: 'Statt auf dem Herrenhof zu arbeiten, zahlten die Bauern immer öfter Geld.' },
      { id: 'fronhof-g9', aussage: 'Ein Werturteil urteilt mit den Augen der Menschen damals.', stimmt: false, erkl: 'Das ist das Sachurteil. Das Werturteil urteilt mit den Augen der Menschen heute.' },
      { id: 'fronhof-g10', aussage: 'Bei Missernten versorgte der Grundherr seine Bauern mit Lebensmitteln.', stimmt: true, erkl: 'Das gehörte zum Schutz, den er seinen Bauern bot.' }
    ],

    schatz: [
      {
        id: 'fronhof-s1',
        titel: 'Karls Gartenliste',
        text: 'Im Capitulare de villis schrieb der König sogar vor, was in den Gärten seiner Güter wachsen sollte. Kapitel 70 zählt 73 Nutzpflanzen auf, darunter viele Kräuter und Gemüse, dazu 16 Obstbäume. Bis heute legen Gärtner danach „Karlsgärten“ an. Der ganze Text ist übrigens nur in einer einzigen Handschrift erhalten. Sie liegt in der Herzog August Bibliothek in Wolfenbüttel.',
        nachweis: 'Capitulare de villis, Kap. 70 (MGH Capit. 1, Nr. 32); Handschrift Wolfenbüttel, HAB, Cod. Guelf. 254 Helmst.; Wikipedia „Capitulare de villis vel curtis imperii“ (abgerufen 21.11.2026)'
      },
      {
        id: 'fronhof-s2',
        titel: 'Ein Amt als Familienname',
        text: 'Meier, Meyer, Maier und Mayer gehören zu den häufigsten Familiennamen im deutschen Sprachraum. Die meisten gehen auf das Amt des Meiers zurück. Das Wort kommt vom lateinischen maior, „der Größere“. Schon im Capitulare de villis Karls des Großen heißen die Meier „maiores“: Sie sollten nicht mehr Land verwalten, als sie an einem Tag abgehen und beaufsichtigen konnten (Kapitel 26).',
        nachweis: 'Capitulare de villis, Kap. 26 (Transkription der Handschrift Wolfenbüttel, HAB, Cod. Guelf. 254 Helmst., capitularia.uni-koeln.de); Wikipedia „Meier (Familienname)“ (abgerufen 21.11.2026)'
      }
    ]
  });
})();
