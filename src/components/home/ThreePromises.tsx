import Image from "next/image";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal, ImageReveal } from "@/components/Reveal";
import { image } from "@/lib/images";

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

        <div className="flex flex-col gap-24 md:gap-32">
          {/* 01 — text left / image right */}
          <div className="flex flex-col gap-10 md:flex-row md:items-center md:gap-16">
            <Reveal className="md:w-2/5">
              <p className="font-en-serif text-sm italic tracking-[0.2em] text-wood">
                01 — Design
              </p>
              <h3 className="mt-4 max-w-sm text-[24px] leading-[1.6] md:text-[28px]">
                暮らしから逆算する設計
              </h3>
              <p className="mt-6 max-w-sm text-[14px] leading-loose text-secondary md:text-[15px]">
                一日を分解し、間取りと素材を逆算する。写真映えより、10年後の使い勝手を優先します。
              </p>
            </Reveal>
            <ImageReveal delay={0.1} className="md:w-3/5">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={image("houseELiving", 1400)}
                  alt="木の梁とアーチ型の窓を持つ、開放的なリビングダイニング"
                  fill
                  sizes="(min-width: 768px) 55vw, 100vw"
                  className="object-cover"
                />
              </div>
            </ImageReveal>
          </div>

          {/* 02 — full-bleed image with overlay label */}
          <div>
            <ImageReveal>
              <div className="relative aspect-[16/9] w-full overflow-hidden md:aspect-[21/9]">
                <Image
                  src={image("houseBKitchen", 1800)}
                  alt="木と白を基調にした、リビングを見渡せるキッチン"
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/0 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 md:p-12">
                  <p className="font-en-serif text-sm italic tracking-[0.2em] text-base/80">
                    02 — Performance
                  </p>
                  <h3 className="mt-3 text-[24px] text-base md:text-[32px]">
                    数字で証明できる安心
                  </h3>
                </div>
              </div>
            </ImageReveal>
            <Reveal delay={0.1} y={6}>
              <p className="mt-6 max-w-md text-[14px] leading-loose text-secondary md:text-[15px]">
                耐震・断熱・気密。感覚ではなく数値で確認できる性能を、暮らしの言葉に翻訳してお伝えします。
              </p>
            </Reveal>
          </div>

          {/* 03 — image left / text right */}
          <div className="flex flex-col gap-10 md:flex-row-reverse md:items-center md:gap-16">
            <Reveal className="md:w-2/5">
              <p className="font-en-serif text-sm italic tracking-[0.2em] text-wood">
                03 — Craft
              </p>
              <h3 className="mt-4 max-w-sm text-[24px] leading-[1.6] md:text-[28px]">
                見えない場所まで丁寧につくる
              </h3>
              <p className="mt-6 max-w-sm text-[14px] leading-loose text-secondary md:text-[15px]">
                竣工後は見えなくなる場所ほど、時間をかけて確認する。安心は、その丁寧さで決まります。
              </p>
            </Reveal>
            <ImageReveal delay={0.1} className="md:w-3/5">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={image("houseEShelf", 1400)}
                  alt="木製の造作棚に飾られた植物と写真立て"
                  fill
                  sizes="(min-width: 768px) 55vw, 100vw"
                  className="object-cover"
                />
              </div>
            </ImageReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
