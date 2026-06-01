import { profile } from "@/lib/data/profile";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { ProfilePhoto } from "@/components/ui/ProfilePhoto";

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="Crafting reliable web experiences"
            description="From internship to freelance — I ship production-ready apps with clean architecture."
          />
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-[auto_1fr_0.85fr] lg:items-start">
          <Reveal delay={50} className="flex justify-center lg:justify-start">
            <ProfilePhoto size="about" />
          </Reveal>

          <Reveal delay={100}>
            <GlassCard glow className="h-full">
              <p className="text-lg leading-relaxed text-theme-muted">
                {profile.about}
              </p>
            </GlassCard>
          </Reveal>

          <Reveal delay={200}>
            <GlassCard className="flex h-full flex-col justify-between gap-6">
              <div>
                <p className="text-sm uppercase tracking-wider text-theme-secondary">
                  Contact
                </p>
                <a
                  href={`mailto:${profile.email}`}
                  className="mt-2 block text-lg font-medium text-foreground transition-colors hover:text-theme-accent"
                >
                  {profile.email}
                </a>
                <a
                  href={`tel:${profile.phone.replace(/\s/g, "")}`}
                  className="mt-2 block text-theme-muted transition-colors hover:text-theme-accent"
                >
                  {profile.phone}
                </a>
              </div>
              <div>
                <p className="text-sm uppercase tracking-wider text-theme-secondary">
                  Location
                </p>
                <p className="mt-2 text-lg text-foreground">{profile.location}</p>
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
