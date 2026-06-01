"use client";

import { useEffect } from "react";
import type { SectionId } from "@/lib/data/navigation";

type SectionRedirectProps = {
  section: SectionId;
};

export function SectionRedirect({ section }: SectionRedirectProps) {
  useEffect(() => {
    window.location.replace(`/#${section}`);
  }, [section]);

  return (
    <p className="px-5 py-24 text-center text-theme-muted">
      Redirecting…
    </p>
  );
}
