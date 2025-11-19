import Image from "next/image"
import Link from "next/link"

export function ConvocatoriaSection() {
  return (
  <section id="convocatoria" className="relative bg-white mb-0 overflow-hidden">
      {/* Background placeholder (replace with real image at /public/images/convocatoria-bg.jpg) */}
      
  <div className="relative max-w-7xl mx-auto px-2 sm:px-4 py-6 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 items-center">
          {/* Imagen izquierda */}
          <div className="flex justify-center lg:justify-center items-center h-full">
            <div className="w-full max-w-[280px] sm:max-w-[360px] md:w-[480px] lg:w-[560px] h-[200px] sm:h-[320px] md:h-[480px] lg:h-[560px] overflow-hidden relative mx-auto px-2 sm:px-4">
              {/* Imagen a full del contenedor sin borde ni caja */}
              <Image src="/images/mujer.png" alt="Convocatoria" fill className="object-cover w-full h-full" priority loading="eager" />
            </div>
          </div>

          {/* Contenido derecho */}
          <div>
            <h2 className="text-base sm:text-xl lg:text-3xl font-bold text-gray-800 mb-2 sm:mb-4 leading-tight">SELECCIÓN DE DOCENTES DE INVESTIGACIÓN INSTITUCIONAL Y RENACYT</h2>
            <p className="text-xs sm:text-sm lg:text-base text-gray-700 mb-3 sm:mb-6 leading-relaxed" style={{ textAlign: "justify" }}>
              La Universidad Interamericana para el Desarrollo convoca a la selección de Docentes Investigadores RENACYT e
              Investigadores institucionales. Buscamos profesionales altamente calificados para liderar proyectos de
              investigación y contribuir al avance del conocimiento científico en diversas áreas.
            </p>
            <p className="text-xs sm:text-sm lg:text-base text-gray-700 mb-3 sm:mb-6 leading-relaxed" style={{ textAlign: "justify" }}>
              ¡Únete a nuestro equipo académico comprometido con la excelencia!
            </p>

            <div className="bg-white rounded-lg sm:rounded-xl p-2 sm:p-4 shadow-sm border border-gray-200">
              <h2 className="font-semibold text-gray-800 mb-1 sm:mb-2 text-xs sm:text-sm">Requisitos</h2>
              <h3 className="font-semibold text-gray-800 mb-1 sm:mb-2 text-xs sm:text-sm">Docente Investigador RENACYT:</h3>
              <ul className="list-disc list-inside text-gray-700 text-[10px] sm:text-xs lg:text-sm space-y-0.5 sm:space-y-1">
                <li>Registro activo en RENACYT.</li>
                <li>Producción científica validada y participación en proyectos.</li>
                <li>Participación activa en proyectos de investigación.</li>
                <li>Vínculo académico prioritario con la universidad.</li>
              </ul>

              <h3 className="font-semibold text-gray-800 mb-1 sm:mb-2 mt-2 text-xs sm:text-sm">Docente Investigador institucional:</h3>
              <ul className="list-disc list-inside text-gray-700 text-[10px] sm:text-xs lg:text-sm space-y-0.5 sm:space-y-1">
                <li>Grado académico mínimo de maestría.</li>
                <li>Experiencia en investigación o participación en proyectos institucionales.</li>
                <li>Registro actualizado en CTI Vitae y ORCID activo.</li>
                <li>Participación en proyectos de investigación y actividades académicas.</li>
              </ul>
            </div>

  <p className="mt-2 sm:mt-4 text-gray-700 text-[10px] sm:text-xs lg:text-sm">Enviar CV documentado a: <a className="text-blue-700 underline" href="mailto:informes@unid.edu.pe">informes@unid.edu.pe</a></p>


          </div>
        </div>
      </div>

        {/* Tabla ancho completo, centrada */}
  <div className="w-full bg-transparent py-3 sm:py-6">
          <div className="max-w-7xl mx-auto px-2 sm:px-4">
            <div className="overflow-hidden rounded-lg">
              <div className="bg-blue-700 text-white py-2 sm:py-3 px-2 sm:px-4 font-semibold rounded-t-lg text-center text-xs sm:text-sm lg:text-base">DOCENTES DE INVESTIGACIÓN RENACYT</div>
              <div className="bg-white border border-t-0 border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 divide-x">
                  <div className="px-2 sm:px-4 py-2 sm:py-3 text-[10px] sm:text-xs lg:text-sm text-gray-700 break-words">LUIS ANGEL AGUILAR MENDOZA</div>
                  <div className="px-2 sm:px-4 py-2 sm:py-3 text-[10px] sm:text-xs lg:text-sm text-gray-700 break-words">DOCENTE INVESTIGADOR RENACYT CONTRATADO</div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 divide-x border-t border-gray-100">
                  <div className="px-2 sm:px-4 py-2 sm:py-3 text-[10px] sm:text-xs lg:text-sm text-gray-700 break-words">MARÍA SUSANA ROQUE MARROQUÍ</div>
                  <div className="px-2 sm:px-4 py-2 sm:py-3 text-[10px] sm:text-xs lg:text-sm text-gray-700 break-words">DOCENTE INVESTIGADOR INSTITUCIONAL CONTRATADO</div>
                </div>
              </div>
              <div className="bg-blue-700 text-white py-1.5 sm:py-2 px-2 sm:px-4 font-semibold rounded-b-lg text-center text-xs sm:text-sm lg:text-base">UNID</div>
            </div>
          </div>
        </div>
    </section>
  )
}
