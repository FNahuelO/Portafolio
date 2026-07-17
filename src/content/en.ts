import { projects } from "./projects";
import type { Dictionary } from "./es";

export const en: Dictionary = {
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
    education: "Education",
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
      "I build end-to-end web and mobile products with React Native, Expo, NestJS, TypeScript, and Cloud (AWS / GCP). Open to remote Full Stack or Frontend roles.",
    ctaPrimary: "View projects",
    ctaSecondary: "Contact",
    ctaRecruiter: "Recruiter profile",
    ctaClient: "Discuss a project",
    location: "Ezeiza, Buenos Aires",
    scrollHint: "Scroll to explore",
  },
  profile: {
    eyebrow: "Profile",
    title: "End-to-end digital product",
    body: [
      "I am a Full Stack Developer focused on scalable web and mobile solutions. I work with React, Next.js, React Native, Expo, NestJS, and TypeScript.",
      "At Cobro Inmediato I contribute as a full stack developer on fintech solutions, aligning product and technology while improving performance, infrastructure, and documentation.",
      "I have also built freelance platforms such as Trabajo Ya (web & mobile) and CEPPA, covering architecture, authentication, realtime, cloud, and store releases.",
    ],
    highlights: [
      { label: "Current", value: "Full stack at Cobro Inmediato" },
      { label: "Web & Mobile", value: "Full-stack architecture" },
      { label: "Realtime", value: "Socket.IO · Push" },
      { label: "Cloud", value: "AWS · GCP · Firebase" },
    ],
  },
  stack: {
    eyebrow: "Stack",
    title: "Tools I build with",
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
        title: "Data",
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
    eyebrow: "Experience",
    title: "Work experience",
    items: [
      {
        org: "Cobro Inmediato",
        role: "Full stack developer",
        period: "2023 — Present",
        points: [
          "Close collaboration with the product team to turn business requirements into technical solutions aligned with commercial and technical goals.",
          "Performance and scalability analysis, proposing infrastructure improvements to increase efficiency and application resilience.",
          "Creation and updates of technical documentation: architecture diagrams, user manuals, and development guides.",
          "Continuous improvement mindset: process automation, shorter delivery cycles, and higher team efficiency.",
        ],
      },
      {
        org: "AID FOR AIDS Internacional",
        role: "Frontend developer",
        period: "2022 — 2024",
        points: [
          "Designed and implemented interfaces with HTML5, CSS3, JavaScript, React, and Next.js.",
          "Worked with graphic and UX/UI designers to turn prototypes into interactive solutions.",
          "Optimized performance and load times with minification, compression, and caching.",
          "Implemented responsive and adaptive design across devices and screen sizes.",
        ],
      },
    ],
  },
  education: {
    eyebrow: "Education",
    title: "Academic background",
    items: [
      {
        org: "Henry",
        role: "Full Stack Developer",
        period: "2022",
      },
      {
        org: "Instituto Luciano H. Valette",
        role: "High school diploma",
        period: "2015",
      },
    ],
  },
  projects: {
    eyebrow: "Projects",
    title: "Featured selection",
    subtitle: "Freelance work and digital products with public demos.",
    live: "Live",
    items: projects,
  },
  contact: {
    eyebrow: "Contact",
    title: "Let’s talk",
    body: "Looking for remote Full Stack (or Frontend) opportunities. Also available for digital product engagements.",
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
};
