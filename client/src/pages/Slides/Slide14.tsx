import React from 'react';
import SlideLayout from '@/components/PitchDeck/SlideLayout';
import { 
  ModernCard, 
  ModernBadge,
  modernTypography, 
  modernColors
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
      icon: Users,
      color: modernColors.crypto
    },
    { 
      title: 'Gross Margin', 
      value: '80-85%', 
      description: 'Software revenue',
      icon: PieChart,
      color: modernColors.crypto
    },
    { 
      title: 'Customer LTV', 
      value: '$400K+', 
      description: '5-year value',
      icon: CreditCard,
      color: modernColors.crypto
    },
    { 
      title: 'Breakeven Point', 
      value: 'Year 4', 
      description: 'Cash flow positive',
      icon: BarChart4,
      color: modernColors.crypto
    }
  ];

  // Funding allocation data
  const fundingAllocation = [
    { category: 'Product Development', percentage: 55, amount: '$412.5K', icon: Code, color: modernColors.crypto },
    { category: 'Sales & Marketing', percentage: 15, amount: '$112.5K', icon: Megaphone, color: modernColors.crypto },
    { category: 'Operations', percentage: 20, amount: '$150K', icon: Briefcase, color: modernColors.crypto },
    { category: 'Legal & Compliance', percentage: 10, amount: '$75K', icon: FileText, color: modernColors.crypto }
  ];

  return (
    <SlideLayout title="Financial Projections" slideNumber={14} totalSlides={TOTAL_SLIDES}>
      <div className="flex flex-col gap-8">
        <div className="mb-2 text-center max-w-2xl mx-auto">
          <h2 className={modernTypography.pageTitle}>
            5-year forecast based on market analysis and industry benchmarks
          </h2>
        </div>

        <div className="mb-4">
          <ModernCard className="p-6">
            <div className="flex items-center gap-3 mb-5">
              <TrendingUp className="h-7 w-7" style={{ color: modernColors.crypto }} />
              <h3 className={modernTypography.heading}>
                Five-Year Projections
              </h3>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-3 px-4 font-medium text-black"></th>
                    {projections.map((item, index) => (
                      <th key={index} className="text-center py-3 px-4 font-medium text-black">
                        {item.year}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-100">
                    <td className="py-3 px-4 font-medium text-black flex items-center gap-2">
                      <DollarSign className="h-4 w-4" style={{ color: modernColors.commercial }} /> Revenue
                    </td>
                    {projections.map((item, index) => (
                      <td key={index} className="text-center py-3 px-4">
                        <span className={`${index === 0 ? 'text-black' : 'font-medium'}`} style={{ color: index === 0 ? 'black' : modernColors.commercial }}>
                          {item.revenue}
                        </span>
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-3 px-4 font-medium text-black flex items-center gap-2">
                      <Users className="h-4 w-4" style={{ color: modernColors.military }} /> Customers
                    </td>
                    {projections.map((item, index) => (
                      <td key={index} className="text-center py-3 px-4">
                        <span className={`${index === 0 ? 'text-black' : 'font-medium'}`} style={{ color: index === 0 ? 'black' : modernColors.military }}>
                          {item.customers}
                        </span>
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-3 px-4 font-medium text-black flex items-center gap-2">
                      <CreditCard className="h-4 w-4" style={{ color: modernColors.commercial }} /> Expenses
                    </td>
                    {projections.map((item, index) => (
                      <td key={index} className="text-center py-3 px-4 text-black">
                        {item.expenses}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-black flex items-center gap-2">
                      <BarChart4 className="h-4 w-4" style={{ color: modernColors.military }} /> Net Cash Flow
                    </td>
                    {projections.map((item, index) => (
                      <td key={index} className="text-center py-3 px-4">
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <ModernCard className="h-full p-6">
              <div className="flex items-center gap-3 mb-5">
                <BarChart4 className="h-7 w-7" style={{ color: modernColors.crypto }} />
                <h3 className={modernTypography.heading}>
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
                      <div className="w-8 h-8 rounded-md flex items-center justify-center" style={{ backgroundColor: `${metric.color}20` }}>
                        <metric.icon className="h-4 w-4" style={{ color: metric.color }} />
                      </div>
                      <h4 className={modernTypography.label}>{metric.title}</h4>
                    </div>
                    <p className={`${modernTypography.heading} mb-1`} style={{ color: metric.color }}>{metric.value}</p>
                    <p className={`${modernTypography.small}`}>{metric.description}</p>
                  </div>
                ))}
              </div>
            </ModernCard>
          </div>

          <div>
            <ModernCard className="h-full p-6">
              <div className="flex items-center gap-3 mb-5">
                <PieChart className="h-7 w-7" style={{ color: modernColors.military }} />
                <h3 className={modernTypography.heading}>
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
                        <div className="w-8 h-8 rounded-md flex items-center justify-center" style={{ backgroundColor: `${item.color}20` }}>
                          <item.icon className="h-4 w-4" style={{ color: item.color }} />
                        </div>
                        <span className={modernTypography.label} style={{ color: item.color }}>{item.category}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`${modernTypography.small}`}>{item.percentage}%</span>
                        <span className={`${modernTypography.body}`} style={{ color: item.color }}>{item.amount}</span>
                      </div>
                    </div>
                    <div className="h-1.5 bg-slate-100">
                      <div 
                        className="h-full"
                        style={{ backgroundColor: item.color, width: `${item.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-slate-50/80 backdrop-blur-sm p-4 border border-slate-100 rounded-md">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="h-5 w-5" style={{ color: modernColors.commercial }} />
                  <h4 className={modernTypography.label} style={{ color: modernColors.commercial }}>Expected Runway</h4>
                </div>
                <p className={`${modernTypography.body} mb-1`}>12-18 months</p>
                <p className={`${modernTypography.small}`}>
                  Sufficient time to develop MVP, demonstrate core technology, and validate with potential customers
                </p>
              </div>
            </ModernCard>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide14;