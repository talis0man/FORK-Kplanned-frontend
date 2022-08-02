# Kplanned-frontend

## Используемые технологии

- React
- TypeScript

- React Router
- Redux
- Redux-Saga
- Styled Components
- Axios
- Prettier
- Jest

- Eslint
- Vite

## Структура папок

"+" - помечены файлы и папки доступные для использования

"-" - помечены файлы и папки недоступные для использования

```
|+ dist/                            - папка с build файлами
|+ src/                             - папка с dev файлами
  |+ assets/                        - папка с ресурсами
    |+ fonts/                       - папка со шрифтами
      |+ 'font-name'/               - папка со шрифтом
        |+ 'font-name'.woff         - файл шрифта woff
        |+ 'font-name'.woff2        - файл шрифта woff2
    |+ img/                         - папка с изображениями
      |+ jpg/                       - сюда кладем jpg
      |+ png/                       - сюда кладем png
      |+ svg/                       - сюда кладем svg
    |+ sprite/                      - папка для svg-спрайта
      |+ svg/                       - папка для svg-файлов вставляемых в спрайт
        |+ 'svg-name'.svg           - файл svg
      |- entry.js                   - файл конфигурации спрайта
    |+ styles/                      - папка со стилями
      |+ _common.scss               - файл с общими стилями
      |+ _fonts.scss                - файл с подключение шрифтов
      |+ _index.scss                - файл точки входа для стилей
      |+ _markup.scss               - файл базовой media-разметки
      |+ _mixins.scss               - файл с scss-миксинами
      |+ _reset.scss                - файл сбрасывающий стили браузера в 0
      |+ _vars.scss                 - файл с scss-переменными
  |+ components/                    - папка с компонентами проекта
    |+ 'UiCompName'.vue             - файл vue-компонента
  |+ router/                        - папка с конфигурацией роутера
    |+ index.ts                     - файл конфигурации роутера
  |+ store/                         - папка хранилища
    |+ index.ts                     - файл хранилища
  |+ views /                        - папка с файлами представлений
    |+ layouts /                    - папка с макетами страниц
      |+ DefaultLayout.vue          - файл с дефолтным макетом
    |+ 404.vue                      - файл страницы 404
    |+ Main.vue                     - файл главной страницы
    |+ About.vue                    - файл второстепенной страницы
  |+ App.vue                        - файл приложения
|- eslintrc.js                      - файл конфигурации EsLint
|+ .gitignore                       - файл с исключениями git
|+ index.html                       - файл монтирования приложения
|- package.json                     - файл конфигурации проекта npm
|- package-lock.json                - файл конфигурации проекта npm
|- README.md                        - файл readme
|- tsconfig.json                    - файл конфигурации TypeScript
|- tsconfig.node.json               - файл конфигурации TypeScript
|+ vite.config.js                   - файл конфигурации Vite
|- yarn.lock                        - файл конфигурации проекта yarn
```

### Руководство по стилю кода
