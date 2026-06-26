"use client";

import { useEffect, useState, useCallback } from "react";
import { Hand, X } from "lucide-react";

export function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  const showPopup = useCallback(() => {
    if (!hasShown) {
      setIsOpen(true);
      setHasShown(true);
    }
  }, [hasShown]);

  useEffect(() => {
    // 1. Intercept Back Button
    window.history.pushState({ popup: "active" }, "");

    const handlePopState = () => {
      if (!hasShown) {
        showPopup();
        // Push state again so they don't immediately leave if they dismiss the popup
        window.history.pushState({ popup: "active" }, "");
      }
    };

    window.addEventListener("popstate", handlePopState);

    // 2. Desktop Exit Intent (mouse leaves top of screen)
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        showPopup();
      }
    };
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("popstate", handlePopState);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [hasShown, showPopup]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-300">
      <div className="relative w-full max-w-2xl bg-[#0a0a0a] border border-primary-500/50 shadow-[0_0_80px_rgba(255,138,0,0.15)] rounded-2xl overflow-hidden animate-in zoom-in-95 duration-300">
        
        {/* Subtle Glow Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-transparent pointer-events-none" />

        {/* Close Button */}
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute z-10 bg-black/50 backdrop-blur-sm border border-white/10 rounded-full text-gray-400 hover:text-white hover:bg-white/10 w-8 h-8 flex items-center justify-center transition-all hover:scale-110"
          style={{ right: '12px', top: '12px' }} 
        >
          <X className="w-5 h-5" strokeWidth={2.5} />
        </button>

        {/* Header Area */}
        <div className="bg-gradient-to-b from-primary-600/20 to-transparent text-center pt-8 pb-6 px-6 relative border-b border-primary-500/20">
          <h2 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tighter mb-5">
            Wait <span className="text-primary-500">Hold Up!!!</span>
          </h2>
          
          <div className="bg-black/60 backdrop-blur-md text-white py-3 px-6 rounded-xl border border-primary-500/30 shadow-xl inline-flex items-center gap-3 justify-center">
            <div className="bg-primary-500/20 rounded-full p-2 shrink-0 flex items-center justify-center border border-primary-500/50">
               <Hand className="w-6 h-6 text-primary-500 fill-primary-500" />
            </div>
            <span className="text-xl sm:text-2xl font-black tracking-tight uppercase text-gray-200">
              Don't Leave Empty Handed
            </span>
          </div>
        </div>

        {/* Body Area */}
        <div className="p-8 sm:p-12 text-center flex flex-col items-center relative z-10">
          <h3 className="text-3xl sm:text-5xl font-black text-white mb-4 tracking-tight">
            Click The Button Below
          </h3>
          <p className="text-xl sm:text-3xl text-gray-300 font-medium mb-10">
            To Claim Your <span className="text-primary-500 font-bold underline decoration-primary-500/50 decoration-4 underline-offset-4">$4 Discount</span> Now!
          </p>

          <button 
            onClick={() => {
              setIsOpen(false);
              document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="w-full max-w-lg bg-gradient-to-r from-primary-500 to-yellow-500 hover:from-primary-400 hover:to-yellow-400 text-black rounded-xl py-5 px-6 shadow-[0_0_40px_rgba(255,138,0,0.3)] hover:shadow-[0_0_60px_rgba(255,138,0,0.5)] active:translate-y-1 transition-all flex flex-col items-center gap-1 mb-8 group"
          >
            <span className="text-2xl sm:text-3xl font-black tracking-tight uppercase group-hover:scale-[1.02] transition-transform">
              Claim Your $4 Discount!
            </span>
            <span className="text-sm font-bold opacity-80 uppercase tracking-widest mt-1">
              Limited Discount Only. Act Right Now!
            </span>
          </button>

          <div className="bg-white/5 border border-white/10 px-6 py-3 rounded-lg flex items-center justify-center gap-3">
            <span className="text-gray-400 font-medium">Just</span>
            <span className="text-green-500 font-black text-2xl">$8.95 One Time</span> 
            <span className="line-through text-red-500/80 font-bold ml-2">(Normally $197)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
