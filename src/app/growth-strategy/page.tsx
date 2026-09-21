import type { Metadata } from "next";
import { StrategyHero } from "@/components/strategy/StrategyHero";
import { StrategicPremise } from "@/components/strategy/StrategicPremise";
import { ExecutiveSummary } from "@/components/strategy/ExecutiveSummary";
import { ValidationSection } from "@/components/strategy/ValidationSection";
import { ChapterNav } from "@/components/strategy/ChapterNav";
import { PartDivider } from "@/components/strategy/PartDivider";
import { ProblemFlow } from "@/components/strategy/ProblemFlow";
import { GrowthEngine } from "@/components/strategy/GrowthEngine";
import { ChannelMap } from "@/components/strategy/ChannelMap";
import { ContentPillars } from "@/components/strategy/ContentPillars";
import { AssetLeverageMap } from "@/components/strategy/AssetLeverageMap";
import { LeadMagnetMockup } from "@/components/strategy/LeadMagnetMockup";
import { IntentJourney } from "@/components/strategy/IntentJourney";
import { NurtureTimeline } from "@/components/strategy/NurtureTimeline";
import { AIPrototype } from "@/components/strategy/AIPrototype";
import { DecisionRules } from "@/components/strategy/DecisionRules";
import { NinetyDayBlueprint } from "@/components/strategy/NinetyDayBlueprint";
import { Roadmap } from "@/components/strategy/Roadmap";
import { GrowthCapacityNote } from "@/components/strategy/GrowthCapacityNote";
import { KPITree } from "@/components/strategy/KPITree";
import { MeasurementPlan } from "@/components/strategy/MeasurementPlan";
import { GrowthLoop } from "@/components/strategy/GrowthLoop";
import { StrategySummary } from "@/components/strategy/StrategySummary";
import { StrategyFooter } from "@/components/strategy/StrategyFooter";
import { PrintButton } from "@/components/strategy/PrintButton";

export const metadata: Metadata = {
  title: "Growth Strategy",
  description:
    "灯森工務店(10 Years Later)のグロース戦略ケーススタディ。Webサイトを起点にした集客〜リード獲得〜ナーチャー〜成約〜紹介までの導線設計。",
  robots: { index: false, follow: false },
};

export default function GrowthStrategyPage() {
  return (
    <div className="strategy-doc">
      <PrintButton />
      <StrategyHero />
      <StrategicPremise />
      <ExecutiveSummary />
      <ValidationSection />

      <ChapterNav />

      <PartDivider no="01" label="Problem" />
      <hr className="hairline" />
      <ProblemFlow />

      <PartDivider no="02" label="System" />
      <GrowthEngine />
      <ChannelMap />
      <ContentPillars />
      <AssetLeverageMap />
      <LeadMagnetMockup />
      <IntentJourney />
      <NurtureTimeline />
      <AIPrototype />

      <PartDivider no="03" label="Activation" />
      <DecisionRules />
      <NinetyDayBlueprint />
      <Roadmap />

      <PartDivider no="04" label="Measurement" />
      <GrowthCapacityNote />
      <KPITree />
      <MeasurementPlan />
      <GrowthLoop />
      <StrategySummary />

      <StrategyFooter />
    </div>
  );
}
