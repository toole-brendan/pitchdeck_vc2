import { motion } from 'framer-motion';
import Slide from '../Slide';
import { SlideProps } from '../PitchDeck';
import { ModernSectionHeader } from '../ModernSlideStyles';
import { fadeInUpVariants } from '../ModernSlideStyles';

const TitleSlide: React.FC<SlideProps> = ({ isActive, index }) => {
  return (
    <Slide isActive={isActive} index={index}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          custom={0}
          variants={fadeInUpVariants}
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
        >
          <ModernSectionHeader className="mb-8">
            Pitch Deck 2023
          </ModernSectionHeader>
        </motion.div>
        
        <motion.h1
          custom={1}
          variants={fadeInUpVariants}
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          className="text-4xl md:text-6xl font-extralight tracking-tight mb-6"
        >
          Revolutionizing <span className="text-accent">Our Industry</span>
        </motion.h1>
        
        <motion.p
          custom={2}
          variants={fadeInUpVariants}
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          className="text-lg md:text-xl font-light tracking-normal text-gray-500 max-w-2xl mx-auto mb-12"
        >
          A modern approach to solving today's biggest challenges
        </motion.p>
        
        <motion.div
          custom={3}
          variants={fadeInUpVariants}
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          className="mt-10"
        >
          <div className="inline-block bg-accent text-white py-2 px-6 rounded-full font-light tracking-wide">
            Company Name, Inc.
          </div>
        </motion.div>
      </div>
    </Slide>
  );
};

export default TitleSlide;
