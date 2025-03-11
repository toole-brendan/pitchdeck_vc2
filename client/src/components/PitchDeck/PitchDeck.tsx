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
    // Enable swipe on all devices
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
      className="slide-presentation relative bg-white text-gray-900 w-full h-full"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Progress Indicator */}
      <div className="fixed z-50 bottom-8 left-1/2 -translate-x-1/2 flex gap-3 bg-white/90 px-4 py-2 shadow-md border border-gray-100 rounded-full">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => handleProgressDotClick(index)}
            className={`progress-dot w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-accent scale-125' : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slides Container */}
      <div className={`slide-container relative ${
        isDesktop 
          ? 'h-screen overflow-hidden' 
          : 'min-h-screen'
      }`}>
        {/* On desktop, only the active slide is visible */}
        {/* On mobile, all slides are stacked for scrolling */}
        {isDesktop ? (
          <>
            <TitleSlide isActive={currentSlide === 0} index={0} />
            <ProblemSlide isActive={currentSlide === 1} index={1} />
            <SolutionSlide isActive={currentSlide === 2} index={2} />
            <MarketSlide isActive={currentSlide === 3} index={3} />
            <BusinessModelSlide isActive={currentSlide === 4} index={4} />
            <CallToActionSlide isActive={currentSlide === 5} index={5} />
          </>
        ) : (
          <>
            <TitleSlide isActive={true} index={0} />
            <ProblemSlide isActive={true} index={1} />
            <SolutionSlide isActive={true} index={2} />
            <MarketSlide isActive={true} index={3} />
            <BusinessModelSlide isActive={true} index={4} />
            <CallToActionSlide isActive={true} index={5} />
          </>
        )}
      </div>
    </div>
  );
};

export default PitchDeck;
