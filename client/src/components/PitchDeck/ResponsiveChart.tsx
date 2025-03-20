import React from 'react';
import { useIsMobile, useOrientation } from '@/hooks/use-mobile';
import { 
  BarChart, 
  Bar, 
  LineChart, 
  Line, 
  PieChart, 
  Pie, 
  Cell,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';
import { modernColors } from './ModernSlideStyles';

export interface ChartData {
  name: string;
  value: number;
  color?: string;
  [key: string]: any;
}

export interface ResponsiveChartProps {
  data: ChartData[];
  type: 'bar' | 'line' | 'pie';
  keys?: string[];
  title?: string;
  subtitle?: string;
  height?: number;
  simplified?: boolean;
  className?: string;
}

/**
 * A responsive chart component that adapts to mobile devices
 * Simplifies data visualization on small screens while providing
 * full detailed charts on larger displays
 */
const ResponsiveChart: React.FC<ResponsiveChartProps> = ({
  data,
  type,
  keys = ['value'],
  title,
  subtitle,
  height = 300,
  simplified = false,
  className = ''
}) => {
  const isMobile = useIsMobile();
  const { isPortrait } = useOrientation();
  
  // Adjust for extreme small screens or landscape mode on mobile
  const mobileHeight = isPortrait ? height * 0.8 : height * 0.6;
  const chartHeight = isMobile ? mobileHeight : height;
  
  // Colors for chart elements with fallbacks to our design system
  const getColor = (index: number, key?: string) => {
    if (data[index]?.color) return data[index].color;
    
    const colorKeys = [
      modernColors.accent,
      modernColors.military,
      modernColors.commercial,
      modernColors.crypto,
      modernColors.success,
      modernColors.danger
    ];
    
    return colorKeys[index % colorKeys.length];
  };

  // For mobile, we may want to reduce the data points
  const optimizedData = simplified && isMobile 
    ? data.filter((_, i) => i % 2 === 0) // Show every other data point on mobile
    : data;

  // Dynamic component rendering based on chart type
  const renderChart = () => {
    switch (type) {
      case 'bar':
        return (
          <ResponsiveContainer width="100%" height={chartHeight}>
            <BarChart
              data={optimizedData}
              margin={{ top: 20, right: 30, left: 20, bottom: 40 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis 
                dataKey="name" 
                tick={{ fontSize: isMobile ? 10 : 12 }} 
                angle={isMobile ? -45 : 0}
                textAnchor={isMobile ? 'end' : 'middle'}
                height={isMobile ? 60 : 40}
              />
              <YAxis tick={{ fontSize: isMobile ? 10 : 12 }} />
              <Tooltip 
                contentStyle={{ fontSize: isMobile ? 10 : 12 }} 
                itemStyle={{ padding: isMobile ? '1px 0' : '3px 0' }}
              />
              {!isMobile && <Legend wrapperStyle={{ fontSize: 12 }} />}
              
              {keys.map((key, index) => (
                <Bar 
                  key={key} 
                  dataKey={key} 
                  fill={getColor(index, key)} 
                  radius={[2, 2, 0, 0]}
                />
              ))}
            </BarChart>
          </ResponsiveContainer>
        );
        
      case 'line':
        return (
          <ResponsiveContainer width="100%" height={chartHeight}>
            <LineChart
              data={optimizedData}
              margin={{ top: 20, right: 30, left: 20, bottom: 40 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis 
                dataKey="name" 
                tick={{ fontSize: isMobile ? 10 : 12 }} 
                angle={isMobile ? -45 : 0}
                textAnchor={isMobile ? 'end' : 'middle'}
                height={isMobile ? 60 : 40}
              />
              <YAxis tick={{ fontSize: isMobile ? 10 : 12 }} />
              <Tooltip 
                contentStyle={{ fontSize: isMobile ? 10 : 12 }} 
              />
              {!isMobile && <Legend wrapperStyle={{ fontSize: 12 }} />}
              
              {keys.map((key, index) => (
                <Line
                  key={key}
                  type="monotone"
                  dataKey={key}
                  stroke={getColor(index, key)}
                  strokeWidth={2}
                  dot={{ r: isMobile ? 2 : 4 }}
                  activeDot={{ r: isMobile ? 5 : 8 }}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        );
        
      case 'pie':
        return (
          <ResponsiveContainer width="100%" height={chartHeight}>
            <PieChart>
              <Pie
                data={optimizedData}
                cx="50%"
                cy="50%"
                labelLine={!isMobile}
                label={!isMobile && ((entry) => entry.name)}
                outerRadius={isMobile ? chartHeight / 3 : chartHeight / 2.5}
                dataKey="value"
              >
                {optimizedData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={getColor(index)} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ fontSize: isMobile ? 10 : 12 }} />
              {!isMobile && <Legend wrapperStyle={{ fontSize: 12 }} />}
            </PieChart>
          </ResponsiveContainer>
        );
        
      default:
        return <div>Chart type not supported</div>;
    }
  };

  return (
    <div className={`responsive-chart w-full ${className}`}>
      {title && (
        <div className="chart-header mb-2 text-center">
          <h4 className="text-sm sm:text-base font-medium text-gray-800">{title}</h4>
          {subtitle && <p className="text-xs text-gray-500">{subtitle}</p>}
        </div>
      )}
      
      {renderChart()}
      
      {/* Mobile-only legend if we're not showing it in the chart */}
      {isMobile && type !== 'pie' && (
        <div className="mobile-legend mt-2 flex flex-wrap justify-center gap-2">
          {keys.map((key, index) => (
            <div key={key} className="legend-item flex items-center">
              <div 
                className="w-2 h-2 mr-1 rounded-full" 
                style={{ backgroundColor: getColor(index, key) }}
              ></div>
              <span className="text-xs">{key}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ResponsiveChart; 