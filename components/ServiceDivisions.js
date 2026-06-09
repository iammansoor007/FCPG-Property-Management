"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  UsersRound,
  Home,
  Building2,
  HardHat,
  BadgeDollarSign
} from "lucide-react";

const services = [
  {
    title: "HOA Management",
    text: "Expert management of HOA communities with a focus on governance, compliance, and community satisfaction.",
    icon: UsersRound,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=700&q=85"
  },
  {
    title: "Residential Management",
    text: "Protecting your investment with reliable tenant placement, responsive maintenance, and financial accountability.",
    icon: Home,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=700&q=85"
  },
  {
    title: "Commercial Management",
    text: "Professional management solutions for office, retail, and mixed-use commercial properties.",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=700&q=85"
  },
  {
    title: "Developer & Builder Services",
    text: "Bridging the gap between developments and long-term operations with interim management support.",
    icon: HardHat,
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=700&q=85"
  },
  {
    title: "Financial Management",
    text: "Transparent financial oversight, reporting, and budget management you can count on.",
    icon: BadgeDollarSign,
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=700&q=85"
  }
];

export default function ServiceDivisions() {
  return (
    <section id="services" className="bg-white px-6 py-16 lg:py-24">
      <div className="mx-auto max-w-[1160px] text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--brand-gold)]">Our Service Divisions</p>
        <h2 className="mt-3 text-[28px] md:text-[36px] font-display font-bold tracking-tight text-[var(--text-navy)]">
          Comprehensive Solutions for Every Property Type
        </h2>
        <div className="mx-auto mt-4 h-[2px] w-12 bg-[var(--brand-gold)]" />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="group relative overflow-hidden bg-[var(--light-gray)] text-left shadow-[0_8px_24px_rgba(5,34,61,0.06)] hover:shadow-[0_20px_48px_rgba(5,34,61,0.14)] rounded-[4px] border border-gray-100 hover:border-[var(--brand-gold)]/30 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  <div className="relative h-[130px] w-full overflow-hidden">
                    <Image src={service.image} alt={service.title} fill sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="relative px-6 pb-6 pt-10 text-center">
                    <span className="absolute left-1/2 top-0 grid h-[48px] w-[48px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[var(--primary-navy)] group-hover:bg-[var(--brand-gold)] text-[var(--brand-gold)] group-hover:text-white ring-4 ring-white shadow-md transition-all duration-300">
                      <Icon size={18} strokeWidth={2} />
                    </span>
                    <h3 className="text-[13.5px] font-semibold uppercase leading-[1.35] text-[var(--text-navy)] tracking-wider min-h-[36px] flex items-center justify-center">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-[12px] font-medium leading-[1.6] text-[var(--text-slate)]">
                      {service.text}
                    </p>
                  </div>
                </div>
                <div className="pb-6 text-center">
                  <Link href="#contact" className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase text-[var(--brand-gold)] tracking-wider transition-all duration-200 hover:gap-2.5">
                    Learn More <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
