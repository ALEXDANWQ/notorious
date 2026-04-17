import { cn } from '../../lib/cn'

type GlitchTitleProps = {
  text: string
  className?: string
}

export function GlitchTitle({ text, className }: GlitchTitleProps) {
  return (
    <h1 className={cn('glitch-title', className)}>
      <span className="glitch-title-core">{text}</span>
    </h1>
  )
}
