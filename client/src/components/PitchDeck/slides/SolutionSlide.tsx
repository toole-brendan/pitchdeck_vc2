import { motion } from 'framer-motion';
import { CheckIcon, MonitorIcon } from 'lucide-react';
import Slide from '../Slide';
import { SlideProps } from '../PitchDeck';
import { 
  ModernSectionHeader, 
  ModernBadge, 
  ModernSectionLabel, 
  ModernListItem, 
  modernTypography,
  fadeInUpVariants 
} from '../ModernSlideStyles';

const SolutionSlide: React.FC<SlideProps> = ({ isActive, index }) => {
  const features = [
    {
      title: "Seamless Integration",
      description: "Works with your existing systems without disruption"
    },
    {
      title: "Automation",
      description: "Reduces manual tasks by up to 80% through intelligent workflows"
    },
    {
      title: "Real-time Analytics",
      description: "Make data-driven decisions with immediate insights"
    },
    {
      title: "Intuitive Design",
      description: "User-friendly interface requiring minimal training"
    }
  ];

  const advantages = [
    { label: "Cost Effective", color: "#6366F1" },
    { label: "Time Saving", color: "#10B981" },
    { label: "Scalable", color: "#6366F1" },
    { label: "User Friendly", color: "#10B981" }
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
          <ModernSectionHeader dark className="mb-8">
            Our Solution
          </ModernSectionHeader>
        </motion.div>
        
        <motion.h2
          custom={1}
          variants={fadeInUpVariants}
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          className={modernTypography.title + " mb-10"}
        >
          Introducing <span className="text-accent">ProductName</span>
        </motion.h2>
        
        <motion.div
          custom={2}
          variants={fadeInUpVariants}
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          className="bg-white border border-gray-100 shadow-md p-8 mb-10 rounded-lg"
        >
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h3 className={modernTypography.featureCardTitle + " mb-4"}>Key Features</h3>
              <div className="space-y-4">
                {features.map((feature, i) => (
                  <ModernListItem 
                    key={i} 
                    marker={
                      <div className="text-accent mr-1 mt-0.5">
                        <CheckIcon className="h-5 w-5" />
                      </div>
                    }
                  >
                    <span className={modernTypography.featureCardTitle}>{feature.title}</span>: {feature.description}
                  </ModernListItem>
                ))}
              </div>
            </div>
            <div className="md:w-1/2 relative h-64 md:h-auto">
              <div className="absolute inset-0 bg-accentLight rounded-lg flex items-center justify-center text-accent">
                <div className="text-center">
                  <MonitorIcon className="h-16 w-16 mx-auto mb-4 opacity-50" />
                  <p className={modernTypography.sectionLabel}>Product Interface</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          custom={3}
          variants={fadeInUpVariants}
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          className="text-center"
        >
          <ModernSectionLabel className="block mb-3">Advantages</ModernSectionLabel>
          <div className="flex flex-wrap justify-center gap-3">
            {advantages.map((advantage, i) => (
              <ModernBadge key={i} color={advantage.color}>
                {advantage.label}
              </ModernBadge>
            ))}
          </div>
        </motion.div>
      </div>
    </Slide>
  );
};

export default SolutionSlide;
