import React, { useRef, useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { ChevronRight, MoreVertical, ChevronDown } from "lucide-react";

const CategoryRow = ({ category, onProjectClick, isFirst }) => {
  const scrollRef = useRef(null);
  const [showNext, setShowNext] = useState(false);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      // Show button if we can scroll more (with a small 10px buffer)
      setShowNext(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, [category.items]);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8; // Scroll 80% of view
      scrollRef.current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative group">
      {/* Category Header */}
      <div className="flex justify-between items-center mb-6 px-1">
        <div className="flex items-center gap-2">
          <MoreVertical size={18} className="text-gray-400" />
          <h3 className="text-sm font-semibold text-white tracking-tight">
            {category.category}
          </h3>
        </div>
        <div className="flex items-center gap-1 text-[11px] font-bold text-gray-400 cursor-pointer hover:text-black uppercase tracking-wider">
          {isFirst ? "People & Blogs" : "All Categories"} <ChevronDown size={14} />
        </div>
      </div>

      {/* Horizontal Slider */}
      <div className="relative">
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex overflow-x-auto gap-8 no-scrollbar pb-6 scroll-smooth"
        >
          {category.items.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => onProjectClick(project)}
            />
          ))}
        </div>

        {/* Right Arrow - Conditionally visible and functional */}
        {showNext && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-[-24px] top-[calc(50%-28px)] z-20 w-12 h-12 rounded-full bg-white/[0.02] backdrop-blur-md border border-white/[0.08] hover:border-white/20 hover:bg-white/[0.07] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_8px_32px_rgba(0,0,0,0.5)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_8px_32px_rgba(234,34,45,0.1)] flex items-center justify-center text-white/70 hover:text-[#ea222d] transition-all opacity-0 group-hover:opacity-100 hidden md:flex cursor-pointer"
          >
            <ChevronRight size={24} />
          </button>
        )}
      </div>
    </div>
  );
};

export default CategoryRow;
