"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CalendarDays, Phone } from "lucide-react";

export default function CtaBar() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[var(--brand-gold)] px-6 py-12 md:py-16 text-white">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto flex flex-col md:flex-row items-center justify-between gap-8 max-w-[1160px]"
      >
        <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
          {/* Pulsing icon ring */}
          <div className="relative shrink-0">
            <span className="absolute inset-0 rounded-full bg-white/20 animate-ping" />
            <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white/20">
              <CalendarDays className="h-7 w-7 text-white" strokeWidth={1.8} />
            </span>
          </div>
          <div>
            <h2 className="text-[20px] md:text-[24px] font-display font-bold leading-snug">
              Ready to Experience the First Choice Difference?
            </h2>
            <p className="text-[13px] md:text-[14px] font-medium text-white/85 mt-1.5">
              Let&apos;s discuss how we can help your community or property thrive.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
          <Link
            href="tel:8643260000"
            className="group inline-flex h-[48px] items-center gap-2 border-2 border-white/60 bg-transparent px-6 text-[11px] font-bold uppercase tracking-wider text-white transition-all duration-200 hover:border-white hover:bg-white/10 active:scale-[0.97] rounded-[4px]"
          >
            <Phone size={13} className="transition-transform duration-300 group-hover:scale-110" />
            (864) 326-0000
          </Link>
          <Link
            href="mailto:info@firstchoicepg.com"
            className="group inline-flex h-[48px] items-center gap-2 bg-[var(--primary-navy)] px-7 text-[11px] font-bold uppercase tracking-wider text-white transition-all duration-200 hover:bg-[var(--midnight-navy)] active:scale-[0.97] rounded-[4px]"
          >
            Schedule a Consultation
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

