import type { ReactNode } from "react";
import { Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning className="dark">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('fo-theme');if(t==='light'||t==='dark'){document.documentElement.classList.toggle('dark',t==='dark');document.documentElement.dataset.theme=t;document.documentElement.style.colorScheme=t;}else if(window.matchMedia('(prefers-color-scheme: light)').matches){document.documentElement.classList.remove('dark');document.documentElement.dataset.theme='light';document.documentElement.style.colorScheme='light';}}catch(e){}})();`,
          }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${ibmPlexMono.variable} min-h-dvh antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
