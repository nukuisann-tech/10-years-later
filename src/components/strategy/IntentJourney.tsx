import { Reveal } from "@/components/Reveal";
import { StrategyNote } from "./StrategyNote";

const tiers = [
  { tier: "Low", action: "Browse", items: ["Works", "Journal"] },
  { tier: "Middle", action: "Identify", items: ["Home Plan", "Diagnosis", "Email / LINE"] },
  { tier: "High", action: "Consult", items: ["Consultation", "Visit"] },
];

export function IntentJourney() {
  return (
    <div className="wide mt-20 md:mt-24">
      <Reveal>
        <p className="label text-[12px]">Lead Capture by Intent</p>
        <h3 className="font-serif-jp mt-3 text-[19px] md:text-[22px]">
          温度が低い人にも、出口を用意する。
        </h3>
      </Reveal>

      <Reveal delay={0.08} className="mt-10 overflow-x-auto">
        <div className="flex w-max min-w-full items-stretch gap-0">
          {tiers.map((t, i) => (
            <div key={t.tier} className="flex items-stretch">
              <div className="w-[240px] border-t-2 border-line-strong pt-5 md:w-[300px]">
                <p className="font-en-serif text-[13px] italic text-wood">{t.tier} Intent</p>
                <p className="font-serif-jp mt-2 text-[17px]">{t.action}</p>
                <ul className="mt-3 flex flex-col gap-1.5">
                  {t.items.map((it) => (
                    <li key={it} className="text-[13px] text-secondary">
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
              {i < tiers.length - 1 && (
                <div className="flex w-16 items-start pt-8 text-secondary md:w-24">
                  <span className="mx-auto">→</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </Reveal>

      <StrategyNote>全員に問い合わせを求めない。</StrategyNote>
    </div>
  );
}
