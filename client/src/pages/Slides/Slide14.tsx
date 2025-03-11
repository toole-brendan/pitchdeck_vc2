import React from 'react';
import SlideLayout from '@/components/PitchDeck/SlideLayout';
import { motion } from 'framer-motion';
import { ModernCard } from '@/components/PitchDeck/ModernSlideStyles';
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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-center max-w-2xl mx-auto"
      >
        <h2 className="text-2xl font-bold mb-4">Customer Success Stories</h2>
        <p className="text-gray-600">
          Placeholder text introducing real-world examples of how our solution has helped customers.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * (index + 1), duration: 0.5 }}
          >
            <ModernCard className="h-full p-6 flex flex-col">
              <div className="mb-4 text-accent">
                <Quote className="h-8 w-8 opacity-30" />
              </div>
              
              <p className="text-gray-600 italic mb-6 flex-grow">
                "{testimonial.quote}"
              </p>
              
              <div>
                <div className="flex mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${i < testimonial.stars ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.position}</p>
              </div>
            </ModernCard>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <ModernCard className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <MessageSquare className="h-6 w-6 text-accent" />
            <h3 className="text-xl font-semibold">Featured Case Study</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-lg mb-3">Client Overview</h4>
              <p className="text-gray-600 mb-4">
                Placeholder text describing the client, their industry, and the challenges they faced.
              </p>
              
              <h4 className="font-semibold text-lg mb-3">Solution Implemented</h4>
              <p className="text-gray-600 mb-4">
                Placeholder text describing how our solution addressed their specific needs.
              </p>
              
              <h4 className="font-semibold text-lg mb-3">Results</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• XX% improvement in [key metric]</li>
                <li>• $XXX,XXX in [cost savings/revenue growth]</li>
                <li>• Additional quantifiable result</li>
              </ul>
            </div>
            
            <div className="flex flex-col justify-center">
              <div className="bg-gray-100 rounded-md h-48 flex items-center justify-center mb-4">
                [Case Study Visual Placeholder]
              </div>
              <p className="text-center text-sm text-gray-500 italic">
                "Placeholder for an impactful quote from this specific case study client."
              </p>
            </div>
          </div>
        </ModernCard>
      </motion.div>
    </SlideLayout>
  );
};

export default Slide14;