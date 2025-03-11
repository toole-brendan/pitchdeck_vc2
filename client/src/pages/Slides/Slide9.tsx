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
import { TrendingUp, Briefcase, Users } from 'lucide-react';

const Slide9: React.FC = () => {
  const TOTAL_SLIDES = 18;

  return (
    <SlideLayout title="Traction & Metrics" slideNumber={9} totalSlides={TOTAL_SLIDES}>
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
              <TrendingUp className="h-7 w-7 text-accent" />
              <h3 className={modernTypography.heading} style={{ color: modernColors.text }}>
                Growth Metrics
              </h3>
            </div>
            <p className={`${modernTypography.body} mb-6`}>
              Placeholder text describing our key performance indicators and growth metrics.
            </p>
            <div className="h-44 bg-slate-50/80  border border-slate-100 flex items-center justify-center mb-8 backdrop-blur-sm">
              [Growth Chart Placeholder]
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-50/80 backdrop-blur-sm p-5  border border-slate-100 text-center">
                <p className={`${modernTypography.stats} text-accent mb-1`}>XX%</p>
                <p className={modernTypography.small}>Monthly Growth</p>
              </div>
              <div className="bg-slate-50/80 backdrop-blur-sm p-5  border border-slate-100 text-center">
                <p className={`${modernTypography.stats} text-accent mb-1`}>XXXX</p>
                <p className={modernTypography.small}>Active Users</p>
              </div>
              <div className="bg-slate-50/80 backdrop-blur-sm p-5  border border-slate-100 text-center">
                <p className={`${modernTypography.stats} text-accent mb-1`}>$XXK</p>
                <p className={modernTypography.small}>Monthly Revenue</p>
              </div>
            </div>
          </ModernCard>
        </motion.div>

        <motion.div
          variants={itemFadeInUpVariant}
          custom={1}
        >
          <ModernCard className="h-full p-8">
            <div className="flex items-center gap-4 mb-5">
              <Users className="h-7 w-7 text-accent" />
              <h3 className={modernTypography.heading} style={{ color: modernColors.text }}>
                User Engagement
              </h3>
            </div>
            <div className="h-36 bg-slate-50/80  border border-slate-100 flex items-center justify-center mb-6 backdrop-blur-sm">
              [User Engagement Chart Placeholder]
            </div>
            <ul className={`space-y-3 ${modernTypography.list}`}>
              <li>• XX minutes average session time</li>
              <li>• XX% retention rate after 30 days</li>
              <li>• XX% conversion from free to paid</li>
            </ul>
          </ModernCard>
        </motion.div>

        <motion.div
          variants={itemFadeInUpVariant}
          custom={2}
        >
          <ModernCard className="h-full p-8">
            <div className="flex items-center gap-4 mb-5">
              <Briefcase className="h-7 w-7 text-accent" />
              <h3 className={modernTypography.heading} style={{ color: modernColors.text }}>
                Key Partnerships
              </h3>
            </div>
            <p className={`${modernTypography.body} mb-6`}>
              Placeholder text describing strategic partnerships and collaborations.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {Array.from({ length: 6 }).map((_, index) => (
                <div 
                  key={index} 
                  className="h-14 bg-slate-50/80 backdrop-blur-sm  border border-slate-100 flex items-center justify-center"
                >
                  [Logo]
                </div>
              ))}
            </div>
          </ModernCard>
        </motion.div>
      </motion.div>
    </SlideLayout>
  );
};

export default Slide9;