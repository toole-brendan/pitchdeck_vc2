import { motion } from 'framer-motion';
import { CheckIcon, MonitorIcon } from 'lucide-react';
import Slide from '../Slide';
import { SlideProps } from '../PitchDeck';
import { ModernSectionHeader, ModernBadge, fadeInUpVariants } from '../ModernSlideStyles';

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
          className="text-4xl md:text-5xl font-extralight tracking-tight mb-10"
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
              <h3 className="text-xl font-light tracking-tight mb-4">Key Features</h3>
              <ul className="space-y-4">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <div className="text-accent mr-3 mt-0.5">
                      <CheckIcon className="h-5 w-5" />
                    </div>
                    <p className="text-sm md:text-base font-light text-gray-600">
                      <span className="font-normal text-gray-900">{feature.title}</span>: {feature.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2 relative h-64 md:h-auto">
              <div className="absolute inset-0 bg-accentLight rounded-lg flex items-center justify-center text-accent">
                <div className="text-center">
                  <MonitorIcon className="h-16 w-16 mx-auto mb-4 opacity-50" />
                  <p className="text-xs uppercase tracking-wider font-medium">Product Interface</p>
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
          <span className="text-xs uppercase tracking-widest text-gray-400 font-medium block mb-3">Advantages</span>
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
