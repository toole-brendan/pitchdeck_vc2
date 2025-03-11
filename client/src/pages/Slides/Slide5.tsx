import React from 'react';
import SlideLayout from '@/components/PitchDeck/SlideLayout';
import { motion } from 'framer-motion';
import { 
  ModernCard,
  modernTypography,
  modernColors,
  fadeInVariants,
  scaleUpVariants,
  itemFadeInUpVariant
} from '@/components/PitchDeck/ModernSlideStyles';
import { ArrowRight } from 'lucide-react';
import { useLocation } from 'wouter';

const Slide5: React.FC = () => {
  const TOTAL_SLIDES = 18;
  const [, navigate] = useLocation();
  
  return (
    <SlideLayout title="Call to Action" slideNumber={5} totalSlides={TOTAL_SLIDES}>
      <div className="flex flex-col items-center">
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-12 max-w-3xl"
        >
          <h2 className={`${modernTypography.pageTitle} mb-6`} style={{ color: modernColors.text }}>
            Thank You!
          </h2>
          <p className={`${modernTypography.subtitle} max-w-2xl mx-auto`}>
            Placeholder text for conclusion and next steps
          </p>
        </motion.div>
        
        <motion.div
          variants={scaleUpVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-xl"
        >
          <ModernCard className="p-10 text-center">
            <h3 className={`${modernTypography.heading} mb-8`} style={{ color: modernColors.text }}>
              Get in Touch
            </h3>
            
            <motion.div className="flex flex-col space-y-5 mb-10">
              <motion.div 
                variants={itemFadeInUpVariant}
                custom={0}
                className="p-4 bg-slate-50/80 backdrop-blur-sm  border border-slate-100 shadow-sm"
              >
                <p className={modernTypography.body}>Email: contact@example.com</p>
              </motion.div>
              
              <motion.div 
                variants={itemFadeInUpVariant}
                custom={1}
                className="p-4 bg-slate-50/80 backdrop-blur-sm  border border-slate-100 shadow-sm"
              >
                <p className={modernTypography.body}>Phone: (123) 456-7890</p>
              </motion.div>
              
              <motion.div 
                variants={itemFadeInUpVariant}
                custom={2}
                className="p-4 bg-slate-50/80 backdrop-blur-sm  border border-slate-100 shadow-sm"
              >
                <p className={modernTypography.body}>Website: www.example.com</p>
              </motion.div>
            </motion.div>
            
            <motion.button 
              variants={itemFadeInUpVariant}
              custom={3}
              onClick={() => navigate('/')}
              className="px-7 py-4 bg-accent text-white  flex items-center gap-3 mx-auto hover:bg-accent/90 transition-colors tracking-wide"
            >
              Return to Home <ArrowRight className="h-5 w-5" />
            </motion.button>
          </ModernCard>
        </motion.div>
      </div>
    </SlideLayout>
  );
};

export default Slide5;