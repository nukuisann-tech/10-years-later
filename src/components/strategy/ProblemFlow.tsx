import { SectionLabel } from "@/components/SectionLabel";
import { Reveal, ImageReveal } from "@/components/Reveal";

function FlowRow({
  tag,
  tagColor,
  steps,
  highlightLast,
}: {
  tag: string;
  tagColor: string;
  steps: string[];
  highlightLast?: "muted" | "forest";
}) {
  return (
    <div>
      <p className="font-en-serif text-[11px] italic tracking-[0.12em]" style={{ color: tagColor }}>
        {tag}
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-3">
        {steps.map((step, i) => {
          const isLast = i === steps.length - 1;
          return (
            <div key={step} className="flex items-center gap-3">
              <span
                className={`border px-4 py-2.5 text-[13px] md:text-[14px] ${
                  isLast && highlightLast === "forest"
                    ? "border-forest bg-forest text-base"
                    : isLast && highlightLast === "muted"
                      ? "border-line-strong text-secondary"
                      : "border-line-strong text-ink"
                }`}
              >
                {step}
              </span>
              {!isLast && <span className="text-secondary">→</span>}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function ProblemFlow() {
  return (
    <div id="problem" className="section scroll-mt-24">
      <div className="wide">
        <Reveal className="max-w-2xl">
          <SectionLabel>01 — The Problem</SectionLabel>
          <h2 className="text-[24px] leading-[1.5] md:text-[32px]">
            検討期間の途中で、接点が途切れる。
          </h2>
          <p className="mt-5 text-[14px] leading-loose text-secondary">
            注文住宅は、検討期間が長期化しやすい商材だと考えられます（
            <span className="font-en-serif italic text-wood">HYPOTHESIS</span>
            ）。その間、サイトとの接点をどう保ち続けるかが、このGrowth Strategyの出発点です。
          </p>
        </Reveal>

        <ImageReveal delay={0.1} className="mt-14 flex flex-col gap-10 border-t hairline pt-10 md:mt-16 md:pt-12">
          <FlowRow
            tag="Current State"
            tagColor="var(--color-secondary)"
            steps={["Traffic", "Website", "Exit"]}
            highlightLast="muted"
          />
          <FlowRow
            tag="Desired State"
            tagColor="var(--color-wood)"
            steps={["Traffic", "Website", "Lead Capture", "Nurture", "Consultation"]}
            highlightLast="forest"
          />
        </ImageReveal>
      </div>
    </div>
  );
}
