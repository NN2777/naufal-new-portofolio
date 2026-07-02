"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const currentProgress =
        documentHeight > 0 ? scrollTop / documentHeight : 0;

      setProgress(Math.min(Math.max(currentProgress, 0), 1));
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };

    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed left-0 top-0 z-[80] h-[3px] w-full bg-transparent lg:left-60 lg:w-[calc(100%-15rem)]">
      <div
        className="h-full origin-left bg-cyan-300 transition-transform duration-75 ease-linear"
        style={{
          transform: `scaleX(${progress})`,
        }}
      />
    </div>
  );
}