import React from 'react';
import SlideLayout from '@/components/PitchDeck/SlideLayout';
import { 
  ModernCard, 
  ModernBadge,
  modernTypography, 
  modernColors,
  fadeInUpVariants,
  itemFadeInUpVariant
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
import { useIsMobile } from '@/hooks/use-mobile';
import { motion } from 'framer-motion';

const Slide12: React.FC = () => {
  const TOTAL_SLIDES = 18;
  const isMobile = useIsMobile();

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
      <motion.div 
        className={`flex flex-col gap-3 md:gap-4 ${isMobile ? 'mt-4' : 'mt-12'}`}
        style={{ paddingBottom: isMobile ? '60px' : '0' }}
        variants={fadeInUpVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="mb-2 md:mb-3" variants={itemFadeInUpVariant} custom={0}>
          <ModernCard className={`p-3 md:p-4 ${isMobile ? 'max-w-[95%] mx-auto' : ''}`}>
            <div className="flex items-center gap-2 mb-2 md:mb-3">
              <DollarSign className={`${isMobile ? 'h-4 w-4' : 'h-5 w-5'}`} style={{ color: modernColors.military }} />
              <h3 className={`${modernTypography.heading} ${isMobile ? 'text-base' : 'text-lg'}`}>
                Revenue Streams
              </h3>
            </div>
            
            <div className={`grid ${isMobile ? 'grid-cols-2 gap-2' : 'grid-cols-1 md:grid-cols-4 gap-3'}`}>
              {revenueStreams.map((stream, index) => (
                <motion.div
                  key={index}
                  className="bg-slate-50/80 backdrop-blur-sm p-2 md:p-3 border border-slate-100 flex flex-col h-full"
                  variants={itemFadeInUpVariant}
                  custom={index + 1}
                >
                  <div className="flex items-center gap-1 md:gap-2 mb-1">
                    <div 
                      className={`${isMobile ? 'w-5 h-5' : 'w-6 h-6'} flex items-center justify-center rounded-full text-white font-medium text-xs`}
                      style={{ backgroundColor: stream.color }}
                    >
                      {stream.letter}
                    </div>
                    <stream.icon className={`${isMobile ? 'h-3.5 w-3.5' : 'h-4 w-4'}`} style={{ color: stream.color }} />
                  </div>
                  <p className={`${isMobile ? 'text-[10px]' : 'text-xs'}`}>{stream.title}</p>
                </motion.div>
              ))}
            </div>
          </ModernCard>
        </motion.div>

        <div className={`grid grid-cols-1 ${isMobile ? 'gap-3' : 'md:grid-cols-2 gap-4'}`}>
          <motion.div variants={itemFadeInUpVariant} custom={5}>
            <ModernCard className={`h-full p-3 md:p-4 ${isMobile ? 'max-w-[95%] mx-auto' : ''}`}>
              <div className="flex items-center gap-2 mb-2 md:mb-3">
                <TrendingUp className={`${isMobile ? 'h-4 w-4' : 'h-5 w-5'}`} style={{ color: modernColors.military }} />
                <h3 className={`${modernTypography.heading} ${isMobile ? 'text-base' : 'text-lg'}`}>
                  Market-Specific ROI
                </h3>
              </div>
              
              <div className={`${isMobile ? 'space-y-1.5' : 'space-y-2'}`}>
                {marketROI.map((item, index) => (
                  <div key={index} className="p-2 bg-slate-50/80 backdrop-blur-sm border border-slate-100">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-1 md:gap-2">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></div>
                        <span className={`${isMobile ? 'text-xs' : 'text-sm'} font-medium`}>{item.market}</span>
                      </div>
                      <span className={`${isMobile ? 'text-lg' : 'text-xl'} font-thin`} style={{ color: item.color }}>{item.roi}</span>
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
          </motion.div>

          <motion.div variants={itemFadeInUpVariant} custom={6}>
            <ModernCard className={`h-full p-3 md:p-4 ${isMobile ? 'max-w-[95%] mx-auto' : ''}`}>
              <div className="flex items-center gap-2 mb-2 md:mb-3">
                <BarChart className={`${isMobile ? 'h-4 w-4' : 'h-5 w-5'}`} style={{ color: modernColors.commercial }} />
                <h3 className={`${modernTypography.heading} ${isMobile ? 'text-base' : 'text-lg'}`}>
                  Unit Economics
                </h3>
              </div>
              
              <div className={`${isMobile ? 'space-y-2' : 'space-y-3'}`}>
                <div>
                  <h4 className={`${isMobile ? 'text-sm' : 'text-base'} font-medium mb-1 md:mb-2`}>Pricing Tiers:</h4>
                  <div className={`grid grid-cols-1 ${isMobile ? 'gap-1.5' : 'sm:grid-cols-2 gap-2'}`}>
                    <div className="bg-militaryLight/50 p-2 rounded-md border border-slate-200">
                      <p className="text-xs font-medium text-military mb-0.5">Defense</p>
                      <p className={`${isMobile ? 'text-base' : 'text-lg'} font-extralight text-military`}>$250K - $1M</p>
                    </div>
                    <div className="bg-commercialLight/50 p-2 rounded-md border border-slate-200">
                      <p className="text-xs font-medium text-commercial mb-0.5">Commercial</p>
                      <p className={`${isMobile ? 'text-base' : 'text-lg'} font-extralight text-commercial`}>$75K - $150K</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className={`${isMobile ? 'text-sm' : 'text-base'} font-medium mb-1 md:mb-2`}>Key Performance Metrics:</h4>
                  <div className={`${isMobile ? 'space-y-1.5' : 'space-y-2'}`}>
                    <div className="flex justify-between items-center p-1.5 md:p-2 bg-slate-50/80 backdrop-blur-sm border border-slate-100 rounded-md">
                      <div className="flex items-center gap-1">
                        <Star className={`${isMobile ? 'h-2.5 w-2.5' : 'h-3 w-3'}`} style={{ color: modernColors.military }} />
                        <span className={`${isMobile ? 'text-[10px]' : 'text-xs'} font-medium`}>LTV:CAC Ratio</span>
                      </div>
                      <span className={`${isMobile ? 'text-sm' : 'text-base'} font-medium`} style={{ color: modernColors.military }}>10:1</span>
                    </div>
                    <div className="flex justify-between items-center p-1.5 md:p-2 bg-slate-50/80 backdrop-blur-sm border border-slate-100 rounded-md">
                      <div className="flex items-center gap-1">
                        <Star className={`${isMobile ? 'h-2.5 w-2.5' : 'h-3 w-3'}`} style={{ color: modernColors.military }} />
                        <span className={`${isMobile ? 'text-[10px]' : 'text-xs'} font-medium`}>Gross Margin</span>
                      </div>
                      <span className={`${isMobile ? 'text-sm' : 'text-base'} font-medium`} style={{ color: modernColors.military }}>80-85%</span>
                    </div>
                    <div className="flex justify-between items-center p-1.5 md:p-2 bg-slate-50/80 backdrop-blur-sm border border-slate-100 rounded-md">
                      <div className="flex items-center gap-1">
                        <Star className={`${isMobile ? 'h-2.5 w-2.5' : 'h-3 w-3'}`} style={{ color: modernColors.commercial }} />
                        <span className={`${isMobile ? 'text-[10px]' : 'text-xs'} font-medium`}>Net Retention</span>
                      </div>
                      <span className={`${isMobile ? 'text-sm' : 'text-base'} font-medium`} style={{ color: modernColors.commercial }}>120%</span>
                    </div>
                  </div>
                </div>
              </div>
            </ModernCard>
          </motion.div>
        </div>
      </motion.div>
    </SlideLayout>
  );
};

export default Slide12;
