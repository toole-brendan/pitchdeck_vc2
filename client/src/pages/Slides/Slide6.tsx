import React from 'react';
import SlideLayout from '@/components/PitchDeck/SlideLayout';
import { 
  ModernCard, 
  modernTypography, 
  modernColors
} from '@/components/PitchDeck/ModernSlideStyles';
import { Clock, BarChart3, TrendingUp, Layers } from 'lucide-react';

const Slide6: React.FC = () => {
  const TOTAL_SLIDES = 18;

  return (
    <SlideLayout title="Why Now" slideNumber={6} totalSlides={TOTAL_SLIDES}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="md:col-span-2">
          <ModernCard className="p-8" style={{ 
            borderLeft: `3px solid ${modernColors.accent}`,
            borderRight: `3px solid ${modernColors.accent}`
          }}>
            <div className="flex items-center gap-4 mb-5">
              <Layers className="h-7 w-7" style={{ color: modernColors.accent }} />
              <h3 className={modernTypography.heading}>
                Policy Convergence
              </h3>
            </div>
            <p className={`${modernTypography.body} mb-4`}>
              Two major Trump administration initiatives have created a historic window of opportunity for HandReceipt:
            </p>
            <ul className={`space-y-3 ${modernTypography.list}`}>
              <li style={{ 
                backgroundColor: `${modernColors.militaryLight}50`, 
                padding: '0.75rem',
                borderRadius: '0.25rem' 
              }}>
                • <strong style={{ color: modernColors.military }}>Defense Efficiency Mandate:</strong> DOGE initiative and 8% defense cuts ($68B/year) require DoD to modernize technology and supply chains, creating urgent demand for efficiency solutions.
              </li>
              <li style={{ 
                backgroundColor: `${modernColors.cryptoLight}50`, 
                padding: '0.75rem',
                borderRadius: '0.25rem' 
              }}>
                • <strong style={{ color: modernColors.crypto }}>Crypto Regulatory Clarity:</strong> Executive Order establishing clear frameworks for cryptocurrencies and digital assets, positioning the US as the "crypto capital of the planet."
              </li>
            </ul>
          </ModernCard>
        </div>

        <div>
          <ModernCard className="h-full p-8" style={{ backgroundColor: 'rgba(243, 232, 255, 0.05)', borderTop: `2px solid ${modernColors.crypto}` }}>
            <div className="flex items-center gap-4 mb-5">
              <Clock className="h-7 w-7" style={{ color: modernColors.crypto }} />
              <h3 className={modernTypography.heading}>
                Convergence Timeline
              </h3>
            </div>
            <ul className={`space-y-3 ${modernTypography.list}`}>
              <li>• <span className="text-lg font-semibold" style={{ color: modernColors.crypto }}>12-18 Months</span> to capitalize on both initiatives</li>
              <li>• HandReceipt's <span style={{ color: modernColors.military }}>defense-grade blockchain</span> + <span style={{ color: modernColors.crypto }}>Shell token</span> is the perfect solution for both mandates</li>
            </ul>
          </ModernCard>
        </div>

        <div>
          <ModernCard className="h-full p-8" style={{ backgroundColor: 'rgba(219, 234, 254, 0.05)', borderTop: `2px solid ${modernColors.military}` }}>
            <div className="flex items-center gap-4 mb-5">
              <BarChart3 className="h-7 w-7" style={{ color: modernColors.military }} />
              <h3 className={modernTypography.heading}>
                Market Drivers
              </h3>
            </div>
            <ul className={`space-y-3 ${modernTypography.list}`}>
              <li>• <strong style={{ color: modernColors.military }}>DOGE Initiative:</strong> Trump's Department of Government Efficiency mandates modernizing federal technology - <span className="font-semibold" style={{ color: modernColors.military }}>$68B</span> Annual defense cuts targeted</li>
              <li>• <strong style={{ color: modernColors.crypto }}>Crypto Regulation Clarity:</strong> New regulatory framework making the US the 'crypto capital of the planet' - <span className="font-semibold" style={{ color: modernColors.crypto }}>180 Days</span> to create framework</li>
              <li>• <strong style={{ color: modernColors.commercial }}>Supply Chain Crisis:</strong> Post-pandemic inventory verification failures at all-time high - <span className="font-semibold" style={{ color: modernColors.commercial }}>$1.1T</span> Annual inventory distortion</li>
            </ul>
          </ModernCard>
        </div>

        <div className="md:col-span-2">
          <ModernCard className="p-8" style={{ 
            background: 'linear-gradient(120deg, rgba(30, 64, 175, 0.05), rgba(126, 34, 206, 0.05), rgba(234, 88, 12, 0.05))',
            borderTop: `2px solid ${modernColors.military}`,
            borderBottom: `2px solid ${modernColors.commercial}`,
          }}>
            <div className="flex items-center gap-4 mb-5">
              <TrendingUp className="h-7 w-7" style={{ color: modernColors.accent }} />
              <h3 className={modernTypography.heading}>
                Solution
              </h3>
            </div>
            <p className={`${modernTypography.body} font-medium mb-2`} style={{ color: modernColors.accent }}>
              HandReceipt + Shell Token: The Perfect Solution for Both Mandates
            </p>
            <p className={`${modernTypography.body}`}>
              Our <span style={{ color: modernColors.military }}>military-grade blockchain solution</span> with integrated <span style={{ color: modernColors.crypto }}>Shell token</span> directly addresses both Trump administration initiatives: <span style={{ color: modernColors.military }}>defense efficiency</span> through inventory optimization and <span style={{ color: modernColors.crypto }}>crypto advancement</span> through stablecoin payments.
            </p>
          </ModernCard>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide6;