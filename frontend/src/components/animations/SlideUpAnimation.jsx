import { motion } from "motion/react";
export default function SlideUpAnimation({
  children,
  delay = 0,
  duration = 0.5,
  y = 90,
  yf = -10,
}) {
  const textContainer = {
    hidden: { y: `${y}%` },
    visible: {
      y: `${yf}%`,
      transition: {
        duration,
        ease: "easeOut",
        delay, // Delay is used here
      },
    },
  };

  return (
    <div className="overflow-hidden ">
      <motion.div
        className="h-full"
        initial="hidden"
        animate="visible"
        variants={textContainer}
      >
        {children}
      </motion.div>
    </div>
  );
}
