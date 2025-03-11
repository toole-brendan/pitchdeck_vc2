import React from 'react';
import { useLocation } from 'wouter';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

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
        
        <div className="flex flex-col items-center gap-8">
          <button 
            onClick={() => navigate('/slide/1')}
            className="px-8 py-4 bg-accent text-white rounded-lg flex items-center gap-2 hover:bg-accent/90 transition-colors text-lg"
          >
            Start Presentation <ChevronRight className="h-5 w-5" />
          </button>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            {Array.from({ length: 18 }).map((_, i) => (
              <button 
                key={i} 
                onClick={() => navigate(`/slide/${i + 1}`)}
                className="px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              >
                Slide {i + 1}
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PresentationHome;