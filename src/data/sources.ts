export type SourceLink = {
  title: string
  note: string
  url: string
}

export type SourceCategory = {
  id: string
  title: string
  links: SourceLink[]
}

export type ResearchSource = {
  id: string
  brand: string
  title: string
  summary: string
  year: string
  platform: string
  url: string
  tags: string[]
}

export const researchSources: ResearchSource[] = [
  {
    id: 'edison-marketing-analytics',
    brand: 'Edison Studio',
    title: 'Маркетинговая аналитика: целевая аудитория пользователей бетона',
    summary:
      'PDF-исследование, использован раздел по целевой аудитории пользователей бетона (стр. 11-12).',
    year: 'без даты',
    platform: 'Edison Studio (PDF)',
    url: 'https://edisonstudio.ru/images/doc/Marketingovaya_analitika_edison.pdf',
    tags: ['целевая аудитория', 'бетон', 'исследование'],
  },
  {
    id: 'concretecalc-analog',
    brand: 'ConcreteCalc',
    title: 'ConcreteCalc — онлайн-калькулятор бетона',
    summary: 'Сервис-калькулятор как близкий функциональный аналог для расчётов по бетону.',
    year: 'без даты',
    platform: 'concretecalc.ru',
    url: 'https://concretecalc.ru/',
    tags: ['аналог', 'калькулятор бетона', 'конкуренты'],
  },
  {
    id: 'calc-ru-concrete',
    brand: 'Calc.ru',
    title: 'Калькулятор состава бетона',
    summary: 'Профильный калькулятор состава бетона для сопоставления структуры и пользовательского пути.',
    year: 'без даты',
    platform: 'calc.ru',
    url: 'https://www.calc.ru/sostav-betona-kalkulyator.html',
    tags: ['аналог', 'состав бетона', 'калькулятор'],
  },
  {
    id: 'kalk-pro-analog',
    brand: 'Kalk.pro',
    title: 'Kalk.pro — инженерные калькуляторы',
    summary: 'Платформа инженерных калькуляторов, использована как референс по UX и сценариям расчёта.',
    year: 'без даты',
    platform: 'kalk.pro',
    url: 'https://kalk.pro/',
    tags: ['аналог', 'референс', 'UX'],
  },
  {
    id: 'quick-offer-2026',
    brand: 'Quick Offer',
    title: 'Зарплата фронтенд-разработчика 2026',
    summary: 'Обзор зарплат frontend-разработчиков в 2026: данные hh.ru, Хабр и Dream Job.',
    year: '2026',
    platform: 'hh.ru / Хабр / Dream Job',
    url: 'https://quick-offer.ru/news/frontend-developers-salary?utm_source=chatgpt.com',
    tags: ['salary review', 'frontend', 'рынок РФ'],
  },
  {
    id: 'yandex-practicum-2025',
    brand: 'Яндекс Практикум',
    title: 'Сколько зарабатывает frontend-разработчик в 2026 году',
    summary: 'Материал Яндекс Практикума с опорой на данные Хабр Карьеры и рынка за 2025.',
    year: '2025',
    platform: 'Яндекс Практикум / Хабр Карьера',
    url: 'https://practicum.yandex.ru/blog/skolko-zarabatyvayut-frontend-razrabotchiki/?utm_source=chatgpt.com',
    tags: ['habr career', 'доход', 'аналитика'],
  },
  {
    id: 'frontskill-salary',
    brand: 'FrontSkill',
    title: 'Зарплаты фронтенд-разработчика: рынок, грейды, переговоры',
    summary: 'Детальная разбивка по уровням (junior-middle-senior) и региональным различиям.',
    year: '2026',
    platform: 'FrontSkill',
    url: 'https://frontskill.ru/docs/career/salaries?utm_source=chatgpt.com',
    tags: ['грейды', 'регионы', 'переговоры'],
  },
  {
    id: 'skypro-market-2025',
    brand: 'Skypro',
    title: 'Доход front-end разработчика в России в 2025 году',
    summary: 'Аналитика рынка с общими зарплатными диапазонами по направлению front-end.',
    year: '2025',
    platform: 'Skypro',
    url: 'https://sky.pro/wiki/profession/dohod-front-end-razrabotchika-v-rossii-skolko-mozhno-zarabotat-v-2025-godu/?utm_source=chatgpt.com',
    tags: ['общие диапазоны', 'рынок', 'Россия'],
  },
]

export const sourceCategories: SourceCategory[] = [
  {
    id: 'market-and-analogs',
    title: 'Источники по аналитике и аналогам проекта',
    links: researchSources.map((source) => ({
      title: `${source.brand} — ${source.title}`,
      note: source.summary,
      url: source.url,
    })),
  },
]
