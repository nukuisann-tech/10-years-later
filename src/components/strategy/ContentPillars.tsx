import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";

const pillars = [
  { p: "Pillar A", tag: "後悔を減らす", question: "「建てた後に、失敗したくない。」" },
  { p: "Pillar B", tag: "暮らしを想像する", question: "「自分たちには、どんな家が合う？」" },
  { p: "Pillar C", tag: "数字を理解する", question: "「性能やお金を、ちゃんと理解したい。」" },
  { p: "Pillar D", tag: "人を知る", question: "「誰に、家づくりを任せるの？」" },
];

export function ContentPillars() {
  return (
    <div id="content" className="section scroll-mt-24 bg-surface">
      <div className="wide">
        <Reveal className="max-w-2xl">
          <SectionLabel>04 — Content, as Customer Decision Support</SectionLabel>
          <h2 className="text-[24px] leading-[1.5] md:text-[32px]">
            コンテンツの役割は、顧客の問いに答えること。
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-12 md:mt-16 md:grid-cols-2">
          {pillars.map((item, i) => (
            <Reveal key={item.p} delay={i * 0.05} className="border-l-2 border-line-strong pl-6">
              <p className="font-en-serif text-[12px] italic tracking-[0.1em] text-wood">
                {item.p} — {item.tag}
              </p>
              <p className="font-serif-jp mt-3 text-[19px] leading-[1.6] md:text-[21px]">
                {item.question}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
