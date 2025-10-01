# Guía de Uso del Logo - Trabajos Subacuáticos Cádiz

## 📊 Resumen de Optimización

**Antes**: Logo original `logo version 1.png` - **2.05 MB** ❌
**Después**: Múltiples versiones optimizadas - **6 KB a 93 KB** ✅
**Reducción**: **~97-99% menos peso**

---

## 📁 Estructura de Archivos Generados

```
assets/images/logo/
├── png/
│   ├── logo-small.png (150px) - 2.39 KB
│   ├── logo-small@2x.png (300px) - 6.08 KB
│   ├── logo-primary.png (300px) - 6.08 KB
│   ├── logo-primary@2x.png (600px) - 16.97 KB
│   ├── logo-large.png (600px) - 16.97 KB
│   ├── logo-large@2x.png (1200px) - 57.50 KB
│   └── logo-thumbnail.png (200px) - 3.44 KB
├── webp/
│   ├── logo-small.webp (150px) - 4.07 KB
│   ├── logo-small@2x.webp (300px) - 11.55 KB
│   ├── logo-primary.webp (300px) - 11.55 KB
│   ├── logo-primary@2x.webp (600px) - 32.04 KB
│   ├── logo-large.webp (600px) - 32.04 KB
│   ├── logo-large@2x.webp (1200px) - 93.47 KB
│   └── logo-thumbnail.webp (200px) - 6.22 KB
└── svg/
    └── logo.svg (~2-5 KB, escalable)
```

---

## 🎯 Casos de Uso

### 1. **Navbar/Header** (Recomendado: logo-primary)

```html
<!-- Opción A: Picture element con WebP + PNG fallback -->
<picture>
  <source srcset="assets/images/logo/webp/logo-primary.webp 1x,
                  assets/images/logo/webp/logo-primary@2x.webp 2x"
          type="image/webp">
  <img src="assets/images/logo/png/logo-primary.png"
       srcset="assets/images/logo/png/logo-primary@2x.png 2x"
       alt="Trabajos Subacuáticos Cádiz"
       width="300"
       height="200">
</picture>

<!-- Opción B: SVG (mejor opción) -->
<img src="assets/images/logo/svg/logo.svg"
     alt="Trabajos Subacuáticos Cádiz"
     width="300"
     height="200">
```

**Peso**: 6-17 KB (PNG) | 11-32 KB (WebP) | ~3 KB (SVG)
**Cuándo usar**: Header, navbar, footer

---

### 2. **Hero Section/Landing** (Recomendado: logo-large)

```html
<picture>
  <source srcset="assets/images/logo/webp/logo-large.webp 1x,
                  assets/images/logo/webp/logo-large@2x.webp 2x"
          type="image/webp">
  <img src="assets/images/logo/png/logo-large.png"
       srcset="assets/images/logo/png/logo-large@2x.png 2x"
       alt="Trabajos Subacuáticos Cádiz"
       width="600"
       height="400"
       loading="lazy">
</picture>
```

**Peso**: 17-58 KB (PNG) | 32-94 KB (WebP)
**Cuándo usar**: Hero section, landing pages, secciones destacadas

---

### 3. **Mobile/Favicon** (Recomendado: logo-small)

```html
<!-- Favicon link -->
<link rel="icon" type="image/png" sizes="150x100" href="assets/images/logo/png/logo-small.png">
<link rel="icon" type="image/png" sizes="300x200" href="assets/images/logo/png/logo-small@2x.png">

<!-- Apple Touch Icon -->
<link rel="apple-touch-icon" href="assets/images/logo/png/logo-small@2x.png">
```

**Peso**: 2-6 KB
**Cuándo usar**: Favicon, mobile icons, small displays

---

### 4. **Redes Sociales** (Recomendado: logo-thumbnail)

```html
<!-- Open Graph -->
<meta property="og:image" content="https://tudominio.com/assets/images/logo/png/logo-thumbnail.png">
<meta property="og:image:width" content="200">
<meta property="og:image:height" content="133">

<!-- Twitter Card -->
<meta name="twitter:image" content="https://tudominio.com/assets/images/logo/png/logo-thumbnail.png">
```

**Peso**: 3-6 KB
**Cuándo usar**: Open Graph, Twitter Cards, previews sociales

---

## 🎨 CSS Background Images

```css
/* Header logo */
.header-logo {
  background-image: url('assets/images/logo/webp/logo-primary.webp');
  background-size: contain;
  background-repeat: no-repeat;
  width: 300px;
  height: 200px;
}

/* Fallback PNG para navegadores antiguos */
.no-webp .header-logo {
  background-image: url('assets/images/logo/png/logo-primary.png');
}

/* Retina displays */
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  .header-logo {
    background-image: url('assets/images/logo/webp/logo-primary@2x.webp');
  }

  .no-webp .header-logo {
    background-image: url('assets/images/logo/png/logo-primary@2x.png');
  }
}
```

---

## ⚡ Mejores Prácticas de Performance

### ✅ DO (Hacer)

1. **Usa SVG cuando sea posible**
   - Peso mínimo (~3 KB)
   - Escalable infinitamente sin pérdida de calidad
   - Perfecto para logos simples

2. **Implementa WebP con fallback PNG**
   ```html
   <picture>
     <source srcset="logo.webp" type="image/webp">
     <img src="logo.png" alt="Logo">
   </picture>
   ```

3. **Especifica dimensiones** (width/height)
   - Evita Cumulative Layout Shift (CLS)
   - Mejora Core Web Vitals

4. **Usa loading="lazy"** para logos fuera del viewport
   ```html
   <img src="logo.png" loading="lazy">
   ```

5. **Implementa versiones retina (@2x)**
   - Mejor calidad en pantallas de alta resolución
   - Usa `srcset` para servir la versión correcta

### ❌ DON'T (No hacer)

1. ❌ No uses el logo original (2 MB) directamente
2. ❌ No omitas dimensiones (causa layout shift)
3. ❌ No uses lazy loading en logos above the fold
4. ❌ No uses JPG para logos (pierde transparencia)
5. ❌ No escales imágenes con CSS (usa el tamaño correcto)

---

## 🔧 Regenerar Logos

Si necesitas regenerar los logos con diferentes configuraciones:

```bash
# Instalar dependencias (solo primera vez)
npm install sharp

# Ejecutar script de optimización
node optimize-logo-sharp.cjs
```

---

## 📱 Soporte de Navegadores

| Formato | Soporte | Notas |
|---------|---------|-------|
| PNG | 100% | Universal, fallback seguro |
| WebP | 97%+ | Chrome, Firefox, Edge, Safari 14+ |
| SVG | 99%+ | Todos los navegadores modernos |

---

## 🎯 Recomendaciones por Contexto

| Contexto | Logo Recomendado | Formato | Peso |
|----------|------------------|---------|------|
| **Navbar/Header** | logo-primary | SVG o WebP | 3-12 KB |
| **Hero Section** | logo-large | WebP + PNG | 32-94 KB |
| **Mobile** | logo-small | PNG | 2-6 KB |
| **Favicon** | logo-small | PNG | 2-6 KB |
| **Redes Sociales** | logo-thumbnail | PNG | 3-6 KB |
| **Email** | logo-primary | PNG | 6-17 KB |
| **Print** | logo-large@2x | PNG | 58 KB |

---

## 🚀 Resultado Final

- ✅ **14 versiones optimizadas** en PNG y WebP
- ✅ **1 versión SVG** escalable
- ✅ **Reducción de 97-99%** en peso
- ✅ **Soporte retina** (@2x) para todas las versiones
- ✅ **Sin distorsión** - aspect ratio preservado
- ✅ **Carga rápida** - todos los logos < 100 KB
- ✅ **SEO friendly** - nombres descriptivos
- ✅ **Accesible** - incluye alt text y títulos

---

## 📞 Mantenimiento

Para actualizar el logo en el futuro:

1. Reemplaza `logo version 1.png` con el nuevo diseño
2. Ejecuta `node optimize-logo-sharp.cjs`
3. Los logos se regenerarán automáticamente en todos los tamaños
