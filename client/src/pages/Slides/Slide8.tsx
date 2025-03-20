import React from 'react';
import SlideLayout from '@/components/PitchDeck/SlideLayout';
import { 
  ModernCard,
  ModernBadge,
  modernTypography, 
  modernColors
} from '@/components/PitchDeck/ModernSlideStyles';
import { BarChart3, Shield, Fingerprint, Zap, LayoutGrid, XCircle } from 'lucide-react';

const Slide8: React.FC = () => {
  const TOTAL_SLIDES = 18;

  // Competitors for positioning chart
  const competitors = [
    { 
      name: 'HandReceipt', 
      defenseCompliance: 85, 
      blockchainCapability: 90,
      color: modernColors.crypto
    },
    { 
      name: 'SAP Ariba', 
      defenseCompliance: 35, 
      blockchainCapability: 50,
      color: '#4A6FA5'
    },
    { 
      name: 'Oracle SCM', 
      defenseCompliance: 55, 
      blockchainCapability: 80,
      color: '#C74634'
    },
    { 
      name: 'MS Dynamics', 
      defenseCompliance: 30, 
      blockchainCapability: 40,
      color: '#7FBA00'
    },
    { 
      name: 'NetSuite', 
      defenseCompliance: 75, 
      blockchainCapability: 35,
      color: '#1B9ED6'
    },
    { 
      name: 'IBM Blockchain', 
      defenseCompliance: 70, 
      blockchainCapability: 70,
      color: '#1F70C1'
    }
  ];

  // Advantages with icons
  const advantages = [
    {
      title: 'Military-Grade Security',
      description: 'Defense-level encryption and access controls brought to commercial applications',
      icon: <Shield className="h-4 w-4" />,
      color: modernColors.military
    },
    {
      title: 'Built-in Oracle System',
      description: 'Direct integration between physical supply chain events and blockchain validation',
      icon: <Fingerprint className="h-4 w-4" />,
      color: modernColors.crypto
    },
    {
      title: 'Shell Token Settlement',
      description: 'Immediate payment settlement eliminating 60-90 day delays in traditional supply chains',
      icon: <Zap className="h-4 w-4" />,
      color: modernColors.crypto
    },
    {
      title: 'Cross-Domain Support',
      description: 'Seamless operation across both defense and commercial environments',
      icon: <LayoutGrid className="h-4 w-4" />,
      color: modernColors.commercial
    }
  ];

  // Competitor limitations
  const limitations = [
    {
      name: 'SAP Ariba',
      limitation: 'Average $2M+ implementation cost',
      color: '#4A6FA5'
    },
    {
      name: 'Oracle SCM',
      limitation: 'High cost of ownership, limited blockchain integration',
      color: '#C74634'
    },
    {
      name: 'MS Dynamics',
      limitation: 'Limited supply chain verification features',
      color: '#7FBA00'
    },
    {
      name: 'NetSuite SCM',
      limitation: 'Limited military/defense capabilities',
      color: '#1B9ED6'
    }
  ];

  return (
    <SlideLayout 
      title="Competitive Landscape" 
      subtitle="Analysis against enterprise ERP systems and blockchain solutions"
      slideNumber={8} 
      totalSlides={TOTAL_SLIDES}
    >
      <div className="mt-6">
        {/* Market Positioning Chart - More compact */}
        <div className="mb-4">
          <ModernCard className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <BarChart3 className="h-5 w-5" style={{ color: modernColors.crypto }} />
              <h3 className={`${modernTypography.heading} text-lg`}>
                Market Positioning
              </h3>
            </div>
            
            {/* SVG Chart - More compact */}
            <div className="relative w-full h-[325px] bg-gray-50 rounded-lg mb-1 overflow-visible">
              {/* Grid Lines - Dotted */}
              <div className="absolute top-0 bottom-0 left-1/2 w-px border-l border-dashed border-gray-300"></div>
              <div className="absolute top-1/2 left-0 right-0 h-px border-t border-dashed border-gray-300"></div>
              
              {/* Axis Labels */}
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-xs font-bold text-gray-600">
                Blockchain Capability →
              </div>
              <div className="absolute top-1/2 left-2 transform -translate-y-1/2 -rotate-90 text-xs font-bold text-gray-600 origin-left">
                Defense Compliance ↑
              </div>
              
              {/* Repositioned Competitors with smaller bubbles */}
              {/* NetSuite */}
              <div className="absolute" style={{ left: '30%', top: '45%' }}>
                <div className="w-10 h-10 rounded-full bg-blue-400/90 flex items-center justify-center text-white font-bold shadow-sm text-xs">
                  Ne
                </div>
                <div className="mt-1 text-[10px] font-medium text-center text-gray-700">NetSuite</div>
              </div>
              
              {/* MS Dynamics */}
              <div className="absolute" style={{ left: '25%', top: '70%' }}>
                <div className="w-10 h-10 rounded-full bg-blue-400/90 flex items-center justify-center text-white font-bold shadow-sm text-xs">
                  MS
                </div>
                <div className="mt-1 text-[10px] font-medium text-center text-gray-700">MS Dynamics</div>
              </div>
              
              {/* SAP Ariba */}
              <div className="absolute" style={{ left: '50%', top: '65%' }}>
                <div className="w-10 h-10 rounded-full bg-blue-400/90 flex items-center justify-center text-white font-bold shadow-sm text-xs">
                  SA
                </div>
                <div className="mt-1 text-[10px] font-medium text-center text-gray-700">SAP Ariba</div>
              </div>
              
              {/* IBM Blockchain */}
              <div className="absolute" style={{ left: '60%', top: '45%' }}>
                <div className="w-10 h-10 rounded-full bg-blue-400/90 flex items-center justify-center text-white font-bold shadow-sm text-xs">
                  IB
                </div>
                <div className="mt-1 text-[10px] font-medium text-center text-gray-700">IBM Blockchain</div>
              </div>
              
              {/* Oracle SCM */}
              <div className="absolute" style={{ left: '70%', top: '55%' }}>
                <div className="w-10 h-10 rounded-full bg-blue-400/90 flex items-center justify-center text-white font-bold shadow-sm text-xs">
                  Or
                </div>
                <div className="mt-1 text-[10px] font-medium text-center text-gray-700">Oracle SCM</div>
              </div>
              
              {/* HandReceipt - Highlighted */}
              <div className="absolute" style={{ left: '80%', top: '25%', zIndex: 10 }}>
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-purple-500/30 w-[50px] h-[50px] -m-[3px]"></div>
                  <div className="w-11 h-11 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold shadow-md text-xs">
                    Ha
                  </div>
                </div>
                <div className="mt-1 text-[10px] font-semibold text-center text-purple-600">HandReceipt</div>
              </div>
            </div>
            
            {/* Caption - smaller */}
            <div className="text-[10px] text-gray-500 max-w-2xl mx-auto text-center">
              Chart shows relative positioning based on defense compliance capabilities (vertical) 
              and blockchain integration (horizontal).
            </div>
          </ModernCard>
        </div>

        {/* Advantages and Limitations - More compact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {/* Our Advantages */}
          <div>
            <ModernCard className="h-full p-3 shadow-md" style={{
              background: 'rgba(245, 247, 250, 0.7)',
              borderRadius: '0.5rem'
            }}>
              <div className="mb-3">
                <ModernBadge color={modernColors.crypto} small>
                  OUR ADVANTAGES
                </ModernBadge>
              </div>
              
              <div className="space-y-2">
                {advantages.map((advantage, index) => (
                  <div
                    key={index}
                    className="flex gap-2 group"
                  >
                    <div 
                      className="flex-shrink-0 mt-1 p-1.5 rounded-md flex items-center justify-center w-7 h-7" 
                      style={{ 
                        backgroundColor: `${advantage.color}30`,
                        color: advantage.color
                      }}
                    >
                      {advantage.icon}
                    </div>
                    <div>
                      <h4 
                        className={`text-sm font-medium mb-0.5`} 
                        style={{ color: advantage.color }}
                      >
                        {advantage.title}
                      </h4>
                      <p className={`text-xs text-slate-600`}>
                        {advantage.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ModernCard>
          </div>
          
          {/* Competitor Limitations */}
          <div>
            <ModernCard className="h-full p-3" style={{
              background: 'rgba(245, 247, 250, 0.7)',
              borderRadius: '0.5rem'
            }}>
              <div className="mb-3">
                <ModernBadge color="#F43F5E" small>
                  COMPETITOR LIMITATIONS
                </ModernBadge>
              </div>
              
              <div className="space-y-2">
                {limitations.map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div 
                      className="flex-shrink-0 p-1 rounded-full mt-0.5"
                      style={{ backgroundColor: item.color }}
                    >
                      <XCircle className="h-3.5 w-3.5 text-white" />
                    </div>
                    <div>
                      <h4 className={`text-sm font-medium mb-0.5`} style={{ color: item.color }}>
                        {item.name}
                      </h4>
                      <p className="text-xs text-slate-600">
                        {item.limitation}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ModernCard>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide8;
