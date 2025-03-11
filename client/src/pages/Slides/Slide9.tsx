import React from 'react';
import SlideLayout from '@/components/PitchDeck/SlideLayout';
import { motion } from 'framer-motion';
import { 
  ModernCard,
  ModernBadge,
  modernTypography, 
  modernColors,
  fadeInUpVariants,
  itemFadeInUpVariant 
} from '@/components/PitchDeck/ModernSlideStyles';
import { Shield, Smartphone, Zap, Briefcase, Award, Calculator } from 'lucide-react';

const Slide9: React.FC = () => {
  const TOTAL_SLIDES = 18;

  return (
    <SlideLayout title="Product Features" slideNumber={9} totalSlides={TOTAL_SLIDES}>
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
            <div className="flex flex-col mb-6">
              <h3 className={modernTypography.heading}>
                Blockchain-powered supply chain solution for defense and commercial sectors
              </h3>
              <div className="mt-6">
                <h4 className={`${modernTypography.subheading} mb-4`}>
                  Core Capabilities
                </h4>
                <ul className={`space-y-4 ${modernTypography.list}`}>
                  <li className="flex items-start gap-3">
                    <Shield className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: modernColors.military }} />
                    <span><strong>Secure Verification:</strong> Immutable blockchain records with tamper-proof history</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Smartphone className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: modernColors.accent }} />
                    <span><strong>Mobile-First:</strong> Simple QR scanning interface with offline capability</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Zap className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: modernColors.commercial }} />
                    <span><strong>Smart Automation:</strong> Trigger payments and workflows based on supply chain events</span>
                  </li>
                </ul>
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
              <Award className="h-7 w-7" style={{ color: modernColors.military }} />
              <h3 className={modernTypography.heading}>
                Defense Value
              </h3>
            </div>
            <ModernBadge color={modernColors.military} className="mb-5">MILITARY-GRADE</ModernBadge>
            <ul className={`space-y-3 ${modernTypography.list}`}>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full mt-2 mr-2 flex-shrink-0" style={{ backgroundColor: modernColors.military }}></div>
                <span>Military-grade security with CMMC 2.0 compliance</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full mt-2 mr-2 flex-shrink-0" style={{ backgroundColor: modernColors.military }}></div>
                <span>Tactical equipment tracking from warehouse to field deployment</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full mt-2 mr-2 flex-shrink-0" style={{ backgroundColor: modernColors.military }}></div>
                <span>Eliminates paper-based processes with digital chain of custody</span>
              </li>
            </ul>
          </ModernCard>
        </motion.div>

        <motion.div
          variants={itemFadeInUpVariant}
          custom={2}
        >
          <ModernCard className="h-full p-8">
            <div className="flex items-center gap-4 mb-5">
              <Calculator className="h-7 w-7" style={{ color: modernColors.commercial }} />
              <h3 className={modernTypography.heading}>
                Commercial Value
              </h3>
            </div>
            <ModernBadge color={modernColors.commercial} className="mb-5">BUSINESS IMPACT</ModernBadge>
            <ul className={`space-y-3 ${modernTypography.list}`}>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full mt-2 mr-2 flex-shrink-0" style={{ backgroundColor: modernColors.commercial }}></div>
                <span>70% reduction in cash conversion cycle</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full mt-2 mr-2 flex-shrink-0" style={{ backgroundColor: modernColors.commercial }}></div>
                <span>Seamless integration with existing enterprise systems</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full mt-2 mr-2 flex-shrink-0" style={{ backgroundColor: modernColors.commercial }}></div>
                <span>Immediate settlement using Shell Token payments</span>
              </li>
            </ul>
          </ModernCard>
        </motion.div>
      </motion.div>
    </SlideLayout>
  );
};

export default Slide9;