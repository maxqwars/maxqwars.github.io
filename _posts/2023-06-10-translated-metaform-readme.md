---
title: Перевод README.md репозитория Metaform
date: 2023-06-10 12:00:00 +0400
categories: [Руководства, Открытые Проекты]
tags: [OpenSource, JavaScript, Сообщество, Metaform]
---

<center>
    <img src="https://raw.githubusercontent.com/maxqwars/metaform/main/banner.png" alt="">
</center>

<br>

<center>

![](https://img.shields.io/github/issues/maxqwars/metaform)
![](https://img.shields.io/github/forks/maxqwars/metaform)
![](https://img.shields.io/github/stars/maxqwars/metaform)
![](https://img.shields.io/github/license/maxqwars/metaform)
![](https://img.shields.io/librariesio/dependents/npm/@maxqwars/metaform)
![](https://img.shields.io/github/release-date/maxqwars/metaform)
![](https://img.shields.io/github/contributors/maxqwars/metaform)
![](https://img.shields.io/github/package-json/v/maxqwars/metaform)

</center>

## О проекте

Metaform - это библиотека с открытым исходным кодом для работы с AniLibria Web API. Разработана **без использования сторонних зависимостей** в производственной версии.
Metaform работает в браузере и Nodejs.

Особая благодарность проекту [VK-IO](https://github.com/negezor/vk-io), который вдохновил Metaform3.


## Причины использовать Метаформ

Причины использовать Metaform в своих проектах

- Открытый исходный код, распространяемый по либеральной лицензии
- Без привязки к сторонним библиотекам и фреймворкам
- Поддержка Nodejs и браузеров
- 100% поддержка оригинального API
- Простой и интуитивно понятный API, аналогичный оригинальному API

## Установка

### Шаг 0: Установка

> $ npm install @maxqwars/metaform

или установите с локального диска

> $ npm install ./path-to-metaform-dir

### Для API V3

```javascript
import { metaform3 } from "@maxqwars/metaform/metaform3";
```

### Для API V2

```javascript
import { metaform2 } from "@maxqwars/metaform/metaform2";
```

## Метаформа в действии

Вы можете попробовать Metaform3 в действии на сайте CodeSandbox

\* Если вы находитесь на территории России, используйте VPN

[![CODESANDBOX](https://raw.githubusercontent.com/maxqwars/metaform/main/play_in_sandbox.png)]()

## API Метаформы

Metaform наследует имя методов оригинального API с HTTP-методом используемого API.

> Конечная точка оригинального API -> GET \<host>/title
>
> Метод метаформы -> metaform.getTitle()

Подробную информацию о доступных методах можно найти в [репозитории с документацией](https://github.com/anilibria/docs) оригинального API

## Таблица совместимости API V3

- ✔ Полностью готов к использованию
- 🔧 Работает, но требует доработки
- ⛔ Не реализовано ни в каком виде

| Метод                      | Статус |
| -------------------------- | ------ |
| GET /title/list            | ✔      |
| GET /title/random          | ✔      |
| GET /title/updates         | ✔      |
| GET /title/changes         | ✔      |
| GET /title/search          | 🔧      |
| GET /franshise/list        | ✔      |
| GET /title                 | ✔      |
| GET /genres                | ✔      |
| GET /team                  | ✔      |
| GET /years                 | ✔      |
| GET /title/search          | ✔      |
| GET /title/schedule        | ⛔      |
| GET /title/search/advanced | ⛔      |
| GET /title/franshises      | ⛔      |
| GET /youtube               | ⛔      |
| GET /feed                  | ⛔      |
| GET /torrent/seed_stats    | ⛔      |
| GET /torrent/rss           | ⛔      |
| GET /user                  | ⛔      |
| GET /user/favorites        | ⛔      |
| PUT /user/favorites        | ⛔      |
| DELETE /user/favorites     | ⛔      |

## Рабочий процесс разработки

Требования и инструкции к процессу разработки метаформы

### Шаг 1: Проверка требований

Metaform - это проект, написанный на JS и использующий систему сборки [Rollup](https://rollupjs.org/). Для разработки metaform вам необходима последняя стабильная версия среды исполнения [nodejs](https://nodejs.org/en) и менеджер пакетов npm, с которым она поставляется. Для управления изменениями требуется [Git](https://git-scm.com/).

### Шаг 2: Клонирование кода и установка зависимостей

Сначала получите текущую версию исходного кода

> $ git clone https://github.com/maxqwars/metaform

После этого откройте окно команд в папке с исходным кодом Metaform. В Linux вы можете использовать опцию всплывающего меню, в Windows откройте меню с зажатой клавишей `Shift`.

После этого используйте менеджер пакетов npm для установки зависимостей.

> $ npm install

### Шаг 3: Обзор скриптов

Сборка метаформы, а также сопровождение кода осуществляется с помощью скриптов, указанных в секции `scripts файла `packages.json`. В этой части приводится их список и описание.

#### `prebuild`.

Выполняется перед командой `build` и удаляет каталог с предыдущей сборкой.

#### `build`.

Запускает процесс сборки готовой к использованию версии

#### `dev`.

Запускает rollup в режиме отслеживания файлов, код перестраивается после каждого изменения в папке `src`.

#### `lint`

Анализирует код на наличие ошибок с помощью ESLint

#### `lint:fix`

Исправляет ошибки, найденные в коде с помощью ESLint

#### `format`

Форматирует код, следуя за хвостовиком, полезно, когда ваш редактор кода не поддерживает плагин Prettier

#### `test`

Запускает инструмент модульного тестирования Jest

### Шаг 4: Запустите ваш код в playground

-

### Шаг 5: Push или вклад

-

## Вклад

Если вы нашли ошибку, испытываете трудности с использованием Metaform или хотите предложить улучшение, используйте контакты ниже:

- [Автор в Telegram (рекомендуется)](https://t.me/maxqwars)
- [Почта автора](mailto:maxqwars@gmail.com?subject=Metaform)

## Лицензия

MetaForm - это библиотека с открытым исходным кодом, распространяемая по лицензии [MIT]().
