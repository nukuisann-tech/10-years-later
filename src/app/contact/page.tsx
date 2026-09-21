import type { Metadata } from "next";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description:
    "まずは、話すところから。土地も予算も間取りも、最初から決まっている家づくりはありません。",
};

export default function ContactPage() {
  return (
    <div className="section pt-16 md:pt-20">
      <div className="content">
        <Reveal className="mx-auto max-w-xl text-center">
          <SectionLabel>Contact</SectionLabel>
          <h1 className="text-[30px] leading-[1.6] md:text-[38px]">
            まずは、話すところから。
          </h1>
          <p className="mt-6 text-[14px] leading-loose text-secondary md:text-[15px]">
            土地も、予算も、間取りも。最初から決まっている家づくりはありません。
            どんな暮らしをしたいか、そんな漠然とした話からで大丈夫です。
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-16 max-w-xl md:mt-20">
          <ContactForm />
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-16 max-w-xl border-t hairline pt-8 text-center text-[12px] leading-relaxed text-secondary/80">
            {site.nameJa}（{site.nameEn}）
            <br />
            {site.areaLabel}
            <br />
            {site.email}
          </p>
        </Reveal>
      </div>
    </div>
  );
}
