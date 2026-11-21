/* Töne (standardmäßig aus): kurzer heller Ton bei richtigen Antworten, Glocke beim Richtfest. */
(function () {
  'use strict';
  var W = (window.W = window.W || {});
  var ctx = null;

  function an() { return W.state && W.state.data && W.state.data.ton; }
  function audio() {
    if (!ctx) { try { ctx = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { ctx = null; } }
    return ctx;
  }
  function ton(freq, dauer, laut, verz) {
    var c = audio();
    if (!c) return;
    var t = c.currentTime + (verz || 0);
    var o = c.createOscillator(), g = c.createGain();
    o.type = 'sine';
    o.frequency.value = freq;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(laut, t + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dauer);
    o.connect(g); g.connect(c.destination);
    o.start(t); o.stop(t + dauer + 0.05);
  }

  W.ton = {
    richtig: function () { if (an()) { ton(880, 0.25, 0.08); ton(1320, 0.3, 0.05, 0.08); } },
    glocke: function () {
      if (!an()) return;
      [0, 0.5, 1.0].forEach(function (v) { ton(523, 1.6, 0.12, v); ton(1046, 1.2, 0.05, v); ton(1568, 0.8, 0.03, v); });
    }
  };
})();
