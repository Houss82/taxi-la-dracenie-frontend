"use client";

import { useEffect, useRef, useState } from "react";

export default function ParallaxImageBanner({ src, alt = "" }) {
  const sectionRef = useRef(null);
  const [offset, setOffset] = useState(0);
  const [useFixedBg, setUseFixedBg] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktop = window.matchMedia("(min-width: 768px)");

    const shouldUseFixed = () =>
      !reduceMotion.matches && desktop.matches;

    const syncMode = () => {
      const fixed = shouldUseFixed();
      setUseFixedBg(fixed);
      if (fixed) setOffset(0);
    };

    syncMode();
    reduceMotion.addEventListener("change", syncMode);
    desktop.addEventListener("change", syncMode);

    let frame = 0;
    const onScroll = () => {
      if (shouldUseFixed()) return;

      const section = sectionRef.current;
      if (!section) return;

      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect();
        const viewHeight = window.innerHeight;

        if (rect.bottom < 0 || rect.top > viewHeight) return;

        setOffset(rect.top * -0.35);
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      reduceMotion.removeEventListener("change", syncMode);
      desktop.removeEventListener("change", syncMode);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="parallax-banner"
      aria-label={alt || undefined}
      aria-hidden={!alt}
    >
      <div
        className={`parallax-banner__media ${
          useFixedBg ? "parallax-banner__media--fixed" : ""
        }`}
        style={{
          backgroundImage: `url(${src})`,
          transform: useFixedBg
            ? undefined
            : `translate3d(0, ${offset}px, 0)`,
        }}
        role={alt ? "img" : undefined}
        aria-label={alt || undefined}
      />
      <div className="parallax-banner__overlay" aria-hidden />
      <div className="parallax-banner__fade parallax-banner__fade--top" aria-hidden />
      <div className="parallax-banner__fade parallax-banner__fade--bottom" aria-hidden />
    </section>
  );
}
