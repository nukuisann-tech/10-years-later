import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal, ImageReveal, FadeText } from "@/components/Reveal";
import { image } from "@/lib/images";

export const metadata: Metadata = {
  title: "性能",
  description:
    "耐震・断熱・気密。数字を、暮らしの言葉に翻訳しています。灯森工務店の想定仕様（SAMPLE SPEC）のご紹介。",
};

const rows = [
  {
    en: "Earthquake Resistance",
    name: "耐震等級3",
    detail: "耐震等級3を想定した、地震への備えを考えた仕様です。",
    benefit: "大きな地震の夜も、家族が安心して眠れる強さを。",
  },
  {
    en: "Insulation",
    name: "断熱等性能等級6",
    detail: "国の断熱等級のうち、上位に位置する性能（想定仕様）。",
    benefit: "冬の朝、布団から出るのがつらくない室温を。",
  },
];

const bigNumbers = [
  {
    en: "Thermal Transmittance",
    value: "UA 0.46",
    unit: "以下",
    benefit: "冷暖房に頼りすぎず、一年を通して穏やかな室温を。",
  },
  {
    en: "Airtightness",
    value: "C値 0.5",
    unit: "以下",
    benefit: "隙間風にごまかされない、静かで均一な室内空気を。",
  },
];

const withPhoto = [
  {
    en: "Ventilation",
    name: "24時間換気（第一種）",
    benefit: "花粉やPM2.5を抑えながら、きれいな空気を保つ。",
    img: "houseBWindowSeat" as const,
    alt: "柔らかな光が差し込む、窓辺の小さな読書スペース",
  },
  {
    en: "Longevity",
    name: "長期優良住宅 対応",
    benefit: "10年後も、資産として安心して住み続けられる基準を。",
    img: "houseAEntrance" as const,
    alt: "木格子のスクリーンごしに灯りがともる、夜の玄関まわり",
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

        {/* Group 1: horizontal editorial rows */}
        <div className="mt-16 border-t hairline md:mt-20">
          {rows.map((s, i) => (
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

        {/* Group 2: giant numbers */}
        <div className="mt-20 grid grid-cols-1 gap-12 md:mt-28 md:grid-cols-2 md:gap-16">
          {bigNumbers.map((n, i) => (
            <FadeText key={n.en} delay={i * 0.06}>
              <p className="font-en-serif text-[12px] italic tracking-[0.12em] text-wood">
                {String(i + 3).padStart(2, "0")} — {n.en}
              </p>
              <p className="font-en-display mt-2 text-[56px] italic leading-none tracking-tight text-ink md:text-[72px]">
                {n.value}
                <span className="font-serif-jp ml-2 text-[20px] not-italic text-secondary md:text-[24px]">
                  {n.unit}
                </span>
              </p>
              <p className="mt-5 max-w-xs text-[14px] leading-relaxed text-secondary md:text-[15px]">
                {n.benefit}
              </p>
            </FadeText>
          ))}
        </div>

        {/* Group 3: photo + spec pairing */}
        <div className="mt-20 flex flex-col gap-16 md:mt-28 md:gap-20">
          {withPhoto.map((s, i) => (
            <div
              key={s.en}
              className={`flex flex-col gap-8 md:items-center md:gap-14 ${
                i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              <ImageReveal className="md:w-1/2">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={image(s.img, 1200)}
                    alt={s.alt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </ImageReveal>
              <Reveal delay={0.08} className="md:w-1/2">
                <p className="font-en-serif text-[12px] italic tracking-[0.12em] text-wood">
                  {String(i + 5).padStart(2, "0")} — {s.en}
                </p>
                <p className="font-serif-jp mt-3 text-[22px] text-ink md:text-[24px]">
                  {s.name}
                </p>
                <p className="mt-4 max-w-sm text-[14px] leading-relaxed text-secondary md:text-[15px]">
                  {s.benefit}
                </p>
              </Reveal>
            </div>
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
