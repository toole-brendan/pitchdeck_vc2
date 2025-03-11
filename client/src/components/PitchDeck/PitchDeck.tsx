import { useState, useEffect, useCallback } from 'react';
import { useMediaQuery } from 'react-responsive';
import { motion } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import TitleSlide from './slides/TitleSlide';
import ProblemSlide from './slides/ProblemSlide';
import SolutionSlide from './slides/SolutionSlide';
import MarketSlide from './slides/MarketSlide';
import BusinessModelSlide from './slides/BusinessModelSlide';
import CallToActionSlide from './slides/CallToActionSlide';

// Define slide interface for type safety
export interface SlideProps {
  isActive: boolean;
  index: number;
}

const PitchDeck = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const isDesktop = useMediaQuery({ minWidth: 768 });
  
  const totalSlides = 6;

  // Function to handle slide navigation
  const goToSlide = useCallback((index: number) => {
    // Ensure index is within bounds
    if (index < 0) index = 0;
    if (index >= totalSlides) index = totalSlides - 1;
    
    setCurrentSlide(index);
  }, [totalSlides]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isDesktop) {
        if (e.key === 'ArrowRight' || e.key === ' ') {
          e.preventDefault();
          goToSlide(currentSlide + 1);
        } else if (e.key === 'ArrowLeft') {
          e.preventDefault();
          goToSlide(currentSlide - 1);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, goToSlide, isDesktop]);

  // Touch swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setTouchEndX(e.changedTouches[0].clientX);
    handleSwipe();
  };

  const handleSwipe = () => {
    if (!isDesktop) return; // Only enable swipe on desktop
    
    const swipeThreshold = 50;
    if (touchEndX < touchStartX - swipeThreshold) {
      // Swipe left - next slide
      goToSlide(currentSlide + 1);
    } else if (touchEndX > touchStartX + swipeThreshold) {
      // Swipe right - previous slide
      goToSlide(currentSlide - 1);
    }
  };

  // Progress dots click handler
  const handleProgressDotClick = (index: number) => {
    goToSlide(index);
  };

  return (
    <div 
      className="slide-presentation relative bg-white text-gray-900"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Desktop Navigation Controls */}
      {isDesktop && (
        <div className="desktop-nav fixed z-10 top-1/2 -translate-y-1/2 left-8 flex flex-col gap-4">
          <button 
            onClick={() => goToSlide(currentSlide - 1)}
            className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-400 hover:text-accent transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </button>
          <button 
            onClick={() => goToSlide(currentSlide + 1)}
            className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-400 hover:text-accent transition-colors"
            aria-label="Next slide"
          >
            <ChevronRightIcon className="h-6 w-6" />
          </button>
        </div>
      )}

      {/* Progress Indicator */}
      <div className="fixed z-10 bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => handleProgressDotClick(index)}
            className={`progress-dot w-2 h-2 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-accent scale-125' : 'bg-gray-200'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slides Container */}
      <div className={`slide-container ${isDesktop ? 'h-screen overflow-hidden' : ''}`}>
        <TitleSlide isActive={isDesktop ? currentSlide === 0 : true} index={0} />
        <ProblemSlide isActive={isDesktop ? currentSlide === 1 : true} index={1} />
        <SolutionSlide isActive={isDesktop ? currentSlide === 2 : true} index={2} />
        <MarketSlide isActive={isDesktop ? currentSlide === 3 : true} index={3} />
        <BusinessModelSlide isActive={isDesktop ? currentSlide === 4 : true} index={4} />
        <CallToActionSlide isActive={isDesktop ? currentSlide === 5 : true} index={5} />
      </div>
    </div>
  );
};

export default PitchDeck;
