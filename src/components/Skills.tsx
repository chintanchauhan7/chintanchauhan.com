import Section from "@/components/Section";
import { skillGroups, certifications } from "@/data/resume";

export default function Skills() {
  return (
    <Section id="skills" index="02" title="skills & certifications">
      <div className="grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2 grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className="rounded-lg border border-border bg-surface p-5"
            >
              <h3 className="font-mono text-xs text-accent uppercase tracking-wide mb-3">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded border border-border bg-surface-2 px-2.5 py-1 text-xs text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-lg border border-border bg-surface p-5 h-fit">
          <h3 className="font-mono text-xs text-accent uppercase tracking-wide mb-4">
            Certifications
          </h3>
          <ul className="space-y-3">
            {certifications.map((cert) => (
              <li key={cert} className="flex items-start gap-2 text-sm text-foreground">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {cert}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
