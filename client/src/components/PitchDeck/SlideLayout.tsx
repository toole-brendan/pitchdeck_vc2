import React, { ReactNode } from 'react';
import { useLocation } from 'wouter';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { modernTypography, modernColors, scaleUpVariants } from './ModernSlideStyles';
import { useContentScale } from '../../hooks/useContentScale';

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
  
  // Use our custom hook to manage content scaling
  const { contentRef, scale, isScaled } = useContentScale([children, slideNumber]);

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

  return (
    <div 
      className="slide-layout min-h-screen w-full bg-white flex flex-col items-center justify-center p-6 relative"
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

      {/* Content Container */}
      <motion.div 
        className="slide-content w-full max-w-5xl mx-auto"
        variants={scaleUpVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Title - NOT scaled */}
        <h2 className={`${modernTypography.slideTitle} mb-6`} style={{ color: modernColors.text }}>
          {title}
        </h2>
        
        {/* Content - Will be scaled if needed */}
        <div 
          ref={contentRef}
          className="mt-10 origin-top transition-transform duration-300"
          style={{ 
            transform: `scale(${scale})`,
            transformOrigin: 'top center',
            height: isScaled ? 'auto' : '100%'
          }}
        >
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export default SlideLayout;