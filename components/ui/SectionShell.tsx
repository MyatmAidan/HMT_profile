import { cn } from "@/lib/utils/cn";
import type { ReactNode } from "react";

type SectionShellProps = {
  id: string;
  children: ReactNode;
  className?: string;
};

export function SectionShell({ id, children, className }: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn(
        "section-shell relative overflow-hidden py-24 sm:py-28",
        className,
      )}
    >
      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">{children}</div>
    </section>
  );
}
