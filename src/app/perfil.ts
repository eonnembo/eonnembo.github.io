/** Todo el contenido del sitio. Para actualizar el CV, se edita este archivo y nada más. */

export interface Puesto {
  empresa: string;
  rol: string;
  desde: string;
  hasta: string;
  lugar: string;
  resumen: string;
  logros: string[];
  stack: string[];
}

export interface Proyecto {
  nombre: string;
  tipo: string;
  estado: string;
  resumen: string;
  puntos: string[];
  stack: string[];
  enlace?: { texto: string; url: string };
}

export interface GrupoStack {
  capa: string;
  items: string[];
}

export interface Practica {
  titulo: string;
  texto: string;
}

export const PERFIL = {
  nombre: 'Elías Onnembo',
  nombreCompleto: 'Elías Rodrigo Onnembo',
  rol: 'Desarrollador Full Stack',
  especialidad: 'Angular · Spring Boot · Node.js',
  ubicacion: 'Argentina',
  desde: 2017,
  bajada:
    'Construyo productos web de punta a punta: microfrontends en Angular, APIs en Spring Boot y NestJS, ' +
    'y la base de datos y la nube que los sostienen. Desde 2017 hago software que usan negocios reales todos los días.',
  sobreMi: [
    'Soy Técnico Superior en Programación y llevo más de nueve años desarrollando software de gestión. ' +
      'Empecé en el back-end de un ERP y hoy trabajo en todas las capas de una plataforma SaaS para gastronomía ' +
      'que restaurantes y comercios usan todos los días.',
    'Me gusta llevar una funcionalidad completa: entender el problema con producto, diseñar el modelo de datos, ' +
      'escribir la API y la pantalla, probarla contra datos reales y acompañarla hasta producción. ' +
      'En paralelo desarrollo productos propios, uno de ellos ya en producción con clientes reales.',
  ],
  enlaces: {
    linkedin: 'https://www.linkedin.com/in/el%C3%ADas-onnembo/',
    github: 'https://github.com/eonnembo',
  },
};

export const EXPERIENCIA: Puesto[] = [
  {
    empresa: 'Maxirest',
    rol: 'Programador Full Stack',
    desde: 'jul. 2021',
    hasta: 'actualidad',
    lugar: 'Argentina · jornada completa',
    resumen:
      'Plataforma SaaS de gestión para gastronomía: un sistema web multi-tenant (gestión online), ' +
      'APIs en microservicios y un punto de venta Android, en producción y en uso diario por comercios gastronómicos.',
    logros: [
      'Desarrollo microfrontends en Angular 17 → 21 con Native Federation, integrados a un shell host: standalone components, signals, PrimeNG y AG Grid.',
      'Construyo y mantengo APIs REST en Java con Spring Boot (incluida la migración a Spring Boot 4), multi-tenant y detrás de un API Gateway con control de endpoints.',
      'Implementé de punta a punta el sistema de permisos de la plataforma: roles por categoría y por empleado, enforcement en las APIs y consumo en el shell y en cada microfrontend.',
      'Participé en la migración de la base de datos de MySQL a AlloyDB (PostgreSQL) con Row-Level Security para aislar a cada cliente.',
      'Trabajo con el punto de venta Android (Kotlin Multiplatform y Compose Multiplatform) en la integración con la plataforma web.',
      'Despliego en Google Cloud (GKE / Kubernetes) con pipelines de GitHub Actions, análisis de seguridad con Snyk y un flujo de entregas con staging y QA.',
    ],
    stack: ['Angular', 'TypeScript', 'Spring Boot', 'Java', 'Kotlin', 'PostgreSQL', 'MySQL', 'GCP', 'Kubernetes'],
  },
  {
    empresa: 'ITRIS Software',
    rol: 'Desarrollador Back-end',
    desde: 'ago. 2017',
    hasta: 'jun. 2021',
    lugar: 'Argentina · jornada completa',
    resumen: 'Software ERP para empresas.',
    logros: [
      'Desarrollo back-end del ERP sobre Microsoft SQL Server: lógica de negocio, consultas y reportes.',
      'Cuatro años trabajando sobre un producto de gestión en uso por empresas, donde aprendí a cuidar los datos de quien depende del sistema.',
    ],
    stack: ['Software ERP', 'SQL Server', 'SQL'],
  },
];

export const PROYECTOS: Proyecto[] = [
  {
    nombre: 'Clubex',
    tipo: 'SaaS multi-tenant · producto propio',
    estado: 'En producción',
    resumen:
      'Gestión integral para clubes deportivos de cualquier disciplina: sedes, actividades, planes, socios, cuotas, ventas, gastos y control de accesos.',
    puntos: [
      'En producción con clubes reales y sus socios.',
      'Dos negocios en un producto: la plataforma (suscripciones, cobros, alta de clubes) y la operación de cada club.',
      'Aislamiento entre clubes con Row-Level Security en PostgreSQL.',
      'Panel de gestión en Angular con signals, portal del socio como PWA mobile-first y landing propia.',
      'Monorepo con contratos compartidos entre API y frontends; CI/CD con GitHub Actions y Coolify en un VPS.',
    ],
    stack: ['NestJS', 'Prisma', 'PostgreSQL', 'Angular 22', 'PWA', 'Docker', 'GitHub Actions'],
  },
  {
    nombre: 'PlayVolt',
    tipo: 'Sistema de juegos en vivo para streamers',
    estado: 'En uso',
    resumen:
      'Sistema para que un streamer transmita juegos en su vivo de TikTok, Twitch o Kick en los que el público participa ' +
      'con sus regalos, comentarios y likes. Se usa para que la audiencia interactúe más y para aumentar las donaciones del vivo.',
    puntos: [
      'Eventos en tiempo real con WebSockets: cada interacción del vivo se convierte en una acción del juego.',
      'Motores de física 2D (Matter.js) y escenas 3D (Three.js) renderizadas como overlay de la transmisión.',
      'Panel de control para cambiar de juego sin cortar el vivo, simulador de eventos y voz sintetizada.',
      'Grabador automatizado de videos para redes y guía de uso generada como PDF.',
    ],
    stack: ['Node.js', 'Express', 'Socket.IO', 'Three.js', 'Matter.js'],
  },
  {
    nombre: 'Consorcio',
    tipo: 'Sistema de administración de consorcios',
    estado: 'Desarrollo',
    resumen:
      'Gestión de consorcios argentinos: gastos, sueldos, liquidaciones mensuales, documentación y portal de propietarios.',
    puntos: [
      'API asíncrona en Python con FastAPI y SQLAlchemy, autenticación con JWT.',
      'Generación de liquidaciones y comprobantes en PDF con código QR.',
      'Frontend en Angular con standalone components.',
    ],
    stack: ['Python', 'FastAPI', 'SQLAlchemy', 'Angular', 'MySQL'],
  },
];

export const STACK: GrupoStack[] = [
  { capa: 'Frontend', items: ['Angular 17–22', 'TypeScript', 'Signals', 'RxJS', 'Native Federation', 'PrimeNG', 'AG Grid', 'PWA', 'HTML / CSS / Sass'] },
  { capa: 'Backend', items: ['Java', 'Spring Boot', 'Node.js', 'NestJS', 'Express', 'Python', 'FastAPI', 'APIs REST', 'WebSockets'] },
  { capa: 'Mobile', items: ['Kotlin Multiplatform', 'Compose Multiplatform', 'Android', 'Ktor', 'Koin'] },
  { capa: 'Datos', items: ['PostgreSQL', 'AlloyDB', 'MySQL', 'SQL Server', 'Prisma', 'JPA / Hibernate', 'Redis', 'Row-Level Security'] },
  { capa: 'Cloud y DevOps', items: ['Google Cloud', 'Kubernetes (GKE)', 'Docker', 'GitHub Actions', 'Snyk', 'Coolify'] },
  { capa: 'Herramientas', items: ['Git', 'Jira', 'Claude Code', 'Jasmine / Karma', 'JUnit', 'Postman'] },
];

export const PRACTICAS: Practica[] = [
  {
    titulo: 'De punta a punta',
    texto: 'Tomo una funcionalidad desde la conversación con producto hasta producción: modelo de datos, API, pantalla, pruebas y el seguimiento después del deploy.',
  },
  {
    titulo: 'Probado contra la realidad',
    texto: 'Un test en verde no alcanza: verifico contra datos reales, ejercito el caso completo —incluida la vuelta atrás— y recién ahí paso a QA.',
  },
  {
    titulo: 'Entregas ordenadas',
    texto: 'Ramas por ticket, ambiente de staging, revisión de código y QA antes de producción. Los hotfix tienen su propio camino y su propia firma.',
  },
  {
    titulo: 'Cambios de datos seguros',
    texto: 'Los scripts sobre bases productivas corren primero en simulación, muestran qué van a tocar y piden confirmación explícita antes de escribir.',
  },
  {
    titulo: 'IA como herramienta de trabajo',
    texto: 'Uso agentes de IA (Claude Code) para desarrollar, revisar código y verificar entregas, con criterio propio sobre cada cambio.',
  },
  {
    titulo: 'Documentar lo que se decide',
    texto: 'Dejo escrito el porqué de cada decisión en el ticket y en el código, para que el próximo que llegue no tenga que adivinarlo.',
  },
];

export const FORMACION = {
  titulo: 'Técnico Superior en Programación',
  institucion: 'Universidad Tecnológica Nacional',
  periodo: '2016 – 2018',
};
