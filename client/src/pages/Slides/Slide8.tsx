import React from 'react';
import SlideLayout from '@/components/PitchDeck/SlideLayout';
import { motion } from 'framer-motion';
import { 
  ModernCard,
  modernTypography, 
  modernColors,
  fadeInVariants
} from '@/components/PitchDeck/ModernSlideStyles';
import { ClipboardList, Check } from 'lucide-react';

const Slide8: React.FC = () => {
  const TOTAL_SLIDES = 18;

  const milestones = [
    { date: 'Q1 2023', title: 'Product Development', status: 'completed' },
    { date: 'Q2 2023', title: 'MVP Launch', status: 'completed' },
    { date: 'Q3 2023', title: 'Seed Funding Round', status: 'completed' },
    { date: 'Q4 2023', title: 'First 100 Customers', status: 'completed' },
    { date: 'Q1 2024', title: 'Feature Expansion', status: 'in-progress' },
    { date: 'Q2 2024', title: 'Series A Funding', status: 'planned' },
    { date: 'Q3 2024', title: 'International Expansion', status: 'planned' },
    { date: 'Q4 2024', title: 'Enterprise Solution Launch', status: 'planned' },
  ];

  return (
    <SlideLayout title="Milestones & Roadmap" slideNumber={8} totalSlides={TOTAL_SLIDES}>
      <motion.div
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
        className="mb-8"
      >
        <ModernCard className="p-8">
          <div className="flex items-center gap-4 mb-8">
            <ClipboardList className="h-7 w-7 text-accent" />
            <h3 className={modernTypography.heading} style={{ color: modernColors.text }}>
              Development Timeline
            </h3>
          </div>
          
          <div className="space-y-5">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.08 * index, duration: 0.4 }}
                className={`flex items-center p-4 rounded-sm border backdrop-blur-sm ${
                  milestone.status === 'completed' 
                    ? 'border-green-100 bg-green-50/80' 
                    : milestone.status === 'in-progress'
                    ? 'border-blue-100 bg-blue-50/80'
                    : 'border-slate-100 bg-slate-50/80'
                }`}
              >
                <div className="mr-5 flex-shrink-0">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-sm ${
                    milestone.status === 'completed' 
                      ? 'bg-green-100/90 text-green-600' 
                      : milestone.status === 'in-progress'
                      ? 'bg-blue-100/90 text-blue-600'
                      : 'bg-slate-100/90 text-slate-400'
                  }`}>
                    {milestone.status === 'completed' ? (
                      <Check className="h-6 w-6" />
                    ) : (
                      <span className={modernTypography.small}>{index + 1}</span>
                    )}
                  </div>
                </div>
                <div className="flex-grow">
                  <h4 className={modernTypography.subheading}>{milestone.title}</h4>
                  <p className={modernTypography.small}>{milestone.date}</p>
                </div>
                <div className="flex-shrink-0">
                  <span className={`text-xs tracking-wide px-3 py-1 rounded-full ${
                    milestone.status === 'completed' 
                      ? 'bg-green-100 text-green-700' 
                      : milestone.status === 'in-progress'
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-slate-100 text-slate-700'
                  }`}>
                    {milestone.status === 'completed' 
                      ? 'Completed' 
                      : milestone.status === 'in-progress'
                      ? 'In Progress'
                      : 'Planned'}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </ModernCard>
      </motion.div>
    </SlideLayout>
  );
};

export default Slide8;