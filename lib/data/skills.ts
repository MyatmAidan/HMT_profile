import type { SkillCategory, SkillItem } from "@/types/portfolio";

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    description: "Interfaces, components, and responsive user experiences.",
    accent: "teal",
    items: [
      { name: "HTML", icon: "html" },
      { name: "CSS", icon: "css" },
      { name: "JavaScript", icon: "javascript" },
      { name: "Bootstrap", icon: "bootstrap" },
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "Ionic React", icon: "ionic" },
    ],
  },
  {
    title: "Backend",
    description: "Server logic, APIs, and scalable application architecture.",
    accent: "indigo",
    items: [
      { name: "PHP", icon: "php" },
      { name: "Laravel", icon: "laravel" },
      { name: "REST APIs", icon: "api" },
      { name: "MVC", icon: "mvc" },
    ],
  },
  {
    title: "Database",
    description: "Data modeling, storage, and reliable query performance.",
    accent: "violet",
    items: [
      { name: "MySQL", icon: "mysql" },
      { name: "MariaDB", icon: "mariadb" },
    ],
  },
];

export const skillMarquee: SkillItem[] = [
  { name: "Laravel", icon: "laravel" },
  { name: "Next.js", icon: "nextjs" },
  { name: "React", icon: "react" },
  { name: "Ionic React", icon: "ionic" },
  { name: "TypeScript", icon: "typescript" },
  { name: "PHP", icon: "php" },
  { name: "MySQL", icon: "mysql" },
  { name: "Tailwind CSS", icon: "tailwindcss" },
];
