import { skillMarquee } from "@/lib/data/skills";
import { SkillIcon } from "@/components/ui/SkillIcon";

export function TechMarquee() {
  const items = [...skillMarquee, ...skillMarquee];

  return (
    <div className="marquee-strip relative overflow-hidden py-4">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20"
        style={{
          background: "linear-gradient(90deg, var(--background), transparent)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20"
        style={{
          background: "linear-gradient(270deg, var(--background), transparent)",
        }}
      />
      <div className="marquee-track relative z-10 flex w-max items-center gap-6">
        {items.map((skill, index) => (
          <span
            key={`${skill.name}-${index}`}
            className="inline-flex shrink-0 items-center gap-6"
          >
            <span className="marquee-pill inline-flex items-center gap-2.5 rounded-lg px-3.5 py-2 text-sm font-medium text-foreground">
              <SkillIcon icon={skill.icon} name={skill.name} size={20} />
              {skill.name}
            </span>
            <span className="text-theme-accent opacity-30">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
