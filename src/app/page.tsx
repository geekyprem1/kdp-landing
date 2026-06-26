import { UrgencyBar } from "@/components/UrgencyBar";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";

// Phase 1: Market Shift & Pain
import { ThePublishingShift } from "@/components/ThePublishingShift";
import { WhyPublishersStayStuck } from "@/components/WhyPublishersStayStuck";
import { TheFragmentedWorkflow } from "@/components/TheFragmentedWorkflow";

// Phase 2: Transformation & Infrastructure
import { TransformationComparison } from "@/components/TransformationComparison";
import { DreamOutcome } from "@/components/DreamOutcome";
import { EcosystemOS } from "@/components/EcosystemOS";

// Phase 3: Mechanism & Proof
import { InteractiveProductShowcase } from "@/components/InteractiveProductShowcase";
import { TheKdpMafiaMethod } from "@/components/TheKdpMafiaMethod";
import { OneBookStartToFinish } from "@/components/OneBookStartToFinish";
import { PlatformMetricsProof } from "@/components/PlatformMetricsProof";

// Phase 4: Feature Deep Dives
import { ModuleOpportunityEngine } from "@/components/ModuleOpportunityEngine";
import { ModulePublishingStudio } from "@/components/ModulePublishingStudio";
import { ModuleCoverStudio } from "@/components/ModuleCoverStudio";
import { ModuleScaleBuilder } from "@/components/ModuleScaleBuilder";
import { ModuleLaunchKit } from "@/components/ModuleLaunchKit";

// Phase 5: Objections, Value & Offer
import { ObjectionHandling } from "@/components/ObjectionHandling";
import { PremiumBonusStack } from "@/components/PremiumBonusStack";
import { EverythingYouReplace } from "@/components/EverythingYouReplace";
import { ValueStack } from "@/components/ValueStack";
import { PricingTier } from "@/components/PricingTier";
import { MoneyBackGuarantee } from "@/components/MoneyBackGuarantee";
import { TestimonialWall } from "@/components/TestimonialWall";
import { FAQ } from "@/components/FAQ";
import { FinalFinalCTA } from "@/components/FinalFinalCTA";
import { Footer } from "@/components/Footer";
import { UrgencyCTA } from "@/components/UrgencyCTA";

import { InstantValueComparison } from "@/components/InstantValueComparison";
import { ExitIntentPopup } from "@/components/ExitIntentPopup";

export default function Home() {
  return (
    <main className="relative bg-background">
      <UrgencyBar />
      <Navbar />
      
      {/* 1. Hook */}
      <Hero />
      
      {/* 2. Market Shift & Pain */}
      <ThePublishingShift />
      <WhyPublishersStayStuck />
      <TheFragmentedWorkflow />
      
      {/* 3. Transformation & Dream Outcome */}
      <TransformationComparison />
      <DreamOutcome />
      <UrgencyCTA />
      
      {/* 4. Infrastructure & Demo */}
      <EcosystemOS />
      <InteractiveProductShowcase />
      
      {/* 5. Mechanism & Proof */}
      <TheKdpMafiaMethod />
      <OneBookStartToFinish />
      <PlatformMetricsProof />
      
      {/* 6. Feature Deep Dives (Value Build Up) */}
      <ModuleOpportunityEngine />
      <ModulePublishingStudio />
      <ModuleCoverStudio />
      <ModuleScaleBuilder />
      <ModuleLaunchKit />
      
      {/* 7. Objections & Stack */}
      <ObjectionHandling />
      <UrgencyCTA />
      <PremiumBonusStack />
      <EverythingYouReplace />
      <ValueStack />
      
      {/* 8. The Offer */}
      <PricingTier />
      <MoneyBackGuarantee />
      
      {/* 9. Final Proof & Close */}
      <TestimonialWall />
      <FAQ />
      <FinalFinalCTA />
      <Footer />
      <ExitIntentPopup />
    </main>
  );
}
