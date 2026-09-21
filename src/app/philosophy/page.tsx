import type { Metadata } from "next";
import Image from "next/image";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal, ImageReveal } from "@/components/Reveal";
import { image, type ImageKey } from "@/lib/images";
import { PeopleList } from "@/components/PeopleList";

export const metadata: Metadata = {
  title: "私たちについて",
  description:
    "灯森工務店が大切にしている、3つの考え方。完成時の美しさより、暮らした後の美しさを。",
};

const statements: { no: string; title: string; text: string; img: ImageKey; alt: string }[] = [
  {
    no: "01",
    title: "完成時の美しさより、\n暮らした後の美しさ。",
    text: "引き渡しの日、家はいちばん綺麗に見えます。でも、その美しさは時間が経てば当たり前になっていきます。私たちが目指すのは、5年後、10年後に見返したときに「良かった」と思える美しさです。写真映えのために暮らしを犠牲にすることは、私たちの設計にはありません。",
    img: "houseCArch",
    alt: "アーチ型の開口部から見える、静かで柔らかな光の室内",
  },
  {
    no: "02",
    title: "建物ではなく、\n生活から考える。",
    text: "間取りの相談は、いつも「どんな家にしたいか」ではなく「どんな朝を過ごしたいか」から始まります。建物は、その暮らしを実現するための入れ物にすぎません。順番を間違えると、見た目は整っていても住みにくい家になってしまいます。",
    img: "houseDDoors",
    alt: "白い建具と無垢の床が続く、静かな廊下",
  },
  {
    no: "03",
    title: "性能は目的ではなく、\n心地よく暮らすための手段。",
    text: "耐震等級や断熱性能の数値そのものは、暮らしの目的にはなり得ません。大切なのは、その数値が実際の生活のどんな場面で、どんな安心につながるのかということ。数字を追いかけるのではなく、数字を暮らしの言葉に翻訳することを大切にしています。",
    img: "houseBWindowSeat",
    alt: "柔らかな光が差し込む、窓辺の小さな読書スペース",
  },
];

export default function PhilosophyPage() {
  return (
    <div>
      <div className="section pb-0 pt-16 md:pt-20">
        <div className="wide">
          <Reveal className="max-w-2xl">
            <SectionLabel>Our Philosophy</SectionLabel>
            <h1 className="text-[32px] leading-[1.6] md:text-[44px] md:leading-[1.55]">
              私たちが大切にしていること。
            </h1>
            <p className="mt-6 text-[14px] leading-loose text-secondary md:text-[15px]">
              代表からの挨拶ではなく、私たちが日々の設計や現場で判断に迷ったときに立ち返る、
              3つの考え方を紹介します。
            </p>
          </Reveal>
        </div>
      </div>

      <div className="wide section">
        <div className="flex flex-col gap-24 md:gap-36">
          {statements.map((s, i) => (
            <div
              key={s.no}
              className={`flex flex-col gap-10 md:gap-14 lg:items-center ${
                i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}
            >
              <ImageReveal className="lg:w-1/2">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={image(s.img, 1400)}
                    alt={s.alt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </ImageReveal>

              <Reveal delay={0.1} className="lg:w-1/2">
                <p className="font-en-serif text-sm italic tracking-[0.2em] text-wood">
                  {s.no}
                </p>
                <h2 className="mt-4 max-w-sm whitespace-pre-line text-[24px] leading-[1.6] md:text-[30px]">
                  {s.title}
                </h2>
                <p className="mt-6 max-w-md text-[14px] leading-loose text-secondary md:text-[15px]">
                  {s.text}
                </p>
              </Reveal>
            </div>
          ))}
        </div>
      </div>

      <PeopleList />
    </div>
  );
}
