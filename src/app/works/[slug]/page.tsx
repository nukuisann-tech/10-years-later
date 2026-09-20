import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal, ImageReveal } from "@/components/Reveal";
import { image } from "@/lib/images";
import { works, getWorkBySlug } from "@/data/works";

export function generateStaticParams() {
  return works.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const work = getWorkBySlug(slug);
  if (!work) return {};
  return {
    title: work.title,
    description: work.concept,
  };
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const work = getWorkBySlug(slug);
  if (!work) notFound();

  return (
    <article>
      <div className="relative aspect-[4/3] w-full overflow-hidden md:aspect-[16/8]">
        <Image
          src={image(work.heroImage, 2000)}
          alt={work.heroAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="wide flex flex-wrap items-center gap-x-8 gap-y-2 border-b hairline py-6 text-[12px] tracking-wide text-secondary">
        <span>{work.location}</span>
        <span>{work.family}</span>
        <span className="text-wood">{work.category}</span>
      </div>

      <div className="section pb-0 pt-16 md:pt-20">
        <div className="content">
          <Reveal>
            <h1 className="max-w-2xl text-[30px] leading-[1.5] md:text-[42px]">
              {work.title}
            </h1>
            <p className="mt-4 max-w-md font-en-serif text-[15px] italic text-wood">
              {work.theme}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-2xl text-[15px] leading-loose text-secondary md:text-[16px]">
              {work.concept}
            </p>
          </Reveal>
        </div>
      </div>

      <div className="wide mt-16 grid grid-cols-1 gap-6 md:mt-20 md:grid-cols-2 md:gap-8">
        {work.galleryImages.map((g, i) => (
          <ImageReveal
            key={g.key}
            delay={i * 0.06}
            className={i === 0 && work.galleryImages.length > 2 ? "md:col-span-2" : ""}
          >
            <div
              className={`relative w-full overflow-hidden ${
                i === 0 && work.galleryImages.length > 2 ? "aspect-[16/9]" : "aspect-[4/5]"
              }`}
            >
              <Image
                src={image(g.key, 1400)}
                alt={g.alt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </ImageReveal>
        ))}
      </div>

      <div className="content">
        <div className="section grid grid-cols-1 gap-16 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-7">
            <Reveal>
              <p className="label text-[12px]">Client Story</p>
              <div className="mt-6 space-y-5 text-[14px] leading-loose text-secondary md:text-[15px]">
                {work.clientStory.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1} className="mt-14">
              <p className="label text-[12px]">Design Solution</p>
              <div className="mt-6 space-y-4">
                {work.designSolution.map((p, i) => (
                  <p
                    key={i}
                    className="border-l-2 border-line pl-5 text-[14px] leading-loose text-secondary md:text-[15px]"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-5">
            <Reveal delay={0.1}>
              <div className="border-t hairline py-6">
                <p className="text-[12px] tracking-wide text-wood">Material</p>
                <p className="mt-2 text-[13px] leading-relaxed text-secondary">
                  {work.material}
                </p>
              </div>
              <div className="border-t hairline py-6">
                <p className="text-[12px] tracking-wide text-wood">Plan</p>
                <p className="mt-2 text-[13px] leading-relaxed text-secondary">
                  {work.plan}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="bg-ink py-20 text-base md:py-28">
        <div className="content">
          <Reveal>
            <p className="font-en-display text-[15px] italic tracking-wide text-base/70">
              10 Years Later
            </p>
            <p className="font-serif-jp mt-6 max-w-2xl text-[19px] leading-[1.9] md:text-[22px]">
              {work.tenYearsMessage}
            </p>
          </Reveal>
        </div>
      </div>

      <div className="section text-center">
        <div className="content">
          <Reveal>
            <p className="text-[14px] text-secondary">
              この事例のような暮らしに、興味を持っていただけましたか。
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-6 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center bg-forest px-8 py-4 text-[13px] tracking-wide text-base transition-opacity hover:opacity-90"
              >
                家づくりの話をしてみる
              </Link>
              <Link
                href="/works"
                className="inline-flex items-center text-[13px] tracking-wide text-ink underline decoration-line underline-offset-8 transition-colors hover:decoration-wood"
              >
                他の施工事例を見る
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </article>
  );
}
