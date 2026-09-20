import Image from "next/image";
import { Reveal, ImageReveal } from "@/components/Reveal";
import { image } from "@/lib/images";

export function TenYearsLater() {
  return (
    <section className="relative overflow-hidden bg-ink py-28 text-base md:py-40">
      <div className="wide relative z-10">
        <Reveal>
          <p className="font-en-display text-[64px] italic leading-none tracking-tight text-base/90 md:text-[110px] lg:text-[136px]">
            10 Years Later
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <Reveal delay={0.1} className="lg:col-span-6">
            <h2 className="text-[26px] leading-[1.6] md:text-[32px] md:leading-[1.55]">
              10年後、
              <br />
              この家で何をしているだろう。
            </h2>
          </Reveal>

          <Reveal delay={0.2} className="lg:col-span-6">
            <div className="space-y-5 text-[14px] leading-loose text-base/75 md:text-[15px]">
              <p>
                完成した日の家は、まだ何も知りません。
                子どもの背丈も、家具についた小さな傷も、
                休日の朝にどんな時間が流れるのかも。
              </p>
              <p>
                無垢の床は、10年をかけて色を深めていきます。
                子どもが柱につけた傷は、いつか消したくない記録になります。
                私たちは、その変化ごと引き受けられる家をつくっています。
              </p>
              <p className="text-base/95">
                完成は、ゴールではなくスタートラインです。
              </p>
            </div>
          </Reveal>
        </div>

        <ImageReveal delay={0.3} className="relative mt-20 aspect-[16/9] w-full overflow-hidden md:mt-28">
          <Image
            src={image("houseAEntrance", 1800)}
            alt="木格子のスクリーンごしに灯りがともる、夜の玄関まわり"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-ink/20" />
        </ImageReveal>
      </div>
    </section>
  );
}
