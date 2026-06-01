import Link from "next/link";
import { cn } from "@/lib/utils/cn";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  external?: boolean;
  download?: boolean;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  external,
  download,
  type = "button",
  disabled,
  onClick,
}: ButtonProps) {
  const styles = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] disabled:cursor-not-allowed disabled:opacity-50",
    variant === "primary" &&
      "bg-gradient-to-r from-cyan-500 to-violet-500 text-white shadow-lg shadow-cyan-500/20 hover:brightness-110",
    variant === "secondary" && "btn-secondary border backdrop-blur-md",
    variant === "ghost" && "text-theme-muted hover:text-theme-accent",
    className,
  );

  if (href) {
    const isExternal = external || href.startsWith("http");
    if (isExternal) {
      return (
        <a
          href={href}
          className={styles}
          target="_blank"
          rel="noopener noreferrer"
          download={download}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={styles} download={download}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={styles}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
