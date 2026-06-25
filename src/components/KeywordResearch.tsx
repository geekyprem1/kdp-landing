"use client";

import { motion } from "framer-motion";
import { KeyRound, ListOrdered, Eye } from "lucide-react";

export function KeywordResearch() {
  return (
    <section className="py-24 bg-surface border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 relative rounded-2xl glass-card p-2 border border-white/10"
          >
            <div className="aspect-[4/3] bg-[#0a0a0a] rounded-xl overflow-hidden relative">
              
              {/* Fake UI Overlay */}
              <div className="absolute inset-0 p-6 flex flex-col">
                <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <KeyRound className="w-5 h-5 text-primary-500" />
                    <span className="text-white font-bold">Keyword Matrix</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-20 h-6 bg-white/5 rounded border border-white/10" />
                    <div className="w-20 h-6 bg-white/5 rounded border border-white/10" />
                  </div>
                </div>
                
                {/* Table Header */}
                <div className="grid grid-cols-4 gap-4 mb-4 px-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                  <div className="col-span-2">Keyword</div>
                  <div>Search Vol</div>
                  <div>Comp</div>
                </div>

                <div className="flex-1 space-y-2">
                  {[
                    { kw: "large print word search for seniors", vol: "14,500", comp: "Low", color: "text-green-500", bg: "bg-green-500/10" },
                    { kw: "word search puzzle book", vol: "89,200", comp: "High", color: "text-red-500", bg: "bg-red-500/10" },
                    { kw: "dementia activities for seniors", vol: "8,400", comp: "Very Low", color: "text-green-400", bg: "bg-green-400/10" },
                    { kw: "brain games adults", vol: "42,100", comp: "Med", color: "text-yellow-500", bg: "bg-yellow-500/10" },
                  ].map((row, i) => (
                    <div key={i} className="h-12 bg-white/5 rounded flex items-center px-4 grid grid-cols-4 gap-4 text-sm hover:bg-white/10 transition-colors">
                      <div className="col-span-2 text-white font-medium truncate pr-4">{row.kw}</div>
                      <div className="text-gray-300 font-mono">{row.vol}</div>
                      <div className={`${row.color} ${row.bg} px-2 py-1 rounded inline-flex w-fit font-bold text-xs`}>
                        {row.comp}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Callout */}
            <div className="absolute -top-6 -right-6 bg-primary-500 text-black font-bold px-6 py-4 rounded-xl shadow-[0_0_30px_rgba(255,138,0,0.4)] flex flex-col gap-1 border border-primary-400">
              <span className="text-sm uppercase tracking-widest text-black/70">Top Keyword</span>
              <span className="text-xl font-black">Est. Sales: $4,200/mo</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <span className="text-primary-500 font-bold tracking-widest uppercase text-sm mb-4 block">Module 02: Keyword Matrix</span>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
              Rank On Page 1 With Laser-Accurate Keyword Data
            </h2>
            <p className="text-xl text-gray-400 font-medium mb-8 leading-relaxed">
              If they can't find your book, they can't buy it. Our Keyword Matrix pulls direct Amazon A9 search data to show you exactly what buyers are typing.
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <ListOrdered className="w-6 h-6 text-primary-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white font-bold text-lg">7 Backend Keywords Auto-Generated</h4>
                  <p className="text-gray-500 text-sm mt-1">Stop guessing what to put in your 7 KDP keyword slots. We give you the exact combination to maximize visibility.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Eye className="w-6 h-6 text-primary-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white font-bold text-lg">Competitor X-Ray</h4>
                  <p className="text-gray-500 text-sm mt-1">Spy on the best-selling books and steal their exact keyword strategies instantly.</p>
                </div>
              </li>
            </ul>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
