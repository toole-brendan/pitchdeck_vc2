import React from 'react';
import SlideLayout from '@/components/PitchDeck/SlideLayout';
import { 
  ModernCard, 
  ModernBadge,
  modernTypography, 
  modernColors
} from '@/components/PitchDeck/ModernSlideStyles';
import { ShieldCheck, Workflow, Shield, Lock } from 'lucide-react';

const Slide18: React.FC = () => {
  const TOTAL_SLIDES = 18;

  return (
    <SlideLayout title="Shell Token Architecture" slideNumber={18} totalSlides={TOTAL_SLIDES}>
      <div className="flex flex-col gap-8">
        <div className="mb-2 text-center max-w-2xl mx-auto">
          <h2 className={modernTypography.pageTitle}>
            Technical foundation for secure supply chain transactions with built-in oracle capabilities
          </h2>
          <div className="flex gap-3 items-center justify-center mt-2">
            <ModernBadge color={modernColors.military}>Military-Grade</ModernBadge>
            <ModernBadge color={modernColors.commercial}>Commercial Integration</ModernBadge>
            <ModernBadge color={modernColors.crypto}>Shell Token</ModernBadge>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-4">
          <div>
            <ModernCard className="h-full p-8">
              <div className="flex items-center gap-4 mb-6">
                <ShieldCheck className="h-7 w-7" style={{ color: modernColors.military }} />
                <h3 className={modernTypography.heading}>
                  KEY INNOVATION
                </h3>
              </div>
              
              <h4 className={`${modernTypography.subheading} mb-4`} style={{ color: modernColors.military }}>Built-in Oracle: The Integration Advantage</h4>
              
              <p className={`${modernTypography.body} mb-6`}>
                Unlike other blockchain solutions that rely on external oracles (like Chainlink) to connect real-world events to blockchain actions, Shell tokens leverage HandReceipt's built-in oracle system. This direct integration creates a seamless bridge between physical supply chain events (scanning, delivery, inspection) and automated financial settlements via smart contracts.
              </p>
              
              <div className="space-y-5">
                <div className="flex justify-between items-center p-4 bg-slate-50/80 backdrop-blur-sm border border-slate-100">
                  <span className={modernTypography.label}>Traditional Approach</span>
                  <span className={modernTypography.small} style={{ color: modernColors.commercial }}>Multiple systems with manual verification and external oracles creating security vulnerabilities</span>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-militaryLight backdrop-blur-sm border border-slate-100">
                  <span className={modernTypography.label}>HandReceipt + Shell Approach</span>
                  <span className={modernTypography.small} style={{ color: modernColors.military }}>Single integrated system with built-in oracle that cryptographically verifies and executes transactions</span>
                </div>
              </div>
              
              <h4 className={`${modernTypography.subheading} mt-6 mb-4`} style={{ color: modernColors.military }}>Oracle Integration Flow:</h4>
              
              <ul className={`space-y-3 ${modernTypography.body}`}>
                <li className="flex items-center gap-3">
                  <span style={{ color: modernColors.military }}>1.</span>
                  <span>QR Scan in HandReceipt App</span>
                </li>
                <li className="flex items-center gap-3">
                  <span style={{ color: modernColors.military }}>2.</span>
                  <span>Built-in Oracle Verification</span>
                </li>
                <li className="flex items-center gap-3">
                  <span style={{ color: modernColors.military }}>3.</span>
                  <span>Smart Contract Execution</span>
                </li>
                <li className="flex items-center gap-3">
                  <span style={{ color: modernColors.military }}>4.</span>
                  <span>Immediate Shell Token Payment</span>
                </li>
              </ul>
            </ModernCard>
          </div>

          <div>
            <ModernCard className="h-full p-8">
              <div className="flex items-center gap-4 mb-6">
                <Workflow className="h-7 w-7" style={{ color: modernColors.crypto }} />
                <h3 className={modernTypography.heading}>
                  BLOCKCHAIN ARCHITECTURE
                </h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className={`${modernTypography.subheading} mb-2`} style={{ color: modernColors.crypto }}>
                    Consensus Protocol: Delegated Proof of Supply Chain (DPoSC)
                  </h4>
                  <ul className={`space-y-2 ${modernTypography.body}`}>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 backdrop-blur-sm mt-2 flex-shrink-0 shadow-sm rounded-full" 
                          style={{ backgroundColor: modernColors.crypto }}></div>
                      <span>3-5 second block times with PBFT-inspired finality</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 backdrop-blur-sm mt-2 flex-shrink-0 shadow-sm rounded-full"
                          style={{ backgroundColor: modernColors.crypto }}></div>
                      <span>Validators weighted by supply chain activity volume</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 backdrop-blur-sm mt-2 flex-shrink-0 shadow-sm rounded-full"
                          style={{ backgroundColor: modernColors.crypto }}></div>
                      <span>Energy-efficient alternative to Proof of Work</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className={`${modernTypography.subheading} mb-2`} style={{ color: modernColors.military }}>
                    HandReceipt Oracle Integration
                  </h4>
                  <ul className={`space-y-2 ${modernTypography.body}`}>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 backdrop-blur-sm mt-2 flex-shrink-0 shadow-sm rounded-full"
                          style={{ backgroundColor: modernColors.military }}></div>
                      <span>Direct integration with HandReceipt supply chain system</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 backdrop-blur-sm mt-2 flex-shrink-0 shadow-sm rounded-full"
                          style={{ backgroundColor: modernColors.military }}></div>
                      <span>Eliminates need for external oracles like Chainlink</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 backdrop-blur-sm mt-2 flex-shrink-0 shadow-sm rounded-full"
                          style={{ backgroundColor: modernColors.military }}></div>
                      <span>Military-grade verification of physical goods receipt</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ModernCard>
          </div>
        </div>

        <div>
          <ModernCard className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <Shield className="h-7 w-7" style={{ color: modernColors.crypto }} />
                  <h3 className={modernTypography.heading}>
                    Smart Contract Engine
                  </h3>
                </div>
                
                <h4 className={`${modernTypography.subheading} mb-4`} style={{ color: modernColors.crypto }}>
                  Supply chain-specific VM with specialized contract templates
                </h4>
                
                <ul className={`space-y-3 ${modernTypography.body}`}>
                  <li className="flex items-center gap-3">
                    <span style={{ color: modernColors.crypto }}>•</span>
                    <span>Payment, escrow, and SLA contract libraries</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span style={{ color: modernColors.crypto }}>•</span>
                    <span>Deterministic execution with formal verification</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span style={{ color: modernColors.crypto }}>•</span>
                    <span>Gas-free execution for verified participants</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <Lock className="h-7 w-7" style={{ color: modernColors.military }} />
                  <h3 className={modernTypography.heading}>
                    Security Framework
                  </h3>
                </div>
                
                <h4 className={`${modernTypography.subheading} mb-4`} style={{ color: modernColors.military }}>
                  Defense-grade security for commercial applications
                </h4>
                
                <div className="p-4 mb-4 bg-militaryLight/50 backdrop-blur-sm border border-slate-100 rounded-md">
                  <span className={modernTypography.small} style={{ color: modernColors.military }}>
                    Military-tested security features adapted for enterprise use
                  </span>
                </div>
                
                <ul className={`space-y-3 ${modernTypography.body}`}>
                  <li className="flex items-center gap-3">
                    <span style={{ color: modernColors.military }}>•</span>
                    <span>NIST 800-53 compliant controls and encryption</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span style={{ color: modernColors.military }}>•</span>
                    <span>Multi-signature requirements for high-value transfers</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span style={{ color: modernColors.military }}>•</span>
                    <span>Auditability with selective disclosure mechanisms</span>
                  </li>
                </ul>
              </div>
            </div>
          </ModernCard>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide18;
