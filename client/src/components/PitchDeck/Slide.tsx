import React from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import { useIsMobile } from '@/hooks/use-mobile';
import ScrollLock from '@/components/ScrollLock';

export interface SlideProps {
  isActive: boolean;
  index: number;
}

interface Props extends SlideProps {
  children: React.ReactNode;
  className?: string;
  preventScroll?: boolean;
  complexContent?: boolean;
}

const Slide: React.FC<Props> = ({ 
  isActive, 
  index, 
  children, 
  className = '',
  preventScroll = false,
  complexContent = false
}) => {
  const isDesktop = useMediaQuery({ minWidth: 768 });
  const isMobile = useIsMobile();

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

  // Apply ScrollLock only when slide is active and preventScroll is true
  const shouldLockScroll = isActive && preventScroll && isDesktop;

  return (
    <>
      {shouldLockScroll && <ScrollLock isActive={true} />}
      
      <motion.div
        className={`slide flex items-center justify-center 
          ${isDesktop ? 'absolute top-0 left-0 w-full h-full px-5 py-10 md:px-10 md:py-16' : 
                      'min-h-screen py-12 px-3 sm:px-5'} 
          ${className}`}
        data-index={index}
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
        variants={isDesktop ? variants.desktop : variants.mobile}
      >
        <div 
          className={`w-full max-w-6xl mx-auto
            ${isMobile ? 
              'max-h-full overflow-y-auto py-2 pb-16' : 
              complexContent ? 'overflow-y-auto max-h-[80vh]' : ''}`}
        >
          {/* Mobile-only visual indicator for scrollable content */}
          {isMobile && complexContent && (
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center text-xs text-gray-400 animate-pulse">
              <div className="w-1 h-5 border-l-2 border-r-2 border-gray-300 mb-1 rounded-full"></div>
              <span>Scroll for more</span>
            </div>
          )}
          
          {children}
        </div>
      </motion.div>
    </>
  );
};

export default Slide;
