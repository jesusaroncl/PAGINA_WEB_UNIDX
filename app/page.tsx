import { LanguageProvider } from "@/components/language-provider"
import { ModernNavigation } from "@/components/modern-navigation"
import { UniversityHero } from "@/components/university-hero"
import { BooksCarousel } from "@/components/books-carousel"
import { CompactPrograms } from "@/components/compact-programs"
import { CompactNews } from "@/components/compact-news"
import { ProjectsSection } from "@/components/projects-section"
import { PartnershipsSection } from "@/components/partnerships-section"
import { CompactContact } from "@/components/compact-contact"
import { ModernFooter } from "@/components/modern-footer"
import { Footer } from "react-day-picker"

export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <ModernNavigation />
        <UniversityHero />
        <BooksCarousel />
        <CompactPrograms />
        <CompactNews />
        <ProjectsSection />
        <PartnershipsSection />
        <CompactContact />
        <ModernFooter />
      </div>
    </LanguageProvider>
  )
}
