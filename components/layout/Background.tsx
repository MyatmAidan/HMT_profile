export function Background() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden transition-colors duration-300"
      style={{ background: "var(--background)" }}
    >
      <div
        className="absolute -left-32 top-[-10%] h-[420px] w-[420px] rounded-full blur-[120px] animate-float-slow"
        style={{ background: "var(--orb-cyan)" }}
      />
      <div
        className="absolute right-[-5%] top-[20%] h-[380px] w-[380px] rounded-full blur-[120px] animate-float-delayed"
        style={{ background: "var(--orb-violet)" }}
      />
      <div
        className="absolute bottom-[-10%] left-[30%] h-[360px] w-[360px] rounded-full blur-[120px] animate-float-slow"
        style={{ background: "var(--orb-fuchsia)" }}
      />
      <div
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage: `linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 20%, transparent 70%)",
        }}
      />
    </div>
  );
}
