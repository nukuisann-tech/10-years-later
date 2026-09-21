import { SectionLabel } from "@/components/SectionLabel";
import { Reveal, ImageReveal } from "@/components/Reveal";

export function LeadMagnetMockup() {
  return (
    <div id="lead-magnet" className="section scroll-mt-24">
      <div className="wide">
        <Reveal className="max-w-2xl">
          <SectionLabel>05 — Flagship Lead Magnet</SectionLabel>
          <h2 className="text-[24px] leading-[1.5] md:text-[32px]">
            施工事例5本を、診断の答えに変える。
          </h2>
          <p className="mt-4 text-[14px] leading-loose text-secondary">
            新しいコンテンツを作らず、既存の5つの施工事例をリード獲得の仕組みに変える「10 Years Later Home Plan」。以下はその
            <span className="font-en-serif italic text-wood"> Concept Mockup</span>
            です。
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-3">
          {/* Cover */}
          <ImageReveal>
            <div className="flex aspect-[3/4] flex-col justify-between bg-ink p-7 text-base">
              <p className="font-en-serif text-[11px] italic tracking-[0.1em] opacity-70">
                Cover — Concept Mockup
              </p>
              <div>
                <p className="font-en-display text-[34px] italic leading-[0.95]">
                  10
                  <br />
                  Years
                  <br />
                  Later
                </p>
                <p className="font-serif-jp mt-4 text-[14px]">HOME PLAN</p>
                <p className="mt-1 text-[11px] opacity-70">10年後から逆算する家づくり設計ノート</p>
              </div>
            </div>
          </ImageReveal>

          {/* Inner page */}
          <ImageReveal delay={0.08}>
            <div className="flex aspect-[3/4] flex-col justify-between border border-line-strong bg-surface p-7">
              <p className="font-en-serif text-[11px] italic tracking-[0.1em] text-secondary">
                Inside — Concept Mockup
              </p>
              <div className="flex flex-col gap-5">
                <div>
                  <p className="font-en-serif text-[11px] italic text-wood">Q1</p>
                  <p className="font-serif-jp mt-1 text-[14px] leading-[1.6]">
                    今の暮らしで、一番変えたいことは？
                  </p>
                </div>
                <div>
                  <p className="font-en-serif text-[11px] italic text-wood">Q2</p>
                  <p className="font-serif-jp mt-1 text-[14px] leading-[1.6]">
                    10年後、家族はどう変わっている？
                  </p>
                </div>
                <div>
                  <p className="font-en-serif text-[11px] italic text-wood">Q3</p>
                  <p className="font-serif-jp mt-1 text-[14px] leading-[1.6]">
                    何を、一番優先したい？
                  </p>
                </div>
              </div>
            </div>
          </ImageReveal>

          {/* Result */}
          <ImageReveal delay={0.16}>
            <div className="flex aspect-[3/4] flex-col justify-between bg-forest p-7 text-base">
              <p className="font-en-serif text-[11px] italic tracking-[0.1em] opacity-70">
                Result — Concept Mockup
              </p>
              <div>
                <p className="font-en-serif text-[13px] italic tracking-[0.08em]">
                  Your Priorities
                </p>
                <div className="mt-4 flex flex-col gap-3">
                  <p className="font-serif-jp text-[15px]">01 — 家族動線</p>
                  <p className="font-serif-jp text-[15px]">02 — 土地</p>
                  <p className="font-serif-jp text-[15px]">03 — 予算</p>
                </div>
              </div>
            </div>
          </ImageReveal>
        </div>

        <Reveal delay={0.1} className="mt-8">
          <p className="max-w-[52ch] text-[14px] leading-loose text-secondary">
            CTAは「資料をもらう」ではなく
            <span className="font-serif-jp text-ink">「10年後の暮らしを整理してみる」</span>。
          </p>
        </Reveal>
      </div>
    </div>
  );
}
