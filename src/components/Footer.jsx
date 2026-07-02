import React from "react";
import { Instagram, Twitter, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-bold text-white mb-6">
              JUGAAD<span className="text-accent">.</span>
            </h2>
            <p className="text-gray-400 max-w-sm mb-8">
              We are a creative agency focused on high-quality visual storytelling and digital experiences.
            </p>
            <div className="flex space-x-4">
              {[Instagram, Twitter, Linkedin, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-gray-400 hover:bg-accent hover:text-primary transition-all"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-accent transition-colors">Visual Effects</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Video Production</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Branding</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Contact</h4>
            <ul className="space-y-4 text-gray-400">
              <li>hello@jugaad.com</li>
              <li>+1 (234) 567-890</li>
              <li>Mumbai, India</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Jugaad Creative Agency. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
