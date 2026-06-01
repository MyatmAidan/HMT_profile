import { profile } from "@/lib/data/profile";
import { Button } from "@/components/ui/Button";
import { ProfilePhoto } from "@/components/ui/ProfilePhoto";

export function Hero() {
  const nameParts = profile.name.split(" ");

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-center pt-24"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div className="order-2 lg:order-1">
          <p
            className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-widest"
            style={{
              border: "1px solid var(--badge-border)",
              background: "var(--badge-bg)",
              color: "var(--badge-text)",
            }}
          >
            <span
              className="h-2 w-2 animate-pulse rounded-full"
              style={{ background: "var(--accent)" }}
            />
            Available for opportunities
          </p>

          <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="block text-theme-muted">Hi, I&apos;m</span>
            <span
              className="mt-2 block bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, var(--gradient-from), var(--gradient-via), var(--gradient-to))",
              }}
            >
              {nameParts[0]} {nameParts.slice(1).join(" ")}
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg sm:text-xl">
            <span className="font-semibold text-theme-accent">{profile.title}</span>
            <span className="text-theme-muted"> — {profile.tagline}</span>
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/#contact" variant="primary">
              Let&apos;s work together
            </Button>
            <Button href={profile.github} variant="secondary" external>
              View GitHub
            </Button>
            <Button href={profile.cvPath} variant="secondary" download>
              Download CV
            </Button>
          </div>

          <dl
            className="mt-14 grid grid-cols-2 gap-6 border-t pt-10 sm:grid-cols-4"
            style={{ borderColor: "var(--border)" }}
          >
            {[
              { label: "Experience", value: "1+ yr" },
              { label: "Stack", value: "Full-stack" },
              { label: "Focus", value: "Laravel & Next" },
              { label: "Based in", value: "SG / MM" },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="text-xs uppercase tracking-wider text-theme-secondary">
                  {stat.label}
                </dt>
                <dd className="mt-1 font-display text-xl font-semibold text-foreground">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
          <ProfilePhoto size="hero" priority className="mx-auto lg:mx-0" />
        </div>
      </div>
    </section>
  );
}
