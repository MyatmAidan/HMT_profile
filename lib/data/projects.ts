import type { ProjectItem } from "@/types/portfolio";

export const projects: ProjectItem[] = [
  {
    title: "POS System",
    description:
      "Full-stack point-of-sale platform with inventory, sales tracking, and reporting — built for real retail workflows.",
    stack: ["Laravel", "Next.js", "MySQL", "REST API"],
    featured: true,
  },
  {
    title: "Client Web Applications",
    description:
      "Multiple production-ready sites for local businesses with auth, dashboards, and responsive UI.",
    stack: ["Laravel", "Next.js", "Bootstrap", "MySQL"],
    featured: true,
  },
  {
    title: "API Integrations",
    description:
      "RESTful backends connecting modern frontends with secure authentication and optimized queries.",
    stack: ["Laravel", "PHP", "MariaDB"],
  },
];
