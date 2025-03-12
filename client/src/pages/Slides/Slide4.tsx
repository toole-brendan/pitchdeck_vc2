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
  const TOTAL_SLIDES = 17;

  return (
    <SlideLayout title="Dual Market Strategy" slideNumber={4} totalSlides={TOTAL_SLIDES}>
      <div className="max-w-5xl mx-auto">
        {/* Platform Architecture - Top Section */}
        <div className="mb-8">
          <ModernSectionHeader className="mb-4 inline-block">
            PLATFORM ARCHITECTURE
          </ModernSectionHeader>

          <div className="flex flex-col md:flex-row gap-0 mt-4">
            {/* Defense Platform */}
            <div 
              className="flex-1 border-b md:border-b-0 md:border-r border-slate-200 p-5 flex flex-col justify-center shadow-sm"
              style={{ background: `linear-gradient(180deg, ${modernColors.militaryLight}30 0%, white 100%)` }}
            >
              <div className="flex items-center gap-2 mb-3">
                <Shield className="w-5 h-5" style={{ color: modernColors.military }} />
                <h3 className={`${modernTypography.subheading}`} style={{ color: modernColors.military }}>
                  Defense Platform
                </h3>
              </div>
              <ul className={`space-y-2 pl-7 ${modernTypography.body}`}>
                <li className="text-slate-700 text-sm">Military-grade encryption</li>
                <li className="text-slate-700 text-sm">Secure authentication</li>
                <li className="text-slate-700 text-sm">Robust chain of custody</li>
              </ul>
            </div>

            {/* Shared Core */}
            <div 
              className="flex-1 border-b md:border-b-0 md:border-r border-slate-200 p-5 flex flex-col justify-center shadow-sm"
              style={{ background: `linear-gradient(180deg, ${modernColors.cryptoLight}30 0%, white 100%)` }}
            >
              <div className="flex items-center gap-2 mb-3">
                <Database className="w-5 h-5" style={{ color: modernColors.crypto }} />
                <h3 className={`${modernTypography.subheading}`} style={{ color: modernColors.crypto }}>
                  Shared Infrastructure
                </h3>
              </div>
              <ul className={`space-y-2 pl-7 ${modernTypography.body}`}>
                <li className="text-slate-700 text-sm">Smart contracts</li>
                <li className="text-slate-700 text-sm">Distributed ledger</li>
                <li className="text-slate-700 text-sm">Immutable records</li>
                <li className="text-slate-700 text-sm">Asset tracking</li>
              </ul>
            </div>

            {/* Commercial Platform */}
            <div 
              className="flex-1 p-5 flex flex-col justify-center shadow-sm"
              style={{ background: `linear-gradient(180deg, ${modernColors.commercialLight}30 0%, white 100%)` }}
            >
              <div className="flex items-center gap-2 mb-3">
                <Laptop className="w-5 h-5" style={{ color: modernColors.commercial }} />
                <h3 className={`${modernTypography.subheading}`} style={{ color: modernColors.commercial }}>
                  Commercial Platform
                </h3>
              </div>
              <ul className={`space-y-2 pl-7 ${modernTypography.body}`}>
                <li className="text-slate-700 text-sm">Payment processing</li>
                <li className="text-slate-700 text-sm">Supply chain tracking</li>
                <li className="text-slate-700 text-sm">Vendor management</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Market Comparison - Middle Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Defense Market */}
          <div className="flex flex-col h-full">
            <ModernCard className="h-full p-8 flex-1 border-t-4" style={{ 
              borderColor: modernColors.military,
              backgroundColor: `${modernColors.militaryLight}10`
            }}>
              <ModernBadge color={modernColors.military} className="mb-4">
                DEFENSE MARKET
              </ModernBadge>
              
              <div className="space-y-5 mt-4">
                <div>
                  <h4 className={`${modernTypography.subheading} mb-1`} style={{ color: modernColors.military }}>
                    Lower Implementation Risk
                  </h4>
                  <p className={`${modernTypography.body} text-sm`}>
                    Stable, long-term contracts with predictable revenue
                  </p>
                </div>
                
                <div>
                  <h4 className={`${modernTypography.subheading} mb-1`} style={{ color: modernColors.military }}>
                    High Barriers to Entry
                  </h4>
                  <p className={`${modernTypography.body} text-sm`}>
                    Military expertise creates strong competitive moat
                  </p>
                </div>
              </div>
            </ModernCard>
          </div>

          {/* Commercial Market */}
          <div className="flex flex-col h-full">
            <ModernCard className="h-full p-8 flex-1 border-t-4" style={{ 
              borderColor: modernColors.commercial,
              backgroundColor: `${modernColors.commercialLight}10`
            }}>
              <ModernBadge color={modernColors.commercial} className="mb-4">
                COMMERCIAL MARKET
              </ModernBadge>
              
              <div className="space-y-5 mt-4">
                <div>
                  <h4 className={`${modernTypography.subheading} mb-1`} style={{ color: modernColors.commercial }}>
                    Higher Growth Potential
                  </h4>
                  <p className={`${modernTypography.body} text-sm`}>
                    Larger addressable market with recurring revenue
                  </p>
                </div>
                
                <div>
                  <h4 className={`${modernTypography.subheading} mb-1`} style={{ color: modernColors.commercial }}>
                    Transaction Fee Upside
                  </h4>
                  <p className={`${modernTypography.body} text-sm`}>
                    Exponential revenue growth through <span style={{ color: modernColors.crypto }}>Shell token</span> payments
                  </p>
                </div>
              </div>
            </ModernCard>
          </div>
        </div>

        {/* Strategic Advantages - Bottom Section */}
        <div className="flex flex-col h-full">
          <ModernCard className="p-8 flex-1" style={{ 
            background: 'linear-gradient(135deg, rgba(219, 234, 254, 0.15), rgba(255, 237, 213, 0.15))'
          }}>
            <ModernBadge color={modernColors.crypto} className="mb-4">
              STRATEGIC ADVANTAGES
            </ModernBadge>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 mt-1 shrink-0" style={{ color: modernColors.crypto }} />
                <p className={`${modernTypography.body} text-sm`}>
                  Shared infrastructure reduces development and maintenance costs
                </p>
              </div>
              
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 mt-1 shrink-0" style={{ color: modernColors.military }} />
                <p className={`${modernTypography.body} text-sm`}>
                  <span style={{ color: modernColors.military }}>Military-grade security</span> enhances commercial offering credibility
                </p>
              </div>
              
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 mt-1 shrink-0" style={{ color: modernColors.commercial }} />
                <p className={`${modernTypography.body} text-sm`}>
                  Dual revenue streams provide stability through market cycles
                </p>
              </div>
              
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 mt-1 shrink-0" style={{ color: modernColors.accent }} />
                <p className={`${modernTypography.body} text-sm`}>
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