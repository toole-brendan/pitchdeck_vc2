import React from 'react';
import SlideLayout from '@/components/PitchDeck/SlideLayout';
import { 
  ModernCard, 
  ModernBadge,
  modernTypography, 
  modernColors
} from '@/components/PitchDeck/ModernSlideStyles';
import { 
  Mail, 
  User, 
  ShieldCheck,
  BadgeDollarSign,
  BarChart,
  Clock
} from 'lucide-react';

const Slide15: React.FC = () => {
  const TOTAL_SLIDES = 18;

  // Key investment highlights
  const investmentHighlights = [
    { 
      title: 'Founder-led development',
      description: 'Efficient capital use',
      icon: User,
      color: modernColors.commercial
    },
    { 
      title: 'Military expertise',
      description: 'Creates competitive moat',
      icon: ShieldCheck,
      color: modernColors.military
    },
    { 
      title: 'Lean startup approach',
      description: 'Quick iterations',
      icon: BarChart,
      color: modernColors.commercial
    },
    { 
      title: '12-18 month runway',
      description: 'To demonstrate product-market fit',
      icon: Clock,
      color: modernColors.military
    }
  ];

  // Seed round details
  const seedRoundDetails = [
    { label: 'Target Raise', value: '$750K' },
    { label: 'Instrument', value: 'SAFE' },
    { label: 'Valuation Cap', value: '$5 Million' },
    { label: 'Min Investment', value: '$25,000' }
  ];

  // Contact information
  const contactInfo = [
    { 
      name: 'Brendan Toole', 
      title: 'Founder & CEO',
      email: 'brendan.toole@handreceipt.com',
      color: modernColors.military
    },
    { 
      name: 'Investor Relations',
      title: '',
      email: 'investors@handreceipt.com',
      color: modernColors.commercial
    }
  ];

  return (
    <SlideLayout title="Funding Request" slideNumber={15} totalSlides={TOTAL_SLIDES}>
      <div className="flex flex-col gap-6">
        <div className="mb-2 text-center max-w-2xl mx-auto">
          <h2 className={modernTypography.pageTitle}>
            Seed investment opportunity and next steps
          </h2>
        </div>

        <div className="mb-4">
          <ModernCard className="p-6">
            <div className="flex items-center gap-3 mb-5">
              <BadgeDollarSign className="h-7 w-7" style={{ color: modernColors.military }} />
              <h3 className={modernTypography.heading}>
                Investment Opportunity
              </h3>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-3/5">
                <div className="flex gap-3 items-center mb-4">
                  <ModernBadge color={modernColors.military}>$750K Seed Round</ModernBadge>
                  <ModernBadge color={modernColors.commercial}>Now Open</ModernBadge>
                </div>
                
                <p className={`${modernTypography.body} mb-6`}>
                  HandReceipt is developing a blockchain-powered supply chain verification solution with military-grade security adapted for both defense and commercial markets. Your investment will help us build our MVP, conduct initial customer interviews, and develop our first pilot implementation.
                </p>
                
                <h4 className={`${modernTypography.subheading} mb-4`}>Key Investment Highlights:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {investmentHighlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div 
                        className="w-8 h-8 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ backgroundColor: `${highlight.color}20` }}
                      >
                        <highlight.icon className="h-4 w-4" style={{ color: highlight.color }} />
                      </div>
                      <div>
                        <p className={`${modernTypography.label} mb-0.5`} style={{ color: highlight.color }}>{highlight.title}</p>
                        <p className={`${modernTypography.small}`}>{highlight.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="md:w-2/5 flex flex-col justify-start">
                <div className="bg-slate-100 rounded-lg p-5 h-full">
                  <h4 className={`${modernTypography.subheading} mb-4`} style={{ color: modernColors.military }}>Seed Round Details</h4>
                  <div className="space-y-3">
                    {seedRoundDetails.map((detail, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-white/80 rounded-md border border-slate-100">
                        <span className={modernTypography.label}>{detail.label}</span>
                        <span className={`${modernTypography.body} font-medium`} style={{ color: index % 2 === 0 ? modernColors.military : modernColors.commercial }}>
                          {detail.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ModernCard>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-lg">
            <ModernCard className="p-6">
              <div className="bg-slate-50/80 p-5 rounded-md border border-slate-100">
                <h4 className={`${modernTypography.subheading} mb-3 text-center`}>Contact Us</h4>
                <p className={`${modernTypography.body} text-center mb-4`}>
                  Ready to discuss how HandReceipt can transform supply chain management in both defense and commercial sectors?
                </p>
                
                <div className="space-y-3">
                  {contactInfo.map((contact, index) => (
                    <div key={index} className="p-3 bg-white rounded-md shadow-sm">
                      <div className="flex items-center gap-2 mb-1">
                        <User className="h-4 w-4" style={{ color: contact.color }} />
                        <span className={modernTypography.label} style={{ color: contact.color }}>{contact.name}</span>
                        {contact.title && (
                          <span className={`${modernTypography.small}`}>{contact.title}</span>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4" style={{ color: contact.color }} />
                        <a 
                          href={`mailto:${contact.email}`} 
                          className={`${modernTypography.body} hover:underline`}
                          style={{ color: contact.color }}
                        >
                          {contact.email}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ModernCard>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide15;