import { cn } from "@/lib/utils/cn";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <p className="section-eyebrow">{eyebrow}</p>
      <div className={cn("mb-4 flex", align === "center" && "justify-center")}>
        <span className="section-accent-line" />
      </div>
      <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {highlight ? (
          <>
            {title}{" "}
            <span className="text-gradient">{highlight}</span>
          </>
        ) : (
          title
        )}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-theme-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
