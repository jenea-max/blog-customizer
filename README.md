# Проектная работа: Вёрстка проекта

## Сборка проекта

Для запуска Storybook выполните:

```
npm run storybook
```

Для запуска линтера для стилей выполните:

```
npm run stylelint
```

Для запуска линтера выполните:

```
npm run lint
```

Для запуска форматтера выполните:

```
npm run format
```

## Описание проекта

Ознакомительный, простой проект, реализрованеый с помощью фреймворка React. Здесь можно настроить под свои предпочнения внешнюю составляющую главной страницы блога о швейцарской авиакомпании.

## Стек технологий

TypeScript, SCSS, JavaScript, React, Webpack

## Стурктура проекта

.src/
├── components/
│ ├── Article/
│ │ ├── Article.tsx
│ │ ├── Article.module.scss
│ │ └── index.tsx
│ ├── ArticleParamsForm/
│ │ ├── ArticleParamsForm.tsx
│ │ ├── ArticleParamsForm.module.scss
│ │ └── index.tsx
├── constants/
│ └── articleProps.
├── fonts/
│ ├── fonts-files/
│ └── fonts.scss
├── images/
├── ui/
│ ├── arrow-button/
│ ├── button/
│ ├── radio-group/
│ ├── select/
│ ├── separator/
│ ├── story-decorator/
│ └── text/
├── styles/
│ ├──index.module.scss
│ └──index.scss
├── custom.d.ts
└── index.tsx
