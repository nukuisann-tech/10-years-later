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

const rhythm = [
  { col: "md:col-span-12", aspect: "aspect-[21/9]", offset: "" },
  { col: "md:col-span-7", aspect: "aspect-[4/3]", offset: "" },
  { col: "md:col-span-5", aspect: "aspect-[4/5]", offset: "md:mt-20" },
  { col: "md:col-span-6", aspect: "aspect-[3/4]", offset: "" },
  { col: "md:col-span-6", aspect: "aspect-[3/4]", offset: "md:mt-16" },
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

      <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-12 md:gap-y-16">
        {filtered.map((w, i) => {
          const r = rhythm[i % rhythm.length];
          return (
            <ImageReveal key={w.slug} delay={(i % 3) * 0.06} className={r.col}>
              <Link href={`/works/${w.slug}`} className={`group block ${r.offset}`}>
                <div className={`relative w-full overflow-hidden ${r.aspect}`}>
                  <Image
                    src={image(w.heroImage, 1400)}
                    alt={w.heroAlt}
                    fill
                    sizes="(min-width: 768px) 60vw, 100vw"
                    className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.02]"
                  />
                </div>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="font-serif-jp text-[19px] leading-snug text-ink transition-colors group-hover:text-wood md:text-[21px]">
                      {w.title}
                    </p>
                    <p className="mt-1.5 text-[12px] tracking-wide text-secondary">
                      {w.family} ・ {w.location}
                    </p>
                  </div>
                  <span className="mt-1 shrink-0 text-[11px] tracking-wide text-wood">
                    {w.category}
                  </span>
                </div>
              </Link>
            </ImageReveal>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <p className="mt-16 text-sm text-secondary">
          該当する施工事例は現在準備中です。
        </p>
      )}
    </div>
  );
}
