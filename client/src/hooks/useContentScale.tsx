import { useState, useEffect, useRef } from 'react';
import { useIsMobile } from './use-mobile';

export function useContentScale(dependencies: any[] = []) {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [scale, setScale] = useState(1);
  const [isScaled, setIsScaled] = useState(false);
  const isMobile = useIsMobile();
  
  // Function to calculate and apply proper scaling
  const calculateAndApplyScale = () => {
    if (!contentRef.current) return;
    
    // Skip scaling on mobile devices
    if (isMobile) {
      setScale(1);
      setIsScaled(false);
      return;
    }
    
    // Reset scaling first to get accurate measurements
    contentRef.current.style.transform = 'scale(1)';
    contentRef.current.style.transformOrigin = 'center top';
    
    // Get viewport height (with increased padding for better visibility)
    const viewportHeight = window.innerHeight - 150; // Increased buffer for header/nav/margins
    
    // Get slide content height and width
    const contentHeight = contentRef.current.scrollHeight;
    const contentWidth = contentRef.current.scrollWidth;
    const containerWidth = contentRef.current.parentElement?.clientWidth || window.innerWidth - 80;
    
    // Calculate scale factors for both dimensions
    const scaleY = viewportHeight / contentHeight;
    const scaleX = containerWidth / contentWidth;
    
    // Use the smaller scale to ensure content fits completely, with a minimum to prevent too small text
    // The minimum scale threshold ensures text remains readable
    const MIN_SCALE = 0.60;
    const calculatedScale = Math.min(scaleY, scaleX, 1);
    const newScale = Math.max(calculatedScale, MIN_SCALE);
    
    // Apply scaling even if it's 1 to ensure consistent behavior
    setScale(newScale);
    setIsScaled(newScale < 1);
    
    // Log scale info in development mode for debugging
    if (process.env.NODE_ENV === 'development') {
      console.log({
        contentHeight,
        viewportHeight,
        contentWidth,
        containerWidth,
        scaleY,
        scaleX,
        calculatedScale,
        appliedScale: newScale,
        isMobile
      });
    }
  };
  
  useEffect(() => {
    // Calculate initial scale with a slight delay to ensure accurate DOM measurements
    const initialTimer = setTimeout(() => {
      calculateAndApplyScale();
    }, 100);
    
    // Recalculate on window resize with debounce
    let resizeTimer: number | null = null;
    const handleResize = () => {
      if (resizeTimer) clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        calculateAndApplyScale();
      }, 150);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Add orientation change listener for mobile devices
    window.addEventListener('orientationchange', () => {
      setTimeout(calculateAndApplyScale, 200);
    });
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', calculateAndApplyScale);
      if (initialTimer) clearTimeout(initialTimer);
      if (resizeTimer) clearTimeout(resizeTimer);
    };
  }, [contentRef.current, isMobile, ...dependencies]);
  
  return { contentRef, scale, isScaled };
}
