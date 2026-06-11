"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Phone, CalendarDays, ShieldCheck, Clock, Layers } from "lucide-react";
import data from "../data/data.json";

const { ctaBar } = data;

const IconMap = { Clock, ShieldCheck, Layers };

export default function CtaBar() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section 
      id="cta-bar" 
      className="relative overflow-hidden bg-gradient-to-br from-[#031b31] via-[#04203a] to-[#021324] px-6 py-12 sm:py-16 lg:py-20 text-white"
    >
      {/* CtaBar animation classes (gradient-shine, gold-shimmer, btn-shimmer) are defined in app/globals.css */}

      {/* Premium thin gold top fading border line */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[var(--brand-gold)] to-transparent opacity-60" />

      {/* Premium thin gold bottom fading border line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[var(--brand-gold)] to-transparent opacity-60" />

      {/* Background Architectural Overlay - Cinematic Slow Zoom */}
      <motion.div 
        animate={{ scale: [1, 1.05, 1], rotate: [0, 0.5, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 w-full h-full mix-blend-overlay opacity-[0.06] pointer-events-none select-none"
      >
        <Image
          src={ctaBar.bgImage}
          alt={ctaBar.bgImageAlt}
          fill
          loading="lazy"
          className="object-cover object-center"
        />
      </motion.div>

      {/* Blueprint Grid dot overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none opacity-[0.03] z-0">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cta-dots" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="#ffffff" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-dots)" />
        </svg>
      </div>

      {/* Architectural blueprint lines overlay */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-[0.05]">
        <div className="absolute top-0 bottom-0 left-[20%] w-[1px] bg-gradient-to-b from-transparent via-white to-transparent" />
        <div className="absolute top-0 bottom-0 left-[80%] w-[1px] bg-gradient-to-b from-transparent via-white to-transparent" />
        <div className="absolute left-0 right-0 top-[30%] h-[1px] bg-gradient-to-r from-transparent via-white to-transparent" />
      </div>

      {/* Radial soft ambient glows */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[300px] bg-[var(--brand-gold)]/[0.05] rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-[#052946]/[0.6] rounded-full blur-[90px] pointer-events-none z-0" />

      <div className="relative mx-auto max-w-[1160px] z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Premium Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Tagline Capsule */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-5 border border-[var(--brand-gold)]/25 rounded-full px-3.5 py-1 bg-[var(--brand-gold)]/[0.03] shadow-sm"
            >
              <p className="text-[9px] font-black tracking-[0.25em] uppercase text-[var(--brand-gold)]">
                {ctaBar.sectionTag.replace(/^\d+\s*\/\s*/, "")}
              </p>
            </motion.div>

            {/* Editorial Header */}
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[30px] sm:text-[38px] lg:text-[44px] font-display font-bold leading-[1.12] tracking-tight text-white"
            >
              {ctaBar.heading1} <br className="hidden sm:inline" />
              <span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#c99b31] via-[#f1cd7c] to-[#c99b31] animated-gradient-text"
                style={{
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                }}
              >
                {ctaBar.heading2}
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[13.5px] sm:text-[14.5px] font-sans font-medium text-white/75 mt-4 leading-relaxed max-w-[580px]"
            >
              {ctaBar.description}
            </motion.p>

            {/* Trust Grid */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6 pt-6 border-t border-white/10 w-full"
            >
              {ctaBar.trustItems.map((item, i) => {
                const Icon = IconMap[item.icon];
                return (
                  <div
                    key={item.title}
                    className={`group/item flex items-start gap-3.5 transition-all duration-300${i > 0 ? " sm:border-l sm:border-white/10 sm:pl-6" : ""}`}
                  >
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[var(--brand-gold)]/10 border border-[var(--brand-gold)]/20 text-[var(--brand-gold)] mt-0.5 transition-all duration-300 group-hover/item:bg-[var(--brand-gold)]/20 group-hover/item:border-[var(--brand-gold)]/40 group-hover/item:scale-105">
                      {Icon && <Icon size={14} className="transition-transform duration-300 group-hover/item:rotate-12" />}
                    </div>
                    <div>
                      <h4 className="text-[11.5px] font-bold text-white tracking-wide uppercase transition-colors duration-300 group-hover/item:text-[var(--brand-gold)]">{item.title}</h4>
                      <p className="text-[10.5px] text-white/50 font-medium mt-0.5 leading-normal transition-colors duration-300 group-hover/item:text-white/60">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </motion.div>

          </div>

          {/* Right Column: Floating Glass Action Card */}
          <div className="lg:col-span-5 relative">
            
            {/* Ambient gold backing glow */}
            <div className="absolute inset-0 bg-[var(--brand-gold)]/[0.03] rounded-2xl blur-[35px] pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="group/card relative overflow-hidden backdrop-blur-xl bg-white/[0.02] border border-white/10 hover:border-[var(--brand-gold)]/30 rounded-2xl p-8 lg:p-10 shadow-[0_20px_50px_rgba(3,27,49,0.4)] transition-all duration-300"
            >
              {/* Dynamic Cursor Spotlight Effect inside Card */}
              <div
                className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
                style={{
                  background: `radial-gradient(280px circle at ${mousePos.x}px ${mousePos.y}px, rgba(201, 155, 49, 0.08), transparent 80%)`
                }}
              />

              {/* Decorative Gold Corners */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[var(--brand-gold)]/60 rounded-tl-2xl z-10" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[var(--brand-gold)]/60 rounded-tr-2xl z-10" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[var(--brand-gold)]/60 rounded-bl-2xl z-10" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[var(--brand-gold)]/60 rounded-br-2xl z-10" />

              <div className="relative z-10 flex flex-col items-start">
                
                {/* Small indicator pill */}
                <div className="inline-flex items-center gap-1.5 mb-5 border border-white/10 rounded-full px-3 py-1 bg-white/[0.02]">
                  <span className="text-[9px] font-bold tracking-widest uppercase text-white/60">{ctaBar.cardTag}</span>
                </div>

                <h3 className="text-[18px] sm:text-[20px] font-display font-bold text-white leading-tight">
                  {ctaBar.cardHeading}
                </h3>
                <p className="text-[12.5px] text-white/60 mt-2 leading-relaxed font-sans">
                  {ctaBar.cardDesc}
                </p>

                {/* Primary CTA (Schedule) */}
                <Link
                  href={ctaBar.primaryCtaHref}
                  className="group/btn btn-shimmer relative flex h-[46px] items-center justify-center gap-2.5 bg-[var(--brand-gold)] border border-[var(--brand-gold)] px-6 text-[10.5px] font-bold uppercase tracking-wider text-white hover:bg-white hover:!text-[#031b31] hover:border-white active:scale-[0.98] rounded-[4px] shadow-lg shadow-black/10 transition-all duration-300 w-full mt-6"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {ctaBar.primaryCta}
                    <CalendarDays size={12} className="transition-transform duration-300 group-hover/btn:scale-110" />
                  </span>
                </Link>

                {/* Secondary CTA (Phone) */}
                <Link
                  href={ctaBar.secondaryCtaHref}
                  className="group/phone flex h-[46px] items-center justify-center gap-2.5 border border-white/15 hover:border-[var(--brand-gold)]/40 bg-transparent hover:bg-white/[0.04] px-6 text-[10.5px] font-bold uppercase tracking-wider text-white transition-all duration-300 active:scale-[0.98] rounded-[4px] w-full mt-3 shadow-sm hover:shadow-[0_4px_20px_rgba(201,155,49,0.1)]"
                >
                  <Phone size={12} className="transition-transform duration-300 group-hover/phone:scale-110 text-[var(--brand-gold)]" />
                  {ctaBar.secondaryCta}
                </Link>

                <div className="flex items-center justify-center gap-2 mt-5 w-full text-[10px] text-white/45 font-medium">
                  <span>{ctaBar.disclaimer1}</span>
                  <span>•</span>
                  <span>{ctaBar.disclaimer2}</span>
                </div>

              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
