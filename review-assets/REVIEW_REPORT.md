# REVIEW REPORT

## 1. Project Summary

灯森工務店（TOMORI KOMUTEN）コンセプトサイトを、「良い自主制作サイト」から「30〜100万円規模の企業サイトを任せられる制作者」と判断されるポートフォリオ品質へ引き上げるブラッシュアップ（V2）。コアコンセプト「完成日ではなく、10年後を設計する。」、写真主導の設計、暖かく静かな世界観は維持したまま、①各セクションの反復パターンの解消、②編集的なレイアウトリズムの導入、③Concept Projectであることの透明性強化、を軸に修正した。

## 2. Changed Files

- `src/components/home/Hero.tsx`
- `src/components/home/Philosophy.tsx`
- `src/components/home/WorksShowcase.tsx`（home）
- `src/components/WorksGrid.tsx`（/works 一覧）
- `src/components/home/TenYearsLater.tsx`
- `src/components/home/ThreePromises.tsx`
- `src/components/home/PerformanceSection.tsx`（home）
- `src/app/performance/page.tsx`
- `src/components/home/StorySection.tsx`
- `src/components/home/ProcessSection.tsx`
- `src/components/home/PeopleSection.tsx`
- `src/components/home/JournalSection.tsx`
- `src/components/home/CtaSection.tsx`
- `src/components/home/Interlude.tsx`（新規）
- `src/components/ConceptBadge.tsx`（新規）
- `src/components/Header.tsx`
- `src/components/ContactForm.tsx`
- `src/app/works/[slug]/page.tsx`
- `src/app/layout.tsx`
- `src/app/page.tsx`
- `src/data/works.ts`

## 3. Major Design Changes

**Works一覧（/works）を均等2カラムから非対称Editorial Portfolioへ変更。**
理由：均等グリッドはテンプレート工務店サイトの典型的な見え方になりやすい。1件目full-bleed→60/35%オフセット→50/50%という周期パターンに変え、建築雑誌のようなリズムを作った。

**TenYearsLaterセクションを、写真＋別カラム説明文からフルブリード写真に巨大タイポを重ねる構成へ再設計。**
理由：ブリーフの「Heroに次ぐ象徴的セクション」「ブランドを記憶させる場所」という要求に対し、従来は情報説明寄りだった。「10 / Years / Later」を写真に直接重ねることで、一度見たら記憶に残る視覚的フックにした。文章量も3段落→1文に削減。

**ThreePromisesの3項目を全て同じレイアウトにせず、01=text左/image右、02=フルブリード画像＋オーバーレイラベル、03=image左/text右、と個別に変えた。**
理由：「完全に同じレイアウトを繰り返さない」という指示への直接対応。02だけ全幅にすることで、3つの中に強弱がつき単調さを回避。

**Performanceのスペック行を「01 — Earthquake Resistance / 耐震等級3 / ベネフィット文」という番号＋英語ラベル形式に統一。**
理由：スペックの羅列に見えないようにしつつ、SPEC→HUMAN BENEFITの構造を視覚的に強調するため。ホーム側・詳細ページ側で表現を統一した。

**Family Story（Home）を長文3段落＋Pull Quoteから、Before/Design/Nowの3ビートのCase Study Previewへ圧縮し、施工事例詳細への導線を追加。**
理由：後半まで同じトーンの説明文が続くのを避け、「詳細はWorks Detailへ送る」という役割分担を明確にした。

**Processの07（その後）を、大きなEditorialセクション（巨大英字タイポ＋短い日本語見出し）に強化。01〜06はさらに簡潔な一文へ短縮。**
理由：「建てて終わりではない」がブランド思想の証拠になる、という指示を踏まえ、07だけ視覚的な重みを持たせて「思想の回収」の役割を持たせた。

**架空ロケーション表記を「架空県 緑ヶ丘」等の具体的地名から「Kanto Area」「Tohoku Area」等の編集的表記へ変更。**
理由：透明性を保ちながらも、Portfolioとしての世界観を壊さない表現にするため。work detail・works一覧の両方で表示を統一。

## 4. UX / CRO Changes

- Final CTAの導線不整合を修正：「モデルハウスを見る」（Contactへの重複リンクだった）→「施工事例を見る」（`/works`へ）に変更し、Primary/Secondaryで別の行動に誘導するよう整理。
- Contactフォームの直上に「DEMO FORM」の明記を追加し、実データが送信されないことを事前に伝えることで、入力への心理的ハードルをさらに下げた。
- Home Philosophyセクションを要約化し、「思想を読みたい人」を`/philosophy`へ誘導する導線を追加（Home=感情、詳細ページ=論理、という役割分担）。
- Journal（Home）を全4記事表示から2記事＋View Allへ変更し、「更新機能があります」ではなく「厳選されたコンテンツ」に見えるよう調整。

## 5. Branding Changes

- 全ページ共通のConcept Projectバッジを追加（`ConceptBadge.tsx`）。Desktopは左下の小さな固定ラベル、Mobileはハンバーガーメニュー内のリンクとして設置。クリックすると「本サイトはWeb制作・ブランド設計のポートフォリオとして制作された架空プロジェクトです」という説明モーダルを表示。フッターの既存表記と重複しつつも、ページ内のどこからでもすぐ確認できる導線を追加した。
- Peopleセクションに「※ CONCEPT PROJECTのため、人物・役職は架空の設定です」の一言を追加し、人物写真についても架空である旨を明示。
- TenYearsLaterセクションを、ブランドの核である「10 Years Later」概念を視覚的に最も強く記憶させるセクションへ格上げ。

## 6. Mobile Changes

- Hero・TenYearsLaterの巨大タイポは、Mobileでは単純な縮小コピーではなく、専用のフォントサイズ（`text-[76px]` 等）で個別に調整し、375〜430px幅でも改行崩れや横スクロールが発生しないことを確認。
- ThreePromisesの02（フルブリード＋オーバーレイ）は、Mobileでは`aspect-[16/9]`を保ちながら文字サイズを縮小し、可読性を確保。
- Concept ProjectバッジはMobileでは固定表示にせず、ハンバーガーメニュー内に格納。既存のsticky CTAバー（施工事例／相談する）と競合しないようにするため。
- 既存のsafe-area対応・44px以上のタップ領域は変更していない（V1で対応済みのものを維持）。

## 7. Performance / Accessibility

- 画像は引き続きすべて`next/image`経由（`sizes`指定、Hero/Work Detailのみ`priority`）。新規追加したTenYearsLater背景画像・ThreePromises02のフルブリード画像も同様に最適化対象。
- 新規追加のConceptBadgeモーダルは`role="dialog"` `aria-modal="true"`を付与。フォーカストラップまでは未実装（8番を参照）。
- alt textは既存の「単なる住宅写真」ではない具体的な説明文をそのまま維持（変更なし）。
- `prefers-reduced-motion`対応（`MotionConfig reducedMotion="user"`）は変更なし、そのまま維持。

## 8. Remaining Concerns

正直に、人間のレビューが必要だと思う点を挙げる。

1. **フルページスクリーンショットにおけるfixed要素の見え方**：`review-assets/screenshots/*-mobile-390.png`や一部のdesktop画像で、Concept ProjectバッジやモバイルのSticky CTAバーが本文テキストに重なって見える箇所がある。これはPlaywrightの`fullPage`スクリーンショットが、position:fixedの要素を「実際のビューポート基準」ではなく「合成した長いページの中の1箇所」に描画してしまうキャプチャ特有の現象であり、実際のブラウザ操作（通常スクロール）では発生しないことを個別に確認済み。ただし、実運用時に「fixedバッジがスクロール中に本文と一瞬重なる」こと自体は物理的に起こり得るため、Concept Projectバッジの背景を完全不透明にする／位置を調整する等、デザイナー判断での追加調整余地はある。
2. **Concept Projectバッジのモーダル**：フォーカストラップ・Escキーでの閉じる操作は未実装。アクセシビリティを厳密に詰めるなら追加が必要。
3. **Journalの記事本文**：今回はHome側の表示件数のみ調整し、記事本文自体（`/journal/[slug]`）の文章量は削減していない。SEO記事としての情報量を優先し、あえて手をつけていない。
4. **Before/After画像**：Gitでの差分は文章（本レポート3節）で説明する形にとどめ、画像としてのBefore/After生成は行っていない（下記参照）。

## 9. Test Report

- `npx eslint .` → エラーなし
- `npx tsc --noEmit` → エラーなし
- `npx next build` → 成功（全20ルート、静的生成含め正常終了）
- 主要route確認（ローカル本番サーバー, `next start`）：`/` `/works` `/works/garden-breakfast` `/philosophy` `/performance` `/journal` `/contact` すべて200応答、コンソールエラーなし
- Playwrightによる実ブラウザレンダリングでのスクリーンショット取得・目視確認済み（Desktop 1440×1000 / Mobile 390×844、対象6ルート）

## 10. Design Self-Critique

**1. テンプレート感は残っていないか。**
Works一覧・TenYearsLater・ThreePromisesは明確にテンプレート感を脱している。一方でPeopleセクション（3人横並び）とPerformanceの行リストは、構造としては依然「よくあるパターン」に近い。ただしPeopleは人数的に3人が自然な構成であり、Performanceは番号＋英語ラベルで差別化を図った。完全にゼロにはできていない。

**2. AI生成サイト特有の症状（カード乱用・英字乱用・過剰fade・同一レイアウト反復）が残っていないか。**
角丸カード・ドロップシャドウは引き続き不使用。英字は「10 Years Later」「Concept Area」等ブランド上意味のあるものに限定した。同一レイアウトの3回以上の反復は解消したが、Reveal/ImageRevealのfadeパターン自体は全セクション共通で使っており、モーション設計として「もう一段の変化」を作る余地はまだある（duration/easeを変える、一部セクションだけ別演出にする等）。

**3. 写真が強いだけのサイトではなく、Webデザインそのものにも価値があるか。**
TenYearsLaterのタイポグラフィ処理、Performanceの番号ラベル構造、Works一覧の非対称グリッドは「写真がなくても成立する設計判断」であり、単なる写真集ではないことを示せていると考える。

**4. 工務店の発注担当者が見て「業界を理解している」と思えるか。**
SPEC→BENEFITの翻訳構造、施工事例のCase Study的な見せ方、Process の「その後」の強調は、住宅業界特有の顧客心理（性能の分かりにくさ、引き渡し後の不安）を踏まえた設計になっている。

**5. Web制作会社のディレクターが見ても「設計理由を説明できる制作者」に見えるか。**
本レポートの「Major Design Changes」で全変更に理由を紐づけられている点は、この基準を満たすための直接的な証拠になっていると思う。

**6. 30〜100万円クラスの案件へ応募するとき、このサイトを提出することがプラスに働く品質か。**
V1と比べて明確にプラス。ただし「はい、間違いなく」と言い切るには、実際の発注者（工務店・建築系以外の業種）向けにレイアウトパターンを転用できることを示す2本目・3本目のポートフォリオが今後必要になる。

**7. Mobileでも同じ評価になるか。**
TenYearsLaterの巨大タイポ、Three Promisesのフルブリード演出はMobileでも十分機能することを確認した。ただしDesktopの「静かな余白」の効き方は、画面が小さい分どうしても弱まる。Mobileは「情報を削って読みやすくする」ことは達成できているが、Desktopほどの"間"の贅沢さは物理的に再現しきれていない。
