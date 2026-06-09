"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Wrench, Zap, Droplets, Paintbrush2, Trees, ShieldCheck,
  ArrowRight, Star, Clock, CheckCircle2,
} from "lucide-react";

const categories = [
  { icon: Wrench,       label: "General Maintenance", desc: "Licensed contractors for all repair needs" },
  { icon: Zap,          label: "Electrical Services",  desc: "Certified electricians, 24/7 available"     },
  { icon: Droplets,     label: "Plumbing & HVAC",      desc: "Full-service plumbing and climate systems"  },
  { icon: Paintbrush2,  label: "Painting & Finishing",  desc: "Interior and exterior finishing crews"       },
  { icon: Trees,        label: "Landscaping",           desc: "Grounds care and seasonal maintenance"       },
  { icon: ShieldCheck,  label: "Safety & Compliance",  desc: "Inspection-ready, code-compliant work"       },
];

const vendorImages = [
  { src: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=600&q=85", alt: "Maintenance work" },
  { src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=85", alt: "Electrical services" },
  { src: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=600&q=85", alt: "Plumbing services" },
  { src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=85", alt: "Painting services" },
];

const badges = [
  { icon: Star,         text: "Top-Rated Vendors Only"   },
  { icon: Clock,        text: "Rapid Response Times"     },
  { icon: CheckCircle2, text: "Background Checked & Insured" },
];

export default function VendorNetwork() {
  return (
    <section
      id="vendor-network"
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #031b31 0%, #052946 60%, #041e36 100%)" }}
    >
      {/* Dot texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.022) 1px, transparent 0)",
          backgroundSize: "30px 30px",
        }}
      />
      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-gold/[0.04] rounded-full blur-[150px] pointer-events-none translate-x-1/3 -translate-y-1/3" />

      <div className="relative z-10 mx-auto w-full max-w-[1160px] px-6 lg:px-8 py-16 lg:py-24">

        {/* ── Header ── */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-5 h-[1.5px] bg-brand-gold" />
              <p className="text-[10px] font-black tracking-[0.28em] uppercase text-brand-gold">
                Our Vendor Network
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-display text-white leading-[1.1] tracking-tight">
              Strong Relationships.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-tagline-gold">
                Reliable Results.
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[14.5px] text-white/60 leading-relaxed md:max-w-[380px] font-sans"
          >
            Our long-standing network of licensed contractors across South Carolina delivers dependable service, responsive communication, and quality workmanship — every time.
          </motion.p>
        </div>

        {/* ── Main 2-col body ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">

          {/* ── Left: Category cards ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-3"
          >
            {categories.map(({ icon: Icon, label, desc }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: -14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="group flex items-center gap-4 px-5 py-4 rounded-xl border border-white/[0.07] hover:border-brand-gold/30 bg-white/[0.03] hover:bg-white/[0.07] transition-all duration-300 cursor-default"
              >
                {/* Icon */}
                <div className="flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-xl border border-brand-gold/20 bg-brand-gold/8 text-brand-gold transition-all duration-400 group-hover:bg-brand-gold group-hover:text-midnight-navy group-hover:border-brand-gold group-hover:shadow-[0_4px_16px_rgba(201,155,49,0.25)]">
                  <Icon size={18} strokeWidth={1.9} />
                </div>

                {/* Text */}
                <div className="flex flex-col gap-0.5 min-w-0">
                  <h3 className="text-[13.5px] font-bold text-white leading-tight group-hover:text-brand-gold transition-colors duration-300">
                    {label}
                  </h3>
                  <p className="text-[11.5px] text-white/45 font-sans group-hover:text-white/65 transition-colors duration-300">
                    {desc}
                  </p>
                </div>

                {/* Checkmark */}
                <CheckCircle2 size={16} className="flex-shrink-0 ml-auto text-brand-gold/30 group-hover:text-brand-gold transition-colors duration-300" strokeWidth={2} />
              </motion.div>
            ))}

            {/* CTA */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <Link
                href="#contact"
                className="group inline-flex items-center gap-2.5 h-12 px-6 rounded-[4px] font-bold text-[11px] uppercase tracking-wider transition-all duration-300 active:scale-[0.97] shadow-md"
                style={{ backgroundColor: "var(--brand-gold)", color: "#ffffff" }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = "var(--tagline-gold)"}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = "var(--brand-gold)"}
              >
                Work With Our Vendors
                <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-white/50 hover:text-white/80 transition-colors duration-300"
              >
                Become a Vendor Partner →
              </Link>
            </div>
          </motion.div>

          {/* ── Right: Photo mosaic + trust badges ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-4"
          >
            {/* 2×2 photo grid */}
            <div className="grid grid-cols-2 gap-3">
              {vendorImages.map(({ src, alt }, i) => (
                <motion.div
                  key={src}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className={`group relative overflow-hidden rounded-xl ${i === 0 ? "col-span-2 h-[200px]" : "h-[150px]"}`}
                >
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes="(min-width: 1024px) 28vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#031b31]/50 to-transparent" />
                  {/* Gold ring on hover */}
                  <div className="absolute inset-0 rounded-xl border border-brand-gold/0 group-hover:border-brand-gold/40 transition-colors duration-400" />
                </motion.div>
              ))}
            </div>

            {/* Trust badge strip */}
            <div
              className="flex flex-col gap-3 p-5 rounded-xl border border-white/[0.07]"
              style={{ background: "rgba(255,255,255,0.03)" }}
            >
              <p className="text-[10px] font-black tracking-[0.22em] uppercase text-brand-gold/80">
                Our Vendor Standards
              </p>
              {badges.map(({ icon: I, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center bg-brand-gold/10 text-brand-gold">
                    <I size={14} strokeWidth={2} />
                  </div>
                  <span className="text-[12.5px] font-medium text-white/75">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
