import type { Metadata } from "next";
import Link from "next/link";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal, ImageReveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Growth Strategy",
  description:
    "灯森工務店(10 Years Later)のグロース戦略ケーススタディ。Webサイトを起点にした集客〜リード獲得〜ナーチャー〜成約〜紹介までの導線設計。",
  robots: { index: false, follow: false },
};

export default function GrowthStrategyPage() {
  return (
    <div>
      {/* HERO */}
      <div className="section pb-16 pt-16 md:pt-20">
        <div className="wide">
          <Reveal>
            <SectionLabel>Industry 01 — Custom Home Builder</SectionLabel>
            <h1 className="max-w-lg text-[32px] leading-[1.4] md:text-[52px]">
              Webサイトを作った、で終わらせない。
            </h1>
            <p className="font-en-serif mt-5 text-[18px] italic text-wood md:text-[22px]">
              Growth Strategy for TOMORI KOMUTEN
            </p>
            <p className="content mt-8 max-w-2xl text-[15px] leading-loose text-secondary" style={{ paddingInline: 0 }}>
              灯森工務店（10 Years Later）は、実在企業の受注実績ではなく、Web制作・ブランド設計のポートフォリオとして制作した架空プロジェクトです。このページは、そのサイトを起点に「工務店の売上につながる仕組み」をどう設計するかをまとめたケーススタディです。
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-6">
              <Link
                href="/"
                className="inline-flex items-center bg-forest px-7 py-3.5 text-[13px] tracking-wide text-base transition-opacity hover:opacity-90"
              >
                サイト本体を見る
              </Link>
              <span className="border border-line px-3 py-1.5 text-[11px] tracking-wide text-secondary">
                Concept Project
              </span>
            </div>
          </Reveal>
        </div>
      </div>

      <hr className="hairline" />

      {/* PROBLEM */}
      <div className="section" style={{ paddingBlock: 100 }}>
        <div className="wide grid grid-cols-1 gap-10 md:grid-cols-2">
          <Reveal>
            <SectionLabel>01 — The Problem</SectionLabel>
            <h2 className="max-w-[16ch] text-[24px] leading-[1.5] md:text-[32px]">
              注文住宅は、サイトを見たその日には決まらない。
            </h2>
          </Reveal>
          <Reveal delay={0.08} className="flex flex-col gap-4 text-[15px] text-secondary">
            <p>
              Instagramで気になる。土地を調べる。施工事例を見る。予算が不安になる。性能を調べる。夫婦で話す。他社と比べる。見学会に行く。また検索する。——そうしてようやく、相談に至ります。
            </p>
            <p>
              この検討期間は、短くて半年、長ければ2年以上続きます。良いWebサイトは「見つけてもらう」「信頼してもらう」ところまでは強い。でも今のサイトには、この長い検討期間の98％を占める「まだ相談する気はないけれど、灯森工務店のことは気になっている人」を、後から追いかける仕組みがありません。
            </p>
            <p className="font-serif-jp text-ink">
              だから今回の課題は、チャネルを増やすことではなく、この「離脱していく98％」を見込み客として残す、一本の導線を作ることです。
            </p>
          </Reveal>
        </div>
      </div>

      <hr className="hairline" />

      {/* GROWTH ENGINE DIAGRAM */}
      <div className="section bg-surface" style={{ paddingBlock: 120 }}>
        <div className="wide">
          <Reveal>
            <SectionLabel>02 — The Growth Engine</SectionLabel>
            <h2 className="max-w-[20ch] text-[24px] leading-[1.5] md:text-[34px]">
              サイトを中心に置いた、8段階の循環。
            </h2>
          </Reveal>

          <ImageReveal delay={0.1} className="mt-14">
            <figure>
              <svg
                viewBox="0 0 1040 460"
                role="img"
                aria-label="Attract, Educate, Imagine, Trust, Identify, Consult, Support, Refer の8段階が円環状につながり、Referから再びAttractへ戻る成長エンジンの図"
                style={{ width: "100%", height: "auto" }}
              >
                <defs>
                  <marker id="gsArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                    <path d="M0,0 L10,5 L0,10 z" fill="currentColor" />
                  </marker>
                </defs>

                <g>
                  <circle cx="120" cy="230" r="46" fill="none" stroke="currentColor" />
                  <text x="120" y="226" textAnchor="middle" fontSize="12" fill="currentColor">Attract</text>
                  <text x="120" y="242" textAnchor="middle" fontSize="10" fill="#6D695F">見つけてもらう</text>

                  <circle cx="270" cy="90" r="46" fill="none" stroke="currentColor" />
                  <text x="270" y="86" textAnchor="middle" fontSize="12" fill="currentColor">Educate</text>
                  <text x="270" y="102" textAnchor="middle" fontSize="10" fill="#6D695F">学んでもらう</text>

                  <circle cx="470" cy="45" r="46" fill="none" stroke="currentColor" />
                  <text x="470" y="41" textAnchor="middle" fontSize="12" fill="currentColor">Imagine</text>
                  <text x="470" y="57" textAnchor="middle" fontSize="10" fill="#6D695F">暮らしを想像</text>

                  <circle cx="670" cy="90" r="46" fill="none" stroke="currentColor" />
                  <text x="670" y="86" textAnchor="middle" fontSize="12" fill="currentColor">Trust</text>
                  <text x="670" y="102" textAnchor="middle" fontSize="10" fill="#6D695F">任せられると思う</text>

                  <circle cx="820" cy="230" r="46" fill="none" stroke="#92775D" strokeWidth="2" />
                  <text x="820" y="226" textAnchor="middle" fontSize="12" fill="#92775D" fontWeight="700">Identify</text>
                  <text x="820" y="242" textAnchor="middle" fontSize="10" fill="#6D695F">見込み客化</text>

                  <circle cx="670" cy="370" r="46" fill="none" stroke="currentColor" />
                  <text x="670" y="366" textAnchor="middle" fontSize="12" fill="currentColor">Consult</text>
                  <text x="670" y="382" textAnchor="middle" fontSize="10" fill="#6D695F">相談</text>

                  <circle cx="470" cy="415" r="46" fill="none" stroke="currentColor" />
                  <text x="470" y="411" textAnchor="middle" fontSize="12" fill="currentColor">Support</text>
                  <text x="470" y="427" textAnchor="middle" fontSize="10" fill="#6D695F">契約後も継続</text>

                  <circle cx="270" cy="370" r="46" fill="none" stroke="currentColor" />
                  <text x="270" y="366" textAnchor="middle" fontSize="12" fill="currentColor">Refer</text>
                  <text x="270" y="382" textAnchor="middle" fontSize="10" fill="#6D695F">紹介</text>
                </g>

                <g stroke="currentColor" strokeOpacity=".6" fill="none">
                  <line x1="163" y1="205" x2="235" y2="115" markerEnd="url(#gsArrow)" />
                  <line x1="313" y1="70" x2="430" y2="48" markerEnd="url(#gsArrow)" />
                  <line x1="513" y1="50" x2="628" y2="80" markerEnd="url(#gsArrow)" />
                  <line x1="710" y1="115" x2="785" y2="200" markerEnd="url(#gsArrow)" />
                  <line x1="820" y1="276" x2="710" y2="340" markerEnd="url(#gsArrow)" />
                  <line x1="628" y1="392" x2="515" y2="408" markerEnd="url(#gsArrow)" />
                  <line x1="428" y1="408" x2="313" y2="392" markerEnd="url(#gsArrow)" />
                  <line x1="235" y1="340" x2="163" y2="255" markerEnd="url(#gsArrow)" />
                </g>
                <text x="120" y="300" textAnchor="middle" fontSize="10" fill="#92775D" fontStyle="italic">
                  紹介がまた Attract を生む
                </text>

                <g fontSize="10" fill="#6D695F">
                  <text x="200" y="145" textAnchor="middle">SEO / Instagram</text>
                  <text x="375" y="45" textAnchor="middle">Journal</text>
                  <text x="575" y="45" textAnchor="middle">施工事例</text>
                  <text x="765" y="145" textAnchor="middle">People / Philosophy</text>
                  <text x="765" y="315" textAnchor="middle">診断→相談CTA</text>
                  <text x="575" y="415" textAnchor="middle">定期点検</text>
                  <text x="375" y="415" textAnchor="middle">OB取材</text>
                  <text x="185" y="315" textAnchor="middle">口コミ</text>
                </g>
              </svg>
              <figcaption className="font-en-serif mt-4 text-[13px] italic text-secondary">
                Webサイトは Identify（見込み客化）の一点ではなく、Attract から Refer までの全8段階を貫く軸として機能する。
              </figcaption>
            </figure>
          </ImageReveal>
        </div>
      </div>

      {/* ACQUISITION + CONTENT */}
      <div className="section">
        <div className="wide">
          <Reveal>
            <SectionLabel>03 — Acquisition &amp; Content</SectionLabel>
            <h2 className="max-w-[22ch] text-[24px] leading-[1.5] md:text-[32px]">
              チャネルは増やさない。4本だけ深くする。
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-4">
            {[
              { n: "01", t: "Google Search", d: "「工務店選び」「土地」「予算」「後悔」など、まだ会社を探していない段階の検索意図を拾う。" },
              { n: "02", t: "Instagram", d: "問い合わせを取るためではなく、「こんな暮らしがしたい」と思わせるDiscovery Media。" },
              { n: "03", t: "Google Business Profile", d: "「地域名＋工務店」の検索と、口コミ・施工エリアの信頼形成に対応。" },
              { n: "04", t: "Referral", d: "紹介したくなる体験は引き渡し後に作るもの。広告的な紹介キャンペーンはしない。" },
            ].map((c, i) => (
              <Reveal key={c.n} delay={i * 0.05}>
                <p className="font-en-serif text-[14px] italic text-wood">{c.n}</p>
                <p className="font-serif-jp mt-2 text-[17px]">{c.t}</p>
                <p className="mt-2 text-[13px] leading-relaxed text-secondary">{c.d}</p>
              </Reveal>
            ))}
          </div>

          <hr className="hairline my-14" />

          <Reveal>
            <p className="label text-[12px]">Content Pillars</p>
          </Reveal>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4">
            {[
              { p: "Pillar A", t: "後悔を減らす", d: "最も強い集客コンテンツ。「予算オーバーが起きる5つのタイミング」等。" },
              { p: "Pillar B", t: "暮らしを想像する", d: "既存の施工事例・Journalの世界観をそのまま活用。" },
              { p: "Pillar C", t: "数字を理解する", d: "Performanceページの数値を、生活の言葉に翻訳する記事へ接続。" },
              { p: "Pillar D", t: "人を知る", d: "People / Philosophyへ接続。会社ではなく人を選んでもらう。" },
            ].map((c, i) => (
              <Reveal key={c.p} delay={i * 0.05}>
                <div className="border border-line bg-surface p-6">
                  <p className="font-en-serif text-[12px] italic text-wood">{c.p}</p>
                  <p className="font-serif-jp mt-2 text-[15px]">{c.t}</p>
                  <p className="mt-2 text-[12px] leading-relaxed text-secondary">{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <hr className="hairline" />

      {/* LEAD MAGNET */}
      <div className="section bg-surface">
        <div className="wide grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <Reveal>
            <SectionLabel>04 — Flagship Lead Magnet</SectionLabel>
            <h2 className="max-w-[16ch] text-[24px] leading-[1.5] md:text-[32px]">
              施工事例5本を、診断の答えに変える。
            </h2>
            <p className="mt-5 max-w-[44ch] text-[14px] leading-loose text-secondary">
              暮らし・家族構成・重視すること・検討段階を3〜4問だけ聞き、既存の5つの施工事例のどれかへマッチさせる「10 Years Later Home Plan」。新しいコンテンツを作らず、今ある資産をリード獲得の仕組みに変える。
            </p>
            <p className="mt-4 max-w-[44ch] text-[14px] leading-loose text-secondary">
              CTAは「資料をもらう」ではなく
              <br />
              <span className="font-serif-jp text-ink">「10年後の暮らしを整理してみる」</span>。
            </p>
          </Reveal>
          <ImageReveal delay={0.1} className="flex justify-center">
            <div className="flex aspect-[3/4] w-[220px] flex-col justify-between bg-ink p-7 text-base">
              <p className="font-en-serif text-[11px] italic tracking-[0.1em] opacity-70">Design Note</p>
              <div>
                <p className="font-en-display text-[38px] italic leading-[0.95]">
                  10
                  <br />
                  Years
                  <br />
                  Later
                </p>
                <p className="font-serif-jp mt-3 text-[13px]">家づくり設計ノート</p>
              </div>
            </div>
          </ImageReveal>
        </div>
      </div>

      {/* LEAD CAPTURE TIERS */}
      <div className="section">
        <div className="wide">
          <Reveal>
            <SectionLabel>05 — Lead Capture by Intent</SectionLabel>
            <h2 className="max-w-[22ch] text-[24px] leading-[1.5] md:text-[32px]">
              温度が低い人にも、出口を用意する。
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              { tier: "Low Intent", color: "border-line", t: "見るだけの人", d: "施工事例を見る／Journalを読む。追わない。" },
              { tier: "Middle Intent", color: "border-wood", t: "気になっている人", d: "10 Years Later Home Plan／家づくり診断でメールを取得。" },
              { tier: "High Intent", color: "border-forest", t: "相談したい人", d: "家づくり相談／見学会予約へ直接誘導。" },
            ].map((c, i) => (
              <Reveal key={c.tier} delay={i * 0.05} className={`border-t-2 pt-5 ${c.color}`}>
                <p className="font-en-serif text-[13px] italic text-wood">{c.tier}</p>
                <p className="font-serif-jp mt-2 text-[18px]">{c.t}</p>
                <p className="mt-2 text-[13px] leading-relaxed text-secondary">{c.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <hr className="hairline" />

      {/* NURTURE TIMELINE */}
      <div className="section bg-surface">
        <div className="wide">
          <Reveal>
            <SectionLabel>06 — Nurture Sequence</SectionLabel>
            <h2 className="max-w-[24ch] text-[24px] leading-[1.5] md:text-[32px]">
              登録直後は売り込まない。21日かけて信頼を積む。
            </h2>
          </Reveal>

          <ImageReveal delay={0.1} className="mt-12 overflow-x-auto">
            <svg
              viewBox="0 0 1080 200"
              role="img"
              aria-label="Day0からDay21までの7通のメールが、教育から相談CTAへと段階的に温度を上げていくナーチャーシーケンスの図"
              style={{ width: "100%", minWidth: 780, height: "auto" }}
            >
              <line x1="40" y1="60" x2="1040" y2="60" stroke="currentColor" strokeOpacity=".3" />
              <g textAnchor="middle">
                <circle cx="70" cy="60" r="5" fill="#92775D" />
                <text x="70" y="40" fontSize="11">Day 0</text>
                <text x="70" y="95" fontSize="10" fill="#6D695F">診断結果</text>

                <circle cx="230" cy="60" r="5" fill="currentColor" />
                <text x="230" y="40" fontSize="11">Day 2</text>
                <text x="230" y="95" fontSize="10" fill="#6D695F">決めなくていい</text>
                <text x="230" y="110" fontSize="10" fill="#6D695F">こと3つ</text>

                <circle cx="390" cy="60" r="5" fill="currentColor" />
                <text x="390" y="40" fontSize="11">Day 5</text>
                <text x="390" y="95" fontSize="10" fill="#6D695F">後悔しやすい</text>
                <text x="390" y="110" fontSize="10" fill="#6D695F">ポイント</text>

                <circle cx="550" cy="60" r="5" fill="currentColor" />
                <text x="550" y="40" fontSize="11">Day 8</text>
                <text x="550" y="95" fontSize="10" fill="#6D695F">似た家族の</text>
                <text x="550" y="110" fontSize="10" fill="#6D695F">施工事例</text>

                <circle cx="710" cy="60" r="5" fill="currentColor" />
                <text x="710" y="40" fontSize="11">Day 12</text>
                <text x="710" y="95" fontSize="10" fill="#6D695F">予算の</text>
                <text x="710" y="110" fontSize="10" fill="#6D695F">考え方</text>

                <circle cx="870" cy="60" r="5" fill="currentColor" />
                <text x="870" y="40" fontSize="11">Day 16</text>
                <text x="870" y="95" fontSize="10" fill="#6D695F">設計担当の</text>
                <text x="870" y="110" fontSize="10" fill="#6D695F">考え方</text>

                <circle cx="1010" cy="60" r="6" fill="#4F5947" />
                <text x="1000" y="40" fontSize="11" fill="#4F5947" fontWeight="700">Day 21</text>
                <text x="1010" y="95" fontSize="10" fill="#6D695F">相談CTA</text>
              </g>
            </svg>
          </ImageReveal>
          <p className="font-en-serif mt-4 text-[13px] italic text-secondary">
            教育（Day0-16）→ 信頼 → Day21で初めて「まだ何も決まっていなくても大丈夫です。」と相談へ誘導する。
          </p>
        </div>
      </div>

      {/* AI CONCIERGE MOCKUP */}
      <div className="section">
        <div className="wide grid grid-cols-1 gap-12 md:grid-cols-2">
          <Reveal>
            <SectionLabel>07 — 10 Years Later Concierge</SectionLabel>
            <h2 className="max-w-[16ch] text-[24px] leading-[1.5] md:text-[32px]">
              接客ではなく、ナビゲーション。
            </h2>
            <p className="mt-5 max-w-[40ch] text-[14px] leading-loose text-secondary">
              土地・予算・家族構成・時期を聞き、「今の段階で考えるべきこと」を案内するAI。同意したユーザーの回答は、商談前ヒアリングとして営業へそのまま渡す。初期フェーズでは必須にせず、相談内容が十分に蓄積してから導入する。
            </p>
          </Reveal>
          <Reveal delay={0.1} className="flex max-w-[520px] flex-col gap-3">
            <div className="rounded-tl-[2px] bg-surface p-4 text-[14px]">
              <span className="font-en-serif mb-1.5 block text-[11px] italic text-secondary">Concierge</span>
              まずは3つだけ教えてください。土地はもうお持ちですか？
            </div>
            <div className="self-end rounded-tr-[2px] bg-forest p-4 text-[14px] text-base">
              まだです。土地から探しています。
            </div>
            <div className="rounded-tl-[2px] bg-surface p-4 text-[14px]">
              <span className="font-en-serif mb-1.5 block text-[11px] italic text-secondary">Concierge</span>
              ありがとうございます。今の段階では、間取りより先に「土地と予算のバランス」を整理するのがおすすめです。関連するJournal記事をお送りしますね。
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
        </div>
      </div>

      <hr className="hairline" />

      {/* KPI DASHBOARD */}
      <div className="section bg-surface">
        <div className="wide">
          <Reveal>
            <SectionLabel>08 — KPI Tree（Sample Data）</SectionLabel>
            <h2 className="max-w-[22ch] text-[24px] leading-[1.5] md:text-[32px]">
              PVではなく、契約数から逆算する。
            </h2>
            <p className="font-en-serif mt-3 text-[12px] italic text-secondary">
              SAMPLE DATA — 実測値ではなく、KPIツリーの構造を示すための仮の数値です。
            </p>
          </Reveal>

          <ImageReveal delay={0.1} className="mt-12 overflow-x-auto">
            <svg
              viewBox="0 0 1080 300"
              role="img"
              aria-label="流入からJournal閲覧、Lead Magnet登録、相談、来場、商談、成約へと数が絞り込まれていくKPIファネルの図（サンプル数値）"
              style={{ width: "100%", minWidth: 720, height: "auto" }}
            >
              <g fontSize="11">
                <rect x="20" y="40" width="1040" height="26" fill="#E4DECE" stroke="currentColor" strokeOpacity=".3" />
                <text x="30" y="58" fill="currentColor">流入（Search / Instagram / MEO）</text>
                <text x="1030" y="58" textAnchor="end" fill="currentColor">12,400</text>

                <rect x="90" y="90" width="900" height="26" fill="#E4DECE" stroke="currentColor" strokeOpacity=".3" />
                <text x="100" y="108" fill="currentColor">Journal / 施工事例 閲覧</text>
                <text x="960" y="108" textAnchor="end" fill="currentColor">4,600</text>

                <rect x="180" y="140" width="720" height="26" fill="#92775D" fillOpacity=".25" stroke="#92775D" />
                <text x="190" y="158" fill="currentColor">Lead Magnet 登録</text>
                <text x="870" y="158" textAnchor="end" fill="currentColor">520</text>

                <rect x="270" y="190" width="540" height="26" fill="#E4DECE" stroke="currentColor" strokeOpacity=".3" />
                <text x="280" y="208" fill="currentColor">相談ページ到達</text>
                <text x="780" y="208" textAnchor="end" fill="currentColor">180</text>

                <rect x="360" y="240" width="360" height="26" fill="#4F5947" fillOpacity=".9" />
                <text x="370" y="258" fill="#F3F0E9">来場・商談・成約</text>
                <text x="690" y="258" textAnchor="end" fill="#F3F0E9">42</text>
              </g>
            </svg>
          </ImageReveal>
          <p className="font-en-serif mt-4 text-[13px] italic text-secondary">
            各段階の転換率（Journal→Lead Magnet、Lead Magnet→相談、相談→成約）を実測し、細くなっている箇所から改善する。
          </p>
        </div>
      </div>

      {/* ROADMAP */}
      <div className="section">
        <div className="wide">
          <Reveal>
            <SectionLabel>09 — Priority Roadmap</SectionLabel>
            <h2 className="max-w-[20ch] text-[24px] leading-[1.5] md:text-[32px]">
              5段階で、順番にやる。
            </h2>
          </Reveal>

          <div className="mt-10 border-t hairline">
            {[
              { p: "Phase 1", t: "Foundations", d: "Webサイト／Analytics／Search Console／Google Business Profile／Journal／相談導線。すでに大部分は今回の制作で完了。" },
              { p: "Phase 2", t: "Lead Generation", d: "10 Years Later Home Plan／Lead Capture／Pre-Consultation Form。" },
              { p: "Phase 3", t: "Nurture", d: "メール（またはLINE）ステップ配信、施工事例・予算・土地コンテンツの整備。" },
              { p: "Phase 4", t: "Automation", d: "相談データが十分に貯まってから、AI Concierge／CRM／Lead Scoringを導入。" },
              { p: "Phase 5", t: "Scale", d: "勝ち筋が見えてから、広告・イベントLP・YouTubeへ拡大。最初からは手を広げない。" },
            ].map((r, i) => (
              <Reveal key={r.p} delay={i * 0.04}>
                <div className="grid grid-cols-1 gap-2 border-b hairline py-7 md:grid-cols-[100px_1fr] md:gap-8">
                  <p className="font-en-serif text-[13px] italic text-wood">{r.p}</p>
                  <div>
                    <p className="font-serif-jp text-[17px]">{r.t}</p>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-secondary">{r.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <hr className="hairline" />

      {/* CROSS-SELL */}
      <div className="section bg-surface">
        <div className="wide">
          <Reveal>
            <SectionLabel>10 — Cross-Sell, From the Bottleneck</SectionLabel>
            <h2 className="max-w-[26ch] text-[24px] leading-[1.5] md:text-[32px]">
              全部売らない。ボトルネックに応じて提案する。
            </h2>
            <p className="mt-4 max-w-[56ch] text-[14px] leading-loose text-secondary">
              Webサイト制作の先に、SEOコンテンツ／Instagram／MEO／Lead Magnet／ナーチャー配信／AI Concierge／CRM／広告／CROまでを提供可能。ただし今回のロードマップでは、Phase 1〜3（サイト・診断・ナーチャー）の優先度が最も高く、LINEや広告、AI導入は「今は不要」という判断も含めて提示します。
            </p>
          </Reveal>
        </div>
      </div>

      {/* FINAL POSITIONING */}
      <div className="section text-center" style={{ paddingBlock: 140 }}>
        <div className="content mx-auto max-w-2xl">
          <Reveal>
            <SectionLabel>Final Positioning</SectionLabel>
            <h2 className="text-[26px] leading-[1.5] md:text-[36px]">
              「HP制作をお願いしたい」ではなく、
              <br />
              「Webまわり全部、一度相談したい」へ。
            </h2>
            <p className="mt-6 text-[13px] leading-loose text-secondary">
              Business Understanding × Brand Strategy × Content Marketing × CRO × Web Design × Frontend Development × AI / Automation × Sales Support
            </p>
            <div className="mt-9">
              <Link
                href="/"
                className="inline-flex items-center bg-forest px-8 py-4 text-[13px] tracking-wide text-base transition-opacity hover:opacity-90"
              >
                灯森工務店サイトを見る
              </Link>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="pb-20 pt-10 text-center">
        <p className="label text-[12px]">Concept Project — Portfolio Study</p>
        <p className="mx-auto mt-3 max-w-[48ch] text-[12px] leading-relaxed text-secondary">
          本ページは、Web制作・ブランド設計・グロース戦略のポートフォリオとして制作した架空プロジェクトのケーススタディです。企業名・人物・数値・戦略はすべてコンセプト設計上のものです。
        </p>
      </div>
    </div>
  );
}
