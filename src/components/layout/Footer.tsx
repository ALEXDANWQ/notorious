export function Footer() {
  return (
    <footer className="relative z-10 mt-4 border-t border-white/10 sm:mt-6">
      <div className="mx-auto flex w-full max-w-shell flex-col gap-4 px-4 py-8 text-sm text-zinc-400 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
        <p className="font-title text-[0.66rem] uppercase tracking-[0.24em] text-zinc-200 sm:text-[0.72rem] sm:tracking-[0.28em]">
          NOT SERIOUS
        </p>
        <p className="text-[0.64rem] uppercase tracking-[0.16em] text-zinc-500 sm:text-[0.72rem] sm:tracking-[0.2em]">
          © {new Date().getFullYear()} NOT SERIOUS
        </p>
      </div>
    </footer>
  )
}
