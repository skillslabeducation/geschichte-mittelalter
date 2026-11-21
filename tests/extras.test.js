/* Gerüchte, Schatzkammer und große Zeitleiste (aus den echten Inhalten). */
const laden = require('./laden');
const { test, ok, eq, fertig } = require('./mini');

const W = laden();
const IDS = ['pfalz', 'fronhof', 'lehen', 'kirche', 'dorf', 'burg', 'kloster'];

test('mindestens 40 Gerüchte, eindeutig', () => {
  ok(W.geruechte.length >= 40, 'nur ' + W.geruechte.length);
  eq(new Set(W.geruechte.map((g) => g.id)).size, W.geruechte.length);
});
test('jeder Bauplatz hat mindestens 5 Gerüchte', () => IDS.forEach((id) => ok(W.geruechte.filter((g) => g.bauplatz === id).length >= 5, id)));
test('40–60 % der Gerüchte stimmen', () => {
  const q = W.geruechte.filter((g) => g.stimmt).length / W.geruechte.length;
  ok(q >= 0.4 && q <= 0.6, 'Anteil ' + q.toFixed(2));
});
test('Schatzkammer: 7–10 Einträge mit Nachweis und Preis', () => {
  ok(W.schatz.length >= 7 && W.schatz.length <= 10, W.schatz.length + ' Einträge');
  W.schatz.forEach((s) => ok(s.nachweis && s.kosten > 0, s.id));
});
test('alle Schätze zusammen kosten weniger, als man verdienen kann', () => {
  const kosten = W.schatz.reduce((s, x) => s + x.kosten, 0);
  const items = W.bauplaetze.reduce((s, bp) => s + bp.ueben.length, 0);
  const schreiben = W.bauplaetze.reduce((s, bp) => s + bp.erklaeren.length, 0);
  ok(kosten <= items + 3 * schreiben + 70 + 20, 'Kosten ' + kosten);
});
test('große Zeitleiste ist mit ihrer Lösung lösbar', () => ok(W.aufgaben.richtig(W.zeitleisteGesamt, W.aufgaben.loesung(W.zeitleisteGesamt))));
test('große Zeitleiste: Abschnitte chronologisch, jeder belegt', () => {
  const z = W.zeitleisteGesamt;
  z.abschnitte.forEach((a, i) => ok(z.ereignisse.some((e) => e[1] === i), 'Abschnitt leer: ' + a));
});

test('große Zeitleiste: jedes Jahr liegt in seinem Abschnitt, „um“-Jahre nicht auf einer Grenze', () => {
  const z = W.zeitleisteGesamt;
  function bereich(a) {
    let m;
    if ((m = /^vor (\d+)$/.exec(a))) return [0, +m[1] - 1];
    if ((m = /^nach (\d+)$/.exec(a))) return [+m[1] + 1, 3000];
    if ((m = /^(\d+)–(\d+)$/.exec(a))) return [+m[1], +m[2]];
    return null;
  }
  z.ereignisse.forEach((e) => {
    const m = /(um )?(\d{3,4})/.exec(e[2]);
    if (!m) return;
    const j = +m[2], b = bereich(z.abschnitte[e[1]]);
    ok(b && j >= b[0] && j <= b[1], e[2] + ' liegt nicht in ' + z.abschnitte[e[1]]);
    if (m[1]) ok(j - b[0] >= 20 && b[1] - j >= 20, e[2] + ' liegt zu nah an der Grenze von ' + z.abschnitte[e[1]]);
  });
});

fertig('extras');
