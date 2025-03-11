import React from 'react';
import SlideLayout from '@/components/PitchDeck/SlideLayout';
import { motion } from 'framer-motion';
import { ModernCard, ModernDivider } from '@/components/PitchDeck/ModernSlideStyles';
import { PieChart, BarChart4, TrendingUp } from 'lucide-react';

const Slide4: React.FC = () => {
  const TOTAL_SLIDES = 5;

  return (
    <SlideLayout title="Market Opportunity" slideNumber={4} totalSlides={TOTAL_SLIDES}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="md:col-span-2"
        >
          <ModernCard className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <BarChart4 className="h-6 w-6 text-accent" />
              <h3 className="text-xl font-semibold">Market Size</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Placeholder text describing the total addressable market size and growth potential.
            </p>
            <div className="h-20 bg-gray-100 rounded-md flex items-center justify-center">
              [Market Size Chart Placeholder]
            </div>
          </ModernCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <ModernCard className="h-full p-6">
            <div className="flex items-center gap-3 mb-4">
              <PieChart className="h-6 w-6 text-accent" />
              <h3 className="text-xl font-semibold">Target Audience</h3>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li>• Audience Segment 1</li>
              <li>• Audience Segment 2</li>
              <li>• Audience Segment 3</li>
            </ul>
            <ModernDivider className="my-4" />
            <div className="h-24 bg-gray-100 rounded-md flex items-center justify-center">
              [Demographics Chart Placeholder]
            </div>
          </ModernCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <ModernCard className="h-full p-6">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="h-6 w-6 text-accent" />
              <h3 className="text-xl font-semibold">Growth Projections</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Placeholder text for market growth projections and opportunity timeline.
            </p>
            <div className="h-24 bg-gray-100 rounded-md flex items-center justify-center">
              [Growth Chart Placeholder]
            </div>
          </ModernCard>
        </motion.div>
      </div>
    </SlideLayout>
  );
};

export default Slide4;