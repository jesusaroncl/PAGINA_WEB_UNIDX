
import { Resend } from 'resend';

const resend = new Resend('re_TDSnV3bG_hnjfaqiTkhzE3k9RZBZS1Cdf');

import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      nombre,
      email,
      telefono,
      tipoConsulta,
      asunto,
      descripcion,
      anonimo
    } = body;

    // Validar campos requeridos
    if (!tipoConsulta || !asunto || !descripcion) {
      return NextResponse.json(
        { error: 'Tipo de consulta, asunto y descripción son requeridos' },
        { status: 400 }
      );
    }

    // Si no es anónimo, validar nombre y email
    if (!anonimo && (!nombre || !email)) {
      return NextResponse.json(
        { error: 'Para consultas no anónimas, nombre y email son requeridos' },
        { status: 400 }
      );
    }

    // Generar número de consulta único
    const numeroConsulta = `DEF-${Date.now()}-${Math.random().toString(36).substr(2, 4).toUpperCase()}`;

    // Enviar email a informes
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'informes@unidx.edu.pe',
      subject: `Nueva Consulta Defensoría - ${numeroConsulta}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #3b82f6; color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0;">DEFENSORÍA UNIVERSITARIA</h1>
            <h2 style="margin: 10px 0 0 0;">Consulta: ${numeroConsulta}</h2>
          </div>
          <div style="padding: 20px;">
            <div style="background-color: ${anonimo ? '#f3f4f6' : '#e0f2fe'}; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid ${anonimo ? '#6b7280' : '#0288d1'};">
              <h3 style="color: ${anonimo ? '#374151' : '#0288d1'}; margin-top: 0;">
                ${anonimo ? 'Consulta Anónima' : 'Datos del Consultante'}
              </h3>
              ${anonimo ? 
                '<p><strong>Tipo:</strong> Consulta Anónima</p>' :
                `<p><strong>Nombre:</strong> ${nombre}</p>
                 <p><strong>Email:</strong> ${email}</p>
                 ${telefono ? `<p><strong>Teléfono:</strong> ${telefono}</p>` : ''}`
              }
            </div>
            <div style="background-color: #f1f5f9; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #3b82f6;">
              <h3 style="color: #3b82f6; margin-top: 0;">Detalle de la Consulta</h3>
              <p><strong>Tipo de Consulta:</strong> ${tipoConsulta}</p>
              <p><strong>Asunto:</strong> ${asunto}</p>
              <p><strong>Descripción:</strong></p>
              <p style="background-color: white; padding: 15px; border-radius: 4px; white-space: pre-wrap;">${descripcion}</p>
            </div>
            <div style="background-color: #fef3c7; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 0; color: #f59e0b; font-size: 14px;">
                <strong>Fecha de consulta:</strong> ${new Date().toLocaleString('es-PE', { 
                  timeZone: 'America/Lima',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </p>
              <p style="margin: 5px 0 0 0; color: #92400e; font-size: 12px;">
                <strong>IMPORTANTE:</strong> Esta consulta requiere atención por parte de la Defensoría Universitaria.
              </p>
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error: 'Error al enviar la consulta', details: error }, { status: 500 });
    }

    return NextResponse.json({ message: 'Consulta enviada exitosamente', numeroConsulta, id: data?.id });
  } catch (error) {
    return NextResponse.json({ error: 'Error interno del servidor', details: error }, { status: 500 });
  }
}
