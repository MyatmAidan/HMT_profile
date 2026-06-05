import type { NavItem } from "@/types/portfolio";

export const sectionIds = [
  "about",
  "experience",
  "projects",
  "education",
  "skills",
  "contact",
] as const;

export type SectionId = (typeof sectionIds)[number];

export const navigation: NavItem[] = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Education", href: "/#education" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/#contact" },
];
