import React from "react";
import { motion } from "framer-motion";

const teamData = [
  {
    name: "Ujas Patel",
    role: "Founder",
    bio: "Directing the creative vision, championing culturally rooted narratives, and orchestrating modern high-fidelity production pipelines.",
    // image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop"
  },
  {
    name: "Kumpal Patel",
    role: "Founder & MD",
    bio: "Visionary entrepreneur shaping global entertainment pathways, pioneering creative integrity, and establishing the structural foundations of Leela Films.",
    // image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop"
  },
  {
    name: "Kanishq Chaudhari",
    role: "CEO",
    bio: "Driving executive operations, leading strategic collaborations, and bridging original artistic execution with international industry partnerships.",
    // image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1887&auto=format&fit=crop"
  },
];

const Team = () => {
  return (
    <section
      id="team"
      className="py-24 md:py-36 bg-transparent border-t border-white/5"
    >
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <span className="section-tag">THE LEADERSHIP</span>
          <h2 className="section-title">OUR TEAM</h2>
          <p className="section-desc">
            Our leaders combine years of executive operations, brand
            storytelling, and international creative leadership to bridge
            ambitious vision with world-class artistic execution.
          </p>
        </div>

        {/* 3-Column Leadership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-6xl mx-auto">
          {teamData.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                delay: index * 0.15,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="bg-zinc-950 border border-white/5 flex flex-col group relative rounded-2xl overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),_0_15px_35px_rgba(0,0,0,0.6)] hover:border-[#ea222d]/30 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),_0_20px_45px_rgba(0,0,0,0.8),_0_0_30px_rgba(234,34,45,0.08)] transition-all duration-300"
            >
              {/* Image Frame 
              
              <div className="relative aspect-[3/4] overflow-hidden bg-zinc-900 border-b border-white/5">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500" />
              </div>
                */}

              {/* Text Area */}
              <div className="p-6 md:p-8 flex-grow flex flex-col justify-between">
                <div>
                  <span className="text-[15px] font-mono tracking-widest text-[#ea222d] uppercase block mb-1">
                    {member.role}
                  </span>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-3">
                    {member.name}
                  </h3>
                  <p className="text-gray-400 text-xs md:text-sm font-light leading-relaxed mb-4">
                    {member.bio}
                  </p>
                </div>

                <div className="w-8 h-[2px] bg-white/10 group-hover:bg-[#ea222d] group-hover:w-full transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
