import { motion } from "motion/react";

export default function SlideLeftIn({
  children,
  delay = 1, // wait 1s before sliding away
  duration = 1, // how fast it slides out
  x = -120, // how far it goes (percentage of width)
  returnDelay = 1, // come back after 1 min
}) {
  const container = {
    hidden: { x: `${x}%`, opacity: 0 }, // moved right, invisible
    visible: {
      x: "0%",
      opacity: 1,
      transition: { duration, ease: "easeOut" },
    },
  };

  return (
    <div className="overflow-hidden relative w-full h-full ">
      <motion.div
        className="h-full w-full"
        initial="visible"
        animate="hidden"
        variants={container}
        transition={{
          delay, // after 1s, go "behind wall"
          duration, // slide speed
          ease: "easeInOut",
          repeat: Infinity, // keeps looping
          repeatType: "reverse", // go out → come back
          repeatDelay: returnDelay, // wait 1 minute before returning
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
