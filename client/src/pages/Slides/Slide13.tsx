import React from 'react';
import SlideLayout from '@/components/PitchDeck/SlideLayout';
import { motion } from 'framer-motion';
import { ModernCard } from '@/components/PitchDeck/ModernSlideStyles';
import { Lightbulb, Smartphone, Globe } from 'lucide-react';

const Slide13: React.FC = () => {
  const TOTAL_SLIDES = 18;

  return (
    <SlideLayout title="Product Showcase" slideNumber={13} totalSlides={TOTAL_SLIDES}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-center max-w-2xl mx-auto"
      >
        <h2 className="text-2xl font-bold mb-4">Key Features Demo</h2>
        <p className="text-gray-600">
          Placeholder text showcasing our product's main features and functionalities.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mb-8"
      >
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 flex flex-col md:flex-row gap-6">
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-accent" />
              Product Highlights
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-accent font-semibold text-xs">1</span>
                </span>
                <p className="text-gray-700">
                  Feature highlight one with a brief description.
                </p>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-accent font-semibold text-xs">2</span>
                </span>
                <p className="text-gray-700">
                  Feature highlight two with a brief description.
                </p>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-accent font-semibold text-xs">3</span>
                </span>
                <p className="text-gray-700">
                  Feature highlight three with a brief description.
                </p>
              </li>
            </ul>
          </div>
          
          <div className="md:w-1/2 flex items-center justify-center">
            <div className="aspect-video w-full max-w-md bg-gray-200 rounded-md flex items-center justify-center">
              [Product Screenshot/Demo Video Placeholder]
            </div>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <ModernCard className="h-full p-6">
            <div className="flex items-center gap-3 mb-4">
              <Globe className="h-6 w-6 text-accent" />
              <h3 className="text-xl font-semibold">Web Platform</h3>
            </div>
            <div className="h-48 bg-gray-100 rounded-md flex items-center justify-center mb-4">
              [Web Platform Screenshot Placeholder]
            </div>
            <p className="text-gray-600">
              Placeholder description of the web platform features and capabilities.
            </p>
          </ModernCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <ModernCard className="h-full p-6">
            <div className="flex items-center gap-3 mb-4">
              <Smartphone className="h-6 w-6 text-accent" />
              <h3 className="text-xl font-semibold">Mobile App</h3>
            </div>
            <div className="h-48 bg-gray-100 rounded-md flex items-center justify-center mb-4">
              [Mobile App Screenshot Placeholder]
            </div>
            <p className="text-gray-600">
              Placeholder description of the mobile app features and capabilities.
            </p>
          </ModernCard>
        </motion.div>
      </div>
    </SlideLayout>
  );
};

export default Slide13;