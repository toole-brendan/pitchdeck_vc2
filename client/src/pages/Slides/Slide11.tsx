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
import { DollarSign, TrendingUp, HandCoins } from 'lucide-react';

const Slide11: React.FC = () => {
  const TOTAL_SLIDES = 18;

  return (
    <SlideLayout title="Financial Projections" slideNumber={11} totalSlides={TOTAL_SLIDES}>
      <motion.div
        variants={fadeInUpVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-8"
      >
        <motion.div 
          variants={itemFadeInUpVariant}
          custom={0}
          className="text-center max-w-2xl mx-auto mb-2"
        >
          <h2 className={modernTypography.pageTitle} style={{ color: modernColors.text }}>
            5-Year Financial Overview
          </h2>
          <p className={modernTypography.body}>
            Placeholder text describing our financial projections and revenue model assumptions.
          </p>
        </motion.div>

        <motion.div
          variants={itemFadeInUpVariant}
          custom={1}
          className="mb-8"
        >
          <ModernCard className="p-8">
            <div className="flex items-center gap-4 mb-6">
              <TrendingUp className="h-7 w-7 text-accent" />
              <h3 className={modernTypography.heading} style={{ color: modernColors.text }}>
                Revenue Projections
              </h3>
            </div>
            
            <div className="h-64 bg-slate-50/80 backdrop-blur-sm border border-slate-100  flex items-center justify-center mb-8">
              [Revenue Projections Chart Placeholder]
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-5 text-center">
              {['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'].map((year, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.08 * index, duration: 0.4 }}
                  className="bg-slate-50/80 backdrop-blur-sm p-4  border border-slate-100"
                >
                  <p className={modernTypography.label}>{year}</p>
                  <p className={`${modernTypography.stats} text-accent`}>$XXXK</p>
                </motion.div>
              ))}
            </div>
          </ModernCard>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            variants={itemFadeInUpVariant}
            custom={2}
          >
            <ModernCard className="h-full p-8">
              <div className="flex items-center gap-4 mb-5">
                <DollarSign className="h-7 w-7 text-accent" />
                <h3 className={modernTypography.heading} style={{ color: modernColors.text }}>
                  Cost Structure
                </h3>
              </div>
              <div className="h-44 bg-slate-50/80 backdrop-blur-sm border border-slate-100  flex items-center justify-center mb-6">
                [Cost Breakdown Chart Placeholder]
              </div>
              <ul className={`space-y-3 ${modernTypography.list}`}>
                <li>• Development Costs: XX%</li>
                <li>• Marketing & Sales: XX%</li>
                <li>• Operations: XX%</li>
                <li>• Administration: XX%</li>
              </ul>
            </ModernCard>
          </motion.div>

          <motion.div
            variants={itemFadeInUpVariant}
            custom={3}
          >
            <ModernCard className="h-full p-8">
              <div className="flex items-center gap-4 mb-5">
                <HandCoins className="h-7 w-7 text-accent" />
                <h3 className={modernTypography.heading} style={{ color: modernColors.text }}>
                  Funding Requirements
                </h3>
              </div>
              <p className={`${modernTypography.body} mb-6`}>
                Placeholder text for funding needs, use of funds, and investor returns.
              </p>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-slate-50/80 backdrop-blur-sm  border border-slate-100">
                  <span className={modernTypography.subheading}>Seed Round</span>
                  <span className={`${modernTypography.stats} text-accent`}>$X Million</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-slate-50/80 backdrop-blur-sm  border border-slate-100">
                  <span className={modernTypography.subheading}>Series A</span>
                  <span className={`${modernTypography.stats} text-accent`}>$X Million</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-slate-50/80 backdrop-blur-sm  border border-slate-100">
                  <span className={modernTypography.subheading}>Break-even Point</span>
                  <span className={`${modernTypography.stats} text-accent`}>Q4 20XX</span>
                </div>
              </div>
            </ModernCard>
          </motion.div>
        </div>
      </motion.div>
    </SlideLayout>
  );
};

export default Slide11;