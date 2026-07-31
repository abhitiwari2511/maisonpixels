"use client";

import React from "react";
import * as motion from "motion/react-client";

export const bookMeet = () => {
  if (typeof window !== "undefined") {
    window.open("https://calendly.com/elonnoob25/30min", "_blank");
  }
};

const Meet = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="inline-block"
    >
      <button
        onClick={bookMeet}
        className="cursor-pointer rounded-full bg-[#ef4d23] hover:bg-[#d63d15] text-white px-5 py-2 text-xs font-semibold tracking-wide transition-colors shadow-2xs"
      >
        BOOK A CALL
      </button>
    </motion.div>
  );
};

export default Meet;
