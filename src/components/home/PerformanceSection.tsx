import Link from "next/link";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";

const specs = [
  {
    spec: "耐震等級3",
    benefit: "地震の夜も、家族が安心して眠れる強さ。",
  },
  {
    spec: "断熱等性能等級6",
    benefit: "冬の朝、布団から出るのがつらくない暖かさ。",
  },
  {
    spec: "C値 0.5以下",
    benefit: "隙間風にごまかされない、静かで均一な室温。",
  },
  {
    spec: "長期優良住宅 対応",
    benefit: "10年後も、資産として安心して住み継げる基準。",
  },
];

export function PerformanceSection() {
  return (
    <section className="section bg-surface">
      <div className="wide">
        <Reveal className="max-w-2xl">
          <SectionLabel>Performance</SectionLabel>
          <h2 className="text-[28px] leading-[1.5] md:text-[36px]">
            心地よさには、
            <br />
            理由があります。
          </h2>
          <p className="mt-6 text-[13px] leading-loose text-secondary">
            ※本サイトはポートフォリオ用の架空の工務店です。以下は想定仕様（SAMPLE
            SPEC）であり、実在する建物の実績値ではありません。
          </p>
        </Reveal>

        <div className="mt-16 border-t hairline md:mt-20">
          {specs.map((s, i) => (
            <Reveal key={s.spec} delay={i * 0.05}>
              <div className="grid grid-cols-1 gap-3 border-b hairline py-7 md:grid-cols-12 md:items-center md:gap-8 md:py-8">
                <p className="font-serif-jp text-[19px] text-ink md:col-span-4 md:text-[21px]">
                  {s.spec}
                </p>
                <p className="text-[14px] leading-relaxed text-secondary md:col-span-8 md:text-[15px]">
                  {s.benefit}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <Link
            href="/performance"
            className="mt-12 inline-flex items-center text-[13px] tracking-wide text-ink underline decoration-line underline-offset-8 transition-colors hover:decoration-wood md:mt-16"
          >
            性能についてもっと詳しく
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
