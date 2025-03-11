import React from 'react';
import SlideLayout from '@/components/PitchDeck/SlideLayout';
import { motion } from 'framer-motion';
import { 
  ModernCard, 
  ModernIconWrapper,
  modernTypography,
  modernColors,
  fadeInVariants,
  fadeInUpVariants,
  itemFadeInUpVariant
} from '@/components/PitchDeck/ModernSlideStyles';
import { Users } from 'lucide-react';

const Slide7: React.FC = () => {
  const TOTAL_SLIDES = 18;

  return (
    <SlideLayout title="Team" slideNumber={7} totalSlides={TOTAL_SLIDES}>
      <motion.div
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
        className="mb-10 text-center max-w-2xl mx-auto"
      >
        <h2 className={`${modernTypography.heading} mb-5`} style={{ color: modernColors.text }}>
          Meet Our Leadership
        </h2>
        <p className={modernTypography.body}>
          Placeholder text describing our experienced team and their qualifications.
        </p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8"
        variants={fadeInUpVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemFadeInUpVariant}
          custom={0}
        >
          <ModernCard className="h-full p-8 flex flex-col items-center text-center">
            <div className="w-24 h-24  bg-slate-50/80 border border-slate-100 mb-6 overflow-hidden backdrop-blur-sm">
              {/* Team member image placeholder */}
              <div className="w-full h-full flex items-center justify-center text-slate-400">
                <Users className="h-12 w-12" />
              </div>
            </div>
            <h3 className={`${modernTypography.subheading} mt-2 mb-1`} style={{ color: modernColors.text }}>
              Name
            </h3>
            <p className={`text-sm tracking-wide text-accent mb-3`}>CEO & Founder</p>
            <p className={modernTypography.body}>
              Brief bio highlighting relevant experience and expertise.
            </p>
          </ModernCard>
        </motion.div>

        <motion.div
          variants={itemFadeInUpVariant}
          custom={1}
        >
          <ModernCard className="h-full p-8 flex flex-col items-center text-center">
            <div className="w-24 h-24  bg-slate-50/80 border border-slate-100 mb-6 overflow-hidden backdrop-blur-sm">
              {/* Team member image placeholder */}
              <div className="w-full h-full flex items-center justify-center text-slate-400">
                <Users className="h-12 w-12" />
              </div>
            </div>
            <h3 className={`${modernTypography.subheading} mt-2 mb-1`} style={{ color: modernColors.text }}>
              Name
            </h3>
            <p className={`text-sm tracking-wide text-accent mb-3`}>CTO</p>
            <p className={modernTypography.body}>
              Brief bio highlighting relevant experience and expertise.
            </p>
          </ModernCard>
        </motion.div>

        <motion.div
          variants={itemFadeInUpVariant}
          custom={2}
        >
          <ModernCard className="h-full p-8 flex flex-col items-center text-center">
            <div className="w-24 h-24  bg-slate-50/80 border border-slate-100 mb-6 overflow-hidden backdrop-blur-sm">
              {/* Team member image placeholder */}
              <div className="w-full h-full flex items-center justify-center text-slate-400">
                <Users className="h-12 w-12" />
              </div>
            </div>
            <h3 className={`${modernTypography.subheading} mt-2 mb-1`} style={{ color: modernColors.text }}>
              Name
            </h3>
            <p className={`text-sm tracking-wide text-accent mb-3`}>CMO</p>
            <p className={modernTypography.body}>
              Brief bio highlighting relevant experience and expertise.
            </p>
          </ModernCard>
        </motion.div>
      </motion.div>
    </SlideLayout>
  );
};

export default Slide7;