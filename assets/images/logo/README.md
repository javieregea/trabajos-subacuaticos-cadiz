# Logo - Trabajos Subacuáticos Cádiz

## Estructura de Carpetas

```
assets/images/logo/
├── png/           # Logos PNG optimizados (con transparencia)
├── webp/          # Logos WebP (mejor compresión, soporte moderno)
└── svg/           # Logo SVG (escalable, tamaño mínimo)
```

## Tamaños Estándar

### Logo Primary (Navbar/Header)
- `logo-primary.png` - 300px (1x)
- `logo-primary@2x.png` - 600px (2x retina)
- Peso objetivo: < 30 KB

### Logo Small (Mobile/Favicon)
- `logo-small.png` - 150px (1x)
- `logo-small@2x.png` - 300px (2x retina)
- Peso objetivo: < 15 KB

### Logo Large (Hero/Landing)
- `logo-large.png` - 600px (1x)
- `logo-large@2x.png` - 1200px (2x retina)
- Peso objetivo: < 80 KB

### Logo Thumbnail (Redes Sociales)
- `logo-thumbnail.png` - 200px
- Peso objetivo: < 20 KB

## Uso en HTML

### Método 1: Picture Element (Recomendado)
```html
<picture>
  <source srcset="assets/images/logo/webp/logo-primary.webp 1x,
                  assets/images/logo/webp/logo-primary@2x.webp 2x"
          type="image/webp">
  <source srcset="assets/images/logo/png/logo-primary.png 1x,
                  assets/images/logo/png/logo-primary@2x.png 2x"
          type="image/png">
  <img src="assets/images/logo/png/logo-primary.png"
       alt="Trabajos Subacuáticos Cádiz"
       width="300"
       height="auto"
       loading="lazy">
</picture>
```

### Método 2: SVG (Mejor opción para escalabilidad)
```html
<img src="assets/images/logo/svg/logo.svg"
     alt="Trabajos Subacuáticos Cádiz"
     width="300"
     height="auto">
```

### Método 3: CSS Background
```css
.logo {
  background-image: url('assets/images/logo/webp/logo-primary.webp');
  background-size: contain;
  background-repeat: no-repeat;
  width: 300px;
  height: 100px;
}

/* Fallback para navegadores sin soporte WebP */
.no-webp .logo {
  background-image: url('assets/images/logo/png/logo-primary.png');
}

/* Retina displays */
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  .logo {
    background-image: url('assets/images/logo/webp/logo-primary@2x.webp');
  }

  .no-webp .logo {
    background-image: url('assets/images/logo/png/logo-primary@2x.png');
  }
}
```

## Mejores Prácticas

### Performance
- ✅ Siempre especifica `width` y `height` para evitar layout shift
- ✅ Usa `loading="lazy"` para logos fuera del viewport inicial
- ✅ Prefiere WebP sobre PNG (70-90% menos peso)
- ✅ Usa SVG cuando sea posible (escalable + mínimo peso)
- ✅ Implementa retina images (@2x) para pantallas de alta resolución

### SEO
- ✅ Siempre incluye atributo `alt` descriptivo
- ✅ Usa nombres de archivo descriptivos
- ✅ Optimiza metadatos de imagen

### Accesibilidad
- ✅ Texto alternativo claro: "Trabajos Subacuáticos Cádiz"
- ✅ Contraste adecuado con el fondo
- ✅ Tamaño mínimo legible en móvil (150px)

## Optimización

Logo original: **2.15 MB** ❌

Logos optimizados:
- PNG small: ~10-15 KB ✅
- PNG primary: ~20-30 KB ✅
- PNG large: ~60-80 KB ✅
- WebP small: ~5-8 KB ✅
- WebP primary: ~12-18 KB ✅
- WebP large: ~35-50 KB ✅
- SVG: ~2-5 KB ✅

**Reducción total: ~99% menos peso**

## Comandos para Generar Logos

```bash
# Instalar dependencias
npm install sharp

# Ejecutar script de optimización
node optimize-logo-sharp.js
```

## Formatos Soportados

- **PNG**: Transparencia, soporte universal, mayor peso
- **WebP**: 70-90% menos peso, transparencia, soporte moderno (96%+ navegadores)
- **SVG**: Escalable infinitamente, peso mínimo, ideal para logos simples
