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

const Slide2: React.FC = () => {
  const TOTAL_SLIDES = 18;

  return (
    <SlideLayout title="Founder Background" slideNumber={2} totalSlides={TOTAL_SLIDES}>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        variants={fadeInUpVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemFadeInUpVariant} custom={0}>
          <ModernCard className="h-full p-8">
            <ModernBadge>Founder Profile</ModernBadge>
            <h3 className={`${modernTypography.subheading} mt-5 mb-3`} style={{ color: modernColors.text }}>
              Brendan T. Toole
            </h3>
            <p className={`${modernTypography.body} font-semibold mb-3`}>
              FOUNDER & CEO
            </p>
            <ul className={`${modernTypography.body} space-y-2`}>
              <li>Research Analyst, Point72 Asset Management</li>
              <li>Platoon Leader, 101st Airborne Division</li>
              <li>Princeton University, Economics A.B.</li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              <ModernBadge small>Finance Expert</ModernBadge>
              <ModernBadge small>Military Leadership</ModernBadge>
              <ModernBadge small>Princeton Economics</ModernBadge>
            </div>
          </ModernCard>
        </motion.div>

        <motion.div variants={itemFadeInUpVariant} custom={1}>
          <ModernCard className="h-full p-8">
            <ModernBadge>Vision</ModernBadge>
            <h3 className={`${modernTypography.subheading} mt-5 mb-3`} style={{ color: modernColors.text }}>
              Military logistics meets financial expertise
            </h3>
            <p className={modernTypography.body}>
              Building a blockchain-powered inventory and supply chain management solution that streamlines property tracking and transfers.
            </p>
            <p className={`${modernTypography.body} mt-3`}>
              HandReceipt represents the convergence of military-grade validation adapted for commercial markets.
            </p>
          </ModernCard>
        </motion.div>

        <motion.div 
          variants={itemFadeInUpVariant} 
          custom={2}
          className="md:col-span-2"
        >
          <div className="bg-slate-50/80 backdrop-blur-sm p-8 border border-slate-100 shadow-sm">
            <h3 className={`${modernTypography.subheading} mb-4`} style={{ color: modernColors.text }}>
              Origin Story
            </h3>
            <div className={`${modernTypography.body} space-y-4`}>
              <p>
                <strong>Military Experience:</strong> As a Platoon Leader in the 101st Airborne Division, I witnessed the inefficiencies of paper-based supply tracking systems.
              </p>
              <p>
                <strong>Financial Insight:</strong> At Point72, I analyzed supply chain dynamics across multiple sectors, recognizing a market opportunity.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </SlideLayout>
  );
};

export default Slide2;