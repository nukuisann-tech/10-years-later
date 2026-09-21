import Image from "next/image";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal, ImageReveal } from "@/components/Reveal";
import { image } from "@/lib/images";
import { people } from "@/data/people";

export function PeopleSection() {
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

        <div className="grid grid-cols-1 gap-14 sm:grid-cols-3 sm:gap-8">
          {people.map((p, i) => (
            <div key={p.name}>
              <ImageReveal delay={i * 0.08}>
                <div className="relative aspect-[3/4] w-full overflow-hidden">
                  <Image
                    src={image(p.image, 800)}
                    alt={p.alt}
                    fill
                    sizes="(min-width: 640px) 30vw, 80vw"
                    className="object-cover grayscale-[20%] contrast-[1.03]"
                  />
                  <div className="absolute inset-0 bg-wood/10 mix-blend-multiply" />
                </div>
              </ImageReveal>
              <Reveal delay={i * 0.08 + 0.1}>
                <p className="font-serif-jp mt-5 text-[17px] text-ink">{p.name}</p>
                <p className="mt-1 text-[12px] tracking-wide text-wood">{p.role}</p>
                <p className="mt-4 text-[13px] leading-loose text-secondary">
                  {p.quote}
                </p>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
