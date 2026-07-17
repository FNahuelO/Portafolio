import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Franco Osorio · Portfolio",
    short_name: "Franco Osorio",
    description:
      "Full Stack Developer & Mobile Engineer — React Native, Expo, NestJS, TypeScript, Cloud.",
    start_url: "/es",
    display: "standalone",
    background_color: "#070b14",
    theme_color: "#070b14",
    lang: "es",
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icons/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
