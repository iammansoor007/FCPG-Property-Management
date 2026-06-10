"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  UsersRound, Home, Building2, HardHat, BadgeDollarSign,
  ArrowUpRight, ShieldCheck, MapPin, TrendingUp,
} from "lucide-react";

/* ─────────────────────────────────────────────────────────────
   FULL-BLEED CARD
   • Image fills entire card background
   • Content always visible at bottom (no hide/show on hover)
   • Hover: image zooms, icon fills gold, border glows, CTA arrow brightens
   ───────────────────────────────────────────────────────────── */
function FullBleedCard({
  title, text, icon: Icon, image, badge, index, delay = 0,
  className = "", contentPadding = "p-7",
}) {
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
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      className={`group relative overflow-hidden rounded-2xl shadow-[0_16px_48px_rgba(3,27,49,0.15)] hover:shadow-[0_20px_50px_rgba(201,155,49,0.22)] transition-all duration-500 ${className}`}
    >
      {/* Background image */}
      <Image
        src={image}
        alt={title}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.07]"
        priority={index === 1}
      />

      {/* Dark gradient — heavier at bottom for legibility, lightens toward top */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#021321]/88 via-[#021321]/35 to-transparent z-10 pointer-events-none" />

      {/* Subtle hover tint overlay */}
      <div className="absolute inset-0 bg-[#031b31]/0 group-hover:bg-[#031b31]/15 transition-colors duration-700 z-10 pointer-events-none" />

      {/* Index number badge — solid dark navy pill */}
      <div className="absolute top-5 right-5 z-20 pointer-events-none">
        <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-midnight-navy/90 backdrop-blur-sm border border-white/[0.08] text-brand-gold font-display font-black text-[13px] leading-none select-none">
          {String(index).padStart(2, "0")}
        </span>
      </div>

      {/* Badge pill */}
      {badge && (
        <div className="absolute top-5 left-5 z-30">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-gold text-midnight-navy text-[9px] font-black tracking-[0.15em] uppercase shadow-lg">
            <span className="w-1.5 h-1.5 rounded-full bg-midnight-navy/40 animate-pulse" />
            {badge}
          </span>
        </div>
      )}

      {/* Dynamic Cursor Spotlight Effect */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl z-25"
        style={{
          background: `radial-gradient(280px circle at ${mousePos.x}px ${mousePos.y}px, rgba(201, 155, 49, 0.12), transparent 80%)`
        }}
      />

      {/* Content — pinned to bottom, always fully visible */}
      <div className={`absolute bottom-0 left-0 right-0 z-20 ${contentPadding} flex flex-col gap-3.5`}>
        {/* Icon + Title row */}
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl border border-brand-gold/25 bg-brand-gold/10 text-brand-gold transition-all duration-500 group-hover:bg-brand-gold group-hover:text-midnight-navy group-hover:border-brand-gold group-hover:shadow-[0_0_22px_rgba(201,155,49,0.4)]">
            <Icon size={17} strokeWidth={2.2} />
          </div>
          <h3 className="font-display font-bold text-white leading-tight tracking-tight text-lg">
            {title}
          </h3>
        </div>

        {/* Description — always shown, clamp to 2 lines to prevent overflow */}
        <p className="text-[13px] text-white/70 leading-[1.6] font-sans line-clamp-2 group-hover:text-white/90 transition-colors duration-500">
          {text}
        </p>

        {/* CTA — always shown */}
        <Link
          href="#contact"
          className="inline-flex items-center gap-2 self-start mt-0.5 group/cta"
        >
          <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-brand-gold/90 group-hover/cta:text-brand-gold transition-colors duration-300">
            Explore Service
          </span>
          <span className="flex items-center justify-center w-6 h-6 rounded-full border border-brand-gold/30 text-brand-gold/70 transition-all duration-300 group-hover/cta:bg-brand-gold group-hover/cta:text-midnight-navy group-hover/cta:border-brand-gold group-hover/cta:shadow-[0_0_10px_rgba(201,155,49,0.4)]">
            <ArrowUpRight size={11} strokeWidth={2.5} />
          </span>
        </Link>
      </div>

      {/* Animated border overlay */}
      <div className="absolute inset-0 rounded-2xl border border-white/[0.07] group-hover:border-brand-gold/30 transition-colors duration-500 z-30 pointer-events-none" />
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────
   SECTION
   Layout (desktop, 3-col grid):
     Col 1     : Featured Residential — spans 2 rows (tall)
     Col 2–3   : 2 × 2 grid  (Commercial | HOA | Developer | Financial)

   Mobile: single column stack, each card has explicit min-height.
   ───────────────────────────────────────────────────────────── */
export default function ServiceDivisions() {
  return (
    <section
      id="services"
      className="bg-light-gray relative overflow-hidden"
      style={{
        backgroundImage:
          "radial-gradient(circle at 1px 1px, rgba(8,38,66,0.038) 1px, transparent 0)",
        backgroundSize: "26px 26px",
      }}
    >
      {/* Ambient glow blobs */}
      <div className="absolute top-0 left-0 w-[520px] h-[520px] bg-brand-gold/[0.05] rounded-full blur-[130px] pointer-events-none -translate-x-1/2 -translate-y-1/3" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#052946]/[0.04] rounded-full blur-[150px] pointer-events-none translate-x-1/4 translate-y-1/4" />

      <div className="mx-auto w-full max-w-[1160px] px-6 lg:px-8 py-16 lg:py-24 relative z-10">

        {/* ── Section Header ── */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">

          {/* Left — heading + accent bar */}
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex gap-4 items-start"
          >
            <div
              className="flex-shrink-0 w-[3px] self-stretch rounded-full mt-1"
              style={{ background: "linear-gradient(180deg, #c99b31 0%, rgba(201,155,49,0.4) 60%, transparent 100%)" }}
            />
            <div>
              <p className="text-[10px] font-black tracking-[0.28em] uppercase text-brand-gold mb-3">
                Our Services
              </p>
              <h2 className="text-4xl md:text-[2.7rem] lg:text-5xl font-bold font-display text-text-navy leading-[1.1] tracking-tight">
                Property Management<br />
                Solutions That{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-tagline-gold">
                  Perform
                </span>
              </h2>
            </div>
          </motion.div>

          {/* Right — description + trust pills */}
          <motion.div
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="md:max-w-[360px] flex flex-col gap-5"
          >
            <p className="text-[14px] text-text-slate leading-relaxed font-sans">
              From residential communities to commercial assets, we deliver expertise, transparency, and peace of mind at every step.
            </p>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {[
                { icon: ShieldCheck, label: "Trusted Communities" },
                { icon: MapPin,      label: "Carolina Local"      },
                { icon: TrendingUp,  label: "Proven ROI"          },
              ].map(({ icon: I, label }) => (
                <div key={label} className="flex items-center gap-1.5">
                  <I size={14} className="text-brand-gold flex-shrink-0" strokeWidth={2.2} />
                  <span className="text-[10.5px] font-semibold text-text-slate">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Bento Grid ──────────────────────────────────────── */}
        {/*
          Desktop (3 cols):
            ┌──────────────┬────────────┬──────────────┐
            │  Residential │ Commercial │     HOA      │
            │  (row-span-2)├────────────┼──────────────┤
            │              │ Developer  │  Financial   │
            └──────────────┴────────────┴──────────────┘

          The left card spans both rows.
          Right 4 cards each occupy 1 cell in a 2×2 arrangement.
          Heights are driven by padding + min-h (not fixed px rows).
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">

          {/* ── Featured: Residential ── */}
          {/* On mobile: min-h-[340px]. On desktop: row-span-2 so it fills both grid rows naturally. */}
          <FullBleedCard
            title="Residential Management"
            text="Comprehensive management that protects your investment and ensures tenant satisfaction at every level."
            icon={Home}
            image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=85"
            badge="Featured"
            index={1}
            delay={0.05}
            contentPadding="p-8"
            className="min-h-[340px] md:min-h-[440px] lg:row-span-2"
          />

          {/* ── Commercial ── */}
          <FullBleedCard
            title="Commercial Management"
            text="Strategic management for office, retail, and mixed-use properties focused on performance and long-term value."
            icon={Building2}
            image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=700&q=85"
            index={2}
            delay={0.12}
            className="min-h-[260px]"
          />

          {/* ── HOA ── */}
          <FullBleedCard
            title="HOA Management"
            text="Expert governance, compliance, and community support for well-managed associations."
            icon={UsersRound}
            image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=700&q=85"
            index={3}
            delay={0.18}
            className="min-h-[260px]"
          />

          {/* ── Developer ── */}
          <FullBleedCard
            title="Developer & Builder Services"
            text="Partnering with developers and builders to transition projects seamlessly into long-term operations."
            icon={HardHat}
            image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=700&q=85"
            index={4}
            delay={0.24}
            className="min-h-[260px]"
          />

          {/* ── Financial ── */}
          <FullBleedCard
            title="Financial Management"
            text="Transparent reporting, budgeting, and financial oversight you can always count on."
            icon={BadgeDollarSign}
            image="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=700&q=85"
            index={5}
            delay={0.3}
            className="min-h-[260px]"
          />
        </div>

        {/* ── Footer strip ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="flex items-center justify-center gap-2.5 mt-10 border-t border-gray-200/60 pt-8"
        >
          <ShieldCheck size={15} className="text-brand-gold" strokeWidth={2} />
          <p className="text-[11px] text-text-slate font-medium tracking-wide">
            Serving homeowners, investors &amp; developers across South Carolina
          </p>
        </motion.div>

      </div>
    </section>
  );
}
