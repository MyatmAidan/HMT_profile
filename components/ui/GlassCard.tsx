import { cn } from "@/lib/utils/cn";

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
};

export function GlassCard({ children, className, glow }: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass-card rounded-2xl p-6 backdrop-blur-xl",
        glow && "glass-card-glow",
        className,
      )}
    >
      {children}
    </div>
  );
}
