import { motion } from "framer-motion";

const AnimationPages = ({ children }) => {
  const pageVariants = {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
    out: {
      opacity: 0,
    },
  };

  const pageTransition = {
    type: "spring",
    ease: "anticipate",
    duration: 1,
    delay: 0.5,
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit={{ opacity: 0 }}
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
};

export default AnimationPages;
