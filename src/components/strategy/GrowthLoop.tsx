import { Reveal, ImageReveal } from "@/components/Reveal";

const nodes = [
  "良い家を建てる",
  "暮らしが生まれる",
  "その暮らしを取材する",
  "Works / Journal / Instagramになる",
  "新しい家族が見つける",
  "相談する",
];

export function GrowthLoop() {
  return (
    <div id="loop" className="section scroll-mt-24 bg-ink text-base">
      <div className="wide">
        <Reveal>
          <p className="font-en-serif text-[12px] italic tracking-[0.14em] text-base/60">
            11 — The Growth Loop
          </p>
          <h2 className="font-serif-jp mt-4 text-[24px] leading-[1.5] md:text-[32px]">
            この循環が、灯森工務店Growth Strategyの結論です。
          </h2>
        </Reveal>

        <ImageReveal delay={0.1} className="mt-14">
          <div className="mx-auto flex max-w-2xl flex-col items-center">
            {nodes.map((n) => (
              <div key={n} className="flex flex-col items-center">
                <p className="font-serif-jp text-[16px] md:text-[18px]">{n}</p>
                <span className="my-3 text-base/40">↓</span>
              </div>
            ))}
            <p className="font-serif-jp text-[16px] md:text-[18px]">また良い家を建てる</p>
          </div>
        </ImageReveal>

        <Reveal delay={0.15} className="mx-auto mt-16 max-w-lg text-center md:mt-20">
          <p className="font-en-display text-[24px] italic leading-[1.4] md:text-[30px]">
            Product creates content.
            <br />
            Content creates the next customer.
          </p>
        </Reveal>
      </div>
    </div>
  );
}
