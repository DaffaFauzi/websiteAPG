'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface InnerPageHeroProps {
  tag: string;
  title: string;
  description: string;
  children?: React.ReactNode; // Right side visual content
  size?: 'default' | 'compact';
}

const InnerPageHero: React.FC<InnerPageHeroProps> = ({ tag, title, description, children, size = 'default' }) => {
  const isCompact = size === 'compact';

  return (
    <header className={`relative transition-all duration-700 ease-[0.22, 1, 0.36, 1] ${isCompact ? 'min-h-[35vh] md:min-h-[40vh] pt-24 pb-8' : 'min-h-[45vh] md:min-h-[55vh] pt-32 pb-12 md:pb-20'} flex items-center overflow-hidden bg-slate-50`}>
      {/* Background ambient grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.8)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.8)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-[2.5rem] sm:rounded-[3.5rem] overflow-hidden bg-gradient-to-br from-[#0A66C2] via-[#0A66C2] to-[#041E4A] shadow-[0_40px_80px_-20px_rgba(10,102,194,0.25)] border border-white/10"
        >
          {/* Ambient light effects */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.15),transparent_60%),radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.2),transparent_68%)]" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center p-8 sm:p-14 lg:p-16">
            {/* Left Side: Text Content */}
            <div className="lg:col-span-7 text-left flex flex-col items-start order-2 lg:order-1">
              <div className="text-[10px] sm:text-xs font-black tracking-[0.25em] uppercase text-white/70 mb-8 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-white/30" />
                {tag}
              </div>
              
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-8 tracking-tight">
                {title}
              </h1>

              <div className="h-0.5 w-24 bg-white/20 mb-10 rounded-full" />

              <p className="text-base sm:text-xl text-white/90 leading-relaxed max-w-2xl font-medium">
                {description}
              </p>
            </div>

            {/* Right Side: Visual Content */}
            <div className="lg:col-span-5 order-1 lg:order-2">
              <div className="relative h-48 sm:h-64 lg:h-[22rem] w-full flex items-center justify-center">
                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-[2rem] border border-white/10 -z-10" />
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="w-full h-full flex items-center justify-center p-4"
                >
                  {children}
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default InnerPageHero;
