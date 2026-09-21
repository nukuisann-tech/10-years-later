import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";
import { StrategyNote } from "./StrategyNote";

const assets = [
  { asset: "Works", current: "施工事例", role: "比較検討 / Trust", next: "Instagram / Lead Magnet / Nurture" },
  { asset: "Journal", current: "SEOコンテンツ", role: "Search Acquisition / Education", next: "Nurture / 関連記事 / 相談CTA" },
  { asset: "Performance", current: "性能説明", role: "Rational Proof", next: "SEO / Sales Support / FAQ" },
  { asset: "People", current: "スタッフ紹介", role: "Trust", next: "Instagram / Nurture / Consultation" },
  { asset: "10 Years Later", current: "Brand Concept", role: "Differentiation", next: "Lead Magnet / Referral Story" },
];

export function AssetLeverageMap() {
  return (
    <div id="assets" className="section scroll-mt-24 bg-surface">
      <div className="wide">
        <Reveal className="max-w-2xl">
          <SectionLabel>05 — Existing Assets</SectionLabel>
          <h2 className="text-[24px] leading-[1.5] md:text-[32px]">
            今ある資産を、どう成長に変えるか。
          </h2>
          <p className="mt-4 text-[14px] leading-loose text-secondary">
            Growth施策をゼロから作るのではなく、すでに制作したWebsiteの資産を転用する。
          </p>
        </Reveal>

        <div className="mt-12 border-t hairline">
          <div className="hidden grid-cols-[1fr_1.2fr_1.4fr_1.6fr] gap-6 pb-3 text-[11px] tracking-wide text-secondary md:grid">
            <span>Website Asset</span>
            <span>現在</span>
            <span>Growth Role</span>
            <span>Next Use</span>
          </div>
          {assets.map((a, i) => (
            <Reveal key={a.asset} delay={i * 0.05}>
              <div className="grid grid-cols-1 gap-2 border-t hairline py-6 md:grid-cols-[1fr_1.2fr_1.4fr_1.6fr] md:items-center md:gap-6 md:py-7">
                <p className="font-serif-jp text-[17px]">{a.asset}</p>
                <p className="text-[13px] text-secondary">{a.current}</p>
                <p className="font-en-serif text-[13px] italic text-wood">{a.role}</p>
                <p className="text-[13px] text-ink">{a.next}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <StrategyNote>施策を増やしているのではなく、既存投資を再利用している。</StrategyNote>
      </div>
    </div>
  );
}
