import React from "react";
import { motion } from "framer-motion";
import { Quote, Star, Camera, Map, Home } from "lucide-react";

const pressData = [
  {
    title: "PRAISE FOR LAST FILM SHOW",
    quotes: [
      { text: "A visually stunning love-letter to cinema", source: "Mashable" },
      { text: "Magnificent celebration of the power of cinema", source: "Screen Riot" },
      { text: "This coming-of-age story is an ethereal take on the magic of movies.", source: "IndieWire" },
      { text: "As much an ode to movie-going, as movie making.", source: "First Post" },
      { text: "A masterpiece! Fully expect this to be in the running for the Oscar.", source: "Unseen Films" },
    ],
    icon: <Camera className="w-20 h-20 text-black/20 absolute -bottom-10 -left-10 rotate-12" />,
    decoration: <div className="absolute -top-6 right-10 flex gap-1">
      {[1, 2, 3, 4, 5].map(i => <Star key={i} size={32} fill="black" className="text-black" />)}
    </div>
  },
  {
    title: "PRAISE FOR TEEN AUR ADHA",
    quotes: [
      { text: "Beautifully layered story with a mature understanding of human emotions", source: "Ashutosh Gowariker", sub: "Director, Producer" },
      { text: "A detoxifying experience! I wish my life turns out like that of the old couple.", source: "Anurag Kashyap", sub: "Director, Producer" },
    ],
    icon: <Home className="w-24 h-24 text-black/20 absolute -bottom-12 -left-12 -rotate-12" />,
    decoration: <Quote size={80} className="absolute -top-10 -right-10 text-black rotate-180" />
  },
  {
    title: "PRAISE FOR NAMDEV BHAU",
    quotes: [
      { text: "Small and unpretentious, but observant and ultimately moving.", source: "Deborah Young" },
    ],
    icon: <Map className="w-24 h-24 text-black/20 absolute -bottom-12 -right-12 rotate-12" />,
  }
];

const Press = () => {
  return (
    <section id="press" className="py-24 bg-transparent overflow-hidden">
      <div className="container mx-auto px-6 space-y-16">
        {pressData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative max-w-6xl mx-auto"
          >
            {/* The Red Card - Wide Rectangle with Slightly Deeper Red */}
            <div className="bg-[#ea222d] p-6 md:p-10 relative border-2 border-black rounded-sm overflow-hidden shadow-[12px_12px_0px_0px_rgba(255,255,255,0.05)] min-h-[400px] flex flex-col">

              
              {/* Title with Highlighter effect */}
              <div className="mb-8 inline-block self-start bg-primary border-2 border-white px-4 py-1.5 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
                <h3 className="text-white text-sm md:text-base font-black uppercase leading-none">
                  {item.title}
                </h3>
              </div>

              {/* Quotes - Single column staggered layout, no internal boxes */}
              <div className="flex flex-col gap-2 md:gap-1 relative z-10 flex-grow justify-center">
                {item.quotes.map((quote, qIndex) => {
                  // Aggressive randomized-style offsets and alignments
                  const alignments = [
                    "self-start ml-0 md:ml-12",
                    "self-end mr-0 md:mr-16",
                    "self-center md:translate-x-[-40px]",
                    "self-start ml-0 md:ml-32",
                    "self-end mr-0 md:mr-8",
                  ];
                  const alignment = alignments[qIndex % alignments.length];

                  return (
                    <div key={qIndex} className={`${alignment} max-w-md flex flex-col group/quote p-2`}>
                      <p className="text-white text-[14px] md:text-[16px] font-semibold italic leading-tight">
                        "{quote.text}"
                      </p>
                      <div className="mt-1 text-right">
                        <span className="text-white font-black text-[10px] uppercase tracking-tighter">- {quote.source}</span>
                        {quote.sub && (
                          <p className="text-white/80 text-[8px] font-black uppercase tracking-widest leading-none mt-0.5">{quote.sub}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>


              {/* Decorative Icons */}
              {item.icon && React.cloneElement(item.icon, { className: item.icon.props.className.replace("text-black/20", "text-white/10") })}
              {item.decoration && React.cloneElement(item.decoration, { className: item.decoration.props.className.replace("text-black", "text-white/10") })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Press;
