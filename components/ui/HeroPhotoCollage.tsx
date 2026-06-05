"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { profile } from "@/lib/data/profile";
import { cn } from "@/lib/utils/cn";

const photos = profile.images ?? [profile.image];

export function HeroPhotoCollage() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (photos.length < 2) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % photos.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="hero-collage mx-auto w-full max-w-md lg:mx-0 lg:max-w-lg">
      <div className="hero-collage-glow" aria-hidden />

      <div className="hero-collage-stack">
        {photos.map((src, index) => {
          const isActive = index === activeIndex;
          const isBack = index === (activeIndex + 1) % photos.length;

          return (
            <button
              key={src}
              type="button"
              className={cn(
                "hero-collage-photo",
                isActive && "hero-collage-photo-active",
                isBack && photos.length > 1 && "hero-collage-photo-back",
                !isActive && !isBack && "hero-collage-photo-hidden",
              )}
              onClick={() => setActiveIndex(index)}
              aria-label={`Show photo ${index + 1}`}
            >
              <div className="hero-collage-frame">
                <Image
                  src={src}
                  alt={`${profile.name} — portrait ${index + 1}`}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 768px) 90vw, 420px"
                  className="object-cover object-center"
                />
              </div>
            </button>
          );
        })}
      </div>

      <div className="hero-collage-badge">
        <span
          className="status-dot h-2 w-2 rounded-full"
          style={{ background: "var(--highlight)" }}
        />
        {profile.title}
      </div>

      {photos.length > 1 ? (
        <div className="hero-collage-dots" role="tablist" aria-label="Photo gallery">
          {photos.map((src, index) => (
            <button
              key={`dot-${src}`}
              type="button"
              role="tab"
              aria-selected={index === activeIndex}
              aria-label={`Photo ${index + 1}`}
              className={cn(
                "hero-collage-dot",
                index === activeIndex && "hero-collage-dot-active",
              )}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
