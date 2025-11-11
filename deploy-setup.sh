#!/bin/bash

# 🚀 Script de Configuración para Despliegue
# Ciberseguridad y IA en Banca

echo "🛡️  Configurando proyecto para despliegue..."
echo ""

# Colores para output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Verificar si Git está instalado
if ! command -v git &> /dev/null; then
    echo "${YELLOW}⚠️  Git no está instalado. Por favor instala Git primero.${NC}"
    exit 1
fi

# Inicializar Git si no existe
if [ ! -d .git ]; then
    echo "${BLUE}📦 Inicializando repositorio Git...${NC}"
    git init
    git branch -M main
    echo "${GREEN}✓ Repositorio Git inicializado${NC}"
else
    echo "${GREEN}✓ Repositorio Git ya existe${NC}"
fi

# Agregar todos los archivos
echo "${BLUE}📝 Agregando archivos al repositorio...${NC}"
git add .

# Crear commit inicial
echo "${BLUE}💾 Creando commit inicial...${NC}"
git commit -m "🚀 Aplicación de Ciberseguridad Bancaria - Lista para producción

- ✅ Página principal con información educativa
- ✅ Sistema de detección de fraudes
- ✅ Formularios de suscripción
- ✅ API de envío de emails
- ✅ Diseño responsive optimizado
- ✅ Build de producción exitoso
- ✅ Configuración para Vercel incluida"

echo ""
echo "${GREEN}✓ Commit creado exitosamente${NC}"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "${GREEN}🎉 ¡Proyecto listo para desplegar!${NC}"
echo ""
echo "📋 Próximos pasos:"
echo ""
echo "1️⃣  Crea un repositorio en GitHub:"
echo "   ${BLUE}https://github.com/new${NC}"
echo ""
echo "2️⃣  Conecta tu repositorio local:"
echo "   ${YELLOW}git remote add origin https://github.com/TU-USUARIO/TU-REPO.git${NC}"
echo ""
echo "3️⃣  Sube tu código:"
echo "   ${YELLOW}git push -u origin main${NC}"
echo ""
echo "4️⃣  Despliega en Vercel:"
echo "   ${BLUE}https://vercel.com/new${NC}"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "📚 Para más información, revisa:"
echo "   - ${BLUE}QUICK_START.md${NC} - Guía rápida de 5 minutos"
echo "   - ${BLUE}DEPLOYMENT.md${NC} - Guía detallada de despliegue"
echo ""
echo "🌐 Tu aplicación estará disponible en:"
echo "   ${GREEN}https://tu-proyecto.vercel.app${NC}"
echo ""
