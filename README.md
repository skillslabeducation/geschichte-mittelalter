# Stein auf Stein – Lern- und Übungsseite Geschichte (Klasse 7)

Interaktive Lernseite zur Vorbereitung auf eine Geschichtsarbeit zum Thema „Europa im Mittelalter“, optimiert für Handy und Tablet.

**Online:** https://skillslabeducation.github.io/geschichte-mittelalter/

## Die Geschichte

Vor dir liegt ein leeres Tal im Mittelalter. Sieben Bauplätze sind abgesteckt. Du bist die Baumeisterin: Jedes Gebäude wächst vom Grundriss über das Gerüst bis zum fertigen Haus, aber erst ganz fertig wird es, wenn du sein Thema kannst. Am Ende kommt der König zum Hoftag und prüft dich: eine Probearbeit mit 40 Punkten. Ab 80 % gibt es die Urkunde mit Siegel.

## Inhalt

| Bauplatz | Thema | Buch |
|----------|-------|------|
| 1 Königspfalz | Karl der Große, Kaiserkrönung und Kaisertum, Reisekönigtum, Pfalzen | S. 18–21 |
| 2 Fronhof | Grundherrschaft: Leibeigene, Hörige, freie Bauern, Abgaben und Dienste, Sach- und Werturteil | S. 22/23 |
| 3 Straßen und Banner | Lehnswesen: Lehnsherr, Vasall, Lehen, Kronvasallen und Untervasallen | S. 24/25 |
| 4 Dorfkirche | Ständegesellschaft und ihre religiöse Begründung | S. 32/33 |
| 5 Dorf und Felder | Leben der Bauern, neue Techniken, Dreifelderwirtschaft | S. 34/35 |
| 6 Burg | Ritter und Adlige, Ausbildung, Burg als Wohnsitz und Verteidigungsanlage | S. 36–39 |
| 7 Kloster | Mönche und Nonnen, Benediktsregel, „ora et labora“, Aufgaben der Klöster | S. 40/41 |

Jeder Bauplatz hat drei Bereiche:
- **Verstehen:** Karten mit Merksätzen, Abbildungen, Quellen und antippbaren Fachbegriffen
- **Üben:** Auswahl, Lückentext, Zuordnen, Sortieren, Zeitleiste, Abbildungen beschriften, Quellen befragen, Behauptungen prüfen und mehr
- **Schreiben:** Schreibaufgaben mit Arbeitsauftrag (Operator), Fachbegriff-Radar, Erwartungshorizont zum Abhaken und Musterantwort

Dazu kommen:
- **Bauschäden:** Falsch gelöste Aufgaben werden zu Rissen am Gebäude. Zweimal hintereinander richtig repariert sie.
- **Der Hoftag:** Probearbeit mit Teil A Wissen, Teil B Material und Teil C Schreiben. Mit Timer, Selbstbewertung und Note als Richtwert. Eine laufende Probearbeit übersteht das Neuladen.
- **Markt-Gerüchte, Zeitleiste, Schatzkammer, Wachstafel und Lernplan:** 60 Sekunden „stimmt oder erfunden?“, die große Zeitleiste, Geschichten zum Freischalten mit Pfennigen, ein Spickzettel zum Drucken und ein Lernplan bis zum Datum der Arbeit.

Inhalte, die nicht im Schulbuch stehen, sind als **„Zusatz“** markiert. Quellen, die nicht im Buch stehen, tragen den Hinweis „nicht im Buch“ und, wenn sie für Klasse 7 vereinfacht sind, „vereinfacht“.

## Technik

- Reines HTML, CSS und JavaScript, ohne Build-Schritt und ohne externe Dienste
- Landschaft, Gebäude und Schaubilder sind selbst gezeichnetes SVG
- Fortschritt nur lokal im Browser (localStorage), kein Konto, kein Tracking
- Auf dem iPhone oder iPad in Safari „Teilen → Zum Home-Bildschirm“ wählen, dann startet die Seite wie eine App

## Tests

```
node tests/text.test.js        # Eingaben, Umlaute, Tippfehler, Fachbegriff-Radar
node tests/logic.test.js       # Bauplatz-Status, Bauschäden, Pfennige, Lernplan, Speicher
node tests/aufgaben.test.js    # alle Aufgabentypen
node tests/schreiben.test.js   # Operatoren, Sach- und Werturteil
node tests/inhalt.test.js      # alle Bauplätze: vollständig, jede Aufgabe mit ihrer Lösung lösbar
node tests/hoftag.test.js      # Probearbeit: 40 Punkte, Varianten, Auswertung
node tests/extras.test.js      # Gerüchte, Schatzkammer, Zeitleiste
node tests/privat.test.js      # keine privaten Namen im Projekt
```

## Bildnachweise und Schriften

Gemeinfreie Bildquellen (verkleinert):

- **Bauern bei der Fronarbeit**, unbekannter englischer Buchmaler (Psalter der Königin Maria), um 1310–1320. gemeinfrei (Public domain), [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Reeve_and_Serfs.jpg), Datei `bilder/fronhof-fronarbeit.jpg`
- **Mannschaft und Eid auf Reliquien**, unbekannter Buchmaler, Heidelberger Bilderhandschrift des Sachsenspiegels, um 1300. gemeinfrei (Public domain), [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Heerschildordnung.jpg), Datei `bilder/lehen-sachsenspiegel.jpg`
- **Christus und die drei Stände**, Holzschnitt aus Johannes Lichtenbergers Buch „Prognosticatio“ (Erstausgabe 1488; dieselben Holzschnitte auch in der Mainzer Ausgabe von Jacob Meydenbach, 1492), 1488. gemeinfrei (Public domain), [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:St%C3%A4ndeordnung.jpg), Datei `bilder/kirche-lichtenberger.jpg`
- **Monatsbild März: Pflügen, Säen und Arbeit im Weinberg**, Brüder von Limburg, Buchmaler des Herzogs Johann von Berry; die Figuren wohl von einem späteren Maler ergänzt, um 1412–1416, vollendet um 1440. gemeinfrei (Public domain), [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Les_Tr%C3%A8s_Riches_Heures_du_duc_de_Berry_mars.jpg), Datei `bilder/dorf-maerz.jpg`
- **Monatsbild Juni: Heuernte**, Brüder von Limburg, Buchmaler des Herzogs Johann von Berry, um 1412–1416. gemeinfrei (Public domain), [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Les_Tr%C3%A8s_Riches_Heures_du_duc_de_Berry_juin.jpg), Datei `bilder/dorf-juni.jpg`
- **Turnier**, Maler der Manessischen Liederhandschrift, um 1300. gemeinfrei (Public domain), [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Codex_Manesse_052r_Walther_von_Klingen.jpg), Datei `bilder/burg-turnier.jpg`
- **Der Klosterplan von St. Gallen (Original)**, unbekannter Mönch (wohl im Kloster Reichenau), um 820. gemeinfrei (Public domain), [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Codex_Sangallensis_1092_recto.jpg), Datei `bilder/kloster-plan.jpg`

Alle anderen Abbildungen sind selbst gezeichnet. Es werden keine Bilder aus dem Schulbuch verwendet.

Schriften: Alegreya und Alegreya Sans von Juan Pablo del Peral (Huerta Tipográfica), SIL Open Font License 1.1 (siehe `fonts/`).
