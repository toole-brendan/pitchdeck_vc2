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
  Flag, 
  Building, 
  Layout,
  Timer, 
  BarChart, 
  BadgePercent,
  Users,
  TrendingUp,
  DollarSign,
  DivideCircle,
  Database,
  Briefcase,
  Server,
  CreditCard
} from 'lucide-react';

const Slide13: React.FC = () => {
  const TOTAL_SLIDES = 18;

  // Phase approach data
  const phases = [
    {
      name: 'Phase 1: Defense Beachhead',
      period: 'Q2 2025 - Q4 2025',
      description: 'Establish proven track record with defense clients',
      metrics: [
        { label: '3-5 defense contracts', icon: Briefcase },
        { label: '85% user satisfaction', icon: BadgePercent },
        { label: '$1.2M in initial ARR', icon: DollarSign }
      ],
      color: modernColors.military,
      icon: Flag
    },
    {
      name: 'Phase 2: Commercial Expansion',
      period: 'Q1 2026 - Q3 2026',
      description: 'Enter commercial supply chain market with validated solution',
      metrics: [
        { label: '12-15 commercial clients', icon: Building },
        { label: '500K monthly transactions', icon: Database },
        { label: '$3.5M in Year 2 ARR', icon: DollarSign }
      ],
      color: modernColors.commercial,
      icon: Building
    },
    {
      name: 'Phase 3: Platform Ecosystem',
      period: 'Q4 2026 - Q2 2027',
      description: 'Open platform to developers and financial partners',
      metrics: [
        { label: '30+ enterprise clients', icon: Users },
        { label: '$12M in Year 3 ARR', icon: DollarSign },
        { label: '15 integrated partners', icon: Database }
      ],
      color: modernColors.accent,
      icon: Layout
    }
  ];

  // Timeline data
  const timeline = [
    { quarter: 'Q2 2025', milestone: 'Launch HandReceipt with 2-3 defense customers' },
    { quarter: 'Q3 2025', milestone: 'First commercial pilot deployment' },
    { quarter: 'Q4 2025', milestone: 'Integrate financial institutions for supply chain financing' },
    { quarter: 'Q1 2026', milestone: 'Open network to broader retail ecosystem' }
  ];

  // KPI data
  const kpis = [
    { metric: 'Customer Acquisition', value: '15-20 enterprise clients in Year 1', icon: Users },
    { metric: 'Platform Adoption', value: '500K transactions in Year 1', icon: Database },
    { metric: 'Revenue Growth', value: '$4.8M ARR by end of Year 2', icon: TrendingUp },
    { metric: 'Market Expansion', value: '3 industry verticals by Year 2', icon: DivideCircle }
  ];

  // Strategic partnerships data
  const partnerships = [
    { category: 'ERP Providers', examples: 'SAP, NetSuite, Oracle', timeline: 'Q3 2025', icon: Database },
    { category: 'Defense Contractors', examples: 'Tier 1 DOD suppliers', timeline: 'Q2 2025', icon: Briefcase },
    { category: 'WMS Providers', examples: 'Manhattan, JDA Software', timeline: 'Q4 2025', icon: Server },
    { category: 'Financial Services', examples: 'Supply chain financing', timeline: 'Q1 2026', icon: CreditCard }
  ];

  return (
    <SlideLayout title="Go-to-Market Strategy" slideNumber={13} totalSlides={TOTAL_SLIDES}>
      <motion.div
        variants={fadeInUpVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-6"
      >
        <motion.div
          variants={itemFadeInUpVariant}
          custom={0}
          className="mb-2 text-center max-w-2xl mx-auto"
        >
          <h2 className={modernTypography.pageTitle} style={{ color: modernColors.text }}>
            Multi-phase approach to platform and token ecosystem growth
          </h2>
        </motion.div>

        <motion.div 
          variants={itemFadeInUpVariant}
          custom={1}
          className="mb-4"
        >
          <ModernCard className="p-6">
            <h3 className={`${modernTypography.heading} mb-5 flex items-center gap-3`} style={{ color: modernColors.text }}>
              <Timer className="h-6 w-6 text-accent" />
              Phased Approach
            </h3>
            
            <div className="space-y-6">
              {phases.map((phase, index) => (
                <div 
                  key={index} 
                  className="p-5 bg-slate-50/80 backdrop-blur-sm border border-slate-100 rounded-md"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-md flex items-center justify-center" style={{ backgroundColor: `${phase.color}15` }}>
                      <phase.icon className="h-5 w-5" style={{ color: phase.color }} />
                    </div>
                    <div>
                      <h4 className={modernTypography.subheading} style={{ color: phase.color }}>
                        {phase.name}
                      </h4>
                      <p className={`${modernTypography.small} text-slate-500`}>{phase.period}</p>
                    </div>
                  </div>
                  
                  <p className={`${modernTypography.body} mb-4`}>{phase.description}</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {phase.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-center gap-2 p-2 bg-white/80 border border-slate-100 rounded">
                        <metric.icon className="h-4 w-4 text-slate-500" />
                        <span className={modernTypography.small}>{metric.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ModernCard>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            variants={itemFadeInUpVariant}
            custom={2}
          >
            <ModernCard className="h-full p-6">
              <div className="flex items-center gap-3 mb-5">
                <Timer className="h-6 w-6 text-accent" />
                <h3 className={modernTypography.heading} style={{ color: modernColors.text }}>
                  Execution Timeline
                </h3>
              </div>
              
              <div className="space-y-4">
                {timeline.map((item, index) => (
                  <div key={index} className="relative pl-10 pb-5 border-l-2 border-slate-200 last:border-l-0 last:pb-0">
                    <div className="absolute left-0 top-0 w-6 h-6 rounded-full flex items-center justify-center bg-accent/20 -translate-x-1/2 border-2 border-white">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                    </div>
                    <div className="mb-1">
                      <span className={`${modernTypography.label} text-accent`}>{item.quarter}</span>
                    </div>
                    <p className={modernTypography.body}>{item.milestone}</p>
                  </div>
                ))}
              </div>
            </ModernCard>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              variants={itemFadeInUpVariant}
              custom={3}
            >
              <ModernCard className="p-6">
                <div className="flex items-center gap-3 mb-5">
                  <BarChart className="h-6 w-6 text-accent" />
                  <h3 className={modernTypography.heading} style={{ color: modernColors.text }}>
                    Key Performance Indicators
                  </h3>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {kpis.map((kpi, index) => (
                    <div key={index} className="p-3 bg-slate-50/80 backdrop-blur-sm border border-slate-100 flex items-start gap-3">
                      <div className="w-8 h-8 rounded-md flex items-center justify-center bg-accent/10 flex-shrink-0">
                        <kpi.icon className="h-4 w-4 text-accent" />
                      </div>
                      <div>
                        <p className={`${modernTypography.label} mb-1`}>{kpi.metric}</p>
                        <p className={`${modernTypography.small} text-slate-600`}>{kpi.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </ModernCard>
            </motion.div>

            <motion.div
              variants={itemFadeInUpVariant}
              custom={4}
            >
              <ModernCard className="p-6">
                <div className="flex items-center gap-3 mb-5">
                  <Users className="h-6 w-6 text-accent" />
                  <h3 className={modernTypography.heading} style={{ color: modernColors.text }}>
                    Target Strategic Partnerships
                  </h3>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {partnerships.map((partner, index) => (
                    <div key={index} className="p-3 bg-slate-50/80 backdrop-blur-sm border border-slate-100 flex items-start gap-3">
                      <div className="w-8 h-8 rounded-md flex items-center justify-center bg-accent/10 flex-shrink-0">
                        <partner.icon className="h-4 w-4 text-accent" />
                      </div>
                      <div>
                        <p className={`${modernTypography.label} mb-1`}>{partner.category}</p>
                        <p className={`${modernTypography.small} text-slate-600`}>{partner.examples}</p>
                        <p className={`${modernTypography.small} text-accent mt-1`}>{partner.timeline}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </ModernCard>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </SlideLayout>
  );
};

export default Slide13;