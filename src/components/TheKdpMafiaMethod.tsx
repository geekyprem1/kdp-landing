"use client";

import { motion } from "framer-motion";
import { Search, CheckCircle, PenTool, Box, Rocket, LineChart, Layers } from "lucide-react";

export function TheKdpMafiaMethod() {
  const steps = [
    { name: "Discover", icon: Search, desc: "Find hungry niches." },
    { name: "Validate", icon: CheckCircle, desc: "Verify demand & competition." },
    { name: "Create", icon: PenTool, desc: "Generate interiors & covers." },
    { name: "Package", icon: Box, desc: "Assemble KDP-ready files." },
    { name: "Launch", icon: Rocket, desc: "Publish with perfect metadata." },
    { name: "Optimize", icon: LineChart, desc: "Track ranking & royalties." },
    { name: "Scale", icon: Layers, desc: "Build bundles & series." }
  ];

  return (
    <section className="py-24 sm:py-32 bg-black relative border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 font-semibold mb-6 text-sm uppercase tracking-widest"
          >
            <span className="w-2 h-2 rounded-full bg-primary-500" />
            Proprietary Framework
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-white mb-6 tracking-tight"
          >
            The KDP Mafia <span className="text-primary-500">Method™</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 font-medium leading-relaxed"
          >
            We didn't just build software. We encoded the exact 7-step blueprint used by 6-figure publishers directly into the platform architecture. Every tool serves this framework.
          </motion.p>
        </div>

        {/* Circular / Flow visualization */}
        <div className="relative max-w-5xl mx-auto mt-20">
          {/* Connecting dashed line (desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary-500/30 to-transparent -translate-y-1/2 border-t border-dashed border-primary-500/50" />

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 relative">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative flex flex-col items-center group"
              >
                {/* Node */}
                <div className="w-16 h-16 rounded-2xl bg-[#111] border border-white/10 flex items-center justify-center mb-4 relative z-10 group-hover:border-primary-500/50 group-hover:bg-primary-500/10 transition-colors shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                  <step.icon className="w-6 h-6 text-gray-400 group-hover:text-primary-400 transition-colors" />
                  
                  {/* Step number badge */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary-500 text-black font-black text-xs flex items-center justify-center border-2 border-black">
                    {i + 1}
                  </div>
                </div>
                
                <h3 className="text-white font-bold text-sm mb-1 text-center">{step.name}</h3>
                <p className="text-xs text-gray-500 text-center max-w-[120px]">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
