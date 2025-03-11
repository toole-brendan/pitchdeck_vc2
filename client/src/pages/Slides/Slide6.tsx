import React from 'react';
import SlideLayout from '@/components/PitchDeck/SlideLayout';
import { motion } from 'framer-motion';
import { 
  ModernCard, 
  modernTypography, 
  modernColors,
  fadeInUpVariants,
  itemFadeInUpVariant
} from '@/components/PitchDeck/ModernSlideStyles';
import { LineChart, DollarSign, CircleDollarSign } from 'lucide-react';

const Slide6: React.FC = () => {
  const TOTAL_SLIDES = 18;

  return (
    <SlideLayout title="Business Model" slideNumber={6} totalSlides={TOTAL_SLIDES}>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        variants={fadeInUpVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemFadeInUpVariant}
          custom={0}
          className="md:col-span-2"
        >
          <ModernCard className="p-8">
            <div className="flex items-center gap-4 mb-5">
              <CircleDollarSign className="h-7 w-7 text-accent" />
              <h3 className={modernTypography.heading} style={{ color: modernColors.text }}>
                Revenue Strategy
              </h3>
            </div>
            <p className={`${modernTypography.body} mb-4`}>
              Placeholder text describing our business model and how we generate revenue.
            </p>
          </ModernCard>
        </motion.div>

        <motion.div
          variants={itemFadeInUpVariant}
          custom={1}
        >
          <ModernCard className="h-full p-8">
            <div className="flex items-center gap-4 mb-5">
              <DollarSign className="h-7 w-7 text-accent" />
              <h3 className={modernTypography.heading} style={{ color: modernColors.text }}>
                Pricing Structure
              </h3>
            </div>
            <ul className={`space-y-3 ${modernTypography.list}`}>
              <li>• Basic Plan: $X/month</li>
              <li>• Premium Plan: $X/month</li>
              <li>• Enterprise Plan: Custom pricing</li>
            </ul>
          </ModernCard>
        </motion.div>

        <motion.div
          variants={itemFadeInUpVariant}
          custom={2}
        >
          <ModernCard className="h-full p-8">
            <div className="flex items-center gap-4 mb-5">
              <LineChart className="h-7 w-7 text-accent" />
              <h3 className={modernTypography.heading} style={{ color: modernColors.text }}>
                Financial Projections
              </h3>
            </div>
            <p className={`${modernTypography.body} mb-6`}>
              Placeholder text for sales growth, customer acquisition costs, and revenue projections.
            </p>
            <div className="h-28 bg-slate-50/80  border border-slate-100 flex items-center justify-center">
              [Financial Chart Placeholder]
            </div>
          </ModernCard>
        </motion.div>
      </motion.div>
    </SlideLayout>
  );
};

export default Slide6;