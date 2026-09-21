import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";

const rows = [
  { label: "Business Problem", value: "長い検討期間で、サイトとの接点が切れる。" },
  { label: "Core Strategy", value: "Websiteを、Lead獲得とNurtureの中心に置く。" },
  { label: "Primary Channels", value: "Search / Instagram / Local / Referral" },
  { label: "Flagship Asset", value: "10 Years Later Home Plan" },
  { label: "Nurture", value: "Content → Trust → Consultation" },
  { label: "Automation", value: "データが蓄積してから導入する。" },
  { label: "Core KPI", value: "Qualified Consultation / Contract / Gross Profit" },
  { label: "Growth Loop", value: "Customer Story → Content → Next Customer" },
];

export function StrategySummary() {
  return (
    <div id="summary" className="section scroll-mt-24">
      <div className="wide">
        <Reveal className="max-w-2xl">
          <SectionLabel>14 — Strategy in One Page</SectionLabel>
          <h2 className="text-[24px] leading-[1.5] md:text-[32px]">
            このページ全体を、30秒で振り返る。
          </h2>
        </Reveal>

        <Reveal delay={0.08} className="mt-10 border border-line-strong p-8 md:mt-12 md:p-12">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-x-12 md:gap-y-8">
            {rows.map((r) => (
              <div key={r.label}>
                <p className="font-en-serif text-[11px] italic tracking-[0.1em] text-wood">
                  {r.label}
                </p>
                <p className="font-serif-jp mt-1.5 text-[15px] leading-[1.7] text-ink">
                  {r.value}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  );
}
