"use client";

import { motion } from "framer-motion";
import { BookType, PenTool } from "lucide-react";

export function StoryBookGenerator() {
  return (
    <section className="py-24 bg-[#0a0a0a] border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary-500 font-bold tracking-widest uppercase text-sm mb-4 block">Module 06: Full-Color Children's Books</span>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
              Write & Illustrate A Children's Book In 5 Minutes
            </h2>
            <p className="text-xl text-gray-400 font-medium mb-8 leading-relaxed">
              Children's books command premium prices. Type in a moral or theme, and watch our dual-AI system write the rhyming story AND generate consistent, beautiful illustrations for every page.
            </p>
            
            <div className="bg-surface border border-white/10 rounded-xl p-6">
              <div className="flex gap-4 mb-4">
                <div className="w-8 h-8 rounded bg-primary-500/20 flex items-center justify-center shrink-0">
                  <PenTool className="w-4 h-4 text-primary-500" />
                </div>
                <div>
                  <h4 className="text-white font-bold">1. The Story</h4>
                  <p className="text-gray-400 text-sm mt-1 italic">"Once upon a time, in a forest so green, lived a tiny red fox who had never been seen..."</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded bg-primary-500/20 flex items-center justify-center shrink-0">
                  <BookType className="w-4 h-4 text-primary-500" />
                </div>
                <div>
                  <h4 className="text-white font-bold">2. The Auto-Typesetting</h4>
                  <p className="text-gray-400 text-sm mt-1">Text is automatically placed on the illustrations with highly legible, kid-friendly fonts.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/3] bg-surface rounded-2xl border border-white/10 overflow-hidden relative shadow-2xl">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center" />
              <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent text-center">
                <p className="text-3xl font-black text-white drop-shadow-md">
                  Once upon a time,<br/>in a forest so green...
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
