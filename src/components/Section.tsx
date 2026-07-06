import Reveal from "@/components/Reveal";

export default function Section({
  id,
  index,
  title,
  children,
}: {
  id: string;
  index: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 py-16 sm:py-20 border-t border-border">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <h2 className="font-mono text-sm text-accent mb-8 flex items-center gap-3">
            <span className="text-muted">{index}</span>
            <span className="text-foreground text-lg sm:text-xl font-semibold">
              {title}
            </span>
            <span className="h-px flex-1 bg-border" />
          </h2>
          {children}
        </Reveal>
      </div>
    </section>
  );
}
