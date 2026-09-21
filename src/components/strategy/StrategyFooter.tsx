import Link from "next/link";
import { Reveal } from "@/components/Reveal";

const columns = [
  { t: "Website", items: ["Brand", "UX", "Development"] },
  { t: "Growth", items: ["Acquisition", "Content", "Lead Generation", "Nurture", "CRO"] },
  { t: "Expansion", items: ["AI", "CRM", "Sales Support", "Analytics"] },
];

export function StrategyFooter() {
  return (
    <div className="section text-center" style={{ paddingBlock: 140 }}>
      <div className="content mx-auto max-w-2xl">
        <Reveal>
          <p className="label text-[12px]">Final Positioning</p>
          <h2 className="mt-4 text-[26px] leading-[1.5] md:text-[36px]">
            「HP制作をお願いしたい」ではなく、
            <br />
            「Webまわり全部、一度相談したい」へ。
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-14 grid max-w-lg grid-cols-1 gap-8 text-left sm:grid-cols-3">
          {columns.map((c) => (
            <div key={c.t}>
              <p className="font-en-serif text-[12px] italic tracking-[0.1em] text-wood">{c.t}</p>
              <ul className="mt-3 flex flex-col gap-1.5">
                {c.items.map((it) => (
                  <li key={it} className="text-[13px] text-secondary">
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-14">
            <Link
              href="/"
              className="inline-flex items-center bg-forest px-8 py-4 text-[13px] tracking-wide text-base transition-opacity hover:opacity-90"
            >
              灯森工務店サイトを見る
            </Link>
          </div>
          <p className="font-en-serif mt-8 text-[11px] italic tracking-[0.08em] text-secondary/70">
            Concept Project — Strategy Proposal / Not Actual Performance Results
          </p>
        </Reveal>
      </div>
    </div>
  );
}
