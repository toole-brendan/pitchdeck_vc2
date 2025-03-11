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
import { ShieldCheck, Workflow, Shield, Lock } from 'lucide-react';

const Slide17: React.FC = () => {
  const TOTAL_SLIDES = 18;

  return (
    <SlideLayout title="Shell Token Architecture" slideNumber={17} totalSlides={TOTAL_SLIDES}>
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
            Technical foundation for secure supply chain transactions with built-in oracle capabilities
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-4">
          <motion.div
            variants={itemFadeInUpVariant}
            custom={1}
          >
            <ModernCard className="h-full p-8">
              <div className="flex items-center gap-4 mb-6">
                <ShieldCheck className="h-7 w-7 text-accent" />
                <h3 className={modernTypography.heading} style={{ color: modernColors.text }}>
                  KEY INNOVATION
                </h3>
              </div>
              
              <h4 className={`${modernTypography.subheading} mb-4 text-accent`}>Built-in Oracle: The Integration Advantage</h4>
              
              <p className={`${modernTypography.body} mb-6`}>
                Unlike other blockchain solutions that rely on external oracles (like Chainlink) to connect real-world events to blockchain actions, Shell tokens leverage HandReceipt's built-in oracle system. This direct integration creates a seamless bridge between physical supply chain events (scanning, delivery, inspection) and automated financial settlements via smart contracts.
              </p>
              
              <div className="space-y-5">
                <div className="flex justify-between items-center p-4 bg-slate-50/80 backdrop-blur-sm border border-slate-100">
                  <span className={modernTypography.label}>Traditional Approach</span>
                  <span className={modernTypography.small}>Multiple systems with manual verification and external oracles creating security vulnerabilities</span>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-slate-50/80 backdrop-blur-sm border border-slate-100">
                  <span className={modernTypography.label}>HandReceipt + Shell Approach</span>
                  <span className={modernTypography.small}>Single integrated system with built-in oracle that cryptographically verifies and executes transactions</span>
                </div>
              </div>
              
              <h4 className={`${modernTypography.subheading} mt-6 mb-4`}>Oracle Integration Flow:</h4>
              
              <ul className={`space-y-3 ${modernTypography.body}`}>
                <li className="flex items-center gap-3">
                  <span className="text-accent">1.</span>
                  <span>QR Scan in HandReceipt App</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-accent">2.</span>
                  <span>Built-in Oracle Verification</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-accent">3.</span>
                  <span>Smart Contract Execution</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-accent">4.</span>
                  <span>Immediate Shell Token Payment</span>
                </li>
              </ul>
            </ModernCard>
          </motion.div>

          <motion.div
            variants={itemFadeInUpVariant}
            custom={2}
          >
            <ModernCard className="h-full p-8">
              <div className="flex items-center gap-4 mb-6">
                <Workflow className="h-7 w-7 text-accent" />
                <h3 className={modernTypography.heading} style={{ color: modernColors.text }}>
                  BLOCKCHAIN ARCHITECTURE
                </h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className={`${modernTypography.subheading} mb-2 text-accent`}>Consensus Protocol: Delegated Proof of Supply Chain (DPoSC)</h4>
                  <ul className={`space-y-2 ${modernTypography.body}`}>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500/80 backdrop-blur-sm mt-2 flex-shrink-0 shadow-sm rounded-full"></div>
                      <span>3-5 second block times with PBFT-inspired finality</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500/80 backdrop-blur-sm mt-2 flex-shrink-0 shadow-sm rounded-full"></div>
                      <span>Validators weighted by supply chain activity volume</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500/80 backdrop-blur-sm mt-2 flex-shrink-0 shadow-sm rounded-full"></div>
                      <span>Energy-efficient alternative to Proof of Work</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className={`${modernTypography.subheading} mb-2 text-accent`}>HandReceipt Oracle Integration</h4>
                  <ul className={`space-y-2 ${modernTypography.body}`}>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500/80 backdrop-blur-sm mt-2 flex-shrink-0 shadow-sm rounded-full"></div>
                      <span>Direct integration with HandReceipt supply chain system</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500/80 backdrop-blur-sm mt-2 flex-shrink-0 shadow-sm rounded-full"></div>
                      <span>Eliminates need for external oracles like Chainlink</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500/80 backdrop-blur-sm mt-2 flex-shrink-0 shadow-sm rounded-full"></div>
                      <span>Military-grade verification of physical goods receipt</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ModernCard>
          </motion.div>
        </div>

        <motion.div
          variants={itemFadeInUpVariant}
          custom={3}
        >
          <ModernCard className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <Shield className="h-7 w-7 text-accent" />
                  <h3 className={modernTypography.heading} style={{ color: modernColors.text }}>
                    Smart Contract Engine
                  </h3>
                </div>
                
                <h4 className={`${modernTypography.subheading} mb-4 text-accent`}>Supply chain-specific VM with specialized contract templates</h4>
                
                <ul className={`space-y-3 ${modernTypography.body}`}>
                  <li className="flex items-center gap-3">
                    <span className="text-accent">•</span>
                    <span>Payment, escrow, and SLA contract libraries</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-accent">•</span>
                    <span>Deterministic execution with formal verification</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-accent">•</span>
                    <span>Gas-free execution for verified participants</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <Lock className="h-7 w-7 text-accent" />
                  <h3 className={modernTypography.heading} style={{ color: modernColors.text }}>
                    Security Framework
                  </h3>
                </div>
                
                <h4 className={`${modernTypography.subheading} mb-4 text-accent`}>Defense-grade security for commercial applications</h4>
                
                <ul className={`space-y-3 ${modernTypography.body}`}>
                  <li className="flex items-center gap-3">
                    <span className="text-accent">•</span>
                    <span>NIST 800-53 compliant controls and encryption</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-accent">•</span>
                    <span>Multi-signature requirements for high-value transfers</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-accent">•</span>
                    <span>Auditability with selective disclosure mechanisms</span>
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

export default Slide17;