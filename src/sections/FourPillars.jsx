import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

// Import cinematic background images
import HuntTheImpossibleImg from "../assets/images/Hunttheimposible.png";
import ObsessionImg from "../assets/images/Obsession Over Mediocrity.png";
import CreateStealImg from "../assets/images/CreateSteal.png";
import ExecutionImg from "../assets/images/Executionis Everything.png";

const pillarsData = [
  {
    id: "01",
    tag: "PILLAR 01",
    title: "Be Unbeatable",
    quote: "Hunt the Impossible.",
    desc: "We do not wait for opportunities to come to us; we chase them. Our team moves faster than fear, actively attacking difficult briefs and treating every single project as a hunt. Winning is never considered luck—it is preparation meeting obsession.",
    beliefs: [
      "We take risks, deeply inspired by the fear of being average.",
      "We believe that you can literally come back from anything.",
      "The standard is clear: win with us or watch us win."
    ],
    metric: "OBSESSION LEVEL: 10/10",
    bgImage: HuntTheImpossibleImg,
  },
  {
    id: "02",
    tag: "PILLAR 02",
    title: "It Takes Obsession To Be The Greatest",
    quote: "Obsession Over Mediocrity.",
    desc: "While good work comes from talent, we know that legendary work comes exclusively from obsession. We respect our craft, study it deeply, and constantly repeat the process until our skills are perfectly sharp. We embrace the pressure, intentionally staying uncomfortable because we never settle for 'good enough'.",
    beliefs: [
      "Growing may feel uncomfortable, but staying the same is much worse.",
      "You must make a choice to either increase your sacrifice or reduce your desire.",
      "Action is the secret; if you spend too much time thinking, you will never get it done."
    ],
    metric: "STANDARD: UNCOMPROMISED",
    bgImage: ObsessionImg,
  },
  {
    id: "03",
    tag: "PILLAR 03",
    title: "All Art Is Collaboration",
    quote: "Create. Steal. Transform.",
    desc: "Nothing great is ever created in total isolation. We recognize that every masterpiece is built from influence, so we relentlessly study films, music, internet culture, street culture, fashion, sports, and human emotion. Good artists may imitate, but we exist to remix reality into something entirely new.",
    beliefs: [
      "We study deeply so we can steal from many sources, not just one.",
      "We focus on transformation rather than imitation.",
      "True originality is simply the depth plus the breadth of your sources."
    ],
    metric: "CREATIVE SYNERGY: MAX",
    bgImage: CreateStealImg,
  },
  {
    id: "04",
    tag: "PILLAR 04",
    title: "Be Boring. It's The Only Way To Get Work Done.",
    quote: "Execution is Everything.",
    desc: "Greatness is not built from temporary hype; it is forged through daily consistency. We do not rely on being emotional every day; we rely on being dependable every day. Our professionals do not sit around waiting for inspiration to strike—we show up, communicate clearly, respect timelines, and finish exactly what we start.",
    beliefs: [
      "Consistency creates freedom, and discipline beats motivation every time.",
      "We believe that until death, all defeat is merely psychological.",
      "Every wasted year is another year your father cannot rest."
    ],
    metric: "CONSISTENCY: DAILY",
    bgImage: ExecutionImg,
  }
];

const FourPillars = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const handleNext = () => {
    setDirection(1);
    setActiveIdx((prev) => (prev + 1) % pillarsData.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIdx((prev) => (prev - 1 + pillarsData.length) % pillarsData.length);
  };

  const activePillar = pillarsData[activeIdx];

  // Animation variants for content slide transition
  const contentVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 50 : -50,
      opacity: 0,
      filter: "blur(4px)",
    }),
    center: {
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        x: { type: "spring", stiffness: 200, damping: 25 },
        opacity: { duration: 0.4 },
        filter: { duration: 0.3 }
      },
    },
    exit: (dir) => ({
      x: dir < 0 ? 50 : -50,
      opacity: 0,
      filter: "blur(4px)",
      transition: {
        x: { type: "spring", stiffness: 200, damping: 25 },
        opacity: { duration: 0.3 },
        filter: { duration: 0.2 }
      },
    }),
  };

  return (
    <section 
      id="pillars" 
      className="relative min-h-screen bg-black overflow-hidden flex flex-col justify-center py-20 md:py-28"
    >
      {/* Background Image Container with Cinematic Overlay Masks */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIdx}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.65 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            {/* Background Image */}
            <img
              src={activePillar.bgImage}
              alt={activePillar.title}
              className="absolute right-0 top-0 w-full lg:w-[65%] h-full object-cover object-center"
            />
            {/* Gradient overlays to fade out the image at left and edges */}
            <div className="absolute inset-0 bg-black/60 lg:bg-transparent lg:bg-gradient-to-r lg:from-black lg:via-black/70 lg:to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_15%,_black_90%)] lg:bg-[radial-gradient(circle_at_right,_transparent_20%,_black_85%)]" />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10 w-full flex flex-col justify-between min-h-[80vh] gap-12">
        {/* Top/Middle Pillar Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full relative">
          
          {/* Left Column: Textual Information */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeIdx}
                custom={direction}
                variants={contentVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="space-y-6"
              >
                {/* Active Indicator & Fraction */}
                <div className="flex items-baseline">
                  <span className="text-4xl md:text-5xl font-mono font-black text-[#ea222d] tracking-tighter">
                    {activePillar.id}
                  </span>
                  <span className="text-xl md:text-2xl font-mono text-white/30 ml-2">/ 04</span>
                </div>

                {/* Pillar Tag */}
                <span className="text-xs md:text-sm font-mono font-black tracking-[0.25em] text-[#ea222d] block uppercase">
                  {activePillar.tag}
                </span>

                {/* Title */}
                <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight leading-tight max-w-2xl">
                  {activePillar.title}
                </h2>

                {/* Active Rule Label & Border Rule Line */}
                <div className="flex items-center gap-4 py-1">
                  <span className="text-[10px] md:text-xs font-mono font-black tracking-widest text-white/40 uppercase whitespace-nowrap">
                    Active Rule
                  </span>
                  <div className="h-[1px] bg-white/20 flex-grow max-w-[200px]" />
                </div>

                {/* Main Pillar Quote */}
                <h3 className="text-2xl md:text-4xl font-extrabold text-white leading-tight italic uppercase tracking-tight">
                  "{activePillar.quote}"
                </h3>

                {/* Description */}
                <p className="text-gray-300/80 text-sm md:text-base font-light leading-relaxed max-w-2xl">
                  {activePillar.desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Dynamic Capsule Metric Badge (Pulsing Light) */}
          <div className="lg:col-span-5 flex justify-end items-start pt-4 lg:pt-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full flex items-center gap-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.6)]"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ea222d] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ea222d]"></span>
                </span>
                <span className="text-[10px] md:text-xs font-mono font-black tracking-wider text-white uppercase">
                  {activePillar.metric}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Footer Area: Arrow Controls & Beliefs Grid */}
        <div className="border-t border-white/10 pt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end w-full">
          
          {/* Controls (Bottom Left) */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            {/* Arrows */}
            <div className="flex items-center gap-4">
              <button
                onClick={handlePrev}
                className="w-12 h-12 rounded-full border border-white/20 hover:border-[#ea222d] hover:bg-[#ea222d]/10 flex items-center justify-center text-white transition-all duration-300 hover:scale-105 active:scale-95 group cursor-pointer"
                aria-label="Previous Pillar"
              >
                <ArrowLeft size={18} className="group-hover:-translate-x-0.5 transition-transform" />
              </button>
              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-full border border-white/20 hover:border-[#ea222d] hover:bg-[#ea222d]/10 flex items-center justify-center text-white transition-all duration-300 hover:scale-105 active:scale-95 group cursor-pointer"
                aria-label="Next Pillar"
              >
                <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Pagination Indicators */}
            <div className="flex items-center gap-2">
              {pillarsData.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > activeIdx ? 1 : -1);
                    setActiveIdx(i);
                  }}
                  className={`h-[3px] rounded-full transition-all duration-300 ${
                    i === activeIdx ? "w-8 bg-[#ea222d]" : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to pillar ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Core Beliefs checklist (Bottom Right) */}
          <div className="lg:col-span-9 space-y-4">
            <span className="text-[10px] md:text-xs font-mono font-black tracking-[0.25em] text-[#ea222d] uppercase block">
              Our Core Beliefs
            </span>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {activePillar.beliefs.map((belief, idx) => (
                  <div 
                    key={idx} 
                    className="flex gap-3.5 items-start group"
                  >
                    {/* Thin border check circle outline */}
                    <div className="w-5 h-5 rounded-full border border-[#ea222d] flex items-center justify-center text-[#ea222d] flex-shrink-0 mt-0.5 group-hover:bg-[#ea222d] group-hover:text-white transition-colors duration-300">
                      <Check size={11} className="stroke-[3]" />
                    </div>
                    <p className="text-xs md:text-sm text-gray-300 font-light leading-relaxed group-hover:text-white transition-colors duration-300">
                      {belief}
                    </p>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FourPillars;
