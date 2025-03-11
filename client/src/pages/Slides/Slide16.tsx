import React from 'react';
import SlideLayout from '@/components/PitchDeck/SlideLayout';
import { motion } from 'framer-motion';
import { 
  ModernCard, 
  ModernIconWrapper, 
  modernTypography, 
  modernColors,
  fadeInUpVariants,
  itemFadeInUpVariant
} from '@/components/PitchDeck/ModernSlideStyles';
import { Rocket, Code, GitPullRequest } from 'lucide-react';

const Slide16: React.FC = () => {
  const TOTAL_SLIDES = 18;

  return (
    <SlideLayout title="Technology & Innovation" slideNumber={16} totalSlides={TOTAL_SLIDES}>
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
            Our Technology Stack
          </h2>
          <p className={modernTypography.body}>
            Placeholder text explaining the technology foundation of our product and why it matters.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
          <motion.div
            variants={itemFadeInUpVariant}
            custom={1}
          >
            <ModernCard className="h-full p-8 flex flex-col items-center text-center">
              <ModernIconWrapper size="large">
                <Code className="h-7 w-7" />
              </ModernIconWrapper>
              <h3 className={`${modernTypography.heading} mt-5 mb-3`} style={{ color: modernColors.text }}>
                Frontend
              </h3>
              <p className={`${modernTypography.body} mb-6`}>
                Placeholder text describing our frontend technology stack.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 w-full">
                {['React', 'TypeScript', 'Tailwind CSS', 'GraphQL', 'Redux', 'Jest'].map((tech, i) => (
                  <div key={i} className="bg-slate-50/80 backdrop-blur-sm p-2  text-xs tracking-wide font-light text-slate-600 border border-slate-100">
                    {tech}
                  </div>
                ))}
              </div>
            </ModernCard>
          </motion.div>

          <motion.div
            variants={itemFadeInUpVariant}
            custom={2}
          >
            <ModernCard className="h-full p-8 flex flex-col items-center text-center">
              <ModernIconWrapper size="large">
                <GitPullRequest className="h-7 w-7" />
              </ModernIconWrapper>
              <h3 className={`${modernTypography.heading} mt-5 mb-3`} style={{ color: modernColors.text }}>
                Backend
              </h3>
              <p className={`${modernTypography.body} mb-6`}>
                Placeholder text describing our backend technology stack.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 w-full">
                {['Node.js', 'Express', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes'].map((tech, i) => (
                  <div key={i} className="bg-slate-50/80 backdrop-blur-sm p-2  text-xs tracking-wide font-light text-slate-600 border border-slate-100">
                    {tech}
                  </div>
                ))}
              </div>
            </ModernCard>
          </motion.div>

          <motion.div
            variants={itemFadeInUpVariant}
            custom={3}
          >
            <ModernCard className="h-full p-8 flex flex-col items-center text-center">
              <ModernIconWrapper size="large">
                <Rocket className="h-7 w-7" />
              </ModernIconWrapper>
              <h3 className={`${modernTypography.heading} mt-5 mb-3`} style={{ color: modernColors.text }}>
                Infrastructure
              </h3>
              <p className={`${modernTypography.body} mb-6`}>
                Placeholder text describing our cloud and DevOps infrastructure.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 w-full">
                {['AWS', 'CI/CD', 'Terraform', 'Monitoring', 'Security', 'Backup'].map((tech, i) => (
                  <div key={i} className="bg-slate-50/80 backdrop-blur-sm p-2  text-xs tracking-wide font-light text-slate-600 border border-slate-100">
                    {tech}
                  </div>
                ))}
              </div>
            </ModernCard>
          </motion.div>
        </div>

        <motion.div
          variants={itemFadeInUpVariant}
          custom={4}
        >
          <ModernCard className="p-8">
            <h3 className={`${modernTypography.heading} mb-6`} style={{ color: modernColors.text }}>
              Innovation Roadmap
            </h3>
            
            <div className="space-y-6">
              <div className="flex gap-5">
                <div className="w-20 flex-shrink-0 flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-accent/90 flex items-center justify-center text-white shadow-sm backdrop-blur-sm">
                    <span className={modernTypography.small}>1</span>
                  </div>
                  <div className="h-full w-0.5 bg-slate-100 my-2 mx-auto"></div>
                </div>
                <div>
                  <h4 className={`${modernTypography.subheading} mb-2`}>AI-Powered Features</h4>
                  <p className={`${modernTypography.body} mb-2`}>
                    Placeholder text for upcoming AI-powered features and capabilities.
                  </p>
                  <p className={modernTypography.small}>Timeline: Q3 2023</p>
                </div>
              </div>
              
              <div className="flex gap-5">
                <div className="w-20 flex-shrink-0 flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-accent/90 flex items-center justify-center text-white shadow-sm backdrop-blur-sm">
                    <span className={modernTypography.small}>2</span>
                  </div>
                  <div className="h-full w-0.5 bg-slate-100 my-2 mx-auto"></div>
                </div>
                <div>
                  <h4 className={`${modernTypography.subheading} mb-2`}>API Platform</h4>
                  <p className={`${modernTypography.body} mb-2`}>
                    Placeholder text for planned API platform and integration ecosystem.
                  </p>
                  <p className={modernTypography.small}>Timeline: Q1 2024</p>
                </div>
              </div>
              
              <div className="flex gap-5">
                <div className="w-20 flex-shrink-0 flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-accent/90 flex items-center justify-center text-white shadow-sm backdrop-blur-sm">
                    <span className={modernTypography.small}>3</span>
                  </div>
                </div>
                <div>
                  <h4 className={`${modernTypography.subheading} mb-2`}>Blockchain Integration</h4>
                  <p className={`${modernTypography.body} mb-2`}>
                    Placeholder text for future blockchain integration and applications.
                  </p>
                  <p className={modernTypography.small}>Timeline: Q4 2024</p>
                </div>
              </div>
            </div>
          </ModernCard>
        </motion.div>
      </motion.div>
    </SlideLayout>
  );
};

export default Slide16;