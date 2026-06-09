"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { UsersRound, Home, Building2, HardHat, BadgeDollarSign, ArrowRight, ShieldCheck, MapPin, TrendingUp } from "lucide-react";

/* ── Shared card atom ─────────────────────────────────── */
function ServiceCard({ title, text, icon: Icon, image, badge, featured = false, breakpoint = "md", delay = 0 }) {
  // Safe Responsive Layout with Minimum Heights (No clipping / overflow-safe / collapse-safe):
  // - Mobile: auto height (stacked image h-52 + text auto)
  // - Desktop: minimum heights to guarantee uniformity while allowing natural growth if needed:
  //   - Featured: sm:min-h-[280px]
  //   - Commercial / HOA: md:min-h-[240px]
  //   - Developer / Financial: lg:min-h-[240px]
  const wrapperClass = `flex flex-col ${
    breakpoint === "sm"
      ? "sm:flex-row sm:min-h-[280px]"
      : breakpoint === "lg"
      ? "lg:flex-row lg:min-h-[240px]"
      : "md:flex-row md:min-h-[240px]"
  }`;

  const contentClass = `w-full ${
    breakpoint === "sm"
      ? "sm:w-[55%]"
      : breakpoint === "lg"
      ? "lg:w-[55%]"
      : "md:w-[55%]"
  } p-6`;

  // On desktop:
  // - w-[45%] gives it the correct width.
  // - h-auto resets the mobile h-52 height.
  // - self-stretch stretches the container vertically to fill the card.
  const imageClass = `relative w-full h-52 ${
    breakpoint === "sm"
      ? "sm:w-[45%] sm:h-auto sm:self-stretch"
      : breakpoint === "lg"
      ? "lg:w-[45%] lg:h-auto lg:self-stretch"
      : "md:w-[45%] md:h-auto md:self-stretch"
  }`;

  // Brightened Image Overlays (Softened middle stop to 10% opacity):
  const gradientClass = `bg-gradient-to-t from-midnight-navy/90 via-midnight-navy/10 to-transparent ${
    breakpoint === "sm"
      ? "sm:bg-gradient-to-r sm:from-midnight-navy sm:via-midnight-navy/10 sm:to-transparent"
      : breakpoint === "lg"
      ? "lg:bg-gradient-to-r lg:from-midnight-navy lg:via-midnight-navy/10 lg:to-transparent"
      : "md:bg-gradient-to-r md:from-midnight-navy md:via-midnight-navy/10 md:to-transparent"
  }`;

  const isExploreCta = title.includes("Financial") || title.includes("Developer") || featured;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`group ${wrapperClass} items-stretch w-full overflow-hidden rounded-2xl bg-midnight-navy text-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl`}
      style={{
        boxShadow: "0 12px 30px rgba(3,27,49,0.15)",
      }}
    >
      {/* Content Column */}
      <div className={`${contentClass} flex flex-col justify-between z-20 relative flex-grow`}>
        <div>
          {badge && (
            <p className="text-[9px] font-bold tracking-[0.2em] uppercase text-brand-gold mb-3">
              {badge}
            </p>
          )}

          {/* Icon + Title Row */}
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center justify-center rounded-full border border-brand-gold bg-brand-gold/10 text-brand-gold w-12 h-12 flex-shrink-0 transition-all duration-300 group-hover:bg-brand-gold group-hover:text-midnight-navy">
              <Icon size={20} strokeWidth={1.8} />
            </div>
            <h3 className={`font-display font-bold text-white leading-tight ${featured ? "text-xl sm:text-2xl" : "text-lg md:text-xl"}`}>
              {title}
            </h3>
          </div>

          {/* Divider */}
          <div className="w-12 h-[1px] bg-brand-gold/50 mb-4" />

          {/* Description */}
          <p className="text-xs sm:text-sm text-gray-200/90 leading-relaxed mb-6 font-sans">
            {text}
          </p>
        </div>

        {/* CTA Link */}
        {featured ? (
          <Link
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-brand-gold text-midnight-navy font-bold text-xs tracking-wider uppercase transition-all duration-300 hover:bg-tagline-gold hover:shadow-lg self-start group/cta"
          >
            Explore Service
            <ArrowRight size={13} className="transition-transform duration-300 group-hover/cta:translate-x-1" />
          </Link>
        ) : (
          <Link
            href="#contact"
            className="inline-flex items-center gap-1.5 text-brand-gold hover:text-tagline-gold font-bold text-xs tracking-wider uppercase transition-all duration-300 self-start group/cta"
          >
            {isExploreCta ? "Explore Service" : "View Details"}
            <ArrowRight size={13} className="transition-transform duration-300 group-hover/cta:translate-x-1" />
          </Link>
        )}
      </div>

      {/* Image Column */}
      <div className={`${imageClass} overflow-hidden flex-shrink-0 relative`}>
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 1024px) 30vw, 50vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Dynamic Gradient Overlay */}
        <div className={`absolute inset-0 ${gradientClass} z-10 pointer-events-none`} />
      </div>
    </motion.div>
  );
}

export default function ServiceDivisions() {
  return (
    <section id="services" className="bg-light-gray">
      <div className="mx-auto w-full max-w-[1160px] px-6 lg:px-8 py-16 lg:py-24">

        {/* 2-column layout on md and up */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">

          {/* Left Column: Header + Residential (Featured) + Developer & Builder */}
          <div className="flex flex-col gap-6">

            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-brand-gold mb-3">
                Our Services
              </p>
              <h2 className="text-4xl md:text-5xl font-bold font-display text-text-navy leading-[1.15] mb-5 tracking-tight">
                Property Management<br />Solutions That Perform
              </h2>
              <p className="text-[14px] text-text-slate leading-relaxed max-w-[460px] mb-6 font-sans">
                From residential communities to commercial assets, we deliver expertise, transparency, and peace of mind at every step.
              </p>
              
              {/* Gold rule */}
              <div className="w-12 h-[2px] bg-brand-gold rounded-full mb-6" />
              
              {/* Trust badges */}
              <div className="flex flex-wrap gap-x-8 gap-y-4">
                {[
                  { icon: ShieldCheck, text1: "Trusted", text2: "By Communities" },
                  { icon: MapPin, text1: "Local Expertise", text2: "You Can Rely On" },
                  { icon: TrendingUp, text1: "Results That", text2: "Matter" },
                ].map(({ icon: I, text1, text2 }) => (
                  <div key={text1} className="flex items-center gap-3">
                    <I size={20} className="text-brand-gold" strokeWidth={1.8} />
                    <div>
                      <p className="text-xs font-bold text-text-navy leading-tight">{text1}</p>
                      <p className="text-[11px] text-text-slate leading-tight">{text2}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Featured card: Residential */}
            <ServiceCard
              title="Residential Management"
              text="Comprehensive management that protects your investment and ensures tenant satisfaction."
              icon={Home}
              image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=85"
              badge="Featured Service"
              featured
              breakpoint="sm"
              delay={0.1}
            />

            {/* Developer & Builder Services */}
            <ServiceCard
              title="Developer & Builder Services"
              text="Partnering with developers and builders to transition projects seamlessly from development to long-term operations."
              icon={HardHat}
              image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=700&q=85"
              breakpoint="lg"
              delay={0.25}
            />
          </div>

          {/* Right Column: Commercial + HOA + Financial */}
          <div className="flex flex-col gap-6">
            {/* Commercial Management */}
            <ServiceCard
              title="Commercial Management"
              text="Strategic management for office, retail, and mixed-use properties focused on performance and long-term value."
              icon={Building2}
              image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=700&q=85"
              breakpoint="md"
              delay={0.15}
            />

            {/* HOA Management */}
            <ServiceCard
              title="HOA Management"
              text="Expert governance, compliance, and community support for well-managed associations."
              icon={UsersRound}
              image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=700&q=85"
              breakpoint="md"
              delay={0.2}
            />

            {/* Financial Management */}
            <ServiceCard
              title="Financial Management"
              text="Transparent reporting, budgeting, and financial oversight you can always rely on."
              icon={BadgeDollarSign}
              image="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=700&q=85"
              breakpoint="lg"
              delay={0.3}
            />
          </div>
        </div>

        {/* Footer badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex items-center justify-center gap-2 mt-12 border-t border-gray-200/50 pt-8"
        >
          <ShieldCheck size={16} className="text-brand-gold" strokeWidth={2} />
          <p className="text-xs text-text-slate font-medium">Serving homeowners, investors, and developers across South Carolina.</p>
        </motion.div>

      </div>
    </section>
  );
}
