import Link from "next/link";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";

const specs = [
  {
    en: "Earthquake Resistance",
    spec: "耐震等級3",
    benefit: "地震の夜も、家族が安心して眠れる強さ。",
  },
  {
    en: "Insulation",
    spec: "断熱等性能等級6",
    benefit: "冬の朝、布団から出るのがつらくない暖かさ。",
  },
  {
    en: "Airtightness",
    spec: "C値 0.5以下",
    benefit: "隙間風にごまかされない、静かで均一な室温。",
  },
  {
    en: "Longevity",
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
          <p className="mt-6 font-en-serif text-[12px] italic tracking-[0.14em] text-secondary">
            SAMPLE SPEC — ポートフォリオ用の想定仕様です
          </p>
        </Reveal>

        <div className="mt-16 border-t hairline md:mt-20">
          {specs.map((s, i) => (
            <Reveal key={s.spec} delay={i * 0.05}>
              <div className="grid grid-cols-1 gap-2 border-b hairline py-8 md:grid-cols-12 md:items-center md:gap-8 md:py-9">
                <p className="font-en-serif text-[13px] italic tracking-[0.12em] text-wood md:col-span-3">
                  {String(i + 1).padStart(2, "0")} — {s.en}
                </p>
                <p className="font-serif-jp text-[19px] text-ink md:col-span-3 md:text-[20px]">
                  {s.spec}
                </p>
                <p className="text-[14px] leading-relaxed text-secondary md:col-span-6 md:text-[15px]">
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
