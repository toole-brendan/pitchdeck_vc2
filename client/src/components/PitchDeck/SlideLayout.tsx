import React, { ReactNode, useEffect } from 'react';
import { useLocation } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { modernTypography, modernColors, scaleUpVariants } from './ModernSlideStyles';
import { useMediaQuery } from 'react-responsive';
import FullscreenPresentation from './FullscreenPresentation';

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
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  const goToSlide = (slideNum: number) => {
    if (slideNum >= 1 && slideNum <= totalSlides) {
      navigate(`/slide/${slideNum}`);
    } else if (slideNum < 1) {
      navigate('/');
    } else if (slideNum > totalSlides) {
      navigate('/');
    }
  };

  const goToNextSlide = () => {
    goToSlide(slideNumber + 1);
  };

  const goToPrevSlide = () => {
    goToSlide(slideNumber - 1);
  };

  // Add keyboard event listener at the document level for better PowerPoint-like behavior
  useEffect(() => {
    const handleKeyboardNavigation = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        goToNextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        goToPrevSlide();
      } else if (e.key === 'Home') {
        e.preventDefault();
        goToSlide(1);
      } else if (e.key === 'End') {
        e.preventDefault();
        goToSlide(totalSlides);
      }
    };

    document.addEventListener('keydown', handleKeyboardNavigation);
    return () => {
      document.removeEventListener('keydown', handleKeyboardNavigation);
    };
  }, [slideNumber, totalSlides]);

  // For desktop view, use the PowerPoint-like presentation mode
  if (isDesktop) {
    return (
      <FullscreenPresentation 
        currentSlide={slideNumber} 
        totalSlides={totalSlides}
        onNavigate={goToSlide}
      >
        <div className="slide-wrapper w-full h-full flex items-center justify-center bg-white">
          <div className="slide-aspect-container w-full max-w-6xl mx-auto" style={{ aspectRatio: '16/9' }}>
            <div className="slide-content h-full w-full flex flex-col items-center justify-center p-8">
              <motion.div 
                className="w-full max-w-5xl mx-auto"
                variants={scaleUpVariants}
                initial="hidden"
                animate="visible"
              >
                <h2 className={`${modernTypography.slideTitle} mb-6`} style={{ color: modernColors.text }}>
                  {title}
                </h2>
                <div className="mt-8">
                  {children}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </FullscreenPresentation>
    );
  }

  // Mobile view remains similar to the original
  return (
    <div 
      className="slide-layout min-h-screen w-full bg-white flex flex-col items-center justify-center p-6 relative"
      tabIndex={0}
    >
      {/* Navigation Controls */}
      <div className="nav-controls fixed z-50 top-1/2 -translate-y-1/2 w-full flex justify-between px-4">
        <button 
          onClick={goToPrevSlide}
          className="w-10 h-10 bg-black/90 backdrop-blur-sm text-white shadow-lg flex items-center justify-center hover:bg-black transition-all duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button 
          onClick={goToNextSlide}
          className="w-10 h-10 bg-black/90 backdrop-blur-sm text-white shadow-lg flex items-center justify-center hover:bg-black transition-all duration-300"
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5" />
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
        <h2 className={`${modernTypography.slideTitle} mb-6`} style={{ color: modernColors.text }}>
          {title}
        </h2>
        <div className="mt-10">
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export default SlideLayout;