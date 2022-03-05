---
layout: post
title: "Pathogen - Открытый клиент для Анилибрии"
keywords: "pathogen,патоген,typescript,ionic,Анилибрия,AniLibria"
description: "Pathogen - свободное ПО (лицензированное в соответствии с GPLv3) для работы с AniLibria"
image: "/assets/img/pathogen-announce-article-cover.jpg"
category: overview
---

## Что такое Pathogen?

> Статья не завершена и активно пишется

### Кратко

Pathogen - свободное ПО для работы с AniLibria REST API, написанное на [React](https://ru.reactjs.org/) с применением компонентов [Ionic Framework](https://ionicframework.com/), а так же включающее дополнительные компоненты.

### Платформы

| Web | Android | iOS | iPadOS |
| --- | ------- | --- | ------ |
| ✔   | ✔       | ❌  | ❌     |

### Открытость

Pathogen - лицензирован в соответствии с лицензией GPLv3.
GPLv3 - [Копилефт](https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D0%BF%D0%B8%D0%BB%D0%B5%D1%84%D1%82) лицензия свободного ПО, применяемая фондом [Свободного Программного Обеспечения](https://ru.wikipedia.org/wiki/%D0%A4%D0%BE%D0%BD%D0%B4_%D1%81%D0%B2%D0%BE%D0%B1%D0%BE%D0%B4%D0%BD%D0%BE%D0%B3%D0%BE_%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%BD%D0%BE%D0%B3%D0%BE_%D0%BE%D0%B1%D0%B5%D1%81%D0%BF%D0%B5%D1%87%D0%B5%D0%BD%D0%B8%D1%8F) и множеством других разработчиков открытого ПО.

#### Краткое описание лицензии GPLv3

1.  **Любой** желающий может **копировать**, **изменять** и **распространять** это программное обеспечение.
1.  Вы **должны** включать **уведомление о лицензии и авторских правах** в каждое распространение.
1.  Вы можете использовать это программное обеспечение в **частном порядке**.
1.  Вы можете использовать это программное обеспечение в **коммерческих целях**.
1.  Если вы решитесь строить свой бизнес исключительно на основе этого кода, вы рискуете открыть весь **исходный код**.
1.  Если вы изменяете его, вы **должны** указать **изменения**, внесенные в код.
1.                __Любые модификации__ этой кодовой базы __должны__ распространяться с той же лицензией, __GPLv3__.
1.  Это программное обеспечение предоставляется без **гарантии**.
1.  Автор программного обеспечения или лицензия не могут **нести ответственность** за любой
    ущерб, причиненный программным обеспечением.

## Технический обзор

Поскольку **Pathogen** лицензирован под лицензией GPLv3, его исходный код открыт и доступен любому желающему на [GitHub](https://github.com/maxqwars/pathogen). В этой части статьи будет дано описание как рабочего процесса, так и обьяснение архитектуры проекта, а так же описание используемых в нём компонентов.

### Требование к среде разработки

Для начала работы над Pathogen и (или) его собственной сборки вам понадобятся.

- [Git](https://git-scm.com/)
- [Yarn](https://yarnpkg.com/)
- [NodeJS](https://nodejs.org/en/) >= `16 or higher`
- [Visual Studio Code](https://code.visualstudio.com/) или другой редактор с поддержкой [EditorConfig](https://editorconfig.org/), [Prettier](https://prettier.io/), [ESLint](https://eslint.org/) (опционально).
- Android SDK + adb (опционально)
- Хотя бы примерное понимание строения проектов на NodeJS
- Умение держать хотя бы ложку (опционально)

### Подготовка к разработке

#### Клонируйте проект

Получите последнюю доступную версию проекта с GitHub

```bash
$ git clone git@github.com:maxqwars/pathogen.git
```

<br />

#### Установите зависимости проекта

Эта команда создаст папку `node_modules/` и установить все необходимые компоненты для работы с проектом.

```bash
$ yarn install
```

<br />

#### Доступные скрипты

##### start

Запускает проект в режиме разработки. После выполнение команды следить за изменениями в коде собирает проект, открывает браузерное окно.

##### build

Собирает готовую для развёртки версию Pathogen

##### format

Форматирует код с помощью `Prettier`

##### test

Запускает модульное тестирование с использованием `Jest`

##### prepare

Выполняется автоматические после `yarn install`, подготавливает среду разработки

##### preversion

Выполняется до создания новой версии командой `npm version (major|minor|patch)`.
В конкретном случае запускает модульное тестирование, и в случае удачи разрешает дальнейшее исполнение.

##### version

Выполняется при `npm version (major|minor|patch)`.
Изменяет значение поля `version` в package.json, и добавляет файлы в список отслеживаемых в git.

##### postversion

Выполняется после `npm version (major|minor|patch)`.
Загружает изменение на удалённый репозиторий, добавляет тег версии.

##### lint

Проверяет исходный код с помощью `ESLint`

### Сторонии библиотеки используемые в Pathogen

#### Список

- TypeScript
- Ionic Framework
- CapacitorJS
- Redux
- i18next
- Apache Cordova
- Google workbox

##### [TypeScript](https://www.typescriptlang.org/)

> TypeScript — язык программирования, представленный Microsoft в 2012 году и позиционируемый как средство разработки веб-приложений, расширяющее возможности JavaScript

##### [Ionic Framework](https://ionicframework.com/)

> Полный пакет SDK с открытым исходным кодом для разработки гибридных мобильных приложений, созданный Максом Линчем, Беном Сперри и Адамом Брэдли из Drifty Co. в 2013 году.

##### [CapacitorJS](https://capacitorjs.com/)

> Capacitor is an open source native runtime for building Web Native apps. Create cross-platform iOS, Android, and Progressive Web Apps with JavaScript, HTML, and CSS.

##### [Redux](https://redux.js.org/)

> Библиотека для JavaScript с открытым исходным кодом, предназначенная для управления состоянием приложения. Чаще всего используется в связке с React или Angular для разработки клиентской части.

##### [i18next](https://www.i18next.com/)

> I18next is an internationalization-framework written in and for JavaScript. But it's much more than that. i18next goes beyond just providing the standard i18n features such as (plurals, context, interpolation, format). It provides you with a complete solution to localize your product from web to mobile and desktop.

##### [Apache Cordova](https://cordova.apache.org/)

> Cordova wraps your HTML/JavaScript app into a native container which can access the device functions of several platforms. These functions are exposed via a unified JavaScript API, allowing you to easily write one set of code to target nearly every phone or tablet on the market today and publish to their app stores.

##### [Workbox](https://web.dev/workbox/)

> Workbox is a high-level service worker toolkit built on top of the Service Worker and Cache Storage APIs. It provides a production-ready set of libraries for adding offline support to web apps. The toolkit is structured into two collections: tools that help manage code that runs inside of your service worker, and tools that integrate with your build process.

### Структура проекта

#### Сокращенная

| Папка       | Описание                                          |
| ----------- | ------------------------------------------------- |
| assets/     | Ресурсы приложения, изображение и всё что не код  |
| components/ | Компоненты react без состояния                    |
| constants/  | Константы                                         |
| containers/ | Компоненты react имеющие доступ к состоянию redux |
| enums/      | Перечисления                                      |
| functions/  | Функции и утилиты                                 |
| i18n/       | Переводы и конфигурация i18next                   |
| layout/     | Компоненты разметки                               |
| pages/      | Страницы приложения                               |
| redux/      | Redux и всё что с ним связано                     |
| services/   | Сервисы, бизнес логика                            |
| slices/     | Срезы состояния для redux                         |
| theme/      | Переменные темы Ionic Framework                   |

#### Детали

##### assets

Сюда входят все ресурсы что не являются програмным кодом, а так же ресурсы необходимые для других компонентов, например иллюстрации для [Rive](https://rive.app/)

##### components

"Глупые" react компоненты, получающие свои значения от компонентов родителей и реагирующие на события вызовом функций переданных копмпонентом родителем.

##### constants

Просто константы, параметры размеров колонок в разметке например.

## Поддержать разработку

Разработка больших программ это трудное занятие, в этой части статьи написано о способах помочь разработке в Pathogen.

### Вклад в проект

Если вы являетесь разработчиком, вы можете помочь в написании и (или) улучшении кода Pathogen, для этого внимательно ознакомтесь с [Contribution guide]() на странице репозитория.
Если вы решите совершить вклад в разработку Pathogen. И при необходимости связаться со мной в [VK](https://vk.com/maxqwars) или [Telegram](https://t.me/maxqwars).
