// Strategic Internal Linking Map for SEO Juice Distribution
export const linkingStrategy = {
  // Service Pages Hub - Core service offerings
  services: {
    'soldadura-subacuatica': {
      title: 'Soldadura Subacuática',
      relatedServices: [
        { url: '/reparacion-naval', title: 'Reparación Naval', reason: 'Servicio complementario' },
        { url: '/inspeccion-cascos', title: 'Inspección de Cascos', reason: 'Antes de soldadura' },
        { url: '/emergencias', title: 'Emergencias 24h', reason: 'Soldadura urgente' }
      ],
      relatedLocations: [
        { url: '/cadiz', title: 'Soldadura en Puerto de Cádiz', reason: 'Base principal' },
        { url: '/puerto-algeciras', title: 'Soldadura en Algeciras', reason: 'Puerto comercial' }
      ],
      contextualLinks: [
        { anchor: 'técnicas húmedas y secas', url: '/servicios#tecnicas-soldadura' },
        { anchor: 'emergencias marítimas', url: '/emergencias' },
        { anchor: 'puerto de Cádiz', url: '/cadiz' }
      ]
    },
    'reparacion-naval': {
      title: 'Reparación Naval',
      relatedServices: [
        { url: '/soldadura-subacuatica', title: 'Soldadura Subacuática', reason: 'Técnica principal' },
        { url: '/inspeccion-cascos', title: 'Inspección de Cascos', reason: 'Diagnóstico previo' },
        { url: '/servicios', title: 'Todos los Servicios', reason: 'Vista general' }
      ],
      relatedLocations: [
        { url: '/cadiz', title: 'Reparación en Cádiz', reason: 'Astilleros Navantia' },
        { url: '/puerto-algeciras', title: 'Reparación en Algeciras', reason: 'Puerto comercial' }
      ],
      contextualLinks: [
        { anchor: 'soldadura a flote', url: '/soldadura-subacuatica' },
        { anchor: 'inspección previa', url: '/inspeccion-cascos' },
        { anchor: 'bahía de Cádiz', url: '/cadiz' }
      ]
    },
    'inspeccion-cascos': {
      title: 'Inspección de Cascos',
      relatedServices: [
        { url: '/soldadura-subacuatica', title: 'Soldadura Subacuática', reason: 'Reparación posterior' },
        { url: '/reparacion-naval', title: 'Reparación Naval', reason: 'Solución completa' },
        { url: '/emergencias', title: 'Inspección Urgente', reason: 'Emergencias' }
      ],
      relatedLocations: [
        { url: '/cadiz', title: 'Inspección en Puerto Cádiz', reason: 'Flota comercial' },
        { url: '/puerto-algeciras', title: 'Inspección en Algeciras', reason: 'Tráfico internacional' }
      ],
      contextualLinks: [
        { anchor: 'buceo de inspección', url: '/servicios#buceo-industrial' },
        { anchor: 'reparación inmediata', url: '/soldadura-subacuatica' },
        { anchor: 'Estrecho de Gibraltar', url: '/puerto-algeciras' }
      ]
    },
    'emergencias': {
      title: 'Emergencias Marítimas 24h',
      relatedServices: [
        { url: '/soldadura-subacuatica', title: 'Soldadura de Emergencia', reason: 'Reparación urgente' },
        { url: '/reparacion-naval', title: 'Reparación Urgente', reason: 'Solución rápida' },
        { url: '/servicios', title: 'Servicios de Emergencia', reason: 'Capacidades completas' }
      ],
      relatedLocations: [
        { url: '/cadiz', title: 'Emergencias en Cádiz', reason: 'Base de respuesta' },
        { url: '/puerto-algeciras', title: 'Emergencias Algeciras', reason: 'Cobertura Estrecho' }
      ],
      contextualLinks: [
        { anchor: 'respuesta inmediata', url: '/contacto' },
        { anchor: 'soldadura urgente', url: '/soldadura-subacuatica' },
        { anchor: 'puerto de Cádiz', url: '/cadiz' }
      ]
    }
  },

  // Location Pages Hub - Geographic targeting
  locations: {
    'cadiz': {
      title: 'Trabajos Subacuáticos en Cádiz',
      relatedServices: [
        { url: '/soldadura-subacuatica', title: 'Soldadura en Puerto Cádiz', reason: 'Servicio principal' },
        { url: '/reparacion-naval', title: 'Reparación Naval Cádiz', reason: 'Astilleros locales' },
        { url: '/inspeccion-cascos', title: 'Inspección en Bahía', reason: 'Flota pesquera' },
        { url: '/emergencias', title: 'Emergencias Cádiz', reason: 'Base 24h' }
      ],
      relatedLocations: [
        { url: '/puerto-algeciras', title: 'Puerto de Algeciras', reason: 'Estrecho Gibraltar' }
      ],
      contextualLinks: [
        { anchor: 'Puerto de Santa María', url: '/#puerto-santa-maria' },
        { anchor: 'Bahía de Cádiz', url: '/#bahia-cadiz' },
        { anchor: 'todos los servicios', url: '/servicios' }
      ]
    },
    'puerto-algeciras': {
      title: 'Trabajos Subacuáticos en Algeciras',
      relatedServices: [
        { url: '/soldadura-subacuatica', title: 'Soldadura en Algeciras', reason: 'Puerto comercial' },
        { url: '/reparacion-naval', title: 'Reparación en Algeciras', reason: 'Tráfico internacional' },
        { url: '/inspeccion-cascos', title: 'Inspección TSS', reason: 'Control tráfico' },
        { url: '/emergencias', title: 'Emergencias Estrecho', reason: 'Zona crítica' }
      ],
      relatedLocations: [
        { url: '/cadiz', title: 'Puerto de Cádiz', reason: 'Base principal' }
      ],
      contextualLinks: [
        { anchor: 'Estrecho de Gibraltar', url: '/cadiz#estrecho-gibraltar' },
        { anchor: 'Terminal Europa', url: '/#terminal-europa' },
        { anchor: 'base en Cádiz', url: '/cadiz' }
      ]
    }
  },

  // Hub Pages - Central navigation
  hubs: {
    'index': {
      title: 'Trabajos Subacuáticos Cádiz - Homepage',
      primaryServices: [
        { url: '/soldadura-subacuatica', title: 'Soldadura Subacuática', priority: 'high' },
        { url: '/reparacion-naval', title: 'Reparación Naval', priority: 'high' },
        { url: '/inspeccion-cascos', title: 'Inspección de Cascos', priority: 'medium' },
        { url: '/emergencias', title: 'Emergencias 24h', priority: 'high' }
      ],
      primaryLocations: [
        { url: '/cadiz', title: 'Cádiz y Provincia', priority: 'high' },
        { url: '/puerto-algeciras', title: 'Puerto de Algeciras', priority: 'medium' }
      ]
    },
    'servicios': {
      title: 'Servicios - Central Hub',
      allServices: [
        { url: '/soldadura-subacuatica', title: 'Soldadura Subacuática', description: 'Técnicas húmedas y secas' },
        { url: '/reparacion-naval', title: 'Reparación Naval', description: 'Reparación a flote' },
        { url: '/inspeccion-cascos', title: 'Inspección de Cascos', description: 'Buceo de inspección' },
        { url: '/emergencias', title: 'Emergencias 24h', description: 'Respuesta inmediata' }
      ],
      allLocations: [
        { url: '/cadiz', title: 'Cádiz Capital y Bahía', description: 'Base principal' },
        { url: '/puerto-algeciras', title: 'Puerto de Algeciras', description: 'Estrecho Gibraltar' }
      ]
    },
    'contacto': {
      title: 'Contacto',
      quickLinks: [
        { url: '/emergencias', title: 'Emergencias 24h', reason: 'Contacto urgente' },
        { url: '/servicios', title: 'Ver Servicios', reason: 'Información detallada' },
        { url: '/cadiz', title: 'Ubicación Cádiz', reason: 'Nuestra base' }
      ]
    }
  },

  // Contextual linking patterns
  contextualPatterns: {
    serviceToLocation: [
      { from: 'soldadura-subacuatica', to: 'cadiz', anchor: 'puerto de Cádiz' },
      { from: 'soldadura-subacuatica', to: 'puerto-algeciras', anchor: 'Puerto de Algeciras' },
      { from: 'reparacion-naval', to: 'cadiz', anchor: 'astilleros de Cádiz' },
      { from: 'inspeccion-cascos', to: 'puerto-algeciras', anchor: 'Estrecho de Gibraltar' }
    ],
    locationToService: [
      { from: 'cadiz', to: 'soldadura-subacuatica', anchor: 'soldadura subacuática' },
      { from: 'cadiz', to: 'reparacion-naval', anchor: 'reparación naval' },
      { from: 'puerto-algeciras', to: 'emergencias', anchor: 'emergencias marítimas' }
    ],
    serviceToService: [
      { from: 'inspeccion-cascos', to: 'soldadura-subacuatica', anchor: 'reparación por soldadura' },
      { from: 'soldadura-subacuatica', to: 'reparacion-naval', anchor: 'reparación completa' },
      { from: 'reparacion-naval', to: 'emergencias', anchor: 'reparación urgente' }
    ]
  }
};

// SEO Juice Distribution Priorities
export const linkPriority = {
  // High Priority - Main money pages
  tier1: ['/soldadura-subacuatica', '/cadiz', '/emergencias'],

  // Medium Priority - Supporting pages
  tier2: ['/reparacion-naval', '/inspeccion-cascos', '/puerto-algeciras'],

  // Supporting Priority - Hub pages
  tier3: ['/servicios', '/contacto', '/']
};