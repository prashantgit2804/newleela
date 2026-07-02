import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Share2, ChevronLeft, ChevronRight } from "lucide-react";

const VideoModal = ({ isOpen, project, onClose }) => {
  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-black flex flex-col p-4 md:p-8 overflow-y-auto"
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <button className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm">
            <Share2 size={18} /> Share
          </button>
          <button 
            onClick={onClose}
            className="w-11 h-11 rounded-full bg-white/[0.02] backdrop-blur-md border border-white/[0.08] hover:border-white/20 hover:bg-white/[0.07] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_8px_32px_rgba(0,0,0,0.5)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_8px_32px_rgba(234,34,45,0.1)] flex items-center justify-center text-white/70 hover:text-[#ea222d] transition-all duration-300 cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Main Content Grid */}
        <div className="flex-grow grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-7xl mx-auto w-full">
          {/* Video Section */}
          <div className="lg:col-span-8 relative group">
            <div className="aspect-video bg-zinc-900 rounded-sm overflow-hidden relative border border-white/5 shadow-2xl">
              {/* Placeholder for actual video embed */}
              <div className="absolute inset-0 flex items-center justify-center text-white/20">
                <p>Video Player (YouTube Embed)</p>
              </div>
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white scale-110">
                   <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-white border-b-[10px] border-b-transparent ml-2" />
                </div>
              </div>
            </div>
            
            {/* Side Navigation Arrows */}
            <button className="absolute left-[-70px] top-1/2 -translate-y-1/2 hidden xl:flex w-14 h-14 rounded-full bg-white/[0.02] backdrop-blur-md border border-white/[0.08] hover:border-white/20 hover:bg-white/[0.07] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_8px_32px_rgba(0,0,0,0.5)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_8px_32px_rgba(234,34,45,0.1)] items-center justify-center text-white/70 hover:text-[#ea222d] transition-all hover:scale-105 active:scale-95 cursor-pointer">
              <ChevronLeft size={28} />
            </button>
            <button className="absolute right-[-70px] top-1/2 -translate-y-1/2 hidden xl:flex w-14 h-14 rounded-full bg-white/[0.02] backdrop-blur-md border border-white/[0.08] hover:border-white/20 hover:bg-white/[0.07] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_8px_32px_rgba(0,0,0,0.5)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_8px_32px_rgba(234,34,45,0.1)] items-center justify-center text-white/70 hover:text-[#ea222d] transition-all hover:scale-105 active:scale-95 cursor-pointer">
              <ChevronRight size={28} />
            </button>
          </div>

          {/* Details Section */}
          <div className="lg:col-span-4 text-white space-y-6 pt-4">
            <h2 className="text-3xl font-bold leading-tight tracking-tight">
              {project.title}
            </h2>
            <div className="flex items-center gap-3 text-white/50 text-sm">
              <span>{project.director}</span>
              <span>•</span>
              <span>{project.duration}</span>
            </div>
            <p className="text-white/80 leading-relaxed text-sm">
              {project.description}
            </p>
          </div>
        </div>

        {/* Bottom Related Section (Optional) */}
        <div className="mt-12 max-w-7xl mx-auto w-full border-t border-white/10 pt-8 pb-12">
          <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="min-w-[200px] aspect-video bg-zinc-800 rounded-sm overflow-hidden opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
                <img src={project.image} alt="Related" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default VideoModal;
