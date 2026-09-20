import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/Reveal";
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
  return { title: post.title, description: post.excerpt };
}

export default async function JournalDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getJournalBySlug(slug);
  if (!post) notFound();

  return (
    <div className="section pt-16 md:pt-20">
      <div className="content max-w-2xl">
        <Reveal>
          <p className="text-[12px] tracking-wide text-wood">
            {post.category} ・ {post.date}
          </p>
          <h1 className="mt-4 text-[28px] leading-[1.6] md:text-[36px]">{post.title}</h1>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 space-y-8">
            {post.body.map((block, i) => (
              <div key={i}>
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
