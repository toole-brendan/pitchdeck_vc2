// ModernSlideStyles.tsx - Common styles for ultra-modern, minimalist slides
import React from 'react';

// Color scheme for ultra-modern minimalist style
export const modernColors = {
  background: 'white',
  text: '#000000', // Black text as requested
  textLight: '#000000', // Black text as requested
  accent: '#3B82F6', // blue-500, modern, vibrant but not overwhelming
  accentLight: '#EFF6FF', // blue-50, subtle background
  border: '#F1F5F9', // slate-100, almost invisible border
  success: '#10B981', // emerald-500, for positive trends
  danger: '#EF4444', // red-500, for negative trends
  neutral: '#F8FAFC', // slate-50, for subtle backgrounds
  military: '#1E40AF', // blue-800, deeper blue for military/defense
  militaryLight: '#DBEAFE', // blue-100, light blue for military backgrounds
  commercial: '#EA580C', // orange-600, vibrant orange for commercial
  commercialLight: '#FFEDD5', // orange-100, light orange for commercial backgrounds
  crypto: '#7E22CE', // purple-700, crypto-related elements
  cryptoLight: '#F3E8FF', // purple-100, light purple for crypto backgrounds
};

// Typography styles for ultra-modern minimalist look with improved mobile responsiveness
export const modernTypography = {
  // Ultra-large slide titles for dramatic impact - more responsive sizing
  title: 'text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-thin tracking-tighter leading-tight text-black',
  
  // Main slide title (larger for page headers) - more responsive sizing
  slideTitle: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight tracking-tight leading-tight text-black',
  
  // Section title for sub-sections within slides - more responsive sizing
  pageTitle: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extralight tracking-tight leading-tight text-black',
  
  // Refined subtitle with improved mobile sizing
  subtitle: 'text-base sm:text-lg md:text-xl lg:text-2xl font-extralight tracking-tight text-black',
  
  // Ultra-compact section headers - better on mobile
  sectionTitle: 'text-xs uppercase tracking-[0.15em] sm:tracking-[0.25em] text-black font-medium',
  
  // Elegant headings with better mobile sizing
  heading: 'text-xl sm:text-2xl md:text-3xl font-extralight tracking-tight leading-snug text-black',
  
  // Secondary headings for content sections - better mobile sizing
  subheading: 'text-lg sm:text-xl md:text-2xl font-extralight tracking-tight leading-snug text-black',
  
  // Improved body text readability with responsive sizing
  body: 'text-sm sm:text-base md:text-lg font-light text-black leading-relaxed',
  
  // Refined small text with better readability on mobile
  small: 'text-xs sm:text-sm font-light text-black tracking-wide',
  
  // List text styling with mobile optimization
  list: 'text-sm sm:text-base md:text-lg font-light text-black leading-relaxed',
  
  // Labels for items, years, categories, etc. - mobile friendly
  label: 'text-sm sm:text-base font-normal text-black tracking-wide leading-snug',
  
  // More impactful statistics with responsive sizing
  stats: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-thin tracking-tight text-black',
  
  // Modern badge styling - mobile optimized
  badge: 'text-xs tracking-wider uppercase py-1 px-2 sm:px-3 font-medium',
  
  // Giant text for thank you slides - better on mobile
  giant: 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-thin tracking-tighter leading-tight text-black',
  
  // Lead paragraph text with responsive sizing
  lead: 'text-lg sm:text-xl md:text-2xl font-light text-black leading-relaxed',
  
  // Quote styling with responsive text size
  quote: 'text-lg sm:text-xl md:text-2xl italic font-light text-black',
};

// Layout components with ultra-modern styling
export const ModernBadge: React.FC<{
  children: React.ReactNode;
  color?: string;
  small?: boolean;
  className?: string;
}> = ({ children, color = modernColors.accent, small = false, className = '' }) => (
  <span 
    className={`${modernTypography.badge} text-white backdrop-blur-sm ${small ? 'py-0.5 px-1 sm:px-2 text-[10px]' : ''} ${className}`}
    style={{ backgroundColor: color }}
  >
    {children}
  </span>
);

export const ModernCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}> = ({ children, className = '', style }) => (
  <div 
    className={`bg-white/90 backdrop-blur-sm border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 p-4 sm:p-6 ${className}`}
    style={style}
  >
    {children}
  </div>
);

export const ModernDivider: React.FC<{
  className?: string;
}> = ({ className = '' }) => (
  <div className={`h-[1px] w-full bg-slate-100 my-4 sm:my-6 md:my-8 ${className}`}></div>
);

export const ModernIconWrapper: React.FC<{
  children: React.ReactNode;
  size?: 'default' | 'large';
}> = ({ children, size = 'default' }) => (
  <div className={`flex items-center justify-center bg-slate-50/80 text-black backdrop-blur-sm shadow-sm
    ${size === 'large' ? 'w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16' : 'w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12'}`}>
    {children}
  </div>
);

// Animation utilities for ultra-modern feel
// Using static variants rather than function-based ones for better Fast Refresh compatibility
export const fadeInUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.5, 
      ease: "easeOut",
      staggerChildren: 0.1 
    } 
  }
};

export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      duration: 0.5, 
      ease: "easeInOut",
      staggerChildren: 0.1
    } 
  }
};

// Subtle scale effect for a more refined interaction
export const scaleUpVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { 
      duration: 0.6, 
      ease: [0.165, 0.84, 0.44, 1], // cubic-bezier for smooth, refined motion
      staggerChildren: 0.1
    } 
  }
};

// Child variants for staggered animations
export const itemFadeInUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

// Section Header component with ultra-modern, minimalist style
export const ModernSectionHeader: React.FC<{
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
}> = ({ children, dark = false, className = '' }) => {
  // Light style (preferred for most sections) - more minimalist
  const lightStyle = "bg-slate-50/70 backdrop-blur-sm text-black text-xs tracking-[0.2em] sm:tracking-[0.25em] uppercase py-1 sm:py-1.5 px-2 sm:px-3";
  
  // Dark style (for sections that need more emphasis) - more sleek
  const darkStyle = "bg-slate-900/90 backdrop-blur-sm text-white text-xs tracking-[0.2em] sm:tracking-[0.25em] uppercase py-1 sm:py-1.5 px-2 sm:px-3 shadow-sm";
  
  return (
    <div className={`${dark ? darkStyle : lightStyle} ${className} transition-all duration-300 hover:shadow-sm`}>
      {children}
    </div>
  );
};
