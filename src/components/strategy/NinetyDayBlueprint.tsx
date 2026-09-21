import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";
import { StrategyNote } from "./StrategyNote";

const phases = [
  {
    range: "Day 0–30",
    title: "Measure",
    items: ["Analytics", "Search Console", "Conversion Eventの設計", "Baseline計測", "Sales Data確認"],
  },
  {
    range: "Day 31–60",
    title: "Capture",
    items: ["Home Plan公開", "Lead Capture導線", "Works CTA", "Journal導線", "Pre-Consultation Form"],
  },
  {
    range: "Day 61–90",
    title: "Nurture",
    items: ["Email / LINE配信", "関連コンテンツ配信", "Consultation Flow整備", "初期CRO"],
  },
];

export function NinetyDayBlueprint() {
  return (
    <div id="blueprint" className="section scroll-mt-24 bg-surface">
      <div className="wide">
        <Reveal className="max-w-2xl">
          <SectionLabel>10 — First 90 Days (Sample Implementation Blueprint)</SectionLabel>
          <h2 className="text-[24px] leading-[1.5] md:text-[32px]">
            最初の90日で、何をするか。
          </h2>
          <p className="font-en-serif mt-3 text-[12px] italic text-secondary">
            SAMPLE — 90日で成果を保証するものではなく、着手順序の一例です。
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {phases.map((p, i) => (
            <Reveal key={p.range} delay={i * 0.06} className="border-t-2 border-line-strong pt-5">
              <p className="font-en-serif text-[13px] italic text-wood">{p.range}</p>
              <p className="font-serif-jp mt-2 text-[19px]">{p.title}</p>
              <ul className="mt-4 flex flex-col gap-2">
                {p.items.map((it) => (
                  <li key={it} className="text-[13px] text-secondary">
                    {it}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-10 max-w-[56ch] text-[14px] leading-loose text-secondary">
            90日で集めたデータを見たうえで、SEO・AI Concierge・広告など、次に何へ進むかを判断する。
          </p>
        </Reveal>

        <StrategyNote>で、結局最初に何をするのか。まずここに答える。</StrategyNote>
      </div>
    </div>
  );
}
