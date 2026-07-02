import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote, Flame, Zap, Eye, Check, Target, Compass, Award, ShieldAlert } from "lucide-react";
import Hunter from "../assets/images/Hunter.png";
import LegendryCraft from "../assets/images/LegendryCraft.png";
import Deciplin from "../assets/images/Deciplin.png";

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
    badge: "Hunter Mindset",
    metric: "Obsession Level: 10/10",
    icon: (
      <img
        src={Hunter}
        alt="Hunter"
        className="w-5 h-5 object-contain"
      />
    ),
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
    badge: "Legendary Craft",
    metric: "Standard: Uncompromised",
     icon: (
      <img
        src={LegendryCraft}
        alt="Legendary Craft"
        className="w-5 h-5 object-contain"
      />
    ),
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
    badge: "Remix Reality",
    metric: "Creative Synergy: Max",
    icon: <Compass size={20} className="text-[#ea222d]" />
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
    badge: "Extreme Discipline",
    metric: "Consistency: Daily",
    icon: (
      <img
        src={Deciplin}
        alt="Discipline"
        className="w-5 h-5 object-contain"
      />
    ),
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

  // Animation variants for the card slide transition
  const cardVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 150 : -150,
      opacity: 0,
      scale: 0.95,
      filter: "blur(4px)",
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 },
        filter: { duration: 0.3 }
      },
    },
    exit: (dir) => ({
      x: dir < 0 ? 150 : -150,
      opacity: 0,
      scale: 0.95,
      filter: "blur(4px)",
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
        scale: { duration: 0.3 },
        filter: { duration: 0.2 }
      },
    }),
  };

  return (
    <section id="pillars" className="relative py-24 md:py-36  overflow-hidden border-t border-white/5">
      {/* Dynamic Cinematic Watermark Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.03] font-black text-[22vw] tracking-tighter uppercase whitespace-nowrap text-white">
        {activePillar.title.split(" ")[0]}
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title Block */}
        <div className="max-w-3xl mb-16 pb-6 border-b border-white/10">
          <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-[#ea222d] block mb-2">
            THE CORE DNA
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight mb-6">
            FOUR PILLARS
          </h2>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            The foundation of our execution, creativity, and daily mindset. At Leela Films, we do not build employees; we build hunters.
          </p>
        </div>

        {/* Main Review Card Slide Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch min-h-[460px] max-w-6xl mx-auto">
          
          {/* Left Navigation Details (3 cols) */}
          <div className="lg:col-span-3 flex flex-col justify-between py-4">
            <div className="space-y-6">
              <div>
                <span className="text-5xl font-mono font-black text-[#ea222d]">
                  {activePillar.id}
                </span>
                <span className="text-xl font-mono text-white/30 ml-2">/ 04</span>
              </div>
              
              <div className="space-y-2">
                <span className="text-xs font-mono font-black uppercase tracking-wider text-white/40 block">
                  ACTIVE RULE
                </span>
                <h4 className="text-2xl font-black uppercase text-white tracking-tight leading-tight transition-colors duration-300">
                  {activePillar.title}
                </h4>
              </div>
            </div>

            {/* Desktop Navigation Controls */}
            <div className="hidden lg:flex flex-col gap-6 pt-8">
              <div className="flex items-center gap-4">
                <button
                  onClick={handlePrev}
                  className="w-12 h-12 rounded-full bg-white/[0.02] backdrop-blur-md border border-white/[0.08] hover:border-white/20 hover:bg-white/[0.07] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_8px_32px_rgba(0,0,0,0.5)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_8px_32px_rgba(234,34,45,0.1)] flex items-center justify-center text-white/70 hover:text-[#ea222d] transition-all hover:scale-105 active:scale-95 group cursor-pointer"
                  aria-label="Previous Pillar"
                >
                  <ArrowLeft size={18} className="group-hover:-translate-x-0.5 transition-transform" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-12 h-12 rounded-full bg-white/[0.02] backdrop-blur-md border border-white/[0.08] hover:border-white/20 hover:bg-white/[0.07] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_8px_32px_rgba(0,0,0,0.5)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_8px_32px_rgba(234,34,45,0.1)] flex items-center justify-center text-white/70 hover:text-[#ea222d] transition-all hover:scale-105 active:scale-95 group cursor-pointer"
                  aria-label="Next Pillar"
                >
                  <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>

              {/* Progress Bar Dots */}
              <div className="flex items-center gap-2">
                {pillarsData.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setDirection(i > activeIdx ? 1 : -1);
                      setActiveIdx(i);
                    }}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === activeIdx ? "w-8 bg-[#ea222d]" : "w-2 bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Pillar Slide Card (9 cols) */}
          <div className="lg:col-span-9 relative flex items-center justify-center">
            
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeIdx}
                custom={direction}
                variants={cardVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full bg-zinc-900/40 border border-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 relative overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),_0_30px_70px_rgba(0,0,0,0.8),_0_2px_10px_rgba(0,0,0,0.4)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),_0_35px_80px_rgba(0,0,0,0.9),_0_0_30px_rgba(234,34,45,0.1)] hover:border-[#ea222d]/30 transition-all duration-500 flex flex-col justify-between gap-8 group"
              >
                {/* Visual Accent Borders */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#ea222d] pointer-events-none opacity-60" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#ea222d] pointer-events-none opacity-60" />
                
                {/* Glowing subtle red radial ambient backdrop light */}
                <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-[#ea222d]/5 blur-3xl pointer-events-none" />

                {/* Card Top: Tags, Badges & Review Metrics */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/5 pb-6">
                  <div className="flex items-center gap-3">
                    <span className="p-2 bg-[#ea222d]/10 rounded-lg flex items-center justify-center">
                      {activePillar.icon}
                    </span>
                    <div>
                      <span className="text-[10px] font-mono tracking-widest text-[#ea222d] font-bold block">
                        {activePillar.tag}
                      </span>
                      <span className="text-xs font-semibold text-white/50">
                        {activePillar.badge}
                      </span>
                    </div>
                  </div>

                  <div className="bg-zinc-950/80 border border-white/5 px-4 py-1.5 rounded-full flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ea222d] animate-pulse"></span>
                    <span className="text-[10px] font-mono tracking-wider text-white/60 uppercase">
                      {activePillar.metric}
                    </span>
                  </div>
                </div>

                {/* Card Middle: Large Quote Statement (Testimonial Design) & Description */}
                <div className="space-y-6 relative">
                  {/* Decorative Low-opacity Big Quote */}
                  <Quote size={80} className="absolute -top-6 -left-4 text-white/[0.03] pointer-events-none font-bold" />
                  
                  <h3 className="text-2xl md:text-4xl font-extrabold text-white leading-tight tracking-tight uppercase italic relative z-10">
                    "{activePillar.quote}"
                  </h3>
                  
                  <p className="text-gray-300 text-sm md:text-base font-light leading-relaxed max-w-4xl relative z-10">
                    {activePillar.desc}
                  </p>
                </div>

                {/* Card Bottom: Core Beliefs List formatted like checklist review ratings */}
                <div className="border-t border-white/5 pt-6 space-y-4">
                  <span className="text-xs font-mono font-bold tracking-widest text-white/30 uppercase block">
                    OUR CORE BELIEFS
                  </span>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {activePillar.beliefs.map((belief, idx) => (
                      <div 
                        key={idx} 
                        className="bg-zinc-950/50 border border-white/5 hover:border-[#ea222d]/30 transition-all shadow-[inset_0_1px_0_rgba(255,255,255,0.05),_0_8px_24px_rgba(0,0,0,0.3)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.1),_0_12px_32px_rgba(0,0,0,0.4)] p-4 rounded-xl flex gap-3 group/item"
                      >
                        <div className="w-5 h-5 rounded-full bg-[#ea222d]/10 flex items-center justify-center text-[#ea222d] flex-shrink-0 group-hover/item:bg-[#ea222d] group-hover/item:text-white transition-colors duration-300">
                          <Check size={12} className="stroke-[3]" />
                        </div>
                        <p className="text-xs md:text-[13px] text-gray-400 font-light leading-relaxed group-hover/item:text-white transition-colors duration-300">
                          {belief}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>

          </div>

          {/* Mobile Navigation Controls (Inline grid underneath card) */}
          <div className="lg:hidden flex flex-col gap-6 items-center pt-4">
            <div className="flex items-center gap-6">
              <button
                onClick={handlePrev}
                className="w-12 h-12 rounded-full bg-white/[0.02] backdrop-blur-md border border-white/[0.08] hover:border-white/20 hover:bg-white/[0.07] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_8px_32px_rgba(0,0,0,0.5)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_8px_32px_rgba(234,34,45,0.1)] flex items-center justify-center text-white/70 hover:text-[#ea222d] transition-all hover:scale-105 active:scale-95 group cursor-pointer"
                aria-label="Previous Pillar"
              >
                <ArrowLeft size={18} />
              </button>

              <div className="flex items-center gap-1.5">
                {pillarsData.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setDirection(i > activeIdx ? 1 : -1);
                      setActiveIdx(i);
                    }}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === activeIdx ? "w-6 bg-[#ea222d]" : "w-1.5 bg-white/20"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-full bg-white/[0.02] backdrop-blur-md border border-white/[0.08] hover:border-white/20 hover:bg-white/[0.07] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_8px_32px_rgba(0,0,0,0.5)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_8px_32px_rgba(234,34,45,0.1)] flex items-center justify-center text-white/70 hover:text-[#ea222d] transition-all hover:scale-105 active:scale-95 group cursor-pointer"
                aria-label="Next Pillar"
              >
                <ArrowRight size={18} />
              </button>
            </div>
            
            <div className="text-[10px] font-mono text-white/30 tracking-widest uppercase">
              Pillar {activeIdx + 1} of 4
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default FourPillars;
