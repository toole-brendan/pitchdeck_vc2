import React, { ReactNode } from 'react';
import { useLocation } from 'wouter';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { modernTypography, modernColors, scaleUpVariants } from './ModernSlideStyles';
import { useMediaQuery } from 'react-responsive';

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
    if (e.key === 'ArrowRight') {
      goToNextSlide();
    } else if (e.key === 'ArrowLeft') {
      goToPrevSlide();
    }
  };

  return (
    <div 
      className="slide-layout w-full h-full bg-white flex flex-col relative"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      {/* Navigation Controls */}
      <div className="nav-controls fixed z-50 top-1/2 -translate-y-1/2 w-full flex justify-between px-4 md:px-8 pointer-events-none">
        <button 
          onClick={goToPrevSlide}
          className="w-10 h-10 md:w-12 md:h-12 bg-black/90 backdrop-blur-sm text-white shadow-lg flex items-center justify-center hover:bg-black transition-all duration-300 pointer-events-auto"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
        </button>
        <button 
          onClick={goToNextSlide}
          className="w-10 h-10 md:w-12 md:h-12 bg-black/90 backdrop-blur-sm text-white shadow-lg flex items-center justify-center hover:bg-black transition-all duration-300 pointer-events-auto"
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
        </button>
      </div>

      {/* Slide Number */}
      <div className={`fixed top-4 right-6 ${modernTypography.small}`} style={{ color: modernColors.textLight }}>
        {slideNumber} / {totalSlides}
      </div>

      {/* Content Container with Fixed Title Height */}
      <div className="flex flex-col h-full w-full">
        {/* Fixed Title Section */}
        <div className="slide-title pt-8 pb-2 md:pt-12 md:pb-4">
          <h2 
            className={`${modernTypography.slideTitle}`} 
            style={{ 
              color: modernColors.text,
              fontSize: "clamp(1.75rem, 2.5vw, 2.5rem)"  // Responsive but with limits
            }}
          >
            {title}
          </h2>
        </div>
        
        {/* Scrollable Content Section */}
        <motion.div 
          className={`slide-content flex-grow w-full max-w-6xl mx-auto ${
            isDesktop ? 'overflow-hidden' : 'overflow-y-auto'
          }`}
          variants={scaleUpVariants}
          initial="hidden"
          animate="visible"
        >
          <div className={`content-wrapper ${isDesktop ? 'h-full flex flex-col justify-center' : ''} pt-4`}>
            {children}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SlideLayout;