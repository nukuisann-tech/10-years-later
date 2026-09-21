import Image from "next/image";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal, ImageReveal } from "@/components/Reveal";
import { image } from "@/lib/images";
import { people } from "@/data/people";

export function PeopleSection() {
  const [a, b, c] = people;

  return (
    <section className="section bg-base">
      <div className="wide">
        <Reveal className="mb-16 max-w-2xl md:mb-20">
          <SectionLabel>People</SectionLabel>
          <h2 className="text-[28px] leading-[1.5] md:text-[36px]">
            誰がつくるか、を大切にしています。
          </h2>
          <p className="mt-6 text-[14px] leading-loose text-secondary md:text-[15px]">
            打ち合わせから現場まで、担当が変わらないことを大切にしています。
          </p>
          <p className="mt-3 text-[11px] tracking-wide text-secondary/70">
            ※ CONCEPT PROJECTのため、人物・役職は架空の設定です。
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-8">
          {/* 1: large portrait, quote overlaid below in a caption card */}
          <div className="lg:col-span-5">
            <ImageReveal>
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src={image(a.image, 900)}
                  alt={a.alt}
                  fill
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className="object-cover grayscale-[15%]"
                />
              </div>
            </ImageReveal>
            <Reveal delay={0.1} className="mt-6">
              <p className="font-serif-jp whitespace-pre-line text-[19px] leading-[1.7] text-ink md:text-[21px]">
                {a.quote}
              </p>
              <p className="mt-4 text-[12px] tracking-wide text-secondary">
                {a.name} — {a.role}
              </p>
            </Reveal>
          </div>

          {/* 2: small square photo + text, horizontal */}
          <div className="lg:col-span-4 lg:pt-10">
            <Reveal className="flex items-start gap-5">
              <ImageReveal className="w-24 shrink-0 md:w-28">
                <div className="relative aspect-square w-full overflow-hidden">
                  <Image
                    src={image(b.image, 400)}
                    alt={b.alt}
                    fill
                    sizes="120px"
                    className="object-cover grayscale-[15%]"
                  />
                </div>
              </ImageReveal>
              <div>
                <p className="text-[12px] tracking-wide text-wood">{b.role}</p>
                <p className="font-serif-jp mt-1 text-[17px] text-ink">{b.name}</p>
                <p className="mt-4 whitespace-pre-line text-[14px] leading-[1.8] text-secondary">
                  {b.quote}
                </p>
              </div>
            </Reveal>
          </div>

          {/* 3: generous whitespace, small photo, vertical */}
          <div className="lg:col-span-3 lg:pt-24">
            <ImageReveal className="w-16">
              <div className="relative aspect-square w-full overflow-hidden">
                <Image
                  src={image(c.image, 300)}
                  alt={c.alt}
                  fill
                  sizes="80px"
                  className="object-cover grayscale-[15%]"
                />
              </div>
            </ImageReveal>
            <Reveal delay={0.1} className="mt-8">
              <p className="font-serif-jp whitespace-pre-line text-[17px] leading-[1.8] text-ink">
                {c.quote}
              </p>
              <p className="mt-5 text-[12px] tracking-wide text-secondary">
                {c.name} — {c.role}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
