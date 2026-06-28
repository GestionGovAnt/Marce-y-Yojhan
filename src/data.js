export const profile = {
  name: 'Alex Rivera',
  role: 'Diseñador & Desarrollador Full-Stack',
  bio: 'Construyo productos digitales que combinan ingeniería sólida con diseño memorable. Con 6 años trabajando en startups y agencias, ayudo a equipos a lanzar rápido sin sacrificar calidad.',
  bioLong: 'Empecé como diseñador gráfico, migré al mundo web y terminé enamorado de la intersección entre código y experiencia de usuario. Hoy lidero proyectos end-to-end: desde la arquitectura técnica hasta el pixel más fino de la interfaz. He colaborado con empresas en Colombia, España y México, construyendo desde MVPs hasta plataformas con millones de usuarios.',
  email: 'alex@portfolio.dev',
  location: 'Medellín, Colombia 🇨🇴',
  available: true,
  linkedin: 'https://linkedin.com',
  github: 'https://github.com',
  cvUrl: '#cv',
}

export const skills = [
  { name: 'React / Next.js', category: 'Frontend', level: 95 },
  { name: 'TypeScript', category: 'Frontend', level: 90 },
  { name: 'Tailwind CSS', category: 'Frontend', level: 92 },
  { name: 'Figma', category: 'Diseño', level: 88 },
  { name: 'Node.js', category: 'Backend', level: 82 },
  { name: 'PostgreSQL', category: 'Backend', level: 78 },
  { name: 'Framer Motion', category: 'Frontend', level: 85 },
  { name: 'Vercel / AWS', category: 'DevOps', level: 80 },
  { name: 'UI/UX Research', category: 'Diseño', level: 86 },
  { name: 'GraphQL', category: 'Backend', level: 74 },
]

export const projects = [
  {
    id: 1,
    title: 'Plataforma E-commerce Sostenible',
    category: 'Full-Stack',
    tags: ['React', 'Node.js', 'Stripe', 'PostgreSQL'],
    problem: 'Una marca de moda sostenible necesitaba migrar de Shopify a una plataforma propia para reducir comisiones y mejorar la experiencia de pago.',
    role: 'Lideré el diseño de UX y el desarrollo del frontend. Integré pasarela de pago y sistema de inventario en tiempo real.',
    results: [
      { metric: '+34%', label: 'Conversión checkout' },
      { metric: '-62%', label: 'Costo por transacción' },
      { metric: '0.9s', label: 'Tiempo de carga' },
    ],
    color: '#c8f542',
    emoji: '🛍️',
  },
  {
    id: 2,
    title: 'Dashboard Analítico IoT',
    category: 'Frontend',
    tags: ['Next.js', 'D3.js', 'WebSockets', 'TypeScript'],
    problem: 'Una empresa de manufactura necesitaba visualizar datos de 200+ sensores industriales en tiempo real para prevenir fallas en maquinaria.',
    role: 'Diseñé la arquitectura de datos en tiempo real y construí el sistema de visualización con alertas predictivas.',
    results: [
      { metric: '200+', label: 'Sensores monitoreados' },
      { metric: '-28%', label: 'Tiempo de inactividad' },
      { metric: '15ms', label: 'Latencia de datos' },
    ],
    color: '#42b4f5',
    emoji: '📊',
  },
  {
    id: 3,
    title: 'App de Telemedicina',
    category: 'Full-Stack',
    tags: ['React Native', 'WebRTC', 'Firebase', 'Agora'],
    problem: 'Una clínica en Colombia quería digitalizar sus consultas post-pandemia con video HD, historial clínico y recetas digitales.',
    role: 'Diseñé el flujo de usuario completo y desarrollé la app móvil con videollamadas cifradas y sistema de citas.',
    results: [
      { metric: '4.8★', label: 'App Store rating' },
      { metric: '12k+', label: 'Pacientes activos' },
      { metric: '98%', label: 'Uptime del servicio' },
    ],
    color: '#f542a8',
    emoji: '🏥',
  },
  {
    id: 4,
    title: 'SaaS de Gestión Creativa',
    category: 'Diseño + Dev',
    tags: ['Next.js', 'Supabase', 'Stripe', 'Figma'],
    problem: 'Agencias de publicidad perdían horas coordinando briefs, revisiones y entregas entre clientes y creativos.',
    role: 'Investigación UX con 20 agencias, diseño del producto completo e implementación del MVP en 10 semanas.',
    results: [
      { metric: '-40%', label: 'Tiempo en coordinación' },
      { metric: '3 MRR', label: 'En primeros 3 meses' },
      { metric: '92%', label: 'Retención a 30 días' },
    ],
    color: '#f5a042',
    emoji: '🎨',
  },
]

export const services = [
  {
    icon: '⚡',
    title: 'Desarrollo Web Full-Stack',
    description: 'Aplicaciones React/Next.js con backend robusto, APIs y base de datos. Desde MVP hasta producto escalable.',
    items: ['Arquitectura técnica', 'Frontend + Backend', 'Integraciones de pago', 'Deploy y CI/CD'],
  },
  {
    icon: '🎨',
    title: 'Diseño de Producto UI/UX',
    description: 'Research, wireframes, prototipos interactivos y design systems. Diseño que convierte y retiene usuarios.',
    items: ['User research', 'Prototipos Figma', 'Design system', 'Test de usabilidad'],
  },
  {
    icon: '🔍',
    title: 'Auditoría y Optimización',
    description: 'Análisis de rendimiento, UX y conversión de productos existentes con hoja de ruta de mejoras priorizadas.',
    items: ['Lighthouse audit', 'Análisis de conversión', 'Revisión de código', 'Roadmap de mejoras'],
  },
]

export const testimonials = [
  {
    id: 1,
    name: 'Laura Gómez',
    role: 'CEO, Verdana Fashion',
    quote: 'Alex transformó nuestra tienda online en algo que realmente representa la marca. El proceso fue claro, cumplió cada plazo y los resultados superaron lo esperado.',
    initials: 'LG',
    color: '#c8f542',
  },
  {
    id: 2,
    name: 'Carlos Mendoza',
    role: 'CTO, TecnoPlanta S.A.',
    quote: 'Necesitábamos visualizar datos complejos en tiempo real. Alex entendió el problema desde el día uno y entregó una solución elegante que nuestros operadores adoptaron de inmediato.',
    initials: 'CM',
    color: '#42b4f5',
  },
  {
    id: 3,
    name: 'Sofía Herrera',
    role: 'Fundadora, MediConnect',
    quote: 'La app de telemedicina que desarrolló Alex es el corazón de nuestro negocio. La calidad del código y el diseño de la experiencia son de otro nivel.',
    initials: 'SH',
    color: '#f542a8',
  },
]
