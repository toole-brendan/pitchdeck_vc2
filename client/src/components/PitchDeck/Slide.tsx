import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import { SlideProps } from './PitchDeck';
import { useAutoScale } from '@/hooks/use-auto-scale';

interface Props extends SlideProps {
  children: React.ReactNode;
  className?: string;
}

const Slide: React.FC<Props> = ({ isActive, index, children, className = '' }) => {
  const isDesktop = useMediaQuery({ minWidth: 768 });
  
  // Use the auto-scale hook to detect overflow and calculate appropriate scaling
  const { containerRef, contentRef, scale, hasOverflow } = useAutoScale({
    titleSelector: 'h1, h2.slide-title', // Select slide title elements
    contentSelector: '.slide-content-body', // Select the content area that should scale
    minScale: 0.5, // Minimum scale factor
    maxScale: 1,   // Maximum scale factor
    debug: false   // Set to true to see debug logs in console
  });

  // Log scaling information when it changes
  useEffect(() => {
    if (isActive && hasOverflow) {
      console.log(`Slide ${index}: Content scaled to ${scale.toFixed(2)}`);
    }
  }, [scale, hasOverflow, isActive, index]);

  const variants = {
    desktop: {
      hidden: { opacity: 0, y: 20, pointerEvents: 'none' as const, display: 'none' as const },
      visible: { 
        opacity: 1, 
        y: 0, 
        pointerEvents: 'auto' as const, 
        display: 'flex' as const,
        transition: { duration: 0.4, ease: 'easeOut' }
      }
    },
    mobile: {
      hidden: { opacity: 0.3, display: 'block' as const },
      visible: { opacity: 1, display: 'block' as const }
    }
  };

  return (
    <motion.div
      ref={containerRef}
      className={`slide flex items-center justify-center px-6 md:px-12 ${
        isDesktop ? 'absolute top-0 left-0 w-full h-full' : 'min-h-screen'
      } ${className}`}
      data-index={index}
      initial="hidden"
      animate={isActive ? "visible" : "hidden"}
      variants={isDesktop ? variants.desktop : variants.mobile}
      style={{
        overflowY: isDesktop ? 'hidden' : 'auto'
      }}
    >
      <div 
        ref={contentRef} 
        className="slide-container w-full max-w-6xl mx-auto"
        style={{
          transform: isDesktop ? `scale(${scale})` : 'none', // Always apply scaling on desktop
          transformOrigin: 'center top',
          width: '100%',
          transition: 'transform 0.2s ease-out',
          margin: '0 auto',
          // Add top padding to ensure content is visible
          paddingTop: isDesktop ? '40px' : '20px',
          // Add bottom margin to ensure bottom content is visible
          marginBottom: isDesktop ? '100px' : '20px',
          position: 'relative',
          maxHeight: isDesktop ? 'calc(100vh - 150px)' : 'none' // Ensure max height considers navigation
        }}
      >
        {children}
      </div>
    </motion.div>
  );
};

export default Slide;
