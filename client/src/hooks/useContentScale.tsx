import { useState, useEffect, useRef } from 'react';

export function useContentScale(dependencies: any[] = []) {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [scale, setScale] = useState(1);
  const [isScaled, setIsScaled] = useState(false);
  
  // Function to check for overflow and adjust scale as needed
  const checkAndAdjustScale = () => {
    // Only apply on desktop viewports (>= 768px)
    const isDesktop = window.innerWidth >= 768;
    if (!isDesktop || !contentRef.current) {
      setScale(1);
      setIsScaled(false);
      return;
    }
    
    const container = contentRef.current;
    
    // Reset scale to check natural size
    container.style.transform = '';
    
    // Calculate visible heights
    const containerRect = container.getBoundingClientRect();
    const containerTop = containerRect.top;
    const containerHeight = container.scrollHeight;
    
    // Calculate available height (viewport height minus the top position of content)
    // This accounts for the title and navigation automatically
    const viewportHeight = window.innerHeight;
    const bottomPadding = 40; // Add some padding at the bottom
    const availableHeight = viewportHeight - containerTop - bottomPadding;
    
    // Check if content overflows available space
    if (containerHeight > availableHeight) {
      // Calculate the scale factor needed (between 0.5 and 1)
      let newScale = Math.max(0.5, availableHeight / containerHeight);
      
      // Round to 2 decimal places for better performance
      newScale = Math.floor(newScale * 100) / 100;
      
      setScale(newScale);
      setIsScaled(true);
    } else {
      // No overflow, reset to normal scale
      setScale(1);
      setIsScaled(false);
    }
  };
  
  // Run the check on mount and when dependencies change
  useEffect(() => {
    // Small delay to ensure components are fully rendered
    const timer = setTimeout(() => {
      checkAndAdjustScale();
    }, 100);
    
    // Add resize listener to recheck on window resize
    window.addEventListener('resize', checkAndAdjustScale);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', checkAndAdjustScale);
      clearTimeout(timer);
    };
  }, [contentRef.current, ...dependencies]);
  
  return { contentRef, scale, isScaled };
}