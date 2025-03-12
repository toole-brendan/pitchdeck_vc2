import React from 'react';
import SlideLayout from '@/components/PitchDeck/SlideLayout';
import { 
  ModernCard, 
  ModernBadge, 
  ModernDivider,
  modernTypography, 
  modernColors
} from '@/components/PitchDeck/ModernSlideStyles';
import { 
  Smartphone, 
  Shield, 
  FileCheck, 
  Database, 
  CreditCard, 
  Users, 
  Layers,
  Wifi,
  Lock,
  Eye,
  LayoutDashboard,
  Link
} from 'lucide-react';

const Slide10: React.FC = () => {
  const TOTAL_SLIDES = 18;

  const workflowSteps = [
    { 
      number: 1,
      title: 'Scan', 
      description: 'User scans QR code with mobile app'
    },
    { 
      number: 2,
      title: 'Verify', 
      description: 'Blockchain verification confirms authenticity'
    },
    { 
      number: 3,
      title: 'Transfer', 
      description: 'Securely transfer ownership with digital signatures'
    },
    { 
      number: 4,
      title: 'Record', 
      description: 'Transaction recorded permanently on blockchain'
    }
  ];

  return (
    <SlideLayout title="User Experience" slideNumber={10} totalSlides={TOTAL_SLIDES}>
      <div className="flex flex-col gap-8">
        <div className="mb-2 text-center max-w-2xl mx-auto">
          <h2 className={modernTypography.pageTitle}>
            Intuitive interfaces for defense and commercial applications
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <ModernCard className="p-8 md:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <FileCheck className="h-7 w-7" style={{ color: modernColors.military }} />
              <h3 className={modernTypography.heading}>
                User Workflow
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {workflowSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-slate-50/80 backdrop-blur-sm p-5 border border-slate-100 h-full">
                    <div className="flex flex-col h-full">
                      <div className="flex justify-between items-center mb-3">
                        <span className={`${modernTypography.label} text-black`}>{step.title}</span>
                        <span className="bg-blue-500/10 text-blue-500 w-6 h-6 flex items-center justify-center rounded-full text-sm">
                          {step.number}
                        </span>
                      </div>
                      <p className={modernTypography.small}>{step.description}</p>
                    </div>
                  </div>
                  {index < workflowSteps.length - 1 && (
                    <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                      <div className="w-8 h-[1px] bg-slate-200"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </ModernCard>

          <ModernCard className="p-8 flex flex-col">
            <div className="flex items-center gap-4 mb-5">
              <Smartphone className="h-7 w-7" style={{ color: modernColors.military }} />
              <h3 className={modernTypography.heading}>
                Interface Design
              </h3>
            </div>
            <div className="flex-grow bg-black rounded-md backdrop-blur-sm p-0 border border-slate-800 overflow-hidden">
              <div className="w-full mx-auto">
                <img 
                  src="/assets/images/interface-dashboard.svg" 
                  alt="HandReceipt Dashboard Interface showing real-time inventory metrics" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </ModernCard>

          <ModernCard className="p-8">
            <div className="grid grid-cols-1 gap-6">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <Shield className="h-6 w-6" style={{ color: modernColors.military }} />
                  <h3 className={`${modernTypography.subheading}`} style={{ color: modernColors.military }}>
                    Defense UX
                  </h3>
                </div>
                <ul className={`space-y-3 ${modernTypography.list}`}>
                  <li className="flex items-start gap-3">
                    <Eye className="w-4 h-4 mt-1" style={{ color: modernColors.military }} />
                    <span><strong>Simplicity First:</strong> Designed for field conditions with minimal training</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Wifi className="w-4 h-4 mt-1" style={{ color: modernColors.military }} />
                    <span><strong>Offline Mode:</strong> Functions without connectivity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Lock className="w-4 h-4 mt-1" style={{ color: modernColors.military }} />
                    <span><strong>CAC Integration:</strong> Secure authentication using military ID cards</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-4 h-4 mt-1" style={{ color: modernColors.military }} />
                    <span><strong>Ruggedized Interface:</strong> High contrast and readable in all conditions</span>
                  </li>
                </ul>
              </div>
              
              <ModernDivider className="my-4" />
              
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <CreditCard className="h-6 w-6" style={{ color: modernColors.commercial }} />
                  <h3 className={`${modernTypography.subheading}`} style={{ color: modernColors.commercial }}>
                    Commercial UX
                  </h3>
                </div>
                <ul className={`space-y-3 ${modernTypography.list}`}>
                  <li className="flex items-start gap-3">
                    <LayoutDashboard className="w-4 h-4 mt-1" style={{ color: modernColors.commercial }} />
                    <span><strong>Payment Dashboard:</strong> Real-time visibility of payment status</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CreditCard className="w-4 h-4 mt-1" style={{ color: modernColors.commercial }} />
                    <span><strong>Shell Integration:</strong> One-click payment processing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Users className="w-4 h-4 mt-1" style={{ color: modernColors.commercial }} />
                    <span><strong>Multi-user Roles:</strong> Customizable permissions for team members</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Link className="w-4 h-4 mt-1" style={{ color: modernColors.commercial }} />
                    <span><strong>API Connections:</strong> Seamless integration with ERP and WMS</span>
                  </li>
                </ul>
              </div>
            </div>
          </ModernCard>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide10;