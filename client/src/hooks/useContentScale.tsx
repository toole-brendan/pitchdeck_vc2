import { useState, useEffect, useRef } from 'react';

export function useContentScale(dependencies: any[] = []) {
  const contentRef = useRef<HTMLDivElement | null>(null);
  // Always return scale of 1 to disable auto-scaling
  const [scale] = useState(1);
  const [isScaled] = useState(false);
  
  // This hook now maintains compatibility with existing code
  // but no longer performs any scaling operations
  
  // Keep the useEffect to maintain compatibility with existing code
  useEffect(() => {
    // No-op - we're intentionally disabling scaling
    return () => {
      // Empty cleanup
    };
  }, [contentRef.current, ...dependencies]);
  
  return { contentRef, scale, isScaled };
}
