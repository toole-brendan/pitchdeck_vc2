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
  Flag, 
  Building, 
  Layout,
  Timer, 
  BadgePercent,
  Users,
  DollarSign,
  Database,
  Briefcase,
  Server,
  CreditCard,
  Shield
} from 'lucide-react';
import { useContentScale } from '@/hooks/useContentScale';
import { useIsMobile } from '@/hooks/use-mobile';
import { motion } from 'framer-motion';

const Slide14: React.FC = () => {
  const TOTAL_SLIDES = 18;
  const isMobile = useIsMobile();
  
  // Use our custom hook to manage content scaling
  const { contentRef, scale, isScaled } = useContentScale();

  // Phase approach data
  const phases = [
    {
      name: 'Phase 1: Defense Beachhead',
      period: 'Q2 2025 - Q4 2025',
      description: 'Establish proven track record with defense clients',
      metrics: [
        { label: '3-5 defense contracts', icon: Briefcase, color: modernColors.military },
        { label: '85% user satisfaction', icon: BadgePercent, color: modernColors.military },
        { label: '$1.2M in initial ARR', icon: DollarSign, color: modernColors.military }
      ],
      color: modernColors.military,
      icon: Flag
    },
    {
      name: 'Phase 2: Commercial Expansion',
      period: 'Q1 2026 - Q3 2026',
      description: 'Enter commercial supply chain market with validated solution',
      metrics: [
        { label: '12-15 commercial clients', icon: Building, color: modernColors.commercial },
        { label: '500K monthly transactions', icon: Database, color: modernColors.commercial },
        { label: '$3.5M in Year 2 ARR', icon: DollarSign, color: modernColors.commercial }
      ],
      color: modernColors.commercial,
      icon: Building
    },
    {
      name: 'Phase 3: Platform Ecosystem',
      period: 'Q4 2026 - Q2 2027',
      description: 'Open platform to developers and financial partners',
      metrics: [
        { label: '30+ enterprise clients', icon: Users, color: modernColors.military },
        { label: '$12M in Year 3 ARR', icon: DollarSign, color: modernColors.commercial },
        { label: '15 integrated partners', icon: Database, color: modernColors.military }
      ],
      color: modernColors.military,
      icon: Layout
    }
  ];

  // Enhanced strategic partnerships data with specific examples
  const partnerships = [
    { 
      category: 'Defense Contractors', 
      examples: [
        'Lockheed Martin (F-35 supply tracking)',
        'Raytheon Technologies (missile component verification)',
        'General Dynamics (land systems logistics)'
      ], 
      timeline: 'Q2 2025', 
      icon: Shield, 
      color: modernColors.military 
    },
    { 
      category: 'ERP Providers', 
      examples: [
        'SAP (inventory management integration)',
        'Oracle NetSuite (verification APIs)',
        'Microsoft Dynamics (data exchange protocols)'
      ], 
      timeline: 'Q3 2025', 
      icon: Database, 
      color: modernColors.commercial 
    },
    { 
      category: 'WMS Providers', 
      examples: [
        'Manhattan Associates (warehouse verification)',
        'Blue Yonder (distribution center tracking)',
        'HighJump (inventory control systems)'
      ], 
      timeline: 'Q4 2025', 
      icon: Server, 
      color: modernColors.commercial 
    },
    { 
      category: 'Financial Services', 
      examples: [
        'J.P. Morgan (supply chain financing)',
        'Citibank (inventory-backed lending)',
        'American Express (payment settlement solutions)'
      ], 
      timeline: 'Q1 2026', 
      icon: CreditCard, 
      color: modernColors.commercial 
    }
  ];

  return (
    <SlideLayout 
      title="Go-to-Market Strategy" 
      subtitle="Multi-phase approach to platform and token ecosystem growth"
      slideNumber={14} 
      totalSlides={TOTAL_SLIDES}
    >
      <motion.div 
        className={`flex flex-col gap-3 ${isMobile ? 'mt-3' : 'mt-6'} pb-4`}
        style={{ 
          minHeight: isMobile ? 'calc(100vh - 200px)' : 'calc(100vh - 200px)',
          paddingBottom: isMobile ? '60px' : '0' 
        }}
        variants={fadeInUpVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="flex-grow-0" variants={itemFadeInUpVariant} custom={0}>
          <ModernCard className={`p-3 md:p-4 ${isMobile ? 'max-w-[95%] mx-auto' : ''}`}>
            <div className="flex items-center gap-2 mb-2 md:mb-3">
              <Timer className={`${isMobile ? 'h-5 w-5' : 'h-6 w-6'}`} style={{ color: modernColors.military }} />
              <h3 className={`${isMobile ? 'text-lg' : 'text-xl'} font-medium`}>
                Phased Approach
              </h3>
            </div>
            
            <div className={`grid grid-cols-1 ${isMobile ? 'gap-2' : 'md:grid-cols-3 gap-3'}`}>
              {phases.map((phase, index) => (
                <motion.div 
                  key={index} 
                  className="p-2 md:p-3 bg-slate-50/80 backdrop-blur-sm border border-slate-100 rounded-md h-full"
                  variants={itemFadeInUpVariant}
                  custom={index + 1}
                >
                  <div className="flex items-center gap-2 mb-1 md:mb-2">
                    <div className={`${isMobile ? 'w-6 h-6' : 'w-7 h-7'} rounded-md flex items-center justify-center`} style={{ backgroundColor: `${phase.color}15` }}>
                      <phase.icon className={`${isMobile ? 'h-3.5 w-3.5' : 'h-4 w-4'}`} style={{ color: phase.color }} />
                    </div>
                    <div>
                      <h4 className={`${isMobile ? 'text-sm' : 'text-base'} font-medium`} style={{ color: phase.color }}>
                        {phase.name}
                      </h4>
                      <p className={`${isMobile ? 'text-xs' : 'text-sm'}`}>{phase.period}</p>
                    </div>
                  </div>
                  
                  <p className={`${isMobile ? 'text-xs' : 'text-sm'} mb-2`}>{phase.description}</p>
                  
                  <div className="space-y-1.5">
                    {phase.metrics.map((metric, idx) => (
                      <div key={idx} className={`flex items-center gap-1.5 p-1.5 bg-white/80 border border-slate-100 rounded ${isMobile ? 'text-xs' : 'text-sm'}`}>
                        <metric.icon className={`${isMobile ? 'h-3 w-3' : 'h-3.5 w-3.5'} flex-shrink-0`} style={{ color: metric.color }} />
                        <span>{metric.label}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </ModernCard>
        </motion.div>

        <motion.div className="flex-grow overflow-auto" variants={itemFadeInUpVariant} custom={4}>
          <ModernCard className={`p-3 md:p-4 h-full ${isMobile ? 'max-w-[95%] mx-auto' : ''}`}>
            <div className="flex items-center gap-2 mb-2 md:mb-3">
              <Users className={`${isMobile ? 'h-5 w-5' : 'h-6 w-6'}`} style={{ color: modernColors.commercial }} />
              <h3 className={`${isMobile ? 'text-lg' : 'text-xl'} font-medium`}>
                Target Strategic Partnerships
              </h3>
            </div>
            
            <div className={`grid grid-cols-1 ${isMobile ? 'gap-2' : 'md:grid-cols-2 gap-3'}`}>
              {partnerships.map((partner, index) => (
                <motion.div 
                  key={index} 
                  className="p-2 md:p-3 bg-slate-50/80 backdrop-blur-sm border border-slate-100 h-full"
                  variants={itemFadeInUpVariant}
                  custom={index + 5}
                >
                  <div className="flex items-start gap-2">
                    <div 
                      className={`${isMobile ? 'w-6 h-6' : 'w-7 h-7'} rounded-md flex items-center justify-center flex-shrink-0 mt-0.5`}
                      style={{ backgroundColor: `${partner.color}20` }}
                    >
                      <partner.icon className={`${isMobile ? 'h-3.5 w-3.5' : 'h-4 w-4'}`} style={{ color: partner.color }} />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <h4 className={`${isMobile ? 'text-sm' : 'text-base'} font-medium`} style={{ color: partner.color }}>
                          {partner.category}
                        </h4>
                        <span className={`${isMobile ? 'text-[10px]' : 'text-xs'} font-medium py-0.5 px-2 rounded-md`} style={{ 
                          backgroundColor: `${partner.color}20`,
                          color: partner.color
                        }}>
                          {partner.timeline}
                        </span>
                      </div>
                      <ul className="space-y-1">
                        {partner.examples.map((example, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: partner.color }}></div>
                            <span className={`${isMobile ? 'text-xs' : 'text-sm'}`}>{example}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </ModernCard>
        </motion.div>
      </motion.div>
    </SlideLayout>
  );
};

export default Slide14;
