import { ConvocatoriaSection } from "@/components/convocatoria-section"
import { ModernNavigation } from "@/components/modern-navigation"
import { ModernFooter } from "@/components/modern-footer"

export default function ConvocatoriaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <ModernNavigation />
      <main className="flex-grow">
        {/* Solo el contenido de convocatoria */}
        <ConvocatoriaSection />
      </main>
      <ModernFooter />
    </div>
  )
}
