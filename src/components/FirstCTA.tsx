"use client";

import { motion } from "framer-motion";
import { ArrowRight, Unlock } from "lucide-react";
import { SecurePaymentLogos } from "./SecurePaymentLogos";

export function FirstCTA() {
  return (
    <section className="py-20 relative overflow-hidden bg-primary-900/10 border-y border-primary-500/10">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80&w=2000')] opacity-5 bg-cover bg-center mix-blend-overlay" />
      
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-500/10 text-red-500 mb-6 border border-red-500/20">
            <Unlock className="w-8 h-8" />
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-6 tracking-tight">
            Ready To Skip The Hard Work And Jump Straight To The Profits?
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-400 font-medium mb-10 max-w-2xl mx-auto">
            You've seen what it can do. You know how much time it will save you. Why keep struggling with the "old way" when the ultimate shortcut is staring you in the face?
          </p>

          <div className="flex flex-col items-center gap-4">
            <button 
              onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
              className="w-full sm:w-auto bg-red-600 hover:bg-red-500 text-white font-black uppercase tracking-tight text-xl px-12 py-6 rounded-xl shadow-[0_0_40px_rgba(220,38,38,0.5)] hover:shadow-[0_0_60px_rgba(220,38,38,0.7)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 group"
            >
              Unlock KDP Mafia Now
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-sm text-red-500 font-bold uppercase tracking-widest mt-2">
              Hurry: Early Bird Pricing Increases Every Hour. Reverts to Monthly Subscription Soon.
            </p>
            <SecurePaymentLogos />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
