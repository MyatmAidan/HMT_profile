export function Background() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      style={{ background: "var(--background)" }}
    >
      <div
        className="absolute -left-24 top-[-8%] h-[480px] w-[480px] rounded-full blur-[100px] animate-float-slow"
        style={{ background: "var(--orb-1)" }}
      />
      <div
        className="absolute right-[-8%] top-[25%] h-[400px] w-[400px] rounded-full blur-[100px] animate-float-delayed"
        style={{ background: "var(--orb-2)" }}
      />
      <div
        className="absolute bottom-[-5%] left-[35%] h-[320px] w-[320px] rounded-full blur-[90px] animate-float-slow"
        style={{ background: "var(--orb-1)" }}
      />
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: `linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)`,
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse 75% 55% at 50% 0%, black 15%, transparent 70%)",
        }}
      />
    </div>
  );
}
