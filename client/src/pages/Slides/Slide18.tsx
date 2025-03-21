import React from 'react';
import SlideLayout from '@/components/PitchDeck/SlideLayout';
import { 
  ModernCard, 
  ModernBadge,
  modernTypography, 
  modernColors,
  fadeInUpVariants,
  itemFadeInUpVariant
} from '@/components/PitchDeck/ModernSlideStyles';
import { ShieldCheck, Workflow, Shield, Lock, Home } from 'lucide-react';
import { useContentScale } from '@/hooks/useContentScale';
import { useIsMobile } from '@/hooks/use-mobile';
import { motion } from 'framer-motion';

const Slide18: React.FC = () => {
  const TOTAL_SLIDES = 18;
  const isMobile = useIsMobile();
  
  // Use our custom hook to manage content scaling
  const { contentRef, scale, isScaled } = useContentScale();

  const handleHomeClick = () => {
    // Navigate to the main HandReceipt website
    window.location.href = 'https://handreceipt.com';
  };

  return (
    <SlideLayout 
      title="Shell Token Architecture" 
      subtitle="Technical foundation for secure supply chain transactions with built-in oracle capabilities"
      slideNumber={18} 
      totalSlides={TOTAL_SLIDES}
    >
      {/* Home button */}
      <motion.button
        onClick={handleHomeClick}
        className={`absolute ${isMobile ? 'top-14 right-4' : 'top-16 right-10'} p-2 rounded-full bg-black/10 hover:bg-black/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 z-10`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        title="Go to HandReceipt.com"
      >
        <Home className={`${isMobile ? 'h-4 w-4' : 'h-5 w-5'} text-black/70`} />
      </motion.button>

      <motion.div 
        className={`flex flex-col gap-2 ${isMobile ? 'mt-3' : 'mt-5'}`}
        style={{ 
          minHeight: isMobile ? 'calc(100vh - 200px)' : 'calc(100vh - 200px)',
          paddingBottom: isMobile ? '60px' : '0'
        }}
        variants={fadeInUpVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="flex gap-1.5 md:gap-2 items-center mb-1" variants={itemFadeInUpVariant} custom={0}>
          <ModernBadge color={modernColors.military}>Military-Grade</ModernBadge>
          <ModernBadge color={modernColors.commercial}>Commercial Integration</ModernBadge>
          <ModernBadge color={modernColors.crypto}>Shell Token</ModernBadge>
        </motion.div>

        <div className={`grid grid-cols-1 ${isMobile ? 'gap-1.5' : 'md:grid-cols-2 gap-2'}`}>
          <motion.div variants={itemFadeInUpVariant} custom={1}>
            <ModernCard className={`h-full p-2 md:p-3 ${isMobile ? 'max-w-[95%] mx-auto' : ''}`}>
              <div className="flex items-center gap-1.5 md:gap-2 mb-1.5 md:mb-2">
                <ShieldCheck className={`${isMobile ? 'h-4 w-4' : 'h-5 w-5'}`} style={{ color: modernColors.military }} />
                <h3 className={`${isMobile ? 'text-base' : 'text-lg'} font-medium`}>
                  KEY INNOVATION
                </h3>
              </div>
              
              <h4 className={`${isMobile ? 'text-sm' : 'text-base'} font-medium mb-1`} style={{ color: modernColors.military }}>Built-in Oracle: Integration Advantage</h4>
              
              <p className={`${isMobile ? 'text-xs' : 'text-sm'} mb-2`}>
                Unlike other blockchain solutions that rely on external oracles (like Chainlink), Shell tokens leverage HandReceipt's built-in oracle system, creating a seamless bridge between physical supply chain events and automated financial settlements.
              </p>
              
              <div className={`${isMobile ? 'space-y-1.5' : 'space-y-2'} mb-2`}>
                <div className="flex justify-between items-center p-1.5 md:p-2 bg-slate-50/80 backdrop-blur-sm border border-slate-100 rounded-md">
                  <span className={`${isMobile ? 'text-[10px]' : 'text-xs'} font-medium`}>Traditional Approach</span>
                  <span className={`${isMobile ? 'text-[10px]' : 'text-xs'}`} style={{ color: modernColors.commercial }}>Multiple systems with manual verification</span>
                </div>
                
                <div className="flex justify-between items-center p-1.5 md:p-2 bg-militaryLight backdrop-blur-sm border border-slate-100 rounded-md">
                  <span className={`${isMobile ? 'text-[10px]' : 'text-xs'} font-medium`}>HandReceipt + Shell</span>
                  <span className={`${isMobile ? 'text-[10px]' : 'text-xs'}`} style={{ color: modernColors.military }}>Single integrated system with built-in oracle</span>
                </div>
              </div>
              
              <h4 className={`${isMobile ? 'text-sm' : 'text-base'} font-medium mb-1 text-center`} style={{ color: modernColors.military }}>Oracle Integration Flow:</h4>
              
              <div className="flex justify-center w-full mb-1">
                <div className="inline-block">
                  <ul className="space-y-0.5 md:space-y-1">
                    <li className="flex items-center gap-1.5">
                      <span className="font-medium w-4 text-center" style={{ color: modernColors.military }}>1.</span>
                      <span className={`${isMobile ? 'text-[10px]' : 'text-xs'}`}>QR Scan in HandReceipt App</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="font-medium w-4 text-center" style={{ color: modernColors.military }}>2.</span>
                      <span className={`${isMobile ? 'text-[10px]' : 'text-xs'}`}>Built-in Oracle Verification</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="font-medium w-4 text-center" style={{ color: modernColors.military }}>3.</span>
                      <span className={`${isMobile ? 'text-[10px]' : 'text-xs'}`}>Smart Contract Execution</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="font-medium w-4 text-center" style={{ color: modernColors.military }}>4.</span>
                      <span className={`${isMobile ? 'text-[10px]' : 'text-xs'}`}>Immediate Shell Token Payment</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ModernCard>
          </motion.div>

          <motion.div variants={itemFadeInUpVariant} custom={2}>
            <ModernCard className={`h-full p-2 md:p-3 ${isMobile ? 'max-w-[95%] mx-auto' : ''}`}>
              <div className="flex items-center gap-1.5 md:gap-2 mb-1.5 md:mb-2">
                <Workflow className={`${isMobile ? 'h-4 w-4' : 'h-5 w-5'}`} style={{ color: modernColors.crypto }} />
                <h3 className={`${isMobile ? 'text-base' : 'text-lg'} font-medium`}>
                  BLOCKCHAIN ARCHITECTURE
                </h3>
              </div>
              
              <div className={`${isMobile ? 'space-y-2' : 'space-y-3'}`}>
                <div>
                  <h4 className={`${isMobile ? 'text-sm' : 'text-base'} font-medium mb-0.5 md:mb-1`} style={{ color: modernColors.crypto }}>
                    Consensus: Delegated Proof of Supply Chain
                  </h4>
                  <ul className="space-y-0.5 md:space-y-1">
                    <li className="flex items-start gap-1.5">
                      <div className="w-1.5 h-1.5 mt-1.5 flex-shrink-0 rounded-full" 
                          style={{ backgroundColor: modernColors.crypto }}></div>
                      <span className={`${isMobile ? 'text-xs' : 'text-sm'}`}>3-5 second block times with PBFT-inspired finality</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <div className="w-1.5 h-1.5 mt-1.5 flex-shrink-0 rounded-full"
                          style={{ backgroundColor: modernColors.crypto }}></div>
                      <span className={`${isMobile ? 'text-xs' : 'text-sm'}`}>Validators weighted by supply chain activity volume</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <div className="w-1.5 h-1.5 mt-1.5 flex-shrink-0 rounded-full"
                          style={{ backgroundColor: modernColors.crypto }}></div>
                      <span className={`${isMobile ? 'text-xs' : 'text-sm'}`}>Energy-efficient alternative to Proof of Work</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className={`${isMobile ? 'text-sm' : 'text-base'} font-medium mb-0.5 md:mb-1`} style={{ color: modernColors.military }}>
                    HandReceipt Oracle Integration
                  </h4>
                  <ul className="space-y-0.5 md:space-y-1">
                    <li className="flex items-start gap-1.5">
                      <div className="w-1.5 h-1.5 mt-1.5 flex-shrink-0 rounded-full"
                          style={{ backgroundColor: modernColors.military }}></div>
                      <span className={`${isMobile ? 'text-xs' : 'text-sm'}`}>Direct integration with HandReceipt supply chain system</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <div className="w-1.5 h-1.5 mt-1.5 flex-shrink-0 rounded-full"
                          style={{ backgroundColor: modernColors.military }}></div>
                      <span className={`${isMobile ? 'text-xs' : 'text-sm'}`}>Eliminates need for external oracles like Chainlink</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <div className="w-1.5 h-1.5 mt-1.5 flex-shrink-0 rounded-full"
                          style={{ backgroundColor: modernColors.military }}></div>
                      <span className={`${isMobile ? 'text-xs' : 'text-sm'}`}>Military-grade verification of physical goods receipt</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ModernCard>
          </motion.div>
        </div>

        <motion.div variants={itemFadeInUpVariant} custom={3}>
          <ModernCard className={`p-2 md:p-3 ${isMobile ? 'max-w-[95%] mx-auto' : ''}`}>
            <div className={`grid grid-cols-1 ${isMobile ? 'gap-2' : 'md:grid-cols-2 gap-2'}`}>
              <div>
                <div className="flex items-center gap-1.5 md:gap-2 mb-0.5 md:mb-1">
                  <Shield className={`${isMobile ? 'h-4 w-4' : 'h-5 w-5'}`} style={{ color: modernColors.crypto }} />
                  <h3 className={`${isMobile ? 'text-sm' : 'text-base'} font-medium`}>
                    Smart Contract Engine
                  </h3>
                </div>
                
                <h4 className={`${isMobile ? 'text-xs' : 'text-sm'} font-medium mb-0.5 md:mb-1`} style={{ color: modernColors.crypto }}>
                  Supply chain-specific VM with contract templates
                </h4>
                
                <ul className="space-y-0.5 md:space-y-1">
                  <li className="flex items-center gap-1.5">
                    <span style={{ color: modernColors.crypto }}>•</span>
                    <span className={`${isMobile ? 'text-xs' : 'text-sm'}`}>Payment, escrow, and SLA contract libraries</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span style={{ color: modernColors.crypto }}>•</span>
                    <span className={`${isMobile ? 'text-xs' : 'text-sm'}`}>Deterministic execution with formal verification</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span style={{ color: modernColors.crypto }}>•</span>
                    <span className={`${isMobile ? 'text-xs' : 'text-sm'}`}>Gas-free execution for verified participants</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <div className="flex items-center gap-1.5 md:gap-2 mb-0.5 md:mb-1">
                  <Lock className={`${isMobile ? 'h-4 w-4' : 'h-5 w-5'}`} style={{ color: modernColors.military }} />
                  <h3 className={`${isMobile ? 'text-sm' : 'text-base'} font-medium`}>
                    Security Framework
                  </h3>
                </div>
                
                <h4 className={`${isMobile ? 'text-xs' : 'text-sm'} font-medium mb-0.5 md:mb-1`} style={{ color: modernColors.military }}>
                  Defense-grade security for commercial applications
                </h4>
                
                <div className="p-1.5 mb-1.5 md:mb-2 bg-militaryLight/50 backdrop-blur-sm border border-slate-100 rounded-md">
                  <span className={`${isMobile ? 'text-xs' : 'text-sm'}`} style={{ color: modernColors.military }}>
                    Military-tested security features for enterprise use
                  </span>
                </div>
                
                <ul className="space-y-0.5 md:space-y-1">
                  <li className="flex items-center gap-1.5">
                    <span style={{ color: modernColors.military }}>•</span>
                    <span className={`${isMobile ? 'text-xs' : 'text-sm'}`}>NIST 800-53 compliant controls and encryption</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span style={{ color: modernColors.military }}>•</span>
                    <span className={`${isMobile ? 'text-xs' : 'text-sm'}`}>Multi-signature for high-value transfers</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span style={{ color: modernColors.military }}>•</span>
                    <span className={`${isMobile ? 'text-xs' : 'text-sm'}`}>Auditability with selective disclosure</span>
                  </li>
                </ul>
              </div>
            </div>
          </ModernCard>
        </motion.div>
      </motion.div>
    </SlideLayout>
  );
};

export default Slide18;
