import { projects } from "./projects";
import type { Dictionary } from "./es";

export const en = {
  meta: {
    title: "Franco Osorio · Full Stack Developer & Mobile Engineer",
    description:
      "Portfolio of Franco Osorio. Full Stack Developer and Mobile Engineer focused on React Native, Expo, NestJS, TypeScript, and Cloud (AWS / GCP).",
    ogLocale: "en_US",
  },
  nav: {
    profile: "Profile",
    stack: "Stack",
    experience: "Experience",
    projects: "Projects",
    contact: "Contact",
    skip: "Skip to content",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  theme: {
    light: "Light theme",
    dark: "Dark theme",
    system: "System",
  },
  locale: {
    label: "Language",
    es: "ES",
    en: "EN",
  },
  hero: {
    brand: "Franco Osorio",
    role: "Full Stack Developer · Mobile Engineer",
    summary:
      "I build end-to-end web and mobile products with React Native, Expo, NestJS, TypeScript, and Cloud (AWS / GCP).",
    ctaPrimary: "View projects",
    ctaSecondary: "Contact",
    ctaRecruiter: "Recruiter profile",
    ctaClient: "Discuss a project",
    location: "Argentina",
    scrollHint: "Scroll to explore",
  },
  profile: {
    eyebrow: "Profile",
    title: "End-to-end digital product",
    body: [
      "I am a Full Stack Developer focused on scalable web and mobile solutions. I work with React, Next.js, React Native, Expo, NestJS, and TypeScript.",
      "I have built authentication, profiles, listings, applications, real-time chat with Socket.IO, and Firebase push notifications, plus Expo builds and App Store / Google Play releases.",
      "I also optimize cloud infrastructure and operating costs for realtime, storage, domains, and APIs.",
    ],
    highlights: [
      { label: "Web & Mobile", value: "Full-stack architecture" },
      { label: "Realtime", value: "Socket.IO · Push" },
      { label: "Cloud", value: "AWS · GCP · Firebase" },
      { label: "Mobile ops", value: "Expo · Stores" },
    ],
  },
  stack: {
    eyebrow: "Stack",
    title: "Tools I build with",
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
        items: ["NestJS", "Node.js", "REST APIs", "JWT", "Socket.IO"],
      },
      {
        title: "Cloud & DevOps",
        items: ["AWS", "GCP", "Firebase", "DynamoDB", "S3"],
      },
    ],
  },
  experience: {
    eyebrow: "Experience",
    title: "Verified work",
    items: [
      {
        org: "Job platform (Argentina)",
        role: "End-to-end web & mobile development",
        period: "Full-stack project",
        points: [
          "Designed and implemented a mobile and web platform for the Argentine job market, covering architecture, databases, and deployment.",
          "Built secure authentication, differentiated profiles, listings, applications, real-time Socket.IO chat, and Firebase push notifications.",
          "Configured the Expo mobile ecosystem, builds, policy review, and App Store / Google Play publishing.",
          "Optimized cloud infrastructure and service costs for realtime, storage, domains, and APIs.",
        ],
      },
      {
        org: "AID FOR AIDS Internacional",
        role: "Frontend",
        period: "Web interfaces",
        points: [
          "Designed and implemented interfaces with HTML5, CSS3, and JavaScript.",
          "Used React and Next.js to deliver high-quality dynamic experiences.",
        ],
      },
      {
        org: "CEPPA",
        role: "Full stack",
        period: "Web application",
        points: [
          "Web application with React frontend and Node backend for Argentina’s Centro de Psicoterapias con Psicodélicos.",
          "State with Redux Toolkit, Formik/Yup forms, JWT authentication, and AWS SDK storage (DynamoDB / S3) plus Cloudinary.",
        ],
      },
    ],
  },
  projects: {
    eyebrow: "Projects",
    title: "Featured selection",
    subtitle: "Public repositories and live demos from GitHub.",
    code: "Code",
    live: "Live",
    items: projects,
  },
  contact: {
    eyebrow: "Contact",
    title: "Let’s talk",
    body: "Open to full stack / mobile roles and digital product engagements.",
    emailLabel: "Email",
    email: "frannahuelosorio@gmail.com",
    linkedinLabel: "LinkedIn",
    githubLabel: "GitHub",
    ctaRecruiter: "I am a recruiter",
    ctaClient: "I have a project",
    mailtoRecruiter:
      "mailto:frannahuelosorio@gmail.com?subject=Job%20opportunity%20-%20Franco%20Osorio",
    mailtoClient:
      "mailto:frannahuelosorio@gmail.com?subject=Project%20inquiry%20-%20Franco%20Osorio",
  },
  footer: {
    rights: "Franco Osorio",
    note: "Bilingual portfolio · PWA",
  },
} as Dictionary;
