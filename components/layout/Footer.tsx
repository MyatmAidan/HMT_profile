import { profile } from "@/lib/data/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t py-10" style={{ borderColor: "var(--border)" }}>
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 text-center sm:flex-row sm:px-8 sm:text-left">
        <p className="text-sm text-theme-muted">
          © {year} {profile.name}. Built with Next.js.
        </p>
        <p className="text-sm text-theme-muted">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-theme-accent transition-colors hover:opacity-80"
          >
            GitHub
          </a>
          <span className="mx-3 opacity-40">|</span>
          <a
            href={`mailto:${profile.email}`}
            className="transition-colors hover:text-foreground"
          >
            {profile.email}
          </a>
        </p>
      </div>
    </footer>
  );
}
