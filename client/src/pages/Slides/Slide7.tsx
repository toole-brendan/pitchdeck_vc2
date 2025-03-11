import React from 'react';
import SlideLayout from '@/components/PitchDeck/SlideLayout';
import { motion } from 'framer-motion';
import { ModernCard, ModernIconWrapper } from '@/components/PitchDeck/ModernSlideStyles';
import { Users, Building, Trophy } from 'lucide-react';

const Slide7: React.FC = () => {
  const TOTAL_SLIDES = 18;

  return (
    <SlideLayout title="Team" slideNumber={7} totalSlides={TOTAL_SLIDES}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-center max-w-2xl mx-auto"
      >
        <h2 className="text-2xl font-bold mb-4">Meet Our Leadership</h2>
        <p className="text-gray-600">
          Placeholder text describing our experienced team and their qualifications.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <ModernCard className="h-full p-6 flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-gray-200 mb-4 overflow-hidden">
              {/* Team member image placeholder */}
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                <Users className="h-10 w-10" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mt-2 mb-1">Name</h3>
            <p className="text-sm text-accent mb-2">CEO & Founder</p>
            <p className="text-gray-600 text-sm">
              Brief bio highlighting relevant experience and expertise.
            </p>
          </ModernCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <ModernCard className="h-full p-6 flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-gray-200 mb-4 overflow-hidden">
              {/* Team member image placeholder */}
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                <Users className="h-10 w-10" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mt-2 mb-1">Name</h3>
            <p className="text-sm text-accent mb-2">CTO</p>
            <p className="text-gray-600 text-sm">
              Brief bio highlighting relevant experience and expertise.
            </p>
          </ModernCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <ModernCard className="h-full p-6 flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-gray-200 mb-4 overflow-hidden">
              {/* Team member image placeholder */}
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                <Users className="h-10 w-10" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mt-2 mb-1">Name</h3>
            <p className="text-sm text-accent mb-2">CMO</p>
            <p className="text-gray-600 text-sm">
              Brief bio highlighting relevant experience and expertise.
            </p>
          </ModernCard>
        </motion.div>
      </div>
    </SlideLayout>
  );
};

export default Slide7;