import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import Slide from '../Slide';
import { SlideProps } from '../PitchDeck';
import { 
  ModernSectionHeader, 
  ModernDivider, 
  fadeInUpVariants,
  modernTypography 
} from '../ModernSlideStyles';

const MarketSlide: React.FC<SlideProps> = ({ isActive, index }) => {
  const [chartData, setChartData] = useState([
    { year: '2020', value: 0 },
    { year: '2021', value: 0 },
    { year: '2022', value: 0 },
    { year: '2023', value: 0 },
  ]);

  // Animate chart when slide becomes active
  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => {
        setChartData([
          { year: '2020', value: 5 },
          { year: '2021', value: 10 },
          { year: '2022', value: 16 },
          { year: '2023', value: 22 },
        ]);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      // Reset chart data when slide is not active
      setChartData([
        { year: '2020', value: 0 },
        { year: '2021', value: 0 },
        { year: '2022', value: 0 },
        { year: '2023', value: 0 },
      ]);
    }
  }, [isActive]);

  const indicators = [
    { name: 'Industry Adoption', value: 74 },
    { name: 'Growth Rate', value: 28, color: '#10B981' },
    { name: 'Market Penetration', value: 42 },
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
            Market Opportunity
          </ModernSectionHeader>
        </motion.div>
        
        <motion.h2
          custom={1}
          variants={fadeInUpVariants}
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          className={modernTypography.title + " mb-10"}
        >
          A Growing Market
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            custom={2}
            variants={fadeInUpVariants}
            initial="hidden"
            animate={isActive ? "visible" : "hidden"}
          >
            <div className="h-64 mb-4 relative flex items-end bg-gray-50 rounded-lg p-6">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} margin={{ top: 20, right: 10, left: 10, bottom: 5 }}>
                  <XAxis dataKey="year" axisLine={false} tickLine={false} />
                  <YAxis hide />
                  <Bar dataKey="value" fill="#6366F1" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
              <div className="absolute top-2 left-2 text-xs font-light text-gray-500">
                Market Size ($B)
              </div>
            </div>
            <div className="text-center">
              <p className="text-sm md:text-base font-light text-gray-600">
                Market projected to reach <span className="font-normal text-accent">$24.5 billion</span> by 2025
              </p>
            </div>
          </motion.div>
          
          <motion.div
            custom={3}
            variants={fadeInUpVariants}
            initial="hidden"
            animate={isActive ? "visible" : "hidden"}
            className="flex flex-col justify-between"
          >
            <div>
              <h3 className={modernTypography.featureCardTitle + " mb-4"}>Key Market Indicators</h3>
              <div className="space-y-6">
                {indicators.map((indicator, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-1">
                      <p className="text-sm font-light">{indicator.name}</p>
                      <p className="text-sm font-medium">{indicator.value}%</p>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-1.5">
                      <div 
                        className={`${indicator.color ? '' : 'bg-accent'} h-1.5 rounded-full transition-all duration-1000 ease-out`}
                        style={{ 
                          width: isActive ? `${indicator.value}%` : '0%',
                          backgroundColor: indicator.color || ''
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <ModernDivider />
            
            <div className="bg-accentLight p-4 rounded-lg">
              <p className="text-sm md:text-base font-light text-gray-600">
                <span className="text-accent font-normal">86%</span> of companies are planning to increase their investment in this space over the next two years.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </Slide>
  );
};

export default MarketSlide;
