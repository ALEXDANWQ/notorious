import { GlitchTitle } from './GlitchTitle'

export function HeroSection() {
  return (
    <section
      className="relative mx-auto flex min-h-[calc(100svh-3.5rem)] w-full max-w-shell flex-col items-center justify-center px-4 pb-10 pt-16 text-center sm:min-h-[calc(100svh-4rem)] sm:px-8 sm:pb-14 sm:pt-20 lg:px-10"
    >
      <GlitchTitle
        text="NOT SERIOUS"
        className="max-w-6xl [font-size:clamp(2.6rem,16vw,10rem)] leading-[0.84] tracking-[-0.04em] sm:leading-[0.82]"
      />
    </section>
  )
}
