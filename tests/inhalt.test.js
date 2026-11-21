/* Inhalte aller Bauplätze: vollständig, eindeutig, jede Aufgabe mit ihrer Lösung lösbar,
   Abbildungen, Quellen und Lexikon vorhanden, Hoftag-Material und Gerüchte im richtigen Format.
   Nur einen Bauplatz prüfen: NUR=pfalz node tests/inhalt.test.js */
const fs = require('fs');
const path = require('path');
const laden = require('./laden');
const { test, ok, eq, fertig } = require('./mini');

const W = laden();
const A = W.aufgaben;
const NUR = process.env.NUR || null;
const IDS = ['pfalz', 'fronhof', 'lehen', 'kirche', 'dorf', 'burg', 'kloster'];
const AUTO = ['wahl', 'mehrfach', 'luecke', 'eingabe', 'liste', 'zuordnen', 'reihenfolge', 'beschriften', 'tabelle', 'matrix', 'zahl', 'behauptung', 'sortieren', 'zeitleiste'];
const ERKLAER_OPS = ['beschreiben', 'erklaeren', 'erlaeutern', 'herausarbeiten', 'charakterisieren', 'vergleichen', 'untersuchen', 'einordnen', 'zusammenfassen'];
const URTEIL_OPS = ['beurteilen', 'bewerten', 'beurteilenBewerten', 'ueberpruefen'];

const alle = (W.bauplaetze || []).slice().sort((a, b) => a.nr - b.nr);
const bps = NUR ? alle.filter((b) => b.id === NUR) : alle;

if (!NUR) {
  test('genau sieben Bauplätze in der richtigen Reihenfolge', () => eq(alle.map((b) => b.id), IDS));
  test('Nummern 1 bis 7', () => eq(alle.map((b) => b.nr), [1, 2, 3, 4, 5, 6, 7]));
} else {
  test('Bauplatz ' + NUR + ' vorhanden', () => eq(bps.length, 1));
}

function punkteSumme(p) { return (p || []).reduce((s, x) => s + x.p, 0); }
function itemP(it) { return it.p == null ? 1 : it.p; }
function dfns(html) { const out = []; String(html || '').replace(/<dfn>([\s\S]*?)<\/dfn>/g, (m, t) => { out.push(t.replace(/<[^>]+>/g, '').trim()); return m; }); return out; }

function pruefeItem(it, wo) {
  ok(it.id, wo + ': id fehlt');
  ok(A.TYPEN.indexOf(it.typ) >= 0, wo + ' ' + it.id + ': unbekannter Typ ' + it.typ);
  ok(A.richtig(it, A.loesung(it)), it.id + ': mit eigener Lösung nicht richtig');
  ok(String(A.loesungText(it)).length > 0, it.id + ': Lösungstext leer');
  if (it.typ !== 'luecke' && it.typ !== 'behauptung') ok(it.frage, it.id + ': frage fehlt');
  if (it.typ === 'wahl' || it.typ === 'mehrfach') {
    ok(new Set(it.optionen).size === it.optionen.length, it.id + ': doppelte Optionen');
    ok(it.optionen.length >= 3, it.id + ': weniger als 3 Optionen');
  }
  if (it.typ === 'luecke') A.parseLuecke(it.text).filter((s) => s.optionen).forEach((s) => ok(s.optionen.length >= 2, it.id + ': Lücke mit nur einer Option'));
  if (it.typ === 'behauptung') ok(it.gruende.length >= 2 && it.richtig < it.gruende.length, it.id + ': Gründe');
  if (it.abb) ok(W.abb.liste[it.abb], it.id + ': Abbildung ' + it.abb + ' fehlt');
  if (it.typ === 'beschriften') it.strukturen.forEach((s) => ok(W.abb.liste[it.abb] && W.abb.liste[it.abb].strukturen[s], it.id + ': Struktur ' + s + ' fehlt in ' + it.abb));
  if (it.quelle) ok(W.quellen[it.quelle], it.id + ': Quelle ' + it.quelle + ' fehlt');
}

function pruefeSchreib(e, wo) {
  ok(e.id, wo + ': id fehlt');
  ok(W.operatoren[e.operator], e.id + ': Operator ' + e.operator + ' unbekannt');
  ok(e.frage && e.muster, e.id + ': frage oder muster fehlt');
  ok(e.muster.replace(/<[^>]+>/g, '').length >= 200, e.id + ': Musterantwort kürzer als 200 Zeichen');
  ok(e.punkte && e.punkte.length >= 2, e.id + ': weniger als 2 Erwartungspunkte');
  e.punkte.forEach((p) => ok(p.text && p.p > 0 && (p.art == null || p.art === 'sach' || p.art === 'wert'), e.id + ': Punkt unvollständig'));
  ok(e.begriffe && e.begriffe.length >= 2, e.id + ': weniger als 2 Begriffe für den Radar');
  e.begriffe.forEach((b) => ok(b.name && b.muster && b.muster.length, e.id + ': Begriff unvollständig'));
  if (e.operator === 'beurteilenBewerten') ok(e.punkte.some((p) => p.art === 'sach') && e.punkte.some((p) => p.art === 'wert'), e.id + ': Sach- und Werturteil-Punkte fehlen');
  if (e.quelle) ok(W.quellen[e.quelle], e.id + ': Quelle ' + e.quelle + ' fehlt');
  if (e.abb) ok(W.abb.liste[e.abb], e.id + ': Abbildung ' + e.abb + ' fehlt');
}

const gesehen = new Set();
function eindeutig(id) { ok(!gesehen.has(id), 'ID doppelt: ' + id); gesehen.add(id); }

bps.forEach((bp) => {
  const P = bp.id + ': ';
  test(P + 'Kopfdaten', () => {
    ['titel', 'thema', 'zeit', 'buch', 'chronist', 'leitfrage'].forEach((k) => ok(bp[k], P + k + ' fehlt'));
    ok(bp.checkliste >= 1 && bp.checkliste <= 4, P + 'checkliste 1–4');
  });
  test(P + 'Karten 4–7', () => {
    ok(bp.karten.length >= 4 && bp.karten.length <= 7, P + bp.karten.length + ' Karten');
    bp.karten.forEach((k, i) => {
      ok(k.titel && k.text && k.merk, P + 'Karte ' + (i + 1) + ' unvollständig');
      if (k.abb) ok(W.abb.liste[k.abb], P + 'Karte ' + (i + 1) + ': Abbildung ' + k.abb + ' fehlt');
      if (k.quelle) ok(W.quellen[k.quelle], P + 'Karte ' + (i + 1) + ': Quelle ' + k.quelle + ' fehlt');
    });
  });
  test(P + 'Lexikon für jedes <dfn>', () => {
    const fehlt = [];
    bp.karten.forEach((k) => dfns(k.text).forEach((d) => { if (!W.lexikonEintrag(d)) fehlt.push(d); }));
    eq(fehlt, []);
  });
  test(P + 'Übungen 12–24, gemischt, lösbar', () => {
    ok(bp.ueben.length >= 12 && bp.ueben.length <= 24, P + bp.ueben.length + ' Übungen');
    bp.ueben.forEach((it, i) => { ok(it.id === bp.id + '-u' + (i + 1), P + 'ID ' + it.id + ' statt ' + bp.id + '-u' + (i + 1)); eindeutig(it.id); pruefeItem(it, P); });
    const typen = new Set(bp.ueben.map((u) => u.typ));
    ok(typen.size >= 5, P + 'nur ' + typen.size + ' Aufgabentypen');
    ok(bp.ueben.some((u) => u.quelle), P + 'keine Aufgabe mit Quelle');
    ok(bp.ueben.some((u) => u.typ === 'zeitleiste' || u.typ === 'reihenfolge'), P + 'keine Zeitleiste/Reihenfolge');
    ok(bp.ueben.some((u) => u.typ === 'behauptung'), P + 'keine Behauptung');
    ok(bp.ueben.some((u) => u.typ === 'sortieren' || u.typ === 'zuordnen'), P + 'kein Sortieren/Zuordnen');
  });
  test(P + 'Schreibaufgaben 2–5', () => {
    ok(bp.erklaeren.length >= 2 && bp.erklaeren.length <= 5, P + bp.erklaeren.length + ' Schreibaufgaben');
    bp.erklaeren.forEach((e, i) => { ok(e.id === bp.id + '-e' + (i + 1), P + 'ID ' + e.id); eindeutig(e.id); pruefeSchreib(e, P); });
  });
  test(P + 'Hoftag: Wissen', () => {
    const w = bp.hoftag.wissen;
    ok(w.length >= 4, P + 'weniger als 4 Wissensaufgaben');
    w.forEach((it) => {
      ok(it.id.indexOf(bp.id + '-hw') === 0, P + 'ID ' + it.id); eindeutig(it.id); pruefeItem(it, P);
      ok(AUTO.indexOf(it.typ) >= 0 && !it.zusatz, it.id + ': kein Zusatz im Hoftag');
      eq(itemP(it), 1, it.id + ': Wissensaufgaben zählen 1 Punkt');
    });
  });
  test(P + 'Hoftag: Material', () => {
    const m = bp.hoftag.material;
    ok(m.length >= 1, P + 'kein Material');
    m.forEach((s) => {
      ok(s.id && s.id.indexOf(bp.id + '-hm') === 0, P + 'Material-ID ' + s.id); eindeutig(s.id);
      ok(s.quelle ? W.quellen[s.quelle] : W.abb.liste[s.abb], s.id + ': Quelle/Abbildung fehlt');
      eq(s.items.reduce((x, it) => x + itemP(it), 0), 6, s.id + ': automatische Teile ergeben 6 Punkte');
      s.items.forEach((it) => { eindeutig(it.id); pruefeItem(it, s.id); ok(!it.zusatz, it.id + ': Zusatz'); });
      eindeutig(s.erkl.id); pruefeSchreib(s.erkl, s.id);
      eq(punkteSumme(s.erkl.punkte), 4, s.id + ': Schreibteil 4 Punkte');
    });
  });
  test(P + 'Hoftag: Schreiben', () => {
    const s = bp.hoftag.schreiben;
    eq(s.length, 2, P + 'genau 2 Schreibaufgaben');
    s.forEach((e) => { ok(e.id.indexOf(bp.id + '-hs') === 0, P + 'ID ' + e.id); eindeutig(e.id); pruefeSchreib(e, P); eq(punkteSumme(e.punkte), 8, e.id + ': 8 Punkte'); ok(!e.zusatz, e.id + ': Zusatz'); });
    ok(s.some((e) => ERKLAER_OPS.indexOf(e.operator) >= 0), P + 'keine Erklär-Aufgabe');
    ok(s.some((e) => URTEIL_OPS.indexOf(e.operator) >= 0), P + 'keine Urteils-Aufgabe');
  });
  test(P + 'Gerüchte', () => {
    const g = bp.geruechte;
    ok(g.length >= 6, P + 'weniger als 6 Gerüchte');
    g.forEach((x) => { ok(x.id.indexOf(bp.id + '-g') === 0, P + 'ID ' + x.id); eindeutig(x.id); ok(typeof x.stimmt === 'boolean' && x.aussage && x.erkl, x.id + ': unvollständig'); });
    ok(g.filter((x) => x.stimmt).length >= 2 && g.filter((x) => !x.stimmt).length >= 2, P + 'Gerüchte zu einseitig');
  });
  test(P + 'Schatz', () => {
    ok(bp.schatz.length >= 1 && bp.schatz.length <= 2, P + '1–2 Schatz-Einträge');
    bp.schatz.forEach((s) => { ok(s.id.indexOf(bp.id + '-s') === 0, P + 'ID ' + s.id); eindeutig(s.id); ok(s.titel && s.text && s.nachweis, s.id + ': unvollständig'); });
  });
});

/* ---------- Abbildungen ---------- */
test('jede Abbildung lässt sich nummeriert und beschriftet erzeugen', () => {
  Object.keys(W.abb.liste).forEach((n) => {
    if (NUR && !bps.some((bp) => JSON.stringify(bp).indexOf('"' + n + '"') >= 0)) return;
    const ids = Object.keys(W.abb.liste[n].strukturen);
    const nummern = {}; ids.forEach((id, i) => { nummern[id] = i + 1; });
    const a = W.abb.svgText(n, { nummern });
    const b = W.abb.svgText(n, { beschriftet: true });
    ok(a.indexOf('<svg') === 0 && b.indexOf('</svg>') > 0, n + ': kein SVG');
    ids.forEach((id) => ok(b.indexOf(W.esc(W.abb.liste[n].strukturen[id].label).split('|')[0]) >= 0 || W.abb.liste[n].strukturen[id].kurz, n + ': Label ' + id + ' fehlt'));
  });
});

/* ---------- Quellen ---------- */
const ROOT = laden.ROOT;
test('Quellen vollständig, Bilder vorhanden und klein', () => {
  Object.keys(W.quellen).forEach((id) => {
    const q = W.quellen[id];
    ok(q.titel && q.zeit && q.nachweis && (q.autor !== undefined), id + ': titel/zeit/nachweis/autor fehlt');
    ok(typeof q.buch === 'boolean' && typeof q.vereinfacht === 'boolean', id + ': buch/vereinfacht fehlt');
    if (q.art === 'bild') {
      const p = path.join(ROOT, q.datei || '');
      ok(q.datei && fs.existsSync(p), id + ': Bilddatei fehlt ' + q.datei);
      if (fs.existsSync(p)) ok(fs.statSync(p).size <= 250 * 1024, id + ': Bild größer als 250 KB');
      ok(q.lizenz && q.herkunft, id + ': Lizenz oder Herkunft fehlt');
    } else ok(q.text && q.text.length > 40, id + ': Text fehlt');
  });
});

if (!NUR) {
  test('mindestens 4 Quellen, die nicht im Buch stehen', () => ok(Object.keys(W.quellen).filter((k) => W.quellen[k].buch === false).length >= 4));
  test('mindestens 3 Hoftag-Materialien mit Quellen, die nicht im Buch stehen', () => {
    const n = alle.reduce((s, bp) => s + bp.hoftag.material.filter((m) => m.quelle && W.quellen[m.quelle] && W.quellen[m.quelle].buch === false).length, 0);
    ok(n >= 3, 'nur ' + n);
  });
  test('mindestens 3 Bildquellen', () => ok(Object.keys(W.quellen).filter((k) => W.quellen[k].art === 'bild').length >= 3));
  test('insgesamt mindestens 4 Aufgaben zum Operator', () => {
    const n = alle.reduce((s, bp) => s + bp.ueben.filter((u) => u.operatorTraining).length, 0);
    ok(n >= 4, 'nur ' + n + ' (Feld operatorTraining: true setzen)');
  });
}

fertig('inhalt' + (NUR ? ' ' + NUR : ''));
