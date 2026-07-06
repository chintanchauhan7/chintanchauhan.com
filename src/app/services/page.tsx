import type { Metadata } from "next";
import ConsultingNav from "@/components/ConsultingNav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Testimonials from "@/components/Testimonials";
import { profile } from "@/data/resume";
import { consulting, serviceTiers } from "@/data/services";

export const metadata: Metadata = {
  title: "IT Security Consulting | Chintan Chauhan",
  description:
    "Fractional security advisory and IT infrastructure consulting for small and mid-sized organizations — assessments, compliance readiness, and vCISO-style guidance.",
};

export default function ServicesPage() {
  const mailtoHref = `mailto:${profile.email}?subject=${encodeURIComponent(
    "Security Consulting Inquiry"
  )}&body=${encodeURIComponent(
    "Hi Chintan,\n\nI'd like to talk about a security consulting engagement for my organization.\n\nA bit about us:\n- Organization type / industry:\n- Approximate team size:\n- What prompted this inquiry:\n\n"
  )}`;

  return (
    <>
      <ConsultingNav />
      <main className="flex-1 relative z-10">
        <section id="overview" className="scroll-mt-20 relative">
          <div className="mx-auto max-w-5xl px-6 pt-20 pb-16 sm:pt-28 sm:pb-20">
            <p className="font-mono text-accent text-sm mb-4">
              <span className="text-muted">$</span> cat services.md
            </p>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-glow max-w-3xl">
              {consulting.tagline}
            </h1>
            <p className="mt-6 max-w-2xl text-muted leading-relaxed">
              {consulting.pitch}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={mailtoHref}
                className="rounded-md bg-accent px-5 py-2.5 font-mono text-sm font-medium text-black hover:opacity-90 transition-opacity"
              >
                contact for consulting
              </a>
              <a
                href="#offerings"
                className="rounded-md border border-border px-5 py-2.5 font-mono text-sm text-foreground hover:border-accent hover:text-accent transition-colors"
              >
                view offerings
              </a>
            </div>
          </div>
        </section>

        <section id="offerings" className="scroll-mt-20 py-16 sm:py-20 border-t border-border">
          <div className="mx-auto max-w-5xl px-6">
            <Reveal>
              <h2 className="font-mono text-sm text-accent mb-8 flex items-center gap-3">
                <span className="text-muted">01</span>
                <span className="text-foreground text-lg sm:text-xl font-semibold">
                  offerings
                </span>
                <span className="h-px flex-1 bg-border" />
              </h2>
            </Reveal>
            <div className="grid gap-5 sm:grid-cols-2">
              {serviceTiers.map((tier, i) => (
                <Reveal key={tier.title} delayMs={i * 70}>
                  <div className="h-full rounded-lg border border-border bg-surface p-6 transition-all duration-300 hover:border-accent-dim hover:-translate-y-1 hover:shadow-[0_0_24px_rgba(57,255,156,0.12)]">
                    <h3 className="font-semibold text-lg text-foreground">
                      {tier.title}
                    </h3>
                    <p className="mt-1 font-mono text-xs text-accent-2">
                      {tier.tagline}
                    </p>
                    <p className="mt-3 text-sm text-muted leading-relaxed">
                      {tier.description}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {tier.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-2 text-sm text-muted leading-relaxed">
                          <span className="text-accent shrink-0">▸</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <Testimonials />

        <section id="contact" className="scroll-mt-20 py-16 sm:py-20 border-t border-border">
          <div className="mx-auto max-w-5xl px-6">
            <Reveal>
              <h2 className="font-mono text-sm text-accent mb-8 flex items-center gap-3">
                <span className="text-muted">03</span>
                <span className="text-foreground text-lg sm:text-xl font-semibold">
                  contact
                </span>
                <span className="h-px flex-1 bg-border" />
              </h2>
              <div className="rounded-lg border border-border bg-surface p-8 sm:p-10 text-center">
                <p className="font-mono text-accent text-sm mb-3">$ echo $NEXT_STEP</p>
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                  Let&apos;s talk about your security posture
                </h3>
                <p className="mt-3 text-muted max-w-lg mx-auto">
                  Reach out with a bit about your organization and what prompted the inquiry —
                  I&apos;ll follow up to set up a call.
                </p>
                <div className="mt-8 flex justify-center">
                  <a
                    href={mailtoHref}
                    className="rounded-md bg-accent px-6 py-3 font-mono text-sm font-medium text-black hover:opacity-90 transition-opacity"
                  >
                    {profile.email}
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
