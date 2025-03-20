// LightDefenseStyles.tsx - Palantir/Anduril-inspired styling with light background

import React from 'react';

// Color scheme inspired by defense tech companies like Palantir and Anduril
// Light mode version with precision and clarity focus
export const lightDefenseColors = {
  background: '#FFFFFF', // Pure white background
  backgroundAlt: '#F5F7FA', // Very light blue-gray for sections
  text: '#131722', // Near-black text for high contrast
  textSecondary: '#505A6E', // Dark blue-gray for secondary text
  accent: '#0046FF', // Bold blue accent (similar to Palantir's accent)
  accentAlt: '#0085FF', // Secondary blue accent for variety
  military: '#0A2D57', // Deep blue for military references (darker for contrast on light)
  commercial: '#D03B00', // Dark orange for commercial applications
  crypto: '#5400C3', // Deep purple for crypto/blockchain elements
  border: '#E2E8F0', // Light gray borders for subtle separation
  success: '#00A651', // Green for positive metrics
  danger: '#E50040', // Red for negative metrics
  neutral: '#EDF2F7', // Light gray for neutral backgrounds
  card: '#FFFFFF', // Card background
  cardBorder: '#E2E8F0', // Card border
};

// Typography with precise weights and sizing
export const lightDefenseTypography = {
  // Ultra-large slide titles with precision and clarity
  title: 'text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extralight tracking-tighter leading-tight text-gray-900',
  
  // Main slide title - clean and precise
  slideTitle: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-tight text-gray-900',
  
  // Section title with strong structure
  pageTitle: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-tight leading-tight text-gray-900',
  
  // Clean, precise subtitle style
  subtitle: 'text-base sm:text-lg md:text-xl lg:text-2xl font-light tracking-tight text-gray-700',
  
  // Ultra-compact uppercase section headers - inspired by Palantir's minimal headers
  sectionTitle: 'text-xs uppercase tracking-widest font-medium text-gray-600',
  
  // Clean, structured headings
  heading: 'text-xl sm:text-2xl md:text-3xl font-light tracking-tight leading-snug text-gray-900',
  
  // Secondary headings for content sections
  subheading: 'text-lg sm:text-xl md:text-2xl font-light tracking-tight leading-snug text-gray-900',
  
  // Body text with better readability
  body: 'text-sm sm:text-base md:text-lg font-light text-gray-700 leading-relaxed',
  
  // Small text styling
  small: 'text-xs sm:text-sm font-light text-gray-600 tracking-wide',
  
  // List text styling with good readability
  list: 'text-sm sm:text-base md:text-lg font-light text-gray-700 leading-relaxed',
  
  // Labels for items - clean and readable
  label: 'text-sm sm:text-base font-normal text-gray-700 tracking-wide leading-snug',
  
  // Clean, dramatic statistics 
  stats: 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight tracking-tight text-gray-900',
  
  // Badge styling - minimalist
  badge: 'text-xs tracking-wider uppercase py-1 px-2 sm:px-3 font-medium',
  
  // Giant text for dramatic emphasis
  giant: 'text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-thin tracking-tighter leading-tight text-gray-900',
  
  // Lead paragraph styling
  lead: 'text-lg sm:text-xl md:text-2xl font-light text-gray-700 leading-relaxed',
  
  // Quote styling
  quote: 'text-lg sm:text-xl md:text-2xl italic font-light text-gray-600',
};

// Card component with clean, minimal styling
export const LightDefenseCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  variant?: 'solid' | 'outlined' | 'subtle';
}> = ({ children, className = '', style, variant = 'solid' }) => {
  let cardStyle = {};
  
  if (variant === 'subtle') {
    cardStyle = {
      background: lightDefenseColors.backgroundAlt,
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
      ...style
    };
  } else if (variant === 'outlined') {
    cardStyle = {
      background: lightDefenseColors.background,
      border: `1px solid ${lightDefenseColors.border}`,
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
      ...style
    };
  } else {
    cardStyle = {
      background: lightDefenseColors.background,
      border: `1px solid ${lightDefenseColors.border}`,
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.1)',
      ...style
    };
  }
  
  return (
    <div 
      className={`transition-all duration-300 p-4 sm:p-6 rounded-sm ${className}`}
      style={cardStyle}
    >
      {children}
    </div>
  );
};

// Badge with clean, minimal styling
export const LightDefenseBadge: React.FC<{
  children: React.ReactNode;
  color?: string;
  small?: boolean;
  className?: string;
}> = ({ children, color = lightDefenseColors.accent, small = false, className = '' }) => (
  <span 
    className={`${lightDefenseTypography.badge} inline-block text-white ${small ? 'py-0.5 px-1.5 sm:px-2 text-[10px]' : ''} ${className}`}
    style={{ backgroundColor: color }}
  >
    {children}
  </span>
);

// Clean, minimal divider
export const LightDefenseDivider: React.FC<{
  className?: string;
  color?: string;
}> = ({ className = '', color = lightDefenseColors.border }) => (
  <div 
    className={`h-px w-full my-4 sm:my-6 md:my-8 ${className}`}
    style={{ backgroundColor: color }}
  ></div>
);

// Animation variants with precise, controlled animations
export const lightFadeInUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: [0.165, 0.84, 0.44, 1], // Cubic bezier for precise motion
      staggerChildren: 0.1 
    } 
  }
};

export const lightFadeInVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      duration: 0.6, 
      ease: [0.165, 0.84, 0.44, 1],
      staggerChildren: 0.1
    } 
  }
};

// Precise scale effect
export const lightScaleUpVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { 
      duration: 0.6, 
      ease: [0.165, 0.84, 0.44, 1],
      staggerChildren: 0.1
    } 
  }
};

// Child variants with precise animations
export const lightItemFadeInUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.165, 0.84, 0.44, 1]
    }
  })
};

// Section Header with clean, minimal styling
export const LightDefenseSectionHeader: React.FC<{
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
}> = ({ children, dark = false, className = '' }) => {
  // Light style (clean, minimal)
  const lightStyle = "bg-gray-100 text-gray-600 text-xs tracking-widest uppercase py-1 sm:py-1.5 px-2 sm:px-3";
  
  // Dark style (for contrast)
  const darkStyle = "bg-gray-800 text-white text-xs tracking-widest uppercase py-1 sm:py-1.5 px-2 sm:px-3";
  
  return (
    <div className={`${dark ? darkStyle : lightStyle} ${className} transition-all duration-300`}>
      {children}
    </div>
  );
};

// Timeline component for roadmaps
export const LightDefenseTimelineItem: React.FC<{
  time: string;
  title: string;
  description?: string;
  className?: string;
  color?: string;
}> = ({ time, title, description, className = '', color = lightDefenseColors.accent }) => {
  return (
    <div className={`flex items-start gap-3 ${className}`}>
      <div 
        className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
        style={{ backgroundColor: color }}
      ></div>
      <div className="flex-1">
        <div className="text-xs uppercase tracking-wider text-gray-500 mb-1">
          {time}
        </div>
        <div className="text-base font-medium text-gray-900 mb-1">
          {title}
        </div>
        {description && (
          <div className="text-sm text-gray-600">
            {description}
          </div>
        )}
      </div>
    </div>
  );
};

// Data visuals component for statistics
export const LightDefenseStat: React.FC<{
  value: string | number;
  label: string;
  className?: string;
  color?: string;
}> = ({ value, label, className = '', color = lightDefenseColors.text }) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <div className="text-4xl font-extralight mb-1" style={{ color }}>
        {value}
      </div>
      <div className="text-sm font-light text-gray-600">
        {label}
      </div>
    </div>
  );
};

// Grid layout for slide content
export const LightDefenseGrid: React.FC<{
  children: React.ReactNode;
  className?: string;
  cols?: number;
  gap?: number;
}> = ({ children, className = '', cols = 2, gap = 4 }) => {
  const getColsClass = () => {
    switch(cols) {
      case 1: return 'grid-cols-1';
      case 2: return 'grid-cols-1 md:grid-cols-2';
      case 3: return 'grid-cols-1 md:grid-cols-3';
      case 4: return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-4';
      default: return 'grid-cols-1 md:grid-cols-2';
    }
  };
  
  const getGapClass = () => {
    switch(gap) {
      case 2: return 'gap-2';
      case 3: return 'gap-3';
      case 4: return 'gap-4';
      case 5: return 'gap-5';
      case 6: return 'gap-6';
      default: return 'gap-4';
    }
  };
  
  return (
    <div className={`grid ${getColsClass()} ${getGapClass()} ${className}`}>
      {children}
    </div>
  );
}; 