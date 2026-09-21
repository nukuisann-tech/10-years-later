import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal, ImageReveal } from "@/components/Reveal";
import { image } from "@/lib/images";
import { site } from "@/lib/site";
import { journalPosts, getJournalBySlug } from "@/data/journal";

export function generateStaticParams() {
  return journalPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getJournalBySlug(slug);
  if (!post) return {};
  const imageUrl = image(post.image, 1200);
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      images: [{ url: imageUrl }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [imageUrl],
    },
  };
}

export default async function JournalDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getJournalBySlug(slug);
  if (!post) notFound();

  const related = journalPosts.filter((p) => p.slug !== post.slug).slice(0, 2);
  const pullQuoteAfter = Math.min(2, post.body.length - 1);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    image: image(post.image, 1200),
    author: { "@type": "Organization", name: site.nameJa },
    publisher: { "@type": "Organization", name: site.nameJa },
  };

  return (
    <div className="section pt-16 md:pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="content max-w-2xl">
        <Reveal>
          <nav aria-label="breadcrumb" className="flex flex-wrap items-center gap-2 text-[12px] text-secondary">
            <Link href="/" className="hover:text-ink">
              Home
            </Link>
            <span aria-hidden>/</span>
            <Link href="/journal" className="hover:text-ink">
              Journal
            </Link>
            <span aria-hidden>/</span>
            <span className="text-ink">{post.title}</span>
          </nav>

          <p className="mt-6 text-[12px] tracking-wide text-wood">
            {post.category} ・ {post.date}
          </p>
          <h1 className="mt-4 text-[28px] leading-[1.6] md:text-[36px]">{post.title}</h1>
        </Reveal>
      </div>

      <ImageReveal delay={0.1} className="wide mt-10 md:mt-14">
        <div className="relative aspect-[16/9] w-full overflow-hidden md:aspect-[21/9]">
          <Image
            src={image(post.image, 1800)}
            alt={post.imageAlt}
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </ImageReveal>

      <div className="content max-w-2xl">
        <Reveal delay={0.15}>
          <div className="mt-12 space-y-8">
            {post.body.map((block, i) => (
              <div key={i}>
                {i === pullQuoteAfter && (
                  <blockquote className="my-10 border-l-2 border-wood py-1 pl-6">
                    <p className="font-serif-jp text-[19px] leading-[1.8] text-ink md:text-[21px]">
                      {post.pullQuote}
                    </p>
                  </blockquote>
                )}
                {block.heading && (
                  <h2 className="font-serif-jp mb-3 text-[18px] text-ink md:text-[20px]">
                    {block.heading}
                  </h2>
                )}
                <p className="text-[15px] leading-loose text-secondary md:text-[16px]">
                  {block.text}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-16 border-t hairline pt-10 text-center">
            <p className="text-[14px] text-secondary">
              家づくりについて、話してみませんか。
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-5 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center bg-forest px-7 py-3.5 text-[13px] tracking-wide text-base transition-opacity hover:opacity-90"
              >
                家づくりの話をしてみる
              </Link>
              <Link
                href="/works"
                className="inline-flex items-center text-[13px] tracking-wide text-ink underline decoration-line underline-offset-8 transition-colors hover:decoration-wood"
              >
                施工事例を見る
              </Link>
            </div>
          </div>
        </Reveal>
      </div>

      {related.length > 0 && (
        <div className="wide mt-20 border-t hairline pt-14 md:mt-28">
          <Reveal>
            <p className="label text-[12px]">Related</p>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-8">
            {related.map((r, i) => (
              <Reveal key={r.slug} delay={i * 0.06}>
                <Link href={`/journal/${r.slug}`} className="group block">
                  <div className="relative aspect-[16/9] w-full overflow-hidden">
                    <Image
                      src={image(r.image, 900)}
                      alt={r.imageAlt}
                      fill
                      sizes="(min-width: 768px) 45vw, 100vw"
                      className="object-cover transition-transform duration-[700ms] ease-out group-hover:scale-[1.02]"
                    />
                  </div>
                  <p className="mt-4 text-[12px] tracking-wide text-wood">{r.category}</p>
                  <p className="font-serif-jp mt-1 text-[17px] leading-snug text-ink transition-colors group-hover:text-wood">
                    {r.title}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      )}

      <div className="content max-w-2xl">
        <Reveal>
          <div className="mt-16 border-t hairline pt-8">
            <Link
              href="/journal"
              className="text-[13px] tracking-wide text-ink underline decoration-line underline-offset-8 transition-colors hover:decoration-wood"
            >
              ジャーナル一覧に戻る
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
