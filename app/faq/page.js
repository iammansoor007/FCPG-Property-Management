"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  HelpCircle,
  Phone,
  Mail,
  ChevronDown,
  ArrowDown,
  Building2,
  Clock,
  ShieldCheck,
  Send
} from "lucide-react";

import data from "@/data/data.json";
import CtaBar from "@/components/CtaBar";
import ContactForm from "@/components/ContactForm";

const { resourcesFAQ } = data;
const { badge, heading1, heading2, description, supportCard, faqs } = resourcesFAQ;

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [openIdx, setOpenIdx] = useState(null);

  // Extract unique categories dynamically
  const categories = ["All", ...Array.from(new Set(faqs.map((faq) => faq.category)))];

  // Count items per category
  const getCategoryCount = (cat) => {
    if (cat === "All") return faqs.length;
    return faqs.filter((faq) => faq.category === cat).length;
  };

  // Filter FAQs
  const filteredFaqs = selectedCategory === "All"
    ? faqs
    : faqs.filter((faq) => faq.category === selectedCategory);

  const toggleFaq = (index) => {
    setOpenIdx(openIdx === index ? null : index);
  };

  const handleScrollDown = () => {
    const section = document.getElementById("faq-content");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-gray-50/50 text-[#072642]">
      {/* ── HERO SECTION ── */}
      <section className="relative py-20 lg:py-24 bg-[#072642] text-white overflow-hidden">
        {/* Background Image overlay */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=85"
            alt="FCPG Header Background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-15 mix-blend-overlay"
          />
        </div>

        <div className="relative mx-auto w-full max-w-[1160px] px-6 lg:px-8 z-10">
          <div className="max-w-[700px]">
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-gold)]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--tagline-gold)]">
                {badge}
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-3.5xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight tracking-tight text-white">
              {heading1} <span className="text-[var(--brand-gold)]">{heading2}</span>
            </h1>

            {/* Description */}
            <p className="mt-4 text-[14px] sm:text-[15px] md:text-[16px] text-white/80 leading-relaxed font-sans max-w-[600px]">
              {description}
            </p>
          </div>
        </div>
      </section>

      {/* ── MAIN FAQ WRAPPER ── */}
      <section id="faq-content" className="py-16 sm:py-20 lg:py-24 scroll-mt-24">
        <div className="mx-auto w-full max-w-[1160px] px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* ── LEFT COLUMN: Filter & Clean Accordions ── */}
            <div className="lg:col-span-8 flex flex-col gap-8 w-full">
              
              {/* Category Filter Tabs (Minimalist Tab Bar) */}
              <div className="flex flex-wrap gap-2 pb-2 border-b border-gray-200">
                {categories.map((cat) => {
                  const isActive = selectedCategory === cat;
                  const count = getCategoryCount(cat);
                  return (
                    <button
                      key={cat}
                      onClick={() => {
                        setSelectedCategory(cat);
                        setOpenIdx(null);
                      }}
                      className={`px-4 py-2.5 text-[11px] font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer border-b-2 -mb-[10px] flex items-center gap-2
                        ${isActive
                          ? "border-[var(--brand-gold)] text-text-navy font-bold"
                          : "border-transparent text-text-navy/60 hover:text-text-navy hover:border-gray-300"
                        }
                      `}
                    >
                      {cat}
                      <span className="text-[9px] text-text-navy/40 font-mono font-bold bg-gray-100 px-1.5 py-0.5 rounded-full">
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Minimalist FAQ Border-Bottom Accordion List */}
              <div className="flex flex-col mt-4">
                <AnimatePresence mode="popLayout">
                  {filteredFaqs.map((faq, index) => {
                    const isOpen = openIdx === index;
                    return (
                      <motion.div
                        key={faq.q}
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="border-b border-gray-200 py-4.5 first:pt-0"
                      >
                        {/* Question trigger */}
                        <button
                          onClick={() => toggleFaq(index)}
                          className="w-full text-left flex items-start justify-between gap-5 py-3 cursor-pointer group focus-visible:outline-none"
                        >
                          <div className="flex flex-col gap-2">
                            <span className="text-[9px] font-bold text-brand-gold uppercase tracking-widest">
                              {faq.category}
                            </span>
                            <h3 className={`text-[15px] sm:text-[16px] font-bold text-text-navy transition-colors duration-200
                              ${isOpen ? "text-[var(--brand-gold)]" : "group-hover:text-[var(--brand-gold)]"}
                            `}>
                              {faq.q}
                            </h3>
                          </div>
                          
                          {/* Minimal Chevron */}
                          <div className="flex-shrink-0 mt-1.5 text-text-navy/40 group-hover:text-text-navy transition-colors">
                            <motion.div
                              animate={{ rotate: isOpen ? 180 : 0 }}
                              transition={{ duration: 0.25, ease: "easeOut" }}
                            >
                              <ChevronDown size={16} strokeWidth={2.5} />
                            </motion.div>
                          </div>
                        </button>

                        {/* Collapsible Answer */}
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25, ease: "easeInOut" }}
                            >
                              <div className="pb-4 pt-2 text-[13px] sm:text-[13.5px] text-text-slate leading-relaxed font-sans max-w-[680px]">
                                {faq.a}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
            </div>

            {/* ── RIGHT COLUMN: Clean Corporate Support Card ── */}
            <div className="lg:col-span-4 w-full lg:sticky lg:top-28">
              <div className="p-6 rounded-xl border border-gray-200 bg-white shadow-sm flex flex-col gap-6">
                
                {/* Title */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-1.5 text-[var(--brand-gold)]">
                    <HelpCircle size={14} className="shrink-0" />
                    <span className="text-[9px] font-bold uppercase tracking-wider font-sans">SUPPORT CONSOLE</span>
                  </div>
                  <h3 className="text-[17px] font-bold text-text-navy font-display uppercase tracking-tight">
                    {supportCard.title}
                  </h3>
                  <p className="text-[13px] text-text-slate leading-relaxed font-sans">
                    {supportCard.subtitle}
                  </p>
                </div>

                {/* Status stats */}
                <div className="flex flex-col gap-3 bg-gray-50 p-4 rounded-lg border border-gray-100">
                  {supportCard.stats.map((stat) => (
                    <div key={stat.label} className="flex items-center justify-between text-[11px] font-semibold border-b border-gray-200/50 last:border-0 pb-2 last:pb-0">
                      <span className="text-text-slate font-sans">{stat.label}</span>
                      <span className="text-text-navy font-mono font-bold">{stat.value}</span>
                    </div>
                  ))}
                </div>

                {/* Communication triggers */}
                <div className="flex flex-col gap-2.5">
                  <Link
                    href={supportCard.phoneHref}
                    className="flex h-11 w-full items-center justify-center gap-2 border border-gray-200 rounded-md text-[11px] font-bold uppercase tracking-wider text-text-navy bg-white hover:bg-gray-50 hover:border-gray-300 transition active:scale-[0.98]"
                  >
                    <Phone size={13} className="text-brand-gold" />
                    {supportCard.phone}
                  </Link>
                  <Link
                    href={supportCard.emailHref}
                    className="flex h-11 w-full items-center justify-center gap-2 border border-gray-200 rounded-md text-[11px] font-bold uppercase tracking-wider text-text-navy bg-white hover:bg-gray-50 hover:border-gray-300 transition active:scale-[0.98]"
                  >
                    <Mail size={13} className="text-brand-gold" />
                    {supportCard.email}
                  </Link>
                </div>

                {/* Primary CTA request dispatch */}
                <Link
                  href={supportCard.ctaHref}
                  className="group flex h-11 w-full items-center justify-center gap-2 bg-[#072642] text-[10.5px] font-bold uppercase tracking-wider text-white hover:bg-[var(--brand-gold)] transition-all duration-300 rounded-[4px] shadow-sm cursor-pointer"
                >
                  <Send size={12} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  {supportCard.ctaLabel}
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA BAR & FOOTER FUNNEL ── */}
      <CtaBar />
      <ContactForm />
    </main>
  );
}
