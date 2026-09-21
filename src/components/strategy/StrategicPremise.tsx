import { Reveal } from "@/components/Reveal";

const rows = [
  { label: "想定企業", value: "地域密着型の注文住宅工務店" },
  { label: "主要顧客", value: "30〜40代の注文住宅検討世帯" },
  {
    label: "主な事業課題（仮説）",
    value: "Webサイトへの訪問は獲得できても、相談前の検討期間に継続的な接点を持てていない",
  },
  {
    label: "Growth Objective",
    value: "サイト訪問を「一度きりの閲覧」から「継続的な見込み顧客接点」へ変える",
  },
];

export function StrategicPremise() {
  return (
    <div className="section py-20 md:py-24">
      <div className="wide">
        <Reveal className="border border-line-strong p-8 md:p-12">
          <p className="label text-[11px]">Strategic Premise</p>
          <p className="mt-4 max-w-[64ch] text-[13px] leading-relaxed text-secondary">
            以下は実在企業への調査結果ではなく、Concept Project上でこの戦略が前提とする仮説です。灯森工務店という架空の工務店を、次のような状況にある会社だと仮定して設計しています。
          </p>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10">
            {rows.map((r) => (
              <div key={r.label}>
                <p className="font-en-serif text-[11px] italic tracking-[0.1em] text-wood">
                  {r.label}
                </p>
                <p className="font-serif-jp mt-2 text-[15px] leading-[1.7] text-ink">
                  {r.value}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  );
}
