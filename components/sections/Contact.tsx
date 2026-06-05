"use client";

import { FormEvent, useState } from "react";
import { profile } from "@/lib/data/profile";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";
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
    <SectionShell id="contact" glow="center">
      <Reveal>
        <SectionHeading
          eyebrow="Contact"
          title="Let's work"
          highlight="together"
          align="center"
          description="Open to freelance work and full-time opportunities. I'd love to hear from you."
          className="mx-auto"
        />
      </Reveal>

      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal delay={80}>
          <GlassCard className="card-shine h-full">
            <h3 className="text-xl font-bold text-foreground">Get in touch</h3>
            <p className="mt-3 text-sm leading-relaxed text-theme-muted">
              Have a project, role, or collaboration in mind? Send a message —
              I usually reply within a day.
            </p>
            <div className="mt-8 space-y-5">
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
            </div>
            <div className="mt-8">
              <Button href={profile.cvPath} variant="secondary" download>
                Download CV
              </Button>
            </div>
          </GlassCard>
        </Reveal>

        <Reveal delay={140}>
          <GlassCard glow className="card-shine">
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
                <label htmlFor="name" className="contact-label">
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  minLength={2}
                  maxLength={80}
                  className="input-field mt-2"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="contact-label">
                  Your Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  maxLength={254}
                  className="input-field mt-2"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="contact-label">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  minLength={10}
                  maxLength={2000}
                  rows={5}
                  className="input-field mt-2 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              {status === "error" ? (
                <p className="text-sm text-red-500" role="alert">
                  {errorMessage}
                </p>
              ) : null}
              {status === "success" ? (
                <p className="text-sm font-medium text-theme-accent" role="status">
                  Message sent. I&apos;ll reply soon.
                </p>
              ) : null}
              <Button
                type="submit"
                variant="primary"
                className="w-full"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Sending..." : "Contact me"}
              </Button>
            </form>
          </GlassCard>
        </Reveal>
      </div>
    </SectionShell>
  );
}
