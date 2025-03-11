import React from 'react';
import SlideLayout from '@/components/PitchDeck/SlideLayout';
import { motion } from 'framer-motion';
import { ModernCard } from '@/components/PitchDeck/ModernSlideStyles';
import { ArrowRight, MessageCircle, Mail, Phone, Globe } from 'lucide-react';
import { useLocation } from 'wouter';

const Slide18: React.FC = () => {
  const TOTAL_SLIDES = 18;
  const [, navigate] = useLocation();
  
  return (
    <SlideLayout title="Thank You & Next Steps" slideNumber={18} totalSlides={TOTAL_SLIDES}>
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 max-w-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Thank You For Your Time!</h2>
          <p className="text-xl text-gray-600">
            Placeholder text summarizing the key points and expressing appreciation for the audience's attention.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="w-full max-w-4xl"
        >
          <ModernCard className="p-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-accent" />
                  Next Steps
                </h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-accent font-semibold">1</span>
                    </div>
                    <div>
                      <p className="font-medium">Follow-up Meeting</p>
                      <p className="text-sm text-gray-600">Placeholder text for next steps.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-accent font-semibold">2</span>
                    </div>
                    <div>
                      <p className="font-medium">Due Diligence</p>
                      <p className="text-sm text-gray-600">Placeholder text for next steps.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-accent font-semibold">3</span>
                    </div>
                    <div>
                      <p className="font-medium">Partnership Discussion</p>
                      <p className="text-sm text-gray-600">Placeholder text for next steps.</p>
                    </div>
                  </div>
                </div>
                
                <button 
                  onClick={() => navigate('/')}
                  className="px-6 py-3 bg-accent text-white rounded-lg flex items-center gap-2 hover:bg-accent/90 transition-colors"
                >
                  Return to Home <ArrowRight className="h-4 w-4" />
                </button>
              </div>
              
              <div className="md:w-1/2 md:border-l md:border-gray-200 md:pl-8">
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-md">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                      <Mail className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="font-medium">contact@example.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-md">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                      <Phone className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <p className="font-medium">(123) 456-7890</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-md">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                      <Globe className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Website</p>
                      <p className="font-medium">www.example.com</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <p className="text-gray-600 text-sm italic">
                    "Placeholder for a compelling closing statement or company motto."
                  </p>
                </div>
              </div>
            </div>
          </ModernCard>
        </motion.div>
      </div>
    </SlideLayout>
  );
};

export default Slide18;