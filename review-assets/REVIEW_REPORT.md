# FINAL REVIEW REPORT

## 1. Summary

「良いコンセプトサイト」から「30〜100万円規模の企業サイト案件を任せられる制作者」と判断される完成度への最終調整（V3）。コアコンセプト・世界観・情報設計・アニメーション方針は維持したまま、①People/Performance/Journalに残っていたテンプレート的な構造の解消、②性能コピーの表現リスクの是正、③架空情報の残存表記の削除、④モーションの単調さの解消、を中心に手を入れた。大改修はせず、既存コンポーネントへの差分編集のみで完結させている。

## 2. Changed Files

- `src/components/home/PeopleSection.tsx`（Home Peopleを3人別レイアウトへ再設計）
- `src/components/PeopleList.tsx`（新規／Philosophy用の簡易People表示）
- `src/data/people.ts`（引用文を「思想の一言」形式へ）
- `src/app/philosophy/page.tsx`（People表示をPeopleListに差し替え）
- `src/app/performance/page.tsx`（3グループのリズム構成＋コピー安全性の見直し）
- `src/components/home/PerformanceSection.tsx`（Home側も2グループのリズムへ）
- `src/data/journal.ts`（image/imageAlt/pullQuoteフィールドを追加）
- `src/app/journal/page.tsx`（一覧にサムネイル追加）
- `src/app/journal/[slug]/page.tsx`（パンくず・Heroイメージ・Pull Quote・関連記事・End CTA・OGP・Article構造化データを追加）
- `src/components/ContactForm.tsx`（プレースホルダーの架空地名を修正、Demo Complete表記を追加）
- `src/lib/site.ts`（架空住所を削除、`areaLabel`へ）
- `src/app/contact/page.tsx`（`site.address`参照を`site.areaLabel`に更新）
- `src/components/Reveal.tsx`（`FadeText`variantを追加）
- `src/components/home/TenYearsLater.tsx`（巨大タイポをFadeTextへ、補足文を静止表示に）
- `src/components/home/ThreePromises.tsx`（02の補足文をSmall Translateへ）

## 3. Design Improvements

**People（Home）を3人同一カードから個別レイアウトへ。**
理由：写真・名前・肩書き・説明という並びは一般的な企業サイトのプロフィールカードに最も近く、テンプレート感の温床になりやすい。1人目＝大判ポートレート＋Pull Quote的な一言、2人目＝小さな正方形写真＋横並びテキスト、3人目＝小さな写真＋余白を大きく使った縦構成、と役割を分けた。引用文も職種説明ではなく「図面より先に、その家族の朝を想像します。」のような思想の一言に短縮。

**PhilosophyページのPeopleを、Homeと同じコンポーネントの使い回しから、行リスト形式の`PeopleList`へ分離。**
理由：同じセクションが2ページで全く同じ見た目で繰り返されることのテンプレート感を解消するため。

**Performance（Home / 詳細ページ）を単一の行リストから3つのリズムへ分割。**
理由：番号→名称→数値→説明→ベネフィットの同型構造が連続するとリストUIに見える。01-02は横長Editorial Row、03-04（UA値・C値）は巨大数値＋小さな説明、05-06（換気・長期優良住宅）は写真＋スペックのペアリング、という3パターンに分けた。

**Journal一覧にサムネイル画像を追加。詳細ページを大幅強化。**
理由：単なるテキストリンクの一覧・本文だけの記事ページは、ブログテンプレートに見えやすい。一覧にはサムネイルを追加して雑誌の目次のような見せ方に、詳細ページにはパンくず・大きなHeroイメージ・Pull Quote・関連記事2本・末尾のソフトなCTAを追加し、建築雑誌のEditorial Pageに近づけた。

## 4. UX/CRO Improvements

- Journal記事末に「家づくりについて、話してみませんか。」＋Primary（家づくりの話をしてみる）／Secondary（施工事例を見る）のソフトなCTAを追加。売り込み感を出さない範囲で、Contact・Worksへの回遊を作った。
- 関連記事を2本表示し、Journal内での回遊を促進。
- Contact下部の会社情報から、架空の住所表記（架空県架空市 本町1-2-3）を削除し、「Kanto Area — Concept Project」という世界観を壊さない表記に変更。
- Contactフォームの「ご検討エリア」プレースホルダーも「例）架空県 架空市」→「例）〇〇県 〇〇市」という一般的なプレースホルダー表現に修正。
- 送信後の完了画面に「DEMO COMPLETE」ラベルを追加し、DEMO FORMの表示と対になるよう整理。

## 5. Responsive Improvements

- 新設したPeopleセクションの3レイアウトは、Mobileでは単純に縦積みになるよう`lg:`ブレークポイントで制御。Desktopの非対称配置をMobileで無理に再現せず、375〜430px幅で確認済み。
- Performanceの「巨大数値」グループは、Mobileで`md:grid-cols-2`が外れ1カラム表示になり、数値の可読性を確認済み。
- Journal詳細のパンくず・Hero画像・Pull Quote・関連記事すべて、Mobileでの折り返し・余白を確認済み。

## 6. Accessibility

- Journal詳細ページの`<nav aria-label="breadcrumb">`にパンくずを実装。
- Article構造化データ（JSON-LD）を`journal/[slug]`ページに追加。
- 既存のalt text（具体的な説明文）・focus state（ブラウザデフォルト維持）・見出し階層（h1は各ページ1つ）は変更なく維持。
- People/PeopleListの画像altは人物の様子を説明する文章のまま維持。

## 7. Performance

- 新規追加したJournal用画像・関連記事サムネイルも含め、すべて`next/image`経由（`sizes`指定）で最適化対象。
- 新規追加コンポーネント（`PeopleList`、`FadeText`）はいずれもクライアントJSの追加バンドルを最小限に抑えている（`FadeText`はframer-motionの既存importを再利用するのみ）。
- `next build`で全20ルートの静的生成が成功することを確認。

## 8. Remaining Concerns

- Performanceページの「巨大数値」グループ（UA値・C値）は視覚的にはインパクトがあるが、SAMPLE SPECである旨の注記がページ冒頭にしかないため、このグループ単体を切り取って見た場合の誤解リスクはゼロではない。将来的に各数値の近くにも小さく「想定値」の注記を添えることを検討してよい。
- Journal記事のPull Quoteは本文からの抜粋を手動で選定しており、記事本文と完全に同期する仕組み（自動抽出）にはなっていない。記事を増やす際は都度手動でPull Quoteを設定する必要がある。
- V2レポートで指摘した「fullPageスクリーンショットでfixed要素（Concept Projectバッジ／モバイルCTAバー）が本文と重なって見える」現象は今回も同様に発生するが、実際のスクロール動作では重ならないことを確認済み（スクリーンショット取得方式特有の見え方）。

## 9. Human Review Points

1. **PeopleセクションのHomeでの3レイアウト**が、実際に「人間のアートディレクターが意図的に編集した」ように見えるか、それとも単に不揃いに見えるか。
2. **Performanceの「巨大数値」グループ**が、住宅性能サイトとして誠実な見せ方になっているか（数字を煽っていないか）。
3. **Journal詳細ページのPull Quote抜粋**が、その記事の要点として適切な一文になっているか（5記事×1文を手動選定したため、記事によって強弱の差がある可能性）。
4. **Contactの「Kanto Area — Concept Project」表記**が、日本語の他の表記（工務店名・タグライン）と並んだときにトーンとして浮いていないか。
