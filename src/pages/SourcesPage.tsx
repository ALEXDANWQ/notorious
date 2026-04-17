import { researchSources } from '../data/sources'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { Reveal } from '../components/ui/Reveal'

const economicsHighlights = [
  { label: 'Разработка', value: '120 000 ₽' },
  { label: 'Расходы / мес', value: '20 000 ₽' },
  { label: 'Доход / мес', value: '30 000 ₽' },
  { label: 'Прибыль / мес', value: '10 000 ₽' },
  { label: 'Окупаемость', value: '≈ 12 месяцев' },
]

const developmentStages = [
  { title: 'Верстка (UI + адаптив)', value: '40 ч' },
  { title: 'Логика подбора бетона', value: '35 ч' },
  { title: 'Таблица классов', value: '20 ч' },
  { title: 'Модуль «что если»', value: '35 ч' },
  { title: '3D визуализация (упрощённая)', value: '50 ч' },
  { title: 'Тестирование и правки', value: '20 ч' },
  { title: 'Итого', value: '200 ч' },
]

const monthlyExpenses = [
  { title: 'Хостинг + домен', value: '1 500 ₽' },
  { title: 'Поддержка (10 ч)', value: '6 000 ₽' },
  { title: 'Маркетинг (минимум)', value: '10 000 ₽' },
  { title: 'Прочее', value: '2 500 ₽' },
  { title: 'Итого', value: '20 000 ₽/мес' },
]

const revenueModel = [
  { title: 'Пользователи / мес', value: '1 000' },
  { title: 'Конверсия в заявки', value: '5%' },
  { title: 'Лиды', value: '50' },
  { title: 'Цена лида', value: '300 ₽' },
  { title: 'Доход с лидов', value: '15 000 ₽' },
  { title: 'Реклама', value: '10 000 ₽' },
  { title: 'Премиум функции', value: '5 000 ₽' },
  { title: 'Итого', value: '30 000 ₽/мес' },
]

export function SourcesPage() {
  useDocumentMeta(
    'NOT SERIOUS — Источники',
    'Источники, использованные при аналитике, исследованиях и создании презентации по рынку frontend.',
  )

  return (
    <section
      className="mx-auto w-full max-w-shell px-4 pb-16 pt-20 sm:px-8 sm:pb-20 sm:pt-24 lg:px-10"
      style={{ contentVisibility: 'auto' }}
    >
      <Reveal>
        <header className="relative mb-8 overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-zinc-950/95 via-zinc-900/80 to-black p-4 shadow-line sm:mb-12 sm:p-7 lg:p-10">
          <div className="pointer-events-none absolute -left-20 top-8 h-44 w-44 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 -top-12 h-52 w-52 rounded-full bg-steel-300/10 blur-3xl" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />

          <div className="relative z-10">
            <h1 className="font-title [font-size:clamp(1.7rem,9vw,3.55rem)] uppercase leading-[0.9] tracking-[0.1em] text-zinc-100">
              ИСТОЧНИКИ
            </h1>
            <p className="mt-4 max-w-3xl text-pretty text-sm leading-relaxed text-zinc-300 sm:mt-5 sm:text-base">
              Использовались при аналитике, исследованиях и создании презентации.
            </p>

            <div className="mt-5 flex flex-wrap gap-2.5 sm:mt-7">
              <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[0.56rem] uppercase tracking-[0.16em] text-zinc-300">
                2026
              </span>
              <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[0.56rem] uppercase tracking-[0.16em] text-zinc-300">
                Frontend Market
              </span>
            </div>
          </div>
        </header>
      </Reveal>

      <ol className="grid gap-3 sm:gap-5">
        <Reveal>
          <li>
            <article className="relative overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br from-zinc-950/95 via-zinc-900/80 to-black p-3.5 shadow-line sm:p-6 lg:p-7">
              <div className="pointer-events-none absolute -left-16 top-6 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
              <div className="pointer-events-none absolute -right-12 top-0 h-44 w-44 rounded-full bg-steel-300/10 blur-3xl" />
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />

              <div className="relative z-10 flex items-start gap-3 sm:gap-5">
                <span className="mt-0.5 font-title text-base uppercase tracking-[0.12em] text-zinc-500 sm:text-xl">
                  01
                </span>

                <div className="min-w-0 flex-1">
                  <p className="text-[0.58rem] uppercase tracking-[0.2em] text-zinc-500">
                    Not Serious · 2026
                  </p>

                  <h2 className="mt-2 font-title text-[0.95rem] uppercase tracking-[0.12em] text-zinc-100 sm:text-[1.06rem]">
                    Экономика проекта
                  </h2>

                  <p className="mt-3 max-w-3xl text-sm leading-relaxed text-zinc-300 sm:text-[0.96rem]">
                    Финансовая модель запуска платформы подбора бетона на основе ставки junior 600
                    ₽/час и общего объёма работ 200 часов.
                  </p>

                  <div className="mt-5 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-5">
                    {economicsHighlights.map((item) => (
                      <div
                        key={item.label}
                        className="rounded-xl border border-white/15 bg-white/[0.03] px-3.5 py-3"
                      >
                        <p className="text-[0.52rem] uppercase tracking-[0.15em] text-zinc-500">
                          {item.label}
                        </p>
                        <p className="mt-1.5 font-title text-sm uppercase tracking-[0.08em] text-zinc-100">
                          {item.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 grid gap-3 sm:gap-4 lg:grid-cols-3">
                    <div className="rounded-xl border border-white/15 bg-white/[0.03] p-3.5 sm:p-4">
                      <p className="text-[0.56rem] uppercase tracking-[0.16em] text-zinc-500">
                        Трудозатраты
                      </p>
                      <ul className="mt-3 space-y-2">
                        {developmentStages.map((item) => (
                          <li
                            key={item.title}
                            className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-x-3 text-[0.72rem] text-zinc-200 max-[420px]:grid-cols-1 max-[420px]:gap-y-1"
                          >
                            <span className="leading-snug text-zinc-300">{item.title}</span>
                            <span className="pt-0.5 text-right font-title uppercase tracking-[0.08em] text-zinc-100 max-[420px]:pt-0 max-[420px]:text-left">
                              {item.value}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-xl border border-white/15 bg-white/[0.03] p-3.5 sm:p-4">
                      <p className="text-[0.56rem] uppercase tracking-[0.16em] text-zinc-500">
                        Ежемесячные расходы
                      </p>
                      <ul className="mt-3 space-y-2">
                        {monthlyExpenses.map((item) => (
                          <li
                            key={item.title}
                            className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-x-3 text-[0.72rem] text-zinc-200 max-[420px]:grid-cols-1 max-[420px]:gap-y-1"
                          >
                            <span className="leading-snug text-zinc-300">{item.title}</span>
                            <span className="pt-0.5 text-right font-title uppercase tracking-[0.08em] text-zinc-100 max-[420px]:pt-0 max-[420px]:text-left">
                              {item.value}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-xl border border-white/15 bg-white/[0.03] p-3.5 sm:p-4">
                      <p className="text-[0.56rem] uppercase tracking-[0.16em] text-zinc-500">
                        Модель дохода
                      </p>
                      <ul className="mt-3 space-y-2">
                        {revenueModel.map((item) => (
                          <li
                            key={item.title}
                            className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-x-3 text-[0.72rem] text-zinc-200 max-[420px]:grid-cols-1 max-[420px]:gap-y-1"
                          >
                            <span className="leading-snug text-zinc-300">{item.title}</span>
                            <span className="pt-0.5 text-right font-title uppercase tracking-[0.08em] text-zinc-100 max-[420px]:pt-0 max-[420px]:text-left">
                              {item.value}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </li>
        </Reveal>

        {researchSources.map((source, index) => (
          <Reveal key={source.id} delay={0.05 + index * 0.05}>
            <li>
              <a
                href={source.url}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`${source.brand} — ${source.title}`}
                className="group block rounded-2xl border border-zinc-700/70 bg-zinc-900/35 p-3.5 transition-all duration-200 hover:border-zinc-300/60 hover:bg-zinc-900/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 sm:p-5 lg:p-6"
              >
                <div className="flex items-start gap-3 sm:gap-5">
                  <span className="font-title text-base uppercase tracking-[0.12em] text-zinc-500 sm:text-xl">
                    {String(index + 2).padStart(2, '0')}
                  </span>

                  <div className="min-w-0 flex-1">
                    <p className="text-[0.58rem] uppercase tracking-[0.2em] text-zinc-500">
                      {source.brand} · {source.year}
                    </p>

                    <h2 className="mt-2 font-title text-[0.92rem] uppercase tracking-[0.11em] text-zinc-100 sm:text-[1.03rem] sm:tracking-[0.12em]">
                      {source.title}
                    </h2>

                    <p className="mt-3 text-sm leading-relaxed text-zinc-300 sm:text-[0.96rem]">
                      {source.summary}
                    </p>

                    <p className="mt-2 text-[0.7rem] uppercase tracking-[0.16em] text-zinc-500">
                      Источник: {source.platform}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {source.tags.map((tag) => (
                        <span
                          key={`${source.id}-${tag}`}
                          className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[0.54rem] uppercase tracking-[0.14em] text-zinc-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <span className="mt-0.5 hidden shrink-0 text-zinc-500 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-zinc-200 sm:block">
                    ↗
                  </span>
                </div>
              </a>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  )
}
