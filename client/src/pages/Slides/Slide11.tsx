import React from 'react';
import SlideLayout from '@/components/PitchDeck/SlideLayout';
import { motion } from 'framer-motion';
import { ModernCard } from '@/components/PitchDeck/ModernSlideStyles';
import { DollarSign, TrendingUp, HandCoins } from 'lucide-react';

const Slide11: React.FC = () => {
  const TOTAL_SLIDES = 18;

  return (
    <SlideLayout title="Financial Projections" slideNumber={11} totalSlides={TOTAL_SLIDES}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-2xl font-bold mb-4">5-Year Financial Overview</h2>
          <p className="text-gray-600">
            Placeholder text describing our financial projections and revenue model assumptions.
          </p>
        </div>

        <ModernCard className="p-6 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="h-6 w-6 text-accent" />
            <h3 className="text-xl font-semibold">Revenue Projections</h3>
          </div>
          
          <div className="h-60 bg-gray-100 rounded-md flex items-center justify-center mb-6">
            [Revenue Projections Chart Placeholder]
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
            {['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'].map((year, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.3 }}
                className="bg-gray-50 p-3 rounded-md border border-gray-200"
              >
                <p className="font-semibold text-gray-700">{year}</p>
                <p className="text-xl font-bold text-accent">$XXXK</p>
              </motion.div>
            ))}
          </div>
        </ModernCard>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <ModernCard className="h-full p-6">
              <div className="flex items-center gap-3 mb-4">
                <DollarSign className="h-6 w-6 text-accent" />
                <h3 className="text-xl font-semibold">Cost Structure</h3>
              </div>
              <div className="h-40 bg-gray-100 rounded-md flex items-center justify-center mb-4">
                [Cost Breakdown Chart Placeholder]
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• Development Costs: XX%</li>
                <li>• Marketing & Sales: XX%</li>
                <li>• Operations: XX%</li>
                <li>• Administration: XX%</li>
              </ul>
            </ModernCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <ModernCard className="h-full p-6">
              <div className="flex items-center gap-3 mb-4">
                <HandCoins className="h-6 w-6 text-accent" />
                <h3 className="text-xl font-semibold">Funding Requirements</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Placeholder text for funding needs, use of funds, and investor returns.
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md border border-gray-200">
                  <span className="font-medium">Seed Round</span>
                  <span className="font-bold text-accent">$X Million</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md border border-gray-200">
                  <span className="font-medium">Series A</span>
                  <span className="font-bold text-accent">$X Million</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md border border-gray-200">
                  <span className="font-medium">Break-even Point</span>
                  <span className="font-bold text-accent">Q4 20XX</span>
                </div>
              </div>
            </ModernCard>
          </motion.div>
        </div>
      </motion.div>
    </SlideLayout>
  );
};

export default Slide11;