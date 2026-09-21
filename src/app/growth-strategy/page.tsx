import type { Metadata } from "next";
import { StrategyHero } from "@/components/strategy/StrategyHero";
import { StrategicPremise } from "@/components/strategy/StrategicPremise";
import { ExecutiveSummary } from "@/components/strategy/ExecutiveSummary";
import { ChapterNav } from "@/components/strategy/ChapterNav";
import { ProblemFlow } from "@/components/strategy/ProblemFlow";
import { GrowthEngine } from "@/components/strategy/GrowthEngine";
import { ChannelMap } from "@/components/strategy/ChannelMap";
import { ContentPillars } from "@/components/strategy/ContentPillars";
import { LeadMagnetMockup } from "@/components/strategy/LeadMagnetMockup";
import { IntentJourney } from "@/components/strategy/IntentJourney";
import { NurtureTimeline } from "@/components/strategy/NurtureTimeline";
import { AIPrototype } from "@/components/strategy/AIPrototype";
import { KPITree } from "@/components/strategy/KPITree";
import { Roadmap } from "@/components/strategy/Roadmap";
import { OpportunityMatrix } from "@/components/strategy/OpportunityMatrix";
import { GrowthLoop } from "@/components/strategy/GrowthLoop";
import { StrategyFooter } from "@/components/strategy/StrategyFooter";

export const metadata: Metadata = {
  title: "Growth Strategy",
  description:
    "灯森工務店(10 Years Later)のグロース戦略ケーススタディ。Webサイトを起点にした集客〜リード獲得〜ナーチャー〜成約〜紹介までの導線設計。",
  robots: { index: false, follow: false },
};

export default function GrowthStrategyPage() {
  return (
    <div>
      <StrategyHero />
      <StrategicPremise />
      <ExecutiveSummary />

      <ChapterNav />

      <hr className="hairline" />
      <ProblemFlow />
      <GrowthEngine />
      <ChannelMap />
      <ContentPillars />

      <LeadMagnetMockup />
      <IntentJourney />

      <NurtureTimeline />
      <AIPrototype />
      <KPITree />
      <Roadmap />
      <OpportunityMatrix />
      <GrowthLoop />
      <StrategyFooter />
    </div>
  );
}
