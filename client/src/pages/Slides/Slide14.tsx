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
import { MessageSquare, Star, Quote } from 'lucide-react';

const Slide14: React.FC = () => {
  const TOTAL_SLIDES = 18;

  const testimonials = [
    {
      quote: "Placeholder text for a glowing customer testimonial about how the product has transformed their business or workflow.",
      name: "Customer Name",
      position: "Position, Company",
      stars: 5
    },
    {
      quote: "Placeholder text for another positive testimonial highlighting different aspects of the product and its benefits.",
      name: "Customer Name",
      position: "Position, Company",
      stars: 5
    },
    {
      quote: "Placeholder text for a third testimonial focusing on customer service, implementation experience, or specific features.",
      name: "Customer Name",
      position: "Position, Company",
      stars: 4
    }
  ];

  return (
    <SlideLayout title="Testimonials & Case Studies" slideNumber={14} totalSlides={TOTAL_SLIDES}>
      <motion.div
        variants={fadeInUpVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-8"
      >
        <motion.div
          variants={itemFadeInUpVariant}
          custom={0}
          className="mb-2 text-center max-w-2xl mx-auto"
        >
          <h2 className={modernTypography.pageTitle} style={{ color: modernColors.text }}>
            Customer Success Stories
          </h2>
          <p className={modernTypography.body}>
            Placeholder text introducing real-world examples of how our solution has helped customers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemFadeInUpVariant}
              custom={index + 1}
            >
              <ModernCard className="h-full p-8 flex flex-col">
                <div className="mb-5 text-accent">
                  <Quote className="h-9 w-9 opacity-30" />
                </div>
                
                <p className={`${modernTypography.body} italic mb-8 flex-grow`}>
                  "{testimonial.quote}"
                </p>
                
                <div>
                  <div className="flex mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-5 w-5 ${i < testimonial.stars ? 'text-yellow-400 fill-yellow-400' : 'text-slate-200'}`} 
                      />
                    ))}
                  </div>
                  
                  <p className={modernTypography.subheading}>{testimonial.name}</p>
                  <p className={modernTypography.small}>{testimonial.position}</p>
                </div>
              </ModernCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={itemFadeInUpVariant}
          custom={4}
        >
          <ModernCard className="p-8">
            <div className="flex items-center gap-4 mb-6">
              <MessageSquare className="h-7 w-7 text-accent" />
              <h3 className={modernTypography.heading} style={{ color: modernColors.text }}>
                Featured Case Study
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className={`${modernTypography.subheading} mb-3`}>Client Overview</h4>
                <p className={`${modernTypography.body} mb-6`}>
                  Placeholder text describing the client, their industry, and the challenges they faced.
                </p>
                
                <h4 className={`${modernTypography.subheading} mb-3`}>Solution Implemented</h4>
                <p className={`${modernTypography.body} mb-6`}>
                  Placeholder text describing how our solution addressed their specific needs.
                </p>
                
                <h4 className={`${modernTypography.subheading} mb-3`}>Results</h4>
                <ul className={`space-y-3 ${modernTypography.list}`}>
                  <li>• XX% improvement in [key metric]</li>
                  <li>• $XXX,XXX in [cost savings/revenue growth]</li>
                  <li>• Additional quantifiable result</li>
                </ul>
              </div>
              
              <div className="flex flex-col justify-center">
                <div className="bg-slate-50/80 backdrop-blur-sm rounded-sm border border-slate-100 h-52 flex items-center justify-center mb-5">
                  [Case Study Visual Placeholder]
                </div>
                <p className={`text-center italic ${modernTypography.small}`}>
                  "Placeholder for an impactful quote from this specific case study client."
                </p>
              </div>
            </div>
          </ModernCard>
        </motion.div>
      </motion.div>
    </SlideLayout>
  );
};

export default Slide14;