import React from 'react';
import SlideLayout from '@/components/PitchDeck/SlideLayout';
import { 
  ModernCard, 
  ModernBadge,
  modernTypography, 
  modernColors
} from '@/components/PitchDeck/ModernSlideStyles';
import { 
  DollarSign, 
  TrendingUp, 
  Layers, 
  Database, 
  BarChart, 
  Star, 
  CreditCard, 
  Repeat
} from 'lucide-react';

const Slide12: React.FC = () => {
  const TOTAL_SLIDES = 18;

  // Revenue stream data
  const revenueStreams = [
    { 
      letter: 'S', 
      title: 'Subscription Licenses', 
      icon: CreditCard,
      color: modernColors.military
    },
    { 
      letter: 'T', 
      title: 'Transaction Fees (0.1-0.5% vs traditional 2.5-3.5%)', 
      icon: Repeat,
      color: modernColors.commercial
    },
    { 
      letter: 'D', 
      title: 'Data Analytics Package', 
      icon: Database,
      color: modernColors.military
    },
    { 
      letter: 'A', 
      title: 'API Access Tiers', 
      icon: Layers,
      color: modernColors.commercial
    }
  ];

  // Market ROI data
  const marketROI = [
    { market: 'Defense', roi: '9.7x ROI', color: modernColors.military },
    { market: 'Logistics', roi: '6.2x ROI', color: modernColors.commercial },
    { market: 'Manufacturing', roi: '4.5x ROI', color: modernColors.crypto } // Purple color for manufacturing
  ];

  return (
    <SlideLayout 
      title="Business Model & Pricing Strategy" 
      subtitle="Multi-stream monetization with market-specific value propositions"
      slideNumber={12} 
      totalSlides={TOTAL_SLIDES}
    >
      <div className="flex flex-col gap-4 mt-12">
        <div className="mb-3">
          <ModernCard className="p-4">
            <div className="flex items-center gap-2 mb-3">
              <DollarSign className="h-5 w-5" style={{ color: modernColors.military }} />
              <h3 className={`${modernTypography.heading} text-lg`}>
                Revenue Streams
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
              {revenueStreams.map((stream, index) => (
                <div
                  key={index}
                  className="bg-slate-50/80 backdrop-blur-sm p-3 border border-slate-100 flex flex-col h-full"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <div 
                      className="w-6 h-6 flex items-center justify-center rounded-full text-white font-medium text-xs"
                      style={{ backgroundColor: stream.color }}
                    >
                      {stream.letter}
                    </div>
                    <stream.icon className="h-4 w-4" style={{ color: stream.color }} />
                  </div>
                  <p className="text-xs">{stream.title}</p>
                </div>
              ))}
            </div>
          </ModernCard>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <ModernCard className="h-full p-4">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="h-5 w-5" style={{ color: modernColors.military }} />
                <h3 className={`${modernTypography.heading} text-lg`}>
                  Market-Specific ROI
                </h3>
              </div>
              
              <div className="space-y-2">
                {marketROI.map((item, index) => (
                  <div key={index} className="p-2 bg-slate-50/80 backdrop-blur-sm border border-slate-100">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></div>
                        <span className="text-sm font-medium">{item.market}</span>
                      </div>
                      <span className="text-xl font-thin" style={{ color: item.color }}>{item.roi}</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-200 mt-1 rounded-full overflow-hidden">
                      <div 
                        className="h-full rounded-full"
                        style={{ 
                          backgroundColor: item.color, 
                          width: `${parseFloat(item.roi) * 10}%`,
                          maxWidth: '100%'
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </ModernCard>
          </div>

          <div>
            <ModernCard className="h-full p-4">
              <div className="flex items-center gap-2 mb-3">
                <BarChart className="h-5 w-5" style={{ color: modernColors.commercial }} />
                <h3 className={`${modernTypography.heading} text-lg`}>
                  Unit Economics
                </h3>
              </div>
              
              <div className="space-y-3">
                <div>
                  <h4 className="text-base font-medium mb-2">Pricing Tiers:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div className="bg-militaryLight/50 p-2 rounded-md border border-slate-200">
                      <p className="text-xs font-medium text-military mb-0.5">Defense</p>
                      <p className="text-lg font-extralight text-military">$250K - $1M</p>
                    </div>
                    <div className="bg-commercialLight/50 p-2 rounded-md border border-slate-200">
                      <p className="text-xs font-medium text-commercial mb-0.5">Commercial</p>
                      <p className="text-lg font-extralight text-commercial">$75K - $150K</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-base font-medium mb-2">Key Performance Metrics:</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center p-2 bg-slate-50/80 backdrop-blur-sm border border-slate-100 rounded-md">
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3" style={{ color: modernColors.military }} />
                        <span className="text-xs font-medium">LTV:CAC Ratio</span>
                      </div>
                      <span className="text-base font-medium" style={{ color: modernColors.military }}>10:1</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-slate-50/80 backdrop-blur-sm border border-slate-100 rounded-md">
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3" style={{ color: modernColors.military }} />
                        <span className="text-xs font-medium">Gross Margin</span>
                      </div>
                      <span className="text-base font-medium" style={{ color: modernColors.military }}>80-85%</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-slate-50/80 backdrop-blur-sm border border-slate-100 rounded-md">
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3" style={{ color: modernColors.commercial }} />
                        <span className="text-xs font-medium">Net Retention</span>
                      </div>
                      <span className="text-base font-medium" style={{ color: modernColors.commercial }}>120%</span>
                    </div>
                  </div>
                </div>
              </div>
            </ModernCard>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide12;
