import React from 'react';
import SlideLayout from '@/components/PitchDeck/SlideLayout';
import { 
  ModernCard, 
  ModernDivider,
  ModernSectionHeader,
  ModernBadge,
  modernTypography,
  modernColors,
  fadeInUpVariants,
  itemFadeInUpVariant
} from '@/components/PitchDeck/ModernSlideStyles';
import { Check, Shield, Laptop, Database } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { motion } from 'framer-motion';

const Slide4: React.FC = () => {
  const TOTAL_SLIDES = 18;
  const isMobile = useIsMobile();

  return (
    <SlideLayout 
      title="Dual Market Strategy" 
      subtitle="Unified blockchain platform serving both defense and commercial sectors"
      slideNumber={4} 
      totalSlides={TOTAL_SLIDES}
    >
      <motion.div 
        className="flex flex-col gap-4 md:gap-6 mt-4 md:mt-8"
        style={{ paddingBottom: isMobile ? '60px' : '0' }}
        variants={fadeInUpVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Platform Architecture - Top Section */}
        <motion.div className="flex-grow-0" variants={itemFadeInUpVariant} custom={0}>
          <ModernCard className={`p-3 md:p-4 ${isMobile ? 'max-w-[95%] mx-auto' : ''}`}>
            <ModernSectionHeader className="mb-2 md:mb-3 inline-block text-xs">
              PLATFORM ARCHITECTURE
            </ModernSectionHeader>

            <div className={`flex flex-col ${isMobile ? 'gap-2' : 'md:flex-row'} gap-0`}>
              {/* Defense Platform */}
              <div 
                className={`flex-1 ${isMobile ? 'border-b' : 'border-b md:border-b-0 md:border-r'} border-slate-200 p-3 md:p-4 flex flex-col justify-center shadow-sm`}
                style={{ background: `linear-gradient(180deg, ${modernColors.militaryLight}30 0%, white 100%)` }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-5 h-5" style={{ color: modernColors.military }} />
                  <h3 className={`${isMobile ? 'text-base' : 'text-lg'} font-medium`} style={{ color: modernColors.military }}>
                    Defense Platform
                  </h3>
                </div>
                <ul className={`space-y-1 pl-6 text-sm`}>
                  <li className="text-slate-700">Military-grade encryption</li>
                  <li className="text-slate-700">Secure authentication</li>
                  <li className="text-slate-700">Robust chain of custody</li>
                </ul>
              </div>

              {/* Shared Core */}
              <div 
                className={`flex-1 ${isMobile ? 'border-b' : 'border-b md:border-b-0 md:border-r'} border-slate-200 p-3 md:p-4 flex flex-col justify-center shadow-sm`}
                style={{ background: `linear-gradient(180deg, ${modernColors.cryptoLight}30 0%, white 100%)` }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Database className="w-5 h-5" style={{ color: modernColors.crypto }} />
                  <h3 className={`${isMobile ? 'text-base' : 'text-lg'} font-medium`} style={{ color: modernColors.crypto }}>
                    Shared Infrastructure
                  </h3>
                </div>
                <ul className={`space-y-1 pl-6 text-sm`}>
                  <li className="text-slate-700">Smart contracts</li>
                  <li className="text-slate-700">Distributed ledger</li>
                  <li className="text-slate-700">Immutable records</li>
                  <li className="text-slate-700">Asset tracking</li>
                </ul>
              </div>

              {/* Commercial Platform */}
              <div 
                className="flex-1 p-3 md:p-4 flex flex-col justify-center shadow-sm"
                style={{ background: `linear-gradient(180deg, ${modernColors.commercialLight}30 0%, white 100%)` }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Laptop className="w-5 h-5" style={{ color: modernColors.commercial }} />
                  <h3 className={`${isMobile ? 'text-base' : 'text-lg'} font-medium`} style={{ color: modernColors.commercial }}>
                    Commercial Platform
                  </h3>
                </div>
                <ul className={`space-y-1 pl-6 text-sm`}>
                  <li className="text-slate-700">Payment processing</li>
                  <li className="text-slate-700">Supply chain tracking</li>
                  <li className="text-slate-700">Vendor management</li>
                </ul>
              </div>
            </div>
          </ModernCard>
        </motion.div>

        {/* Market Comparison - Middle Section */}
        <div className={`grid grid-cols-1 ${isMobile ? 'gap-3' : 'md:grid-cols-2 gap-5'}`}>
          {/* Defense Market */}
          <motion.div variants={itemFadeInUpVariant} custom={1}>
            <ModernCard className={`p-4 md:p-5 border-t-3 ${isMobile ? 'max-w-[95%] mx-auto' : ''}`} style={{ 
              borderColor: modernColors.military,
              backgroundColor: `${modernColors.militaryLight}10`
            }}>
              <ModernBadge color={modernColors.military} small className="mb-3">
                DEFENSE MARKET
              </ModernBadge>
              
              <div className="space-y-4 mt-3">
                <div>
                  <h4 className={`${isMobile ? 'text-base' : 'text-lg'} font-medium mb-1`} style={{ color: modernColors.military }}>
                    Lower Implementation Risk
                  </h4>
                  <p className={`text-sm`}>
                    Stable, long-term contracts with predictable revenue
                  </p>
                </div>
                
                <div>
                  <h4 className={`${isMobile ? 'text-base' : 'text-lg'} font-medium mb-1`} style={{ color: modernColors.military }}>
                    High Barriers to Entry
                  </h4>
                  <p className={`text-sm`}>
                    Military expertise creates strong competitive moat
                  </p>
                </div>
              </div>
            </ModernCard>
          </motion.div>

          {/* Commercial Market */}
          <motion.div variants={itemFadeInUpVariant} custom={2}>
            <ModernCard className={`p-4 md:p-5 border-t-3 ${isMobile ? 'max-w-[95%] mx-auto' : ''}`} style={{ 
              borderColor: modernColors.commercial,
              backgroundColor: `${modernColors.commercialLight}10`
            }}>
              <ModernBadge color={modernColors.commercial} small className="mb-3">
                COMMERCIAL MARKET
              </ModernBadge>
              
              <div className="space-y-4 mt-3">
                <div>
                  <h4 className={`${isMobile ? 'text-base' : 'text-lg'} font-medium mb-1`} style={{ color: modernColors.commercial }}>
                    Higher Growth Potential
                  </h4>
                  <p className={`text-sm`}>
                    Larger addressable market with recurring revenue
                  </p>
                </div>
                
                <div>
                  <h4 className={`${isMobile ? 'text-base' : 'text-lg'} font-medium mb-1`} style={{ color: modernColors.commercial }}>
                    Transaction Fee Upside
                  </h4>
                  <p className={`text-sm`}>
                    Exponential revenue growth through <span style={{ color: modernColors.crypto }}>Shell token</span> payments
                  </p>
                </div>
              </div>
            </ModernCard>
          </motion.div>
        </div>

        {/* Strategic Advantages - Bottom Section */}
        <motion.div className="flex-grow-0" variants={itemFadeInUpVariant} custom={3}>
          <ModernCard className={`p-3 md:p-4 shadow-lg ${isMobile ? 'max-w-[95%] mx-auto' : ''}`} style={{ 
            background: 'linear-gradient(135deg, rgba(219, 234, 254, 0.2), rgba(255, 237, 213, 0.2))'
          }}>
            <ModernBadge color={modernColors.crypto} small className="mb-3">
              STRATEGIC ADVANTAGES
            </ModernBadge>

            <div className={`grid grid-cols-1 ${isMobile ? 'gap-2' : 'md:grid-cols-2 gap-3'} mt-2`}>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 mt-0.5 shrink-0" style={{ color: modernColors.crypto }} />
                <p className={`text-sm`}>
                  Shared infrastructure reduces development and maintenance costs
                </p>
              </div>
              
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 mt-0.5 shrink-0" style={{ color: modernColors.military }} />
                <p className={`text-sm`}>
                  <span style={{ color: modernColors.military }}>Military-grade security</span> enhances commercial offering credibility
                </p>
              </div>
              
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 mt-0.5 shrink-0" style={{ color: modernColors.commercial }} />
                <p className={`text-sm`}>
                  Dual revenue streams provide stability through market cycles
                </p>
              </div>
              
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 mt-0.5 shrink-0" style={{ color: modernColors.accent }} />
                <p className={`text-sm`}>
                  Network effects amplify value across both platforms
                </p>
              </div>
            </div>
          </ModernCard>
        </motion.div>
      </motion.div>
    </SlideLayout>
  );
};

export default Slide4;