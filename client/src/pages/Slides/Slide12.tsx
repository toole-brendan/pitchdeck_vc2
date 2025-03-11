import React from 'react';
import SlideLayout from '@/components/PitchDeck/SlideLayout';
import { motion } from 'framer-motion';
import { 
  ModernCard, 
  ModernIconWrapper, 
  modernTypography, 
  modernColors,
  fadeInUpVariants,
  itemFadeInUpVariant
} from '@/components/PitchDeck/ModernSlideStyles';
import { Target, Lightbulb, Monitor } from 'lucide-react';

const Slide12: React.FC = () => {
  const TOTAL_SLIDES = 18;

  return (
    <SlideLayout title="Marketing Strategy" slideNumber={12} totalSlides={TOTAL_SLIDES}>
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
            Go-to-Market Strategy
          </h2>
          <p className={modernTypography.body}>
            Placeholder text outlining our comprehensive marketing and customer acquisition approach.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
          <motion.div
            variants={itemFadeInUpVariant}
            custom={1}
          >
            <ModernCard className="h-full p-8 flex flex-col items-center text-center">
              <ModernIconWrapper size="large">
                <Target className="h-7 w-7" />
              </ModernIconWrapper>
              <h3 className={`${modernTypography.heading} mt-5 mb-3`} style={{ color: modernColors.text }}>
                Target Audience
              </h3>
              <p className={modernTypography.body}>
                Placeholder description of our primary and secondary target audiences.
              </p>
            </ModernCard>
          </motion.div>

          <motion.div
            variants={itemFadeInUpVariant}
            custom={2}
          >
            <ModernCard className="h-full p-8 flex flex-col items-center text-center">
              <ModernIconWrapper size="large">
                <Lightbulb className="h-7 w-7" />
              </ModernIconWrapper>
              <h3 className={`${modernTypography.heading} mt-5 mb-3`} style={{ color: modernColors.text }}>
                Positioning
              </h3>
              <p className={modernTypography.body}>
                Placeholder description of our brand positioning and value proposition.
              </p>
            </ModernCard>
          </motion.div>

          <motion.div
            variants={itemFadeInUpVariant}
            custom={3}
          >
            <ModernCard className="h-full p-8 flex flex-col items-center text-center">
              <ModernIconWrapper size="large">
                <Monitor className="h-7 w-7" />
              </ModernIconWrapper>
              <h3 className={`${modernTypography.heading} mt-5 mb-3`} style={{ color: modernColors.text }}>
                Channels
              </h3>
              <p className={modernTypography.body}>
                Placeholder description of our marketing and distribution channels.
              </p>
            </ModernCard>
          </motion.div>
        </div>

        <motion.div
          variants={itemFadeInUpVariant}
          custom={4}
        >
          <ModernCard className="p-8">
            <h3 className={modernTypography.heading} style={{ color: modernColors.text, marginBottom: '1rem' }}>
              Customer Acquisition Strategy
            </h3>
            
            <div className="space-y-5">
              <div className="flex items-start gap-4 p-4 bg-slate-50/80 backdrop-blur-sm rounded-sm border border-slate-100">
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                  <span className="text-accent font-semibold">1</span>
                </div>
                <div>
                  <h4 className={modernTypography.subheading} style={{ marginBottom: '0.5rem' }}>
                    Awareness
                  </h4>
                  <p className={modernTypography.body}>
                    Content marketing, SEO, social media presence, and industry partnerships.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-slate-50/80 backdrop-blur-sm rounded-sm border border-slate-100">
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                  <span className="text-accent font-semibold">2</span>
                </div>
                <div>
                  <h4 className={modernTypography.subheading} style={{ marginBottom: '0.5rem' }}>
                    Consideration
                  </h4>
                  <p className={modernTypography.body}>
                    Case studies, webinars, free trials, and product demonstrations.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-slate-50/80 backdrop-blur-sm rounded-sm border border-slate-100">
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                  <span className="text-accent font-semibold">3</span>
                </div>
                <div>
                  <h4 className={modernTypography.subheading} style={{ marginBottom: '0.5rem' }}>
                    Conversion
                  </h4>
                  <p className={modernTypography.body}>
                    Targeted campaigns, personalized outreach, and special offers.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-slate-50/80 backdrop-blur-sm rounded-sm border border-slate-100">
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                  <span className="text-accent font-semibold">4</span>
                </div>
                <div>
                  <h4 className={modernTypography.subheading} style={{ marginBottom: '0.5rem' }}>
                    Retention & Growth
                  </h4>
                  <p className={modernTypography.body}>
                    Customer success program, regular updates, and loyalty incentives.
                  </p>
                </div>
              </div>
            </div>
          </ModernCard>
        </motion.div>
      </motion.div>
    </SlideLayout>
  );
};

export default Slide12;