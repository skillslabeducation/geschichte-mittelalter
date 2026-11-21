/* Spiellogik und Speicher: Bauplatz-Status, Bauschäden, Pfennige, Lernplan, Note, kaputte Stände. */
const laden = require('./laden');
const { test, ok, eq, fertig } = require('./mini');

const DATEIEN = ['js/util.js', 'js/text.js', 'js/logic.js', 'js/state.js'];
function neu() { const W = laden(DATEIEN); W.state.load(); return W; }

const BP = {
  id: 'pfalz', nr: 1,
  karten: [{ titel: 'a' }, { titel: 'b' }],
  ueben: [1, 2, 3, 4, 5].map((n) => ({ id: 'pfalz-u' + n, typ: 'wahl' })).concat([{ id: 'pfalz-u6', typ: 'wahl', zusatz: true }]),
  erklaeren: [{ id: 'pfalz-e1' }, { id: 'pfalz-e2' }]
};

/* ---------- Bauplatz-Status ---------- */

test('leerer Stand: Grundriss, nichts fertig', () => {
  const W = neu();
  const s = W.logic.bauplatzStatus(BP, W.state.data);
  eq([s.stufe, s.p, s.fertig], [0, 0, false]);
});

test('eine Karte gesehen: Gerüst', () => {
  const W = neu();
  W.state.karteGesehen('pfalz', 0);
  eq(W.logic.bauplatzStatus(BP, W.state.data).stufe, 1);
});

test('alles erfüllt: Richtfest', () => {
  const W = neu();
  W.state.karteGesehen('pfalz', 1);
  ['pfalz-u1', 'pfalz-u2', 'pfalz-u3', 'pfalz-u4'].forEach((id) => W.state.itemErgebnis(id, true));
  W.state.erklSpeichern('pfalz-e1', { prozent: 0.6 });
  W.state.erklSpeichern('pfalz-e2', { prozent: 0.6 });
  const s = W.logic.bauplatzStatus(BP, W.state.data);
  eq([s.fertig, s.p, s.stufe, s.fehlt.length], [true, 1, 3, 0]);
});

test('nur 3 von 5 Pflichtübungen: nicht fertig, höchstens 95 %', () => {
  const W = neu();
  W.state.karteGesehen('pfalz', 1);
  ['pfalz-u1', 'pfalz-u2', 'pfalz-u3', 'pfalz-u6'].forEach((id) => W.state.itemErgebnis(id, true));
  W.state.erklSpeichern('pfalz-e1', { prozent: 1 });
  W.state.erklSpeichern('pfalz-e2', { prozent: 1 });
  const s = W.logic.bauplatzStatus(BP, W.state.data);
  ok(!s.fertig, 'darf nicht fertig sein');
  ok(s.p <= 0.95, 'p zu hoch: ' + s.p);
  ok(s.fehlt.some((f) => /Übung/.test(f)), 'fehlt nennt die Übungen: ' + s.fehlt.join(' | '));
});

test('Schreibaufgabe unter 60 % verhindert das Richtfest', () => {
  const W = neu();
  W.state.karteGesehen('pfalz', 1);
  ['pfalz-u1', 'pfalz-u2', 'pfalz-u3', 'pfalz-u4', 'pfalz-u5'].forEach((id) => W.state.itemErgebnis(id, true));
  W.state.erklSpeichern('pfalz-e1', { prozent: 1 });
  W.state.erklSpeichern('pfalz-e2', { prozent: 0.5 });
  const s = W.logic.bauplatzStatus(BP, W.state.data);
  ok(!s.fertig && !s.erklOk, 'erklOk muss false sein');
});

/* ---------- Bauschäden ---------- */

test('Fehler wird Riss, zweimal richtig repariert ihn', () => {
  const W = neu();
  W.state.itemErgebnis('pfalz-u1', false);
  eq(W.state.schadenListe(), ['pfalz-u1']);
  eq(W.logic.bauplatzStatus(BP, W.state.data).risse, 1);
  eq(W.state.itemErgebnis('pfalz-u1', true).behoben, false);
  eq(W.state.itemErgebnis('pfalz-u1', true).behoben, true);
  eq(W.state.schadenListe(), []);
  eq(W.state.data.repariert, 1);
  eq(W.logic.bauplatzStatus(BP, W.state.data).risse, 0);
});

test('richtig ohne Schaden zählt nicht als Reparatur', () => {
  const W = neu();
  W.state.itemErgebnis('pfalz-u2', true);
  eq(W.state.data.repariert, 0);
});

test('Schreibaufgabe unter 60 % wird Riss, ab 80 % repariert', () => {
  const W = neu();
  W.state.erklSpeichern('pfalz-e1', { prozent: 0.4, text: 'x' });
  eq(W.state.schadenListe(), ['e:pfalz-e1']);
  eq(W.logic.bauplatzStatus(BP, W.state.data).risse, 1);
  W.state.erklSpeichern('pfalz-e1', { prozent: 0.7 });
  eq(W.state.schadenListe(), ['e:pfalz-e1'], '70 % reicht noch nicht');
  W.state.erklSpeichern('pfalz-e1', { prozent: 0.8 });
  eq(W.state.schadenListe(), []);
  eq(W.state.data.repariert, 1);
});

test('Riss eines anderen Bauplatzes zählt nicht', () => {
  const W = neu();
  W.state.itemErgebnis('burg-u1', false);
  eq(W.logic.bauplatzStatus(BP, W.state.data).risse, 0);
});

/* ---------- Pfennige ---------- */

test('Pfennige: 1 je Aufgabe, 3 je Schreibaufgabe ab 60 %', () => {
  const W = neu();
  ['pfalz-u1', 'pfalz-u2', 'pfalz-u3'].forEach((id) => W.state.itemErgebnis(id, true));
  W.state.erklSpeichern('pfalz-e1', { prozent: 0.6 });
  W.state.erklSpeichern('pfalz-e2', { prozent: 0.5 });
  eq(W.logic.pfennige(W.state.data, [BP]).verdient, 6);
});

test('Pfennige: Richtfest +10, Reparatur +2, Urkunde +20', () => {
  const W = neu();
  W.state.karteGesehen('pfalz', 1);
  W.state.itemErgebnis('pfalz-u1', false);
  W.state.itemErgebnis('pfalz-u1', true);
  W.state.itemErgebnis('pfalz-u1', true);
  ['pfalz-u2', 'pfalz-u3', 'pfalz-u4'].forEach((id) => W.state.itemErgebnis(id, true));
  W.state.erklSpeichern('pfalz-e1', { prozent: 1 });
  W.state.erklSpeichern('pfalz-e2', { prozent: 1 });
  // 4 Aufgaben + 2·3 Schreiben + 10 Richtfest + 2 Reparatur = 22
  eq(W.logic.pfennige(W.state.data, [BP]).verdient, 22);
  W.state.pruefungStarten(1, 45);
  W.state.pruefungBeenden({ punkte: 36, max: 40 });
  eq(W.logic.pfennige(W.state.data, [BP]).verdient, 42);
});

test('Schatz öffnen nur mit genug Pfennigen', () => {
  const W = neu();
  W.schatz = [{ id: 'x', kosten: 10 }, { id: 'y', kosten: 4 }];
  ['pfalz-u1', 'pfalz-u2', 'pfalz-u3'].forEach((id) => W.state.itemErgebnis(id, true));
  W.state.erklSpeichern('pfalz-e1', { prozent: 0.6 });
  eq(W.state.schatzOeffnen('x', [BP]), false);
  eq(W.state.schatzOeffnen('y', [BP]), true);
  eq(W.logic.pfennige(W.state.data, [BP]), { verdient: 6, ausgegeben: 4, stand: 2 });
  eq(W.state.schatzOeffnen('y', [BP]), true, 'schon offen: kein zweites Mal bezahlen');
  eq(W.logic.pfennige(W.state.data, [BP]).stand, 2);
});

/* ---------- Hoftag ---------- */

test('Hoftag ab 80 % gibt die Urkunde, Bestwert bleibt', () => {
  const W = neu();
  W.state.pruefungStarten(1, 45);
  W.state.pruefungBeenden({ punkte: 30, max: 40 });
  eq(W.state.data.pruefung.urkunde, null);
  W.state.pruefungStarten(2, 45);
  W.state.pruefungBeenden({ punkte: 32, max: 40 });
  ok(/^\d{4}-\d{2}-\d{2}$/.test(W.state.data.pruefung.urkunde), 'Urkunde-Datum fehlt');
  eq(W.state.data.pruefung.best, 0.8);
  eq(W.state.pruefungLaufend(), null);
});

/* ---------- Review Focus 1: kaputter oder fremder Stand ---------- */

test('falsche Typen im Speicher werden ersetzt', () => {
  const W = laden(DATEIEN);
  W.store.set('stein-auf-stein-v1', { v: 1, items: 'kaputt', pruefung: 5, schaeden: [], name: 'Kim', datum: 7 });
  const d = W.state.load();
  eq(d.items, {});
  eq(d.pruefung.laeufe, []);
  eq(d.schaeden, {});
  eq(d.name, 'Kim');
  eq(d.datum, '');
});

test('kein JSON im Speicher: frischer Stand', () => {
  const W = laden(DATEIEN);
  require('./laden').kontext.localStorage.setItem('stein-auf-stein-v1', 'nicht json');
  const d = W.state.load();
  eq(d.items, {});
});

test('Code einer anderen Seite wird abgelehnt, eigener Code klappt', () => {
  const W = neu();
  eq(W.state.importCode('LICHTER-AN:{"v":1}'), false);
  eq(W.state.importCode('STEIN-AUF-STEIN:{kaputt'), false);
  W.state.setName('Kim');
  const code = W.state.exportCode();
  ok(code.indexOf('STEIN-AUF-STEIN:') === 0);
  W.state.reset();
  eq(W.state.importCode(code), true);
  eq(W.state.data.name, 'Kim');
});

/* ---------- Review Focus 2: Datum und Lernplan ---------- */

const ALLE = ['pfalz', 'fronhof', 'lehen', 'kirche', 'dorf', 'burg', 'kloster', 'hoftag'];

test('Arbeit heute: kein Plan', () => { const W = neu(); eq(W.logic.lernplan('2026-11-21', '2026-11-21', ['pfalz']), []); });
test('Arbeit vorbei: kein Plan', () => { const W = neu(); eq(W.logic.lernplan('2026-11-21', '2026-11-20', ['pfalz']), []); });
test('kein Datum: kein Plan', () => { const W = neu(); eq(W.logic.lernplan('2026-11-21', '', ['pfalz']), []); });

test('drei Tage: alles verteilt, letzter Tag Wiederholung', () => {
  const W = neu();
  const p = W.logic.lernplan('2026-11-21', '2026-11-24', ALLE);
  eq(p.length, 3);
  eq(p[0].datum, '2026-11-21');
  eq(p[2].aufgaben, ['schaeden', 'geruechte', 'wachstafel']);
  eq(p[0].aufgaben.concat(p[1].aufgaben), ALLE);
});

test('ein Tag: alles Wichtige an einem Tag', () => {
  const W = neu();
  const p = W.logic.lernplan('2026-11-21', '2026-11-22', ALLE);
  eq(p.length, 1);
  ok(p[0].aufgaben.indexOf('schaeden') >= 0 && p[0].aufgaben.indexOf('hoftag') >= 0);
});

test('Tage bis in einem Jahr', () => { const W = neu(); eq(W.logic.tageBis('2026-11-21', '2027-11-21'), 365); });
test('Tage bis über die Zeitumstellung', () => { const W = neu(); eq(W.logic.tageBis('2027-03-27', '2027-03-29'), 2); });

test('planAufgaben: offene Bauplätze, dann Hoftag', () => {
  const W = neu();
  eq(W.logic.planAufgaben(['pfalz', 'fronhof'], { pfalz: true }, null), ['fronhof', 'hoftag']);
  eq(W.logic.planAufgaben(['pfalz'], { pfalz: true }, '2026-11-20'), []);
});

/* ---------- Note ---------- */

test('Note nach Schlüssel', () => {
  const W = neu();
  eq([87.5, 87.4, 72.5, 57.5, 45, 44.9, 20, 19.9].map(W.logic.note), [1, 2, 2, 3, 4, 5, 5, 6]);
});

test('Datum setzen nimmt nur gültige ISO-Daten', () => {
  const W = neu();
  W.state.setDatum('2026-12-01');
  eq(W.state.data.datum, '2026-12-01');
  W.state.setDatum('morgen');
  eq(W.state.data.datum, '');
});

fertig('logic');
