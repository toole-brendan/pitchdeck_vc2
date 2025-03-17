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
      <div className="mb-8 text-center">
        <p className={`${modernTypography.subtitle} mb-2 font-medium text-slate-800`}>
          Analysis against enterprise ERP systems and{' '}
          <span style={{ color: modernColors.crypto }}>
            blockchain solutions
          </span>
        </p>
        
        <p className="text-sm text-slate-500 max-w-xl mx-auto">
          Competitive analysis showing HandReceipt's unique position combining military-grade 
          compliance with advanced blockchain capabilities
        </p>
      </div>

      {/* Market Positioning Chart */}
      <div className="mb-8">
        <ModernCard className="p-6">
          <div className="flex items-center gap-4 mb-5">
            <BarChart3 className="h-7 w-7" style={{ color: modernColors.crypto }} />
            <h3 className={modernTypography.heading}>
              Market Positioning
            </h3>
          </div>
          
          {/* SVG Chart - Based on Provided Design */}
          <div className="relative w-full h-[550px] bg-gray-50 rounded-lg mb-2 overflow-visible">
            {/* Grid Lines - Dotted */}
            <div className="absolute top-0 bottom-0 left-1/2 w-px border-l border-dashed border-gray-300"></div>
            <div className="absolute top-1/2 left-0 right-0 h-px border-t border-dashed border-gray-300"></div>
            
            {/* Axis Labels */}
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 text-sm font-bold text-gray-600">
              Blockchain Capability →
            </div>
            <div className="absolute top-1/2 left-4 transform -translate-y-1/2 -rotate-90 text-sm font-bold text-gray-600 origin-left">
              Defense Compliance ↑
            </div>
            
            {/* Quadrant Labels removed */}
            
            {/* Repositioned Competitors to Fill Chart */}
            {/* NetSuite */}
            <div className="absolute" style={{ left: '30%', top: '45%' }}>
              <div className="w-14 h-14 rounded-full bg-blue-400/90 flex items-center justify-center text-white font-bold shadow-sm">
                Ne
              </div>
              <div className="mt-1 text-xs font-medium text-center text-gray-700">NetSuite</div>
            </div>
            
            {/* MS Dynamics */}
            <div className="absolute" style={{ left: '25%', top: '70%' }}>
              <div className="w-14 h-14 rounded-full bg-blue-400/90 flex items-center justify-center text-white font-bold shadow-sm">
                MS
              </div>
              <div className="mt-1 text-xs font-medium text-center text-gray-700">MS Dynamics</div>
            </div>
            
            {/* SAP Ariba */}
            <div className="absolute" style={{ left: '50%', top: '65%' }}>
              <div className="w-14 h-14 rounded-full bg-blue-400/90 flex items-center justify-center text-white font-bold shadow-sm">
                SA
              </div>
              <div className="mt-1 text-xs font-medium text-center text-gray-700">SAP Ariba</div>
            </div>
            
            {/* IBM Blockchain */}
            <div className="absolute" style={{ left: '60%', top: '45%' }}>
              <div className="w-14 h-14 rounded-full bg-blue-400/90 flex items-center justify-center text-white font-bold shadow-sm">
                IB
              </div>
              <div className="mt-1 text-xs font-medium text-center text-gray-700">IBM Blockchain</div>
            </div>
            
            {/* Oracle SCM - Moved Higher */}
            <div className="absolute" style={{ left: '70%', top: '55%' }}>
              <div className="w-14 h-14 rounded-full bg-blue-400/90 flex items-center justify-center text-white font-bold shadow-sm">
                Or
              </div>
              <div className="mt-1 text-xs font-medium text-center text-gray-700">Oracle SCM</div>
            </div>
            
            {/* HandReceipt - Highlighted - Moved to Top Right Corner */}
            <div className="absolute" style={{ left: '80%', top: '25%', zIndex: 10 }}>
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-purple-500/30 w-[70px] h-[70px] -m-[3px]"></div>
                <div className="w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold shadow-md">
                  Ha
                </div>
              </div>
              <div className="mt-1 text-xs font-semibold text-center text-purple-600">HandReceipt</div>
            </div>
          </div>
          
          {/* Caption */}
          <div className="text-xs text-gray-500 max-w-2xl mx-auto text-center mb-4">
            Chart shows relative positioning based on defense compliance capabilities (vertical) 
            and blockchain integration (horizontal).
          </div>
        </ModernCard>
      </div>

      {/* Advantages and Limitations - Enhanced */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Our Advantages */}
        <div>
          <ModernCard className="h-full p-7 shadow-md" style={{
            background: 'rgba(245, 247, 250, 0.7)',
            borderRadius: '0.5rem'
          }}>
            <div className="mb-6">
              <ModernBadge color={modernColors.crypto}>
                OUR ADVANTAGES
              </ModernBadge>
            </div>
            
            <div className="space-y-5 mt-2">
              {advantages.map((advantage, index) => (
                <div
                  key={index}
                  className="flex gap-4 group"
                >
                  <div 
                    className="flex-shrink-0 mt-1 p-2 rounded-md flex items-center justify-center w-10 h-10" 
                    style={{ 
                      backgroundColor: `${advantage.color}30`,
                      color: advantage.color
                    }}
                  >
                    {advantage.icon}
                  </div>
                  <div>
                    <h4 
                      className={`${modernTypography.subheading} mb-1`} 
                      style={{ color: advantage.color }}
                    >
                      {advantage.title}
                    </h4>
                    <p className={`${modernTypography.body} text-sm text-slate-600`}>
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
          <ModernCard className="h-full p-7 shadow-md" style={{
            background: 'rgba(245, 247, 250, 0.7)',
            borderRadius: '0.5rem'
          }}>
            <div className="mb-6">
              <ModernBadge color={modernColors.military}>
                COMPETITOR LIMITATIONS
              </ModernBadge>
            </div>
            
            <div className="space-y-5 mt-2">
              {limitations.map((limitation, index) => (
                <div
                  key={index}
                  className="flex gap-4 group"
                >
                  <div 
                    className="flex-shrink-0 mt-1 p-1.5 rounded-md flex items-center justify-center w-10 h-10"
                    style={{ 
                      backgroundColor: `${limitation.color}20`,
                      color: limitation.color
                    }}
                  >
                    <XCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 
                      className={`${modernTypography.subheading} mb-1`} 
                      style={{ color: limitation.color }}
                    >
                      {limitation.name}
                    </h4>
                    <p className={`${modernTypography.body} text-sm text-slate-600`}>
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
