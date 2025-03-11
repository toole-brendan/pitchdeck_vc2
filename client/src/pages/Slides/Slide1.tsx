import React from 'react';
import SlideLayout from '@/components/PitchDeck/SlideLayout';
import { motion } from 'framer-motion';
import { ModernCard } from '@/components/PitchDeck/ModernSlideStyles';

const Slide1: React.FC = () => {
  const TOTAL_SLIDES = 5;

  return (
    <SlideLayout title="Title Slide" slideNumber={1} totalSlides={TOTAL_SLIDES}>
      <div className="flex flex-col items-center justify-center text-center">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Presentation Title
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Subtitle or brief description
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-6"
        >
          <ModernCard className="px-10 py-8">
            <p className="text-gray-600">Presented by: [Presenter Name]</p>
            <p className="text-gray-600">Date: [Presentation Date]</p>
          </ModernCard>
        </motion.div>
      </div>
    </SlideLayout>
  );
};

export default Slide1;