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
    <SlideLayout title="Supply Chain Challenges" slideNumber={3} totalSlides={TOTAL_SLIDES}>
      <div className="mb-6 text-center max-w-3xl mx-auto">
        <h2 className={`${modernTypography.heading} mb-4`} style={{ color: modernColors.text }}>
          Current pain points driving the need for <span style={{ color: modernColors.crypto }}>blockchain solutions</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Military Sector */}
        <div className="flex flex-col h-full">
          <ModernCard className={`h-full p-8 flex-1 border-t-4`} style={{ 
            borderColor: modernColors.military,
            backgroundColor: `${modernColors.militaryLight}10`
          }}>
            <div className="flex items-center mb-4">
              <Building className="h-5 w-5 mr-2" style={{ color: modernColors.military }} />
              <ModernBadge color={modernColors.military}>Military Sector</ModernBadge>
            </div>
            
            <ul className="space-y-4 mt-6">
              <li className="flex items-start">
                <FileWarning className="h-5 w-5 mt-1 mr-3 flex-shrink-0" style={{ color: modernColors.military }} />
                <div>
                  <p className={`${modernTypography.body} font-medium`} style={{ color: modernColors.military }}>Paper-Based Accountability</p>
                  <p className={`${modernTypography.body} text-sm`}>
                    Hand receipts and equipment tracking rely on physical paperwork prone to loss
                  </p>
                </div>
              </li>
              
              <li className="flex items-start">
                <ShieldAlert className="h-5 w-5 mt-1 mr-3 flex-shrink-0" style={{ color: modernColors.military }} />
                <div>
                  <p className={`${modernTypography.body} font-medium`} style={{ color: modernColors.military }}>Verification Gaps</p>
                  <p className={`${modernTypography.body} text-sm`}>
                    Limited ability to verify equipment origin and maintenance history
                  </p>
                </div>
              </li>
              
              <li className="flex items-start">
                <FileWarning className="h-5 w-5 mt-1 mr-3 flex-shrink-0" style={{ color: modernColors.military }} />
                <div>
                  <p className={`${modernTypography.body} font-medium`} style={{ color: modernColors.military }}>Antiquated Systems</p>
                  <p className={`${modernTypography.body} text-sm`}>
                    Legacy database systems lack interoperability, creating information silos
                  </p>
                </div>
              </li>
            </ul>
            
            <ModernDivider className="my-5" />
            
            <div className="p-4 rounded-md flex items-center justify-between" style={{ backgroundColor: modernColors.militaryLight }}>
              <p className={`${modernTypography.body} font-medium`}>Annual Inventory Loss</p>
              <p className={`${modernTypography.stats}`} style={{ color: modernColors.military }}>$1.2B+</p>
            </div>
          </ModernCard>
        </div>

        {/* Commercial Sector */}
        <div className="flex flex-col h-full">
          <ModernCard className={`h-full p-8 flex-1 border-t-4`} style={{ 
            borderColor: modernColors.commercial,
            backgroundColor: `${modernColors.commercialLight}10`
          }}>
            <div className="flex items-center mb-4">
              <DollarSign className="h-5 w-5 mr-2" style={{ color: modernColors.commercial }} />
              <ModernBadge color={modernColors.commercial}>Commercial Sector</ModernBadge>
            </div>
            
            <ul className="space-y-4 mt-6">
              <li className="flex items-start">
                <ShieldAlert className="h-5 w-5 mt-1 mr-3 flex-shrink-0" style={{ color: modernColors.commercial }} />
                <div>
                  <p className={`${modernTypography.body} font-medium`} style={{ color: modernColors.commercial }}>Counterfeiting & Fraud</p>
                  <p className={`${modernTypography.body} text-sm`}>
                    Counterfeit products create significant financial and reputational damage
                  </p>
                </div>
              </li>
              
              <li className="flex items-start">
                <FileWarning className="h-5 w-5 mt-1 mr-3 flex-shrink-0" style={{ color: modernColors.commercial }} />
                <div>
                  <p className={`${modernTypography.body} font-medium`} style={{ color: modernColors.commercial }}>Lack of Transparency</p>
                  <p className={`${modernTypography.body} text-sm`}>
                    Limited visibility into supply chain origins and handling
                  </p>
                </div>
              </li>
              
              <li className="flex items-start">
                <ShieldAlert className="h-5 w-5 mt-1 mr-3 flex-shrink-0" style={{ color: modernColors.commercial }} />
                <div>
                  <p className={`${modernTypography.body} font-medium`} style={{ color: modernColors.commercial }}>Compliance Challenges</p>
                  <p className={`${modernTypography.body} text-sm`}>
                    Difficulty proving regulatory compliance across global supply chains
                  </p>
                </div>
              </li>
            </ul>
            
            <ModernDivider className="my-5" />
            
            <div className="p-4 rounded-md flex items-center justify-between" style={{ backgroundColor: modernColors.commercialLight }}>
              <p className={`${modernTypography.body} font-medium`}>Estimated Global Impact</p>
              <p className={`${modernTypography.stats}`} style={{ color: modernColors.commercial }}>$950B+</p>
            </div>
          </ModernCard>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide3;
