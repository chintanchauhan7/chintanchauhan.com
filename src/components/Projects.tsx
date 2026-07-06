import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { projects } from "@/data/resume";

export default function Projects() {
  return (
    <Section id="projects" index="04" title="projects & labs">
      <p className="text-sm text-muted mb-8 max-w-2xl">
        A sample of home-lab and personal security projects. Swap these out for your
        real write-ups, screenshots, and repo links as you build them out.
      </p>
      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.title} delayMs={i * 80}>
            <div className="group rounded-lg border border-border bg-surface p-5 transition-all duration-300 hover:border-accent-dim hover:-translate-y-1 hover:shadow-[0_0_24px_rgba(57,255,156,0.12)]">
              <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono rounded border border-border bg-surface-2 px-2 py-0.5 text-[11px] text-accent-2 transition-colors group-hover:border-accent-dim"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
