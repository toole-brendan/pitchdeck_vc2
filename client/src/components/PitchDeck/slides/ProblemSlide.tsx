import { motion } from 'framer-motion';
import { ClockIcon, DollarSignIcon, XIcon, FrownIcon } from 'lucide-react';
import Slide from '../Slide';
import { SlideProps } from '../PitchDeck';
import { 
  ModernSectionHeader, 
  ModernCard, 
  ModernIconWrapper, 
  fadeInUpVariants,
  modernTypography
} from '../ModernSlideStyles';

const ProblemSlide: React.FC<SlideProps> = ({ isActive, index }) => {
  const problems = [
    {
      icon: <ClockIcon className="h-5 w-5" />,
      title: "Inefficient Processes",
      description: "Current solutions are time-consuming and resource-intensive, leading to wasted effort and reduced productivity."
    },
    {
      icon: <DollarSignIcon className="h-5 w-5" />,
      title: "High Costs",
      description: "Existing alternatives are expensive to implement and maintain, creating barriers to adoption for many organizations."
    },
    {
      icon: <XIcon className="h-5 w-5" />,
      title: "Fragmented Ecosystem",
      description: "The market is full of disconnected solutions that don't communicate well with each other, causing integration headaches."
    },
    {
      icon: <FrownIcon className="h-5 w-5" />,
      title: "Poor User Experience",
      description: "Users struggle with complicated interfaces and confusing workflows, reducing adoption and satisfaction."
    }
  ];

  return (
    <Slide isActive={isActive} index={index}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          custom={0}
          variants={fadeInUpVariants}
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
        >
          <ModernSectionHeader className="mb-8">
            The Problem
          </ModernSectionHeader>
        </motion.div>
        
        <motion.h2
          custom={1}
          variants={fadeInUpVariants}
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          className={modernTypography.title}
        >
          What We're Solving
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.title}
              custom={i + 2}
              variants={fadeInUpVariants}
              initial="hidden"
              animate={isActive ? "visible" : "hidden"}
            >
              <ModernCard>
                <ModernIconWrapper>
                  {problem.icon}
                </ModernIconWrapper>
                <h3 className={modernTypography.featureCardTitle}>{problem.title}</h3>
                <p className={modernTypography.featureCardDescription}>{problem.description}</p>
              </ModernCard>
            </motion.div>
          ))}
        </div>
      </div>
    </Slide>
  );
};

export default ProblemSlide;
