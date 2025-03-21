import React from 'react';
import SlideLayout from '@/components/PitchDeck/SlideLayout';
import { 
  ModernCard, 
  modernTypography, 
  modernColors,
  fadeInUpVariants
} from '@/components/PitchDeck/ModernSlideStyles';
import { useIsMobile } from '@/hooks/use-mobile';
import { motion } from 'framer-motion';

const Slide1: React.FC = () => {
  const TOTAL_SLIDES = 18;
  const isMobile = useIsMobile();

  return (
    <SlideLayout title="" slideNumber={1} totalSlides={TOTAL_SLIDES}>
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
          className={`font-['Georgia'] font-extralight tracking-widest border-2 border-gray-800/80 dark:border-gray-100/80 text-gray-800 dark:text-gray-100 m-0 cursor-pointer hover:opacity-90 transition-opacity mb-6 ${
            isMobile ? 'text-3xl px-4 py-2 mx-4 max-w-[90%]' : 'text-5xl px-8 py-4'
          }`}
          style={{ color: modernColors.text }}
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          HandReceipt
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
          <ModernCard className={`px-5 py-2 inline-block ${isMobile ? 'max-w-[90%] mx-auto' : ''}`}>
            <p className="text-base font-extralight tracking-tight text-black text-center">Ajax Group, Inc.</p>
          </ModernCard>
        </motion.div>
      </motion.div>
    </SlideLayout>
  );
};

export default Slide1;
