const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const LOGOS = [
  { input: 'logo version 1.png', prefix: 'v1' },
  { input: 'logo version 2.png', prefix: 'v2' }
];

const OUTPUT_DIR = 'public/images/logo';

// Configuración de tamaños para web
const SIZES = [
  // Logos PNG para header/navbar
  { name: 'header.png', width: 300, format: 'png' },
  { name: 'header@2x.png', width: 600, format: 'png' },

  // Favicon y meta tags
  { name: 'favicon-32.png', width: 32, format: 'png' },
  { name: 'favicon-64.png', width: 64, format: 'png' },
  { name: 'favicon-128.png', width: 128, format: 'png' },
  { name: 'apple-touch-icon.png', width: 180, format: 'png' },
  { name: 'og-image.png', width: 1200, format: 'png', height: 630 },

  // WebP para mejor performance
  { name: 'header.webp', width: 300, format: 'webp' },
  { name: 'header@2x.webp', width: 600, format: 'webp' },
];

async function optimizeLogos() {
  try {
    // Crear directorios
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    console.log('🚀 Optimizando ambos logos...\n');

    for (const logo of LOGOS) {
      console.log(`\n📦 Procesando: ${logo.input}`);

      const logoDir = path.join(OUTPUT_DIR, logo.prefix);
      if (!fs.existsSync(logoDir)) {
        fs.mkdirSync(logoDir, { recursive: true });
      }

      // Leer metadata
      const image = sharp(logo.input);
      const metadata = await image.metadata();
      const originalSize = fs.statSync(logo.input).size;

      console.log(`   Original: ${metadata.width}x${metadata.height}px - ${(originalSize / 1024 / 1024).toFixed(2)} MB`);

      // Generar todas las versiones
      for (const config of SIZES) {
        const outputPath = path.join(logoDir, config.name);

        // Calcular dimensiones
        let width = config.width;
        let height = config.height;

        if (!height) {
          height = Math.round(width * metadata.height / metadata.width);
        } else if (config.name === 'og-image.png') {
          // Para OG image, usar contain para no distorsionar
          width = 1200;
          height = 630;
        }

        let pipeline = sharp(logo.input)
          .resize(width, height, {
            fit: config.height && config.name === 'og-image.png' ? 'contain' : 'contain',
            background: { r: 255, g: 255, b: 255, alpha: 0 }
          });

        if (config.format === 'png') {
          pipeline = pipeline.png({
            quality: 90,
            compressionLevel: 9,
            adaptiveFiltering: true,
            palette: config.width < 200 // Usar paleta solo para imágenes pequeñas
          });
        } else if (config.format === 'webp') {
          pipeline = pipeline.webp({
            quality: 90,
            alphaQuality: 100,
            lossless: false
          });
        }

        await pipeline.toFile(outputPath);

        const size = fs.statSync(outputPath).size;
        const sizeKB = (size / 1024).toFixed(2);
        console.log(`   ✅ ${config.name} - ${width}x${height}px - ${sizeKB} KB`);
      }
    }

    // Copiar logo v2 como logo principal por defecto (más moderno)
    console.log('\n📋 Copiando logo v2 como versión principal...');

    const mainFiles = ['header.png', 'header@2x.png', 'header.webp', 'header@2x.webp',
                       'favicon-32.png', 'favicon-64.png', 'favicon-128.png',
                       'apple-touch-icon.png', 'og-image.png'];

    for (const file of mainFiles) {
      const src = path.join(OUTPUT_DIR, 'v2', file);
      const dest = path.join(OUTPUT_DIR, file);

      if (fs.existsSync(src)) {
        fs.copyFileSync(src, dest);
        const size = (fs.statSync(dest).size / 1024).toFixed(2);
        console.log(`   ✅ ${file} - ${size} KB`);
      }
    }

    console.log('\n✨ Optimización completada!');
    console.log('\n📁 Estructura generada:');
    console.log(`   public/images/logo/`);
    console.log(`   ├── v1/          (Logo versión 1)`);
    console.log(`   ├── v2/          (Logo versión 2)`);
    console.log(`   └── *.{png,webp} (Logo principal - v2 por defecto)`);

    console.log('\n💡 Uso recomendado:');
    console.log('   - Logo v2 (más moderno, relleno sólido) - Principal');
    console.log('   - Logo v1 (outline) - Alternativa para fondos oscuros');
    console.log('   - Cambiar entre versiones: copiar desde v1/ o v2/');

  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

optimizeLogos();
