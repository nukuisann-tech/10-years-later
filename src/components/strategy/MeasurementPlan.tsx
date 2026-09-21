import { Reveal } from "@/components/Reveal";

const events = [
  "Journal View",
  "Works View",
  "Lead Magnet Start",
  "Lead Magnet Complete",
  "Consultation View",
  "Form Start",
  "Form Submit",
  "Visit Booking",
];

const qualityMetrics = [
  "Lead Quality",
  "Show-up Rate",
  "Consultation → Proposal",
  "Proposal → Contract",
  "Average Order Value",
  "Gross Profit",
  "Referral Rate",
];

export function MeasurementPlan() {
  return (
    <div className="wide mt-20 md:mt-24">
      <Reveal>
        <p className="font-serif-jp text-[19px] leading-[1.7] md:text-[22px]">
          改善する前に、まず測れる状態をつくる。
        </p>
        <p className="font-en-serif mt-2 text-[12px] italic tracking-[0.08em] text-wood">
          Measurement Before Optimization
        </p>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-10 border-t hairline pt-8 md:grid-cols-2">
        <Reveal delay={0.06}>
          <p className="font-en-serif text-[11px] italic tracking-[0.1em] text-secondary">
            Website Events（計測すべき行動）
          </p>
          <ul className="mt-4 flex flex-col gap-2">
            {events.map((e) => (
              <li key={e} className="text-[14px] text-ink">
                {e}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="font-en-serif text-[11px] italic tracking-[0.1em] text-wood">
            Quality Metrics（量だけでなく質を見る指標）
          </p>
          <ul className="mt-4 flex flex-col gap-2">
            {qualityMetrics.map((q) => (
              <li key={q} className="font-serif-jp text-[14px] text-ink">
                {q}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
      <p className="mt-6 text-[12px] leading-relaxed text-secondary">
        ※ 目標数値は架空の予測値として設定しません。まず何を測るべきかだけを設計しています。
      </p>
    </div>
  );
}
