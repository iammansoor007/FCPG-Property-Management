"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  BadgeDollarSign, Handshake, MessageCircle,
  UsersRound, ClipboardCheck, Cpu, ArrowRight,
} from "lucide-react";

const values = [
  {
    icon: BadgeDollarSign,
    title: "Financial Accountability",
    text: "Transparent reporting, accurate reconciliation, and responsible stewardship of every dollar.",
  },
  {
    icon: Handshake,
    title: "Vendor Coordination",
    text: "A vetted vendor network delivering quality service, competitive pricing, and minimal disruption.",
  },
  {
    icon: MessageCircle,
    title: "Proactive Communication",
    text: "Clear, consistent updates for all stakeholders — no surprises, only confidence.",
  },
  {
    icon: UsersRound,
    title: "Community Focused",
    text: "Enhancing community value through meaningful engagement and operational excellence.",
  },
  {
    icon: ClipboardCheck,
    title: "Compliance & Governance",
    text: "Full adherence to covenants, local regulations, and evolving industry best practices.",
  },
  {
    icon: Cpu,
    title: "Technology Forward",
    text: "Modern platforms deliver real-time insights, streamlined workflows, and faster responses.",
  },
];

const stats = [
  { value: "15+",  label: "Years in Business",  sub: "Established in 2009"       },
  { value: "500+", label: "Properties Managed",  sub: "Across South Carolina"     },
  { value: "98%",  label: "Client Retention",    sub: "Year over year"            },
];

/* Border-sharing grid cell — used by Stripe, Linear, Notion for clean feature grids */
function FeatureCell({ icon: Icon, title, text, index, totalCols = 3, total = 6 }) {
  const col = index % totalCols;          // 0-based column
  const row = Math.floor(index / totalCols); // 0-based row
  const totalRows = Math.ceil(total / totalCols);
  const isLastCol = col === totalCols - 1;
  const isLastRow = row === totalRows - 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.06, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={[
        "group relative flex flex-col gap-5 p-8 cursor-default",
        "transition-colors duration-300 hover:bg-[#fdfaf3]",
        !isLastCol ? "border-r border-[rgba(201,155,49,0.18)]" : "",
        !isLastRow ? "border-b border-[rgba(201,155,49,0.18)]" : "",
      ].join(" ")}
    >
      {/* Gold top-sweep line on hover */}
      <span className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-brand-gold/0 via-brand-gold to-brand-gold/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />

      {/* Top row: number + icon */}
      <div className="flex items-center justify-between">
        <span className="text-[10.5px] font-black tracking-[0.2em] text-brand-gold/60 group-hover:text-brand-gold transition-colors duration-300">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="flex items-center justify-center w-11 h-11 rounded-xl border border-gray-200 bg-white text-text-slate shadow-[0_2px_8px_rgba(8,38,66,0.05)] transition-all duration-400 group-hover:bg-brand-gold group-hover:text-white group-hover:border-brand-gold group-hover:shadow-[0_6px_20px_rgba(201,155,49,0.25)]">
          <Icon size={19} strokeWidth={1.85} />
        </div>
      </div>

      {/* Title */}
      <h3 className="text-[15px] font-bold text-text-navy leading-snug tracking-tight group-hover:text-primary-navy transition-colors duration-300">
        {title}
      </h3>

      {/* Description */}
      <p className="text-[13px] text-text-slate leading-[1.72] font-sans flex-1">
        {text}
      </p>
    </motion.div>
  );
}

export default function WhyChoose() {
  return (
    <section id="about-us" className="bg-white">
      <div className="mx-auto w-full max-w-[1160px] px-6 lg:px-8 py-16 lg:py-24">

        {/* ── Section header ── */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-[520px]"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-5 h-[1.5px] bg-brand-gold" />
              <p className="text-[10px] font-black tracking-[0.28em] uppercase text-brand-gold">
                Why First Choice
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-display text-text-navy leading-[1.1] tracking-tight">
              A Partner You Can{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-tagline-gold">
                Rely On
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-6 md:max-w-[380px]"
          >
            <p className="text-[15px] text-text-slate leading-[1.75] font-sans">
              We go beyond day-to-day management — we are strategic partners focused on protecting assets, enhancing communities, and delivering exceptional results at every level.
            </p>

            {/* Dual CTA row */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Primary — gold */}
              <Link
                href="#contact"
                className="group inline-flex items-center gap-2.5 h-12 px-6 rounded-[4px] font-bold text-[11px] uppercase tracking-wider transition-all duration-300 active:scale-[0.97] shadow-md hover:shadow-xl"
                style={{ backgroundColor: "var(--brand-gold)", color: "#ffffff" }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = "var(--tagline-gold)"}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = "var(--brand-gold)"}
              >
                Get Started
                <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              {/* Secondary — outlined navy */}
              <Link
                href="#contact"
                className="group inline-flex items-center gap-2 h-12 px-6 rounded-[4px] font-bold text-[11px] uppercase tracking-wider border transition-all duration-300 active:scale-[0.97]"
                style={{ borderColor: "var(--primary-navy)", color: "var(--primary-navy)", backgroundColor: "transparent" }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = "var(--primary-navy)"; e.currentTarget.style.color = "#fff"; }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "var(--primary-navy)"; }}
              >
                About Our Company
              </Link>
            </div>

            {/* Trust micro-line */}
            <div className="flex items-center gap-2 pt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
              <p className="text-[11px] text-text-slate font-medium">
                Trusted by communities across South Carolina since 2009
              </p>
            </div>
          </motion.div>
        </div>

        {/* ── Stats bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-3 rounded-2xl overflow-hidden mb-6"
          style={{
            background: "linear-gradient(135deg, var(--primary-navy) 0%, var(--midnight-navy) 100%)",
            borderTop: "2px solid rgba(201,155,49,0.35)",
          }}
        >
          {stats.map(({ value, label, sub }, i) => (
            <div
              key={label}
              className="relative flex flex-col items-center justify-center py-12 gap-1"
              style={{ borderRight: i < 2 ? "1px solid rgba(255,255,255,0.07)" : "none" }}
            >
              {/* Ambient gold glow behind number */}
              <div
                className="absolute rounded-full pointer-events-none"
                style={{
                  width: "120px",
                  height: "120px",
                  background: "radial-gradient(circle, rgba(201,155,49,0.12) 0%, transparent 70%)",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -60%)",
                }}
              />

              {/* Big number */}
              <span
                className="relative font-display font-black leading-none"
                style={{
                  fontSize: "clamp(2.8rem, 5.5vw, 3.8rem)",
                  color: "#ffffff",
                  letterSpacing: "-0.03em",
                }}
              >
                {value}
              </span>

              {/* Gold accent bar */}
              <span
                className="rounded-full my-2"
                style={{ width: "28px", height: "2px", backgroundColor: "var(--brand-gold)", opacity: 0.75 }}
              />

              {/* Label */}
              <span
                className="text-[11px] font-bold uppercase tracking-[0.2em]"
                style={{ color: "rgba(255,255,255,0.9)" }}
              >
                {label}
              </span>

              {/* Sub-description */}
              <span
                className="text-[10px] font-medium mt-0.5"
                style={{ color: "rgba(255,255,255,0.38)", letterSpacing: "0.04em" }}
              >
                {sub}
              </span>
            </div>
          ))}
        </motion.div>

        {/* ── Feature grid — border-sharing ── */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 rounded-2xl border border-[#e8ecf0] overflow-hidden"
        >
          {values.map((v, i) => (
            <FeatureCell key={v.title} {...v} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
