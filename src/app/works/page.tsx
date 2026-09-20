import type { Metadata } from "next";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";
import { WorksGrid } from "@/components/WorksGrid";

export const metadata: Metadata = {
  title: "施工事例",
  description:
    "灯森工務店の施工事例。暮らしから見る、家のかたち。架空の工務店によるコンセプトプロジェクトです。",
};

export default function WorksPage() {
  return (
    <div className="section pt-16 md:pt-20">
      <div className="wide">
        <Reveal className="max-w-2xl">
          <SectionLabel>Works</SectionLabel>
          <h1 className="text-[32px] leading-[1.5] md:text-[44px]">
            暮らしから見る、家。
          </h1>
          <p className="mt-6 text-[14px] leading-loose text-secondary md:text-[15px]">
            数字やスペックの前に、そこにある暮らしを見てほしいと思っています。
            すべて架空のプロジェクトですが、私たちが大切にしたい設計の考え方を込めています。
          </p>
        </Reveal>

        <div className="mt-16 md:mt-20">
          <WorksGrid />
        </div>
      </div>
    </div>
  );
}
