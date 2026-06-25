"use client";

import { HeroBackground } from "./hero/HeroBackground";
import { HeroHeadline } from "./hero/HeroHeadline";
import { HeroCTA } from "./hero/HeroCTA";
import { HeroDashboard } from "./hero/HeroDashboard";
import { FloatingOutputs } from "./hero/FloatingOutputs";
import { FeatureMarquee } from "./hero/FeatureMarquee";

import { HeroComparison } from "./hero/HeroComparison";

export function Hero() {
  return (
    <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 overflow-hidden min-h-[90vh] flex flex-col justify-center bg-[#050505]">
      {/* Background Depth */}
      <HeroBackground />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex-1 flex flex-col justify-center">
        
        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center mb-16">
          
          {/* Left Column: Copy & CTA */}
          <div className="flex flex-col relative z-20 order-2 lg:order-1">
            <HeroHeadline />
            <HeroCTA />
          </div>

          {/* Right Column: Live Dashboard & Outputs */}
          <div className="relative z-10 order-1 lg:order-2 w-full h-[500px] xl:h-[650px] flex items-center justify-center lg:justify-end mt-10 lg:mt-0">
            {/* The Floating Elements layer */}
            <FloatingOutputs />
            
            {/* The Live Dashboard Mockup */}
            <HeroDashboard />
          </div>

        </div>

        {/* Workflow Comparison below everything */}
        <HeroComparison />
      </div>

      {/* Infinite Scrolling Marquee */}
      <FeatureMarquee />
    </section>
  );
}
