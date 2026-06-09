"use client";

import { motion } from "framer-motion";
import { Clock3, Building2, UsersRound, Award } from "lucide-react";

const trustStats = [
  ["20+", "Years in Business", Clock3],
  ["Thousands", "of Properties Managed", Building2],
  ["Experienced", "Management Team", UsersRound],
  ["Proven Results", "& Long-Term Partnerships", Award]
];

export default function TrustStrip() {
  return (
    <section className="bg-white px-6 py-16 lg:py-20 border-b border-gray-100">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-[300px_1fr] items-center gap-10 lg:gap-16 max-w-[1160px]">
        <h2 className="border-b lg:border-b-0 lg:border-r border-[#bec7d2] pb-6 lg:pb-0 lg:pr-12 text-[28px] md:text-[34px] font-display font-bold leading-[1.1] text-[var(--text-navy)]">
          20+ Years of
          <br />
          Experience You
          <br />
          Can Trust
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {trustStats.map(([value, label, Icon], index) => (
            <motion.div
              key={value}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="group text-center md:border-r border-gray-200 last:border-r-0 md:px-4 py-4 rounded-[4px] transition-all duration-300 hover:bg-[var(--light-gray)] cursor-default"
            >
              <Icon className="mx-auto h-9 w-9 text-[var(--brand-gold)] transition-transform duration-300 group-hover:scale-110" strokeWidth={1.8} />
              <p className="mt-4 text-[20px] lg:text-[24px] font-bold text-[var(--text-navy)] group-hover:text-[var(--primary-navy)] transition-colors duration-200">{value}</p>
              <p className="mx-auto mt-2 max-w-[140px] text-[12px] font-semibold leading-normal text-[var(--text-slate)]">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
