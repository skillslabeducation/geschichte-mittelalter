/* Eingaben vergleichen: Umlaute, Plural, Tippfehler, Verwechslungen, Fachbegriff-Radar. */
const laden = require('./laden');
const { test, ok, eq, fertig } = require('./mini');

const W = laden(['js/util.js', 'js/text.js']);
const T = W.text;

test('Umlaut als ae/oe/ue geschrieben', () => ok(T.passt('hoerige', ['Hörige'])));
test('Plural und Groß-/Kleinschreibung', () => ok(T.passt('Hörigen', ['Hörige'])));
test('Lehnsherrn passt zu Lehnsherr', () => ok(T.passt('Lehnsherrn', ['Lehnsherr'])));
test('kleiner Tippfehler: Vasal', () => ok(T.passt('Vasal', ['Vasall'])));
test('Artikel wird ignoriert', () => ok(T.passt('der Zehnt', ['Zehnt'])));
test('Hörige ist nicht Leibeigene', () => ok(!T.passt('Hörige', ['Leibeigene'])));
test('Sperrliste: Palas ist nicht Pfalz', () => ok(!T.passt('Palas', ['Pfalz'], ['Palas'])));
test('Sperrliste: Vasall ist nicht Lehnsherr', () => ok(!T.passt('Vasall', ['Lehnsherr'], ['Vasall'])));
test('leere Eingabe passt nie', () => ok(!T.passt('  ', ['Fronhof'])));

test('Radar findet Begriffe, Groß-/Kleinschreibung egal', () => {
  eq(T.radar('Der Grundherr gab den Hörigen Schutz.', [{ name: 'Schutz', muster: ['schutz'] }, { name: 'Zehnt', muster: ['zehnt'] }]),
    [{ name: 'Schutz', gefunden: true }, { name: 'Zehnt', gefunden: false }]);
});
test('Radar mit Umlaut im Muster', () => {
  eq(T.radar('Die Ständeordnung galt als gottgegeben.', [{ name: 'Ständeordnung', muster: ['ständeordnung'] }])[0].gefunden, true);
});

test('Zahl aus Text', () => eq(T.parseZahl('etwa 10 Tage'), 10));
test('Zahl mit Komma', () => eq(T.parseZahl('1,84 m'), 1.84));

test('Liste: Synonyme zählen je Gruppe einmal', () => {
  const r = T.liste(['Abgaben', 'Frondienste', 'Abgabe'], [['Abgaben', 'Zehnt'], ['Frondienste', 'Dienste']], 2);
  eq(r.treffer, 2);
});

fertig('text');
