import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Film, Monitor, Tv, Briefcase, ArrowUpRight } from "lucide-react";

import CorporateFilm from "../assets/images/CorporateFilm.png";
import FilmProduction from "../assets/images/FilmProduction.png";
import TVC from "../assets/images/TVC.jpeg";
import Webseries from "../assets/images/Webseries.png";

const servicesData = [
  {
    id: "01",
    title: "Film Production",
    desc: "Full-scale narrative feature films built on high-fidelity production values, connecting with global audiences while maintaining cultural authenticity.",
    icon: <Film size={32} />,
    image: FilmProduction,
  },
  {
    id: "02",
    title: "Web Series & Short Format",
    desc: "Episodic content and short-form show development optimized for modern OTT and digital platforms, engaging tech-savvy digital-first audiences.",
    icon: <Monitor size={32} />,
    image: Webseries,
  },
  {
    id: "03",
    title: "TVC & Advertisement Production",
    desc: "Premium television commercials and high-impact digital ad campaigns engineered to disrupt markets and position forward-thinking brands.",
    icon: <Tv size={32} />,
    image: TVC,
  },
  {
    id: "04",
    title: "Corporate Film Production",
    desc: "High-end corporate profiles, brand documentaries, and internal communications designed to influence perspectives and engage stakeholders.",
    icon: <Briefcase size={32} />,
    image: CorporateFilm,
  },
];

const Services = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section
      id="services"
      className="relative py-24 md:py-36 bg-transparent overflow-hidden border-t border-white/5"
    >
      {/* Background visual transition - Cleaned filters for original color depth */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 transition-all duration-700">
        <AnimatePresence mode="wait">
          <motion.img
            key={activeIdx}
            src={servicesData[activeIdx].image}
            alt="Service visual background"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.15, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
            className="w-full h-full object-cover" // Removed grayscale and blur
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/85" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Title */}
        <div className="max-w-3xl mb-16 pb-6 border-b border-white/10">
          <span className="section-tag">WHAT WE DO</span>
          <h2 className="section-title">SERVICES</h2>
          <p className="section-desc">
            We provide comprehensive, end-to-end production solutions, taking
            ideas from raw creative concepts to fully realized, premium visual
            assets.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left list (Hover interaction stays intact) */}
          <div className="lg:col-span-6 divide-y divide-white/5">
            {servicesData.map((service, index) => {
              const isActive = index === activeIdx;

              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setActiveIdx(index)}
                  onClick={() => setActiveIdx(index)}
                  className="py-8 cursor-pointer flex flex-col md:flex-row items-start md:items-center justify-between gap-6 transition-all group"
                >
                  <div className="flex items-start gap-6 md:gap-8 flex-grow">
                    <span
                      className={`text-xs font-black font-mono tracking-widest mt-1.5 transition-colors ${
                        isActive ? "text-[#ea222d]" : "text-white/20"
                      }`}
                    >
                      {service.id}
                    </span>

                    <div className="space-y-2 max-w-xl w-full">
                      <h3
                        className={`text-xl md:text-2xl font-black uppercase transition-colors tracking-tight ${
                          isActive
                            ? "text-white"
                            : "text-white/40 group-hover:text-white/80"
                        }`}
                      >
                        {service.title}
                      </h3>

                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                          className="space-y-4 pt-2 overflow-hidden"
                        >
                          {/* Mobile view fallback - Removed grayscale and brightness filters */}
                          <div className="lg:hidden w-full aspect-[4/3] rounded-xs border border-white/10 relative overflow-hidden bg-zinc-950">
                            <img
                              src={service.image}
                              alt={service.title}
                              className="w-full h-full object-cover" 
                            />
                          </div>

                          <p className="text-gray-400 text-xs md:text-sm font-light leading-relaxed">
                            {service.desc}
                          </p>
                        </motion.div>
                      )}
                    </div>
                  </div>

                  <ArrowUpRight
                    size={24}
                    className={`transition-all ${
                      isActive
                        ? "text-[#ea222d] rotate-45 scale-110"
                        : "text-white/20 group-hover:text-white/40"
                    }`}
                  />
                </div>
              );
            })}
          </div>

          {/* Right preview - Swaps out on hover, displaying full-color original images directly */}
          <div className="lg:col-span-6 hidden lg:block self-stretch">
            <div className="sticky top-28 w-full h-full max-h-[calc(100vh-160px)] min-h-[400px] bg-zinc-950 p-1.5 border border-white/10 rounded-sm shadow-2xl overflow-hidden relative group">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeIdx}
                  src={servicesData[activeIdx].image}
                  alt={servicesData[activeIdx].title}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" // Removed grayscale, brightness, and transition filters
                />
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
