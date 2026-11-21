(function () {
  const C = window.INVITE, X = C.texts, G = window.gsap, RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const KEY = 'invite-lera-v2';
  const blank = { city: null, dates: [], time: null, acts: [], wish: '', screen: 'intro' };
  const st = Object.assign({}, blank, load());
  function load() { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; } }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(st)); } catch (e) {} }
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const ico = n => `<svg class="ic"><use href="#i-${n}"/></svg>`;
  const nick = (C.TG_NICK || '').replace(/^@/, '');
  const tgUrl = text => `https://t.me/${encodeURIComponent(nick)}?text=${encodeURIComponent(text)}`;

  // ---------- тексты ----------
  $$('[data-t]').forEach(el => { const v = X[el.dataset.t]; if (v != null) el.textContent = v; });
  document.title = 'Для тебя, ' + C.her.name;
  $('#wish').placeholder = X.wishPlaceholder;
  ['#chatAsk', '#chatDate'].forEach(s => { $(s).href = tgUrl(X.chatMsg); });
  $('#laterSend').href = tgUrl(X.laterMsg);
  // разбивка заголовков на буквы для анимации
  $$('[data-split]').forEach(el => {
    el.setAttribute('aria-label', el.textContent);
    el.innerHTML = el.textContent.split(' ').map(w => `<span class="split-w" aria-hidden="true">${[...w].map(ch => `<span class="split-c">${esc(ch)}</span>`).join('')}</span>`).join(' ');
  });

  // лёгкое зерно, чтобы градиенты не «ступенились»
  (function () { const c = document.createElement('canvas'); c.width = c.height = 128; const x = c.getContext('2d'); const d = x.createImageData(128, 128);
    for (let i = 0; i < d.data.length; i += 4) { const v = Math.random() * 255; d.data[i] = d.data[i + 1] = d.data[i + 2] = v; d.data[i + 3] = 255; }
    x.putImageData(d, 0, 0); $('.grain').style.backgroundImage = `url(${c.toDataURL()})`; })();

  // ---------- частицы (canvas) ----------
  const fx = $('#fx'), fc = fx.getContext('2d'); let parts = [], fxOn = false;
  function fxSize() { const d = Math.min(devicePixelRatio || 1, 2); fx.width = innerWidth * d; fx.height = innerHeight * d; fc.setTransform(d, 0, 0, d, 0, 0); }
  addEventListener('resize', fxSize); fxSize();
  function burst(x, y, n = 40, spread = 1) {
    if (RM) n = Math.round(n / 3);
    for (let i = 0; i < n; i++) { const a = Math.random() * Math.PI * 2, v = (0.6 + Math.random() * 2.6) * spread;
      parts.push({ x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v - 1.2, s: 1 + Math.random() * 2.2, life: 1, d: 0.008 + Math.random() * 0.01, c: ['255,180,143', '255,236,226', '227,38,76'][i % 3] }); }
    if (!fxOn) { fxOn = true; requestAnimationFrame(fxLoop); }
  }
  function fxLoop() {
    fc.clearRect(0, 0, innerWidth, innerHeight);
    parts = parts.filter(p => p.life > 0);
    fc.globalCompositeOperation = 'lighter';
    for (const p of parts) { p.vy += .015; p.vx *= .97; p.vy *= .97; p.x += p.vx; p.y += p.vy; p.life -= p.d;
      const a = Math.max(0, p.life), r = p.s * 4, g = fc.createRadialGradient(p.x, p.y, 0, p.x, p.y, r);
      g.addColorStop(0, `rgba(${p.c},${a})`); g.addColorStop(.25, `rgba(${p.c},${a * .5})`); g.addColorStop(1, `rgba(${p.c},0)`);
      fc.fillStyle = g; fc.beginPath(); fc.arc(p.x, p.y, r, 0, 6.29); fc.fill(); }
    fc.globalCompositeOperation = 'source-over';
    if (parts.length) requestAnimationFrame(fxLoop); else { fxOn = false; fc.clearRect(0, 0, innerWidth, innerHeight); }
  }

  // ---------- навигация ----------
  const ORDER = ['intro', 'ask', 'yes', 'city', 'date', 'act', 'wish', 'final'];
  const WIDE = innerWidth > 760 && innerWidth / innerHeight > 1.15;
  // позиция сердца: экранная доля сверху → координата шейдера (uv нормирован по меньшей стороне)
  const md = () => Math.min(innerWidth, innerHeight);
  const yAt = f => (0.5 - f) * innerHeight / md();
  const HERO = WIDE ? { hx: 0, hy: yAt(0.47), hs: 0.2 } : { hx: 0, hy: yAt(0.47), hs: 0.25 };
  const MINI = WIDE ? { hx: -0.2 * innerWidth / innerHeight, hy: yAt(0.5), hs: 0.11 } : { hx: 0, hy: yAt(0.2), hs: 0.1 };
  const GLS = {
    intro: Object.assign({ heart: 1, burst: 0, glow: 0, fill: 0, tint: 0, cam: 0 }, HERO),
    ask:   Object.assign({ heart: 1, fill: 1, glow: 1, cam: 0.6 }, MINI),
    later: Object.assign({ heart: 0.7, fill: 0.45, glow: 0.6, cam: 0.5 }, MINI),
    yes:   Object.assign({ heart: 1, fill: 1, glow: 1, tint: 0.6, cam: 1.2 }, WIDE ? { hx: 0, hy: yAt(0.2), hs: 0.08 } : MINI),
    city:  { heart: 0, glow: 1, tint: 0.3, cam: 1.8 }, date: { heart: 0, glow: 1, tint: 0.45, cam: 2.4 }, act: { heart: 0, glow: 1, tint: 0.3, cam: 3.0 }, wish: { heart: 0, glow: 1, tint: 0.7, cam: 3.6 },
    final: { heart: 0, glow: 1, tint: 1, cam: 4.2 },
  };
  // зона удержания — ровно над сердцем
  function placeHold() { const b = $('#hold'); if (!b) return; const m = md(), cy = innerHeight / 2 - HERO.hy * m, sz = Math.max(170, HERO.hs * m * 1.9);
    Object.assign(b.style, { top: cy + 'px', width: sz + 'px', height: sz + 'px' }); document.documentElement.style.setProperty('--heart-y', cy + 'px'); document.documentElement.style.setProperty('--heart-s', HERO.hs * m * 1.25 + 'px'); }
  placeHold(); addEventListener('resize', placeHold);
  let cur = 'intro', busy = false;
  function animIn(scr) {
    const chars = $$('.split-c', scr), rest = $$(':scope > :not(h1):not(h2):not(.head):not(.hold), .head > p, .cities > li, .acts > .act, .acts > .sep, .month, .ask-text > :not(h2)', scr);
    if (!G || RM) return;
    G.fromTo(chars, { yPercent: 70, opacity: 0, filter: 'blur(10px)' }, { yPercent: 0, opacity: 1, filter: 'blur(0px)', duration: 1.1, ease: 'expo.out', stagger: { each: 0.028, from: 'start' }, delay: 0.15 });
    G.fromTo(rest, { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: 'expo.out', stagger: 0.045, delay: 0.35, clearProps: 'transform' });
  }
  function go(name, opt = {}) {
    if ((name === cur && !opt.force) || busy) return;
    const from = $(`[data-screen="${cur}"]`), to = $(`[data-screen="${name}"]`);
    const swap = () => {
      from.classList.remove('is-active'); from.style.opacity = ''; from.style.filter = ''; from.style.transform = '';
      to.classList.add('is-active'); to.scrollTop = 0;
      cur = name; st.screen = name; save(); document.body.dataset.s = name;
      if (name === 'act') renderActs(); if (name === 'date') renderCal(); if (name === 'final') renderFinal();
      animIn(to); busy = false;
    };
    if (cur === 'intro' && GL.state.burst > 0.01 && !opt.instant) {
      // огонёк рассыпался → гаснем → маленькое горящее сердечко над вопросом
      GL.set({ heart: 0, glow: 1 }); setTimeout(() => { GL.jump({ burst: 0, fill: 1, hx: GLS[name].hx, hy: GLS[name].hy, hs: GLS[name].hs, heart: 0 }); GL.set(GLS[name]); }, 900);
    } else GL.set(GLS[name]);
    if (opt.instant || !G || RM) { swap(); return; }
    busy = true;
    streak();
    G.to(from, { opacity: 0, y: -14, filter: 'blur(8px)', duration: 0.45, ease: 'power2.in', onComplete: () => { G.set(from, { clearProps: 'all' }); swap(); } });
  }
  function streak() {
    GL.set({ streak: 1 }); setTimeout(() => GL.set({ streak: 0 }), 280);
    if (G && !RM) { const el = $('.streak i'); G.timeline().set(el, { left: '-70%', opacity: 0, scaleY: 1 })
      .to(el, { left: '110%', duration: 0.8, ease: 'power3.inOut' }, 0).to(el, { opacity: 1, duration: 0.15 }, 0)
      .to(el, { scaleY: 5, duration: 0.4, yoyo: true, repeat: 1, ease: 'sine.inOut' }, 0).to(el, { opacity: 0, duration: 0.2 }, 0.6); }
  }
  $$('[data-go]').forEach(b => b.addEventListener('click', () => go(b.dataset.go)));
  $$('[data-back]').forEach(b => b.addEventListener('click', () => { const i = ORDER.indexOf(cur); go(ORDER[Math.max(3, i - 1)]); }));

  // ---------- 1. держи сердце ----------
  (function () {
    const btn = $('#hold'), bar = $('#holdBar'); let holding = false, p = 0, done = false, last = 0;
    const down = e => { if (done) return; e.preventDefault(); holding = true; GL.set({ beat: 1 }); btn.classList.add('holding'); };
    const up = () => { holding = false; GL.set({ beat: 0 }); btn.classList.remove('holding'); };
    btn.addEventListener('pointerdown', down); addEventListener('pointerup', up); addEventListener('pointercancel', up); btn.addEventListener('contextmenu', e => e.preventDefault());
    btn.addEventListener('keydown', e => { if (e.key === ' ' || e.key === 'Enter') down(e); }); btn.addEventListener('keyup', up);
    function tick(now) {
      const dt = Math.min(0.12, (now - (last || now)) / 1000); last = now;
      p += holding ? dt / 2.2 : -dt / 1.6; p = Math.max(0, Math.min(1, p));
      bar.style.transform = `scaleX(${p})`; GL.set({ fill: p }); GL.state.fill = GL.state.fill + (p - GL.state.fill) * 0.5;
      document.documentElement.style.setProperty('--fill', p.toFixed(3));
      if (holding && navigator.vibrate && Math.random() < dt * 2.5) navigator.vibrate(6);
      if (p >= 1 && !done) { done = true; holding = false; if (navigator.vibrate) navigator.vibrate([30, 40, 60]);
        btn.classList.remove('holding'); GL.set({ burst: 1, beat: 0, glow: 1 }); document.body.classList.add('lit');
        if (!GL.ok) { const r = btn.getBoundingClientRect(); burst(r.left + r.width / 2, r.top + r.height / 2, 50, 1); }
        setTimeout(() => go('ask'), 1700); return; }
      if (!done) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  })();

  // ---------- 2. вопрос ----------
  (function () {
    const no = $('#no'), yes = $('#yes'), taunt = $('#taunt'); let n = 0, fledAt = 0;
    const MAXFLEE = X.noTaunts.length - 1; // убегает пару раз, потом спокойно даёт себя нажать
    function flee(e) {
      if (n >= MAXFLEE) return false;
      if (e) e.preventDefault();
      n++; fledAt = performance.now();
      taunt.textContent = X.noTaunts[n - 1];
      const r = no.getBoundingClientRect(); const avoid = [yes, taunt, $('#chatAsk'), ...$$('[data-screen="ask"] h2, [data-screen="ask"] .sub')].map(el => el.getBoundingClientRect());
      if (!no.classList.contains('free')) { no.style.left = r.left + 'px'; no.style.top = r.top + 'px'; no.classList.add('free'); }
      let nx, ny, k = 0;
      do { nx = 16 + Math.random() * (innerWidth - r.width - 32); ny = innerHeight * 0.12 + Math.random() * (innerHeight * 0.8 - r.height - 20); k++; }
      while (k < 80 && ((Math.abs(nx - r.left) < 100 && Math.abs(ny - r.top) < 60) || avoid.some(y => nx < y.right + 14 && nx + r.width > y.left - 14 && ny < y.bottom + 14 && ny + r.height > y.top - 14)));
      requestAnimationFrame(() => { no.style.left = nx + 'px'; no.style.top = ny + 'px'; no.style.transform = `rotate(${(Math.random() * 16 - 8).toFixed(0)}deg)`; });
      if (n === MAXFLEE) setTimeout(() => { taunt.textContent = X.noTaunts[MAXFLEE]; no.style.transform = 'none'; }, 700);
      return true;
    }
    no.addEventListener('pointerdown', e => { if (e.pointerType !== 'mouse') flee(e); });
    no.addEventListener('pointerenter', e => { if (e.pointerType === 'mouse') flee(e); });
    no.addEventListener('click', e => { if (performance.now() - fledAt < 600) return; if (n < MAXFLEE) { flee(e); return; } resetNo(); go('later'); });
    function resetNo() { no.classList.remove('free'); no.style.left = no.style.top = no.style.transform = ''; }
    yes.addEventListener('click', () => {
      GL.set({ beat: 1 }); const r = yes.getBoundingClientRect(); burst(r.left + r.width / 2, r.top + r.height / 2, 36);
      if (navigator.vibrate) navigator.vibrate([20, 30, 20]);
      resetNo(); setTimeout(() => { GL.set({ beat: 0 }); go('yes'); }, 700);
    });
    $('#laterCoffee').addEventListener('click', () => { if (!st.acts.includes(C.short.id)) st.acts.unshift(C.short.id); save(); go('city'); });
  })();

  // ---------- город ----------
  const cityBox = $('#cities');
  cityBox.innerHTML = C.cities.map(c => `<li><button class="city" data-id="${c.id}" aria-pressed="false"><b>${esc(c.name)}</b><span class="co">${esc(c.coord)}</span><span class="ln">${esc(c.line)}</span>${c.hint ? `<span class="tg">${esc(c.hint)}</span>` : '<span></span>'}<span class="ck">${'<svg><use href="#i-check"/></svg>'}</span></button></li>`).join('');
  function markCity() { $$('.city').forEach(b => { const on = b.dataset.id === st.city; b.classList.toggle('on', on); b.setAttribute('aria-pressed', on); });
    cityBox.classList.toggle('has-on', !!st.city); $('#cityNext').disabled = !st.city; }
  cityBox.addEventListener('click', e => { const b = e.target.closest('.city'); if (!b) return;
    if (st.city !== b.dataset.id) { const keep = [C.short.id, ...C.extras.map(x => x.id)]; st.acts = st.acts.filter(id => keep.includes(id)); }
    st.city = b.dataset.id; save(); markCity(); });
  $('#cityNext').addEventListener('click', () => st.city && go('date'));

  // ---------- дата ----------
  const MON = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
  const MONG = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
  const DOW = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
  const iso = (y, m, d) => `${y}-${String(m + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
  const inRange = s => typeof s === 'string' && s >= C.dateFrom && s <= C.dateTo;
  st.dates = (st.dates || []).filter(inRange).slice(0, 3);
  function months() { const a = [], f = C.dateFrom.split('-').map(Number), t = C.dateTo.split('-').map(Number); let y = f[0], m = f[1] - 1;
    while (y < t[0] || (y === t[0] && m <= t[1] - 1)) { a.push([y, m]); m++; if (m > 11) { m = 0; y++; } } return a; }
  function renderCal() {
    $('#cal').innerHTML = months().map(([y, m]) => {
      const first = (new Date(y, m, 1).getDay() + 6) % 7, days = new Date(y, m + 1, 0).getDate();
      let h = `<div class="month"><h3>${MON[m]} ${y}</h3><div class="grid">` + ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'].map(d => `<span class="dow">${d}</span>`).join('');
      for (let i = 0; i < first; i++) h += '<span class="day blank"></span>';
      for (let d = 1; d <= days; d++) { const s = iso(y, m, d), ok = inRange(s), on = st.dates.includes(s);
        h += `<button class="day${ok ? ' ok' : ''}${on ? ' on' : ''}${(m === 11 && d === 31) ? ' ny' : ''}" ${ok ? `data-d="${s}" aria-pressed="${on}"` : 'disabled'} aria-label="${d} ${MONG[m]}">${d}</button>`; }
      return h + '</div></div>';
    }).join('');
    const times = C.times.concat('any');
    $('#times').innerHTML = times.map(t => `<button class="chip${t === st.time ? ' on' : ''}" data-t="${t}" aria-pressed="${t === st.time}">${t === 'any' ? esc(X.anyTime) : t}</button>`).join('');
    $('#dateNote').textContent = st.dates.length ? (st.dates.length === 3 ? X.dateMax : st.dates.length > 1 ? 'Отлично, выберем из этих дней' : '') : '';
    $('#dateNext').disabled = !(st.dates.length && st.time);
  }
  $('#cal').addEventListener('click', e => { const b = e.target.closest('.day.ok'); if (!b || !inRange(b.dataset.d)) return; const d = b.dataset.d;
    if (st.dates.includes(d)) st.dates = st.dates.filter(x => x !== d); else { if (st.dates.length >= 3) st.dates.shift(); st.dates.push(d); }
    st.dates.sort(); save(); renderCal(); });
  $('#times').addEventListener('click', e => { const b = e.target.closest('.chip'); if (!b) return; st.time = b.dataset.t; save(); renderCal(); });
  $('#dateNext').addEventListener('click', () => { if (st.dates.length && st.time) go('act'); });

  // ---------- занятия ----------
  const city = () => C.cities.find(c => c.id === st.city);
  const allActs = () => [C.short].concat(city() ? city().acts : [], C.extras);
  function actRow(a, cls = '') {
    const on = st.acts.includes(a.id);
    return `<div class="act ${cls}${on ? ' on' : ''}" data-id="${a.id}" role="checkbox" tabindex="0" aria-checked="${on}">
      <h4>${esc(a.title)}${cls === 'short' ? '<span class="tag">можно коротко</span>' : ''}</h4><span class="ck"><svg><use href="#i-check"/></svg></span>
      <p>${esc(a.note)}</p>
      <div class="meta">${a.addr ? `<span>${ico('pin')}${esc(a.addr)}</span>` : ''}${a.when ? `<span>${ico('clock')}${esc(a.when)}</span>` : ''}${a.link ? `<a href="${esc(a.link)}" target="_blank" rel="noopener noreferrer">Подробнее ${ico('ext')}</a>` : ''}</div></div>`;
  }
  function renderActs() {
    const c = city(); if (!c) return;
    $('#actCity').textContent = c.name;
    $('#acts').innerHTML = actRow(C.short, 'short') + c.acts.map(a => actRow(a)).join('') + `<div class="sep">${esc(X.actMore)}</div>` + C.extras.map(a => actRow(a, 'extra')).join('');
    $('#actNext').disabled = !st.acts.length;
  }
  function toggleAct(el) { const id = el.dataset.id; st.acts = st.acts.includes(id) ? st.acts.filter(x => x !== id) : st.acts.concat(id); save();
    const on = st.acts.includes(id); el.classList.toggle('on', on); el.setAttribute('aria-checked', on); $('#actNext').disabled = !st.acts.length;
    if (on && G && !RM) G.fromTo(el.querySelector('.ck'), { scale: 0.6 }, { scale: 1, duration: 0.6, ease: 'elastic.out(1,.5)' }); }
  $('#acts').addEventListener('click', e => { if (e.target.closest('a')) return; const el = e.target.closest('.act'); if (el) toggleAct(el); });
  $('#acts').addEventListener('keydown', e => { if ((e.key === ' ' || e.key === 'Enter') && e.target.classList.contains('act')) { e.preventDefault(); toggleAct(e.target); } });
  $('#actNext').addEventListener('click', () => { if (st.acts.length) go('wish'); });

  // ---------- пожелание ----------
  const wish = $('#wish'); wish.value = st.wish || '';
  wish.addEventListener('input', () => { st.wish = wish.value; save(); });
  $('#chips').innerHTML = X.wishChips.map(c => `<button class="chip" data-c="${esc(c)}">${esc(c)}</button>`).join('');
  $('#chips').addEventListener('click', e => { const b = e.target.closest('.chip'); if (!b || b.classList.contains('on')) return; wish.value = (wish.value.trim() ? wish.value.trim() + '\n' : '') + b.dataset.c; st.wish = wish.value; save(); b.classList.add('on'); });
  $('#wishNext').addEventListener('click', () => { const r = $('#wishNext').getBoundingClientRect(); burst(r.left + r.width / 2, r.top, 40); go('final'); });

  // ---------- финал ----------
  function fmtDate(s) { const [y, m, d] = s.split('-').map(Number); const w = new Date(y, m - 1, d).getDay(); return `${d} ${MONG[m - 1]} (${DOW[w]})`; }
  const timeTxt = () => st.time === 'any' ? X.anyTime.toLowerCase() : (st.time || '—');
  const chosen = () => allActs().filter(a => st.acts.includes(a.id));
  function message() {
    const c = city(), acts = chosen(), many = st.dates.length > 1;
    return [`${C.from.name}, привет! Это ${C.her.name} 🙂`, 'Давай встретимся!', '',
      `📍 Город: ${c ? c.name : '—'}`, `📅 ${many ? 'Подходят дни' : 'Когда'}: ${st.dates.map(fmtDate).join(', ') || '—'}`, `🕐 Время: ${timeTxt()}`,
      '✨ Чем займёмся:', ...acts.map(a => `  • ${a.title}${a.addr && a.addr !== 'Где скажешь' ? ' — ' + a.addr : ''}`),
      '', `💭 Пожелание: ${st.wish && st.wish.trim() ? st.wish.trim() : '—'}`].join('\n');
  }
  let cdTimer;
  function renderFinal() {
    const c = city(), acts = chosen(), d0 = st.dates[0];
    $('#ticket').innerHTML = `<div class="tk-head"><span>${esc(C.her.name)} · ${esc(C.from.name)}</span><span>${d0 ? d0.split('-').reverse().join('.') : ''}${st.time && st.time !== 'any' ? ' · ' + st.time : ''}</span></div>
      <dl><dt>Где</dt><dd>${esc(c ? c.name : '—')}</dd>
      <dt>${st.dates.length > 1 ? 'Дни' : 'Когда'}</dt><dd>${st.dates.map(d => esc(fmtDate(d))).join('<br>') || '—'}<br><span style="color:var(--mute)">${esc(timeTxt())}</span></dd>
      <dt>Планы</dt><dd>${acts.map(a => esc(a.title)).join('<br>') || '—'}</dd>
      <dt>От тебя</dt><dd>${st.wish && st.wish.trim() ? esc(st.wish.trim()).replace(/\n/g, '<br>') : '—'}</dd></dl>`;
    const msg = message(), tg = $('#sendTg');
    tg.querySelector('span').textContent = X.sendTg; tg.href = tgUrl(msg);
    tg.onclick = e => { copy(true); if (!nick) e.preventDefault(); };
    const vk = $('#sendVk'); if (C.VK_ID) { vk.hidden = false; vk.textContent = X.sendVk; vk.href = `https://vk.me/${encodeURIComponent(C.VK_ID)}`; vk.onclick = () => copy(); }
    $('#copy span').textContent = X.copy;
    const sh = $('#share'); if (navigator.share) { sh.hidden = false; sh.textContent = X.share; sh.onclick = () => navigator.share({ text: msg }).catch(() => {}); }
    $('#edit').textContent = X.edit;
    clearInterval(cdTimer);
    const target = d0 ? new Date(`${d0}T${st.time && st.time !== 'any' ? st.time : '12:00'}:00${C.tz}`) : null;
    const cd = $('#cd');
    function upd() { if (!target) { cd.innerHTML = ''; return; } const s = Math.max(0, Math.floor((target - Date.now()) / 1000));
      const v = [Math.floor(s / 86400), Math.floor(s % 86400 / 3600), Math.floor(s % 3600 / 60), s % 60];
      cd.innerHTML = v.map((n, i) => `<div><b>${String(n).padStart(2, '0')}</b><small>${['дней', 'часов', 'минут', 'секунд'][i]}</small></div>`).join('<i>:</i>'); }
    upd(); cdTimer = setInterval(upd, 1000);
    renderDaisy();
  }
  function copy(silent) {
    const msg = message(); const done = () => { if (!silent) $('#toast').textContent = X.copied; };
    if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(msg).then(done, fallback); else fallback();
    function fallback() { const t = document.createElement('textarea'); t.value = msg; t.setAttribute('readonly', ''); t.style.position = 'fixed'; t.style.opacity = '0'; document.body.appendChild(t); t.select(); try { document.execCommand('copy'); done(); } catch (e) {} t.remove(); }
  }
  $('#copy').addEventListener('click', () => copy());
  $('#edit').addEventListener('click', () => go('city'));

  function renderDaisy() {
    const words = X.daisySay, N = words.length, d = $('#daisy'); let left = N; $('#daisySay').textContent = '';
    d.innerHTML = Array.from({ length: N }, (_, i) => `<button class="petal" style="transform:rotate(${i * 360 / N}deg)" aria-label="лепесток ${i + 1}"></button>`).join('') + '<span class="core"></span>';
    $$('.petal', d).forEach((p, i) => p.addEventListener('click', () => {
      if (p.dataset.off) return; p.dataset.off = 1; left--; const k = N - left - 1;
      const rot = i * 360 / N;
      if (G && !RM) G.to(p, { rotation: rot + 140, y: -60 - Math.random() * 60, x: (Math.random() - .5) * 120, opacity: 0, duration: 1.1, ease: 'power2.out' }); else p.style.opacity = 0;
      $('#daisySay').textContent = left === 0 ? X.daisyEnd : words[k];
      if (left === 0) { const r = d.getBoundingClientRect(); burst(r.left + r.width / 2, r.top + r.height / 2, 40); }
    }));
  }

  // ---------- старт / восстановление ----------
  if (location.hash === '#reset') { try { localStorage.removeItem(KEY); } catch (e) {} history.replaceState(null, '', location.pathname); Object.assign(st, blank, { dates: [], acts: [] }); wish.value = ''; }
  markCity();
  document.body.dataset.s = 'intro';
  GL.jump(GLS.intro);
  const complete = st.city && st.dates.length && st.time && st.acts.length;
  const resume = ORDER.indexOf(st.screen) >= 3 ? (st.screen === 'final' && !complete ? 'city' : st.screen) : 'intro';
  if (resume !== 'intro') { GL.jump(GLS[resume]); go(resume, { instant: true }); } else animIn($('[data-screen="intro"]'));
  window.__invite = { go, st, message };
})();
