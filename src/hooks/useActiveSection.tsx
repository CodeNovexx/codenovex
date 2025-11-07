import { useState, useEffect } from "react";

export const useActiveSection = (sectionIds: string[]) => {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      // Use middle of viewport as trigger point to eliminate dead zones
      const scrollPosition = window.scrollY + window.innerHeight * 0.4; // 40% from top
      
      // Find which section we're currently in
      let currentSection = "";
      let closestDistance = Infinity;
      
      // Check all sections and find the closest one to our trigger point
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          const sectionTop = offsetTop;
          const sectionBottom = offsetTop + offsetHeight;
          const sectionMiddle = sectionTop + offsetHeight / 2;
          
          // Check if scroll position is within this section
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            currentSection = id;
            break;
          }
          
          // Also track closest section to handle gaps
          const distance = Math.abs(sectionMiddle - scrollPosition);
          if (distance < closestDistance) {
            closestDistance = distance;
            // Only set as fallback if we're reasonably close
            if (distance < window.innerHeight) {
              if (!currentSection) {
                currentSection = id;
              }
            }
          }
        }
      }
      
      setActiveSection(currentSection);
    };

    // Initial check
    handleScroll();
    
    // Listen to scroll events with throttling for performance
    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", scrollListener, { passive: true });
    
    // Also listen to resize events (sections might move)
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", scrollListener);
      window.removeEventListener("resize", handleScroll);
    };
  }, [sectionIds]);

  return activeSection;
};
