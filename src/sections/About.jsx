import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useTransform,
  useSpring,
  useMotionValue,
  animate,
} from "framer-motion";
import {
  Compass,
  Target,
  Zap,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import OurPhilosophy from "../assets/images/OurPhilosophy.png";
import SpeedandQuality from "../assets/images/SpeedandQuality.png";
import OurCommitment from "../assets/images/OurCommitment.png";
import THEFUTUREOFCINEMA from "../assets/images/THEFUTUREOFCINEMA.png";
import WinwithUs from "../assets/images/WinwithUs.png";


const cardsData = [
  {
    id: 1,
    tag: "STORY",
    watermark: "S",
    title: "OUR PHILOSOPHY",
    desc: "Leela Films is more than a production house—it is a collaborative creative ecosystem where artists converge. Rooted in cultural authenticity, we give a fearless voice to original talent.",
    bg: "bg-cover bg-center",
    image:OurPhilosophy,
    
      theme: "dark",
  },
  {
    id: 2,
    tag: "SPEED",
    watermark: "⚡",
    title: "SPEED & QUALITY",
    desc: "By combining modern production pipelines with creative dominance, we prove that rapid execution and uncompromised, world-class quality can coexist in every single frame.",
    bg: "bg-white",
    theme: "light",
    image: SpeedandQuality,
  },
  {
    id: 3,
    tag: "VISION",
    watermark: "V",
    title: "THE FUTURE OF CINEMA",
    desc: "To build a world-class media ecosystem that shapes contemporary culture, empowers creative talent, and presents authentic Indian stories to global audiences through constant innovation.",
    bg: "bg-zinc-950 border border-[#ea222d]/20",
    theme: "dark-red",
    image: THEFUTUREOFCINEMA,
  },
  {
    id: 4,
    tag: "MISSION",
    watermark: "M",
    title: "OUR COMMITMENT",
    desc: "Manufacturing premium, high-impact content across feature films, digital format shows, and original branded IPs, while nurturing fresh talent and creative frameworks.",
    bg: "bg-zinc-900 border border-white/5",
    theme: "dark-minimal",
     image: OurCommitment,
  },
  {
    id: 5,
    tag: "DRIVE",
    watermark: "L",
    title: "WIN WITH US",
    desc: "Success is a collective journey. Driven by relentless ambition, artistic passion, and agile execution, we don't just participate in the media landscape—we create to lead.",
    bg: "bg-[#ea222d]",
    theme: "brand-red",
    image: WinwithUs,
  },
];

// Helper to wrap relative card positions seamlessly between [-N/2, N/2]
const getWrappedRelativePos = (cardIndex, latestIndex, N) => {
  const relPos = cardIndex - latestIndex;
  const halfN = N / 2;
  return ((((relPos + halfN) % N) + N) % N) - halfN;
};

const About = () => {
  const targetRef = useRef(null);
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Initialize index at 2 (the middle card "Vision")
  const index = useMotionValue(2);
  const smoothIndex = useSpring(index, {
    stiffness: 120,
    damping: 22,
    mass: 0.5,
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Touch Swipe Gestures
  const touchStartX = useRef(0);
  const touchStartIndex = useRef(0);
  const isSwiping = useRef(false);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartIndex.current = index.get();
    isSwiping.current = true;
  };

  const handleTouchMove = (e) => {
    if (!isSwiping.current) return;
    const deltaX = e.touches[0].clientX - touchStartX.current;
    const cardWidth = window.innerWidth < 768 ? 200 : 320;
    const newIndex = touchStartIndex.current - deltaX / cardWidth;
    index.set(newIndex);
  };

  const handleTouchEnd = () => {
    isSwiping.current = false;
    // Snap to the nearest integer index
    const target = Math.round(index.get());
    animate(index, target, {
      type: "spring",
      stiffness: 150,
      damping: 22,
    });
  };

  // Trackpad horizontal scrolling & Shift + Wheel horizontal scrolling
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let wheelTimeout;

    const handleWheel = (e) => {
      // Prioritize horizontal scrolling deltaX
      if (Math.abs(e.deltaX) > 1) {
        e.preventDefault();
        const current = index.get();
        index.set(current + e.deltaX * 0.003);

        clearTimeout(wheelTimeout);
        wheelTimeout = setTimeout(() => {
          const target = Math.round(index.get());
          animate(index, target, {
            type: "spring",
            stiffness: 150,
            damping: 22,
          });
        }, 150);
      }
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      el.removeEventListener("wheel", handleWheel);
      clearTimeout(wheelTimeout);
    };
  }, [index]);

  // Click handler to center target card
  const handleCardClick = (cardIndex) => {
    const currentTarget = index.get();
    const N = cardsData.length;
    const diff = cardIndex - (currentTarget % N);
    const wrappedDiff = ((((diff + N / 2) % N) + N) % N) - N / 2;
    const target = currentTarget + wrappedDiff;

    animate(index, target, {
      type: "spring",
      stiffness: 120,
      damping: 20,
    });
  };

  // Controls Navigation
  const handlePrev = () => {
    const target = Math.round(index.get()) - 1;
    animate(index, target, {
      type: "spring",
      stiffness: 120,
      damping: 20,
    });
  };

  const handleNext = () => {
    const target = Math.round(index.get()) + 1;
    animate(index, target, {
      type: "spring",
      stiffness: 120,
      damping: 20,
    });
  };

  // Compute scale progress between 0 and 1 for the visual track
  const progress = useTransform(smoothIndex, (latest) => {
    const N = cardsData.length;
    const wrapped = ((latest % N) + N) % N;
    return wrapped / (N - 1);
  });

  return (
    <section
      ref={targetRef}
      id="about"
      className="relative bg-transparent border-t border-white/5 py-12 md:py-16"
    >
      {/* Content wrapper */}
      <div className="relative w-full overflow-hidden flex flex-col justify-between py-12 md:py-16 min-h-[620px] md:min-h-[720px] z-10">
        {/* Section Header */}
        <div className="container mx-auto px-6 md:px-12 text-left z-20">
          <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-[#ea222d] block mb-2">
            04 / STUDIO IDENTITY
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-2">
            OUR PHILOSOPHY & DNA
          </h2>
          <p className="text-gray-400 text-xs md:text-sm font-light max-w-md leading-relaxed">
            Landing centered on our vision, the deck sways dynamically and sways
            smoothly as you scroll down.
          </p>
        </div>

        {/* 3D Arc Card Arena */}
        <div
          ref={containerRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="relative w-full h-[55vh] md:h-[60vh] flex items-center justify-center touch-pan-y select-none pb-8 md:pb-12"
        >
          {/* Card Carousel Deck */}
          <div className="relative w-full max-w-6xl h-full flex items-center justify-center">
            {cardsData.map((card, i) => {
              const spacing = isMobile ? 210 : 310;
              const angleVal = 7; // Curved tilt angle multiplier

              const x = useTransform(smoothIndex, (latest) => {
                const relPos = getWrappedRelativePos(
                  i,
                  latest,
                  cardsData.length,
                );
                return relPos * spacing;
              });

              const y = useTransform(smoothIndex, (latest) => {
                const relPos = getWrappedRelativePos(
                  i,
                  latest,
                  cardsData.length,
                );
                return Math.pow(relPos, 2) * 18 + (isMobile ? 5 : 10);
              });

              const rotate = useTransform(smoothIndex, (latest) => {
                const relPos = getWrappedRelativePos(
                  i,
                  latest,
                  cardsData.length,
                );
                return relPos * angleVal;
              });

              const scale = useTransform(smoothIndex, (latest) => {
                const relPos = getWrappedRelativePos(
                  i,
                  latest,
                  cardsData.length,
                );
                return 1 - Math.min(0.3, Math.abs(relPos) * 0.08);
              });

              const opacity = useTransform(smoothIndex, (latest) => {
                const relPos = getWrappedRelativePos(
                  i,
                  latest,
                  cardsData.length,
                );
                const absRel = Math.abs(relPos);
                // Smoothly fade out near the boundary to hide the looping wraps
                if (absRel > 2.0) {
                  return Math.max(0, 1 - (absRel - 2.0) / 0.5) * 0.5;
                }
                return 1 - Math.min(0.6, absRel * 0.25);
              });

              const zIndex = useTransform(smoothIndex, (latest) => {
                const relPos = getWrappedRelativePos(
                  i,
                  latest,
                  cardsData.length,
                );
                return Math.round(100 - Math.abs(relPos) * 10);
              });

              return (
                <motion.div
                  key={card.id}
                  style={{
                    x,
                    y,
                    rotate,
                    scale,
                    opacity,
                    zIndex,
                  }}
                  onClick={() => handleCardClick(i)}
                  className={`absolute w-[260px] md:w-[320px] h-[370px] md:h-[450px] rounded-2xl p-6 md:p-8 flex flex-col justify-between overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),_0_30px_70px_-15px_rgba(0,0,0,0.9),_0_4px_15px_rgba(0,0,0,0.5)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),_0_35px_80px_-15px_rgba(0,0,0,0.95),_0_0_30px_rgba(234,34,45,0.15)] border border-white/5 hover:border-[#ea222d]/30 transition-[border-color,box-shadow,background-color] duration-300 pointer-events-auto cursor-pointer ${card.bg}`}
                >
                  {/* Grayscale Backdrop Image for dark theme card */}
                  {card.image && (
                    <div className="absolute inset-0 z-0">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover grayscale opacity-25"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent" />
                    </div>
                  )}

                  {/* Watermark Logo character in background */}
                  <span
                    className={`absolute -bottom-10 -right-4 font-black select-none pointer-events-none text-[15rem] md:text-[18rem] leading-none opacity-[0.04] ${
                      card.theme === "light" ? "text-black" : "text-white"
                    }`}
                  >
                    {card.watermark}
                  </span>

                  {/* Card Content Wrapper */}
                  <div className="relative z-10 w-full h-full flex flex-col justify-between">
                    {/* Header: Index tag */}
                    <div className="flex justify-between items-center w-full">
                      <span
                        className={`text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-full border ${
                          card.theme === "light"
                            ? "text-black/80 border-black/10 bg-black/5"
                            : card.theme === "brand-red"
                              ? "text-white border-white/20 bg-white/10"
                              : "text-[#ea222d] border-[#ea222d]/20 bg-[#ea222d]/5"
                        }`}
                      >
                        {card.tag}
                      </span>
                      <span
                        className={`text-xs font-mono font-black ${
                          card.theme === "light"
                            ? "text-black/30"
                            : "text-white/30"
                        }`}
                      >
                        0{card.id}
                      </span>
                    </div>

                    {/* Body text & title */}
                    <div className="mt-8 flex-grow flex flex-col justify-center">
                      <h3
                        className={`text-xl md:text-2xl font-black uppercase tracking-tight mb-4 ${
                          card.theme === "light"
                            ? "text-black font-sans"
                            : "text-white"
                        }`}
                      >
                        {card.title}
                      </h3>
                      <p
                        className={`text-xs md:text-sm font-light leading-relaxed ${
                          card.theme === "light"
                            ? "text-black/70"
                            : card.theme === "brand-red"
                              ? "text-white/80"
                              : "text-gray-400"
                        }`}
                      >
                        {card.desc}
                      </p>
                    </div>

                    {/* Decorative bottom element */}
                    <div className="mt-6 pt-4 border-t w-full flex items-center justify-between border-current/10">
                      {card.theme === "light" ? (
                        <>
                          <span className="text-[9px] font-mono tracking-widest text-black/40">
                            LEELA FILMS DNA
                          </span>
                          <Zap size={14} className="text-black" />
                        </>
                      ) : card.theme === "brand-red" ? (
                        <>
                          <span className="text-[9px] font-mono tracking-widest text-white/60">
                            Agile Execution
                          </span>
                          <Sparkles size={14} className="text-white" />
                        </>
                      ) : card.theme === "dark-red" ? (
                        <>
                          <span className="text-[9px] font-mono tracking-widest text-[#ea222d]/60">
                            Cultural Impact
                          </span>
                          <Compass size={14} className="text-[#ea222d]" />
                        </>
                      ) : (
                        <>
                          <span className="text-[9px] font-mono tracking-widest text-white/30">
                            Standard Quality
                          </span>
                          <Target size={14} className="text-white/40" />
                        </>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Scroll Progress Indicator & Guide */}
        <div className="container mx-auto px-6 text-center z-20">
          <div className="flex flex-col items-center gap-4">
            {/* Progress Bar & Arrow Buttons controls */}
            <div className="flex items-center gap-6">
              <button
                onClick={handlePrev}
                className="w-11 h-11 rounded-full bg-white/[0.02] backdrop-blur-md border border-white/[0.08] hover:border-white/20 hover:bg-white/[0.07] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_8px_32px_rgba(0,0,0,0.5)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_8px_32px_rgba(234,34,45,0.1)] flex items-center justify-center text-white/70 hover:text-[#ea222d] transition-all duration-300 active:scale-95 cursor-pointer"
                aria-label="Previous card"
              >
                <ChevronLeft size={18} />
              </button>

              {/* Smooth animated progress track */}
              <div className="w-36 h-[2px] bg-white/10 relative overflow-hidden rounded-full">
                <motion.div
                  style={{ scaleX: progress }}
                  className="absolute inset-0 bg-[#ea222d] origin-left"
                />
              </div>

              <button
                onClick={handleNext}
                className="w-11 h-11 rounded-full bg-white/[0.02] backdrop-blur-md border border-white/[0.08] hover:border-white/20 hover:bg-white/[0.07] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_8px_32px_rgba(0,0,0,0.5)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_8px_32px_rgba(234,34,45,0.1)] flex items-center justify-center text-white/70 hover:text-[#ea222d] transition-all duration-300 active:scale-95 cursor-pointer"
                aria-label="Next card"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            <span className="text-[9px] font-black uppercase tracking-[0.25em] text-white/30">
              Click any card or swipe/scroll to explore
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
