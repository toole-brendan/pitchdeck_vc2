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
  User, 
  Calendar, 
  CheckCircle, 
  Code,
  Layout,
  ShieldCheck,
  Rocket,
  GitMerge,
  Smartphone,
  Server
} from 'lucide-react';
import { useContentScale } from '@/hooks/useContentScale';
import { useIsMobile } from '@/hooks/use-mobile';
import { motion } from 'framer-motion';

const Slide17: React.FC = () => {
  const TOTAL_SLIDES = 18;
  const isMobile = useIsMobile();
  
  // Use our custom hook to manage content scaling
  const { contentRef, scale, isScaled } = useContentScale();

  // Founding team expertise
  const founderExpertise = [
    { text: 'Princeton Economics', color: `bg-opacity-20 bg-crypto text-crypto` },
    { text: 'Point72 Analyst', color: `bg-opacity-20 bg-crypto text-crypto` },
    { text: 'Military Officer', color: `bg-opacity-20 bg-crypto text-crypto` },
    { text: 'Full-Stack Developer', color: `bg-opacity-20 bg-crypto text-crypto` }
  ];

  // Post-seed hiring plan
  const hiringPlan = [
    {
      position: 'Senior Blockchain Developer',
      focus: 'Smart contract development & infrastructure',
      icon: Code,
      color: modernColors.crypto
    },
    {
      position: 'UX/UI Designer',
      focus: 'Mobile & web interface optimization',
      icon: Layout,
      color: modernColors.crypto
    },
    {
      position: 'Defense Industry Advisor',
      focus: 'Military procurement & relationship management',
      icon: ShieldCheck,
      color: modernColors.crypto
    }
  ];

  // Development roadmap
  const roadmap = [
    {
      quarter: 'Q3 2025',
      title: 'Core Platform Development',
      description: 'Develop foundational blockchain verification architecture with smart contracts and database structure.',
      milestones: [
        'Blockchain node infrastructure setup',
        'Smart contract architecture',
        'API foundation'
      ],
      status: 'Upcoming',
      icon: Server,
      color: modernColors.crypto,
      statusColor: `bg-opacity-20 bg-crypto text-crypto`
    },
    {
      quarter: 'Q4 2025',
      title: 'Mobile Interface & Defense MVP',
      description: 'Build military-focused user interface with CAC integration and QR scanning capability.',
      milestones: [
        'Mobile scanning application',
        'Property transfer workflow',
        'Defense authentication integration'
      ],
      status: 'Planned',
      icon: Smartphone,
      color: modernColors.crypto,
      statusColor: `bg-opacity-20 bg-crypto text-crypto`
    },
    {
      quarter: 'Q1 2026',
      title: 'Commercial Beta Launch',
      description: 'Adapt platform for commercial supply chain use cases with payment settlement features.',
      milestones: [
        'Commercial authentication model',
        'Inventory dashboard',
        'Shell token integration'
      ],
      status: 'Planned',
      icon: GitMerge,
      color: modernColors.crypto,
      statusColor: `bg-opacity-20 bg-crypto text-crypto`
    },
    {
      quarter: 'Q2 2026',
      title: 'Series A Preparation',
      description: 'Scale initial customers and prepare for growth financing to accelerate adoption.',
      milestones: [
        'Onboard 3-5 early adopters',
        'Platform performance optimization',
        'Series A fundraising'
      ],
      status: 'Planned',
      icon: Rocket,
      color: modernColors.crypto,
      statusColor: `bg-opacity-20 bg-crypto text-crypto`
    }
  ];

  return (
    <SlideLayout 
      title="Team & Roadmap" 
      subtitle="Leadership, development timeline, and growth strategy"
      slideNumber={17} 
      totalSlides={TOTAL_SLIDES}
    >
      <motion.div 
        className={`flex flex-col gap-3 md:gap-4 ${isMobile ? 'mt-3' : 'mt-6'}`}
        style={{ 
          minHeight: isMobile ? 'calc(100vh - 220px)' : 'calc(100vh - 220px)',
          paddingBottom: isMobile ? '60px' : '0'
        }}
        variants={fadeInUpVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="flex-grow-0" variants={itemFadeInUpVariant} custom={0}>
          <ModernCard className={`p-3 md:p-4 ${isMobile ? 'max-w-[95%] mx-auto' : ''}`}>
            <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
              <User className={`${isMobile ? 'h-5 w-5' : 'h-6 w-6'}`} style={{ color: modernColors.crypto }} />
              <h3 className={`${isMobile ? 'text-lg' : 'text-xl'} font-medium`}>
                Founding Team
              </h3>
            </div>
            
            <div className={`flex flex-col ${isMobile ? 'gap-3' : 'md:flex-row gap-4'}`}>
              <div className={`${isMobile ? 'w-full' : 'md:w-3/5'}`}>
                <div className="flex items-center gap-3 md:gap-4 mb-2 md:mb-3">
                  <div className={`relative ${isMobile ? 'w-12 h-12' : 'w-16 h-16'} bg-slate-100 rounded-lg flex items-center justify-center`}>
                    <span className={`${isMobile ? 'text-xl' : 'text-2xl'} font-semibold`} style={{ color: modernColors.crypto }}>BT</span>
                  </div>
                  <div>
                    <h4 className={`${isMobile ? 'text-base' : 'text-lg'} font-medium`} style={{ color: modernColors.crypto }}>
                      Brendan T. Toole
                    </h4>
                    <p className={`${isMobile ? 'text-xs' : 'text-sm'} uppercase tracking-wide font-medium`} style={{ color: modernColors.crypto }}>
                      FOUNDER & CEO
                    </p>
                  </div>
                </div>
                
                <p className={`${isMobile ? 'text-sm' : 'text-base'} mb-2 md:mb-3`}>
                  Technical founder with unique combination of expertise in defense, supply chain analytics and financial markets. Leading product development and strategic vision.
                </p>
                
                <div className="flex flex-wrap gap-1.5 md:gap-2 mb-2 md:mb-3">
                  {founderExpertise.map((item, index) => (
                    <span 
                      key={index} 
                      className={`${isMobile ? 'text-xs px-2 py-0.5' : 'text-sm px-3 py-1'} rounded-md font-medium ${item.color}`}
                    >
                      {item.text}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className={`${isMobile ? 'w-full' : 'md:w-2/5'}`}>
                <h4 className={`${isMobile ? 'text-base' : 'text-lg'} font-medium mb-2 md:mb-3`}>Post-Seed Hiring Plan:</h4>
                <div className={`${isMobile ? 'space-y-2' : 'space-y-3'}`}>
                  {hiringPlan.map((role, index) => (
                    <motion.div 
                      key={index} 
                      className="bg-slate-50/80 backdrop-blur-sm p-2 md:p-3 border border-slate-100 rounded-md"
                      variants={itemFadeInUpVariant}
                      custom={index + 1}
                    >
                      <div className="flex items-center gap-1.5 md:gap-2 mb-0.5 md:mb-1">
                        <role.icon className={`${isMobile ? 'h-3.5 w-3.5' : 'h-4 w-4'}`} style={{ color: role.color }} />
                        <p className={`${isMobile ? 'text-sm' : 'text-base'} font-medium`} style={{ color: role.color }}>{role.position}</p>
                      </div>
                      <p className={`${isMobile ? 'text-xs' : 'text-sm'} pl-5 md:pl-6`}>{role.focus}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </ModernCard>
        </motion.div>

        <motion.div className="flex-grow overflow-auto" variants={itemFadeInUpVariant} custom={4}>
          <ModernCard className={`p-2 md:p-3 h-full ${isMobile ? 'max-w-[95%] mx-auto' : ''}`}>
            <div className="flex items-center gap-1.5 md:gap-2 mb-1.5 md:mb-2">
              <Calendar className={`${isMobile ? 'h-4 w-4' : 'h-5 w-5'}`} style={{ color: modernColors.crypto }} />
              <h3 className={`${isMobile ? 'text-base' : 'text-lg'} font-medium`}>
                Development Roadmap
              </h3>
            </div>
            
            <div className={`grid grid-cols-1 ${isMobile ? 'gap-1.5' : 'md:grid-cols-4 gap-2'}`}>
              {roadmap.map((phase, index) => (
                <motion.div 
                  key={index} 
                  className="bg-slate-50/80 p-1.5 md:p-2 border border-slate-100 rounded-md h-full flex flex-col"
                  variants={itemFadeInUpVariant}
                  custom={index + 5}
                >
                  <div className="flex items-start gap-1.5 md:gap-2 mb-1">
                    <div 
                      className={`${isMobile ? 'w-5 h-5' : 'w-6 h-6'} rounded-md flex items-center justify-center flex-shrink-0 mt-0.5`}
                      style={{ backgroundColor: `${phase.color}20` }}
                    >
                      <phase.icon className={`${isMobile ? 'h-3.5 w-3.5' : 'h-4 w-4'}`} style={{ color: phase.color }} />
                    </div>
                    <div>
                      <h4 className={`${isMobile ? 'text-sm' : 'text-base'} font-medium`} style={{ color: phase.color }}>{phase.quarter}</h4>
                      <h5 className={`${isMobile ? 'text-xs' : 'text-sm'} font-medium mb-0.5`}>
                        {phase.title}
                      </h5>
                      <span className={`${isMobile ? 'text-[9px] px-1 py-0.5' : 'text-xs px-1.5 py-0.5'} rounded ${phase.statusColor} inline-block`}>
                        {phase.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="bg-white p-1.5 md:p-2 border border-slate-100 rounded-md h-full">
                      <ul className="space-y-0.5 md:space-y-1">
                        {phase.milestones.map((milestone, idx) => (
                          <li key={idx} className="flex items-start gap-1 md:gap-1.5">
                            <CheckCircle className={`${isMobile ? 'h-3 w-3' : 'h-3.5 w-3.5'} flex-shrink-0 mt-0.5`} style={{ color: phase.color }} />
                            <span className={`${isMobile ? 'text-[10px]' : 'text-xs'}`}>{milestone}</span>
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

export default Slide17;
