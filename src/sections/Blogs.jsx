import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { blogData } from "../data/blogs";

const Blogs = ({ blogs = [], onBlogClick }) => {
  const displayBlogs = blogs.length > 0 ? blogs : blogData;
  const scrollRef = useRef(null);
  const [showPrev, setShowPrev] = useState(false);
  const [showNext, setShowNext] = useState(false);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowPrev(scrollLeft > 10);
      setShowNext(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const timer = setTimeout(checkScroll, 100);
    window.addEventListener("resize", checkScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", checkScroll);
    };
  }, [displayBlogs]);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8;
      scrollRef.current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="blogs" className="py-24 md:py-36 bg-transparent border-t border-white/5 relative">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <span className="section-tag">
            STORIES & INSIGHTS
          </span>
          <h2 className="section-title">
            OUR BLOGS
          </h2>
          <p className="section-desc">
            Delve into our thoughts on filmmaking, storytelling, cinematic lighting, and the future of cultural media ecosystems.
          </p>
        </div>

        {/* Horizontal Slider Wrapper */}
        <div className="relative group/slider max-w-6xl mx-auto">
          
          {/* Left Navigation Control */}
          {showPrev && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-[-20px] top-[calc(50%-24px)] z-20 w-12 h-12 rounded-full bg-white/[0.02] backdrop-blur-md border border-white/[0.08] hover:border-white/20 hover:bg-white/[0.07] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_8px_32px_rgba(0,0,0,0.5)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_8px_32px_rgba(234,34,45,0.1)] flex items-center justify-center text-white/70 hover:text-[#ea222d] transition-all hover:scale-105 active:scale-95 group hidden md:flex cursor-pointer"
              aria-label="Scroll Left"
            >
              <ChevronLeft size={20} className="group-hover:-translate-x-0.5 transition-transform" />
            </button>
          )}

          {/* Right Navigation Control */}
          {showNext && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-[-20px] top-[calc(50%-24px)] z-20 w-12 h-12 rounded-full bg-white/[0.02] backdrop-blur-md border border-white/[0.08] hover:border-white/20 hover:bg-white/[0.07] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_8px_32px_rgba(0,0,0,0.5)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_8px_32px_rgba(234,34,45,0.1)] flex items-center justify-center text-white/70 hover:text-[#ea222d] transition-all hover:scale-105 active:scale-95 group hidden md:flex cursor-pointer"
              aria-label="Scroll Right"
            >
              <ChevronRight size={20} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          )}

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex overflow-x-auto gap-8 no-scrollbar pb-8 scroll-smooth"
          >
            {displayBlogs.map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => onBlogClick(blog)}
                className="bg-zinc-950 border border-white/5 flex flex-col group relative rounded-2xl overflow-hidden cursor-pointer hover:border-[#ea222d]/30 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),_0_15px_35px_rgba(0,0,0,0.6)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),_0_20px_45px_rgba(0,0,0,0.8),_0_0_30px_rgba(234,34,45,0.08)] transition-all duration-300 w-[300px] md:w-[380px] flex-shrink-0"
              >
                {/* Image Frame */}
                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900 border-b border-white/5 w-full">
                  <img
                    src={blog.coverImage}
                    alt={blog.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500" />
                  
                  {/* Fixed Float Tag Layout using style fallback for absolute right spacing */}
                  <div 
                    style={{ right: '16px' }}
                    className="absolute top-4 z-30 bg-black/90 backdrop-blur-md text-[11px] font-mono tracking-wider text-[#ea222d] font-bold px-3 py-1.5 border border-white/10 rounded-full flex items-center gap-1.5 whitespace-nowrap"
                  >
                    <Clock size={11} className="flex-shrink-0" />
                    <span>{blog.readTime}</span>
                  </div>
                </div>

                {/* Text Area */}
                <div className="p-6 md:p-8 flex-grow flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <span className="text-[13px] font-mono tracking-widest text-gray-400 uppercase flex items-center gap-1.5">
                      <Calendar size={10} className="text-[#ea222d]" />
                      {blog.publishDate}
                    </span>
                    
                    <h3 className="text-xl font-black text-white uppercase tracking-tight group-hover:text-[#ea222d] transition-colors duration-300 leading-snug line-clamp-2">
                      {blog.title}
                    </h3>
                    
                    <p className="text-gray-400 text-xs md:text-sm font-light leading-relaxed line-clamp-3">
                      {blog.paragraphDescription}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-[13px] font-mono tracking-wider text-[#ea222d] font-bold uppercase flex items-center gap-1.5 group-hover:translate-x-1.5 transition-transform duration-300">
                      READ DETAILS
                      <ArrowRight size={12} />
                    </span>
                    <div className="w-8 h-[2px] bg-white/10 group-hover:bg-[#ea222d] group-hover:w-16 transition-all duration-500" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
