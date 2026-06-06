import Link from "next/link";
import { profile } from "@/lib/data/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="px-4 pb-6 pt-4 sm:px-6">
      <div className="site-footer glass-surface mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 rounded-2xl px-5 py-5 text-sm text-theme-muted sm:flex-row sm:px-6">
        <div>
          <p className="site-logo text-base">HMT<span>.</span></p>
          <p className="mt-1">© {year} {profile.name}</p>
        </div>
        <div className="flex items-center gap-6">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="footer-link">
            GitHub
          </a>
          <a href={`mailto:${profile.email}`} className="footer-link">
            Email
          </a>
          <Link href="/#contact" className="footer-link footer-link-cta">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
