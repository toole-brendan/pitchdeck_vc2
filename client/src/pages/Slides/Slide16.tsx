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
  Clock,
  DollarSign,
  Code,
  Megaphone,
  Briefcase,
  FileText
} from 'lucide-react';
import { useContentScale } from '@/hooks/useContentScale';

const Slide16: React.FC = () => {
  const TOTAL_SLIDES = 18;
  
  // Use our custom hook to manage content scaling
  const { contentRef, scale, isScaled } = useContentScale();

  // Key investment highlights
  const investmentHighlights = [
    { 
      title: 'Founder-led development',
      description: 'Efficient capital use',
      icon: User,
      color: modernColors.crypto
    },
    { 
      title: 'Military expertise',
      description: 'Creates competitive moat',
      icon: ShieldCheck,
      color: modernColors.crypto
    },
    { 
      title: 'Lean startup approach',
      description: 'Quick iterations',
      icon: BarChart,
      color: modernColors.crypto
    },
    { 
      title: '12-18 month runway',
      description: 'To demonstrate product-market fit',
      icon: Clock,
      color: modernColors.crypto
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
      email: 'toole.brendan@gmail.com',
      color: modernColors.crypto
    }
  ];

  // Funding allocation data from Slide15
  const fundingAllocation = [
    { category: 'Product Development', percentage: 55, amount: '$412.5K', icon: Code, color: modernColors.crypto },
    { category: 'Sales & Marketing', percentage: 15, amount: '$112.5K', icon: Megaphone, color: modernColors.crypto },
    { category: 'Operations', percentage: 20, amount: '$150K', icon: Briefcase, color: modernColors.crypto },
    { category: 'Legal & Compliance', percentage: 10, amount: '$75K', icon: FileText, color: modernColors.crypto }
  ];

  return (
    <SlideLayout 
      title="Funding Request" 
      subtitle="Seed investment opportunity and next steps"
      slideNumber={16} 
      totalSlides={TOTAL_SLIDES}
    >
      <div className="flex flex-col gap-5 mt-8 h-[calc(100vh-220px)]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 flex-grow">
          <div>
            <ModernCard className="h-full p-4">
              <div className="flex items-center gap-3 mb-3">
                <BadgeDollarSign className="h-6 w-6" style={{ color: modernColors.crypto }} />
                <h3 className="text-xl font-medium">
                  Investment Opportunity
                </h3>
              </div>
              
              <div className="flex gap-2 items-center mb-3">
                <ModernBadge color={modernColors.crypto}>$750K Seed Round</ModernBadge>
                <ModernBadge color={modernColors.crypto}>Now Open</ModernBadge>
              </div>
              
              <p className="text-sm mb-3">
                HandReceipt is developing a blockchain-powered supply chain verification solution with military-grade security adapted for both defense and commercial markets. Your investment will help us build our MVP, conduct initial customer interviews, and develop our first pilot implementation.
              </p>
              
              <h4 className="text-base font-medium mb-2">Key Investment Highlights:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {investmentHighlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div 
                      className="w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: `${highlight.color}20` }}
                    >
                      <highlight.icon className="h-4 w-4" style={{ color: highlight.color }} />
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-0.5" style={{ color: highlight.color }}>{highlight.title}</p>
                      <p className="text-xs">{highlight.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ModernCard>
          </div>
          
          <div>
            <ModernCard className="h-full p-4">
              <div className="flex items-center gap-3 mb-3">
                <DollarSign className="h-6 w-6" style={{ color: modernColors.crypto }} />
                <h3 className="text-xl font-medium">
                  Seed Investment Allocation
                </h3>
              </div>
              
              <p className="text-sm mb-3">How we'll use the $750K seed investment:</p>
              
              <div className="space-y-2 mb-3">
                {fundingAllocation.map((item, index) => (
                  <div key={index} className="bg-slate-50/80 backdrop-blur-sm border border-slate-100 rounded-md overflow-hidden">
                    <div className="flex justify-between items-center p-2">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-md flex items-center justify-center" style={{ backgroundColor: `${item.color}20` }}>
                          <item.icon className="h-4 w-4" style={{ color: item.color }} />
                        </div>
                        <span className="text-sm font-medium">{item.category}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs">{item.percentage}%</span>
                        <span className="text-sm font-medium" style={{ color: item.color }}>{item.amount}</span>
                      </div>
                    </div>
                    <div className="h-1.5 bg-slate-100">
                      <div 
                        className="h-full"
                        style={{ backgroundColor: item.color, width: `${item.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-slate-50/80 backdrop-blur-sm p-3 border border-slate-100 rounded-md flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" style={{ color: modernColors.crypto }} />
                  <h4 className="text-sm font-medium">Expected Runway</h4>
                </div>
                <p className="text-base font-medium" style={{ color: modernColors.crypto }}>
                  12-18 months
                </p>
              </div>
            </ModernCard>
          </div>
        </div>

        <div className="flex-grow-0">
          <ModernCard className="p-4">
            <div className="flex items-center gap-3 mb-3">
              <Mail className="h-6 w-6" style={{ color: modernColors.crypto }} />
              <h3 className="text-xl font-medium">
                Contact Us
              </h3>
            </div>
            
            <div className="bg-slate-50/80 p-3 rounded-md border border-slate-100">
              <p className="text-sm text-center mb-3">
                Ready to discuss how HandReceipt can transform supply chain management in both defense and commercial sectors?
              </p>
              
              <div className="flex flex-col md:flex-row justify-center gap-3">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="p-2 bg-white rounded-md shadow-sm">
                    <div className="flex items-center gap-2 mb-1">
                      <User className="h-4 w-4" style={{ color: contact.color }} />
                      <span className="text-sm font-medium" style={{ color: contact.color }}>{contact.name}</span>
                      {contact.title && (
                        <span className="text-xs">{contact.title}</span>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4" style={{ color: contact.color }} />
                      <a 
                        href={`mailto:${contact.email}`} 
                        className="text-sm hover:underline"
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
    </SlideLayout>
  );
};

export default Slide16;
