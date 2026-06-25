"use client";

import { motion } from "framer-motion";
import { Palette, Wand2 } from "lucide-react";

export function ColoringBookGenerator() {
  return (
    <section className="py-24 bg-background border-t border-white/5 relative z-10 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-[600px] bg-primary-600/5 blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary-500 font-bold tracking-widest uppercase text-sm mb-4 block">Module 05: The Golden Goose</span>
          <h2 className="text-4xl sm:text-6xl font-black text-white mb-6">
            AI Coloring Book Engine
          </h2>
          <p className="text-xl text-gray-400 font-medium max-w-3xl mx-auto">
            Coloring books are the most profitable low-content niche on Amazon. Our engine generates clean, unshaded, pure line-art illustrations that buyers love.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { tag: "Mandala", img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=600&grayscale=true" },
            { tag: "Animals", img: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&q=80&w=600&grayscale=true" },
            { tag: "Stained Glass", img: "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&q=80&w=600&grayscale=true" },
            { tag: "Landscapes", img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=600&grayscale=true" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-surface rounded-2xl p-3 border border-white/10 group"
            >
              <div className="aspect-square bg-white rounded-xl overflow-hidden mb-3 relative flex items-center justify-center p-2">
                {/* Simulated line art by using grayscale + high contrast images from Unsplash */}
                <div className="absolute inset-0 bg-cover bg-center opacity-80 mix-blend-multiply contrast-200" style={{ backgroundImage: `url(${item.img})` }} />
                
                {/* Generation Overlay */}
                <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Wand2 className="w-8 h-8 text-primary-500 mb-2" />
                  <span className="text-white font-bold text-sm">Generate 50 Pages</span>
                </div>
              </div>
              <div className="flex items-center gap-2 px-2 pb-1">
                <Palette className="w-4 h-4 text-primary-500" />
                <span className="text-white font-bold">{item.tag}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
