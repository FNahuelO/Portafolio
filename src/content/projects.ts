export type ProjectFrame = "browser" | "phone";

export type Project = {
  id: string;
  frame: ProjectFrame;
  stack: string[];
  repoUrl?: string;
  liveUrl?: string;
  image?: string;
  title: { es: string; en: string };
  description: { es: string; en: string };
  category: { es: string; en: string };
};

/**
 * Proyectos verificados desde repos públicos de GitHub (FNahuelO)
 * y despliegues públicos asociados. Sin métricas inventadas.
 */
export const projects: Project[] = [
  {
    id: "trabajoya",
    frame: "phone",
    stack: ["React Native", "Expo", "NestJS", "TypeScript", "Socket.IO", "Firebase"],
    repoUrl: "https://github.com/FNahuelO/trabajoya-backend",
    liveUrl: "https://backoffice-murex.vercel.app",
    title: {
      es: "TrabajoYa",
      en: "TrabajoYa",
    },
    description: {
      es: "Plataforma web y mobile para el mercado laboral argentino: autenticación, perfiles, publicaciones, postulaciones, chat en tiempo real con Socket.IO y notificaciones push con Firebase. Ecosistema mobile con Expo y publicación en App Store y Google Play.",
      en: "Web and mobile platform for the Argentine job market: authentication, profiles, listings, applications, real-time chat with Socket.IO, and Firebase push notifications. Mobile stack with Expo and App Store / Google Play releases.",
    },
    category: {
      es: "Full stack · Web & Mobile",
      en: "Full stack · Web & Mobile",
    },
  },
  {
    id: "coty",
    frame: "browser",
    stack: ["TypeScript", "React", "PWA"],
    repoUrl: "https://github.com/FNahuelO/sistema-gestion-coty",
    liveUrl: "https://cotycafe.com",
    title: {
      es: "Coty Café · Sistema de gestión",
      en: "Coty Café · Operations platform",
    },
    description: {
      es: "Plataforma web para Coty Café con carta digital, pedidos online y paneles operativos (delivery, retiro y mesa por QR). Incluye checkout con Mercado Pago y paneles de cocina, caja y administración.",
      en: "Web platform for Coty Café with digital menu, online orders, and operations panels (delivery, pickup, and QR table flow). Includes Mercado Pago checkout plus kitchen, cashier, and admin panels.",
    },
    category: {
      es: "Web · Operaciones",
      en: "Web · Operations",
    },
  },
  {
    id: "fyp",
    frame: "browser",
    stack: ["React", "TypeScript", "Vite", "Tailwind"],
    repoUrl: "https://github.com/FNahuelO/fyp_desing",
    liveUrl: "https://fyp-desing.vercel.app",
    title: {
      es: "F&P Design Studio",
      en: "F&P Design Studio",
    },
    description: {
      es: "Sitio portfolio del estudio F&P Design Studio: presentación de proyectos de UX/UI, branding y producto digital.",
      en: "Portfolio site for F&P Design Studio showcasing UX/UI, branding, and digital product work.",
    },
    category: {
      es: "Diseño · Portfolio",
      en: "Design · Portfolio",
    },
  },
  {
    id: "ceppa",
    frame: "browser",
    stack: ["React", "Node.js", "Redux Toolkit", "AWS", "JWT"],
    repoUrl: "https://github.com/FNahuelO/ceppa-api",
    liveUrl: "https://ceppa-api.vercel.app",
    title: {
      es: "CEPPA",
      en: "CEPPA",
    },
    description: {
      es: "Aplicación web para el Centro de Psicoterapias con Psicodélicos de Argentina. Frontend en React y backend en Node, con autenticación JWT e integración AWS (DynamoDB / S3) y Cloudinary.",
      en: "Web application for Argentina’s Centro de Psicoterapias con Psicodélicos. React frontend and Node backend with JWT auth plus AWS (DynamoDB / S3) and Cloudinary integrations.",
    },
    category: {
      es: "Full stack · Salud",
      en: "Full stack · Health",
    },
  },
  {
    id: "padelpro",
    frame: "browser",
    stack: ["TypeScript", "NestJS"],
    repoUrl: "https://github.com/FNahuelO/padelpro-backend",
    liveUrl: "https://padelpro-backend.vercel.app",
    title: {
      es: "PadelPro Backend",
      en: "PadelPro Backend",
    },
    description: {
      es: "API backend en TypeScript para la plataforma PadelPro.",
      en: "TypeScript backend API for the PadelPro platform.",
    },
    category: {
      es: "Backend · API",
      en: "Backend · API",
    },
  },
  {
    id: "box-app",
    frame: "phone",
    stack: ["TypeScript", "React"],
    repoUrl: "https://github.com/FNahuelO/box-app",
    liveUrl: "https://box-app-nine.vercel.app",
    title: {
      es: "Box App",
      en: "Box App",
    },
    description: {
      es: "Aplicación web en TypeScript desplegada en Vercel.",
      en: "TypeScript web application deployed on Vercel.",
    },
    category: {
      es: "Frontend",
      en: "Frontend",
    },
  },
];
