import type { CSSProperties } from "react";

type RandomShape = {
  id: number;
  style: CSSProperties;
  kind: "bubble" | "square" | "ring";
};

function hashSeed(str: string): number {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function createRng(seed: string) {
  let state = hashSeed(seed);

  return () => {
    state += 0x6d2b79f5;
    let t = state;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function randBetween(rng: () => number, min: number, max: number) {
  return min + rng() * (max - min);
}

function px(rng: () => number, min: number, max: number) {
  return `${Math.round(randBetween(rng, min, max))}px`;
}

function motionStyle(rng: () => number): CSSProperties {
  const spin = randBetween(rng, -22, 22);
  const dir = rng() > 0.5 ? 1 : -1;

  return {
    ["--shape-dur" as string]: `${randBetween(rng, 14, 28).toFixed(1)}s`,
    ["--shape-delay" as string]: `${randBetween(rng, 0, 4).toFixed(2)}s`,
    ["--tx1" as string]: px(rng, 10, 42 * dir),
    ["--ty1" as string]: px(rng, -36, 32),
    ["--tx2" as string]: px(rng, -38, 34 * dir),
    ["--ty2" as string]: px(rng, -28, 38),
    ["--tx3" as string]: px(rng, -30, 36),
    ["--ty3" as string]: px(rng, -32, 28),
    ["--r1" as string]: `${(spin * 0.6).toFixed(1)}deg`,
    ["--r2" as string]: `${(spin * -0.9).toFixed(1)}deg`,
    ["--r3" as string]: `${(spin * 0.45).toFixed(1)}deg`,
    ["--sc1" as string]: randBetween(rng, 0.94, 1.08).toFixed(2),
    ["--sc2" as string]: randBetween(rng, 0.92, 1.06).toFixed(2),
    ["--sc3" as string]: randBetween(rng, 0.96, 1.04).toFixed(2),
    animationDuration: `var(--shape-dur)`,
    animationDelay: `var(--shape-delay)`,
  };
}

function generateGlobalShapes(): RandomShape[] {
  const rng = createRng("site-global-layer");
  const shapes: RandomShape[] = [];
  let id = 0;

  for (let i = 0; i < 9; i++) {
    const size = Math.round(randBetween(rng, 24, 180));
    shapes.push({
      id: id++,
      kind: "bubble",
      style: {
        width: size,
        height: size,
        top: `${randBetween(rng, -8, 92).toFixed(1)}%`,
        left: `${randBetween(rng, -6, 94).toFixed(1)}%`,
        opacity: randBetween(rng, 0.22, 0.48),
        ...motionStyle(rng),
      },
    });
  }

  for (let i = 0; i < 7; i++) {
    const size = Math.round(randBetween(rng, 20, 72));
    shapes.push({
      id: id++,
      kind: "square",
      style: {
        width: size,
        height: size,
        top: `${randBetween(rng, 2, 88).toFixed(1)}%`,
        left: `${randBetween(rng, 0, 92).toFixed(1)}%`,
        opacity: randBetween(rng, 0.07, 0.2),
        borderRadius: `${randBetween(rng, 0.35, 1.1).toFixed(2)}rem`,
        ...motionStyle(rng),
      },
    });
  }

  for (let i = 0; i < 5; i++) {
    const size = Math.round(randBetween(rng, 120, 420));
    shapes.push({
      id: id++,
      kind: "ring",
      style: {
        width: size,
        height: size,
        top: `${randBetween(rng, -12, 72).toFixed(1)}%`,
        left: `${randBetween(rng, -8, 88).toFixed(1)}%`,
        opacity: randBetween(rng, 0.18, 0.38),
        ...motionStyle(rng),
        ["--shape-dur" as string]: `${randBetween(rng, 20, 36).toFixed(1)}s`,
      },
    });
  }

  return shapes;
}

const shapeClass: Record<RandomShape["kind"], string> = {
  bubble: "shape-bubble shape-animate",
  square: "shape-square shape-animate",
  ring: "shape-ring shape-animate",
};

const globalShapes = generateGlobalShapes();

export function GlobalFloatingShapes() {
  return (
    <div aria-hidden className="global-shapes pointer-events-none absolute inset-0">
      {globalShapes.map((shape) => (
        <span
          key={`global-${shape.kind}-${shape.id}`}
          className={shapeClass[shape.kind]}
          style={shape.style}
        />
      ))}
    </div>
  );
}
