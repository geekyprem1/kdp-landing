"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Monitor, Smartphone, Globe, CreditCard } from "lucide-react";
import { SecurePaymentLogos } from "./SecurePaymentLogos";
import { useEffect, useState } from "react";

export function UrgencyCTA() {
  // Simple countdown logic for visual effect
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 6, seconds: 1 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-12 sm:py-20 relative z-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#0a0a0a] border border-primary-500/50 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(255,138,0,0.15)] relative"
        >
          {/* Subtle Glow Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-transparent pointer-events-none" />

          <div className="grid md:grid-cols-[1fr_400px] gap-8 p-8 sm:p-12">
            
            {/* Left Side: Copy & Button */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 leading-[1.1] tracking-tight">
                One Click Away From Unstoppable <br className="hidden sm:block" />
                Book Publishing
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 font-medium mb-8">
                For A Tiny 1-Time Price, No Monthly Fees, EVER!
              </p>

              {/* Huge Button */}
              <button onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })} className="w-full relative group overflow-hidden bg-gradient-to-r from-primary-500 to-yellow-500 rounded-xl p-1 shadow-[0_0_30px_rgba(255,138,0,0.3)] hover:shadow-[0_0_50px_rgba(255,138,0,0.5)] transition-shadow">
                <div className="bg-gradient-to-r from-primary-500 to-[#ff9900] w-full h-full rounded-lg flex items-center justify-between p-4 sm:p-6 transition-all group-hover:brightness-110">
                  <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                    <ArrowRight className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex flex-col items-center flex-1 text-center">
                    <span className="text-white font-black text-xl sm:text-2xl uppercase tracking-tight">Click here now to get started</span>
                    <span className="text-white/80 font-medium text-xs sm:text-sm mt-1">Hurry Before The Price Increase</span>
                  </div>
                </div>
              </button>

              <SecurePaymentLogos />

            </div>

            {/* Right Side: Mockup & Timer */}
            <div className="flex flex-col justify-end">
              
              {/* Fake Software Mockups Group */}
              <div className="relative h-[250px] w-full mb-6 flex justify-center items-end hidden sm:flex">
                {/* Back Box */}
                <div className="absolute right-10 top-0 w-32 h-40 bg-white rounded-md shadow-2xl border-l-[16px] border-gray-300 flex items-center justify-center rotate-6">
                  <div className="text-black font-black text-lg rotate-[-90deg] whitespace-nowrap opacity-20">KDP MAFIA</div>
                </div>
                {/* Front Box */}
                <div className="absolute right-24 top-10 w-40 h-48 bg-white rounded-md shadow-[0_20px_40px_rgba(0,0,0,0.8)] border-l-[20px] border-gray-200 flex flex-col items-center justify-center p-4">
                  <div className="w-12 h-12 bg-primary-500 rounded-lg mb-2" />
                  <div className="text-black font-black text-xl text-center leading-tight">KDP<br/>Mafia</div>
                </div>
                {/* Laptop Mockup */}
                <div className="absolute left-0 bottom-0 w-56 h-36 bg-gray-900 rounded-t-xl border-4 border-gray-800 flex flex-col items-center justify-center shadow-2xl z-10">
                  <div className="w-full h-full bg-black p-2 flex flex-col items-center justify-center">
                    <div className="text-white font-black text-2xl flex items-center gap-2"><span className="text-primary-500">⚡</span> KDP Mafia</div>
                  </div>
                  <div className="absolute -bottom-2 w-64 h-2 bg-gray-700 rounded-b-xl" />
                </div>
              </div>

              {/* Timer Bar */}
              <div className="bg-red-600 text-white text-center py-2 font-bold text-sm uppercase tracking-widest shadow-[0_0_20px_rgba(220,38,38,0.4)]">
                Hurry: Only A Few Seats Left!
              </div>
              
              {/* Seats Remaining Block */}
              <div className="bg-black border border-white/10 p-6 flex flex-col items-center justify-center gap-2">
                <div className="text-gray-500 font-bold uppercase tracking-widest text-xs">Available Licenses</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-white font-black text-6xl tracking-tighter">07</span>
                  <span className="text-gray-600 font-black text-3xl">/ 250</span>
                </div>
                <div className="w-full bg-white/10 h-2 rounded-full mt-2 overflow-hidden">
                  <div className="bg-gradient-to-r from-red-600 to-red-400 w-[95%] h-full rounded-full" />
                </div>
              </div>

            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
