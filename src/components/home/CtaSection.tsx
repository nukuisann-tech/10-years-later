import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export function CtaSection() {
  return (
    <section className="section bg-base">
      <div className="content text-center">
        <Reveal>
          <h2 className="text-[28px] leading-[1.6] md:text-[38px] md:leading-[1.55]">
            まだ何も決まっていなくても、
            <br />
            大丈夫です。
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-8 max-w-md text-[14px] leading-loose text-secondary md:text-[15px]">
            土地も、予算も、間取りも。
            最初から決まっている家づくりはありません。
            まずは、どんな暮らしをしたいか。そんな話から始めましょう。
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
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
              施工事例を見る
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
