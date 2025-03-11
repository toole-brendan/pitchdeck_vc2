import React from 'react';
import SlideLayout from '@/components/PitchDeck/SlideLayout';
import { motion } from 'framer-motion';
import { 
  ModernCard, 
  modernTypography, 
  scaleUpVariants, 
  modernColors, 
  itemFadeInUpVariant 
} from '@/components/PitchDeck/ModernSlideStyles';

const Slide1: React.FC = () => {
  const TOTAL_SLIDES = 18;

  return (
    <AutoScaleSlideLayout title="Title Slide" slideNumber={1} totalSlides={TOTAL_SLIDES}>
      <motion.div 
        className="flex flex-col items-center justify-center text-center"
        variants={fadeInUpVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className={`${modernTypography.title} mb-6`}
          style={{ color: modernColors.text }}
          variants={itemFadeInUpVariant}
          custom={0}
        >
          Presentation Title
        </motion.h1>
        
        <motion.p 
          className={`${modernTypography.subtitle} max-w-2xl mx-auto mb-12`}
          variants={itemFadeInUpVariant}
          custom={1}
        >
          Subtitle or brief description
        </motion.p>
        
        <motion.div
          variants={itemFadeInUpVariant}
          custom={2}
          className="mt-6"
        >
          <ModernCard className="px-10 py-8">
            <p className={modernTypography.small}>Presented by: [Presenter Name]</p>
            <p className={modernTypography.small}>Date: [Presentation Date]</p>
          </ModernCard>
        </motion.div>
      </motion.div>
    </AutoScaleSlideLayout>
  );
};

export default Slide1;