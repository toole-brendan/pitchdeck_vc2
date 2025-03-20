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
  Link,
  ArrowUp
} from 'lucide-react';

const Slide10: React.FC = () => {
  const TOTAL_SLIDES = 18;

  return (
    <SlideLayout 
      title="User Experience" 
      subtitle="Intuitive interfaces for defense and commercial applications"
      slideNumber={10} 
      totalSlides={TOTAL_SLIDES}
    >
      <div className="flex flex-col items-center justify-center h-[calc(100vh-220px)] pt-3">
        <div className="grid grid-cols-3 gap-4 w-full max-w-5xl">
          {/* Column 1: Interface Design */}
          <ModernCard className="p-0 border border-gray-200 h-full">
            <div className="p-3 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <Smartphone className="h-4 w-4" style={{ color: modernColors.military }} />
                <h3 className="text-lg font-medium">Interface Design</h3>
              </div>
            </div>
            
            <div className="bg-black w-full h-[calc(100%-50px)] flex items-center justify-center">
              <img 
                src="assets/images/HR.png" 
                alt="HandReceipt Dashboard Interface" 
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </ModernCard>
          
          {/* Column 2: UX Features - Stacked */}
          <div className="flex flex-col space-y-3">
            {/* Defense UX */}
            <ModernCard className="p-3 border-l-3 flex-1" style={{ borderLeftColor: modernColors.military }}>
              <div className="flex items-center gap-2 mb-2">
                <Shield className="h-4 w-4" style={{ color: modernColors.military }} />
                <h3 className="text-lg font-medium">Defense UX</h3>
              </div>
              
              <ul className="space-y-1.5">
                <li className="flex items-start gap-1.5">
                  <div className="w-4 h-4 rounded-full flex items-center justify-center bg-blue-100 flex-shrink-0 mt-0.5">
                    <Eye className="w-2.5 h-2.5" style={{ color: modernColors.military }} />
                  </div>
                  <div>
                    <span className="text-sm"><strong>Simplicity First:</strong> Designed for field conditions with minimal training</span>
                  </div>
                </li>
                <li className="flex items-start gap-1.5">
                  <div className="w-4 h-4 rounded-full flex items-center justify-center bg-blue-100 flex-shrink-0 mt-0.5">
                    <Wifi className="w-2.5 h-2.5" style={{ color: modernColors.military }} />
                  </div>
                  <div>
                    <span className="text-sm"><strong>Offline Mode:</strong> Functions without connectivity</span>
                  </div>
                </li>
                <li className="flex items-start gap-1.5">
                  <div className="w-4 h-4 rounded-full flex items-center justify-center bg-blue-100 flex-shrink-0 mt-0.5">
                    <Lock className="w-2.5 h-2.5" style={{ color: modernColors.military }} />
                  </div>
                  <div>
                    <span className="text-sm"><strong>CAC Integration:</strong> Secure authentication using military ID cards</span>
                  </div>
                </li>
                <li className="flex items-start gap-1.5">
                  <div className="w-4 h-4 rounded-full flex items-center justify-center bg-blue-100 flex-shrink-0 mt-0.5">
                    <Shield className="w-2.5 h-2.5" style={{ color: modernColors.military }} />
                  </div>
                  <div>
                    <span className="text-sm"><strong>Ruggedized Interface:</strong> High contrast and readable in all conditions</span>
                  </div>
                </li>
              </ul>
            </ModernCard>
            
            {/* Commercial UX */}
            <ModernCard className="p-3 border-l-3 flex-1" style={{ borderLeftColor: modernColors.commercial }}>
              <div className="flex items-center gap-2 mb-2">
                <CreditCard className="h-4 w-4" style={{ color: modernColors.commercial }} />
                <h3 className="text-lg font-medium">Commercial UX</h3>
              </div>
              
              <ul className="space-y-1.5">
                <li className="flex items-start gap-1.5">
                  <div className="w-4 h-4 rounded-full flex items-center justify-center bg-orange-100 flex-shrink-0 mt-0.5">
                    <LayoutDashboard className="w-2.5 h-2.5" style={{ color: modernColors.commercial }} />
                  </div>
                  <div>
                    <span className="text-sm"><strong>Payment Dashboard:</strong> Real-time visibility of payment status</span>
                  </div>
                </li>
                <li className="flex items-start gap-1.5">
                  <div className="w-4 h-4 rounded-full flex items-center justify-center bg-orange-100 flex-shrink-0 mt-0.5">
                    <CreditCard className="w-2.5 h-2.5" style={{ color: modernColors.commercial }} />
                  </div>
                  <div>
                    <span className="text-sm"><strong>Shell Integration:</strong> One-click payment processing</span>
                  </div>
                </li>
                <li className="flex items-start gap-1.5">
                  <div className="w-4 h-4 rounded-full flex items-center justify-center bg-orange-100 flex-shrink-0 mt-0.5">
                    <Users className="w-2.5 h-2.5" style={{ color: modernColors.commercial }} />
                  </div>
                  <div>
                    <span className="text-sm"><strong>Multi-user Roles:</strong> Customizable permissions for team members</span>
                  </div>
                </li>
                <li className="flex items-start gap-1.5">
                  <div className="w-4 h-4 rounded-full flex items-center justify-center bg-orange-100 flex-shrink-0 mt-0.5">
                    <Link className="w-2.5 h-2.5" style={{ color: modernColors.commercial }} />
                  </div>
                  <div>
                    <span className="text-sm"><strong>API Connections:</strong> Seamless integration with ERP and WMS</span>
                  </div>
                </li>
              </ul>
            </ModernCard>
          </div>
          
          {/* Column 3: User Workflow - Vertical Process */}
          <ModernCard className="p-3 h-full">
            <div className="flex items-center gap-2 mb-3">
              <FileCheck className="h-4 w-4" style={{ color: modernColors.military }} />
              <h3 className="text-lg font-medium">User Workflow</h3>
            </div>
            
            {/* Vertical workflow with connecting line */}
            <div className="relative flex flex-col justify-between items-center h-[calc(100%-45px)] py-2">
              {/* Connecting line */}
              <div className="absolute w-[1px] bg-gray-200 top-0 bottom-0 left-[50%] z-0"></div>
              
              {/* Step 4 (Top) */}
              <div className="flex flex-col items-center relative z-10 mb-4">
                <div className="w-8 h-8 rounded-full flex items-center justify-center mb-1 bg-purple-100">
                  <span className="text-purple-800 font-semibold text-sm">4</span>
                </div>
                <h4 className="text-sm font-medium">Record</h4>
                <p className="text-xs text-center max-w-[150px]">Transaction recorded permanently on blockchain</p>
              </div>
              
              {/* Arrow 3 */}
              <div className="text-gray-300 z-10">
                <ArrowUp className="h-4 w-4" />
              </div>
              
              {/* Step 3 */}
              <div className="flex flex-col items-center relative z-10 my-1">
                <div className="w-8 h-8 rounded-full flex items-center justify-center mb-1 bg-blue-100">
                  <span className="text-blue-800 font-semibold text-sm">3</span>
                </div>
                <h4 className="text-sm font-medium">Transfer</h4>
                <p className="text-xs text-center max-w-[150px]">Securely transfer ownership with digital signatures</p>
              </div>
              
              {/* Arrow 2 */}
              <div className="text-gray-300 z-10">
                <ArrowUp className="h-4 w-4" />
              </div>
              
              {/* Step 2 */}
              <div className="flex flex-col items-center relative z-10 my-1">
                <div className="w-8 h-8 rounded-full flex items-center justify-center mb-1 bg-purple-100">
                  <span className="text-purple-800 font-semibold text-sm">2</span>
                </div>
                <h4 className="text-sm font-medium">Verify</h4>
                <p className="text-xs text-center max-w-[150px]">Blockchain verification confirms authenticity</p>
              </div>
              
              {/* Arrow 1 */}
              <div className="text-gray-300 z-10">
                <ArrowUp className="h-4 w-4" />
              </div>
              
              {/* Step 1 (Bottom) */}
              <div className="flex flex-col items-center relative z-10 mt-1">
                <div className="w-8 h-8 rounded-full flex items-center justify-center mb-1 bg-blue-100">
                  <span className="text-blue-800 font-semibold text-sm">1</span>
                </div>
                <h4 className="text-sm font-medium">Scan</h4>
                <p className="text-xs text-center max-w-[150px]">User scans QR code with mobile app</p>
              </div>
            </div>
          </ModernCard>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide10;
