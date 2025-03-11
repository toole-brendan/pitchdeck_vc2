import React from 'react';
import SlideLayout from '@/components/PitchDeck/SlideLayout';
import { motion } from 'framer-motion';
import { ModernCard } from '@/components/PitchDeck/ModernSlideStyles';
import { ArrowRight } from 'lucide-react';
import { useLocation } from 'wouter';

const Slide5: React.FC = () => {
  const TOTAL_SLIDES = 18;
  const [, navigate] = useLocation();
  
  return (
    <SlideLayout title="Call to Action" slideNumber={5} totalSlides={TOTAL_SLIDES}>
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 max-w-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Thank You!</h2>
          <p className="text-xl text-gray-600">
            Placeholder text for conclusion and next steps
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="w-full max-w-xl"
        >
          <ModernCard className="p-8 text-center">
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
            
            <div className="flex flex-col space-y-4 mb-8">
              <div className="p-3 bg-gray-50 rounded-md border border-gray-200">
                <p className="text-gray-700">Email: contact@example.com</p>
              </div>
              
              <div className="p-3 bg-gray-50 rounded-md border border-gray-200">
                <p className="text-gray-700">Phone: (123) 456-7890</p>
              </div>
              
              <div className="p-3 bg-gray-50 rounded-md border border-gray-200">
                <p className="text-gray-700">Website: www.example.com</p>
              </div>
            </div>
            
            <button 
              onClick={() => navigate('/')}
              className="px-6 py-3 bg-accent text-white rounded-lg flex items-center gap-2 mx-auto hover:bg-accent/90 transition-colors"
            >
              Return to Home <ArrowRight className="h-4 w-4" />
            </button>
          </ModernCard>
        </motion.div>
      </div>
    </SlideLayout>
  );
};

export default Slide5;