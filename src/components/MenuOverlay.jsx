import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
  { name: "SERVICES", id: "services", image: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?q=80&w=1726&auto=format&fit=crop" },
  { name: "PILLARS", id: "pillars", image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1450&auto=format&fit=crop" },
  { name: "ABOUT", id: "about", image: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?q=80&w=1726&auto=format&fit=crop" },
  { name: "WAY FORWARD", id: "wayforward", image: "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?q=80&w=2073&auto=format&fit=crop" },
  { name: "TEAM", id: "team", image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=2070&auto=format&fit=crop" },
  { name: "CONTACT", id: "contact", image: "https://images.unsplash.com/photo-1486848538183-510c07596379?q=80&w=1955&auto=format&fit=crop" },
];

const MenuOverlay = ({ isOpen, onClose }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Lock body scroll and handle escape key
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleItemClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[90] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center overflow-hidden pointer-events-auto"
        >
          {/* Subtle hovered cinematic background image */}
          <AnimatePresence mode="wait">
            {hoveredIndex !== null && (
              <motion.div
                key={hoveredIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 0.15, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                  backgroundImage: `url(${menuItems[hoveredIndex].image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  filter: 'grayscale(50%) contrast(120%)',
                }}
              />
            )}
          </AnimatePresence>

          {/* Grain texture/cinematic overlay */}
          <div className="absolute inset-0 z-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

          {/* Close Button - Hidden on mobile since we have the main hamburger button */}
          <button 
            onClick={onClose}
            className="absolute top-10 right-10 text-white/50 hover:text-white transition-colors text-xs tracking-widest uppercase font-bold z-10 hidden md:block"
          >
            Close [ESC]
          </button>

          {/* Arch Menu Container (Desktop/Tablet) */}
          <div className="relative w-full max-w-7xl h-[40vh] items-end justify-center hidden md:flex z-10">
            {menuItems.map((item, index) => {
              const totalItems = menuItems.length;
              const angleStep = 100 / (totalItems - 1); // Fit 7 items
              const angle = index * angleStep - 50; // Center the arch
              const radius = 620; // Radius of the arch

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 100, rotate: 0 }}
                  animate={{ 
                    opacity: 1, 
                    y: -Math.cos((angle * Math.PI) / 180) * 100, 
                    x: Math.sin((angle * Math.PI) / 180) * radius * 0.7,
                    rotate: angle,
                  }}
                  whileHover={{ 
                    scale: 1.15, 
                    y: -Math.cos((angle * Math.PI) / 180) * 130,
                    zIndex: 20,
                    transition: { duration: 0.3 }
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  transition={{ 
                    delay: index * 0.04, 
                    duration: 0.8, 
                    ease: [0.22, 1, 0.36, 1] 
                  }}
                  onClick={() => handleItemClick(item.id)}
                  className="absolute cursor-pointer origin-bottom py-10 px-4 group"
                >
                  <div className="relative flex flex-col items-center">
                    <motion.p 
                      className="text-white text-3xl md:text-5xl font-black tracking-tighter uppercase leading-none transition-all duration-300 group-hover:text-[#ea222d]"
                    >
                      {item.name}
                    </motion.p>
                    <motion.div 
                      className="w-0 h-[3px] bg-[#ea222d] mt-2 group-hover:w-full transition-all duration-500 rounded-full"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Premium Vertical Mobile List (Phone) */}
          <div className="relative w-full max-w-md flex flex-col items-center justify-center px-8 py-10 md:hidden z-10 space-y-6">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: index * 0.06, 
                  duration: 0.6, 
                  ease: [0.22, 1, 0.36, 1] 
                }}
                onClick={() => handleItemClick(item.id)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onTouchStart={() => setHoveredIndex(index)}
                className="w-full flex items-center justify-between py-3 border-b border-white/5 cursor-pointer group"
              >
                <div className="flex items-baseline space-x-4">
                  <span className="text-[10px] font-mono tracking-widest text-[#ea222d] font-bold">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                  <span className="text-2xl font-black tracking-tighter uppercase text-white group-hover:text-[#ea222d] transition-colors duration-300">
                    {item.name}
                  </span>
                </div>
                <motion.span 
                  initial={{ x: -5, opacity: 0 }}
                  whileHover={{ x: 0, opacity: 1 }}
                  className="text-[#ea222d] text-lg font-black hidden group-hover:inline-block transition-all duration-300"
                >
                  →
                </motion.span>
              </motion.div>
            ))}
          </div>

          {/* Large Background Text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none opacity-[0.02] md:opacity-5">
            <h1 className="text-[25vw] md:text-[20vw] font-black tracking-tighter uppercase leading-none text-white select-none">
              LEELA
            </h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MenuOverlay;
