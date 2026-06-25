"use client";

import { motion } from "framer-motion";
import { Lightbulb, Search, PenTool, Upload, DollarSign, ArrowRight } from "lucide-react";

export function Workflow() {
  const steps = [
    { icon: Search, title: "Access", desc: "Enter any niche, keyword, or idea into the dashboard." },
    { icon: PenTool, title: "Generate", desc: "AI researches, writes, designs, and formats the entire book automatically." },
    { icon: DollarSign, title: "Cash In", desc: "Auto-publish to Amazon and collect royalties passively 24/7." },
  ];

  return (
    <section className="py-24 bg-background relative z-10 border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-5 mix-blend-overlay" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">
            The Shockingly Simple 3-Step Formula
          </h2>
          <p className="text-xl text-gray-400 font-medium max-w-2xl mx-auto">
            Ordinary people are using this exact workflow to bank royalties every single day with KDP Mafia.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Hidden on mobile) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-white/10 -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex flex-col items-center text-center relative"
              >
                <div className="w-24 h-24 rounded-full bg-surface border-2 border-primary-500/50 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(255,138,0,0.2)] relative group">
                  <div className="absolute inset-0 bg-primary-500/20 rounded-full group-hover:scale-150 transition-transform duration-500 opacity-0 group-hover:opacity-100 blur-xl" />
                  <step.icon className="w-10 h-10 text-primary-400 relative z-10" />
                  
                  {/* Step Number Badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-600 rounded-full text-white text-sm font-black flex items-center justify-center border border-white/20">
                    {i + 1}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">Step {i + 1}: {step.title}</h3>
                <p className="text-base text-gray-400 font-medium leading-relaxed">{step.desc}</p>
                
                {i < steps.length - 1 && (
                  <div className="md:hidden mt-8 text-white/20">
                    <ArrowRight className="w-6 h-6 rotate-90" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
