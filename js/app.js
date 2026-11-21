/* Start, Router (Hash), Kopfzeile mit Pfennigen und Namensschild, Navigation. */
(function () {
  'use strict';
  var W = (window.W = window.W || {});
  var h = function () { return W.h.apply(null, arguments); };

  var NAV = [['#/', 'Tal', 'tal'], ['#/schaeden', 'Schäden', 'schaeden'], ['#/hoftag', 'Hoftag', 'hoftag'], ['#/plan', 'Plan', 'plan']];

  function turm() {
    return W.frag('<svg class="marke__bild" viewBox="0 0 32 32" aria-hidden="true"><rect x="9" y="9" width="14" height="20" fill="#b9ad97" stroke="#2b2118" stroke-width="1.5"/>' +
      '<path d="M8 9h3v-3h3v3h4v-3h3v3h3v3H8z" fill="#b9ad97" stroke="#2b2118" stroke-width="1.5"/><path d="M14 29v-6a2 2 0 0 1 4 0v6" fill="#2b2118"/>' +
      '<rect x="15" y="13" width="2" height="4" fill="#2b2118"/><path d="M16 6V1h6l-2 2 2 2h-6" fill="#b8321f" stroke="#2b2118" stroke-width=".8"/></svg>');
  }
  function muenze() {
    return W.frag('<svg class="pfennig__muenze" viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="8.5" fill="#d9b66a" stroke="#7d5a12" stroke-width="1.5"/><path d="M10 5v10M5 10h10" stroke="#7d5a12" stroke-width="1.6"/></svg>');
  }

  function kopf() {
    var el = document.getElementById('kopf');
    if (!el) return;
    var d = W.state.data;
    el.innerHTML = '';
    el.appendChild(h('a', { href: '#/', class: 'marke', 'aria-label': 'Stein auf Stein, zurück ins Tal' }, turm(), h('span', { class: 'marke__text' }, 'Stein auf Stein')));
    el.appendChild(h('div', { class: 'kopf__rechts' },
      h('a', { href: '#/schatz', class: 'pfennig', 'aria-label': W.ansichten.pfennige().stand + ' Pfennige, zur Schatzkammer' }, muenze(), h('span', { class: 'mono' }, String(W.ansichten.pfennige().stand))),
      h('a', { href: '#/einstellungen', class: 'schild', 'aria-label': 'Namensschild und Einstellungen' },
        h('span', { class: 'schild__name' }, d.name || 'Baumeisterin'),
        h('span', { class: 'schild__rang' }, W.ansichten.rang()))));
  }

  function nav(aktiv) {
    var el = document.getElementById('nav');
    if (!el) return;
    var n = W.ansichten.schadenAnzahl();
    el.innerHTML = '';
    NAV.forEach(function (x) {
      el.appendChild(h('a', { href: x[0], class: 'nav__punkt' + (aktiv === x[2] ? ' nav__punkt--an' : ''), 'aria-current': aktiv === x[2] ? 'page' : null },
        h('span', null, x[1]), x[2] === 'schaeden' && n ? h('span', { class: 'nav__zahl' }, h('span', { 'aria-hidden': 'true' }, String(n)), h('span', { class: 'sr-only' }, n === 1 ? ' 1 Riss' : ' ' + n + ' Risse')) : null));
    });
  }

  function route() {
    var teile = (location.hash || '#/').replace(/^#\/?/, '').split('/').filter(Boolean);
    return { name: teile[0] || 'tal', args: teile.slice(1) };
  }
  function aktivFuer(name) { return name === 'bau' ? 'tal' : name; }

  function zeige() {
    var r = route();
    var main = document.getElementById('inhalt');
    main.innerHTML = '';
    try {
      kopf();
      nav(aktivFuer(r.name));
      var A = W.ansichten, E = W.extras || {};
      switch (r.name) {
        case 'bau': A.bauplatz(main, r.args[0], r.args[1]); break;
        case 'schaeden': A.schaeden(main); break;
        case 'plan': A.plan(main); break;
        case 'einstellungen': A.einstellungen(main); break;
        case 'hoftag': if (W.hoftagAnsicht) W.hoftagAnsicht(main, r.args); else main.appendChild(h('p', { class: 'seite' }, 'Der Hoftag wird noch vorbereitet.')); break;
        case 'geruechte': case 'schatz': case 'wachstafel': case 'zeitleiste': case 'bilder':
          if (E[r.name]) { E[r.name](main, r.args); break; }
          location.hash = '#/'; return;
        default: A.tal(main);
      }
    } catch (e) {
      main.appendChild(h('div', { class: 'seite' }, h('p', null, 'Hier ist etwas schiefgegangen. '), h('a', { href: '#/' }, 'Zurück ins Tal')));
      if (window.console) console.error(e);
    }
    window.scrollTo(0, 0);
  }

  W.app = { zeige: zeige, kopf: kopf };

  function start() {
    W.state.load();
    W.ansichten.stillFeiern();
    window.addEventListener('hashchange', zeige);
    // Kopf und Navigation nur neu bauen, wenn sich Name, Pfennige, Rang oder Risse ändern.
    var signatur = '';
    W.state.on(function () {
      W.ansichten.richtfestPruefen();
      var s = [W.state.data.name, W.ansichten.pfennige().stand, W.ansichten.rang(), W.ansichten.schadenAnzahl()].join('|');
      if (s === signatur) return;
      signatur = s;
      kopf(); nav(aktivFuer(route().name));
    });
    zeige();
    if (!W.state.data.begruesst) W.ansichten.begruessung(zeige);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
