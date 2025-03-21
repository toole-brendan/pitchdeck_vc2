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
  Server, 
  Code, 
  Settings, 
  Clock, 
  DollarSign
} from 'lucide-react';
import { useContentScale } from '@/hooks/useContentScale';
import { useIsMobile } from '@/hooks/use-mobile';
import { motion } from 'framer-motion';

const Slide13: React.FC = () => {
  const TOTAL_SLIDES = 18;
  const isMobile = useIsMobile();
  
  // Use our custom hook to manage content scaling
  const { contentRef, scale, isScaled } = useContentScale();

  // Monthly operating costs data
  const operatingCosts = [
    { 
      name: 'Infrastructure', 
      range: '$1,200-1,800/mo', 
      icon: Server,
      color: modernColors.military
    },
    { 
      name: 'Development', 
      range: '$9,000-12,000/mo', 
      icon: Code,
      color: modernColors.commercial 
    },
    { 
      name: 'Operations', 
      range: '$4,800-7,700/mo', 
      icon: Settings,
      color: modernColors.military
    }
  ];

  // Burn rate scenarios
  const burnRateScenarios = [
    { name: 'Best Case', value: '15 months', percentage: 100 },
    { name: 'Expected Case', value: '12 months', percentage: 80 },
    { name: 'Conservative Case', value: '10 months', percentage: 67 }
  ];

  return (
    <SlideLayout 
      title="Operational Costs" 
      subtitle="Blockchain infrastructure and development expenses with 12-month runway"
      slideNumber={13} 
      totalSlides={TOTAL_SLIDES}
    >
      <motion.div 
        className={`flex flex-col items-center justify-center gap-3 md:gap-6 ${isMobile ? 'mt-3' : 'mt-8'}`}
        style={{ 
          minHeight: isMobile ? 'calc(100vh - 220px)' : 'calc(100vh - 220px)', 
          paddingBottom: isMobile ? '60px' : '0'
        }}
        variants={fadeInUpVariants}
        initial="hidden"
        animate="visible"
      >
        <div className={`grid grid-cols-1 ${isMobile ? 'gap-3' : 'md:grid-cols-2 gap-6'} w-full max-w-5xl mx-auto`}>
          <motion.div className="flex justify-center" variants={itemFadeInUpVariant} custom={0}>
            <ModernCard className={`w-full max-w-md p-4 md:p-5 ${isMobile ? 'max-w-[95%]' : ''}`}>
              <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                <DollarSign className={`${isMobile ? 'h-5 w-5' : 'h-6 w-6'}`} style={{ color: modernColors.military }} />
                <h3 className={`${isMobile ? 'text-lg' : 'text-xl'} font-medium`}>
                  Monthly Operating Costs
                </h3>
              </div>

              <div className={`${isMobile ? 'space-y-2' : 'space-y-3'}`}>
                {operatingCosts.map((cost, index) => (
                  <motion.div 
                    key={index} 
                    className="bg-slate-50/80 backdrop-blur-sm p-2 md:p-3 border border-slate-100 flex items-center justify-between"
                    variants={itemFadeInUpVariant}
                    custom={index + 1}
                  >
                    <div className="flex items-center gap-2">
                      <div className={`${isMobile ? 'w-7 h-7' : 'w-8 h-8'} rounded-md flex items-center justify-center`} style={{ backgroundColor: `${cost.color}15` }}>
                        <cost.icon className={`${isMobile ? 'h-3.5 w-3.5' : 'h-4 w-4'}`} style={{ color: cost.color }} />
                      </div>
                      <span className={`${isMobile ? 'text-xs' : 'text-sm'} font-medium`}>{cost.name}</span>
                    </div>
                    <span className={`${isMobile ? 'text-sm' : 'text-base'} font-medium`} style={{ color: cost.color }}>{cost.range}</span>
                  </motion.div>
                ))}
              </div>
            </ModernCard>
          </motion.div>

          <motion.div className="flex justify-center" variants={itemFadeInUpVariant} custom={4}>
            <ModernCard className={`w-full max-w-md p-4 md:p-5 ${isMobile ? 'max-w-[95%]' : ''}`}>
              <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                <Clock className={`${isMobile ? 'h-5 w-5' : 'h-6 w-6'}`} style={{ color: modernColors.commercial }} />
                <h3 className={`${isMobile ? 'text-lg' : 'text-xl'} font-medium`}>
                  Burn Rate & Runway
                </h3>
              </div>

              <div className="mb-3 md:mb-4 bg-slate-50/80 backdrop-blur-sm p-2 md:p-3 border border-slate-100">
                <div className="flex justify-between items-center mb-1 md:mb-2">
                  <span className={`${isMobile ? 'text-xs' : 'text-sm'} font-medium`}>Total Monthly Burn</span>
                  <span className={`${isMobile ? 'text-sm' : 'text-base'} font-medium`} style={{ color: modernColors.military }}>$15,000-21,500</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className={`${isMobile ? 'text-xs' : 'text-sm'} font-medium`}>Seed Funding</span>
                  <span className={`${isMobile ? 'text-sm' : 'text-base'} font-medium`} style={{ color: modernColors.commercial }}>$750,000</span>
                </div>
              </div>

              <div className={`${isMobile ? 'space-y-2' : 'space-y-3'}`}>
                {burnRateScenarios.map((scenario, index) => (
                  <motion.div 
                    key={index} 
                    className="bg-slate-50/80 backdrop-blur-sm p-2 md:p-3 border border-slate-100"
                    variants={itemFadeInUpVariant}
                    custom={index + 5}
                  >
                    <div className="flex justify-between items-center mb-1 md:mb-2">
                      <span className={`${isMobile ? 'text-xs' : 'text-sm'} font-medium`}>{scenario.name}</span>
                      <span className={`${isMobile ? 'text-sm' : 'text-base'} font-medium`} style={{ color: index === 1 ? modernColors.military : (index === 0 ? modernColors.commercial : modernColors.crypto) }}>
                        {scenario.value}
                      </span>
                    </div>
                    <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full rounded-full"
                        style={{ 
                          backgroundColor: index === 1 ? modernColors.military : (index === 0 ? modernColors.commercial : modernColors.crypto),
                          width: `${scenario.percentage}%` 
                        }}
                      ></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </ModernCard>
          </motion.div>
        </div>
      </motion.div>
    </SlideLayout>
  );
};

export default Slide13;
