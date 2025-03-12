import { useState, useEffect, useRef, RefObject } from 'react';
import { useMediaQuery } from 'react-responsive';

interface AutoScaleOptions {
  titleSelector?: string;
  contentSelector?: string;
  minScale?: number;
  maxScale?: number;
  resetOnResize?: boolean;
}

/**
 * A hook to automatically scale content to fit in the viewport while preserving title size
 * @param options Configuration options
 * @returns Object containing refs and scaling state
 */
export function useAutoScale({
  titleSelector = '.slide-title',
  contentSelector = '.slide-content',
  minScale = 0.5,
  maxScale = 1,
  resetOnResize = true
}: AutoScaleOptions = {}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [hasOverflow, setHasOverflow] = useState(false);
  const isDesktop = useMediaQuery({ minWidth: 768 });

  useEffect(() => {
    if (!isDesktop) {
      // On mobile, we don't want to scale (allow scrolling)
      setScale(1);
      setHasOverflow(false);
      return;
    }
    
    // Function to check for overflow and calculate the appropriate scale
    const checkForOverflow = () => {
      if (!containerRef.current || !contentRef.current) return;
      
      // Reset scale to check true overflow
      if (contentRef.current.style.transform) {
        contentRef.current.style.transform = '';
      }
      
      const container = containerRef.current;
      const content = contentRef.current;
      
      // Get the title element if it exists
      const titleElement = content.querySelector(titleSelector);
      
      // Get the height excluding the title
      const contentElement = content.querySelector(contentSelector) || content;
      const contentBounds = contentElement.getBoundingClientRect();
      const containerBounds = container.getBoundingClientRect();
      
      // Check if content overflows the container
      const overflowsHeight = contentBounds.height > containerBounds.height;
      const overflowsWidth = contentBounds.width > containerBounds.width;
      
      setHasOverflow(overflowsHeight || overflowsWidth);
      
      // Calculate scale if overflow exists
      if (overflowsHeight || overflowsWidth) {
        let newScale = 1;
        
        // Calculate scale based on both dimensions
        const heightScale = containerBounds.height / contentBounds.height;
        const widthScale = containerBounds.width / contentBounds.width;
        
        // Use the smaller scale to ensure content fits both dimensions
        newScale = Math.min(heightScale, widthScale, maxScale);
        
        // Ensure scale is not below minimum
        newScale = Math.max(newScale, minScale);
        
        setScale(newScale);
      } else {
        // No overflow, reset to normal scale
        setScale(1);
      }
    };
    
    // Check for overflow initially
    checkForOverflow();
    
    // Set up resize listener
    if (resetOnResize) {
      const handleResize = () => {
        checkForOverflow();
      };
      
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [isDesktop, titleSelector, contentSelector, minScale, maxScale, resetOnResize]);
  
  return {
    containerRef,
    contentRef,
    scale,
    hasOverflow,
    isDesktop
  };
}