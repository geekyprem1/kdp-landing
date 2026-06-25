import { UrgencyBar } from "@/components/UrgencyBar";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
// Phase 1
import { ThePublishingShift } from "@/components/ThePublishingShift";
import { WhyPublishersStayStuck } from "@/components/WhyPublishersStayStuck";
import { TheFragmentedWorkflow } from "@/components/TheFragmentedWorkflow";
import { TheOperatingSystem } from "@/components/TheOperatingSystem";
// Phase 2
import { TheKdpMafiaMethod } from "@/components/TheKdpMafiaMethod";
import { OneBookStartToFinish } from "@/components/OneBookStartToFinish";
import { BusinessDashboard } from "@/components/BusinessDashboard";
// Phase 3
import { ModuleOpportunityEngine } from "@/components/ModuleOpportunityEngine";
import { ModulePublishingStudio } from "@/components/ModulePublishingStudio";
import { ModuleCoverStudio } from "@/components/ModuleCoverStudio";
import { ModuleScaleBuilder } from "@/components/ModuleScaleBuilder";
import { ModuleLaunchKit } from "@/components/ModuleLaunchKit";
// Phase 4
import { InsideTheOS } from "@/components/InsideTheOS";
import { InteractiveProductShowcase } from "@/components/InteractiveProductShowcase";
import { TransformationComparison } from "@/components/TransformationComparison";
import { PlatformMetricsProof } from "@/components/PlatformMetricsProof";
// Phase 5 & Offer
import { TestimonialWall } from "@/components/TestimonialWall";
import { PremiumBonusStack } from "@/components/PremiumBonusStack";
import { PricingTier } from "@/components/PricingTier";
import { MoneyBackGuarantee } from "@/components/MoneyBackGuarantee";
import { FAQ } from "@/components/FAQ";
import { FinalFinalCTA } from "@/components/FinalFinalCTA";
import { Footer } from "@/components/Footer";
import { UrgencyCTA } from "@/components/UrgencyCTA";

export default function Home() {
  return (
    <main className="relative bg-background">
      <UrgencyBar />
      <Navbar />
      
      {/* Phase 1: The Problem & The Pivot */}
      <Hero />
      <ThePublishingShift />
      <WhyPublishersStayStuck />
      <TheFragmentedWorkflow />
      <TheOperatingSystem />
      <UrgencyCTA />
      
      {/* Phase 2: The Core Business Frameworks */}
      <TheKdpMafiaMethod />
      <OneBookStartToFinish />
      <BusinessDashboard />
      
      {/* Phase 3: Proprietary Module Deep Dives */}
      <ModuleOpportunityEngine />
      <ModulePublishingStudio />
      <ModuleCoverStudio />
      <ModuleScaleBuilder />
      <ModuleLaunchKit />
      
      {/* Phase 4: Proof & Ecosystem Validation */}
      <InsideTheOS />
      <InteractiveProductShowcase />
      <TransformationComparison />
      <PlatformMetricsProof />
      <UrgencyCTA />
      
      {/* Phase 5: The Offer */}
      <TestimonialWall />
      <PremiumBonusStack />
      <PricingTier />
      <MoneyBackGuarantee />
      <FAQ />
      <FinalFinalCTA />
      <Footer />
    </main>
  );
}
