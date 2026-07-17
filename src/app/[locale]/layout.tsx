import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { ThemeProvider } from "@/lib/theme";
import { getDictionary } from "@/content";
import { isLocale, locales, type Locale } from "@/lib/i18n";
import { SiteHeader } from "@/components/portfolio/SiteHeader";
import { SiteFooter } from "@/components/portfolio/SiteFooter";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const siteUrl = "https://franco-osorio.vercel.app";

  return {
    metadataBase: new URL(siteUrl),
    title: dict.meta.title,
    description: dict.meta.description,
    applicationName: "Franco Osorio",
    authors: [{ name: "Franco Osorio", url: "https://github.com/FNahuelO" }],
    creator: "Franco Osorio",
    alternates: {
      canonical: `/${locale}`,
      languages: {
        es: "/es",
        en: "/en",
      },
    },
    openGraph: {
      type: "website",
      locale: dict.meta.ogLocale,
      alternateLocale: locale === "es" ? ["en_US"] : ["es_AR"],
      url: `/${locale}`,
      title: dict.meta.title,
      description: dict.meta.description,
      siteName: "Franco Osorio",
      images: [
        {
          url: "/og/og.svg",
          width: 1200,
          height: 630,
          alt: "Franco Osorio",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
      images: ["/og/og.svg"],
    },
    appleWebApp: {
      capable: true,
      title: "Franco Osorio",
      statusBarStyle: "black-translucent",
    },
    icons: {
      icon: [{ url: "/icons/icon.svg", type: "image/svg+xml" }],
      apple: [{ url: "/icons/icon-192.png" }],
    },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#eef1f5" },
    { media: "(prefers-color-scheme: dark)", color: "#070b14" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);

  return (
    <ThemeProvider>
      <div lang={locale} className="min-h-dvh">
        <a href="#contenido" className="skip-link focus-ring">
          {dict.nav.skip}
        </a>
        <SiteHeader locale={locale} dict={dict} />
        <main id="contenido">{children}</main>
        <SiteFooter dict={dict} />
      </div>
    </ThemeProvider>
  );
}
