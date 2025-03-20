import { useEffect } from 'react';

type ScrollLockProps = {
  isActive: boolean;
};

/**
 * ScrollLock component prevents body scrolling when needed
 * Particularly useful for modals and fullscreen overlays
 */
const ScrollLock: React.FC<ScrollLockProps> = ({ isActive }) => {
  useEffect(() => {
    if (!isActive) return;

    // Save the current body overflow style
    const originalStyle = window.getComputedStyle(document.body).overflow;
    // Prevent scrolling on mount
    document.body.style.overflow = 'hidden';
    // Touch devices need additional handling
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
    document.body.style.touchAction = 'none';

    // Re-enable scrolling on unmount
    return () => {
      document.body.style.overflow = originalStyle;
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.touchAction = '';
    };
  }, [isActive]);

  return null; // This component doesn't render anything
};

export default ScrollLock; 