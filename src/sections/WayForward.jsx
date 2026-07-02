import React from "react";
import { motion } from "framer-motion";
import { Users, Radio, Camera, Smile } from "lucide-react";
import Ecosystem from "../assets/images/Ecosystem.png";
import Marketing from "../assets/images/Marketing.png";
const verticalsData = [
  {
    id: 1,
    category: "Talent & Ecosystem Growth",
    subtitle: "Nurturing the Next Generation",
    desc: "Establishing a dedicated Casting & Skill Development House paired with a comprehensive Talent Management Division to nurture, represent, and empower performers.",
    icon: <Users size={28} className="text-[#ea222d]" />,
    cols: "lg:col-span-7",
    bg: "bg-gradient-to-br from-zinc-950 via-zinc-900 to-black",
  },
  {
    id: 2,
    category: "Distribution & Marketing",
    subtitle: "Maximizing Global Reach",
    desc: "Building an independent Film Distribution Network alongside an aggressive Film Promotions & Marketing wing to ensure authentic Indian stories reach all global platforms.",
    icon: <Radio size={28} className="text-[#ea222d]" />,
    cols: "lg:col-span-5",
    bg: "bg-gradient-to-bl from-zinc-950 via-zinc-900 to-black",
  },
  // {
  //   id: 3,
  //   category: "Media & Pop-Culture",
  //   subtitle: "Real-time Entertainment Culture",
  //   desc: "Launching a Celebrity Coverage Unit (Paparazzi Division) built on modern high-speed media reporting to capture organic pop-culture moments as they happen.",
  //   icon: <Camera size={28} className="text-[#ea222d]" />,
  //   cols: "lg:col-span-5",
  //   bg: "bg-gradient-to-tr from-zinc-950 via-zinc-900 to-black",
  // },
  // {
  //   id: 4,
  //   category: "Community & Live Performance",
  //   subtitle: "Grassroots Artistic Ecosystems",
  //   desc: "Creating Stand-Up Comedy & Performance Spaces, Short Film Competitions, and an interactive Creator Community Ecosystem to cultivate grassroots artistic appreciation.",
  //   icon: <Smile size={28} className="text-[#ea222d]" />,
  //   cols: "lg:col-span-7",
  //   bg: "bg-gradient-to-tl from-zinc-950 via-zinc-900 to-black",
  // },
];

const WayForward = () => {
  return (
    <section id="wayforward" className="py-24 md:py-36 bg-transparent overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-[#ea222d] block mb-2">THE WAY FORWARD</span>
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight mb-6">
            FUTURE VERTICALS
          </h2>
          <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed">
            Leela Films is rapidly evolving into a fully integrated media conglomerate. Our upcoming specialized divisions are meticulously designed to capture and elevate every facet of the entertainment lifecycle.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 max-w-6xl mx-auto">
          {verticalsData.map((vertical) => (
            <motion.div
              key={vertical.id}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className={`p-8 md:p-10 rounded-2xl border border-white/5 flex flex-col justify-between min-h-[320px] transition-all relative group shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),_0_15px_35px_rgba(0,0,0,0.6)] hover:border-[#ea222d]/30 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),_0_20px_45px_rgba(0,0,0,0.8),_0_0_30px_rgba(234,34,45,0.08)] ${vertical.cols} ${vertical.bg}`}
            >
              {/* Corner Glow Accent on hover */}
              <div className="absolute top-0 right-0 w-[80px] h-[80px] bg-[#ea222d]/5 rounded-bl-full filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon & Category Header */}
              <div className="flex justify-between items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#ea222d]/10 flex items-center justify-center border border-[#ea222d]/20">
                  {vertical.icon}
                </div>
                <span className="text-[10px] font-mono tracking-widest text-[#ea222d]/60 group-hover:text-[#ea222d] transition-colors duration-300">
                  DIVISION 0{vertical.id}
                </span>
              </div>

              {/* Text Description Block */}
              <div className="mt-8">
                <span className="text-xs uppercase tracking-wider text-gray-500 block mb-1">
                  {vertical.subtitle}
                </span>
                <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight mb-4 group-hover:text-[#ea222d] transition-colors duration-300">
                  {vertical.category}
                </h3>
                <p className="text-gray-400 text-xs md:text-sm font-light leading-relaxed">
                  {vertical.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WayForward;
