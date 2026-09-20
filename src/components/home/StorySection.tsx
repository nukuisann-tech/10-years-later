import Image from "next/image";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal, ImageReveal } from "@/components/Reveal";
import { image } from "@/lib/images";

export function StorySection() {
  return (
    <section className="section bg-base">
      <div className="wide">
        <Reveal className="mb-14 max-w-2xl md:mb-20">
          <SectionLabel>A Family Story</SectionLabel>
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
            <Reveal className="space-y-6 text-[14px] leading-loose text-secondary md:text-[15px]">
              <p>
                共働きで、子どもは1人。夫婦それぞれの通勤時間を考えて選んだ賃貸マンションは、
                日当たりがよくなく、休日の朝も少し薄暗いままでした。
              </p>
              <p>
                「せめて休日くらいは、光の中でゆっくり朝ごはんを食べたい」。
                最初の相談で伺ったのは、性能でも間取りでもなく、そんな小さな願いでした。
              </p>
              <p>
                土地に残っていた大きな木を活かし、キッチンから庭へ抜ける動線を設計。
                朝の光が奥まで届くよう、開口部の高さと位置を何度も調整しました。
              </p>
            </Reveal>

            <Reveal delay={0.1} className="mt-8 border-l-2 border-wood pl-6">
              <p className="font-serif-jp text-[17px] leading-[1.8] text-ink md:text-[18px]">
                「休日の朝、子どもがまだ寝ている間に、
                夫婦でコーヒーを飲みながら庭を眺める時間ができました。」
              </p>
              <p className="mt-3 text-[12px] tracking-wide text-secondary">
                — 施主インタビューより（架空の事例です）
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
