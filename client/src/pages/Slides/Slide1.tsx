import React from 'react';
import SlideLayout from '@/components/PitchDeck/SlideLayout';
import { 
  modernTypography, 
  modernColors,
  fadeInUpVariants
} from '@/components/PitchDeck/ModernSlideStyles';
import { useIsMobile } from '@/hooks/use-mobile';
import { motion } from 'framer-motion';

const Slide1: React.FC = () => {
  const TOTAL_SLIDES = 18;
  const isMobile = useIsMobile();

  const handleLogoClick = () => {
    // Navigate to the main HandReceipt website
    window.location.href = 'https://handreceipt.com';
  };

  return (
    <SlideLayout 
      title="" 
      slideNumber={1} 
      totalSlides={TOTAL_SLIDES}
      hidePrevButton={true}
    >
      <motion.div 
        className="flex flex-col items-center justify-center text-center"
        style={{ 
          minHeight: isMobile ? 'calc(100vh - 140px)' : 'calc(100vh - 100px)',
          paddingBottom: isMobile ? '60px' : '0'
        }}
        variants={fadeInUpVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="text-center mb-6"
          variants={fadeInUpVariants}
        >
          <motion.h1
            className={`inline-block font-['Georgia'] font-light tracking-wide border-2 border-black m-0 cursor-pointer hover:opacity-90 transition-opacity ${
              isMobile ? 'text-2xl px-2 py-1' : 'text-[3rem] px-4 py-2'
            }`}
            style={{ 
              color: modernColors.text,
              letterSpacing: '0.05em',
              fontWeight: 100,
              padding: isMobile ? '0.25em 0.5em' : '0.25em 0.5em'
            }}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={handleLogoClick}
          >
            HandReceipt
          </motion.h1>
        </motion.div>
        
        <motion.p 
          className={`${modernTypography.subtitle} max-w-2xl mx-auto mb-12 ${isMobile ? 'px-4' : ''}`}
          variants={fadeInUpVariants}
        >
          Blockchain-powered inventory management
        </motion.p>
        
        <motion.div 
          className="mt-6 flex justify-center"
          variants={fadeInUpVariants}
        >
          <p className={`font-light text-gray-500 italic text-center ${isMobile ? 'text-xs max-w-[90%] mx-auto' : 'text-base sm:text-lg'}`}>
            Ajax Group, Inc.
          </p>
        </motion.div>
      </motion.div>
    </SlideLayout>
  );
};

export default Slide1;
