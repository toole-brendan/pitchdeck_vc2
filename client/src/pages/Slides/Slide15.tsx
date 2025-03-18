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
  Check,
  Wallet,
  CreditCard as TokenIcon
} from 'lucide-react';

const Slide15: React.FC = () => {
  const TOTAL_SLIDES = 18;

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
      tokenHoldings: '$0.5M'
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
      tokenHoldings: '$1.2M'
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
      tokenHoldings: '$3.5M'
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
      tokenHoldings: '$8.0M'
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
      tokenHoldings: '$20M'
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

  // Funding allocation data
  const fundingAllocation = [
    { category: 'Product Development', percentage: 55, amount: '$412.5K', icon: Code, color: modernColors.crypto },
    { category: 'Sales & Marketing', percentage: 15, amount: '$112.5K', icon: Megaphone, color: modernColors.crypto },
    { category: 'Operations', percentage: 20, amount: '$150K', icon: Briefcase, color: modernColors.crypto },
    { category: 'Legal & Compliance', percentage: 10, amount: '$75K', icon: FileText, color: modernColors.crypto }
  ];

  return (
    <SlideLayout title="Financial Projections" slideNumber={15} totalSlides={TOTAL_SLIDES}>
      <div className="flex flex-col gap-6">
        <div className="mb-2 text-center max-w-2xl mx-auto">
          <h2 className={modernTypography.pageTitle}>
            Multi-stream revenue model with Shell token ecosystem
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
                      <DollarSign className="h-4 w-4" style={{ color: modernColors.crypto }} /> Revenue
                    </td>
                    {projections.map((item, index) => (
                      <td key={index} className="text-center py-3 px-4">
                        <span className={`${index === 0 ? 'text-black' : 'font-medium'}`} style={{ color: index === 0 ? 'black' : modernColors.crypto }}>
                          {item.revenue.total}
                        </span>
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-3 px-4 font-medium text-black flex items-center gap-2">
                      <Users className="h-4 w-4" style={{ color: modernColors.crypto }} /> Customers
                    </td>
                    {projections.map((item, index) => (
                      <td key={index} className="text-center py-3 px-4">
                        <span className={`${index === 0 ? 'text-black' : 'font-medium'}`} style={{ color: index === 0 ? 'black' : modernColors.crypto }}>
                          {item.customers}
                        </span>
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-3 px-4 font-medium text-black flex items-center gap-2">
                      <Wallet className="h-4 w-4" style={{ color: modernColors.crypto }} /> Token Holdings
                    </td>
                    {projections.map((item, index) => (
                      <td key={index} className="text-center py-3 px-4">
                        <span className={`${index === 0 ? 'text-black' : 'font-medium'}`} style={{ color: index === 0 ? 'black' : modernColors.crypto }}>
                          {item.tokenHoldings}
                        </span>
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-3 px-4 font-medium text-black flex items-center gap-2">
                      <CreditCard className="h-4 w-4" style={{ color: modernColors.crypto }} /> Expenses
                    </td>
                    {projections.map((item, index) => (
                      <td key={index} className="text-center py-3 px-4 text-black">
                        {item.expenses}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-black flex items-center gap-2">
                      <BarChart4 className="h-4 w-4" style={{ color: modernColors.crypto }} /> Net Cash Flow
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
                <PieChart className="h-7 w-7" style={{ color: modernColors.crypto }} />
                <h3 className={modernTypography.heading}>
                  Revenue Streams (Year 5)
                </h3>
              </div>
              
              <div className="space-y-3 mb-6">
                {revenueDistribution.map((stream, index) => (
                  <div key={index} className="bg-slate-50/80 backdrop-blur-sm border border-slate-100 rounded-md overflow-hidden">
                    <div className="flex justify-between items-center p-3">
                      <span className={modernTypography.label}>{stream.name}</span>
                      <span className={`${modernTypography.body}`}>{stream.percentage}%</span>
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

              <div className="bg-slate-50/80 backdrop-blur-sm p-4 border border-slate-100 rounded-md">
                <div className="flex items-center gap-2 mb-2">
                  <TokenIcon className="h-5 w-5" style={{ color: modernColors.crypto }} />
                  <h4 className={modernTypography.label} style={{ color: modernColors.crypto }}>Shell Token Strategy</h4>
                </div>
                <p className={`${modernTypography.small}`}>
                  Holding 10-15% of pre-mined Shell tokens as company reserves creates significant upside potential beyond operational revenue. 
                  As transaction volume grows, token value is projected to reach $20M by Year 5.
                </p>
              </div>
            </ModernCard>
          </div>
        </div>
        
        <div className="md:max-w-2xl mx-auto">
          <ModernCard className="p-6">
            <div className="flex items-center gap-3 mb-5">
              <DollarSign className="h-7 w-7" style={{ color: modernColors.crypto }} />
              <h3 className={modernTypography.heading}>
                Seed Investment Allocation
              </h3>
            </div>
            
            <p className={`${modernTypography.body} mb-5`}>How we'll use the $750K seed investment:</p>
            
            <div className="space-y-3 mb-5">
              {fundingAllocation.map((item, index) => (
                <div key={index} className="bg-slate-50/80 backdrop-blur-sm border border-slate-100 rounded-md overflow-hidden">
                  <div className="flex justify-between items-center p-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-md flex items-center justify-center" style={{ backgroundColor: `${item.color}20` }}>
                        <item.icon className="h-4 w-4" style={{ color: item.color }} />
                      </div>
                      <span className={modernTypography.label}>{item.category}</span>
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
            
            <div className="bg-slate-50/80 backdrop-blur-sm p-4 border border-slate-100 rounded-md flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" style={{ color: modernColors.crypto }} />
                <h4 className={modernTypography.label}>Expected Runway</h4>
              </div>
              <p className={`${modernTypography.body} font-medium`} style={{ color: modernColors.crypto }}>
                12-18 months
              </p>
            </div>
          </ModernCard>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide15;
