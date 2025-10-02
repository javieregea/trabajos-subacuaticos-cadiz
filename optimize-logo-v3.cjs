const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const INPUT_LOGO = 'logo version 3.png'; // Archivo con espacio en el nombre
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

async function optimizeLogoV3() {
  try {
    // Crear directorio v3
    const v3Dir = path.join(OUTPUT_DIR, 'v3');
    if (!fs.existsSync(v3Dir)) {
      fs.mkdirSync(v3Dir, { recursive: true });
    }

    console.log('🚀 Optimizando logo v3 (fondo blanco)...\n');

    // Leer metadata
    const image = sharp(INPUT_LOGO);
    const metadata = await image.metadata();
    const originalSize = fs.statSync(INPUT_LOGO).size;

    console.log(`📊 Logo v3 original: ${metadata.width}x${metadata.height}px`);
    console.log(`📦 Peso original: ${(originalSize / 1024 / 1024).toFixed(2)} MB\n`);

    // Generar todas las versiones
    for (const config of SIZES) {
      const outputPath = path.join(v3Dir, config.name);

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

      let pipeline = sharp(INPUT_LOGO)
        .resize(width, height, {
          fit: config.height && config.name === 'og-image.png' ? 'contain' : 'contain',
          background: { r: 255, g: 255, b: 255, alpha: 1 } // Fondo blanco
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
      console.log(`✅ v3/${config.name} - ${width}x${height}px - ${sizeKB} KB`);
    }

    console.log('\n📋 Copiando logo v3 como versión principal...');

    // Copiar a carpeta principal
    const mainFiles = ['header.png', 'header@2x.png', 'header.webp', 'header@2x.webp',
                       'favicon-32.png', 'favicon-64.png', 'favicon-128.png',
                       'apple-touch-icon.png', 'og-image.png'];

    for (const file of mainFiles) {
      const src = path.join(v3Dir, file);
      const dest = path.join(OUTPUT_DIR, file);

      if (fs.existsSync(src)) {
        fs.copyFileSync(src, dest);
        const size = (fs.statSync(dest).size / 1024).toFixed(2);
        console.log(`✅ ${file} - ${size} KB`);
      }
    }

    console.log('\n✨ Logo v3 optimizado y activado!');
    console.log('\n📁 Estructura:');
    console.log(`   public/images/logo/`);
    console.log(`   ├── v1/          (Logo versión 1 - outline)`);
    console.log(`   ├── v2/          (Logo versión 2 - relleno sólido)`);
    console.log(`   ├── v3/          (Logo versión 3 - fondo blanco) ← ACTIVO`);
    console.log(`   └── *.{png,webp} (Logo principal - v3 activo)`);

    console.log('\n💡 Logo v3 características:');
    console.log('   - Fondo blanco limpio');
    console.log('   - Diseño compacto y profesional');
    console.log('   - Perfecto para headers y favicons');
    console.log('   - Optimizado para web');

  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

optimizeLogoV3();
