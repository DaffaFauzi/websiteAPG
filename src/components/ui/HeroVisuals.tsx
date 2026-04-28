'use client';

import React from 'react';
import { motion } from 'framer-motion';

const SUBSIDIARY_LOGOS = ['🏦', '🛡️', '⚙️', '🏅', '⚖️', '💡'];

// --- About Visual ---
export const AboutVisual = () => (
  <div className="relative h-full w-full flex items-center justify-center">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.14),transparent_62%)]" />
    
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="h-48 w-48 rounded-3xl border border-white/16 bg-white/8 shadow-[0_1.25rem_3.75rem_rgba(0,0,0,0.28)] relative z-10"
    />
    
    <div className="absolute top-1/4 right-1/4 h-28 w-28 rounded-full border border-white/12 bg-white/6" />
    <div className="absolute bottom-1/4 left-1/4 h-24 w-24 rounded-3xl border border-white/12 bg-white/6" />
  </div>
);

// --- Structure Visual ---
export const StructureVisual = () => {
  const nodes = [
    { x: '50%', y: '20%' }, // Top
    { x: '30%', y: '50%' }, // Mid Left
    { x: '70%', y: '50%' }, // Mid Right
    { x: '50%', y: '80%' }, // Bottom
  ];

  return (
    <div className="relative h-full w-full">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {/* Connection Lines */}
        <line 
          x1="50" y1="20" x2="30" y2="50" 
          stroke="rgba(255,255,255,0.2)" strokeWidth="0.5"
        />
        <line 
          x1="50" y1="20" x2="70" y2="50" 
          stroke="rgba(255,255,255,0.2)" strokeWidth="0.5"
        />
        <line 
          x1="30" y1="50" x2="50" y2="80" 
          stroke="rgba(255,255,255,0.2)" strokeWidth="0.5"
        />
        <line 
          x1="70" y1="50" x2="50" y2="80" 
          stroke="rgba(255,255,255,0.2)" strokeWidth="0.5"
        />
      </svg>
      
      {nodes.map((node, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: idx * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="absolute h-3.5 w-3.5 rounded-full bg-white/80"
          style={{ left: node.x, top: node.y, transform: 'translate(-50%, -50%)' }}
        />
      ))}
      
      {/* Central Leadership Card */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/16 bg-white/8 p-4 shadow-[0_1.25rem_3.75rem_rgba(0,0,0,0.28)] z-10"
      >
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center text-xl">👑</div>
          <div className="text-left">
            <div className="text-[0.625rem] font-bold text-white/65 uppercase tracking-[0.18em]">Governance</div>
            <div className="text-sm font-bold text-white">Board of Directors</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// --- Subsidiaries Visual ---
export const SubsidiariesVisual = () => {
  return (
    <div className="relative h-full w-full flex items-center justify-center">
      <div className="grid grid-cols-3 gap-6">
        {SUBSIDIARY_LOGOS.map((logo, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: idx * 0.06 }}
            whileHover={{ y: -2, scale: 1.02, rotate: 2 }}
            className="h-20 w-20 rounded-2xl border border-white/16 bg-white/8 flex items-center justify-center text-3xl shadow-[0_1rem_3rem_rgba(0,0,0,0.20)] cursor-pointer"
          >
            {logo}
          </motion.div>
        ))}
      </div>
      
      {/* Central Orbit Shape */}
      <div className="absolute inset-0 border-[0.0625rem] border-white/5 rounded-full scale-[1.3] opacity-40" />
    </div>
  );
};

// --- Career Visual ---
export const CareerVisual = () => {
  const stats = [
    { label: 'Projects', value: '500+', color: 'blue' },
    { label: 'Companies', value: '15+', color: 'teal' },
    { label: 'Sectors', value: '10+', color: 'indigo' },
  ];

  return (
    <div className="relative h-full w-full flex items-center justify-center">
      {stats.map((stat, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: idx * 0.08 }}
          className={`absolute rounded-3xl border border-white/16 bg-white/8 p-6 shadow-[0_1.25rem_3.75rem_rgba(0,0,0,0.28)] z-10
            ${idx === 0 ? 'top-10 left-10' : idx === 1 ? 'bottom-20 right-10' : 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'}
          `}
        >
          <div className="text-3xl font-extrabold text-white mb-1">{stat.value}</div>
          <div className="text-[0.625rem] font-bold text-white/60 uppercase tracking-[0.18em]">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
};

// --- Contact Visual ---
export const ContactVisual = () => (
  <div className="relative h-full w-full flex items-center justify-center">
    {/* Abstract Map Grid */}
    <div className="absolute inset-0 opacity-[0.12] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12)_0.0625rem,transparent_0.0625rem)] bg-[size:2.25rem_2.25rem]" />
    
    {/* Central Pin Card */}
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative rounded-3xl border border-white/16 bg-white/8 p-6 shadow-[0_1.5rem_5.5rem_rgba(0,0,0,0.32)] z-10 flex flex-col items-center"
    >
      <div className="h-16 w-16 rounded-full bg-blue-500/20 flex items-center justify-center text-4xl mb-4 relative">
        📍
      </div>
      <div className="text-center">
        <div className="text-sm font-bold text-white">Headquarters</div>
        <div className="text-[0.625rem] text-white/60">Jakarta, Indonesia</div>
      </div>
    </motion.div>
  </div>
);
