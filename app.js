const cities = [
  {
    id: 'kislovodsk',
    name: 'Кисловодск',
    short: 'парк, нарзан, воздух',
    color: '#1de4c7',
    signature: 'самый природный и неспешный курорт',
    vibe: 'Для длинных прогулок, терренкуров, видов на Кавказский хребет и мягкого восстановления без суеты.',
    tags: ['терренкур', 'Нарзан', 'Долина роз', 'виды'],
    bestTime: 'утро + золотой час',
    tempo: 'спокойно',
    route: 'Нарзанная галерея → Курортный бульвар → Долина роз → смотровые',
    highlights: [
      ['Нарзанная галерея', 'архитектурная точка старта и главный ритуал города'],
      ['Долина роз', 'визуальная кульминация парка и сильная фото-точка'],
      ['Терренкуры', 'маршруты для прогулки с плавным набором высоты']
    ]
  },
  {
    id: 'pyatigorsk',
    name: 'Пятигорск',
    short: 'Машук, Провал, Лермонтов',
    color: '#ffb66b',
    signature: 'самый драматичный город КМВ',
    vibe: 'Город, где курортная архитектура, лермонтовские места, гора Машук и легендарный Провал складываются в плотный маршрут.',
    tags: ['Машук', 'Провал', 'Цветник', 'история'],
    bestTime: 'день + закат',
    tempo: 'средний',
    route: 'Цветник → Орёл → Провал → канатная дорога на Машук',
    highlights: [
      ['Парк Цветник', 'удобная точка старта по историческому центру'],
      ['Озеро Провал', 'бирюзовое подземное озеро на склоне Машука'],
      ['Гора Машук', 'панорама Пятигорска и всего района']
    ]
  },
  {
    id: 'essentuki',
    name: 'Ессентуки',
    short: 'источники №4 и №17',
    color: '#79a7ff',
    signature: 'самый лечебный и размеренный сценарий',
    vibe: 'Подходит для архитектурного променада по галереям, бюветам, грязелечебнице и зелёным аллеям Курортного парка.',
    tags: ['№4', '№17', 'бюветы', 'парк'],
    bestTime: 'утро',
    tempo: 'очень спокойно',
    route: 'Курортный парк → бювет №17 → грязелечебница → прогулка к галереям',
    highlights: [
      ['Бювет источника №17', 'просторный павильон и одна из узнаваемых точек курорта'],
      ['Курортный парк', 'классический маршрут “на воды” с исторической застройкой'],
      ['Грязелечебница', 'монументальная архитектура и лечебная традиция']
    ]
  },
  {
    id: 'zheleznovodsk',
    name: 'Железноводск',
    short: 'лес, каскады, дворец',
    color: '#d7ff7a',
    signature: 'самый камерный и лесной курорт',
    vibe: 'Здесь хорошо идти медленно: Курортный парк, источники, Пушкинская галерея, Дворец эмира Бухарского и Каскадная лестница.',
    tags: ['лес', 'каскады', 'источники', 'галерея'],
    bestTime: 'утро или вечер',
    tempo: 'спокойно',
    route: 'Курортный парк → Пушкинская галерея → Дворец эмира → Каскадная лестница → озеро',
    highlights: [
      ['Курортный парк', 'многоуровневая прогулка у Железной горы'],
      ['Дворец эмира Бухарского', 'восточный акцент внутри курортной архитектуры'],
      ['Каскадная лестница', 'видовая прогулка к воде и свету']
    ]
  },
  {
    id: 'minvody',
    name: 'Минеральные Воды',
    short: 'аэропорт и старт',
    color: '#ff6f91',
    signature: 'логистические ворота КМВ',
    vibe: 'Лучше воспринимать как удобную точку приезда: аэропорт, вокзал, быстрый трансфер в города-курорты и выезды к горам.',
    tags: ['аэропорт', 'вокзал', 'трансфер', 'старт'],
    bestTime: 'день приезда',
    tempo: 'быстро',
    route: 'Аэропорт/вокзал → заселение → лёгкий вечерний выезд в ближайший курорт',
    highlights: [
      ['Аэропорт', 'самый удобный вход в регион для короткой поездки'],
      ['Вокзал', 'пересадка на города-курорты'],
      ['Старт экскурсий', 'удобная база для трансферов и выездов']
    ]
  }
];

const places = [
  { id:'narzan-gallery', city:'kislovodsk', type:'source', name:'Нарзанная галерея', time:'45 мин', desc:'Начни день с архитектуры и дегустации нарзана маленькими порциями.', query:'Нарзанная галерея Кисловодск' },
  { id:'rose-valley', city:'kislovodsk', type:'nature', name:'Долина роз', time:'1–1.5 ч', desc:'Фотогеничная точка национального парка и хороший финиш прогулки.', query:'Долина роз Кисловодск' },
  { id:'air-temple', city:'kislovodsk', type:'view', name:'Храм воздуха', time:'50 мин', desc:'Лёгкий подъём, воздух, виды и ощущение старого курортного маршрута.', query:'Храм воздуха Кисловодск' },
  { id:'kurort-boulevard', city:'kislovodsk', type:'walk', name:'Курортный бульвар', time:'40 мин', desc:'Парадный променад для первого знакомства с городом.', query:'Курортный бульвар Кисловодск' },
  { id:'proval', city:'pyatigorsk', type:'nature', name:'Озеро Провал', time:'40 мин', desc:'Бирюзовое подземное озеро и один из символов Пятигорска.', query:'Озеро Провал Пятигорск' },
  { id:'mashuk', city:'pyatigorsk', type:'view', name:'Гора Машук', time:'1.5–2 ч', desc:'Канатная дорога или прогулка ради панорамы города и Бештау.', query:'Гора Машук Пятигорск' },
  { id:'tsvetnik', city:'pyatigorsk', type:'walk', name:'Парк Цветник', time:'1 ч', desc:'Исторический центр, откуда удобно идти к Орлу, гротам и галереям.', query:'Парк Цветник Пятигорск' },
  { id:'lermontov-duel', city:'pyatigorsk', type:'heritage', name:'Место дуэли Лермонтова', time:'35 мин', desc:'Тихая историческая точка, лучше совмещать с Машуком.', query:'Место дуэли Лермонтова Пятигорск' },
  { id:'essentuki17', city:'essentuki', type:'source', name:'Бювет источника №17', time:'35 мин', desc:'Классическая точка питьевого курорта, рядом с прогулочным маршрутом.', query:'Бювет источника 17 Ессентуки' },
  { id:'essentuki4', city:'essentuki', type:'source', name:'Источник №4', time:'30 мин', desc:'Один из самых известных питьевых источников Ессентуков.', query:'Источник 4 Ессентуки бювет' },
  { id:'ess-park', city:'essentuki', type:'walk', name:'Курортный парк Ессентуков', time:'1–1.5 ч', desc:'Плавный маршрут по галереям, аллеям и историческим зданиям.', query:'Курортный парк Ессентуки' },
  { id:'mud-baths', city:'essentuki', type:'heritage', name:'Грязелечебница им. Семашко', time:'30 мин', desc:'Монументальная архитектура и один из символов лечебного профиля города.', query:'Грязелечебница Семашко Ессентуки' },
  { id:'zh-park', city:'zheleznovodsk', type:'walk', name:'Курортный парк Железноводска', time:'1.5 ч', desc:'Лесной многоуровневый парк для самого мягкого дня в поездке.', query:'Курортный парк Железноводск' },
  { id:'bukhara-palace', city:'zheleznovodsk', type:'heritage', name:'Дворец эмира Бухарского', time:'30 мин', desc:'Восточная архитектура рядом с главной аллеей и Пушкинской галереей.', query:'Дворец эмира Бухарского Железноводск' },
  { id:'cascade-stairs', city:'zheleznovodsk', type:'view', name:'Каскадная лестница', time:'45 мин', desc:'Видовая прогулка к Курортному озеру и вечернему свету.', query:'Каскадная лестница Железноводск' },
  { id:'pushkin-gallery', city:'zheleznovodsk', type:'heritage', name:'Пушкинская галерея', time:'35 мин', desc:'Лёгкая архитектурная остановка в центре прогулочного маршрута.', query:'Пушкинская галерея Железноводск' },
  { id:'airport', city:'minvody', type:'logistics', name:'Аэропорт Минеральные Воды', time:'20 мин', desc:'Главные воздушные ворота региона и старт большинства коротких поездок.', query:'Аэропорт Минеральные Воды' },
  { id:'train-station', city:'minvody', type:'logistics', name:'Ж/д вокзал Минеральные Воды', time:'20 мин', desc:'Удобная пересадка на города-курорты и междугородние маршруты.', query:'ЖД вокзал Минеральные Воды' }
];

const routeTemplates = {
  health: ['narzan-gallery','essentuki17','essentuki4','zh-park'],
  mountain: ['tsvetnik','proval','mashuk','rose-valley'],
  heritage: ['mud-baths','bukhara-palace','pushkin-gallery','lermontov-duel'],
  weekend: ['narzan-gallery','rose-valley','tsvetnik','proval','essentuki17','zh-park','cascade-stairs']
};

const routes = [
  {
    title:'Первый раз в КМВ', label:'1 день · баланс', desc:'Маршрут знакомит с тремя главными ощущениями региона: вода, парк, гора.', template:'mountain', featured:true,
    steps:[['09:30','Кисловодск','Нарзанная галерея и короткий променад'],['12:30','Ессентуки','Курортный парк и бювет №17'],['16:30','Пятигорск','Цветник, Провал и закат у Машука']]
  },
  {
    title:'Медленный лечебный день', label:'без спешки', desc:'Подходит, когда хочется санаторного темпа, зелени и мягкой нагрузки.', template:'health', featured:false,
    steps:[['08:30','Ессентуки','Источники №4/17 и Курортный парк'],['12:00','Пауза','обед и отдых без переездов'],['17:00','Железноводск','лесной парк, галерея, каскады']]
  },
  {
    title:'Архитектура и история', label:'камера + прогулка', desc:'Собирает курортные галереи, дворцы, лермонтовские места и сильные фасады.', template:'heritage', featured:false,
    steps:[['10:00','Пятигорск','Цветник и лермонтовские точки'],['14:00','Ессентуки','грязелечебница и бюветы'],['17:00','Железноводск','Дворец эмира и Пушкинская галерея']]
  }
];

const mapNodes = [
  {city:'kislovodsk', x:126, y:416, labelX:35, labelY:7},
  {city:'essentuki', x:328, y:310, labelX:-95, labelY:-31},
  {city:'pyatigorsk', x:497, y:328, labelX:35, labelY:8},
  {city:'zheleznovodsk', x:629, y:215, labelX:-155, labelY:-30},
  {city:'minvody', x:775, y:175, labelX:38, labelY:8}
];

const cityTabs = document.querySelector('#cityTabs');
const cityDetail = document.querySelector('#cityDetail');
const routeGrid = document.querySelector('#routeGrid');
const mapNodesEl = document.querySelector('#mapNodes');
const mapInfo = document.querySelector('#mapInfo');
const filterRow = document.querySelector('#filterRow');
const placeList = document.querySelector('#placeList');
const selectedRouteEl = document.querySelector('#selectedRoute');
const emptyRouteEl = document.querySelector('#emptyRoute');
const searchInput = document.querySelector('#placeSearch');
const toast = document.querySelector('#toast');

let activeCity = cities[0].id;
let activeFilter = 'all';
let selectedRoute = [];

const typeLabels = {
  all: 'Все', source: 'Источники', nature: 'Природа', view: 'Виды', walk: 'Прогулка', heritage: 'История', logistics: 'Логистика'
};

const cityById = id => cities.find(city => city.id === id);
const placeById = id => places.find(place => place.id === id);
const mapLink = query => `https://yandex.ru/maps/?text=${encodeURIComponent(query)}`;
const vibrate = () => { if ('vibrate' in navigator) navigator.vibrate(8); };

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove('show'), 2200);
}

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

document.addEventListener('click', event => {
  const scrollTarget = event.target.closest('[data-scroll-to]');
  if (scrollTarget) scrollToId(scrollTarget.dataset.scrollTo);

  const templateButton = event.target.closest('[data-route-template]');
  if (templateButton) {
    applyTemplate(templateButton.dataset.routeTemplate);
    scrollToId('planner');
  }
});

function renderCityTabs() {
  cityTabs.innerHTML = cities.map((city, index) => `
    <button class="city-tab" type="button" role="tab" aria-selected="${city.id === activeCity}" aria-controls="cityDetail" data-city="${city.id}" style="--city-color:${city.color}">
      <span class="dot" aria-hidden="true"></span>
      <span><b>${index + 1}. ${city.name}</b><small>${city.short}</small></span>
    </button>
  `).join('');
  cityTabs.querySelectorAll('.city-tab').forEach(button => {
    button.addEventListener('click', () => {
      activeCity = button.dataset.city;
      renderCityTabs();
      renderCityDetail();
      setMapInfo(activeCity);
      renderMapNodes();
      activeFilter = 'all';
      renderFilters();
      renderPlaces();
      vibrate();
    });
  });
}

function renderCityDetail() {
  const city = cityById(activeCity);
  const relevant = places.filter(place => place.city === city.id);
  cityDetail.style.setProperty('--city-color', city.color);
  cityDetail.innerHTML = `
    <div class="city-hero">
      <span class="section-kicker">${city.signature}</span>
      <h3>${city.name}</h3>
      <p>${city.vibe}</p>
      <div class="city-meta">
        ${city.tags.map(tag => `<span class="pill">${tag}</span>`).join('')}
      </div>
      <div class="city-highlights">
        ${city.highlights.map(([title, text], index) => `
          <div class="highlight-item">
            <span class="highlight-icon">${index + 1}</span>
            <span><b>${title}</b><span>${text}</span></span>
          </div>`).join('')}
      </div>
    </div>
    <div class="city-visual-card">
      <div class="city-score">
        <div class="score-box"><strong>${relevant.length}</strong><span>точек в планере</span></div>
        <div class="score-box"><strong>${city.tempo}</strong><span>рекомендуемый темп</span></div>
      </div>
      <div class="city-visual-title">
        <span>готовый ход</span>
        <b>${city.route}</b>
      </div>
    </div>
  `;
}

function renderRoutes() {
  routeGrid.innerHTML = routes.map(route => `
    <article class="route-card glass-panel reveal ${route.featured ? 'featured' : ''}">
      <header>
        <span class="route-label">${route.label}</span>
        <h3>${route.title}</h3>
        <p>${route.desc}</p>
      </header>
      <ol class="timeline">
        ${route.steps.map(step => `<li><time>${step[0]}</time><span><b>${step[1]}</b><span>${step[2]}</span></span></li>`).join('')}
      </ol>
      <button class="btn btn-primary" type="button" data-route-template="${route.template}">Добавить в планер</button>
    </article>
  `).join('');
  observeReveals();
}

function renderMapNodes() {
  mapNodesEl.innerHTML = mapNodes.map(node => {
    const city = cityById(node.city);
    const active = node.city === activeCity ? 'active' : '';
    return `
      <g class="big-node ${active}" tabindex="0" role="button" aria-label="Показать ${city.name}" data-city="${city.id}" style="--node-color:${city.color}" transform="translate(${node.x} ${node.y})">
        <circle class="halo" r="42"></circle>
        <circle class="core" r="22"></circle>
        <text x="${node.labelX}" y="${node.labelY}">${city.name}</text>
      </g>
    `;
  }).join('');
  mapNodesEl.querySelectorAll('.big-node').forEach(node => {
    const activate = () => {
      activeCity = node.dataset.city;
      renderCityTabs();
      renderCityDetail();
      setMapInfo(activeCity);
      renderMapNodes();
      activeFilter = 'all';
      renderFilters();
      renderPlaces();
      vibrate();
    };
    node.addEventListener('click', activate);
    node.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        activate();
      }
    });
  });
}

function setMapInfo(cityId) {
  const city = cityById(cityId);
  const list = places.filter(place => place.city === cityId).slice(0, 4);
  mapInfo.style.setProperty('--city-color', city.color);
  mapInfo.innerHTML = `
    <span class="section-kicker">точка на схеме</span>
    <h3>${city.name}</h3>
    <p>${city.vibe}</p>
    <div class="map-facts">
      <div class="map-fact"><span>Темп</span><b>${city.tempo}</b></div>
      <div class="map-fact"><span>Лучшее время</span><b>${city.bestTime}</b></div>
      <div class="map-fact"><span>Точки рядом</span><b>${list.length}</b></div>
    </div>
    <div class="city-highlights">
      ${list.map((place, index) => `
        <div class="highlight-item">
          <span class="highlight-icon">${index + 1}</span>
          <span><b>${place.name}</b><span>${place.desc}</span></span>
        </div>`).join('')}
    </div>
    <a class="btn btn-primary" href="${mapLink(city.name + ' Кавказские Минеральные Воды')}" target="_blank" rel="noopener">Открыть город в Яндекс.Картах</a>
  `;
}

function renderFilters() {
  const types = ['all', ...new Set(places.filter(place => place.city === activeCity).map(place => place.type))];
  filterRow.innerHTML = types.map(type => `<button type="button" class="filter-btn ${type === activeFilter ? 'active' : ''}" data-filter="${type}">${typeLabels[type] || type}</button>`).join('');
  filterRow.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
      activeFilter = button.dataset.filter;
      renderFilters();
      renderPlaces();
      vibrate();
    });
  });
}

function renderPlaces() {
  const query = (searchInput?.value || '').toLowerCase().trim();
  const filtered = places.filter(place => {
    const matchesCity = place.city === activeCity;
    const matchesType = activeFilter === 'all' || place.type === activeFilter;
    const haystack = `${place.name} ${place.desc} ${typeLabels[place.type]} ${cityById(place.city).name}`.toLowerCase();
    const matchesQuery = !query || haystack.includes(query);
    return matchesCity && matchesType && matchesQuery;
  });

  placeList.innerHTML = filtered.length ? filtered.map(place => `
    <article class="place-card">
      <div class="place-card-top">
        <h3>${place.name}</h3>
        <span class="place-tag">${typeLabels[place.type] || place.type}</span>
      </div>
      <p>${place.desc}</p>
      <div class="city-meta"><span class="pill">${cityById(place.city).name}</span><span class="pill">${place.time}</span></div>
      <div class="place-actions">
        <button class="mini-btn" type="button" data-add-place="${place.id}">Добавить</button>
        <a href="${mapLink(place.query)}" target="_blank" rel="noopener">Карта</a>
      </div>
    </article>
  `).join('') : `<div class="empty-route">По этому фильтру ничего не найдено. Попробуй другой город или запрос.</div>`;

  placeList.querySelectorAll('[data-add-place]').forEach(button => {
    button.addEventListener('click', () => addPlace(button.dataset.addPlace));
  });
}

function addPlace(placeId) {
  if (!selectedRoute.includes(placeId)) {
    selectedRoute.push(placeId);
    showToast('Точка добавлена в маршрут');
  } else {
    showToast('Эта точка уже есть в маршруте');
  }
  renderSelectedRoute();
  vibrate();
}

function renderSelectedRoute() {
  emptyRouteEl.style.display = selectedRoute.length ? 'none' : 'grid';
  selectedRouteEl.innerHTML = selectedRoute.map(placeId => {
    const place = placeById(placeId);
    return `
      <li>
        <span><b>${place.name}</b><span>${cityById(place.city).name} · ${place.time}</span></span>
        <button class="remove-btn" type="button" aria-label="Удалить ${place.name}" data-remove-place="${place.id}">×</button>
      </li>
    `;
  }).join('');
  selectedRouteEl.querySelectorAll('[data-remove-place]').forEach(button => {
    button.addEventListener('click', () => {
      selectedRoute = selectedRoute.filter(id => id !== button.dataset.removePlace);
      renderSelectedRoute();
      vibrate();
    });
  });
}

function applyTemplate(templateId) {
  const template = routeTemplates[templateId] || [];
  selectedRoute = [...new Set(template)];
  renderSelectedRoute();
  showToast('Готовый маршрут добавлен в планер');
  vibrate();
}

document.querySelector('#clearRoute')?.addEventListener('click', () => {
  selectedRoute = [];
  renderSelectedRoute();
  showToast('Маршрут очищен');
});

document.querySelector('#copyRoute')?.addEventListener('click', async () => {
  if (!selectedRoute.length) {
    showToast('Сначала добавь точки в маршрут');
    return;
  }
  const text = selectedRoute.map((id, index) => {
    const place = placeById(id);
    return `${index + 1}. ${place.name} — ${cityById(place.city).name}, ${place.time}`;
  }).join('\n');
  try {
    await navigator.clipboard.writeText(`Мой маршрут по КМВ:\n${text}`);
    showToast('Маршрут скопирован');
  } catch {
    showToast('Не удалось скопировать автоматически');
  }
});

searchInput?.addEventListener('input', renderPlaces);

function observeReveals() {
  const items = [...document.querySelectorAll('.reveal:not([data-observed])')];
  if (!('IntersectionObserver' in window)) {
    items.forEach(item => item.classList.add('is-visible'));
    return;
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .13, rootMargin: '0px 0px -40px 0px' });
  items.forEach(item => {
    item.dataset.observed = 'true';
    observer.observe(item);
  });
}

function setupNavSpy() {
  const links = [...document.querySelectorAll('.desktop-nav a, .bottom-nav a')];
  const sections = links
    .map(link => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);
  if (!('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      links.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
    });
  }, { threshold: .38 });
  sections.forEach(section => observer.observe(section));
}

function setupTilt() {
  const tilt = document.querySelector('[data-tilt]');
  if (!tilt || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  tilt.addEventListener('pointermove', event => {
    const rect = tilt.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - .5;
    const y = (event.clientY - rect.top) / rect.height - .5;
    tilt.style.transform = `rotateX(${(-y * 7).toFixed(2)}deg) rotateY(${(x * 7).toFixed(2)}deg) translateZ(0)`;
  });
  tilt.addEventListener('pointerleave', () => {
    tilt.style.transform = 'rotateX(0deg) rotateY(0deg)';
  });
}

function init() {
  renderCityTabs();
  renderCityDetail();
  renderRoutes();
  renderMapNodes();
  setMapInfo(activeCity);
  renderFilters();
  renderPlaces();
  renderSelectedRoute();
  observeReveals();
  setupNavSpy();
  setupTilt();
}

init();
