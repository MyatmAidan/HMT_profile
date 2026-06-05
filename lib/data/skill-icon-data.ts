import {
  siBootstrap,
  siCss,
  siHtml5,
  siIonic,
  siJavascript,
  siLaravel,
  siMariadb,
  siMysql,
  siNextdotjs,
  siPhp,
  siReact,
  siTailwindcss,
  siTypescript,
} from "simple-icons";

export type SkillIconPath = {
  d: string;
  fill?: string;
};

export type SkillIconData = {
  title: string;
  paths: SkillIconPath[];
  brandColor: string;
  darkInvert?: boolean;
};

const darkIconHexes = new Set(["000000", "003545", "1f3052"]);

function fromSimpleIcon(icon: { title: string; path: string; hex: string }) {
  return {
    title: icon.title,
    paths: [{ d: icon.path, fill: `#${icon.hex}` }],
    brandColor: `#${icon.hex}`,
    darkInvert: darkIconHexes.has(icon.hex.toLowerCase()),
  } satisfies SkillIconData;
}

export const skillIconRegistry: Record<string, SkillIconData> = {
  html: fromSimpleIcon(siHtml5),
  css: fromSimpleIcon(siCss),
  javascript: fromSimpleIcon(siJavascript),
  bootstrap: fromSimpleIcon(siBootstrap),
  react: fromSimpleIcon(siReact),
  nextjs: fromSimpleIcon(siNextdotjs),
  ionic: fromSimpleIcon(siIonic),
  php: fromSimpleIcon(siPhp),
  laravel: fromSimpleIcon(siLaravel),
  mysql: fromSimpleIcon(siMysql),
  mariadb: fromSimpleIcon(siMariadb),
  typescript: fromSimpleIcon(siTypescript),
  tailwindcss: fromSimpleIcon(siTailwindcss),
  api: {
    title: "REST APIs",
    brandColor: "#0D9488",
    paths: [
      { d: "M4 5.5A1.5 1.5 0 0 1 5.5 4h13A1.5 1.5 0 0 1 20 5.5v13A1.5 1.5 0 0 1 18.5 20h-13A1.5 1.5 0 0 1 4 18.5v-13Z", fill: "#0D9488" },
      { d: "M7.5 9h3.5v1.5H7.5V9Zm0 3.75H13v1.5H7.5v-1.5Zm0 3.75h2.5V18H7.5v-1.5Z", fill: "#FFFFFF" },
      { d: "M15.25 12a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Zm0 1.5a2.75 2.75 0 1 1 0-5.5 2.75 2.75 0 0 1 0 5.5Z", fill: "#6366F1" },
    ],
  },
  mvc: {
    title: "MVC",
    brandColor: "#6366F1",
    paths: [
      { d: "M3 4.5h18v4.5H3V4.5Z", fill: "#6366F1" },
      { d: "M3 10.5h7.5v4.5H3v-4.5Z", fill: "#0D9488" },
      { d: "M13.5 10.5H21v4.5h-7.5v-4.5Z", fill: "#0D9488" },
      { d: "M3 16.5h18v3H3v-3Z", fill: "#6366F1", },
    ],
  },
};

export function getSkillIcon(icon: string): SkillIconData | undefined {
  return skillIconRegistry[icon];
}

export function getSkillBrandColor(icon: string): string {
  return skillIconRegistry[icon]?.brandColor ?? "var(--highlight)";
}
