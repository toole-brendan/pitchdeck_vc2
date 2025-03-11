// ModernSlideStyles.tsx - Common styles for ultra-modern, minimalist slides
import React from 'react';

// Color scheme for ultra-modern minimalist style
export const modernColors = {
  background: 'white',
  text: '#0F172A', // slate-900, deeper and more refined than before
  textLight: '#64748B', // slate-500, sophisticated gray
  accent: '#3B82F6', // blue-500, modern, vibrant but not overwhelming
  accentLight: '#EFF6FF', // blue-50, subtle background
  border: '#F1F5F9', // slate-100, almost invisible border
  success: '#10B981', // emerald-500, for positive trends
  danger: '#EF4444', // red-500, for negative trends
  neutral: '#F8FAFC', // slate-50, for subtle backgrounds
};

// Typography styles for ultra-modern minimalist look
export const modernTypography = {
  // More dramatic size contrast between mobile and desktop
  title: 'text-4xl sm:text-5xl md:text-7xl font-thin tracking-tighter leading-tight',
  
  // Refined subtitle with better readability
  subtitle: 'text-base sm:text-lg md:text-xl font-extralight tracking-tight text-slate-500',
  
  // Ultra-compact section headers
  sectionTitle: 'text-[0.7rem] uppercase tracking-[0.25em] text-slate-400 font-medium',
  
  // Elegant headings with better spacing
  heading: 'text-xl md:text-2xl font-extralight tracking-tight leading-snug',
  
  // Improved body text readability
  body: 'text-sm md:text-base font-light text-slate-600 leading-relaxed',
  
  // Refined small text
  small: 'text-xs font-light text-slate-400 tracking-wide',
  
  // More impactful statistics
  stats: 'text-4xl md:text-5xl font-thin tracking-tight',
  
  // Modern badge styling
  badge: 'text-xs tracking-wider uppercase py-1 px-3 font-medium',
};

// Layout components with ultra-modern styling
export const ModernBadge: React.FC<{
  children: React.ReactNode;
  color?: string;
}> = ({ children, color = modernColors.accent }) => (
  <span 
    className={`${modernTypography.badge} text-white rounded-full backdrop-blur-sm`}
    style={{ backgroundColor: color }}
  >
    {children}
  </span>
);

export const ModernCard: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => (
  <div className={`bg-white/90 backdrop-blur-sm border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 p-6 rounded-sm ${className}`}>
    {children}
  </div>
);

export const ModernDivider: React.FC<{
  className?: string;
}> = ({ className = '' }) => (
  <div className={`h-[1px] w-full bg-slate-100 my-8 ${className}`}></div>
);

export const ModernIconWrapper: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => (
  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-50/80 text-slate-500 backdrop-blur-sm shadow-sm">
    {children}
  </div>
);

// Animation utilities for ultra-modern feel
export const fadeInUpVariants = {
  hidden: { opacity: 0, y: 30 },
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

export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: (i: number = 0) => ({
    opacity: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeInOut"
    }
  })
};

// Subtle scale effect for a more refined interaction
export const scaleUpVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (i: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.165, 0.84, 0.44, 1] // cubic-bezier for smooth, refined motion
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
  const lightStyle = "bg-slate-50/70 backdrop-blur-sm text-slate-500 text-xs tracking-[0.25em] uppercase py-1.5 px-3 rounded-sm";
  
  // Dark style (for sections that need more emphasis) - more sleek
  const darkStyle = "bg-slate-900/90 backdrop-blur-sm text-white text-xs tracking-[0.25em] uppercase py-1.5 px-3 rounded-sm shadow-sm";
  
  return (
    <div className={`${dark ? darkStyle : lightStyle} ${className} transition-all duration-300 hover:shadow-sm`}>
      {children}
    </div>
  );
};
