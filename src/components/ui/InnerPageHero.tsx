'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface InnerPageHeroProps {
  tag: string;
  title: string;
  description: string;
  children?: React.ReactNode; // Right side visual content
}

const InnerPageHero: React.FC<InnerPageHeroProps> = ({ tag, title, description, children }) => {
  return (
    <header className="relative min-h-[65vh] md:min-h-[75vh] flex items-center overflow-hidden bg-[#0A66C2] pt-32 pb-20 md:pt-24 md:pb-0">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.55)_0.0625rem,transparent_0.0625rem),linear-gradient(to_bottom,rgba(255,255,255,0.55)_0.0625rem,transparent_0.0625rem)] bg-[size:4.5rem_4.5rem]" />
      </div>
      
      {/* Radial Glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_28%,rgba(255,255,255,0.14),transparent_62%),radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.16),transparent_68%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Side: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="z-10"
          >
            <div className="relative group">
              {/* Glass Card */}
              <div className="relative rounded-[2.5rem] border border-white/16 bg-white/8 p-8 md:p-12 shadow-[var(--shadow-hero)] overflow-hidden">
                
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="text-xs tracking-[0.18em] text-white/70 font-extrabold uppercase mb-6"
                >
                  {tag}
                </motion.p>
                
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-white tracking-tight"
                >
                  {title}
                </motion.h1>
                
                <motion.div 
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.35, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="h-px w-24 bg-white/35 my-8 origin-left"
                />
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.28, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                  className="text-lg md:text-xl text-white/80 leading-relaxed max-w-xl"
                >
                  {description}
                </motion.p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Visual Content */}
          <div className="relative h-[18.75rem] md:h-[25rem] lg:h-[31.25rem] flex items-center justify-center">
            {children}
          </div>
        </div>
      </div>
    </header>
  );
};

export default InnerPageHero;
