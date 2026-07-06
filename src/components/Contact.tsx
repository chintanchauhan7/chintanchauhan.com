import Section from "@/components/Section";
import { profile } from "@/data/resume";

const links = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "LinkedIn", value: "linkedin.com/in/chintanc", href: profile.linkedin },
  { label: "GitHub", value: "github.com/chintanchauhan7", href: profile.github },
];

export default function Contact() {
  return (
    <Section id="contact" index="05" title="contact">
      <div className="rounded-lg border border-border bg-surface p-8 sm:p-10 text-center">
        <p className="font-mono text-accent text-sm mb-3">$ echo $STATUS</p>
        <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
          Open to new opportunities
        </h3>
        <p className="mt-3 text-muted max-w-lg mx-auto">
          Based in {profile.location}. Reach out directly, or find me on the platforms below.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="w-full sm:w-auto rounded-md border border-border px-5 py-2.5 font-mono text-sm text-foreground hover:border-accent hover:text-accent transition-colors"
            >
              {link.label} <span className="text-muted">→ {link.value}</span>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
