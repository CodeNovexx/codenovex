import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
  type?: "word" | "character";
}

export const TextReveal = ({ 
  children, 
  className = "", 
  delay = 0,
  type = "word"
}: TextRevealProps) => {
  const words = children.split(" ");
  const characters = children.split("");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: type === "word" ? 0.12 : 0.03,
        delayChildren: delay,
      },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  if (type === "word") {
    return (
      <motion.div
        style={{ overflow: "hidden" }}
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className={className}
      >
        {words.map((word, index) => (
          <motion.span
            variants={child}
            key={index}
            style={{ display: "inline-block", marginRight: "0.25em" }}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    );
  }

  return (
    <motion.div
      style={{ overflow: "hidden", display: "inline-block" }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {characters.map((char, index) => (
        <motion.span
          variants={child}
          key={index}
          style={{ display: "inline-block" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
};

// Typing effect variant - like a typewriter
interface TypingTextProps {
  children: string;
  className?: string;
  delay?: number;
  speed?: number;
}

export const TypingText = ({ 
  children, 
  className = "", 
  delay = 0,
  speed = 0.05
}: TypingTextProps) => {
  const characters = children.split("");

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {characters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: delay + index * speed,
            duration: 0.1,
          }}
          style={{ display: "inline-block" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
};

// Gradient text reveal - for hero headings
interface GradientRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const GradientReveal = ({ 
  children, 
  className = "",
  delay = 0 
}: GradientRevealProps) => {
  return (
    <motion.div
      initial={{ 
        opacity: 0,
        backgroundPosition: "200% center",
      }}
      whileInView={{ 
        opacity: 1,
        backgroundPosition: "0% center",
      }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 1.5,
        delay,
        ease: "easeOut",
      }}
      style={{ display: "inline-block", width: "100%" }}
      className={`bg-gradient-to-r from-white via-brand-primary to-purple-600 bg-clip-text text-transparent bg-[length:200%_auto] ${className}`}
    >
      {children}
    </motion.div>
  );
};
