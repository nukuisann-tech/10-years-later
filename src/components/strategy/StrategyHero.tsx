import { Reveal } from "@/components/Reveal";

const journey = ["Website", "Content", "Lead", "Nurture", "Consultation", "Contract", "Referral"];

export function StrategyHero() {
  return (
    <div className="section pb-0 pt-16 md:pt-20">
      <div className="wide">
        <Reveal>
          <p className="label text-[12px]">Industry 01 — Custom Home Builder</p>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-10 md:mt-10 md:grid-cols-2 md:gap-16">
          <Reveal delay={0.05}>
            <p className="font-en-serif text-[11px] italic tracking-[0.14em] text-secondary">
              Website Strategy
            </p>
            <h1 className="font-serif-jp mt-3 text-[26px] leading-[1.5] md:text-[34px]">
              完成日ではなく、10年後を設計する。
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-en-serif text-[11px] italic tracking-[0.14em] text-secondary">
              Growth Strategy
            </p>
            <h2 className="font-serif-jp mt-3 text-[26px] leading-[1.5] md:text-[34px]">
              最初の接点から相談後まで、長い検討期間そのものを設計する。
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="mt-8">
          <span className="inline-flex border border-line-strong px-3 py-1.5 text-[10px] tracking-[0.1em] text-secondary">
            CONCEPT STRATEGY — NOT ACTUAL CLIENT RESULTS
          </span>
        </Reveal>

        {/* Growth Journey line */}
        <Reveal delay={0.2} className="mt-16 overflow-x-auto md:mt-20">
          <div className="flex w-max min-w-full items-center gap-0 border-t hairline pt-6">
            {journey.map((step, i) => (
              <div key={step} className="flex items-center">
                <div className="flex flex-col items-center gap-2 px-4 first:pl-0">
                  <span className="font-en-serif text-[11px] italic tracking-[0.05em] text-ink md:text-[13px]">
                    {step}
                  </span>
                  <span className="text-[10px] text-secondary">{String(i + 1).padStart(2, "0")}</span>
                </div>
                {i < journey.length - 1 && <span className="h-px w-8 bg-line-strong md:w-14" />}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  );
}
