"use client";

import { useState } from "react";
import { skillCategories } from "@/lib/data/skills";
import { SkillCard } from "@/components/ui/SkillCard";
import { SkillIcon } from "@/components/ui/SkillIcon";
import { cn } from "@/lib/utils/cn";

const FEATURED_ICONS = new Set(["react", "laravel", "nextjs"]);
const TABS = ["All", ...skillCategories.map((c) => c.title)] as const;
type Tab = (typeof TABS)[number];

const allSkills = skillCategories.flatMap((category) =>
  category.items.map((skill) => ({
    ...skill,
    category: category.title,
    featured: FEATURED_ICONS.has(skill.icon),
  })),
);

export function SkillsShowcase() {
  const [activeTab, setActiveTab] = useState<Tab>("All");

  const visibleSkills =
    activeTab === "All"
      ? allSkills
      : allSkills.filter((skill) => skill.category === activeTab);

  const activeCategory = skillCategories.find((c) => c.title === activeTab);

  return (
    <div className="skill-showcase">
      <div className="skill-showcase-layout">
        <aside className="skill-sidebar">
          <p className="skill-sidebar-label">Browse by stack</p>
          <div className="skill-tabs" role="tablist" aria-label="Skill categories">
            {TABS.map((tab) => {
              const isActive = activeTab === tab;
              const count =
                tab === "All"
                  ? allSkills.length
                  : skillCategories.find((c) => c.title === tab)?.items.length ?? 0;

              return (
                <button
                  key={tab}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={cn("skill-tab", isActive && "skill-tab-active")}
                  onClick={() => setActiveTab(tab)}
                >
                  <span>{tab}</span>
                  <span className="skill-tab-count">{count}</span>
                </button>
              );
            })}
          </div>

          <div className="skill-sidebar-info">
            {activeTab === "All" ? (
              <>
                <h3 className="text-base font-bold text-foreground">Full toolkit</h3>
                <p className="mt-2 text-sm leading-relaxed text-theme-muted">
                  Every technology I use across frontend, backend, and data layers.
                </p>
              </>
            ) : activeCategory ? (
              <>
                <h3 className="text-base font-bold text-foreground">
                  {activeCategory.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-theme-muted">
                  {activeCategory.description}
                </p>
              </>
            ) : null}
          </div>
        </aside>

        <div className="skill-stage">
          <div
            key={activeTab}
            className="skill-grid skill-grid-animate"
            role="tabpanel"
          >
            {visibleSkills.map((skill, index) => (
              <div
                key={skill.name}
                className="skill-grid-item"
                style={{ animationDelay: `${index * 45}ms` }}
              >
                <SkillCard
                  skill={skill}
                  category={skill.category}
                  featured={skill.featured && activeTab === "All"}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="skill-orbit" aria-hidden>
        <div className="skill-orbit-track">
          {[...allSkills, ...allSkills].map((skill, index) => (
            <span
              key={`${skill.name}-orbit-${index}`}
              className="skill-orbit-item"
            >
              <SkillIcon icon={skill.icon} name={skill.name} size={18} />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
