"use client";

import type { CSSProperties } from "react";
import type { SkillItem } from "@/types/portfolio";
import { getSkillBrandColor } from "@/lib/data/skill-icon-data";
import { SkillIcon } from "@/components/ui/SkillIcon";
import { cn } from "@/lib/utils/cn";

type SkillCardProps = {
  skill: SkillItem;
  category: string;
  featured?: boolean;
};

export function SkillCard({ skill, category, featured }: SkillCardProps) {
  const brandColor = getSkillBrandColor(skill.icon);

  return (
    <article
      className={cn("skill-card group", featured && "skill-card-featured")}
      style={{ "--skill-brand": brandColor } as CSSProperties}
    >
      <div className="skill-card-border" aria-hidden />
      <div className="skill-card-body">
        <div className="skill-card-icon-wrap">
          <SkillIcon
            icon={skill.icon}
            name={skill.name}
            size={featured ? 36 : 30}
          />
        </div>
        <div className="skill-card-content">
          <p className="skill-card-category">{category}</p>
          <h4 className="skill-card-name">{skill.name}</h4>
          {featured ? (
            <p className="skill-card-tag">Core stack</p>
          ) : null}
        </div>
        <div className="skill-card-arrow" aria-hidden>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </div>
      </div>
      <div className="skill-card-bar" aria-hidden>
        <span className="skill-card-bar-fill" />
      </div>
    </article>
  );
}
