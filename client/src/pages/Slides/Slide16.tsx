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
  User, 
  Users, 
  Calendar, 
  Milestone, 
  CheckCircle, 
  Code,
  Layout,
  ShieldCheck,
  Rocket,
  BarChart3,
  GitMerge,
  Smartphone,
  Server,
  Workflow
} from 'lucide-react';

const Slide16: React.FC = () => {
  const TOTAL_SLIDES = 18;

  // Founding team expertise
  const founderExpertise = [
    { text: 'Princeton Economics', color: 'bg-blue-100 text-blue-700' },
    { text: 'Point72 Analyst', color: 'bg-indigo-100 text-indigo-700' },
    { text: 'Military Officer', color: 'bg-militaryLight text-military' },
    { text: 'Full-Stack Developer', color: 'bg-accent/10 text-accent' }
  ];

  // Post-seed hiring plan
  const hiringPlan = [
    {
      position: 'Senior Blockchain Developer',
      focus: 'Smart contract development & infrastructure',
      icon: Code
    },
    {
      position: 'UX/UI Designer',
      focus: 'Mobile & web interface optimization',
      icon: Layout
    },
    {
      position: 'Defense Industry Advisor',
      focus: 'Military procurement & relationship management',
      icon: ShieldCheck
    }
  ];

  // Development roadmap
  const roadmap = [
    {
      quarter: 'Q2 2024',
      title: 'Core Platform Development',
      description: 'Develop foundational blockchain verification architecture with smart contracts and database structure.',
      milestones: [
        'Blockchain node infrastructure setup',
        'Smart contract architecture',
        'API foundation'
      ],
      status: 'Upcoming',
      icon: Server,
      statusColor: 'bg-blue-100 text-blue-700'
    },
    {
      quarter: 'Q3 2024',
      title: 'Mobile Interface & Defense MVP',
      description: 'Build military-focused user interface with CAC integration and QR scanning capability.',
      milestones: [
        'Mobile scanning application',
        'Property transfer workflow',
        'Defense authentication integration'
      ],
      status: 'Planned',
      icon: Smartphone,
      statusColor: 'bg-slate-100 text-slate-700'
    },
    {
      quarter: 'Q1 2025',
      title: 'Commercial Beta Launch',
      description: 'Adapt platform for commercial supply chain use cases with payment settlement features.',
      milestones: [
        'Commercial authentication model',
        'Inventory dashboard',
        'Shell token integration'
      ],
      status: 'Planned',
      icon: GitMerge,
      statusColor: 'bg-slate-100 text-slate-700'
    },
    {
      quarter: 'Q2 2025',
      title: 'Series A Preparation',
      description: 'Scale initial customers and prepare for growth financing to accelerate adoption.',
      milestones: [
        'Onboard 3-5 early adopters',
        'Platform performance optimization',
        'Series A fundraising'
      ],
      status: 'Planned',
      icon: Rocket,
      statusColor: 'bg-slate-100 text-slate-700'
    }
  ];

  // Success metrics
  const successMetrics = [
    {
      category: 'Development Milestones',
      metrics: [
        'Complete MVP within 6 months',
        'First pilot implementation by month 9',
        'Production-ready platform by month 12'
      ],
      icon: Milestone
    },
    {
      category: 'Customer Acquisition',
      metrics: [
        '1-2 defense pilot customers',
        '2-3 commercial pilots',
        'First recurring revenue by Q1 2025'
      ],
      icon: Users
    },
    {
      category: 'Product Expansion',
      metrics: [
        'Defense core features (Q3 2024)',
        'Commercial adaptation (Q4 2024)',
        'API integration suite (Q1 2025)'
      ],
      icon: Workflow
    }
  ];

  return (
    <SlideLayout title="Team & Roadmap" slideNumber={16} totalSlides={TOTAL_SLIDES}>
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
            Leadership, development timeline, and growth strategy
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
          <motion.div
            variants={itemFadeInUpVariant}
            custom={1}
            className="md:col-span-2"
          >
            <ModernCard className="h-full p-6">
              <div className="flex items-center gap-3 mb-5">
                <User className="h-7 w-7 text-accent" />
                <h3 className={modernTypography.heading} style={{ color: modernColors.text }}>
                  Founding Team
                </h3>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-3/5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="relative w-20 h-20 bg-slate-100 rounded-lg flex items-center justify-center">
                      <span className="text-2xl font-semibold text-slate-400">BT</span>
                    </div>
                    <div>
                      <h4 className={modernTypography.subheading} style={{ color: modernColors.text }}>
                        Brendan T. Toole
                      </h4>
                      <p className={`${modernTypography.small} uppercase tracking-wide text-accent font-medium`}>
                        FOUNDER & CEO
                      </p>
                    </div>
                  </div>
                  
                  <p className={`${modernTypography.body} mb-4`}>
                    Technical founder with unique combination of expertise in defense, supply chain analytics and financial markets. Leading product development and strategic vision.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {founderExpertise.map((item, index) => (
                      <span 
                        key={index} 
                        className={`text-xs px-2.5 py-1.5 rounded-md font-medium ${item.color}`}
                      >
                        {item.text}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="md:w-2/5">
                  <h4 className={`${modernTypography.subheading} mb-3`}>Post-Seed Hiring Plan:</h4>
                  <div className="space-y-3">
                    {hiringPlan.map((role, index) => (
                      <div key={index} className="bg-slate-50/80 backdrop-blur-sm p-4 border border-slate-100 rounded-md">
                        <div className="flex items-center gap-2 mb-1">
                          <role.icon className="h-4 w-4 text-accent" />
                          <p className={modernTypography.label}>{role.position}</p>
                        </div>
                        <p className={`${modernTypography.small} text-slate-500 pl-6`}>{role.focus}</p>
                      </div>
                    ))}
                  </div>
                  
                  <p className={`${modernTypography.small} text-slate-500 mt-3`}>
                    Initial team will remain lean to extend runway, with strategic advisors and contractors supplementing core capabilities.
                  </p>
                </div>
              </div>
            </ModernCard>
          </motion.div>

          <motion.div
            variants={itemFadeInUpVariant}
            custom={2}
            className="md:col-span-1"
          >
            <ModernCard className="h-full p-6">
              <div className="flex items-center gap-3 mb-5">
                <BarChart3 className="h-7 w-7 text-accent" />
                <h3 className={modernTypography.heading} style={{ color: modernColors.text }}>
                  Success Metrics
                </h3>
              </div>
              
              <div className="space-y-5">
                {successMetrics.map((category, index) => (
                  <div key={index} className="border border-slate-100 rounded-md overflow-hidden">
                    <div className="flex items-center gap-2 p-3 bg-slate-50/80 border-b border-slate-100">
                      <category.icon className="h-5 w-5 text-accent" />
                      <h4 className={modernTypography.label}>{category.category}</h4>
                    </div>
                    <div className="p-3">
                      <ul className="space-y-2">
                        {category.metrics.map((metric, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                            <span className={modernTypography.small}>{metric}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </ModernCard>
          </motion.div>
        </div>

        <motion.div
          variants={itemFadeInUpVariant}
          custom={3}
        >
          <ModernCard className="p-6">
            <div className="flex items-center gap-3 mb-5">
              <Calendar className="h-7 w-7 text-accent" />
              <h3 className={modernTypography.heading} style={{ color: modernColors.text }}>
                Development Roadmap
              </h3>
            </div>
            
            <div className="space-y-6">
              {roadmap.map((phase, index) => (
                <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-slate-50/80 p-4 border border-slate-100 rounded-md">
                  <div className="md:col-span-1 flex md:flex-col items-center md:items-start gap-3">
                    <div className="w-12 h-12 rounded-md flex items-center justify-center bg-accent/10">
                      <phase.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h4 className={`${modernTypography.subheading} text-accent`}>{phase.quarter}</h4>
                      <span className={`text-xs px-2 py-0.5 rounded ${phase.statusColor} inline-block mt-1`}>
                        {phase.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="md:col-span-3">
                    <h4 className={modernTypography.subheading}>{phase.title}</h4>
                    <p className={`${modernTypography.body} mb-3`}>{phase.description}</p>
                    
                    <div className="bg-white p-3 border border-slate-100 rounded-md">
                      <p className={`${modernTypography.small} text-slate-600 mb-2`}>Milestones:</p>
                      <ul className="space-y-1">
                        {phase.milestones.map((milestone, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                            <span className={modernTypography.small}>{milestone}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ModernCard>
        </motion.div>
      </motion.div>
    </SlideLayout>
  );
};

export default Slide16;