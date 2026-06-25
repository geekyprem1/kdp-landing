"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, Clock } from "lucide-react";

export function UrgencyBar() {
  const [isVisible, setIsVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState({ hours: 4, minutes: 59, seconds: 59 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          exit={{ y: -50 }}
          className="bg-primary-500/10 border-b border-primary-500/20 text-white py-2 px-4 z-50 relative overflow-hidden"
        >
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-primary-500/20 to-red-600/20 animate-[pulse_3s_ease-in-out_infinite]" />
          
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 relative z-10 text-sm font-medium text-center">
            <div className="flex items-center gap-2 text-red-400">
              <AlertTriangle className="w-4 h-4 animate-bounce" />
              <span className="font-bold tracking-wider uppercase text-xs">Closing Soon:</span>
            </div>
            
            <p className="text-white text-sm font-medium">
              The <strong className="text-yellow-400">$14.99</strong> Lifetime Offer is strictly limited to the next 17 people. Once filled, it reverts to a <strong className="text-red-400">$99/month</strong> subscription.
            </p>

            <div className="flex items-center gap-2 font-mono text-primary-300 font-bold bg-black/40 px-3 py-1 rounded-md border border-primary-500/30">
              <Clock className="w-4 h-4" />
              {String(timeLeft.hours).padStart(2, "0")}:{String(timeLeft.minutes).padStart(2, "0")}:{String(timeLeft.seconds).padStart(2, "0")}
            </div>
            
            <button 
              onClick={() => {
                 document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-primary-500 hover:bg-primary-400 text-black px-4 py-1 rounded font-bold uppercase text-xs tracking-wider transition-colors shadow-[0_0_10px_rgba(255,138,0,0.5)]"
            >
              Claim License
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
