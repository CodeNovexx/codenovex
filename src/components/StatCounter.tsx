import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";

interface StatCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  label: string;
  icon?: React.ReactNode;
  delay?: number;
}

export const StatCounter = ({
  end,
  duration = 2,
  suffix = "",
  prefix = "",
  label,
  icon,
  delay = 0,
}: StatCounterProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const spring = useSpring(0, {
    duration: duration * 1000,
    bounce: 0,
  });

  const display = useTransform(spring, (latest) => {
    return prefix + Math.floor(latest).toLocaleString() + suffix;
  });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        spring.set(end);
      }, delay * 1000);
      
      return () => clearTimeout(timer);
    }
  }, [isInView, end, spring, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="relative group"
    >
      <div className="glass-strong rounded-2xl p-8 border border-white/10 hover:border-brand-primary/50 transition-all duration-500 hover:scale-105">
        {/* Icon */}
        {icon && (
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ 
              type: "spring", 
              stiffness: 200, 
              damping: 15,
              delay: delay + 0.2
            }}
            className="w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-brand-primary/20 to-purple-600/20 flex items-center justify-center group-hover:from-brand-primary/30 group-hover:to-purple-600/30 transition-all duration-500"
          >
            <div className="text-brand-primary group-hover:scale-110 transition-transform duration-300">
              {icon}
            </div>
          </motion.div>
        )}

        {/* Number */}
        <motion.div className="text-5xl font-bold mb-3 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
          {display}
        </motion.div>

        {/* Label */}
        <p className="text-gray-400 text-lg font-medium group-hover:text-gray-300 transition-colors duration-300">
          {label}
        </p>

        {/* Glow effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-brand-primary/0 via-brand-primary/10 to-purple-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-xl" />
      </div>
    </motion.div>
  );
};

interface StatsGridProps {
  stats: Array<{
    end: number;
    suffix?: string;
    prefix?: string;
    label: string;
    icon?: React.ReactNode;
  }>;
}

export const StatsGrid = ({ stats }: StatsGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
      {stats.map((stat, index) => (
        <StatCounter
          key={index}
          {...stat}
          delay={index * 0.1}
        />
      ))}
    </div>
  );
};
