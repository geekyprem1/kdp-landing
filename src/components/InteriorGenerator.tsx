"use client";

import { motion } from "framer-motion";
import { CheckSquare, LayoutTemplate } from "lucide-react";

export function InteriorGenerator() {
  return (
    <section className="py-24 bg-[#0a0a0a] border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {[
                "Lined Journal", "Dot Grid", "Recipe Book", "Gratitude Journal", 
                "Fitness Tracker", "Budget Planner", "Blank Sketchbook", "Music Sheet"
              ].map((template, i) => (
                <div key={i} className="bg-surface p-4 rounded-xl border border-white/5 flex items-center gap-3">
                  <LayoutTemplate className="w-5 h-5 text-gray-500" />
                  <span className="text-sm font-bold text-gray-300">{template}</span>
                </div>
              ))}
            </div>
            
            {/* Absolute overlay badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-500 text-black px-6 py-3 rounded-full font-black text-xl shadow-[0_0_40px_rgba(255,138,0,0.4)] whitespace-nowrap">
              300+ Templates
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary-500 font-bold tracking-widest uppercase text-sm mb-4 block">Module 04: 1-Click Interiors</span>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
              Build A 120-Page Book In 3 Seconds
            </h2>
            <p className="text-xl text-gray-400 font-medium mb-8 leading-relaxed">
              No more messing with margins in Word or Canva. Select your template, choose your page count, and download a perfectly formatted PDF.
            </p>
            
            <ul className="space-y-4">
              {["100% KDP Bleed Compliant", "Mix & Match Different Templates", "Custom Page Numbering", "Add Custom Headers & Footers"].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckSquare className="w-6 h-6 text-primary-500 shrink-0" />
                  <span className="text-lg text-white font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
