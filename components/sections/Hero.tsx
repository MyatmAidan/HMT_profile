import { profile } from "@/lib/data/profile";
import { Button } from "@/components/ui/Button";
import { HeroPhotoCollage } from "@/components/ui/HeroPhotoCollage";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] flex-col justify-center overflow-hidden pt-28 pb-20"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <div>
          <p
            className="animate-fade-up mb-6 inline-flex items-center gap-2.5 rounded-full border px-3.5 py-1.5 text-xs font-medium glass-surface"
            style={{ color: "var(--muted-foreground)" }}
          >
            <span
              className="status-dot h-2 w-2 rounded-full"
              style={{ background: "var(--highlight)" }}
            />
            Available for work
          </p>

          <p className="animate-fade-up delay-100 mb-3 text-sm font-medium text-theme-secondary">
            {profile.location}
          </p>

          <h1 className="animate-fade-up delay-200 font-display text-[2.75rem] font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-[4.25rem]">
            <span className="text-gradient">{profile.name}</span>
          </h1>

          <p className="animate-fade-up delay-300 mt-4 text-xl font-medium text-foreground sm:text-2xl">
            {profile.title}
          </p>

          <p className="animate-fade-up delay-400 mt-6 max-w-lg text-base leading-relaxed text-theme-muted sm:text-lg">
            {profile.tagline}. I build scalable web applications with Laravel,
            Next.js, and clean, maintainable code.
          </p>

          <div className="animate-fade-up delay-500 mt-10 flex flex-wrap gap-3">
            <Button href="/#contact" variant="primary">
              Get in touch
            </Button>
            <Button href={profile.cvPath} variant="secondary" download>
              Download CV
            </Button>
          </div>

          <div
            className="animate-fade-up delay-500 mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t pt-8"
            style={{ borderColor: "var(--border)" }}
          >
            {[
              { label: "Experience", value: "1+ years" },
              { label: "Focus", value: "Full-stack" },
              { label: "Stack", value: "Laravel · Next.js" },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-xs text-theme-secondary">{item.label}</p>
                <p className="mt-1 text-sm font-semibold text-foreground">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="animate-fade-up delay-300 flex justify-center lg:justify-end">
          <HeroPhotoCollage />
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1.5 text-theme-secondary transition-colors hover:text-theme-accent"
        aria-label="Scroll to about"
      >
        <span className="text-[10px] uppercase tracking-[0.25em]">Scroll</span>
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="animate-bounce-subtle"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </a>
    </section>
  );
}
