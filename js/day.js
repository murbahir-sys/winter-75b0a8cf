/* Детали дня: закат, погода (Open-Meteo, без ключа), карты, календарь (.ics + Google). Без библиотек. */
(function () {
  const TZ = 3; // Крым, МСК (UTC+3, без перехода на летнее время)
  const pad = n => String(n).padStart(2, '0');

  // Закат по формулам NOAA (точность ±1–2 мин). Возвращает 'ЧЧ:ММ' по МСК.
  function sunset(iso, lat, lon) {
    const [y, m, d] = iso.split('-').map(Number);
    const n = Math.round((Date.UTC(y, m - 1, d) - Date.UTC(y, 0, 0)) / 864e5);
    const g = 2 * Math.PI / 365 * (n - 1);
    const eq = 229.18 * (0.000075 + 0.001868 * Math.cos(g) - 0.032077 * Math.sin(g) - 0.014615 * Math.cos(2 * g) - 0.040849 * Math.sin(2 * g));
    const dec = 0.006918 - 0.399912 * Math.cos(g) + 0.070257 * Math.sin(g) - 0.006758 * Math.cos(2 * g) + 0.000907 * Math.sin(2 * g) - 0.002697 * Math.cos(3 * g) + 0.00148 * Math.sin(3 * g);
    const r = Math.PI / 180, la = lat * r;
    const ha = Math.acos(Math.cos(90.833 * r) / (Math.cos(la) * Math.cos(dec)) - Math.tan(la) * Math.tan(dec)) / r;
    let min = 720 - 4 * (lon - ha) - eq + TZ * 60;
    min = Math.round(min);
    return pad(Math.floor(min / 60)) + ':' + pad(min % 60);
  }

  const WMO = { 0: 'ясно', 1: 'почти ясно', 2: 'переменная облачность', 3: 'пасмурно', 45: 'туман', 48: 'туман', 51: 'морось', 53: 'морось', 55: 'морось', 56: 'ледяная морось', 57: 'ледяная морось',
    61: 'небольшой дождь', 63: 'дождь', 65: 'сильный дождь', 66: 'ледяной дождь', 67: 'ледяной дождь', 71: 'небольшой снег', 73: 'снег', 75: 'сильный снег', 77: 'снежная крупа',
    80: 'ливень', 81: 'ливень', 82: 'сильный ливень', 85: 'снегопад', 86: 'снегопад', 95: 'гроза', 96: 'гроза', 99: 'гроза' };
  const sgn = t => (t > 0 ? '+' : t < 0 ? '−' : '') + Math.abs(Math.round(t));
  const daysAhead = iso => { const [y, m, d] = iso.split('-').map(Number); const now = new Date(); const t0 = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()); return Math.round((Date.UTC(y, m - 1, d) - t0) / 864e5); };

  // Погода на день: живой прогноз, если день в пределах 16 дней, иначе климатическая норма.
  const cache = {};
  async function weather(iso, city) {
    const [lat, lon] = city.ll, ss = sunset(iso, lat, lon);
    const norm = { kind: 'norm', day: city.norm.day, night: city.norm.night, sunset: ss };
    const ahead = daysAhead(iso);
    if (ahead < 0 || ahead > 15 || !navigator.onLine) return Object.assign(norm, { offline: ahead >= 0 && ahead <= 15 });
    const key = iso + city.id;
    if (cache[key]) return cache[key];
    try {
      const u = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,wind_speed_10m_max,sunset&wind_speed_unit=ms&timezone=Europe%2FMoscow&start_date=${iso}&end_date=${iso}`;
      const ctl = new AbortController(); const to = setTimeout(() => ctl.abort(), 6000);
      const r = await fetch(u, { signal: ctl.signal, referrerPolicy: 'no-referrer', credentials: 'omit' }); clearTimeout(to);
      if (!r.ok) throw new Error(r.status);
      const j = await r.json(), D = j.daily;
      const res = { kind: 'live', max: D.temperature_2m_max[0], min: D.temperature_2m_min[0], code: D.weather_code[0], text: WMO[D.weather_code[0]] || '',
        rain: D.precipitation_probability_max ? D.precipitation_probability_max[0] : null, wind: D.wind_speed_10m_max[0], sunset: (D.sunset[0] || '').slice(11, 16) || ss };
      return (cache[key] = res);
    } catch (e) { return Object.assign(norm, { offline: true }); }
  }
  function wxText(w) {
    if (w.kind === 'live') return `${sgn(w.min)}…${sgn(w.max)}°, ${w.text}${w.rain != null ? `, дождь ${w.rain}%` : ''}, ветер ${Math.round(w.wind)} м/с, закат ${w.sunset}`;
    return `днём ${w.day}°, ночью ${w.night}°, закат около ${w.sunset}`;
  }

  // Карты (Яндекс работает в Крыму), маршрут от текущего места, 2ГИС
  const maps = (lat, lon, name) => ({
    yandex: `https://yandex.ru/maps/?pt=${lon},${lat}&z=16&l=map&text=${encodeURIComponent(name || '')}`,
    route: `https://yandex.ru/maps/?rtext=~${lat},${lon}&rtt=auto`,
    gis: `https://2gis.ru/?m=${lon}%2C${lat}%2F17`,
  });

  // Календарь
  const esc = s => String(s || '').replace(/\\/g, '\\\\').replace(/;/g, '\\;').replace(/,/g, '\\,').replace(/\r?\n/g, '\\n');
  function fold(line) { // RFC 5545: строки ≤ 75 октетов, перенос CRLF + пробел
    const enc = new TextEncoder(); if (enc.encode(line).length <= 75) return line;
    const out = []; let cur = '', len = 0, lim = 75;
    for (const ch of line) { const l = enc.encode(ch).length; if (len + l > lim) { out.push(cur); cur = ' '; len = 1; lim = 75; } cur += ch; len += l; }
    out.push(cur); return out.join('\r\n');
  }
  const utc = (iso, hhmm) => { const [y, m, d] = iso.split('-').map(Number); const [H, M] = hhmm.split(':').map(Number); const t = new Date(Date.UTC(y, m - 1, d, H - TZ, M));
    return `${t.getUTCFullYear()}${pad(t.getUTCMonth() + 1)}${pad(t.getUTCDate())}T${pad(t.getUTCHours())}${pad(t.getUTCMinutes())}00Z`; };
  const dval = iso => iso.replace(/-/g, '');
  const nextDay = iso => { const [y, m, d] = iso.split('-').map(Number); const t = new Date(Date.UTC(y, m - 1, d + 1)); return `${t.getUTCFullYear()}${pad(t.getUTCMonth() + 1)}${pad(t.getUTCDate())}`; };
  // slot: {start:'15:00', end:'17:00'} или null (весь день)
  function slotFor(time, part, short) {
    const dur = short ? 1 : 2;
    if (time && time !== 'any') { const [H, M] = time.split(':').map(Number); return { start: time, end: pad(Math.min(23, H + dur)) + ':' + pad(M) }; }
    if (part === 'day') return { start: '12:00', end: '16:00' };
    if (part === 'evening') return { start: '17:00', end: '20:00' };
    return null;
  }
  function ics({ dates, slot, title, location, desc, geo }) {
    const now = new Date(), stamp = `${now.getUTCFullYear()}${pad(now.getUTCMonth() + 1)}${pad(now.getUTCDate())}T${pad(now.getUTCHours())}${pad(now.getUTCMinutes())}${pad(now.getUTCSeconds())}Z`;
    const L = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Leras Invite//RU', 'CALSCALE:GREGORIAN', 'METHOD:PUBLISH'];
    dates.forEach((iso, i) => {
      L.push('BEGIN:VEVENT', `UID:${iso}-${i}-${Math.random().toString(36).slice(2, 10)}@invite`, `DTSTAMP:${stamp}`);
      if (slot) L.push(`DTSTART:${utc(iso, slot.start)}`, `DTEND:${utc(iso, slot.end)}`);
      else L.push(`DTSTART;VALUE=DATE:${dval(iso)}`, `DTEND;VALUE=DATE:${nextDay(iso)}`);
      L.push(`SUMMARY:${esc(title + (dates.length > 1 ? ` (вариант ${i + 1} из ${dates.length})` : ''))}`);
      if (location) L.push(`LOCATION:${esc(location)}`);
      if (geo) L.push(`GEO:${geo[0]};${geo[1]}`);
      if (desc) L.push(`DESCRIPTION:${esc(desc)}`);
      L.push('BEGIN:VALARM', 'ACTION:DISPLAY', `DESCRIPTION:${esc(title)}`, slot ? 'TRIGGER:-PT2H' : 'TRIGGER:-PT12H', 'END:VALARM', 'END:VEVENT');
    });
    L.push('END:VCALENDAR');
    return L.map(fold).join('\r\n') + '\r\n';
  }
  function gcal({ date, slot, title, location, desc }) {
    const dates = slot ? `${utc(date, slot.start)}/${utc(date, slot.end)}` : `${dval(date)}/${nextDay(date)}`;
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${dates}&details=${encodeURIComponent(desc || '')}&location=${encodeURIComponent(location || '')}&ctz=Europe/Moscow`;
  }

  window.DAY = { sunset, weather, wxText, maps, ics, gcal, slotFor, daysAhead };
})();
