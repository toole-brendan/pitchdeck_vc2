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
    <SlideLayout title="Title Slide" slideNumber={1} totalSlides={TOTAL_SLIDES}>
      <div className="flex flex-col items-center justify-center text-center">
        <h1 
          className={`${modernTypography.title} mb-6`}
          style={{ color: modernColors.text }}
        >
          Presentation Title
        </h1>
        
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