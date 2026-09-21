import { SectionLabel } from "@/components/SectionLabel";
import { Reveal, ImageReveal } from "@/components/Reveal";

const days = [
  { d: "Day 0", t: "診断結果" },
  { d: "Day 2", t: "決めなくていいこと" },
  { d: "Day 5", t: "後悔しやすいポイント" },
  { d: "Day 8", t: "似た家族の施工事例" },
  { d: "Day 12", t: "予算の考え方" },
  { d: "Day 16", t: "People / Philosophy" },
  { d: "Day 21", t: "相談CTA", final: true },
];

export function NurtureTimeline() {
  return (
    <div id="nurture" className="section scroll-mt-24 bg-surface">
      <div className="wide">
        <Reveal className="max-w-2xl">
          <SectionLabel>06 — Nurture Sequence</SectionLabel>
          <h2 className="text-[24px] leading-[1.5] md:text-[32px]">
            登録直後は売り込まない。21日かけて信頼を積む。
          </h2>
          <p className="font-en-serif mt-4 text-[13px] italic tracking-[0.08em] text-forest">
            Sell Less. Help More.
          </p>
        </Reveal>

        {/* Desktop: horizontal timeline */}
        <ImageReveal delay={0.1} className="mt-14 hidden overflow-x-auto md:block">
          <div className="flex w-max min-w-full items-start gap-0 border-t hairline pt-8">
            {days.map((day) => (
              <div key={day.d} className="w-[150px] shrink-0 px-2">
                <span
                  className={`block h-1.5 w-1.5 rounded-full ${
                    day.final ? "bg-forest" : "bg-wood"
                  }`}
                />
                <p className="font-en-serif mt-3 text-[12px] italic text-ink">{day.d}</p>
                <p className="mt-1 text-[12px] leading-relaxed text-secondary">{day.t}</p>
              </div>
            ))}
          </div>
        </ImageReveal>

        {/* Mobile: vertical steps */}
        <div className="mt-12 flex flex-col gap-0 border-t hairline md:hidden">
          {days.map((day) => (
            <Reveal key={day.d} className="flex items-baseline gap-4 border-b hairline py-4">
              <span className="font-en-serif w-14 shrink-0 text-[12px] italic text-wood">{day.d}</span>
              <span className="text-[13px] text-secondary">{day.t}</span>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <p className="font-en-serif mt-8 text-[13px] italic text-secondary">
            教育（Day0–16）→ 信頼 → Day21で初めて「まだ何も決まっていなくても大丈夫です。」と相談へ誘導する。
          </p>
        </Reveal>
      </div>
    </div>
  );
}
