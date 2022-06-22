import React, { FC } from "react";
import { motion } from "framer-motion";

const Portrait: FC = () => {
  return (
    <motion.img
      alt="portrait"
      className="rounded-full max-w-300 max-w-xs w-2/3 mb-4"
      data-test-id="avatar"
      height="250"
      src="assets/me.jpg"
      whileHover={{ scale: 1.1, y: -20 }}
      width="250"
    />
  );
};

export default Portrait;
