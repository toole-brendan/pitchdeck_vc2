import { motion } from 'framer-motion';
import { GlobeIcon, ZapIcon, PuzzleIcon } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import Slide from '../Slide';
import { SlideProps } from '../PitchDeck';
import { ModernSectionHeader, ModernCard, ModernDivider, fadeInUpVariants } from '../ModernSlideStyles';

const BusinessModelSlide: React.FC<SlideProps> = ({ isActive, index }) => {
  const revenueStreams = [
    {
      icon: <GlobeIcon className="h-5 w-5" />,
      title: "SaaS Subscription",
      description: "Monthly or annual subscription plans based on features and user count.",
      price: "$39",
      unit: "/mo",
      subtext: "Starting price per user"
    },
    {
      icon: <ZapIcon className="h-5 w-5" />,
      title: "Enterprise Solutions",
      description: "Custom implementations with dedicated support and integration services.",
      price: "$10k",
      unit: "+",
      subtext: "Annual contract value"
    },
    {
      icon: <PuzzleIcon className="h-5 w-5" />,
      title: "API Partnerships",
      description: "Revenue sharing with technology partners and integration providers.",
      price: "15",
      unit: "%",
      subtext: "Partner commission"
    }
  ];

  const projectedRevenue = [
    { year: "Year 1", amount: "$1.2M" },
    { year: "Year 2", amount: "$3.8M" },
    { year: "Year 3", amount: "$8.5M" },
    { year: "Year 4", amount: "$15.2M" }
  ];

  const pieData = [
    { name: "Subscriptions", value: 65, color: "#6366F1" },
    { name: "Enterprise", value: 25, color: "#10B981" },
    { name: "API", value: 10, color: "#D1D5DB" }
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
            Business Model
          </ModernSectionHeader>
        </motion.div>
        
        <motion.h2
          custom={1}
          variants={fadeInUpVariants}
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          className="text-4xl md:text-5xl font-extralight tracking-tight mb-10"
        >
          Revenue Strategy
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {revenueStreams.map((stream, i) => (
            <motion.div
              key={stream.title}
              custom={i + 2}
              variants={fadeInUpVariants}
              initial="hidden"
              animate={isActive ? "visible" : "hidden"}
            >
              <ModernCard>
                <div className="w-10 h-10 flex items-center justify-center  bg-gray-50 text-accent mb-4">
                  {stream.icon}
                </div>
                <h3 className="text-xl font-light tracking-tight mb-2">{stream.title}</h3>
                <p className="text-sm md:text-base font-light text-gray-600 mb-4">
                  {stream.description}
                </p>
                <div className="text-3xl font-light mb-2">
                  {stream.price}<span className="text-sm text-gray-500">{stream.unit}</span>
                </div>
                <p className="text-xs font-light text-gray-500">{stream.subtext}</p>
              </ModernCard>
            </motion.div>
          ))}
        </div>
        
        <ModernDivider />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            custom={5}
            variants={fadeInUpVariants}
            initial="hidden"
            animate={isActive ? "visible" : "hidden"}
          >
            <h3 className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-4">Projected Revenue</h3>
            <div className="space-y-4">
              {projectedRevenue.map((item, i) => (
                <div key={i} className="flex justify-between">
                  <p className="text-sm font-light">{item.year}</p>
                  <p className="text-sm font-normal">{item.amount}</p>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            custom={6}
            variants={fadeInUpVariants}
            initial="hidden"
            animate={isActive ? "visible" : "hidden"}
          >
            <h3 className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-4">Revenue Breakdown</h3>
            <div className="h-48 relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={0}
                    outerRadius={80}
                    dataKey="value"
                    startAngle={90}
                    endAngle={-270}
                    animationBegin={300}
                    animationDuration={1000}
                    animationEasing="ease-out"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              
              {/* Legend */}
              <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-4 text-xs">
                {pieData.map((entry, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-3 h-3  mr-2" style={{ backgroundColor: entry.color }}></div>
                    <span>{entry.name} ({entry.value}%)</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Slide>
  );
};

export default BusinessModelSlide;
