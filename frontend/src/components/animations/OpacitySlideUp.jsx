import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
const AnimatedText = ({ children, delay = 0 }) => {
  const text = children?.toString() || "";
  const splittedText = text.split("");
  const pullupVariant = {
    initial: { y: 40, x: 40, opacity: 0, filter: "blur(5px)" },
    animate: (i) => ({
      y: 0,
      x: [40, 0, 0],
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: delay + i * 0.05,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="flex flex-wrap">
      {splittedText.map((current, i) => (
        <motion.span
          key={i}
          ref={ref}
          variants={pullupVariant}
          initial="initial"
          animate={isInView ? "animate" : ""}
          custom={i}
          className=""
        >
          {current === " " ? <span>&nbsp;</span> : current}
        </motion.span>
      ))}
    </div>
  );
};

export default AnimatedText;
