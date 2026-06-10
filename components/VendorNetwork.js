"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Wrench, Trees, Paintbrush, ShieldCheck, Check,
  ArrowRight, ShieldAlert, Sparkles, Clock, Award, Shield
} from "lucide-react";

import data from "../data/data.json";

const sh = data.sectionHeaders.vendorNetwork;

const IconMap = {
  Wrench,
  Trees,
  Paintbrush,
  ShieldCheck
};

const sections = data.vendorNetwork.sections.map(section => ({
  ...section,
  icon: IconMap[section.icon]
}));

export default function VendorNetwork() {
  const { coordinateLabels, scopeTitle, verifiedBadge, footerQ, footerSub, footerPrimaryCta, footerSecondaryCta } = data.vendorNetwork;
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".vendor-scroll-item");
      let activeIdx = 0;
      let minDistance = Infinity;

      elements.forEach((el, idx) => {
        const rect = el.getBoundingClientRect();
        // Measure distance from the element's center to the viewport center
        const distance = Math.abs(rect.top + rect.height / 2 - window.innerHeight / 2);
        if (distance < minDistance) {
          minDistance = distance;
          activeIdx = idx;
        }
      });

      setActiveSection(activeIdx);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once on mount to determine initial active section
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="vendor-network"
      className="relative text-white py-24 lg:py-32 border-b border-white/[0.04]"
      style={{ background: "radial-gradient(ellipse at 50% 0%, #052946 0%, #031b31 65%, #020c18 100%)" }}
    >
      {/* Modern High-Tech Architectural Grid Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {/* Custom SVG Grid Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="bg-grid-lines" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="0.75" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#bg-grid-lines)" />
        </svg>

        {/* Diagonal Light Beam Mesh */}
        <div 
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: "repeating-linear-gradient(45deg, rgba(201,155,49,0.15) 0px, rgba(201,155,49,0.15) 2px, transparent 2px, transparent 40px)"
          }}
        />

        {/* Glow Masking (fades grid toward edges for premium vignette look) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#020c18_95%)]" />

        {/* Golden glowing coordinate crosses at grid intersections */}
        <div className="absolute top-[18%] left-[12%] text-brand-gold/25 font-display text-[10px] tracking-widest pointer-events-none select-none">{coordinateLabels[0]}</div>
        <div className="absolute top-[42%] right-[18%] text-brand-gold/25 font-display text-[10px] tracking-widest pointer-events-none select-none">{coordinateLabels[1]}</div>
        <div className="absolute bottom-[35%] left-[28%] text-brand-gold/25 font-display text-[10px] tracking-widest pointer-events-none select-none">{coordinateLabels[2]}</div>
        <div className="absolute bottom-[12%] right-[8%] text-brand-gold/25 font-display text-[10px] tracking-widest pointer-events-none select-none">{coordinateLabels[3]}</div>
      </div>

      {/* Radial soft gold and sapphire ambient glows */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-brand-gold/[0.035] rounded-full blur-[140px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#052946]/[0.25] rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 mx-auto w-full max-w-[1160px] px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-column sticky scroll layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* ── Left Column: Scrollable Content (7 Cols) ── */}
          <div className="lg:col-span-7 flex flex-col">
            
            {/* Intro Header */}
            <div className="mb-14 sm:mb-20 max-w-[580px]">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-5 h-[1.5px] bg-brand-gold" />
                <p className="text-[10px] font-black tracking-[0.28em] uppercase text-brand-gold">
                  {sh.badge}
                </p>
              </div>
              <h2 className="text-[28px] xs:text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white leading-[1.1] tracking-tight">
                {sh.heading1}{" "}
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-tagline-gold">
                  {sh.heading2}
                </span>
              </h2>
              <p className="text-[13px] sm:text-[14px] md:text-[14.5px] text-white/65 leading-relaxed mt-4 sm:mt-6 font-sans">
                {sh.description}
              </p>
            </div>

            {/* Scrollable Divisions Wrapper with timeline tracker */}
            <div className="relative pl-6 xs:pl-8 lg:pl-10">
              
              {/* Timeline Tracker line */}
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-white/10">
                <div
                  className="w-full bg-brand-gold transition-all duration-500 ease-out shadow-[0_0_8px_var(--brand-gold)]"
                  style={{
                    height: `${(activeSection / (sections.length - 1)) * 100}%`,
                  }}
                />
                
                {/* Visual indicator nodes/dots */}
                {sections.map((_, idx) => (
                  <div
                    key={idx}
                    className={`absolute left-1/2 -translate-x-1/2 w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full border-2 transition-all duration-500 ${
                      activeSection >= idx
                        ? "bg-brand-gold border-brand-gold shadow-[0_0_8px_rgba(201,155,49,0.7)] scale-110"
                        : "bg-midnight-navy border-white/25 scale-90"
                    }`}
                    style={{ top: `${idx * (100 / (sections.length - 1))}%` }}
                  />
                ))}
              </div>

              {/* Divisions List */}
              <div className="flex flex-col gap-20 sm:gap-24 lg:gap-32 pb-12">
                {sections.map((sec, idx) => {
                  const Icon = sec.icon;
                  const isActive = activeSection === idx;

                  return (
                    <div
                      key={sec.title}
                      data-index={idx}
                      className={`vendor-scroll-item relative flex flex-col gap-4 sm:gap-5 transition-all duration-500 origin-left ${
                        isActive ? "opacity-100 scale-100" : "opacity-25 hover:opacity-45 scale-[0.98] cursor-pointer"
                      }`}
                    >
                      {/* Tag + Icon row */}
                      <div className="flex items-center gap-3 sm:gap-4">
                        <span className="text-[10px] sm:text-[11px] font-bold text-brand-gold uppercase tracking-[0.2em] font-sans">
                          {sec.tag}
                        </span>
                        <span className="h-[1px] w-8 sm:w-12 bg-white/10" />
                        <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg border flex items-center justify-center transition-all duration-300 ${
                          isActive 
                            ? "bg-brand-gold text-midnight-navy border-brand-gold shadow-[0_0_15px_rgba(201,155,49,0.3)]" 
                            : "bg-white/[0.03] text-white/60 border-white/10"
                        }`}>
                          <Icon size={12} className="sm:w-3.5 sm:h-3.5" strokeWidth={2.2} />
                        </div>
                      </div>

                      {/* Title & Desc */}
                      <div>
                        <h3 className="text-lg xs:text-xl sm:text-[22px] md:text-[26px] font-bold text-white font-display tracking-tight transition-colors duration-300">
                          {sec.title}
                        </h3>
                        <p className="text-[10px] font-black tracking-widest text-brand-gold/80 uppercase mt-0.5 font-sans">
                          {sec.subtitle}
                        </p>
                        <p className="text-[12.5px] sm:text-[13.5px] text-white/70 mt-2.5 sm:mt-3.5 leading-relaxed font-sans">
                          {sec.desc}
                        </p>
                      </div>

                      {/* Mobile Only Image: Hidden on Desktop */}
                      <div className="block lg:hidden relative w-full aspect-[16/10] sm:aspect-video rounded-xl overflow-hidden border border-white/10 shadow-sm my-2">
                        <Image
                          src={sec.image}
                          alt={sec.title}
                          fill
                          sizes="100vw"
                          className="object-cover"
                        />
                        <div className="absolute top-3 right-3 bg-midnight-navy/90 border border-white/10 px-2.5 py-1 rounded-full text-[9px] font-bold text-brand-gold uppercase tracking-wider">
                          {sec.badge}
                        </div>
                      </div>

                      {/* Checklist of Services */}
                      <div className={`flex flex-col gap-3 p-4 xs:p-5 lg:p-6 rounded-xl border transition-all duration-500 backdrop-blur-sm ${
                        isActive 
                          ? "bg-white/[0.03] border-white/[0.08] shadow-[0_8px_30px_rgba(255,255,255,0.01)]" 
                          : "bg-white/[0.01] border-white/[0.04]"
                      }`}>
                        <p className="text-[9px] sm:text-[10px] font-black uppercase text-white/50 tracking-widest mb-1">
                          {scopeTitle}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                          {sec.services.map((serv, sIdx) => (
                            <div key={sIdx} className="flex items-start gap-2.5">
                              <span className="flex items-center justify-center w-4 h-4 rounded-full bg-brand-gold/15 text-brand-gold mt-0.5 shrink-0">
                                <Check size={10} strokeWidth={3.5} />
                              </span>
                              <span className="text-[12px] font-semibold text-white/90 leading-tight font-sans">
                                {serv}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Stat / SLA indicator */}
                      <div className="flex items-center gap-2">
                        <Clock size={13} className="text-brand-gold" />
                        <span className="text-[12px] font-semibold text-white/80">
                          {sec.statusLabel}: <span className="text-brand-gold font-bold">{sec.statusVal}</span>
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>

          {/* ── Right Column: Sticky Visual Viewer (5 Cols) ── */}
          <div className="lg:col-span-5 sticky top-28 hidden lg:block w-full h-[520px]">
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/[0.08] shadow-[0_24px_50px_rgba(0,0,0,0.4)] bg-white/[0.02] backdrop-blur-md">
              
              {/* Stack of cross-fading images using AnimatePresence in parallel */}
              <AnimatePresence>
                {sections.map((sec, idx) => {
                  const isActive = activeSection === idx;
                  if (!isActive) return null;

                  return (
                    <motion.div
                      key={sec.title}
                      initial={{ opacity: 0, scale: 1.05, y: 12 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: -12 }}
                      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute inset-0 w-full h-full"
                    >
                      <Image
                        src={sec.image}
                        alt={sec.title}
                        fill
                        priority={idx === 0}
                        sizes="(min-width: 1024px) 40vw"
                        className="object-cover"
                      />
                      {/* Luxury gradient vignette overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />
                      
                      {/* Floating Top Pill */}
                      <div className="absolute top-5 left-5">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-midnight-navy/95 border border-white/[0.1] text-brand-gold text-[9px] font-black tracking-wider uppercase backdrop-blur-sm shadow-md">
                          <ShieldCheck size={10} className="text-brand-gold" />
                          {verifiedBadge}
                        </span>
                      </div>

                      {/* Floating Bottom Pill */}
                      <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-4">
                        <span className="inline-flex px-3 py-1 rounded bg-black/60 text-white text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm">
                          {sec.badge}
                        </span>
                        <span className="inline-flex px-3 py-1 rounded bg-brand-gold text-midnight-navy text-[10px] font-black uppercase tracking-wider shadow-md">
                          {sec.statusVal}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>

              {/* Gold decorative inset border corner frames */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-[2.5px] border-l-[2.5px] border-brand-gold/60 pointer-events-none rounded-tl-2xl" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-[2.5px] border-r-[2.5px] border-brand-gold/60 pointer-events-none rounded-tr-2xl" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-[2.5px] border-l-[2.5px] border-brand-gold/60 pointer-events-none rounded-bl-2xl" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-[2.5px] border-r-[2.5px] border-brand-gold/60 pointer-events-none rounded-br-2xl" />
            </div>
          </div>

        </div>

        {/* ── Contractor Network CTA Footer ── */}
        <div className="mt-20 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold flex-shrink-0 animate-pulse">
              <ShieldAlert size={16} />
            </div>
            <div>
              <p className="text-[13px] sm:text-[13.5px] font-bold text-white">{footerQ}</p>
              <p className="text-[11px] sm:text-[11.5px] text-white/55 font-sans">{footerSub}</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            <Link
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 h-11 px-6 rounded-[4px] font-bold text-[11px] uppercase tracking-wider transition-all duration-300 active:scale-[0.97] w-full sm:w-auto"
              style={{ backgroundColor: "var(--brand-gold)", color: "#ffffff" }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = "var(--tagline-gold)"}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = "var(--brand-gold)"}
            >
              {footerPrimaryCta}
              <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-1 text-[11px] font-bold uppercase tracking-wider text-white/60 hover:text-brand-gold transition-colors duration-300 w-full sm:w-auto py-2 text-center"
            >
              {footerSecondaryCta}
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
