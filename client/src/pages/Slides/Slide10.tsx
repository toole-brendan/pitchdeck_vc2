import React from 'react';
import SlideLayout from '@/components/PitchDeck/SlideLayout';
import { motion } from 'framer-motion';
import { 
  ModernCard, 
  ModernBadge, 
  modernTypography, 
  modernColors,
  fadeInUpVariants,
  itemFadeInUpVariant
} from '@/components/PitchDeck/ModernSlideStyles';
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
            Market Competition Analysis
          </h2>
          <p className={modernTypography.body}>
            Placeholder text describing the competitive landscape and our differentiation.
          </p>
        </motion.div>

        <motion.div
          variants={itemFadeInUpVariant}
          custom={1}
          className="mb-6"
        >
          <ModernCard className="p-8">
            <div className="flex items-center gap-4 mb-6">
              <BarChart className="h-7 w-7 text-accent" />
              <h3 className={modernTypography.heading} style={{ color: modernColors.text }}>
                Competitive Analysis
              </h3>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="bg-slate-50/80 backdrop-blur-sm border-b border-slate-100">
                    <th className="py-4 px-5 text-left font-light tracking-wide">Company</th>
                    <th className="py-4 px-5 text-left font-light tracking-wide">Strengths</th>
                    <th className="py-4 px-5 text-left font-light tracking-wide">Weaknesses</th>
                  </tr>
                </thead>
                <tbody>
                  {competitors.map((competitor, index) => (
                    <tr 
                      key={index} 
                      className={`border-b border-slate-100 ${
                        competitor.name === 'Our Solution' ? 'bg-accent/5 backdrop-blur-sm' : ''
                      }`}
                    >
                      <td className="py-4 px-5">
                        {competitor.name === 'Our Solution' ? (
                          <span className={`${modernTypography.subheading} text-accent font-light`}>
                            {competitor.name}
                          </span>
                        ) : (
                          <span className={modernTypography.subheading}>{competitor.name}</span>
                        )}
                      </td>
                      <td className="py-4 px-5">
                        <ul className="space-y-2">
                          {competitor.strengths.map((strength, i) => (
                            <li key={i} className={modernTypography.list}>• {strength}</li>
                          ))}
                        </ul>
                      </td>
                      <td className="py-4 px-5">
                        <ul className="space-y-2">
                          {competitor.weaknesses.map((weakness, i) => (
                            <li key={i} className={modernTypography.list}>• {weakness}</li>
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
          variants={itemFadeInUpVariant}
          custom={2}
        >
          <ModernCard className="p-8">
            <h3 className={modernTypography.heading} style={{ color: modernColors.text, marginBottom: '0.75rem' }}>
              Our Competitive Advantage
            </h3>
            <p className={`${modernTypography.body} mb-6`}>
              Placeholder text describing our unique value proposition and competitive advantages.
            </p>
            <div className="flex flex-wrap gap-3">
              <ModernBadge>Innovative Technology</ModernBadge>
              <ModernBadge>User-Centric Design</ModernBadge>
              <ModernBadge>Cost-Effective</ModernBadge>
              <ModernBadge>Scalable Solution</ModernBadge>
            </div>
          </ModernCard>
        </motion.div>
      </motion.div>
    </SlideLayout>
  );
};

export default Slide10;