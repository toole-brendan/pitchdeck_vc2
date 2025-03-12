import React from 'react';
import SlideLayout from '@/components/PitchDeck/SlideLayout';
import { 
  ModernCard, 
  modernTypography, 
  modernColors
} from '@/components/PitchDeck/ModernSlideStyles';

const Slide1: React.FC = () => {
  const TOTAL_SLIDES = 18;

  return (
    <SlideLayout title="" slideNumber={1} totalSlides={TOTAL_SLIDES}>
      <div className="flex flex-col items-center justify-center text-center">
        <div 
          className="font-serif font-light text-lg tracking-widest border border-gray-800/70 dark:border-gray-100/70 px-4 py-1.5 text-gray-800 dark:text-gray-100 m-0 cursor-pointer hover:opacity-90 transition-opacity mb-6"
          style={{ color: modernColors.text }}
        >
          HandReceipt
        </div>
        
        <p 
          className={`${modernTypography.subtitle} max-w-2xl mx-auto mb-12`}
        >
          Subtitle or brief description
        </p>
        
        <div className="mt-6">
          <ModernCard className="px-10 py-8">
            <p className={modernTypography.small}>Presented by: [Presenter Name]</p>
            <p className={modernTypography.small}>Date: [Presentation Date]</p>
          </ModernCard>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide1;