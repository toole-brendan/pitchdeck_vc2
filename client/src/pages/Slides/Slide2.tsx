import React from 'react';
import SlideLayout from '@/components/PitchDeck/SlideLayout';
import { motion } from 'framer-motion';
import { 
  ModernCard, 
  ModernBadge, 
  modernTypography, 
  modernColors,
  fadeInUpVariants,
  itemFadeInUpVariant
} from '@/components/PitchDeck/ModernSlideStyles';

const Slide2: React.FC = () => {
  const TOTAL_SLIDES = 18;

  return (
    <SlideLayout title="Problem Statement" slideNumber={2} totalSlides={TOTAL_SLIDES}>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        variants={fadeInUpVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemFadeInUpVariant} custom={0}>
          <ModernCard className="h-full p-8">
            <ModernBadge>Pain Point 1</ModernBadge>
            <h3 className={`${modernTypography.subheading} mt-5 mb-3`} style={{ color: modernColors.text }}>
              Problem Description
            </h3>
            <p className={modernTypography.body}>
              Placeholder text describing the first major problem that your solution addresses.
            </p>
          </ModernCard>
        </motion.div>

        <motion.div variants={itemFadeInUpVariant} custom={1}>
          <ModernCard className="h-full p-8">
            <ModernBadge>Pain Point 2</ModernBadge>
            <h3 className={`${modernTypography.subheading} mt-5 mb-3`} style={{ color: modernColors.text }}>
              Problem Description
            </h3>
            <p className={modernTypography.body}>
              Placeholder text describing the second major problem that your solution addresses.
            </p>
          </ModernCard>
        </motion.div>

        <motion.div 
          variants={itemFadeInUpVariant} 
          custom={2}
          className="md:col-span-2"
        >
          <div className="bg-slate-50/80 backdrop-blur-sm p-8  border border-slate-100 shadow-sm">
            <h3 className={`${modernTypography.subheading} mb-4`} style={{ color: modernColors.text }}>
              Market Impact
            </h3>
            <p className={modernTypography.body}>
              Placeholder text describing the impact of these problems on the market or target audience.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </SlideLayout>
  );
};

export default Slide2;