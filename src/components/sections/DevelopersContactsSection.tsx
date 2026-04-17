import { developers } from '../../data/developers'
import { Reveal } from '../ui/Reveal'
import { DeveloperCard } from './DeveloperCard'

export function DevelopersContactsSection() {
  return (
    <section
      className="mx-auto w-full max-w-shell px-4 pb-14 sm:px-8 sm:pb-18 lg:px-10"
      style={{ contentVisibility: 'auto' }}
    >
      <Reveal>
        <div className="mb-7 flex flex-wrap items-end justify-between gap-4 border-b border-white/10 pb-5 sm:mb-10 sm:pb-6">
          <div>
            <p className="text-[0.65rem] uppercase tracking-[0.24em] text-zinc-500">Контакты</p>
            <h2 className="mt-2 font-title text-2xl uppercase tracking-[0.12em] text-zinc-100 sm:text-3xl">
              КОМАНДА
            </h2>
          </div>
        </div>
      </Reveal>

      <Reveal className="mb-6 sm:mb-8" delay={0.04}>
        <div className="mb-4 grid gap-2 border-b border-white/10 pb-4 sm:grid-cols-2 lg:flex lg:flex-wrap lg:items-center lg:gap-x-4 lg:gap-y-2">
          {developers.map((developer) => (
            <span
              key={`badge-${developer.id}`}
              className="rounded-lg border border-white/10 bg-zinc-900/40 px-2.5 py-2 text-[0.54rem] uppercase tracking-[0.16em] text-zinc-500 lg:border-none lg:bg-transparent lg:px-0 lg:py-0 lg:text-zinc-600"
            >
              {developer.name} · {developer.role}
            </span>
          ))}
        </div>
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-4 xl:gap-6">
        {developers.map((developer, index) => (
          <Reveal key={developer.id} delay={index * 0.05} className="h-full">
            <DeveloperCard developer={developer} index={index} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
