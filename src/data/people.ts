import type { ImageKey } from "@/lib/images";

export type Person = {
  name: string;
  role: string;
  image: ImageKey;
  alt: string;
  quote: string;
};

export const people: Person[] = [
  {
    name: "宮下 千夏",
    role: "設計 / プランナー",
    image: "teamWomanOutdoor",
    alt: "屋外で自然光の中、柔らかく微笑む設計担当の女性",
    quote:
      "図面を引く前に、まず一日の過ごし方を聞かせてもらいます。暮らしが見えないと、良い間取りは描けません。",
  },
  {
    name: "元木 悠人",
    role: "現場管理",
    image: "teamManGlasses",
    alt: "落ち着いた表情でこちらを見る現場管理担当の男性",
    quote:
      "見えなくなる場所ほど、丁寧に。壁の中の下地一本まで、10年後の安心につながっています。",
  },
  {
    name: "夏川 玲奈",
    role: "コーディネーター",
    image: "teamWomanCasual",
    alt: "自然な笑顔でこちらを見るコーディネーター担当の女性",
    quote:
      "打ち合わせは、こちらから話す時間より聞く時間の方が長いくらいがちょうどいいと思っています。",
  },
];
