"use client";

import { motion } from "framer-motion";
import { Users, BookOpen, TrendingUp, Globe2 } from "lucide-react";
import { useEffect, useState } from "react";

const stats = [
  { id: 1, label: "Active Publishers", value: 14592, icon: Users, prefix: "", suffix: "+" },
  { id: 2, label: "Books Generated", value: 892400, icon: BookOpen, prefix: "", suffix: "+" },
  { id: 3, label: "Publisher Revenue", value: 12.4, icon: TrendingUp, prefix: "$", suffix: "M+" },
  { id: 4, label: "Countries Served", value: 104, icon: Globe2, prefix: "", suffix: "" },
];

function AnimatedCounter({ value, prefix = "", suffix = "", duration = 2 }: { value: number, prefix?: string, suffix?: string, duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // Easing function for smoother animation (easeOutExpo)
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(value * easeProgress);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [value, duration]);

  // Format based on whether it's a decimal (like 12.4M) or large integer
  const formattedCount = value % 1 !== 0 
    ? count.toFixed(1) 
    : Math.floor(count).toLocaleString();

  return (
    <span className="tabular-nums">
      {prefix}{formattedCount}{suffix}
    </span>
  );
}

export function HeroSocialProof() {
  return (
    <section className="py-12 bg-[#0a0a0a] border-y border-white/5 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/5">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center justify-center text-center px-4"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center mb-4 border border-primary-500/20 text-primary-500">
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="text-3xl sm:text-4xl font-black text-white mb-2 tracking-tight">
                <AnimatedCounter 
                  value={stat.value} 
                  prefix={stat.prefix} 
                  suffix={stat.suffix} 
                />
              </div>
              <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
