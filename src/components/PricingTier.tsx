"use client";

import { motion } from "framer-motion";
import { Check, ShieldCheck, ArrowRight } from "lucide-react";

export function PricingTier() {
  return (
    <section id="pricing" className="py-24 bg-background relative z-10">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[800px] max-w-[1200px] bg-primary-500/10 blur-[150px] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-6xl font-black text-white mb-6 uppercase tracking-tighter">
            Choose Your <span className="text-primary-500">Unfair Advantage</span>
          </h2>
          <p className="text-xl text-gray-400 font-medium max-w-2xl mx-auto">
            Strictly limited to the first 250 action takers today. Once all seats are filled, the price will revert to the standard $99/month subscription.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-surface rounded-[2rem] border-2 border-primary-500 p-8 sm:p-12 shadow-[0_0_80px_rgba(255,138,0,0.2)]"
          >
            {/* Best Value Badge */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-red-600 to-red-500 text-white font-black uppercase tracking-widest text-sm px-6 py-2 rounded-full border border-red-400 shadow-xl whitespace-nowrap">
              Lifetime Founders Edition
            </div>

            <div className="text-center mb-8">
              <h3 className="text-3xl font-black text-white mb-2">KDP Mafia Pro</h3>
              <p className="text-gray-400 font-medium">Everything you need to build a 6-figure publishing empire.</p>
            </div>

            <div className="text-center mb-8 pb-8 border-b border-white/10">
              <div className="flex justify-center items-center gap-4 mb-2 text-gray-500 font-bold text-2xl line-through decoration-red-600">
                $99/month
              </div>
              <div className="flex justify-center items-start">
                <span className="text-3xl font-bold text-primary-500 mt-2">$</span>
                <span className="text-7xl font-black text-white tracking-tighter">14.99</span>
              </div>
              <div className="text-primary-400 font-black uppercase tracking-widest text-sm mt-2">
                One-Time Payment. No Monthly Fees.
              </div>
            </div>

            <ul className="space-y-4 mb-10">
              {[
                "Unlimited AI Niche & Keyword Searches",
                "Full Access to All 8 Book Generators",
                "Unlimited Cover & Interior Downloads",
                "1-Click KDP Export Engine",
                "Commercial & Agency Rights Included",
                "All 6 Fast-Action Bonuses Included",
                "Free Lifetime Updates"
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary-500" />
                  </div>
                  <span className="text-white font-bold">{feature}</span>
                </li>
              ))}
            </ul>

            {/* Order Bump */}
            <div className="mb-8 border-2 border-dashed border-red-500/50 bg-red-500/5 hover:bg-red-500/10 transition-colors rounded-xl p-4 text-left relative cursor-pointer group">
              <div className="absolute -top-3 right-4 bg-red-600 text-white text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full shadow-lg">
                Highly Recommended
              </div>
              <label className="flex items-start gap-3 cursor-pointer w-full">
                <input type="checkbox" className="w-5 h-5 mt-1 accent-red-600 cursor-pointer shrink-0" defaultChecked />
                <div>
                  <h4 className="font-black text-white text-base md:text-sm uppercase flex items-center gap-2 leading-tight">
                    YES, Add "KDP Income Booster" Add-On
                  </h4>
                  <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                    Unlock the exclusive <strong className="text-white">$10,000 Amazon KDP Case Study</strong>. Discover the exact underground strategy to accelerate your KDP profits in just 30 days. <br/>
                    <span className="font-black text-red-400 mt-1 block">Just $8.95 One Time (Normally $197)</span>
                  </p>
                </div>
              </label>
            </div>

            <button className="w-full bg-gradient-to-r from-primary-500 to-primary-400 hover:from-primary-400 hover:to-primary-300 text-black font-black uppercase tracking-tight text-xl py-6 rounded-xl shadow-[0_0_40px_rgba(255,138,0,0.4)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 group mb-6">
              Get Instant Access Now
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="flex items-center justify-center gap-2 text-sm text-gray-400 font-medium bg-white/5 py-3 rounded-lg">
              <ShieldCheck className="w-5 h-5 text-green-500" />
              100% Risk-Free 30-Day Guarantee
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
