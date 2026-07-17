export type ProjectFrame = "browser" | "phone";

export type Project = {
  id: string;
  frame: ProjectFrame;
  stack: string[];
  liveUrl?: string;
  title: { es: string; en: string };
  description: { es: string; en: string };
  category: { es: string; en: string };
};

/**
 * Proyectos destacados según CV y demos públicas.
 * Sin enlaces a repositorios de código.
 */
export const projects: Project[] = [
  {
    id: "trabajoya",
    frame: "phone",
    stack: [
      "React Native",
      "Expo",
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "AWS",
      "GCP",
      "Firebase",
      "Socket.IO",
    ],
    liveUrl: "https://backoffice-murex.vercel.app",
    title: {
      es: "Trabajo Ya",
      en: "Trabajo Ya",
    },
    description: {
      es: "Aplicación mobile y web freelance para el mercado laboral argentino, orientada a conectar empresas con postulantes. Desarrollo integral: arquitectura, base de datos, backend, frontend, integraciones, despliegues y cloud. Módulos de autenticación, perfiles, publicaciones, postulaciones, chat en tiempo real, notificaciones push y planes pagos para empresas, con publicación en App Store y Google Play.",
      en: "Freelance mobile and web app for the Argentine job market, connecting companies with applicants. End-to-end delivery: architecture, database, backend, frontend, integrations, deployments, and cloud. Modules for authentication, profiles, listings, applications, real-time chat, push notifications, and paid plans for companies, with App Store and Google Play releases.",
    },
    category: {
      es: "Freelance · Web & Mobile",
      en: "Freelance · Web & Mobile",
    },
  },
  {
    id: "coty",
    frame: "browser",
    stack: ["TypeScript", "React", "PWA"],
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
    id: "ceppa",
    frame: "browser",
    stack: [
      "React",
      "Node.js",
      "TypeScript",
      "MongoDB",
      "Material UI",
      "Redux Toolkit",
      "AWS",
      "JWT",
    ],
    liveUrl: "https://ceppa-api.vercel.app",
    title: {
      es: "CEPPA",
      en: "CEPPA",
    },
    description: {
      es: "Aplicación web freelance para el Centro de Psicoterapias con Psicodélicos de Argentina. Frontend en React y backend en Node, con Redux Toolkit, Formik/Yup, autenticación JWT e integración AWS (DynamoDB / S3) y Cloudinary.",
      en: "Freelance web application for Argentina’s Centro de Psicoterapias con Psicodélicos. React frontend and Node backend with Redux Toolkit, Formik/Yup, JWT authentication, plus AWS (DynamoDB / S3) and Cloudinary integrations.",
    },
    category: {
      es: "Freelance · Full stack",
      en: "Freelance · Full stack",
    },
  },
  {
    id: "fyp",
    frame: "browser",
    stack: ["React", "TypeScript", "Vite", "Tailwind"],
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
];
