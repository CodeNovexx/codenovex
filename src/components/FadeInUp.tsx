import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface FadeInUpProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  distance?: number;
}

const FadeInUp = ({
  children,
  delay = 0,
  duration = 0.6,
  distance = 50,
}: FadeInUpProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true, // Animation triggers only once
    margin: "0px 0px -100px 0px", // Trigger slightly before element is fully visible
  });

  const variants = {
    hidden: {
      opacity: 0,
      y: distance,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.25, 0.4, 0.25, 1], // Custom ease for smooth animation
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInUp;
