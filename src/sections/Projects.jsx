import React from "react";
import CategoryRow from "../components/CategoryRow";
import { projectData } from "../data/projects";

const Projects = ({ onProjectClick }) => {
  return (
    <section id="projects" className="py-20 bg-transparent">
      {/* Large Yellow Title */}
      <div className="container mx-auto px-6 mb-16">
        <h2 className="text-[12vw] font-black text-[#ea222d] text-left leading-none tracking-tighter uppercase">
          Blogs
        </h2>
      </div>

      <div className="container mx-auto px-6 space-y-16">
        {projectData.map((category, idx) => (
          <CategoryRow 
            key={idx} 
            category={category} 
            onProjectClick={onProjectClick} 
            isFirst={idx === 0}
          />
        ))}
      </div>
    </section>
  );
};


export default Projects;

