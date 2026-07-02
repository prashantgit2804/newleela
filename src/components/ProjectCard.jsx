import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const ProjectCard = ({ project, onClick }) => {
  return (
    <div className="flex flex-col gap-3 w-[300px] md:w-[450px] flex-shrink-0">
      <motion.div
        whileHover={{ scale: 1.01 }}
        onClick={onClick}
        className="group relative aspect-video overflow-hidden rounded-sm bg-gray-200 cursor-pointer"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center text-white bg-black/20 backdrop-blur-sm opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all">
            <Play size={20} fill="currentColor" />
          </div>
        </div>

        {/* Duration */}
        <div className="absolute bottom-2 right-2 bg-black/80 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
          {project.duration}
        </div>
      </motion.div>
      
      <h3 className="text-sm font-medium text-gray-200 leading-snug max-w-[90%]">
        {project.title}
      </h3>
    </div>

  );
};

export default ProjectCard;

