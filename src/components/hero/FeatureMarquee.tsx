"use client";

import { motion } from "framer-motion";
import { Sparkles, CheckCircle2 } from "lucide-react";

export function FeatureMarquee() {
  const features = [
    "AI Niche Research", "Keyword Extraction", "Cover Generator", 
    "Coloring Books", "Story Books", "Sudoku Generator", 
    "Word Search", "Activity Books", "Prompt Generator", 
    "Opportunity Score", "Listing Optimizer", "One-Click Export"
  ];

  // Duplicate for seamless infinite scroll
  const marqueeItems = [...features, ...features, ...features];

  return (
    <div className="absolute bottom-0 left-0 w-full bg-primary-500/10 border-t border-primary-500/20 overflow-hidden py-3 z-30 backdrop-blur-sm">
      <div className="flex w-fit">
        <motion.div
          animate={{ x: [0, -1920] }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
          className="flex whitespace-nowrap gap-8 pr-8"
        >
          {marqueeItems.map((feature, i) => (
            <div key={i} className="flex items-center gap-2 text-primary-400 font-bold text-sm tracking-wider uppercase">
              {i % 2 === 0 ? <Sparkles className="w-4 h-4 text-white" /> : <CheckCircle2 className="w-4 h-4 text-white" />}
              {feature}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
