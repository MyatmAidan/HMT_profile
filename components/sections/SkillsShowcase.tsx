"use client";

import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import type { CSSProperties } from "react";
import { skillCategories } from "@/lib/data/skills";
import { SkillIcon } from "@/components/ui/SkillIcon";

// Flatten all skills into a single array with category info
const ALL_SKILLS = skillCategories.flatMap((cat) =>
  cat.items.map((skill) => ({ ...skill, category: cat.title }))
);

const VISIBLE_SIDE = 2;

export function SkillsShowcase() {
  const [activeIndex, setActiveIndex] = useState(() => {
    const reactIndex = ALL_SKILLS.findIndex((skill) => skill.name === "React");
    return reactIndex >= 0 ? reactIndex : 0;
  });
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

  const { leftItems, rightItems } = useMemo(() => {
    let seed = activeIndex + 1;
    const random = () => {
      seed = (seed * 16807) % 2147483647;
      return (seed - 1) / 2147483646;
    };
    const otherItems = ALL_SKILLS
      .map((skill, idx) => ({ ...skill, idx }))
      .filter((_, idx) => idx !== activeIndex);

    for (let i = otherItems.length - 1; i > 0; i--) {
      const swapIndex = Math.floor(random() * (i + 1));
      [otherItems[i], otherItems[swapIndex]] = [otherItems[swapIndex], otherItems[i]];
    }

    return {
      leftItems: otherItems.slice(0, VISIBLE_SIDE * 2 + 1),
      rightItems: otherItems.slice(
        VISIBLE_SIDE * 2 + 1,
        VISIBLE_SIDE * 4 + 2
      ),
    };
  }, [activeIndex]);
  const centerItem = { ...ALL_SKILLS[activeIndex], idx: activeIndex };

  const renderSideItems = (
    side: "left" | "right",
    items: typeof leftItems
  ) =>
    items.map((item, index) => {
      const distance = Math.abs(index - VISIBLE_SIDE);
      const centered = distance === 0;
      return (
        <button
          key={`${side}-${item.idx}`}
          type="button"
          className={`orbit-item orbit-item-side orbit-item-${side}${centered ? " orbit-item-active" : ""}`}
          style={{
            "--item-distance": distance,
            "--item-position": index - VISIBLE_SIDE,
          } as CSSProperties}
          aria-label={`Show ${item.name}, ${item.category}`}
          onClick={() => goTo(item.idx)}
        >
          {side === "right" && (
            <span className="orbit-item-icon">
              <SkillIcon icon={item.icon} name={item.name} size={28} />
            </span>
          )}
          <span className="orbit-item-copy">
            <span className="orbit-item-name">{item.name}</span>
            <span className="orbit-item-cat">{item.category}</span>
          </span>
          {side === "left" && (
            <span className="orbit-item-icon">
              <SkillIcon icon={item.icon} name={item.name} size={28} />
            </span>
          )}
        </button>
      );
    });

  return (
    <div className="orbit-root" aria-label="Technical skills carousel">
      <div className="orbit-side orbit-left">{renderSideItems("left", leftItems)}</div>

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

      <div className="orbit-side orbit-right">{renderSideItems("right", rightItems)}</div>

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
