import React from 'react';
import SlideLayout from '@/components/PitchDeck/SlideLayout';
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
  Wallet,
  CreditCard as TokenIcon
} from 'lucide-react';
import { useContentScale } from '@/hooks/useContentScale';
import ResponsiveChart, { ChartData } from '@/components/PitchDeck/ResponsiveChart';
import { useIsMobile } from '@/hooks/use-mobile';
import { motion } from 'framer-motion';

const Slide15: React.FC = () => {
  const TOTAL_SLIDES = 18;
  const isMobile = useIsMobile();
  
  // Use our custom hook to manage content scaling
  const { contentRef, scale, isScaled } = useContentScale();

  // Enhanced financial projections data with more detailed growth
  const projections = [
    { 
      year: 'Year 1', 
      revenue: { 
        total: '$0.25M',
        breakdown: {
          subscriptions: '$0.15M',
          transactions: '$0.05M',
          services: '$0.05M',
          tokenValue: '$0M'
        }
      }, 
      customers: '2-3', 
      expenses: '$1.2M', 
      cashFlow: '-$0.95M',
      tokenHoldings: '$0.5M',
      // Numeric values for charts
      revenueValue: 0.25,
      expensesValue: 1.2,
      tokenValue: 0.5
    },
    { 
      year: 'Year 2', 
      revenue: { 
        total: '$1.8M',
        breakdown: {
          subscriptions: '$1.1M',
          transactions: '$0.3M',
          services: '$0.2M',
          tokenValue: '$0.2M'
        }
      }, 
      customers: '5-8', 
      expenses: '$2.4M', 
      cashFlow: '-$0.6M',
      tokenHoldings: '$1.2M',
      revenueValue: 1.8,
      expensesValue: 2.4,
      tokenValue: 1.2
    },
    { 
      year: 'Year 3', 
      revenue: { 
        total: '$5.5M',
        breakdown: {
          subscriptions: '$3.0M',
          transactions: '$1.2M',
          services: '$0.5M',
          tokenValue: '$0.8M'
        }
      }, 
      customers: '12-18', 
      expenses: '$4.8M', 
      cashFlow: '$0.7M',
      tokenHoldings: '$3.5M',
      revenueValue: 5.5,
      expensesValue: 4.8,
      tokenValue: 3.5
    },
    { 
      year: 'Year 4', 
      revenue: { 
        total: '$12.5M',
        breakdown: {
          subscriptions: '$6.0M',
          transactions: '$3.5M',
          services: '$1.0M',
          tokenValue: '$2.0M'
        }
      }, 
      customers: '25-35', 
      expenses: '$8.0M', 
      cashFlow: '$4.5M',
      tokenHoldings: '$8.0M',
      revenueValue: 12.5,
      expensesValue: 8.0,
      tokenValue: 8.0
    },
    { 
      year: 'Year 5', 
      revenue: { 
        total: '$28M',
        breakdown: {
          subscriptions: '$12.0M',
          transactions: '$8.0M',
          services: '$2.0M',
          tokenValue: '$6.0M'
        }
      }, 
      customers: '45-60', 
      expenses: '$15M', 
      cashFlow: '$13M',
      tokenHoldings: '$20M',
      revenueValue: 28,
      expensesValue: 15,
      tokenValue: 20
    }
  ];

  // Enhanced business metrics data
  const businessMetrics = [
    { 
      title: 'Customer Acquisition Cost', 
      value: '$30-65K', 
      description: 'Per enterprise client',
      icon: Users,
      color: modernColors.crypto
    },
    { 
      title: 'Gross Margin', 
      value: '80-85%', 
      description: 'Software & token revenue',
      icon: PieChart,
      color: modernColors.crypto
    },
    { 
      title: 'Customer LTV', 
      value: '$750K+', 
      description: '5-year value with transactions',
      icon: CreditCard,
      color: modernColors.crypto
    },
    { 
      title: 'Breakeven Point', 
      value: 'Year 3', 
      description: 'Cash flow positive',
      icon: BarChart4,
      color: modernColors.crypto
    }
  ];

  // Revenue Stream Distribution
  const revenueDistribution = [
    { name: 'Subscription Licenses', percentage: 42, color: modernColors.military },
    { name: 'Transaction Fees', percentage: 29, color: modernColors.commercial },
    { name: 'Services & Analytics', percentage: 8, color: modernColors.military },
    { name: 'Shell Token Value', percentage: 21, color: modernColors.crypto }
  ];

  // Chart data for financial projections
  const financialChartData: ChartData[] = projections.map(item => ({
    name: item.year,
    value: item.revenueValue, // Primary value for ChartData interface
    Revenue: item.revenueValue,
    Expenses: item.expensesValue,
    'Token Holdings': item.tokenValue,
    color: modernColors.crypto
  }));

  return (
    <SlideLayout 
      title="Financial Projections" 
      subtitle="Multi-stream revenue model with Shell token ecosystem"
      slideNumber={15} 
      totalSlides={TOTAL_SLIDES}
    >
      <motion.div 
        className="flex flex-col gap-3 mt-6 pb-6 h-[calc(100vh-200px)]"
        variants={fadeInUpVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="flex-grow-0" variants={itemFadeInUpVariant} custom={0}>
          <ModernCard className="p-3">
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="h-5 w-5" style={{ color: modernColors.crypto }} />
              <h3 className="text-lg font-medium">
                Five-Year Projections
              </h3>
            </div>
            
            {/* Mobile view: Chart representation */}
            {isMobile && (
              <ResponsiveChart 
                data={financialChartData}
                type="bar"
                keys={['Revenue', 'Expenses', 'Token Holdings']}
                title="Financial Growth ($M)"
                height={220}
                simplified={true}
              />
            )}
            
            {/* Desktop view: Table */}
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-1 px-2 font-medium text-black"></th>
                    {projections.map((item, index) => (
                      <th key={index} className="text-center py-1 px-2 font-medium text-black">
                        {item.year}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-100">
                    <td className="py-1 px-2 font-medium text-black flex items-center gap-2">
                      <DollarSign className="h-4 w-4" style={{ color: modernColors.crypto }} /> Revenue
                    </td>
                    {projections.map((item, index) => (
                      <td key={index} className="text-center py-1 px-2">
                        <span className={`${index === 0 ? 'text-black' : 'font-medium'}`} style={{ color: index === 0 ? 'black' : modernColors.crypto }}>
                          {item.revenue.total}
                        </span>
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-1 px-2 font-medium text-black flex items-center gap-2">
                      <Users className="h-4 w-4" style={{ color: modernColors.crypto }} /> Customers
                    </td>
                    {projections.map((item, index) => (
                      <td key={index} className="text-center py-1 px-2">
                        <span className={`${index === 0 ? 'text-black' : 'font-medium'}`} style={{ color: index === 0 ? 'black' : modernColors.crypto }}>
                          {item.customers}
                        </span>
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-1 px-2 font-medium text-black flex items-center gap-2">
                      <Wallet className="h-4 w-4" style={{ color: modernColors.crypto }} /> Token Holdings
                    </td>
                    {projections.map((item, index) => (
                      <td key={index} className="text-center py-1 px-2">
                        <span className={`${index === 0 ? 'text-black' : 'font-medium'}`} style={{ color: index === 0 ? 'black' : modernColors.crypto }}>
                          {item.tokenHoldings}
                        </span>
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-1 px-2 font-medium text-black flex items-center gap-2">
                      <CreditCard className="h-4 w-4" style={{ color: modernColors.crypto }} /> Expenses
                    </td>
                    {projections.map((item, index) => (
                      <td key={index} className="text-center py-1 px-2 text-black">
                        {item.expenses}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-1 px-2 font-medium text-black flex items-center gap-2">
                      <BarChart4 className="h-4 w-4" style={{ color: modernColors.crypto }} /> Net Cash Flow
                    </td>
                    {projections.map((item, index) => (
                      <td key={index} className="text-center py-1 px-2">
                        <span className={`font-medium`} style={{ color: item.cashFlow.includes('-') ? 'rgb(244, 63, 94)' : 'rgb(16, 185, 129)' }}>
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div variants={itemFadeInUpVariant} custom={1}>
            <ModernCard className="h-full p-3">
              <div className="flex items-center gap-2 mb-2">
                <BarChart4 className="h-5 w-5" style={{ color: modernColors.crypto }} />
                <h3 className="text-lg font-medium">
                  Key Business Metrics
                </h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {businessMetrics.map((metric, index) => (
                  <div 
                    key={index} 
                    className="bg-slate-50/80 backdrop-blur-sm p-2 border border-slate-100 rounded-md"
                  >
                    <div className="flex items-center gap-2 mb-0.5">
                      <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ backgroundColor: `${metric.color}20` }}>
                        <metric.icon className="h-3.5 w-3.5" style={{ color: metric.color }} />
                      </div>
                      <h4 className="text-xs font-medium">{metric.title}</h4>
                    </div>
                    <p className="text-sm font-medium mb-0" style={{ color: metric.color }}>{metric.value}</p>
                    <p className="text-xs leading-tight">{metric.description}</p>
                  </div>
                ))}
              </div>
            </ModernCard>
          </motion.div>

          <motion.div variants={itemFadeInUpVariant} custom={2}>
            <ModernCard className="h-full p-3">
              <div className="flex items-center gap-2 mb-2">
                <PieChart className="h-5 w-5" style={{ color: modernColors.crypto }} />
                <h3 className="text-lg font-medium">
                  Revenue Streams (Year 5)
                </h3>
              </div>
              
              <div className="space-y-1.5 mb-3">
                {revenueDistribution.map((stream, index) => (
                  <div key={index} className="bg-slate-50/80 backdrop-blur-sm border border-slate-100 rounded-md overflow-hidden">
                    <div className="flex justify-between items-center p-2">
                      <span className="text-sm font-medium">{stream.name}</span>
                      <span className="text-sm">{stream.percentage}%</span>
                    </div>
                    <div className="h-1.5 bg-slate-100">
                      <div 
                        className="h-full"
                        style={{ backgroundColor: stream.color, width: `${stream.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-slate-50/80 backdrop-blur-sm p-2 border border-slate-100 rounded-md">
                <div className="flex items-center gap-2 mb-0.5">
                  <TokenIcon className="h-4 w-4" style={{ color: modernColors.crypto }} />
                  <h4 className="text-xs font-medium" style={{ color: modernColors.crypto }}>Shell Token Strategy</h4>
                </div>
                <p className="text-xs leading-tight">
                  Holding 10-15% of pre-mined Shell tokens as company reserves creates significant upside potential beyond operational revenue. 
                  As transaction volume grows, token value is projected to reach $20M by Year 5.
                </p>
              </div>
            </ModernCard>
          </motion.div>
        </div>
      </motion.div>
    </SlideLayout>
  );
};

export default Slide15;
