import type { SourceLink } from '../../data/sources'

type SourceLinkItemProps = {
  item: SourceLink
}

export function SourceLinkItem({ item }: SourceLinkItemProps) {
  return (
    <li className="border-l border-white/10 pl-3.5 sm:pl-4">
      <a
        href={item.url}
        target="_blank"
        rel="noreferrer noopener"
        aria-label={item.title}
        className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
      >
        <div className="flex items-start justify-between gap-3 sm:items-center sm:gap-4">
          <h3 className="font-title text-[0.72rem] uppercase tracking-[0.12em] text-zinc-200 transition-colors duration-200 hover:text-white sm:text-sm sm:tracking-[0.14em]">
            {item.title}
          </h3>
          <span className="mt-0.5 shrink-0 text-[0.62rem] uppercase tracking-[0.16em] text-zinc-500 sm:mt-0 sm:text-xs sm:tracking-[0.18em]">
            ↗
          </span>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.note}</p>
      </a>
    </li>
  )
}
