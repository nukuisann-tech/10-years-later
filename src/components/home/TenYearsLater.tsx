import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { image } from "@/lib/images";

export function TenYearsLater() {
  return (
    <section className="relative flex min-h-[100vh] items-end overflow-hidden bg-ink text-base md:min-h-[100vh]">
      <Image
        src={image("houseAEntrance", 2000)}
        alt="木格子のスクリーンごしに灯りがともる、夜の玄関まわり"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/55 to-ink/30" />

      <div className="wide relative z-10 w-full pb-16 pt-32 md:pb-24">
        <Reveal>
          <div className="font-en-display italic leading-[0.85] tracking-tight text-base">
            <p className="text-[76px] md:text-[140px] lg:text-[176px]">10</p>
            <p className="-mt-2 text-[76px] md:text-[140px] lg:text-[176px]">Years</p>
            <p className="-mt-2 text-[76px] md:text-[140px] lg:text-[176px]">Later</p>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="mt-10 max-w-md md:mt-14">
          <p className="text-[15px] leading-loose text-base/85 md:text-[16px]">
            無垢の床は10年をかけて色を深め、子どもが柱につけた傷はいつか記録になる。
            完成は、ゴールではなくスタートラインです。
          </p>
        </Reveal>
      </div>
    </section>
  );
}
