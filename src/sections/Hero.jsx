import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/images/logo.png";

const Hero = () => {
  const handleCTA = () => {
    const contactSection = document.getElementById("contact");

    if (contactSection) {
      const isMobileView = window.innerWidth < 768;
      const yOffset = isMobileView ? -45 : 15;

      if (window.lenis) {
        window.lenis.scrollTo(contactSection, {
          offset: yOffset,
          duration: 1.2,
        });
      } else {
        const y =
          contactSection.getBoundingClientRect().top +
          window.pageYOffset +
          yOffset;

        window.scrollTo({
          top: y,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-transparent flex items-center"
    >
      {/* Overlays */}
      <div className="absolute inset-0 z-[15] bg-gradient-to-r from-black via-black/70 to-black/20" />
      <div className="absolute inset-0 z-[16] bg-gradient-to-b from-black/50 via-transparent to-black" />

      {/* Content */}
      <div className="container mx-auto px-6 md:px-12 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            delay: 2.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-3xl"
        >
          <h2 className="text-4xl md:text-7xl font-black tracking-tight text-white leading-[1.05] mb-6">
            Shaping Culture.
            <br />
            <span className="text-[#ea222d]">
              Empowering Talent.
            </span>
            <br />
           Bringing Indian stories to the world
          </h2>

          <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-xl mb-10">
            Welcome to Leela Films a new age entertainment and media
            ecosystem built on modern production systems, cultural
            authenticity, and the relentless pursuit of excellence.
          </p>
<motion.button
  whileHover={{ scale: 1.03 }}
  whileTap={{ scale: 0.98 }}
  onClick={handleCTA}
  className="
    px-8
    py-4
    bg-red-600
    text-white
    font-bold
    text-sm
    uppercase
    rounded-md
    hover:bg-red-700
    transition-colors
    duration-200
    cursor-pointer
  "
>
  Collaborate With Us
</motion.button>

        </motion.div>
      </div>

    </section>
  );
};

export default Hero;
