import React from 'react';
import SlideLayout from '@/components/PitchDeck/SlideLayout';
import { motion } from 'framer-motion';
import { 
  ModernCard, 
  ModernDivider,
  modernTypography,
  modernColors,
  fadeInVariants,
  fadeInUpVariants,
  itemFadeInUpVariant
} from '@/components/PitchDeck/ModernSlideStyles';
import { PieChart, BarChart3, Briefcase, Target, LineChart, Workflow } from 'lucide-react';

const Slide7: React.FC = () => {
  const TOTAL_SLIDES = 18;

  return (
    <SlideLayout title="Market Opportunity" slideNumber={7} totalSlides={TOTAL_SLIDES}>
      <motion.div
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
        className="mb-10 text-center max-w-2xl mx-auto"
      >
        <h2 className={`${modernTypography.heading} mb-5`} style={{ color: modernColors.text }}>
          TAM, SAM, and SOM analysis for blockchain-powered supply chain verification
        </h2>
      </motion.div>

      {/* Market Size Analysis */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
        variants={fadeInUpVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemFadeInUpVariant}
          custom={0}
          className="md:col-span-3"
        >
          <ModernCard className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <PieChart className="h-7 w-7 text-accent" />
              <h3 className={modernTypography.heading} style={{ color: modernColors.text }}>
                Market Size Analysis
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-accent/10 rounded-lg">
                <p className={`${modernTypography.subheading} font-bold mb-1`}>TAM: $120B</p>
                <p className={modernTypography.body}>Total Addressable Market - Global blockchain supply chain market</p>
              </div>
              <div className="p-4 bg-accent/10 rounded-lg">
                <p className={`${modernTypography.subheading} font-bold mb-1`}>SAM: $32B</p>
                <p className={modernTypography.body}>Serviceable Available Market - U.S. defense & enterprise solutions</p>
              </div>
              <div className="p-4 bg-accent/10 rounded-lg">
                <p className={`${modernTypography.subheading} font-bold mb-1`}>SOM: $750M</p>
                <p className={modernTypography.body}>Serviceable Obtainable Market - Initial defense & contractor focus</p>
              </div>
            </div>
          </ModernCard>
        </motion.div>
      </motion.div>

      {/* Defense and Commercial Markets */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
        variants={fadeInUpVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemFadeInUpVariant}
          custom={1}
        >
          <ModernCard className="h-full p-6">
            <div className="flex items-center gap-4 mb-4">
              <Briefcase className="h-7 w-7 text-accent" />
              <h3 className={modernTypography.heading} style={{ color: modernColors.text }}>
                Defense Market
              </h3>
            </div>
            <p className={`${modernTypography.body} mb-3 font-semibold`}>
              Market Share: $48B (40%) - CAGR: 5.0% (2023-2028)
            </p>
            <h4 className={`${modernTypography.subheading} mb-2`}>Target Customers:</h4>
            <ul className={`${modernTypography.list} mb-4`}>
              <li>• U.S. Army, Navy, Air Force, Marines units</li>
              <li>• Defense Logistics Agency</li>
              <li>• Military contractors and suppliers</li>
            </ul>
            <h4 className={`${modernTypography.subheading} mb-2`}>Market Dynamics:</h4>
            <ul className={`${modernTypography.list}`}>
              <li>• New DOGE 8% budget cut requirements</li>
              <li>• $1.2B+ annual inventory loss pain point</li>
              <li>• Audit compliance mandates by 2028</li>
            </ul>
          </ModernCard>
        </motion.div>

        <motion.div
          variants={itemFadeInUpVariant}
          custom={2}
        >
          <ModernCard className="h-full p-6">
            <div className="flex items-center gap-4 mb-4">
              <BarChart3 className="h-7 w-7 text-accent" />
              <h3 className={modernTypography.heading} style={{ color: modernColors.text }}>
                Commercial Market
              </h3>
            </div>
            <p className={`${modernTypography.body} mb-3 font-semibold`}>
              Market Share: $72B (60%) - CAGR: 9.4% (2023-2028)
            </p>
            <h4 className={`${modernTypography.subheading} mb-2`}>Target Industries:</h4>
            <ul className={`${modernTypography.list} mb-4`}>
              <li>• Aerospace and automotive manufacturing</li>
              <li>• Pharmaceutical supply chains</li>
              <li>• Electronics and high-value components</li>
            </ul>
            <h4 className={`${modernTypography.subheading} mb-2`}>Growth Drivers:</h4>
            <ul className={`${modernTypography.list}`}>
              <li>• 60-90 day payment delays in current chains</li>
              <li>• $950B+ annual inventory inaccuracy costs</li>
              <li>• 85% still using manual processes</li>
            </ul>
          </ModernCard>
        </motion.div>
      </motion.div>

      {/* Market Entry Strategy */}
      <motion.div
        variants={itemFadeInUpVariant}
        custom={3}
      >
        <ModernCard className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <Workflow className="h-7 w-7 text-accent" />
            <h3 className={modernTypography.heading} style={{ color: modernColors.text }}>
              Market Entry Strategy
            </h3>
          </div>
          <p className={`${modernTypography.body} mb-4`}>
            Our initial focus leverages the founder's military expertise to enter Defense logistics, building credibility and security validation as we expand into the higher-growth commercial market.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-3 border border-accent/20 rounded-lg">
              <h4 className={`${modernTypography.subheading} mb-2 text-accent`}>Phase 1: Defense Pilots</h4>
              <ul className={`${modernTypography.list}`}>
                <li>• DoD units with DOGE mandates</li>
                <li>• Tier 1 defense contractors</li>
              </ul>
            </div>
            <div className="p-3 border border-accent/20 rounded-lg">
              <h4 className={`${modernTypography.subheading} mb-2 text-accent`}>Phase 2: Defense Scale</h4>
              <ul className={`${modernTypography.list}`}>
                <li>• Expand across military branches</li>
                <li>• Add unit-level tracking</li>
              </ul>
            </div>
            <div className="p-3 border border-accent/20 rounded-lg">
              <h4 className={`${modernTypography.subheading} mb-2 text-accent`}>Phase 3: Commercial</h4>
              <ul className={`${modernTypography.list}`}>
                <li>• Aerospace supply chains</li>
                <li>• Pharmaceutical tracking</li>
              </ul>
            </div>
          </div>
        </ModernCard>
      </motion.div>
    </SlideLayout>
  );
};

export default Slide7;