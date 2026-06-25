"use client";

import { motion } from "framer-motion";
import { Star, TrendingUp } from "lucide-react";

export function SuccessStories() {
  const stories = [
    {
      name: "Sarah Jenkins",
      role: "Former Teacher",
      quote: "I replaced my teaching income in 4 months using only the Coloring Book generator.",
      revenue: "$4,250/mo",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200"
    },
    {
      name: "Marcus T.",
      role: "Side Hustler",
      quote: "The Opp Score is a cheat code. I found a micro-niche in puzzle books and dominate it.",
      revenue: "$2,800/mo",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
    },
    {
      name: "Elena Rodriguez",
      role: "Stay-at-home Mom",
      quote: "I publish while my toddler naps. The 1-click export saves me hours of formatting nightmares.",
      revenue: "$1,950/mo",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
    }
  ];

  return (
    <section className="py-24 bg-background relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary-500 font-bold tracking-widest uppercase text-sm mb-4 block">Proof In The Pudding</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Real Results From Real People
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-surface rounded-2xl p-8 border border-white/5 relative"
            >
              <div className="flex items-center gap-1 mb-6 text-yellow-500">
                {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="text-lg text-gray-300 font-medium italic mb-8">"{story.quote}"</p>
              
              <div className="flex items-center justify-between border-t border-white/10 pt-6">
                <div className="flex items-center gap-4">
                  <img src={story.img} alt={story.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h4 className="text-white font-bold">{story.name}</h4>
                    <span className="text-gray-500 text-sm">{story.role}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-green-400 font-black flex items-center gap-1">
                    <TrendingUp className="w-4 h-4" /> {story.revenue}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
