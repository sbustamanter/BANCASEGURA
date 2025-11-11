# 🛡️ Ciberseguridad y IA en Banca - Sitio Web Educativo

Una aplicación web moderna construida con Next.js 15+ que proporciona información educativa sobre el impacto de la ciberseguridad y la inteligencia artificial en la seguridad bancaria, con funcionalidad de envío de recomendaciones personalizadas contra fraudes bancarios por email.

## ✨ Características Principales

- **Contenido Educativo Completo**: Información detallada sobre ciberseguridad e IA en el sector bancario
- **Formulario de Suscripción**: Los visitantes pueden registrarse para recibir recomendaciones de seguridad
- **Envío de Emails Automático**: Sistema de emails con recomendaciones completas sobre fraudes bancarios
- **Diseño Responsivo**: Interfaz moderna y adaptable a todos los dispositivos
- **Validación de Formularios**: Validación tanto del lado del cliente como del servidor
- **Manejo de Errores**: Mensajes informativos de éxito y error
- **Arquitectura Moderna**: Next.js 15+ con TypeScript y Tailwind CSS

## 🚀 Tecnologías Utilizadas

- **Frontend**: Next.js 15+, React, TypeScript
- **Estilos**: Tailwind CSS, shadcn/ui components
- **Backend**: Next.js API Routes
- **Email**: Nodemailer (con soporte para SMTP y Ethereal test)
- **Validación**: Validación nativa de JavaScript y HTML5
- **Fuentes**: Google Fonts (Inter)

## 📋 Requisitos Previos

- Node.js 18+
- npm, yarn, pnpm o bun

## 🛠️ Instalación y Configuración

### 1. Clonar e Instalar Dependencias

```bash
# Instalar dependencias
npm install
```

### 2. Configuración de Variables de Entorno (Opcional)

Crea un archivo `.env.local` en la raíz del proyecto:

```bash
# SMTP Configuration (Opcional)
# Si no se proporcionan, la app usará Ethereal test email service
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=tu-email@gmail.com
SMTP_PASS=tu-contraseña-de-aplicación

# Para Gmail:
# 1. Habilita la autenticación de 2 factores
# 2. Genera una contraseña de aplicación
# 3. Usa la contraseña de aplicación en lugar de tu contraseña regular
```

### 3. Ejecutar el Servidor de Desarrollo

```bash
npm run dev
```

La aplicación estará disponible en [http://localhost:8000](http://localhost:8000)

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── layout.tsx          # Layout principal de la aplicación
│   ├── page.tsx            # Página principal con contenido educativo
│   ├── globals.css         # Estilos globales
│   └── api/
│       └── send-email/
│           └── route.ts    # API endpoint para envío de emails
├── components/
│   ├── FormRecommendation.tsx  # Componente del formulario
│   └── ui/                     # Componentes UI de shadcn
└── lib/
    └── utils.ts            # Utilidades y helpers
```

## 🔧 Funcionalidades Principales

### 1. Página Principal (`src/app/page.tsx`)
- Información educativa sobre ciberseguridad e IA en banca
- Secciones sobre amenazas, defensas y el futuro de la seguridad bancaria
- Diseño responsivo con grid layout

### 2. Formulario de Recomendaciones (`src/components/FormRecommendation.tsx`)
- Campos: Nombre completo y correo electrónico
- Validación en tiempo real
- Manejo de estados de carga y mensajes de éxito/error
- Reset automático después del envío exitoso

### 3. API de Envío de Emails (`src/app/api/send-email/route.ts`)
- Endpoint POST para procesar formularios
- Validación de datos del servidor
- Soporte para SMTP personalizado o Ethereal test
- Email HTML con recomendaciones completas de seguridad bancaria

## 📧 Contenido del Email

El email enviado incluye recomendaciones completas sobre:

- **Señales de Alerta**: Cómo identificar intentos de fraude
- **Mejores Prácticas**: Contraseñas seguras, 2FA, conexiones seguras
- **Seguridad Móvil**: Protección de dispositivos y aplicaciones
- **Monitoreo**: Revisión de estados de cuenta y alertas
- **Respuesta a Fraudes**: Pasos a seguir si se sospecha fraude
- **Tecnologías de Protección**: Cómo la IA ayuda en la seguridad bancaria

## 🧪 Testing

### Probar la API con curl:

```bash
curl -X POST http://localhost:8000/api/send-email \
     -H "Content-Type: application/json" \
     -d '{"nombre": "Juan Pérez", "email": "test@example.com"}' \
     -w "\nHTTP: %{http_code}\nTime: %{time_total}s\n"
```

### Respuesta Esperada:
```json
{
  "message": "Email enviado exitosamente",
  "messageId": "<message-id@domain.com>"
}
```

## 🎨 Personalización

### Modificar el Contenido del Email
Edita el contenido HTML en `src/app/api/send-email/route.ts` en la variable `emailContent`.

### Cambiar Estilos
Los estilos utilizan Tailwind CSS. Modifica las clases en los componentes para personalizar la apariencia.

### Agregar Nuevas Secciones
Añade nuevas secciones en `src/app/page.tsx` siguiendo la estructura existente.

## 🔒 Seguridad

- Validación de entrada tanto en cliente como servidor
- Sanitización de datos de email
- Manejo seguro de variables de entorno
- Protección contra inyección de código en emails

## 📱 Responsive Design

La aplicación está optimizada para:
- Dispositivos móviles (320px+)
- Tablets (768px+)
- Escritorio (1024px+)
- Pantallas grandes (1280px+)

## 🚀 Despliegue

### Vercel (Recomendado)
```bash
npm run build
# Despliega en Vercel siguiendo su documentación
```

### Otros Proveedores
```bash
npm run build
npm start
```

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 📞 Soporte

Para soporte o preguntas sobre el proyecto, por favor abre un issue en el repositorio.

---

**Nota**: Este es un proyecto educativo sobre ciberseguridad bancaria. Las recomendaciones proporcionadas son de carácter informativo y no constituyen asesoramiento financiero profesional.
