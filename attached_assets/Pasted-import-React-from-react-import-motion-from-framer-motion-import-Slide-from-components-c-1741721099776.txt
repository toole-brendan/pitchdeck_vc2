import React from 'react';
import { motion } from 'framer-motion';
import Slide from '@/components/core/Slide';
import { Check, Shield, Laptop, Database } from 'lucide-react';
import { ModernSectionHeader } from '@/components/modern/ModernSlideStyles';

// Motion variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: 'easeOut'
    }
  })
};

const columnVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 + (i * 0.2),
      duration: 0.4
    }
  })
};

const DualMarketStrategy = () => {
  return (
    <Slide 
      title="Dual Market Strategy" 
      subtitle="Shared infrastructure across defense and commercial sectors"
      variant="default" // Using default for this specific layout
      accent="#333333" // Using same accent color as SolutionOverview
    >
      <div className="max-w-5xl mx-auto">
        {/* Platform Architecture - Top Section */}
        <motion.div
          variants={fadeIn}
          custom={0}
          initial="hidden"
          animate="visible"
          className="mb-8"
        >
          <ModernSectionHeader className="mb-4">
            PLATFORM ARCHITECTURE
          </ModernSectionHeader>

          <div className="flex flex-col md:flex-row gap-0">
            {/* Defense Platform */}
            <motion.div 
              variants={columnVariants}
              custom={0}
              initial="hidden"
              animate="visible"
              className="flex-1 border-b md:border-b-0 md:border-r border-gray-200 p-5 flex flex-col justify-center bg-white shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <Shield className="w-5 h-5 text-gray-600" />
                <h3 className="text-gray-800 font-medium">Defense Platform</h3>
              </div>
              <ul className="space-y-2 pl-7">
                <li className="text-gray-600 text-sm">Military-grade encryption</li>
                <li className="text-gray-600 text-sm">Secure authentication</li>
                <li className="text-gray-600 text-sm">Robust chain of custody</li>
              </ul>
            </motion.div>

            {/* Shared Core */}
            <motion.div 
              variants={columnVariants}
              custom={1}
              initial="hidden"
              animate="visible"
              className="flex-1 border-b md:border-b-0 md:border-r border-gray-200 p-5 bg-gray-50 flex flex-col justify-center shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <Database className="w-5 h-5 text-gray-600" />
                <h3 className="text-gray-800 font-medium">Shared Infrastructure</h3>
              </div>
              <ul className="space-y-2 pl-7">
                <li className="text-gray-600 text-sm">Smart contracts</li>
                <li className="text-gray-600 text-sm">Distributed ledger</li>
                <li className="text-gray-600 text-sm">Immutable records</li>
                <li className="text-gray-600 text-sm">Asset tracking</li>
              </ul>
            </motion.div>

            {/* Commercial Platform */}
            <motion.div 
              variants={columnVariants}
              custom={2}
              initial="hidden"
              animate="visible"
              className="flex-1 p-5 flex flex-col justify-center bg-white shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <Laptop className="w-5 h-5 text-gray-600" />
                <h3 className="text-gray-800 font-medium">Commercial Platform</h3>
              </div>
              <ul className="space-y-2 pl-7">
                <li className="text-gray-600 text-sm">Payment processing</li>
                <li className="text-gray-600 text-sm">Supply chain tracking</li>
                <li className="text-gray-600 text-sm">Vendor management</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Market Comparison - Middle Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Defense Market */}
          <motion.div 
            variants={fadeIn} 
            custom={2} 
            initial="hidden" 
            animate="visible"
            className="bg-white shadow-sm rounded-sm p-5 border border-gray-200"
          >
            <ModernSectionHeader dark className="mb-4">
              DEFENSE MARKET
            </ModernSectionHeader>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-1">Lower Implementation Risk</h4>
                <p className="text-sm text-gray-600">Stable, long-term contracts with predictable revenue</p>
              </div>
              
              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-1">High Barriers to Entry</h4>
                <p className="text-sm text-gray-600">Military expertise creates strong competitive moat</p>
              </div>
            </div>
          </motion.div>

          {/* Commercial Market */}
          <motion.div 
            variants={fadeIn} 
            custom={3} 
            initial="hidden" 
            animate="visible"
            className="bg-white shadow-sm rounded-sm p-5 border border-gray-200"
          >
            <ModernSectionHeader dark className="mb-4">
              COMMERCIAL MARKET
            </ModernSectionHeader>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-1">Higher Growth Potential</h4>
                <p className="text-sm text-gray-600">Larger addressable market with recurring revenue</p>
              </div>
              
              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-1">Transaction Fee Upside</h4>
                <p className="text-sm text-gray-600">Exponential revenue growth through Shell token payments</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Strategic Advantages - Bottom Section */}
        <motion.div
          variants={fadeIn}
          custom={4}
          initial="hidden"
          animate="visible"
          className="bg-white shadow-sm rounded-sm p-5 border border-gray-200"
        >
          <ModernSectionHeader dark className="mb-4">
            STRATEGIC ADVANTAGES
          </ModernSectionHeader>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Shared infrastructure reduces development and maintenance costs",
              "Military-grade security enhances commercial offering credibility",
              "Dual revenue streams provide stability through market cycles",
              "Network effects amplify value across both platforms"
            ].map((advantage, index) => (
              <div key={index} className="flex items-start gap-2">
                <Check className="w-4 h-4 text-gray-600 mt-1 shrink-0" />
                <p className="text-gray-600 text-sm">
                  {advantage}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Slide>
  );
};

export default DualMarketStrategy;
