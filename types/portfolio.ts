export type NavItem = {
  label: string;
  href: string;
};

export type SkillCategory = {
  title: string;
  items: string[];
};

export type ExperienceItem = {
  period: string;
  company: string;
  role: string;
  highlights: string[];
};

export type EducationItem = {
  degree: string;
  school: string;
  period: string;
};

export type ProjectItem = {
  title: string;
  description: string;
  stack: string[];
  featured?: boolean;
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
  location?: string;
};

export type ContactPayload = {
  name: string;
  email: string;
  message: string;
  website?: string;
};
