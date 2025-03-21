import React, { ReactNode, useEffect, useState, useCallback } from 'react';
import { useLocation } from 'wouter';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { modernTypography, modernColors, scaleUpVariants } from './ModernSlideStyles';
import { useContentScale } from '../../hooks/useContentScale';

interface SlideLayoutProps {
  title: string;
  subtitle?: string;
  slideNumber: number;
  totalSlides: number;
  children: ReactNode;
  hideNextButton?: boolean;
  hidePrevButton?: boolean;
}

const SlideLayout: React.FC<SlideLayoutProps> = ({ 
  title, 
  subtitle,
  slideNumber, 
  totalSlides, 
  children,
  hideNextButton = false,
  hidePrevButton = false
}) => {
  const [, navigate] = useLocation();
  const [isMobile, setIsMobile] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchStartY, setTouchStartY] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const [touchEndY, setTouchEndY] = useState(0);
  
  // Use our custom hook to manage content scaling only on desktop
  const { contentRef, scale, isScaled } = useContentScale([children, slideNumber]);

  // Check if the device is mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIsMobile();
    
    // Add event listener for resize
    window.addEventListener('resize', checkIsMobile);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  const goToSlide = useCallback((targetSlide: number) => {
    // Ensure the target slide is within bounds
    if (targetSlide < 1) targetSlide = 1;
    if (targetSlide > totalSlides) targetSlide = totalSlides;
    
    if (targetSlide === 1) {
      // For slide 1, navigate to root
      navigate('/');
    } else {
      // For other slides, navigate to /number
      navigate(`/${targetSlide}`);
    }
  }, [navigate, totalSlides]);

  const goToNextSlide = () => {
    goToSlide(slideNumber + 1);
  };

  const goToPrevSlide = () => {
    goToSlide(slideNumber - 1);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight' && !hideNextButton) {
      goToNextSlide();
    } else if (e.key === 'ArrowLeft' && !hidePrevButton) {
      goToPrevSlide();
    }
  };

  // Enhanced touch handling with improved directional detection
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
    setTouchStartY(e.touches[0].clientY);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setTouchEndX(e.changedTouches[0].clientX);
    setTouchEndY(e.changedTouches[0].clientY);
    handleSwipe();
  };

  const handleSwipe = () => {
    // Improved swipe detection that considers horizontal vs vertical swipes
    const swipeThreshold = 50;
    const horizontalDiff = touchEndX - touchStartX;
    const verticalDiff = touchEndY - touchStartY;
    
    // Only trigger horizontal swipe when the horizontal movement is greater than vertical
    // This prevents accidental swipes when scrolling vertically
    if (Math.abs(horizontalDiff) > Math.abs(verticalDiff)) {
      if (horizontalDiff < -swipeThreshold && !hideNextButton) {
        // Swipe left - next slide
        goToNextSlide();
      } else if (horizontalDiff > swipeThreshold && !hidePrevButton) {
        // Swipe right - previous slide
        goToPrevSlide();
      }
    }
  };

  // For slide 1, keep original spacing, for slides 2-18 reduce the top spacing
  const isFirstSlide = slideNumber === 1;
  
  return (
    <div 
      className="slide-layout min-h-screen w-full bg-white flex flex-col items-center justify-start p-3 sm:p-4 md:p-10 relative overflow-hidden"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Navigation Controls - Adjust size and positioning on mobile */}
      <div className="nav-controls fixed z-50 top-1/2 -translate-y-1/2 w-full flex justify-between px-1 sm:px-3 md:px-8">
        {!hidePrevButton && (
          <button 
            onClick={goToPrevSlide}
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-black/90 backdrop-blur-sm text-white shadow-lg flex items-center justify-center hover:bg-black transition-all duration-300"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
          </button>
        )}
        {!hideNextButton && (
          <button 
            onClick={goToNextSlide}
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-black/90 backdrop-blur-sm text-white shadow-lg flex items-center justify-center hover:bg-black transition-all duration-300"
            aria-label="Next slide"
          >
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
          </button>
        )}
      </div>

      {/* Slide Number - Adjusted position on mobile */}
      <div className={`absolute top-2 sm:top-3 md:top-4 right-2 sm:right-4 md:right-6 text-xs sm:text-sm ${modernTypography.small}`} style={{ color: modernColors.textLight }}>
        {slideNumber} / {totalSlides}
      </div>

      {/* Progress Indicator - Dots for touch navigation */}
      <div className="fixed z-50 bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 bg-white/80 px-2 py-1 sm:px-3 sm:py-1.5 shadow-md border border-gray-100 rounded-full">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index + 1)}
            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
              slideNumber === index + 1 ? 'bg-black scale-125' : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Full-width container with max-width constraint */}
      <div className={`w-full max-w-6xl mx-auto flex flex-col h-full ${isFirstSlide ? 'pt-2 sm:pt-4' : 'pt-0 sm:pt-2'}`}>
        {/* Title and Subtitle - Positioned top left with responsive text sizes */}
        <div className={`self-start mb-2 sm:mb-3 md:mb-4 ${isFirstSlide ? 'mt-3 sm:mt-5' : 'mt-2 sm:mt-3'} ${isMobile ? 'px-1' : ''}`}>
          {title && (
            <h2 className="text-xl sm:text-2xl md:text-4xl font-extralight tracking-tight leading-tight mb-1" style={{ color: modernColors.text }}>
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-xs sm:text-sm font-light text-gray-500 mt-1 pr-12">
              {subtitle}
            </p>
          )}
        </div>
        
        {/* Content - Centered and scaled on desktop, normal scroll on mobile */}
        <motion.div 
          className="flex-grow flex items-start md:items-center justify-center w-full"
          variants={scaleUpVariants}
          initial="hidden"
          animate="visible"
        >
          <div 
            ref={contentRef}
            className={`w-full ${isMobile ? 'px-1 pb-12 overflow-y-auto' : ''}`}
            style={{
              transform: isMobile ? 'none' : `scale(${scale})`,
              transformOrigin: 'center top',
              transition: 'transform 0.3s ease',
              maxHeight: isMobile ? 'calc(100vh - 140px)' : 'auto'
            }}
          >
            {children}
          </div>
        </motion.div>
        
        {/* Scaling indicator - for development assistance */}
        {isScaled && !isMobile && process.env.NODE_ENV === 'development' && (
          <div className="fixed bottom-4 left-4 bg-black/70 text-white text-xs px-2 py-1 rounded">
            Scale: {scale.toFixed(2)}
          </div>
        )}
      </div>
    </div>
  );
};

export default SlideLayout;
