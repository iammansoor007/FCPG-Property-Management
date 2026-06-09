"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  BadgeDollarSign,
  Handshake,
  MessageCircle,
  UsersRound,
  ClipboardCheck,
  Landmark
} from "lucide-react";

const values = [
  ["Financial Accountability", "Transparent reporting, accurate reconciliation, and responsible stewardship.", BadgeDollarSign],
  ["Vendor Coordination", "Trusted vendor network ensuring quality service and cost efficiency.", Handshake],
  ["Communication", "Clear, consistent, and proactive communication with all stakeholders.", MessageCircle],
  ["Community Focused", "Enhancing community value through engagement and operational excellence.", UsersRound],
  ["Compliance & Governance", "Ensuring compliance with covenants, regulations, and best practices.", ClipboardCheck],
  ["Technology Forward", "Leveraging modern technology to improve efficiency and provide real-time insights.", Landmark]
];

export default function WhyChoose() {
  return (
    <section id="about-us" className="bg-white px-6 py-16 lg:py-24">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-12 lg:gap-16 max-w-[1160px]">
        <div className="flex flex-col justify-center items-start">
          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--brand-gold)]">Why Choose First Choice</p>
          <h2 className="mt-3 text-[32px] md:text-[40px] font-display font-bold leading-[1.1] text-[var(--text-navy)]">
            A Partner You Can Rely On
          </h2>
          <p className="mt-6 text-[13.5px] md:text-[14.5px] font-medium leading-relaxed text-[var(--text-slate)]">
            We go beyond day-to-day management. We are strategic partners focused on protecting assets, enhancing communities, and delivering exceptional experiences.
          </p>
          <Link href="#contact" className="group mt-8 inline-flex h-12 items-center gap-2 bg-[var(--primary-navy)] px-8 text-[11px] font-semibold uppercase text-white tracking-wider transition-all duration-200 hover:bg-[var(--midnight-navy)] active:scale-[0.97] rounded-[4px]">
            About Our Company
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 border-[#d9dee5] border-t md:border-t-0">
          {values.map(([title, text, Icon], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.035, duration: 0.5 }}
              className={`group relative p-6 lg:p-8 text-center border-b border-[#d9dee5] sm:border-r border-[#d9dee5] transition-all duration-300 hover:bg-[var(--light-gray)] cursor-default overflow-hidden ${index === 5 ? "border-b-0 sm:border-r-0" : ""
                } ${(index + 1) % 2 === 0 ? "sm:border-r-0 md:border-r" : ""
                } ${(index + 1) % 3 === 0 ? "md:border-r-0" : ""
                } ${index >= 3 ? "md:border-b-0" : ""
                }`}
            >
              {/* Gold top-border reveal on hover */}
              <span className="absolute inset-x-0 top-0 h-[2px] bg-[var(--brand-gold)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <Icon className="mx-auto h-9 w-9 text-[var(--brand-gold)] transition-transform duration-300 group-hover:scale-110" strokeWidth={1.8} />
              <h3 className="mt-4 text-[13.5px] font-semibold uppercase tracking-wider text-[var(--text-navy)] group-hover:text-[var(--primary-navy)] transition-colors duration-200">{title}</h3>
              <p className="mt-3 text-[12px] font-medium leading-[1.6] text-[var(--text-slate)]">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
