import Image from "next/image";
import { profile } from "@/lib/data/profile";
import { cn } from "@/lib/utils/cn";

type ProfilePhotoProps = {
  size?: "hero" | "about";
  className?: string;
  priority?: boolean;
};

const sizeMap = {
  hero: {
    wrapper: "w-full max-w-sm shrink-0",
    aspect: "aspect-[4/5]",
    sizes: "(max-width: 768px) 100vw, 384px",
  },
  about: {
    wrapper: "w-full max-w-[260px] shrink-0",
    aspect: "aspect-square",
    sizes: "(max-width: 768px) 80vw, 260px",
  },
};

export function ProfilePhoto({
  size = "hero",
  className,
  priority = false,
}: ProfilePhotoProps) {
  const config = sizeMap[size];

  return (
    <div className={cn("photo-frame group", config.wrapper, className)}>
      <div
        aria-hidden
        className="absolute -inset-3 rounded-[1.35rem] opacity-60 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(135deg, var(--highlight-glow), var(--highlight-glow-secondary))",
        }}
      />
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl p-[2px]",
          config.aspect,
        )}
        style={{
          background:
            "linear-gradient(135deg, var(--highlight), var(--highlight-secondary))",
        }}
      >
        <div
          className="relative size-full overflow-hidden rounded-[14px]"
          style={{ background: "var(--background)" }}
        >
          <Image
            src={profile.image}
            alt={`${profile.name} — ${profile.title}`}
            fill
            priority={priority}
            loading={priority ? "eager" : "lazy"}
            sizes={config.sizes}
            className="object-cover object-[center_12%] transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      </div>
    </div>
  );
}
