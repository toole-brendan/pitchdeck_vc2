import React from 'react';
import SlideLayout from '@/components/PitchDeck/SlideLayout';
import { 
  ModernCard,
  ModernBadge,
  ModernDivider,
  ModernSectionHeader,
  modernTypography,
  modernColors,
  fadeInUpVariants,
  itemFadeInUpVariant
} from '@/components/PitchDeck/ModernSlideStyles';
import { QrCode, Database, Cpu, CreditCard, Shield, Laptop, ArrowRight } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { motion } from 'framer-motion';

const Slide5: React.FC = () => {
  const TOTAL_SLIDES = 18;
  const isMobile = useIsMobile();
  
  // Process steps with corresponding icons
  const processSteps = [
    { 
      title: 'QR Scan',
      description: 'Scan item code with mobile app',
      icon: <QrCode className="h-5 w-5 md:h-6 md:w-6" style={{ color: modernColors.military }} />
    },
    { 
      title: 'Blockchain Record',
      description: 'Encrypted data on immutable ledger',
      icon: <Database className="h-5 w-5 md:h-6 md:w-6" style={{ color: modernColors.crypto }} />
    },
    { 
      title: 'Smart Contract',
      description: 'Automated verification process',
      icon: <Cpu className="h-5 w-5 md:h-6 md:w-6" style={{ color: modernColors.crypto }} />
    },
    { 
      title: 'Settlement',
      description: 'Instant payment on verification',
      icon: <CreditCard className="h-5 w-5 md:h-6 md:w-6" style={{ color: modernColors.crypto }} />
    }
  ];

  return (
    <SlideLayout 
      title="HandReceipt Solution" 
      subtitle="Blockchain-secured supply chain verification with military and commercial applications"
      slideNumber={5} 
      totalSlides={TOTAL_SLIDES}
    >
      <motion.div 
        className={`max-w-5xl mx-auto ${isMobile ? 'mt-4' : 'mt-12'}`}
        style={{ paddingBottom: isMobile ? '60px' : '0' }}
        variants={fadeInUpVariants}
        initial="hidden"
        animate="visible"
      >
        {/* MULTI-DOMAIN SOLUTION - More compact */}
        <motion.div className="mb-4 md:mb-5" variants={itemFadeInUpVariant} custom={0}>
          <ModernBadge color={modernColors.crypto} className="mb-2 md:mb-3">
            MULTI-DOMAIN SOLUTION
          </ModernBadge>
          
          <p className={`${modernTypography.body} mt-2 md:mt-3 mb-3 md:mb-4 text-center font-medium text-sm ${isMobile ? 'px-3' : ''}`}>
            Secure verification across <span style={{ color: modernColors.military }}>military</span> and <span style={{ color: modernColors.commercial }}>commercial</span> domains
          </p>

          {/* Process Steps - More compact */}
          <div className={`grid grid-cols-1 ${isMobile ? 'grid-cols-2 gap-2' : 'sm:grid-cols-2 md:grid-cols-4 gap-3'}`}>
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                variants={itemFadeInUpVariant}
                custom={index + 1}
              >
                <ModernCard className={`h-full p-3 md:p-4 flex flex-col items-center text-center ${isMobile ? 'max-w-[95%] mx-auto' : ''}`} style={{
                  borderTop: `2px solid ${index === 3 ? modernColors.commercial : 
                              index === 0 ? modernColors.military : 
                              modernColors.crypto}`,
                  backgroundColor: `${index === 3 ? modernColors.commercialLight : 
                                   index === 0 ? modernColors.militaryLight :
                                   modernColors.cryptoLight}10`
                }}>
                  <div className="mb-1 md:mb-2">
                    {step.icon}
                  </div>
                  <h3 className={`${modernTypography.subheading} mb-1 ${isMobile ? 'text-sm' : 'text-base'}`} style={{ 
                    color: index === 3 ? modernColors.commercial : 
                           index === 0 ? modernColors.military : 
                           modernColors.crypto
                  }}>
                    {step.title}
                  </h3>
                  <p className={`${modernTypography.body} text-xs`}>
                    {step.description}
                  </p>
                  {!isMobile && index < processSteps.length - 1 && (
                    <ArrowRight className="hidden md:block absolute -right-6 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-300" />
                  )}
                </ModernCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Application Areas - More compact */}
        <div className={`grid grid-cols-1 ${isMobile ? 'gap-3' : 'md:grid-cols-2 gap-4'}`}>
          {/* MILITARY */}
          <motion.div className="flex flex-col h-full" variants={itemFadeInUpVariant} custom={6}>
            <ModernCard className={`h-full p-4 md:p-5 flex-1 border-t-4 ${isMobile ? 'max-w-[95%] mx-auto' : ''}`} style={{
              borderColor: modernColors.military,
              backgroundColor: `${modernColors.militaryLight}15`
            }}>
              <div className="flex items-center mb-2 md:mb-3">
                <Shield className="h-4 w-4 mr-2" style={{ color: modernColors.military }} />
                <ModernBadge color={modernColors.military} small>
                  MILITARY
                </ModernBadge>
              </div>

              <h3 className={`${modernTypography.subheading} mt-2 md:mt-3 mb-2 md:mb-3 ${isMobile ? 'text-sm' : 'text-base'}`} style={{ color: modernColors.military }}>
                Military Application
              </h3>
              
              <ul className="space-y-2 pl-3">
                <li className="flex items-start">
                  <div className="h-1.5 w-1.5 rounded-full mt-1.5 mr-2 flex-shrink-0" style={{ backgroundColor: modernColors.military }}></div>
                  <p className={`${modernTypography.body} text-sm`}>QR-code based digital transfers</p>
                </li>
                <li className="flex items-start">
                  <div className="h-1.5 w-1.5 rounded-full mt-1.5 mr-2 flex-shrink-0" style={{ backgroundColor: modernColors.military }}></div>
                  <p className={`${modernTypography.body} text-sm`}><span style={{ color: modernColors.crypto }}>Zero-knowledge proof</span> verification</p>
                </li>
                <li className="flex items-start">
                  <div className="h-1.5 w-1.5 rounded-full mt-1.5 mr-2 flex-shrink-0" style={{ backgroundColor: modernColors.military }}></div>
                  <p className={`${modernTypography.body} text-sm`}><span style={{ color: modernColors.crypto }}>Blockchain-secured</span> records</p>
                </li>
              </ul>
            </ModernCard>
          </motion.div>

          {/* COMMERCIAL */}
          <motion.div className="flex flex-col h-full" variants={itemFadeInUpVariant} custom={7}>
            <ModernCard className={`h-full p-4 md:p-5 flex-1 border-t-4 ${isMobile ? 'max-w-[95%] mx-auto' : ''}`} style={{
              borderColor: modernColors.commercial,
              backgroundColor: `${modernColors.commercialLight}15`
            }}>
              <div className="flex items-center mb-2 md:mb-3">
                <Laptop className="h-4 w-4 mr-2" style={{ color: modernColors.commercial }} />
                <ModernBadge color={modernColors.commercial} small>
                  COMMERCIAL
                </ModernBadge>
              </div>

              <h3 className={`${modernTypography.subheading} mt-2 md:mt-3 mb-2 md:mb-3 ${isMobile ? 'text-sm' : 'text-base'}`} style={{ color: modernColors.commercial }}>
                Commercial Integration
              </h3>
              
              <ul className="space-y-2 pl-3">
                <li className="flex items-start">
                  <div className="h-1.5 w-1.5 rounded-full mt-1.5 mr-2 flex-shrink-0" style={{ backgroundColor: modernColors.commercial }}></div>
                  <p className={`${modernTypography.body} text-sm`}>Existing scanning infrastructure</p>
                </li>
                <li className="flex items-start">
                  <div className="h-1.5 w-1.5 rounded-full mt-1.5 mr-2 flex-shrink-0" style={{ backgroundColor: modernColors.commercial }}></div>
                  <p className={`${modernTypography.body} text-sm`}>ERP/WMS API integration</p>
                </li>
                <li className="flex items-start">
                  <div className="h-1.5 w-1.5 rounded-full mt-1.5 mr-2 flex-shrink-0" style={{ backgroundColor: modernColors.commercial }}></div>
                  <p className={`${modernTypography.body} text-sm`}><span style={{ color: modernColors.crypto }}>Shell token</span> payments</p>
                </li>
              </ul>
            </ModernCard>
          </motion.div>
        </div>
      </motion.div>
    </SlideLayout>
  );
};

export default Slide5;