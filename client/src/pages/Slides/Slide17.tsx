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
import { HandCoins, TrendingUp, DollarSign } from 'lucide-react';

const Slide17: React.FC = () => {
  const TOTAL_SLIDES = 18;

  return (
    <SlideLayout title="Investment Opportunity" slideNumber={17} totalSlides={TOTAL_SLIDES}>
      <motion.div
        variants={fadeInUpVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-8"
      >
        <motion.div
          variants={itemFadeInUpVariant}
          custom={0}
          className="mb-2 text-center max-w-2xl mx-auto"
        >
          <h2 className={modernTypography.pageTitle} style={{ color: modernColors.text }}>
            Funding Request & Use of Funds
          </h2>
          <p className={modernTypography.body}>
            Placeholder text explaining our current fundraising round and how the investment will be utilized.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-4">
          <motion.div
            variants={itemFadeInUpVariant}
            custom={1}
          >
            <ModernCard className="h-full p-8">
              <div className="flex items-center gap-4 mb-6">
                <HandCoins className="h-7 w-7 text-accent" />
                <h3 className={modernTypography.heading} style={{ color: modernColors.text }}>
                  Investment Details
                </h3>
              </div>
              
              <div className="space-y-5">
                <div className="flex justify-between items-center p-4 bg-slate-50/80 backdrop-blur-sm  border border-slate-100">
                  <span className={modernTypography.label}>Round Type</span>
                  <span className={`${modernTypography.subheading} text-accent`}>Series A</span>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-slate-50/80 backdrop-blur-sm  border border-slate-100">
                  <span className={modernTypography.label}>Raising</span>
                  <span className={`${modernTypography.subheading} text-accent`}>$X Million</span>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-slate-50/80 backdrop-blur-sm  border border-slate-100">
                  <span className={modernTypography.label}>Pre-money Valuation</span>
                  <span className={`${modernTypography.subheading} text-accent`}>$X Million</span>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-slate-50/80 backdrop-blur-sm  border border-slate-100">
                  <span className={modernTypography.label}>Equity Offered</span>
                  <span className={`${modernTypography.subheading} text-accent`}>XX%</span>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-slate-50/80 backdrop-blur-sm  border border-slate-100">
                  <span className={modernTypography.label}>Minimum Investment</span>
                  <span className={`${modernTypography.subheading} text-accent`}>$XXX,XXX</span>
                </div>
              </div>
            </ModernCard>
          </motion.div>

          <motion.div
            variants={itemFadeInUpVariant}
            custom={2}
          >
            <ModernCard className="h-full p-8">
              <div className="flex items-center gap-4 mb-6">
                <DollarSign className="h-7 w-7 text-accent" />
                <h3 className={modernTypography.heading} style={{ color: modernColors.text }}>
                  Use of Funds
                </h3>
              </div>
              
              <div className="h-48 bg-slate-50/80 backdrop-blur-sm  border border-slate-100 flex items-center justify-center mb-8">
                <span className={modernTypography.label}>
                  [Allocation Chart Placeholder]
                </span>
              </div>
              
              <ul className={`space-y-4 ${modernTypography.body}`}>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-500/80 backdrop-blur-sm mt-0.5 flex-shrink-0 shadow-sm"></div>
                  <span>Product Development (XX%): Placeholder text describing allocation.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-500/80 backdrop-blur-sm mt-0.5 flex-shrink-0 shadow-sm"></div>
                  <span>Sales & Marketing (XX%): Placeholder text describing allocation.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-purple-500/80 backdrop-blur-sm mt-0.5 flex-shrink-0 shadow-sm"></div>
                  <span>Operations (XX%): Placeholder text describing allocation.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-yellow-500/80 backdrop-blur-sm mt-0.5 flex-shrink-0 shadow-sm"></div>
                  <span>Team Expansion (XX%): Placeholder text describing allocation.</span>
                </li>
              </ul>
            </ModernCard>
          </motion.div>
        </div>

        <motion.div
          variants={itemFadeInUpVariant}
          custom={3}
        >
          <ModernCard className="p-8">
            <div className="flex items-center gap-4 mb-6">
              <TrendingUp className="h-7 w-7 text-accent" />
              <h3 className={modernTypography.heading} style={{ color: modernColors.text }}>
                Investor Returns
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className={`${modernTypography.subheading} mb-4`}>Exit Strategy</h4>
                <p className={`${modernTypography.body} mb-6`}>
                  Placeholder text describing potential exit strategies and timeline.
                </p>
                
                <ul className={`space-y-3 ${modernTypography.body}`}>
                  <li className="flex items-center gap-3">
                    <span className="text-accent">•</span>
                    <span>Strategic acquisition within 4-5 years</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-accent">•</span>
                    <span>Potential IPO in 5-7 years</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-accent">•</span>
                    <span>Secondary market opportunities</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className={`${modernTypography.subheading} mb-4`}>Projected Returns</h4>
                <div className="h-40 bg-slate-50/80 backdrop-blur-sm  border border-slate-100 flex items-center justify-center mb-4">
                  <span className={modernTypography.label}>
                    [ROI Projection Chart Placeholder]
                  </span>
                </div>
                <p className={modernTypography.small}>
                  Projected XX-XX% IRR based on conservative growth estimates.
                </p>
              </div>
            </div>
          </ModernCard>
        </motion.div>
      </motion.div>
    </SlideLayout>
  );
};

export default Slide17;