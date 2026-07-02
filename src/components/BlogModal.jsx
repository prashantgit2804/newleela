import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Clock } from "lucide-react";

const BlogModal = ({ isOpen, blog, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.classList.add("lenis-stopped");
    } else {
      document.body.style.overflow = "";
      document.documentElement.classList.remove("lenis-stopped");
    }

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.documentElement.classList.remove("lenis-stopped");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !blog) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl overflow-y-auto pointer-events-auto"
        data-lenis-prevent
      >
        {/* Sticky Close Button Header */}
        <div className="sticky top-0 z-[210] flex justify-between items-center px-6 md:px-12 py-4 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-xs">
          <div className="flex items-center gap-4 text-xs font-mono tracking-widest text-[#ea222d] uppercase">
            <span>[ LEELA JOURNAL ]</span>
          </div>
          <button
            onClick={onClose}
            className="group w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-[#ea222d]/50 hover:bg-[#ea222d] transition-all duration-300"
            aria-label="Close modal"
          >
            <X size={20} className="group-hover:rotate-90 transition-transform duration-300" />
          </button>
        </div>

        {/* Modal Outer Shell */}
        <div className="w-full max-w-5xl mx-auto px-4 md:px-8 pb-24">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-12"
          >
            {/* 1. Cover Image (Full Size) */}
            <div className="w-full aspect-[21/9] rounded-sm overflow-hidden border border-white/10 shadow-2xl relative">
              <img
                src={blog.coverImage}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
            </div>

            {/* Meta tags & H1 Block */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-6 text-xs text-gray-400 font-mono">
                <span className="flex items-center gap-2">
                  <Calendar size={14} className="text-[#ea222d]" />
                  {blog.publishDate}
                </span>
                <span className="flex items-center gap-2">
                  <Clock size={14} className="text-[#ea222d]" />
                  {blog.readTime}
                </span>
              </div>

              {/* 2. H1 Heading */}
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-tight">
                {blog.title}
              </h1>
              
              <div className="w-20 h-[3px] bg-[#ea222d] rounded-full" />
            </div>

            {/* 3. Paragraph Description */}
            <p className="text-gray-300 text-base md:text-lg font-light leading-relaxed max-w-4xl">
              {blog.paragraphDescription}
            </p>

            {/* 4. H2 Heading (First section header) */}
            <div className="border-t border-white/5 pt-8">
              <h2 className="text-2xl md:text-4xl font-extrabold text-white uppercase tracking-tight mb-6">
                {blog.subheading1}
              </h2>

              {/* 5. Split Layout (Image Left, Description Right) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                {/* Image on Left */}
                <div className="aspect-video md:aspect-[4/3] rounded-sm overflow-hidden border border-white/5 bg-zinc-900">
                  <img
                    src={blog.splitImage}
                    alt={blog.subheading1}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                {/* Description on Right */}
                <p className="text-gray-300 text-sm md:text-base font-light leading-relaxed">
                  {blog.splitDescription}
                </p>
              </div>
            </div>

            {/* 6. H2 / H3 Heading */}
            <div className="border-t border-white/5 pt-8 space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tight">
                {blog.subheading2}
              </h3>

              {/* 7. Paragraph */}
              <p className="text-gray-300 text-sm md:text-base font-light leading-relaxed max-w-4xl">
                {blog.paragraph2}
              </p>
            </div>

            {/* 8. Conclusion */}
            <div className="relative p-6 md:p-8 bg-zinc-900/40 border-l-4 border-[#ea222d] rounded-r-lg backdrop-blur-xs">
              <span className="text-[10px] font-mono tracking-widest text-[#ea222d] uppercase block mb-2 font-bold">
                [ CONCLUSION ]
              </span>
              <p className="text-white text-base md:text-lg italic font-light leading-relaxed">
                {blog.conclusion}
              </p>
            </div>
            
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default BlogModal;
