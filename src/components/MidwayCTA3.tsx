"use client";

import { motion } from "framer-motion";
import { ArrowRight, Lock } from "lucide-react";
import { SecurePaymentLogos } from "./SecurePaymentLogos";

export function MidwayCTA3() {
  return (
    <section className="py-20 relative overflow-hidden bg-background border-y border-white/5">
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-500/10 text-primary-500 mb-6">
            <Lock className="w-8 h-8" />
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-6 tracking-tight">
            Join These Successful Authors Today
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-400 font-medium mb-10 max-w-2xl mx-auto">
            The proof is right in front of you. The software works. The method works. The only thing missing is you taking action before the price jumps.
          </p>

          <button 
            onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
            className="w-full sm:w-auto bg-primary-500 hover:bg-primary-400 text-black font-black uppercase tracking-tight text-xl px-12 py-6 rounded-xl shadow-[0_0_40px_rgba(255,138,0,0.4)] hover:shadow-[0_0_60px_rgba(255,138,0,0.6)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 group mx-auto"
          >
            Claim Your Spot Now
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <div className="mt-6">
            <SecurePaymentLogos />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
