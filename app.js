const icon = {
  water: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12.8 2.4a1 1 0 0 0-1.6 0C8.8 5.7 6 10.4 6 14a6 6 0 0 0 12 0c0-3.6-2.8-8.3-5.2-11.6ZM12 18a4 4 0 0 1-4-4c0-2.1 1.5-5.2 4-8.9 2.5 3.7 4 6.8 4 8.9a4 4 0 0 1-4 4Z"/></svg>',
  mountain: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.2 18.5 9.8 5.3a1.7 1.7 0 0 1 3 0l2.2 4.3 1.2-2.1a1.7 1.7 0 0 1 3 0l4.5 9a1.7 1.7 0 0 1-1.5 2.5H4.7a1.7 1.7 0 0 1-1.5-2.5Zm8-11.4-5 9.9h10l-2.4-4.8-1.5 1.5a1 1 0 0 1-1.4 0l-1.8-1.8 2.1-4.8Z"/></svg>',
  park: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a5 5 0 0 0-3.2 8.8c-3.3.7-5.8 3.6-5.8 7.2a1 1 0 0 0 2 0 5.4 5.4 0 0 1 5-5.4V21a1 1 0 1 0 2 0v-8.4A5.4 5.4 0 0 1 17 18a1 1 0 1 0 2 0c0-3.6-2.5-6.5-5.8-7.2A5 5 0 0 0 12 2Zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"/></svg>',
  history: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 1 0 10 10 1 1 0 1 0-2 0 8 8 0 1 1-2.35-5.65l-1.9.2a1 1 0 1 0 .2 1.99l4.2-.42a1 1 0 0 0 .9-1.1l-.42-4.2a1 1 0 0 0-1.99.2l.18 1.76A9.97 9.97 0 0 0 12 2Zm1 5a1 1 0 1 0-2 0v5c0 .27.1.52.3.71l3 3a1 1 0 0 0 1.4-1.42L13 11.59V7Z"/></svg>',
  architecture: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2 3 7v2h18V7l-9-5ZM5 11v7H4a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2h-1v-7h-2v7h-2v-7h-2v7h-2v-7H9v7H7v-7H5Zm7-6.7L16.9 7H7.1L12 4.3Z"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9.3 5.3a1 1 0 0 1 1.4 0l6 6a1 1 0 0 1 0 1.4l-6 6a1 1 0 1 1-1.4-1.4l5.3-5.3-5.3-5.3a1 1 0 0 1 0-1.4Z"/></svg>',
  heart: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21a1 1 0 0 1-.6-.2C7 17.5 3 14.3 3 9.7A5.2 5.2 0 0 1 8.2 4.5c1.5 0 2.8.6 3.8 1.6a5.2 5.2 0 0 1 9 3.6c0 4.6-4 7.8-8.4 11.1a1 1 0 0 1-.6.2ZM8.2 6.5A3.2 3.2 0 0 0 5 9.7c0 3.3 2.8 5.8 7 8.98 4.2-3.18 7-5.68 7-8.98a3.2 3.2 0 0 0-6.1-1.32 1 1 0 0 1-1.8 0A3.2 3.2 0 0 0 8.2 6.5Z"/></svg>',
  heartFill: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21a1 1 0 0 1-.6-.2C7 17.5 3 14.3 3 9.7A5.2 5.2 0 0 1 8.2 4.5c1.5 0 2.8.6 3.8 1.6a5.2 5.2 0 0 1 9 3.6c0 4.6-4 7.8-8.4 11.1a1 1 0 0 1-.6.2Z"/></svg>',
};

const mapSearch = (query) => `https://yandex.ru/maps/?text=${encodeURIComponent(query)}`;
const googleSearch = (query) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

const cities = [
  {
    id: 'kislovodsk', short: 'К', name: 'Кисловодск', subtitle: 'Парк, нарзан и терренкуры', mood: 'самый “дышащий” день', altitude: '817–1062 м', time: '1–2 дня', tags: ['nature', 'water', 'family', 'photo'],
    art: 'radial-gradient(circle at 25% 22%, rgba(255,255,255,.86), transparent 18%), radial-gradient(circle at 72% 30%, rgba(94,234,212,.44), transparent 20%), linear-gradient(150deg, rgba(15,118,110,.28), rgba(217,119,6,.18) 45%, rgba(125,211,252,.24))',
    intro: 'Выбирай Кисловодск, когда хочется длинной прогулки, видов, нарзана и ощущения большого природного парка прямо из центра города.',
    places: [
      { title: 'Нарзанная галерея', icon: 'water', desc: 'Архитектурный символ Кисловодска и удобная точка старта от Курортного бульвара.', query: 'Нарзанная галерея Кисловодск улица Алексея Реброва 2', detail: 'Начинай отсюда: рядом центр, бульвар, входы в парк и классический курортный ритм.' },
      { title: 'Национальный парк', icon: 'park', desc: 'Терренкуры, смотровые, маршруты, зелёный сценарий на целый день.', query: 'Национальный парк Кисловодский Курортный бульвар 21', detail: 'Лучше идти не “до конца”, а выбрать один круг: нижний парк, Долина роз или подъём к смотровым.' },
      { title: 'Каскадная лестница', icon: 'architecture', desc: 'Фототочка и красивый выход из прогулки по парку.', query: 'Каскадная лестница Кисловодск', detail: 'Хороша вечером или утром, когда свет мягкий, а людей меньше.' }
    ]
  },
  {
    id: 'pyatigorsk', short: 'П', name: 'Пятигорск', subtitle: 'Машук, Провал и Лермонтов', mood: 'самый драматичный маршрут', altitude: '510–630 м', time: '5–8 часов', tags: ['history', 'mountain', 'photo'],
    art: 'radial-gradient(circle at 72% 20%, rgba(255,255,255,.82), transparent 18%), radial-gradient(circle at 35% 48%, rgba(217,119,6,.3), transparent 24%), linear-gradient(145deg, rgba(124,92,62,.28), rgba(14,165,163,.2) 55%, rgba(2,132,199,.2))',
    intro: 'Пятигорск — город для маршрута с сюжетом: гора, гроты, Провал, старые бульвары и литературные ассоциации.',
    places: [
      { title: 'Озеро Провал', icon: 'water', desc: 'Подземное бирюзовое озеро на склоне Машука, вход через тоннель.', query: 'Озеро Провал Пятигорск', detail: 'Иди пешком от бульвара Гагарина или подъезжай ближе, если маршрут уже насыщенный.' },
      { title: 'Гора Машук', icon: 'mountain', desc: 'Главная панорамная точка Пятигорска и вид на весь район КМВ.', query: 'Гора Машук Пятигорск канатная дорога', detail: 'Для первого визита удобно подняться канаткой, а вниз идти пешком только при нормальной обуви.' },
      { title: 'Парк Цветник', icon: 'park', desc: 'Удобная стартовая точка для прогулки к гротам, галереям и старым ваннам.', query: 'Парк Цветник Пятигорск', detail: 'Хороший вариант, чтобы собрать “Пятигорск без машины” в пеший маршрут.' }
    ]
  },
  {
    id: 'essentuki', short: 'Е', name: 'Ессентуки', subtitle: 'Галереи и спокойный курорт', mood: 'самый размеренный день', altitude: '600–640 м', time: '3–5 часов', tags: ['water', 'calm', 'architecture'],
    art: 'radial-gradient(circle at 18% 26%, rgba(255,255,255,.9), transparent 18%), radial-gradient(circle at 74% 62%, rgba(217,119,6,.24), transparent 22%), linear-gradient(145deg, rgba(217,119,6,.2), rgba(15,118,110,.16) 52%, rgba(245,240,231,.35))',
    intro: 'Ессентуки лучше раскрываются без спешки: галереи, курортные аллеи, архитектура и спокойный ритм питьевого курорта.',
    places: [
      { title: 'Галерея 5000', icon: 'water', desc: 'Крупная питьевая галерея с водами Ессентуки №4, №17 и Новая.', query: 'Галерея 5000 Ессентуки улица Пушкина 4', detail: 'Встрой галерею в прогулку, а не делай её единственной целью: вокруг есть парк и тихие аллеи.' },
      { title: 'Курортный парк', icon: 'park', desc: 'Приятная прогулочная зона для неспешного дня и архитектурных деталей.', query: 'Курортный парк Ессентуки', detail: 'Хорош для лёгкого маршрута без подъёмов и перегрузки.' },
      { title: 'Галерея источника №17', icon: 'architecture', desc: 'Историческая питьевая точка у входа в Курортный парк.', query: 'Галерея источника Ессентуки 17', detail: 'Отличная связка с Нижней аллеей и центральной прогулкой.' }
    ]
  },
  {
    id: 'zheleznovodsk', short: 'Ж', name: 'Железноводск', subtitle: 'Лес, лестницы и камерность', mood: 'самый уютный город', altitude: '600–650 м', time: '4–6 часов', tags: ['nature', 'water', 'family', 'architecture'],
    art: 'radial-gradient(circle at 70% 20%, rgba(255,255,255,.82), transparent 18%), radial-gradient(circle at 24% 68%, rgba(94,234,212,.26), transparent 22%), linear-gradient(145deg, rgba(15,118,110,.2), rgba(124,92,62,.22) 55%, rgba(217,119,6,.13))',
    intro: 'Железноводск — компактный, лесной и удобный: можно собрать парк, источники, дворец и озеро без тяжёлой логистики.',
    places: [
      { title: 'Пушкинская галерея', icon: 'architecture', desc: 'Архитектурный символ Железноводска в Лечебном парке.', query: 'Пушкинская галерея Железноводск Курортный парк', detail: 'Поставь её в центр маршрута: от неё удобно расходятся прогулочные точки парка.' },
      { title: 'Каскадная лестница', icon: 'park', desc: 'Одна из самых зрелищных прогулок города с видом и водой.', query: 'Каскадная лестница Железноводск', detail: 'Лучше идти в удобной обуви и оставить время на остановки у воды.' },
      { title: 'Дворец Эмира Бухарского', icon: 'history', desc: 'Восточный архитектурный акцент у главной аллеи Лечебного парка.', query: 'Дворец Эмира Бухарского Железноводск', detail: 'Хорошая точка для фото и короткого исторического акцента.' }
    ]
  }
];

const moods = [
  { id: 'classic', label: 'Первый раз', hint: 'баланс городов' },
  { id: 'water', label: 'Минеральная вода', hint: 'галереи и бюветы' },
  { id: 'photo', label: 'Красивые фото', hint: 'виды и архитектура' },
  { id: 'family', label: 'Без перегруза', hint: 'семейный темп' },
  { id: 'history', label: 'История', hint: 'Лермонтов и старые курорты' },
  { id: 'nature', label: 'Парки и горы', hint: 'зелёный день' }
];

const routes = [
  {
    id: 'classic-kmv', title: 'Классика КМВ за 1 день', badge: 'первый визит', mood: ['classic', 'photo'], duration: '8–10 часов', pace: 'активно', color: '#0f766e',
    desc: 'Маршрут для тех, кто хочет почувствовать весь регион: Пятигорск как драма, Ессентуки как вода, Кисловодск как парк.',
    points: ['Пятигорск: Цветник → Провал', 'Ессентуки: Галерея 5000', 'Кисловодск: Нарзанная галерея и бульвар'],
    map: 'Парк Цветник Пятигорск Озеро Провал Галерея 5000 Ессентуки Нарзанная галерея Кисловодск'
  },
  {
    id: 'water-line', title: 'Линия минеральных источников', badge: 'вода', mood: ['water', 'classic'], duration: '5–7 часов', pace: 'спокойно', color: '#0284c7',
    desc: 'Сценарий без гонки по смотровым: галереи, короткие переходы, паузы и красивые здания.',
    points: ['Кисловодск: Нарзанная галерея', 'Ессентуки: №4, №17 и Галерея 5000', 'Железноводск: источники в Лечебном парке'],
    map: 'Нарзанная галерея Кисловодск Галерея 5000 Ессентуки Пушкинская галерея Железноводск'
  },
  {
    id: 'pyatigorsk-story', title: 'Пятигорск с сюжетом', badge: 'история', mood: ['history', 'photo'], duration: '4–6 часов', pace: 'пешком', color: '#7c5c3e',
    desc: 'Один город, но плотный маршрут: Цветник, гроты, Провал, Машук и старые курортные виды.',
    points: ['Старт в парке Цветник', 'Переход к гротам и Эоловой арфе', 'Провал → Машук'],
    map: 'Парк Цветник Пятигорск Грот Дианы Эолова арфа Озеро Провал гора Машук'
  },
  {
    id: 'soft-family', title: 'Семейный день без перегруза', badge: 'семья', mood: ['family', 'nature'], duration: '3–5 часов', pace: 'мягко', color: '#d97706',
    desc: 'Короткие точки, меньше подъёмов, больше пауз: Железноводск или нижняя часть Кисловодского парка.',
    points: ['Железноводск: Пушкинская галерея', 'Каскадная лестница и озеро', 'Кафе/пауза без дальних переездов'],
    map: 'Пушкинская галерея Железноводск Каскадная лестница Железноводск Курортное озеро Железноводск'
  },
  {
    id: 'kislovodsk-green', title: 'Зелёный Кисловодск', badge: 'природа', mood: ['nature', 'photo', 'family'], duration: '5–8 часов', pace: 'по силам', color: '#16a34a',
    desc: 'Маршрут для тех, кто хочет не “закрыть точки”, а провести день в парке с видами и нарзаном.',
    points: ['Нарзанная галерея', 'Нижний парк и Долина роз', 'Каскадная лестница или смотровая'],
    map: 'Нарзанная галерея Кисловодск Долина роз Кисловодск Каскадная лестница Кисловодск'
  },
  {
    id: 'architecture-line', title: 'Архитектурная прогулка', badge: 'детали', mood: ['photo', 'history'], duration: '6–8 часов', pace: 'умеренно', color: '#9333ea',
    desc: 'Для фото и деталей: галереи, курзалы, дворцы, старые ванны и курортные фасады.',
    points: ['Кисловодск: Нарзанная галерея', 'Ессентуки: Курортный парк', 'Железноводск: Пушкинская галерея и дворец'],
    map: 'Нарзанная галерея Кисловодск Курортный парк Ессентуки Пушкинская галерея Железноводск Дворец Эмира Бухарского Железноводск'
  }
];

const state = {
  city: cities[0].id,
  mood: 'classic',
  saved: new Set(JSON.parse(localStorage.getItem('kmv.saved.routes') || '[]'))
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

function saveState() {
  localStorage.setItem('kmv.saved.routes', JSON.stringify([...state.saved]));
}

function showToast(message) {
  const toast = $('#toast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove('show'), 1900);
}

function renderCityTabs() {
  const host = $('#cityTabs');
  host.innerHTML = cities.map((city) => `
    <button class="city-tab" role="tab" type="button" id="tab-${city.id}" aria-selected="${city.id === state.city}" aria-controls="cityStage" data-city="${city.id}">
      ${city.name}
    </button>
  `).join('');

  host.onclick = (event) => {
    const button = event.target.closest('[data-city]');
    if (!button) return;
    state.city = button.dataset.city;
    renderCityTabs();
    renderCityStage();
  };
}

function renderCityStage() {
  const city = cities.find((item) => item.id === state.city) || cities[0];
  const host = $('#cityStage');
  host.setAttribute('aria-labelledby', `tab-${city.id}`);
  host.innerHTML = `
    <div class="city-hero-card" style="--city-art: ${city.art}">
      <span class="city-kicker">${city.mood}</span>
      <div>
        <h3>${city.name}</h3>
        <p>${city.intro}</p>
      </div>
    </div>
    <div class="city-info-card">
      <div class="city-meta">
        <div><span>Высота</span><strong>${city.altitude}</strong></div>
        <div><span>Ритм</span><strong>${city.time}</strong></div>
        <div><span>Сюжет</span><strong>${city.subtitle}</strong></div>
      </div>
      <div class="place-list">
        ${city.places.map((place, index) => `
          <button class="place-item" type="button" data-city="${city.id}" data-place="${index}">
            <span class="place-icon">${icon[place.icon]}</span>
            <span><strong>${place.title}</strong><small>${place.desc}</small></span>
            <span class="place-arrow">${icon.arrow}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `;
}

function renderMoodChips() {
  const host = $('#moodChips');
  host.innerHTML = moods.map((mood) => `
    <button class="chip ${mood.id === state.mood ? 'active' : ''}" type="button" data-mood="${mood.id}" aria-pressed="${mood.id === state.mood}">
      ${mood.label}
    </button>
  `).join('');

  host.onclick = (event) => {
    const chip = event.target.closest('[data-mood]');
    if (!chip) return;
    state.mood = chip.dataset.mood;
    renderMoodChips();
    renderRecommendation();
    renderRoutes();
  };
}

function getRecommendedRoute() {
  return routes.find((route) => route.mood.includes(state.mood)) || routes[0];
}

function renderRecommendation() {
  const route = getRecommendedRoute();
  $('#heroRouteName').textContent = route.title;
  $('#recommendation').innerHTML = `
    <span class="route-badge" style="--route-color: ${route.color}">${route.badge}</span>
    <h3>${route.title}</h3>
    <p>${route.desc}</p>
    <ul class="rec-steps">
      ${route.points.map((point, index) => `<li><span>${index + 1}</span><strong>${point}</strong></li>`).join('')}
    </ul>
    <a class="button button-primary" href="${mapSearch(route.map)}" target="_blank" rel="noopener">Открыть маршрут</a>
  `;
}

function routeCard(route) {
  const saved = state.saved.has(route.id);
  const rank = route.mood.includes(state.mood) ? 0 : 1;
  return `
    <article class="route-card" data-route-id="${route.id}" data-rank="${rank}" style="--route-color: ${route.color}">
      <div class="route-top">
        <span class="route-badge">${route.badge}</span>
        <button class="save-route ${saved ? 'saved' : ''}" type="button" data-save="${route.id}" aria-label="${saved ? 'Удалить из избранного' : 'Добавить в избранное'}">
          ${saved ? icon.heartFill : icon.heart}
        </button>
      </div>
      <h3>${route.title}</h3>
      <p>${route.desc}</p>
      <div class="route-stats">
        <span>${route.duration}</span>
        <span>${route.pace}</span>
      </div>
      <ul class="route-points">
        ${route.points.map((point) => `<li>${point}</li>`).join('')}
      </ul>
      <div class="route-actions">
        <a class="button button-primary" href="${mapSearch(route.map)}" target="_blank" rel="noopener">Яндекс</a>
        <a class="button button-ghost" href="${googleSearch(route.map)}" target="_blank" rel="noopener">Google</a>
      </div>
    </article>
  `;
}

function renderRoutes(onlySaved = false) {
  const sorted = [...routes].sort((a, b) => {
    const aRank = a.mood.includes(state.mood) ? 0 : 1;
    const bRank = b.mood.includes(state.mood) ? 0 : 1;
    return aRank - bRank;
  });
  const visible = onlySaved ? sorted.filter((route) => state.saved.has(route.id)) : sorted;
  $('#routesGrid').innerHTML = visible.length
    ? visible.map(routeCard).join('')
    : `<div class="recommendation"><h3>Пока ничего не сохранено</h3><p>Нажми на сердечко в карточке маршрута — и он появится здесь.</p></div>`;
}

function openPlace(cityId, placeIndex) {
  const city = cities.find((item) => item.id === cityId);
  const place = city?.places[Number(placeIndex)];
  if (!city || !place) return;

  $('#dialogContent').innerHTML = `
    <div class="dialog-art" style="--dialog-art: ${city.art}"></div>
    <div class="dialog-body">
      <span class="eyebrow">${city.name}</span>
      <h2 id="dialogTitle">${place.title}</h2>
      <p>${place.desc}</p>
      <p>${place.detail}</p>
      <div class="dialog-actions">
        <a class="button button-primary" href="${mapSearch(place.query)}" target="_blank" rel="noopener">Открыть в Яндекс.Картах</a>
        <a class="button button-ghost" href="${googleSearch(place.query)}" target="_blank" rel="noopener">Google Maps</a>
      </div>
    </div>
  `;

  const dialog = $('#placeDialog');
  if (typeof dialog.showModal === 'function') dialog.showModal();
  else dialog.setAttribute('open', '');
}

function bindDelegatedEvents() {
  document.addEventListener('click', (event) => {
    const placeButton = event.target.closest('[data-place]');
    if (placeButton) {
      openPlace(placeButton.dataset.city, placeButton.dataset.place);
      return;
    }

    const saveButton = event.target.closest('[data-save]');
    if (saveButton) {
      const id = saveButton.dataset.save;
      if (state.saved.has(id)) {
        state.saved.delete(id);
        showToast('Маршрут удалён из избранного');
      } else {
        state.saved.add(id);
        showToast('Маршрут сохранён');
      }
      saveState();
      renderRoutes($('#showSaved').classList.contains('active'));
    }
  });

  $('#dialogClose').addEventListener('click', () => $('#placeDialog').close?.() || $('#placeDialog').removeAttribute('open'));
  $('#placeDialog').addEventListener('click', (event) => {
    if (event.target === $('#placeDialog')) $('#placeDialog').close();
  });

  $('#showSaved').addEventListener('click', (event) => {
    const button = event.currentTarget;
    button.classList.toggle('active');
    const active = button.classList.contains('active');
    button.textContent = active ? 'Все маршруты' : 'Избранное';
    renderRoutes(active);
  });

  $('#themeToggle').addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('kmv.theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
  });
}

function initObservers() {
  const header = $('.site-header');
  const elevateHeader = () => header.dataset.elevated = window.scrollY > 12 ? 'true' : 'false';
  elevateHeader();
  window.addEventListener('scroll', elevateHeader, { passive: true });

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  $$('.section-observe').forEach((section) => revealObserver.observe(section));

  const navLinks = [...$$('.desktop-nav a'), ...$$('.bottom-nav a')];
  const sectionById = ['top', 'cities', 'routes', 'planner', 'tips'].map((id) => document.getElementById(id)).filter(Boolean);
  const navObserver = new IntersectionObserver((entries) => {
    const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    navLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${visible.target.id}`));
  }, { rootMargin: '-34% 0px -58% 0px', threshold: [0, .2, .6] });
  sectionById.forEach((section) => navObserver.observe(section));
}

function registerServiceWorker() {
  if ('serviceWorker' in navigator && location.protocol !== 'file:') {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }
}

function init() {
  if (localStorage.getItem('kmv.theme') === 'dark') document.documentElement.classList.add('dark');
  renderCityTabs();
  renderCityStage();
  renderMoodChips();
  renderRecommendation();
  renderRoutes();
  bindDelegatedEvents();
  initObservers();
  registerServiceWorker();
}

document.addEventListener('DOMContentLoaded', init);
