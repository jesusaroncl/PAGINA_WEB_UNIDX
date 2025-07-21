# Sistema de Envío de Correos - UNIDX

Este proyecto integra **Resend** para el envío automatizado de correos electrónicos desde los formularios de la página web de la Universidad UNIDX.

## ✅ Sistema Funcionando - Emails a Informes

**ESTADO:** ✅ **FUNCIONA PERFECTAMENTE** - Emails llegan a `informes@unidx.edu.pe`

### Configuración Actual
- **From:** `onboarding@resend.dev` (dominio verificado de Resend)  
- **To:** `informes@unidx.edu.pe` ✅
- **Status:** **OPERATIVO** - Los emails se envían y llegan correctamente

## 🚀 Configuración

### Variables de Entorno

Asegúrate de tener configuradas estas variables en tu archivo `.env.local`:

```bash
# Desactivar telemetría de Next.js
NEXT_TELEMETRY_DISABLED=1

# Resend API Key
RESEND_API_KEY=re_iLV38raE_539RAc28yNoekbbpaxmhLkUn
```

### Instalación de Dependencias

```bash
npm install resend
```

## 📧 APIs Implementadas

### 1. API de Contacto General (`/api/contact`)

**Endpoint:** `POST /api/contact`

**Campos:**
- `nombre` (requerido)
- `email` (requerido)
- `telefono` (opcional)
- `programa` (opcional)
- `mensaje` (opcional)

**Uso:**
```javascript
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    nombre: "Juan Pérez",
    email: "juan@email.com",
    telefono: "+51 999 888 777",
    programa: "Enfermería",
    mensaje: "Solicito información sobre..."
  })
})
```

### 2. API de Libro de Reclamaciones (`/api/reclamaciones`)

**Endpoint:** `POST /api/reclamaciones`

**Campos requeridos:**
- `nombres`, `apellidos`, `email`, `tipoReclamo`, `detalle`, `pedido`

**Campos opcionales:**
- `tipoDocumento`, `numeroDocumento`, `telefono`, `direccion`, `fechaIncidente`

**Respuesta:**
```json
{
  "message": "Reclamo enviado exitosamente",
  "numeroReclamo": "REC-1234567890-ABCD",
  "id": "email_id"
}
```

### 3. API de Defensoría Universitaria (`/api/defensoria`)

**Endpoint:** `POST /api/defensoria`

**Campos requeridos:**
- `tipoConsulta`, `asunto`, `descripcion`

**Campos opcionales:**
- `nombre`, `email`, `telefono`, `anonimo` (boolean)

**Nota:** Si `anonimo` es `false`, `nombre` y `email` son requeridos.

### 4. API de Carreras (`/api/carreras`)

**Endpoint:** `POST /api/carreras`

**Campos requeridos:**
- `nombre`, `email`, `carrera`

**Campos opcionales:**
- `telefono`, `informacionInteres`, `fechaPreferida`, `horarioPreferido`, `acompanantes`

### 5. API de Alianzas (`/api/alianzas`)

**Endpoint:** `POST /api/alianzas`

**Campos requeridos:**
- `nombreOrganizacion`, `nombreContacto`, `email`, `tipoAlianza`, `descripcionPropuesta`

**Campos opcionales:**
- `tipoOrganizacion`, `cargoContacto`, `telefono`, `paisRegion`

## 🎯 Formularios Integrados

### ✅ Formularios Activos

1. **Libro de Reclamaciones** (`/libro-reclamaciones`)
   - ✅ Formulario completo con validación
   - ✅ Integración con API
   - ✅ Pantalla de confirmación
   - ✅ Envío de emails automático

2. **Defensoría Universitaria** (`/defensoria`)
   - ✅ Formulario con soporte para consultas anónimas
   - ✅ Integración con API
   - ✅ Notificación de éxito
   - ✅ Envío de emails automático

3. **Enfermería - Solicitud de Información** (`/carreras/enfermeria`)
   - ✅ Diálogo de solicitud de información
   - ✅ Diálogo de visita al campus
   - ✅ Integración con API

4. **Contacto Compacto** (`CompactContact` component)
   - ✅ Formulario de contacto general
   - ✅ Integración con API
   - ✅ Validación de campos

### 🔄 Formularios Pendientes

- **Farmacia y Bioquímica** - Formularios de solicitud
- **Partnerships Section** - Formulario de propuestas
- **Contact Section** - Formulario principal
- **Minimalist Contact** - Formulario minimalista

## 📬 Configuración de Emails

### Emisor
- **From:** `onboarding@resend.dev` (dominio verificado de Resend)
- **To (Principal):** `informes@unidx.edu.pe`

### Destinatarios
- **Todas las solicitudes:** `informes@unidx.edu.pe`

### Tipos de Email

1. **Email a Informes:**
   - Contiene toda la información del formulario
   - Formato HTML profesional
   - Número de referencia único
   - Fecha y hora de envío

2. **Email de Confirmación al Usuario:**
   - Confirma la recepción exitosa
   - Proporciona número de seguimiento
   - Explica los próximos pasos
   - Información de contacto

## 🔧 Desarrollo

### Agregar Nuevo Formulario

1. **Crear estado para el formulario:**
```javascript
const [formData, setFormData] = useState({
  // campos del formulario
})
const [isSubmitting, setIsSubmitting] = useState(false)
```

2. **Crear función de envío:**
```javascript
const handleSubmit = async (e) => {
  e.preventDefault()
  setIsSubmitting(true)
  
  try {
    const response = await fetch('/api/endpoint', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    
    const result = await response.json()
    
    if (response.ok) {
      // Éxito
    } else {
      // Error
    }
  } catch (error) {
    // Error de conexión
  } finally {
    setIsSubmitting(false)
  }
}
```

3. **Actualizar formulario JSX:**
```jsx
<form onSubmit={handleSubmit}>
  <input
    value={formData.campo}
    onChange={(e) => setFormData(prev => ({ ...prev, campo: e.target.value }))}
    required
  />
  <button type="submit" disabled={isSubmitting}>
    {isSubmitting ? "Enviando..." : "Enviar"}
  </button>
</form>
```

## 🚨 Consideraciones de Producción

### Validación
- ✅ Validación client-side implementada
- ✅ Validación server-side en APIs
- ✅ Sanitización de datos de entrada

### Seguridad
- ✅ Variables de entorno para API keys
- ✅ Rate limiting implícito de Resend
- ✅ Validación de campos requeridos

### Experiencia de Usuario
- ✅ Estados de carga durante envío
- ✅ Mensajes de error y éxito
- ✅ Números de referencia únicos
- ✅ Emails de confirmación automáticos

### Monitoreo
- ✅ Logs de error en consola
- ✅ IDs de email para seguimiento
- ⚠️ Recomendado: Implementar logging centralizado

## 📞 Soporte

Para dudas sobre la implementación del sistema de correos, consulta:
- Documentación de Resend: https://resend.com/docs
- Configuración de variables de entorno de Next.js
- Logs de la aplicación para debugging

---

**Nota:** Todos los formularios envían copias a informes (`informes@unidx.edu.pe`) y confirmaciones automáticas a los usuarios.
