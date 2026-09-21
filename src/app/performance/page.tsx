import type { Metadata } from "next";
import Link from "next/link";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "性能",
  description:
    "耐震・断熱・気密。数字を、暮らしの言葉に翻訳しています。灯森工務店の想定仕様（SAMPLE SPEC）のご紹介。",
};

const specs = [
  {
    en: "Earthquake Resistance",
    name: "耐震等級3",
    detail: "防災拠点と同等の、最高等級の耐震性能（想定仕様）。",
    benefit: "大きな地震の夜も、家族が安心して眠れる強さを。",
  },
  {
    en: "Insulation",
    name: "断熱等性能等級6",
    detail: "国の断熱等級のうち、上位に位置する性能（想定仕様）。",
    benefit: "冬の朝、布団から出るのがつらくない室温を。",
  },
  {
    en: "Thermal Transmittance",
    name: "UA値 0.46以下",
    detail: "外皮平均熱貫流率。数値が低いほど熱が逃げにくい（想定値）。",
    benefit: "冷暖房に頼りすぎず、一年を通して穏やかな室温を。",
  },
  {
    en: "Airtightness",
    name: "C値 0.5以下",
    detail: "相当隙間面積。建物の気密性能を示す数値（想定値）。",
    benefit: "隙間風にごまかされない、静かで均一な室内空気を。",
  },
  {
    en: "Ventilation",
    name: "24時間換気（第一種）",
    detail: "熱交換型の機械換気で、温度を保ちながら換気（想定仕様）。",
    benefit: "花粉やPM2.5を抑えながら、きれいな空気を保つ。",
  },
  {
    en: "Longevity",
    name: "長期優良住宅 対応",
    detail: "耐震・省エネ・維持管理のしやすさに対応（想定仕様）。",
    benefit: "10年後も、資産として安心して住み続けられる基準を。",
  },
];

export default function PerformancePage() {
  return (
    <div className="section pt-16 md:pt-20">
      <div className="wide">
        <Reveal className="max-w-2xl">
          <SectionLabel>Performance</SectionLabel>
          <h1 className="text-[32px] leading-[1.6] md:text-[44px] md:leading-[1.55]">
            心地よさには、
            <br />
            理由があります。
          </h1>
          <p className="mt-6 text-[14px] leading-loose text-secondary md:text-[15px]">
            数字だけを並べても、暮らしがどう変わるのかは伝わりません。
            性能の先にある体感を、具体的な言葉に翻訳してお伝えします。
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 border border-line bg-surface px-6 py-5 md:mt-14">
            <p className="font-en-serif text-[12px] italic tracking-[0.14em] text-secondary">
              SAMPLE SPEC — 架空の工務店による想定仕様です。実在する建物の実績値ではありません。
            </p>
          </div>
        </Reveal>

        <div className="mt-16 border-t hairline md:mt-20">
          {specs.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.04}>
              <div className="grid grid-cols-1 gap-3 border-b hairline py-8 md:grid-cols-12 md:gap-8 md:py-10">
                <div className="md:col-span-4">
                  <p className="font-en-serif text-[12px] italic tracking-[0.12em] text-wood">
                    {String(i + 1).padStart(2, "0")} — {s.en}
                  </p>
                  <p className="font-serif-jp mt-2 text-[20px] text-ink md:text-[22px]">
                    {s.name}
                  </p>
                  <p className="mt-2 text-[12px] leading-relaxed text-secondary">
                    {s.detail}
                  </p>
                </div>
                <div className="md:col-span-8 md:flex md:items-center">
                  <p className="text-[15px] leading-relaxed text-ink md:text-[16px]">
                    {s.benefit}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-16 flex flex-col items-start gap-6 border-t hairline pt-12 md:mt-20 md:flex-row md:items-center md:justify-between">
            <p className="max-w-md text-[14px] leading-loose text-secondary">
              数値の根拠や、ご希望に応じた仕様のカスタマイズについても、
              個別にご相談いただけます。
            </p>
            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center bg-forest px-8 py-4 text-[13px] tracking-wide text-base transition-opacity hover:opacity-90"
            >
              性能について相談する
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
