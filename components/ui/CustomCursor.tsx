"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const spotRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only on pointer-fine (desktop)
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const spot = spotRef.current;
    const dot = dotRef.current;
    if (!spot || !dot) return;

    let raf = 0;
    let tx = -300, ty = -300; // target
    let sx = -300, sy = -300; // smooth (for spotlight)

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      // Dot snaps instantly
      dot.style.transform = `translate(${tx}px, ${ty}px)`;
    };

    const loop = () => {
      // Smooth lerp for spotlight
      sx += (tx - sx) * 0.08;
      sy += (ty - sy) * 0.08;
      spot.style.background = `radial-gradient(
        400px circle at ${sx}px ${sy}px,
        rgba(45, 212, 191, 0.08) 0%,
        rgba(129, 140, 248, 0.04) 40%,
        transparent 70%
      )`;
      raf = requestAnimationFrame(loop);
    };

    const onLeave = () => {
      dot.style.opacity = "0";
    };
    const onEnter = () => {
      dot.style.opacity = "1";
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* Full-page spotlight layer */}
      <div ref={spotRef} className="cursor-spotlight" aria-hidden />
      {/* Small precise dot */}
      <div ref={dotRef} className="cursor-dot" aria-hidden />
    </>
  );
}
