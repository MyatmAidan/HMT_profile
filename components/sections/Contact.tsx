"use client";

import { FormEvent, useState } from "react";
import { profile } from "@/lib/data/profile";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";

type FormState = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
          website: data.get("website"),
        }),
      });

      const result = (await response.json()) as {
        ok?: boolean;
        error?: string;
      };

      if (!response.ok || !result.ok) {
        throw new Error(result.error ?? "Something went wrong.");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Unable to send message.",
      );
    }
  }

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Let's build something"
            description="Have a project or role in mind? Send a message — I typically reply within 24 hours."
          />
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal delay={80}>
            <GlassCard className="h-full space-y-6">
              <div>
                <p className="text-sm text-theme-secondary">Email</p>
                <a
                  href={`mailto:${profile.email}`}
                  className="mt-1 block text-lg text-foreground transition-colors hover:text-theme-accent"
                >
                  {profile.email}
                </a>
              </div>
              <div>
                <p className="text-sm text-theme-secondary">Phone</p>
                <a
                  href={`tel:${profile.phone.replace(/\s/g, "")}`}
                  className="mt-1 block text-lg text-foreground transition-colors hover:text-theme-accent"
                >
                  {profile.phone}
                </a>
              </div>
              <div>
                <p className="text-sm text-theme-secondary">GitHub</p>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block text-lg text-theme-accent transition-colors hover:opacity-80"
                >
                  @MyatmAidan
                </a>
              </div>
              <Button href={profile.cvPath} variant="secondary" download>
                Download CV (PDF)
              </Button>
            </GlassCard>
          </Reveal>

          <Reveal delay={160}>
            <GlassCard glow>
              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden
                />

                <div>
                  <label htmlFor="name" className="mb-2 block text-sm text-theme-muted">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    minLength={2}
                    maxLength={80}
                    className="input-field"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm text-theme-muted">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    maxLength={254}
                    className="input-field"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm text-theme-muted"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    minLength={10}
                    maxLength={2000}
                    rows={5}
                    className="input-field resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {status === "error" ? (
                  <p className="text-sm text-red-400" role="alert">
                    {errorMessage}
                  </p>
                ) : null}

                {status === "success" ? (
                  <p className="text-sm text-theme-accent" role="status">
                    Thanks! Your message was received. I&apos;ll get back to you soon.
                  </p>
                ) : null}

                <Button
                  type="submit"
                  variant="primary"
                  className="w-full"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? "Sending..." : "Send message"}
                </Button>
              </form>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
