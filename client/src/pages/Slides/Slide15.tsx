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
import { ShieldCheck, Lock, FileWarning } from 'lucide-react';

const Slide15: React.FC = () => {
  const TOTAL_SLIDES = 18;

  return (
    <SlideLayout title="Risk Assessment & Mitigation" slideNumber={15} totalSlides={TOTAL_SLIDES}>
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
            Addressing Potential Risks
          </h2>
          <p className={modernTypography.body}>
            Placeholder text identifying potential challenges and our strategies to mitigate them.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            variants={itemFadeInUpVariant}
            custom={1}
          >
            <ModernCard className="h-full p-8">
              <div className="flex items-center gap-4 mb-6">
                <FileWarning className="h-7 w-7 text-accent" />
                <h3 className={modernTypography.heading} style={{ color: modernColors.text }}>
                  Market Risks
                </h3>
              </div>
              
              <div className="space-y-6">
                <div className="border border-slate-100 rounded-sm p-5 bg-white/80 backdrop-blur-sm">
                  <h4 className={`${modernTypography.subheading} mb-3`}>Competition</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="bg-red-50/80 backdrop-blur-sm p-4 rounded-sm border border-red-100">
                      <p className={`text-red-700 ${modernTypography.small} uppercase tracking-wide mb-2`}>Risk</p>
                      <p className={modernTypography.body}>
                        New competitors entering the market with similar solutions.
                      </p>
                    </div>
                    <div className="bg-green-50/80 backdrop-blur-sm p-4 rounded-sm border border-green-100">
                      <p className={`text-green-700 ${modernTypography.small} uppercase tracking-wide mb-2`}>Mitigation</p>
                      <p className={modernTypography.body}>
                        Continuous innovation and building strong brand loyalty.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="border border-slate-100 rounded-sm p-5 bg-white/80 backdrop-blur-sm">
                  <h4 className={`${modernTypography.subheading} mb-3`}>Market Adoption</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="bg-red-50/80 backdrop-blur-sm p-4 rounded-sm border border-red-100">
                      <p className={`text-red-700 ${modernTypography.small} uppercase tracking-wide mb-2`}>Risk</p>
                      <p className={modernTypography.body}>
                        Slower than anticipated market adoption.
                      </p>
                    </div>
                    <div className="bg-green-50/80 backdrop-blur-sm p-4 rounded-sm border border-green-100">
                      <p className={`text-green-700 ${modernTypography.small} uppercase tracking-wide mb-2`}>Mitigation</p>
                      <p className={modernTypography.body}>
                        Targeted marketing and flexible pricing strategies.
                      </p>
                    </div>
                  </div>
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
                <ShieldCheck className="h-7 w-7 text-accent" />
                <h3 className={modernTypography.heading} style={{ color: modernColors.text }}>
                  Technical Risks
                </h3>
              </div>
              
              <div className="space-y-6">
                <div className="border border-slate-100 rounded-sm p-5 bg-white/80 backdrop-blur-sm">
                  <h4 className={`${modernTypography.subheading} mb-3`}>Scalability</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="bg-red-50/80 backdrop-blur-sm p-4 rounded-sm border border-red-100">
                      <p className={`text-red-700 ${modernTypography.small} uppercase tracking-wide mb-2`}>Risk</p>
                      <p className={modernTypography.body}>
                        Platform performance issues with rapid user growth.
                      </p>
                    </div>
                    <div className="bg-green-50/80 backdrop-blur-sm p-4 rounded-sm border border-green-100">
                      <p className={`text-green-700 ${modernTypography.small} uppercase tracking-wide mb-2`}>Mitigation</p>
                      <p className={modernTypography.body}>
                        Cloud-native architecture designed for horizontal scaling.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="border border-slate-100 rounded-sm p-5 bg-white/80 backdrop-blur-sm">
                  <h4 className={`${modernTypography.subheading} mb-3`}>Security</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="bg-red-50/80 backdrop-blur-sm p-4 rounded-sm border border-red-100">
                      <p className={`text-red-700 ${modernTypography.small} uppercase tracking-wide mb-2`}>Risk</p>
                      <p className={modernTypography.body}>
                        Data breaches or security vulnerabilities.
                      </p>
                    </div>
                    <div className="bg-green-50/80 backdrop-blur-sm p-4 rounded-sm border border-green-100">
                      <p className={`text-green-700 ${modernTypography.small} uppercase tracking-wide mb-2`}>Mitigation</p>
                      <p className={modernTypography.body}>
                        Regular security audits and compliance with industry standards.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ModernCard>
          </motion.div>
        </div>

        <motion.div
          variants={itemFadeInUpVariant}
          custom={3}
        >
          <ModernCard className="p-8 bg-blue-50/80 backdrop-blur-sm border border-blue-100">
            <div className="flex items-center gap-4 mb-5">
              <Lock className="h-7 w-7 text-blue-600" />
              <h3 className={modernTypography.heading} style={{ color: modernColors.text }}>
                Contingency Planning
              </h3>
            </div>
            <p className={`${modernTypography.body} mb-6`}>
              Placeholder text for our contingency planning strategies and risk management framework.
            </p>
            <ul className={`space-y-4 ${modernTypography.body}`}>
              <li className="flex items-start gap-4">
                <div className="w-7 h-7 rounded-full bg-blue-100/80 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                  <span className="text-blue-600 font-semibold text-sm">✓</span>
                </div>
                <p>Regular risk assessment and monitoring</p>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-7 h-7 rounded-full bg-blue-100/80 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                  <span className="text-blue-600 font-semibold text-sm">✓</span>
                </div>
                <p>Diversified resource allocation</p>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-7 h-7 rounded-full bg-blue-100/80 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                  <span className="text-blue-600 font-semibold text-sm">✓</span>
                </div>
                <p>Strategic partnerships to mitigate market uncertainties</p>
              </li>
            </ul>
          </ModernCard>
        </motion.div>
      </motion.div>
    </SlideLayout>
  );
};

export default Slide15;