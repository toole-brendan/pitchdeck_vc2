import React from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import { SlideProps } from './PitchDeck';

interface Props extends SlideProps {
  children: React.ReactNode;
  className?: string;
}

const Slide: React.FC<Props> = ({ isActive, index, children, className = '' }) => {
  const isDesktop = useMediaQuery({ minWidth: 768 });

  const variants = {
    desktop: {
      hidden: { opacity: 0, y: 20, pointerEvents: 'none' as const },
      visible: { 
        opacity: 1, 
        y: 0, 
        pointerEvents: 'auto' as const,
        transition: { duration: 0.4, ease: 'easeOut' }
      }
    },
    mobile: {
      hidden: { opacity: 1, y: 0 },
      visible: { opacity: 1, y: 0 }
    }
  };

  return (
    <motion.div
      className={`slide ${
        isDesktop 
          ? 'fixed top-0 left-0 w-full h-screen overflow-hidden px-6 md:px-20 flex flex-col' 
          : 'relative min-h-screen w-full px-4 py-6 flex flex-col'
      } ${className}`}
      data-index={index}
      initial="hidden"
      animate={isActive ? "visible" : "hidden"}
      variants={isDesktop ? variants.desktop : variants.mobile}
      style={{ 
        visibility: isDesktop && !isActive ? 'hidden' : 'visible',
        display: isDesktop && !isActive ? 'none' : 'flex'
      }}
    >
      {children}
    </motion.div>
  );
};

export default Slide;
