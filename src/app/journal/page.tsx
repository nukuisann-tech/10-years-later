import type { Metadata } from "next";
import Link from "next/link";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";
import { journalPosts } from "@/data/journal";

export const metadata: Metadata = {
  title: "ジャーナル",
  description: "土地選び、間取り、性能、暮らし方について。灯森工務店のジャーナル。",
};

export default function JournalPage() {
  return (
    <div className="section pt-16 md:pt-20">
      <div className="wide">
        <Reveal className="max-w-2xl">
          <SectionLabel>Journal</SectionLabel>
          <h1 className="text-[32px] leading-[1.5] md:text-[44px]">
            家づくりの、少し先の話。
          </h1>
          <p className="mt-6 text-[14px] leading-loose text-secondary md:text-[15px]">
            土地選びや性能のこと、暮らしの整え方について、私たちが日々の相談の中で
            よく伺う疑問をまとめています。
          </p>
        </Reveal>

        <div className="mt-16 border-t hairline md:mt-20">
          {journalPosts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.05}>
              <Link
                href={`/journal/${post.slug}`}
                className="group grid grid-cols-1 gap-3 border-b hairline py-9 md:grid-cols-12 md:items-center md:gap-8"
              >
                <p className="text-[12px] tracking-wide text-wood md:col-span-2">
                  {post.category}
                </p>
                <div className="md:col-span-8">
                  <p className="font-serif-jp text-[19px] leading-snug text-ink transition-colors group-hover:text-wood md:text-[21px]">
                    {post.title}
                  </p>
                  <p className="mt-2 max-w-xl text-[13px] leading-relaxed text-secondary">
                    {post.excerpt}
                  </p>
                </div>
                <p className="text-[12px] text-secondary md:col-span-2 md:text-right">
                  {post.date}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
