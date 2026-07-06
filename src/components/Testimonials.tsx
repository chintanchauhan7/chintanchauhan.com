import Reveal from "@/components/Reveal";
import { profile } from "@/data/resume";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  const feedbackMailto = `mailto:${profile.email}?subject=${encodeURIComponent(
    "Client Feedback"
  )}&body=${encodeURIComponent(
    "Hi Chintan,\n\nHere's some feedback on our engagement:\n\nQuote:\nYour name & title:\nOrganization (or how you'd like it listed, e.g. \"a regional law firm\"):\nOK to publish this on your website? (yes/no):\n\n"
  )}`;

  return (
    <section id="testimonials" className="scroll-mt-20 py-16 sm:py-20 border-t border-border">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <h2 className="font-mono text-sm text-accent mb-8 flex items-center gap-3">
            <span className="text-muted">02</span>
            <span className="text-foreground text-lg sm:text-xl font-semibold">
              testimonials
            </span>
            <span className="h-px flex-1 bg-border" />
          </h2>

          {testimonials.length === 0 ? (
            <div className="rounded-lg border border-border bg-surface p-8 sm:p-10 text-center">
              <p className="font-mono text-accent text-sm mb-3">$ cat testimonials.md</p>
              <p className="text-muted max-w-lg mx-auto">
                No client testimonials yet — this section fills in as engagements wrap up.
              </p>
              <p className="mt-2 text-muted max-w-lg mx-auto">
                Worked with me?{" "}
                <a
                  href={feedbackMailto}
                  className="text-accent hover:underline"
                >
                  Share your feedback
                </a>{" "}
                and I&apos;ll ask permission before publishing anything.
              </p>
            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2">
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="rounded-lg border border-border bg-surface p-6 transition-colors hover:border-accent-dim"
                >
                  <p className="text-sm text-foreground leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <p className="mt-4 font-mono text-xs text-accent-2">
                    {t.name} · {t.role}
                  </p>
                  <p className="font-mono text-xs text-muted">{t.organization}</p>
                </div>
              ))}
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
