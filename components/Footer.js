"use client";

import { Phone, Mail, MapPin, ArrowUp } from "lucide-react";
import Link from "next/link";
import { LogoMark, FacebookIcon, LinkedinIcon, InstagramIcon } from "./Icons";
import data from "../data/data.json";

const { footer } = data;

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-[#021324] text-white px-6 pt-20 border-t border-white/10 overflow-hidden">

      {/* Blueprint Grid dot overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none opacity-[0.02] z-0">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="footer-dots" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="#ffffff" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-dots)" />
        </svg>
      </div>

      {/* Ambient glows at corners */}
      <div className="absolute -bottom-24 -left-24 w-[350px] h-[350px] bg-[#052946]/0.5 rounded-full blur-[80px] pointer-events-none z-0" />
      <div className="absolute -bottom-24 -right-24 w-[300px] h-[300px] bg-[var(--brand-gold)]/[0.04] rounded-full blur-[85px] pointer-events-none z-0" />

      {/* Decorative top coordinate line */}
      <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-[var(--brand-gold)] to-transparent opacity-60 z-10" />

      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-12 pb-16 max-w-[1160px] relative z-10">

        {/* Brand column */}
        <div className="lg:col-span-4 flex flex-col items-start">
          <div className="flex items-center gap-3">
            <LogoMark />
            <div className="leading-tight">
              <p className="text-[19px] font-display font-bold uppercase tracking-[0.04em]">{footer.brandFirst}</p>
              <p className="text-[12px] font-semibold uppercase tracking-[0.17em] text-white/80 -mt-0.5">{footer.brandLast}</p>
            </div>
          </div>
          <p className="mt-5 max-w-[280px] text-[12px] font-medium leading-relaxed text-white/50">
            {footer.tagline}
          </p>
          <p className="text-[10px] font-medium tracking-wide text-white/30 uppercase mt-4">
            {footer.license}
          </p>

          {/* Social icons */}
          <div className="mt-6 flex gap-3">
            <Link href="#" className="group grid h-8 w-8 place-items-center rounded-lg bg-white/[0.03] border border-white/10 text-white/50 transition-all duration-300 hover:border-[var(--brand-gold)]/40 hover:bg-[var(--brand-gold)]/10 hover:text-[var(--brand-gold)] hover:scale-105 active:scale-95 shadow-sm" aria-label="Facebook">
              <FacebookIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:scale-110" />
            </Link>
            <Link href="#" className="group grid h-8 w-8 place-items-center rounded-lg bg-white/[0.03] border border-white/10 text-white/50 transition-all duration-300 hover:border-[var(--brand-gold)]/40 hover:bg-[var(--brand-gold)]/10 hover:text-[var(--brand-gold)] hover:scale-105 active:scale-95 shadow-sm" aria-label="LinkedIn">
              <LinkedinIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:scale-110" />
            </Link>
            <Link href="#" className="group grid h-8 w-8 place-items-center rounded-lg bg-white/[0.03] border border-white/10 text-white/50 transition-all duration-300 hover:border-[var(--brand-gold)]/40 hover:bg-[var(--brand-gold)]/10 hover:text-[var(--brand-gold)] hover:scale-105 active:scale-95 shadow-sm" aria-label="Instagram">
              <InstagramIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:scale-110" />
            </Link>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="lg:col-span-2 lg:border-l lg:border-white/[0.06] lg:pl-8">
          <FooterColumn title={footer.columnTitles.quickLinks} items={footer.quickLinks} />
        </div>

        {/* Our Services Column */}
        <div className="lg:col-span-2 lg:border-l lg:border-white/[0.06] lg:pl-8">
          <FooterColumn title={footer.columnTitles.services} items={footer.services} />
        </div>

        {/* Resources Column */}
        <div className="lg:col-span-2 lg:border-l lg:border-white/[0.06] lg:pl-8">
          <FooterColumn title={footer.columnTitles.resources} items={footer.resources} />
        </div>

        {/* Contact column */}
        <div className="lg:col-span-2 lg:border-l lg:border-white/[0.06] lg:pl-8">
          <h3 className="text-[11px] font-black uppercase tracking-[0.15em] text-white/90">{footer.columnTitles.contact}</h3>
          <ul className="mt-5 space-y-5 text-[12px] font-medium leading-relaxed text-white/50">
            <li className="group/contact transition-all duration-300">
              <Link href={footer.contact.phoneHref} className="flex items-start gap-3 text-white/60 hover:text-[var(--brand-gold)] transition-colors duration-300">
                <div className="flex items-center justify-center w-7 h-7 rounded-md bg-white/[0.02] border border-white/10 group-hover/contact:border-[var(--brand-gold)]/30 group-hover/contact:bg-[var(--brand-gold)]/5 transition-all duration-300 text-[var(--brand-gold)] mt-0.5 shrink-0">
                  <Phone size={13} className="transition-transform duration-300 group-hover/contact:scale-110" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] uppercase tracking-wider text-white/30 font-bold">{footer.contactLabels.phone}</span>
                  <span className="mt-0.5 font-semibold text-white/70 group-hover/contact:text-white transition-colors duration-300">{footer.contact.phone}</span>
                </div>
              </Link>
            </li>
            <li className="group/contact transition-all duration-300">
              <Link href={footer.contact.emailHref} className="flex items-start gap-3 text-white/60 hover:text-[var(--brand-gold)] transition-colors duration-300">
                <div className="flex items-center justify-center w-7 h-7 rounded-md bg-white/[0.02] border border-white/10 group-hover/contact:border-[var(--brand-gold)]/30 group-hover/contact:bg-[var(--brand-gold)]/5 transition-all duration-300 text-[var(--brand-gold)] mt-0.5 shrink-0">
                  <Mail size={13} className="transition-transform duration-300 group-hover/contact:scale-110" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] uppercase tracking-wider text-white/30 font-bold">{footer.contactLabels.email}</span>
                  <span className="mt-0.5 font-semibold text-white/70 group-hover/contact:text-white transition-colors duration-300">{footer.contact.email}</span>
                </div>
              </Link>
            </li>
            <li className="group/contact transition-all duration-300">
              <Link
                href={footer.contact.mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-white/60 hover:text-[var(--brand-gold)] transition-colors duration-300"
              >
                <div className="flex items-center justify-center w-7 h-7 rounded-md bg-white/[0.02] border border-white/10 group-hover/contact:border-[var(--brand-gold)]/30 group-hover/contact:bg-[var(--brand-gold)]/5 transition-all duration-300 text-[var(--brand-gold)] mt-0.5 shrink-0">
                  <MapPin size={13} className="transition-transform duration-300 group-hover/contact:scale-110" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] uppercase tracking-wider text-white/30 font-bold">{footer.contactLabels.address}</span>
                  <span className="mt-0.5 font-semibold text-white/70 group-hover/contact:text-white transition-colors duration-300 leading-normal">
                    {footer.contact.addressLine1}<br />
                    {footer.contact.addressLine2}<br />
                    {footer.contact.addressLine3}
                  </span>
                </div>
              </Link>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-white/[0.06] py-6 text-[11px] text-white/40 max-w-[1160px] relative z-10">
        <p>{footer.copyright}</p>
        <div className="flex items-center gap-6">
          {footer.bottomLinks.map((link, i) => (
            <span key={link.label} className="flex items-center gap-6">
              {i > 0 && <span className="text-white/10">•</span>}
              <Link href={link.href} className="hover:text-white hover:underline transition-colors duration-200">{link.label}</Link>
            </span>
          ))}
          <span className="text-white/10">•</span>
          <span className="text-white/20 font-mono tracking-widest text-[9px]">{footer.versionTag}</span>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }) {
  return (
    <div>
      <h3 className="text-[11px] font-black uppercase tracking-[0.15em] text-white/90">{title}</h3>
      <ul className="mt-5 space-y-3.5 text-[12px] font-medium text-white/50">
        {items.map(({ label, href }) => (
          <li key={label}>
            <Link
              href={href}
              className="group relative inline-flex items-center py-0.5 text-white/60 hover:text-[var(--brand-gold)] transition-colors duration-300"
            >
              <span>{label}</span>
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[var(--brand-gold)] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
