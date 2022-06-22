import React, { FC } from "react";
import { motion } from "framer-motion";

const Socials: FC = () => {
  return (
    <div className="flex mt-4">
      <motion.a
        data-test-id="linkedin"
        href="https://www.linkedin.com/in/jean-philippe-roy-64918658"
        rel="noopener noreferrer"
        target="_blank"
        whileHover={{ scale: 1.1 }}
      >
        <span
          role="img"
          aria-label="LinkedIn"
          className="social-shapes text-4xl mx-1"
        >
          k
        </span>
      </motion.a>

      <motion.a
        data-test-id="github"
        href="https://github.com/Oreoz"
        rel="noopener noreferrer"
        target="_blank"
        whileHover={{ scale: 1.1 }}
      >
        <span
          role="img"
          aria-label="GitHub"
          className="social-shapes text-4xl mx-1"
        >
          Y
        </span>
      </motion.a>
    </div>
  );
};

export default Socials;
