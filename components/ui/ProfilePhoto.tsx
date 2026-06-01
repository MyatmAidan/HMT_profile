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
    wrapper: "w-full max-w-md shrink-0",
    aspect: "aspect-[4/5]",
    sizes: "(max-width: 768px) 100vw, 420px",
  },
  about: {
    wrapper: "w-full max-w-[280px] shrink-0",
    aspect: "aspect-square",
    sizes: "(max-width: 768px) 80vw, 280px",
  },
};

export function ProfilePhoto({
  size = "hero",
  className,
  priority = false,
}: ProfilePhotoProps) {
  const config = sizeMap[size];

  return (
    <div
      className={cn(config.wrapper, className)}
      style={{
        boxShadow: `0 24px 48px -12px var(--photo-shadow)`,
      }}
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-3xl p-[2px]",
          config.aspect,
        )}
        style={{
          background:
            "linear-gradient(135deg, var(--accent), var(--accent-secondary))",
        }}
      >
        <div
          className="relative size-full overflow-hidden rounded-[22px]"
          style={{ background: "var(--background)" }}
        >
          <Image
            src={profile.image}
            alt={`${profile.name} — ${profile.title}`}
            fill
            priority={priority}
            loading={priority ? "eager" : "lazy"}
            sizes={config.sizes}
            className="object-cover object-[center_12%]"
          />
        </div>
      </div>
    </div>
  );
}
