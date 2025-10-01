const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const INPUT_LOGO = 'logo version 1.png';
const OUTPUT_DIR = 'assets/images/logo';

// Configuración de tamaños según mejores prácticas web
const SIZES = [
  // Logos PNG optimizados
  { name: 'png/logo-primary.png', width: 300, format: 'png' },
  { name: 'png/logo-primary@2x.png', width: 600, format: 'png' },
  { name: 'png/logo-small.png', width: 150, format: 'png' },
  { name: 'png/logo-small@2x.png', width: 300, format: 'png' },
  { name: 'png/logo-large.png', width: 600, format: 'png' },
  { name: 'png/logo-large@2x.png', width: 1200, format: 'png' },
  { name: 'png/logo-thumbnail.png', width: 200, format: 'png' },

  // Logos WebP para mejor rendimiento
  { name: 'webp/logo-primary.webp', width: 300, format: 'webp' },
  { name: 'webp/logo-primary@2x.webp', width: 600, format: 'webp' },
  { name: 'webp/logo-small.webp', width: 150, format: 'webp' },
  { name: 'webp/logo-small@2x.webp', width: 300, format: 'webp' },
  { name: 'webp/logo-large.webp', width: 600, format: 'webp' },
  { name: 'webp/logo-large@2x.webp', width: 1200, format: 'webp' },
  { name: 'webp/logo-thumbnail.webp', width: 200, format: 'webp' },
];

async function optimizeLogo() {
  try {
    // Crear subdirectorios
    ['png', 'webp', 'svg'].forEach(dir => {
      const dirPath = path.join(OUTPUT_DIR, dir);
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }
    });

    console.log('🚀 Optimizando logo...\n');

    // Leer imagen original y obtener metadata
    const image = sharp(INPUT_LOGO);
    const metadata = await image.metadata();

    console.log(`📊 Logo original: ${metadata.width}x${metadata.height}px`);
    console.log(`📦 Peso original: ${(fs.statSync(INPUT_LOGO).size / 1024 / 1024).toFixed(2)} MB\n`);

    // Generar todas las versiones
    for (const config of SIZES) {
      const outputPath = path.join(OUTPUT_DIR, config.name);

      // Calcular altura manteniendo aspect ratio
      const height = Math.round(config.width * metadata.height / metadata.width);

      let pipeline = sharp(INPUT_LOGO)
        .resize(config.width, height, {
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 0 } // Fondo transparente
        });

      if (config.format === 'png') {
        pipeline = pipeline.png({
          quality: 90,
          compressionLevel: 9,
          adaptiveFiltering: true,
          palette: true // Reduce tamaño usando paleta de colores
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
      console.log(`✅ ${config.name} - ${config.width}x${height}px - ${sizeKB} KB`);
    }

    console.log('\n✨ Optimización completada!');
    console.log('\n📁 Archivos generados en: assets/images/logo/');
    console.log('\n💡 Uso recomendado:');
    console.log('   - Header/Navbar: logo-primary.png o logo-primary@2x.png');
    console.log('   - Hero/Landing: logo-large.png o logo-large@2x.png');
    console.log('   - Mobile/Favicon: logo-small.png');
    console.log('   - Redes Sociales: logo-thumbnail.png');
    console.log('\n🚀 Para mejor rendimiento web, usa versiones WebP con fallback PNG');

  } catch (error) {
    console.error('❌ Error:', error.message);
    console.log('\n💡 Asegúrate de tener Sharp instalado:');
    console.log('   npm install sharp');
  }
}

optimizeLogo();
