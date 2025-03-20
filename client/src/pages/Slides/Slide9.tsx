import React from 'react';
import SlideLayout from '@/components/PitchDeck/SlideLayout';
import { 
  ModernCard,
  ModernBadge,
  modernTypography, 
  modernColors
} from '@/components/PitchDeck/ModernSlideStyles';
import { Shield, Smartphone, Zap, Briefcase, Award, Calculator } from 'lucide-react';

const Slide9: React.FC = () => {
  const TOTAL_SLIDES = 18;

  return (
    <SlideLayout 
      title="Product Features" 
      subtitle="Blockchain-powered supply chain solution for defense and commercial sectors"
      slideNumber={9} 
      totalSlides={TOTAL_SLIDES}
    >
      <div className="flex flex-col items-center justify-center h-[calc(100vh-220px)]">
        <div className="flex flex-col gap-5 w-full max-w-5xl">
          {/* Core Capabilities */}
          <div>
            <ModernCard className="p-5 shadow-sm">
              <h3 className="text-xl font-medium mb-4">
                Core Capabilities
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="flex items-start gap-3">
                  <Shield className="h-7 w-7 mt-0.5 flex-shrink-0" style={{ color: modernColors.military }} />
                  <div>
                    <p className="font-semibold text-base mb-1">Secure Verification</p>
                    <p className="text-sm">Immutable blockchain records with tamper-proof history</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Smartphone className="h-7 w-7 mt-0.5 flex-shrink-0" style={{ color: modernColors.crypto }} />
                  <div>
                    <p className="font-semibold text-base mb-1">Mobile-First</p>
                    <p className="text-sm">Simple QR scanning interface with offline capability</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="h-7 w-7 mt-0.5 flex-shrink-0" style={{ color: modernColors.commercial }} />
                  <div>
                    <p className="font-semibold text-base mb-1">Smart Automation</p>
                    <p className="text-sm">Trigger payments and workflows based on supply chain events</p>
                  </div>
                </div>
              </div>
            </ModernCard>
          </div>

          {/* Defense and Commercial Value */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Defense Value */}
            <div>
              <ModernCard className="h-full p-5 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="h-7 w-7" style={{ color: modernColors.military }} />
                  <h3 className="text-xl font-medium">
                    Defense Value
                  </h3>
                </div>
                <div className="mb-4">
                  <ModernBadge color={modernColors.military}>MILITARY-GRADE</ModernBadge>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-2.5 h-2.5 rounded-full mt-1.5 mr-3 flex-shrink-0" style={{ backgroundColor: modernColors.military }}></div>
                    <span className="text-base">Military-grade security with CMMC 2.0 compliance</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2.5 h-2.5 rounded-full mt-1.5 mr-3 flex-shrink-0" style={{ backgroundColor: modernColors.military }}></div>
                    <span className="text-base">Tactical equipment tracking from warehouse to field deployment</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2.5 h-2.5 rounded-full mt-1.5 mr-3 flex-shrink-0" style={{ backgroundColor: modernColors.military }}></div>
                    <span className="text-base">Eliminates paper-based processes with digital chain of custody</span>
                  </li>
                </ul>
              </ModernCard>
            </div>

            {/* Commercial Value */}
            <div>
              <ModernCard className="h-full p-5 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Calculator className="h-7 w-7" style={{ color: modernColors.commercial }} />
                  <h3 className="text-xl font-medium">
                    Commercial Value
                  </h3>
                </div>
                <div className="mb-4">
                  <ModernBadge color={modernColors.commercial}>BUSINESS IMPACT</ModernBadge>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-2.5 h-2.5 rounded-full mt-1.5 mr-3 flex-shrink-0" style={{ backgroundColor: modernColors.commercial }}></div>
                    <span className="text-base">70% reduction in cash conversion cycle</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2.5 h-2.5 rounded-full mt-1.5 mr-3 flex-shrink-0" style={{ backgroundColor: modernColors.commercial }}></div>
                    <span className="text-base">Seamless integration with existing enterprise systems</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2.5 h-2.5 rounded-full mt-1.5 mr-3 flex-shrink-0" style={{ backgroundColor: modernColors.commercial }}></div>
                    <span className="text-base">Immediate settlement using Shell Token payments</span>
                  </li>
                </ul>
              </ModernCard>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide9;