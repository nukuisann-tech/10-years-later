# FINAL GROWTH STRATEGY REVIEW

対象: `/growth-strategy`（https://10-years-later.vercel.app/growth-strategy）

## Strategy Improvements

- 冒頭近くに **Before Implementation**（最初に確認したいこと）を新設。年間施工可能棟数から失注理由まで12項目を明示し、「サイトだけを見て断定していない」ことを最初に示す構成にした。
- **More Leads Is Not Always Growth** を新設。施工キャパシティ・営業人数という事業側の制約を明示し、Lead Volumeだけでなく Lead Quality / Consultation Quality / Close Rate / Gross Profit / Capacity を見る、という視点をKPI Treeの直前に接続した。
- Cross-Sell（旧構成）を **If This, Then That** という症状→処方の意思決定ルール（7パターン）へ全面差し替え。「何でもできます」ではなく「詰まっている場所に応じて処方を変える」という姿勢を明示。
- Roadmapの手前に **First 90 Days（Sample Implementation Blueprint）** を追加。Day0–30 Measure / 31–60 Capture / 61–90 Nurture の3フェーズで、「結局最初に何をするのか」に具体的に答えた。

## Business Logic Improvements

- KPI Treeに **Measurement Before Optimization** の原則を追加し、Website Events（Journal View〜Visit Booking）と Quality Metrics（Lead Quality〜Referral Rate）を明示。架空の目標数値・CVR・ROIは一切設定していない。
- Lead Magnetに **Before / After** のユーザー価値と、**Input → Process → Output** のTransformation図を追加し、「ダウンロードさせる仕組み」ではなく「考えを整理する体験」として再定義。
- AI Conciergeに **AI Can / AI Cannot**（住宅ローン判断・法律判断・構造安全性・正式見積・契約判断は明確に対象外）と **Human Handoff**（AI→判断が必要な質問→人）を追加し、AIを万能として扱わないガバナンスを明示。

## New Decision Frameworks

- `DecisionRules.tsx`：症状（IF）→処方（THEN）の7ルール。Mobileでは自然に縦のDecision Listへ変換される（無理に横幅へ詰めていない）。
- `NinetyDayBlueprint.tsx`：90日を3フェーズに分解した実行順序（Sample、成果保証なしを明記）。
- `GrowthCapacityNote.tsx`：Lead Volume単体で判断しないという事業視点の明文化。

## New Client Validation Section

`ValidationSection.tsx`（Before Implementation）を新設。年間施工可能棟数・月間問い合わせ数・各種転換率・商圏・営業人数・失注理由など12項目を、実装前に確認すべき事実として提示。「仮説と事実を分けられる人」という信頼形成を狙った、今回のブラッシュアップで最も重要な追加。

## Measurement Design

`MeasurementPlan.tsx` を新設し、KPI Treeと対にして配置。

- Website Events: Journal View / Works View / Lead Magnet Start / Lead Magnet Complete / Consultation View / Form Start / Form Submit / Visit Booking
- Quality Metrics: Lead Quality / Show-up Rate / Consultation → Proposal / Proposal → Contract / Average Order Value / Gross Profit / Referral Rate

いずれも「何を測るべきか」の設計にとどめ、架空の目標値・実測データは作成していない。

## Visual Design Improvements

- Visualization Grammarを **Flow / Timeline / Matrix / Mockup** の4種に整理。新設セクションもこの4種のいずれかに収まるよう設計（例: Decision Rules=Matrix、90 Day Blueprint=Timeline、Asset Leverage Map=Matrix、Lead MagnetのInput→Output=Flow）。
- `PartDivider.tsx` を新設し、全体を **01 Problem / 02 System / 03 Activation / 04 Measurement** の4パートに区切る、大きな番号＋小さな章名の切り替わりを追加。スクロールは分断せず、区切りの「感覚」だけを作っている。
- 各主要セクションに `StrategyNote.tsx`（1〜2行の短い洞察）を追加し、思想を記憶に残す設計にした。
- **ChapterNav実装バグを修正**：初期表示時に「01 Problem」が不自然にハイライトされていた問題を、`active`の初期値を`null`にすることで解消（実際にその章へスクロールするまで何もハイライトしない）。
- **レビュー中に発見した追加バグも修正**：Desktop版ChapterNavの文字色が、Growth Loopのような暗い背景セクションの上で読めなくなっていた（文字色`text-ink`が背景`bg-ink`と同化）。ナビ全体に薄いクリーム色の背景パネル（`bg-base/70` + blur）を追加し、どのセクションの上でも視認できるよう修正。

## Mobile Improvements

- Decision Rulesは、Mobileでは自然に縦積みのIF/THENリストになる（表を無理に横幅へ詰めていない）。
- Growth Engineは、Mobileでは円環SVGではなく縦の8ステップフローに変換（前回セッションで対応済み、今回も維持）。
- Chapter Navの横スクロールストリップは、アクティブな章が表示範囲外にある場合、自動で該当ボタンまでスクロールする（前回セッションで対応済み）。
- 90 Day Blueprint・Asset Leverage Map・Strategy Summaryは、いずれもMobileで1カラムに自然に折り返すグリッド構成で実装。

## Print / PDF Check

- `globals.css` に `@media print` ブロックを追加。`.no-print` クラスを付与したHeader・MobileCTA・ConceptBadge（固定ボタン）・ChapterNav（Desktop/Mobile両方）・PrintButton自体が、印刷時には非表示になることを確認。
- `-webkit-print-color-adjust: exact` / `print-color-adjust: exact` により、背景色付きセクション（Growth Loopのbg-ink等）が印刷時も白抜けしないことを確認。
- `break-inside: avoid` を主要セクション・図解に適用し、Diagramや表が途中でページ分割されにくいようにした（完全な保証ではなく、一般的なブラウザのprint実装に依存する）。
- Growth Strategyページ右下に「PRINT / SAVE STRATEGY」ボタンを追加（Desktopのみ表示、UIを邪魔しない位置）。
- Playwrightの `emulateMedia('print')` で実際にレンダリングを確認済み（本レポート内の検証手順参照）。

## Reusable Components

`src/components/strategy/` に以下を追加（既存15コンポーネントに加えて）。

- `ValidationSection.tsx`
- `GrowthCapacityNote.tsx`
- `AssetLeverageMap.tsx`
- `DecisionRules.tsx`（`OpportunityMatrix.tsx`を置き換え）
- `NinetyDayBlueprint.tsx`
- `MeasurementPlan.tsx`
- `StrategySummary.tsx`
- `StrategyNote.tsx`（共通の小さな洞察コンポーネント）
- `PartDivider.tsx`（4パート区切り）
- `PrintButton.tsx`

いずれもコピー・データ配列を先頭にまとめており、Industry 02/03では中身の差し替えのみで再利用可能。`PartDivider`のラベル（Problem/System/Activation/Measurement）や`chapters.ts`の章構成も、業界に応じて命名を変えつつ同じ4部構成を踏襲できる設計にしている。ただしLayout Variationは許容する方針のため、3サイトを完全に同一構造にする必要はない。

## Production Verification

- 本番URL（`/growth-strategy`）のレンダリング結果とHTMLを直接curlで確認し、「98%」「短くて半年、長ければ2年以上」の文言が残っていないことを再確認済み（0件）。
- プロジェクト全体（`src/`）を文字列検索し、該当表現がコードにも残っていないことを確認済み。
- `npx eslint .` / `npx tsc --noEmit` / `npx next build` すべてエラーなし。
- ローカル本番サーバーでの全区間スクロール確認（Desktop 1440 / Mobile 390）でコンソールエラー・横スクロールともになし。
- Vercel本番環境へデプロイ済み、`/growth-strategy` 200応答を確認。

## Remaining Concerns

- ページが大幅に長くなった（約20,800px、旧バージョン比+約7,700px）。Chapter Navによる回遊性は確保したが、「読み切るのに時間がかかる」という体験自体は、資料としての深さとのトレードオフとして残る。初見のクライアントには「まず14 Strategy in One Pageだけ読んでください」と案内する運用が現実的。
- `MeasurementPlan`と`KPITree`は隣接配置だが、明確な章区切り（Part Divider相当）はKPITreeの前にしか置いていない。将来的にMeasurement Planだけを独立チャプターとして`chapters.ts`に追加するかは、人間のアートディレクターの判断に委ねたい。
- Decision RulesとRoadmapは内容として一部重複がある（例: 「営業対応コストが高い→CRM/AI」と「Automation」フェーズ）。今回は許容範囲と判断したが、将来的に一方に統合する余地はある。
