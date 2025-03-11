import React from 'react';
import SlideLayout from '@/components/PitchDeck/SlideLayout';
import { motion } from 'framer-motion';
import { ModernCard, ModernBadge } from '@/components/PitchDeck/ModernSlideStyles';
import { Users, ArrowDown, BarChart } from 'lucide-react';

const Slide10: React.FC = () => {
  const TOTAL_SLIDES = 18;

  const competitors = [
    { 
      name: 'Competitor A', 
      strengths: ['Great UI/UX', 'Strong brand recognition'],
      weaknesses: ['Limited features', 'Higher price point']
    },
    { 
      name: 'Competitor B', 
      strengths: ['Established market presence', 'Comprehensive features'],
      weaknesses: ['Complex interface', 'Poor customer support']
    },
    { 
      name: 'Our Solution', 
      strengths: ['Intuitive design', 'Advanced AI functionality', 'Competitive pricing'],
      weaknesses: ['Newer market entrant']
    }
  ];

  return (
    <SlideLayout title="Competitive Landscape" slideNumber={10} totalSlides={TOTAL_SLIDES}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-center max-w-2xl mx-auto"
      >
        <h2 className="text-2xl font-bold mb-4">Market Competition Analysis</h2>
        <p className="text-gray-600">
          Placeholder text describing the competitive landscape and our differentiation.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mb-8"
      >
        <ModernCard className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <BarChart className="h-6 w-6 text-accent" />
            <h3 className="text-xl font-semibold">Competitive Analysis</h3>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="py-3 px-4 text-left">Company</th>
                  <th className="py-3 px-4 text-left">Strengths</th>
                  <th className="py-3 px-4 text-left">Weaknesses</th>
                </tr>
              </thead>
              <tbody>
                {competitors.map((competitor, index) => (
                  <tr 
                    key={index} 
                    className={`border-b border-gray-200 ${
                      competitor.name === 'Our Solution' ? 'bg-accent/5' : ''
                    }`}
                  >
                    <td className="py-3 px-4 font-medium">
                      {competitor.name === 'Our Solution' ? (
                        <span className="text-accent">{competitor.name}</span>
                      ) : competitor.name}
                    </td>
                    <td className="py-3 px-4">
                      <ul className="space-y-1">
                        {competitor.strengths.map((strength, i) => (
                          <li key={i} className="text-sm">• {strength}</li>
                        ))}
                      </ul>
                    </td>
                    <td className="py-3 px-4">
                      <ul className="space-y-1">
                        {competitor.weaknesses.map((weakness, i) => (
                          <li key={i} className="text-sm">• {weakness}</li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ModernCard>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold mb-3">Our Competitive Advantage</h3>
          <p className="text-gray-700 mb-4">
            Placeholder text describing our unique value proposition and competitive advantages.
          </p>
          <div className="flex flex-wrap gap-2">
            <ModernBadge>Innovative Technology</ModernBadge>
            <ModernBadge>User-Centric Design</ModernBadge>
            <ModernBadge>Cost-Effective</ModernBadge>
            <ModernBadge>Scalable Solution</ModernBadge>
          </div>
        </div>
      </motion.div>
    </SlideLayout>
  );
};

export default Slide10;