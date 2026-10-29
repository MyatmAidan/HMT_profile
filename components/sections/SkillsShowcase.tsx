"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { skillCategories } from "@/lib/data/skills";
import { SkillIcon } from "@/components/ui/SkillIcon";

// Flatten all skills into a single array with category info
const ALL_SKILLS = skillCategories.flatMap((cat) =>
  cat.items.map((skill) => ({ ...skill, category: cat.title }))
);

const VISIBLE_SIDE = 5; // How many to show on each side

export function SkillsShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const autoRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const total = ALL_SKILLS.length;

  const goTo = useCallback(
    (idx: number) => {
      setActiveIndex((((idx % total) + total) % total));
    },
    [total]
  );

  const next = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const prev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  // Auto-advance
  useEffect(() => {
    autoRef.current = setTimeout(next, 3200);
    return () => { if (autoRef.current) clearTimeout(autoRef.current); };
  }, [next]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, prev]);

  // Build the items visible around the active one
  const getItem = (offset: number) => {
    const idx = (((activeIndex + offset) % total) + total) % total;
    return { ...ALL_SKILLS[idx], idx };
  };

  // Left side: -VISIBLE_SIDE to -1 (far left = smallest)
  const leftItems = Array.from({ length: VISIBLE_SIDE }, (_, i) => getItem(-(VISIBLE_SIDE - i)));
  // Right side: +1 to +VISIBLE_SIDE
  const rightItems = Array.from({ length: VISIBLE_SIDE }, (_, i) => getItem(i + 1));
  const centerItem = getItem(0);

  const scale = (pos: number) => Math.pow(0.78, Math.abs(pos));
  const opacity = (pos: number) => Math.max(0.18, 1 - Math.abs(pos) * 0.2);

  return (
    <div className="orbit-root" aria-label="Technical skills carousel">
      {/* Floating skills - left side */}
      <div className="orbit-side orbit-left" aria-hidden>
        {leftItems.map((item, i) => {
          const pos = -(VISIBLE_SIDE - i); // -5 to -1
          const s = scale(pos);
          const o = opacity(pos);
          return (
            <div
              key={`left-${item.idx}`}
              className="orbit-item orbit-item-side"
              style={{
                transform: `scale(${s})`,
                opacity: o,
                zIndex: i + 1,
              }}
              onClick={() => goTo(item.idx)}
            >
              <div className="orbit-item-icon">
                <SkillIcon icon={item.icon} name={item.name} size={28} />
              </div>
              <span className="orbit-item-name">{item.name}</span>
              <span className="orbit-item-cat">{item.category}</span>
            </div>
          );
        })}
      </div>

      {/* Center featured skill */}
      <div className="orbit-center" aria-live="polite">
        <button
          type="button"
          className="orbit-prev"
          onClick={prev}
          aria-label="Previous skill"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <div className="orbit-featured">
          <div className="orbit-featured-ring" aria-hidden />
          <div className="orbit-featured-icon">
            <SkillIcon icon={centerItem.icon} name={centerItem.name} size={72} />
          </div>
          <h3 className="orbit-featured-name">{centerItem.name}</h3>
          <p className="orbit-featured-cat">{centerItem.category}</p>
          <p className="orbit-featured-count" aria-label={`Skill ${activeIndex + 1} of ${total}`}>
            <span>{String(activeIndex + 1).padStart(2, "0")}</span>
            <span className="orbit-count-sep">/</span>
            <span>{total}</span>
          </p>
        </div>

        <button
          type="button"
          className="orbit-next"
          onClick={next}
          aria-label="Next skill"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* Floating skills - right side */}
      <div className="orbit-side orbit-right" aria-hidden>
        {rightItems.map((item, i) => {
          const pos = i + 1; // 1 to +5
          const s = scale(pos);
          const o = opacity(pos);
          return (
            <div
              key={`right-${item.idx}`}
              className="orbit-item orbit-item-side"
              style={{
                transform: `scale(${s})`,
                opacity: o,
                zIndex: VISIBLE_SIDE - i,
              }}
              onClick={() => goTo(item.idx)}
            >
              <div className="orbit-item-icon">
                <SkillIcon icon={item.icon} name={item.name} size={28} />
              </div>
              <span className="orbit-item-name">{item.name}</span>
              <span className="orbit-item-cat">{item.category}</span>
            </div>
          );
        })}
      </div>

      {/* Progress dots */}
      <div className="orbit-dots" role="tablist" aria-label="Navigate skills">
        {ALL_SKILLS.map((_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={i === activeIndex}
            aria-label={`Go to skill ${i + 1}`}
            className={`orbit-dot${i === activeIndex ? " orbit-dot-active" : ""}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  );
}
