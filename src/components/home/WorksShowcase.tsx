import Image from "next/image";
import Link from "next/link";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal, ImageReveal } from "@/components/Reveal";
import { image } from "@/lib/images";
import { works } from "@/data/works";

function Tile({
  slug,
  title,
  family,
  aspect,
  delay = 0,
}: {
  slug: string;
  title: string;
  family: string;
  aspect: string;
  delay?: number;
}) {
  const work = works.find((w) => w.slug === slug)!;
  return (
    <ImageReveal delay={delay} className="group">
      <Link href={`/works/${work.slug}`} className="block">
        <div className={`relative overflow-hidden ${aspect}`}>
          <Image
            src={image(work.heroImage, 1200)}
            alt={work.heroAlt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.02]"
          />
        </div>
        <p className="font-serif-jp mt-5 text-[19px] leading-snug text-ink md:text-[21px]">
          {title}
        </p>
        <p className="mt-1.5 text-[12px] tracking-wide text-secondary">{family}</p>
      </Link>
    </ImageReveal>
  );
}

export function WorksShowcase() {
  return (
    <section className="section bg-base">
      <div className="wide">
        <Reveal className="mb-16 flex flex-col items-start justify-between gap-6 md:mb-20 md:flex-row md:items-end">
          <div>
            <SectionLabel>Works</SectionLabel>
            <h2 className="max-w-lg text-[28px] leading-[1.5] md:text-[36px]">
              暮らしから見る、家。
            </h2>
          </div>
          <Link
            href="/works"
            className="shrink-0 text-[13px] tracking-wide text-ink underline decoration-line underline-offset-8 transition-colors hover:decoration-wood"
          >
            すべての施工事例を見る
          </Link>
        </Reveal>

        <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-12 md:gap-y-20">
          <div className="md:col-span-7">
            <Tile
              slug="garden-breakfast"
              title="庭と朝食を楽しむ家"
              family="夫婦 + 子ども1人 ・ 2階建て"
              aspect="aspect-[4/3]"
            />
          </div>
          <div className="md:col-span-5">
            <Tile
              slug="quiet-with-books"
              title="本と静かに暮らす家"
              family="夫婦 + 子ども1人 ・ リノベーション"
              aspect="aspect-[4/5]"
              delay={0.1}
            />
          </div>

          <div className="md:col-span-4">
            <Tile
              slug="watching-child-grow"
              title="子どもの成長を見守る平屋"
              family="夫婦 + 子ども2人 ・ 平屋"
              aspect="aspect-[3/4]"
            />
          </div>
          <div className="md:col-span-4">
            <Tile
              slug="rainy-day"
              title="雨の日が好きになる家"
              family="夫婦のみ ・ 2階建て"
              aspect="aspect-[3/4]"
              delay={0.1}
            />
          </div>
          <div className="md:col-span-4">
            <Tile
              slug="gather-in-kitchen"
              title="家族が自然と集まる台所"
              family="夫婦 + 子ども2人 ・ 土地探しから"
              aspect="aspect-[3/4]"
              delay={0.2}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
