import Image from "next/image";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal, ImageReveal } from "@/components/Reveal";
import { image, type ImageKey } from "@/lib/images";

const promises: {
  no: string;
  en: string;
  title: string;
  text: string;
  img: ImageKey;
  alt: string;
}[] = [
  {
    no: "01",
    en: "Design",
    title: "暮らしから逆算する設計",
    text: "見た目の美しさから考えるのではなく、朝起きてから夜眠るまでの一日を分解し、そこから間取りと素材を逆算します。写真映えより、10年後の使い勝手を優先します。",
    img: "houseELiving",
    alt: "木の梁とアーチ型の窓を持つ、開放的なリビングダイニング",
  },
  {
    no: "02",
    en: "Performance",
    title: "数字で証明できる安心",
    text: "耐震・断熱・気密。感覚ではなく数値で確認できる性能を標準とし、その数値が暮らしのどんな安心につながるのかまで、必ず言葉にしてお伝えします。",
    img: "houseBKitchen",
    alt: "木と白を基調にした、リビングを見渡せるキッチン",
  },
  {
    no: "03",
    en: "Craft",
    title: "見えない場所まで丁寧につくる",
    text: "壁の中の断熱材、床下の配管、天井裏の下地。竣工後は見えなくなる場所ほど、時間をかけて確認します。10年後の安心は、見えない場所の丁寧さで決まると考えています。",
    img: "houseEShelf",
    alt: "木製の造作棚に飾られた植物と写真立て",
  },
];

export function ThreePromises() {
  return (
    <section className="section bg-base">
      <div className="wide">
        <Reveal className="mb-16 md:mb-24">
          <SectionLabel>Three Promises</SectionLabel>
          <h2 className="max-w-lg text-[28px] leading-[1.5] md:text-[36px]">
            3つの、家づくりの思想。
          </h2>
        </Reveal>

        <div className="flex flex-col gap-24 md:gap-36">
          {promises.map((p, i) => (
            <div
              key={p.no}
              className={`flex flex-col gap-10 md:gap-14 lg:items-center ${
                i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}
            >
              <ImageReveal className="lg:w-1/2">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={image(p.img, 1400)}
                    alt={p.alt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </ImageReveal>

              <Reveal delay={0.1} className="lg:w-1/2">
                <p className="font-en-serif text-sm italic tracking-[0.2em] text-wood">
                  {p.no} — {p.en}
                </p>
                <h3 className="mt-4 max-w-sm text-[24px] leading-[1.6] md:text-[28px]">
                  {p.title}
                </h3>
                <p className="mt-6 max-w-md text-[14px] leading-loose text-secondary md:text-[15px]">
                  {p.text}
                </p>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
