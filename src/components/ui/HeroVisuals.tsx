'use client';

import React from 'react';
import { motion } from 'framer-motion';

// --- About Visual ---
export const AboutVisual = () => (
  <div className="relative h-full w-full flex items-center justify-center">
    {/* Central Glow */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.3),transparent_70%)] blur-3xl animate-pulse" />
    
    {/* Floating Shapes */}
    <motion.div
      animate={{ 
        y: [0, -30, 0],
        rotate: [0, 15, 0],
        scale: [1, 1.1, 1]
      }}
      transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      className="h-48 w-48 rounded-[2rem] border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl relative z-10"
    />
    
    <motion.div
      animate={{ 
        y: [0, 40, 0],
        x: [0, 20, 0],
        rotate: [0, -10, 0]
      }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      className="absolute top-1/4 right-1/4 h-32 w-32 rounded-full border border-white/10 bg-teal-400/10 backdrop-blur-lg shadow-xl"
    />
    
    <motion.div
      animate={{ 
        y: [0, -20, 0],
        x: [0, -40, 0],
        scale: [1, 0.9, 1]
      }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      className="absolute bottom-1/4 left-1/4 h-24 w-24 rounded-3xl border border-white/10 bg-blue-500/10 backdrop-blur-md shadow-lg"
    />
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
        <motion.line 
          x1="50" y1="20" x2="30" y2="50" 
          stroke="rgba(255,255,255,0.2)" strokeWidth="0.5"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.line 
          x1="50" y1="20" x2="70" y2="50" 
          stroke="rgba(255,255,255,0.2)" strokeWidth="0.5"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
        />
        <motion.line 
          x1="30" y1="50" x2="50" y2="80" 
          stroke="rgba(255,255,255,0.2)" strokeWidth="0.5"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 1 }}
        />
        <motion.line 
          x1="70" y1="50" x2="50" y2="80" 
          stroke="rgba(255,255,255,0.2)" strokeWidth="0.5"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 1.5 }}
        />
      </svg>
      
      {nodes.map((node, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: idx * 0.3 }}
          className="absolute h-4 w-4 rounded-full bg-blue-400 shadow-[0_0_20px_rgba(56,189,248,0.8)]"
          style={{ left: node.x, top: node.y, transform: 'translate(-50%, -50%)' }}
        >
          <motion.div 
            animate={{ scale: [1, 2], opacity: [0.5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 rounded-full bg-blue-400" 
          />
        </motion.div>
      ))}
      
      {/* Central Leadership Card */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl p-4 shadow-2xl z-10"
      >
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center text-xl">👑</div>
          <div className="text-left">
            <div className="text-[10px] font-bold text-blue-200 uppercase tracking-widest">Governance</div>
            <div className="text-sm font-bold text-white">Board of Directors</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// --- Subsidiaries Visual ---
export const SubsidiariesVisual = () => {
  const logos = ['🏦', '🛡️', '⚙️', '🏅', '⚖️', '💡'];
  
  return (
    <div className="relative h-full w-full flex items-center justify-center">
      <div className="grid grid-cols-3 gap-6">
        {logos.map((logo, idx) => (
          <motion.div
            key={idx}
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 5 + Math.random() * 3, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: idx * 0.5 
            }}
            whileHover={{ scale: 1.1, rotate: 10 }}
            className="h-20 w-20 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl flex items-center justify-center text-3xl shadow-xl cursor-pointer"
          >
            {logo}
          </motion.div>
        ))}
      </div>
      
      {/* Central Orbit Shape */}
      <div className="absolute inset-0 border-[1px] border-white/5 rounded-full scale-[1.2] opacity-50" />
      <div className="absolute inset-0 border-[1px] border-white/5 rounded-full scale-[1.5] opacity-30" />
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
          animate={{ 
            y: [0, -30, 0],
            x: [0, idx % 2 === 0 ? 10 : -10, 0]
          }}
          transition={{ 
            duration: 8 + idx * 2, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: idx * 1.5 
          }}
          className={`absolute rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl p-6 shadow-2xl z-10
            ${idx === 0 ? 'top-10 left-10' : idx === 1 ? 'bottom-20 right-10' : 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'}
          `}
        >
          <div className="text-3xl font-extrabold text-white mb-1">{stat.value}</div>
          <div className="text-[10px] font-bold text-white/60 uppercase tracking-widest">{stat.label}</div>
        </motion.div>
      ))}
      
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
    </div>
  );
};

// --- Contact Visual ---
export const ContactVisual = () => (
  <div className="relative h-full w-full flex items-center justify-center">
    {/* Abstract Map Grid */}
    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:32px_32px]" />
    
    {/* Central Pin Card */}
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, type: "spring" }}
      className="relative rounded-[2rem] border border-white/20 bg-white/10 backdrop-blur-xl p-6 shadow-2xl z-10 flex flex-col items-center"
    >
      <div className="h-16 w-16 rounded-full bg-blue-500/20 flex items-center justify-center text-4xl mb-4 relative">
        📍
        <motion.div 
          animate={{ scale: [1, 2], opacity: [0.5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 rounded-full bg-blue-500/40" 
        />
      </div>
      <div className="text-center">
        <div className="text-sm font-bold text-white">Headquarters</div>
        <div className="text-[10px] text-white/60">Jakarta, Indonesia</div>
      </div>
    </motion.div>
    
    {/* Floating Elements */}
    <motion.div 
      animate={{ y: [0, -20, 0] }}
      transition={{ duration: 4, repeat: Infinity }}
      className="absolute top-1/4 right-1/4 h-8 w-8 rounded-full bg-blue-400/20 blur-sm" 
    />
    <motion.div 
      animate={{ y: [0, 20, 0] }}
      transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      className="absolute bottom-1/4 left-1/4 h-12 w-12 rounded-full bg-teal-400/20 blur-sm" 
    />
  </div>
);
