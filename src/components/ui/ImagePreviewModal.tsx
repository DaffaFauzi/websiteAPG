'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useCallback, useEffect } from 'react';
import FallbackImage from './FallbackImage';

type ImagePreviewModalProps = {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
};

export default function ImagePreviewModal({
  isOpen,
  onClose,
  imageSrc,
  imageAlt,
}: ImagePreviewModalProps) {
  const [scale, setScale] = useState(1);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [isOpen]);

  const handleZoomIn = useCallback(() => {
    setScale((prev) => Math.min(prev + 0.5, 4));
  }, []);

  const handleZoomOut = useCallback(() => {
    setScale((prev) => Math.max(prev - 0.5, 1));
  }, []);

  const resetZoom = useCallback(() => {
    setScale(1);
  }, []);

  // Reset scale when modal closes
  const handleClose = useCallback(() => {
    resetZoom();
    onClose();
  }, [onClose, resetZoom]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 lg:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            onClick={handleClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-6xl max-h-[90vh] overflow-hidden rounded-[2.5rem] bg-white shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header / Close Button */}
            <div className="absolute right-6 top-6 z-20">
              <button
                type="button"
                onClick={handleClose}
                className="h-12 w-12 rounded-full bg-white/90 border border-slate-200 text-slate-700 grid place-items-center shadow-sm hover:bg-white hover:scale-110 active:scale-95 transition-all duration-200"
                aria-label="Tutup preview"
              >
                <span className="text-2xl leading-none">×</span>
              </button>
            </div>

            {/* Zoom Controls */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-24 z-20 flex items-center gap-2 bg-white/90 backdrop-blur border border-slate-200 p-2 rounded-2xl shadow-xl">
              <button
                onClick={handleZoomOut}
                disabled={scale <= 1}
                className="h-10 w-10 rounded-xl flex items-center justify-center text-slate-700 hover:bg-slate-100 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
                title="Zoom Out"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
                </svg>
              </button>
              
              <div className="w-16 text-center text-sm font-bold text-slate-900 select-none">
                {Math.round(scale * 100)}%
              </div>

              <button
                onClick={handleZoomIn}
                disabled={scale >= 4}
                className="h-10 w-10 rounded-xl flex items-center justify-center text-slate-700 hover:bg-slate-100 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
                title="Zoom In"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
              </button>

              <div className="w-[1px] h-6 bg-slate-200 mx-1" />

              <button
                onClick={resetZoom}
                className="h-10 px-3 rounded-xl flex items-center justify-center text-xs font-bold text-[#0A66C2] hover:bg-[#0A66C2]/5 transition-colors"
              >
                Reset
              </button>
            </div>

            {/* Image Container - No scrollbars, controlled zoom */}
            <div className="relative flex-grow bg-slate-50 overflow-hidden min-h-[300px] cursor-grab active:cursor-grabbing">
              <motion.div 
                className="relative w-full h-full min-h-[60vh] flex items-center justify-center"
                animate={{ scale }}
                drag={scale > 1}
                dragConstraints={{ left: -500, right: 500, top: -500, bottom: 500 }}
                dragElastic={0.1}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              >
                <FallbackImage
                  src={imageSrc}
                  fallbackSrc="/images/presentation-placeholder.svg"
                  alt={imageAlt}
                  fill
                  className="object-contain pointer-events-none"
                  priority
                />
              </motion.div>
            </div>

            {/* Footer */}
            <div className="bg-white px-8 py-6 border-t border-slate-100 z-10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{imageAlt}</h3>
                  <p className="text-sm text-slate-500 font-medium mt-1">Gunakan tombol zoom atau drag untuk melihat detail</p>
                </div>
                <button
                  onClick={handleClose}
                  className="px-6 py-2.5 rounded-full bg-slate-900 text-white text-sm font-bold hover:bg-slate-800 transition-colors"
                >
                  Tutup
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
