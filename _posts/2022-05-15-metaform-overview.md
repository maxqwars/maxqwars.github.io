---
layout: post
title: "metaform - библиотека для работы с REST API"
keywords: "typescript,metaform,anilibria,rest-api,library"
description: "metaform - открытая (MIT) библиотека для работы с REST API"
image: "/assets/articles/metaform.jpg"
category: overview
---

# Введение

## Synopsis

**Metaform** - открытая библиотека для работы с **AniLibria** REST-API построенная на использовании **fetch()** и **Promises**.

### Предыстория

Метаформа создавалась как продолжение и работа над ошибками другой библиотеки [XConnect](https://github.com/maxqwars/xconnect), заброшенной по причине **X**. Сама оригинальная библиотека создавалась с целью упростить написание клиентов для работы с **AniLibria REST API** и использовалась в приложение [Sayan](https://github.com/maxqwars/sayan). Впрочем его история это уже отдельный разговор.

## ⚠ Предостережение

Metaform находится на ранней стадии разработки, наименование классов и методов может изменятся от версии к версии, но к первому стабильному релизу всё стабилизируется, наверно.

### Статус реализации

| API             | Status          | Notice                                        |
| --------------- | --------------- | --------------------------------------------- |
| getTitle        | Partial support | A revision of the response parser is required |
| getRandomTitle  | Partial support | A revision of the response parser is required |
| getTitles       | Not supported   |                                               |
| getUpdates      | Partial support | A revision of the response parser is required |
| getChanges      | Not supported   |                                               |
| getSchedule     | Not supported   |                                               |
| getYouTube      | Not supported   |                                               |
| getFeed         | Not supported   |                                               |
| getYears        | Full support    | Ready to use                                  |
| getGenres       | Full support    | Ready to use                                  |
| getCachingNodes | Not supported   |                                               |
| getTeam         | Not supported   |                                               |
| getSeedStats    | Not supported   |                                               |
| getRSS          | Not supported   |                                               |
| searchTitles    | Partial support | A revision of the response parser is required |
| advancedSearch  | Not supported   |                                               |

# Структура

## Базовые классы

Базовые классы фундамент metaform, они [инкапсулируют](<https://en.wikipedia.org/wiki/Encapsulation_(computer_programming)>) логику по работе с отдельными аспектами работы с API, вроде построение URL для вызова процедур и сборки параметров запроса.

| Класс             | Описание                                                                                                                                     |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| RequestURLBuilder | Отвечает за построение URL к конечной точке API. Устанавливает протокол, версию и метод API, так же добавляет строку параметров запроса.     |
| QueryBuilderBase  | Базовый класс для создания все строителей параметров запроса, содержит методы для добавления ключа и формирования конечной строки параметров |

## Модули

Модули это самый быстрый, краткий и удобный способ работы с API. Модули избавляют вас от написания шаблонного кода, предоставляя простой для взаимодействия и понимания интерфейс.

| Имя модуля | Работает с методами                                         |
| ---------- | ----------------------------------------------------------- |
| Database   | getTitle, getRandomTitle, getTitles, getUpdates, getChanges |
| Search     | getGenres, getYears, searchTitles, advancedSearch           |
| Schedule   | getSchedule                                                 |
| Feed       | getYouTube, getFeed                                         |
| Orphans    | getCachingNodes, getSeedStats, getTeam, getRSS              |
| Tracker    | getSeedStats                                                |

# Примеры

## Без использования модулей

```typescript
import { Core, Constants, Classes } from "@maxqwars/metaform";

async function main() {
  // Создаем экземпляр строителя URL
  const reqUrlBuild = new Core.RequestURLBuilder(
    "api.anilibria.tv", // Базовый API URL
    Constants.API_VERSION.V2, // Версия API
    true // Флаг указывающий использовать защищенный протокол
  );

  // Мы используем строитель запросов от метода getTitle т.к. они идентичны
  const getTitleQueryBuilder = new Classes.GetTitleQueryBuilder();

  // Сборка Query params
  getTitleQueryBuilder.setFilter(["names"]); // Указывает что запрашиваем только поле names

  // Build request URL
  const requestUrl = reqUrlBuild
    .setEndpoint(Constants.API_ENDPOINTS.GET_RANDOM_TITLE) // Указываем вызываемый метод API
    .setQueryParams(getTitleQueryBuilder.build()) // Добавляем строку с параметрами запроса
    .build(); // Собираем финальный URL

  const req = await fetch(requestUrl);

  if (req.ok) {
    const data = await req.json();
    console.log(data);
  }
}

main();
```

## Используя модуль MetaDatabase

```typescript
import { Modules, Constants } from "@maxqwars/metaform";

async function main() {
  const db = new Modules.Database({
    baseUrl: "api.anilibria.tv", // Базовый API URL
    useHttps: true, // Флаг указывающий использовать защищенный протокол
    timeout: 1000, // Время ожидания ответа
    version: Constants.API_VERSION.V2, // Версия API
  });

  const results = await db.getRandomTitle({
    // Здесь укажите значения параметров запроса
  });

  if (results.error) {
    throw new Error("Failed fetch random release");
  }

  console.log(results.content);
}

main();
```

## Ссылки

- [Документация по AniLibria REST-API](https://github.com/anilibria/docs/blob/master/api_v2.md)
- [Репозиторий на GitHub](https://github.com/maxqwars/metaform)
- [Интерактивный пример на CodeSandbox](https://codesandbox.io/s/metaform-in-action-fj9jly)

# F.A.Q

<center>
<h2>Вопросов не имеется</h2>
</center>
