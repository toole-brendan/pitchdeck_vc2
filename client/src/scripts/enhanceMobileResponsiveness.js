/**
 * MOBILE RESPONSIVENESS ENHANCEMENT GUIDE
 * 
 * Apply the following patterns to each slide to improve mobile responsiveness:
 * 
 * 1. IMPORTS SECTION:
 *    - Add these imports to each slide:
 *      ```
 *      import { useIsMobile } from '@/hooks/use-mobile';
 *      import { motion } from 'framer-motion';
 *      ```
 *    - Add these to ModernSlideStyles imports:
 *      ```
 *      fadeInUpVariants,
 *      itemFadeInUpVariant
 *      ```
 * 
 * 2. COMPONENT SETUP:
 *    - Add isMobile detection:
 *      ```
 *      const isMobile = useIsMobile();
 *      ```
 * 
 * 3. CONTAINER STRUCTURE:
 *    - Replace top-level containers with motion.div:
 *      ```
 *      <motion.div 
 *        className="flex flex-col items-center justify-center"
 *        style={{ 
 *          minHeight: isMobile ? 'calc(100vh - 220px)' : 'calc(100vh - 220px)', 
 *          paddingBottom: isMobile ? '60px' : '0'
 *        }}
 *        variants={fadeInUpVariants}
 *        initial="hidden"
 *        animate="visible"
 *      >
 *      ```
 * 
 * 4. GRID ADJUSTMENTS:
 *    - Replace static grid declarations with responsive ones:
 *      ```
 *      <div className={`grid grid-cols-1 ${isMobile ? 'gap-3' : 'md:grid-cols-2 gap-5'}`}>
 *      ```
 * 
 * 5. CARD SPACING & WIDTH:
 *    - Add mobile-specific constraints for cards:
 *      ```
 *      <ModernCard className={`p-4 md:p-5 ${isMobile ? 'max-w-[95%] mx-auto' : ''}`}>
 *      ```
 * 
 * 6. TEXT SIZE ADJUSTMENTS:
 *    - Make headings responsive:
 *      ```
 *      <h3 className={`${isMobile ? 'text-base' : 'text-lg'} font-medium`}>
 *      ```
 * 
 * 7. ANIMATION ENHANCEMENTS:
 *    - Wrap key sections in motion.div with staggered animations:
 *      ```
 *      <motion.div variants={itemFadeInUpVariant} custom={0}>
 *        // Content here
 *      </motion.div>
 *      ```
 * 
 * 8. PADDING ADJUSTMENTS:
 *    - Use responsive padding:
 *      ```
 *      className="p-3 md:p-4"
 *      ```
 *    - Use responsive margins:
 *      ```
 *      className="mb-2 md:mb-3"
 *      ```
 * 
 * 9. LAYOUT CHANGES:
 *    - Consider changing layout completely for mobile if needed, like in Slide15
 *      ```
 *      {isMobile ? (
 *        // Mobile-specific layout
 *      ) : (
 *        // Desktop layout
 *      )}
 *      ```
 * 
 * This creates a more consistent mobile experience across all slides with
 * better spacing, animations, and layout adjustments for small screens.
 */ 