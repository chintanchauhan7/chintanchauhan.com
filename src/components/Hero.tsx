import { profile } from "@/data/resume";
import TypedText from "@/components/TypedText";

export default function Hero() {
  return (
    <section id="top" className="scroll-mt-20 relative">
      <div className="mx-auto max-w-5xl px-6 pt-20 pb-24 sm:pt-28 sm:pb-32">
        <p className="font-mono text-accent text-sm mb-4">
          <span className="text-muted">$</span> whoami
        </p>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-glow">
          {profile.name}
        </h1>
        <p className="mt-4 font-mono text-lg sm:text-xl text-accent-2 min-h-[1.75rem]">
          <TypedText text={profile.title} />
        </p>
        <p className="mt-6 max-w-2xl text-muted leading-relaxed">
          {profile.summary}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="rounded-md bg-accent px-5 py-2.5 font-mono text-sm font-medium text-black hover:opacity-90 transition-opacity"
          >
            get in touch
          </a>
          <a
            href="/Chintan-Chauhan-Resume.pdf"
            download
            className="rounded-md border border-border px-5 py-2.5 font-mono text-sm text-foreground hover:border-accent hover:text-accent transition-colors"
          >
            download resume
          </a>
        </div>

        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-muted">
          <span>{profile.location}</span>
          <span className="text-border">|</span>
          <a href={`mailto:${profile.email}`} className="hover:text-accent transition-colors">
            {profile.email}
          </a>
          <span className="text-border">|</span>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
            github.com/chintanchauhan7
          </a>
          <span className="text-border">|</span>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
            linkedin.com/in/chintanc
          </a>
        </div>
      </div>
    </section>
  );
}
