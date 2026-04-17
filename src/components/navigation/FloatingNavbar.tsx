import { AnimatePresence, m } from 'framer-motion'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { cn } from '../../lib/cn'

const navItems = [
  { label: 'ГЛАВНАЯ', to: '/' },
  { label: 'ИСТОЧНИКИ', to: '/sources' },
]

export function FloatingNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (!isMenuOpen) {
      return
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [isMenuOpen])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-800/80 bg-zinc-950/95">
        <nav
          aria-label="Основная навигация"
          className="mx-auto flex h-14 w-full max-w-shell items-center justify-between px-3 sm:h-16 sm:px-6 lg:px-8"
        >
          <NavLink
            to="/"
            className="font-title text-[0.62rem] uppercase tracking-[0.2em] text-zinc-200 sm:text-[0.68rem] sm:tracking-[0.28em]"
            aria-label="Перейти на главную"
          >
            NOT SERIOUS
          </NavLink>

          <div className="hidden items-center justify-end gap-3 sm:gap-4 md:flex lg:gap-5">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    'inline-flex items-center rounded-md px-2 py-1 text-[0.64rem] uppercase tracking-[0.2em] text-zinc-500 transition-colors duration-200 hover:text-zinc-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50',
                    isActive && 'text-white'
                  )
                }
                aria-label={item.label}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <button
            type="button"
            aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((value) => !value)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-zinc-700/80 bg-zinc-900/60 text-zinc-200 transition-colors duration-200 hover:border-zinc-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 md:hidden"
          >
            <span className="relative block h-3.5 w-4">
              <span
                className={cn(
                  'absolute left-0 top-0 h-px w-full bg-current transition-transform duration-200',
                  isMenuOpen && 'translate-y-[6px] rotate-45'
                )}
              />
              <span
                className={cn(
                  'absolute left-0 top-[6px] h-px w-full bg-current transition-opacity duration-200',
                  isMenuOpen && 'opacity-0'
                )}
              />
              <span
                className={cn(
                  'absolute left-0 top-3 h-px w-full bg-current transition-transform duration-200',
                  isMenuOpen && '-translate-y-[6px] -rotate-45'
                )}
              />
            </span>
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <m.button
              type="button"
              aria-label="Закрыть мобильное меню"
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/70 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.16 }}
            />

            <m.div
              className="fixed inset-x-0 top-14 z-50 border-b border-zinc-800 bg-zinc-950/98 px-3 pb-5 pt-3 shadow-[0_16px_36px_rgba(0,0,0,0.45)] sm:top-16 sm:px-6 md:hidden"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mx-auto flex w-full max-w-shell flex-col gap-2">
                {navItems.map((item) => (
                  <NavLink
                    key={`mobile-${item.to}`}
                    to={item.to}
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        'rounded-lg border border-zinc-800/80 bg-zinc-900/60 px-4 py-3 text-[0.68rem] uppercase tracking-[0.2em] text-zinc-300 transition-colors duration-200 hover:border-zinc-600 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50',
                        isActive && 'border-zinc-500/90 text-white'
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </m.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
