import React, { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import { motion } from 'framer-motion';
import { ChevronRight, Play, Maximize2 } from 'lucide-react';
import { useMediaQuery } from 'react-responsive';

const PresentationHome: React.FC = () => {
  const [, navigate] = useLocation();
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const [canFullscreen, setCanFullscreen] = useState(false);
  
  // Check if fullscreen is supported
  useEffect(() => {
    setCanFullscreen(document.documentElement.requestFullscreen !== undefined);
  }, []);
  
  // Handle presentation start with fullscreen option
  const startPresentation = (withFullscreen = false) => {
    if (withFullscreen && canFullscreen) {
      document.documentElement.requestFullscreen().then(() => {
        navigate('/slide/1');
      }).catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
        navigate('/slide/1');
      });
    } else {
      navigate('/slide/1');
    }
  };

  // PowerPoint-like presentation start screen for desktop
  if (isDesktop) {
    return (
      <div className="min-h-screen w-full bg-gray-50 flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-6xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="p-4 bg-gray-900 text-white flex items-center justify-between">
            <div className="text-lg font-medium">Presentation Mode</div>
            {canFullscreen && (
              <button 
                onClick={() => startPresentation(true)}
                className="px-3 py-1.5 bg-blue-600 text-white rounded flex items-center gap-1.5 text-sm hover:bg-blue-700 transition-colors"
              >
                <Maximize2 size={14} /> Start Fullscreen
              </button>
            )}
          </div>
          
          <div className="p-8 flex">
            <div className="w-1/2 flex flex-col justify-center pr-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  Presentation Title
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                  A brief description of what this presentation is about
                </p>
                
                <div className="flex items-center gap-4">
                  <motion.button 
                    onClick={() => startPresentation()}
                    className="px-6 py-3 bg-black text-white rounded-md flex items-center gap-2 hover:bg-black/90 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Play size={18} /> Start Presentation
                  </motion.button>
                </div>
              </motion.div>
            </div>
            
            <div className="w-1/2">
              <motion.div 
                className="aspect-[16/9] bg-gray-100 rounded-lg overflow-hidden shadow-md flex items-center justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="text-center p-6">
                  <div className="text-4xl font-bold mb-4">Presentation Title</div>
                  <div className="text-lg text-gray-500">Click "Start Presentation" to begin</div>
                </div>
              </motion.div>
            </div>
          </div>
          
          <div className="p-4 bg-gray-100 text-sm text-gray-500 border-t">
            <div>Press 'F' during presentation to toggle fullscreen</div>
            <div>Use arrow keys or space to navigate slides</div>
          </div>
        </div>
      </div>
    );
  }
  
  // Mobile version
  return (
    <div className="min-h-screen w-full bg-white flex flex-col items-center justify-center p-6">
      <motion.div 
        className="text-center max-w-2xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Presentation Title
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          A brief description of what this presentation is about
        </p>
        
        <div className="flex flex-col items-center">
          <motion.button 
            onClick={() => navigate('/slide/1')}
            className="px-6 py-3 bg-black text-white rounded-lg flex items-center gap-2 hover:bg-black/90 transition-colors"
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