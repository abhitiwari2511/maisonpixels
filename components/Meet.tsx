"use client";

import { motion } from "motion/react";
import { Button } from "./ui/button";

export const bookMeet = () => {
  window.open("https://calendly.com/elonnoob25/30min", "_blank");
};

const Meet = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 280, damping: 28 }}
      className="space-y-6 will-change-transform"
    >
      <Button
        onClick={bookMeet}
        className="cursor-pointer rounded-full p-4 text-[15px] font-bold"
        variant="secondary"
      >
        BOOK A CALL
      </Button>
    </motion.div>
  );
};

export default Meet;
