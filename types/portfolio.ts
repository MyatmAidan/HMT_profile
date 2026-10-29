export type NavItem = {
  label: string;
  href: string;
};

export type SkillItem = {
  name: string;
  icon: string;
};

export type SkillCategory = {
  title: string;
  description?: string;
  accent?: "teal" | "indigo" | "violet";
  items: SkillItem[];
};

export type ExperienceProject = {
  title: string;
  url: string;
  image: string;
};

export type ExperienceItem = {
  period: string;
  company: string;
  role: string;
  highlights: string[];
  projects?: ExperienceProject[];
};

export type EducationItem = {
  degree: string;
  school: string;
  period: string;
  image?: string;
};

export type ProjectItem = {
  title: string;
  description: string;
  stack: string[];
  featured?: boolean;
  url?: string;
  image?: string;
};

export type Profile = {
  name: string;
  title: string;
  tagline: string;
  about: string;
  email: string;
  phone: string;
  github: string;
  cvPath: string;
  image: string;
  images?: string[];
  location?: string;
};

export type ContactPayload = {
  name: string;
  email: string;
  message: string;
  website?: string;
};
