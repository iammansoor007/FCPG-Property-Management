"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CalendarDays } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Hero() {
  return (
    <section className="relative min-h-[380px] lg:min-h-[460px] overflow-hidden bg-[var(--midnight-navy)] flex items-center text-white">
      <Image
        src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85"
        alt="Townhome community street"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Visual overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--midnight-navy)] via-[var(--midnight-navy)]/85 to-[var(--midnight-navy)]/15 md:from-[var(--midnight-navy)] md:via-[var(--midnight-navy)]/80 md:to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--midnight-navy)]/40 via-transparent to-transparent" />

      <div className="relative mx-auto w-full max-w-[1160px] px-6 lg:px-8 py-4 lg:py-8">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          className="max-w-[620px]"
        >
          {/* Tagline pill */}
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 mb-3">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--brand-gold)] animate-pulse" />
            <span className="text-[11px] md:text-[12px] font-semibold uppercase tracking-[0.18em] text-[var(--tagline-gold)]">
              Professional Property Management
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-[32px] sm:text-[45px] lg:text-[54px] font-display font-bold leading-[1.08] tracking-tight text-white"
          >
            Managing Communities.
            <br />
            Protecting Investments.
            <br />
            <span className="text-[var(--brand-gold)]">Maximizing Value.</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-3 max-w-[520px] text-[13.5px] md:text-[15px] font-normal leading-[1.65] text-white/80"
          >
            First Choice Property Group is a full-service property management company proudly serving communities, property owners, investors, and developers throughout South Carolina.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="mt-4 flex flex-wrap gap-4"
          >
            {/* Primary CTA */}
            <Link
              href="#contact"
              className="group inline-flex h-[48px] items-center justify-center gap-2.5 bg-[var(--brand-gold)] border border-[var(--brand-gold)] px-6 text-[12px] font-bold uppercase text-white tracking-wider transition-all duration-200 hover:bg-white hover:text-[#031b31]! hover:border-white active:scale-[0.97] rounded-[4px] shadow-lg shadow-black/10"
            >
              <CalendarDays size={14} className="transition-transform duration-300 group-hover:rotate-12" />
              Schedule a Consultation
            </Link>
            {/* Secondary CTA */}
            <Link
              href="#contact"
              className="inline-flex h-[48px] items-center justify-center border border-white/30 bg-transparent px-6 text-[12px] font-bold uppercase text-white/90 tracking-wider transition-all duration-200 hover:bg-white/10 hover:border-white active:scale-[0.97] rounded-[4px]"
            >
              Request a Proposal
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
