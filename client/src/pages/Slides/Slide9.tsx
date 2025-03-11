import React from 'react';
import SlideLayout from '@/components/PitchDeck/SlideLayout';
import { motion } from 'framer-motion';
import { ModernCard } from '@/components/PitchDeck/ModernSlideStyles';
import { TrendingUp, Briefcase, Users } from 'lucide-react';

const Slide9: React.FC = () => {
  const TOTAL_SLIDES = 18;

  return (
    <SlideLayout title="Traction & Metrics" slideNumber={9} totalSlides={TOTAL_SLIDES}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="md:col-span-2"
        >
          <ModernCard className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="h-6 w-6 text-accent" />
              <h3 className="text-xl font-semibold">Growth Metrics</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Placeholder text describing our key performance indicators and growth metrics.
            </p>
            <div className="h-40 bg-gray-100 rounded-md flex items-center justify-center mb-6">
              [Growth Chart Placeholder]
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-md border border-gray-200 text-center">
                <p className="text-3xl font-bold text-accent">XX%</p>
                <p className="text-sm text-gray-600">Monthly Growth</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-md border border-gray-200 text-center">
                <p className="text-3xl font-bold text-accent">XXXX</p>
                <p className="text-sm text-gray-600">Active Users</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-md border border-gray-200 text-center">
                <p className="text-3xl font-bold text-accent">$XXK</p>
                <p className="text-sm text-gray-600">Monthly Revenue</p>
              </div>
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
              <Users className="h-6 w-6 text-accent" />
              <h3 className="text-xl font-semibold">User Engagement</h3>
            </div>
            <div className="h-32 bg-gray-100 rounded-md flex items-center justify-center mb-4">
              [User Engagement Chart Placeholder]
            </div>
            <ul className="space-y-2 text-gray-600">
              <li>• XX minutes average session time</li>
              <li>• XX% retention rate after 30 days</li>
              <li>• XX% conversion from free to paid</li>
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
              <Briefcase className="h-6 w-6 text-accent" />
              <h3 className="text-xl font-semibold">Key Partnerships</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Placeholder text describing strategic partnerships and collaborations.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="h-12 bg-gray-100 rounded-md flex items-center justify-center">
                  [Logo]
                </div>
              ))}
            </div>
          </ModernCard>
        </motion.div>
      </div>
    </SlideLayout>
  );
};

export default Slide9;