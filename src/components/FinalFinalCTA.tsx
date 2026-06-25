"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, CreditCard } from "lucide-react";

export function FinalFinalCTA() {
  return (
    <section className="py-24 bg-[#0a0a0a] relative z-10 border-t border-white/5 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[1000px] bg-primary-600/10 blur-[150px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 text-center relative z-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <span className="text-red-500 font-bold tracking-widest uppercase text-sm mb-4 block animate-pulse">Last Chance</span>
          <h2 className="text-5xl sm:text-7xl font-black text-white mb-8 tracking-tighter leading-none">
            Are You In, Or Are <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-yellow-400">You Out?</span>
          </h2>
          
          <p className="text-xl sm:text-2xl text-gray-300 font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
            You've scrolled to the very bottom of this page. You know this is exactly what you need to scale your KDP business. Click the button below before the timer expires.
          </p>

          <div className="bg-surface border border-primary-500/30 p-8 rounded-[2rem] shadow-2xl max-w-2xl mx-auto mb-8">
            <button 
              onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
              className="w-full bg-gradient-to-r from-primary-500 to-primary-400 hover:from-primary-400 hover:to-primary-300 text-black font-black uppercase tracking-tight text-xl sm:text-2xl py-6 sm:py-8 rounded-xl shadow-[0_0_40px_rgba(255,138,0,0.4)] hover:shadow-[0_0_60px_rgba(255,138,0,0.6)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 group mb-2"
            >
              Get KDP Mafia For $14.99
              <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
            </button>
            <p className="text-sm text-red-500 font-bold uppercase tracking-widest mt-2 mb-6 text-center">
              Hurry: Early Bird Pricing Increases Every Hour. Reverts to Monthly Subscription Soon.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-gray-400 font-medium text-sm">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-green-500" />
                30-Day Guarantee
              </div>
              <div className="flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-blue-500" />
                Secure 256-bit Checkout
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-4 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
            {/* Fake payment icons using simple divs for visual representation */}
            <div className="px-3 py-1 bg-white rounded flex items-center font-bold text-blue-800 italic">VISA</div>
            <div className="px-3 py-1 bg-white rounded flex items-center font-bold text-red-600">MasterCard</div>
            <div className="px-3 py-1 bg-white rounded flex items-center font-bold text-blue-500">AMEX</div>
            <div className="px-3 py-1 bg-white rounded flex items-center font-bold text-blue-900">PayPal</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
