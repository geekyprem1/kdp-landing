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
    <section className="relative pt-8 pb-16 sm:pt-12 sm:pb-24 overflow-hidden min-h-[85vh] flex flex-col justify-center bg-[#050505]">
      {/* Background Depth */}
      <HeroBackground />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex-1 flex flex-col justify-center">
        
        {/* Full-width Stacked Layout */}
        <div className="flex flex-col items-center mb-16 w-full">
          
          {/* Top: Copy & CTA */}
          <div className="flex flex-col w-full relative z-20 mb-20">
            <HeroHeadline />
            <HeroCTA />
          </div>

          {/* Bottom: Live Dashboard & Outputs */}
          <div className="relative z-10 w-full max-w-5xl h-[400px] sm:h-[500px] xl:h-[650px] flex items-center justify-center">
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
