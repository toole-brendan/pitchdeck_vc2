import React from 'react';
import SlideLayout from '@/components/PitchDeck/SlideLayout';
import { motion } from 'framer-motion';
import { 
  ModernCard, 
  modernTypography, 
  modernColors,
  fadeInUpVariants,
  itemFadeInUpVariant
} from '@/components/PitchDeck/ModernSlideStyles';
import { ArrowRight, MessageCircle, Mail, Phone, Globe } from 'lucide-react';
import { useLocation } from 'wouter';

const Slide18: React.FC = () => {
  const TOTAL_SLIDES = 18;
  const [, navigate] = useLocation();
  
  return (
    <SlideLayout title="Thank You & Next Steps" slideNumber={18} totalSlides={TOTAL_SLIDES}>
      <motion.div
        variants={fadeInUpVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center gap-8"
      >
        <motion.div
          variants={itemFadeInUpVariant}
          custom={0}
          className="text-center mb-6 max-w-2xl"
        >
          <h2 className={modernTypography.giant} style={{ color: modernColors.text }}>
            Thank You For Your Time!
          </h2>
          <p className={modernTypography.lead}>
            Placeholder text summarizing the key points and expressing appreciation for the audience's attention.
          </p>
        </motion.div>
        
        <motion.div
          variants={itemFadeInUpVariant}
          custom={1}
          className="w-full max-w-4xl"
        >
          <ModernCard className="p-8 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row gap-10">
              <div className="md:w-1/2">
                <div className="flex items-center gap-3 mb-8">
                  <MessageCircle className="h-7 w-7 text-accent" />
                  <h3 className={modernTypography.heading} style={{ color: modernColors.text }}>
                    Next Steps
                  </h3>
                </div>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10  bg-accent/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0 shadow-sm">
                      <span className={`text-accent ${modernTypography.small}`}>1</span>
                    </div>
                    <div>
                      <p className={modernTypography.subheading}>Follow-up Meeting</p>
                      <p className={modernTypography.body}>Placeholder text for next steps.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10  bg-accent/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0 shadow-sm">
                      <span className={`text-accent ${modernTypography.small}`}>2</span>
                    </div>
                    <div>
                      <p className={modernTypography.subheading}>Due Diligence</p>
                      <p className={modernTypography.body}>Placeholder text for next steps.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10  bg-accent/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0 shadow-sm">
                      <span className={`text-accent ${modernTypography.small}`}>3</span>
                    </div>
                    <div>
                      <p className={modernTypography.subheading}>Partnership Discussion</p>
                      <p className={modernTypography.body}>Placeholder text for next steps.</p>
                    </div>
                  </div>
                </div>
                
                <button 
                  onClick={() => navigate('/')}
                  className="px-6 py-3 bg-accent/90 backdrop-blur-sm text-white  flex items-center gap-3 hover:bg-accent transition-colors shadow-sm"
                >
                  <span className={modernTypography.label}>Return to Home</span> <ArrowRight className="h-5 w-5" />
                </button>
              </div>
              
              <div className="md:w-1/2 md:border-l md:border-slate-100 md:pl-10">
                <h3 className={`${modernTypography.heading} mb-8`} style={{ color: modernColors.text }}>
                  Contact Information
                </h3>
                
                <div className="space-y-5">
                  <div className="flex items-center gap-4 p-4 bg-slate-50/80 backdrop-blur-sm  border border-slate-100">
                    <div className="w-12 h-12  bg-accent/10 backdrop-blur-sm flex items-center justify-center shadow-sm">
                      <Mail className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <p className={modernTypography.label}>Email</p>
                      <p className={modernTypography.subheading}>contact@example.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-slate-50/80 backdrop-blur-sm  border border-slate-100">
                    <div className="w-12 h-12  bg-accent/10 backdrop-blur-sm flex items-center justify-center shadow-sm">
                      <Phone className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <p className={modernTypography.label}>Phone</p>
                      <p className={modernTypography.subheading}>(123) 456-7890</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-slate-50/80 backdrop-blur-sm  border border-slate-100">
                    <div className="w-12 h-12  bg-accent/10 backdrop-blur-sm flex items-center justify-center shadow-sm">
                      <Globe className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <p className={modernTypography.label}>Website</p>
                      <p className={modernTypography.subheading}>www.example.com</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <p className={`${modernTypography.quote} text-center`}>
                    "Placeholder for a compelling closing statement or company motto."
                  </p>
                </div>
              </div>
            </div>
          </ModernCard>
        </motion.div>
      </motion.div>
    </SlideLayout>
  );
};

export default Slide18;