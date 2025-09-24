// Core Web Vitals and Performance Optimization Utilities

// Preload critical resources
export function preloadCriticalResources() {
  // Preload hero images
  const heroImages = [
    '/images/hero-diving.webp',
    '/images/underwater-welding.webp'
  ];

  heroImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
}

// Optimize images with progressive enhancement
export function optimizeImages() {
  // Convert images to WebP if supported
  const images = document.querySelectorAll('img');

  images.forEach(img => {
    if (!img.dataset.optimized) {
      // Add loading optimization
      img.loading = 'lazy';
      img.decoding = 'async';

      // Add size attributes to prevent layout shift
      if (!img.width && !img.height) {
        img.style.aspectRatio = '16/9';
      }

      img.dataset.optimized = 'true';
    }
  });
}

// Defer non-critical JavaScript
export function deferNonCriticalJS() {
  const scripts = document.querySelectorAll('script[data-defer]');

  scripts.forEach(script => {
    if (script.dataset.defer === 'true') {
      const newScript = document.createElement('script');
      newScript.src = script.src;
      newScript.async = true;
      newScript.defer = true;

      script.parentNode?.replaceChild(newScript, script);
    }
  });
}

// Monitor Core Web Vitals
export function trackCoreWebVitals() {
  // Track Largest Contentful Paint (LCP)
  new PerformanceObserver((entryList) => {
    const entries = entryList.getEntries();
    const lastEntry = entries[entries.length - 1];
    console.log('LCP:', lastEntry.startTime);
  }).observe({ entryTypes: ['largest-contentful-paint'] });

  // Track First Input Delay (FID)
  new PerformanceObserver((entryList) => {
    const entries = entryList.getEntries();
    entries.forEach(entry => {
      console.log('FID:', entry.processingStart - entry.startTime);
    });
  }).observe({ entryTypes: ['first-input'] });

  // Track Cumulative Layout Shift (CLS)
  let clsValue = 0;
  new PerformanceObserver((entryList) => {
    const entries = entryList.getEntries();
    entries.forEach(entry => {
      if (!entry.hadRecentInput) {
        clsValue += entry.value;
      }
    });
    console.log('CLS:', clsValue);
  }).observe({ entryTypes: ['layout-shift'] });
}

// Initialize performance optimizations
export function initPerformanceOptimizations() {
  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      preloadCriticalResources();
      optimizeImages();
      deferNonCriticalJS();
      trackCoreWebVitals();
    });
  } else {
    preloadCriticalResources();
    optimizeImages();
    deferNonCriticalJS();
    trackCoreWebVitals();
  }
}