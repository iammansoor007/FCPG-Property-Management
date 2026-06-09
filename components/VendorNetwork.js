"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const vendorImages = [
  "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=600&q=85",
  "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=85",
  "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=600&q=85",
  "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=600&q=85",
  "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=85",
  "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=85"
];

export default function VendorNetwork() {
  return (
    <section id="vendor-network" className="bg-[var(--primary-navy)] px-6 py-16 lg:py-24 text-white">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-[390px_1fr] items-center gap-12 lg:gap-16 max-w-[1160px]">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--brand-gold)]">Our Vendor Network</p>
          <h2 className="mt-3 text-[32px] md:text-[40px] font-display font-bold leading-[1.1] text-white">
            Strong Relationships.
            <br />
            Reliable Results.
          </h2>
          <p className="mt-6 text-[13.5px] md:text-[14.5px] font-medium leading-relaxed text-white/80">
            Our long-standing network of trusted contractors and vendors across South Carolina allows us to deliver dependable service, responsive communication, and quality workmanship.
          </p>
          <Link href="#contact" className="group mt-8 inline-flex h-11 items-center gap-2 bg-[var(--brand-gold)] px-7 text-[11px] font-semibold uppercase text-white tracking-wider transition-all duration-200 hover:bg-white hover:text-[#c99b31]! active:scale-[0.97] rounded-[4px]">
            Learn More About Our Vendor Network
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-3 md:gap-4">
          {vendorImages.map((image, index) => (
            <motion.div
              key={image}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04, duration: 0.4 }}
              className="group relative h-[80px] sm:h-[120px] lg:h-[140px] overflow-hidden rounded-[4px] ring-1 ring-white/10 hover:ring-2 hover:ring-[var(--brand-gold)] shadow-md transition-all duration-300 hover:shadow-xl cursor-pointer"
            >
              <Image src={image} alt="Vendor service work" fill sizes="(min-width: 1024px) 22vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-[var(--brand-gold)]/0 group-hover:bg-[var(--brand-gold)]/10 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
