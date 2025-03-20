import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { modernColors, modernTypography } from './ModernSlideStyles';

export interface TableColumn {
  key: string;
  title: string;
  priority?: number; // Lower numbers = higher priority to show on mobile
  renderCell?: (value: any, row: any) => React.ReactNode;
}

export interface ResponsiveTableProps {
  data: any[];
  columns: TableColumn[];
  title?: string;
  className?: string;
  mobileCards?: boolean; // Whether to use card view on mobile
  priorityColumns?: number; // How many columns to show on mobile (by priority)
}

const ResponsiveTable: React.FC<ResponsiveTableProps> = ({
  data,
  columns,
  title,
  className = '',
  mobileCards = true,
  priorityColumns = 2
}) => {
  const isMobile = useIsMobile();
  
  // Sort columns by priority for mobile view
  const sortedColumns = [...columns].sort((a, b) => 
    (a.priority || 999) - (b.priority || 999)
  );
  
  // For mobile, only show high priority columns
  const visibleColumns = isMobile 
    ? sortedColumns.slice(0, priorityColumns)
    : columns;
    
  // Regular table view for desktop or when cards are not requested
  const renderTable = () => (
    <div className="overflow-x-auto pb-4">
      <table className="w-full border-collapse table-auto">
        <thead>
          <tr className="bg-gray-50 border-b">
            {visibleColumns.map((column) => (
              <th 
                key={column.key} 
                className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-b hover:bg-gray-50">
              {visibleColumns.map((column) => (
                <td key={column.key} className="px-3 py-2 text-xs sm:text-sm">
                  {column.renderCell 
                    ? column.renderCell(row[column.key], row)
                    : row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  
  // Card view for mobile
  const renderCards = () => (
    <div className="space-y-4 pb-4">
      {data.map((row, rowIndex) => (
        <div 
          key={rowIndex} 
          className="border rounded-lg overflow-hidden shadow-sm"
        >
          {/* Title row from first priority column if available */}
          {sortedColumns[0] && (
            <div className="px-3 py-2 bg-gray-50 border-b text-sm font-medium">
              {sortedColumns[0].renderCell 
                ? sortedColumns[0].renderCell(row[sortedColumns[0].key], row)
                : row[sortedColumns[0].key]}
            </div>
          )}
          
          {/* Content rows */}
          <div className="px-3 py-2 space-y-2">
            {/* Show remaining visible columns */}
            {visibleColumns.slice(1).map((column) => (
              <div key={column.key} className="flex justify-between text-xs">
                <span className="text-gray-500">{column.title}:</span>
                <span className="font-medium">
                  {column.renderCell 
                    ? column.renderCell(row[column.key], row)
                    : row[column.key]}
                </span>
              </div>
            ))}
            
            {/* Show "More" button/indicator if there are hidden columns */}
            {columns.length > visibleColumns.length && (
              <div className="text-center mt-2 pt-2 border-t border-dashed border-gray-200">
                <span className="text-xs text-gray-400">
                  +{columns.length - visibleColumns.length} more details
                </span>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
  
  return (
    <div className={`responsive-table w-full ${className}`}>
      {title && (
        <div className="table-title mb-3">
          <h3 className={`${modernTypography.subheading} mb-1`} style={{ color: modernColors.text }}>
            {title}
          </h3>
        </div>
      )}
      
      {isMobile && mobileCards ? renderCards() : renderTable()}
      
      {/* Indicator for horizontal scrolling on mobile table view */}
      {isMobile && !mobileCards && columns.length > 2 && (
        <div className="text-center mt-1">
          <span className="text-xs text-gray-400 flex items-center justify-center">
            <span className="inline-block animate-pulse">⟷</span>
            <span className="ml-1">Swipe to see more</span>
          </span>
        </div>
      )}
    </div>
  );
};

export default ResponsiveTable; 