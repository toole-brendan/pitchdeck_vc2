import React from 'react';
import SlideLayout from '@/components/PitchDeck/SlideLayout';
import { motion } from 'framer-motion';
import { ModernCard } from '@/components/PitchDeck/ModernSlideStyles';
import { HandCoins, TrendingUp, DollarSign } from 'lucide-react';

const Slide17: React.FC = () => {
  const TOTAL_SLIDES = 18;

  return (
    <SlideLayout title="Investment Opportunity" slideNumber={17} totalSlides={TOTAL_SLIDES}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-center max-w-2xl mx-auto"
      >
        <h2 className="text-2xl font-bold mb-4">Funding Request & Use of Funds</h2>
        <p className="text-gray-600">
          Placeholder text explaining our current fundraising round and how the investment will be utilized.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <ModernCard className="h-full p-6">
            <div className="flex items-center gap-3 mb-6">
              <HandCoins className="h-6 w-6 text-accent" />
              <h3 className="text-xl font-semibold">Investment Details</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md border border-gray-200">
                <span className="font-medium">Round Type</span>
                <span className="text-accent font-semibold">Series A</span>
              </div>
              
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md border border-gray-200">
                <span className="font-medium">Raising</span>
                <span className="text-accent font-semibold">$X Million</span>
              </div>
              
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md border border-gray-200">
                <span className="font-medium">Pre-money Valuation</span>
                <span className="text-accent font-semibold">$X Million</span>
              </div>
              
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md border border-gray-200">
                <span className="font-medium">Equity Offered</span>
                <span className="text-accent font-semibold">XX%</span>
              </div>
              
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md border border-gray-200">
                <span className="font-medium">Minimum Investment</span>
                <span className="text-accent font-semibold">$XXX,XXX</span>
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
              <DollarSign className="h-6 w-6 text-accent" />
              <h3 className="text-xl font-semibold">Use of Funds</h3>
            </div>
            
            <div className="h-48 bg-gray-100 rounded-md flex items-center justify-center mb-6">
              [Allocation Chart Placeholder]
            </div>
            
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <div className="w-4 h-4 rounded-full bg-blue-500 mt-1 flex-shrink-0"></div>
                <span>Product Development (XX%): Placeholder text describing allocation.</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-4 h-4 rounded-full bg-green-500 mt-1 flex-shrink-0"></div>
                <span>Sales & Marketing (XX%): Placeholder text describing allocation.</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-4 h-4 rounded-full bg-purple-500 mt-1 flex-shrink-0"></div>
                <span>Operations (XX%): Placeholder text describing allocation.</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-4 h-4 rounded-full bg-yellow-500 mt-1 flex-shrink-0"></div>
                <span>Team Expansion (XX%): Placeholder text describing allocation.</span>
              </li>
            </ul>
          </ModernCard>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <ModernCard className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="h-6 w-6 text-accent" />
            <h3 className="text-xl font-semibold">Investor Returns</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Exit Strategy</h4>
              <p className="text-gray-600 mb-4">
                Placeholder text describing potential exit strategies and timeline.
              </p>
              
              <ul className="space-y-2 text-gray-600">
                <li>• Strategic acquisition within 4-5 years</li>
                <li>• Potential IPO in 5-7 years</li>
                <li>• Secondary market opportunities</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Projected Returns</h4>
              <div className="h-40 bg-gray-100 rounded-md flex items-center justify-center mb-4">
                [ROI Projection Chart Placeholder]
              </div>
              <p className="text-sm text-gray-500 italic">
                Projected XX-XX% IRR based on conservative growth estimates.
              </p>
            </div>
          </div>
        </ModernCard>
      </motion.div>
    </SlideLayout>
  );
};

export default Slide17;