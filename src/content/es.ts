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
    rightsReserved: string;
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
      "Construyo productos web y mobile de extremo a extremo con React Native, Expo, NestJS, TypeScript y Cloud (AWS / GCP). Abierto a roles Full Stack o Frontend remotos.",
    ctaPrimary: "Ver proyectos",
    ctaSecondary: "Contactar",
    ctaRecruiter: "Perfil para reclutadores",
    ctaClient: "Hablar de un proyecto",
    location: "Ezeiza, Buenos Aires",
  },
  profile: {
    eyebrow: "Perfil",
    title: "Producto digital de punta a punta",
    body: [
      "Soy Full Stack Developer con foco en soluciones escalables para web y mobile. Trabajo con React, Next.js, React Native, Expo, NestJS y TypeScript.",
      "En Cobro Inmediato aporto al desarrollo full stack de soluciones fintech, alineando producto y tecnología, y mejorando rendimiento, infraestructura y documentación.",
      "También desarrollé de forma freelance plataformas como Trabajo Ya (web & mobile) y CEPPA, cubriendo arquitectura, autenticación, realtime, cloud y publicación en stores.",
    ],
    highlights: [
      { label: "Actualidad", value: "Full stack en Cobro Inmediato" },
      { label: "Web & Mobile", value: "Arquitectura full stack" },
      { label: "Realtime", value: "Socket.IO · Push" },
      { label: "Cloud", value: "AWS · GCP · Firebase" },
    ],
  },
  stack: {
    eyebrow: "Stack",
    title: "Herramientas con las que construyo",
    groups: [
      {
        title: "Frontend",
        items: [
          "HTML5",
          "CSS3",
          "Tailwind CSS",
          "JavaScript",
          "TypeScript",
          "React",
          "Next.js",
          "React Native",
          "Expo",
        ],
      },
      {
        title: "Backend",
        items: ["Node.js", "Express.js", "NestJS", "REST APIs", "JWT", "Socket.IO"],
      },
      {
        title: "Datos",
        items: ["PostgreSQL", "SQL", "MongoDB", "Redis", "Sequelize"],
      },
      {
        title: "Cloud & DevOps",
        items: [
          "AWS",
          "GCP",
          "Firebase",
          "Docker",
          "CI/CD",
          "GitHub Actions",
          "ArgoCD",
          "Nginx",
          "PM2",
        ],
      },
    ],
  },
  experience: {
    eyebrow: "Experiencia",
    title: "Experiencia laboral",
    items: [
      {
        org: "Cobro Inmediato",
        role: "Desarrollador full stack",
        period: "2023 — Actualidad",
        points: [
          "Colaboración cercana con el equipo de producto para transformar requisitos de negocio en soluciones técnicas alineadas a objetivos comerciales y técnicos.",
          "Análisis de rendimiento y escalabilidad, proponiendo mejoras de infraestructura para optimizar eficiencia y resiliencia de las aplicaciones.",
          "Desarrollo y actualización de documentación técnica: diagramas de arquitectura, manuales de usuario y guías de desarrollo.",
          "Enfoque de mejora continua: automatización de procesos, reducción de tiempos de entrega y mayor eficiencia del equipo de desarrollo.",
        ],
      },
      {
        org: "AID FOR AIDS Internacional",
        role: "Desarrollador frontend",
        period: "2022 — 2024",
        points: [
          "Diseño e implementación de interfaces con HTML5, CSS3, JavaScript, React y Next.js.",
          "Colaboración con diseñadores gráficos y UX/UI para convertir prototipos en soluciones interactivas.",
          "Optimización de rendimiento y carga con minificación, compresión y caché.",
          "Implementación de diseño responsive y adaptativo en múltiples dispositivos y resoluciones.",
        ],
      },
    ],
  },
  projects: {
    eyebrow: "Proyectos",
    title: "Selección destacada",
    subtitle: "Freelance y productos digitales con demos públicas.",
    live: "Demo",
    items: projects,
  },
  contact: {
    eyebrow: "Contacto",
    title: "Hablemos",
    body: "En búsqueda de oportunidades Full Stack (o Frontend) remotas. También disponible para proyectos de producto digital.",
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
    rightsReserved: "Todos los derechos reservados",
  },
};
