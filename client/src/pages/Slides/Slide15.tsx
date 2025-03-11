import React from 'react';
import SlideLayout from '@/components/PitchDeck/SlideLayout';
import { motion } from 'framer-motion';
import { ModernCard } from '@/components/PitchDeck/ModernSlideStyles';
import { ShieldCheck, Lock, FileWarning } from 'lucide-react';

const Slide15: React.FC = () => {
  const TOTAL_SLIDES = 18;

  return (
    <SlideLayout title="Risk Assessment & Mitigation" slideNumber={15} totalSlides={TOTAL_SLIDES}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-center max-w-2xl mx-auto"
      >
        <h2 className="text-2xl font-bold mb-4">Addressing Potential Risks</h2>
        <p className="text-gray-600">
          Placeholder text identifying potential challenges and our strategies to mitigate them.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <ModernCard className="h-full p-6">
            <div className="flex items-center gap-3 mb-6">
              <FileWarning className="h-6 w-6 text-accent" />
              <h3 className="text-xl font-semibold">Market Risks</h3>
            </div>
            
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-md p-4">
                <h4 className="font-medium mb-2">Competition</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-red-50 p-3 rounded-md">
                    <p className="text-sm font-medium text-red-700 mb-1">Risk</p>
                    <p className="text-sm text-gray-600">
                      New competitors entering the market with similar solutions.
                    </p>
                  </div>
                  <div className="bg-green-50 p-3 rounded-md">
                    <p className="text-sm font-medium text-green-700 mb-1">Mitigation</p>
                    <p className="text-sm text-gray-600">
                      Continuous innovation and building strong brand loyalty.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-md p-4">
                <h4 className="font-medium mb-2">Market Adoption</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-red-50 p-3 rounded-md">
                    <p className="text-sm font-medium text-red-700 mb-1">Risk</p>
                    <p className="text-sm text-gray-600">
                      Slower than anticipated market adoption.
                    </p>
                  </div>
                  <div className="bg-green-50 p-3 rounded-md">
                    <p className="text-sm font-medium text-green-700 mb-1">Mitigation</p>
                    <p className="text-sm text-gray-600">
                      Targeted marketing and flexible pricing strategies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ModernCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <ModernCard className="h-full p-6">
            <div className="flex items-center gap-3 mb-6">
              <ShieldCheck className="h-6 w-6 text-accent" />
              <h3 className="text-xl font-semibold">Technical Risks</h3>
            </div>
            
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-md p-4">
                <h4 className="font-medium mb-2">Scalability</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-red-50 p-3 rounded-md">
                    <p className="text-sm font-medium text-red-700 mb-1">Risk</p>
                    <p className="text-sm text-gray-600">
                      Platform performance issues with rapid user growth.
                    </p>
                  </div>
                  <div className="bg-green-50 p-3 rounded-md">
                    <p className="text-sm font-medium text-green-700 mb-1">Mitigation</p>
                    <p className="text-sm text-gray-600">
                      Cloud-native architecture designed for horizontal scaling.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-md p-4">
                <h4 className="font-medium mb-2">Security</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-red-50 p-3 rounded-md">
                    <p className="text-sm font-medium text-red-700 mb-1">Risk</p>
                    <p className="text-sm text-gray-600">
                      Data breaches or security vulnerabilities.
                    </p>
                  </div>
                  <div className="bg-green-50 p-3 rounded-md">
                    <p className="text-sm font-medium text-green-700 mb-1">Mitigation</p>
                    <p className="text-sm text-gray-600">
                      Regular security audits and compliance with industry standards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ModernCard>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="mt-6"
      >
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
          <div className="flex items-center gap-3 mb-4">
            <Lock className="h-6 w-6 text-blue-600" />
            <h3 className="text-xl font-semibold text-blue-800">Contingency Planning</h3>
          </div>
          <p className="text-gray-700 mb-4">
            Placeholder text for our contingency planning strategies and risk management framework.
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-blue-600 font-semibold text-xs">✓</span>
              </div>
              <p>Regular risk assessment and monitoring</p>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-blue-600 font-semibold text-xs">✓</span>
              </div>
              <p>Diversified resource allocation</p>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-blue-600 font-semibold text-xs">✓</span>
              </div>
              <p>Strategic partnerships to mitigate market uncertainties</p>
            </li>
          </ul>
        </div>
      </motion.div>
    </SlideLayout>
  );
};

export default Slide15;