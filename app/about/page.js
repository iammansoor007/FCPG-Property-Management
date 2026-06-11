"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  UsersRound,
  MessageCircle,
  ClipboardCheck,
  BadgeDollarSign,
  Handshake,
  ArrowRight,
  Mail,
  ArrowDown,
  Building2,
  TrendingUp,
  Cpu,
  Check,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

import { LinkedinIcon } from "@/components/Icons";
import data from "@/data/data.json";
import CtaBar from "@/components/CtaBar";
import ContactForm from "@/components/ContactForm";

const { aboutPage } = data;

const IconMap = {
  Award,
  UsersRound,
  MessageCircle,
  ClipboardCheck,
  BadgeDollarSign,
  Handshake,
  Building2,
  TrendingUp,
  Cpu,
  Check
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

// Spotlight hover card for the 6 Core Pillars
function PillarCard({ icon: IconName, title, text, index }) {
  const Icon = IconMap[IconName] || Award;
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // Determine borders based on grid position for a border-sharing layout (3 cols desktop, 1 col mobile)
  const col = index % 3;
  const row = Math.floor(index / 3);
  const isLastCol = col === 2;
  const isLastRow = row === 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.06, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      className={`group relative flex flex-col gap-4 sm:gap-5 p-5 sm:p-8 cursor-default overflow-hidden bg-white transition-all duration-300 hover:bg-[rgba(201,155,49,0.02)]
        ${!isLastCol ? "md:border-r border-[rgba(201,155,49,0.18)]" : ""}
        ${!isLastRow ? "md:border-b border-[rgba(201,155,49,0.18)]" : ""}
        border-b md:border-b-0 border-[rgba(201,155,49,0.12)] last:border-b-0
      `}
    >
      {/* Spotlight cursor effect */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(280px circle at ${mousePos.x}px ${mousePos.y}px, rgba(201, 155, 49, 0.08), transparent 80%)`
        }}
      />

      {/* Gold top hover accent line */}
      <span className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-brand-gold/0 via-brand-gold to-brand-gold/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />

      {/* Card Header (Index + Icon) */}
      <div className="flex items-center justify-between relative z-10">
        <span className="text-[10.5px] font-black tracking-[0.2em] text-brand-gold/60 group-hover:text-brand-gold transition-colors duration-300">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="flex items-center justify-center w-11 h-11 rounded-xl border border-gray-200 bg-white text-text-slate shadow-[0_2px_8px_rgba(8,38,66,0.05)] transition-all duration-400 group-hover:bg-brand-gold group-hover:text-white group-hover:border-brand-gold group-hover:shadow-[0_6px_20px_rgba(201,155,49,0.25)]">
          <Icon size={19} strokeWidth={1.85} />
        </div>
      </div>

      {/* Content */}
      <h3 className="text-[15px] font-bold text-text-navy leading-snug tracking-tight group-hover:text-primary-navy transition-colors duration-300 relative z-10">
        {title}
      </h3>
      <p className="text-[13px] text-text-slate leading-[1.72] font-sans flex-1 relative z-10">
        {text}
      </p>
    </motion.div>
  );
}

// Parallax 3D tilt component for interactive hover depth
function ParallaxTilt({ children, className }) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5; // -0.5 to 0.5
    setCoords({ x, y });
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setCoords({ x: 0, y: 0 });
      }}
      style={{
        perspective: 1200,
        transformStyle: "preserve-3d"
      }}
      animate={{
        rotateX: isHovered ? -coords.y * 10 : 0,
        rotateY: isHovered ? coords.x * 10 : 0,
      }}
      transition={{ type: "spring", stiffness: 150, damping: 18 }}
      className={className}
    >
      {typeof children === "function" ? children(isHovered, coords) : children}
    </motion.div>
  );
}

export default function AboutPage() {
  const { hero, philosophy, pillars, story, leadership, stats } = aboutPage;

  const historySectionRef = useRef(null);
  const timelineRef = useRef(null);

  // Helper to scroll smoothly to the philosophy section
  const handleScrollDown = () => {
    const section = document.getElementById("about-philosophy");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const { scrollYProgress } = useScroll({
    target: historySectionRef,
    offset: ["start end", "end start"]
  });

  const { scrollYProgress: timelineScroll } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const watermarkY = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const lineScaleY = useTransform(timelineScroll, [0, 1], [0, 1]);

  return (
    <main className="min-h-screen bg-white text-[#072642]">
      {/* ── HERO SECTION ── */}
      <section className="relative min-h-[440px] lg:min-h-[520px] overflow-hidden bg-[var(--midnight-navy)] flex items-center text-white">
        {/* Background Image with slow zoom */}
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={hero.bgImage}
            alt={hero.bgImageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--midnight-navy)] via-[var(--midnight-navy)]/90 to-[var(--midnight-navy)]/25 md:from-[var(--midnight-navy)] md:via-[var(--midnight-navy)]/80 md:to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--midnight-navy)]/50 via-transparent to-transparent z-10" />

        {/* Grid dots matrix & coordinates overlay */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-10">
          <svg className="absolute inset-0 w-full h-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="about-grid-dots" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="#ffffff" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#about-grid-dots)" />
          </svg>
          {/* Blueprint style details */}
          <div className="absolute top-6 right-8 text-[9px] font-mono text-[var(--brand-gold)]/35 tracking-widest">{hero.coordLng}</div>
          <div className="absolute bottom-16 right-8 text-[9px] font-mono text-[var(--brand-gold)]/35 tracking-widest">{hero.coordLat}</div>
          <div className="absolute bottom-6 left-8 text-[9px] font-mono text-[var(--brand-gold)]/20 tracking-wider hidden md:block">BLUEPRINT_REF: ABOUT_HERO_SC // ACTIVE</div>
        </div>

        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/4 w-[350px] h-[350px] bg-[var(--brand-gold)]/[0.06] rounded-full blur-[90px] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10" />

        {/* Bottom accent gold line */}
        <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[var(--brand-gold)] to-transparent z-20 opacity-70" />

        <div className="relative mx-auto w-full max-w-[1160px] px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 z-20">
          <motion.div
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.12 } } }}
            className="max-w-[620px]"
          >
            {/* Tagline */}
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 mb-4">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--brand-gold)] animate-pulse" />
              <span className="text-[11px] md:text-[12px] font-semibold uppercase tracking-[0.18em] text-[var(--tagline-gold)]">
                {hero.tagline}
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeUp}
              className="text-[28px] sm:text-[48px] lg:text-[58px] font-display font-bold leading-[1.06] tracking-tight text-white"
            >
              {hero.heading1}
              <br />
              {hero.heading2}
              <br />
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: "linear-gradient(90deg, #c99b31 0%, #f1cd7c 50%, #c99b31 100%)",
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                }}
              >
                {hero.heading3}
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="mt-4 sm:mt-5 max-w-[540px] text-[13px] sm:text-[14px] md:text-[15.5px] font-normal leading-[1.65] text-white/80"
            >
              {hero.description}
            </motion.p>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 cursor-pointer opacity-70 hover:opacity-100 transition-opacity duration-300" onClick={handleScrollDown}>
          <span className="text-[9px] font-bold uppercase tracking-widest text-white/50">Scroll Details</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex items-center justify-center w-7 h-7 rounded-full border border-white/20 bg-white/5 text-[var(--brand-gold)]"
          >
            <ArrowDown size={12} strokeWidth={2.5} />
          </motion.div>
        </div>
      </section>

      {/* ── CORE PHILOSOPHY & PILLARS ── */}
      <section id="about-philosophy" className="bg-white scroll-mt-24">
        <div className="mx-auto w-full max-w-[1160px] px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
          {/* Header */}
          <div className="max-w-[650px] mb-14">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="flex items-center gap-2 mb-4"
            >
              <span className="w-5 h-[1.5px] bg-brand-gold" />
              <p className="text-[10px] font-black tracking-[0.28em] uppercase text-brand-gold">
                {philosophy.badge}
              </p>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.06 }}
              className="text-2xl sm:text-3xl md:text-4.5xl font-bold font-display text-text-navy leading-tight tracking-tight"
            >
              {philosophy.heading}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.12 }}
              className="mt-4 text-[13px] sm:text-[14px] text-text-slate leading-[1.72]"
            >
              {philosophy.description}
            </motion.p>
          </div>

          {/* Core Pillars Sharing Grid */}
          <div className="border border-[rgba(201,155,49,0.18)] rounded-xl overflow-hidden grid grid-cols-1 md:grid-cols-3 bg-white shadow-sm">
            {pillars.map((pillar, index) => (
              <PillarCard
                key={pillar.title}
                index={index}
                icon={pillar.icon}
                title={pillar.title}
                text={pillar.text}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── INTERACTIVE SCROLLING TIMELINE / HISTORY ── */}
      <section ref={historySectionRef} className="bg-light-gray relative overflow-hidden border-y border-[rgba(201,155,49,0.12)] py-16 lg:py-24">
        {/* Scrolling watermark background text for parallax depth */}
        <motion.div 
          style={{ y: watermarkY }}
          className="absolute right-[-8%] top-[12%] text-[15vw] font-display font-black text-brand-gold/[0.015] pointer-events-none select-none tracking-tighter"
        >
          ESTABLISHED 2009
        </motion.div>

        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 1], [60, -60]) }}
          className="absolute left-[-5%] bottom-[10%] text-[12vw] font-display font-black text-brand-gold/[0.015] pointer-events-none select-none tracking-tighter"
        >
          FIRST CHOICE
        </motion.div>

        {/* Soft blueprints background pattern - scroll parallax */}
        <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="story-dots" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.2" fill="#031b31" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#story-dots)" />
          </svg>
        </motion.div>

        <div className="mx-auto w-full max-w-[1160px] px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="flex flex-col gap-4 mb-16 max-w-[620px]">
            <div className="flex items-center gap-2">
              <span className="w-5 h-[1.5px] bg-brand-gold" />
              <p className="text-[10px] font-black tracking-[0.28em] uppercase text-brand-gold">
                {story.badge}
              </p>
            </div>

            <h2 className="text-3xl md:text-4.5xl font-bold font-display text-text-navy leading-[1.12] tracking-tight">
              {story.heading1}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-tagline-gold">
                {story.heading2}
              </span>
            </h2>

            <p className="text-[14px] text-text-slate leading-[1.7] font-sans">
              {story.description}
            </p>
          </div>

          {/* Timeline Container */}
          <div ref={timelineRef} className="relative">
            {/* The vertical timeline track line (centered on desktop, left-aligned on mobile) */}
            {/* Background track line */}
            <div className="absolute left-[12px] sm:left-[15px] lg:left-1/2 lg:-translate-x-1/2 top-4 bottom-4 w-[2px] bg-gray-200 pointer-events-none" />

            {/* Active Drawing Progress Line */}
            <motion.div 
              className="absolute left-[12px] sm:left-[15px] lg:left-1/2 lg:-translate-x-1/2 top-4 bottom-4 w-[2px] bg-brand-gold origin-top pointer-events-none"
              style={{ scaleY: lineScaleY }}
            />

            <div className="flex flex-col">
              {story.milestones.map((milestone, index) => {
                const Icon = IconMap[milestone.icon] || Award;
                const isEven = index % 2 === 1;

                return (
                  <div key={milestone.year} className="relative pb-16 lg:pb-24 last:pb-0 group overflow-hidden">
                    {/* Centered Timeline Node (Desktop only - scales, rotates, and lights up into view) */}
                    <motion.div
                      initial={{ scale: 0, rotate: -30, backgroundColor: "#ffffff", borderColor: "#e5e7eb", color: "#9ca3af" }}
                      whileInView={{ scale: 1, rotate: 0, backgroundColor: "#ffffff", borderColor: "#c99b31", color: "#c99b31" }}
                      viewport={{ once: false, margin: "-180px 0px -180px 0px" }}
                      transition={{ type: "spring", stiffness: 140, damping: 15 }}
                      className="absolute left-1/2 -translate-x-1/2 top-4 w-9 h-9 rounded-full border-2 z-10 hidden lg:flex items-center justify-center shadow-[0_0_12px_rgba(8,38,66,0.05)] hover:bg-brand-gold hover:text-white hover:border-brand-gold transition-all duration-300"
                    >
                      <Icon size={14} strokeWidth={2.2} />
                    </motion.div>

                    {/* Mobile Left Timeline Node (Scales on scroll) */}
                    <motion.div
                      initial={{ scale: 0, backgroundColor: "#ffffff", borderColor: "#e5e7eb", color: "#9ca3af" }}
                      whileInView={{ scale: 1, backgroundColor: "#ffffff", borderColor: "#c99b31", color: "#c99b31" }}
                      viewport={{ once: false, margin: "-120px 0px -120px 0px" }}
                      transition={{ type: "spring", stiffness: 180, damping: 12 }}
                      className="absolute left-[-4px] sm:left-[-1px] top-1.5 w-8 h-8 rounded-full border-2 z-10 flex lg:hidden items-center justify-center shadow-sm hover:bg-brand-gold hover:text-white hover:border-brand-gold transition-all duration-300"
                    >
                      <Icon size={13} strokeWidth={2.2} />
                    </motion.div>

                    <div className="pl-8 sm:pl-12 lg:pl-0 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                      {/* Text details card (slides in from left or right) */}
                      <motion.div
                        initial={{ opacity: 0, x: isEven ? 45 : -45 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-120px" }}
                        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                        className={`lg:col-span-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}
                      >
                        <ParallaxTilt className="flex flex-col gap-4 p-4 sm:p-8 rounded-2xl border border-gray-100 bg-white shadow-[0_4px_20px_rgba(8,38,66,0.04)] relative overflow-hidden transition-colors duration-500 hover:border-brand-gold/25 group">
                          {(isHovered, coords) => (
                            <>
                              {/* Huge watermark year inside the card, floating in 3D */}
                              <motion.div 
                                animate={{
                                  x: isHovered ? coords.x * -20 : 0,
                                  y: isHovered ? coords.y * -20 : 0,
                                  scale: isHovered ? 1.05 : 1
                                }}
                                transition={{ type: "spring", stiffness: 150, damping: 18 }}
                                className="absolute -bottom-6 -right-6 text-[90px] font-display font-black text-brand-gold/[0.04] pointer-events-none select-none tracking-tighter group-hover:text-brand-gold/[0.07] transition-colors duration-300"
                              >
                                {milestone.year}
                              </motion.div>

                              <div className="flex items-center justify-between flex-wrap gap-2 relative z-10">
                                <span className="text-[26px] font-display font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-tagline-gold">
                                  {milestone.year}
                                </span>
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[rgba(201,155,49,0.08)] border border-[rgba(201,155,49,0.18)] text-[9px] font-black text-[var(--brand-gold)] uppercase tracking-widest">
                                  {milestone.highlight}
                                </span>
                              </div>

                              <h3 className="text-[16px] font-bold text-text-navy tracking-tight relative z-10 uppercase">
                                {milestone.title}
                              </h3>

                              <p className="text-[13px] text-text-slate leading-[1.7] font-sans relative z-10">
                                {milestone.desc}
                              </p>

                              {/* Achievements Bullets with staggered delays */}
                              {milestone.achievements && (
                                <ul className="mt-2 space-y-2.5 text-[12.5px] text-text-slate relative z-10 border-t border-gray-100 pt-4">
                                  {milestone.achievements.map((ach, bulletIdx) => (
                                    <motion.li
                                      key={ach}
                                      initial={{ opacity: 0, x: -8 }}
                                      whileInView={{ opacity: 1, x: 0 }}
                                      viewport={{ once: true }}
                                      transition={{ duration: 0.4, delay: 0.15 + bulletIdx * 0.08 }}
                                      className="flex items-start gap-2.5"
                                    >
                                      <span className="flex-shrink-0 flex items-center justify-center w-4 h-4 rounded-full bg-[rgba(201,155,49,0.08)] text-[var(--brand-gold)] mt-0.5 shadow-sm">
                                        <Check size={9} strokeWidth={3} />
                                      </span>
                                      <span>{ach}</span>
                                    </motion.li>
                                  ))}
                                </ul>
                              )}
                            </>
                          )}
                        </ParallaxTilt>
                      </motion.div>

                      {/* Photo card (slides in from opposite side) */}
                      <motion.div
                        initial={{ opacity: 0, x: isEven ? -45 : 45 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-120px" }}
                        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                        className={`lg:col-span-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}
                      >
                        <ParallaxTilt className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-gray-100 shadow-[0_6px_25px_rgba(8,38,66,0.05)] bg-white group">
                          {(isHovered, coords) => (
                            <>
                              {/* Inner gold frame shifting in 3D */}
                              <motion.div 
                                style={{ transformStyle: "preserve-3d", zIndex: 20 }}
                                animate={{
                                  x: isHovered ? coords.x * 12 : 0,
                                  y: isHovered ? coords.y * 12 : 0,
                                }}
                                transition={{ type: "spring", stiffness: 180, damping: 20 }}
                                className="absolute inset-2.5 border border-brand-gold/15 group-hover:border-brand-gold/25 transition-colors duration-500 z-20 pointer-events-none rounded-xl" 
                              />
                              
                              {/* Blueprint grid dots overlay */}
                              <motion.div 
                                style={{ transformStyle: "preserve-3d", zIndex: 10 }}
                                animate={{
                                  x: isHovered ? -coords.x * 5 : 0,
                                  y: isHovered ? -coords.y * 5 : 0,
                                  opacity: isHovered ? 0.05 : 0.01
                                }}
                                className="absolute inset-0 bg-white pointer-events-none z-10"
                                style={{
                                  backgroundImage: `radial-gradient(circle, #c99b31 1px, transparent 1px)`,
                                  backgroundSize: "20px 20px"
                                }}
                              />

                              {/* Active Image shifting in opposite direction */}
                              <motion.div
                                className="absolute inset-0 w-full h-full"
                                style={{ transformStyle: "preserve-3d" }}
                                animate={{
                                  scale: isHovered ? 1.04 : 1,
                                  x: isHovered ? coords.x * -6 : 0,
                                  y: isHovered ? coords.y * -6 : 0,
                                }}
                                transition={{ type: "spring", stiffness: 200, damping: 22 }}
                              >
                                <Image
                                  src={milestone.image}
                                  alt={milestone.imageAlt}
                                  fill
                                  loading="lazy"
                                  sizes="(max-width: 1024px) 100vw, 40vw"
                                  className="object-cover"
                                />
                              </motion.div>
                            </>
                          )}
                        </ParallaxTilt>
                      </motion.div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── EXECUTIVE LEADERSHIP ── */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1160px] px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          {/* Header */}
          <div className="text-center max-w-[620px] mx-auto mb-16">
            <div className="inline-flex items-center gap-2 mb-4 justify-center">
              <span className="w-5 h-[1.5px] bg-brand-gold" />
              <p className="text-[10px] font-black tracking-[0.28em] uppercase text-brand-gold">
                {leadership.badge}
              </p>
              <span className="w-5 h-[1.5px] bg-brand-gold" />
            </div>
            <h2 className="text-3xl md:text-4.5xl font-bold font-display text-text-navy leading-tight tracking-tight">
              {leadership.heading}
            </h2>
            <p className="mt-4 text-[14px] text-text-slate leading-[1.7]">
              {leadership.description}
            </p>
          </div>

          {/* Members profiles grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.members.map((member, index) => {
              // Extract credential letters for the card pill badge (e.g. CMCA, AMS, CPA)
              const nameParts = member.name.split(", ");
              const credentialLabel = nameParts[1] || "";
              
              return (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group flex flex-col bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:border-brand-gold/25 overflow-hidden"
                >
                  {/* Photo with zoom effect */}
                  <div className="relative w-full aspect-[5/4] overflow-hidden border-b border-gray-100">
                    <Image
                      src={member.image}
                      alt={member.imageAlt}
                      fill
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 30vw"
                      className="object-cover object-top transition-transform duration-[1000ms] group-hover:scale-105"
                    />
                    
                    {/* Certification Badge Pill */}
                    {credentialLabel && (
                      <div className="absolute top-4 left-4 z-20">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--midnight-navy)] border border-brand-gold/30 text-[var(--brand-gold)] text-[9px] font-black tracking-widest uppercase shadow-lg backdrop-blur-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-gold)] animate-pulse" />
                          {credentialLabel}
                        </span>
                      </div>
                    )}

                    {/* LinkedIn overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--midnight-navy)]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4 z-10">
                      <div className="flex gap-2">
                        <Link
                          href="https://linkedin.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white hover:bg-[var(--brand-gold)] hover:text-white transition duration-200"
                          aria-label="LinkedIn Profile"
                        >
                          <LinkedinIcon className="h-3.5 w-3.5" />
                        </Link>
                        <Link
                          href={`mailto:${data.header.contact.email}`}
                          className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white hover:bg-[var(--brand-gold)] hover:text-white transition duration-200"
                          aria-label="Email Member"
                        >
                          <Mail size={14} />
                        </Link>
                      </div>
                      <span className="text-[9px] font-bold uppercase tracking-widest text-white/50">FCPG Executive</span>
                    </div>
                  </div>

                  {/* Profile Details */}
                  <div className="p-5 sm:p-6 flex flex-col gap-3 flex-grow border-t-2 border-transparent group-hover:border-brand-gold transition-colors duration-500">
                    <div>
                      <h3 className="text-[15.5px] font-bold text-text-navy tracking-tight group-hover:text-brand-gold transition-colors duration-200">
                        {member.name}
                      </h3>
                      <p className="text-[11px] font-semibold text-brand-gold uppercase tracking-wider mt-0.5">
                        {member.role}
                      </p>
                    </div>
                    <p className="text-[12.5px] text-text-slate leading-[1.72] flex-grow">
                      {member.bio}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── STATS COUNTER STRIP ── */}
      <section className="relative bg-[var(--midnight-navy)] text-white py-14 overflow-hidden border-y border-brand-gold/20">
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(201,155,49,0.04)] to-transparent pointer-events-none" />
        {/* Soft Grid overlay inside stats bar */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none opacity-[0.03]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="stats-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#ffffff" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#stats-grid)" />
          </svg>
        </div>

        <div className="mx-auto w-full max-w-[1160px] px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/10 text-center">
            {stats.map((stat, idx) => (
              <div key={stat.label} className={`flex flex-col gap-1.5 ${idx >= 2 ? "pt-6 md:pt-0" : idx === 1 ? "pt-0" : ""}`}>
                <span className="text-[26px] sm:text-[32px] md:text-4.5xl font-display font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-[var(--tagline-gold)] to-brand-gold">
                  {stat.value}
                </span>
                <span className="text-[10.5px] uppercase font-bold tracking-[0.15em] text-white/60">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM FUNNEL ── */}
      <CtaBar />
      <ContactForm />
    </main>
  );
}
