// ModernSlideStyles.tsx - Common styles for ultra-modern, minimalist slides
import React from 'react';

// Color scheme for ultra-modern minimalist style
export const modernColors = {
  background: 'white',
  text: '#111827', // near black
  textLight: '#6B7280', // subtle gray
  accent: '#6366F1', // indigo that can be used as a highlight
  accentLight: '#EEF2FF', // very light version of accent
  border: '#F3F4F6', // subtle light gray
  success: '#10B981', // emerald for positive trends
  danger: '#EF4444', // red for negative trends
};

// Typography styles for modern minimalist look
export const modernTypography = {
  // Slide-level typography - Updated styles
  title: 'text-5xl font-light text-gray-900',  // Main slide title
  titleDark: 'text-5xl font-light text-white', // Main slide title (dark mode)
  subtitle: 'text-xl font-light text-gray-500', // Slide subtitle
  subtitleDark: 'text-xl font-light text-gray-300', // Slide subtitle (dark mode)
  
  // Hero slide typography 
  heroTitle: 'text-5xl md:text-7xl font-extralight tracking-tight mb-6 text-gray-900', // Hero slide title
  heroSubtitle: 'text-lg md:text-xl font-light tracking-normal text-gray-500 max-w-2xl mx-auto mb-6', // Hero slide subtitle
  heroTitleDark: 'text-5xl md:text-7xl font-extralight tracking-tight mb-6 text-white', // Hero slide title (dark)
  heroSubtitleDark: 'text-lg md:text-xl font-light tracking-normal text-gray-300 max-w-2xl mx-auto mb-6', // Hero slide subtitle (dark)
  
  // Section layout typography
  sectionLayoutTitle: 'text-4xl md:text-6xl font-bold mb-8 text-gray-900', // Section layout title
  sectionLayoutBody: 'text-xl md:text-2xl', // Section layout body text
  
  // Component-level typography
  sectionTitle: 'text-xs uppercase tracking-widest text-gray-400 font-medium',
  heading: 'text-xl font-light tracking-tight',
  body: 'text-sm md:text-base font-light text-gray-600',
  small: 'text-xs font-light text-gray-500',
  stats: 'text-3xl font-light',
  badge: 'text-xs tracking-wider uppercase py-1 px-3',
  
  // Card and Feature typography
  featureCardTitle: 'text-xl font-semibold mb-3', // Card titles
  featureCardDescription: 'text-gray-600', // Card content
  
  // Timeline typography
  timelineItemTitle: 'text-xl font-semibold', // Timeline item titles
  timelineDate: 'text-sm text-gray-500', // Timeline dates
  
  // Stats typography
  statLabel: 'text-xl text-gray-500', // Stat labels
  
  // List and section styling
  sectionLabel: 'text-xs font-medium tracking-widest text-gray-400 uppercase',
  listItemText: 'text-gray-600',
  listItemMarker: 'text-gray-300 text-sm',
};

// Layout components with modern styling
export const ModernBadge: React.FC<{
  children: React.ReactNode;
  color?: string;
}> = ({ children, color = modernColors.accent }) => (
  <span 
    className={`${modernTypography.badge} text-white rounded-full`}
    style={{ backgroundColor: color }}
  >
    {children}
  </span>
);

export const ModernCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
}> = ({ children, className = '', title, description }) => (
  <div className={`bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 p-6 ${className}`}>
    {title && <h3 className={modernTypography.featureCardTitle}>{title}</h3>}
    {description && <p className={modernTypography.featureCardDescription}>{description}</p>}
    {children}
  </div>
);

export const ModernDivider: React.FC<{
  className?: string;
}> = ({ className = '' }) => (
  <div className={`h-px w-full bg-gray-100 my-6 ${className}`}></div>
);

export const ModernIconWrapper: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => (
  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 text-gray-400">
    {children}
  </div>
);

// Animation utilities
export const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: "easeOut"
    }
  })
};

export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: (i: number = 0) => ({
    opacity: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.4
    }
  })
};

// Section Header component with the preferred style
export const ModernSectionHeader: React.FC<{
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
}> = ({ children, dark = false, className = '' }) => {
  // Light style (preferred for most sections)
  const lightStyle = "bg-gray-50 text-gray-600 text-xs tracking-[0.2em] uppercase py-1 px-2 border border-gray-200 inline-block";
  
  // Dark style (for sections that need more emphasis)
  const darkStyle = "bg-gray-800 text-white text-xs tracking-[0.2em] uppercase py-1 px-3 inline-block shadow-sm";
  
  return (
    <div className={`${dark ? darkStyle : lightStyle} ${className}`}>
      {children}
    </div>
  );
};

// Section Label component for consistent section labeling
export const ModernSectionLabel: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => {
  return (
    <div className={`${modernTypography.sectionLabel} ${className}`}>
      {children}
    </div>
  );
};

// List Item component with proper styling
export const ModernListItem: React.FC<{
  children: React.ReactNode;
  marker?: React.ReactNode;
  className?: string;
}> = ({ children, marker = '•', className = '' }) => {
  return (
    <div className={`flex items-start mb-2 ${className}`}>
      {typeof marker === 'string' 
        ? <span className={modernTypography.listItemMarker}>{marker}</span>
        : marker
      }
      <span className={`${modernTypography.listItemText} ml-2`}>{children}</span>
    </div>
  );
};

// Timeline Item component with proper styling
export const ModernTimelineItem: React.FC<{
  title: string;
  date: string;
  children: React.ReactNode;
  className?: string;
}> = ({ title, date, children, className = '' }) => {
  return (
    <div className={`mb-6 ${className}`}>
      <h3 className={modernTypography.timelineItemTitle}>{title}</h3>
      <div className={modernTypography.timelineDate}>{date}</div>
      <div className="mt-2">{children}</div>
    </div>
  );
};

// Stat Item component with proper styling
export const ModernStatItem: React.FC<{
  value: string | number;
  label: string;
  className?: string;
}> = ({ value, label, className = '' }) => {
  return (
    <div className={`text-center ${className}`}>
      <div className="text-3xl font-semibold">{value}</div>
      <div className={modernTypography.statLabel}>{label}</div>
    </div>
  );
};

// Section Title component with proper styling
export const ModernSectionLayoutTitle: React.FC<{
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}> = ({ children, className = '', dark = false }) => {
  return (
    <h2 className={`${dark ? modernTypography.titleDark : modernTypography.title} ${className}`}>
      {children}
    </h2>
  );
};

// Section Body Text component with proper styling
export const ModernSectionLayoutBody: React.FC<{
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}> = ({ children, className = '', dark = false }) => {
  return (
    <div className={`${modernTypography.sectionLayoutBody} ${dark ? 'text-gray-300' : 'text-gray-600'} ${className}`}>
      {children}
    </div>
  );
};
