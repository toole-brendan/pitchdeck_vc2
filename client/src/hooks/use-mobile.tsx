import * as React from "react"

// Breakpoints aligned with Tailwind's default breakpoints
export const BREAKPOINTS = {
  xs: 320,  // Extra small devices
  sm: 640,  // Small devices
  md: 768,  // Medium devices (tablets)
  lg: 1024, // Large devices (desktops)
  xl: 1280, // Extra large devices
  xxl: 1536 // Extra extra large devices
};

/**
 * Hook to detect mobile devices based on screen width
 * @param breakpoint Optional custom breakpoint (defaults to md/768px)
 * @returns Boolean indicating if viewport is below the breakpoint
 */
export function useIsMobile(breakpoint = BREAKPOINTS.md) {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined);

  React.useEffect(() => {
    // Initial check 
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };
    
    // Create a media query list 
    const mql = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    
    // Handler for media query changes
    const onChange = () => {
      checkIsMobile();
    };
    
    // Modern event listener approach
    if (mql.addEventListener) {
      mql.addEventListener("change", onChange);
    } else {
      // Fallback for older browsers
      mql.addListener(onChange);
    }
    
    // Initial check
    checkIsMobile();
    
    // Cleanup
    return () => {
      if (mql.removeEventListener) {
        mql.removeEventListener("change", onChange);
      } else {
        // Fallback for older browsers
        mql.removeListener(onChange);
      }
    };
  }, [breakpoint]);

  // Cast to boolean with !! in case it's undefined during SSR
  return !!isMobile;
}

/**
 * Hook to detect device orientation
 * @returns Object with isPortrait and isLandscape booleans
 */
export function useOrientation() {
  const [orientation, setOrientation] = React.useState({
    isPortrait: true,
    isLandscape: false
  });

  React.useEffect(() => {
    const updateOrientation = () => {
      if (typeof window !== 'undefined') {
        const isPortrait = window.innerHeight > window.innerWidth;
        setOrientation({
          isPortrait,
          isLandscape: !isPortrait
        });
      }
    };

    // Initial check
    updateOrientation();

    // Listen for resize and orientation change events
    window.addEventListener('resize', updateOrientation);
    window.addEventListener('orientationchange', updateOrientation);

    return () => {
      window.removeEventListener('resize', updateOrientation);
      window.removeEventListener('orientationchange', updateOrientation);
    };
  }, []);

  return orientation;
}
