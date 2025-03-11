import React from 'react';
import { useLocation } from 'wouter';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { modernTypography } from '@/components/PitchDeck/ModernSlideStyles';

const PresentationHome: React.FC = () => {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen w-full bg-white flex flex-col items-center justify-center p-6">
      <motion.div 
        className="text-center max-w-2xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Presentation Title
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          A brief description of what this presentation is about
        </p>
        
        <div className="flex flex-col items-center">
          <motion.button 
            onClick={() => navigate('/slide/1')}
            className="px-8 py-4 bg-black text-white rounded-lg flex items-center gap-2 hover:bg-black/90 transition-colors text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Start Presentation <ChevronRight className="h-5 w-5" />
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default PresentationHome;