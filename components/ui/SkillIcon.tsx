import { getSkillIcon } from "@/lib/data/skill-icon-data";
import { cn } from "@/lib/utils/cn";

type SkillIconProps = {
  icon: string;
  name: string;
  size?: number;
  className?: string;
};

export function SkillIcon({
  icon,
  name,
  size = 22,
  className,
}: SkillIconProps) {
  const data = getSkillIcon(icon);

  if (!data) {
    return (
      <span
        className={cn(
          "inline-flex shrink-0 items-center justify-center rounded-md text-[10px] font-bold uppercase",
          className,
        )}
        style={{
          width: size,
          height: size,
          background: "var(--highlight-soft)",
          color: "var(--highlight)",
        }}
        aria-hidden
      >
        {name.slice(0, 2)}
      </span>
    );
  }

  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center",
        className,
      )}
      style={{ width: size, height: size }}
    >
      <svg
        role="img"
        viewBox="0 0 24 24"
        width={size}
        height={size}
        aria-hidden
        className={cn(data.darkInvert && "skill-icon-invert")}
      >
        <title>{data.title}</title>
        {data.paths.map((entry, index) => (
          <path
            key={`${icon}-${index}`}
            d={entry.d}
            fill={entry.fill ?? "currentColor"}
          />
        ))}
      </svg>
      <span className="sr-only">{name}</span>
    </span>
  );
}
