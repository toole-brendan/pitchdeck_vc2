import React, { ReactNode, useEffect, useState } from 'react';
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
}

const SlideLayout: React.FC<SlideLayoutProps> = ({ 
  title, 
  subtitle,
  slideNumber, 
  totalSlides, 
  children 
}) => {
  const [, navigate] = useLocation();
  const [isMobile, setIsMobile] = useState(false);
  
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

  const goToNextSlide = () => {
    if (slideNumber < totalSlides) {
      if (slideNumber === 1) {
        // When on slide 1 (/), go to /2
        navigate(`/2`);
      } else {
        // Otherwise go to the next number
        navigate(`/${slideNumber + 1}`);
      }
    } else {
      // If at the last slide, go back to the first slide (root path)
      navigate(`/`);
    }
  };

  const goToPrevSlide = () => {
    if (slideNumber > 1) {
      if (slideNumber === 2) {
        // When on slide 2, go back to slide 1 (/)
        navigate(`/`);
      } else {
        // Otherwise go to the previous number
        navigate(`/${slideNumber - 1}`);
      }
    } else {
      // If at the first slide, loop to the last slide
      navigate(`/${totalSlides}`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      goToNextSlide();
    } else if (e.key === 'ArrowLeft') {
      goToPrevSlide();
    }
  };

  // For slide 1, keep original spacing, for slides 2-18 reduce the top spacing
  const isFirstSlide = slideNumber === 1;
  
  return (
    <div 
      className="slide-layout min-h-screen w-full bg-white flex flex-col items-center justify-start p-4 sm:p-6 md:p-10 relative overflow-x-hidden"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      {/* Navigation Controls - Adjust size and positioning on mobile */}
      <div className="nav-controls fixed z-50 top-1/2 -translate-y-1/2 w-full flex justify-between px-2 sm:px-4 md:px-8">
        <button 
          onClick={goToPrevSlide}
          className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-black/90 backdrop-blur-sm text-white shadow-lg flex items-center justify-center hover:bg-black transition-all duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
        </button>
        <button 
          onClick={goToNextSlide}
          className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-black/90 backdrop-blur-sm text-white shadow-lg flex items-center justify-center hover:bg-black transition-all duration-300"
          aria-label="Next slide"
        >
          <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
        </button>
      </div>

      {/* Slide Number - Adjusted position on mobile */}
      <div className={`absolute top-2 sm:top-3 md:top-4 right-3 sm:right-4 md:right-6 text-xs sm:text-sm ${modernTypography.small}`} style={{ color: modernColors.textLight }}>
        {slideNumber} / {totalSlides}
      </div>

      {/* Full-width container with max-width constraint */}
      <div className={`w-full max-w-6xl mx-auto flex flex-col h-full ${isFirstSlide ? 'pt-2 sm:pt-4' : 'pt-0 sm:pt-2'}`}>
        {/* Title and Subtitle - Positioned top left with responsive text sizes */}
        <div className={`self-start mb-2 sm:mb-3 md:mb-4 ${isFirstSlide ? 'mt-4 sm:mt-6' : 'mt-2 sm:mt-3'}`}>
          {title && (
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extralight tracking-tight leading-tight mb-1" style={{ color: modernColors.text }}>
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-sm sm:text-base font-light text-gray-500 mt-1">
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
            className="w-full"
            style={{
              transform: isMobile ? 'none' : `scale(${scale})`,
              transformOrigin: 'center top',
              transition: 'transform 0.3s ease'
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
