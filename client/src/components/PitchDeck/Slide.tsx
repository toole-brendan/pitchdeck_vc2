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
      className={`slide flex items-center justify-center px-6 md:px-20 ${
        isDesktop ? 'absolute top-0 left-0 w-full h-full' : 'min-h-screen'
      } ${className}`}
      data-index={index}
      initial="hidden"
      animate={isActive ? "visible" : "hidden"}
      variants={isDesktop ? variants.desktop : variants.mobile}
    >
      {children}
    </motion.div>
  );
};

export default Slide;
