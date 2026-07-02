import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/images/logo.png";

const Preloader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] bg-black flex items-center justify-center pointer-events-auto"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{
          opacity: 1,
          scale: 1,
          filter: [
            "drop-shadow(0 0 10px rgba(234,34,45,0.25))",
            "drop-shadow(0 0 35px rgba(234,34,45,0.85))",
            "drop-shadow(0 0 10px rgba(234,34,45,0.25))"
          ]
        }}
        transition={{
          opacity: { duration: 0.8, ease: "easeOut" },
          scale: { duration: 0.8, ease: "easeOut" },
          filter: { repeat: Infinity, duration: 2.2, ease: "easeInOut" }
        }}
        className="flex flex-col items-center"
      >
        <img
          src={logo}
          alt="Leela Films Logo"
          className="w-[45vw] max-w-[320px] md:max-w-[420px] object-contain select-none pointer-events-none"
        />
      </motion.div>
    </motion.div>
  );
};

export default Preloader;
