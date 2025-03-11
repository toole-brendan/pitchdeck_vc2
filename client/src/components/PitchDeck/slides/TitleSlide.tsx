import { motion } from 'framer-motion';
import Slide from '../Slide';
import { SlideProps } from '../PitchDeck';
import { 
  ModernSectionHeader, 
  fadeInUpVariants, 
  modernTypography, 
  ModernDivider, 
  ModernBadge 
} from '../ModernSlideStyles';

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
          className={modernTypography.heroTitle}
        >
          Revolutionizing <span className="text-accent">Our Industry</span>
        </motion.h1>
        
        <motion.p
          custom={2}
          variants={fadeInUpVariants}
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          className={modernTypography.heroSubtitle}
        >
          A modern approach to solving today's biggest challenges
        </motion.p>

        <motion.div
          custom={2.5}
          variants={fadeInUpVariants}
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          className="my-12"
        >
          <ModernDivider width="40%" centered />
        </motion.div>
        
        <motion.div
          custom={3}
          variants={fadeInUpVariants}
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          className="mt-6"
        >
          <ModernBadge>
            Company Name, Inc.
          </ModernBadge>
        </motion.div>
      </div>
    </Slide>
  );
};

export default TitleSlide;
