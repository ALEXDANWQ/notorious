export type Developer = {
  id: string
  name: string
  role: string
  tagline: string
  telegram: string
  telegramLabel: string
  email: string
  emailLabel: string
}

export const developers: Developer[] = [
  {
    id: 'vanta',
    name: 'ALEXDAN',
    role: 'CEO',
    tagline: 'Архитектура без шума. Чёткий ритм поставки.',
    telegram: 'https://t.me/alexdan_www',
    telegramLabel: '@alexdan_www',
    email: 'mailto:alexdartx@yandex.ru',
    emailLabel: 'alexdartx@yandex.ru',
  },
  {
    id: 'irene-void',
    name: 'MATTHEWWELL',
    role: 'FRONTEND-РАЗРАБОТЧИК',
    tagline: 'Чистая геометрия интерфейсов и контроль состояния.',
    telegram: 'https://t.me/matthewwell',
    telegramLabel: '@matthewwell',
    email: 'mailto:matvejcvetkov309@yandex.ru',
    emailLabel: 'matvejcvetkov309@yandex.ru',
  },
  {
    id: 'kuro',
    name: 'WEISS',
    role: 'АНАЛИТИК',
    tagline: 'Системная логика продуктов, где детали решают всё.',
    telegram: 'https://t.me/niccwi',
    telegramLabel: '@niccwi',
    email: 'mailto:kseniabububu@gmail.com',
    emailLabel: 'kseniabububu@gmail.com',
  },
  {
    id: 'alex-node',
    name: 'DIR.BEBKA',
    role: 'BACKEND-РАЗРАБОТЧИК',
    tagline: 'Надёжная инфраструктура для резких команд.',
    telegram: 'https://t.me/directorbebka',
    telegramLabel: '@directorbebka',
    email: 'mailto:platinumstar534@gmail.com',
    emailLabel: 'platinumstar534@gmail.com',
  },
]
