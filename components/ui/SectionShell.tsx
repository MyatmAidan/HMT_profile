import { cn } from "@/lib/utils/cn";
import type { ReactNode } from "react";

type SectionShellProps = {
  id: string;
  children: ReactNode;
  className?: string;
  alt?: boolean;
  glow?: "left" | "right" | "center";
};

export function SectionShell({
  id,
  children,
  className,
  alt = false,
  glow,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn(
        "section-shell relative overflow-hidden py-24 sm:py-28",
        alt && "section-shell-alt",
        className,
      )}
    >
      {glow ? (
        <div
          aria-hidden
          className={cn(
            "section-shell-glow",
            glow === "left" && "section-shell-glow-left",
            glow === "right" && "section-shell-glow-right",
            glow === "center" && "section-shell-glow-center",
          )}
        />
      ) : null}
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">{children}</div>
    </section>
  );
}
