import { useMemo } from 'react'
import type { CSSProperties } from 'react'
import { useReducedMotion } from 'framer-motion'

type SymbolNode = {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
  drift: number
  rotation: number
  opacity: number
  blur: number
  symbol: string
}

const SYMBOL_SET = ['<>', '//', '{}', '[]', '::', '++', '**', '( )']

function createRng(seed: number) {
  let value = seed >>> 0

  return () => {
    value = (value * 1664525 + 1013904223) >>> 0
    return value / 4294967296
  }
}

function createSymbols(total: number, seed: number) {
  const random = createRng(seed)

  return Array.from({ length: total }, (_, index): SymbolNode => {
    const driftBase = 12 + random() * 34
    const symbol = SYMBOL_SET[Math.floor(random() * SYMBOL_SET.length)] ?? '+'

    return {
      id: index,
      x: 8 + random() * 84,
      y: 10 + random() * 80,
      size: 0.7 + random() * 0.9,
      duration: 20 + random() * 22,
      delay: -random() * 20,
      drift: (random() * 2 - 1) * driftBase,
      rotation: -20 + random() * 40,
      opacity: 0.08 + random() * 0.12,
      blur: random() * 0.8,
      symbol,
    }
  })
}

export function BackgroundFX() {
  const reducedMotion = useReducedMotion()
  const symbols = useMemo(() => createSymbols(18, 9029), [])

  return (
    <div className={`bgfx-layer${reducedMotion ? ' bgfx-layer-static' : ''}`} aria-hidden="true">
      <div className="bgfx-glow bgfx-glow-a" />
      <div className="bgfx-glow bgfx-glow-b" />

      <div className="bgfx-symbol-field">
        {symbols.map((symbol) => {
          const style = {
            '--x': `${symbol.x}%`,
            '--y': `${symbol.y}%`,
            '--size': `${symbol.size.toFixed(2)}rem`,
            '--duration': `${symbol.duration}s`,
            '--delay': `${symbol.delay}s`,
            '--drift': `${symbol.drift.toFixed(2)}px`,
            '--rotation': `${symbol.rotation.toFixed(1)}deg`,
            '--opacity': symbol.opacity.toFixed(3),
            '--blur': `${symbol.blur.toFixed(2)}px`,
          } as CSSProperties

          return (
            <span key={symbol.id} className="bgfx-symbol" style={style}>
              {symbol.symbol}
            </span>
          )
        })}
      </div>

      <div className="bgfx-vignette" />
    </div>
  )
}
