import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

interface AutoScaleOptions {
  titleSelector?: string;
  contentSelector?: string;
  minScale?: number;
  maxScale?: number;
  resetOnResize?: boolean;
  debug?: boolean;
}

/**
 * A hook to automatically scale content to fit in the viewport while preserving title size
 * @param options Configuration options
 * @returns Object containing refs and scaling state
 */
export function useAutoScale({
  titleSelector = '.slide-title',
  contentSelector = '.slide-content-body',
  minScale = 0.5,
  maxScale = 1,
  resetOnResize = true,
  debug = false
}: AutoScaleOptions = {}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [hasOverflow, setHasOverflow] = useState(false);
  const isDesktop = useMediaQuery({ minWidth: 768 });
  
  // Use a more efficient check for resizing
  const resizeObserverRef = useRef<ResizeObserver | null>(null);

  // Use layout effect to ensure measurements are done before browser paints
  useLayoutEffect(() => {
    if (!isDesktop) {
      // On mobile, we don't want to scale (allow scrolling)
      setScale(1);
      setHasOverflow(false);
      return;
    }

    // Function to check for overflow and calculate the appropriate scale
    const checkForOverflow = () => {
      if (!containerRef.current || !contentRef.current) return;
      
      // Temporarily reset scale to check true overflow
      contentRef.current.style.transform = 'scale(1)';
      
      // Force a reflow to ensure the browser applies the scale(1)
      void contentRef.current.offsetHeight;
      
      const container = containerRef.current;
      const content = contentRef.current;

      // Get the container and content dimensions
      const containerHeight = container.clientHeight || window.innerHeight;
      const containerWidth = container.clientWidth || window.innerWidth;
      const contentHeight = content.scrollHeight;
      const contentWidth = content.scrollWidth;
      
      // Add a generous padding buffer to ensure content isn't cut off
      const paddingBuffer = 150; // Increase buffer to ensure nothing is cut off
      
      // Check if content overflows the container
      const overflowsHeight = contentHeight > (containerHeight - paddingBuffer);
      const overflowsWidth = contentWidth > (containerWidth - 40);
      
      // Always consider height overflow to ensure scaling
      // Even if technically not overflowing, scale to ensure visibility
      const hasOverflowNow = true; // Force scaling to ensure fit
      setHasOverflow(hasOverflowNow);
      
      if (debug) {
        console.log('Container dimensions:', containerWidth, 'x', containerHeight);
        console.log('Content dimensions:', contentWidth, 'x', contentHeight);
        console.log('Overflow detected:', hasOverflowNow, 'height:', overflowsHeight, 'width:', overflowsWidth);
      }
      
      // Calculate scale if overflow exists
      if (hasOverflowNow) {
        // Calculate scale based on both dimensions
        const heightScale = (containerHeight - paddingBuffer) / contentHeight;
        const widthScale = (containerWidth - 40) / contentWidth;
        
        // Use the smaller scale to ensure content fits both dimensions
        let newScale = Math.min(heightScale, widthScale, maxScale);
        
        // Ensure scale is not below minimum
        newScale = Math.max(newScale, minScale);
        
        if (debug) {
          console.log('Calculated scale:', newScale);
          console.log('Height scale:', heightScale);
          console.log('Width scale:', widthScale);
        }
        
        // Apply a more aggressive buffer to ensure fit
        newScale = newScale * 0.85; // More aggressive scaling
        
        setScale(newScale);
      } else {
        // Even without overflow, apply slight scaling to ensure fit
        setScale(0.95);
      }
    };
    
    // Check for overflow with a slight delay to ensure content is fully rendered
    const initialCheckTimer = setTimeout(() => {
      checkForOverflow();
    }, 100);

    // Set up a second check after animations might have completed
    const secondCheckTimer = setTimeout(() => {
      checkForOverflow();
    }, 500);
    
    // Set up resize observer for more accurate resize detection
    if (resetOnResize && containerRef.current) {
      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect();
      }
      
      resizeObserverRef.current = new ResizeObserver(() => {
        checkForOverflow();
      });
      
      resizeObserverRef.current.observe(containerRef.current);
    }
    
    // Cleanup
    return () => {
      clearTimeout(initialCheckTimer);
      clearTimeout(secondCheckTimer);
      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect();
      }
    };
  }, [isDesktop, titleSelector, contentSelector, minScale, maxScale, resetOnResize, debug]);
  
  // Additional useEffect to handle window resize events
  useEffect(() => {
    if (!isDesktop || !resetOnResize) return;
    
    const handleResize = () => {
      if (contentRef.current) {
        // Temporarily reset scale to properly measure overflow
        contentRef.current.style.transform = 'scale(1)';
        
        // Wait a bit to let the browser recalculate sizes
        setTimeout(() => {
          if (!containerRef.current || !contentRef.current) return;
          
          const container = containerRef.current;
          const content = contentRef.current;
          
          const containerHeight = container.clientHeight || window.innerHeight;
          const containerWidth = container.clientWidth || window.innerWidth;
          const contentHeight = content.scrollHeight;
          const contentWidth = content.scrollWidth;
          
          const hasOverflowNow = contentHeight > containerHeight || contentWidth > containerWidth;
          setHasOverflow(hasOverflowNow);
          
          if (hasOverflowNow) {
            const heightScale = containerHeight / contentHeight;
            const widthScale = containerWidth / contentWidth;
            const newScale = Math.min(heightScale, widthScale, maxScale) * 0.95;
            setScale(Math.max(newScale, minScale));
          } else {
            setScale(1);
          }
        }, 100);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isDesktop, minScale, maxScale, resetOnResize]);
  
  return {
    containerRef,
    contentRef,
    scale,
    hasOverflow,
    isDesktop
  };
}