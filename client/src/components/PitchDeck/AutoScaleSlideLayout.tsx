import React, { useState, useEffect, ReactNode, useRef } from 'react';
import { useLocation } from 'wouter';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useMediaQuery } from 'react-responsive';
import { modernTypography, modernColors, scaleUpVariants } from './ModernSlideStyles';

interface AutoScaleSlideLayoutProps {
  title: string;
  slideNumber: number;
  totalSlides: number;
  children: ReactNode;
}

const AutoScaleSlideLayout: React.FC<AutoScaleSlideLayoutProps> = ({ 
  title, 
  slideNumber, 
  totalSlides, 
  children 
}) => {
  const [, navigate] = useLocation();
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const isDesktop = useMediaQuery({ minWidth: 768 });

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
    if (e.key === 'ArrowRight' || e.key === ' ') {
      e.preventDefault();
      goToNextSlide();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      goToPrevSlide();
    }
  };

  // Handle auto-scaling based on container size
  useEffect(() => {
    if (!isDesktop) return;
    
    const calculateScale = () => {
      if (containerRef.current && contentRef.current) {
        const containerWidth = containerRef.current.clientWidth;
        const containerHeight = containerRef.current.clientHeight;
        
        // Account for some padding
        const availableWidth = containerWidth * 0.9;
        const availableHeight = containerHeight * 0.9;
        
        // Base dimensions (from CSS)
        const contentWidth = 1280;
        const contentHeight = 720;
        
        // Calculate scale factors
        const widthScale = availableWidth / contentWidth;
        const heightScale = availableHeight / contentHeight;
        
        // Use the smaller scale to ensure content fits
        const newScale = Math.min(widthScale, heightScale);
        
        setScale(newScale);
      }
    };

    // Initial calculation
    calculateScale();
    
    // Recalculate on window resize
    const handleResize = () => {
      calculateScale();
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isDesktop]);

  return (
    <div 
      className={isDesktop ? "slide-container-desktop" : "slide-container-mobile"}
      ref={containerRef}
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      {/* Navigation Controls */}
      <div className="fixed z-50 top-1/2 -translate-y-1/2 w-full flex justify-between px-4 md:px-8">
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
      <div className={`fixed top-4 right-6 z-40 ${modernTypography.small}`} style={{ color: modernColors.textLight }}>
        {slideNumber} / {totalSlides}
      </div>

      {isDesktop ? (
        // Desktop: Auto-scaling container
        <div 
          ref={contentRef}
          className="slide-content-wrapper bg-white"
          style={{ 
            transform: `translate(-50%, -50%) scale(${scale})`,
          }}
        >
          {/* Title that maintains consistent size */}
          <h2 
            className={`slide-fixed-title ${modernTypography.slideTitle}`} 
            style={{ color: modernColors.text }}
          >
            {title}
          </h2>
          
          {/* Content that will scale */}
          <motion.div 
            className="content-container px-60 pt-40 pb-16 h-full w-full"
            variants={scaleUpVariants}
            initial="hidden"
            animate="visible"
          >
            {children}
          </motion.div>
        </div>
      ) : (
        // Mobile: Scrollable container
        <div className="slide-content-mobile bg-white">
          <h2 
            className={`${modernTypography.slideTitle} mb-8 mt-2`} 
            style={{ color: modernColors.text }}
          >
            {title}
          </h2>
          
          <motion.div 
            className="mt-4"
            variants={scaleUpVariants}
            initial="hidden"
            animate="visible"
          >
            {children}
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default AutoScaleSlideLayout;