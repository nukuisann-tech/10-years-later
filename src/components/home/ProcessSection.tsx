import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";

const steps = [
  { no: "01", title: "相談", text: "まずは形式張らず、今の暮らしで感じていることをお聞かせください。" },
  { no: "02", title: "暮らしを聞く", text: "一日の過ごし方、家事の分担、譲れない条件を時間をかけて伺います。" },
  { no: "03", title: "土地・環境を見る", text: "日当たり、風の通り、周辺環境を実際に歩いて確認します。" },
  { no: "04", title: "設計", text: "ヒアリングをもとに、間取り・性能・予算をすり合わせていきます。" },
  { no: "05", title: "施工", text: "見えなくなる場所ほど、現場で確認しながら丁寧につくります。" },
  { no: "06", title: "完成", text: "お引き渡しの日は、ゴールではなく新しい暮らしのはじまりです。" },
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
          <div className="mt-10 bg-forest px-8 py-10 text-base md:mt-14 md:px-14 md:py-14">
            <p className="font-en-serif text-[15px] italic text-base/80">07</p>
            <h3 className="font-serif-jp mt-3 text-[22px] md:text-[26px]">その後</h3>
            <p className="mt-5 max-w-xl text-[14px] leading-loose text-base/85 md:text-[15px]">
              建てて終わりではありません。定期点検と、いつでも相談できる窓口を用意し、
              10年後も、20年後も、変わらず頼れる存在でいることをお約束します。
              家づくりで一番大切なのは、実はお引き渡しのあとの時間だと考えています。
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
