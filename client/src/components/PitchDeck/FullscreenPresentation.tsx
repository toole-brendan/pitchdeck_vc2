import React, { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, Minimize2, ChevronLeft, ChevronRight } from 'lucide-react';

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

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        if (currentSlide < totalSlides) {
          onNavigate(currentSlide + 1);
        }
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
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
    document.addEventListener('fullscreenchange', () => {
      setIsFullscreen(!!document.fullscreenElement);
    });

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('fullscreenchange', () => {
        setIsFullscreen(!!document.fullscreenElement);
      });
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

  return (
    <div 
      className={`presentation-container relative w-full ${
        isFullscreen ? 'fullscreen-mode' : ''
      }`}
    >
      {/* Fullscreen Toggle Button */}
      <button
        onClick={toggleFullscreen}
        className="fixed top-4 left-4 z-50 p-2 bg-black/80 text-white rounded-full hover:bg-black transition-all"
        aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
      >
        {isFullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
      </button>

      {/* Slide Content */}
      <div 
        className={`slide-content-wrapper ${
          isFullscreen ? 'h-screen overflow-hidden' : 'min-h-screen'
        }`}
      >
        {children}
      </div>

      {/* Navigation Controls */}
      <div className="nav-controls fixed z-40 bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-black/10 backdrop-blur-sm p-2 rounded-full">
        <button 
          onClick={goToPrevSlide}
          disabled={currentSlide <= 1}
          className={`w-10 h-10 rounded-full flex items-center justify-center ${
            currentSlide <= 1 
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
              : 'bg-black/80 text-white hover:bg-black'
          } transition-all`}
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} />
        </button>
        
        <div className="slide-counter text-sm font-medium">
          {currentSlide} / {totalSlides}
        </div>
        
        <button 
          onClick={goToNextSlide}
          disabled={currentSlide >= totalSlides}
          className={`w-10 h-10 rounded-full flex items-center justify-center ${
            currentSlide >= totalSlides 
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
              : 'bg-black/80 text-white hover:bg-black'
          } transition-all`}
          aria-label="Next slide"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default FullscreenPresentation;