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

const Slide11: React.FC = () => {
  const TOTAL_SLIDES = 18;

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
    <SlideLayout title="Partner Forces Aid Tracking" slideNumber={11} totalSlides={TOTAL_SLIDES}>
      <div className="flex flex-col gap-8">
        <div className="mb-2 text-center max-w-2xl mx-auto">
          <h2 className={modernTypography.pageTitle}>
            Military-grade solution for <span style={{ color: modernColors.military }}>tracking</span> and <span style={{ color: modernColors.crypto }}>verifying</span> equipment provided to partner forces
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div>
            <ModernCard className="h-full p-8">
              <div className="flex items-center gap-4 mb-6">
                <Globe className="h-7 w-7" style={{ color: modernColors.military }} />
                <h3 className={modernTypography.heading}>
                  Current Challenges
                </h3>
              </div>
              
              <div className="space-y-6">
                {challenges.map((challenge, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div 
                      className="w-8 h-8 rounded-md flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${challenge.color}20` }}
                    >
                      {challenge.icon}
                    </div>
                    <div>
                      <p className={`${modernTypography.label} mb-1`} style={{ color: challenge.color }}>{challenge.title}</p>
                      <p className={`${modernTypography.small}`}>{challenge.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 rounded-md border border-slate-100" style={{ backgroundColor: `${modernColors.militaryLight}30` }}>
                <p className={`${modernTypography.label} mb-2`} style={{ color: modernColors.military }}>Compliance Requirements</p>
                <p className={`${modernTypography.small}`}>
                  Department of Defense policy requires tracking and reporting of military equipment 
                  provided to partner forces, with regular audits and chain-of-custody documentation.
                </p>
              </div>
            </ModernCard>
          </div>

          <div>
            <ModernCard className="h-full p-8">
              <div className="flex items-center gap-4 mb-6">
                <Shield className="h-7 w-7" style={{ color: modernColors.crypto }} />
                <h3 className={modernTypography.heading}>
                  HandReceipt Solution
                </h3>
              </div>
              
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div 
                      className="w-8 h-8 rounded-md flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${benefit.color}20` }}
                    >
                      {benefit.icon}
                    </div>
                    <div className="flex-1">
                      <p className={`${modernTypography.label} mb-1`} style={{ color: benefit.color }}>{benefit.title}</p>
                      <p className={`${modernTypography.small}`}>{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 rounded-md border border-slate-100" style={{ backgroundColor: `${modernColors.cryptoLight}30` }}>
                <p className={`${modernTypography.label} mb-2`} style={{ color: modernColors.crypto }}>Usage Scenarios</p>
                <ul className="space-y-2">
                  {scenarios.map((scenario, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: modernColors.crypto }} />
                      <span className={`${modernTypography.small}`}>{scenario}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ModernCard>
          </div>
        </div>

        <div className="md:col-span-2">
          <ModernCard className="p-6" style={{ 
            borderTop: `2px solid ${modernColors.military}`,
            borderBottom: `2px solid ${modernColors.crypto}`,
            background: 'linear-gradient(120deg, rgba(30, 64, 175, 0.05), rgba(126, 34, 206, 0.05))'
          }}>
            <div className="flex items-center gap-4 mb-4">
              <ModernBadge color={modernColors.military}>STRATEGIC VALUE</ModernBadge>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div>
                <h3 className={`${modernTypography.subheading} mb-4`} style={{ color: modernColors.military }}>
                  End-to-end verification for partner force equipment
                </h3>
                <p className={`${modernTypography.body}`}>
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
