"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  BadgeDollarSign, Handshake, MessageCircle,
  UsersRound, ClipboardCheck, Cpu, ArrowRight,
} from "lucide-react";
import data from "../data/data.json";

const sh = data.sectionHeaders.whyChoose;

const IconMap = {
  BadgeDollarSign,
  Handshake,
  MessageCircle,
  UsersRound,
  ClipboardCheck,
  Cpu
};

const values = data.whyChoose.values.map(val => ({
  ...val,
  icon: IconMap[val.icon]
}));



import Image from "next/image";

/* Border-sharing grid cell */
function FeatureCell({ icon: Icon, title, text, index }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.06, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      className="group relative flex flex-col gap-4 p-6 cursor-default overflow-hidden transition-all duration-300 hover:bg-[rgba(201,155,49,0.02)] border border-[#e8ecf0] rounded-2xl"
    >
      {/* Dynamic Cursor Spotlight Effect */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(280px circle at ${mousePos.x}px ${mousePos.y}px, rgba(201, 155, 49, 0.075), transparent 80%)`
        }}
      />

      {/* Gold top-sweep line on hover */}
      <span className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-brand-gold/0 via-brand-gold to-brand-gold/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />

      {/* Top row: icon */}
      <div className="flex items-center justify-between relative z-10">
        <div className="flex items-center justify-center w-10 h-10 rounded-xl border border-gray-200 bg-white text-text-slate shadow-[0_2px_8px_rgba(8,38,66,0.05)] transition-all duration-400 group-hover:bg-brand-gold group-hover:text-white group-hover:border-brand-gold group-hover:shadow-[0_6px_20px_rgba(201,155,49,0.25)]">
          <Icon size={18} strokeWidth={1.85} />
        </div>
      </div>

      {/* Title */}
      <h3 className="text-[14px] font-bold text-text-navy leading-snug tracking-tight group-hover:text-primary-navy transition-colors duration-300 relative z-10">
        {title}
      </h3>

      {/* Description */}
      <p className="text-[12.5px] text-text-slate leading-[1.65] font-sans flex-1 relative z-10">
        {text}
      </p>
    </motion.div>
  );
}

export default function WhyChoose() {
  return (
    <section id="about-us" className="bg-white">
      <div className="mx-auto w-full max-w-[1160px] px-6 lg:px-8 py-12 lg:py-16">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Premium Photo Section */}
          <div className="lg:col-span-5 w-full">
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-xl border border-gray-100">
              <Image 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=85" 
                alt="Beautiful property entrance" 
                fill 
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover" 
              />
            </div>
            {/* Trust micro-line under image */}
            <div className="flex items-center gap-2 mt-4 justify-center lg:justify-start">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
              <p className="text-[11px] text-text-slate font-medium">
                {sh.trustLine}
              </p>
            </div>
          </div>

          {/* Right Column: Copy + Values Grid */}
          <div className="lg:col-span-7 flex flex-col justify-start">
            {/* Header */}
            <div className="flex flex-col gap-4 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-[520px]"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-5 h-[1.5px] bg-brand-gold" />
                  <p className="text-[10px] font-black tracking-[0.28em] uppercase text-brand-gold">
                    {sh.badge}
                  </p>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold font-display text-text-navy leading-[1.1] tracking-tight">
                  {sh.heading1}{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-tagline-gold">
                    {sh.heading2}
                  </span>
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col gap-4"
              >
                <p className="text-[13.5px] text-text-slate leading-[1.7] font-sans">
                  {sh.description}
                </p>

                {/* Dual CTA row */}
                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    href="#contact"
                    className="group inline-flex items-center gap-2.5 h-10 px-5 rounded-[4px] font-bold text-[10px] uppercase tracking-wider transition-all duration-300 active:scale-[0.97] shadow-sm hover:shadow-md text-white bg-[var(--brand-gold)] hover:bg-[var(--tagline-gold)]"
                  >
                    {sh.primaryCta}
                    <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>

                  <Link
                    href="#contact"
                    className="group inline-flex items-center gap-2 h-10 px-5 rounded-[4px] font-bold text-[10px] uppercase tracking-wider border transition-all duration-300 active:scale-[0.97] border-[var(--primary-navy)] text-[var(--primary-navy)] hover:bg-[var(--primary-navy)] hover:text-white"
                  >
                    {sh.secondaryCta}
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((v, i) => (
                <FeatureCell key={v.title} {...v} index={i} />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
