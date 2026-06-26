"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness, CheckCircle } from "lucide-react";

export function CommercialLicense() {
  return (
    <section className="py-24 bg-primary-600 relative z-10 border-y border-primary-500/30 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80&w=2000')] opacity-10 bg-cover bg-center mix-blend-overlay" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-black/90 rounded-[2rem] p-8 sm:p-12 border border-primary-500/30 shadow-[0_0_80px_rgba(255,138,0,0.2)]"
        >
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/3 flex justify-center">
              <div className="w-48 h-48 rounded-full bg-primary-500/10 border-4 border-primary-500 flex items-center justify-center relative shadow-[0_0_40px_rgba(255,138,0,0.5)]">
                <div className="absolute inset-0 bg-primary-500/20 blur-xl rounded-full animate-pulse" />
                <BriefcaseBusiness className="w-20 h-20 text-primary-500 relative z-10" />
                {/* Official Stamp */}
                <div className="absolute -bottom-4 -right-4 bg-red-600 text-white font-black text-xs uppercase tracking-widest px-4 py-2 rounded shadow-xl rotate-12 border border-red-400">
                  Included Today
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <span className="text-primary-500 font-bold tracking-widest uppercase text-sm mb-2 block">Strictly Limited Time</span>
              <h2 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight">
                Full Commercial & Agency Rights
              </h2>
              <p className="text-lg text-gray-300 font-medium mb-6">
                Normally, software companies charge $297/month for an "Agency" license. During this special launch period, we are including the Commercial License for absolutely zero extra cost.
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-500 shrink-0" />
                  <span className="text-white font-bold">Sell your generated books on Amazon KDP.</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-500 shrink-0" />
                  <span className="text-white font-bold">Sell books as a freelancer on Fiverr or Upwork.</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-500 shrink-0" />
                  <span className="text-white font-bold">Build books for local businesses and schools.</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-500 shrink-0" />
                  <span className="text-white font-bold">Keep 100% of the profits. No royalties to us, ever.</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
