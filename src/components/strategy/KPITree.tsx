import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";

const levels = [
  { node: "Contract / Gross Profit", top: true },
  { rate: "Consultation → Contract Rate" },
  { node: "Consultation" },
  { rate: "Lead → Consultation Rate" },
  { node: "Qualified Lead" },
  { rate: "Lead Magnet → Lead Rate" },
  { node: "Lead Magnet" },
  { rate: "Content → Lead Magnet Rate" },
  { node: "Works / Journal" },
  { rate: "Traffic → Content Rate" },
  { node: "Traffic" },
];

export function KPITree() {
  return (
    <div id="kpi" className="section scroll-mt-24 bg-surface">
      <div className="wide">
        <Reveal className="max-w-2xl">
          <SectionLabel>12 — KPI Tree（Sample Data）</SectionLabel>
          <h2 className="text-[24px] leading-[1.5] md:text-[32px]">
            PVではなく、契約数から逆算する。
          </h2>
          <p className="font-en-serif mt-3 text-[12px] italic text-secondary">
            SAMPLE — 実測値ではなく、KPIツリーの構造を示すための仮の項目です。
          </p>
        </Reveal>

        <Reveal delay={0.08} className="mx-auto mt-14 max-w-md">
          <div className="flex flex-col items-center">
            {levels.map((l, i) =>
              "node" in l ? (
                <div
                  key={i}
                  className={`w-full border px-6 py-4 text-center ${
                    l.top ? "border-forest bg-forest text-base" : "border-line-strong text-ink"
                  }`}
                >
                  <p className="font-serif-jp text-[16px] md:text-[17px]">{l.node}</p>
                </div>
              ) : (
                <div key={i} className="flex flex-col items-center py-3">
                  <span className="text-secondary">↑</span>
                  <span className="font-en-serif mt-1 text-[11px] italic text-wood">{l.rate}</span>
                </div>
              )
            )}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="font-serif-jp mx-auto mt-16 max-w-lg text-center text-[20px] leading-[1.7] md:text-[24px]">
            数字を増やすのではなく、
            <br />
            一番細い場所を探す。
          </p>
        </Reveal>
      </div>
    </div>
  );
}
