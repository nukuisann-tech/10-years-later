import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";
import { StrategyNote } from "./StrategyNote";

const flow = ["User", "AI Concierge", "Qualification", "Recommended Content", "Sales Handoff"];

const does = ["FAQへの回答", "情報のナビゲーション", "コンテンツ推薦", "事前ヒアリング（Pre-Qualification）"];
const doesNot = ["住宅ローンの判断", "法律判断", "構造安全性の判断", "正式な見積り", "契約の判断"];

export function AIPrototype() {
  return (
    <div id="ai" className="section scroll-mt-24">
      <div className="wide">
        <Reveal className="max-w-2xl">
          <SectionLabel>08 — 10 Years Later Concierge</SectionLabel>
          <h2 className="text-[24px] leading-[1.5] md:text-[32px]">
            接客ではなく、ナビゲーション。
          </h2>
        </Reveal>

        {/* Flow strip */}
        <Reveal delay={0.06} className="mt-10 overflow-x-auto">
          <div className="flex w-max min-w-full items-center gap-3 border-t hairline pt-6">
            {flow.map((step, i) => (
              <div key={step} className="flex items-center gap-3">
                <span className="font-en-serif text-[12px] italic text-ink md:text-[13px]">
                  {step}
                </span>
                {i < flow.length - 1 && <span className="text-secondary">→</span>}
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-12 md:mt-14 md:grid-cols-[1.3fr_1fr]">
          {/* Chat prototype */}
          <Reveal delay={0.1} className="flex flex-col gap-3">
            <div className="rounded-tl-[2px] bg-surface p-4 text-[14px]">
              <span className="font-en-serif mb-1.5 block text-[11px] italic text-secondary">
                Concierge
              </span>
              まずは3つだけ教えてください。土地はもうお持ちですか？
            </div>
            <div className="self-end rounded-tr-[2px] bg-forest p-4 text-[14px] text-base">
              まだです。土地から探しています。
            </div>
            <div className="rounded-tl-[2px] bg-surface p-4 text-[14px]">
              <span className="font-en-serif mb-1.5 block text-[11px] italic text-secondary">
                Concierge
              </span>
              今の段階では、間取りより先に「土地と予算のバランス」を整理するのがおすすめです。関連するJournal記事をお送りしますね。
            </div>
            <div className="self-end rounded-tr-[2px] bg-forest p-4 text-[14px] text-base">
              お願いします。
            </div>
            <div className="rounded-tl-[2px] bg-surface p-4 text-[14px]">
              <span className="font-en-serif mb-1.5 block text-[11px] italic text-secondary">
                Concierge → Sales
              </span>
              土地：なし／時期：1〜2年以内／予算：未定 として、営業担当に共有しました。
            </div>
          </Reveal>

          {/* What AI does / doesn't + when */}
          <Reveal delay={0.15} className="flex flex-col gap-8">
            <div>
              <p className="font-en-serif text-[11px] italic tracking-[0.1em] text-wood">
                What AI Does
              </p>
              <ul className="mt-3 flex flex-col gap-1.5">
                {does.map((d) => (
                  <li key={d} className="text-[14px] text-ink">
                    {d}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-en-serif text-[11px] italic tracking-[0.1em] text-secondary">
                What AI Does Not Do
              </p>
              <ul className="mt-3 flex flex-col gap-1.5">
                {doesNot.map((d) => (
                  <li key={d} className="text-[14px] text-secondary line-through decoration-line-strong">
                    {d}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-t hairline pt-6">
              <p className="font-en-serif text-[11px] italic tracking-[0.1em] text-forest">
                Human Handoff
              </p>
              <p className="mt-3 text-[13px] leading-relaxed text-ink">
                AI → 判断が必要な質問 → 人（設計・営業担当）
              </p>
              <p className="mt-1.5 text-[12px] leading-relaxed text-secondary">
                重要な判断は、常に人が引き継ぐ。
              </p>
            </div>
            <div className="border-t hairline pt-6">
              <p className="font-en-serif text-[11px] italic tracking-[0.1em] text-wood">
                When to Implement
              </p>
              <p className="mt-3 text-[14px] leading-relaxed text-secondary">
                FAQや相談データが十分に蓄積した後。導入すること自体を目的にしない。
              </p>
            </div>
          </Reveal>
        </div>

        <StrategyNote>AIは人を減らすためではなく、人が必要な相談に集中するために使う。</StrategyNote>
      </div>
    </div>
  );
}
