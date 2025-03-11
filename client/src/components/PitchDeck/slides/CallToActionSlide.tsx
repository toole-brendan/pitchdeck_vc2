import { motion } from 'framer-motion';
import Slide from '../Slide';
import { SlideProps } from '../PitchDeck';
import { ModernSectionHeader, ModernDivider, fadeInUpVariants } from '../ModernSlideStyles';

const CallToActionSlide: React.FC<SlideProps> = ({ isActive, index }) => {
  const nextSteps = [
    {
      title: "Investment",
      description: "Seeking $5M Series A funding to accelerate growth"
    },
    {
      title: "Partnerships",
      description: "Strategic alliances for market expansion"
    },
    {
      title: "Beta Program",
      description: "Early adopters receive lifetime discount"
    }
  ];

  return (
    <Slide isActive={isActive} index={index}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          custom={0}
          variants={fadeInUpVariants}
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
        >
          <ModernSectionHeader dark className="mb-8">
            Next Steps
          </ModernSectionHeader>
        </motion.div>
        
        <motion.h2
          custom={1}
          variants={fadeInUpVariants}
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          className="text-4xl md:text-5xl font-extralight tracking-tight mb-8"
        >
          Join Us On This Journey
        </motion.h2>
        
        <div className="mb-10 max-w-2xl mx-auto">
          <motion.p
            custom={2}
            variants={fadeInUpVariants}
            initial="hidden"
            animate={isActive ? "visible" : "hidden"}
            className="text-lg md:text-xl font-light tracking-normal text-gray-500 mb-6"
          >
            We're looking for strategic partners and investors who share our vision for transforming this industry.
          </motion.p>
          
          <motion.div
            custom={3}
            variants={fadeInUpVariants}
            initial="hidden"
            animate={isActive ? "visible" : "hidden"}
          >
            <div className="h-px w-32 bg-gray-100 my-8 mx-auto"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {nextSteps.map((step, i) => (
              <motion.div
                key={i}
                custom={i + 4}
                variants={fadeInUpVariants}
                initial="hidden"
                animate={isActive ? "visible" : "hidden"}
                className="p-6 bg-accentLight "
              >
                <h3 className="text-xl font-light tracking-tight mb-3 text-accent">{step.title}</h3>
                <p className="text-sm font-light text-gray-600">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
        
        <motion.div
          custom={7}
          variants={fadeInUpVariants}
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
        >
          <div className="inline-block bg-accent text-white py-3 px-8  font-light text-lg tracking-wide hover:bg-opacity-90 transition-colors cursor-pointer">
            Schedule a Demo
          </div>
        </motion.div>
        
        <motion.div
          custom={8}
          variants={fadeInUpVariants}
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          className="mt-12"
        >
          <p className="text-sm font-light text-gray-500">
            Contact us at <span className="text-accent">contact@companyname.com</span>
          </p>
        </motion.div>
      </div>
    </Slide>
  );
};

export default CallToActionSlide;
