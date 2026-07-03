import React from "react";
import { motion } from "framer-motion";

const MamaMentality = () => {
  return (
    <section className="relative py-24 md:py-36 bg-transparent overflow-hidden border-t border-white/5 flex items-center justify-center">
      {/* Decorative large backdrop text for ambient editorial layering */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none opacity-5 font-black text-[28vw] tracking-tighter uppercase whitespace-nowrap text-white">
        LEAD
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-start text-left">
          {/* Section Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-8 block"
          >
            <span className="section-tag">
               OUR DRIVE 
            </span>
          </motion.div>

          {/* The Big Quote Statement */}
          <motion.h3
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tight leading-none mb-10 max-w-5xl"
          >
            "Win with us <br className="hidden md:block" />
            <span className="text-[#ea222d] italic">or watch us win."</span>
          </motion.h3>

          {/* Explanatory Paragraph */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl bg-zinc-900/40 border border-white/5 backdrop-blur-sm p-8 md:p-10 rounded-sm"
          >
            <p className="text-gray-300 text-sm md:text-base font-light leading-relaxed">
              At <strong className="text-white font-bold">Leela Films</strong>, we believe success is a collective journey. Driven by ambition, passion, and agile execution, we don't just participate in the media landscape—we create to lead.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MamaMentality;
