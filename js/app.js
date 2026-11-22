(function () {
  const C = window.INVITE, X = C.texts, G = window.gsap, RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const KEY = 'invite-lera-v2';
  const blank = { city: null, dates: [], time: null, acts: [], wish: '', mood: [], part: null, moodOwn: '', actOwn: '', meet: null, meetPlace: '', screen: 'intro' };
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
  // блик света, проходящий сквозь буквы (интро и финал)
  $$('.s-intro h1, .final-title').forEach(el => { el.classList.add('sheen');
    const o = document.createElement('span'); o.className = 'sheen-l'; o.setAttribute('aria-hidden', 'true');
    o.innerHTML = el.innerHTML.replace(/split-w/g, 'sw').replace(/split-c/g, 'sc'); el.appendChild(o); });

  // заголовки всегда помещаются по ширине: самое длинное слово ≤ 88% доступной ширины (запас на шрифты, масштаб текста Android)
  function fitTitles(root) {
    const vw = document.documentElement.clientWidth || innerWidth;
    $$('.wide, .display, .pl-name', root || document).forEach(el => {
      el.style.fontSize = '';
      const cs = getComputedStyle(el), base = parseFloat(cs.fontSize); if (!base) return;
      const words = $$('.split-w', el); let maxW = 0;
      if (words.length) words.forEach(w => { maxW = Math.max(maxW, w.getBoundingClientRect().width); });
      else { const m = document.createElement('span'); m.style.cssText = `position:absolute;left:-9999px;top:0;visibility:hidden;white-space:nowrap;font:${cs.font};letter-spacing:${cs.letterSpacing};text-transform:${cs.textTransform}`;
        document.body.appendChild(m); el.textContent.split(/\s+/).forEach(t => { m.textContent = t; maxW = Math.max(maxW, m.getBoundingClientRect().width); }); m.remove(); }
      const par = el.parentElement, ps = getComputedStyle(par);
      const box = Math.min(vw - 32, par.clientWidth - parseFloat(ps.paddingLeft) - parseFloat(ps.paddingRight));
      const need = maxW + parseFloat(cs.paddingLeft) + parseFloat(cs.paddingRight), avail = box * 0.88;
      if (need > avail && need > 0) el.style.fontSize = `${Math.max(12, Math.floor(base * avail / need * 10) / 10)}px`;
    });
  }
  fitTitles();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { fitTitles(); placeEmblem(); });
  let fitT; const refit = () => { clearTimeout(fitT); fitT = setTimeout(() => { fitTitles(); placeEmblem(); }, 120); };
  addEventListener('resize', refit); addEventListener('orientationchange', refit); if (window.visualViewport) visualViewport.addEventListener('resize', refit);
  window.__fit = fitTitles;

  // эмблема с маяком: по центру пустого неба между верхней кнопкой и заголовком; луна встаёт над колоннами Херсонеса
  const MOB = matchMedia('not all and (min-width:761px) and (min-aspect-ratio:23/20)');
  function placeEmblem(scr) {
    scr = scr || $('.screen.is-active'); if (!scr) return;
    const em = $('.emblem', scr);
    if (!em) { GL.set({ mo: 0 }); return; }
    if (!MOB.matches) { em.style.top = em.style.width = ''; GL.set({ mo: 0 }); return; }
    const title = $('h2', scr), mus = $('#music'), W = document.documentElement.clientWidth, H = innerHeight;
    const top0 = (mus ? mus.getBoundingClientRect().bottom : 52) + 10;
    const bot0 = title.getBoundingClientRect().top - 18;
    const room = bot0 - top0;
    let w = Math.min(270, W * 0.68, room * 320 / 158 * 0.92); // 158 — высота рисунка вместе с луной над ним
    if (w < 120) { em.style.visibility = 'hidden'; GL.set({ mo: 0 }); return; }
    em.style.visibility = ''; em.style.width = `${w}px`;
    const h = w * 150 / 320, k = w / 320, moonUp = 8 * k; // луна чуть выше верхнего края рисунка
    const t = top0 + (room - h - moonUp) / 2 + moonUp;
    const pr = em.offsetParent ? em.offsetParent.getBoundingClientRect().top : 0;
    em.style.top = `${t - pr}px`;
    // луна: над колоннами (x=128 в координатах рисунка, y=6)
    const r = em.getBoundingClientRect(), mxp = r.left + (128 - 54) * k, myp = t + 6 * k, m = Math.min(W, H);
    GL.jump({ mx: (mxp - W / 2) / m, my: (H / 2 - myp) / m }); GL.set({ mo: 1 });
  }
  window.__emblem = placeEmblem;
  if (window.ResizeObserver) { const ro = new ResizeObserver(() => { if (cur === 'ask' || cur === 'later') placeEmblem(); }); $$('.ask-text, .s-later').forEach(el => ro.observe(el)); }

  // разбивка подзаголовков на слова: мягкое появление со смазом
  $$('p.sub[data-t], p.lead[data-t], p.serif-line[data-t]').forEach(el => {
    const t = el.textContent; if (!t.trim()) return; el.setAttribute('aria-label', t);
    el.innerHTML = t.split(' ').map(w => `<span class="split-wd" aria-hidden="true">${esc(w)}</span>`).join(' '); });

  // салют для режима без WebGL: кольцо тёплых огоньков в небе
  let fwTimer = 0;
  function fwFallback() { if (document.hidden) return; const cx = innerWidth * (.2 + Math.random() * .6), cy = innerHeight * (.1 + Math.random() * .18);
    for (let i = 0; i < 22; i++) { const a = i / 22 * 6.283, v = 1.6 + Math.random() * .5; parts.push({ x: cx, y: cy, vx: Math.cos(a) * v, vy: Math.sin(a) * v, r: 0, vr: 0, s: 14 + Math.random() * 8, life: 1, k: 3 }); }
    if (!fxOn) { fxOn = true; requestAnimationFrame(fxLoop); } }
  // последняя точка касания — центр волны перехода
  let lastPt = [innerWidth / 2, innerHeight * 0.7];
  document.addEventListener('pointerdown', e => { lastPt = [e.clientX, e.clientY]; }, { passive: true, capture: true });
  // световой след за пальцем/курсором (тёплая пыль)
  const glow = document.createElement('canvas'); glow.width = glow.height = 32;
  (g => { const gr = g.createRadialGradient(16, 16, 0, 16, 16, 16); gr.addColorStop(0, 'rgba(255,225,200,1)'); gr.addColorStop(.35, 'rgba(255,170,130,.45)'); gr.addColorStop(1, 'rgba(255,120,90,0)'); g.fillStyle = gr; g.fillRect(0, 0, 32, 32); })(glow.getContext('2d'));
  let trailT = 0, touching = false;
  addEventListener('pointerdown', e => { touching = true; }, { passive: true });
  addEventListener('pointerup', () => { touching = false; }, { passive: true }); addEventListener('pointercancel', () => { touching = false; }, { passive: true });
  addEventListener('pointermove', e => { if (RM || (e.pointerType !== 'mouse' && !touching)) return; if (e.target.closest && e.target.closest('input,textarea')) return;
    const now = performance.now(); if (now - trailT < 24) return; trailT = now;
    if (parts.filter(p => p.k === 3).length > 40) return;
    for (let i = 0; i < 2; i++) parts.push({ x: e.clientX + (Math.random() - .5) * 8, y: e.clientY + (Math.random() - .5) * 8, vx: (Math.random() - .5) * .6, vy: -.2 - Math.random() * .5, r: 0, vr: 0, s: 10 + Math.random() * 16, life: .9, k: 3 });
    if (!fxOn) { fxOn = true; requestAnimationFrame(fxLoop); } }, { passive: true });
  // микроанимация выбора: карточки, чипы, дни — мягкий «отклик»
  document.addEventListener('click', e => { if (RM) return; const el = e.target.closest('.chip, .day.ok, .mood, .city, .act'); if (!el) return;
    const key = '.' + el.classList[0] + Object.entries(el.dataset).map(([k, v]) => `[data-${k.replace(/[A-Z]/g, m => '-' + m.toLowerCase())}="${CSS.escape(v)}"]`).join('');
    requestAnimationFrame(() => { const n = el.isConnected ? el : $(key); if (!n || !n.animate) return;
      const on = n.classList.contains('on');
      n.animate(on ? [{ transform: 'scale(1)' }, { transform: 'scale(.95)', offset: .3 }, { transform: 'scale(1.025)', offset: .7 }, { transform: 'scale(1)' }] : [{ transform: 'scale(1)' }, { transform: 'scale(.97)', offset: .4 }, { transform: 'scale(1)' }], { duration: on ? 480 : 300, easing: 'cubic-bezier(.3,.7,.3,1)' });
      if (on) { const ck = n.querySelector('.ck'); if (ck && ck.animate) ck.animate([{ boxShadow: '0 0 0 0 rgba(227,38,76,.6)' }, { boxShadow: '0 0 0 12px rgba(227,38,76,0)' }], { duration: 650, easing: 'ease-out' }); } }); });

  // параллакс при прокрутке финала: заголовок и счётчик уходят медленнее, сцена чуть «опускает камеру»
  (function () { const fin = $('[data-screen="final"]'); if (!fin) return; let raf = 0;
    const layers = () => [[$('.final-title', fin), 0.38, 1], [$('.final-line', fin), 0.3, 1], [$(':scope > p.sub', fin), 0.24, 1], [$('#cd'), 0.16, 0], [$('#ticket'), 0.05, 0]];
    const apply = () => { raf = 0; const y = fin.scrollTop;
      if (!RM) layers().forEach(([el, k, fade]) => { if (!el) return; el.style.translate = y > 0 ? `0 ${(y * k).toFixed(1)}px` : ''; if (fade) el.style.opacity = y > 0 ? Math.max(0.15, 1 - y / 420).toFixed(3) : ''; });
      GL.set({ sy: Math.min(1, y / 700) }); };
    fin.addEventListener('scroll', () => { if (!raf) raf = requestAnimationFrame(apply); }, { passive: true });
  })();
  // тихий «щелчок» на нажатие, только если музыка включена
  document.addEventListener('pointerdown', e => { if (window.MUSIC && MUSIC.on && MUSIC.tick && e.target.closest('.btn, .chip, .mood, .city, .act, .day.ok, .pl-want, .pl-arr')) MUSIC.tick(); }, { passive: true });

  // рябь касания на кнопках + «магнит» для мыши
  document.addEventListener('pointerdown', e => { if (RM) return; const b = e.target.closest('.btn, .pl-want, .chip'); if (!b || b.disabled) return;
    const r = b.getBoundingClientRect(), sp = document.createElement('span'); sp.className = 'rip';
    sp.style.cssText = `--rx:${e.clientX - r.left}px;--ry:${e.clientY - r.top}px;--rs:${Math.max(r.width, r.height) * 2.2}px`;
    b.appendChild(sp); setTimeout(() => sp.remove(), 750); }, { passive: true });
  if (!RM && matchMedia('(pointer:fine)').matches) {
    document.addEventListener('pointermove', e => { const b = e.target.closest('.btn-primary'); $$('.btn-primary.mag').forEach(x => { if (x !== b) { x.classList.remove('mag'); x.style.translate = ''; } });
      if (!b || b.classList.contains('btn-no')) return; const r = b.getBoundingClientRect();
      b.classList.add('mag'); b.style.translate = `${((e.clientX - r.left) / r.width - 0.5) * 8}px ${((e.clientY - r.top) / r.height - 0.5) * 6}px`; }, { passive: true });
  }

  // лёгкое зерно
  (function () { const c = document.createElement('canvas'); c.width = c.height = 128; const x = c.getContext('2d'); const d = x.createImageData(128, 128);
    for (let i = 0; i < d.data.length; i += 4) { const v = Math.random() * 255; d.data[i] = d.data[i + 1] = d.data[i + 2] = v; d.data[i + 3] = 255; }
    x.putImageData(d, 0, 0); $('.grain').style.backgroundImage = `url(${c.toDataURL()})`; })();

  // ---------- частицы (canvas) ----------
  const fx = $('#fx'), fc = fx.getContext('2d'); let parts = [], fxOn = false;
  function fxSize() { const d = Math.min(devicePixelRatio || 1, 2); fx.width = innerWidth * d; fx.height = innerHeight * d; fc.setTransform(d, 0, 0, d, 0, 0); }
  addEventListener('resize', fxSize); fxSize();
  function heartPath(s) { fc.beginPath(); fc.moveTo(0, s * .3); fc.bezierCurveTo(-s * .05, s * .1, -s * .5, -s * .05, -s * .5, -s * .35); fc.bezierCurveTo(-s * .5, -s * .65, -s * .1, -s * .7, 0, -s * .42); fc.bezierCurveTo(s * .1, -s * .7, s * .5, -s * .65, s * .5, -s * .35); fc.bezierCurveTo(s * .5, -s * .05, s * .05, s * .1, 0, s * .3); fc.closePath(); }
  function burst(x, y, n = 40, spread = 1) {
    if (RM) n = Math.round(n / 3);
    for (let i = 0; i < n; i++) { const a = Math.random() * Math.PI * 2, v = (2 + Math.random() * 6) * spread;
      parts.push({ x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v - 3, r: Math.random() * 6.28, vr: (Math.random() - .5) * .3, s: 6 + Math.random() * 12, life: 1, k: i % 3, c: ['#e3264c', '#ffb48f', '#fff3ec'][i % 3] }); }
    if (!fxOn) { fxOn = true; requestAnimationFrame(fxLoop); }
  }
  function fxLoop() {
    fc.clearRect(0, 0, innerWidth, innerHeight);
    parts = parts.filter(p => p.life > 0);
    for (const p of parts) { if (p.k === 3) { p.vx *= .965; p.vy = p.vy * .965 + .015; p.x += p.vx; p.y += p.vy; p.life -= .022; fc.globalCompositeOperation = 'lighter'; fc.globalAlpha = Math.max(0, p.life) * .55; fc.drawImage(glow, p.x - p.s / 2, p.y - p.s / 2, p.s, p.s); fc.globalCompositeOperation = 'source-over'; continue; }
      p.vy += .12; p.vx *= .985; p.x += p.vx; p.y += p.vy; p.r += p.vr; p.life -= .012;
      fc.save(); fc.translate(p.x, p.y); fc.rotate(p.r); fc.globalAlpha = Math.max(0, p.life); fc.fillStyle = p.c;
      if (p.k === 0) { heartPath(p.s); fc.fill(); } else if (p.k === 1) { fc.beginPath(); fc.ellipse(0, 0, p.s * .22, p.s * .55, 0, 0, 6.29); fc.fill(); } else { fc.beginPath(); fc.arc(0, 0, p.s * .14, 0, 6.29); fc.fill(); }
      fc.restore(); }
    if (parts.length) requestAnimationFrame(fxLoop); else { fxOn = false; fc.clearRect(0, 0, innerWidth, innerHeight); }
  }

  // ---------- навигация ----------
  const ORDER = ['intro', 'ask', 'yes', 'mood', 'city', 'date', 'act', 'meet', 'wish', 'final'];
  const FIRST = ORDER.indexOf('mood'); // дальше этого «назад» не ведёт
  const WIDE = innerWidth > 760 && innerWidth / innerHeight > 1.15;
  const GLS = {
    intro: { heart: 1, burst: 0, tint: 0, hy: -0.06, hs: 0.95, cam: 0 },
    ask:   { heart: 0, cam: 0.6 },
    later: { heart: 0, cam: 0.5 },
    yes:   { heart: 0, tint: 0.6, cam: 1.2 },
    mood:  { heart: 0, tint: 0.5, cam: 1.5 },
    city:  { heart: 0, tint: 0.3, cam: 1.8 }, date: { heart: 0, tint: 0.45, cam: 2.4 }, act: { heart: 0, tint: 0.3, cam: 3.0 }, meet: { heart: 0, tint: 0.5, cam: 3.3 }, wish: { heart: 0, tint: 0.7, cam: 3.6 },
    final: { heart: 0.85, burst: 0, fill: 1, tint: 1, hy: 0.28, hs: 0.42, cam: 4.2 },
  };
  let cur = 'intro', busy = false;
  function animIn(scr, dir = 1) {
    const chars = $$('.split-c', scr), words = $$('.split-wd', scr);
    const rest = $$(':scope > :not(h1):not(h2):not(.head):not(.hold):not(.emblem), .head > p, .cities > li, .acts > .act, .acts > .sep, .month, .ask-text > :not(h2):not(.emblem):not(p.sub)', scr).filter(e => !e.querySelector('.split-wd') && !e.classList.contains('split-wd') && e.id !== 'ticket' && e.id !== 'cd');
    if (!G || RM) return;
    if (chars.length) G.fromTo(chars, { yPercent: 105 * dir, rotateX: -70 * dir, opacity: 0, filter: 'blur(8px)' }, { yPercent: 0, rotateX: 0, opacity: 1, filter: 'blur(0px)', duration: 1.25, ease: 'expo.out', stagger: { each: 0.03, from: 'start' }, delay: 0.12, clearProps: 'filter' });
    if (words.length) G.fromTo(words, { y: 12 * dir, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out', stagger: 0.014, delay: 0.32, clearProps: 'transform' });
    if (rest.length) G.fromTo(rest, { y: 22 * dir, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'expo.out', stagger: 0.05, delay: 0.42, clearProps: 'transform' });
  }
  // кинематографичный переход: уход с глубиной и смазом, вход — мягкой маской-шторкой, засветка и «наезд» камеры в сцене
  // маяк при смене экрана не исчезает: его линии «перетекают» — либо на то же место нового экрана, либо стекают вдоль контура
  function embGhost(from) {
    const fe = $('.emblem', from); if (!fe || RM) return null; const r = fe.getBoundingClientRect(); if (!r.width) return null;
    const g = fe.cloneNode(true); g.classList.add('emb-ghost'); g.removeAttribute('class'); g.setAttribute('class', 'emblem emb-ghost');
    Object.assign(g.style, { left: r.left + 'px', top: r.top + 'px', width: r.width + 'px', margin: 0 });
    document.body.appendChild(g); fe.style.visibility = 'hidden';
    $$('.ln', g).forEach(p => { p.removeAttribute('pathLength'); let L = 0; try { L = p.getTotalLength(); } catch (e) {} p._L = L; p.style.strokeDasharray = L ? `${L} ${L}` : 'none'; p.style.strokeDashoffset = '0'; p.style.animation = 'none'; });
    g._fe = fe; return g;
  }
  function embLand(g, to) {
    const te = $('.emblem', to); g._fe.style.visibility = '';
    if (te) { // тот же маяк на новом экране: линии плавно переезжают в его позицию, без повторной прорисовки
      to.classList.add('emb-keep'); $$('.ln', te).forEach(p => { p.style.strokeDasharray = 'none'; });
      te.style.visibility = 'hidden';
      requestAnimationFrame(() => { const y0 = +G.getProperty(to, 'y') || 0, r = te.getBoundingClientRect();
        const gr = g.getBoundingClientRect();
        G.to(g, { x: r.left - gr.left, y: r.top - y0 - gr.top, scale: r.width / gr.width, transformOrigin: '0 0', duration: 0.9, ease: 'power3.inOut', onComplete: () => { te.style.visibility = ''; g.remove(); } }); });
    } else { // линии стекают вдоль контура к маяку и гаснут
      $$('.ln', g).forEach((p, i) => G.to(p, { strokeDashoffset: -(p._L || 0), duration: 0.85, ease: 'power2.inOut', delay: i * 0.06 }));
      G.to($$('.beam, .lamp, .sea, .refl', g), { opacity: 0, duration: 0.5, ease: 'power1.out' });
      G.to(g, { opacity: 0, y: -10, duration: 1, ease: 'power2.in', onComplete: () => g.remove() });
    }
  }
  function cine(from, to, dir, done) {
    const sw = { p: dir > 0 ? -1 : 1 };
    // волна-преломление по сцене из точки последнего касания
    if (GL.ok && GL.uv) { const [rx, ry] = GL.uv(lastPt[0], lastPt[1]), rw = { p: 0 }; GL.jump({ rx, ry, rp: 0 });
      G.to(rw, { p: 1, duration: 1.5, ease: 'power1.out', onUpdate: () => GL.jump({ rp: rw.p }) }); }
    else { const r = $('.tapring'); r.style.left = lastPt[0] + 'px'; r.style.top = lastPt[1] + 'px'; r.classList.remove('go'); void r.offsetWidth; r.classList.add('go'); }
    GL.set({ zm: 1, lk: 1 }); setTimeout(() => GL.set({ zm: 0 }), 380); setTimeout(() => GL.set({ lk: 0 }), 650);
    G.to(sw, { p: dir > 0 ? 1 : -1, duration: 1.1, ease: 'power2.inOut', onUpdate: () => GL.jump({ lp: sw.p }) });
    if (!GL.ok) document.documentElement.style.setProperty('--lk', dir), $('.leak').classList.remove('go'), void $('.leak').offsetWidth, $('.leak').classList.add('go');
    const ghost = embGhost(from);
    G.to(from, { opacity: 0, y: -30 * dir, scale: 0.965, filter: 'blur(8px)', duration: 0.48, ease: 'power2.in', onComplete: () => {
      G.set(from, { clearProps: 'all' });
      done(); if (ghost) embLand(ghost, to);
      G.fromTo(to, { y: 26 * dir, scale: 1.015 }, { y: 0, scale: 1, duration: 1.05, ease: 'expo.out', clearProps: 'transform' });
      if (to.animate) to.animate([{ clipPath: dir > 0 ? 'inset(100% 0 0 0)' : 'inset(0 0 100% 0)' }, { clipPath: 'inset(0 0 0 0)' }], { duration: 900, easing: 'cubic-bezier(.22,.8,.24,1)' });
    } });
  }
  function go(name, opt = {}) {
    if ((name === cur && !opt.force) || busy) return;
    const from = $(`[data-screen="${cur}"]`), to = $(`[data-screen="${name}"]`);
    const swap = () => {
      from.classList.remove('is-active', 'emb-keep'); from.style.opacity = ''; from.style.filter = ''; from.style.transform = '';
      to.classList.add('is-active'); to.scrollTop = 0;
      cur = name; st.screen = name; save(); document.body.dataset.s = name;
      if (name === 'act') renderActs(); if (name === 'date') renderCal(); if (name === 'final') renderFinal(); if (name === 'mood') renderMood(); if (name === 'meet') renderMeet();
      fitTitles(to); placeEmblem(to); animIn(to, dir); busy = false;
    };
    const dir = ORDER.indexOf(name) >= ORDER.indexOf(cur) || name === 'later' ? 1 : -1;
    GL.set(GLS[name]); GL.set({ fw: name === 'final' && !RM ? 1 : 0, sy: 0 });
    clearInterval(fwTimer); if (name === 'final' && !GL.ok && !RM) fwTimer = setInterval(fwFallback, 3600);
    if (opt.instant || !G || RM) { swap(); return; }
    busy = true;
    if (dir > 0) streak();
    cine(from, to, dir, swap);
  }
  function streak() {
    GL.set({ streak: 1 }); setTimeout(() => GL.set({ streak: 0 }), 280);
    if (G && !RM) { const el = $('.streak i'); G.timeline().set(el, { left: '-70%', opacity: 0, scaleY: 1 })
      .to(el, { left: '110%', duration: 0.8, ease: 'power3.inOut' }, 0).to(el, { opacity: 1, duration: 0.15 }, 0)
      .to(el, { scaleY: 5, duration: 0.4, yoyo: true, repeat: 1, ease: 'sine.inOut' }, 0).to(el, { opacity: 0, duration: 0.2 }, 0.6); }
  }
  $$('[data-go]').forEach(b => b.addEventListener('click', () => go(b.dataset.go)));
  $$('[data-back]').forEach(b => b.addEventListener('click', () => { const i = ORDER.indexOf(cur); go(ORDER[Math.max(FIRST, i - 1)]); }));

  // ---------- 1. держи сердце ----------
  (function () {
    const btn = $('#hold'), bar = $('#holdBar'); let holding = false, p = 0, done = false, last = 0;
    const down = e => { if (done) return; e.preventDefault(); holding = true; GL.set({ beat: 1 }); };
    const up = () => { holding = false; GL.set({ beat: 0 }); };
    btn.addEventListener('pointerdown', down); addEventListener('pointerup', up); addEventListener('pointercancel', up); btn.addEventListener('contextmenu', e => e.preventDefault());
    btn.addEventListener('keydown', e => { if (e.key === ' ' || e.key === 'Enter') down(e); }); btn.addEventListener('keyup', up);
    function tick(now) {
      const dt = Math.min(0.12, (now - (last || now)) / 1000); last = now;
      p += holding ? dt / 2.2 : -dt / 1.6; p = Math.max(0, Math.min(1, p));
      bar.style.transform = `scaleX(${p})`; GL.set({ fill: p }); GL.state.fill = GL.state.fill + (p - GL.state.fill) * 0.5;
      document.querySelector('.fb-heart').style.filter = `saturate(${0.6 + p * 0.8}) brightness(${0.7 + p * 0.6}) drop-shadow(0 20px 50px rgba(255,60,80,${0.3 + p * 0.5}))`;
      if (holding && navigator.vibrate && Math.random() < dt * 2.5) navigator.vibrate(6);
      if (p >= 1 && !done) { done = true; holding = false; if (navigator.vibrate) navigator.vibrate([30, 40, 60]);
        const r = btn.getBoundingClientRect(); GL.set({ burst: 1, beat: 0 });
        setTimeout(() => burst(r.left + r.width / 2, r.top + r.height / 2, 60, 1.2), 250);
        setTimeout(() => go('ask'), 1300); return; }
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
      GL.set({ beat: 1 }); const r = yes.getBoundingClientRect(); burst(r.left + r.width / 2, r.top, 50);
      if (navigator.vibrate) navigator.vibrate([20, 30, 20]);
      resetNo(); setTimeout(() => { GL.set({ beat: 0 }); go('yes'); }, 1000);
    });
    $('#laterCoffee').addEventListener('click', () => { if (!st.acts.includes(C.short.id)) st.acts.unshift(C.short.id); save(); go('city'); });
  })();

  // ---------- настроение ----------
  const MI = {
    coffee: '<svg class="mi" viewBox="0 0 52 52"><path d="M12 22h22v10a9 9 0 0 1-9 9h-4a9 9 0 0 1-9-9V22z"/><path d="M34 25h3a4 4 0 0 1 0 8h-3"/><path d="M19 17q-2-3 0-6M25 17q-2-3 0-6" opacity=".6"/><path d="M9 44h30"/></svg>',
    walk: '<svg class="mi" viewBox="0 0 52 52"><path d="M6 40q10-4 20-2t20-4"/><path d="M6 46q12-3 22-1t18-3" opacity=".5"/><circle cx="36" cy="14" r="5"/><path d="M14 30l6-10 6 6 6-8 8 12" opacity=".8"/></svg>',
    dinner: '<svg class="mi" viewBox="0 0 52 52"><path d="M26 8v6"/><path d="M23 14h6l-1 6h-4z"/><circle cx="26" cy="32" r="10"/><circle cx="26" cy="32" r="5" opacity=".5"/><path d="M10 22v20M8 22v6a2 2 0 0 0 4 0v-6M42 22c-3 2-3 8 0 10v10"/></svg>',
    own: '<svg class="mi" viewBox="0 0 52 52"><path d="M12 40l3-9L34 12a3 3 0 0 1 5 5L20 36z"/><path d="M31 15l5 5" opacity=".6"/><path d="M10 45h18" opacity=".5"/><path d="M38 34q4 0 4-4M42 40q2 0 2-2" opacity=".6"/></svg>',
  };
  const clip = (v, n) => String(v || '').replace(/[\u0000-\u0008\u000b-\u001f]/g, '').slice(0, n);
  const one = v => String(v || '').replace(/\s+/g, ' ').trim();
  function renderMood() {
    $('#moods').innerHTML = ['coffee', 'walk', 'dinner', 'own'].map(k => { const on = st.mood.includes(k);
      return `<button class="mood${on ? ' on' : ''}" data-m="${k}" aria-pressed="${on}">${MI[k]}<span><b>${esc(X.moods[k])}</b><small>${esc(X.moodNotes[k])}</small></span><span class="ck"><svg><use href="#i-check"/></svg></span></button>`; }).join('');
    const ob = $('#moodOwnBox'), oi = $('#moodOwn'); ob.hidden = !st.mood.includes('own'); if (oi.value !== st.moodOwn) oi.value = st.moodOwn;
    $('#parts').innerHTML = ['day', 'evening', 'any'].map(k => `<button class="chip${st.part === k ? ' on' : ''}" role="radio" data-p="${k}" aria-checked="${st.part === k}">${esc(X.parts[k])}</button>`).join('');
  }
  $('#moods').addEventListener('click', e => { const b = e.target.closest('.mood'); if (!b) return; const k = b.dataset.m;
    st.mood = st.mood.includes(k) ? st.mood.filter(x => x !== k) : st.mood.concat(k); save(); renderMood();
    if (G && !RM && st.mood.includes(k)) G.fromTo($(`.mood[data-m="${k}"] .ck`), { scale: 0.6 }, { scale: 1, duration: 0.6, ease: 'elastic.out(1,.5)' });
    if (k === 'own' && st.mood.includes('own')) setTimeout(() => $('#moodOwn').focus({ preventScroll: false }), 60); });
  $('#moodOwn').placeholder = X.moodOwnPh;
  $('#moodOwn').addEventListener('input', e => { st.moodOwn = clip(e.target.value, 160); save(); });
  $('#parts').addEventListener('click', e => { const b = e.target.closest('.chip'); if (!b) return; st.part = st.part === b.dataset.p ? null : b.dataset.p; save(); renderMood(); });
  $('#moodNext').addEventListener('click', () => go('city'));

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
    const sug = t => t !== 'any' && ((st.part === 'day' && t < '16:00') || (st.part === 'evening' && t >= '16:00'));
    $('#times').innerHTML = times.map(t => `<button class="chip${t === st.time ? ' on' : ''}${sug(t) ? ' sug' : ''}" data-t="${t}" aria-pressed="${t === st.time}">${t === 'any' ? esc(X.anyTime) : t}</button>`).join('');
    dayWeather($('#dateWx'), true);
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
  let listMode = RM, dI = 0;
  const ownRow = () => `<div class="act own${st.actOwn.trim() ? ' on' : ''}" data-id="own"><h4>${esc(X.actOwn)}</h4><span class="ck"><svg><use href="#i-check"/></svg></span><p>${esc(X.actOwnNote)}</p>
      <label class="sr" for="actOwn">${esc(X.actOwn)}</label><input id="actOwn" type="text" maxlength="120" autocomplete="off" placeholder="${esc(X.actOwnPh)}" value="${esc(st.actOwn)}"></div>`;
  function wireOwn() { const ai = $('#actOwn'); if (ai) ai.oninput = () => { st.actOwn = clip(ai.value, 120); save(); const on = !!st.actOwn.trim(); ai.closest('.act').classList.toggle('on', on); actState(); }; }
  function actState() { $('#actNext').disabled = !hasActs(); const n = st.acts.length + (one(st.actOwn) ? 1 : 0), dc = $('#dCount'); if (dc) dc.textContent = `${X.deckCount}: ${n}`;
    $$('#dots i').forEach(d => d.classList.toggle('sel', d.dataset.id === '_last' ? (st.acts.some(id => id === C.short.id || C.extras.some(x => x.id === id)) || !!one(st.actOwn)) : st.acts.includes(d.dataset.id))); }
  function renderActs() {
    const c = city(); if (!c) return;
    $('#actCity').textContent = c.name;
    const mm = st.mood.filter(m => m !== 'own');
    const any = !mm.length && (!st.part || st.part === 'any');
    const fit = a => (!mm.length || (a.mood || []).some(m => mm.includes(m))) && (!st.part || st.part === 'any' || !a.part || a.part === 'any' || a.part === st.part);
    let good = c.acts.filter(fit), rest = c.acts.filter(a => !fit(a));
    if (!good.length) { good = rest; rest = []; }
    $('#actSubTxt').textContent = listMode ? `${c.name} · ${X.actSub}` : `${c.name} · ${X.deckSub}`;
    $('#viewToggle span').textContent = listMode ? X.deckShow : X.listShow;
    $('#deck').hidden = listMode; $('#acts').hidden = !listMode;
    if (listMode) {
      $('#deckTrack').innerHTML = '';
      const showRest = any || st.acts.some(id => rest.some(a => a.id === id)) || $('#acts').dataset.more === c.id;
      $('#acts').innerHTML = actRow(C.short, 'short') + ownRow() + (any ? '' : `<div class="grp">${esc(X.actFit)}</div>`) + good.map(a => actRow(a)).join('')
        + (rest.length ? (showRest ? (any ? '' : `<div class="grp">${esc(X.actRest)}</div>`) + rest.map(a => actRow(a)).join('') : `<button class="btn btn-quiet more" id="actMore" type="button">${esc(X.actRestShow)} · ${rest.length}</button>`) : '')
        + `<div class="sep">${esc(X.actMore)}</div>` + C.extras.map(a => actRow(a, 'extra')).join('');
      const mb = $('#actMore'); if (mb) mb.onclick = e => { e.stopPropagation(); $('#acts').dataset.more = c.id; renderActs(); };
    } else {
      $('#acts').innerHTML = '';
      const list = good.map(a => [a, !any]).concat(rest.map(a => [a, false]));
      $('#deckTrack').innerHTML = list.map(([a, f], i) => { const on = st.acts.includes(a.id);
        return `<article class="slide" data-id="${a.id}" aria-roledescription="слайд" aria-label="${i + 1} из ${list.length + 1}">
          <div class="pl-stage">${ART.svg(a.id)}${i ? `<button class="pl-arr prev" type="button" aria-label="Предыдущее место">${ico('back')}</button>` : ''}<button class="pl-arr next" type="button" aria-label="Следующее место">${ico('arrow')}</button></div>
          ${f ? `<span class="pl-tag">${esc(X.deckFit)}</span>` : ''}<h3 class="pl-name">${esc(a.title)}</h3><p class="pl-cap">${esc(a.note)}</p>
          <div class="pl-meta">${a.addr ? `<span>${ico('pin')}${esc(a.addr)}</span>` : ''}${a.when ? `<span>${ico('clock')}${esc(a.when)}</span>` : ''}${a.link ? `<a href="${esc(a.link)}" target="_blank" rel="noopener noreferrer">Подробнее ${ico('ext')}</a>` : ''}</div>
          <button class="pl-want${on ? ' on' : ''}" type="button" aria-pressed="${on}" data-id="${a.id}">${esc(on ? X.wanted : X.want)}</button></article>`; }).join('')
        + `<article class="slide last" data-id="_last" aria-label="${list.length + 1} из ${list.length + 1}"><button class="pl-arr prev solo" type="button" aria-label="Предыдущее место">${ico('back')}</button><h3 class="pl-name">${esc(X.deckLast)}</h3><p class="pl-cap">${esc(X.deckLastSub)}</p>
          <div class="acts">${actRow(C.short, 'short')}${ownRow()}${C.extras.map(a => actRow(a, 'extra')).join('')}</div></article>`;
      $('#dots').innerHTML = list.map(([a]) => `<i data-id="${a.id}"></i>`).join('') + '<i data-id="_last" class="lastdot"></i>';
      dI = Math.min(dI, list.length); deckShow(dI, true);
    }
    wireOwn(); actState(); fitTitles($('[data-screen="act"]'));
  }
  // ---------- прорисовка линий: всегда заканчивается целым рисунком; при свайпе следует за пальцем ----------
  const DT = 1150, DDUR = Math.min(650, DT * 0.6);
  function drawDone(sl) { if (!sl) return; cancelAnimationFrame(sl._raf); clearTimeout(sl._to); sl.classList.remove('drawing', 'scrub'); sl.classList.add('drawn'); sl._p = 0;
    $$('.pl-art .ln', sl).forEach(p => { p.style.strokeDasharray = 'none'; p.style.strokeDashoffset = '0'; }); }
  function prepDraw(sl) {
    if (sl._L) return true;
    const ps = $$('.pl-art .ln', sl); if (!ps.length) return false;
    const L = ps.map(p => { let l = 0; try { l = p.getTotalLength(); } catch (e) {} return l > 0 ? l + 1 : 0; });
    if (L.some(l => !l)) return false;
    ps.forEach((p, i) => { p.style.strokeDasharray = `${L[i]} ${L[i]}`; p.style.strokeDashoffset = `${L[i]}`; });
    sl._ps = ps; sl._L = L; return true;
  }
  function drawAt(sl, t) { const ps = sl._ps, L = sl._L, gap = ps.length > 1 ? (DT - DDUR) / (ps.length - 1) : 0; let done = true;
    ps.forEach((p, i) => { const k = Math.min(1, Math.max(0, (t - i * gap) / DDUR)); p.style.strokeDashoffset = `${L[i] * Math.pow(1 - k, 3)}`; if (k < 1) done = false; });
    return done; }
  function drawScrub(sl, p) { // рисунок соседнего слайда проявляется синхронно со свайпом
    if (RM || sl.classList.contains('drawn') || sl.classList.contains('drawing') || !prepDraw(sl)) return;
    sl._p = p; sl.classList.add('scrub'); drawAt(sl, p * DT * 0.7); }
  function drawSlide(sl) {
    if (!sl || sl.classList.contains('drawn') || sl.classList.contains('drawing')) return;
    if (RM || !prepDraw(sl)) return drawDone(sl);
    sl.classList.remove('scrub'); sl.classList.add('drawing');
    const t0 = performance.now() - (sl._p || 0) * DT * 0.7;
    const f = now => { if (drawAt(sl, now - t0)) drawDone(sl); else sl._raf = requestAnimationFrame(f); };
    sl._raf = requestAnimationFrame(f); sl._to = setTimeout(() => drawDone(sl), DT + 900); // страховка, если кадры анимации не пришли
  }
  // ---------- колода: физика свайпа с инерцией и глубиной ----------
  let dX = 0, dTw = null;
  const dW = () => $('#deckVp').clientWidth || innerWidth;
  function deckDepth(x) { const w = dW();
    $$('#deckTrack .slide').forEach((s, k) => { const off = (k * w + x) / w, a = Math.abs(off);
      if (a < 0.002 || a > 1.6) { if (s._d) { s._d = 0; s.style.transform = ''; s.style.opacity = ''; } return; }
      s._d = 1; s.style.transform = `perspective(1100px) rotateY(${(-off * 14).toFixed(2)}deg) scale(${(1 - Math.min(a, 1) * 0.09).toFixed(4)})`;
      s.style.opacity = (1 - Math.min(a, 1) * 0.6).toFixed(3);
      if (a < 1) drawScrub(s, 1 - a); }); }
  function setTrack(x) { dX = x; $('#deckTrack').style.transform = `translate3d(${x.toFixed(2)}px,0,0)`; if (!RM) deckDepth(x); }
  function deckShow(i, instant, v = 0) {
    const sl = $$('#deckTrack .slide'); if (!sl.length) return;
    sl.forEach(s => { if (s.classList.contains('drawing')) drawDone(s); }); // быстрый тап: предыдущий рисунок сразу дорисован
    dI = Math.max(0, Math.min(sl.length - 1, i));
    const x = -dI * dW(); if (dTw) { dTw.kill(); dTw = null; }
    if (instant || !G || RM) setTrack(x);
    else { const o = { x: dX }, d = Math.abs(x - dX), sp = Math.abs(v);
      const dur = Math.max(0.38, Math.min(0.85, sp > 0.2 ? d / (sp * 1000) * 2.2 : 0.75));
      dTw = G.to(o, { x, duration: dur, ease: sp > 0.2 ? 'power2.out' : 'power3.out', onUpdate: () => setTrack(o.x), onComplete: () => { dTw = null; setTrack(x); } }); }
    sl.forEach((s, k) => { s.classList.toggle('cur', k === dI); s.setAttribute('aria-hidden', k !== dI); s.inert = k !== dI; });
    $$('#dots i').forEach((d, k) => d.classList.toggle('cur', k === dI));
    $('#dPos').textContent = `${dI + 1} / ${sl.length}`;
    GL.set({ cam: 3.0 + dI * 0.06 });
    if (cur === 'act') drawSlide(sl[dI]);
  }
  $('#dots').addEventListener('click', e => { const d = e.target.closest('i'); if (d) deckShow($$('#dots i').indexOf(d)); });
  $('#viewToggle').addEventListener('click', () => { listMode = !listMode; renderActs(); });
  $('#deckTrack').addEventListener('click', e => {
    const ar = e.target.closest('.pl-arr'); if (ar) { deckShow(dI + (ar.classList.contains('prev') ? -1 : 1)); return; }
    const w = e.target.closest('.pl-want');
    if (w) { const id = w.dataset.id; st.acts = st.acts.includes(id) ? st.acts.filter(x => x !== id) : st.acts.concat(id); save();
      const on = st.acts.includes(id); w.classList.toggle('on', on); w.setAttribute('aria-pressed', on); w.textContent = on ? X.wanted : X.want; actState();
      if (on) { const r = w.getBoundingClientRect(); burst(r.left + r.width / 2, r.top, 14, 0.5); if (G && !RM) G.fromTo(w, { scale: 0.92 }, { scale: 1, duration: 0.6, ease: 'elastic.out(1,.5)' }); }
      return; }
    const st0 = e.target.closest('.pl-stage'); if (st0) { const sl = st0.closest('.slide'); if (sl.classList.contains('drawing')) drawDone(sl); return; }
    actsClick(e); });
  (function () { // свайп: скорость пальца, проекция инерции, резинка на краях
    const vp = $('#deckVp'); let x0 = null, y0 = 0, dx = 0, drag = false, base = 0, i0 = 0, smp = [];
    vp.addEventListener('pointerdown', e => { if (e.pointerType === 'mouse' && e.button) return; if (e.target.closest('input')) return; x0 = e.clientX; y0 = e.clientY; dx = 0; drag = false; smp = [[performance.now(), e.clientX]]; });
    vp.addEventListener('pointermove', e => { if (x0 == null) return; dx = e.clientX - x0;
      if (!drag && Math.abs(dx) > 10 && Math.abs(dx) > Math.abs(e.clientY - y0)) { drag = true; if (dTw) { dTw.kill(); dTw = null; } base = dX; i0 = dI; }
      if (!drag) return;
      const now = performance.now(); smp.push([now, e.clientX]); while (smp.length > 2 && now - smp[0][0] > 110) smp.shift();
      const w = dW(), n = $$('#deckTrack .slide').length, min = -(n - 1) * w; let x = base + dx;
      if (x > 0) x *= 0.32; else if (x < min) x = min + (x - min) * 0.32;
      setTrack(x); });
    const end = () => { if (x0 == null) return; x0 = null; if (!drag) return;
      const a = smp[0], b = smp[smp.length - 1], v = b && a && b[0] > a[0] ? (b[1] - a[1]) / (b[0] - a[0]) : 0, w = dW();
      let t = Math.round(-(dX + v * 220) / w); t = Math.max(i0 - 1, Math.min(i0 + 1, t));
      if (t === i0 && Math.abs(dx) > w * 0.22) t = i0 + (dx < 0 ? 1 : -1);
      deckShow(t, false, v);
      vp.addEventListener('click', ev => { ev.stopPropagation(); ev.preventDefault(); }, { capture: true, once: true }); setTimeout(() => { drag = false; }, 0); };
    vp.addEventListener('pointerup', end); vp.addEventListener('pointercancel', () => { if (x0 != null) { x0 = null; if (drag) deckShow(dI); } });
    addEventListener('keydown', e => { if (cur !== 'act' || listMode || e.target.closest('input,textarea')) return; if (e.key === 'ArrowRight') deckShow(dI + 1); if (e.key === 'ArrowLeft') deckShow(dI - 1); });
    if (window.ResizeObserver) new ResizeObserver(() => { if (x0 == null && !dTw && !listMode) setTrack(-dI * dW()); }).observe(vp);
  })();
  const hasActs = () => st.acts.length > 0 || !!one(st.actOwn);
  function toggleAct(el) { const id = el.dataset.id; st.acts = st.acts.includes(id) ? st.acts.filter(x => x !== id) : st.acts.concat(id); save();
    const on = st.acts.includes(id); el.classList.toggle('on', on); el.setAttribute('aria-checked', on); actState();
    if (on && G && !RM) G.fromTo(el.querySelector('.ck'), { scale: 0.6 }, { scale: 1, duration: 0.6, ease: 'elastic.out(1,.5)' }); }
  function actsClick(e) { if (e.target.closest('a')) return; const el = e.target.closest('.act'); if (!el) return; if (el.dataset.id === 'own') { if (!e.target.closest('input')) $('#actOwn').focus(); return; } toggleAct(el); }
  $('#acts').addEventListener('click', actsClick);
  $('#acts').addEventListener('keydown', e => { if ((e.key === ' ' || e.key === 'Enter') && e.target.classList.contains('act')) { e.preventDefault(); toggleAct(e.target); } });
  $('#actNext').addEventListener('click', () => { if (hasActs()) go('meet'); });

  // ---------- где встретимся ----------
  const MEI = {
    pickup: '<svg class="mi" viewBox="0 0 52 52"><path d="M10 26L26 12l16 14"/><path d="M15 23v18h22V23"/><path d="M23 41v-9h6v9" opacity=".6"/></svg>',
    there: '<svg class="mi" viewBox="0 0 52 52"><path d="M26 44s-12-12.5-12-21a12 12 0 0 1 24 0c0 8.5-12 21-12 21z"/><circle cx="26" cy="23" r="4.5" opacity=".6"/></svg>',
    other: '<svg class="mi" viewBox="0 0 52 52"><path d="M14 44V10"/><path d="M14 12h22l-5 6 5 6H14" opacity=".8"/><path d="M8 44h16" opacity=".5"/></svg>',
    chat: '<svg class="mi" viewBox="0 0 52 52"><path d="M9 12h34v20H20l-9 8V12z"/><path d="M17 20h18M17 25h11" opacity=".6"/></svg>',
  };
  function renderMeet() {
    $('#meets').innerHTML = ['pickup', 'there', 'other', 'chat'].map(k => { const on = st.meet === k, m = X.meet[k];
      return `<button class="mood${on ? ' on' : ''}" data-k="${k}" role="radio" aria-checked="${on}">${MEI[k]}<span><b>${esc(m.t)}</b><small>${esc(m.s)}</small></span><span class="ck"><svg><use href="#i-check"/></svg></span></button>`; }).join('');
    const b = $('#meetOtherBox'), i = $('#meetOther'); b.hidden = st.meet !== 'other'; if (i.value !== st.meetPlace) i.value = st.meetPlace;
  }
  $('#meetOther').placeholder = X.meetOtherPh;
  $('#meets').addEventListener('click', e => { const b = e.target.closest('.mood'); if (!b) return; const k = b.dataset.k;
    st.meet = st.meet === k ? null : k; save(); renderMeet();
    if (G && !RM && st.meet === k) G.fromTo($(`#meets .mood[data-k="${k}"] .ck`), { scale: 0.6 }, { scale: 1, duration: 0.6, ease: 'elastic.out(1,.5)' });
    if (st.meet === 'other') setTimeout(() => $('#meetOther').focus(), 60); });
  $('#meetOther').addEventListener('input', e => { st.meetPlace = clip(e.target.value, 120); save(); });
  $('#meetNext').addEventListener('click', () => go('wish'));
  function meetTxt(forMsg) { const k = st.meet; if (!k) return '';
    if (k === 'other') { const p = one(st.meetPlace); return p ? p : (forMsg ? 'другое место, напишу здесь' : X.meet.other.t); }
    return forMsg ? X.meet[k].msg : X.meetTicket[k]; }

  // ---------- пожелание ----------
  const wish = $('#wish'); wish.value = st.wish || '';
  wish.addEventListener('input', () => { st.wish = wish.value; save(); });
  $('#chips').innerHTML = X.wishChips.map(c => `<button class="chip" data-c="${esc(c)}">${esc(c)}</button>`).join('');
  $('#chips').addEventListener('click', e => { const b = e.target.closest('.chip'); if (!b || b.classList.contains('on')) return; wish.value = (wish.value.trim() ? wish.value.trim() + '\n' : '') + b.dataset.c; st.wish = wish.value; save(); b.classList.add('on'); });
  $('#wishNext').addEventListener('click', () => { const r = $('#wishNext').getBoundingClientRect(); burst(r.left + r.width / 2, r.top, 40); go('final'); });

  // ---------- финал ----------
  function fmtDate(s) { const [y, m, d] = s.split('-').map(Number); const w = new Date(y, m - 1, d).getDay(); return `${d} ${MONG[m - 1]} (${DOW[w]})`; }
  const moodTxt = () => [st.mood.filter(k => k !== 'own').map(k => X.moods[k].toLowerCase()).join(', '), st.part && st.part !== 'any' ? X.parts[st.part].toLowerCase() : ''].filter(Boolean).join(' · ');
  const timeTxt = () => st.time === 'any' ? X.anyTime.toLowerCase() : (st.time || '—');
  const chosen = () => allActs().filter(a => st.acts.includes(a.id)).concat(one(st.actOwn) ? [{ id: 'own', title: `${X.actOwn}: ${one(st.actOwn)}`, addr: '' }] : []);
  function message() {
    const c = city(), acts = chosen(), many = st.dates.length > 1;
    const mo = one(st.moodOwn), me = meetTxt(true);
    return [`${C.from.name}, привет, это ${C.her.name} 🙂`, 'Давай встретимся.', '',
      `📍 Город: ${c ? c.name : '—'}`, ...(moodTxt() ? [`🌙 Настроение: ${moodTxt()}`] : []), ...(st.mood.includes('own') && mo ? [`💬 Хочется: ${mo}`] : []), `📅 ${many ? 'Подходят дни' : 'Когда'}: ${st.dates.map(fmtDate).join(', ') || '—'}`, `🕐 Время: ${timeTxt()}`,
      '✨ Чем займёмся:', ...acts.map(a => `  • ${a.title}${a.addr && a.addr !== 'Где скажешь' ? ' — ' + a.addr : ''}`),
      ...(me ? [`🤝 Встреча: ${me}`] : []),
      '', `💭 Пожелание: ${st.wish && st.wish.trim() ? st.wish.trim() : '—'}`].join('\n');
  }
  let cdTimer, cdT0;
  function renderFinal() {
    const c = city(), acts = chosen(), d0 = st.dates[0];
    $('#ticket').innerHTML = `<div class="tk-head"><span>${esc(C.her.name)} · ${esc(C.from.name)}</span><span>${d0 ? d0.split('-').reverse().join('.') : ''}${st.time && st.time !== 'any' ? ' · ' + st.time : ''}</span></div>
      <dl><dt>Где</dt><dd>${esc(c ? c.name : '—')}</dd>${moodTxt() ? `<dt>${esc(X.moodLabel)}</dt><dd>${esc(moodTxt())}</dd>` : ''}
      <dt>${st.dates.length > 1 ? 'Дни' : 'Когда'}</dt><dd>${st.dates.map(d => esc(fmtDate(d))).join('<br>') || '—'}<br><span style="color:var(--mute)">${esc(timeTxt())}</span></dd>
${st.mood.includes('own') && one(st.moodOwn) ? `<dt>${esc(X.moodOwnLabel)}</dt><dd>${esc(one(st.moodOwn))}</dd>` : ''}
      <dt>Планы</dt><dd>${acts.map(a => esc(a.title)).join('<br>') || '—'}</dd>${meetTxt() ? `<dt>${esc(X.meetLabel)}</dt><dd>${esc(meetTxt())}</dd>` : ''}
      <dt>От тебя</dt><dd>${st.wish && st.wish.trim() ? esc(st.wish.trim()).replace(/\n/g, '<br>') : '—'}</dd></dl>
      <div class="tk-cal"><button class="btn btn-quiet" id="calIcs" type="button">${ico('cal')}<span>${esc(X.calAdd)}</span></button><a class="btn btn-quiet" id="calG" target="_blank" rel="noopener">${esc(X.calGoogle)}</a></div>`;
    renderDetails();
    const msg = message(), tg = $('#sendTg');
    tg.querySelector('span').textContent = X.sendTg; tg.href = tgUrl(msg);
    tg.onclick = e => { copy(true); if (!nick || /MURAD_NICK_HERE/.test(nick)) e.preventDefault(); };
    const vk = $('#sendVk'); if (C.VK_ID) { vk.hidden = false; vk.textContent = X.sendVk; vk.href = `https://vk.me/${encodeURIComponent(C.VK_ID)}`; vk.onclick = () => copy(); }
    $('#copy span').textContent = X.copy;
    const sh = $('#share'); if (navigator.share) { sh.hidden = false; sh.textContent = X.share; sh.onclick = () => navigator.share({ text: msg }).catch(() => {}); }
    $('#edit').textContent = X.edit;
    clearInterval(cdTimer); clearTimeout(cdT0);
    const target = d0 ? new Date(`${d0}T${st.time && st.time !== 'any' ? st.time : st.part === 'evening' ? '17:00' : '12:00'}:00${C.tz}`) : null;
    const cd = $('#cd');
    // счётчик с перекатывающимися цифрами
    const roll = (cell, d, anim) => { const old = [...cell.children].filter(x => !x.classList.contains('out')).pop();
      if (old && old.textContent === d) return; const nx = document.createElement('span'); nx.className = 'dgv'; nx.textContent = d;
      if (old) { if (anim && !RM) { old.classList.add('out'); nx.classList.add('in'); setTimeout(() => old.remove(), 600); } else old.remove(); }
      cell.appendChild(nx); };
    let shape = '';
    function upd(first) { if (!target) { cd.innerHTML = ''; return; } const s = Math.max(0, Math.floor((target - Date.now()) / 1000));
      const v = [Math.floor(s / 86400), Math.floor(s % 86400 / 3600), Math.floor(s % 3600 / 60), s % 60].map(n => String(n).padStart(2, '0'));
      const sh = v.map(x => x.length).join();
      if (sh !== shape) { shape = sh; cd.innerHTML = v.map((n, i) => `<div><b aria-hidden="true">${'<span class="dg"></span>'.repeat(n.length)}</b><small>${['дней', 'часов', 'минут', 'секунд'][i]}</small></div>`).join('<i>:</i>'); }
      cd.setAttribute('aria-label', v.join(':'));
      const cells = $$('.dg', cd), ds = v.join('').split('');
      cells.forEach((c, k) => { if (first && !RM && G) { roll(c, String((+ds[k] + 7) % 10), false);
          for (let j = 1; j <= 5; j++) setTimeout(() => roll(c, j < 5 ? String((+ds[k] + 7 + j) % 10) : ds[k], true), 650 + k * 45 + j * 95); }
        else roll(c, ds[k], true); }); }
    upd(true); clearTimeout(cdT0); cdT0 = setTimeout(() => { clearInterval(cdTimer); cdTimer = setInterval(upd, 1000); }, 1400);
    // билет «печатается»: раскрытие сверху вниз со сканирующей линией
    const tk = $('#ticket');
    if (G && !RM) { tk.classList.remove('printing'); void tk.offsetWidth; tk.classList.add('printing'); setTimeout(() => tk.classList.remove('printing'), 2400);
      G.fromTo(tk, { clipPath: 'inset(0% 0% 100% 0% round 16px)', rotateX: -16, y: -8, transformPerspective: 900, transformOrigin: '50% 0%' }, { clipPath: 'inset(0% 0% 0% 0% round 16px)', rotateX: 0, y: 0, duration: 1.5, ease: 'power3.out', delay: 0.6, clearProps: 'clipPath,transform' });
      G.fromTo($$('.tk-head, dt, dd, .tk-cal', tk), { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', stagger: 0.06, delay: 0.85, clearProps: 'transform,opacity' }); }
    renderDaisy();
  }
  // ---------- детали дня: карта, погода, календарь ----------
  function mainPlace() { const c = city(); const a = chosen().find(x => x.ll); return a ? { name: a.title, addr: a.addr, ll: a.ll, exact: true } : c ? { name: c.name, addr: X.mapVague, ll: c.ll, exact: false } : null; }
  function mapSvg(seed) { // стилизованная «карта»: сетка, пара улиц, берег, пульсирующая метка
    let h = 0; for (const ch of String(seed)) h = (h * 31 + ch.charCodeAt(0)) >>> 0; const r = () => ((h = (h * 1664525 + 1013904223) >>> 0) / 4294967296);
    const roads = Array.from({ length: 4 }, () => { const y1 = 20 + r() * 110, y2 = 20 + r() * 110; return `<path class="road" d="M-10 ${y1.toFixed(0)}C120 ${(y1 + (r() - .5) * 60).toFixed(0)} 200 ${(y2 + (r() - .5) * 60).toFixed(0)} 410 ${y2.toFixed(0)}"/>`; }).join('')
      + Array.from({ length: 3 }, () => { const x = 40 + r() * 320; return `<path class="road" d="M${x.toFixed(0)} -10Q${(x + (r() - .5) * 80).toFixed(0)} 75 ${(x + (r() - .5) * 60).toFixed(0)} 160"/>`; }).join('');
    const cy = 120 + r() * 20;
    return `<svg viewBox="0 0 400 150" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs><pattern id="mg" width="20" height="20" patternUnits="userSpaceOnUse"><path class="grid" d="M20 0H0V20" fill="none"/></pattern></defs>
      <rect width="400" height="150" fill="url(#mg)"/>${roads}<path class="coast" d="M-10 160V${cy.toFixed(0)}C60 ${(cy - 14).toFixed(0)} 110 ${(cy + 8).toFixed(0)} 170 ${(cy - 6).toFixed(0)}S300 ${(cy + 10).toFixed(0)} 410 ${(cy - 8).toFixed(0)}V160Z"/>
      <circle class="ring" cx="200" cy="66" r="14"/><circle class="ring r2" cx="200" cy="66" r="14"/><path class="pin" d="M200 78s-10-10.5-10-18a10 10 0 0 1 20 0c0 7.5-10 18-10 18z"/><circle cx="200" cy="60" r="3.4" fill="#fff3ec"/></svg>`;
  }
  function renderDetails() {
    const pl = mainPlace(), mc = $('#mapCard');
    if (pl) { const m = DAY.maps(pl.ll[0], pl.ll[1], pl.exact ? pl.name : pl.name);
      mc.innerHTML = `<h3>${esc(X.mapTitle)}</h3><div class="map-art">${mapSvg(pl.name)}<span class="ll">${pl.ll[0].toFixed(4)} N · ${pl.ll[1].toFixed(4)} E</span></div>
        <p class="map-name">${esc(pl.name)}</p><p class="map-addr">${esc(pl.addr || '')}</p>${st.meet === 'other' && one(st.meetPlace) ? `<p class="map-meet">${esc(X.meetLabel)}: ${esc(one(st.meetPlace))}</p>` : ''}
        <div class="row2"><a class="btn btn-quiet" id="mapY" href="${m.yandex}" target="_blank" rel="noopener">${ico('map')}<span>${esc(X.mapOpen)}</span></a></div>
        <div class="row2" style="margin-top:8px"><a class="btn btn-quiet" id="mapR" href="${m.route}" target="_blank" rel="noopener">${ico('route')}<span>${esc(X.mapRoute)}</span></a><a class="btn btn-quiet small" id="map2" href="${m.gis}" target="_blank" rel="noopener">${esc(X.map2gis)}</a></div>`;
      mc.hidden = false; } else mc.hidden = true;
    dayWeather($('#wxCard'));
    // календарь
    const c = city(), acts = chosen(), slot = DAY.slotFor(st.time, st.part, acts.length === 1 && acts[0].id === C.short.id);
    const loc = pl ? (pl.exact ? `${pl.name}, ${pl.addr}, ${c ? c.name : ''}` : (c ? c.name : '')) : '';
    const desc = [`${C.her.name} и ${C.from.name}`, moodTxt() ? `Настроение: ${moodTxt()}` : '', acts.length ? 'Планы: ' + acts.map(a => a.title).join('; ') : '', meetTxt() ? 'Встреча: ' + meetTxt() : '', st.wish && st.wish.trim() ? 'Пожелание: ' + st.wish.trim() : ''].filter(Boolean).join('\n');
    const ev = { dates: st.dates.slice(), slot, title: X.calTitle, location: loc, desc, geo: pl && pl.exact ? pl.ll : null };
    $('#calIcs').onclick = () => { const txt = DAY.ics(ev), b = new Blob([txt], { type: 'text/calendar;charset=utf-8' }), u = URL.createObjectURL(b);
      const a = document.createElement('a'); a.href = u; a.download = 'vstrecha-lera-svyatoslav.ics'; document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(u), 4000); };
    if (st.dates[0]) $('#calG').href = DAY.gcal({ date: st.dates[0], slot, title: X.calTitle, location: loc, desc }); else $('#calG').hidden = true;
    window.__ics = () => DAY.ics(ev);
  }
  async function dayWeather(el, line) {
    const c = city(), d = st.dates[0]; if (!el) return;
    if (!c || !d) { el.innerHTML = ''; if (!line) el.hidden = true; return; }
    if (!line) { el.hidden = false; el.innerHTML = `<h3>${esc(X.wxTitle)} · ${esc(fmtDate(d))}</h3><p class="wx-sub">…</p>`; }
    const w = await DAY.weather(d, c); if (st.dates[0] !== d) return;
    if (line) { el.textContent = `${fmtDate(d)}: ${DAY.wxText(w)}${w.kind === 'norm' ? ` (${X.wxNorm})` : ''}`; return; }
    const head = `<h3>${esc(X.wxTitle)} · ${esc(c.name)}, ${esc(fmtDate(d))}</h3>`;
    if (w.kind === 'live') el.innerHTML = `${head}<div class="wx-main"><b>${w.max > 0 ? '+' : ''}${Math.round(w.max)}°</b><span>${esc(w.text)}</span><span class="wx-tag">${esc(X.wxLive)}</span></div>
      <p class="wx-sub">Ночью ${w.min > 0 ? '+' : ''}${Math.round(w.min)}°${w.rain != null ? ` · дождь ${w.rain}%` : ''} · ветер ${Math.round(w.wind)} м/с · ${esc(X.wxSunset)} ${w.sunset}</p>`;
    else el.innerHTML = `${head}<div class="wx-main"><b>${esc(w.day)}°</b><span>днём</span><span class="wx-tag">${esc(X.wxNorm)}</span></div>
      <p class="wx-sub">Ночью ${esc(w.night)}° · ${esc(X.wxSunset)} около ${w.sunset}${w.offline ? '<br>' + esc(X.wxOffline) : ''}</p>`;
  }

  function copy(silent) {
    const msg = message(); const done = () => { if (!silent) $('#toast').textContent = X.copied; };
    if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(msg).then(done, fallback); else fallback();
    function fallback() { const t = document.createElement('textarea'); t.value = msg; t.setAttribute('readonly', ''); t.style.position = 'fixed'; t.style.opacity = '0'; document.body.appendChild(t); t.select(); try { document.execCommand('copy'); done(); } catch (e) {} t.remove(); }
  }
  $('#copy').addEventListener('click', () => copy());
  $('#edit').addEventListener('click', () => go('mood'));

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
  if (location.hash === '#reset') { try { localStorage.removeItem(KEY); } catch (e) {} history.replaceState(null, '', location.pathname); Object.assign(st, blank, { dates: [], acts: [], mood: [] }); wish.value = ''; }
  st.moodOwn = clip(st.moodOwn, 160); st.actOwn = clip(st.actOwn, 120); st.meetPlace = clip(st.meetPlace, 120); st.wish = clip(st.wish, 600);
  if (!['pickup', 'there', 'other', 'chat'].includes(st.meet)) st.meet = null; st.mood = (st.mood || []).filter(m => X.moods[m]);
  markCity();
  document.body.dataset.s = 'intro';
  GL.jump(GLS.intro);
  const complete = st.city && st.dates.length && st.time && hasActs();
  const resume = ORDER.indexOf(st.screen) >= FIRST ? (st.screen === 'final' && !complete ? 'city' : st.screen) : 'intro';
  if (resume !== 'intro') { GL.jump(GLS[resume]); go(resume, { instant: true }); } else animIn($('[data-screen="intro"]'));
  window.__invite = { go, st, message, weather: (d, id) => DAY.weather(d, C.cities.find(c => c.id === id)), sunset: DAY.sunset };
})();
// после прорисовки эмблемы убираем штриховку, чтобы линии гарантированно остались целыми на любом браузере
document.addEventListener('animationend', e => { if (e.animationName === 'emb-draw' && e.target.classList) e.target.style.strokeDasharray = 'none'; });
