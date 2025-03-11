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
import { 
  TrendingUp, 
  DollarSign, 
  Users, 
  CreditCard, 
  BarChart4, 
  PieChart,
  Clock,
  Briefcase,
  Code,
  Megaphone,
  FileText,
  Check
} from 'lucide-react';

const Slide14: React.FC = () => {
  const TOTAL_SLIDES = 18;

  // Financial projections data
  const projections = [
    { year: 'Year 1', revenue: '$0', customers: '0', expenses: '$1.2M', cashFlow: '-$1.2M' },
    { year: 'Year 2', revenue: '$500K', customers: '3-5', expenses: '$1.8M', cashFlow: '-$1.3M' },
    { year: 'Year 3', revenue: '$2.5M', customers: '8-12', expenses: '$3.0M', cashFlow: '-$500K' },
    { year: 'Year 4', revenue: '$7.5M', customers: '15-20', expenses: '$5.0M', cashFlow: '$2.5M' },
    { year: 'Year 5', revenue: '$18M', customers: '30-40', expenses: '$10M', cashFlow: '$8M' }
  ];

  // Business metrics data
  const businessMetrics = [
    { 
      title: 'Customer Acquisition Cost', 
      value: '$30-65K', 
      description: 'Per enterprise client',
      icon: Users
    },
    { 
      title: 'Gross Margin', 
      value: '80-85%', 
      description: 'Software revenue',
      icon: PieChart
    },
    { 
      title: 'Customer LTV', 
      value: '$400K+', 
      description: '5-year value',
      icon: CreditCard
    },
    { 
      title: 'Breakeven Point', 
      value: 'Year 4', 
      description: 'Cash flow positive',
      icon: BarChart4
    }
  ];

  // Funding allocation data
  const fundingAllocation = [
    { category: 'Product Development', percentage: 55, amount: '$412.5K', icon: Code },
    { category: 'Sales & Marketing', percentage: 15, amount: '$112.5K', icon: Megaphone },
    { category: 'Operations', percentage: 20, amount: '$150K', icon: Briefcase },
    { category: 'Legal & Compliance', percentage: 10, amount: '$75K', icon: FileText }
  ];

  return (
    <SlideLayout title="Financial Projections" slideNumber={14} totalSlides={TOTAL_SLIDES}>
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
            5-year forecast based on market analysis and industry benchmarks
          </h2>
        </motion.div>

        <motion.div 
          variants={itemFadeInUpVariant}
          custom={1}
          className="mb-4"
        >
          <ModernCard className="p-6">
            <div className="flex items-center gap-3 mb-5">
              <TrendingUp className="h-7 w-7 text-accent" />
              <h3 className={modernTypography.heading} style={{ color: modernColors.text }}>
                Five-Year Projections
              </h3>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-3 px-4 font-medium text-slate-600"></th>
                    {projections.map((item, index) => (
                      <th key={index} className="text-center py-3 px-4 font-medium text-slate-600">
                        {item.year}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-100">
                    <td className="py-3 px-4 font-medium text-slate-700 flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-accent" /> Revenue
                    </td>
                    {projections.map((item, index) => (
                      <td key={index} className="text-center py-3 px-4">
                        <span className={`${index === 0 ? 'text-slate-400' : 'text-accent font-medium'}`}>
                          {item.revenue}
                        </span>
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-3 px-4 font-medium text-slate-700 flex items-center gap-2">
                      <Users className="h-4 w-4 text-accent" /> Customers
                    </td>
                    {projections.map((item, index) => (
                      <td key={index} className="text-center py-3 px-4">
                        <span className={`${index === 0 ? 'text-slate-400' : 'text-accent font-medium'}`}>
                          {item.customers}
                        </span>
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-3 px-4 font-medium text-slate-700 flex items-center gap-2">
                      <CreditCard className="h-4 w-4 text-accent" /> Expenses
                    </td>
                    {projections.map((item, index) => (
                      <td key={index} className="text-center py-3 px-4 text-slate-700">
                        {item.expenses}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-slate-700 flex items-center gap-2">
                      <BarChart4 className="h-4 w-4 text-accent" /> Net Cash Flow
                    </td>
                    {projections.map((item, index) => (
                      <td key={index} className="text-center py-3 px-4">
                        <span className={item.cashFlow.includes('-') ? 'text-rose-500 font-medium' : 'text-emerald-500 font-medium'}>
                          {item.cashFlow}
                        </span>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </ModernCard>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            variants={itemFadeInUpVariant}
            custom={2}
          >
            <ModernCard className="h-full p-6">
              <div className="flex items-center gap-3 mb-5">
                <BarChart4 className="h-7 w-7 text-accent" />
                <h3 className={modernTypography.heading} style={{ color: modernColors.text }}>
                  Key Business Metrics
                </h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {businessMetrics.map((metric, index) => (
                  <div 
                    key={index} 
                    className="bg-slate-50/80 backdrop-blur-sm p-4 border border-slate-100 rounded-md"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-md flex items-center justify-center bg-accent/10">
                        <metric.icon className="h-4 w-4 text-accent" />
                      </div>
                      <h4 className={modernTypography.label}>{metric.title}</h4>
                    </div>
                    <p className={`${modernTypography.heading} text-accent mb-1`}>{metric.value}</p>
                    <p className={`${modernTypography.small} text-slate-500`}>{metric.description}</p>
                  </div>
                ))}
              </div>
            </ModernCard>
          </motion.div>

          <motion.div
            variants={itemFadeInUpVariant}
            custom={3}
          >
            <ModernCard className="h-full p-6">
              <div className="flex items-center gap-3 mb-5">
                <PieChart className="h-7 w-7 text-accent" />
                <h3 className={modernTypography.heading} style={{ color: modernColors.text }}>
                  Seed Funding Allocation
                </h3>
              </div>
              
              <div className="mb-3">
                <p className={modernTypography.body}>How we'll use the $750K seed investment:</p>
              </div>
              
              <div className="space-y-4 mb-6">
                {fundingAllocation.map((item, index) => (
                  <div key={index} className="bg-slate-50/80 backdrop-blur-sm border border-slate-100 rounded-md overflow-hidden">
                    <div className="flex justify-between items-center p-3">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-md flex items-center justify-center bg-accent/10">
                          <item.icon className="h-4 w-4 text-accent" />
                        </div>
                        <span className={modernTypography.label}>{item.category}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`${modernTypography.small} text-slate-500`}>{item.percentage}%</span>
                        <span className={`${modernTypography.body} text-accent`}>{item.amount}</span>
                      </div>
                    </div>
                    <div className="h-1.5 bg-slate-100">
                      <div 
                        className="h-full bg-accent"
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-slate-50/80 backdrop-blur-sm p-4 border border-slate-100 rounded-md">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="h-5 w-5 text-accent" />
                  <h4 className={modernTypography.label}>Expected Runway</h4>
                </div>
                <p className={`${modernTypography.body} mb-1`}>12-18 months</p>
                <p className={`${modernTypography.small} text-slate-500`}>
                  Sufficient time to develop MVP, demonstrate core technology, and validate with potential customers
                </p>
              </div>
            </ModernCard>
          </motion.div>
        </div>
      </motion.div>
    </SlideLayout>
  );
};

export default Slide14;