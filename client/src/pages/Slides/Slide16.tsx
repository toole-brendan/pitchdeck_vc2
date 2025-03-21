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
import { useIsMobile } from '@/hooks/use-mobile';
import { motion } from 'framer-motion';

const Slide16: React.FC = () => {
  const TOTAL_SLIDES = 18;
  const isMobile = useIsMobile();
  
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
      email: 'brendan.toole@handreceipt.com',
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
      <motion.div 
        className={`flex flex-col gap-3 md:gap-5 ${isMobile ? 'mt-3' : 'mt-8'}`}
        style={{ 
          minHeight: isMobile ? 'calc(100vh - 220px)' : 'calc(100vh - 220px)',
          paddingBottom: isMobile ? '60px' : '0'
        }}
        variants={fadeInUpVariants}
        initial="hidden"
        animate="visible"
      >
        <div className={`grid grid-cols-1 ${isMobile ? 'gap-3' : 'md:grid-cols-2 gap-5'} flex-grow`}>
          <motion.div variants={itemFadeInUpVariant} custom={0}>
            <ModernCard className={`h-full p-3 md:p-4 ${isMobile ? 'max-w-[95%] mx-auto' : ''}`}>
              <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                <BadgeDollarSign className={`${isMobile ? 'h-5 w-5' : 'h-6 w-6'}`} style={{ color: modernColors.crypto }} />
                <h3 className={`${isMobile ? 'text-lg' : 'text-xl'} font-medium`}>
                  Investment Opportunity
                </h3>
              </div>
              
              <div className="flex gap-2 items-center mb-2 md:mb-3">
                <ModernBadge color={modernColors.crypto}>$750K Seed Round</ModernBadge>
                <ModernBadge color={modernColors.crypto}>Now Open</ModernBadge>
              </div>
              
              <p className={`text-sm mb-2 md:mb-3 ${isMobile ? 'text-xs' : ''}`}>
                HandReceipt is developing a blockchain-powered supply chain verification solution with military-grade security adapted for both defense and commercial markets. Your investment will help us build our MVP, conduct initial customer interviews, and develop our first pilot implementation.
              </p>
              
              <h4 className={`${isMobile ? 'text-sm' : 'text-base'} font-medium mb-1 md:mb-2`}>Key Investment Highlights:</h4>
              <div className={`grid grid-cols-1 ${isMobile ? 'gap-1.5' : 'sm:grid-cols-2 gap-2'}`}>
                {investmentHighlights.map((highlight, index) => (
                  <motion.div key={index} className="flex items-start gap-1.5 md:gap-2" variants={itemFadeInUpVariant} custom={index + 1}>
                    <div 
                      className={`${isMobile ? 'w-6 h-6' : 'w-7 h-7'} rounded-md flex items-center justify-center flex-shrink-0 mt-0.5`}
                      style={{ backgroundColor: `${highlight.color}20` }}
                    >
                      <highlight.icon className={`${isMobile ? 'h-3.5 w-3.5' : 'h-4 w-4'}`} style={{ color: highlight.color }} />
                    </div>
                    <div>
                      <p className={`${isMobile ? 'text-xs' : 'text-sm'} font-medium mb-0.5`} style={{ color: highlight.color }}>{highlight.title}</p>
                      <p className={`${isMobile ? 'text-[10px]' : 'text-xs'}`}>{highlight.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </ModernCard>
          </motion.div>
          
          <motion.div variants={itemFadeInUpVariant} custom={5}>
            <ModernCard className={`h-full p-3 md:p-4 ${isMobile ? 'max-w-[95%] mx-auto' : ''}`}>
              <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                <DollarSign className={`${isMobile ? 'h-5 w-5' : 'h-6 w-6'}`} style={{ color: modernColors.crypto }} />
                <h3 className={`${isMobile ? 'text-lg' : 'text-xl'} font-medium`}>
                  Seed Investment Allocation
                </h3>
              </div>
              
              <p className={`text-sm mb-2 md:mb-3 ${isMobile ? 'text-xs' : ''}`}>How we'll use the $750K seed investment:</p>
              
              <div className={`${isMobile ? 'space-y-1.5' : 'space-y-2 mb-3'}`}>
                {fundingAllocation.map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="bg-slate-50/80 backdrop-blur-sm border border-slate-100 rounded-md overflow-hidden"
                    variants={itemFadeInUpVariant}
                    custom={index + 6}
                  >
                    <div className="flex justify-between items-center p-1.5 md:p-2">
                      <div className="flex items-center gap-1.5 md:gap-2">
                        <div className={`${isMobile ? 'w-6 h-6' : 'w-7 h-7'} rounded-md flex items-center justify-center`} style={{ backgroundColor: `${item.color}20` }}>
                          <item.icon className={`${isMobile ? 'h-3.5 w-3.5' : 'h-4 w-4'}`} style={{ color: item.color }} />
                        </div>
                        <span className={`${isMobile ? 'text-xs' : 'text-sm'} font-medium`}>{item.category}</span>
                      </div>
                      <div className="flex items-center gap-1.5 md:gap-2">
                        <span className={`${isMobile ? 'text-[10px]' : 'text-xs'}`}>{item.percentage}%</span>
                        <span className={`${isMobile ? 'text-xs' : 'text-sm'} font-medium`} style={{ color: item.color }}>{item.amount}</span>
                      </div>
                    </div>
                    <div className="h-1.5 bg-slate-100">
                      <div 
                        className="h-full"
                        style={{ backgroundColor: item.color, width: `${item.percentage}%` }}
                      ></div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                className={`bg-slate-50/80 backdrop-blur-sm p-2 md:p-3 border border-slate-100 rounded-md flex justify-between items-center ${isMobile ? 'mt-2' : ''}`}
                variants={itemFadeInUpVariant}
                custom={10}
              >
                <div className="flex items-center gap-1.5 md:gap-2">
                  <Clock className={`${isMobile ? 'h-4 w-4' : 'h-5 w-5'}`} style={{ color: modernColors.crypto }} />
                  <h4 className={`${isMobile ? 'text-xs' : 'text-sm'} font-medium`}>Expected Runway</h4>
                </div>
                <p className={`${isMobile ? 'text-sm' : 'text-base'} font-medium`} style={{ color: modernColors.crypto }}>
                  12-18 months
                </p>
              </motion.div>
            </ModernCard>
          </motion.div>
        </div>

        <motion.div className="flex-grow-0" variants={itemFadeInUpVariant} custom={11}>
          <ModernCard className={`p-3 md:p-4 ${isMobile ? 'max-w-[95%] mx-auto' : ''}`}>
            <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
              <Mail className={`${isMobile ? 'h-5 w-5' : 'h-6 w-6'}`} style={{ color: modernColors.crypto }} />
              <h3 className={`${isMobile ? 'text-lg' : 'text-xl'} font-medium`}>
                Contact Us
              </h3>
            </div>
            
            <div className="bg-slate-50/80 p-2 md:p-3 rounded-md border border-slate-100">
              <p className={`${isMobile ? 'text-xs' : 'text-sm'} text-center mb-2 md:mb-3`}>
                Ready to discuss how HandReceipt can transform supply chain management in both defense and commercial sectors?
              </p>
              
              <div className="flex flex-col md:flex-row justify-center gap-2 md:gap-3">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="p-2 bg-white rounded-md shadow-sm">
                    <div className="flex items-center gap-1.5 md:gap-2 mb-1">
                      <User className={`${isMobile ? 'h-3.5 w-3.5' : 'h-4 w-4'}`} style={{ color: contact.color }} />
                      <span className={`${isMobile ? 'text-xs' : 'text-sm'} font-medium`} style={{ color: contact.color }}>{contact.name}</span>
                      {contact.title && (
                        <span className={`${isMobile ? 'text-[10px]' : 'text-xs'}`}>{contact.title}</span>
                      )}
                    </div>
                    <div className="flex items-center gap-1.5 md:gap-2">
                      <Mail className={`${isMobile ? 'h-3.5 w-3.5' : 'h-4 w-4'}`} style={{ color: contact.color }} />
                      <a 
                        href={`mailto:${contact.email}`} 
                        className={`${isMobile ? 'text-xs' : 'text-sm'} hover:underline`}
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
        </motion.div>
      </motion.div>
    </SlideLayout>
  );
};

export default Slide16;
