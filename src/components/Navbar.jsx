import React, { useState } from "react";
import { motion } from "framer-motion";
import logo from "../assets/images/logo.png";

const allNavItems = [
  { name: "SERVICES", id: "services" },
  { name: "PILLARS", id: "pillars" },
  { name: "ABOUT", id: "about" },
  { name: "WAY FORWARD", id: "wayforward" },
  { name: "TEAM", id: "team" },
  { name: "CONTACT", id: "contact" },
];

const middleNavItems = [
  { name: "SERVICES", id: "services" },
  { name: "ABOUT", id: "about" },
  { name: "CONTACT", id: "contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleItemClick = (id) => {
    const element = document.getElementById(id);

    if (element) {
      const isMobileView = window.innerWidth < 768;
      const yOffset = isMobileView ? -45 : 15;

      setMenuOpen(false);

      if (window.lenis) {
        window.lenis.scrollTo(element, {
          offset: yOffset,
          duration: 1.2,
        });
      } else {
        const y =
          element.getBoundingClientRect().top +
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
    <nav
      className="
        fixed top-0 left-1/2 -translate-x-1/2
        w-[calc(100%-2rem)] md:w-[calc(100%-4rem)]
        max-w-[94vw] lg:max-w-[96vw]
        z-[100]
        bg-black/45 backdrop-blur-lg
        border border-white/[0.08]
        shadow-[0_12px_40px_0_rgba(0,0,0,0.5)]
        rounded-b-2xl md:rounded-b-3xl
        overflow-hidden transition-all duration-300
      "
    >
      <div className="w-full px-6 md:px-10 h-20 flex items-center justify-between gap-4">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex-shrink-0 cursor-pointer z-20"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setMenuOpen(false);
          }}
        >
          <img
            src={logo}
            alt="Logo"
            className="h-9 md:h-10 w-auto object-contain hover:scale-105 transition-transform"
          />
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          {middleNavItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
            >
              {item.id === "contact" ? (
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleItemClick("contact")}
                  className="
                    px-6
                    py-3
                    bg-red-600
                    text-white
                    font-semibold
                    text-[11px]
                    tracking-[0.18em]
                    uppercase
                    rounded-md
                    hover:bg-red-700
                    transition-colors
                    duration-200
                    cursor-pointer
                  "
                >
                  Contact Us
                </motion.button>
              ) : (
                <motion.button
                  onClick={() => handleItemClick(item.id)}
                  className="group relative py-1"
                >
                  <span className="text-[10px] md:text-[11px] font-semibold tracking-[0.2em] uppercase text-white group-hover:text-[#ea222d] transition-colors duration-300">
                    {item.name}
                  </span>

                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#ea222d] group-hover:w-full transition-all duration-300" />
                </motion.button>
              )}
            </motion.div>
          ))}
        </div>

        {/* Hamburger */}
        <motion.button
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={() => setMenuOpen(!menuOpen)}
          className="
            flex items-center justify-center
            w-10 h-10
            rounded-full
            bg-white/[0.02]
            backdrop-blur-md
            border border-white/[0.08]
            hover:border-white/20
            hover:bg-white/[0.07]
            transition-all duration-300
          "
          aria-label="Toggle Menu"
        >
          <div className="relative w-4 h-3.5">
            <motion.span
              animate={menuOpen ? { rotate: 45, top: 6 } : { rotate: 0, top: 0 }}
              className="absolute left-0 w-full h-[2px] bg-white rounded-full"
            />
            <motion.span
              animate={{ opacity: menuOpen ? 0 : 1 }}
              className="absolute left-0 top-[6px] w-full h-[2px] bg-white rounded-full"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, top: 6 } : { rotate: 0, top: 12 }}
              className="absolute left-0 w-full h-[2px] bg-white rounded-full"
            />
          </div>
        </motion.button>
      </div>

      {/* Mobile Dropdown */}
      <motion.div
        initial={false}
        animate={menuOpen ? "open" : "closed"}
        variants={{
          open: {
            height: "auto",
            opacity: 1,
            transition: {
              height: { type: "spring", stiffness: 100, damping: 18 },
              opacity: { duration: 0.3 },
              staggerChildren: 0.04,
              delayChildren: 0.05,
            },
          },
          closed: {
            height: 0,
            opacity: 0,
            transition: {
              height: { type: "spring", stiffness: 120, damping: 20 },
              opacity: { duration: 0.2 },
              staggerChildren: 0.02,
              staggerDirection: -1,
            },
          },
        }}
        className="overflow-hidden bg-zinc-950/20 backdrop-blur-md"
      >
        <div className="px-8 py-6 md:px-12 flex flex-col gap-1.5 border-t border-white/[0.06]">
          {allNavItems.map((item) => (
            <motion.button
              key={item.id}
              variants={{
                open: { opacity: 1, y: 0 },
                closed: { opacity: 0, y: -10 },
              }}
              onClick={() => handleItemClick(item.id)}
              className="
                text-white/80 hover:text-[#ea222d]
                text-[13px] font-semibold tracking-[0.2em]
                uppercase py-3 border-b border-white/5
                last:border-b-0 transition-colors
                flex items-center justify-between group
              "
            >
              <span>
                {item.id === "contact" ? "Contact Us" : item.name}
              </span>

              <span className="text-[10px] opacity-0 group-hover:opacity-100 text-[#ea222d] transition-all">
                →
              </span>
            </motion.button>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
