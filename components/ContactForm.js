"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Mail, Phone, Clock, Send, CheckCircle2 } from "lucide-react";
import data from "../data/data.json";

const { contactForm: cf } = data;

const CardIconMap = { address: MapPin, phone: Phone, email: Mail, hours: Clock };

export default function ContactForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    propertyName: "",
    serviceType: cf.serviceOptions[0],
    message: ""
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");
    
    // Simulate API submission
    setTimeout(() => {
      setStatus("success");
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        propertyName: "",
        serviceType: cf.serviceOptions[0],
        message: ""
      });
    }, 1200);
  };

  // Calculate form completion progress percentage
  const fieldsFilled = [
    form.firstName.trim(),
    form.lastName.trim(),
    form.email.trim(),
    form.phone.trim(),
    form.propertyName.trim(),
    form.serviceType.trim(),
    form.message.trim()
  ].filter(val => val !== "").length;
  const progressPercent = Math.min(Math.round((fieldsFilled / 7) * 100), 100);

  return (
    <section id="contact" className="relative bg-white overflow-hidden py-20 lg:py-28"
      style={{ borderTop: "1px solid #eceae4" }}>
      
      {/* Contact card shimmer class (premium-shimmer) is defined in app/globals.css */}


      {/* ── Background Grid ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute z-0"
        style={{
          inset: "-40%",
          backgroundImage: "radial-gradient(rgba(5, 41, 70, 0.03) 1.5px, transparent 1.5px)",
          backgroundSize: "32px 32px",
          maskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, black 40%, transparent 100%)",
        }}
      />

      {/* Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[var(--brand-gold)]/[0.045] rounded-full blur-[110px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-[#052946]/[0.035] rounded-full blur-[110px] pointer-events-none z-0" />

      <div className="relative z-10 mx-auto w-full max-w-[1160px] px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Direct info block */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-5 border border-[var(--brand-gold)]/25 rounded-full px-3.5 py-1.5 bg-[var(--brand-gold)]/[0.03] shadow-[0_2px_10px_rgba(201,155,49,0.03)] w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--brand-gold)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--brand-gold)]"></span>
              </span>
              <p className="text-[10px] font-black tracking-[0.25em] uppercase text-[var(--brand-gold)]">{cf.badge}</p>
            </div>

            {/* Title */}
            <h2
              className="font-display font-bold text-[var(--text-navy)] leading-[1.1] tracking-tight mb-5"
              style={{ fontSize: "clamp(2rem, 4.5vw, 2.8rem)" }}
            >
              <span className="font-serif italic font-normal text-[var(--text-navy)]/95 block mb-1">
                {cf.heading1}
              </span>
              <span 
                className="shimmer-gradient block mt-1"
                style={{
                  color: "transparent",
                  backgroundImage: "linear-gradient(90deg, #c99b31 0%, #f1cd7c 25%, #c99b31 50%, #f1cd7c 75%, #c99b31 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  backgroundSize: "200% auto",
                }}
              >
                {cf.heading2}
              </span>
            </h2>

            <p className="text-[14px] font-sans leading-[1.7] text-[var(--text-slate)] mb-6 max-w-[480px]">
              {cf.description}
            </p>

            {/* Premium Gold Accent Line Divider */}
            <div className="h-[1.5px] w-20 bg-gradient-to-r from-[var(--brand-gold)] to-transparent mb-8" />

            {/* 2x2 Grid of Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {cf.cards.map((card) => {
                const Icon = CardIconMap[card.type];
                const isClickable = card.href;
                const Tag = isClickable ? "a" : "div";
                return (
                  <Tag
                    key={card.label}
                    {...(isClickable ? { href: card.href } : {})}
                    className={`premium-shimmer p-4 rounded-2xl border border-[rgba(5,41,70,0.05)] bg-[#f7f8fa]/80 backdrop-blur-sm shadow-sm hover:border-[rgba(201,155,49,0.3)] hover:shadow-md transition-all duration-300${isClickable ? " group cursor-pointer hover:bg-white flex flex-col justify-start" : ""}`}
                  >
                    <div className="flex items-center gap-2 mb-2 text-[var(--brand-gold)]">
                      <Icon size={13} />
                      <span className="text-[9.5px] font-black uppercase tracking-wider text-[var(--text-navy)]/40 font-sans">{card.label}</span>
                    </div>
                    <p className={`text-[13.5px] font-bold text-[var(--text-navy)]${isClickable ? " group-hover:text-[var(--brand-gold)] transition-colors duration-200" : ""}`}>{card.line1}</p>
                    <p className="text-[11.5px] text-[var(--text-slate)] mt-0.5 leading-tight">
                      {card.type === "phone" || card.type === "email" ? (
                        <span className="flex items-center gap-1.5 font-medium">
                          <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#10b981] animate-pulse shrink-0" />
                          {card.line2}
                        </span>
                      ) : card.line2}
                    </p>
                  </Tag>
                );
              })}
            </div>

          </div>

          {/* Right Column: Form Card wrapper */}
          <div className="lg:col-span-7 w-full flex justify-center sm:justify-end">
            
            <div className="relative w-full max-w-[620px] rounded-[32px] border border-[rgba(5,41,70,0.06)] bg-white/95 backdrop-blur-md shadow-2xl p-6 sm:p-10 overflow-hidden flex flex-col justify-center min-h-[500px]">
              
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="flex flex-col items-center justify-center text-center py-10"
                  >
                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#10b981]/10 border border-[#10b981]/25 text-[#10b981] mb-6">
                      <CheckCircle2 size={32} />
                    </span>
                    <h3 className="font-display font-bold text-[22px] text-[var(--text-navy)] leading-tight">
                      {cf.successTitle}
                    </h3>
                    <p className="text-[14px] text-[var(--text-slate)] leading-relaxed mt-3 max-w-[360px]">
                      {cf.successDesc}
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="mt-8 px-6 py-2.5 bg-[var(--primary-navy)] text-white hover:bg-[var(--primary-navy)]/90 font-bold text-[11px] uppercase tracking-wider rounded-[4px] transition-all duration-200 active:scale-[0.97]"
                    >
                      {cf.resetLabel}
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col gap-4.5 relative z-10"
                  >
                    {/* Dynamic Proposal Progress Tracker */}
                    <div className="relative w-full mb-2 border-b border-black/5 pb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-[var(--text-navy)]/40">{cf.progressLabel}</span>
                        <span className="text-[10px] font-mono font-bold text-[var(--brand-gold)]">{progressPercent}%</span>
                      </div>
                      <div className="w-full h-1 bg-black/5 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-[var(--brand-gold)] to-[#f1cd7c]"
                          animate={{ width: `${progressPercent}%` }}
                          transition={{ duration: 0.35, ease: "easeOut" }}
                        />
                      </div>
                    </div>

                    {/* Name grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[9.5px] font-black uppercase tracking-[0.12em] text-[var(--text-navy)]/60 font-sans">{cf.labels.firstName}</label>
                        <input
                          required
                          type="text"
                          name="firstName"
                          value={form.firstName}
                          onChange={handleChange}
                          placeholder={cf.placeholders.firstName}
                          className="h-11 px-4 border border-black/10 focus:border-[var(--brand-gold)]/60 bg-[#f8f9fb] focus:bg-white transition duration-200 text-[13.5px] font-medium outline-none rounded-[6px] focus:ring-2 focus:ring-[var(--brand-gold)]/30 focus:shadow-[0_4px_12px_rgba(201,155,49,0.08)]"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[9.5px] font-black uppercase tracking-[0.12em] text-[var(--text-navy)]/60 font-sans">{cf.labels.lastName}</label>
                        <input
                          required
                          type="text"
                          name="lastName"
                          value={form.lastName}
                          onChange={handleChange}
                          placeholder={cf.placeholders.lastName}
                          className="h-11 px-4 border border-black/10 focus:border-[var(--brand-gold)]/60 bg-[#f8f9fb] focus:bg-white transition duration-200 text-[13.5px] font-medium outline-none rounded-[6px] focus:ring-2 focus:ring-[var(--brand-gold)]/30 focus:shadow-[0_4px_12px_rgba(201,155,49,0.08)]"
                        />
                      </div>
                    </div>

                    {/* Email/Phone grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[9.5px] font-black uppercase tracking-[0.12em] text-[var(--text-navy)]/60 font-sans">{cf.labels.email}</label>
                        <input
                          required
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder={cf.placeholders.email}
                          className="h-11 px-4 border border-black/10 focus:border-[var(--brand-gold)]/60 bg-[#f8f9fb] focus:bg-white transition duration-200 text-[13.5px] font-medium outline-none rounded-[6px] focus:ring-2 focus:ring-[var(--brand-gold)]/30 focus:shadow-[0_4px_12px_rgba(201,155,49,0.08)]"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[9.5px] font-black uppercase tracking-[0.12em] text-[var(--text-navy)]/60 font-sans">{cf.labels.phone}</label>
                        <input
                          required
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder={cf.placeholders.phone}
                          className="h-11 px-4 border border-black/10 focus:border-[var(--brand-gold)]/60 bg-[#f8f9fb] focus:bg-white transition duration-200 text-[13.5px] font-medium outline-none rounded-[6px] focus:ring-2 focus:ring-[var(--brand-gold)]/30 focus:shadow-[0_4px_12px_rgba(201,155,49,0.08)]"
                        />
                      </div>
                    </div>

                    {/* Property / Association Name */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[9.5px] font-black uppercase tracking-[0.12em] text-[var(--text-navy)]/60 font-sans">{cf.labels.propertyName}</label>
                      <input
                        required
                        type="text"
                        name="propertyName"
                        value={form.propertyName}
                        onChange={handleChange}
                        placeholder={cf.placeholders.propertyName}
                        className="h-11 px-4 border border-black/10 focus:border-[var(--brand-gold)]/60 bg-[#f8f9fb] focus:bg-white transition duration-200 text-[13.5px] font-medium outline-none rounded-[6px] focus:ring-2 focus:ring-[var(--brand-gold)]/30 focus:shadow-[0_4px_12px_rgba(201,155,49,0.08)]"
                      />
                    </div>

                    {/* Dropdown service needed */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[9.5px] font-black uppercase tracking-[0.12em] text-[var(--text-navy)]/60 font-sans">{cf.labels.serviceNeeded}</label>
                      <select
                        name="serviceType"
                        value={form.serviceType}
                        onChange={handleChange}
                        className="h-11 px-3 border border-black/10 focus:border-[var(--brand-gold)]/60 bg-[#f8f9fb] focus:bg-white transition duration-200 text-[13px] font-semibold text-[var(--text-navy)] outline-none rounded-[6px] focus:ring-2 focus:ring-[var(--brand-gold)]/30 focus:shadow-[0_4px_12px_rgba(201,155,49,0.08)]"
                      >
                        {cf.serviceOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>

                    {/* Message Area */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[9.5px] font-black uppercase tracking-[0.12em] text-[var(--text-navy)]/60 font-sans">{cf.labels.message}</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder={cf.placeholders.message}
                        className="p-4 border border-black/10 focus:border-[var(--brand-gold)]/60 bg-[#f8f9fb] focus:bg-white transition duration-200 text-[13.5px] font-medium outline-none rounded-[6px] resize-none focus:ring-2 focus:ring-[var(--brand-gold)]/30 focus:shadow-[0_4px_12px_rgba(201,155,49,0.08)]"
                      />
                    </div>

                    {/* Button */}
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="group w-full h-[48px] rounded-[4px] bg-[var(--brand-gold)] hover:bg-[var(--primary-navy)] text-white hover:!text-white font-bold text-[11px] uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all duration-200 active:scale-[0.97] shadow-lg border border-[var(--brand-gold)] hover:border-[var(--primary-navy)] disabled:opacity-75 disabled:pointer-events-none mt-2 cursor-pointer"
                    >
                      {status === "loading" ? (
                        <>
                          <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          {cf.loadingLabel}
                        </>
                      ) : (
                        <>
                          {cf.submitLabel}
                          <Send size={12} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
