/* Aufgaben-Engine: jeder Typ mit seiner Lösung lösbar, leer erkannt, Teilpunkte, Sperrliste. */
const laden = require('./laden');
const { test, ok, eq, near, fertig } = require('./mini');

const W = laden(['js/util.js', 'js/text.js', 'js/logic.js', 'js/state.js', 'js/aufgaben.js']);
W.abb = { liste: { test: { strukturen: { bergfried: { label: 'Bergfried' }, palas: { label: 'Palas' } } } } };
const A = W.aufgaben;

const BEISPIELE = {
  wahl: { typ: 'wahl', frage: '?', optionen: ['Leo III.', 'Pippin'], richtig: 0 },
  mehrfach: { typ: 'mehrfach', frage: '?', optionen: ['a', 'b', 'c'], richtig: [0, 2] },
  luecke: { typ: 'luecke', text: 'Der {Meier|Abt} verwaltete den {Fronhof|Palas}.' },
  eingabe: { typ: 'eingabe', frage: '?', akzeptiert: ['Hörige'], nicht: ['Leibeigene'] },
  liste: { typ: 'liste', frage: '?', anzahl: 2, gruppen: [['Abgaben', 'Zehnt'], ['Frondienste', 'Dienste'], ['Kriegsdienst']] },
  zuordnen: { typ: 'zuordnen', frage: '?', paare: [['Page', 'ab 7 Jahren'], ['Knappe', 'ab 14 Jahren'], ['Ritterschlag', 'mit etwa 20 Jahren']] },
  reihenfolge: { typ: 'reihenfolge', frage: '?', schritte: ['Mannschaft', 'Treueid', 'Lehnsübergabe'] },
  beschriften: { typ: 'beschriften', frage: '?', abb: 'test', strukturen: ['bergfried', 'palas'] },
  tabelle: { typ: 'tabelle', frage: '?', spalten: ['', 'frei?'], zeilen: [{ kopf: 'Hörige', zellen: [{ optionen: ['ja', 'nein'], richtig: 1 }] }, { kopf: 'freie Bauern', zellen: [{ fix: 'ja' }] }] },
  matrix: { typ: 'matrix', frage: '?', zeilenKopf: 'Stand', spaltenKopf: 'Pflicht', zeilen: ['Geistliche', 'Bauern'], spalten: ['beten', 'arbeiten'], richtig: [[true, false], [false, true]] },
  zahl: { typ: 'zahl', frage: '?', antwort: 10, einheit: 'Tage' },
  behauptung: { typ: 'behauptung', aussage: 'Karl krönte den Papst.', stimmt: false, gruende: ['Der Papst krönte Karl.', 'Karl war nie in Rom.'], richtig: 0 },
  sortieren: { typ: 'sortieren', frage: '?', kategorien: ['Leibeigene', 'Hörige', 'freie Bauern'], items: [['lebten auf dem Herrenhof', 0], ['lebten auf Hufen', 1], ['leisteten Kriegsdienst', 2]] },
  zeitleiste: { typ: 'zeitleiste', frage: '?', abschnitte: ['8. Jh.', '9. Jh.'], ereignisse: [['Karl wird König', 0, '768'], ['Kaiserkrönung in Rom', 1, '800']] }
};
Object.keys(BEISPIELE).forEach((k, i) => { BEISPIELE[k].id = 'test-u' + (i + 1); });

test('kein Kreuzungsschema mehr', () => ok(A.TYPEN.indexOf('kreuzung') < 0));
test('jeder Typ hat ein Beispiel', () => {
  const fehlt = A.TYPEN.filter((t) => !BEISPIELE[t]);
  eq(fehlt, []);
});

Object.keys(BEISPIELE).forEach((typ) => {
  const it = BEISPIELE[typ];
  test(typ + ': mit seiner Lösung richtig', () => ok(A.richtig(it, A.loesung(it)), 'Score ' + A.score(it, A.loesung(it))));
  test(typ + ': null ist leer', () => ok(A.leer(it, null)));
  test(typ + ': Lösungstext nicht leer', () => ok(String(A.loesungText(it)).length > 0));
});

test('sortieren: Teilpunkte', () => near(A.score(BEISPIELE.sortieren, [0, 1, 1]), 2 / 3));
test('sortieren: nichts gewählt ist leer', () => ok(A.leer(BEISPIELE.sortieren, [null, null, null])));
test('sortieren: halb gewählt ist nicht leer', () => ok(!A.leer(BEISPIELE.sortieren, [0, null, null])));
test('zeitleiste: Teilpunkte', () => near(A.score(BEISPIELE.zeitleiste, [0, 0]), 0.5));
test('zeitleiste: Lösungstext nennt alle Ereignisse und Jahre', () => {
  const t = A.loesungText(BEISPIELE.zeitleiste);
  ok(t.indexOf('Karl wird König') >= 0 && t.indexOf('Kaiserkrönung in Rom') >= 0 && t.indexOf('800') >= 0, t);
});
test('eingabe: Leibeigene ist nicht Hörige', () => eq(A.score(BEISPIELE.eingabe, 'Leibeigene'), 0));
test('eingabe: Hörigen ist richtig', () => eq(A.score(BEISPIELE.eingabe, 'Hörigen'), 1));
test('behauptung: richtig erkannt, falscher Grund gibt halbe Punkte', () => eq(A.score(BEISPIELE.behauptung, { stimmt: false, grund: 1 }), 0.5));
test('kaputte Antwort ergibt 0 statt Absturz', () => eq(A.score(BEISPIELE.sortieren, 'quatsch'), 0));

fertig('aufgaben');
