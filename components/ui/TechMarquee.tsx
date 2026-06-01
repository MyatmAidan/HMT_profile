import { skillMarquee } from "@/lib/data/skills";

export function TechMarquee() {
  const items = [...skillMarquee, ...skillMarquee];

  return (
    <div
      className="relative overflow-hidden border-y py-4"
      style={{
        borderColor: "var(--border)",
        background: "var(--card)",
      }}
    >
      <div className="marquee-track flex w-max gap-8">
        {items.map((skill, index) => (
          <span
            key={`${skill}-${index}`}
            className="shrink-0 text-sm font-medium uppercase tracking-widest text-theme-muted"
          >
            {skill}
            <span className="mx-4 text-theme-accent opacity-60">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
