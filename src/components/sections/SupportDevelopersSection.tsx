import { Reveal } from '../ui/Reveal'

type DollarParticle = {
  top: string
  delay: string
  duration: string
  size: string
  opacity: number
}

const dollarParticles: DollarParticle[] = [
  { top: '2%', delay: '0s', duration: '6s', size: '0.9rem', opacity: 0.44 },
  { top: '12%', delay: '-1.2s', duration: '5.2s', size: '1.02rem', opacity: 0.52 },
  { top: '24%', delay: '-0.5s', duration: '6.6s', size: '0.94rem', opacity: 0.4 },
  { top: '39%', delay: '-2s', duration: '5.1s', size: '0.96rem', opacity: 0.5 },
  { top: '56%', delay: '-3.1s', duration: '6.2s', size: '0.92rem', opacity: 0.42 },
  { top: '73%', delay: '-1.7s', duration: '5.7s', size: '0.88rem', opacity: 0.38 },
  { top: '88%', delay: '-2.8s', duration: '5.9s', size: '0.95rem', opacity: 0.45 },
  { top: '98%', delay: '-0.9s', duration: '6.4s', size: '0.86rem', opacity: 0.36 },
]

export function SupportDevelopersSection() {
  return (
    <section
      className="mx-auto w-full max-w-shell px-4 pb-6 sm:px-8 sm:pb-10 lg:px-10"
      style={{ contentVisibility: 'auto' }}
    >
      <Reveal>
        <div className="border-t border-white/10 pt-6 sm:pt-9">
          <div className="support-donate-zone relative isolate mx-auto flex min-h-[11.5rem] w-full max-w-3xl items-center justify-center overflow-hidden px-2 sm:min-h-[14rem] sm:px-5">
            <span className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
              {dollarParticles.map((particle, index) => (
                <span
                  key={`dollar-${index + 1}`}
                  className="donate-dollar"
                  style={{
                    top: particle.top,
                    animationDelay: particle.delay,
                    animationDuration: particle.duration,
                    fontSize: particle.size,
                    opacity: particle.opacity,
                  }}
                >
                  $
                </span>
              ))}
            </span>

            <a
              href="https://www.donationalerts.com/r/notserious_team"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Поддержать разработчиков"
              className="group relative z-10 mx-auto flex w-full max-w-2xl items-center justify-between gap-4 rounded-2xl border border-white/20 bg-gradient-to-b from-zinc-800/90 to-zinc-900/95 px-5 py-4 shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_18px_34px_rgba(0,0,0,0.42)] transition-all duration-200 hover:border-white/35 hover:from-zinc-800 hover:to-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 sm:gap-6 sm:px-8 sm:py-6"
            >
              <span className="pr-2 text-left font-title text-[0.7rem] uppercase tracking-[0.12em] leading-tight text-zinc-100 sm:text-[0.86rem] sm:tracking-[0.14em]">
                Поддержать разработчиков
              </span>

              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/[0.04] text-zinc-300 transition-all duration-200 group-hover:border-white/35 group-hover:bg-white/[0.08] group-hover:text-zinc-100">
                $
              </span>
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
