"use client";

import { motion } from "framer-motion";
import { Gift, ArrowRight } from "lucide-react";

export function Bonuses() {
  const bonuses = [
    {
      id: 1,
      title: "The KDP Mafia Masterclass",
      value: "$497",
      desc: "A complete A-Z video training program showing you exactly how to use the software to build a $10k/mo publishing empire. No fluff, just actionable steps.",
      img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: 2,
      title: "1,000+ Premium Font Library",
      value: "$197",
      desc: "Typography makes or breaks a book. Get full commercial rights to our curated library of premium fonts perfectly suited for covers and interiors.",
      img: "https://images.unsplash.com/photo-1615800098779-1be32e60cca3?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: 3,
      title: "Private Mastermind Community",
      value: "$997/yr",
      desc: "Get access to our private Discord server. Network with 6 and 7-figure publishers, ask questions, and share winning niches.",
      img: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: 4,
      title: "Amazon Ads Bootcamp",
      value: "$297",
      desc: "Learn how to profitably scale your best-selling books using Amazon Advertising (PPC) without burning through your budget.",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: 5,
      title: "Holiday Niche Cheatsheet",
      value: "$97",
      desc: "The exact Q4 publishing calendar you need to dominate Halloween, Thanksgiving, Christmas, and Valentine's Day sales spikes.",
      img: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: 6,
      title: "Full Commercial & Agency License",
      value: "$1,997",
      desc: "Generate books for clients! You can legally sell the books you generate as a service on Fiverr or Upwork and keep 100% of the profits.",
      img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=600"
    }
  ];

  return (
    <section className="py-24 bg-background relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary-500/10 text-primary-500 mb-6 shadow-[0_0_30px_rgba(255,138,0,0.3)] animate-pulse"
          >
            <Gift className="w-10 h-10" />
          </motion.div>
          <h2 className="text-4xl sm:text-6xl font-black text-white mb-6">
            But Wait, There's More...
          </h2>
          <p className="text-xl text-gray-400 font-medium max-w-3xl mx-auto">
            Order today during this special launch period, and we're throwing in these 6 exclusive bonuses to ensure your absolute success.
          </p>
        </div>

        <div className="space-y-8">
          {bonuses.map((bonus, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-surface rounded-2xl border border-primary-500/30 overflow-hidden flex flex-col md:flex-row relative group"
            >
              {/* Fake Ribbon */}
              <div className="absolute top-4 left-0 bg-red-600 text-white font-bold text-xs uppercase tracking-widest py-1 px-4 z-20 shadow-lg">
                Bonus #{bonus.id}
              </div>

              <div className="w-full md:w-1/3 aspect-video md:aspect-auto relative bg-black">
                <div className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: `url(${bonus.img})` }} />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-surface hidden md:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent md:hidden" />
              </div>

              <div className="p-8 md:p-12 w-full md:w-2/3 flex flex-col justify-center relative z-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <h3 className="text-2xl sm:text-3xl font-black text-white">{bonus.title}</h3>
                  <div className="bg-primary-500/10 border border-primary-500/30 text-primary-400 font-black px-4 py-2 rounded-lg whitespace-nowrap self-start md:self-auto">
                    Value: {bonus.value}
                  </div>
                </div>
                <p className="text-lg text-gray-400 font-medium leading-relaxed">
                  {bonus.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mt-16 text-center"
        >
          <div className="inline-block bg-primary-500/10 border-2 border-primary-500 border-dashed rounded-2xl p-8 mb-8 shadow-[0_0_50px_rgba(255,138,0,0.15)]">
            <h4 className="text-white font-bold text-xl uppercase tracking-widest mb-2">Total Bonus Value:</h4>
            <span className="text-6xl font-black text-primary-500 drop-shadow-[0_0_20px_rgba(255,138,0,0.5)]">$4,082</span>
          </div>
          <p className="text-2xl text-white font-medium mb-8">Yours absolutely <strong className="text-primary-500 font-black uppercase">FREE</strong> when you join today.</p>
        </motion.div>

      </div>
    </section>
  );
}
