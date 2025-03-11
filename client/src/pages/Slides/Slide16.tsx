import React from 'react';
import SlideLayout from '@/components/PitchDeck/SlideLayout';
import { motion } from 'framer-motion';
import { ModernCard, ModernIconWrapper } from '@/components/PitchDeck/ModernSlideStyles';
import { Rocket, Code, GitPullRequest } from 'lucide-react';

const Slide16: React.FC = () => {
  const TOTAL_SLIDES = 18;

  return (
    <SlideLayout title="Technology & Innovation" slideNumber={16} totalSlides={TOTAL_SLIDES}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-center max-w-2xl mx-auto"
      >
        <h2 className="text-2xl font-bold mb-4">Our Technology Stack</h2>
        <p className="text-gray-600">
          Placeholder text explaining the technology foundation of our product and why it matters.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <ModernCard className="h-full p-6 flex flex-col items-center text-center">
            <ModernIconWrapper>
              <Code className="h-6 w-6" />
            </ModernIconWrapper>
            <h3 className="text-xl font-semibold mt-4 mb-2">Frontend</h3>
            <p className="text-gray-600 mb-4">
              Placeholder text describing our frontend technology stack.
            </p>
            <div className="grid grid-cols-3 gap-2 w-full">
              {['React', 'TypeScript', 'Tailwind CSS', 'GraphQL', 'Redux', 'Jest'].map((tech, i) => (
                <div key={i} className="bg-gray-50 p-2 rounded text-xs font-medium text-gray-700 border border-gray-100">
                  {tech}
                </div>
              ))}
            </div>
          </ModernCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <ModernCard className="h-full p-6 flex flex-col items-center text-center">
            <ModernIconWrapper>
              <GitPullRequest className="h-6 w-6" />
            </ModernIconWrapper>
            <h3 className="text-xl font-semibold mt-4 mb-2">Backend</h3>
            <p className="text-gray-600 mb-4">
              Placeholder text describing our backend technology stack.
            </p>
            <div className="grid grid-cols-3 gap-2 w-full">
              {['Node.js', 'Express', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes'].map((tech, i) => (
                <div key={i} className="bg-gray-50 p-2 rounded text-xs font-medium text-gray-700 border border-gray-100">
                  {tech}
                </div>
              ))}
            </div>
          </ModernCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <ModernCard className="h-full p-6 flex flex-col items-center text-center">
            <ModernIconWrapper>
              <Rocket className="h-6 w-6" />
            </ModernIconWrapper>
            <h3 className="text-xl font-semibold mt-4 mb-2">Infrastructure</h3>
            <p className="text-gray-600 mb-4">
              Placeholder text describing our cloud and DevOps infrastructure.
            </p>
            <div className="grid grid-cols-3 gap-2 w-full">
              {['AWS', 'CI/CD', 'Terraform', 'Monitoring', 'Security', 'Backup'].map((tech, i) => (
                <div key={i} className="bg-gray-50 p-2 rounded text-xs font-medium text-gray-700 border border-gray-100">
                  {tech}
                </div>
              ))}
            </div>
          </ModernCard>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <ModernCard className="p-6">
          <h3 className="text-xl font-semibold mb-4">Innovation Roadmap</h3>
          
          <div className="space-y-5">
            <div className="flex gap-4">
              <div className="w-20 flex-shrink-0 flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white font-semibold">
                  1
                </div>
                <div className="h-full w-0.5 bg-gray-200 my-2 mx-auto"></div>
              </div>
              <div>
                <h4 className="font-semibold mb-1">AI-Powered Features</h4>
                <p className="text-gray-600 mb-1">
                  Placeholder text for upcoming AI-powered features and capabilities.
                </p>
                <p className="text-sm text-gray-500">Timeline: Q3 2023</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-20 flex-shrink-0 flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white font-semibold">
                  2
                </div>
                <div className="h-full w-0.5 bg-gray-200 my-2 mx-auto"></div>
              </div>
              <div>
                <h4 className="font-semibold mb-1">API Platform</h4>
                <p className="text-gray-600 mb-1">
                  Placeholder text for planned API platform and integration ecosystem.
                </p>
                <p className="text-sm text-gray-500">Timeline: Q1 2024</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-20 flex-shrink-0 flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white font-semibold">
                  3
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Blockchain Integration</h4>
                <p className="text-gray-600 mb-1">
                  Placeholder text for future blockchain integration and applications.
                </p>
                <p className="text-sm text-gray-500">Timeline: Q4 2024</p>
              </div>
            </div>
          </div>
        </ModernCard>
      </motion.div>
    </SlideLayout>
  );
};

export default Slide16;