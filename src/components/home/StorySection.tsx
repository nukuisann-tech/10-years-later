import Image from "next/image";
import Link from "next/link";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal, ImageReveal } from "@/components/Reveal";
import { image } from "@/lib/images";

const beats = [
  {
    en: "Before",
    text: "共働きで、休日の朝すら光の中で過ごせなかったご夫婦。",
  },
  {
    en: "Design",
    text: "土地に残る木を活かし、キッチンから庭へ抜ける動線を設計。",
  },
  {
    en: "Now",
    text: "休日の朝、子どもが起きる前に夫婦で庭を眺める時間が生まれた。",
  },
];

export function StorySection() {
  return (
    <section className="section bg-base">
      <div className="wide">
        <Reveal className="mb-14 max-w-2xl md:mb-20">
          <SectionLabel>Case Study Preview</SectionLabel>
          <h2 className="text-[28px] leading-[1.5] md:text-[36px]">
            ある家族の、10年のはじまり。
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <ImageReveal className="lg:col-span-7">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={image("houseADayGarden", 1600)}
                alt="大きな木のある庭で、屋外のダイニングテーブルを囲む住宅"
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover"
              />
            </div>
          </ImageReveal>

          <div className="lg:col-span-5">
            <Reveal>
              <div className="space-y-6">
                {beats.map((b) => (
                  <div key={b.en} className="border-l-2 border-line pl-5">
                    <p className="font-en-serif text-[12px] italic tracking-[0.16em] text-wood">
                      {b.en}
                    </p>
                    <p className="mt-1.5 text-[14px] leading-relaxed text-secondary md:text-[15px]">
                      {b.text}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <Link
                href="/works/garden-breakfast"
                className="mt-8 inline-flex items-center text-[13px] tracking-wide text-ink underline decoration-line underline-offset-8 transition-colors hover:decoration-wood"
              >
                この事例の詳細を読む
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
