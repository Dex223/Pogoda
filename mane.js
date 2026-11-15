// === SVG ИКОНКИ ПОГОДЫ ===
const WEATHER_SVG = {
  0: '<svg viewBox="0 0 64 64"><circle cx="32" cy="32" r="14" fill="#FFD93D" stroke="#F4A300" stroke-width="2"/><g stroke="#FFD93D" stroke-width="3" stroke-linecap="round"><line x1="32" y1="6" x2="32" y2="12"/><line x1="32" y1="52" x2="32" y2="58"/><line x1="6" y1="32" x2="12" y2="32"/><line x1="52" y1="32" x2="58" y2="32"/><line x1="13.6" y1="13.6" x2="17.8" y2="17.8"/><line x1="46.2" y1="46.2" x2="50.4" y2="50.4"/><line x1="13.6" y1="50.4" x2="17.8" y2="46.2"/><line x1="46.2" y1="17.8" x2="50.4" y2="13.6"/></g></svg>',
  1: '<svg viewBox="0 0 64 64"><circle cx="22" cy="22" r="10" fill="#FFD93D" stroke="#F4A300" stroke-width="2"/><path d="M20 42 Q20 32 30 32 Q32 24 42 26 Q50 26 50 34 Q56 34 56 42 Z" fill="#E8E2F4" stroke="#6940A2" stroke-width="2"/></svg>',
  2: '<svg viewBox="0 0 64 64"><circle cx="20" cy="20" r="9" fill="#FFD93D" stroke="#F4A300" stroke-width="2"/><path d="M18 42 Q18 32 28 32 Q30 24 40 26 Q48 26 48 34 Q54 34 54 42 Z" fill="#E8E2F4" stroke="#6940A2" stroke-width="2"/></svg>',
  3: '<svg viewBox="0 0 64 64"><path d="M14 42 Q14 30 26 30 Q28 20 40 22 Q50 22 50 32 Q58 32 58 42 Z" fill="#E8E2F4" stroke="#6940A2" stroke-width="2"/></svg>',
  45: '<svg viewBox="0 0 64 64"><path d="M14 32 Q14 22 26 22 Q28 14 40 16 Q50 16 50 26 Q58 26 58 34 Z" fill="#C7B8DD" stroke="#6940A2" stroke-width="2"/><line x1="16" y1="44" x2="30" y2="44" stroke="#6940A2" stroke-width="2" stroke-linecap="round"/><line x1="22" y1="50" x2="42" y2="50" stroke="#6940A2" stroke-width="2" stroke-linecap="round"/><line x1="18" y1="56" x2="36" y2="56" stroke="#6940A2" stroke-width="2" stroke-linecap="round"/></svg>',
  61: '<svg viewBox="0 0 64 64"><path d="M14 30 Q14 20 26 20 Q28 12 40 14 Q50 14 50 24 Q58 24 58 32 Z" fill="#E8E2F4" stroke="#6940A2" stroke-width="2"/><line x1="22" y1="42" x2="20" y2="50" stroke="#527EBA" stroke-width="2" stroke-linecap="round"/><line x1="34" y1="44" x2="32" y2="54" stroke="#527EBA" stroke-width="2" stroke-linecap="round"/><line x1="44" y1="42" x2="42" y2="50" stroke="#527EBA" stroke-width="2" stroke-linecap="round"/></svg>',
  63: '<svg viewBox="0 0 64 64"><path d="M14 30 Q14 20 26 20 Q28 12 40 14 Q50 14 50 24 Q58 24 58 32 Z" fill="#E8E2F4" stroke="#6940A2" stroke-width="2"/><line x1="20" y1="42" x2="18" y2="52" stroke="#527EBA" stroke-width="2.5" stroke-linecap="round"/><line x1="32" y1="44" x2="30" y2="56" stroke="#527EBA" stroke-width="2.5" stroke-linecap="round"/><line x1="44" y1="42" x2="42" y2="52" stroke="#527EBA" stroke-width="2.5" stroke-linecap="round"/></svg>',
  65: '<svg viewBox="0 0 64 64"><path d="M14 28 Q14 18 26 18 Q28 10 40 12 Q50 12 50 22 Q58 22 58 30 Z" fill="#C7B8DD" stroke="#6940A2" stroke-width="2"/><line x1="18" y1="40" x2="16" y2="52" stroke="#527EBA" stroke-width="3" stroke-linecap="round"/><line x1="30" y1="42" x2="28" y2="56" stroke="#527EBA" stroke-width="3" stroke-linecap="round"/><line x1="42" y1="40" x2="40" y2="52" stroke="#527EBA" stroke-width="3" stroke-linecap="round"/></svg>',
  71: '<svg viewBox="0 0 64 64"><path d="M14 30 Q14 20 26 20 Q28 12 40 14 Q50 14 50 24 Q58 24 58 32 Z" fill="#E8E2F4" stroke="#6940A2" stroke-width="2"/><text x="22" y="48" font-size="14" fill="#527EBA">❄</text><text x="36" y="54" font-size="12" fill="#527EBA">❄</text></svg>',
  95: '<svg viewBox="0 0 64 64"><path d="M14 28 Q14 18 26 18 Q28 10 40 12 Q50 12 50 22 Q58 22 58 30 Z" fill="#6940A2" stroke="#29213A" stroke-width="2"/><path d="M30 32 L24 46 L32 46 L28 58 L40 42 L32 42 L36 32 Z" fill="#FFD93D" stroke="#F4A300" stroke-width="1.5"/></svg>'
};

function weatherSvg(code) {
  if (WEATHER_SVG[code]) return WEATHER_SVG[code];
  if (code <= 3) return WEATHER_SVG[3];
  if (code <= 67) return WEATHER_SVG[63];
  if (code <= 77) return WEATHER_SVG[71];
  return WEATHER_SVG[95];
}

// === МОКОВЫЕ ДАННЫЕ ===
function getMockWeather() {
  const now = new Date();
  const hourlyTimes = [], hourlyTemps = [], hourlyCodes = [], hourlyVis = [];
  for (let i = 0; i < 24; i++) {
    const t = new Date(now.getTime() + i * 3600000);
    hourlyTimes.push(t.toISOString().slice(0, 13) + ':00');
    hourlyTemps.push(8 + Math.floor(Math.random() * 8));
    hourlyCodes.push([0, 1, 2, 3, 61, 63][i % 6]);
    hourlyVis.push(10000);
  }
  const dailyTimes = [], dailyMax = [], dailyMin = [], dailyCodes = [], dailyPrecip = [], dailyWind = [];
  for (let i = 0; i < 7; i++) {
    const d = new Date(now.getTime() + i * 86400000);
    dailyTimes.push(d.toISOString().slice(0, 10));
    dailyMax.push(12 + Math.floor(Math.random() * 6));
    dailyMin.push(4 + Math.floor(Math.random() * 5));
    dailyCodes.push([0, 1, 2, 3, 61, 63, 71][i % 7]);
    dailyPrecip.push(Math.floor(Math.random() * 60));
    dailyWind.push(2 + Math.floor(Math.random() * 6));
  }
  return {
    current: { time: now.toISOString().slice(0, 13) + ':00', temperature_2m: 11, relative_humidity_2m: 68, apparent_temperature: 9, weather_code: 3, wind_speed_10m: 4 },
    hourly: { time: hourlyTimes, temperature_2m: hourlyTemps, weather_code: hourlyCodes, visibility: hourlyVis },
    daily: { time: dailyTimes, temperature_2m_max: dailyMax, temperature_2m_min: dailyMin, weather_code: dailyCodes, precipitation_probability_max: dailyPrecip, wind_speed_10m_max: dailyWind }
  };
}

// === СОСТОЯНИЕ ===
const state = {
  city: { name: 'Санкт-Петербург', country: 'Россия', lat: 59.93, lon: 30.33 },
  weather: null,
  loading: true,
  loadingMessage: 'Загрузка...',
  error: null,
  lastUpdate: null,
  isDemo: false,
  apiSource: 'неизвестно',
  tab: 'today'
};

// === КЭШИРОВАНИЕ ===
const CACHE_KEY = 'weather_cache';
const CACHE_DURATION = 10 * 60 * 1000; // 10 минут

function getCachedWeather() {
  try {
    const cached = localStorage.getItem(CACHE_KEY);
    if (!cached) return null;
    const { data, timestamp } = JSON.parse(cached);
    if (Date.now() - timestamp < CACHE_DURATION) {
      return data;
    }
  } catch (e) {}
  return null;
}

function setCachedWeather(data) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({ data, timestamp: Date.now() }));
  } catch (e) {}
}

// === ОПРЕДЕЛЕНИЕ ГОРОДА ПО IP (быстрое) ===
async function getCityByIP() {
  const cachedGeo = localStorage.getItem('geo_cache');
  if (cachedGeo) {
    try {
      const { data, timestamp } = JSON.parse(cachedGeo);
      if (Date.now() - timestamp < 24 * 60 * 60 * 1000) {
        return data;
      }
    } catch (e) {}
  }

  try {
    const response = await fetch('https://ip-api.com/json/?lang=ru', { 
      signal: AbortSignal.timeout(2000) // 2 секунды максимум
    });
    if (!response.ok) throw new Error('IP API failed');
    const data = await response.json();
    
    if (data.status === 'success') {
      const cityData = {
        name: data.city || 'Санкт-Петербург',
        country: data.country || 'Россия',
        lat: data.lat || 59.93,
        lon: data.lon || 30.33
      };
      
      localStorage.setItem('geo_cache', JSON.stringify({ 
        data: cityData, 
        timestamp: Date.now() 
      }));
      
      return cityData;
    }
  } catch (error) {
    console.warn('[IP] Ошибка:', error);
  }
  return null;
}

// === ИНИЦИАЛИЗАЦИЯ (мгновенный показ) ===
async function initApp() {
  // 1. Сразу показываем кэш, если есть
  const cachedWeather = getCachedWeather();
  if (cachedWeather) {
    state.weather = cachedWeather;
    state.loading = false;
    state.apiSource = 'кэш';
    state.lastUpdate = 'кэш';
    render();
  } else {
    render(); // Показываем спиннер
  }

  const savedCity = localStorage.getItem('weather_city');
  
  if (savedCity) {
    state.city = JSON.parse(savedCity);
  } else {
    state.loadingMessage = 'Определяем город...';
    render();
    
    const ipCity = await getCityByIP();
    if (ipCity) {
      state.city = ipCity;
      localStorage.setItem('weather_city', JSON.stringify(state.city));
    }
  }
  
  // 2. Загружаем свежие данные
  await loadWeather();
}

// === API: Open-Meteo (быстрый) ===
async function fetchOpenMeteo(lat, lon) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m&hourly=temperature_2m,weather_code,visibility&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,wind_speed_10m_max&timezone=auto&forecast_days=7&wind_speed_unit=ms`;
  
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 3000); // 3 секунды
  
  try {
    const r = await fetch(url, { signal: controller.signal });
    clearTimeout(timeoutId);
    if (!r.ok) throw new Error('HTTP ' + r.status);
    const data = await r.json();
    return { data, source: 'Open-Meteo' };
  } catch (e) {
    clearTimeout(timeoutId);
    throw e;
  }
}

// === API: wttr.in (быстрый) ===
async function fetchWttrIn(cityName) {
  const url = `https://wttr.in/${encodeURIComponent(cityName)}?format=j1&lang=ru`;
  
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 3000); // 3 секунды
  
  try {
    const r = await fetch(url, { signal: controller.signal });
    clearTimeout(timeoutId);
    if (!r.ok) throw new Error('HTTP ' + r.status);
    const data = await r.json();
    
    const current = data.current_condition[0];
    const weatherCode = parseInt(current.weatherCode) || 3;
    
    const hourlyTimes = [], hourlyTemps = [], hourlyCodes = [], hourlyVis = [];
    if (data.weather && data.weather[0] && data.weather[0].hourly) {
      data.weather[0].hourly.forEach(h => {
        hourlyTimes.push(h.time.padStart(4, '0'));
        hourlyTemps.push(parseInt(h.tempC));
        hourlyCodes.push(parseInt(h.weatherCode) || 3);
        hourlyVis.push(parseInt(h.visibility) * 1000);
      });
    }
    
    const dailyTimes = [], dailyMax = [], dailyMin = [], dailyCodes = [], dailyPrecip = [], dailyWind = [];
    if (data.weather) {
      data.weather.forEach(day => {
        dailyTimes.push(day.date);
        dailyMax.push(parseInt(day.maxtempC));
        dailyMin.push(parseInt(day.mintempC));
        dailyCodes.push(parseInt(day.hourly[4]?.weatherCode) || 3);
        dailyPrecip.push(parseInt(day.hourly[4]?.chanceofrain) || 0);
        dailyWind.push(parseInt(day.maxwindKmph) / 3.6);
      });
    }
    
    return {
      data: {
        current: {
          time: new Date().toISOString().slice(0, 13) + ':00',
          temperature_2m: parseInt(current.temp_C),
          relative_humidity_2m: parseInt(current.humidity),
          apparent_temperature: parseInt(current.FeelsLikeC),
          weather_code: weatherCode,
          wind_speed_10m: parseInt(current.windspeedKmph) / 3.6
        },
        hourly: {
          time: hourlyTimes.length ? hourlyTimes : [new Date().toISOString().slice(0, 13) + ':00'],
          temperature_2m: hourlyTemps.length ? hourlyTemps : [parseInt(current.temp_C)],
          weather_code: hourlyCodes.length ? hourlyCodes : [weatherCode],
          visibility: hourlyVis.length ? hourlyVis : [10000]
        },
        daily: {
          time: dailyTimes.length ? dailyTimes : [new Date().toISOString().slice(0, 10)],
          temperature_2m_max: dailyMax.length ? dailyMax : [parseInt(current.temp_C)],
          temperature_2m_min: dailyMin.length ? dailyMin : [parseInt(current.temp_C) - 3],
          weather_code: dailyCodes.length ? dailyCodes : [weatherCode],
          precipitation_probability_max: dailyPrecip.length ? dailyPrecip : [0],
          wind_speed_10m_max: dailyWind.length ? dailyWind : [parseInt(current.windspeedKmph) / 3.6]
        }
      },
      source: 'wttr.in'
    };
  } catch (e) {
    clearTimeout(timeoutId);
    throw e;
  }
}

// === ЗАГРУЗКА ПОГОДЫ (быстрая) ===
async function loadWeather() {
  state.loading = true;
  state.error = null;
  state.loadingMessage = 'Загружаем погоду...';
  render();
  
  let apiResult = null;
  
  // Пробуем Open-Meteo (3 сек)
  try {
    state.loadingMessage = 'Подключаемся...';
    render();
    apiResult = await fetchOpenMeteo(state.city.lat, state.city.lon);
  } catch (e) {
    // Пробуем wttr.in (3 сек)
    try {
      state.loadingMessage = 'Пробуем резервный источник...';
      render();
      apiResult = await fetchWttrIn(state.city.name);
    } catch (e2) {
      // Оба API упали
    }
  }
  
  if (apiResult) {
    state.weather = apiResult.data;
    state.apiSource = apiResult.source;
    state.isDemo = false;
    state.lastUpdate = new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
    setCachedWeather(apiResult.data);
  } else {
    // Если есть кэш — показываем его
    const cachedWeather = getCachedWeather();
    if (cachedWeather) {
      state.weather = cachedWeather;
      state.apiSource = 'кэш (нет связи)';
      state.isDemo = false;
      state.lastUpdate = 'кэш';
    } else {
      // Нет кэша — показываем демо сразу
      state.weather = getMockWeather();
      state.apiSource = 'демо';
      state.isDemo = true;
      state.lastUpdate = 'демо';
    }
  }
  
  try { localStorage.setItem('weather_city', JSON.stringify(state.city)); } catch(e){}
  
  state.loading = false;
  render();
}

// === РЕНДЕРИНГ ===
function render() {
  const el = document.getElementById('content');
  if (state.tab === 'today') el.innerHTML = renderToday();
  else if (state.tab === 'forecast') el.innerHTML = renderForecast();
  else if (state.tab === 'cities') el.innerHTML = renderCities();
}

function renderToday() {
  if (state.loading && !state.weather) {
    return '<div class="center-msg"><div class="spinner"></div><div>' + state.loadingMessage + '</div></div>';
  }
  if (!state.weather) {
    return '<div class="center-msg"><div class="error-icon">🌧️</div><div class="error-title">Ошибка загрузки</div><div class="error-text">' + (state.error || 'Данные недоступны') + '</div><button class="btn-primary" onclick="loadWeather()">Попробовать снова</button></div>';
  }

  const { current, hourly, daily } = state.weather;
  const startHour = Math.max(0, hourly.time.findIndex(t => t >= current.time));
  const dateText = new Date().toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' });

  return '<div class="header">' +
    '<div class="profile"><div class="avatar"><svg viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg></div>' +
    '<div class="greeting"><div class="greeting-title">Добро пожаловать</div><div class="greeting-sub">Ваш прогноз на сегодня</div></div></div>' +
    '<button class="refresh-btn ' + (state.loading ? 'spinning' : '') + '" onclick="loadWeather()"><svg viewBox="0 0 24 24"><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/></svg></button>' +
    '</div>' +
    '<div class="location" onclick="openSearch()">' +
    '<svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>' +
    '<span class="location-name">' + state.city.name + '</span>' +
    '<svg viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg>' +
    '</div>' +
    '<div class="hero">' +
    '<div class="hero-date">Сегодня, ' + dateText + '</div>' +
    '<div class="hero-icon">' + weatherSvg(current.weather_code) + '</div>' +
    '<div class="hero-temp">' + fmtTemp(current.temperature_2m) + '</div>' +
    '<div class="hero-condition">' + weatherText(current.weather_code) + '</div>' +
    '<div class="hero-range">Ощущается как ' + fmtTemp(current.apparent_temperature) + ' · ветер ' + Math.round(current.wind_speed_10m) + ' м/с</div>' +
    '<div class="hero-details">' +
    '<div class="hero-detail"><div class="hero-detail-value">' + Math.round(current.relative_humidity_2m) + '%</div><div class="hero-detail-label">Влажность</div></div>' +
    '<div class="hero-detail"><div class="hero-detail-value">' + (hourly.visibility[startHour] ? Math.round(hourly.visibility[startHour]/1000) + ' км' : '—') + '</div><div class="hero-detail-label">Видимость</div></div>' +
    '<div class="hero-detail"><div class="hero-detail-value">' + fmtTemp(daily.temperature_2m_max[0]) + '</div><div class="hero-detail-label">Максимум</div></div>' +
    '</div></div>' +
    '<div class="section-title">Почасовой прогноз</div>' +
    '<div class="hourly">' +
    [0,1,2,3,4].map(i => {
      const pos = startHour + i;
      const time = i === 0 ? 'Сейчас' : (hourly.time[pos]?.slice(11,16) || '—');
      return '<div class="hour-item"><div class="hour-time">' + time + '</div><div class="hour-icon">' + weatherSvg(hourly.weather_code[pos] ?? 0) + '</div><div class="hour-temp">' + fmtTemp(hourly.temperature_2m[pos]) + '</div></div>';
    }).join('') +
    '</div>' +
    '<div class="section-title">На 7 дней</div>' +
    '<div class="daily-list">' +
    daily.time.map((d, i) => '<div class="daily-item"><div class="day-name">' + dayLabel(d, i) + '</div><div class="day-icon">' + weatherSvg(daily.weather_code[i]) + '</div><div class="day-desc">' + weatherText(daily.weather_code[i]) + '</div><div class="day-temps"><span>' + fmtTemp(daily.temperature_2m_max[i]) + '</span><span class="temp-low">' + fmtTemp(daily.temperature_2m_min[i]) + '</span></div></div>').join('') +
    '</div>' +
    '<div class="status">' + getStatusDot() + state.apiSource + ' · Обновлено: ' + (state.lastUpdate || '—') + '</div>';
}

function renderForecast() {
  if (state.loading && !state.weather) {
    return '<div class="center-msg"><div class="spinner"></div><div>' + state.loadingMessage + '</div></div>';
  }
  if (!state.weather) {
    return '<div class="center-msg"><div class="error-icon">☁️</div><div class="error-title">Прогноз для ' + state.city.name + '</div><div class="error-text">Данные ещё не загружены</div><button class="btn-primary" onclick="loadWeather()">Обновить</button></div>';
  }
  
  const { daily } = state.weather;
  const maxPrecip = Math.max(...(daily.precipitation_probability_max?.slice(0,5) || [0]));
  const maxWind = Math.round(Math.max(...(daily.wind_speed_10m_max?.slice(0,5) || [0])));
  const minTemp = Math.min(...(daily.temperature_2m_min?.slice(0,5) || [0]));

  return '<div style="padding:12px 0;font-size:20px;font-weight:700">Прогноз</div>' +
    '<div style="display:flex;align-items:center;gap:8px;padding:8px 0;color:#6940A2;font-weight:600"><svg viewBox="0 0 24 24" style="width:20px;height:20px;fill:#6940A2"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg><span>' + state.city.name + '</span></div>' +
    '<div style="display:flex;justify-content:space-between;align-items:center;padding:8px 0 12px"><div style="font-size:18px;font-weight:700">На 7 дней</div><div style="font-size:13px;color:#554B68">' + (daily.time[0] ? new Date(daily.time[0]+'T12:00:00').toLocaleDateString('ru-RU',{day:'numeric',month:'long'}) : '') + '</div></div>' +
    '<div class="daily-list">' +
    daily.time.map((d, i) => '<div class="daily-item"><div class="day-name">' + dayLabel(d, i) + '</div><div class="day-icon">' + weatherSvg(daily.weather_code[i]) + '</div><div class="day-desc">' + weatherText(daily.weather_code[i]) + '</div><div class="day-temps"><span>' + fmtTemp(daily.temperature_2m_max[i]) + '</span><span class="temp-low">' + fmtTemp(daily.temperature_2m_min[i]) + '</span></div></div>').join('') +
    '</div>' +
    '<div class="section-title">Условия на неделе</div>' +
    '<div class="daily-list">' +
    '<div class="daily-item"><div class="day-desc" style="flex:1">Вероятность осадков</div><div class="day-temps">до ' + Math.round(maxPrecip) + '%</div></div>' +
    '<div class="daily-item"><div class="day-desc" style="flex:1">Максимальный ветер</div><div class="day-temps">' + maxWind + ' м/с</div></div>' +
    '<div class="daily-item"><div class="day-desc" style="flex:1">Мин. температура</div><div class="day-temps">' + fmtTemp(minTemp) + '</div></div>' +
    '</div>' +
    '<div class="status">' + getStatusDot() + state.apiSource + ' · Обновлено: ' + (state.lastUpdate || '—') + '</div>';
}

function renderCities() {
  const cities = JSON.parse(localStorage.getItem('saved_cities') || '[]');
  const defaultCities = [
    { name: 'Санкт-Петербург', country: 'Россия', lat: 59.93, lon: 30.33 },
    { name: 'Москва', country: 'Россия', lat: 55.75, lon: 37.62 },
    { name: 'Казань', country: 'Россия', lat: 55.79, lon: 49.11 },
    { name: 'Новосибирск', country: 'Россия', lat: 55.04, lon: 82.93 },
    { name: 'Екатеринбург', country: 'Россия', lat: 56.84, lon: 60.60 },
    { name: 'Калининград', country: 'Россия', lat: 54.71, lon: 20.45 }
  ];
  const list = cities.length ? cities : defaultCities;

  return '<div style="display:flex;align-items:center;justify-content:space-between;padding:12px 0"><div style="font-size:20px;font-weight:700;flex:1">Города</div><button class="refresh-btn" onclick="openSearch()" style="background:#E8E2F4"><svg viewBox="0 0 24 24" style="width:22px;height:22px;fill:#6940A2"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg></button></div>' +
    '<div class="daily-list">' +
    list.map(c => {
      const isCurrent = c.name === state.city.name;
      const temp = isCurrent && state.weather ? fmtTemp(state.weather.current.temperature_2m) : '';
      return '<div class="daily-item" style="cursor:pointer" onclick="selectCity(\'' + c.name.replace(/'/g,"\\'") + '\', ' + c.lat + ', ' + c.lon + ', \'' + (c.country||'').replace(/'/g,"\\'") + '\')"><svg viewBox="0 0 24 24" style="width:26px;height:26px;fill:#527EBA"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/></svg><div style="flex:1;min-width:0"><div style="font-size:15px;font-weight:600;color:#29213A">' + c.name + '</div><div style="font-size:13px;color:#554B68">' + (isCurrent ? 'Текущий город' : c.country) + '</div></div>' + (temp ? '<div style="font-size:18px;font-weight:600">' + temp + '</div>' : '') + '</div>';
    }).join('') +
    '</div><div class="status">Нажмите на город, чтобы выбрать его</div>';
}

function getStatusDot() {
  if (state.isDemo) return '<span class="demo-dot"></span>';
  return '<span class="live-dot"></span>';
}

function weatherText(code) {
  const map = {
    0: 'Ясно', 1: 'Преимущественно ясно', 2: 'Переменная облачность', 3: 'Пасмурно',
    45: 'Туман', 48: 'Иней', 51: 'Лёгкая морось', 53: 'Морось', 55: 'Сильная морось',
    61: 'Слабый дождь', 63: 'Дождь', 65: 'Сильный дождь',
    71: 'Слабый снег', 73: 'Снег', 75: 'Сильный снег', 95: 'Гроза'
  };
  return map[code] || 'Неизвестно';
}

function fmtTemp(v) {
  if (v == null) return '—';
  const r = Math.round(v);
  return (r < 0 ? '−' + Math.abs(r) : r > 0 ? '+' + r : '0') + '°';
}

function dayLabel(dateStr, i) {
  if (i === 0) return 'Сегодня';
  if (i === 1) return 'Завтра';
  return new Date(dateStr + 'T12:00:00')
    .toLocaleDateString('ru-RU', { weekday: 'long' })
    .replace(/^./, c => c.toUpperCase());
}

// === УПРАВЛЕНИЕ ИНТЕРФЕЙСОМ ===
function switchTab(tab) {
  state.tab = tab;
  document.querySelectorAll('.tab-item').forEach(el => {
    el.classList.toggle('active', el.dataset.tab === tab);
  });
  render();
}

let searchTimer;
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

if (searchInput) {
  searchInput.addEventListener('input', (e) => {
    clearTimeout(searchTimer);
    const q = e.target.value.trim();
    if (q.length < 2) { searchResults.innerHTML = ''; return; }
    searchTimer = setTimeout(async () => {
      try {
        const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(q)}&count=8&language=ru&format=json`;
        const r = await fetch(url);
        const data = await r.json();
        const results = data.results || [];
        if (!results.length) {
          searchResults.innerHTML = '<div style="padding:16px;text-align:center;color:#554B68;font-size:14px">Города не найдены</div>';
          return;
        }
        searchResults.innerHTML = results.map(c => '<div class="city-result" onclick="selectCity(\'' + c.name.replace(/'/g,"\\'") + '\', ' + c.latitude + ', ' + c.longitude + ', \'' + (c.country||'').replace(/'/g,"\\'") + '\')"><div><div class="city-result-name">' + c.name + '</div><div class="city-result-sub">' + [c.admin1, c.country].filter(Boolean).join(' · ') + '</div></div><svg viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg></div>').join('');
      } catch (e) {
        searchResults.innerHTML = '<div style="padding:16px;text-align:center;color:#554B68">Ошибка поиска</div>';
      }
    }, 300);
  });
}

function selectCity(name, lat, lon, country) {
  state.city = { name, lat, lon, country };
  try { localStorage.setItem('weather_city', JSON.stringify(state.city)); } catch(e){}
  closeSearch();
  loadWeather();
}

function openSearch() {
  document.getElementById('searchModal').classList.add('active');
  document.getElementById('savedCity').textContent = state.city.name;
  searchInput.value = '';
  searchResults.innerHTML = '';
  setTimeout(() => searchInput.focus(), 100);
}

function closeSearch() {
  document.getElementById('searchModal').classList.remove('active');
}

if (document.getElementById('searchModal')) {
  document.getElementById('searchModal').addEventListener('click', (e) => {
    if (e.target.id === 'searchModal') closeSearch();
  });
}

// === ПРИВЯЗКА К WINDOW ===
window.switchTab = switchTab;
window.openSearch = openSearch;
window.closeSearch = closeSearch;
window.selectCity = selectCity;
window.loadWeather = loadWeather;

// === АВТООБНОВЛЕНИЕ ===
let updateInterval;
function startAutoUpdate() {
  updateInterval = setInterval(() => {
    if (document.hidden) return;
    if (!state.loading && state.tab === 'today') loadWeather();
  }, 5 * 60 * 1000);
}

document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    clearInterval(updateInterval);
  } else {
    startAutoUpdate();
    if (!state.loading) loadWeather();
  }
});

// === ЗАПУСК ===
startAutoUpdate();
initApp();