import React from 'react';
import SlideLayout from '@/components/PitchDeck/SlideLayout';
import { motion } from 'framer-motion';
import { 
  ModernCard, 
  ModernDivider,
  modernTypography,
  modernColors,
  fadeInUpVariants,
  itemFadeInUpVariant
} from '@/components/PitchDeck/ModernSlideStyles';
import { PieChart, BarChart4, TrendingUp } from 'lucide-react';

const Slide4: React.FC = () => {
  const TOTAL_SLIDES = 18;

  return (
    <SlideLayout title="Market Opportunity" slideNumber={4} totalSlides={TOTAL_SLIDES}>
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
              <BarChart4 className="h-7 w-7 text-accent" />
              <h3 className={modernTypography.heading} style={{ color: modernColors.text }}>
                Market Size
              </h3>
            </div>
            <p className={`${modernTypography.body} mb-6`}>
              Placeholder text describing the total addressable market size and growth potential.
            </p>
            <div className="h-24 bg-slate-50/80 rounded-sm border border-slate-100 flex items-center justify-center">
              [Market Size Chart Placeholder]
            </div>
          </ModernCard>
        </motion.div>

        <motion.div
          variants={itemFadeInUpVariant}
          custom={1}
        >
          <ModernCard className="h-full p-8">
            <div className="flex items-center gap-4 mb-5">
              <PieChart className="h-7 w-7 text-accent" />
              <h3 className={modernTypography.heading} style={{ color: modernColors.text }}>
                Target Audience
              </h3>
            </div>
            <ul className={`space-y-3 ${modernTypography.list}`}>
              <li>• Audience Segment 1</li>
              <li>• Audience Segment 2</li>
              <li>• Audience Segment 3</li>
            </ul>
            <ModernDivider className="my-5" />
            <div className="h-28 bg-slate-50/80 rounded-sm border border-slate-100 flex items-center justify-center">
              [Demographics Chart Placeholder]
            </div>
          </ModernCard>
        </motion.div>

        <motion.div
          variants={itemFadeInUpVariant}
          custom={2}
        >
          <ModernCard className="h-full p-8">
            <div className="flex items-center gap-4 mb-5">
              <TrendingUp className="h-7 w-7 text-accent" />
              <h3 className={modernTypography.heading} style={{ color: modernColors.text }}>
                Growth Projections
              </h3>
            </div>
            <p className={`${modernTypography.body} mb-6`}>
              Placeholder text for market growth projections and opportunity timeline.
            </p>
            <div className="h-28 bg-slate-50/80 rounded-sm border border-slate-100 flex items-center justify-center">
              [Growth Chart Placeholder]
            </div>
          </ModernCard>
        </motion.div>
      </motion.div>
    </SlideLayout>
  );
};

export default Slide4;