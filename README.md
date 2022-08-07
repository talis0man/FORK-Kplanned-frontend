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
|+ .storybook/                      - папка с файлами конфигурации Storybook
  |+ main.js                        - файл конфигурации Storybook
  |+ preview.js                     - файл глобальных импортов для превью Storybook
|+ __mocks__/                       - папка с моками для тестирования
  |+ fileMock.js                    - файл mock
|+ cypress/                         - папка с файлами Cypress
  |+ fixtures/                      - папка с данными для тестов Cypress
  |+ integration/                   - папка с тестами Cypress
  |+ plugins/                       - папка для конфигурации плагинов Cypress
    |+ index.ts                     - файл конфигурации плагинов Cypress
  |+ support/                       - папка для конфигурации модулей Cypress
    |+ commands.ts                  - файл для конфигурации кастомных команд Cypress
    |+ index.ts                     - файл для объявления глобальных модулей Cypress
  |+ .eslintrc.json                 - файл для конфигурации EsLint под Cypress
  |+ tsconfig.json                  - файл конфигурации TypeScript под Cypress
|+ public/                          - корневая папка на сервере
|+ src/                             - папка с dev файлами
  |+ assets/                        - папка с ресурсами
  |+ components/                    - папка с компонентами проекта
  |+ hooks/                         - папка с хуками проекта
  |+ router/                        - папка с конфигурацией роутера
  |+ services/                      - папка с сервисами
  |+ store/                         - папка хранилища
  |+ stories/                       - папка с stories для Storybook
    |+ assets/                      - папка с ресурсами Storybook
  |+ types/                         - папка вспомогательных типов
  |+ utils/                         - папка вспомогательных функций
  |+ index.css                      - файл со стилями глвной страницы
  |+ main.tsx                       - файл скрипта подключаемого на страницу
  |+ vite-env.d.ts                  - файл с определениями типов из переменных окружения
|+ .eslintignore                    - файл с исключениями EsLint
|- eslintrc.js                      - файл конфигурации EsLint
|+ .gitignore                       - файл с исключениями git
|- .prettierrc                      - файл конфигурации Prettier
|+ .stylelintignore                 - файл с исключениями Stylelint
|- .stylelintrc.json                - файл конфигурации Stylelint
|- cypress.json                     - файл конфигурации Cypress
|+ index.html                       - файл монтирования приложения
|- jest.config.js                   - файл конфигурации Jest
|- LICENSE                          - файл лицензионного соглашения
|- package.json                     - файл конфигурации проекта npm
|- package-lock.json                - файл конфигурации проекта npm
|- README.md                        - файл readme
|- tsconfig.json                    - файл конфигурации TypeScript
|- tsconfig.node.json               - файл конфигурации TypeScript
|+ vite.config.js                   - файл конфигурации Vite
```

### Руководство по стилю кода
