import React from 'react';
import SlideLayout from '@/components/PitchDeck/SlideLayout';
import { motion } from 'framer-motion';
import { 
  ModernCard, 
  ModernIconWrapper, 
  modernTypography, 
  modernColors,
  fadeInUpVariants,
  scaleUpVariants
} from '@/components/PitchDeck/ModernSlideStyles';
import { Lightbulb, Zap, Target } from 'lucide-react';

const Slide3: React.FC = () => {
  const TOTAL_SLIDES = 18;

  return (
    <SlideLayout title="Solution" slideNumber={3} totalSlides={TOTAL_SLIDES}>
      <motion.div
        variants={scaleUpVariants}
        initial="hidden"
        animate="visible"
        className="mb-10 text-center max-w-2xl mx-auto"
      >
        <h2 className={`${modernTypography.heading} mb-4`} style={{ color: modernColors.text }}>
          Our Approach
        </h2>
        <p className={modernTypography.body}>
          Placeholder text describing your overall solution approach.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        <motion.div
          custom={0}
          variants={fadeInUpVariants}
          initial="hidden"
          animate="visible"
        >
          <ModernCard className="h-full p-8 flex flex-col items-center text-center">
            <ModernIconWrapper>
              <Lightbulb className="h-6 w-6" />
            </ModernIconWrapper>
            <h3 className={`${modernTypography.heading} mt-5 mb-3`} style={{ color: modernColors.text }}>
              Key Feature 1
            </h3>
            <p className={modernTypography.body}>
              Placeholder description of a key feature or benefit of your solution.
            </p>
          </ModernCard>
        </motion.div>

        <motion.div
          custom={1}
          variants={fadeInUpVariants}
          initial="hidden"
          animate="visible"
        >
          <ModernCard className="h-full p-8 flex flex-col items-center text-center">
            <ModernIconWrapper>
              <Zap className="h-6 w-6" />
            </ModernIconWrapper>
            <h3 className={`${modernTypography.heading} mt-5 mb-3`} style={{ color: modernColors.text }}>
              Key Feature 2
            </h3>
            <p className={modernTypography.body}>
              Placeholder description of a key feature or benefit of your solution.
            </p>
          </ModernCard>
        </motion.div>

        <motion.div
          custom={2}
          variants={fadeInUpVariants}
          initial="hidden"
          animate="visible"
        >
          <ModernCard className="h-full p-8 flex flex-col items-center text-center">
            <ModernIconWrapper>
              <Target className="h-6 w-6" />
            </ModernIconWrapper>
            <h3 className={`${modernTypography.heading} mt-5 mb-3`} style={{ color: modernColors.text }}>
              Key Feature 3
            </h3>
            <p className={modernTypography.body}>
              Placeholder description of a key feature or benefit of your solution.
            </p>
          </ModernCard>
        </motion.div>
      </div>
    </SlideLayout>
  );
};

export default Slide3;