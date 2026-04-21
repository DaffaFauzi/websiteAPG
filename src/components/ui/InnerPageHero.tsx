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
    <header className="relative min-h-[60vh] md:min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-br from-[#0B7BE6] via-[#0A66C2] to-[#07337A] py-20 md:py-0">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-[0.10]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.55)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.55)_1px,transparent_1px)] bg-[size:56px_56px]" />
      </div>
      
      {/* Radial Glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-0 h-full w-full bg-[radial-gradient(circle_at_20%_30%,rgba(56,189,248,0.15),transparent_50%)]" />
        <div className="absolute bottom-0 right-0 h-full w-full bg-[radial-gradient(circle_at_80%_70%,rgba(20,184,166,0.1),transparent_50%)]" />
      </div>

      {/* Floating Background Shapes */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" 
      />
      <motion.div 
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full bg-teal-500/10 blur-3xl" 
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Side: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10"
          >
            <div className="relative group">
              {/* Glass Card */}
              <div className="relative rounded-[2.5rem] border border-white/20 bg-white/10 backdrop-blur-xl p-8 md:p-12 shadow-[0_32px_120px_rgba(0,0,0,0.3)] overflow-hidden">
                {/* Subtle highlight inside card */}
                <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-white/5 blur-2xl transition-transform duration-700 group-hover:scale-150" />
                
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-xs tracking-[0.24em] text-blue-200 font-extrabold uppercase mb-6"
                >
                  {tag}
                </motion.p>
                
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-white tracking-tight"
                >
                  {title}
                </motion.h1>
                
                <motion.div 
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="h-1.5 w-24 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full my-8 origin-left"
                />
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg md:text-xl text-white/80 leading-relaxed max-w-xl"
                >
                  {description}
                </motion.p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Visual Content */}
          <div className="relative h-[300px] md:h-[400px] lg:h-[500px] flex items-center justify-center">
            {children}
          </div>
        </div>
      </div>
    </header>
  );
};

export default InnerPageHero;
