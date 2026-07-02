import React, { useEffect, useState } from "react";
import Lenis from "lenis";
import { motion, AnimatePresence } from "framer-motion";
import back from "./assets/images/back.png";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import MamaMentality from "./sections/MamaMentality";
import Projects from "./sections/Projects";
import Services from "./sections/Services";
import About from "./sections/About";
import FourPillars from "./sections/FourPillars";
import WayForward from "./sections/WayForward";
import Team from "./sections/Team";
import Blogs from "./sections/Blogs";
import Contact from "./sections/Contact";
import VideoModal from "./components/VideoModal";
import BlogModal from "./components/BlogModal";
import Preloader from "./components/Preloader";
import { api } from "./utils/api";

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isLoading]);

  useEffect(() => {
    api
      .get("/blogs/")
      .then((data) => {
        if (Array.isArray(data)) {
          setBlogs(data);
        }
      })
      .catch((err) => {
        console.warn(
          "Django API unavailable. Falling back to static mock blogs:",
          err,
        );
      });
  }, []);

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    window.lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      window.lenis = null;
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && <Preloader />}
      </AnimatePresence>

      <div className="bg-primary min-h-screen text-white font-sans selection:bg-[#ea222d] selection:text-white relative">
        {/* Global Background Image */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.img
          src={back}
          alt="Leela Films Background"
          animate={{
            scale: [1, 1.03, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="
            absolute
            right-0
            top-0
            w-full
            h-full
            object-cover
            opacity-70
          "
        />
        {/* Global Overlays to ensure legibility and deep contrast */}
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/90" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
        {/* Cinematic Header Landing */}
        <Hero />

        {/* Bold MAMA statement */}
        <MamaMentality />

        {/* Portfolio reel */}
        {/* <Projects onProjectClick={setSelectedProject} /> */}

        {/* Core Services grid */}
        <Services />

        {/* Foundational Pillars (Review Slide Cards) */}
        <FourPillars />

        {/* Company Bio, Mission & Vision */}
        <About />

        {/* Future Verticals Bento Grid */}
        <WayForward />

        {/* Core Leaders */}
        <Team />

        {/* Stories & Insights Blogs */}
        <Blogs blogs={blogs} onBlogClick={setSelectedBlog} />

        {/* Corporate Address & Collaborative Infrastructure */}
        <Contact />
      </main>
      </div>

      <VideoModal
        isOpen={!!selectedProject}
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <BlogModal
        isOpen={!!selectedBlog}
        blog={selectedBlog}
        onClose={() => setSelectedBlog(null)}
      />
    </div>
    </>
  );
}

export default App;