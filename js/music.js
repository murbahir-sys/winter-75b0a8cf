/* Тихая музыка по нажатию: мягкий пэд + редкие «фортепианные» ноты, всё генерируется WebAudio.
   По умолчанию выключено; включается только кнопкой, плавно появляется и гаснет. */
(function () {
  const btn = document.getElementById('music'); if (!btn) return;
  const AC = window.AudioContext || window.webkitAudioContext;
  if (!AC) { btn.hidden = true; return; }
  const T = (window.INVITE && window.INVITE.texts) || {};
  let ctx, master, wet, timer, on = false, step = 0;
  // Fmaj9 – Am7 – Dm9 – Bbmaj7 (мягко, без «грусти»)
  const CH = [[53, 60, 64, 67, 69], [57, 60, 64, 67, 71], [50, 57, 60, 64, 65], [46, 53, 57, 62, 64]];
  const hz = m => 440 * Math.pow(2, (m - 69) / 12);
  function impulse(sec) { const n = ctx.sampleRate * sec, b = ctx.createBuffer(2, n, ctx.sampleRate);
    for (let c = 0; c < 2; c++) { const d = b.getChannelData(c); for (let i = 0; i < n; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / n, 2.6); } return b; }
  function init() {
    ctx = new AC(); master = ctx.createGain(); master.gain.value = 0;
    const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 2400;
    const rev = ctx.createConvolver(); rev.buffer = impulse(3.2); wet = ctx.createGain(); wet.gain.value = 0.55;
    master.connect(lp); lp.connect(ctx.destination); master.connect(rev); rev.connect(wet); wet.connect(ctx.destination);
  }
  function pad(notes, t, dur) {
    notes.slice(0, 4).forEach((m, i) => {
      [-4, 4].forEach(det => { const o = ctx.createOscillator(), g = ctx.createGain(), f = ctx.createBiquadFilter();
        o.type = i === 0 ? 'sine' : 'triangle'; o.frequency.value = hz(m - (i === 0 ? 12 : 0)); o.detune.value = det;
        f.type = 'lowpass'; f.frequency.value = 900;
        g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(0.022, t + 2.2); g.gain.setValueAtTime(0.022, t + dur - 2); g.gain.linearRampToValueAtTime(0, t + dur + 0.4);
        o.connect(f); f.connect(g); g.connect(master); o.start(t); o.stop(t + dur + 0.5); });
    });
  }
  function note(m, t, v) { // «фортепиано»: синус + обертон с быстрым спадом
    [[1, 1], [2, 0.25], [3, 0.08]].forEach(([k, a]) => { const o = ctx.createOscillator(), g = ctx.createGain();
      o.type = 'sine'; o.frequency.value = hz(m) * k;
      g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(v * a, t + 0.012); g.gain.exponentialRampToValueAtTime(0.0001, t + 2.6 / k);
      o.connect(g); g.connect(master); o.start(t); o.stop(t + 2.8); });
  }
  function schedule() {
    const bar = 6.4, t = ctx.currentTime + 0.1, chord = CH[step % CH.length];
    pad(chord, t, bar);
    const mel = chord.slice(1).map(m => m + 12);
    for (let i = 0; i < 4; i++) if (Math.random() < 0.75) note(mel[(Math.random() * mel.length) | 0], t + 0.4 + i * 1.6 + Math.random() * 0.3, 0.05 + Math.random() * 0.03);
    step++;
  }
  function start() {
    if (!ctx) init();
    ctx.resume(); schedule(); clearInterval(timer); timer = setInterval(schedule, 6400);
    master.gain.cancelScheduledValues(ctx.currentTime); master.gain.setValueAtTime(master.gain.value, ctx.currentTime); master.gain.linearRampToValueAtTime(1, ctx.currentTime + 2.5);
  }
  function stop() {
    if (!ctx) return; clearInterval(timer);
    master.gain.cancelScheduledValues(ctx.currentTime); master.gain.setValueAtTime(master.gain.value, ctx.currentTime); master.gain.linearRampToValueAtTime(0, ctx.currentTime + 1.2);
    setTimeout(() => { if (!on) ctx.suspend(); }, 1400);
  }
  function label() { btn.setAttribute('aria-pressed', on); btn.setAttribute('aria-label', on ? (T.musicOff || 'Выключить музыку') : (T.musicOn || 'Включить музыку')); btn.title = btn.getAttribute('aria-label'); }
  btn.addEventListener('click', () => { on = !on; label(); on ? start() : stop(); try { localStorage.setItem('invite-music', on ? 'on' : 'off'); } catch (e) {} });
  document.addEventListener('visibilitychange', () => { if (!ctx || !on) return; document.hidden ? ctx.suspend() : ctx.resume(); });
  label(); // всегда стартуем выключенной: без автозапуска
  let lastTick = 0;
  function tick() { // мягкий «стеклянный» тик в тональности музыки, тише неё
    if (!ctx || !on || ctx.state !== 'running') return; const t = ctx.currentTime; if (t - lastTick < 0.06) return; lastTick = t;
    const m = CH[(step + 3) % CH.length][4] + 12;
    [[1, 0.035], [2.01, 0.008]].forEach(([k, a]) => { const o = ctx.createOscillator(), g = ctx.createGain();
      o.type = 'sine'; o.frequency.value = hz(m) * k; g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(a, t + 0.006); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.35);
      o.connect(g); g.connect(ctx.destination); o.start(t); o.stop(t + 0.4); }); }
  window.MUSIC = { get on() { return on; }, tick };
})();
