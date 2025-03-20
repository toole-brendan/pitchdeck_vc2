import React from 'react';
import SlideLayout from '@/components/PitchDeck/SlideLayout';
import { 
  ModernCard, 
  ModernDivider,
  ModernSectionHeader,
  ModernBadge,
  modernTypography,
  modernColors
} from '@/components/PitchDeck/ModernSlideStyles';
import { Check, Shield, Laptop, Database } from 'lucide-react';

const Slide4: React.FC = () => {
  const TOTAL_SLIDES = 18;

  return (
    <SlideLayout 
      title="Dual Market Strategy" 
      subtitle="Unified blockchain platform serving both defense and commercial sectors"
      slideNumber={4} 
      totalSlides={TOTAL_SLIDES}
    >
      <div className="flex flex-col gap-6 mt-8 h-[calc(100vh-200px)]">
        {/* Platform Architecture - Top Section */}
        <div className="flex-grow-0">
          <ModernCard className="p-4">
            <ModernSectionHeader className="mb-3 inline-block text-xs">
              PLATFORM ARCHITECTURE
            </ModernSectionHeader>

            <div className="flex flex-col md:flex-row gap-0">
              {/* Defense Platform */}
              <div 
                className="flex-1 border-b md:border-b-0 md:border-r border-slate-200 p-4 flex flex-col justify-center shadow-sm"
                style={{ background: `linear-gradient(180deg, ${modernColors.militaryLight}30 0%, white 100%)` }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-5 h-5" style={{ color: modernColors.military }} />
                  <h3 className={`text-lg font-medium`} style={{ color: modernColors.military }}>
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
                className="flex-1 border-b md:border-b-0 md:border-r border-slate-200 p-4 flex flex-col justify-center shadow-sm"
                style={{ background: `linear-gradient(180deg, ${modernColors.cryptoLight}30 0%, white 100%)` }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Database className="w-5 h-5" style={{ color: modernColors.crypto }} />
                  <h3 className={`text-lg font-medium`} style={{ color: modernColors.crypto }}>
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
                className="flex-1 p-4 flex flex-col justify-center shadow-sm"
                style={{ background: `linear-gradient(180deg, ${modernColors.commercialLight}30 0%, white 100%)` }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Laptop className="w-5 h-5" style={{ color: modernColors.commercial }} />
                  <h3 className={`text-lg font-medium`} style={{ color: modernColors.commercial }}>
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
        </div>

        {/* Market Comparison - Middle Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 flex-grow">
          {/* Defense Market */}
          <div className="flex flex-col h-full">
            <ModernCard className="h-full p-5 flex-1 border-t-3" style={{ 
              borderColor: modernColors.military,
              backgroundColor: `${modernColors.militaryLight}10`
            }}>
              <ModernBadge color={modernColors.military} small className="mb-3">
                DEFENSE MARKET
              </ModernBadge>
              
              <div className="space-y-4 mt-3">
                <div>
                  <h4 className={`text-lg font-medium mb-1`} style={{ color: modernColors.military }}>
                    Lower Implementation Risk
                  </h4>
                  <p className={`text-sm`}>
                    Stable, long-term contracts with predictable revenue
                  </p>
                </div>
                
                <div>
                  <h4 className={`text-lg font-medium mb-1`} style={{ color: modernColors.military }}>
                    High Barriers to Entry
                  </h4>
                  <p className={`text-sm`}>
                    Military expertise creates strong competitive moat
                  </p>
                </div>
              </div>
            </ModernCard>
          </div>

          {/* Commercial Market */}
          <div className="flex flex-col h-full">
            <ModernCard className="h-full p-5 flex-1 border-t-3" style={{ 
              borderColor: modernColors.commercial,
              backgroundColor: `${modernColors.commercialLight}10`
            }}>
              <ModernBadge color={modernColors.commercial} small className="mb-3">
                COMMERCIAL MARKET
              </ModernBadge>
              
              <div className="space-y-4 mt-3">
                <div>
                  <h4 className={`text-lg font-medium mb-1`} style={{ color: modernColors.commercial }}>
                    Higher Growth Potential
                  </h4>
                  <p className={`text-sm`}>
                    Larger addressable market with recurring revenue
                  </p>
                </div>
                
                <div>
                  <h4 className={`text-lg font-medium mb-1`} style={{ color: modernColors.commercial }}>
                    Transaction Fee Upside
                  </h4>
                  <p className={`text-sm`}>
                    Exponential revenue growth through <span style={{ color: modernColors.crypto }}>Shell token</span> payments
                  </p>
                </div>
              </div>
            </ModernCard>
          </div>
        </div>

        {/* Strategic Advantages - Bottom Section */}
        <div className="flex-grow-0">
          <ModernCard className="p-4 shadow-lg" style={{ 
            background: 'linear-gradient(135deg, rgba(219, 234, 254, 0.2), rgba(255, 237, 213, 0.2))'
          }}>
            <ModernBadge color={modernColors.crypto} small className="mb-3">
              STRATEGIC ADVANTAGES
            </ModernBadge>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
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
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide4;