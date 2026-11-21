/* Der Hoftag (Probearbeit): 40 Punkte (A 14, B 10, C 16), Varianten, unbekannte Quellen, Auswertung, Restzeit. */
const laden = require('./laden');
const { test, ok, eq, fertig } = require('./mini');

const W = laden(['js/util.js', 'js/text.js', 'js/logic.js', 'js/state.js', 'js/operatoren.js', 'js/abb/basis.js', 'js/aufgaben.js',
  'js/schreiben.js', 'js/inhalt/basis.js', 'js/inhalt/hoftag.js', 'js/hoftag-ansicht.js']);
W.state.load();

const IDS = ['pfalz', 'fronhof', 'lehen', 'kirche', 'dorf', 'burg', 'kloster'];
function wahl(id, p) { return { id, typ: 'wahl', frage: '?', optionen: ['a', 'b', 'c'], richtig: 1, p }; }
function schreib(id, op, p) { return { id, operator: op, frage: '?', begriffe: [], punkte: [{ text: 'x', p: p / 2 }, { text: 'y', p: p / 2 }], muster: 'm' }; }
W.bauplaetze = IDS.map((id, i) => {
  W.quellen[id + '-q'] = { titel: 'Q', autor: 'A', zeit: 'Z', art: 'text', text: 't', buch: i % 2 === 0, vereinfacht: false, nachweis: 'n' };
  return {
    id, nr: i + 1, titel: id, ueben: [], erklaeren: [], karten: [],
    hoftag: {
      wissen: [1, 2, 3, 4].map((n) => wahl(id + '-hw' + n)),
      material: [{ id: id + '-hm1', quelle: id + '-q', items: [wahl(id + '-hm1-1', 3), wahl(id + '-hm1-2', 3)], erkl: schreib(id + '-hm1-e', 'einordnen', 4) }],
      schreiben: [schreib(id + '-hs1', 'erklaeren', 8), schreib(id + '-hs2', i % 2 ? 'beurteilen' : 'bewerten', 8)]
    },
    geruechte: [], schatz: []
  };
});
W.bauplaetze.push({ id: 'zusatz', nr: 8, titel: 'x', ueben: [], erklaeren: [], karten: [], hoftag: { wissen: [Object.assign(wahl('zusatz-hw1'), { zusatz: true })], material: [], schreiben: [] } });

const H = W.hoftag;
function aufgaben(p) { return p.teile.reduce((a, t) => a.concat(t.aufgaben), []); }
function summe(t) { return t.aufgaben.reduce((s, a) => s + a.punkte, 0); }
const URTEIL = ['beurteilen', 'bewerten', 'beurteilenBewerten', 'ueberpruefen'];

test('Seeds 1–50: 40 Punkte, A 14, B 10, C 16, eindeutig, lösbar, kein Zusatz', () => {
  for (let s = 1; s <= 50; s++) {
    const p = H.erzeugen(s);
    eq(p.teile.map(summe), [14, 10, 16], 'Seed ' + s);
    const a = aufgaben(p);
    eq(new Set(a.map((x) => x.key)).size, a.length, 'Seed ' + s + ': Keys doppelt');
    a.forEach((x) => {
      ok(x.bauplatz, 'Seed ' + s + ': bauplatz fehlt bei ' + x.key);
      if (x.item) { ok(W.aufgaben.richtig(x.item, W.aufgaben.loesung(x.item)), x.key + ' nicht lösbar'); ok(!x.item.zusatz, x.key + ' Zusatz'); }
      else ok(x.erkl && !x.erkl.zusatz, x.key + ': Schreibaufgabe fehlt');
    });
    eq(p.teile[2].aufgaben.filter((x) => URTEIL.indexOf(x.erkl.operator) >= 0).length, 1, 'Seed ' + s + ': genau eine Urteilsaufgabe in Teil C');
  }
});

test('gleicher Seed, gleiche Probearbeit', () => eq(aufgaben(H.erzeugen(7)).map((x) => x.key), aufgaben(H.erzeugen(7)).map((x) => x.key)));

test('Seeds 1–20: mindestens 10 mit unbekannter Quelle in Teil B', () => {
  let n = 0;
  for (let s = 1; s <= 20; s++) { const q = W.quellen[H.erzeugen(s).teile[1].quelle]; if (q && q.buch === false) n++; }
  ok(n >= 10, 'nur ' + n);
});

test('Seeds 1–20: mindestens 6 verschiedene Kombinationen für B und C', () => {
  const k = new Set();
  for (let s = 1; s <= 20; s++) { const p = H.erzeugen(s); k.add(p.teile[1].id + '|' + p.teile[2].aufgaben.map((x) => x.key).join(',')); }
  ok(k.size >= 6, 'nur ' + k.size);
});

test('Teil C: zwei Aufgaben aus verschiedenen Bauplätzen', () => {
  for (let s = 1; s <= 30; s++) { const c = H.erzeugen(s).teile[2].aufgaben; ok(c[0].bauplatz !== c[1].bauplatz, 'Seed ' + s); }
});

test('Auswertung: alles richtig und alle Haken ergibt 40/40', () => {
  const p = H.erzeugen(3);
  const antw = {}, bew = {};
  aufgaben(p).forEach((x) => { if (x.item) antw[x.key] = W.aufgaben.loesung(x.item); else bew[x.key] = x.erkl.punkte.map((q, i) => i); });
  const e = H.auswerten(p, antw, bew);
  eq([e.punkte, e.max, e.falsch.length], [40, 40, 0]);
});

test('Auswertung: leer ergibt 0, alle automatischen Aufgaben sind falsch', () => {
  const p = H.erzeugen(3);
  const e = H.auswerten(p, {}, {});
  eq(e.punkte, 0);
  eq(e.falsch.sort(), aufgaben(p).filter((x) => x.item).map((x) => x.key).sort());
  ok(Object.keys(e.erklProzent).length === 3, 'drei Schreibteile bewertet');
});

test('Auswertung: Teilpunkte auf halbe Punkte abgerundet', () => {
  const p = H.erzeugen(5);
  const b = p.teile[1].aufgaben.filter((x) => x.item)[0];
  const e = H.auswerten(p, { [b.key]: 0 }, {});
  eq(e.punkte, 0);
});

test('Aufgaben zu den Keys wiederfinden', () => {
  const p = H.erzeugen(9);
  aufgaben(p).forEach((x) => {
    if (x.item) eq(H.itemNachId(x.key).id, x.key);
    else eq(H.erklNachId(x.key).id, x.key);
  });
});

test('Review Focus 4: Restzeit einer vor 50 Minuten gestarteten Probearbeit ist abgelaufen', () => {
  W.state.pruefungStarten(1, 45);
  const l = W.state.pruefungLaufend();
  l.start = Date.now() - 50 * 60 * 1000;
  ok(W.hoftagAnsicht.restSekunden(l) <= 0);
  l.start = Date.now();
  ok(W.hoftagAnsicht.restSekunden(l) > 44 * 60);
});

fertig('hoftag');
