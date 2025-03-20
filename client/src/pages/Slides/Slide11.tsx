import React from 'react';
import SlideLayout from '@/components/PitchDeck/SlideLayout';
import { 
  ModernCard, 
  ModernBadge,
  modernTypography, 
  modernColors
} from '@/components/PitchDeck/ModernSlideStyles';
import { 
  Globe, 
  Shield, 
  FileText, 
  AlertCircle, 
  Check,
  Gauge,
  BarChart3,
  Eye
} from 'lucide-react';
import { useContentScale } from '@/hooks/useContentScale';

const Slide11: React.FC = () => {
  const TOTAL_SLIDES = 18;
  
  // Use our custom hook to manage content scaling
  const { contentRef, scale, isScaled } = useContentScale();

  // Key challenges with current partner forces aid tracking
  const challenges = [
    {
      title: "Limited Transparency",
      description: "Current systems provide minimal visibility into aid distribution and utilization",
      icon: <Eye className="h-5 w-5" />,
      color: modernColors.military
    },
    {
      title: "Accountability Gaps",
      description: "Difficulty tracking equipment from delivery to deployment and final disposition",
      icon: <AlertCircle className="h-5 w-5" />,
      color: modernColors.military
    },
    {
      title: "Congressional Reporting",
      description: "Delayed and incomplete data for mandated reports on foreign military aid",
      icon: <FileText className="h-5 w-5" />,
      color: modernColors.military
    }
  ];

  // HandReceipt benefits for partner forces aid tracking
  const benefits = [
    {
      title: "Immutable Tracking",
      description: "Blockchain-secured records of all equipment transfers from origin to recipient forces",
      icon: <Shield className="h-5 w-5" />,
      color: modernColors.crypto
    },
    {
      title: "Real-time Monitoring",
      description: "Live dashboard showing equipment status, utilization, and maintenance needs",
      icon: <Gauge className="h-5 w-5" />,
      color: modernColors.crypto
    },
    {
      title: "Compliance Automation",
      description: "Automated generation of required reports for Congress and oversight bodies",
      icon: <BarChart3 className="h-5 w-5" />,
      color: modernColors.crypto
    }
  ];

  // Usage scenarios
  const scenarios = [
    "Ukraine military assistance program",
    "NATO equipment transfers",
    "Counter-terrorism partner equipment",
    "Humanitarian aid tracking",
    "Coalition force equipment sharing"
  ];

  return (
    <SlideLayout 
      title="Partner Forces Aid Tracking" 
      subtitle="Military-grade solution for tracking and verifying equipment provided to partner forces"
      slideNumber={11} 
      totalSlides={TOTAL_SLIDES}
    >
      <div className="flex flex-col gap-6 mt-8 h-[calc(100vh-220px)]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 flex-grow">
          <div>
            <ModernCard className="h-full p-5">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="h-6 w-6" style={{ color: modernColors.military }} />
                <h3 className="text-xl font-medium">
                  Current Challenges
                </h3>
              </div>
              
              <div className="space-y-4">
                {challenges.map((challenge, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div 
                      className="w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: `${challenge.color}20` }}
                    >
                      {challenge.icon}
                    </div>
                    <div>
                      <p className="text-base font-medium mb-0.5" style={{ color: challenge.color }}>{challenge.title}</p>
                      <p className="text-sm">{challenge.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 p-3 rounded-md border border-slate-100" style={{ backgroundColor: `${modernColors.militaryLight}30` }}>
                <p className="text-base font-medium mb-1" style={{ color: modernColors.military }}>Compliance Requirements</p>
                <p className="text-sm">
                  Department of Defense policy requires tracking and reporting of military equipment 
                  provided to partner forces, with regular audits and chain-of-custody documentation.
                </p>
              </div>
            </ModernCard>
          </div>

          <div>
            <ModernCard className="h-full p-5">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-6 w-6" style={{ color: modernColors.crypto }} />
                <h3 className="text-xl font-medium">
                  HandReceipt Solution
                </h3>
              </div>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div 
                      className="w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: `${benefit.color}20` }}
                    >
                      {benefit.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-base font-medium mb-0.5" style={{ color: benefit.color }}>{benefit.title}</p>
                      <p className="text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 p-3 rounded-md border border-slate-100" style={{ backgroundColor: `${modernColors.cryptoLight}30` }}>
                <p className="text-base font-medium mb-1" style={{ color: modernColors.crypto }}>Usage Scenarios</p>
                <ul className="space-y-1.5">
                  {scenarios.map((scenario, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: modernColors.crypto }} />
                      <span className="text-sm">{scenario}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ModernCard>
          </div>
        </div>

        <div className="flex-grow-0">
          <ModernCard className="p-4" style={{ 
            borderTop: `2px solid ${modernColors.military}`,
            borderBottom: `2px solid ${modernColors.crypto}`,
            background: 'linear-gradient(120deg, rgba(30, 64, 175, 0.05), rgba(126, 34, 206, 0.05))'
          }}>
            <div className="flex items-center gap-2 mb-2">
              <ModernBadge color={modernColors.military}>STRATEGIC VALUE</ModernBadge>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div>
                <h3 className="text-lg font-medium mb-2" style={{ color: modernColors.military }}>
                  End-to-end verification for partner force equipment
                </h3>
                <p className="text-sm">
                  HandReceipt provides the Department of Defense and State Department with a tamper-proof system to track 
                  military assistance from manufacturer to partner forces, ensuring compliance with congressional mandates and 
                  preventing misuse. Our blockchain verification provides unparalleled accountability for taxpayer-funded equipment.
                </p>
              </div>
            </div>
          </ModernCard>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide11;
