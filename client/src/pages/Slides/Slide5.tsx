import React from 'react';
import SlideLayout from '@/components/PitchDeck/SlideLayout';
import { motion } from 'framer-motion';
import { 
  ModernCard,
  ModernBadge,
  ModernDivider,
  ModernSectionHeader,
  modernTypography,
  modernColors,
  fadeInVariants,
  scaleUpVariants,
  itemFadeInUpVariant,
  fadeInUpVariants
} from '@/components/PitchDeck/ModernSlideStyles';
import { QrCode, Database, Cpu, CreditCard, Shield, Laptop, ArrowRight } from 'lucide-react';

const Slide5: React.FC = () => {
  const TOTAL_SLIDES = 18;
  
  // Process steps with corresponding icons
  const processSteps = [
    { 
      title: 'QR Scan',
      description: 'Scan item code with mobile app',
      icon: <QrCode className="h-6 w-6 text-blue-600" />
    },
    { 
      title: 'Blockchain Record',
      description: 'Encrypted data on immutable ledger',
      icon: <Database className="h-6 w-6 text-blue-600" />
    },
    { 
      title: 'Smart Contract',
      description: 'Automated verification process',
      icon: <Cpu className="h-6 w-6 text-blue-600" />
    },
    { 
      title: 'Settlement',
      description: 'Instant payment on verification',
      icon: <CreditCard className="h-6 w-6 text-blue-600" />
    }
  ];

  return (
    <SlideLayout title="HandReceipt Solution" slideNumber={5} totalSlides={TOTAL_SLIDES}>
      <div className="max-w-5xl mx-auto">
        {/* Subtitle */}
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-8"
        >
          <p className={`${modernTypography.subtitle} max-w-3xl mx-auto`}>
            Blockchain-secured supply chain verification with dual-market application
          </p>
        </motion.div>

        {/* MULTI-DOMAIN SOLUTION */}
        <motion.div 
          variants={scaleUpVariants}
          initial="hidden"
          animate="visible"
          className="mb-8"
        >
          <ModernSectionHeader dark className="mb-4 inline-block">
            MULTI-DOMAIN SOLUTION
          </ModernSectionHeader>
          
          <p className={`${modernTypography.body} mt-4 mb-6 text-center font-medium`}>
            Secure verification across military and commercial domains
          </p>

          {/* Process Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemFadeInUpVariant}
                custom={index}
                className="relative"
              >
                <ModernCard className="h-full p-6 flex flex-col items-center text-center">
                  <div className="mb-3">
                    {step.icon}
                  </div>
                  <h3 className={`${modernTypography.subheading} mb-2`} style={{ color: modernColors.text }}>
                    {step.title}
                  </h3>
                  <p className={`${modernTypography.body} text-sm`}>
                    {step.description}
                  </p>
                  {index < processSteps.length - 1 && (
                    <ArrowRight className="hidden md:block absolute -right-6 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-300" />
                  )}
                </ModernCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Application Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* MILITARY */}
          <motion.div 
            variants={fadeInUpVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col h-full"
          >
            <ModernCard className="h-full p-8 flex-1">
              <div className="flex items-center mb-4">
                <Shield className="h-5 w-5 mr-2 text-blue-600" />
                <ModernSectionHeader dark className="inline-block">
                  MILITARY
                </ModernSectionHeader>
              </div>

              <h3 className={`${modernTypography.subheading} mt-4 mb-4`} style={{ color: modernColors.text }}>
                Military Application: Secure property tracking and transfers
              </h3>
              
              <ul className="space-y-3 pl-4">
                <motion.li 
                  variants={itemFadeInUpVariant} 
                  custom={0}
                  className="flex items-start"
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-600 mt-2 mr-2 flex-shrink-0"></div>
                  <p className={modernTypography.body}>QR-code based digital transfers</p>
                </motion.li>
                <motion.li 
                  variants={itemFadeInUpVariant} 
                  custom={1}
                  className="flex items-start"
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-600 mt-2 mr-2 flex-shrink-0"></div>
                  <p className={modernTypography.body}>Zero-knowledge proof verification</p>
                </motion.li>
                <motion.li 
                  variants={itemFadeInUpVariant} 
                  custom={2}
                  className="flex items-start"
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-600 mt-2 mr-2 flex-shrink-0"></div>
                  <p className={modernTypography.body}>Blockchain-secured records</p>
                </motion.li>
              </ul>
            </ModernCard>
          </motion.div>

          {/* COMMERCIAL */}
          <motion.div 
            variants={fadeInUpVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col h-full"
          >
            <ModernCard className="h-full p-8 flex-1">
              <div className="flex items-center mb-4">
                <Laptop className="h-5 w-5 mr-2 text-emerald-600" />
                <ModernSectionHeader dark className="inline-block">
                  COMMERCIAL
                </ModernSectionHeader>
              </div>

              <h3 className={`${modernTypography.subheading} mt-4 mb-4`} style={{ color: modernColors.text }}>
                Commercial Integration: Enterprise system compatibility
              </h3>
              
              <ul className="space-y-3 pl-4">
                <motion.li 
                  variants={itemFadeInUpVariant} 
                  custom={0}
                  className="flex items-start"
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-600 mt-2 mr-2 flex-shrink-0"></div>
                  <p className={modernTypography.body}>Existing scanning infrastructure</p>
                </motion.li>
                <motion.li 
                  variants={itemFadeInUpVariant} 
                  custom={1}
                  className="flex items-start"
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-600 mt-2 mr-2 flex-shrink-0"></div>
                  <p className={modernTypography.body}>ERP/WMS API integration</p>
                </motion.li>
                <motion.li 
                  variants={itemFadeInUpVariant} 
                  custom={2}
                  className="flex items-start"
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-600 mt-2 mr-2 flex-shrink-0"></div>
                  <p className={modernTypography.body}>Shell token payments</p>
                </motion.li>
              </ul>
            </ModernCard>
          </motion.div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide5;