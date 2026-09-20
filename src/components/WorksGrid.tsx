"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ImageReveal } from "@/components/Reveal";
import { image } from "@/lib/images";
import { works, type WorkCategory } from "@/data/works";

const categories: ("ALL" | WorkCategory)[] = [
  "ALL",
  "平屋",
  "2階建て",
  "リノベーション",
  "土地探しから",
];

export function WorksGrid() {
  const [active, setActive] = useState<"ALL" | WorkCategory>("ALL");
  const filtered = works.filter((w) => active === "ALL" || w.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-x-8 gap-y-3 border-b hairline pb-8">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setActive(c)}
            className={`text-[13px] tracking-wide transition-colors ${
              active === c ? "text-ink" : "text-secondary hover:text-ink"
            }`}
            aria-pressed={active === c}
          >
            {c}
            {active === c && <span className="ml-2 text-wood">・</span>}
          </button>
        ))}
      </div>

      <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 md:gap-y-20">
        {filtered.map((w, i) => (
          <ImageReveal key={w.slug} delay={(i % 2) * 0.08}>
            <Link href={`/works/${w.slug}`} className="group block">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={image(w.heroImage, 1200)}
                  alt={w.heroAlt}
                  fill
                  sizes="(min-width: 768px) 45vw, 100vw"
                  className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.02]"
                />
              </div>
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <p className="font-serif-jp text-[19px] leading-snug text-ink md:text-[21px]">
                    {w.title}
                  </p>
                  <p className="mt-1.5 text-[12px] tracking-wide text-secondary">
                    {w.location} ・ {w.family}
                  </p>
                </div>
                <span className="mt-1 shrink-0 text-[11px] tracking-wide text-wood">
                  {w.category}
                </span>
              </div>
            </Link>
          </ImageReveal>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-16 text-sm text-secondary">
          該当する施工事例は現在準備中です。
        </p>
      )}
    </div>
  );
}
