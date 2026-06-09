"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Wrench, Zap, Droplets, Paintbrush, Trees, ShieldCheck,
  ArrowRight, Clock, CheckCircle2, Award, ShieldAlert,
  Sparkles, ThumbsUp, Activity
} from "lucide-react";

const categories = [
  {
    id: "maintenance",
    icon: Wrench,
    label: "General Maintenance",
    desc: "Day-to-day repairs and facility maintenance",
    longDesc: "From minor handyman fixes to comprehensive structural preventative maintenance, our general technicians keep properties in peak condition year-round.",
    sla: "30 Mins (Emergency) / 4 Hrs (Routine)",
    verification: "Fully Vetted & Background Checked",
    projects: "4,500+ Completed",
    activeCrews: "24 Local Crews",
    rating: "4.9 / 5.0 Rating",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=85",
    services: [
      "Drywall & Carpentry Repairs",
      "Hardware & Lock Installation",
      "Preventative Walkthroughs",
      "Gutter & Roof Cleans"
    ]
  },
  {
    id: "electrical",
    icon: Zap,
    label: "Electrical Systems",
    desc: "24/7 emergency dispatch and wiring upgrades",
    longDesc: "Professional electrical services including emergency troubleshooting, panel upgrades, lighting installations, and detailed safety code inspections.",
    sla: "15 Mins (Emergency) / 2 Hrs (Routine)",
    verification: "Class A Master Electricians",
    projects: "1,800+ Completed",
    activeCrews: "12 Certified Teams",
    rating: "5.0 / 5.0 Rating",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=85",
    services: [
      "Emergency Power Restoration",
      "LED Lighting Retrofits",
      "Breaker & Panel Upgrades",
      "Safety Code Audits"
    ]
  },
  {
    id: "plumbing",
    icon: Droplets,
    label: "Plumbing & HVAC",
    desc: "Water systems, heating, and cooling networks",
    longDesc: "Full-scale HVAC and plumbing experts ensuring water distribution, drainage systems, and climate control units function perfectly in all seasons.",
    sla: "20 Mins (Emergency) / 3 Hrs (Routine)",
    verification: "EPA Certified & Bonded",
    projects: "3,100+ Completed",
    activeCrews: "18 Dedicated Teams",
    rating: "4.8 / 5.0 Rating",
    image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=800&q=85",
    services: [
      "AC & Furnace Diagnostics",
      "Leak Detection & Piping",
      "Water Heater Installation",
      "Backflow Prevention Testing"
    ]
  },
  {
    id: "painting",
    icon: Paintbrush,
    label: "Painting & Finishing",
    desc: "Interior/exterior finishes and drywall prep",
    longDesc: "Premium finishing crews delivering sharp interior painting, weather-resistant exterior coatings, cabinet staining, and smooth drywall finishing.",
    sla: "Next-Day Estimating / 24-Hr Start",
    verification: "Lead-Safe Certified Firms",
    projects: "2,400+ Completed",
    activeCrews: "15 Finishing Teams",
    rating: "4.9 / 5.0 Rating",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=85",
    services: [
      "Precision Wall & Trim Painting",
      "Drywall Texture & Finishing",
      "Stucco & Siding Coatings",
      "Professional Pressure Washing"
    ]
  },
  {
    id: "landscaping",
    icon: Trees,
    label: "Landscaping & Exterior",
    desc: "Grounds upkeep and seasonal yard designs",
    longDesc: "Strategic grounds keeping, plant care, irrigation design, and storm cleanup to maximize property curb appeal and outdoor safety.",
    sla: "Weekly Schedules / 4-Hr Storm Dispatch",
    verification: "Licensed Pesticide Applicators",
    projects: "5,000+ Completed",
    activeCrews: "30 Ground Crews",
    rating: "4.7 / 5.0 Rating",
    image: "https://images.unsplash.com/photo-1557429287-b2e26467fc2b?auto=format&fit=crop&w=800&q=85",
    services: [
      "Mowing, Edging & Pruning",
      "Irrigation Repair & Winterization",
      "Curb Appeal Enhancement",
      "Emergency Tree Removal"
    ]
  },
  {
    id: "safety",
    icon: ShieldCheck,
    label: "Safety & Compliance",
    desc: "Code inspections, fire protection, and alarms",
    longDesc: "Specialist compliance networks executing commercial code checks, smoke/fire alarm installations, access systems, and security audits.",
    sla: "Immediate Dispatch for Violations",
    verification: "NFPA Certified Inspectors",
    projects: "900+ Code Audits",
    activeCrews: "8 Specialized Inspectors",
    rating: "5.0 / 5.0 Rating",
    image: "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=800&q=85",
    services: [
      "Fire System Recertifications",
      "Smoke & Carbon Detector Checks",
      "Access Control Maintenance",
      "Egress Code Compliance Walks"
    ]
  }
];

export default function VendorNetwork() {
  const [activeTab, setActiveTab] = useState(0);

  const activeCategory = categories[activeTab];

  return (
    <section
      id="vendor-network"
      className="relative overflow-hidden py-20 lg:py-28"
      style={{ background: "linear-gradient(180deg, #031b31 0%, #021222 100%)" }}
    >
      {/* Aesthetic grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }}
      />

      {/* Decorative ambient color spots */}
      <div className="absolute top-1/4 left-1/10 w-[400px] h-[400px] bg-brand-gold/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-[500px] h-[500px] bg-[#052946]/[0.1] rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 mx-auto w-full max-w-[1160px] px-6 lg:px-8">
        
        {/* ── Section Header ── */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex gap-4 items-start"
          >
            <div
              className="flex-shrink-0 w-[3px] self-stretch rounded-full mt-1"
              style={{ background: "linear-gradient(180deg, #c99b31 0%, rgba(201,155,49,0.3) 70%, transparent 100%)" }}
            />
            <div>
              <p className="text-[10px] font-black tracking-[0.28em] uppercase text-brand-gold mb-3">
                Vendor Management
              </p>
              <h2 className="text-4xl md:text-5xl font-bold font-display text-white leading-[1.1] tracking-tight">
                Vetted Contractors.{" "}
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-tagline-gold">
                  Guaranteed Performance.
                </span>
              </h2>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-[14.5px] text-white/60 leading-relaxed md:max-w-[380px] font-sans"
          >
            We eliminate maintenance stress. Our verified network of licensed, local, and fully insured contractors delivers responsive communication and quality work.
          </motion.p>
        </div>

        {/* ── Dashboard Layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Side: Vertical Selector Tabs (5 columns) */}
          <div className="lg:col-span-5 flex flex-col gap-3.5">
            <div className="mb-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-[9px] font-black tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
                Select Category to Inspect
              </span>
            </div>

            <div className="flex flex-col gap-2">
              {categories.map((cat, idx) => {
                const Icon = cat.icon;
                const isActive = activeTab === idx;

                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveTab(idx)}
                    className={`group flex items-start gap-4 p-4 rounded-xl text-left transition-all duration-300 border focus:outline-none ${
                      isActive
                        ? "bg-white/[0.04] border-brand-gold/45 shadow-[0_8px_32px_rgba(201,155,49,0.06)]"
                        : "bg-white/[0.01] border-white/[0.04] hover:bg-white/[0.02] hover:border-white/[0.08]"
                    }`}
                  >
                    {/* Glowing Icon Holder */}
                    <div
                      className={`flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-lg border transition-all duration-300 ${
                        isActive
                          ? "bg-brand-gold border-brand-gold text-midnight-navy shadow-[0_0_15px_rgba(201,155,49,0.3)]"
                          : "bg-white/[0.03] border-white/[0.08] text-white/70 group-hover:text-brand-gold group-hover:border-brand-gold/30"
                      }`}
                    >
                      <Icon size={18} strokeWidth={2.2} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3
                        className={`text-[13.5px] font-bold transition-colors duration-200 ${
                          isActive ? "text-brand-gold" : "text-white group-hover:text-brand-gold"
                        }`}
                      >
                        {cat.label}
                      </h3>
                      <p className="text-[11.5px] text-white/45 mt-0.5 line-clamp-1 group-hover:text-white/60 transition-colors">
                        {cat.desc}
                      </p>
                    </div>

                    {/* Active State indicator bar */}
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="w-1 h-6 bg-brand-gold rounded-full self-center ml-2 shadow-[0_0_8px_rgba(201,155,49,0.5)]"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Side: Showcase Dashboard Panel (7 columns) */}
          <div className="lg:col-span-7">
            <div className="relative h-full rounded-2xl border border-white/[0.07] bg-white/[0.02] backdrop-blur-md overflow-hidden flex flex-col justify-between shadow-[0_24px_50px_rgba(2,18,34,0.3)]">
              
              {/* Header Details */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="flex flex-col h-full"
                >
                  {/* Visual Top Area */}
                  <div className="relative h-[220px] w-full overflow-hidden">
                    <Image
                      src={activeCategory.image}
                      alt={activeCategory.label}
                      fill
                      priority
                      className="object-cover transition-transform duration-[1200ms] ease-out hover:scale-105"
                    />
                    {/* Shadow overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#021222] via-[#021222]/50 to-transparent" />
                    
                    {/* Verification pill */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/90 text-white text-[9px] font-black uppercase tracking-wider shadow-md">
                        <CheckCircle2 size={10} strokeWidth={3} />
                        Vetted & Insured
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-6 right-6">
                      <h4 className="text-xl md:text-2xl font-display font-bold text-white tracking-tight">
                        {activeCategory.label}
                      </h4>
                      <p className="text-[12px] text-brand-gold font-medium mt-0.5">
                        {activeCategory.verification}
                      </p>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 md:p-8 flex flex-col gap-6 flex-grow">
                    <p className="text-[13px] text-white/70 leading-relaxed font-sans">
                      {activeCategory.longDesc}
                    </p>

                    {/* Stats Metrics Dashboard Grid */}
                    <div className="grid grid-cols-2 gap-3.5">
                      <div className="p-3.5 rounded-xl border border-white/[0.04] bg-white/[0.01] flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-brand-gold/10 text-brand-gold flex items-center justify-center flex-shrink-0">
                          <Clock size={15} />
                        </div>
                        <div>
                          <p className="text-[10px] text-white/40 uppercase font-bold tracking-wider">Response SLA</p>
                          <p className="text-[12px] font-bold text-white mt-0.5">{activeCategory.sla}</p>
                        </div>
                      </div>

                      <div className="p-3.5 rounded-xl border border-white/[0.04] bg-white/[0.01] flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-brand-gold/10 text-brand-gold flex items-center justify-center flex-shrink-0">
                          <Activity size={15} />
                        </div>
                        <div>
                          <p className="text-[10px] text-white/40 uppercase font-bold tracking-wider">Completed Work</p>
                          <p className="text-[12px] font-bold text-white mt-0.5">{activeCategory.projects}</p>
                        </div>
                      </div>

                      <div className="p-3.5 rounded-xl border border-white/[0.04] bg-white/[0.01] flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-brand-gold/10 text-brand-gold flex items-center justify-center flex-shrink-0">
                          <Award size={15} />
                        </div>
                        <div>
                          <p className="text-[10px] text-white/40 uppercase font-bold tracking-wider">Active Crews</p>
                          <p className="text-[12px] font-bold text-white mt-0.5">{activeCategory.activeCrews}</p>
                        </div>
                      </div>

                      <div className="p-3.5 rounded-xl border border-white/[0.04] bg-white/[0.01] flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-brand-gold/10 text-brand-gold flex items-center justify-center flex-shrink-0">
                          <ThumbsUp size={15} />
                        </div>
                        <div>
                          <p className="text-[10px] text-white/40 uppercase font-bold tracking-wider">Quality Score</p>
                          <p className="text-[12px] font-bold text-white mt-0.5">{activeCategory.rating}</p>
                        </div>
                      </div>
                    </div>

                    {/* Scope Checklist */}
                    <div>
                      <h5 className="text-[10.5px] font-black tracking-wider uppercase text-brand-gold mb-3">
                        Services Performed
                      </h5>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                        {activeCategory.services.map((serv, idx) => (
                          <div key={idx} className="flex items-center gap-2.5">
                            <CheckCircle2 size={13} className="text-brand-gold flex-shrink-0" strokeWidth={2.5} />
                            <span className="text-[12px] text-white/70 font-sans">{serv}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Bottom CTA Block */}
              <div className="p-6 border-t border-white/[0.06] bg-white/[0.01] flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <ShieldAlert size={14} className="text-brand-gold flex-shrink-0" />
                  <span className="text-[11px] font-medium text-white/50">Minimum $1M general liability required for all vendors.</span>
                </div>
                <div className="flex items-center gap-4">
                  <Link
                    href="#contact"
                    className="group inline-flex items-center gap-2 h-10 px-5 rounded-[4px] bg-brand-gold text-midnight-navy font-bold text-[10.5px] uppercase tracking-wider transition-all duration-300 hover:bg-tagline-gold active:scale-[0.97]"
                  >
                    Submit Service Request
                    <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* ── Partner Strip ── */}
        <div className="mt-16 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold">
              <Sparkles size={16} />
            </div>
            <div>
              <p className="text-[12.5px] font-bold text-white">Are you a licensed contractor in South Carolina?</p>
              <p className="text-[11px] text-white/50">Join our network and receive consistent work requests.</p>
            </div>
          </div>
          <Link
            href="#contact"
            className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-wider text-brand-gold hover:text-tagline-gold transition-colors duration-300 self-start sm:self-auto"
          >
            Become an Approved Vendor Partner →
          </Link>
        </div>

      </div>
    </section>
  );
}
