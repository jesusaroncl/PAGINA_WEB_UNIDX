import { OrganizationalChart } from "@/components/organizational-chart"
import { ModernNavigation } from "@/components/modern-navigation"
import { ModernFooter } from "@/components/modern-footer"

export default function NosotrosPage() {
  return (
    <div className="min-h-screen bg-white">
      <ModernNavigation />

      <main className="pt-8 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-blue-900 mb-4">Nuestro Equipo</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Conoce a los profesionales que conforman la Universidad de Ciencias de la Salud UNIDX, comprometidos con
              la excelencia académica y la formación integral de nuestros estudiantes.
            </p>
          </div>

          {/* Organizational Chart */}
          <OrganizationalChart />
        </div>
      </main>

      <ModernFooter />
    </div>
  )
}
