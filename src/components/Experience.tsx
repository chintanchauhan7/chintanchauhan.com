import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { experience, education } from "@/data/resume";

export default function Experience() {
  return (
    <Section id="experience" index="03" title="experience">
      <div className="relative border-l border-border pl-8 space-y-12">
        {experience.map((job, i) => {
          const isCurrent = job.period.toLowerCase().includes("present");
          return (
            <Reveal key={`${job.company}-${job.role}`} delayMs={i * 100}>
              <div className="relative">
                <span
                  className={`absolute -left-[2.30rem] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-background ${
                    isCurrent ? "animate-pulse" : ""
                  }`}
                />
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <h3 className="text-lg font-semibold text-foreground">
                    {job.role} <span className="text-muted font-normal">· {job.company}</span>
                  </h3>
                  <span className="font-mono text-xs text-accent shrink-0">{job.period}</span>
                </div>
                <p className="font-mono text-xs text-muted mt-1">{job.location}</p>
                <ul className="mt-4 space-y-2">
                  {job.bullets.map((bullet, j) => (
                    <li key={j} className="flex gap-3 text-sm text-muted leading-relaxed">
                      <span className="text-accent shrink-0">▸</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>

      <div className="mt-16">
        <h3 className="font-mono text-xs text-accent uppercase tracking-wide mb-5">
          Education
        </h3>
        <div className="grid gap-4 sm:grid-cols-3">
          {education.map((ed, i) => (
            <Reveal key={ed.school} delayMs={i * 80}>
              <div className="rounded-lg border border-border bg-surface p-5 h-full transition-colors hover:border-accent-dim">
                <p className="text-sm font-medium text-foreground leading-snug">{ed.school}</p>
                <p className="text-sm text-accent-2 mt-2">{ed.degree}</p>
                <p className="font-mono text-xs text-muted mt-2">{ed.period}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
