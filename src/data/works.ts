import type { ImageKey } from "@/lib/images";

export type WorkCategory = "平屋" | "2階建て" | "リノベーション" | "土地探しから";

export type Work = {
  slug: string;
  title: string;
  location: string;
  family: string;
  theme: string;
  category: WorkCategory;
  heroImage: ImageKey;
  heroAlt: string;
  galleryImages: { key: ImageKey; alt: string }[];
  concept: string;
  clientStory: string[];
  designSolution: string[];
  material: string;
  plan: string;
  tenYearsMessage: string;
};

export const works: Work[] = [
  {
    slug: "garden-breakfast",
    title: "庭と朝食を楽しむ家",
    location: "Kanto Area",
    family: "夫婦 + 子ども1人",
    theme: "大きな木の下で、朝がはじまる家。",
    category: "2階建て",
    heroImage: "houseADayGarden",
    heroAlt: "大きな木のある庭で、屋外のダイニングテーブルを囲む住宅",
    galleryImages: [
      { key: "houseADuskTree", alt: "夕暮れ、木立の向こうに灯りがともる家の外観" },
      { key: "houseADuskEntry", alt: "夜、室内の灯りが漏れる黒い外壁の住宅" },
      { key: "houseAEntrance", alt: "木格子のスクリーンごしに灯りがともる玄関まわり" },
      { key: "houseAInterior", alt: "木の壁と大きな窓を持つ、開放的なリビングダイニング" },
    ],
    concept:
      "土地に元々あった大きな木を、切らずに残すこと。それがこの家の設計の出発点でした。庭とキッチンを一直線につなぎ、朝食を外で摂るという、当たり前でいて忘れられがちな時間を取り戻すための家です。",
    clientStory: [
      "共働きのご夫婦にとって、平日の朝はいつも慌ただしいものでした。「せめて休日くらいは、家族でゆっくり朝ごはんを食べたい」。最初のヒアリングで伺ったのは、そんな小さな、でも切実な希望でした。",
      "土地に残る一本の木を見たとき、この木の下で朝食を食べる暮らしを設計しようと決めました。木を中心に据え、リビングと庭の間仕切りを最小限にすることで、内と外がゆるやかにつながる空間をつくっています。",
    ],
    designSolution: [
      "キッチンから庭までを段差なくつなぎ、天気の良い日は自然と外に出たくなる動線を設計。",
      "庭に面した開口部は、朝の光を室内の奥まで届けるよう高さと位置を検討しました。",
    ],
    material: "外壁: 木質系サイディング（経年で色が落ち着くタイプ） / 床: 無垢オーク材",
    plan: "1階にLDK・水回り、2階に個室3室。将来的な子ども部屋の間仕切り増設に対応した下地補強を実施。",
    tenYearsMessage:
      "10年後、この木はもっと大きくなっているはずです。子どもが木登りを覚え、夫婦がまた違う朝の過ごし方を見つけている。そんな未来まで含めて、この庭を設計しました。",
  },
  {
    slug: "watching-child-grow",
    title: "子どもの成長を見守る平屋",
    location: "Kanto Area",
    family: "夫婦 + 子ども2人",
    theme: "段差のない一室で、家族の気配がいつもそばにある。",
    category: "平屋",
    heroImage: "houseBExterior",
    heroAlt: "木質のアクセントを持つ、シンプルな平屋の外観",
    galleryImages: [
      { key: "houseBKitchen", alt: "木と白を基調にした、リビングを見渡せるキッチン" },
      { key: "houseBWindowSeat", alt: "柔らかな光が差し込む、窓辺の小さな読書スペース" },
    ],
    concept:
      "「子どもがどこにいても、気配だけは感じていたい」というご要望から、あえて廊下を極力なくし、回遊できる一室空間として設計した平屋です。",
    clientStory: [
      "上のお子さんが生まれたタイミングで、家づくりを考え始めたご夫婦。マンションでは死角が多く、目を離した瞬間が不安だったといいます。",
      "平屋であること、部屋を細かく分けすぎないことを条件に、キッチンに立ちながらリビングと庭の両方に目が届く配置を採用しました。",
    ],
    designSolution: [
      "キッチンを空間の中心に置き、どこにいても家族の様子が視界に入る回遊動線を確保。",
      "成長に合わせて間仕切りを追加できるよう、将来の建具レールをあらかじめ天井に仕込んでいます。",
    ],
    material: "内装: 珪藻土塗り壁 / 建具: 突板無垢の引き戸",
    plan: "ワンルーム型のLDKを中心に、水回りと2つの個室を配置。将来の個室追加を見込んだ可変プラン。",
    tenYearsMessage:
      "10年後、今は目が離せない子どもたちも、自分の部屋を欲しがる年頃になっているでしょう。そのときに間仕切りを足せるよう、今はあえて壁を作らずに待っています。",
  },
  {
    slug: "rainy-day",
    title: "雨の日が好きになる家",
    location: "Tohoku Area",
    family: "夫婦のみ",
    theme: "音と光を味方につけた、雨の日の過ごし方。",
    category: "2階建て",
    heroImage: "houseCLiving",
    heroAlt: "木の天井と大きな窓を持つ、緑に面したリビング",
    galleryImages: [
      { key: "houseCStair", alt: "階段のある明るいリビングで過ごす愛犬" },
      { key: "houseCArch", alt: "アーチ型の開口部から見える、静かな室内風景" },
    ],
    concept:
      "「梅雨がずっと苦手だった」というご夫婦のための家。雨音が響きすぎない屋根構成と、雨の日でも部屋が暗くならない開口計画で、天気に左右されない心地よさを設計しました。",
    clientStory: [
      "在宅で過ごす時間が長いご夫婦にとって、天気は暮らしの気分を大きく左右するものでした。特に雨の日は気持ちが沈みがちだったそうです。",
      "屋根の勾配と軒の出を調整し、雨音を和らげながらも、窓からは緑だけが見えるように植栽と開口の位置を計画しました。",
    ],
    designSolution: [
      "屋根裏に吸音材を仕込み、雨音を「気にならない音」に調整。",
      "曇りの日でも部屋が暗くならないよう、天井の色と窓の位置を検討しました。",
    ],
    material: "屋根: 遮音性能を高めた金属屋根 / 内装: 明るいトーンの無垢杉材",
    plan: "1階に土間続きの趣味室、2階にLDKを配置し、天候に関わらず一日を過ごせる構成に。",
    tenYearsMessage:
      "10年後も、雨の日には変わらずこの家で過ごしているはずです。天気を気にしなくていい暮らしは、静かにいちばん長く効いてくる価値だと思っています。",
  },
  {
    slug: "quiet-with-books",
    title: "本と静かに暮らす家",
    location: "Kansai Area",
    family: "夫婦 + 子ども1人",
    theme: "本棚が、家族それぞれの居場所をつくる。",
    category: "リノベーション",
    heroImage: "houseDLiving",
    heroAlt: "本棚と観葉植物に囲まれた、落ち着いたリビング",
    galleryImages: [
      { key: "houseDChair", alt: "小さな椅子と観葉植物が置かれた、窓辺のコーナー" },
      { key: "houseDDoors", alt: "白い建具と無垢の床が続く、静かな廊下" },
    ],
    concept:
      "夫婦それぞれが大量の本を持ち込んだリノベーション案件。「収納する」のではなく「本と一緒に暮らす」ことを前提に、壁一面を本棚にした空間を設計しました。",
    clientStory: [
      "築20年の中古住宅を購入し、リノベーションを前提に土地探しから伴走したプロジェクトです。",
      "お互いの本棚が生活の主役になるよう、リビングの一面をすべて造作の本棚にし、それぞれの読書スペースを緩やかに分けています。",
    ],
    designSolution: [
      "既存躯体の耐震性能を診断のうえ補強し、壁一面の本棚を構造として活かす設計に。",
      "読書灯の位置を個別に設計し、隣にいても互いの光が気にならないよう配慮しました。",
    ],
    material: "本棚: シナ合板の造作家具 / 床: 既存躯体を活かした無垢フローリング張り替え",
    plan: "既存の3LDKから間仕切りを一部撤去し、LDKと一体化した書斎的リビングへ再構成。",
    tenYearsMessage:
      "本棚は、10年後にはきっと今よりも埋まっているはずです。増え続ける本の分だけ、家族の時間の厚みも増えていく。そんな育ち方をする家です。",
  },
  {
    slug: "gather-in-kitchen",
    title: "家族が自然と集まる台所",
    location: "Chubu Area",
    family: "夫婦 + 子ども2人",
    theme: "誰かが料理をしていると、自然と人が集まる。",
    category: "土地探しから",
    heroImage: "houseELiving",
    heroAlt: "木の梁とアーチ窓を持つ、開放的なリビングダイニング",
    galleryImages: [
      { key: "houseEGallery", alt: "革張りのソファとギャラリーウォールのあるリビング" },
      { key: "houseEShelf", alt: "木製の造作棚に飾られた植物と写真立て" },
      { key: "houseECoffee", alt: "木のテーブルに置かれたアイスコーヒー" },
    ],
    concept:
      "土地探しの段階からご相談いただいたプロジェクト。「キッチンに人が集まる実家のような家にしたい」というご要望をもとに、通学・通勤動線と土地の周辺環境を含めて計画しました。",
    clientStory: [
      "ご実家の台所に家族や親戚が自然と集まっていた記憶を、新しい家でも再現したいというご相談から始まりました。",
      "対面キッチンを一段下げて配置し、料理をしている人の目線がリビングにいる家族と近くなるよう高さを調整しています。",
    ],
    designSolution: [
      "キッチンカウンターを長くとり、腰掛けながら会話できる造作ベンチを併設。",
      "土地選びの段階で朝夕の日当たりを確認し、キッチンに午前の光が入る配置を提案しました。",
    ],
    material: "キッチン: モルタル造作カウンター / 建具: 無垢材の造作棚",
    plan: "土間からつながるLDKを中心に、回遊できるキッチンと家事室を隣接配置。",
    tenYearsMessage:
      "10年後、子どもたちが友達を連れてくるようになったとき、このキッチンが賑やかな声でいっぱいになっていることを想像しながら設計しました。",
  },
];

export function getWorkBySlug(slug: string) {
  return works.find((w) => w.slug === slug);
}
