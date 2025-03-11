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
import { Lightbulb, Smartphone, Globe } from 'lucide-react';

const Slide13: React.FC = () => {
  const TOTAL_SLIDES = 18;

  return (
    <SlideLayout title="Product Showcase" slideNumber={13} totalSlides={TOTAL_SLIDES}>
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
            Key Features Demo
          </h2>
          <p className={modernTypography.body}>
            Placeholder text showcasing our product's main features and functionalities.
          </p>
        </motion.div>

        <motion.div 
          variants={itemFadeInUpVariant}
          custom={1}
          className="mb-4"
        >
          <ModernCard className="p-8 flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h3 className={`${modernTypography.heading} mb-6 flex items-center gap-3`} style={{ color: modernColors.text }}>
                <Lightbulb className="h-7 w-7 text-accent" />
                Product Highlights
              </h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <span className="w-7 h-7  bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                    <span className="text-accent font-semibold">1</span>
                  </span>
                  <p className={modernTypography.body}>
                    Feature highlight one with a brief description.
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-7 h-7  bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                    <span className="text-accent font-semibold">2</span>
                  </span>
                  <p className={modernTypography.body}>
                    Feature highlight two with a brief description.
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-7 h-7  bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                    <span className="text-accent font-semibold">3</span>
                  </span>
                  <p className={modernTypography.body}>
                    Feature highlight three with a brief description.
                  </p>
                </li>
              </ul>
            </div>
            
            <div className="md:w-1/2 flex items-center justify-center">
              <div className="aspect-video w-full max-w-md bg-slate-50/80 backdrop-blur-sm  border border-slate-100 flex items-center justify-center">
                [Product Screenshot/Demo Video Placeholder]
              </div>
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
                <Globe className="h-7 w-7 text-accent" />
                <h3 className={modernTypography.heading} style={{ color: modernColors.text }}>
                  Web Platform
                </h3>
              </div>
              <div className="h-52 bg-slate-50/80 backdrop-blur-sm  border border-slate-100 flex items-center justify-center mb-5">
                [Web Platform Screenshot Placeholder]
              </div>
              <p className={modernTypography.body}>
                Placeholder description of the web platform features and capabilities.
              </p>
            </ModernCard>
          </motion.div>

          <motion.div
            variants={itemFadeInUpVariant}
            custom={3}
          >
            <ModernCard className="h-full p-8">
              <div className="flex items-center gap-4 mb-5">
                <Smartphone className="h-7 w-7 text-accent" />
                <h3 className={modernTypography.heading} style={{ color: modernColors.text }}>
                  Mobile App
                </h3>
              </div>
              <div className="h-52 bg-slate-50/80 backdrop-blur-sm  border border-slate-100 flex items-center justify-center mb-5">
                [Mobile App Screenshot Placeholder]
              </div>
              <p className={modernTypography.body}>
                Placeholder description of the mobile app features and capabilities.
              </p>
            </ModernCard>
          </motion.div>
        </div>
      </motion.div>
    </SlideLayout>
  );
};

export default Slide13;