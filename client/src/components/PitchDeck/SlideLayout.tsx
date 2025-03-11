import React, { ReactNode, useState, useEffect, useRef } from 'react';
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
  const contentRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [contentHeight, setContentHeight] = useState(0);

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

  // Calculate scale for desktop only
  useEffect(() => {
    if (isMobile) {
      setScale(1); // No scaling on mobile
      return;
    }

    const updateScale = () => {
      if (!contentRef.current) return;
      
      // Get the content's natural height
      const contentEl = contentRef.current;
      const titleHeight = 100; // Estimated fixed height for title area
      const padding = 72; // Top and bottom padding (36px each)
      
      // Get the current content height
      const contentHeight = contentEl.scrollHeight;
      setContentHeight(contentHeight);
      
      // Calculate available viewport height
      const viewportHeight = window.innerHeight;
      const availableHeight = viewportHeight - titleHeight - padding;
      
      // Calculate scale factor
      if (contentHeight > availableHeight) {
        setScale(availableHeight / contentHeight);
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
      className="slide-layout min-h-screen w-full bg-white flex flex-col p-6 relative"
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
      <div className="slide-title-container w-full max-w-5xl mx-auto mb-4">
        <h2 className={`${modernTypography.slideTitle}`} style={{ color: modernColors.text }}>
          {title}
        </h2>
      </div>

      {/* Content Container - Resizable */}
      <div className={`slide-content-wrapper flex-1 w-full max-w-5xl mx-auto ${isMobile ? 'overflow-auto' : 'overflow-hidden flex items-center'}`}>
        <motion.div 
          ref={contentRef}
          className={`slide-content w-full ${isMobile ? '' : 'origin-top'}`}
          style={{ 
            transform: isMobile ? 'none' : `scale(${scale})`,
            height: isMobile ? 'auto' : `${contentHeight}px`,
            transformOrigin: 'top center'
          }}
          variants={scaleUpVariants}
          initial="hidden"
          animate="visible"
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};

export default SlideLayout;