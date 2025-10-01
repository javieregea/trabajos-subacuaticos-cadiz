const fs = require('fs');
const path = require('path');

// Script para optimizar logos manualmente o con sharp
// Tamaños estándar para logos web según mejores prácticas

const LOGO_SIZES = {
  // Logo principal para header/navbar (retina-ready)
  'logo-primary.png': { width: 300, quality: 90 },
  'logo-primary@2x.png': { width: 600, quality: 90 },

  // Logo pequeño para favicon/mobile
  'logo-small.png': { width: 150, quality: 90 },
  'logo-small@2x.png': { width: 300, quality: 90 },

  // Logo grande para hero/landing
  'logo-large.png': { width: 600, quality: 90 },
  'logo-large@2x.png': { width: 1200, quality: 90 },

  // Thumbnail para redes sociales
  'logo-thumbnail.png': { width: 200, quality: 90 },
};

console.log(`
GUÍA DE OPTIMIZACIÓN DEL LOGO
==============================

El logo actual pesa 2.15 MB - demasiado para web.

PASO 1: Instalar Sharp (herramienta de optimización)
   npm install sharp

PASO 2: Ejecutar script de optimización automática
   node optimize-logo-sharp.js

ALTERNATIVA MANUAL (sin dependencias):
1. Usar herramientas online:
   - TinyPNG.com para PNG
   - Squoosh.app (Google) para WebP/AVIF
   - CloudConvert para conversiones

2. Tamaños recomendados:
${Object.entries(LOGO_SIZES).map(([name, config]) =>
  `   - ${name}: ${config.width}px de ancho, calidad ${config.quality}%`
).join('\n')}

3. Formatos a generar:
   - PNG para transparencias (backup)
   - WebP para web moderna (mejor compresión)
   - SVG para escalabilidad perfecta (recomendado)

ESTRUCTURA DE CARPETAS CREADA:
assets/images/logo/
  ├── png/           (PNGs optimizados)
  ├── webp/          (WebP para mejor rendimiento)
  └── svg/           (SVG para escalabilidad perfecta)
`);
