import React from 'react';
import SlideLayout from '@/components/PitchDeck/SlideLayout';
import { 
  ModernCard, 
  ModernBadge,
  ModernDivider,
  modernTypography,
  modernColors
} from '@/components/PitchDeck/ModernSlideStyles';
import { PieChart, BarChart3, Briefcase } from 'lucide-react';

const Slide7: React.FC = () => {
  const TOTAL_SLIDES = 18;

  return (
    <SlideLayout 
      title="Market Opportunity" 
      subtitle="Military and Commercial market analysis for blockchain-powered supply chain verification"
      slideNumber={7} 
      totalSlides={TOTAL_SLIDES}
    >
      <div className="flex flex-col gap-6 mt-8 h-[calc(100vh-200px)]">
        {/* Market Size Analysis */}
        <div className="flex-grow-0">
          <ModernCard className="p-6" style={{
            borderBottom: `3px solid ${modernColors.crypto}`,
            backgroundColor: `${modernColors.crypto}05`
          }}>
            <div className="flex items-center gap-3 mb-4">
              <PieChart className="h-6 w-6" style={{ color: modernColors.crypto }} />
              <h3 className="text-xl font-medium">
                Market Size Analysis
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 rounded-lg shadow-sm" style={{ 
                background: `linear-gradient(100deg, ${modernColors.crypto}10, ${modernColors.crypto}05)` 
              }}>
                <p className="text-2xl font-bold mb-2" style={{ color: modernColors.crypto }}>
                  TAM: $120B
                </p>
                <p className="text-sm">
                  Total Addressable Market - Global blockchain supply chain market
                </p>
              </div>
              <div className="p-4 rounded-lg shadow-sm" style={{ 
                background: `linear-gradient(100deg, ${modernColors.military}10, ${modernColors.military}05, transparent)` 
              }}>
                <p className="text-2xl font-bold mb-2" style={{ color: modernColors.military }}>
                  SAM: $32B
                </p>
                <p className="text-sm">
                  Serviceable Available Market - U.S. <span style={{ color: modernColors.military }}>defense</span> & <span style={{ color: modernColors.commercial }}>enterprise</span> solutions
                </p>
              </div>
              <div className="p-4 rounded-lg shadow-sm" style={{ 
                background: `linear-gradient(100deg, ${modernColors.crypto}10, ${modernColors.crypto}05)` 
              }}>
                <p className="text-2xl font-bold mb-2" style={{ color: modernColors.crypto }}>
                  SOM: $750M
                </p>
                <p className="text-sm">
                  Serviceable Obtainable Market - Initial <span style={{ color: modernColors.military }}>defense</span> & contractor focus
                </p>
              </div>
            </div>
          </ModernCard>
        </div>

        {/* Defense and Commercial Markets */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">
          <div>
            <ModernCard className="h-full p-6 border-t-4" style={{
              borderColor: modernColors.military,
              backgroundColor: `${modernColors.militaryLight}15`
            }}>
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="h-6 w-6" style={{ color: modernColors.military }} />
                <ModernBadge color={modernColors.military} small>
                  DEFENSE MARKET
                </ModernBadge>
              </div>
              <p className="text-base mb-3 font-semibold" style={{ color: modernColors.military }}>
                Market Share: $48B (40%) - CAGR: 5.0% (2023-2028)
              </p>
              <h4 className="text-base font-medium mb-2" style={{ color: modernColors.military }}>
                Target Customers:
              </h4>
              <ul className="mb-4 text-sm space-y-2">
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full mt-1.5 mr-2 flex-shrink-0" style={{ backgroundColor: modernColors.military }}></div>
                  <span>U.S. Army, Navy, Air Force, Marines units</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full mt-1.5 mr-2 flex-shrink-0" style={{ backgroundColor: modernColors.military }}></div>
                  <span>Defense Logistics Agency</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full mt-1.5 mr-2 flex-shrink-0" style={{ backgroundColor: modernColors.military }}></div>
                  <span>Military contractors and suppliers</span>
                </li>
              </ul>
              <h4 className="text-base font-medium mb-2" style={{ color: modernColors.military }}>
                Market Dynamics:
              </h4>
              <ul className="text-sm space-y-2">
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full mt-1.5 mr-2 flex-shrink-0" style={{ backgroundColor: modernColors.military }}></div>
                  <span>New DOGE 8% budget cut requirements</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full mt-1.5 mr-2 flex-shrink-0" style={{ backgroundColor: modernColors.military }}></div>
                  <span>$1.2B+ annual inventory loss pain point</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full mt-1.5 mr-2 flex-shrink-0" style={{ backgroundColor: modernColors.military }}></div>
                  <span>Audit compliance mandates by 2028</span>
                </li>
              </ul>
            </ModernCard>
          </div>

          <div>
            <ModernCard className="h-full p-6 border-t-4" style={{
              borderColor: modernColors.commercial,
              backgroundColor: `${modernColors.commercialLight}15`
            }}>
              <div className="flex items-center gap-3 mb-4">
                <BarChart3 className="h-6 w-6" style={{ color: modernColors.commercial }} />
                <ModernBadge color={modernColors.commercial} small>
                  COMMERCIAL MARKET
                </ModernBadge>
              </div>
              <p className="text-base mb-3 font-semibold" style={{ color: modernColors.commercial }}>
                Market Share: $72B (60%) - CAGR: 9.4% (2023-2028)
              </p>
              <h4 className="text-base font-medium mb-2" style={{ color: modernColors.commercial }}>
                Target Industries:
              </h4>
              <ul className="mb-4 text-sm space-y-2">
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full mt-1.5 mr-2 flex-shrink-0" style={{ backgroundColor: modernColors.commercial }}></div>
                  <span>Aerospace and automotive manufacturing</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full mt-1.5 mr-2 flex-shrink-0" style={{ backgroundColor: modernColors.commercial }}></div>
                  <span>Pharmaceutical supply chains</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full mt-1.5 mr-2 flex-shrink-0" style={{ backgroundColor: modernColors.commercial }}></div>
                  <span>Electronics and high-value components</span>
                </li>
              </ul>
              <h4 className="text-base font-medium mb-2" style={{ color: modernColors.commercial }}>
                Growth Drivers:
              </h4>
              <ul className="text-sm space-y-2">
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full mt-1.5 mr-2 flex-shrink-0" style={{ backgroundColor: modernColors.commercial }}></div>
                  <span>60-90 day payment delays in current chains</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full mt-1.5 mr-2 flex-shrink-0" style={{ backgroundColor: modernColors.commercial }}></div>
                  <span>$950B+ annual inventory inaccuracy costs</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full mt-1.5 mr-2 flex-shrink-0" style={{ backgroundColor: modernColors.commercial }}></div>
                  <span>85% still using manual processes</span>
                </li>
              </ul>
            </ModernCard>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide7;