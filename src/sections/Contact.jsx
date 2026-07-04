import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  MapPin,
  User,
  Mail,
  Send,
  Award,
  Facebook,
  Linkedin,
  Instagram,
  Twitter,
} from "lucide-react";
import OurGroupInfrastructure from "../assets/images/OurGroupInfrastructure.png";

// Import partner logos
import AminesLogo from "../assets/images/partner_logo/Amines_logo.png";
import LeelaUSALogo from "../assets/images/partner_logo/Leela_USA_logo.png";
import PureLeelaLogo from "../assets/images/partner_logo/Pure_Leela_logo.png";
import gaurivala from "../assets/images/partner_logo/gaurivala.png";
import gulf from "../assets/images/partner_logo/gulf.png";

// Import API helper
import { api } from "../utils/api";

const groupInfrastructure = [
  { name: "Leela USA LLC", logo: LeelaUSALogo },
  { name: "Pure Leela Limited", logo: PureLeelaLogo },
  { name: "Tobias Amines Limited", logo: AminesLogo },
  { name: "Leela Gulf",logo:gulf },
  { name: "Leela by Gauri Vala", logo: gaurivala},
 
];

const Contact = () => {
  const [activeTab, setActiveTab] = useState("inquiry");

  // Contact Inquiry Form States
  const [inquiryForm, setInquiryForm] = useState({
    full_name: "",
    email: "",
    interest: "Brand Campaign & TVC",
    message: "",
  });
  const [inquiryLoading, setInquiryLoading] = useState(false);
  const [inquiryStatus, setInquiryStatus] = useState(null);

  // Careers Form States
  const [careersForm, setCareersForm] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    position: "Director / Assistant Director",
    portfolio_link: "",
    why_join: "",
  });
  const [careersLoading, setCareersLoading] = useState(false);
  const [careersStatus, setCareersStatus] = useState(null);

  const handleSubmitInquiry = async (e) => {
    e.preventDefault();
    setInquiryLoading(true);
    setInquiryStatus(null);
    try {
      const response = await api.post("contact/", {
        full_name: inquiryForm.full_name,
        email: inquiryForm.email,
        interest: inquiryForm.interest,
        message: inquiryForm.message,
      });
      setInquiryStatus({
        type: "success",
        message:
          response?.message ||
          "Thank you! Your collaboration request has been received.",
      });
      // Reset form on success
      setInquiryForm({
        full_name: "",
        email: "",
        interest: "Brand Campaign & TVC",
        message: "",
      });
    } catch (err) {
      setInquiryStatus({
        type: "error",
        message: err.message || "An error occurred. Please try again.",
      });
    } finally {
      setInquiryLoading(false);
    }
  };

  const handleSubmitCareers = async (e) => {
    e.preventDefault();
    setCareersLoading(true);
    setCareersStatus(null);
    try {
      const response = await api.post("careers/", {
        full_name: careersForm.full_name,
        email: careersForm.email,
        phone_number: careersForm.phone_number,
        position: careersForm.position,
        portfolio_link: careersForm.portfolio_link,
        why_join: careersForm.why_join,
      });
      setCareersStatus({
        type: "success",
        message:
          response?.message ||
          "Thank you! Your job application has been submitted successfully.",
      });
      // Reset form on success
      setCareersForm({
        full_name: "",
        email: "",
        phone_number: "",
        position: "Director / Assistant Director",
        portfolio_link: "",
        why_join: "",
      });
    } catch (err) {
      setCareersStatus({
        type: "error",
        message: err.message || "An error occurred. Please try again.",
      });
    } finally {
      setCareersLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-36 bg-transparent overflow-hidden relative border-t border-white/5"
    >
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#ea222d]/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <span className="section-tag !mb-3">COLLABORATE</span>
          <h2 className="section-title">LET'S WORK TOGETHER</h2>
          <p className="section-desc">
            Whether you are an ambitious creator looking for a "home away from
            home," or a brand seeking outside-the-box visual disruption, we want
            to hear from you.
          </p>
        </div>

        {/* 2-Column Split: Form & Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
          {/* Left Column: Interactive Tabbed Form (Inquiry / Careers) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 bg-zinc-900/30 p-6 md:p-10 border border-white/5 rounded-2xl backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),_0_15px_35px_rgba(0,0,0,0.6)]"
          >
            <div className="flex flex-col md:flex-row gap-8 md:gap-10">
              {/* Vertical Tabs Navigation */}
              <div className="flex flex-row md:flex-col gap-2 border-b md:border-b-0 md:border-r border-white/10 pb-4 md:pb-0 pr-0 md:pr-8 min-w-[140px] flex-shrink-0">
                <button
                  type="button"
                  onClick={() => setActiveTab("inquiry")}
                  className={`text-left text-xs font-black tracking-[0.2em] uppercase py-2 md:py-3 transition-colors relative block w-full ${activeTab === "inquiry" ? "text-[#ea222d]" : "text-white/40 hover:text-white"}`}
                >
                  Inquiry
                  {activeTab === "inquiry" && (
                    <span className="absolute bottom-0 left-0 h-[2px] w-full md:w-[2px] md:h-full md:top-0 md:right-0 md:left-auto bg-[#ea222d]" />
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("careers")}
                  className={`text-left text-xs font-black tracking-[0.2em] uppercase py-2 md:py-3 transition-colors relative block w-full ${activeTab === "careers" ? "text-[#ea222d]" : "text-white/40 hover:text-white"}`}
                >
                  Careers
                  {activeTab === "careers" && (
                    <span className="absolute bottom-0 left-0 h-[2px] w-full md:w-[2px] md:h-full md:top-0 md:right-0 md:left-auto bg-[#ea222d]" />
                  )}
                </button>
              </div>

              {/* Form Windows */}
              <div className="flex-grow pt-2 md:pt-0">
                {activeTab === "inquiry" ? (
                  <form onSubmit={handleSubmitInquiry} className="space-y-6">
                    <h3 className="text-xl font-black uppercase tracking-tight text-white mb-6">
                      Send a Message
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 block mb-2">
                          Full Name
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            required
                            placeholder="Your name"
                            value={inquiryForm.full_name}
                            onChange={(e) =>
                              setInquiryForm({
                                ...inquiryForm,
                                full_name: e.target.value,
                              })
                            }
                            className="w-full bg-black/40 border border-white/10 p-3 pl-10 rounded-sm text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#ea222d] transition-all"
                          />
                          <User
                            size={16}
                            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-600"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 block mb-2">
                          Email Address
                        </label>
                        <div className="relative">
                          <input
                            type="email"
                            required
                            placeholder="Your email"
                            value={inquiryForm.email}
                            onChange={(e) =>
                              setInquiryForm({
                                ...inquiryForm,
                                email: e.target.value,
                              })
                            }
                            className="w-full bg-black/40 border border-white/10 p-3 pl-10 rounded-sm text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#ea222d] transition-all"
                          />
                          <Mail
                            size={16}
                            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-600"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 block mb-2">
                        Collaboration Interest
                      </label>
                      <select
                        value={inquiryForm.interest}
                        onChange={(e) =>
                          setInquiryForm({
                            ...inquiryForm,
                            interest: e.target.value,
                          })
                        }
                        className="w-full bg-black/40 border border-white/10 p-3 rounded-sm text-sm text-white focus:outline-none focus:border-[#ea222d] transition-all"
                      >
                        <option className="bg-zinc-950" disabled hidden>
                          Select Collaboration Interest
                        </option>
                        <option className="bg-zinc-950">
                          Brand Campaign & TVC
                        </option>
                        <option className="bg-zinc-950">
                          OTT Web Series & Short Format
                        </option>
                        <option className="bg-zinc-950">
                          YouTubers for sponsored videos
                        </option>
                        <option className="bg-zinc-950">
                          Casting Services
                        </option>
                        <option className="bg-zinc-950">
                          Talent Training & Workshops
                        </option>
                        <option className="bg-zinc-950">
                          Production Collaboration
                        </option>
                        <option className="bg-zinc-950">Other Enquiries</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 block mb-2">
                        Message
                      </label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Outline your idea or collaboration request..."
                        value={inquiryForm.message}
                        onChange={(e) =>
                          setInquiryForm({
                            ...inquiryForm,
                            message: e.target.value,
                          })
                        }
                        className="w-full bg-black/40 border border-white/10 p-3 rounded-sm text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#ea222d] transition-all resize-none"
                      ></textarea>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <button
                        type="submit"
                        disabled={inquiryLoading}
                        className={`w-full md:w-auto px-8 py-3.5 bg-white/[0.02] backdrop-blur-md text-white font-black text-xs tracking-[0.2em] uppercase rounded-full border border-[#ea222d]/25 hover:border-[#ea222d]/60 hover:bg-white/[0.07] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_8px_32px_rgba(234,34,45,0.06)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_8px_32px_rgba(234,34,45,0.2)] transition-all duration-300 flex items-center justify-center gap-2 ${inquiryLoading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
                      >
                        {inquiryLoading ? "Submitting..." : "Submit Inquiry"}{" "}
                        <Send size={14} />
                      </button>

                      {inquiryStatus && (
                        <span
                          className={`text-xs font-semibold ${inquiryStatus.type === "success" ? "text-green-400" : "text-[#ea222d]"}`}
                        >
                          {inquiryStatus.message}
                        </span>
                      )}
                    </div>
                  </form>
                ) : (
                  <form onSubmit={handleSubmitCareers} className="space-y-6">
                    <h3 className="text-xl font-black uppercase tracking-tight text-white mb-6">
                      Join the Team
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 block mb-2">
                          Full Name
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            required
                            placeholder="Your name"
                            value={careersForm.full_name}
                            onChange={(e) =>
                              setCareersForm({
                                ...careersForm,
                                full_name: e.target.value,
                              })
                            }
                            className="w-full bg-black/40 border border-white/10 p-3 pl-10 rounded-sm text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#ea222d] transition-all"
                          />
                          <User
                            size={16}
                            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-600"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 block mb-2">
                          Email Address
                        </label>
                        <div className="relative">
                          <input
                            type="email"
                            required
                            placeholder="Your email"
                            value={careersForm.email}
                            onChange={(e) =>
                              setCareersForm({
                                ...careersForm,
                                email: e.target.value,
                              })
                            }
                            className="w-full bg-black/40 border border-white/10 p-3 pl-10 rounded-sm text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#ea222d] transition-all"
                          />
                          <Mail
                            size={16}
                            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-600"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 block mb-2">
                          Phone Number
                        </label>
                        <div className="relative">
                          <input
                            type="tel"
                            required
                            placeholder="Your phone number"
                            value={careersForm.phone_number}
                            onChange={(e) =>
                              setCareersForm({
                                ...careersForm,
                                phone_number: e.target.value,
                              })
                            }
                            className="w-full bg-black/40 border border-white/10 p-3 pl-10 rounded-sm text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#ea222d] transition-all"
                          />
                          <Phone
                            size={16}
                            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-600"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 block mb-2">
                          Position of Interest
                        </label>
                        <select 
                          value={careersForm.position}
                          onChange={(e) =>
                            setCareersForm({
                              ...careersForm,
                              position: e.target.value,
                            })
                          }
                          className="w-full bg-black/40 border border-white/10 p-3 rounded-sm text-sm text-white focus:outline-none focus:border-[#ea222d] transition-all"
                        >
                           <option className="bg-zinc-950" disabled hidden>
                          Select Position of Intrest
                        </option>
                          <option className="bg-zinc-950">
                            Director / Assistant Director
                          </option>
                          <option className="bg-zinc-950">
                            Cinematographer / Camera Crew
                          </option>
                          <option className="bg-zinc-950">
                            Post-Production Video Editor
                          </option>
                          <option className="bg-zinc-950">
                            Screenwriter / Creative Writer
                          </option>
                          <option className="bg-zinc-950">
                            Production Assistant / Intern
                          </option>
                          <option className="bg-zinc-950">Photographer</option>
                          <option className="bg-zinc-950">
                            Graphic Designer
                          </option>
                          <option className="bg-zinc-950">
                            Business Developers
                          </option>
                          <option className="bg-zinc-950">
                            Social Media Manager
                          </option>
                          <option className="bg-zinc-950">HR</option>
                          <option className="bg-zinc-950">Other</option>
                          <option className="bg-zinc-950">Interns</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 block mb-2">
                        Portfolio / Resume Link
                      </label>
                      <input
                        type="url"
                        required
                        placeholder="Link to your work (Behance, Vimeo, Drive, etc.)"
                        value={careersForm.portfolio_link}
                        onChange={(e) =>
                          setCareersForm({
                            ...careersForm,
                            portfolio_link: e.target.value,
                          })
                        }
                        className="w-full bg-black/40 border border-white/10 p-3 rounded-sm text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#ea222d] transition-all"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 block mb-2">
                        Why join Leela Films?
                      </label>
                      <textarea
                        rows={3}
                        required
                        placeholder="Tell us about yourself, your experience, and why you want to join Leela Films."
                        value={careersForm.why_join}
                        onChange={(e) =>
                          setCareersForm({
                            ...careersForm,
                            why_join: e.target.value,
                          })
                        }
                        className="w-full bg-black/40 border border-white/10 p-3 rounded-sm text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#ea222d] transition-all resize-none"
                      ></textarea>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <button
                        type="submit"
                        disabled={careersLoading}
                        className={`w-full md:w-auto px-8 py-3.5 bg-white/[0.02] backdrop-blur-md text-white font-black text-xs tracking-[0.2em] uppercase rounded-full border border-[#ea222d]/25 hover:border-[#ea222d]/60 hover:bg-white/[0.07] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_8px_32px_rgba(234,34,45,0.06)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_8px_32px_rgba(234,34,45,0.2)] transition-all duration-300 flex items-center justify-center gap-2 ${careersLoading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
                      >
                        {careersLoading ? "Submitting..." : "Apply Now"}{" "}
                        <Send size={14} />
                      </button>

                      {careersStatus && (
                        <span
                          className={`text-xs font-semibold ${careersStatus.type === "success" ? "text-green-400" : "text-[#ea222d]"}`}
                        >
                          {careersStatus.message}
                        </span>
                      )}
                    </div>
                  </form>
                )}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Structured Addresses and Phone Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Corporate Office Block */}
            <div className="bg-zinc-900/30 p-8 border border-white/5 rounded-2xl flex flex-col gap-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),_0_15px_35px_rgba(0,0,0,0.6)]">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#ea222d]/10 flex items-center justify-center border border-[#ea222d]/20">
                  <MapPin className="text-[#ea222d]" size={18} />
                </div>
                <div>
                  <span className="text-lg font-black text-white uppercase tracking-tight mb-2 block hover:text-[#ea222d] transition-colors">
                    Corporate Address
                  </span>
                  <a
                    href="https://maps.app.goo.gl/99Lm1dNHzxtWipVo8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-black text-white uppercase tracking-tight mb-2 block hover:text-[#ea222d] transition-colors"
                  >
                    Ahmedabad ↗
                  </a>
                  <p className="text-gray-400 text-xs md:text-sm font-light leading-relaxed">
                    The Leela House F-2, Mangalam Nirvana 2,
                    <br />
                    Behind Umiya Campus, Sola Bhagwat,
                    <br />
                    S.G. Highway, Ahmedabad – 380060,
                    <br />
                    Gujarat, India
                  </p>
                </div>
              </div>

              {/* Dynamic Map Frame Filtered Dark */}
              <div className="w-full h-[180px] rounded-xl overflow-hidden border border-white/10 opacity-70 hover:opacity-100 transition-opacity duration-300">
                <iframe
                  title="Leela Films Corporate Location"
                  src="https://maps.google.com/maps?q=Sola%20Bhagwat%20Ahmedabad&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{
                    border: 0,
                    filter:
                      "invert(90%) hue-rotate(180deg) grayscale(85%) contrast(95%)",
                  }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Registered Address Block */}
            <div className="bg-zinc-900/30 p-8 border border-white/5 rounded-2xl flex gap-4 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),_0_15px_35px_rgba(0,0,0,0.6)]">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                <MapPin className="text-gray-400" size={18} />
              </div>
              <div>
                <span className="text-lg font-black text-white uppercase tracking-tight mb-2 block hover:text-[#ea222d] transition-colors">
                  Registered Address
                </span>
                <h4 className="text-base font-black text-white uppercase tracking-tight mb-2">
                  Leela Films Pvt Ltd
                </h4>
                <p className="text-gray-400 text-xs md:text-sm font-light leading-relaxed">
                  C/23, Flat No. 502, Golds Green,
                  <br />
                  Yamuna Nagar, Oshiwara Andheri West,
                  <br />
                  Mumbai – 400053, Maharashtra, India
                </p>
              </div>
            </div>

            {/* Primary Phone Box */}
            <div className="bg-zinc-900/30 p-8 border border-white/5 rounded-2xl flex gap-4 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),_0_15px_35px_rgba(0,0,0,0.6)]">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#ea222d]/10 flex items-center justify-center border border-[#ea222d]/20">
                <Phone className="text-[#ea222d]" size={18} />
              </div>
              <div>
                <span className="text-[9px] font-black tracking-widest text-gray-500 uppercase block mb-1.5">
                  Contact Number
                </span>
                <h4 className="text-lg font-black text-white tracking-tight mb-1">
                  +91 99090 45481
                </h4>
                <p className="text-gray-400 text-xs font-light">
                  Available Mon-Sat for direct business development queries.
                </p>
              </div>
            </div>

            {/* Direct Email Address Frame */}
            <div className="p-8 border border-dashed border-white/10 rounded-2xl flex flex-col gap-2 bg-white/[0.01] shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)]">
              <span className="text-[9px] font-black tracking-widest text-[#ea222d] uppercase block">
                Direct Collaboration Inbox
              </span>
              <a
                href="mailto:info@leelafilms.com"
                className="text-xl md:text-2xl font-black text-white hover:text-[#ea222d] transition-colors uppercase tracking-tight"
              >
                info@leelafilms.com
              </a>
            </div>
          </motion.div>
        </div>

        {/* Group Infrastructure Grid Layout */}
        <div className="mt-24 pt-16 border-t border-white/5 max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <img
              src={OurGroupInfrastructure}
              alt="Infrastructure"
              className="w-[30px] h-[30px] object-contain"
            />
            <h3 className="text-xs md:text-sm font-black tracking-[0.2em] uppercase text-white">
              Our Group Infrastructure
            </h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
            {groupInfrastructure.map((item, index) => (
              <div
                key={index}
                className="p-4 bg-zinc-900/30 border border-white/5 rounded-sm flex flex-col items-center justify-center text-center group hover:border-[#ea222d]/40 hover:bg-[#ea222d]/2 transition-all duration-300 min-h-[105px]"
              >
                {item.logo && (
                  <img
                    src={item.logo}
                    alt={`${item.name} logo`}
                    className="h-8 max-w-full object-contain mb-2.5 opacity-85 group-hover:opacity-100 transition-opacity duration-300"
                  />
                )}
                <span className="text-[10px] md:text-xs font-bold text-gray-400 group-hover:text-white uppercase tracking-wider transition-colors duration-300">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Organized Clean Footer */}
        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-widest text-white/30 font-light">
          <p className="order-2 md:order-1">
            © {new Date().getFullYear()} Leela Films Pvt. Ltd. All rights
            reserved.
          </p>

          {/* Social Links Mapping */}
          <div className="flex items-center gap-4 order-1 md:order-2">
            {[
              {
                Icon: Facebook,
                url: "https://www.facebook.com/people/What-is-Leela/61590797759915/",
              },
              {
                Icon: Instagram,
                url: "https://www.instagram.com/whatisleela/",
              },
              { Icon: Linkedin, url: "https://linkedin.com" },
              { Icon: Twitter, url: "https://twitter.com" },
            ].map(({ Icon, url }, idx) => (
              <a
                key={idx}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-[#ea222d] hover:border-[#ea222d]/40 hover:scale-105 active:scale-95 transition-all bg-zinc-900/30"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>

          <div className="flex gap-6 order-3 font-medium">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#ea222d] transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
