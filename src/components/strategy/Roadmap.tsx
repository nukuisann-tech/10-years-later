import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";

const columns = [
  {
    stage: "Now",
    emphasis: true,
    items: [
      {
        t: "Foundation",
        d: "Webサイト／Analytics／Search Console／Google Business Profile／Journal／相談導線。",
      },
    ],
  },
  {
    stage: "Next",
    emphasis: false,
    items: [
      { t: "Lead Generation", d: "10 Years Later Home Plan／Lead Capture／Pre-Consultation Form。" },
      { t: "Nurture", d: "メール（またはLINE）ステップ配信、施工事例・予算・土地コンテンツの整備。" },
    ],
  },
  {
    stage: "Later",
    emphasis: false,
    items: [
      { t: "Automation", d: "相談データが十分に貯まってから、AI Concierge／CRM／Lead Scoringを導入。" },
      { t: "Scale", d: "勝ち筋が見えてから、広告・イベントLP・YouTubeへ拡大。" },
    ],
  },
];

export function Roadmap() {
  return (
    <div id="roadmap" className="section scroll-mt-24">
      <div className="wide">
        <Reveal className="max-w-2xl">
          <SectionLabel>09 — Priority Roadmap</SectionLabel>
          <h2 className="text-[24px] leading-[1.5] md:text-[32px]">
            全部やる、ではなく、順番を決める。
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-10 border-t hairline pt-10 md:mt-16 md:grid-cols-3 md:gap-8">
          {columns.map((col, i) => (
            <Reveal key={col.stage} delay={i * 0.06}>
              <p
                className={`font-en-serif italic tracking-[0.08em] ${
                  col.emphasis ? "text-[20px] text-forest" : "text-[15px] text-secondary/70"
                }`}
              >
                {col.stage}
              </p>
              <div className="mt-5 flex flex-col gap-5">
                {col.items.map((item) => (
                  <div key={item.t}>
                    <p
                      className={`font-serif-jp ${
                        col.emphasis ? "text-[18px] text-ink" : "text-[16px] text-ink/85"
                      }`}
                    >
                      {item.t}
                    </p>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-secondary">{item.d}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
