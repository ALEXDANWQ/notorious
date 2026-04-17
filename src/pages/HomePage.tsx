import { ActiveProjectSection } from '../components/sections/ActiveProjectSection'
import { DevelopersContactsSection } from '../components/sections/DevelopersContactsSection'
import { HeroSection } from '../components/sections/HeroSection'
import { SupportDevelopersSection } from '../components/sections/SupportDevelopersSection'
import { TeamSummarySection } from '../components/sections/TeamSummarySection'
import { useDocumentMeta } from '../hooks/useDocumentMeta'

export function HomePage() {
  useDocumentMeta(
    'NOT SERIOUS — Главная',
    'NOT SERIOUS — экспериментальная команда разработки. Маленькая команда, острые системы.',
  )

  return (
    <>
      <HeroSection />
      <ActiveProjectSection />
      <TeamSummarySection />
      <DevelopersContactsSection />
      <SupportDevelopersSection />
    </>
  )
}
