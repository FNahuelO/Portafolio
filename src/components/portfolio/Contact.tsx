import {
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
} from "@phosphor-icons/react/dist/ssr";
import type { Dictionary } from "@/content";
import { Reveal } from "./Reveal";

type Props = {
  dict: Dictionary;
};

export function Contact({ dict }: Props) {
  return (
    <section id="contacto" className="section">
      <div className="container-page grid gap-8 lg:grid-cols-[1fr_0.9fr]">
        <Reveal>
          <p className="eyebrow mb-3">{dict.contact.eyebrow}</p>
          <h2 className="display mb-4 !text-[clamp(2rem,4vw,3.2rem)]">
            {dict.contact.title}
          </h2>
          <p className="lead mb-8">{dict.contact.body}</p>
          <div className="flex flex-wrap gap-3">
            <a
              href={dict.contact.mailtoRecruiter}
              className="focus-ring btn btn-primary"
            >
              {dict.contact.ctaRecruiter}
            </a>
            <a
              href={dict.contact.mailtoClient}
              className="focus-ring btn btn-secondary"
            >
              {dict.contact.ctaClient}
            </a>
          </div>
        </Reveal>

        <Reveal>
          <div className="surface grid gap-4 p-6">
            <a
              href={`mailto:${dict.contact.email}`}
              className="focus-ring flex items-center gap-3 rounded-xl p-3 hover:bg-accent-soft"
            >
              <EnvelopeSimple size={22} weight="bold" aria-hidden />
              <span>
                <span className="block font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                  {dict.contact.emailLabel}
                </span>
                <span className="font-medium">{dict.contact.email}</span>
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/franco-osorio"
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring flex items-center gap-3 rounded-xl p-3 hover:bg-accent-soft"
            >
              <LinkedinLogo size={22} weight="bold" aria-hidden />
              <span>
                <span className="block font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                  {dict.contact.linkedinLabel}
                </span>
                <span className="font-medium">linkedin.com/in/franco-osorio</span>
              </span>
            </a>
            <a
              href="https://github.com/FNahuelO"
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring flex items-center gap-3 rounded-xl p-3 hover:bg-accent-soft"
            >
              <GithubLogo size={22} weight="bold" aria-hidden />
              <span>
                <span className="block font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                  {dict.contact.githubLabel}
                </span>
                <span className="font-medium">github.com/FNahuelO</span>
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
