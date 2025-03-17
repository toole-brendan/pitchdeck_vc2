import React from 'react';
import SlideLayout from '@/components/PitchDeck/SlideLayout';
import { 
  ModernCard,
  ModernBadge,
  ModernDivider,
  ModernSectionHeader,
  modernTypography,
  modernColors
} from '@/components/PitchDeck/ModernSlideStyles';
import { QrCode, Database, Cpu, CreditCard, Shield, Laptop, ArrowRight } from 'lucide-react';

const Slide5: React.FC = () => {
  const TOTAL_SLIDES = 18;
  
  // Process steps with corresponding icons
  const processSteps = [
    { 
      title: 'QR Scan',
      description: 'Scan item code with mobile app',
      icon: <QrCode className="h-6 w-6" style={{ color: modernColors.military }} />
    },
    { 
      title: 'Blockchain Record',
      description: 'Encrypted data on immutable ledger',
      icon: <Database className="h-6 w-6" style={{ color: modernColors.crypto }} />
    },
    { 
      title: 'Smart Contract',
      description: 'Automated verification process',
      icon: <Cpu className="h-6 w-6" style={{ color: modernColors.crypto }} />
    },
    { 
      title: 'Settlement',
      description: 'Instant payment on verification',
      icon: <CreditCard className="h-6 w-6" style={{ color: modernColors.crypto }} />
    }
  ];

  return (
    <SlideLayout title="HandReceipt Solution" slideNumber={5} totalSlides={TOTAL_SLIDES}>
      <div className="max-w-5xl mx-auto">
        {/* Subtitle */}
        <div className="text-center mb-8">
          <p className={`${modernTypography.subtitle} max-w-3xl mx-auto`}>
            <span style={{ color: modernColors.crypto }}>Blockchain-secured</span> supply chain verification with <span style={{ color: modernColors.military }}>military</span> and <span style={{ color: modernColors.commercial }}>commercial</span> applications
          </p>
        </div>

        {/* MULTI-DOMAIN SOLUTION */}
        <div className="mb-8">
          <ModernBadge color={modernColors.crypto} className="mb-4">
            MULTI-DOMAIN SOLUTION
          </ModernBadge>
          
          <p className={`${modernTypography.body} mt-4 mb-6 text-center font-medium`}>
            Secure verification across <span style={{ color: modernColors.military }}>military</span> and <span style={{ color: modernColors.commercial }}>commercial</span> domains
          </p>

          {/* Process Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="relative"
              >
                <ModernCard className="h-full p-6 flex flex-col items-center text-center" style={{
                  borderTop: `2px solid ${index === 3 ? modernColors.commercial : 
                              index === 0 ? modernColors.military : 
                              modernColors.crypto}`,
                  backgroundColor: `${index === 3 ? modernColors.commercialLight : 
                                   index === 0 ? modernColors.militaryLight :
                                   modernColors.cryptoLight}10`
                }}>
                  <div className="mb-3">
                    {step.icon}
                  </div>
                  <h3 className={`${modernTypography.subheading} mb-2`} style={{ 
                    color: index === 3 ? modernColors.commercial : 
                           index === 0 ? modernColors.military : 
                           modernColors.crypto
                  }}>
                    {step.title}
                  </h3>
                  <p className={`${modernTypography.body} text-sm`}>
                    {step.description}
                  </p>
                  {index < processSteps.length - 1 && (
                    <ArrowRight className="hidden md:block absolute -right-6 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-300" />
                  )}
                </ModernCard>
              </div>
            ))}
          </div>
        </div>

        {/* Application Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* MILITARY */}
          <div className="flex flex-col h-full">
            <ModernCard className="h-full p-8 flex-1 border-t-4" style={{
              borderColor: modernColors.military,
              backgroundColor: `${modernColors.militaryLight}15`
            }}>
              <div className="flex items-center mb-4">
                <Shield className="h-5 w-5 mr-2" style={{ color: modernColors.military }} />
                <ModernBadge color={modernColors.military}>
                  MILITARY
                </ModernBadge>
              </div>

              <h3 className={`${modernTypography.subheading} mt-4 mb-4`} style={{ color: modernColors.military }}>
                Military Application: Secure property tracking and transfers
              </h3>
              
              <ul className="space-y-3 pl-4">
                <li className="flex items-start">
                  <div className="h-1.5 w-1.5 rounded-full mt-2 mr-2 flex-shrink-0" style={{ backgroundColor: modernColors.military }}></div>
                  <p className={modernTypography.body}>QR-code based digital transfers</p>
                </li>
                <li className="flex items-start">
                  <div className="h-1.5 w-1.5 rounded-full mt-2 mr-2 flex-shrink-0" style={{ backgroundColor: modernColors.military }}></div>
                  <p className={modernTypography.body}><span style={{ color: modernColors.crypto }}>Zero-knowledge proof</span> verification</p>
                </li>
                <li className="flex items-start">
                  <div className="h-1.5 w-1.5 rounded-full mt-2 mr-2 flex-shrink-0" style={{ backgroundColor: modernColors.military }}></div>
                  <p className={modernTypography.body}><span style={{ color: modernColors.crypto }}>Blockchain-secured</span> records</p>
                </li>
              </ul>
            </ModernCard>
          </div>

          {/* COMMERCIAL */}
          <div className="flex flex-col h-full">
            <ModernCard className="h-full p-8 flex-1 border-t-4" style={{
              borderColor: modernColors.commercial,
              backgroundColor: `${modernColors.commercialLight}15`
            }}>
              <div className="flex items-center mb-4">
                <Laptop className="h-5 w-5 mr-2" style={{ color: modernColors.commercial }} />
                <ModernBadge color={modernColors.commercial}>
                  COMMERCIAL
                </ModernBadge>
              </div>

              <h3 className={`${modernTypography.subheading} mt-4 mb-4`} style={{ color: modernColors.commercial }}>
                Commercial Integration: Enterprise system compatibility
              </h3>
              
              <ul className="space-y-3 pl-4">
                <li className="flex items-start">
                  <div className="h-1.5 w-1.5 rounded-full mt-2 mr-2 flex-shrink-0" style={{ backgroundColor: modernColors.commercial }}></div>
                  <p className={modernTypography.body}>Existing scanning infrastructure</p>
                </li>
                <li className="flex items-start">
                  <div className="h-1.5 w-1.5 rounded-full mt-2 mr-2 flex-shrink-0" style={{ backgroundColor: modernColors.commercial }}></div>
                  <p className={modernTypography.body}>ERP/WMS API integration</p>
                </li>
                <li className="flex items-start">
                  <div className="h-1.5 w-1.5 rounded-full mt-2 mr-2 flex-shrink-0" style={{ backgroundColor: modernColors.commercial }}></div>
                  <p className={modernTypography.body}><span style={{ color: modernColors.crypto }}>Shell token</span> payments</p>
                </li>
              </ul>
            </ModernCard>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide5;