import type { ProjectItem } from "@/types/portfolio";

export const projects: ProjectItem[] = [
  {
    title: "PhiLo POS",
    description:
      "Production POS platform for Myanmar retail and F&B — sales, inventory, reporting, staff roles, and multi-branch operations, with a web dashboard for day-to-day control.",
    stack: ["Laravel", "Next.js", "MySQL", "REST API"],
    featured: true,
    url: "https://philo.asia/",
  },
  {
    title: "Shan Naung Yoe",
    description:
      "Company website for a uniform and garment manufacturer — collections, production capabilities, and inquiry contact for school, hospital, and industrial uniforms.",
    stack: ["Laravel", "MySQL"],
    featured: true,
    url: "https://shannaungyoe.com",
  },
  {
    title: "Client Web Applications",
    description:
      "Multiple production-ready sites for local businesses with auth, dashboards, and responsive UI.",
    stack: ["Laravel", "Next.js", "Bootstrap", "MySQL"],
  },
  {
    title: "API Integrations",
    description:
      "RESTful backends connecting modern frontends with secure authentication and optimized queries.",
    stack: ["Laravel", "PHP", "MariaDB"],
  },
];
