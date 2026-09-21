import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";

const steps = [
  { no: "01", title: "相談", text: "今の暮らしで感じていることを、まず聞かせてください。" },
  { no: "02", title: "暮らしを聞く", text: "一日の過ごし方と、譲れない条件を時間をかけて。" },
  { no: "03", title: "土地・環境を見る", text: "日当たりと風の通りを、実際に歩いて確認。" },
  { no: "04", title: "設計", text: "間取り・性能・予算をすり合わせていきます。" },
  { no: "05", title: "施工", text: "見えなくなる場所ほど、丁寧に確認しながら。" },
  { no: "06", title: "完成", text: "ゴールではなく、新しい暮らしのはじまり。" },
];

export function ProcessSection() {
  return (
    <section className="section bg-surface">
      <div className="wide">
        <Reveal className="mb-16 max-w-2xl md:mb-20">
          <SectionLabel>Process</SectionLabel>
          <h2 className="text-[28px] leading-[1.5] md:text-[36px]">
            家づくりは、
            <br />
            話すことから始まります。
          </h2>
        </Reveal>

        <div className="border-t hairline">
          {steps.map((s, i) => (
            <Reveal key={s.no} delay={i * 0.04}>
              <div className="grid grid-cols-1 gap-2 border-b hairline py-7 md:grid-cols-12 md:items-baseline md:gap-8 md:py-8">
                <p className="font-en-serif text-[15px] italic text-wood md:col-span-2">
                  {s.no}
                </p>
                <p className="font-serif-jp text-[19px] text-ink md:col-span-3 md:text-[20px]">
                  {s.title}
                </p>
                <p className="text-[14px] leading-relaxed text-secondary md:col-span-7 md:text-[14px]">
                  {s.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-10 bg-forest px-8 py-16 text-base md:mt-14 md:px-16 md:py-24">
            <p className="font-en-serif text-[13px] italic tracking-[0.2em] text-base/70">
              07
            </p>
            <p className="font-en-display mt-2 text-[48px] italic leading-none tracking-tight md:text-[80px]">
              After Handover
            </p>
            <h3 className="font-serif-jp mt-6 text-[24px] md:text-[28px]">その後こそ、本題です。</h3>
            <p className="mt-5 max-w-xl text-[14px] leading-loose text-base/85 md:text-[15px]">
              定期点検といつでも相談できる窓口を用意し、10年後も、20年後も、
              変わらず頼れる存在でいることをお約束します。
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
