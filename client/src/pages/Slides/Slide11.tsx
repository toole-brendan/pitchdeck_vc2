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

const Slide11: React.FC = () => {
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
    <SlideLayout title="Business Model & Pricing Strategy" slideNumber={11} totalSlides={TOTAL_SLIDES}>
      <div className="flex flex-col gap-8">
        <div className="text-center max-w-2xl mx-auto mb-2">
          <h2 className={modernTypography.pageTitle}>
            Multi-stream monetization with market-specific value propositions
          </h2>
        </div>

        <div className="mb-6">
          <ModernCard className="p-8">
            <div className="flex items-center gap-4 mb-6">
              <DollarSign className="h-7 w-7" style={{ color: modernColors.military }} />
              <h3 className={modernTypography.heading}>
                Revenue Streams
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
              {revenueStreams.map((stream, index) => (
                <div
                  key={index}
                  className="bg-slate-50/80 backdrop-blur-sm p-5 border border-slate-100 flex flex-col h-full"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div 
                      className="w-8 h-8 flex items-center justify-center rounded-full text-white font-medium text-sm"
                      style={{ backgroundColor: stream.color }}
                    >
                      {stream.letter}
                    </div>
                    <stream.icon className="h-5 w-5" style={{ color: stream.color }} />
                  </div>
                  <p className={modernTypography.body}>{stream.title}</p>
                </div>
              ))}
            </div>
          </ModernCard>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <ModernCard className="h-full p-8">
              <div className="flex items-center gap-4 mb-5">
                <TrendingUp className="h-7 w-7" style={{ color: modernColors.military }} />
                <h3 className={modernTypography.heading}>
                  Market-Specific ROI
                </h3>
              </div>
              
              <div className="space-y-4">
                {marketROI.map((item, index) => (
                  <div key={index} className="p-4 bg-slate-50/80 backdrop-blur-sm border border-slate-100">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                        <span className={modernTypography.label}>{item.market}</span>
                      </div>
                      <span className={`${modernTypography.stats}`} style={{ color: item.color }}>{item.roi}</span>
                    </div>
                    <div className="w-full h-2 bg-slate-200 mt-2 rounded-full overflow-hidden">
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
            <ModernCard className="h-full p-8">
              <div className="flex items-center gap-4 mb-5">
                <BarChart className="h-7 w-7" style={{ color: modernColors.commercial }} />
                <h3 className={modernTypography.heading}>
                  Unit Economics
                </h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className={`${modernTypography.subheading} mb-3`}>Pricing Tiers:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="bg-militaryLight/50 p-4 rounded-md border border-slate-200">
                      <p className={`${modernTypography.label} text-military mb-1`}>Defense</p>
                      <p className={`${modernTypography.heading} text-military`}>$250K - $1M</p>
                    </div>
                    <div className="bg-commercialLight/50 p-4 rounded-md border border-slate-200">
                      <p className={`${modernTypography.label} text-commercial mb-1`}>Commercial</p>
                      <p className={`${modernTypography.heading} text-commercial`}>$75K - $150K</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className={`${modernTypography.subheading} mb-3`}>Key Performance Metrics:</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-slate-50/80 backdrop-blur-sm border border-slate-100 rounded-md">
                      <div className="flex items-center gap-2">
                        <Star className="h-4 w-4" style={{ color: modernColors.military }} />
                        <span className={modernTypography.label}>LTV:CAC Ratio</span>
                      </div>
                      <span className={`${modernTypography.heading}`} style={{ color: modernColors.military }}>10:1</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-slate-50/80 backdrop-blur-sm border border-slate-100 rounded-md">
                      <div className="flex items-center gap-2">
                        <Star className="h-4 w-4" style={{ color: modernColors.military }} />
                        <span className={modernTypography.label}>Gross Margin</span>
                      </div>
                      <span className={`${modernTypography.heading}`} style={{ color: modernColors.military }}>80-85%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-slate-50/80 backdrop-blur-sm border border-slate-100 rounded-md">
                      <div className="flex items-center gap-2">
                        <Star className="h-4 w-4" style={{ color: modernColors.commercial }} />
                        <span className={modernTypography.label}>Net Retention</span>
                      </div>
                      <span className={`${modernTypography.heading}`} style={{ color: modernColors.commercial }}>120%</span>
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

export default Slide11;