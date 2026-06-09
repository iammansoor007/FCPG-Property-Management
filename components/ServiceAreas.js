"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { SouthCarolinaMap } from "./Icons";

const cities = [
  "Greenville", "Spartanburg", "Anderson", "Columbia",
  "Charleston", "Myrtle Beach", "Florence", "Beaufort",
  "And Surrounding Areas"
];

export default function ServiceAreas() {
  return (
    <section className="bg-white px-6 py-16 lg:py-24">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-[1fr_auto] lg:grid-cols-[320px_1fr_260px] items-center gap-12 max-w-[1160px]">
        {/* Left: copy */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start justify-center"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--brand-gold)]">Proudly Serving</p>
          <h2 className="mt-3 text-[32px] md:text-[38px] font-display font-bold leading-[1.1] text-[var(--text-navy)]">
            Communities Across South Carolina
          </h2>
          <p className="mt-5 text-[13px] md:text-[14px] font-medium leading-relaxed text-[var(--text-slate)]">
            From the Upstate to the Lowcountry, we provide exceptional property management services statewide.
          </p>
          <Link
            href="#contact"
            className="group mt-8 inline-flex h-11 items-center gap-2 bg-[var(--primary-navy)] px-7 text-[11px] font-semibold uppercase text-white tracking-wider transition-all duration-200 hover:bg-[var(--midnight-navy)] active:scale-[0.97] rounded-[4px]"
          >
            View Our Service Areas
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </motion.div>

        {/* Center: map with float animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          animate={{ y: [0, -8, 0] }}
          // Note: whileInView + animate y float — use separate wrapper for float
          className="flex justify-center items-center w-full md:max-w-[420px] lg:max-w-none"
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <SouthCarolinaMap />
          </motion.div>
        </motion.div>

        {/* Right: city chips */}
        <ul className="grid grid-cols-2 md:grid-cols-1 gap-3 w-full border-t border-gray-100 pt-8 md:border-t-0 md:pt-0">
          {cities.map((city, i) => (
            <motion.li
              key={city}
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.4 }}
              className="group flex items-center gap-3 px-3 py-2 rounded-[4px] text-[13.5px] lg:text-[14px] font-medium text-[var(--text-slate)] transition-all duration-200 hover:bg-[var(--light-gray)] hover:text-[var(--primary-navy)] cursor-default"
            >
              <CheckCircle2
                size={16}
                className="text-[var(--brand-gold)] shrink-0 transition-transform duration-200 group-hover:scale-110"
                strokeWidth={2.5}
              />
              {city}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

