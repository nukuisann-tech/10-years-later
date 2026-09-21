import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";
import { StrategyNote } from "./StrategyNote";

const rules = [
  { when: "検索流入が少ない", then: "SEO / Local SEO" },
  { when: "流入はあるが、Worksまで見られない", then: "Information Architecture / Internal Linking" },
  { when: "Worksは見られるが、Lead Captureされない", then: "Lead Magnet / CTA / CRO" },
  { when: "Leadは取れるが、相談されない", then: "Nurture" },
  { when: "相談は多いが、商談化率が低い", then: "Qualification / Pre-Consultation" },
  { when: "商談は多いが、成約率が低い", then: "Web施策を増やす前に、Sales Processを確認" },
  { when: "営業対応コストが高い", then: "CRM / Automation / AI Concierge" },
];

export function DecisionRules() {
  return (
    <div id="decisions" className="section scroll-mt-24">
      <div className="wide">
        <Reveal className="max-w-2xl">
          <SectionLabel>09 — If This, Then That</SectionLabel>
          <h2 className="text-[24px] leading-[1.5] md:text-[32px]">
            症状によって、処方を変える。
          </h2>
          <p className="mt-4 text-[14px] leading-loose text-secondary">
            「SEOもSNSもAIもできます」ではなく、今どこが詰まっているかに応じて、必要なものだけを提案する。
          </p>
        </Reveal>

        <div className="mt-12 border-t hairline">
          {rules.map((r, i) => (
            <Reveal key={r.when} delay={i * 0.04}>
              <div className="grid grid-cols-1 gap-2 border-b hairline py-6 md:grid-cols-[auto_1.6fr_auto_1.2fr] md:items-center md:gap-5 md:py-7">
                <span className="font-en-serif text-[11px] italic text-secondary md:text-[12px]">IF</span>
                <p className="text-[14px] text-secondary md:text-[15px]">{r.when}</p>
                <span className="hidden font-en-serif text-[11px] italic text-wood md:block md:text-[12px]">
                  THEN
                </span>
                <p className="font-serif-jp text-[15px] text-ink md:text-[16px]">
                  <span className="font-en-serif mr-2 italic text-wood md:hidden">→</span>
                  {r.then}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <StrategyNote>できることを全部並べるのではなく、詰まっている場所だけを直す。</StrategyNote>
      </div>
    </div>
  );
}
