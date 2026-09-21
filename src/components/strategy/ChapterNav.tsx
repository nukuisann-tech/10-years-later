"use client";

import { useEffect, useRef, useState } from "react";
import { chapters } from "./chapters";

function scrollToChapter(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const headerOffset = window.innerWidth >= 768 ? 100 : 90;
  const top = el.getBoundingClientRect().top + window.scrollY - headerOffset;
  window.scrollTo({ top, behavior: "smooth" });
}

export function ChapterNav() {
  const [active, setActive] = useState(chapters[0].id);
  const stripRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  useEffect(() => {
    const strip = stripRef.current;
    const btn = buttonRefs.current[active];
    if (!strip || !btn) return;
    const stripRect = strip.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();
    if (btnRect.left < stripRect.left || btnRect.right > stripRect.right) {
      strip.scrollTo({
        left: strip.scrollLeft + (btnRect.left - stripRect.left) - 24,
        behavior: "smooth",
      });
    }
  }, [active]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
    );
    for (const c of chapters) {
      const el = document.getElementById(c.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Desktop: fixed vertical chapter index */}
      <nav
        aria-label="Strategy chapters"
        className="fixed right-8 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-3 xl:flex"
      >
        {chapters.map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() => scrollToChapter(c.id)}
            className="group flex items-center justify-end gap-2.5 text-right"
            aria-current={active === c.id ? "true" : undefined}
          >
            <span
              className={`font-en-serif text-[11px] italic transition-colors ${
                active === c.id ? "text-ink" : "text-secondary/50 group-hover:text-secondary"
              }`}
            >
              {c.no} {c.label}
            </span>
            <span
              className={`block h-px transition-all ${
                active === c.id ? "w-6 bg-wood" : "w-3 bg-line-strong"
              }`}
            />
          </button>
        ))}
      </nav>

      {/* Mobile / tablet: sticky horizontal chapter strip (full-bleed, not nested in a padded container) */}
      <div
        ref={stripRef}
        className="sticky top-[72px] z-30 w-full overflow-x-auto border-b hairline bg-base/95 backdrop-blur-md md:top-[88px] xl:hidden"
      >
        <div className="flex w-max gap-6 px-6 py-3 md:px-12">
          {chapters.map((c) => (
            <button
              key={c.id}
              type="button"
              ref={(el) => {
                buttonRefs.current[c.id] = el;
              }}
              onClick={() => scrollToChapter(c.id)}
              className={`whitespace-nowrap text-[11px] tracking-wide transition-colors ${
                active === c.id ? "text-ink" : "text-secondary/60"
              }`}
              aria-current={active === c.id ? "true" : undefined}
            >
              <span className="font-en-serif italic">{c.no}</span> {c.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
