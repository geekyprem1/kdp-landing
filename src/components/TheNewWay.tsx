"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Zap } from "lucide-react";

export function TheNewWay() {
  const benefits = [
    "One dashboard. One login. Zero context switching.",
    "Generate entire books in under 60 seconds.",
    "Proprietary AI trained specifically for KDP guidelines.",
    "Automatic layout, formatting, and bleed calculation.",
    "Export to KDP-ready PDF instantly.",
    "No design skills or technical knowledge required."
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-primary-900/5">
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-[#0B0B0B] pointer-events-none z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 text-primary-400 font-bold uppercase tracking-wider text-sm mb-6 border border-primary-500/20">
              <Zap className="w-4 h-4" />
              The KDP Mafia Advantage
            </div>
            <h2 className="text-4xl sm:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
              Enter The <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-yellow-400">Ultimate Shortcut</span>
            </h2>
            <p className="text-xl text-gray-400 font-medium mb-10 leading-relaxed">
              We took the most painful, time-consuming aspects of Amazon publishing and reduced them to a single click. Welcome to the unfair advantage.
            </p>

            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-primary-500 shrink-0 mt-0.5" />
                  <span className="text-lg text-white font-medium">{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Massive Glowing Graphic Placeholder */}
            <div className="aspect-square rounded-full bg-primary-500/5 border border-primary-500/20 flex items-center justify-center relative p-8">
              <div className="absolute inset-0 bg-primary-500/20 blur-[100px] rounded-full mix-blend-screen" />
              <div className="w-full h-full rounded-full border-2 border-dashed border-primary-500/30 animate-[spin_60s_linear_infinite] absolute" />
              <div className="w-3/4 h-3/4 rounded-full border border-primary-500/50 animate-[spin_40s_linear_infinite_reverse] absolute" />
              
              <div className="relative z-10 text-center">
                <span className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-primary-400 to-white drop-shadow-[0_0_30px_rgba(255,138,0,0.5)]">
                  10X
                </span>
                <span className="block mt-4 text-xl font-bold tracking-widest uppercase text-primary-300">
                  Faster Publishing
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
