import { GlobalFloatingShapes } from "@/components/ui/GlobalFloatingShapes";

export function Background() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      style={{ background: "var(--background)" }}
    >
      <div className="bg-aurora bg-aurora-1" />
      <div className="bg-aurora bg-aurora-2" />
      <div className="bg-aurora bg-aurora-3" />
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
        className="absolute top-[45%] right-[20%] h-[280px] w-[280px] rounded-full blur-[90px] animate-float-delayed"
        style={{ background: "var(--orb-2)", opacity: 0.7 }}
      />
      <GlobalFloatingShapes />
      <div
        className="bg-grid-animated absolute inset-0 opacity-35"
        style={{
          backgroundImage: `linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)`,
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse 120% 100% at 50% 50%, black 20%, transparent 85%)",
        }}
      />
    </div>
  );
}
