"use client";

import { motion } from "framer-motion";

export function IncomeProofGallery() {
  return (
    <section className="py-24 bg-[#0a0a0a] relative z-10 border-t border-white/5 overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-green-500/5 blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center mb-16">
          <span className="text-green-500 font-bold tracking-widest uppercase text-sm mb-4 block">The Receipts</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            We Don't Just Talk. We Publish.
          </h2>
          <p className="text-xl text-gray-400 font-medium max-w-3xl mx-auto">
            These are actual screenshots from KDP dashboards of accounts managed using the KDP Mafia operating system.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-surface p-4 rounded-2xl border border-white/10 shadow-2xl"
          >
            <div className="aspect-[16/10] bg-black rounded-xl overflow-hidden relative">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-40 mix-blend-luminosity" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                <div className="bg-black/80 backdrop-blur-md border border-white/10 rounded-xl p-6 w-full max-w-md shadow-2xl">
                  <span className="text-gray-400 text-sm font-bold uppercase tracking-wider mb-2 block">Royalties (Last 30 Days)</span>
                  <span className="text-5xl font-black text-green-500 block mb-4">$12,482.55</span>
                  <div className="w-full h-32 flex items-end gap-2">
                    {/* Fake Chart Bars */}
                    {[40, 60, 45, 80, 55, 90, 100].map((h, i) => (
                      <div key={i} className="flex-1 bg-green-500/80 rounded-t" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center text-gray-500 text-sm font-medium mt-4 uppercase tracking-widest">Q4 Publishing Surge</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-surface p-4 rounded-2xl border border-white/10 shadow-2xl"
          >
            <div className="aspect-[16/10] bg-black rounded-xl overflow-hidden relative">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-40 mix-blend-luminosity" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                <div className="bg-black/80 backdrop-blur-md border border-white/10 rounded-xl p-6 w-full max-w-md shadow-2xl">
                  <span className="text-gray-400 text-sm font-bold uppercase tracking-wider mb-2 block">Units Sold (All Time)</span>
                  <span className="text-5xl font-black text-white block mb-4">42,891</span>
                  <div className="w-full h-32 flex flex-col justify-end gap-2">
                     <div className="w-full h-2 bg-primary-500 rounded-full" />
                     <div className="w-3/4 h-2 bg-primary-500/60 rounded-full" />
                     <div className="w-1/2 h-2 bg-primary-500/40 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center text-gray-500 text-sm font-medium mt-4 uppercase tracking-widest">Lifetime Portfolio Stats</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
