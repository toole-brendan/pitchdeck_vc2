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
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  
  // For debugging
  const [debugInfo, setDebugInfo] = useState({
    contentHeight: 0,
    availableHeight: 0,
    scale: 1
  });

  // Navigation functions
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

  // Calculate scaling and adjust content
  useEffect(() => {
    // Don't scale on mobile
    if (isMobile) {
      setScale(1);
      return;
    }

    // Function to calculate and set scale
    const calculateScale = () => {
      if (!contentRef.current || !titleRef.current || !containerRef.current) return;
      
      // Reset transform to get accurate measurements
      contentRef.current.style.transform = 'none';
      
      // Get measurements
      const containerHeight = containerRef.current.clientHeight;
      const titleHeight = titleRef.current.clientHeight;
      const contentHeight = contentRef.current.scrollHeight;
      
      // Calculate available space (minus navigation buttons space and padding)
      const navigationSpace = 40; // Space to reserve for navigation elements
      const padding = 50; // Extra padding for aesthetics
      const availableHeight = containerHeight - titleHeight - navigationSpace - padding;
      
      // Calculate the scale needed to fit content in available space
      let newScale = 1;
      
      if (contentHeight > 0 && availableHeight > 0 && contentHeight > availableHeight) {
        newScale = availableHeight / contentHeight;
        // Limit scaling to avoid too small content
        newScale = Math.max(newScale, 0.6);
      }
      
      // Update debugging information
      setDebugInfo({
        contentHeight,
        availableHeight,
        scale: newScale
      });
      
      // Set the scale
      setScale(newScale);
    };

    // Calculate scale initially
    calculateScale();
    
    // Recalculate on window resize
    const handleResize = () => {
      calculateScale();
    };
    
    window.addEventListener('resize', handleResize);
    
    // Forced recalculation after 100ms to ensure content is fully rendered
    const timer = setTimeout(() => {
      calculateScale();
    }, 100);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
    };
  }, [isMobile, children]);

  return (
    <div 
      ref={containerRef}
      className="slide-layout w-full bg-white relative"
      style={{
        height: isMobile ? 'auto' : '100vh',
        overflow: isMobile ? 'auto' : 'hidden',
        display: 'flex',
        flexDirection: 'column',
        padding: '24px'
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

      {/* Fixed Header Area */}
      <div 
        ref={titleRef} 
        className="slide-title w-full max-w-5xl mx-auto mb-4"
      >
        <h2 className={`${modernTypography.slideTitle}`} style={{ color: modernColors.text }}>
          {title}
        </h2>
      </div>

      {/* Scrollable Content Area */}
      <div 
        className={`slide-content-container flex-1 w-full max-w-5xl mx-auto pb-4 ${
          isMobile ? 'overflow-visible' : 'overflow-auto'
        }`}
      >
        <motion.div 
          ref={contentRef}
          className={`slide-content w-full`}
          style={{ 
            transformOrigin: 'top center',
            transform: isMobile ? 'none' : `scale(${scale})`,
            height: isMobile ? 'auto' : 'auto',
            marginBottom: isMobile ? '0' : `${(1 - scale) * 100}%` // Add space at bottom to prevent truncation
          }}
          variants={scaleUpVariants}
          initial="hidden"
          animate="visible"
        >
          {children}
        </motion.div>
      </div>
      
      {/* Debug Info - Uncomment to troubleshoot scaling issues */}
      {/*
      <div className="fixed bottom-2 left-2 text-xs bg-white/80 p-1 z-50 text-black">
        Content: {debugInfo.contentHeight}px | Available: {debugInfo.availableHeight}px | Scale: {debugInfo.scale.toFixed(2)}
      </div>
      */}
    </div>
  );
};

export default SlideLayout;