import type { NavItem } from "@/types/portfolio";

export const sectionIds = [
  "about",
  "experience",
  "projects",
  "skills",
  "education",
  "contact",
] as const;

export type SectionId = (typeof sectionIds)[number];

export const navigation: NavItem[] = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Education", href: "/#education" },
  { label: "Contact", href: "/#contact" },
];
