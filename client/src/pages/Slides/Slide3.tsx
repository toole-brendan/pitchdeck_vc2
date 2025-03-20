import React from 'react';
import SlideLayout from '@/components/PitchDeck/SlideLayout';
import { 
  ModernCard, 
  ModernBadge,
  ModernDivider,
  modernTypography, 
  modernColors
} from '@/components/PitchDeck/ModernSlideStyles';
import { FileWarning, ShieldAlert, DollarSign, Building } from 'lucide-react';

const Slide3: React.FC = () => {
  const TOTAL_SLIDES = 18;

  return (
    <SlideLayout 
      title="Supply Chain Challenges" 
      subtitle="Current pain points driving the need for blockchain solutions"
      slideNumber={3} 
      totalSlides={TOTAL_SLIDES}
    >
      <div className="flex flex-col items-center justify-center h-[calc(100vh-220px)]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
          {/* Military Sector */}
          <div>
            <ModernCard className={`p-5 border-t-4 flex flex-col`} style={{ 
              borderColor: modernColors.military,
              backgroundColor: `${modernColors.militaryLight}10`
            }}>
              <div className="flex items-center mb-3">
                <Building className="h-5 w-5 mr-2" style={{ color: modernColors.military }} />
                <ModernBadge color={modernColors.military} small>Military Sector</ModernBadge>
              </div>
              
              <ul className="space-y-3 mb-4">
                <li className="flex items-start">
                  <FileWarning className="h-4 w-4 mt-0.5 mr-2 flex-shrink-0" style={{ color: modernColors.military }} />
                  <div>
                    <p className={`${modernTypography.body} font-medium text-sm`} style={{ color: modernColors.military }}>Paper-Based Accountability</p>
                    <p className={`${modernTypography.body} text-xs`}>
                      Hand receipts and equipment tracking rely on physical paperwork prone to loss
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <ShieldAlert className="h-4 w-4 mt-0.5 mr-2 flex-shrink-0" style={{ color: modernColors.military }} />
                  <div>
                    <p className={`${modernTypography.body} font-medium text-sm`} style={{ color: modernColors.military }}>Verification Gaps</p>
                    <p className={`${modernTypography.body} text-xs`}>
                      Limited ability to verify equipment origin and maintenance history
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <FileWarning className="h-4 w-4 mt-0.5 mr-2 flex-shrink-0" style={{ color: modernColors.military }} />
                  <div>
                    <p className={`${modernTypography.body} font-medium text-sm`} style={{ color: modernColors.military }}>Antiquated Systems</p>
                    <p className={`${modernTypography.body} text-xs`}>
                      Legacy database systems lack interoperability, creating information silos
                    </p>
                  </div>
                </li>
              </ul>
              
              <ModernDivider className="mb-3" />
              
              <div className="p-2 rounded-md flex items-center justify-between" style={{ backgroundColor: modernColors.militaryLight }}>
                <p className={`${modernTypography.body} font-medium text-xs`}>Annual Inventory Loss</p>
                <p className={`text-lg font-bold`} style={{ color: modernColors.military }}>$1.2B+</p>
              </div>
            </ModernCard>
          </div>

          {/* Commercial Sector */}
          <div>
            <ModernCard className={`p-5 border-t-4 flex flex-col`} style={{ 
              borderColor: modernColors.commercial,
              backgroundColor: `${modernColors.commercialLight}10`
            }}>
              <div className="flex items-center mb-3">
                <DollarSign className="h-5 w-5 mr-2" style={{ color: modernColors.commercial }} />
                <ModernBadge color={modernColors.commercial} small>Commercial Sector</ModernBadge>
              </div>
              
              <ul className="space-y-3 mb-4">
                <li className="flex items-start">
                  <ShieldAlert className="h-4 w-4 mt-0.5 mr-2 flex-shrink-0" style={{ color: modernColors.commercial }} />
                  <div>
                    <p className={`${modernTypography.body} font-medium text-sm`} style={{ color: modernColors.commercial }}>Counterfeiting & Fraud</p>
                    <p className={`${modernTypography.body} text-xs`}>
                      Counterfeit products create significant financial and reputational damage
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <FileWarning className="h-4 w-4 mt-0.5 mr-2 flex-shrink-0" style={{ color: modernColors.commercial }} />
                  <div>
                    <p className={`${modernTypography.body} font-medium text-sm`} style={{ color: modernColors.commercial }}>Lack of Transparency</p>
                    <p className={`${modernTypography.body} text-xs`}>
                      Limited visibility into supply chain origins and handling
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <ShieldAlert className="h-4 w-4 mt-0.5 mr-2 flex-shrink-0" style={{ color: modernColors.commercial }} />
                  <div>
                    <p className={`${modernTypography.body} font-medium text-sm`} style={{ color: modernColors.commercial }}>Compliance Challenges</p>
                    <p className={`${modernTypography.body} text-xs`}>
                      Difficulty proving regulatory compliance across global supply chains
                    </p>
                  </div>
                </li>
              </ul>
              
              <ModernDivider className="mb-3" />
              
              <div className="p-2 rounded-md flex items-center justify-between" style={{ backgroundColor: modernColors.commercialLight }}>
                <p className={`${modernTypography.body} font-medium text-xs`}>Estimated Global Impact</p>
                <p className={`text-lg font-bold`} style={{ color: modernColors.commercial }}>$950B+</p>
              </div>
            </ModernCard>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide3;
