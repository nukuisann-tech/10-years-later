import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";
import { StrategyNote } from "./StrategyNote";

const channels = [
  {
    name: "Google Search",
    role: "Problem Discovery",
    content: "土地 / 予算 / 後悔",
    destination: "Journal",
  },
  {
    name: "Instagram",
    role: "Desire Creation",
    content: "暮らしの世界観",
    destination: "Works / Journal",
  },
  {
    name: "Google Business Profile",
    role: "Local Trust",
    content: "口コミ / 施工エリア",
    destination: "Contact",
  },
  {
    name: "Referral",
    role: "Warm Introduction",
    content: "OBの暮らしの体験",
    destination: "Consultation",
  },
];

export function ChannelMap() {
  return (
    <div id="acquisition" className="section scroll-mt-24">
      <div className="wide">
        <Reveal className="max-w-2xl">
          <SectionLabel>03 — Acquisition</SectionLabel>
          <h2 className="text-[24px] leading-[1.5] md:text-[32px]">
            チャネルは増やさない。役割を分けて、深くする。
          </h2>
        </Reveal>

        <div className="mt-12 border-t hairline">
          <div className="hidden grid-cols-[1.4fr_1fr_1.2fr_1fr] gap-6 pb-3 text-[11px] tracking-wide text-secondary md:grid">
            <span>Channel</span>
            <span>Role</span>
            <span>Content</span>
            <span>Destination</span>
          </div>
          {channels.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.05}>
              <div className="grid grid-cols-1 gap-2 border-t hairline py-6 md:grid-cols-[1.4fr_1fr_1.2fr_1fr] md:items-center md:gap-6 md:py-7">
                <p className="font-serif-jp text-[17px]">{c.name}</p>
                <p className="font-en-serif text-[13px] italic text-wood">{c.role}</p>
                <p className="text-[13px] text-secondary">{c.content}</p>
                <p className="text-[13px] text-ink">→ {c.destination}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <StrategyNote>チャネルを増やす前に、それぞれの役割を決める。</StrategyNote>
      </div>
    </div>
  );
}
