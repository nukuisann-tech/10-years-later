import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";

const items = [
  "年間の施工可能棟数",
  "現在の月間問い合わせ数",
  "問い合わせ → 来場率",
  "来場 → 商談率",
  "商談 → 契約率",
  "平均受注単価 / 粗利益",
  "現在の集客チャネル",
  "商圏",
  "営業担当人数",
  "問い合わせから契約までの平均期間",
  "過去に成約した顧客の流入元",
  "失注理由",
];

export function ValidationSection() {
  return (
    <div id="validation" className="section scroll-mt-24 py-20 md:py-24">
      <div className="wide">
        <Reveal className="max-w-2xl">
          <SectionLabel>00 — Before Implementation</SectionLabel>
          <h2 className="text-[24px] leading-[1.5] md:text-[32px]">
            最初に確認したいこと。
          </h2>
          <p className="mt-4 text-[14px] leading-loose text-secondary">
            このGrowth Strategyは、Webサイトという限られた情報から設計した仮説です。実際の実装に入る前に、以下を確認したうえで施策の優先順位を調整します。
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-4 border-t hairline pt-8 md:mt-12 md:grid-cols-2">
          {items.map((item, i) => (
            <Reveal key={item} delay={i * 0.02} className="flex items-baseline gap-4 border-b hairline py-3">
              <span className="font-en-serif w-7 shrink-0 text-[13px] italic text-wood">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-[14px] text-ink">{item}</span>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="font-serif-jp mt-10 max-w-lg text-[15px] leading-[1.8] text-ink">
            仮説と事実を分けること。それが、施策の優先順位を正しく決めるための出発点です。
          </p>
        </Reveal>
      </div>
    </div>
  );
}
