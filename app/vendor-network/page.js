"use client";

import Image from "next/image";
import Link from "next/link";
import { Clock, ShieldCheck, Users, CheckCircle2, ArrowRight } from "lucide-react";
import VendorNetwork from "@/components/VendorNetwork";
import CtaBar from "@/components/CtaBar";
import ContactForm from "@/components/ContactForm";

function WorkOrderRoadmap() {
  const steps = [
    {
      num: "01 / DISPATCH",
      title: "Rapid Mobilization",
      desc: "Work orders are instantly generated in our portal and dispatched to the nearest approved crew. Emergency issues get responsive dispatch in under 15 minutes."
    },
    {
      num: "02 / INSPECTION",
      title: "Field Diagnosis",
      desc: "Technicians conduct checks, document issues with geotagged photo logs, and upload real-time estimates directly from site locations."
    },
    {
      num: "03 / APPROVAL",
      title: "Owner Consent",
      desc: "Owners and board treasurers receive instant, itemized repair notifications on their mobile devices, approving proposals with a single click."
    },
    {
      num: "04 / PAYMENT",
      title: "Quick Settlement",
      desc: "Once work is verified complete, we process payments to the vendor within 7 business days, ensuring premium priority status for future jobs."
    }
  ];

  return (
    <section className="py-10 lg:py-14 bg-white border-t border-b border-gray-100 relative overflow-hidden text-[#072642]">
      <div className="relative mx-auto w-full max-w-[1160px] px-6 lg:px-8">
        <div className="text-center max-w-[600px] mx-auto mb-12">
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-gold">OUR CYCLE</span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-text-navy uppercase tracking-tight mt-2">
            The Work Order SLA Lifecycle
          </h2>
          <div className="h-[1.5px] w-12 bg-[var(--brand-gold)] mx-auto mt-3" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div key={step.num} className="group p-6 rounded-2xl border border-gray-100 bg-[#f8f9fb]/50 hover:bg-white hover:border-[var(--brand-gold)]/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between min-h-[200px]">
              <div>
                <span className="font-mono text-[var(--brand-gold)] font-bold text-xs block mb-3">{step.num}</span>
                <h3 className="font-display font-bold text-[15px] text-text-navy uppercase tracking-tight mb-2 group-hover:text-[var(--brand-gold)] transition duration-200">{step.title}</h3>
                <p className="text-[12.5px] text-text-slate leading-relaxed font-sans">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function VendorNetworkPage() {
  return (
    <main className="min-h-screen bg-white text-[#072642]">
      
      {/* ── SPLIT HERO WITH PHOTO ── */}
      <section className="relative py-10 lg:py-14 bg-[#031b31] text-white overflow-hidden">
        <div className="relative mx-auto w-full max-w-[1160px] px-6 lg:px-8 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Copy */}
            <div className="lg:col-span-6 flex flex-col justify-start">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-gold)]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--tagline-gold)] font-sans">
                  APPROVED REGISTRY
                </span>
              </div>

              <h1 className="font-display font-bold text-white uppercase leading-tight tracking-tight mb-3 text-3xl sm:text-4xl lg:text-5xl">
                Approved Vendor Network
              </h1>

              <p className="text-[12px] font-bold tracking-widest text-[var(--brand-gold)]/80 uppercase font-sans mb-5">
                Built for Speed, Compliance & Quality
              </p>

              <p className="text-[13.5px] sm:text-[14px] text-white/75 leading-relaxed font-sans max-w-[540px] mb-6">
                First Choice Property Group partners with South Carolina's premier contractors. By enforcing strict general liability auditing and digital work-order SLAs, we protect your assets and resolve requests efficiently.
              </p>

              <div className="flex">
                <Link
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-2 bg-[var(--brand-gold)] hover:bg-white hover:text-[#072642] px-6 py-2.5 text-[10px] font-bold uppercase tracking-wider text-white transition-all duration-300 rounded-[4px] shadow-md cursor-pointer"
                >
                  Join Our Network
                  <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Right Column: Rounded Contractor Photo */}
            <div className="lg:col-span-6 w-full">
              <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <Image 
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=85" 
                  alt="Contractors working" 
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

      {/* ── INTERACTIVE TIMELINE TIMELINE BROWSER (DARK SEAMLESS PANEL) ── */}
      <VendorNetwork isPage={true} />

      {/* ── WORK ORDER CYCLE ROADMAP ── */}
      <WorkOrderRoadmap />

      {/* ── FUNNELS ── */}
      <CtaBar />
      <ContactForm defaultService="General Consultation" />
    </main>
  );
}
