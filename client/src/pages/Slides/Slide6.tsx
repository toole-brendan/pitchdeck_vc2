import React from 'react';
import SlideLayout from '@/components/PitchDeck/SlideLayout';
import { motion } from 'framer-motion';
import { 
  ModernCard, 
  modernTypography, 
  modernColors,
  fadeInUpVariants,
  itemFadeInUpVariant
} from '@/components/PitchDeck/ModernSlideStyles';
import { Clock, BarChart3, TrendingUp, Layers } from 'lucide-react';

const Slide6: React.FC = () => {
  const TOTAL_SLIDES = 18;

  return (
    <SlideLayout title="Why Now" slideNumber={6} totalSlides={TOTAL_SLIDES}>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        variants={fadeInUpVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemFadeInUpVariant}
          custom={0}
          className="md:col-span-2"
        >
          <ModernCard className="p-8">
            <div className="flex items-center gap-4 mb-5">
              <Layers className="h-7 w-7 text-accent" />
              <h3 className={modernTypography.heading} style={{ color: modernColors.text }}>
                Policy Convergence
              </h3>
            </div>
            <p className={`${modernTypography.body} mb-4`}>
              Two major Trump administration initiatives have created a historic window of opportunity for HandReceipt:
            </p>
            <ul className={`space-y-3 ${modernTypography.list}`}>
              <li>• <strong>Defense Efficiency Mandate:</strong> DOGE initiative and 8% defense cuts ($68B/year) require DoD to modernize technology and supply chains, creating urgent demand for efficiency solutions.</li>
              <li>• <strong>Crypto Regulatory Clarity:</strong> Executive Order establishing clear frameworks for cryptocurrencies and digital assets, positioning the US as the "crypto capital of the planet."</li>
            </ul>
          </ModernCard>
        </motion.div>

        <motion.div
          variants={itemFadeInUpVariant}
          custom={1}
        >
          <ModernCard className="h-full p-8">
            <div className="flex items-center gap-4 mb-5">
              <Clock className="h-7 w-7 text-accent" />
              <h3 className={modernTypography.heading} style={{ color: modernColors.text }}>
                Convergence Timeline
              </h3>
            </div>
            <ul className={`space-y-3 ${modernTypography.list}`}>
              <li>• 12-18 Months to capitalize on both initiatives</li>
              <li>• HandReceipt's defense-grade blockchain + Shell token is the perfect solution for both mandates</li>
            </ul>
          </ModernCard>
        </motion.div>

        <motion.div
          variants={itemFadeInUpVariant}
          custom={2}
        >
          <ModernCard className="h-full p-8">
            <div className="flex items-center gap-4 mb-5">
              <BarChart3 className="h-7 w-7 text-accent" />
              <h3 className={modernTypography.heading} style={{ color: modernColors.text }}>
                Market Drivers
              </h3>
            </div>
            <ul className={`space-y-3 ${modernTypography.list}`}>
              <li>• <strong>DOGE Initiative:</strong> Trump's Department of Government Efficiency mandates modernizing federal technology - $68B Annual defense cuts targeted</li>
              <li>• <strong>Crypto Regulation Clarity:</strong> New regulatory framework making the US the 'crypto capital of the planet' - 180 Days to create framework</li>
              <li>• <strong>Supply Chain Crisis:</strong> Post-pandemic inventory verification failures at all-time high - $1.1T Annual inventory distortion</li>
            </ul>
          </ModernCard>
        </motion.div>

        <motion.div
          variants={itemFadeInUpVariant}
          custom={3}
          className="md:col-span-2"
        >
          <ModernCard className="p-8 bg-accent/10 border-accent/20">
            <div className="flex items-center gap-4 mb-5">
              <TrendingUp className="h-7 w-7 text-accent" />
              <h3 className={modernTypography.heading} style={{ color: modernColors.text }}>
                Solution Banner
              </h3>
            </div>
            <p className={`${modernTypography.body} font-medium text-accent mb-2`}>
              HandReceipt + Shell Token: The Perfect Solution for Both Mandates
            </p>
            <p className={`${modernTypography.body}`}>
              Our military-grade blockchain solution with integrated Shell token directly addresses both Trump administration initiatives: defense efficiency through inventory optimization and crypto advancement through stablecoin payments.
            </p>
          </ModernCard>
        </motion.div>
      </motion.div>
    </SlideLayout>
  );
};

export default Slide6;