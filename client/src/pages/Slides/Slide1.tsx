import React from 'react';
import SlideLayout from '@/components/PitchDeck/SlideLayout';
import { 
  ModernCard, 
  modernTypography, 
  modernColors
} from '@/components/PitchDeck/ModernSlideStyles';

const Slide1: React.FC = () => {
  const TOTAL_SLIDES = 17;

  return (
    <SlideLayout title="" slideNumber={1} totalSlides={TOTAL_SLIDES}>
      <div className="flex flex-col items-center justify-center text-center">
        <div 
          className="font-['Georgia'] font-extralight text-5xl tracking-widest border-2 border-gray-800/80 dark:border-gray-100/80 px-8 py-4 text-gray-800 dark:text-gray-100 m-0 cursor-pointer hover:opacity-90 transition-opacity mb-6"
          style={{ color: modernColors.text }}
        >
          HandReceipt
        </div>
        
        <p 
          className={`${modernTypography.subtitle} max-w-2xl mx-auto mb-12`}
        >
          Blockchain-powered inventory management
        </p>
        
        <div className="mt-6">
          <ModernCard className="px-10 py-8">
            <p className="text-base font-extralight tracking-tight text-black">Ajax Group, Inc.</p>
          </ModernCard>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide1;