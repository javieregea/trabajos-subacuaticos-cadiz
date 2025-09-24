// Centralized business information for NAP consistency
export const businessInfo = {
  name: "Trabajos Subacuáticos Cádiz",
  phone: "+34 614 406 061",
  email: "info@trabajossubacuaticoscadiz.es",
  emergencyPhone: "+34 614 406 061",
  address: {
    street: "Muelle de la Cabezuela, 12",
    city: "Cádiz",
    province: "Cádiz",
    region: "Andalucía",
    postalCode: "11001",
    country: "España"
  },
  coordinates: {
    lat: "36.5297",
    lng: "-6.2921"
  },
  serviceAreas: [
    "Puerto de Cádiz",
    "Bahía de Cádiz",
    "Puerto de Algeciras",
    "Estrecho de Gibraltar",
    "Puerto de la Bahía",
    "El Puerto de Santa María",
    "Rota Naval Base",
    "Sanlúcar de Barrameda"
  ],
  maritimeZones: {
    "Puerto de Cádiz": {
      zones: ["Muelle Comercial", "Dique de Levante", "Muelle Pesquero", "Puerto Deportivo"],
      services: ["Soldadura subacuática", "Inspección de cascos", "Reparación naval"]
    },
    "Bahía de Cádiz": {
      zones: ["Canal Principal", "Zona de Fondeo", "Astilleros Navantia", "Terminal de Contenedores"],
      services: ["Buceo industrial", "Soldadura hiperbárica", "Emergencias marítimas"]
    },
    "Puerto de Algeciras": {
      zones: ["Isla Verde", "Campamento", "La Línea", "Terminal APM"],
      services: ["Soldadura offshore", "Inspección naval", "Trabajos urgentes"]
    }
  },
  emergencyZones: [
    {
      name: "Zona de Emergencia Puerto de Cádiz",
      radius: "15 millas náuticas",
      responseTime: "45 minutos",
      coordinates: { lat: "36.5297", lng: "-6.2921" }
    },
    {
      name: "Zona de Emergencia Bahía de Cádiz",
      radius: "20 millas náuticas",
      responseTime: "60 minutos",
      coordinates: { lat: "36.4734", lng: "-6.2417" }
    },
    {
      name: "Zona de Emergencia Estrecho Gibraltar",
      radius: "25 millas náuticas",
      responseTime: "90 minutos",
      coordinates: { lat: "36.1408", lng: "-5.3536" }
    }
  ],
  divingSpots: [
    {
      name: "Pecio Vapor Cádiz",
      depth: "25 metros",
      coordinates: { lat: "36.5089", lng: "-6.3456" },
      services: ["Inspección arqueológica", "Soldadura subacuática"]
    },
    {
      name: "Dique Seco Navantia",
      depth: "12 metros",
      coordinates: { lat: "36.4987", lng: "-6.2634" },
      services: ["Reparación naval", "Soldadura industrial"]
    },
    {
      name: "Terminal Petrolífera",
      depth: "18 metros",
      coordinates: { lat: "36.4512", lng: "-6.2891" },
      services: ["Inspección petrolera", "Soldadura offshore"]
    }
  ],
  certifications: [
    "AWS D3.6 Underwater Welding",
    "EN ISO 15618 Underwater Welding",
    "DNV GL Standards",
    "Lloyd's Register Certification",
    "PADI Professional",
    "Commercial Diving Certification"
  ],
  workingHours: {
    regular: "24/7 - Servicio Permanente",
    emergency: "Respuesta inmediata en menos de 2 horas"
  }
};