import React from 'react';
import SlideLayout from '@/components/PitchDeck/SlideLayout';
import { motion } from 'framer-motion';
import { ModernCard, ModernBadge } from '@/components/PitchDeck/ModernSlideStyles';

const Slide2: React.FC = () => {
  const TOTAL_SLIDES = 18;

  return (
    <SlideLayout title="Problem Statement" slideNumber={2} totalSlides={TOTAL_SLIDES}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ModernCard className="h-full p-6">
            <ModernBadge>Pain Point 1</ModernBadge>
            <h3 className="text-xl font-semibold mt-4 mb-2">Problem Description</h3>
            <p className="text-gray-600">
              Placeholder text describing the first major problem that your solution addresses.
            </p>
          </ModernCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <ModernCard className="h-full p-6">
            <ModernBadge>Pain Point 2</ModernBadge>
            <h3 className="text-xl font-semibold mt-4 mb-2">Problem Description</h3>
            <p className="text-gray-600">
              Placeholder text describing the second major problem that your solution addresses.
            </p>
          </ModernCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="md:col-span-2"
        >
          <div className="bg-gray-100 p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3">Market Impact</h3>
            <p className="text-gray-700">
              Placeholder text describing the impact of these problems on the market or target audience.
            </p>
          </div>
        </motion.div>
      </div>
    </SlideLayout>
  );
};

export default Slide2;