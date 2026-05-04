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
    <header className="relative min-h-[60vh] md:min-h-[75vh] flex items-center overflow-hidden bg-gradient-to-br from-[#0A66C2] via-[#0A66C2] to-[#07337A] pt-24 pb-12 md:pt-24 md:pb-0">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.8)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>
      
      {/* Premium APG Depth Glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_28%,rgba(255,255,255,0.1),transparent_60%),radial-gradient(circle_at_bottom_right,rgba(4,26,64,0.3),transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-5 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="z-10 text-center lg:text-left"
          >
            <div className="relative group">
              {/* Premium Glass Card */}
              <div className="relative rounded-[2rem] sm:rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-md p-6 sm:p-10 md:p-12 shadow-[0_16px_40px_rgba(0,0,0,0.5)] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50" />
                <div className="relative z-10">
                
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="text-[0.625rem] tracking-[0.18em] text-white/70 font-extrabold uppercase mb-3 sm:mb-6"
                >
                  {tag}
                </motion.p>
                
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="text-2xl sm:text-3xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.2] sm:leading-[1.1] text-white tracking-tight"
                >
                  {title}
                </motion.h1>
                
                <motion.div 
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.35, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="h-px w-16 sm:w-24 bg-white/35 my-6 sm:my-8 origin-center lg:origin-left mx-auto lg:mx-0"
                />
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.28, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                  className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 leading-relaxed max-w-prose mx-auto lg:mx-0"
                >
                  {description}
                </motion.p>
                </div>
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
