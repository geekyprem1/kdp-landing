"use client";

import { motion } from "framer-motion";
import { Image as ImageIcon, Sparkles } from "lucide-react";

export function CoverGenerator() {
  return (
    <section className="py-24 bg-background relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary-500 font-bold tracking-widest uppercase text-sm mb-4 block">Module 03: AI Cover Design Studio</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Stop Paying Freelancers $50 For Mediocre Covers
          </h2>
          <p className="text-xl text-gray-400 font-medium max-w-3xl mx-auto">
            Our AI generates stunning, high-converting front, back, and spine designs perfectly formatted to Amazon's exact bleed requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Children's Book", img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=800" },
            { title: "Adult Coloring", img: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800" },
            { title: "Minimalist Journal", img: "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?auto=format&fit=crop&q=80&w=800" },
          ].map((cover, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-surface rounded-2xl p-4 border border-white/5 group"
            >
              <div className="aspect-[2/3] bg-black rounded-xl overflow-hidden relative mb-4">
                <div className="absolute inset-0 bg-cover bg-center opacity-80 group-hover:opacity-100 transition-opacity duration-500" style={{ backgroundImage: `url(${cover.img})` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <span className="text-white font-bold">{cover.title}</span>
                  <div className="w-8 h-8 rounded-full bg-primary-500/20 text-primary-500 flex items-center justify-center backdrop-blur-md">
                    <Sparkles className="w-4 h-4" />
                  </div>
                </div>
              </div>
              <button className="w-full py-3 bg-white/5 hover:bg-primary-500 hover:text-black text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2">
                <ImageIcon className="w-4 h-4" /> Generate Similar
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
