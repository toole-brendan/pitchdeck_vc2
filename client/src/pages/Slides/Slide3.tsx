import React from 'react';
import SlideLayout from '@/components/PitchDeck/SlideLayout';
import { motion } from 'framer-motion';
import { ModernCard, ModernIconWrapper } from '@/components/PitchDeck/ModernSlideStyles';
import { Lightbulb, Zap, Target } from 'lucide-react';

const Slide3: React.FC = () => {
  const TOTAL_SLIDES = 5;

  return (
    <SlideLayout title="Solution" slideNumber={3} totalSlides={TOTAL_SLIDES}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-center max-w-2xl mx-auto"
      >
        <h2 className="text-2xl font-bold mb-4">Our Approach</h2>
        <p className="text-gray-600">
          Placeholder text describing your overall solution approach.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <ModernCard className="h-full p-6 flex flex-col items-center text-center">
            <ModernIconWrapper>
              <Lightbulb className="h-6 w-6" />
            </ModernIconWrapper>
            <h3 className="text-xl font-semibold mt-4 mb-2">Key Feature 1</h3>
            <p className="text-gray-600">
              Placeholder description of a key feature or benefit of your solution.
            </p>
          </ModernCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <ModernCard className="h-full p-6 flex flex-col items-center text-center">
            <ModernIconWrapper>
              <Zap className="h-6 w-6" />
            </ModernIconWrapper>
            <h3 className="text-xl font-semibold mt-4 mb-2">Key Feature 2</h3>
            <p className="text-gray-600">
              Placeholder description of a key feature or benefit of your solution.
            </p>
          </ModernCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <ModernCard className="h-full p-6 flex flex-col items-center text-center">
            <ModernIconWrapper>
              <Target className="h-6 w-6" />
            </ModernIconWrapper>
            <h3 className="text-xl font-semibold mt-4 mb-2">Key Feature 3</h3>
            <p className="text-gray-600">
              Placeholder description of a key feature or benefit of your solution.
            </p>
          </ModernCard>
        </motion.div>
      </div>
    </SlideLayout>
  );
};

export default Slide3;