import React from 'react';
import SlideLayout from '@/components/PitchDeck/SlideLayout';
import { motion } from 'framer-motion';
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

const Slide12: React.FC = () => {
  const TOTAL_SLIDES = 18;

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
    <SlideLayout title="Operational Costs" slideNumber={12} totalSlides={TOTAL_SLIDES}>
      <motion.div
        variants={fadeInUpVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-8"
      >
        <motion.div
          variants={itemFadeInUpVariant}
          custom={0}
          className="mb-2 text-center max-w-2xl mx-auto"
        >
          <h2 className={modernTypography.pageTitle}>
            Blockchain infrastructure and development expenses with 12-month runway
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <motion.div
            variants={itemFadeInUpVariant}
            custom={1}
          >
            <ModernCard className="h-full p-8">
              <div className="flex items-center gap-4 mb-6">
                <DollarSign className="h-7 w-7" style={{ color: modernColors.military }} />
                <h3 className={modernTypography.heading}>
                  Monthly Operating Costs
                </h3>
              </div>

              <div className="space-y-4">
                {operatingCosts.map((cost, index) => (
                  <div 
                    key={index} 
                    className="bg-slate-50/80 backdrop-blur-sm p-4 border border-slate-100 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-md flex items-center justify-center" style={{ backgroundColor: `${cost.color}15` }}>
                        <cost.icon className="h-5 w-5" style={{ color: cost.color }} />
                      </div>
                      <span className={modernTypography.label}>{cost.name}</span>
                    </div>
                    <span className={`${modernTypography.heading}`} style={{ color: cost.color }}>{cost.range}</span>
                  </div>
                ))}
              </div>
            </ModernCard>
          </motion.div>

          <motion.div
            variants={itemFadeInUpVariant}
            custom={2}
          >
            <ModernCard className="h-full p-8">
              <div className="flex items-center gap-4 mb-6">
                <Clock className="h-7 w-7" style={{ color: modernColors.commercial }} />
                <h3 className={modernTypography.heading}>
                  Burn Rate & Runway
                </h3>
              </div>

              <div className="mb-4 bg-slate-50/80 backdrop-blur-sm p-4 border border-slate-100">
                <div className="flex justify-between items-center mb-2">
                  <span className={modernTypography.label}>Total Monthly Burn</span>
                  <span className={`${modernTypography.heading}`} style={{ color: modernColors.military }}>$15,000-21,500</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className={modernTypography.label}>Seed Funding</span>
                  <span className={`${modernTypography.heading}`} style={{ color: modernColors.commercial }}>$750,000</span>
                </div>
              </div>

              <div className="space-y-4">
                {burnRateScenarios.map((scenario, index) => (
                  <div key={index} className="bg-slate-50/80 backdrop-blur-sm p-4 border border-slate-100">
                    <div className="flex justify-between items-center mb-2">
                      <span className={modernTypography.label}>{scenario.name}</span>
                      <span className={`${modernTypography.heading}`} style={{ color: index === 0 ? modernColors.commercial : modernColors.military }}>
                        {scenario.value}
                      </span>
                    </div>
                    <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full rounded-full"
                        style={{ 
                          backgroundColor: index === 0 ? modernColors.commercial : modernColors.military,
                          width: `${scenario.percentage}%` 
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </ModernCard>
          </motion.div>
        </div>
      </motion.div>
    </SlideLayout>
  );
};

export default Slide12;