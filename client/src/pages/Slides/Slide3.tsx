import React from 'react';
import SlideLayout from '@/components/PitchDeck/SlideLayout';
import { motion } from 'framer-motion';
import { 
  ModernCard, 
  ModernBadge,
  ModernDivider,
  modernTypography, 
  modernColors,
  fadeInUpVariants,
  scaleUpVariants,
  itemFadeInUpVariant
} from '@/components/PitchDeck/ModernSlideStyles';
import { FileWarning, ShieldAlert, DollarSign, Building } from 'lucide-react';

const Slide3: React.FC = () => {
  const TOTAL_SLIDES = 18;

  return (
    <SlideLayout title="Supply Chain Challenges" slideNumber={3} totalSlides={TOTAL_SLIDES}>
      <motion.div
        variants={scaleUpVariants}
        initial="hidden"
        animate="visible"
        className="mb-6 text-center max-w-3xl mx-auto"
      >
        <h2 className={`${modernTypography.heading} mb-4`} style={{ color: modernColors.text }}>
          Current pain points driving the need for blockchain solutions
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Military Sector */}
        <motion.div 
          variants={fadeInUpVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col h-full"
        >
          <ModernCard className="h-full p-8 flex-1">
            <div className="flex items-center mb-4">
              <Building className="h-5 w-5 mr-2 text-blue-600" />
              <ModernBadge color="#3B82F6">Military Sector</ModernBadge>
            </div>
            
            <ul className="space-y-4 mt-6">
              <motion.li variants={itemFadeInUpVariant} custom={0} className="flex items-start">
                <FileWarning className="h-5 w-5 mt-1 mr-3 text-blue-600 flex-shrink-0" />
                <div>
                  <p className={`${modernTypography.body} font-medium`}>Paper-Based Accountability</p>
                  <p className={`${modernTypography.body} text-sm`}>
                    Hand receipts and equipment tracking rely on physical paperwork prone to loss
                  </p>
                </div>
              </motion.li>
              
              <motion.li variants={itemFadeInUpVariant} custom={1} className="flex items-start">
                <ShieldAlert className="h-5 w-5 mt-1 mr-3 text-blue-600 flex-shrink-0" />
                <div>
                  <p className={`${modernTypography.body} font-medium`}>Verification Gaps</p>
                  <p className={`${modernTypography.body} text-sm`}>
                    Limited ability to verify equipment origin and maintenance history
                  </p>
                </div>
              </motion.li>
              
              <motion.li variants={itemFadeInUpVariant} custom={2} className="flex items-start">
                <FileWarning className="h-5 w-5 mt-1 mr-3 text-blue-600 flex-shrink-0" />
                <div>
                  <p className={`${modernTypography.body} font-medium`}>Antiquated Systems</p>
                  <p className={`${modernTypography.body} text-sm`}>
                    Legacy database systems lack interoperability, creating information silos
                  </p>
                </div>
              </motion.li>
            </ul>
            
            <ModernDivider className="my-5" />
            
            <div className="bg-blue-50 p-4 rounded-md flex items-center justify-between">
              <p className={`${modernTypography.body} font-medium`}>Annual Inventory Loss</p>
              <p className={`${modernTypography.stats} text-blue-600`}>$1.2B+</p>
            </div>
          </ModernCard>
        </motion.div>

        {/* Commercial Sector */}
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          animate="visible" 
          className="flex flex-col h-full"
        >
          <ModernCard className="h-full p-8 flex-1">
            <div className="flex items-center mb-4">
              <DollarSign className="h-5 w-5 mr-2 text-emerald-600" />
              <ModernBadge color="#10B981">Commercial Sector</ModernBadge>
            </div>
            
            <ul className="space-y-4 mt-6">
              <motion.li variants={itemFadeInUpVariant} custom={0} className="flex items-start">
                <ShieldAlert className="h-5 w-5 mt-1 mr-3 text-emerald-600 flex-shrink-0" />
                <div>
                  <p className={`${modernTypography.body} font-medium`}>Counterfeiting & Fraud</p>
                  <p className={`${modernTypography.body} text-sm`}>
                    Counterfeit products create significant financial and reputational damage
                  </p>
                </div>
              </motion.li>
              
              <motion.li variants={itemFadeInUpVariant} custom={1} className="flex items-start">
                <FileWarning className="h-5 w-5 mt-1 mr-3 text-emerald-600 flex-shrink-0" />
                <div>
                  <p className={`${modernTypography.body} font-medium`}>Lack of Transparency</p>
                  <p className={`${modernTypography.body} text-sm`}>
                    Limited visibility into supply chain origins and handling
                  </p>
                </div>
              </motion.li>
              
              <motion.li variants={itemFadeInUpVariant} custom={2} className="flex items-start">
                <ShieldAlert className="h-5 w-5 mt-1 mr-3 text-emerald-600 flex-shrink-0" />
                <div>
                  <p className={`${modernTypography.body} font-medium`}>Compliance Challenges</p>
                  <p className={`${modernTypography.body} text-sm`}>
                    Difficulty proving regulatory compliance across global supply chains
                  </p>
                </div>
              </motion.li>
            </ul>
            
            <ModernDivider className="my-5" />
            
            <div className="bg-emerald-50 p-4 rounded-md flex items-center justify-between">
              <p className={`${modernTypography.body} font-medium`}>Estimated Global Impact</p>
              <p className={`${modernTypography.stats} text-emerald-600`}>$950B+</p>
            </div>
          </ModernCard>
        </motion.div>
      </div>
    </SlideLayout>
  );
};

export default Slide3;