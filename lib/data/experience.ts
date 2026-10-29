import type { ExperienceItem } from "@/types/portfolio";

export const experience: ExperienceItem[] = [
  {
    period: "2025 – 2026",
    company: "Freelance / Project-Based",
    role: "Full-Stack Developer (Laravel & Next.js)",
    highlights: [
      "Shipped PhiLo POS (philo.asia) — a production point-of-sale platform for sales, stock, reporting, and multi-branch operations.",
      "Built the Shan Naung Yoe website (shannaungyoe.com) for a uniform and garment manufacturer, covering collections, capabilities, and inquiries.",
      "Built and delivered multiple local client web applications end-to-end.",
      "Implemented authentication, product management, sales tracking, and reporting.",
      "Developed RESTful APIs and managed MySQL databases with CRUD and optimization.",
      "Collaborated with clients to gather requirements and ship user-friendly solutions.",
    ],
    projects: [
      {
        title: "PhiLo POS",
        url: "https://philo.asia/",
        image: "/image/projects/philo-pos.png",
      },
      {
        title: "Shan Naung Yoe",
        url: "https://shannaungyoe.com",
        image: "/image/projects/shan-naung-yoe.png",
      },
    ],
  },
  {
    period: "2025",
    company: "Soft Guide Software House",
    role: "PHP & Laravel Developer Intern",
    highlights: [
      "Developed and maintained web applications using PHP and Laravel.",
      "Collaborated with senior developers to build and debug features.",
      "Assisted in database design and backend logic implementation.",
      "Gained hands-on experience in MVC architecture and RESTful APIs.",
    ],
  },
];
