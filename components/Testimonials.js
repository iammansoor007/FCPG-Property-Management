"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  ["First Choice Property Group has been an invaluable partner to our HOA. Their communication, professionalism, and attention to detail are unmatched.", "HOA Board President", "Greenville, SC"],
  ["Their team has helped us maximize our rental income while minimizing vacancies and maintenance issues. Highly recommended!", "Real Estate Investor", "Columbia, SC"],
  ["From development startup to ongoing operations, their support has been instrumental in building a successful community.", "Community Developer", "Spartanburg, SC"]
];

export default function Testimonials() {
  return (
    <section id="resources" className="bg-[var(--light-gray)] px-6 py-16 lg:py-24">
      <div className="mx-auto max-w-[1160px] text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--brand-gold)]">What Our Clients Say</p>
        <h2 className="mt-3 text-[28px] md:text-[36px] font-display font-bold tracking-tight text-[var(--text-navy)]">
          Trusted by Communities. Chosen by Professionals.
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(([quote, name, city], index) => (
            <motion.article
              key={name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="group relative bg-white p-8 text-left shadow-[0_8px_24px_rgba(5,34,61,0.04)] hover:shadow-[0_20px_48px_rgba(5,34,61,0.10)] rounded-[4px] border border-gray-100 hover:border-[var(--brand-gold)]/30 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Gold left border reveal */}
              <span className="absolute inset-y-0 left-0 w-[3px] bg-[var(--brand-gold)] scale-y-0 group-hover:scale-y-100 transition-transform duration-400 origin-top rounded-l-[4px]" />
              <div>
                <p className="text-[48px] font-serif font-bold leading-none text-[var(--brand-gold)] h-8 -mt-2 transition-transform duration-300 group-hover:scale-110 origin-left inline-block">“</p>
                <p className="text-[13px] md:text-[14px] font-medium leading-[1.65] text-[var(--text-slate)] italic">
                  {quote}
                </p>
              </div>
              <div className="mt-8 flex items-center gap-3.5 border-t border-gray-100 pt-5">
                <Image
                  src={`https://images.unsplash.com/photo-${index === 0 ? "1500648767791-00dcc994a43e" : index === 1 ? "1472099645785-5658abf4ff4e" : "1507003211169-0a1dd7228f2d"}?auto=format&fit=crop&w=120&q=80`}
                  alt={name}
                  width={40}
                  height={40}
                  className="h-[40px] w-[40px] rounded-full object-cover shadow-sm ring-2 ring-transparent group-hover:ring-[var(--brand-gold)]/40 transition-all duration-300"
                />
                <div>
                  <p className="text-[13px] font-semibold text-[var(--text-navy)]">{name}</p>
                  <p className="text-[11px] font-semibold text-[#627386]">{city}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        <div className="mt-10 flex justify-center gap-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--brand-gold)] cursor-pointer" />
          <span className="h-2.5 w-2.5 rounded-full bg-gray-300 hover:bg-gray-400 transition cursor-pointer" />
          <span className="h-2.5 w-2.5 rounded-full bg-gray-300 hover:bg-gray-400 transition cursor-pointer" />
        </div>
      </div>
    </section>
  );
}
