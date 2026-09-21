import { Hero } from "@/components/home/Hero";
import { Philosophy } from "@/components/home/Philosophy";
import { WorksShowcase } from "@/components/home/WorksShowcase";
import { TenYearsLater } from "@/components/home/TenYearsLater";
import { ThreePromises } from "@/components/home/ThreePromises";
import { Interlude } from "@/components/home/Interlude";
import { PerformanceSection } from "@/components/home/PerformanceSection";
import { StorySection } from "@/components/home/StorySection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { PeopleSection } from "@/components/home/PeopleSection";
import { JournalSection } from "@/components/home/JournalSection";
import { CtaSection } from "@/components/home/CtaSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Philosophy />
      <WorksShowcase />
      <TenYearsLater />
      <ThreePromises />
      <Interlude />
      <PerformanceSection />
      <StorySection />
      <ProcessSection />
      <PeopleSection />
      <JournalSection />
      <CtaSection />
    </>
  );
}
