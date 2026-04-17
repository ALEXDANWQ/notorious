import { Reveal } from '../ui/Reveal'

const summaryItems = [
  {
    title: 'Инженерия',
    description: 'Проектируем систему до первой строки кода и держим архитектурный фокус на длинной дистанции.',
  },
  {
    title: 'Дизайн-системы',
    description: 'Каждый модуль интерфейса работает в едином визуальном и логическом языке без лишнего шума.',
  },
  {
    title: 'Точность интерфейса',
    description: 'Ритм, контраст и анимация настроены как инструмент продукта, а не как декоративный шум.',
  },
]

export function TeamSummarySection() {
  return (
    <section
      className="mx-auto w-full max-w-shell px-4 pb-16 pt-5 sm:px-8 sm:pb-20 sm:pt-8 lg:px-10"
      style={{ contentVisibility: 'auto' }}
    >
      <Reveal>
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4 border-b border-white/10 pb-5 sm:mb-8 sm:pb-6">
          <h2 className="font-title text-xl uppercase tracking-[0.1em] text-zinc-100 sm:text-2xl lg:text-3xl">
            Подход
          </h2>
          <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">метод / дисциплина / вкус</p>
        </div>
      </Reveal>

      <div className="grid gap-3 sm:gap-4 md:grid-cols-3 md:gap-6">
        {summaryItems.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.05} className="h-full">
            <article className="h-full rounded-xl border border-white/10 bg-zinc-900/30 p-4 sm:p-5 md:rounded-none md:border-0 md:border-l md:border-white/10 md:bg-transparent md:p-0 md:pl-4">
              <h3 className="font-title text-base uppercase tracking-[0.12em] text-zinc-200">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{item.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
