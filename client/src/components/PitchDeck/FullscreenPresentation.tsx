import React, { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, Minimize2, ChevronLeft, ChevronRight, Home, SkipForward } from 'lucide-react';

interface FullscreenPresentationProps {
  children: React.ReactNode;
  currentSlide: number;
  totalSlides: number;
  onNavigate: (slideNumber: number) => void;
}

const FullscreenPresentation: React.FC<FullscreenPresentationProps> = ({
  children,
  currentSlide,
  totalSlides,
  onNavigate
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [lastMouseMove, setLastMouseMove] = useState(Date.now());
  const [, navigate] = useLocation();

  // Handle entering and exiting fullscreen
  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  }, []);

  // Auto-hide controls after inactivity (just like PowerPoint)
  useEffect(() => {
    const handleMouseMove = () => {
      setLastMouseMove(Date.now());
      setShowControls(true);
    };

    const controlsTimer = setInterval(() => {
      // Hide controls after 3 seconds of inactivity when in fullscreen
      if (isFullscreen && Date.now() - lastMouseMove > 3000) {
        setShowControls(false);
      }
    }, 500);

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      clearInterval(controlsTimer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isFullscreen, lastMouseMove]);

  // Handle keyboard navigation - PowerPoint keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // PowerPoint keyboard shortcuts
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown' || e.key === 'n' || e.key === 'N') {
        e.preventDefault();
        if (currentSlide < totalSlides) {
          onNavigate(currentSlide + 1);
        }
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp' || e.key === 'p' || e.key === 'P' || e.key === 'Backspace') {
        e.preventDefault();
        if (currentSlide > 1) {
          onNavigate(currentSlide - 1);
        }
      } else if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        toggleFullscreen();
      } else if (e.key === 'Escape' && isFullscreen) {
        // Escape will automatically exit fullscreen, just update our state
        setIsFullscreen(false);
      } else if (e.key === 'Home') {
        e.preventDefault();
        onNavigate(1);
      } else if (e.key === 'End') {
        e.preventDefault();
        onNavigate(totalSlides);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    // Listen for fullscreen change events
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    
    document.addEventListener('fullscreenchange', handleFullscreenChange);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, [currentSlide, totalSlides, onNavigate, toggleFullscreen, isFullscreen]);

  // Handle navigation between slides
  const goToNextSlide = () => {
    if (currentSlide < totalSlides) {
      onNavigate(currentSlide + 1);
    }
  };

  const goToPrevSlide = () => {
    if (currentSlide > 1) {
      onNavigate(currentSlide - 1);
    }
  };

  const goToFirstSlide = () => {
    onNavigate(1);
  };

  const goToLastSlide = () => {
    onNavigate(totalSlides);
  };

  return (
    <div 
      className={`presentation-container relative w-full ${
        isFullscreen ? 'fullscreen-mode' : ''
      }`}
      style={{
        backgroundColor: isFullscreen ? 'black' : 'white',
        minHeight: isFullscreen ? '100vh' : 'auto'
      }}
    >
      {/* Fullscreen Background */}
      {isFullscreen && (
        <div className="fixed inset-0 bg-black z-40"></div>
      )}
      
      {/* PowerPoint-like controls */}
      {showControls && (
        <>
          {/* Fullscreen Toggle Button */}
          <button
            onClick={toggleFullscreen}
            className="fixed top-4 left-4 z-50 p-2 bg-black/80 text-white rounded-full hover:bg-black transition-all shadow-md"
            aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
          >
            {isFullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
          </button>

          {/* Slide Navigation Controls - Bottom Center, PowerPoint style */}
          <div className="controls-panel fixed z-50 bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 py-2 px-3 rounded-full">
            {/* First slide button */}
            <button 
              onClick={goToFirstSlide}
              disabled={currentSlide <= 1}
              className={`nav-button ${
                currentSlide <= 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white'
              }`}
              aria-label="First slide"
            >
              <Home size={16} className="text-gray-700" />
            </button>
            
            {/* Previous slide button */}
            <button 
              onClick={goToPrevSlide}
              disabled={currentSlide <= 1}
              className={`nav-button ${
                currentSlide <= 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white'
              }`}
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} className="text-gray-700" />
            </button>
            
            {/* Slide counter */}
            <div className="slide-counter px-4">
              {currentSlide} / {totalSlides}
            </div>
            
            {/* Next slide button */}
            <button 
              onClick={goToNextSlide}
              disabled={currentSlide >= totalSlides}
              className={`nav-button ${
                currentSlide >= totalSlides ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white'
              }`}
              aria-label="Next slide"
            >
              <ChevronRight size={20} className="text-gray-700" />
            </button>
            
            {/* Last slide button */}
            <button 
              onClick={goToLastSlide}
              disabled={currentSlide >= totalSlides}
              className={`nav-button ${
                currentSlide >= totalSlides ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white'
              }`}
              aria-label="Last slide"
            >
              <SkipForward size={16} className="text-gray-700" />
            </button>
          </div>
        </>
      )}

      {/* Slide Content */}
      <div 
        className={`slide-content-wrapper ${
          isFullscreen ? 'h-screen' : 'min-h-screen'
        }`}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full flex items-center justify-center"
            style={{ 
              minHeight: isFullscreen ? '100vh' : 'auto',
              padding: '20px'
            }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FullscreenPresentation;