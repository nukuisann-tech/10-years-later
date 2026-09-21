import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";

const pairs = [
  { bottleneck: "検索流入が少ない", solution: "SEO / Content" },
  { bottleneck: "アクセスはあるが、相談されない", solution: "CRO / Lead Magnet" },
  { bottleneck: "見込み客はいるが、忘れられる", solution: "Nurture" },
  { bottleneck: "営業前ヒアリングに時間がかかる", solution: "CRM / AI Concierge" },
];

export function OpportunityMatrix() {
  return (
    <div id="opportunities" className="section scroll-mt-24 bg-surface">
      <div className="wide">
        <Reveal className="max-w-2xl">
          <SectionLabel>10 — Next Growth Opportunities</SectionLabel>
          <h2 className="text-[24px] leading-[1.5] md:text-[32px]">
            全部売らない。ボトルネックに応じて提案する。
          </h2>
        </Reveal>

        <div className="mt-12 border-t hairline">
          {pairs.map((p, i) => (
            <Reveal key={p.bottleneck} delay={i * 0.05}>
              <div className="grid grid-cols-1 gap-2 border-b hairline py-6 md:grid-cols-[2fr_auto_1.2fr] md:items-center md:gap-6 md:py-7">
                <p className="text-[14px] text-secondary md:text-[15px]">{p.bottleneck}</p>
                <span className="hidden text-secondary md:block">→</span>
                <p className="font-serif-jp text-[16px] text-ink md:text-[17px]">{p.solution}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
