'use client';

import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  children: React.ReactNode;
  reveal: boolean;
  animate: boolean;
  disabled?: boolean;
};

export default function PageReveal({ children, reveal, animate, disabled }: Props) {
  if (!animate) {
    return <div style={disabled ? { pointerEvents: 'none' } : undefined}>{children}</div>;
  }

  return (
    <motion.div
      initial={false}
      animate={reveal ? 'visible' : 'hidden'}
      variants={{
        hidden: { opacity: 0, y: '0.5rem' },
        visible: { opacity: 1, y: '0rem' },
      }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      style={disabled ? { pointerEvents: 'none' } : undefined}
    >
      {children}
    </motion.div>
  );
}
