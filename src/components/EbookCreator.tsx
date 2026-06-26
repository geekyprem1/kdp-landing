"use client";

import { motion } from "framer-motion";
import { BookMarked } from "lucide-react";

export function EbookCreator() {
  return (
    <section className="py-24 bg-background border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="w-16 h-16 rounded-full bg-primary-500/10 text-primary-500 flex items-center justify-center mx-auto mb-6">
            <BookMarked className="w-8 h-8" />
          </div>
          <span className="text-primary-500 font-bold tracking-widest uppercase text-sm mb-4 block">Module 09: AI Ebook Creator</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Non-Fiction & Ebooks
          </h2>
          <p className="text-xl text-gray-400 font-medium leading-relaxed">
            Not just low-content. You can write 30,000-word non-fiction books on topics like "Stoicism for Beginners" or "Keto Diet Recipes" in under 10 minutes. The AI handles the table of contents, chapters, pacing, and formatting.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
