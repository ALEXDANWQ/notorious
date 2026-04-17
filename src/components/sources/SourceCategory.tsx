import type { SourceCategory as SourceCategoryType } from '../../data/sources'
import { SourceLinkItem } from './SourceLinkItem'

type SourceCategoryProps = {
  category: SourceCategoryType
}

export function SourceCategory({ category }: SourceCategoryProps) {
  return (
    <section>
      <h2 className="mb-4 border-b border-white/10 pb-3 font-title text-[0.72rem] uppercase tracking-[0.16em] text-zinc-200 sm:text-sm sm:tracking-[0.18em]">
        {category.title}
      </h2>

      <ul className="space-y-4">
        {category.links.map((item) => (
          <SourceLinkItem key={`${category.id}-${item.title}`} item={item} />
        ))}
      </ul>
    </section>
  )
}
