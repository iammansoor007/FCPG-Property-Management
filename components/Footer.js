"use client";

import { Phone, Mail, MapPin, ArrowUp } from "lucide-react";
import Link from "next/link";
import { LogoMark, FacebookIcon, LinkedinIcon, InstagramIcon } from "./Icons";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-[var(--midnight-navy)] text-white px-6 pt-16 border-t border-white/5 overflow-hidden">
      {/* Subtle top glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--brand-gold)]/40 to-transparent" />

      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[1.5fr_1fr_1.2fr_1fr_1.4fr] gap-10 pb-12 max-w-[1160px]">
        {/* Brand column */}
        <div>
          <div className="flex items-center gap-3">
            <LogoMark />
            <div className="leading-tight">
              <p className="text-[19px] font-display font-bold uppercase tracking-[0.04em]">First Choice</p>
              <p className="text-[12px] font-semibold uppercase tracking-[0.17em] text-white/80 -mt-0.5">Property Group</p>
            </div>
          </div>
          <p className="mt-5 max-w-[240px] text-[12px] font-medium leading-relaxed text-white/60">
            Full-service property management solutions for communities, property owners, investors, and developers across South Carolina.
          </p>
          {/* Social icons */}
          <div className="mt-6 flex gap-3">
            <Link href="#" className="group grid h-8 w-8 place-items-center rounded-full bg-white/10 text-white/70 transition-all duration-200 hover:bg-[var(--brand-gold)] hover:text-white hover:scale-110 active:scale-95" aria-label="Facebook">
              <FacebookIcon className="h-3.5 w-3.5" />
            </Link>
            <Link href="#" className="group grid h-8 w-8 place-items-center rounded-full bg-white/10 text-white/70 transition-all duration-200 hover:bg-[var(--brand-gold)] hover:text-white hover:scale-110 active:scale-95" aria-label="LinkedIn">
              <LinkedinIcon className="h-3.5 w-3.5" />
            </Link>
            <Link href="#" className="group grid h-8 w-8 place-items-center rounded-full bg-white/10 text-white/70 transition-all duration-200 hover:bg-[var(--brand-gold)] hover:text-white hover:scale-110 active:scale-95" aria-label="Instagram">
              <InstagramIcon className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        <FooterColumn title="Quick Links" items={[
          { label: "Home", href: "#" },
          { label: "About Us", href: "#about-us" },
          { label: "Services", href: "#services" },
          { label: "Vendor Network", href: "#vendor-network" },
          { label: "Resources", href: "#resources" },
          { label: "Contact Us", href: "#contact" },
        ]} />

        <FooterColumn title="Our Services" items={[
          { label: "HOA Management", href: "#services" },
          { label: "Residential Management", href: "#services" },
          { label: "Commercial Management", href: "#services" },
          { label: "Developer & Builder Services", href: "#services" },
          { label: "Financial Management", href: "#services" },
        ]} />

        <FooterColumn title="Resources" items={[
          { label: "Blog", href: "#resources" },
          { label: "FAQs", href: "#resources" },
          { label: "Owner Resources", href: "#resources" },
          { label: "HOA Resources", href: "#resources" },
          { label: "Tenant Resources", href: "#resources" },
        ]} />

        {/* Contact column */}
        <div>
          <h3 className="text-[12px] font-bold uppercase tracking-wider">Contact Us</h3>
          <ul className="mt-5 space-y-4 text-[12px] font-medium leading-relaxed text-white/60">
            <li>
              <Link href="tel:8643260000" className="group flex gap-3 transition-colors duration-200 hover:text-white">
                <Phone size={14} className="mt-0.5 text-[var(--brand-gold)] shrink-0 transition-transform duration-200 group-hover:scale-110" strokeWidth={2.5} />
                (864) 326-0000
              </Link>
            </li>
            <li>
              <Link href="mailto:info@firstchoicepg.com" className="group flex gap-3 transition-colors duration-200 hover:text-white">
                <Mail size={14} className="mt-0.5 text-[var(--brand-gold)] shrink-0 transition-transform duration-200 group-hover:scale-110" strokeWidth={2.5} />
                info@firstchoicepg.com
              </Link>
            </li>
            <li>
              <Link href="https://maps.google.com/?q=1230+Woodruff+Road+Suite+101+Greenville+SC+29607" target="_blank" rel="noopener noreferrer" className="group flex gap-3 transition-colors duration-200 hover:text-white">
                <MapPin size={14} className="mt-0.5 text-[var(--brand-gold)] shrink-0 transition-transform duration-200 group-hover:scale-110" strokeWidth={2.5} />
                <span>1230 Woodruff Road Suite 101<br />Greenville, SC 29607</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-white/10 py-5 text-[11px] text-white/40 max-w-[1160px]">
        <p>© 2026 First Choice Property Group. All Rights Reserved.</p>
        <div className="flex items-center gap-6">
          <Link href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition-colors duration-200">Terms of Service</Link>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="group flex h-8 w-8 items-center justify-center rounded-full bg-white/8 text-white/50 transition-all duration-200 hover:bg-[var(--brand-gold)] hover:text-white hover:scale-110 active:scale-95"
          >
            <ArrowUp size={14} className="transition-transform duration-200 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }) {
  return (
    <div>
      <h3 className="text-[12px] font-bold uppercase tracking-wider">{title}</h3>
      <ul className="mt-5 space-y-2.5 text-[12px] font-medium text-white/50">
        {items.map(({ label, href }) => (
          <li key={label}>
            <Link
              href={href}
              className="group relative inline-flex items-center gap-1 transition-colors duration-200 hover:text-[var(--brand-gold)]"
            >
              <span className="absolute -left-3 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:-left-2 text-[var(--brand-gold)]">›</span>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

