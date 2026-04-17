import { AnimatePresence, m, useReducedMotion } from 'framer-motion'
import { Outlet, useLocation } from 'react-router-dom'
import { FloatingNavbar } from '../navigation/FloatingNavbar'
import { Footer } from './Footer'

export function AppLayout() {
  const location = useLocation()
  const reducedMotion = useReducedMotion()

  return (
    <div className="relative isolate min-h-screen bg-black text-zinc-100 selection:bg-white/20 selection:text-white">
      <FloatingNavbar />

      <div className="relative z-10 flex min-h-screen flex-col overflow-x-clip">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:px-3 focus:py-2 focus:text-xs"
        >
          Перейти к содержимому
        </a>

        <main id="content" className="flex-1 pt-14 sm:pt-16">
          <AnimatePresence mode="wait">
            <m.div
              key={location.pathname}
              initial={reducedMotion ? undefined : { opacity: 0, y: 8 }}
              animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
              exit={reducedMotion ? undefined : { opacity: 0, y: -4 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <Outlet />
            </m.div>
          </AnimatePresence>
        </main>

        <Footer />
      </div>
    </div>
  )
}
