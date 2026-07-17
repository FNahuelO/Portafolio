import { projects, type Project } from "./projects";

export type Dictionary = {
  meta: {
    title: string;
    description: string;
    ogLocale: string;
  };
  nav: {
    profile: string;
    stack: string;
    experience: string;
    projects: string;
    contact: string;
    skip: string;
    openMenu: string;
    closeMenu: string;
  };
  theme: {
    light: string;
    dark: string;
    system: string;
  };
  locale: {
    label: string;
    es: string;
    en: string;
  };
  hero: {
    brand: string;
    role: string;
    summary: string;
    ctaPrimary: string;
    ctaSecondary: string;
    ctaRecruiter: string;
    ctaClient: string;
    location: string;
    scrollHint: string;
  };
  profile: {
    eyebrow: string;
    title: string;
    body: string[];
    highlights: { label: string; value: string }[];
  };
  stack: {
    eyebrow: string;
    title: string;
    groups: { title: string; items: string[] }[];
  };
  experience: {
    eyebrow: string;
    title: string;
    items: {
      org: string;
      role: string;
      period: string;
      points: string[];
    }[];
  };
  projects: {
    eyebrow: string;
    title: string;
    subtitle: string;
    code: string;
    live: string;
    items: Project[];
  };
  contact: {
    eyebrow: string;
    title: string;
    body: string;
    emailLabel: string;
    email: string;
    linkedinLabel: string;
    githubLabel: string;
    ctaRecruiter: string;
    ctaClient: string;
    mailtoRecruiter: string;
    mailtoClient: string;
  };
  footer: {
    rights: string;
    note: string;
  };
};

export const es: Dictionary = {
  meta: {
    title: "Franco Osorio · Full Stack Developer & Mobile Engineer",
    description:
      "Portafolio de Franco Osorio. Full Stack Developer y Mobile Engineer especializado en React Native, Expo, NestJS, TypeScript y Cloud (AWS / GCP).",
    ogLocale: "es_AR",
  },
  nav: {
    profile: "Perfil",
    stack: "Stack",
    experience: "Experiencia",
    projects: "Proyectos",
    contact: "Contacto",
    skip: "Saltar al contenido",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
  },
  theme: {
    light: "Tema claro",
    dark: "Tema oscuro",
    system: "Sistema",
  },
  locale: {
    label: "Idioma",
    es: "ES",
    en: "EN",
  },
  hero: {
    brand: "Franco Osorio",
    role: "Full Stack Developer · Mobile Engineer",
    summary:
      "Construyo productos web y mobile de extremo a extremo con React Native, Expo, NestJS, TypeScript y Cloud (AWS / GCP).",
    ctaPrimary: "Ver proyectos",
    ctaSecondary: "Contactar",
    ctaRecruiter: "Perfil para reclutadores",
    ctaClient: "Hablar de un proyecto",
    location: "Argentina",
    scrollHint: "Desplazá para explorar",
  },
  profile: {
    eyebrow: "Perfil",
    title: "Producto digital de punta a punta",
    body: [
      "Soy Full Stack Developer con foco en soluciones escalables para web y mobile. Trabajo con React, Next.js, React Native, Expo, NestJS y TypeScript.",
      "He desarrollado módulos de autenticación, perfiles, publicaciones, postulaciones, chat en tiempo real con Socket.IO y notificaciones push con Firebase, además de configurar builds y publicación en App Store y Google Play.",
      "También optimizo infraestructura cloud y costos operativos asociados a tiempo real, almacenamiento, dominios y APIs.",
    ],
    highlights: [
      { label: "Web & Mobile", value: "Arquitectura full stack" },
      { label: "Realtime", value: "Socket.IO · Push" },
      { label: "Cloud", value: "AWS · GCP · Firebase" },
      { label: "Mobile ops", value: "Expo · Stores" },
    ],
  },
  stack: {
    eyebrow: "Stack",
    title: "Herramientas con las que construyo",
    groups: [
      {
        title: "Frontend",
        items: ["React", "Next.js", "TypeScript", "HTML5", "CSS3", "JavaScript"],
      },
      {
        title: "Mobile",
        items: ["React Native", "Expo"],
      },
      {
        title: "Backend",
        items: ["NestJS", "Node.js", "APIs REST", "JWT", "Socket.IO"],
      },
      {
        title: "Cloud & DevOps",
        items: ["AWS", "GCP", "Firebase", "DynamoDB", "S3"],
      },
    ],
  },
  experience: {
    eyebrow: "Experiencia",
    title: "Trabajo verificado",
    items: [
      {
        org: "Plataforma laboral (Argentina)",
        role: "Desarrollo integral web & mobile",
        period: "Proyecto full stack",
        points: [
          "Diseño e implementación de plataforma mobile y web orientada al mercado laboral argentino, incluyendo arquitectura, bases de datos y despliegue.",
          "Módulos de autenticación segura, perfiles diferenciados, publicaciones, postulaciones, chat en tiempo real con Socket.IO y notificaciones push con Firebase.",
          "Configuración del ecosistema mobile con Expo, builds, revisión de políticas y publicación en App Store y Google Play.",
          "Optimización de infraestructura cloud y costos de servicios para tiempo real, almacenamiento, dominios y APIs.",
        ],
      },
      {
        org: "AID FOR AIDS Internacional",
        role: "Frontend",
        period: "Interfaces web",
        points: [
          "Diseño e implementación de interfaces con HTML5, CSS3 y JavaScript.",
          "Uso de React y Next.js para experiencias dinámicas de alta calidad.",
        ],
      },
      {
        org: "CEPPA",
        role: "Full stack",
        period: "Aplicación web",
        points: [
          "Aplicación web con React en frontend y Node en backend para el Centro de Psicoterapias con Psicodélicos de Argentina.",
          "Estado con Redux Toolkit, formularios con Formik/Yup, autenticación JWT y almacenamiento con AWS SDK (DynamoDB / S3) y Cloudinary.",
        ],
      },
    ],
  },
  projects: {
    eyebrow: "Proyectos",
    title: "Selección destacada",
    subtitle: "Repos públicos y demos desplegadas desde GitHub.",
    code: "Código",
    live: "Demo",
    items: projects,
  },
  contact: {
    eyebrow: "Contacto",
    title: "Hablemos",
    body: "Disponible para roles full stack / mobile y para proyectos de producto digital.",
    emailLabel: "Email",
    email: "frannahuelosorio@gmail.com",
    linkedinLabel: "LinkedIn",
    githubLabel: "GitHub",
    ctaRecruiter: "Soy reclutador",
    ctaClient: "Tengo un proyecto",
    mailtoRecruiter:
      "mailto:frannahuelosorio@gmail.com?subject=Oportunidad%20laboral%20-%20Franco%20Osorio",
    mailtoClient:
      "mailto:frannahuelosorio@gmail.com?subject=Consulta%20de%20proyecto%20-%20Franco%20Osorio",
  },
  footer: {
    rights: "Franco Osorio",
    note: "Portafolio bilingüe · PWA",
  },
};
