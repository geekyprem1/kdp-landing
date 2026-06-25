"use client";

import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

export function InstantValueComparison() {
  const oldWay = [
    "8 Different Tools",
    "Manual Formatting",
    "Freelancers",
    "Weeks Of Work",
    "Guessing Niches",
    "Expensive Subscriptions",
  ];

  const kdpMafia = [
    "One Connected Platform",
    "AI Workflow",
    "Amazon Ready",
    "Minutes Instead Of Weeks",
    "Opportunity Intelligence",
    "Everything Included",
  ];

  return (
    <section className="py-12 bg-black border-y border-white/5 relative z-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          
          {/* Old Way */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
          >
            <h3 className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-4 text-center md:text-left">The Old Way</h3>
            <ul className="space-y-3">
              {oldWay.map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-400 text-sm">
                  <X className="w-4 h-4 text-gray-500" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* VS Divider */}
          <div className="hidden md:flex w-px h-24 bg-white/10 relative items-center justify-center">
            <div className="bg-black text-gray-600 text-xs font-black p-2 border border-white/5 rounded-full absolute">VS</div>
          </div>

          {/* KDP Mafia */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full bg-gradient-to-br from-primary-900/20 to-black border border-primary-500/20 rounded-2xl p-6 shadow-[0_0_30px_rgba(255,138,0,0.05)]"
          >
            <h3 className="text-primary-400 font-bold uppercase tracking-widest text-xs mb-4 text-center md:text-left flex items-center gap-2 justify-center md:justify-start">
              <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
              KDP Mafia
            </h3>
            <ul className="space-y-3">
              {kdpMafia.map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-white font-medium text-sm">
                  <Check className="w-4 h-4 text-primary-500" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
