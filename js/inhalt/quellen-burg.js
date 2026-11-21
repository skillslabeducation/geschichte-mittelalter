/* Quellen zum Bauplatz burg: Turnierbild (Manesse), Eschenbach, Hutten, Burgalltag (Darstellung), Huttens Brief. */
(function () {
  'use strict';
  var W = (window.W = window.W || {});

  Object.assign(W.quellen, {
    'burg-turnier': {
      titel: 'Turnier', autor: 'Maler der Manessischen Liederhandschrift', zeit: 'um 1300',
      art: 'bild', datei: 'bilder/burg-turnier.jpg',
      alt: 'Buchmalerei: Oben schauen fünf Frauen über eine Mauer mit Zinnen. Unten kämpfen zwei Ritter zu Pferd mit Lanzen gegeneinander. Der linke Ritter in rot-grün gewürfeltem Gewand stürzt vom Pferd, der rechte mit gelber Pferdedecke, schwarzem Schild und großer Helmzier sitzt fest im Sattel.',
      buch: true, vereinfacht: false,
      nachweis: 'Buch S. 37, M2. Manessische Liederhandschrift (Codex Manesse), Universitätsbibliothek Heidelberg, Cod. Pal. germ. 848, fol. 52r (Bild zu Herrn Walther von Klingen)',
      lizenz: 'gemeinfrei (Public domain)',
      herkunft: 'https://commons.wikimedia.org/wiki/File:Codex_Manesse_052r_Walther_von_Klingen.jpg'
    },
    'burg-eschenbach': {
      titel: 'Über die Ausbildungsregeln des Knappen Parzival', autor: 'Wolfram von Eschenbach, Parzival', zeit: 'um 1200',
      art: 'text',
      text: '<p>Du hast eine schöne Gestalt und siehst gut aus und kannst wohl einmal ein Herrscher werden. Doch auch wenn du von hoher Geburt bist, sollst du stets Erbarmen¹ mit den Not Leidenden haben. Bekämpfe ihre Not mit Großherzigkeit und Güte. Sei immer bereit, anderen zu dienen. Du musst das rechte Augenmaß behalten, ob du arm oder reich bist. Verschwendung sollst du ebenso vermeiden wie das Anhäufen von Schätzen.</p>' +
        '<p><small>¹ jemandem aus Mitleid helfen</small></p>',
      buch: true, vereinfacht: false,
      nachweis: 'Buch S. 37, M3 (Wolfram von Eschenbach, Parzival 170,21–172,16, Stuttgart (Reclam) 2001, Übers. d. Verf.)'
    },
    'burg-hutten': {
      titel: 'Ritter Ulrich von Hutten über den Alltag eines niederen Adligen', autor: 'Ulrich von Hutten (1488–1523)', zeit: '1518',
      art: 'text',
      text: '<p>Die Leute, von denen wir unseren Unterhalt beziehen, sind ganz arme Bauern, denen wir unsere Äcker, Weinberge, Wiesen und Felder verpachten. Der Ertrag daraus ist im Verhältnis zu den darauf verwandten Mühen sehr gering … Wir dienen auch einem Fürsten, von dem wir Schutz erhoffen … Gleichgültig, ob eine Burg auf einem Berg oder in der Ebene steht, so ist sie auf jeden Fall doch nicht für die Behaglichkeit, sondern zur Wehr erbaut, mit Gräben und Wall umgeben, innen von bedrückender Enge, zusammengepfercht mit Vieh- und Pferdeställen, Dunkelkammern, vollgepfropft mit schweren Büchsen¹, Pech, Schwefel und allen übrigen Waffen und Kriegsgerät. Überall stinkt das Schießpulver, und der Duft der Hunde und ihres Unrates ist auch nicht lieblicher, wie ich meine.</p>' +
        '<p><small>¹ Schusswaffe</small></p>',
      buch: true, vereinfacht: false,
      nachweis: 'Buch S. 37, M4 (zit. nach Wolfgang Schuerl, Burgen und Städte des Mittelalters, Wiesbaden (Ebeling) 1977, S. 92 f.). Auszug aus Huttens Brief an Willibald Pirckheimer vom 25. Oktober 1518'
    },
    'burg-alltag': {
      titel: 'Eine Darstellung des Alltags auf einer mittelalterlichen Burg', autor: 'Planet Wissen (Darstellung von heute, keine Quelle aus dem Mittelalter)', zeit: 'abgerufen 2023',
      art: 'text',
      text: '<p>Auf den größeren Burgen des Mittelalters wohnten oft viele Hundert Menschen. Mehrere gehörten zur Familie des Burgherrn, darunter Frauen, Kinder und unverheiratete Verwandte. Zehn oder mehr Männer gehörten der Besatzung an. Sie bewachten die Burg … Zudem gab es Küchenmeister und -personal, Knechte für die Felder, Weinberge und Wälder sowie Mägde, die der Burgherrin und deren Verwandten dienten. Auch Handwerker wie Schmiede, Steinmetze und Zimmermänner durften auf keiner Burg fehlen … Der Alltag … richtete sich nach dem Stand der Sonne. Mit dem Morgengrauen standen die Burgbewohner auf und arbeiteten bis zur Dunkelheit. Als vorrangig galt die Versorgung jener Menschen, die vom Burgherrn abhängig waren. Daher war der Tagesablauf auf der Burg ganz auf die Landwirtschaft ausgerichtet … Nur der Sonntag war frei und wurde zur Erholung und für den Kirchengang genutzt … Der große Festsaal wurde nur an besonderen Tagen beheizt. Gegen Abend zogen sich die Burgbewohner in die kleineren Räume zurück, die sogenannten Kemenaten, da diese schneller aufheizten.</p>',
      buch: true, vereinfacht: false,
      nachweis: 'Buch S. 39, M3 (zit. nach https://www.planet-wissen.de/geschichte/mittelalter/leben_auf_der_burg/index.html, Stand: 21.06.2023)'
    },
    'burg-hutten-brief': {
      titel: 'Ein Ritter über Gefahr, Lärm und Arbeit', autor: 'Ulrich von Hutten, Brief an seinen Freund Willibald Pirckheimer', zeit: '1518',
      art: 'text',
      text: '<p>Wir müssen einem Fürsten dienen, von dem wir Schutz erhoffen. Doch sobald ich von zu Hause fortgehe, muss ich fürchten, auf Leute zu stoßen, mit denen der Fürst Fehde oder Krieg führt. Sie können mich überfallen und wegschleppen. Dann kostet mich das Lösegeld leicht mein halbes Vermögen. Deshalb halten wir uns Pferde und ein großes Gefolge, und das kostet viel Geld. Wir gehen nicht einmal ein kurzes Stück ohne Waffen aus dem Haus. Kein Dorf können wir unbewaffnet besuchen, auch zur Jagd und zum Fischen gehen wir nur bewaffnet.</p>' +
        '<p>Man hört das Blöken der Schafe, das Brüllen der Rinder, das Bellen der Hunde, das Rufen der Leute, die auf dem Feld arbeiten, und das Knarren und Rattern der Wagen und Karren. Sogar das Heulen der Wölfe hört man in unserem Haus, weil es nah am Wald liegt.</p>' +
        '<p>Der ganze Tag bringt vom Morgen an Sorge und Plage. Äcker müssen gepflügt, Weinberge bestellt und Wiesen bewässert werden. Man muss säen, düngen, mähen und dreschen. Kommt ein schlechtes Erntejahr, dann herrschen schlimme Not und Armut.</p>',
      buch: false, vereinfacht: true,
      nachweis: 'Ulrich von Hutten, Brief an Willibald Pirckheimer vom 25. Oktober 1518, Auszüge (vereinfacht nach der Übersetzung in: Arno Borst (Hrsg.), Lebensformen im Mittelalter, Frankfurt am Main (Propyläen) 1973, S. 173–175; online bei German History in Documents and Images, Dokument 3707)'
    }
  });
})();
