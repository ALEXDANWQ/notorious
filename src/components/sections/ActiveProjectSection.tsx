import { Reveal } from '../ui/Reveal'
import { Link } from 'react-router-dom'

export function ActiveProjectSection() {
  return (
    <section
      className="mx-auto w-full max-w-shell px-4 pb-14 pt-2 sm:px-8 sm:pb-18 lg:px-10"
      style={{ contentVisibility: 'auto' }}
    >
      <Reveal>
        <article className="relative min-h-[18rem] overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-zinc-950/95 via-zinc-900/80 to-black p-4 shadow-line sm:min-h-[21rem] sm:p-7 lg:min-h-[23rem] lg:p-10">
          <div className="pointer-events-none absolute -left-20 top-8 h-44 w-44 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 -top-12 h-52 w-52 rounded-full bg-steel-300/10 blur-3xl" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
          <span className="pointer-events-none absolute right-4 top-4 h-2.5 w-2.5 animate-pulse rounded-full bg-white/90 shadow-[0_0_10px_rgba(255,255,255,0.75)] sm:right-5 sm:top-5" />

          <div className="relative z-10 flex min-h-[15rem] flex-col justify-center sm:min-h-[18rem]">
            <p className="text-[0.62rem] uppercase tracking-[0.24em] text-zinc-400">
              Активный проект сейчас
            </p>

            <div className="mt-5 flex flex-col gap-5 sm:mt-6 sm:gap-6 lg:flex-row lg:items-center lg:justify-between">
              <h2 className="font-title text-[1.9rem] uppercase leading-[0.86] tracking-[0.075em] text-zinc-100 sm:text-[3rem] md:text-[3.8rem] lg:text-[4.6rem]">
                <span className="bg-gradient-to-r from-zinc-100 via-white to-zinc-300 bg-clip-text text-transparent [text-shadow:0_0_30px_rgba(255,255,255,0.18)]">
                  WEB-LAB
                </span>
                <span className="mt-1 block bg-gradient-to-r from-zinc-300 via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
                  BEATON
                </span>
              </h2>

              <div className="max-w-2xl border-t border-white/15 pt-4 lg:max-w-md lg:border-l lg:border-t-0 lg:pl-5 lg:pt-0">
                <p className="text-[0.9rem] leading-relaxed text-zinc-300 sm:text-[1.02rem]">
                  Цифровой инструмент для грамотного выбора бетона. Сервис позволяет подобрать
                  оптимальный класс бетона, проанализировать его свойства и смоделировать
                  поведение конструкции ещё до начала строительства. Мы помогаем снизить риски
                  ошибок и повысить надёжность проектов за счёт удобных расчётов и наглядных
                  решений.
                </p>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2 sm:mt-7">
              <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[0.56rem] uppercase tracking-[0.16em] text-zinc-300">
                In Progress
              </span>
              <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[0.56rem] uppercase tracking-[0.16em] text-zinc-300">
                Web Product
              </span>
              <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[0.56rem] uppercase tracking-[0.16em] text-zinc-300">
                Not Serious Lab
              </span>
            </div>

            <div className="mt-5 sm:mt-6">
              <Link
                to="/sources"
                className="inline-flex items-center rounded-lg border border-white/20 bg-white/[0.04] px-4 py-2.5 font-title text-[0.62rem] uppercase tracking-[0.16em] text-zinc-100 transition-all duration-200 hover:border-white/35 hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
              >
                Подробнее
              </Link>
            </div>
          </div>
        </article>
      </Reveal>
    </section>
  )
}
