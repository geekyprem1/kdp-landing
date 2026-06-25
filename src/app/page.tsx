import { UrgencyBar } from "@/components/UrgencyBar";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { VideoSalesLetter } from "@/components/VideoSalesLetter";
import { HeroSocialProof } from "@/components/HeroSocialProof";
import { FirstCTA } from "@/components/FirstCTA";
import { StoryIntroduction } from "@/components/StoryIntroduction";
import { TheOldWay } from "@/components/TheOldWay";
import { TheAwakening } from "@/components/TheAwakening";
import { TheNewWay } from "@/components/TheNewWay";
import { DashboardTeaser } from "@/components/DashboardTeaser";
import { FeatureOverviewGrid } from "@/components/FeatureOverviewGrid";
import { Workflow } from "@/components/Workflow";
import { AINicheResearch } from "@/components/AINicheResearch";
import { KeywordResearch } from "@/components/KeywordResearch";
import { OpportunityScore } from "@/components/OpportunityScore";
import { MidwayCTA1 } from "@/components/MidwayCTA1";
import { CoverGenerator } from "@/components/CoverGenerator";
import { InteriorGenerator } from "@/components/InteriorGenerator";
import { ColoringBookGenerator } from "@/components/ColoringBookGenerator";
import { StoryBookGenerator } from "@/components/StoryBookGenerator";
import { PuzzleGenerators } from "@/components/PuzzleGenerators";
import { ActivityBookGenerator } from "@/components/ActivityBookGenerator";
import { EbookCreator } from "@/components/EbookCreator";
import { MidwayCTA2 } from "@/components/MidwayCTA2";
import { AIWritingAssistant } from "@/components/AIWritingAssistant";
import { ExportFeatures } from "@/components/ExportFeatures";
import { DashboardShowcase } from "@/components/DashboardShowcase";
import { ComparisonSection } from "@/components/ComparisonSection";
import { SuccessStories } from "@/components/SuccessStories";
import { IncomeProofGallery } from "@/components/IncomeProofGallery";
import { MidwayCTA3 } from "@/components/MidwayCTA3";
import { TestimonialWall } from "@/components/TestimonialWall";
import { Bonuses } from "@/components/Bonuses";
import { CommercialLicense } from "@/components/CommercialLicense";
import { TotalValueBreakdown } from "@/components/TotalValueBreakdown";
import { PricingTier } from "@/components/PricingTier";
import { MoneyBackGuarantee } from "@/components/MoneyBackGuarantee";
import { WarningSection } from "@/components/WarningSection";
import { FAQ } from "@/components/FAQ";
import { FinalFinalCTA } from "@/components/FinalFinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-background">
      <UrgencyBar />
      <Navbar />
      <Hero />
      <VideoSalesLetter />
      <HeroSocialProof />
      <FirstCTA />
      <StoryIntroduction />
      <TheOldWay />
      <TheAwakening />
      <TheNewWay />
      
      {/* Phase 2: The Arsenal */}
      <DashboardTeaser />
      <FeatureOverviewGrid />
      <Workflow />
      <AINicheResearch />
      <KeywordResearch />
      <OpportunityScore />
      <MidwayCTA1 />
      <CoverGenerator />
      <InteriorGenerator />
      <ColoringBookGenerator />
      <StoryBookGenerator />
      <PuzzleGenerators />
      <ActivityBookGenerator />
      <EbookCreator />
      <MidwayCTA2 />
      <AIWritingAssistant />
      <ExportFeatures />
      
      {/* Phase 3: The Proof & Offer */}
      <DashboardShowcase />
      <ComparisonSection />
      <SuccessStories />
      <IncomeProofGallery />
      <MidwayCTA3 />
      <TestimonialWall />
      <Bonuses />
      
      {/* Phase 4: Climax & Risk Reversal */}
      <CommercialLicense />
      <TotalValueBreakdown />
      <PricingTier />
      <MoneyBackGuarantee />
      <WarningSection />
      <FAQ />
      <FinalFinalCTA />
      <Footer />
    </main>
  );
}
