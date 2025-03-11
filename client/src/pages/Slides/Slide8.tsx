import React from 'react';
import SlideLayout from '@/components/PitchDeck/SlideLayout';
import { motion } from 'framer-motion';
import { ModernCard } from '@/components/PitchDeck/ModernSlideStyles';
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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <ModernCard className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <ClipboardList className="h-6 w-6 text-accent" />
            <h3 className="text-xl font-semibold">Development Timeline</h3>
          </div>
          
          <div className="space-y-4">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.3 }}
                className={`flex items-center p-3 rounded-md border ${
                  milestone.status === 'completed' 
                    ? 'border-green-200 bg-green-50' 
                    : milestone.status === 'in-progress'
                    ? 'border-blue-200 bg-blue-50'
                    : 'border-gray-200 bg-gray-50'
                }`}
              >
                <div className="mr-4 flex-shrink-0">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    milestone.status === 'completed' 
                      ? 'bg-green-100 text-green-600' 
                      : milestone.status === 'in-progress'
                      ? 'bg-blue-100 text-blue-600'
                      : 'bg-gray-100 text-gray-400'
                  }`}>
                    {milestone.status === 'completed' ? (
                      <Check className="h-5 w-5" />
                    ) : (
                      <span>{index + 1}</span>
                    )}
                  </div>
                </div>
                <div className="flex-grow">
                  <h4 className="font-medium">{milestone.title}</h4>
                  <p className="text-sm text-gray-500">{milestone.date}</p>
                </div>
                <div className="flex-shrink-0">
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    milestone.status === 'completed' 
                      ? 'bg-green-100 text-green-700' 
                      : milestone.status === 'in-progress'
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-gray-100 text-gray-700'
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