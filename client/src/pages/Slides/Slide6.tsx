import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'wouter';
import { motion } from 'framer-motion';
import { 
  ModernCard, 
  modernTypography, 
  modernColors,
  fadeInUpVariants,
  itemFadeInUpVariant
} from '@/components/PitchDeck/ModernSlideStyles';
import { Clock, BarChart3, TrendingUp, Layers, ChevronLeft, ChevronRight } from 'lucide-react';
import { useMediaQuery } from 'react-responsive';

const Slide6: React.FC = () => {
  const TOTAL_SLIDES = 18;
  const [, navigate] = useLocation();
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const isDesktop = useMediaQuery({ minWidth: 768 });
  const slideNumber = 6;
  
  const goToNextSlide = () => {
    if (slideNumber < TOTAL_SLIDES) {
      navigate(`/slide/${slideNumber + 1}`);
    } else {
      navigate('/');
    }
  };

  const goToPrevSlide = () => {
    if (slideNumber > 1) {
      navigate(`/slide/${slideNumber - 1}`);
    } else {
      navigate('/');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight' || e.key === ' ') {
      e.preventDefault();
      goToNextSlide();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      goToPrevSlide();
    }
  };

  // Handle auto-scaling based on container size
  useEffect(() => {
    if (!isDesktop) return;
    
    const calculateScale = () => {
      if (containerRef.current && contentRef.current) {
        const containerWidth = containerRef.current.clientWidth;
        const containerHeight = containerRef.current.clientHeight;
        
        // Account for some padding
        const availableWidth = containerWidth * 0.9;
        const availableHeight = containerHeight * 0.9;
        
        // Base dimensions (from CSS)
        const contentWidth = 1280;
        const contentHeight = 720;
        
        // Calculate scale factors
        const widthScale = availableWidth / contentWidth;
        const heightScale = availableHeight / contentHeight;
        
        // Use the smaller scale to ensure content fits
        const newScale = Math.min(widthScale, heightScale);
        
        setScale(newScale);
      }
    };

    // Initial calculation
    calculateScale();
    
    // Recalculate on window resize
    const handleResize = () => {
      calculateScale();
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isDesktop]);

  return (
    <div 
      className={isDesktop ? "slide-container-desktop" : "slide-container-mobile"}
      ref={containerRef}
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      {/* Navigation Controls */}
      <div className="fixed z-50 top-1/2 -translate-y-1/2 w-full flex justify-between px-4 md:px-8">
        <button 
          onClick={goToPrevSlide}
          className="w-10 h-10 md:w-12 md:h-12 bg-black/90 backdrop-blur-sm text-white shadow-lg flex items-center justify-center hover:bg-black transition-all duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
        </button>
        <button 
          onClick={goToNextSlide}
          className="w-10 h-10 md:w-12 md:h-12 bg-black/90 backdrop-blur-sm text-white shadow-lg flex items-center justify-center hover:bg-black transition-all duration-300"
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
        </button>
      </div>

      {/* Slide Number */}
      <div className={`fixed top-4 right-6 z-40 ${modernTypography.small}`} style={{ color: modernColors.textLight }}>
        {slideNumber} / {TOTAL_SLIDES}
      </div>

      {isDesktop ? (
        // Desktop: Auto-scaling container
        <div 
          ref={contentRef}
          className="slide-content-wrapper bg-white"
          style={{ 
            transform: `translate(-50%, -50%) scale(${scale})`,
          }}
        >
          {/* Title that maintains consistent size */}
          <h2 
            className={`slide-fixed-title ${modernTypography.slideTitle}`} 
            style={{ color: modernColors.text }}
          >
            Why Now
          </h2>
          
          {/* Content that will scale */}
          <div className="content-container px-8 pt-40 pb-16 h-full w-full">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={fadeInUpVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                variants={itemFadeInUpVariant}
                custom={0}
                className="md:col-span-2"
              >
                <ModernCard className="p-8" style={{ 
                  borderLeft: `3px solid ${modernColors.accent}`,
                  borderRight: `3px solid ${modernColors.accent}`
                }}>
                  <div className="flex items-center gap-4 mb-5">
                    <Layers className="h-7 w-7" style={{ color: modernColors.accent }} />
                    <h3 className={modernTypography.heading}>
                      Policy Convergence
                    </h3>
                  </div>
                  <p className={`${modernTypography.body} mb-4`}>
                    Two major Trump administration initiatives have created a historic window of opportunity for HandReceipt:
                  </p>
                  <ul className={`space-y-3 ${modernTypography.list}`}>
                    <li style={{ 
                      backgroundColor: `${modernColors.militaryLight}50`, 
                      padding: '0.75rem',
                      borderRadius: '0.25rem' 
                    }}>
                      • <strong style={{ color: modernColors.military }}>Defense Efficiency Mandate:</strong> DOGE initiative and 8% defense cuts ($68B/year) require DoD to modernize technology and supply chains, creating urgent demand for efficiency solutions.
                    </li>
                    <li style={{ 
                      backgroundColor: `${modernColors.cryptoLight}50`, 
                      padding: '0.75rem',
                      borderRadius: '0.25rem' 
                    }}>
                      • <strong style={{ color: modernColors.crypto }}>Crypto Regulatory Clarity:</strong> Executive Order establishing clear frameworks for cryptocurrencies and digital assets, positioning the US as the "crypto capital of the planet."
                    </li>
                  </ul>
                </ModernCard>
              </motion.div>

              <motion.div
                variants={itemFadeInUpVariant}
                custom={1}
              >
                <ModernCard className="h-full p-8" style={{ backgroundColor: 'rgba(243, 232, 255, 0.05)', borderTop: `2px solid ${modernColors.crypto}` }}>
                  <div className="flex items-center gap-4 mb-5">
                    <Clock className="h-7 w-7" style={{ color: modernColors.crypto }} />
                    <h3 className={modernTypography.heading}>
                      Convergence Timeline
                    </h3>
                  </div>
                  <ul className={`space-y-3 ${modernTypography.list}`}>
                    <li>• <span className="text-lg font-semibold" style={{ color: modernColors.crypto }}>12-18 Months</span> to capitalize on both initiatives</li>
                    <li>• HandReceipt's <span style={{ color: modernColors.military }}>defense-grade blockchain</span> + <span style={{ color: modernColors.crypto }}>Shell token</span> is the perfect solution for both mandates</li>
                  </ul>
                </ModernCard>
              </motion.div>

              <motion.div
                variants={itemFadeInUpVariant}
                custom={2}
              >
                <ModernCard className="h-full p-8" style={{ backgroundColor: 'rgba(219, 234, 254, 0.05)', borderTop: `2px solid ${modernColors.military}` }}>
                  <div className="flex items-center gap-4 mb-5">
                    <BarChart3 className="h-7 w-7" style={{ color: modernColors.military }} />
                    <h3 className={modernTypography.heading}>
                      Market Drivers
                    </h3>
                  </div>
                  <ul className={`space-y-3 ${modernTypography.list}`}>
                    <li>• <strong style={{ color: modernColors.military }}>DOGE Initiative:</strong> Trump's Department of Government Efficiency mandates modernizing federal technology - <span className="font-semibold" style={{ color: modernColors.military }}>$68B</span> Annual defense cuts targeted</li>
                    <li>• <strong style={{ color: modernColors.crypto }}>Crypto Regulation Clarity:</strong> New regulatory framework making the US the 'crypto capital of the planet' - <span className="font-semibold" style={{ color: modernColors.crypto }}>180 Days</span> to create framework</li>
                    <li>• <strong style={{ color: modernColors.commercial }}>Supply Chain Crisis:</strong> Post-pandemic inventory verification failures at all-time high - <span className="font-semibold" style={{ color: modernColors.commercial }}>$1.1T</span> Annual inventory distortion</li>
                  </ul>
                </ModernCard>
              </motion.div>

              <motion.div
                variants={itemFadeInUpVariant}
                custom={3}
                className="md:col-span-2"
              >
                <ModernCard className="p-8" style={{ 
                  background: 'linear-gradient(120deg, rgba(30, 64, 175, 0.05), rgba(126, 34, 206, 0.05), rgba(234, 88, 12, 0.05))',
                  borderTop: `2px solid ${modernColors.military}`,
                  borderBottom: `2px solid ${modernColors.commercial}`,
                }}>
                  <div className="flex items-center gap-4 mb-5">
                    <TrendingUp className="h-7 w-7" style={{ color: modernColors.accent }} />
                    <h3 className={modernTypography.heading}>
                      Solution
                    </h3>
                  </div>
                  <p className={`${modernTypography.body} font-medium mb-2`} style={{ color: modernColors.accent }}>
                    HandReceipt + Shell Token: The Perfect Solution for Both Mandates
                  </p>
                  <p className={`${modernTypography.body}`}>
                    Our <span style={{ color: modernColors.military }}>military-grade blockchain solution</span> with integrated <span style={{ color: modernColors.crypto }}>Shell token</span> directly addresses both Trump administration initiatives: <span style={{ color: modernColors.military }}>defense efficiency</span> through inventory optimization and <span style={{ color: modernColors.crypto }}>crypto advancement</span> through stablecoin payments.
                  </p>
                </ModernCard>
              </motion.div>
            </motion.div>
          </div>
        </div>
      ) : (
        // Mobile: Scrollable container
        <div className="slide-content-mobile bg-white">
          <h2 
            className={`${modernTypography.slideTitle} mb-8 mt-2`} 
            style={{ color: modernColors.text }}
          >
            Why Now
          </h2>
          
          <motion.div 
            className="grid grid-cols-1 gap-6"
            variants={fadeInUpVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={itemFadeInUpVariant}
              custom={0}
            >
              <ModernCard className="p-6" style={{ 
                borderLeft: `3px solid ${modernColors.accent}`,
                borderRight: `3px solid ${modernColors.accent}`
              }}>
                <div className="flex items-center gap-3 mb-4">
                  <Layers className="h-6 w-6" style={{ color: modernColors.accent }} />
                  <h3 className={modernTypography.heading}>
                    Policy Convergence
                  </h3>
                </div>
                <p className={`${modernTypography.body} mb-3`}>
                  Two major Trump administration initiatives have created a historic window of opportunity for HandReceipt:
                </p>
                <ul className={`space-y-3 ${modernTypography.list}`}>
                  <li style={{ 
                    backgroundColor: `${modernColors.militaryLight}50`, 
                    padding: '0.75rem',
                    borderRadius: '0.25rem' 
                  }}>
                    • <strong style={{ color: modernColors.military }}>Defense Efficiency Mandate</strong>
                  </li>
                  <li style={{ 
                    backgroundColor: `${modernColors.cryptoLight}50`, 
                    padding: '0.75rem',
                    borderRadius: '0.25rem' 
                  }}>
                    • <strong style={{ color: modernColors.crypto }}>Crypto Regulatory Clarity</strong>
                  </li>
                </ul>
              </ModernCard>
            </motion.div>

            <motion.div
              variants={itemFadeInUpVariant}
              custom={1}
            >
              <ModernCard className="p-6" style={{ backgroundColor: 'rgba(243, 232, 255, 0.05)', borderTop: `2px solid ${modernColors.crypto}` }}>
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="h-6 w-6" style={{ color: modernColors.crypto }} />
                  <h3 className={modernTypography.heading}>
                    Convergence Timeline
                  </h3>
                </div>
                <ul className={`space-y-2 ${modernTypography.list}`}>
                  <li>• <span className="text-lg font-semibold" style={{ color: modernColors.crypto }}>12-18 Months</span> window</li>
                </ul>
              </ModernCard>
            </motion.div>

            <motion.div
              variants={itemFadeInUpVariant}
              custom={2}
            >
              <ModernCard className="p-6" style={{ 
                background: 'linear-gradient(120deg, rgba(30, 64, 175, 0.05), rgba(126, 34, 206, 0.05), rgba(234, 88, 12, 0.05))',
                borderTop: `2px solid ${modernColors.military}`,
                borderBottom: `2px solid ${modernColors.commercial}`,
              }}>
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="h-6 w-6" style={{ color: modernColors.accent }} />
                  <h3 className={modernTypography.heading}>
                    Solution
                  </h3>
                </div>
                <p className={`${modernTypography.body}`}>
                  Our solution directly addresses both initiatives.
                </p>
              </ModernCard>
            </motion.div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Slide6;