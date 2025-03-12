import React from 'react';
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
    minScale: 0.6, // Minimum scale factor
    maxScale: 1   // Maximum scale factor
  });

  const variants = {
    desktop: {
      hidden: { opacity: 0, y: 20, pointerEvents: 'none' as const },
      visible: { 
        opacity: 1, 
        y: 0, 
        pointerEvents: 'auto' as const,
        transition: { duration: 0.4, ease: 'easeOut' }
      }
    },
    mobile: {
      hidden: { opacity: 1, y: 0 },
      visible: { opacity: 1, y: 0 }
    }
  };

  return (
    <motion.div
      ref={containerRef}
      className={`slide flex items-center justify-center px-6 md:px-20 ${
        isDesktop ? 'absolute top-0 left-0 w-full h-full' : 'min-h-screen'
      } ${className}`}
      data-index={index}
      initial="hidden"
      animate={isActive ? "visible" : "hidden"}
      variants={isDesktop ? variants.desktop : variants.mobile}
    >
      <div 
        ref={contentRef} 
        className="slide-container w-full max-w-6xl"
        style={{
          transform: isDesktop && hasOverflow ? `scale(${scale})` : 'none',
          transformOrigin: 'center',
          width: '100%',
          height: isDesktop ? 'auto' : '100%'
        }}
      >
        {children}
      </div>
    </motion.div>
  );
};

export default Slide;
