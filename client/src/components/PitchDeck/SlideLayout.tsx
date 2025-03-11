import React, { ReactNode } from 'react';
import { useLocation, useRoute } from 'wouter';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ModernSectionHeader } from './ModernSlideStyles';

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
      className="slide-layout min-h-screen w-full bg-white flex flex-col items-center justify-center p-6 relative"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      {/* Navigation Controls */}
      <div className="nav-controls fixed z-50 top-1/2 -translate-y-1/2 w-full flex justify-between px-4 md:px-8 pointer-events-none">
        <button 
          onClick={goToPrevSlide}
          className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-800 hover:text-accent transition-colors pointer-events-auto border border-gray-200"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button 
          onClick={goToNextSlide}
          className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-800 hover:text-accent transition-colors pointer-events-auto border border-gray-200"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Progress Indicator */}
      <div className="fixed z-50 bottom-8 left-1/2 -translate-x-1/2 flex gap-3 bg-white/80 px-4 py-2 rounded-full shadow-md border border-gray-100">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => navigate(`/slide/${index + 1}`)}
            className={`progress-dot w-3 h-3 rounded-full transition-all duration-300 ${
              slideNumber === index + 1 ? 'bg-accent scale-125' : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Number */}
      <div className="absolute top-4 right-6 text-gray-400 text-sm">
        {slideNumber} / {totalSlides}
      </div>

      {/* Content Container */}
      <motion.div 
        className="slide-content w-full max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ModernSectionHeader title={title} />
        <div className="mt-8">
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export default SlideLayout;