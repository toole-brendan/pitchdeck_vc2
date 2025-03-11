import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'wouter';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useMediaQuery } from 'react-responsive';
import { 
  ModernCard, 
  modernTypography, 
  scaleUpVariants,
  fadeInUpVariants,
  modernColors, 
  itemFadeInUpVariant 
} from '@/components/PitchDeck/ModernSlideStyles';

// Implementing the auto-scaling slide layout directly in this component
const Slide1: React.FC = () => {
  const TOTAL_SLIDES = 18;
  const [, navigate] = useLocation();
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const isDesktop = useMediaQuery({ minWidth: 768 });
  const slideNumber = 1;
  
  const goToNextSlide = () => {
    if (slideNumber < TOTAL_SLIDES) {
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
        {slideNumber} / {TOTAL_SLIDES}
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
            Title Slide
          </h2>
          
          {/* Content that will scale */}
          <div className="content-container px-60 pt-40 pb-16 h-full w-full">
            <motion.div 
              className="flex flex-col items-center justify-center text-center"
              variants={fadeInUpVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1 
                className={`${modernTypography.title} mb-6`}
                style={{ color: modernColors.text }}
                variants={itemFadeInUpVariant}
                custom={0}
              >
                Presentation Title
              </motion.h1>
              
              <motion.p 
                className={`${modernTypography.subtitle} max-w-2xl mx-auto mb-12`}
                variants={itemFadeInUpVariant}
                custom={1}
              >
                Subtitle or brief description
              </motion.p>
              
              <motion.div
                variants={itemFadeInUpVariant}
                custom={2}
                className="mt-6"
              >
                <ModernCard className="px-10 py-8">
                  <p className={modernTypography.small}>Presented by: [Presenter Name]</p>
                  <p className={modernTypography.small}>Date: [Presentation Date]</p>
                </ModernCard>
              </motion.div>
            </motion.div>
          </div>
        </div>
      ) : (
        // Mobile: Scrollable container
        <div className="slide-content-mobile bg-white">
          <h2 
            className={`${modernTypography.slideTitle} mb-8 mt-2`} 
            style={{ color: modernColors.text }}
          >
            Title Slide
          </h2>
          
          <motion.div 
            className="flex flex-col items-center justify-center text-center mt-4"
            variants={fadeInUpVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              className={`${modernTypography.title} mb-6`}
              style={{ color: modernColors.text }}
              variants={itemFadeInUpVariant}
              custom={0}
            >
              Presentation Title
            </motion.h1>
            
            <motion.p 
              className={`${modernTypography.subtitle} max-w-2xl mx-auto mb-12`}
              variants={itemFadeInUpVariant}
              custom={1}
            >
              Subtitle or brief description
            </motion.p>
            
            <motion.div
              variants={itemFadeInUpVariant}
              custom={2}
              className="mt-6"
            >
              <ModernCard className="px-10 py-8">
                <p className={modernTypography.small}>Presented by: [Presenter Name]</p>
                <p className={modernTypography.small}>Date: [Presentation Date]</p>
              </ModernCard>
            </motion.div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Slide1;