# GROWTH STRATEGY REVIEW

対象: `/growth-strategy`（https://10-years-later.vercel.app/growth-strategy）

## 1. Strategy Changes

- 冒頭に **Strategic Premise**（想定企業・主要顧客・主な事業課題・Growth Objective）を新設し、この戦略が実在企業への調査ではなく仮説であることを明記。
- **Executive Summary**（Problem / Strategy / Growth Loop の3点）を追加し、全文を読まなくても骨格が伝わる構成にした。
- Problem Sectionを、長文の説明から **Current State（Traffic→Website→Exit）/ Desired State（Traffic→Website→Lead Capture→Nurture→Consultation）** の対比フローへ変更。
- Content Pillarsを、単なる4項目一覧から **顧客の問い（Customer Question）** への変換（例：「後悔を減らす」→「建てた後に、失敗したくない。」）に変更。
- Lead Magnetを、説明文のみから **Cover / Inside / Result の3面Concept Mockup** へ強化。
- Lead Capture（Intent Journey）を、3つの箱の並列表示から **Low→Middle→Highの水平ジャーニー** へ変更。
- KPI Sectionを、ファネル型の棒グラフから **Contract / Gross Profitを頂点とする逆算ツリー**（各段階間にRateラベル付き）へ再構成。
- Roadmapを、Phase 1〜5の均等な5段階から **Now / Next / Later** の優先度付き3分類へ変更し、AI・広告をLaterに配置。
- Cross-Sellを「Next Growth Opportunities」に改題し、**Bottleneck → Recommended Solution** のペア構造へ変更。
- 新規セクション **The Growth Loop**（Final Positioning直前、独立ダークセクション）を追加し、"Product creates content. Content creates the next customer." を戦略の結論として明示。
- Final Positioningに、今回設計した範囲（Website / Growth / Expansion）のサマリーと、"Concept Project — Strategy Proposal / Not Actual Performance Results" の明記を追加。

## 2. Removed Unsupported Claims

| Before | After | 理由 |
|---|---|---|
| 「この長い検討期間の98％を占める」 | 削除（Desired State図に統合） | 出典のない具体数値のため |
| 「短くて半年、長ければ2年以上続きます」 | 「注文住宅は、検討期間が長期化しやすい商材だと考えられます（**HYPOTHESIS**タグ付き）」 | 出典を明示できない期間の断定を避けるため |

DATA / HYPOTHESIS / SAMPLE / STRATEGY の区分を明示的にタグ表示するルールを採用（Problem SectionのHYPOTHESISタグ、KPI TreeのSAMPLEタグ、Hero・FooterのConcept Strategy／Not Actual Client Resultsタグ）。

## 3. Information Architecture Changes

- **Chapter Navigation** を新設（`ChapterNav.tsx`）。Desktop（xl以上）は右側固定の縦インデックス、Mobile/Tabletは header直下にsticky表示する横スクロールの章インデックス。IntersectionObserverで現在地を検出し、Mobile側はアクティブな章がストリップの表示範囲外にある場合は自動でスクロール追従するよう実装。
- 全チャプターに `id` と `scroll-mt-24` を付与し、ナビゲーションからのスムーズスクロール時にヘッダー分のオフセットを確保。
- 本文の最大幅は既存サイトの `.wide`（1400px）/ `.content`（1160px）をそのまま踏襲しつつ、Diagram類はコンテナ幅いっぱいまで使用。

## 4. Visual Communication

文章→図解への変換箇所:

- Problem: 文章 → Current/Desired State フロー図
- Acquisition: 4枚の同型カード → Channel / Role / Content / Destination の表形式
- Content Pillars: 4項目リスト → 顧客の問いを主役にしたEditorialレイアウト
- Lead Magnet: 説明文 → Cover/Inside/Resultの3面モックアップ
- Lead Capture: 3つの箱 → Low→Middle→Highの水平ジャーニー
- Nurture: 説明文 → Day0〜21の横断タイムライン（Desktop）／縦ステップ（Mobile）
- KPI: 数字の羅列 → Contract起点の逆算ツリー＋Rateラベル
- Roadmap: Phase 1〜5の均等リスト → Now/Next/Laterの優先度付き分類
- Cross-Sell: サービス一覧 → Bottleneck→Solutionのペア表
- Growth Loop: 新規に垂直ループ図＋結論コピーを追加

## 5. Client Experience

このページを読んだ発注者が、次の順で体験するよう設計した。

1. Hero（10秒）: 「Website Strategy」と「Growth Strategy」が並記され、Webサイトの話だけでないことが即座に伝わる。
2. Strategic Premise + Executive Summary（30秒）: 前提と結論を先に知ることで、以降の詳細を読む・読み飛ばす判断ができる。
3. Chapter Navigationにより、全部読まなくても興味のある章だけを追える。
4. 各章がDiagram中心のため、文章を読まずに図だけを追っても戦略の骨格が理解できる。
5. Growth Loop→Final Positioningで、「思想の結論」と「実際に何を設計したか」を最後にまとめて受け取る。

## 6. Reusable Components

`src/components/strategy/` 配下に、Industry 02 / 03 でも流用可能な形で実装。

- `chapters.ts` — 章リストの定義（id/no/label）。業界ごとに内容を差し替えればそのまま再利用可能。
- `ChapterNav.tsx` — スクロールスパイ付きの章ナビゲーション（Desktop固定 / Mobileスティッキー横スクロール）。
- `StrategyHero.tsx` — Industry名・Website/Growth Strategyの2本立てコピー・Concept表示・Growth Journeyラインを持つHero。
- `StrategicPremise.tsx` — 想定企業/主要顧客/事業課題/Growth Objectiveの4項目ブロック。
- `ExecutiveSummary.tsx` — 巨大ナンバー×3行のEditorial Summary。
- `ProblemFlow.tsx` — Current/Desired State比較フロー。
- `GrowthEngine.tsx` — 循環型ループ図（SVG）。
- `ChannelMap.tsx` — チャネル×Role×Content×Destinationの表。
- `ContentPillars.tsx` — Pillar×顧客の問いのレイアウト。
- `LeadMagnetMockup.tsx` / `IntentJourney.tsx` — Lead Magnetモックアップと温度別ジャーニー。
- `NurtureTimeline.tsx` — Day単位のナーチャータイムライン（Desktop/Mobile別実装）。
- `AIPrototype.tsx` — AIチャットプロトタイプ＋Does/Does Not Do＋導入時期。
- `KPITree.tsx` — 逆算KPIツリー。
- `Roadmap.tsx` — Now/Next/Later優先度ロードマップ。
- `OpportunityMatrix.tsx` — Bottleneck→Solutionペア表（旧Cross-Sell）。
- `GrowthLoop.tsx` — 循環ループ＋結論コピーのダークセクション。
- `StrategyFooter.tsx` — Website/Growth/Expansionサマリー＋Concept Project明記。

いずれも中身（コピー・データ配列）は各コンポーネントの先頭で定義しており、業界が変わっても構造を保ったままコンテンツだけ差し替えられる設計にしている。

## 7. Mobile Strategy

- **Growth Engine**: 当初Desktopと同じ円環SVGをMobileでも縮小表示していたが、8ノードの日本語ラベルが小さくなりすぎたため、レビュー中に方針転換。Mobile（`md:hidden`）は8段階を縦積みの矢印フローに再構成し、Desktop（`hidden md:block`）のみ円環SVGを維持する構成へ修正済み。
- **KPI Tree**: 元々JSXベースの縦積み構造として設計しているため、Desktop/Mobileで構造変更が不要。両方とも同じ縦ツリーで自然に機能する。
- **Growth Loop**: 元から縦方向の連続フローとして設計しているため、Desktop/Mobile共通の構造で成立する（横型・円形にしていない）。
- **Nurture Timeline**: Desktopは横断タイムライン、Mobileは縦積みステップ表示に明示的に切り替え（`hidden md:block` / `md:hidden`）。
- **Chapter Nav**: Desktopは固定縦インデックス、Mobileはheader直下のsticky横スクロールに完全に別実装。

## 8. Remaining Concerns

- Chapter Navの現在地ハイライトは、ページ最上部（Hero〜Executive Summary）ではまだどの章にも入っていないにもかかわらず、初期値として「01 Problem」がハイライトされる。実害はないが、意図的な仕様か、開いた瞬間は何も光らせない方が良いかは判断の余地がある。
- Lead Magnet MockupとConcept Projectバッジ（fixed）が、フルページスクリーンショットの特定のスクロール位置で視覚的に重なって見えることがある（実際のブラウザ操作では重ならないことを確認済み。V2レビュー時と同じ、fullPageスクリーンショット特有の現象）。
- 「AI Concierge」セクションの`What AI Does Not Do`に取り消し線を使っているが、これが「禁止事項の強調」として十分に伝わるか、もう少し柔らかい表現（例えば単なる薄字）にすべきかは好みの範囲。
