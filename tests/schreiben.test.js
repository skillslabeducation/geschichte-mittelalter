/* Operatoren und Schreib-Training. */
const laden = require('./laden');
const { test, ok, eq, fertig } = require('./mini');

const W = laden(['js/util.js', 'js/text.js', 'js/logic.js', 'js/state.js', 'js/operatoren.js', 'js/schreiben.js']);
const O = W.operatoren;

const PFLICHT = ['nennen', 'beschreiben', 'zusammenfassen', 'erklaeren', 'erlaeutern', 'herausarbeiten', 'vergleichen',
  'charakterisieren', 'untersuchen', 'einordnen', 'beurteilen', 'bewerten', 'beurteilenBewerten', 'ueberpruefen'];

test('alle Operatoren vorhanden', () => eq(PFLICHT.filter((k) => !O[k]), []));
PFLICHT.forEach((k) => {
  test(k + ': vollständig', () => {
    const o = O[k];
    ok(o.wort && o.bedeutet, 'wort/bedeutet fehlt');
    ok(['I', 'II', 'III'].indexOf(o.bereich) >= 0, 'Bereich ' + o.bereich);
    ok(Array.isArray(o.bausteine) && o.bausteine.length >= 2, 'zu wenige Bausteine');
  });
});
test('beurteilen heißt Sachurteil', () => ok(/Sachurteil/.test(O.beurteilen.bedeutet)));
test('bewerten heißt Werturteil', () => ok(/Werturteil/.test(O.bewerten.bedeutet)));
test('beurteilen und bewerten verlangt beides', () => ok(/Sachurteil/.test(O.beurteilenBewerten.bedeutet) && /Werturteil/.test(O.beurteilenBewerten.bedeutet)));
test('Bausteine fürs Beurteilen ohne „Ich finde“', () => ok(!O.beurteilen.bausteine.some((b) => /ich finde/i.test(b))));
test('Bausteine fürs Bewerten mit eigener Meinung', () => ok(O.bewerten.bausteine.some((b) => /ich finde|für mich/i.test(b))));
test('Anforderungsbereiche: nennen I, erklären II, bewerten III', () => eq([O.nennen.bereich, O.erklaeren.bereich, O.bewerten.bereich], ['I', 'II', 'III']));

test('summe zählt halbe Punkte', () => eq(W.schreiben.summe([{ p: 1 }, { p: 0.5 }]), 1.5));
test('render ist eine Funktion', () => ok(typeof W.schreiben.render === 'function'));

fertig('schreiben');
