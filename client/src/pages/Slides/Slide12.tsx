import React from 'react';
import SlideLayout from '@/components/PitchDeck/SlideLayout';
import { motion } from 'framer-motion';
import { ModernCard, ModernIconWrapper } from '@/components/PitchDeck/ModernSlideStyles';
import { Target, Lightbulb, Monitor } from 'lucide-react';

const Slide12: React.FC = () => {
  const TOTAL_SLIDES = 18;

  return (
    <SlideLayout title="Marketing Strategy" slideNumber={12} totalSlides={TOTAL_SLIDES}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-center max-w-2xl mx-auto"
      >
        <h2 className="text-2xl font-bold mb-4">Go-to-Market Strategy</h2>
        <p className="text-gray-600">
          Placeholder text outlining our comprehensive marketing and customer acquisition approach.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <ModernCard className="h-full p-6 flex flex-col items-center text-center">
            <ModernIconWrapper>
              <Target className="h-6 w-6" />
            </ModernIconWrapper>
            <h3 className="text-xl font-semibold mt-4 mb-2">Target Audience</h3>
            <p className="text-gray-600">
              Placeholder description of our primary and secondary target audiences.
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
              <Lightbulb className="h-6 w-6" />
            </ModernIconWrapper>
            <h3 className="text-xl font-semibold mt-4 mb-2">Positioning</h3>
            <p className="text-gray-600">
              Placeholder description of our brand positioning and value proposition.
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
              <Monitor className="h-6 w-6" />
            </ModernIconWrapper>
            <h3 className="text-xl font-semibold mt-4 mb-2">Channels</h3>
            <p className="text-gray-600">
              Placeholder description of our marketing and distribution channels.
            </p>
          </ModernCard>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <ModernCard className="p-6">
          <h3 className="text-xl font-semibold mb-4">Customer Acquisition Strategy</h3>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-md border border-gray-200">
              <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-accent font-semibold text-sm">1</span>
              </div>
              <div>
                <h4 className="font-medium mb-1">Awareness</h4>
                <p className="text-sm text-gray-600">
                  Content marketing, SEO, social media presence, and industry partnerships.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-md border border-gray-200">
              <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-accent font-semibold text-sm">2</span>
              </div>
              <div>
                <h4 className="font-medium mb-1">Consideration</h4>
                <p className="text-sm text-gray-600">
                  Case studies, webinars, free trials, and product demonstrations.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-md border border-gray-200">
              <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-accent font-semibold text-sm">3</span>
              </div>
              <div>
                <h4 className="font-medium mb-1">Conversion</h4>
                <p className="text-sm text-gray-600">
                  Targeted campaigns, personalized outreach, and special offers.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-md border border-gray-200">
              <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-accent font-semibold text-sm">4</span>
              </div>
              <div>
                <h4 className="font-medium mb-1">Retention & Growth</h4>
                <p className="text-sm text-gray-600">
                  Customer success program, regular updates, and loyalty incentives.
                </p>
              </div>
            </div>
          </div>
        </ModernCard>
      </motion.div>
    </SlideLayout>
  );
};

export default Slide12;