import React from 'react';
import SlideLayout from '@/components/PitchDeck/SlideLayout';
import { motion } from 'framer-motion';
import { ModernCard } from '@/components/PitchDeck/ModernSlideStyles';
import { LineChart, DollarSign, CircleDollarSign } from 'lucide-react';

const Slide6: React.FC = () => {
  const TOTAL_SLIDES = 18;

  return (
    <SlideLayout title="Business Model" slideNumber={6} totalSlides={TOTAL_SLIDES}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="md:col-span-2"
        >
          <ModernCard className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <CircleDollarSign className="h-6 w-6 text-accent" />
              <h3 className="text-xl font-semibold">Revenue Strategy</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Placeholder text describing our business model and how we generate revenue.
            </p>
          </ModernCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <ModernCard className="h-full p-6">
            <div className="flex items-center gap-3 mb-4">
              <DollarSign className="h-6 w-6 text-accent" />
              <h3 className="text-xl font-semibold">Pricing Structure</h3>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li>• Basic Plan: $X/month</li>
              <li>• Premium Plan: $X/month</li>
              <li>• Enterprise Plan: Custom pricing</li>
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
              <LineChart className="h-6 w-6 text-accent" />
              <h3 className="text-xl font-semibold">Financial Projections</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Placeholder text for sales growth, customer acquisition costs, and revenue projections.
            </p>
            <div className="h-24 bg-gray-100 rounded-md flex items-center justify-center">
              [Financial Chart Placeholder]
            </div>
          </ModernCard>
        </motion.div>
      </div>
    </SlideLayout>
  );
};

export default Slide6;