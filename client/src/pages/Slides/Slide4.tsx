import React from 'react';
import SlideLayout from '@/components/PitchDeck/SlideLayout';
import { motion } from 'framer-motion';
import { 
  ModernCard, 
  ModernDivider,
  ModernSectionHeader,
  ModernBadge,
  modernTypography,
  modernColors,
  fadeInUpVariants,
  itemFadeInUpVariant,
  scaleUpVariants
} from '@/components/PitchDeck/ModernSlideStyles';
import { Check, Shield, Laptop, Database } from 'lucide-react';

// Custom animation variants for this slide
const columnVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 + (i * 0.2),
      duration: 0.4
    }
  })
};

const Slide4: React.FC = () => {
  const TOTAL_SLIDES = 18;

  return (
    <SlideLayout title="Dual Market Strategy" slideNumber={4} totalSlides={TOTAL_SLIDES}>
      <div className="max-w-5xl mx-auto">
        {/* Platform Architecture - Top Section */}
        <motion.div
          variants={scaleUpVariants}
          initial="hidden"
          animate="visible"
          className="mb-8"
        >
          <ModernSectionHeader className="mb-4 inline-block">
            PLATFORM ARCHITECTURE
          </ModernSectionHeader>

          <div className="flex flex-col md:flex-row gap-0 mt-4">
            {/* Defense Platform */}
            <motion.div 
              variants={columnVariants}
              custom={0}
              initial="hidden"
              animate="visible"
              className="flex-1 border-b md:border-b-0 md:border-r border-slate-200 p-5 flex flex-col justify-center bg-white/90 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <Shield className="w-5 h-5 text-blue-600" />
                <h3 className={`${modernTypography.subheading}`} style={{ color: modernColors.text }}>
                  Defense Platform
                </h3>
              </div>
              <ul className={`space-y-2 pl-7 ${modernTypography.body}`}>
                <li className="text-slate-600 text-sm">Military-grade encryption</li>
                <li className="text-slate-600 text-sm">Secure authentication</li>
                <li className="text-slate-600 text-sm">Robust chain of custody</li>
              </ul>
            </motion.div>

            {/* Shared Core */}
            <motion.div 
              variants={columnVariants}
              custom={1}
              initial="hidden"
              animate="visible"
              className="flex-1 border-b md:border-b-0 md:border-r border-slate-200 p-5 bg-slate-50/70 flex flex-col justify-center shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <Database className="w-5 h-5 text-slate-600" />
                <h3 className={`${modernTypography.subheading}`} style={{ color: modernColors.text }}>
                  Shared Infrastructure
                </h3>
              </div>
              <ul className={`space-y-2 pl-7 ${modernTypography.body}`}>
                <li className="text-slate-600 text-sm">Smart contracts</li>
                <li className="text-slate-600 text-sm">Distributed ledger</li>
                <li className="text-slate-600 text-sm">Immutable records</li>
                <li className="text-slate-600 text-sm">Asset tracking</li>
              </ul>
            </motion.div>

            {/* Commercial Platform */}
            <motion.div 
              variants={columnVariants}
              custom={2}
              initial="hidden"
              animate="visible"
              className="flex-1 p-5 flex flex-col justify-center bg-white/90 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <Laptop className="w-5 h-5 text-emerald-600" />
                <h3 className={`${modernTypography.subheading}`} style={{ color: modernColors.text }}>
                  Commercial Platform
                </h3>
              </div>
              <ul className={`space-y-2 pl-7 ${modernTypography.body}`}>
                <li className="text-slate-600 text-sm">Payment processing</li>
                <li className="text-slate-600 text-sm">Supply chain tracking</li>
                <li className="text-slate-600 text-sm">Vendor management</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Market Comparison - Middle Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Defense Market */}
          <motion.div 
            variants={fadeInUpVariants} 
            initial="hidden" 
            animate="visible"
            className="flex flex-col h-full"
          >
            <ModernCard className="h-full p-8 flex-1">
              <ModernSectionHeader dark className="mb-4 inline-block">
                DEFENSE MARKET
              </ModernSectionHeader>
              
              <div className="space-y-5 mt-4">
                <div>
                  <h4 className={`${modernTypography.subheading} mb-1`} style={{ color: modernColors.text }}>
                    Lower Implementation Risk
                  </h4>
                  <p className={`${modernTypography.body} text-sm`}>
                    Stable, long-term contracts with predictable revenue
                  </p>
                </div>
                
                <div>
                  <h4 className={`${modernTypography.subheading} mb-1`} style={{ color: modernColors.text }}>
                    High Barriers to Entry
                  </h4>
                  <p className={`${modernTypography.body} text-sm`}>
                    Military expertise creates strong competitive moat
                  </p>
                </div>
              </div>
            </ModernCard>
          </motion.div>

          {/* Commercial Market */}
          <motion.div 
            variants={fadeInUpVariants}
            initial="hidden" 
            animate="visible"
            className="flex flex-col h-full"
          >
            <ModernCard className="h-full p-8 flex-1">
              <ModernSectionHeader dark className="mb-4 inline-block">
                COMMERCIAL MARKET
              </ModernSectionHeader>
              
              <div className="space-y-5 mt-4">
                <div>
                  <h4 className={`${modernTypography.subheading} mb-1`} style={{ color: modernColors.text }}>
                    Higher Growth Potential
                  </h4>
                  <p className={`${modernTypography.body} text-sm`}>
                    Larger addressable market with recurring revenue
                  </p>
                </div>
                
                <div>
                  <h4 className={`${modernTypography.subheading} mb-1`} style={{ color: modernColors.text }}>
                    Transaction Fee Upside
                  </h4>
                  <p className={`${modernTypography.body} text-sm`}>
                    Exponential revenue growth through Shell token payments
                  </p>
                </div>
              </div>
            </ModernCard>
          </motion.div>
        </div>

        {/* Strategic Advantages - Bottom Section */}
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col h-full"
        >
          <ModernCard className="p-8 flex-1">
            <ModernSectionHeader dark className="mb-4 inline-block">
              STRATEGIC ADVANTAGES
            </ModernSectionHeader>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {[
                "Shared infrastructure reduces development and maintenance costs",
                "Military-grade security enhances commercial offering credibility",
                "Dual revenue streams provide stability through market cycles",
                "Network effects amplify value across both platforms"
              ].map((advantage, index) => (
                <motion.div 
                  key={index} 
                  variants={itemFadeInUpVariant}
                  custom={index}
                  className="flex items-start gap-2"
                >
                  <Check className="w-4 h-4 text-blue-600 mt-1 shrink-0" />
                  <p className={`${modernTypography.body} text-sm`}>
                    {advantage}
                  </p>
                </motion.div>
              ))}
            </div>
          </ModernCard>
        </motion.div>
      </div>
    </SlideLayout>
  );
};

export default Slide4;