"use client";

import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  UsersRound, ShieldCheck, BadgeDollarSign, MessageCircle, ClipboardCheck,
  Home, TrendingUp, Wrench, Building2, Cpu, HardHat, Layers, Clock, CalendarDays,
  ArrowRight, CheckCircle2
} from "lucide-react";

import CtaBar from "@/components/CtaBar";
import ContactForm from "@/components/ContactForm";

const IconMap = {
  UsersRound, ShieldCheck, BadgeDollarSign, MessageCircle, ClipboardCheck,
  Home, TrendingUp, Wrench, Building2, Cpu, HardHat, Layers, Clock, CalendarDays
};

const serviceData = {
  "hoa-management": {
    title: "HOA Management Services",
    subtitle: "Community Operations & Board Support",
    badge: "Board Support & Governance",
    bgImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=85",
    description: "Expert governance, transparent financial oversight, and responsive homeowner support to elevate community standards.",
    formOption: "HOA Property Management",
    sideImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=85",
    focusPoints: [
      {
        title: "Board Support",
        description: "Assisting board members with meeting prep, minutes, action items, and strategic advisory to run effective associations.",
        icon: "UsersRound"
      },
      {
        title: "Governance & Compliance",
        description: "Enforcing bylaws fairly, managing architectural reviews (ARC), and keeping up with evolving South Carolina statutes.",
        icon: "ShieldCheck"
      },
      {
        title: "Financial Management",
        description: "Delivering double-entry accounting, real-time balance sheets, automated dues collection, and long-term reserve planning.",
        icon: "BadgeDollarSign"
      },
      {
        title: "Community Communication",
        description: "Providing modern resident portals, automated notifications, transparent board reporting, and prompt dispute resolution.",
        icon: "MessageCircle"
      },
      {
        title: "Covenant Enforcement",
        description: "Conducting objective, photographic compliance drives and sending respectful, automated violation notices.",
        icon: "ClipboardCheck"
      },
      {
        title: "Community Operations",
        description: "Overseeing facility maintenance, gate programming, pool vendors, and site inspections with dedicated managers.",
        icon: "Home"
      }
    ]
  },
  "residential-management": {
    title: "Residential Property Management",
    subtitle: "Maximizing Investment Returns & Asset Longevity",
    badge: "ROI & Tenant Stability",
    bgImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=85",
    description: "Comprehensive leasing, rent optimization, and tenant relations to protect asset value and maximize net operating income.",
    formOption: "Residential Rentals",
    sideImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=85",
    focusPoints: [
      {
        title: "ROI & Asset Optimization",
        description: "Conducting market analyses, optimizing rental rates, and minimizing vacancy cycles to maximize your net operating income.",
        icon: "TrendingUp"
      },
      {
        title: "Rigorous Tenant Placement",
        description: "Multi-point screening including credit checks, nationwide eviction reports, criminal history, and 3x income validation.",
        icon: "UsersRound"
      },
      {
        title: "Tenant Stability & Retention",
        description: "Building positive relations with residents, offering convenient portal payment options, and securing high lease renewal rates.",
        icon: "Handshake"
      },
      {
        title: "Maintenance Coordination",
        description: "Supervising critical repairs and preventative care using vetted contractors from our licensed network.",
        icon: "Wrench"
      },
      {
        title: "Asset Protection & Audits",
        description: "Conducting thorough move-in, move-out, and scheduled mid-lease inspections with photo documentation to preserve property value.",
        icon: "ShieldCheck"
      }
    ]
  },
  "commercial-management": {
    title: "Commercial Property Management",
    subtitle: "Elite Operations & Lease Administration",
    badge: "Professional Commercial Oversight",
    bgImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=85",
    description: "Strategic facility management, professional vendor oversight, and strict lease compliance for office, retail, and mixed-use properties.",
    formOption: "Commercial Management",
    sideImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=85",
    focusPoints: [
      {
        title: "Professional Oversight",
        description: "Deploying certified commercial asset managers to protect physical assets and ensure building safety compliance.",
        icon: "Building2"
      },
      {
        title: "Vendor Network Management",
        description: "Bidding, negotiating, and auditing contracts for janitorial, HVAC, security, elevators, and landscaping services.",
        icon: "Wrench"
      },
      {
        title: "Lease Administration",
        description: "Tracking escalations, managing CAM reconciliations, processing options, and maintaining high tenant rent retention.",
        icon: "ClipboardCheck"
      },
      {
        title: "Efficient Operations",
        description: "Implementing building management systems (BMS), reducing energy footprints, and planning capital expenditures (CapEx).",
        icon: "Cpu"
      }
    ]
  },
  "developer-services": {
    title: "Developer & Builder Services",
    subtitle: "Transition from Construction to Association",
    badge: "Development Continuity",
    bgImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=85",
    description: "Providing interim property operations, budget coordination, and strategic transition planning for master-planned communities.",
    formOption: "General Consultation",
    sideImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=85",
    focusPoints: [
      {
        title: "Interim Management",
        description: "Managing community assets and builder liabilities while residential phases are under construction.",
        icon: "HardHat"
      },
      {
        title: "Development Continuity",
        description: "Ensuring design review guidelines (DRB) and developer vision are upheld continuously across build phases.",
        icon: "Layers"
      },
      {
        title: "Budget & Financial Support",
        description: "Structuring initial operating budgets, estimating reserve requirements, and balancing developer subsidy calculations.",
        icon: "BadgeDollarSign"
      },
      {
        title: "Vendor Coordination",
        description: "Onboarding critical landscaping, civil maintenance, and utility infrastructure partners for new tracts.",
        icon: "Wrench"
      },
      {
        title: "Transition Planning",
        description: "Preparing documents, audits, and assets for a smooth turnover from developer control to the homeowner board.",
        icon: "Clock"
      }
    ]
  },
  "financial-management": {
    title: "Financial Management Services",
    subtitle: "Absolute Transparency & Accurate Reporting",
    badge: "Financial Stewardship",
    bgImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=85",
    description: "Rigorous accounting, transparent monthly distributions, and expert tax compliance for properties and community associations.",
    formOption: "Financial Services Only",
    sideImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=85",
    focusPoints: [
      {
        title: "Financial Transparency",
        description: "Providing real-time portal access to bank statements, general ledgers, invoices, and payment histories.",
        icon: "BadgeDollarSign"
      },
      {
        title: "Comprehensive Reporting",
        description: "Generating balance sheets, income statements, delinquency logs, and budget variances monthly by the 10th.",
        icon: "ClipboardCheck"
      },
      {
        title: "Budget Planning",
        description: "Facilitating annual committee workshops, analyzing historical run-rates, and mapping realistic funding schedules.",
        icon: "CalendarDays"
      },
      {
        title: "Bank Reconciliation",
        description: "Daily reconciliation of operating and reserve accounts to detect anomalies and guarantee asset security.",
        icon: "ShieldCheck"
      },
      {
        title: "Strict Accountability",
        description: "Enforcing dual-authorization on expenses, securing annual independent audits, and adhering to GASB standards.",
        icon: "UsersRound"
      }
    ]
  }
};

const caseStudies = {
  "hoa-management": {
    heading: "Association Stabilization Study",
    metric: "$140,000",
    metricLabel: "Bylaw Deficit Resolved",
    desc: "First Choice stabilized an Upstate townhome HOA with chronic budget deficits. By auditing historical vendor invoices and optimizing reserve allocations, we restored financial health in under six months.",
    result: "100% compliance rate with SC bylaws achieved."
  },
  "residential-management": {
    heading: "Investor Portfolio Enhancement",
    metric: "99.4%",
    metricLabel: "Rent Collection Efficiency",
    desc: "For a multi-family landlord with high vacancy rates, we implemented targeted digital leasing campaigns, 3x income vetting, and automatic tenant portal incentives to secure stable long-term tenancies.",
    result: "Average vacancy time reduced to under 12 days."
  },
  "commercial-management": {
    heading: "CAM Contract Optimization",
    metric: "14%",
    metricLabel: "Operating Cost Reduction",
    desc: "We consolidated mechanical, elevator, and cleaning services for a medical and retail complex in Columbia. Contract re-bidding and strict SLA reviews trimmed operational expenses without lowering quality.",
    result: "Saved tenants thousands in CAM reconciliations annually."
  },
  "developer-services": {
    heading: "Master-Planned Tract Transition",
    metric: "420",
    metricLabel: "Homes Handed Over",
    desc: "Supervised the multi-phase audit and transition of a large master-planned residential development from builder control to homeowner governance, resolving critical drainage and road disputes.",
    result: "Zero litigation and clean balance sheet turnover."
  },
  "financial-management": {
    heading: "Reserve Ledger Stabilization",
    metric: "12 Years",
    metricLabel: "Ledger History Audited",
    desc: "Reconciled over a decade of manual bookkeeping records for an active Greenville community, resolving unallocated dues disputes and ensuring absolute tax filing compliance.",
    result: "100% clean audit certification achieved."
  }
};

function FocusCard({ point, idx }) {
  const Icon = IconMap[point.icon] || ShieldCheck;

  return (
    <div className="group relative bg-white p-7 sm:p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[var(--brand-gold)]/30 transition-all duration-300 flex flex-col items-start gap-4">
      {/* Icon Frame */}
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#052946]/5 text-[var(--brand-gold)] group-hover:bg-[var(--brand-gold)] group-hover:text-white transition-all duration-300 shrink-0">
        <Icon size={18} strokeWidth={2.2} />
      </span>

      <div>
        <h3 className="font-display font-bold text-[16px] text-text-navy uppercase tracking-tight group-hover:text-[var(--brand-gold)] transition duration-200">
          {point.title}
        </h3>
        <p className="text-[13px] text-text-slate leading-[1.6] font-sans mt-2">
          {point.description}
        </p>
      </div>
    </div>
  );
}

function DynamicServiceCaseStudy({ slug }) {
  const study = caseStudies[slug];
  if (!study) return null;

  return (
    <section className="relative bg-[#021324] text-white py-10 lg:py-12 overflow-hidden">
      <div className="relative mx-auto w-full max-w-[1160px] px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Metric */}
          <div className="lg:col-span-4 flex flex-col justify-center items-start border-l-2 border-[var(--brand-gold)] pl-6">
            <span className="font-display font-black text-5xl lg:text-6.5xl text-[var(--brand-gold)] tracking-tight leading-none mb-2">{study.metric}</span>
            <span className="text-[10px] font-bold uppercase tracking-wider text-white/50">{study.metricLabel}</span>
          </div>

          {/* Right Column: Case study copy */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-brand-gold mb-2">CASE STUDY</span>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-white uppercase tracking-tight mb-3">{study.heading}</h3>
            <p className="text-[13px] text-white/70 leading-relaxed max-w-[680px] font-sans mb-3">{study.desc}</p>
            <div className="flex items-center gap-2 text-[11px] font-bold text-[var(--brand-gold)]">
              <CheckCircle2 size={13} className="shrink-0" />
              <span>{study.result}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ServicePage({ params }) {
  const { slug } = use(params);
  const service = serviceData[slug];

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-[#072642]">
      
      {/* ── CLEAN SPLIT-SCREEN HERO WITH LARGE PIC ── */}
      <section className="relative py-10 lg:py-14 bg-[#031b31] text-white overflow-hidden">
        <div className="relative mx-auto w-full max-w-[1160px] px-6 lg:px-8 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Copy */}
            <div className="lg:col-span-6 flex flex-col justify-start">
              {/* Tagline */}
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-gold)]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--tagline-gold)] font-sans">{service.badge}</span>
              </div>

              {/* Title */}
              <h1 className="font-display font-bold text-white uppercase leading-tight tracking-tight mb-3 text-3xl sm:text-4xl lg:text-5xl">
                {service.title}
              </h1>

              {/* Subtitle */}
              <p className="text-[12px] font-bold tracking-widest text-[var(--brand-gold)]/80 uppercase font-sans mb-5">
                {service.subtitle}
              </p>

              {/* Description */}
              <p className="text-[13.5px] sm:text-[14px] text-white/75 leading-relaxed font-sans max-w-[540px] mb-6">
                {service.description}
              </p>

              <div className="flex">
                <Link
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-2 bg-[var(--brand-gold)] hover:bg-white hover:text-[#072642] px-6 py-2.5 text-[10px] font-bold uppercase tracking-wider text-white transition-all duration-300 rounded-[4px] shadow-md cursor-pointer"
                >
                  Request Proposal
                  <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Right Column: Large Rounded Image */}
            <div className="lg:col-span-6 w-full">
              <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <Image 
                  src={service.bgImage} 
                  alt={service.title} 
                  fill 
                  priority 
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover" 
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── FOCUS PILLARS GRID ── */}
      <section className="py-10 lg:py-14 bg-gray-50/50">
        <div className="mx-auto w-full max-w-[1160px] px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-[600px] mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-text-navy uppercase tracking-tight">
              Our Core Focus Areas
            </h2>
            <div className="h-[1.5px] w-12 bg-[var(--brand-gold)] mx-auto mt-3" />
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.focusPoints.map((point, idx) => (
              <FocusCard key={point.title} point={point} idx={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* ── DYNAMIC CASE STUDY SECTION ── */}
      <DynamicServiceCaseStudy slug={slug} />

      {/* ── COMPLIANCE SPLIT SECTION WITH PHOTO ── */}
      <section className="bg-white py-10 lg:py-14 border-t border-gray-100">
        <div className="mx-auto w-full max-w-[1160px] px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Details & Bullet List */}
            <div className="lg:col-span-6 flex flex-col justify-start">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-gold)]" />
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-brand-gold font-sans">
                  SOUTH CAROLINA STANDARDS
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-text-navy uppercase tracking-tight">
                CERTIFIED COMPLIANCE & SLAs
              </h2>
              <p className="mt-3 text-[13px] text-text-slate leading-relaxed">
                As a fully certified and licensed property management firm in South Carolina, we combine local field knowledge with advanced property systems to deliver optimal outcomes.
              </p>

              {/* Bullet Grid */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {[
                  "24-Hour Urgent Response SLA",
                  "Double-Authorization Accounting",
                  "Annual Reserve Account Audits",
                  "CMCA / AMS Certified Managers",
                  "Fully Vetted Contractor Network",
                  "Direct Partner Advisory"
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-[var(--brand-gold)] mt-0.5 shrink-0" />
                    <span className="text-[12px] font-semibold text-text-navy leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Large Photo Section */}
            <div className="lg:col-span-6 w-full">
              <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                <Image 
                  src={service.sideImage} 
                  alt="Management Compliance" 
                  fill 
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover" 
                />
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* ── CTA BAR & CONTACT FORMS ── */}
      <CtaBar />
      <ContactForm defaultService={service.formOption} />
    </main>
  );
}
