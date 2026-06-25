"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { 
  LayoutDashboard, Search, BookOpen, PenTool, 
  Settings, CheckCircle2, Loader2, BarChart2, Zap
} from "lucide-react";

export function HeroDashboard() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) return 0; // Loop for demo
        return p + 1;
      });
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-[800px] mx-auto rounded-2xl border border-white/10 bg-[#0c0c0c]/90 backdrop-blur-2xl shadow-[0_40px_100px_rgba(0,0,0,1)] overflow-hidden flex flex-col h-[500px] xl:h-[650px] z-20 transition-all">
      
      {/* Top OS Bar */}
      <div className="h-12 bg-black/60 border-b border-white/5 flex items-center px-5 justify-between shrink-0 backdrop-blur-md">
        <div className="flex gap-2.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
          <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
        </div>
        <div className="flex items-center gap-5">
          <div className="text-[11px] font-mono text-primary-400 bg-primary-500/10 border border-primary-500/20 px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-[0_0_15px_rgba(255,138,0,0.1)]">
            <Zap className="w-3.5 h-3.5" /> 12,450 AI Credits
          </div>
          <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-gray-700 to-gray-500 border border-white/20 shadow-inner" />
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar */}
        <div className="w-16 bg-black/40 border-r border-white/5 flex flex-col items-center py-6 gap-7 shrink-0 backdrop-blur-xl">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-b from-primary-400 to-primary-600 flex items-center justify-center shadow-[0_0_20px_rgba(255,138,0,0.3)] mb-2 relative group cursor-pointer hover:scale-105 transition-transform">
            <BookOpen className="w-4 h-4 text-black" />
          </div>
          <LayoutDashboard className="w-5 h-5 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] cursor-pointer" />
          <Search className="w-5 h-5 text-gray-600 hover:text-white transition-colors cursor-pointer" />
          <PenTool className="w-5 h-5 text-gray-600 hover:text-white transition-colors cursor-pointer" />
          <div className="mt-auto">
            <Settings className="w-5 h-5 text-gray-600 hover:text-white transition-colors cursor-pointer" />
          </div>
        </div>

        {/* Main Workspace */}
        <div className="flex-1 bg-gradient-to-br from-[#0a0a0a] to-[#050505] p-6 lg:p-8 flex flex-col overflow-hidden relative">
          
          {/* Header */}
          <div className="flex justify-between items-end mb-8 shrink-0 border-b border-white/5 pb-5">
            <div>
              <h3 className="text-white font-semibold text-xl tracking-tight">Active Operations</h3>
              <p className="text-green-400 text-xs flex items-center gap-2 mt-1.5 font-medium tracking-wide uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.8)]" /> OS Online & Connected
              </p>
            </div>
            <div className="flex gap-3">
              <span className="bg-white/[0.02] border border-white/10 px-3 py-1.5 rounded-md text-xs text-gray-400 shadow-sm backdrop-blur-sm flex items-center gap-2">
                <BarChart2 className="w-3.5 h-3.5 text-primary-500" /> Platform Status: Optimal
              </span>
            </div>
          </div>

          {/* Realistic Platform Metrics */}
          <div className="grid grid-cols-4 gap-4 mb-8 shrink-0">
            <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4 shadow-sm backdrop-blur-sm">
              <div className="text-gray-500 text-[9px] uppercase tracking-widest font-bold mb-1.5">Books Created</div>
              <div className="text-white font-mono font-bold text-xl">1,245,892</div>
            </div>
            <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4 shadow-sm backdrop-blur-sm">
              <div className="text-gray-500 text-[9px] uppercase tracking-widest font-bold mb-1.5">Active Projects</div>
              <div className="text-white font-mono font-bold text-xl">14,204</div>
            </div>
            <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4 shadow-sm backdrop-blur-sm">
              <div className="text-gray-500 text-[9px] uppercase tracking-widest font-bold mb-1.5">Exported Kits</div>
              <div className="text-white font-mono font-bold text-xl">849,112</div>
            </div>
            <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4 shadow-sm backdrop-blur-sm">
              <div className="text-gray-500 text-[9px] uppercase tracking-widest font-bold mb-1.5">Niches Found</div>
              <div className="text-white font-mono font-bold text-xl">4.2M</div>
            </div>
          </div>

          {/* Workflow Stepper / AI Activity Feed */}
          <div className="flex-1 flex flex-col gap-3.5 overflow-y-auto pr-2 custom-scrollbar">
            
            {/* Live Activity 1 */}
            <div className="bg-white/[0.02] border border-white/5 rounded-xl p-3.5 flex gap-4 opacity-50 hover:opacity-100 transition-opacity">
              <div className="w-7 h-7 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-0.5">
                  <span className="text-gray-300 font-medium text-[13px]">Recently Published: Shadow Work Journal</span>
                  <span className="text-green-500 text-[10px] font-bold uppercase tracking-wider">Success</span>
                </div>
                <p className="text-gray-500 text-xs mt-1 font-medium">Export Complete • Uploaded to KDP Dashboard</p>
              </div>
            </div>

            {/* Live Activity 2 */}
            <div className="bg-white/[0.02] border border-white/5 rounded-xl p-3.5 flex gap-4 opacity-70 hover:opacity-100 transition-opacity">
              <div className="w-7 h-7 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-0.5">
                  <span className="text-gray-300 font-medium text-[13px]">Cover Ready: Mandala Adult Coloring</span>
                  <span className="text-green-500 text-[10px] font-bold uppercase tracking-wider">Rendered</span>
                </div>
                <div className="flex gap-2 mt-2">
                  <span className="text-[10px] px-2 py-0.5 rounded border border-white/10 text-gray-400 bg-black/20">8.5x11</span>
                  <span className="text-[10px] px-2 py-0.5 rounded border border-white/10 text-gray-400 bg-black/20">PDF Print</span>
                  <span className="text-[10px] px-2 py-0.5 rounded border border-white/10 text-gray-400 bg-black/20">Launch Kit Generated</span>
                </div>
              </div>
            </div>

            {/* Live Activity 3 (Active) */}
            <div className="bg-[#111] border border-primary-500/30 rounded-xl p-4 flex gap-4 shadow-[0_0_25px_rgba(255,138,0,0.08)] relative overflow-hidden">
              <div className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-red-500 via-primary-500 to-yellow-500 transition-all duration-300 shadow-[0_0_10px_rgba(255,138,0,0.5)]" style={{ width: `${progress}%` }} />
              
              <div className="w-7 h-7 rounded-full bg-primary-500/10 border border-primary-500/30 flex items-center justify-center shrink-0 relative">
                <Loader2 className="w-3.5 h-3.5 text-primary-500 animate-spin" />
                <div className="absolute inset-0 rounded-full border border-primary-500 animate-ping opacity-20" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-0.5">
                  <span className="text-white font-medium text-[13px]">Generating Interior: Cryptogram Vol 2</span>
                  <span className="text-primary-400 text-xs font-mono font-bold">{progress}%</span>
                </div>
                <p className="text-gray-400 text-xs mt-1 font-medium">
                  {progress < 40 ? "Calculating KDP margins and bleed logic..." : progress < 80 ? "AI generating unique puzzles..." : "Formatting 120-page high-res PDF..."}
                </p>
                
                {/* Mini Preview */}
                <div className="mt-4 flex gap-3">
                  <div className={`w-12 h-16 rounded border shadow-lg ${progress > 20 ? 'border-primary-500/40 bg-gradient-to-br from-red-900 to-black' : 'border-white/5 bg-white/5'} transition-all`} />
                  <div className={`w-12 h-16 rounded border shadow-lg ${progress > 60 ? 'border-white/30 bg-[#EFEFEF]' : 'border-white/5 bg-white/5'} transition-all flex items-center justify-center`}>
                    {progress > 60 && <div className="w-6 h-6 border-2 border-dashed border-black/20 rounded" />}
                  </div>
                </div>
              </div>
            </div>

            {/* Live Activity 4 */}
            <div className="bg-black/40 border border-white/5 rounded-xl p-3.5 flex gap-4 opacity-40 hover:opacity-100 transition-opacity">
              <div className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-0.5">
                  <span className="text-gray-400 font-medium text-[13px]">Publishing Queue</span>
                  <span className="text-gray-500 text-[10px] font-bold uppercase tracking-wider">3 Pending</span>
                </div>
                <p className="text-gray-500 text-xs mt-1 font-medium">Awaiting Launch Kit compilation...</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
