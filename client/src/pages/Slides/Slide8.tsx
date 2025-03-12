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
      color: modernColors.accent
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
      icon: <Shield className="h-5 w-5" />,
      color: modernColors.military
    },
    {
      title: 'Built-in Oracle System',
      description: 'Direct integration between physical supply chain events and blockchain validation',
      icon: <Fingerprint className="h-5 w-5" />,
      color: modernColors.crypto
    },
    {
      title: 'Shell Token Settlement',
      description: 'Immediate payment settlement eliminating 60-90 day delays in traditional supply chains',
      icon: <Zap className="h-5 w-5" />,
      color: modernColors.crypto
    },
    {
      title: 'Cross-Domain Support',
      description: 'Seamless operation across both defense and commercial environments',
      icon: <LayoutGrid className="h-5 w-5" />,
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
    <SlideLayout title="Competitive Landscape" slideNumber={8} totalSlides={TOTAL_SLIDES}>
      <div className="mb-6 text-center">
        <p className={`${modernTypography.subtitle} mb-4`}>
          Analysis against enterprise ERP systems and <span style={{ color: modernColors.crypto }}>blockchain solutions</span>
        </p>
      </div>

      {/* Market Positioning Chart */}
      <div className="mb-8">
        <ModernCard className="p-6">
          <div className="flex items-center gap-4 mb-5">
            <BarChart3 className="h-7 w-7" style={{ color: modernColors.accent }} />
            <h3 className={modernTypography.heading}>
              Market Positioning
            </h3>
          </div>
          
          {/* Competitor Positioning Chart */}
          <div className="relative w-full h-80 border border-slate-200 bg-white/80 mb-4">
            {/* Quadrant Labels */}
            <div className="absolute top-2 left-2 text-xs text-black">Traditional ERP Systems</div>
            <div className="absolute top-2 right-2 text-xs text-black">Blockchain Platforms</div>
            <div className="absolute bottom-2 left-2 text-xs text-black">Defense Solutions</div>
            <div className="absolute bottom-2 right-2 text-xs text-black">Integrated Solutions</div>
            
            {/* Axis Labels */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-sm font-medium text-black">
              Blockchain Capability →
            </div>
            <div className="absolute top-1/2 -left-20 transform -translate-y-1/2 -rotate-90 text-sm font-medium text-black">
              Defense Compliance →
            </div>
            
            {/* Axes Lines */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-slate-300"></div>
            <div className="absolute top-0 bottom-0 left-1/2 w-px bg-slate-300"></div>
            
            {/* Plot Competitors */}
            {competitors.map((competitor, index) => {
              // Calculate positions (0-100 scale to position within chart)
              const left = `${competitor.blockchainCapability}%`;
              const bottom = `${competitor.defenseCompliance}%`;
              
              return (
                <div
                  key={index}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2"
                  style={{ 
                    left, 
                    bottom,
                    zIndex: competitor.name === 'HandReceipt' ? 10 : 5
                  }}
                >
                  {/* Competitor Dot */}
                  <div 
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-white text-xs font-medium
                               shadow-md ${competitor.name === 'HandReceipt' ? 'ring-2 ring-offset-2 ring-blue-500' : ''}`}
                    style={{ 
                      backgroundColor: competitor.color
                    }}
                  >
                    {competitor.name.slice(0, 2)}
                  </div>
                  
                  {/* Competitor Name Label */}
                  <div 
                    className="mt-1 text-[10px] font-medium px-1 py-0.5 rounded whitespace-nowrap"
                    style={{
                      backgroundColor: competitor.name === 'HandReceipt' ? `${modernColors.accent}30` : 'transparent',
                      color: competitor.name === 'HandReceipt' ? modernColors.accent : '#000000'
                    }}
                  >
                    {competitor.name}
                  </div>
                </div>
              );
            })}
          </div>
        </ModernCard>
      </div>

      {/* Advantages and Limitations */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Our Advantages */}
        <div>
          <ModernCard className="h-full p-6" style={{
            borderTop: `2px solid ${modernColors.military}`,
            borderBottom: `2px solid ${modernColors.commercial}`,
            background: 'linear-gradient(135deg, rgba(219, 234, 254, 0.1), rgba(255, 237, 213, 0.1))'
          }}>
            <ModernBadge color={modernColors.accent} className="mb-4">
              OUR ADVANTAGES
            </ModernBadge>
            
            <div className="space-y-4 mt-2">
              {advantages.map((advantage, index) => (
                <div
                  key={index}
                  className="flex gap-3"
                >
                  <div className="flex-shrink-0 mt-1 p-1 rounded-sm" style={{ color: advantage.color }}>
                    {advantage.icon}
                  </div>
                  <div>
                    <h4 className={`${modernTypography.subheading} mb-1`} style={{ color: advantage.color }}>
                      {advantage.title}
                    </h4>
                    <p className={`${modernTypography.body} text-sm`}>
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
          <ModernCard className="h-full p-6" style={{
            borderTop: `2px solid ${modernColors.military}`,
            background: 'linear-gradient(135deg, rgba(240, 240, 240, 0.2), rgba(250, 250, 250, 0.1))'
          }}>
            <ModernBadge color={modernColors.military} className="mb-4">
              COMPETITOR LIMITATIONS
            </ModernBadge>
            
            <div className="space-y-4 mt-2">
              {limitations.map((limitation, index) => (
                <div
                  key={index}
                  className="flex gap-3"
                >
                  <div className="flex-shrink-0 mt-1">
                    <XCircle className="h-5 w-5" style={{ color: limitation.color }} />
                  </div>
                  <div>
                    <h4 className={`${modernTypography.subheading} mb-1`} style={{ color: limitation.color }}>
                      {limitation.name}
                    </h4>
                    <p className={`${modernTypography.body} text-sm`}>
                      {limitation.limitation}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ModernCard>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide8;