import { notFound } from "next/navigation";
import { getDictionary } from "@/content";
import { isLocale, type Locale } from "@/lib/i18n";
import { Hero } from "@/components/portfolio/Hero";
import { Profile } from "@/components/portfolio/Profile";
import { Stack } from "@/components/portfolio/Stack";
import { Experience } from "@/components/portfolio/Experience";
import { Education } from "@/components/portfolio/Education";
import { Projects } from "@/components/portfolio/Projects";
import { Contact } from "@/components/portfolio/Contact";
import { ScrollFrames } from "@/components/portfolio/ScrollFrames";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function LocalePage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);

  return (
    <>
      <Hero dict={dict} />
      <ScrollFrames hint={dict.hero.scrollHint} />
      <Profile dict={dict} />
      <Stack dict={dict} />
      <Experience dict={dict} />
      <Education dict={dict} />
      <Projects locale={locale} dict={dict} />
      <Contact dict={dict} />
    </>
  );
}
