import Image from "next/image"
import Link from "next/link"

export function ConvocatoriaSection() {
  return (
  <section id="convocatoria" className="relative bg-white mb-0 overflow-hidden">
      {/* Background placeholder (replace with real image at /public/images/convocatoria-bg.jpg) */}
      
  <div className="relative max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Imagen izquierda */}
          <div className="flex justify-center lg:justify-center items-center h-full">
            <div className="w-full md:w-[480px] lg:w-[560px] h-[240px] sm:h-[320px] md:h-[480px] lg:h-[560px] overflow-hidden relative mx-auto px-4">
              {/* Imagen a full del contenedor sin borde ni caja */}
              <Image src="/images/mujer.png" alt="Convocatoria" fill className="object-cover w-full h-full" priority loading="eager" />
            </div>
          </div>

          {/* Contenido derecho */}
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">SELECCIÓN DE DOCENTES DE INVESTIGACIÓN INSTITUCIONAL Y RENACYT</h2>
            <p className="text-gray-700 mb-6" style={{ textAlign: "justify" }}>
              La Universidad Interamericana para el Desarrollo convoca a la selección de Docentes Investigadores RENACYT e
              Investigadores institucionales. Buscamos profesionales altamente calificados para liderar proyectos de
              investigación y contribuir al avance del conocimiento científico en diversas áreas.
            </p>
            <p className="text-gray-700 mb-6" style={{ textAlign: "justify" }}>
              ¡Únete a nuestro equipo académico comprometido con la excelencia!
            </p>

            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
              <h2 className="font-semibold text-gray-800 mb-2">Requisitos</h2>
              <h3 className="font-semibold text-gray-800 mb-2">Docente Investigador RENACYT:</h3>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                <li>Registro activo en RENACYT.</li>
                <li>Producción científica validada y participación en proyectos.</li>
                <li>Participación activa en proyectos de investigación.</li>
                <li>Vínculo académico prioritario con la universidad.</li>
              </ul>

              <h3 className="font-semibold text-gray-800 mb-2">Docente Investigador institucional:</h3>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                <li>Grado académico mínimo de maestría.</li>
                <li>Experiencia en investigación o participación en proyectos institucionales.</li>
                <li>Registro actualizado en CTI Vitae y ORCID activo.</li>
                <li>Participación en proyectos de investigación y actividades académicas.</li>
              </ul>
            </div>

  <p className="mt-4 text-gray-700">Enviar CV documentado a: <a className="text-blue-700 underline" href="mailto:informes@unid.edu.pe">informes@unid.edu.pe</a></p>


          </div>
        </div>
      </div>

        {/* Tabla ancho completo, centrada */}
  <div className="w-full bg-transparent py-6">
          <div className="max-w-7xl mx-auto px-4">
            <div className="overflow-hidden rounded-lg">
              <div className="bg-blue-700 text-white py-3 px-4 font-semibold rounded-t-lg text-center">DOCENTES DE INVESTIGACIÓN RENACYT</div>
              <div className="bg-white border border-t-0 border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 divide-x">
                  <div className="px-4 py-3 text-sm text-gray-700">LUIS ANGEL AGUILAR MENDOZA</div>
                  <div className="px-4 py-3 text-sm text-gray-700">DOCENTE INVESTIGADOR RENACYT CONTRATADO</div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 divide-x border-t border-gray-100">
                  <div className="px-4 py-3 text-sm text-gray-700">MARÍA SUSANA ROQUE MARROQUÍ</div>
                  <div className="px-4 py-3 text-sm text-gray-700">DOCENTE INVESTIGADOR INSTITUCIONAL CONTRATADO</div>
                </div>
              </div>
              <div className="bg-blue-700 text-white py-2 px-4 font-semibold rounded-b-lg text-center">UNID</div>
            </div>
          </div>
        </div>
    </section>
  )
}
