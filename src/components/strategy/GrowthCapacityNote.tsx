import { Reveal } from "@/components/Reveal";

const notAlone = ["Lead Volume"];
const alsoLookAt = ["Lead Quality", "Consultation Quality", "Close Rate", "Gross Profit", "Capacity"];

export function GrowthCapacityNote() {
  return (
    <div className="wide mt-20 md:mt-24">
      <Reveal>
        <p className="font-en-display text-[28px] italic leading-[1.2] text-ink md:text-[40px]">
          More leads is not always growth.
        </p>
        <p className="font-serif-jp mt-3 text-[18px] md:text-[20px]">
          問い合わせを増やせばいい、とは限らない。
        </p>
        <p className="mt-5 max-w-[56ch] text-[14px] leading-loose text-secondary">
          地域工務店には、施工可能棟数・営業人数・対応エリア・設計リソース・現場管理能力という上限（Capacity）があります。年間10棟しか施工できない会社に、質の低い問い合わせを月100件送っても、Growthとは呼べません。
        </p>
      </Reveal>

      <Reveal delay={0.08} className="mt-10 grid grid-cols-1 gap-8 border-t hairline pt-8 md:grid-cols-2">
        <div>
          <p className="font-en-serif text-[11px] italic tracking-[0.1em] text-secondary">
            これだけでは測らない
          </p>
          <div className="mt-3 flex flex-col gap-2">
            {notAlone.map((n) => (
              <p key={n} className="text-[15px] text-secondary line-through decoration-line-strong">
                {n}
              </p>
            ))}
          </div>
        </div>
        <div>
          <p className="font-en-serif text-[11px] italic tracking-[0.1em] text-wood">
            あわせて見るべきもの
          </p>
          <div className="mt-3 flex flex-col gap-2">
            {alsoLookAt.map((n) => (
              <p key={n} className="font-serif-jp text-[15px] text-ink">
                {n}
              </p>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
}
