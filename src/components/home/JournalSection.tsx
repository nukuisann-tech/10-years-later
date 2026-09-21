import Link from "next/link";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";
import { journalPosts } from "@/data/journal";

export function JournalSection() {
  return (
    <section className="section bg-surface">
      <div className="wide">
        <Reveal className="mb-14 flex flex-col items-start justify-between gap-6 md:mb-20 md:flex-row md:items-end">
          <div>
            <SectionLabel>Journal</SectionLabel>
            <h2 className="max-w-lg text-[28px] leading-[1.5] md:text-[36px]">
              家づくりの、少し先の話。
            </h2>
          </div>
          <Link
            href="/journal"
            className="shrink-0 text-[13px] tracking-wide text-ink underline decoration-line underline-offset-8 transition-colors hover:decoration-wood"
          >
            ジャーナルを見る
          </Link>
        </Reveal>

        <div className="border-t hairline">
          {journalPosts.slice(0, 2).map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.05}>
              <Link
                href={`/journal/${post.slug}`}
                className="group grid grid-cols-1 gap-3 border-b hairline py-8 md:grid-cols-12 md:items-center md:gap-8"
              >
                <p className="text-[12px] tracking-wide text-wood md:col-span-2">
                  {post.category}
                </p>
                <p className="font-serif-jp text-[18px] leading-snug text-ink transition-colors group-hover:text-wood md:col-span-8 md:text-[19px]">
                  {post.title}
                </p>
                <p className="text-[12px] text-secondary md:col-span-2 md:text-right">
                  {post.date}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
