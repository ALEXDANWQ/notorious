import { m, useReducedMotion } from 'framer-motion'
import type { Developer } from '../../data/developers'

type DeveloperCardProps = {
  developer: Developer
  index: number
}

export function DeveloperCard({ developer, index }: DeveloperCardProps) {
  const reducedMotion = useReducedMotion()
  const isCeo = developer.role === 'CEO'
  const isOpenRole = developer.id === 'open-role'

  return (
    <m.article
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-700/70 bg-zinc-900/20 p-4 transition-all duration-200 hover:border-white/30 hover:bg-white/[0.03] sm:p-6"
      whileHover={reducedMotion ? undefined : { y: -4 }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-70" />

      <div className="flex items-start justify-between gap-4">
        <p
          className={
            isCeo
              ? 'rounded-md border border-white/20 bg-white/[0.04] px-2 py-1 text-[0.56rem] uppercase tracking-[0.18em] text-zinc-200 shadow-[0_0_18px_rgba(255,255,255,0.12)] sm:text-[0.62rem] sm:tracking-[0.2em]'
              : 'text-[0.62rem] uppercase tracking-[0.2em] text-zinc-500'
          }
        >
          {developer.role}
        </p>
        <span className="font-title text-[0.68rem] uppercase tracking-[0.2em] text-zinc-600">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <h3 className="mt-2 font-title text-[1.08rem] uppercase tracking-[0.11em] text-zinc-100 sm:text-xl">
        {developer.name}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-zinc-400">{developer.tagline}</p>

      <div className="mt-5 flex-1 border-t border-zinc-700/70 pt-3 transition-colors duration-200 group-hover:border-white/15">
        {isOpenRole ? (
          <a
            href={developer.telegram}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Написать в Telegram"
            className="flex h-full items-center justify-center text-center text-[0.62rem] uppercase tracking-[0.2em] text-zinc-300 transition-colors duration-200 hover:text-zinc-100"
          >
            НАПИСАТЬ
          </a>
        ) : (
          <div className="flex h-full flex-col justify-center space-y-2">
            <a
              href={developer.telegram}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`Telegram ${developer.name}`}
              className="flex min-w-0 items-center justify-between gap-3 text-zinc-300 transition-colors duration-200 hover:text-zinc-100"
            >
              <span className="text-[0.52rem] uppercase tracking-[0.18em] text-zinc-600">Telegram</span>
              <span className="truncate text-right text-[0.64rem] uppercase tracking-[0.1em] sm:text-[0.66rem]">
                {developer.telegramLabel}
              </span>
            </a>

            <a
              href={developer.email}
              aria-label={`Email ${developer.name}`}
              className="flex min-w-0 items-center justify-between gap-3 text-zinc-300 transition-colors duration-200 hover:text-zinc-100"
            >
              <span className="text-[0.52rem] uppercase tracking-[0.18em] text-zinc-600">Почта</span>
              <span className="truncate text-right text-[0.64rem] tracking-[0.04em] sm:text-[0.66rem]">
                {developer.emailLabel}
              </span>
            </a>
          </div>
        )}
      </div>
    </m.article>
  )
}
