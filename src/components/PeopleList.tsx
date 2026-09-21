import Image from "next/image";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";
import { image } from "@/lib/images";
import { people } from "@/data/people";

export function PeopleList() {
  return (
    <section className="section bg-surface">
      <div className="wide">
        <Reveal className="mb-14 max-w-2xl md:mb-16">
          <SectionLabel>People</SectionLabel>
          <h2 className="text-[28px] leading-[1.5] md:text-[36px]">
            誰がつくるか、を大切にしています。
          </h2>
        </Reveal>

        <div className="border-t hairline">
          {people.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.05}>
              <div className="grid grid-cols-1 gap-4 border-b hairline py-8 md:grid-cols-12 md:items-center md:gap-8">
                <div className="flex items-center gap-4 md:col-span-4">
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full">
                    <Image
                      src={image(p.image, 200)}
                      alt={p.alt}
                      fill
                      sizes="56px"
                      className="object-cover grayscale-[15%]"
                    />
                  </div>
                  <div>
                    <p className="font-serif-jp text-[16px] text-ink">{p.name}</p>
                    <p className="text-[11px] tracking-wide text-wood">{p.role}</p>
                  </div>
                </div>
                <p className="whitespace-pre-line text-[13px] leading-relaxed text-secondary md:col-span-8">
                  {p.quote.replace("\n", " ")}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-[11px] tracking-wide text-secondary/70">
          ※ CONCEPT PROJECTのため、人物・役職は架空の設定です。
        </p>
      </div>
    </section>
  );
}
