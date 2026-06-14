# KMW Glass Guide

Готовый статический сайт-гид по Кавказским Минеральным Водам.

## Что внутри

- `index.html` — структура сайта и SEO-мета.
- `styles.css` — премиальный glassmorphism UI, bento-layout, адаптив, анимации и reduced-motion fallback.
- `app.js` — интерактивные города, схема региона, фильтры мест, сборщик маршрута, копирование плана и ссылки на Яндекс.Карты.
- `assets/favicon.svg`, `assets/og-card.svg` — SVG-брендинг без тяжёлых картинок.

## Паттерны из изученных репозиториев

- Glassmorphism: `backdrop-filter: blur(18px) saturate(170%)`, полупрозрачные слои, тонкие borders.
- Liquid/spatial feel: фоновые gradient blobs, глубина, мягкий glow, layered cards.
- Bento grid: модульные блоки настроений, маршрутов и подсказок.
- Mobile-first UX: нижняя навигация, крупные touch targets, адаптивные сетки.
- Animation system: 150–300ms micro-interactions, reveal on scroll, hover lift, parallax/tilt, `prefers-reduced-motion`.
- Accessibility: skip-link, focus-visible, aria-labels, keyboard activation for map nodes.

## Запуск

Откройте `index.html` в браузере или загрузите папку на GitHub Pages/Vercel/любой статический хостинг.

## Быстрая публикация на GitHub Pages

1. Создайте репозиторий.
2. Загрузите содержимое папки `kmv-glass-guide` в корень репозитория.
3. Включите GitHub Pages: Settings → Pages → Deploy from branch → `main` / root.

