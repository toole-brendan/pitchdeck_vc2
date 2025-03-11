import React from 'react';
import SlideLayout from '@/components/PitchDeck/SlideLayout';
import { motion } from 'framer-motion';
import { ModernCard, modernTypography, scaleUpVariants, modernColors } from '@/components/PitchDeck/ModernSlideStyles';

const Slide1: React.FC = () => {
  const TOTAL_SLIDES = 18;

  return (
    <SlideLayout title="Title Slide" slideNumber={1} totalSlides={TOTAL_SLIDES}>
      <div className="flex flex-col items-center justify-center text-center">
        <motion.h1 
          className={`${modernTypography.title} mb-6`}
          style={{ color: modernColors.text }}
          variants={scaleUpVariants}
          custom={0}
          initial="hidden"
          animate="visible"
        >
          Presentation Title
        </motion.h1>
        
        <motion.p 
          className={`${modernTypography.subtitle} max-w-2xl mx-auto mb-12`}
          variants={scaleUpVariants}
          custom={1}
          initial="hidden"
          animate="visible"
        >
          Subtitle or brief description
        </motion.p>
        
        <motion.div
          variants={scaleUpVariants}
          custom={2}
          initial="hidden"
          animate="visible"
          className="mt-6"
        >
          <ModernCard className="px-10 py-8">
            <p className={modernTypography.small}>Presented by: [Presenter Name]</p>
            <p className={modernTypography.small}>Date: [Presentation Date]</p>
          </ModernCard>
        </motion.div>
      </div>
    </SlideLayout>
  );
};

export default Slide1;