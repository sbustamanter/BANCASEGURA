# 🚀 Guía de Despliegue - Ciberseguridad y IA en Banca

Esta guía te ayudará a desplegar tu aplicación en diferentes plataformas para que puedas compartirla con un dominio público.

## 📋 Requisitos Previos

- Cuenta en la plataforma de despliegue elegida (Vercel, Netlify, etc.)
- Repositorio Git (GitHub, GitLab, o Bitbucket)
- Variables de entorno configuradas (opcional para email)

## 🌐 Opciones de Despliegue

### Opción 1: Vercel (Recomendado para Next.js)

Vercel es la plataforma creada por los desarrolladores de Next.js y ofrece la mejor integración.

#### Pasos:

1. **Crear cuenta en Vercel**
   - Ve a [vercel.com](https://vercel.com)
   - Regístrate con GitHub, GitLab o Bitbucket

2. **Subir código a GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Ciberseguridad Bancaria"
   git branch -M main
   git remote add origin https://github.com/tu-usuario/tu-repositorio.git
   git push -u origin main
   ```

3. **Importar proyecto en Vercel**
   - Click en "New Project"
   - Selecciona tu repositorio
   - Vercel detectará automáticamente que es Next.js
   - Click en "Deploy"

4. **Configurar variables de entorno (opcional)**
   - En el dashboard de Vercel, ve a Settings > Environment Variables
   - Agrega las siguientes variables si quieres usar SMTP real:
     ```
     SMTP_HOST=smtp.gmail.com
     SMTP_PORT=587
     SMTP_USER=tu-email@gmail.com
     SMTP_PASS=tu-contraseña-de-aplicación
     ```

5. **Dominio personalizado**
   - Ve a Settings > Domains
   - Agrega tu dominio personalizado
   - Sigue las instrucciones para configurar DNS

**URL de ejemplo:** `https://tu-proyecto.vercel.app`

---

### Opción 2: Netlify

#### Pasos:

1. **Crear cuenta en Netlify**
   - Ve a [netlify.com](https://netlify.com)
   - Regístrate con GitHub, GitLab o Bitbucket

2. **Subir código a GitHub** (igual que Vercel)

3. **Importar proyecto en Netlify**
   - Click en "Add new site" > "Import an existing project"
   - Conecta tu repositorio
   - Configuración de build:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Click en "Deploy site"

4. **Configurar variables de entorno**
   - Site settings > Environment variables
   - Agrega las mismas variables que en Vercel

5. **Dominio personalizado**
   - Site settings > Domain management
   - Add custom domain

---

### Opción 3: Railway

Railway es excelente para aplicaciones que necesitan backend.

#### Pasos:

1. **Crear cuenta en Railway**
   - Ve a [railway.app](https://railway.app)
   - Regístrate con GitHub

2. **Nuevo proyecto**
   - Click en "New Project"
   - Selecciona "Deploy from GitHub repo"
   - Selecciona tu repositorio

3. **Configuración automática**
   - Railway detectará Next.js automáticamente
   - El despliegue comenzará automáticamente

4. **Variables de entorno**
   - En el proyecto, ve a Variables
   - Agrega las variables SMTP si es necesario

5. **Dominio**
   - Settings > Generate Domain
   - O agrega un dominio personalizado

---

### Opción 4: Render

#### Pasos:

1. **Crear cuenta en Render**
   - Ve a [render.com](https://render.com)
   - Regístrate con GitHub

2. **Nuevo Web Service**
   - Click en "New +" > "Web Service"
   - Conecta tu repositorio
   - Configuración:
     - Build Command: `npm install && npm run build`
     - Start Command: `npm start`

3. **Variables de entorno**
   - En el dashboard, ve a Environment
   - Agrega las variables necesarias

---

## 🔧 Configuración de Variables de Entorno

### Para Email (Opcional)

Si quieres que el sistema de emails funcione con tu propio servidor SMTP:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=tu-email@gmail.com
SMTP_PASS=tu-contraseña-de-aplicación
```

**Nota:** Si no configuras estas variables, la aplicación usará Ethereal (servicio de prueba) automáticamente.

### Para Gmail:
1. Habilita la verificación en 2 pasos
2. Genera una contraseña de aplicación en: https://myaccount.google.com/apppasswords
3. Usa esa contraseña en `SMTP_PASS`

---

## 📱 Verificación Post-Despliegue

Después de desplegar, verifica:

1. ✅ La página principal carga correctamente
2. ✅ La navegación entre páginas funciona
3. ✅ Los formularios se pueden enviar
4. ✅ El diseño responsive funciona en móvil
5. ✅ Los emails se envían correctamente (si configuraste SMTP)

---

## 🌍 Configurar Dominio Personalizado

### Comprar un dominio:
- [Namecheap](https://www.namecheap.com)
- [GoDaddy](https://www.godaddy.com)
- [Google Domains](https://domains.google)

### Configurar DNS:

Una vez que tengas tu dominio, configura los registros DNS según la plataforma:

**Para Vercel:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**Para Netlify:**
```
Type: CNAME
Name: www
Value: tu-sitio.netlify.app
```

---

## 🔒 Seguridad

- ✅ Las variables de entorno están protegidas
- ✅ HTTPS está habilitado automáticamente
- ✅ Los formularios tienen validación
- ✅ No hay información sensible en el código

---

## 📊 Monitoreo

Todas las plataformas ofrecen:
- Analytics de tráfico
- Logs de errores
- Métricas de rendimiento
- Alertas automáticas

---

## 🆘 Solución de Problemas

### Error: "Module not found"
```bash
npm install
npm run build
```

### Error: "Build failed"
- Verifica que todas las dependencias estén en package.json
- Revisa los logs de build en la plataforma

### Email no funciona
- Verifica las variables de entorno
- Revisa los logs del servidor
- Prueba con Ethereal primero (sin variables)

---

## 📞 Soporte

Si tienes problemas:
1. Revisa los logs en tu plataforma de despliegue
2. Verifica la documentación oficial de la plataforma
3. Revisa el README.md del proyecto

---

## 🎉 ¡Listo!

Tu aplicación de Ciberseguridad Bancaria está lista para ser compartida con el mundo.

**URLs de ejemplo:**
- Vercel: `https://ciberseguridad-bancaria.vercel.app`
- Netlify: `https://ciberseguridad-bancaria.netlify.app`
- Railway: `https://ciberseguridad-bancaria.up.railway.app`

¡Comparte tu dominio y ayuda a educar sobre seguridad bancaria! 🛡️
