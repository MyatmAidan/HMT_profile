import Image from "next/image";
import { profile } from "@/lib/data/profile";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";
import { GlassCard } from "@/components/ui/GlassCard";

const highlights = [
  "Laravel & Next.js development",
  "REST APIs & database design",
  "Freelance client delivery",
  "Responsive, modern UI",
];

export function About() {
  return (
    <SectionShell id="about">
      <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <Reveal direction="left">
          <div className="about-photo-wrap mx-auto w-full max-w-sm lg:mx-0">
            <div className="about-photo-glow" aria-hidden />
            <div className="about-photo-frame group overflow-hidden">
              <Image
                src={profile.image}
                alt={`${profile.name} — about`}
                fill
                sizes="(max-width: 768px) 90vw, 380px"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.05]"
              />
            </div>
            <div className="about-photo-badge glass-surface">
              {profile.location}
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal delay={60}>
            <SectionHeading
              eyebrow="About Me"
              title="Who I"
              highlight="am?"
              description="A developer focused on shipping clean, reliable web products."
              className="mb-8"
            />
          </Reveal>

          <Reveal delay={100}>
            <GlassCard glow className="card-shine mb-5">
              <p className="text-base leading-relaxed text-theme-muted sm:text-lg">
                {profile.about}
              </p>
            </GlassCard>
          </Reveal>

          <Reveal delay={140} direction="right">
            <div className="grid gap-3 mb-5 sm:grid-cols-2">
              {highlights.map((item) => (
                <div key={item} className="highlight-chip glass-surface">
                  <span className="highlight-dot" />
                  {item}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={180}>
            <GlassCard className="card-shine grid gap-5 sm:grid-cols-2">
              <div>
                <p className="contact-label">Email</p>
                <a href={`mailto:${profile.email}`} className="contact-value">
                  {profile.email}
                </a>
              </div>
              <div>
                <p className="contact-label">Phone</p>
                <a
                  href={`tel:${profile.phone.replace(/\s/g, "")}`}
                  className="contact-value"
                >
                  {profile.phone}
                </a>
              </div>
              <div>
                <p className="contact-label">GitHub</p>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-value"
                >
                  @MyatmAidan
                </a>
              </div>
              <div>
                <p className="contact-label">Location</p>
                <p className="contact-value">{profile.location}</p>
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </SectionShell>
  );
}
