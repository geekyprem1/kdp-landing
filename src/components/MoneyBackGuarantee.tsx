"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export function MoneyBackGuarantee() {
  return (
    <section className="py-24 bg-[#0a0a0a] relative z-10 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-surface to-black p-8 sm:p-12 rounded-[2rem] border border-green-500/30 shadow-[0_0_80px_rgba(34,197,94,0.1)] relative overflow-hidden text-center"
        >
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-green-500/10 blur-[100px] pointer-events-none" />
          
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-green-500/10 border-4 border-green-500/30 text-green-500 mb-8 relative z-10 shadow-[0_0_30px_rgba(34,197,94,0.3)]">
            <ShieldCheck className="w-12 h-12" />
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-6 tracking-tight relative z-10">
            Our Iron-Clad 30-Day "Mafia Promise"
          </h2>
          
          <p className="text-lg text-gray-300 font-medium mb-6 leading-relaxed relative z-10">
            We are so confident that KDP Mafia will revolutionize your publishing business that we are taking on 100% of the risk.
          </p>
          
          <p className="text-lg text-gray-300 font-medium mb-8 leading-relaxed relative z-10">
            Use the software. Generate as many books as you want. Publish them on Amazon. If you don't agree that this is the most powerful KDP software on the planet, simply email our support team within 30 days and we will refund every single penny. No questions asked. No hard feelings.
          </p>
          
          <p className="text-xl text-white font-black uppercase tracking-widest relative z-10">
            You literally have nothing to lose and a <span className="text-green-500 underline decoration-green-500/30">publishing empire</span> to gain.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
