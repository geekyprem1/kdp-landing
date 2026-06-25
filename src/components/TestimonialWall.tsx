"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export function TestimonialWall() {
  // Generate 12 fake reviews to create a "wall" effect
  const reviews = Array.from({ length: 12 }).map((_, i) => ({
    name: ["David C.", "Amanda W.", "Robert K.", "Michelle L.", "James P.", "Lisa T."][i % 6],
    date: ["2 days ago", "1 week ago", "3 weeks ago", "1 month ago"][i % 4],
    text: [
      "I cancelled Book Bolt and Publisher Rocket the same day I bought this. The interface is miles ahead.",
      "The puzzle generator alone is worth the price. I generated 50 sudokus with solutions in literally 3 minutes.",
      "I'm technically challenged, but the UI is so intuitive. My first coloring book is already live on Amazon.",
      "The Opportunity Score is terrifyingly accurate. It found a niche I never would have thought of. Sales are rolling in.",
      "Customer support is top notch, but honestly the software is so good you probably won't need them.",
      "The AI copywriter for the listings is insane. It uses the right HTML tags automatically. Perfect formatting every time."
    ][i % 6],
    img: `https://i.pravatar.cc/150?img=${(i * 3) + 10}`
  }));

  return (
    <section className="py-24 bg-[#050505] relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Join 14,000+ Happy Publishers
          </h2>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.1 }}
              className="break-inside-avoid bg-surface rounded-2xl p-6 border border-white/5 hover:border-primary-500/20 transition-colors"
            >
              <div className="flex items-center gap-1 mb-4 text-primary-500">
                {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-gray-300 font-medium mb-6 leading-relaxed">"{review.text}"</p>
              
              <div className="flex items-center gap-3">
                <img src={review.img} alt="User" className="w-10 h-10 rounded-full grayscale opacity-80" />
                <div>
                  <h4 className="text-white font-bold text-sm">{review.name}</h4>
                  <span className="text-gray-500 text-xs">{review.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
