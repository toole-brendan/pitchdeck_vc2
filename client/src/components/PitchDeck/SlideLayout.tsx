import React, { ReactNode, useState, useEffect, useRef, useLayoutEffect } from 'react';
import { useLocation } from 'wouter';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { modernTypography, modernColors, scaleUpVariants } from './ModernSlideStyles';
import { useIsMobile } from '@/hooks/use-mobile';

interface SlideLayoutProps {
  title: string;
  slideNumber: number;
  totalSlides: number;
  children: ReactNode;
}

const SlideLayout: React.FC<SlideLayoutProps> = ({ 
  title, 
  slideNumber, 
  totalSlides, 
  children 
}) => {
  const [, navigate] = useLocation();
  const isMobile = useIsMobile();
  const slideRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [contentHeight, setContentHeight] = useState(0);
  const [fullHeight, setFullHeight] = useState(0);

  const goToNextSlide = () => {
    if (slideNumber < totalSlides) {
      navigate(`/slide/${slideNumber + 1}`);
    } else {
      navigate('/');
    }
  };

  const goToPrevSlide = () => {
    if (slideNumber > 1) {
      navigate(`/slide/${slideNumber - 1}`);
    } else {
      navigate('/');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      goToNextSlide();
    } else if (e.key === 'ArrowLeft') {
      goToPrevSlide();
    }
  };

  // Force a re-render after initial mount to get accurate measurements
  const [, forceUpdate] = useState({});
  useEffect(() => {
    setTimeout(() => forceUpdate({}), 50);
  }, []);

  // Calculate scale for desktop only using Layout Effect to prevent flickering
  useLayoutEffect(() => {
    if (isMobile) {
      setScale(1); // No scaling on mobile
      return;
    }

    const updateScale = () => {
      if (!contentRef.current || !titleRef.current || !slideRef.current) return;
      
      // Get measurements
      const titleHeight = titleRef.current.offsetHeight;
      const navPadding = 48; // Space for navigation (24px top and bottom)
      const slidePadding = 48; // Slide padding (24px top and bottom)
      
      // Calculate available height and content height
      const viewportHeight = window.innerHeight;
      const availableHeight = viewportHeight - titleHeight - navPadding - slidePadding;
      
      // Get natural content height (without scaling)
      contentRef.current.style.transform = 'scale(1)';
      const naturalContentHeight = contentRef.current.scrollHeight;
      setContentHeight(naturalContentHeight);
      setFullHeight(viewportHeight);
      
      // Calculate scale factor (if content is taller than available space)
      if (naturalContentHeight > availableHeight && availableHeight > 0) {
        const newScale = Math.max(0.5, availableHeight / naturalContentHeight);
        setScale(newScale);
      } else {
        setScale(1);
      }
    };

    // Update scale on mount and window resize
    updateScale();
    window.addEventListener('resize', updateScale);
    
    return () => {
      window.removeEventListener('resize', updateScale);
    };
  }, [isMobile, children]);

  return (
    <div 
      ref={slideRef}
      className="slide-layout w-full bg-white flex flex-col p-6 relative"
      style={{ 
        height: isMobile ? 'auto' : '100vh',
        minHeight: isMobile ? '100vh' : 'auto',
        overflowY: isMobile ? 'auto' : 'hidden'
      }}
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      {/* Navigation Controls */}
      <div className="nav-controls fixed z-50 top-1/2 -translate-y-1/2 w-full flex justify-between px-4 md:px-8">
        <button 
          onClick={goToPrevSlide}
          className="w-10 h-10 md:w-12 md:h-12 bg-black/90 backdrop-blur-sm text-white shadow-lg flex items-center justify-center hover:bg-black transition-all duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
        </button>
        <button 
          onClick={goToNextSlide}
          className="w-10 h-10 md:w-12 md:h-12 bg-black/90 backdrop-blur-sm text-white shadow-lg flex items-center justify-center hover:bg-black transition-all duration-300"
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
        </button>
      </div>

      {/* Slide Number */}
      <div className={`absolute top-4 right-6 ${modernTypography.small}`} style={{ color: modernColors.textLight }}>
        {slideNumber} / {totalSlides}
      </div>

      {/* Title Container - Fixed position and size */}
      <div 
        ref={titleRef}
        className="slide-title-container w-full max-w-5xl mx-auto mb-8"
      >
        <h2 className={`${modernTypography.slideTitle}`} style={{ color: modernColors.text }}>
          {title}
        </h2>
      </div>

      {/* Content Container - Resizable */}
      <div 
        className={`slide-content-wrapper flex-1 w-full max-w-5xl mx-auto ${
          isMobile ? 'overflow-visible' : 'overflow-hidden'
        }`}
      >
        <motion.div 
          ref={contentRef}
          className="slide-content w-full"
          style={{ 
            transform: isMobile ? 'none' : `scale(${scale})`,
            transformOrigin: 'top center',
            willChange: 'transform',
          }}
          variants={scaleUpVariants}
          initial="hidden"
          animate="visible"
        >
          {children}
        </motion.div>
      </div>
      
      {/* Debug info (can be removed in production) */}
      {/* <div className="fixed bottom-2 left-2 text-xs text-gray-400 bg-white/80 p-1">
        Scale: {scale.toFixed(2)} | Content: {contentHeight}px | Available: {fullHeight}px
      </div> */}
    </div>
  );
};

export default SlideLayout;