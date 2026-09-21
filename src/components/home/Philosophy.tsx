import Image from "next/image";
import Link from "next/link";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal, ImageReveal } from "@/components/Reveal";
import { image } from "@/lib/images";

export function Philosophy() {
  return (
    <section className="section bg-base">
      <div className="wide grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5 lg:pt-10">
          <Reveal>
            <SectionLabel>Our Philosophy</SectionLabel>
            <h2 className="max-w-md text-[28px] leading-[1.6] md:text-[34px] md:leading-[1.55]">
              家をつくる前に、
              <br />
              暮らしの話をしよう。
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-8 max-w-sm text-[14px] leading-loose text-secondary md:text-[15px]">
              平日の朝、誰が先に家を出るのか。休日の昼、誰が洗濯物を畳むのか。
              間取りは、そうした一場面を積み重ねた先にしか見えてこないと考えています。
            </p>
            <Link
              href="/philosophy"
              className="mt-6 inline-flex items-center text-[13px] tracking-wide text-ink underline decoration-line underline-offset-8 transition-colors hover:decoration-wood"
            >
              私たちの思想を読む
            </Link>
          </Reveal>
        </div>

        <div className="relative lg:col-span-7">
          <ImageReveal className="relative aspect-[4/5] w-full max-w-xl overflow-hidden lg:ml-auto lg:aspect-[3/4]">
            <Image
              src={image("houseDLiving", 1400)}
              alt="本棚と観葉植物に囲まれた、静かで落ち着いたリビング"
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
          </ImageReveal>
          <div className="absolute -bottom-10 left-0 hidden w-56 border border-line bg-base p-6 md:block">
            <p className="font-en-serif text-[13px] italic tracking-wide text-wood">
              Quiet / Honest
            </p>
            <p className="mt-2 text-[12px] leading-relaxed text-secondary">
              静かで、正直な設計を。
              流行りよりも、暮らしに効くことを選びます。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
