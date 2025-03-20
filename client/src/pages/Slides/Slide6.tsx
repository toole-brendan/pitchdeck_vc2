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
    <SlideLayout 
      title="Why Now" 
      subtitle="Policy convergence and market timing creating a perfect window of opportunity"
      slideNumber={6} 
      totalSlides={TOTAL_SLIDES}
    >
      <div className="flex flex-col gap-4 mt-12">
        <div>
          <ModernCard className="p-6" style={{ 
            borderLeft: `3px solid ${modernColors.crypto}`,
            borderRight: `3px solid ${modernColors.crypto}`
          }}>
            <div className="flex items-center gap-3 mb-3">
              <Layers className="h-6 w-6" style={{ color: modernColors.crypto }} />
              <h3 className="text-xl font-light">
                Policy Convergence
              </h3>
            </div>
            <p className="text-sm mb-3">
              Two major Trump administration initiatives have created a historic window of opportunity for HandReceipt:
            </p>
            <ul className="space-y-2 text-sm">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <ModernCard className="h-full p-6" style={{ backgroundColor: 'rgba(243, 232, 255, 0.05)', borderTop: `2px solid ${modernColors.crypto}` }}>
              <div className="flex items-center gap-3 mb-3">
                <Clock className="h-6 w-6" style={{ color: modernColors.crypto }} />
                <h3 className="text-xl font-light">
                  Convergence Timeline
                </h3>
              </div>
              <ul className="space-y-2 text-sm">
                <li>• <span className="text-lg font-semibold" style={{ color: modernColors.crypto }}>12-18 Months</span> to capitalize on both initiatives</li>
                <li>• HandReceipt's <span style={{ color: modernColors.military }}>defense-grade blockchain</span> + <span style={{ color: modernColors.crypto }}>Shell token</span> is the perfect solution for both mandates</li>
              </ul>
            </ModernCard>
          </div>

          <div>
            <ModernCard className="h-full p-6" style={{ backgroundColor: 'rgba(219, 234, 254, 0.05)', borderTop: `2px solid ${modernColors.military}` }}>
              <div className="flex items-center gap-3 mb-3">
                <BarChart3 className="h-6 w-6" style={{ color: modernColors.military }} />
                <h3 className="text-xl font-light">
                  Market Drivers
                </h3>
              </div>
              <ul className="space-y-2 text-sm">
                <li>• <strong style={{ color: modernColors.military }}>DOGE Initiative:</strong> Trump's Department of Government Efficiency mandates modernizing federal technology - <span className="font-semibold" style={{ color: modernColors.military }}>$68B</span> Annual defense cuts targeted</li>
                <li>• <strong style={{ color: modernColors.crypto }}>Crypto Regulation Clarity:</strong> New regulatory framework making the US the 'crypto capital of the planet' - <span className="font-semibold" style={{ color: modernColors.crypto }}>180 Days</span> to create framework</li>
                <li>• <strong style={{ color: modernColors.commercial }}>Supply Chain Crisis:</strong> Post-pandemic inventory verification failures at all-time high - <span className="font-semibold" style={{ color: modernColors.commercial }}>$1.1T</span> Annual inventory distortion</li>
              </ul>
            </ModernCard>
          </div>
        </div>

        <div>
          <ModernCard className="p-6" style={{ 
            background: 'linear-gradient(120deg, rgba(30, 64, 175, 0.05), rgba(126, 34, 206, 0.05), rgba(234, 88, 12, 0.05))',
            borderTop: `2px solid ${modernColors.military}`,
            borderBottom: `2px solid ${modernColors.commercial}`,
          }}>
            <div className="flex items-center gap-3 mb-3">
              <TrendingUp className="h-6 w-6" style={{ color: modernColors.crypto }} />
              <h3 className="text-xl font-light">
                Solution
              </h3>
            </div>
            <p className="text-sm font-medium mb-2" style={{ color: modernColors.crypto }}>
              HandReceipt + Shell Token: The Perfect Solution for Both Mandates
            </p>
            <p className="text-sm">
              Our <span style={{ color: modernColors.military }}>military-grade blockchain solution</span> with integrated <span style={{ color: modernColors.crypto }}>Shell token</span> directly addresses both Trump administration initiatives: <span style={{ color: modernColors.military }}>defense efficiency</span> through inventory optimization and <span style={{ color: modernColors.crypto }}>crypto advancement</span> through stablecoin payments.
            </p>
          </ModernCard>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide6;