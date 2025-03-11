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
  DollarSign, 
  Clock, 
  CheckCircle, 
  Mail, 
  User, 
  Users,
  FileText,
  Briefcase,
  ArrowRight,
  LucideIcon,
  ShieldCheck,
  BadgeDollarSign,
  BarChart,
  GanttChart
} from 'lucide-react';

const Slide15: React.FC = () => {
  const TOTAL_SLIDES = 18;

  // Key investment highlights
  const investmentHighlights = [
    { 
      title: 'Founder-led development',
      description: 'Efficient capital use',
      icon: User
    },
    { 
      title: 'Military expertise',
      description: 'Creates competitive moat',
      icon: ShieldCheck
    },
    { 
      title: 'Lean startup approach',
      description: 'Quick iterations',
      icon: BarChart
    },
    { 
      title: '12-18 month runway',
      description: 'To demonstrate product-market fit',
      icon: Clock
    }
  ];

  // Seed round details
  const seedRoundDetails = [
    { label: 'Target Raise', value: '$750K' },
    { label: 'Instrument', value: 'SAFE' },
    { label: 'Valuation Cap', value: '$5 Million' },
    { label: 'Min Investment', value: '$25,000' }
  ];

  // Seed funding milestones
  const seedFundingMilestones = [
    { title: 'Working prototype', timeline: '3-4 months', icon: GanttChart },
    { title: 'Alpha version with core features', timeline: '6-8 months', icon: GanttChart },
    { title: 'User testing with potential defense clients', timeline: '9-10 months', icon: GanttChart },
    { title: 'Production-ready MVP', timeline: '12 months', icon: GanttChart }
  ];

  // Available information
  const availableInformation = [
    'Detailed financial model and projections',
    'Technical architecture overview',
    'Military-commercial market strategy',
    'Potential investor term sheet'
  ];

  // Contact information
  const contactInfo = [
    { 
      name: 'Brendan Toole', 
      title: 'Founder & CEO',
      email: 'brendan.toole@handreceipt.com' 
    },
    { 
      name: 'Investor Relations',
      title: '',
      email: 'investors@handreceipt.com' 
    }
  ];

  return (
    <SlideLayout title="Funding Request" slideNumber={15} totalSlides={TOTAL_SLIDES}>
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
            Seed investment opportunity and next steps
          </h2>
        </motion.div>

        <motion.div 
          variants={itemFadeInUpVariant}
          custom={1}
          className="mb-4"
        >
          <ModernCard className="p-6">
            <div className="flex items-center gap-3 mb-5">
              <BadgeDollarSign className="h-7 w-7 text-accent" />
              <h3 className={modernTypography.heading} style={{ color: modernColors.text }}>
                Investment Opportunity
              </h3>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-3/5">
                <div className="flex gap-3 items-center mb-4">
                  <ModernBadge color="accent">$750K Seed Round</ModernBadge>
                  <ModernBadge color="success">Now Open</ModernBadge>
                </div>
                
                <p className={`${modernTypography.body} mb-6`}>
                  HandReceipt is developing a blockchain-powered supply chain verification solution with military-grade security adapted for both defense and commercial markets. Your investment will help us build our MVP, conduct initial customer interviews, and develop our first pilot implementation.
                </p>
                
                <h4 className={`${modernTypography.subheading} mb-4`}>Key Investment Highlights:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {investmentHighlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-md flex items-center justify-center bg-accent/10 flex-shrink-0 mt-0.5">
                        <highlight.icon className="h-4 w-4 text-accent" />
                      </div>
                      <div>
                        <p className={`${modernTypography.label} mb-0.5`}>{highlight.title}</p>
                        <p className={`${modernTypography.small} text-slate-500`}>{highlight.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="md:w-2/5 flex flex-col justify-start">
                <div className="bg-accent/10 rounded-lg p-5 h-full">
                  <h4 className={`${modernTypography.subheading} mb-4 text-accent`}>Seed Round Details</h4>
                  <div className="space-y-3">
                    {seedRoundDetails.map((detail, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-white/80 rounded-md border border-slate-100">
                        <span className={modernTypography.label}>{detail.label}</span>
                        <span className={`${modernTypography.body} text-accent font-medium`}>{detail.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
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
                <Clock className="h-7 w-7 text-accent" />
                <h3 className={modernTypography.heading} style={{ color: modernColors.text }}>
                  Seed Funding Milestones
                </h3>
              </div>
              
              <div className="space-y-4">
                {seedFundingMilestones.map((milestone, index) => (
                  <div key={index} className="relative pl-10 pb-5 border-l-2 border-slate-200 last:border-l-0 last:pb-0">
                    <div className="absolute left-0 top-0 w-6 h-6 rounded-full flex items-center justify-center bg-accent/20 -translate-x-1/2 border-2 border-white">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                    </div>
                    <div className="flex justify-between items-center mb-1">
                      <h4 className={modernTypography.label}>{milestone.title}</h4>
                      <span className={`${modernTypography.small} text-accent bg-accent/10 px-2 py-0.5 rounded`}>{milestone.timeline}</span>
                    </div>
                  </div>
                ))}
              </div>
            </ModernCard>
          </motion.div>

          <motion.div
            variants={itemFadeInUpVariant}
            custom={3}
          >
            <ModernCard className="h-full p-6">
              <div className="flex items-center gap-3 mb-5">
                <ArrowRight className="h-7 w-7 text-accent" />
                <h3 className={modernTypography.heading} style={{ color: modernColors.text }}>
                  Next Steps
                </h3>
              </div>
              
              <p className={`${modernTypography.body} mb-5`}>
                Join us in revolutionizing supply chain management with blockchain technology.
              </p>
              
              <div className="mb-6">
                <h4 className={`${modernTypography.subheading} mb-3`}>Available Information:</h4>
                <ul className="space-y-2">
                  {availableInformation.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                      <span className={modernTypography.body}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-slate-50/80 p-5 rounded-md border border-slate-100">
                <h4 className={`${modernTypography.subheading} mb-3 text-center`}>Contact Us</h4>
                <p className={`${modernTypography.body} text-center mb-4`}>
                  Ready to discuss how HandReceipt can transform supply chain management in both defense and commercial sectors?
                </p>
                
                <div className="space-y-3">
                  {contactInfo.map((contact, index) => (
                    <div key={index} className="p-3 bg-white rounded-md shadow-sm">
                      <div className="flex items-center gap-2 mb-1">
                        <User className="h-4 w-4 text-slate-500" />
                        <span className={modernTypography.label}>{contact.name}</span>
                        {contact.title && (
                          <span className={`${modernTypography.small} text-slate-500`}>{contact.title}</span>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-accent" />
                        <a 
                          href={`mailto:${contact.email}`} 
                          className={`${modernTypography.body} text-accent hover:underline`}
                        >
                          {contact.email}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ModernCard>
          </motion.div>
        </div>
      </motion.div>
    </SlideLayout>
  );
};

export default Slide15;