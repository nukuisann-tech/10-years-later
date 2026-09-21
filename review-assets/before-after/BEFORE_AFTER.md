# BEFORE / AFTER（テキストによる変更前後比較）

画像としてのBefore/After生成（V1スクリーンショットの再現）は、既存コードの状態を壊さずに行うことが難しいため見送り、変更点を文章で比較する形にまとめました。V1時点のスクリーンショットは `git log` の初回コミット（"灯森工務店(TOMORI KOMUTEN)コンセプトサイト一式を実装"）時点のコードから、同じ手順で再現可能です。

## Hero

- Before: サブコピー3行（「家は、完成した瞬間が〜」「でも、本当に大切なのは〜」「家族の時間とともに〜」）
- After: 2行に圧縮。「でも、本当に大切なのは〜」の行を削除し、世界観への没入を優先。

## Home Philosophy

- Before: 3段落の説明文（暮らしの一場面、間取りの考え方、性能とデザインの位置づけ）を全文表示
- After: 1段落に要約し、「私たちの思想を読む」で `/philosophy` へ誘導。Home=感情、詳細ページ=論理という役割分担に変更。

## Works（一覧）

- Before: `md:grid-cols-2` の均等2カラムカードグリッド。すべて同じ`aspect-[4/3]`。
- After: `rhythm`配列（full-bleed → 7/5 offset → 6/6）による非対称Editorial Portfolioレイアウト。画像比率も項目ごとに変化。

## 10 Years Later

- Before: 上段に「10 Years Later」のテキストのみ（背景は`bg-ink`単色）、下段に別コンポーネントとして写真を配置。
- After: 写真をセクション全体の背景にし、「10 / Years / Later」の巨大タイポを直接重ねる構成に統合。本文を3段落→1文に削減。

## Three Promises

- Before: 01/02/03すべて「image half + text half」の同一レイアウト（奇数/偶数で左右反転するのみ）。
- After: 01=text左/image右、02=フルブリード画像＋オーバーレイラベル（全幅）、03=image左/text右、と3パターンとも異なる構成に変更。

## Performance（Home / 詳細ページ共通）

- Before: 「耐震等級3」→「地震の夜も〜」という2列表示のみ。
- After: 「01 — Earthquake Resistance」の英語ラベル＋番号を追加し、SPEC→BENEFITの視覚的な段階を強調。

## Family Story → Case Study Preview

- Before: 見出し「ある家族の、10年のはじまり。」の下に3段落の長文＋Pull Quote。
- After: Before/Design/Nowの3ビート（各1文）に圧縮し、「この事例の詳細を読む」で `/works/garden-breakfast` へ誘導。

## Process

- Before: 01〜07すべて同じ罫線区切りの行。07のみ`bg-forest`の箱で少し強調。
- After: 01〜06はさらに短い一文へ圧縮。07を巨大英字タイポ（"After Handover"）を含む大きなEditorialセクションへ格上げ。

## Final CTA

- Before: Primary「家づくりの話をしてみる」／Secondary「モデルハウスを見る」（実際は両方`/contact`にリンクしており導線が重複）
- After: Secondaryを「施工事例を見る」（`/works`）に変更し、リンク不整合を解消。

## Location表記

- Before: `架空県 緑ヶ丘` `架空県 川辺町` など、具体的な地名を模した表記。
- After: `Kanto Area` `Tohoku Area` `Kansai Area` `Chubu Area` など、Portfolioとしての世界観を壊さない編集的な表記に統一。

## 新規追加

- `ConceptBadge.tsx`：全ページ共通の「CONCEPT PROJECT」バッジ（Desktop固定表示／Mobileはメニュー内）＋説明モーダル。
- `Interlude.tsx`：Three PromisesとPerformanceの間に、余白のみのTransition Sectionを追加。
- ContactFormに「DEMO FORM」の明記を追加。
