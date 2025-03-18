import React from 'react';
import SlideLayout from '@/components/PitchDeck/SlideLayout';
import { 
  ModernCard, 
  ModernBadge,
  modernTypography, 
  modernColors
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

const Slide14: React.FC = () => {
  const TOTAL_SLIDES = 18;

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
    <SlideLayout title="Go-to-Market Strategy" slideNumber={14} totalSlides={TOTAL_SLIDES}>
      <div className="flex flex-col gap-6">
        <div className="mb-2 text-center max-w-2xl mx-auto">
          <h2 className={modernTypography.pageTitle}>
            Multi-phase approach to platform and token ecosystem growth
          </h2>
        </div>

        <div className="mb-4">
          <ModernCard className="p-6">
            <h3 className={`${modernTypography.heading} mb-5 flex items-center gap-3`}>
              <Timer className="h-6 w-6" style={{ color: modernColors.military }} />
              Phased Approach
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {phases.map((phase, index) => (
                <div 
                  key={index} 
                  className="p-5 bg-slate-50/80 backdrop-blur-sm border border-slate-100 rounded-md h-full"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-md flex items-center justify-center" style={{ backgroundColor: `${phase.color}15` }}>
                      <phase.icon className="h-5 w-5" style={{ color: phase.color }} />
                    </div>
                    <div>
                      <h4 className={modernTypography.subheading} style={{ color: phase.color }}>
                        {phase.name}
                      </h4>
                      <p className={`${modernTypography.small}`}>{phase.period}</p>
                    </div>
                  </div>
                  
                  <p className={`${modernTypography.body} mb-4`}>{phase.description}</p>
                  
                  <div className="space-y-2">
                    {phase.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-center gap-2 p-2 bg-white/80 border border-slate-100 rounded">
                        <metric.icon className="h-4 w-4 flex-shrink-0" style={{ color: metric.color }} />
                        <span className={modernTypography.small}>{metric.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ModernCard>
        </div>

        <div>
          <ModernCard className="p-6">
            <div className="flex items-center gap-3 mb-5">
              <Users className="h-6 w-6" style={{ color: modernColors.commercial }} />
              <h3 className={modernTypography.heading}>
                Target Strategic Partnerships
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {partnerships.map((partner, index) => (
                <div key={index} className="p-5 bg-slate-50/80 backdrop-blur-sm border border-slate-100 h-full">
                  <div className="flex items-start gap-3 mb-3">
                    <div 
                      className="w-10 h-10 rounded-md flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${partner.color}20` }}
                    >
                      <partner.icon className="h-5 w-5" style={{ color: partner.color }} />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className={`${modernTypography.subheading}`} style={{ color: partner.color }}>
                          {partner.category}
                        </h4>
                        <span className={`text-xs font-medium py-1 px-2 rounded-md`} style={{ 
                          backgroundColor: `${partner.color}20`,
                          color: partner.color
                        }}>
                          {partner.timeline}
                        </span>
                      </div>
                      <ul className="space-y-1">
                        {partner.examples.map((example, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: partner.color }}></div>
                            <span className={`${modernTypography.body} text-sm`}>{example}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
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

export default Slide14;
