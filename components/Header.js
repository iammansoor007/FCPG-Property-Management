"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, CalendarDays, Menu, Phone, MapPin, Mail, X } from "lucide-react";
import Link from "next/link";
import { LogoMark, FacebookIcon } from "./Icons";

const servicesDropdownItems = [
  {
    title: "HOA Management",
    href: "#services",
    description: "Expert governance, compliance, and community satisfaction.",
    icon: null // we will set icon dynamically or use custom rendering
  },
  {
    title: "Residential Management",
    href: "#services",
    description: "Tenant placement, maintenance, and financial oversight.",
    icon: null
  },
  {
    title: "Commercial Management",
    href: "#services",
    description: "Solutions for office, retail, and mixed-use spaces.",
    icon: null
  },
  {
    title: "Developer Services",
    href: "#services",
    description: "Interim management from development to governance.",
    icon: null
  },
  {
    title: "Financial Management",
    href: "#services",
    description: "Budgeting, reporting, and reserve fund oversight.",
    icon: null
  }
];

const resourcesDropdownItems = [
  {
    title: "Blog & Insights",
    href: "#resources",
    description: "Latest news, tips, and articles for property owners.",
    icon: null
  },
  {
    title: "FAQs",
    href: "#resources",
    description: "Answers to common association & management questions.",
    icon: null
  },
  {
    title: "Owner Portal",
    href: "#contact",
    description: "Access statements, reporting, and request assistance.",
    icon: null
  },
  {
    title: "HOA Portal",
    href: "#contact",
    description: "Board member tools, financials, and meeting minutes.",
    icon: null
  },
  {
    title: "Tenant Portal",
    href: "#contact",
    description: "Submit maintenance requests and make online payments.",
    icon: null
  }
];

// Add icons to dropdown items using lucide-react dynamically
import {
  UsersRound,
  Home,
  Building2,
  HardHat,
  BadgeDollarSign,
  ClipboardCheck,
  MessageCircle,
  Handshake,
  Award,
  Clock3
} from "lucide-react";

servicesDropdownItems[0].icon = UsersRound;
servicesDropdownItems[1].icon = Home;
servicesDropdownItems[2].icon = Building2;
servicesDropdownItems[3].icon = HardHat;
servicesDropdownItems[4].icon = BadgeDollarSign;

resourcesDropdownItems[0].icon = ClipboardCheck;
resourcesDropdownItems[1].icon = MessageCircle;
resourcesDropdownItems[2].icon = Handshake;
resourcesDropdownItems[3].icon = Award;
resourcesDropdownItems[4].icon = Clock3;

export default function Header() {
  const nav = ["Home", "About Us", "Services", "Vendor Network", "Resources", "Contact"];
  const [hoveredNav, setHoveredNav] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky inset-x-0 top-0 z-40 text-white border-b transition-all duration-300 ${
        scrolled
          ? "bg-[var(--midnight-navy)] border-white/15 shadow-[0_4px_24px_rgba(0,0,0,0.35)] backdrop-blur-sm"
          : "bg-[var(--midnight-navy-95)] border-white/10"
      }`}
    >
      {/* Elegant thin gold bottom fading accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[var(--brand-gold)]/80 to-transparent pointer-events-none" />
      
      <div className={`mx-auto max-w-[1160px] px-6 transition-all duration-300 ${scrolled ? "py-2" : "py-3 lg:py-4"}`}>
        <div className="grid grid-cols-[auto_1fr] items-center gap-6 lg:gap-10">
          {/* Logo */}
          <Link href="#" className="flex items-center gap-3 shrink-0" aria-label="First Choice Property Group">
            <LogoMark />
            <div className="leading-tight">
              <p className="text-[17px] sm:text-[21px] font-display font-bold uppercase tracking-[0.04em] text-white">First Choice</p>
              <p className="text-[10px] sm:text-[13px] font-bold uppercase tracking-[0.17em] text-white/80 -mt-0.5">Property Group</p>
              <p className="text-[7px] sm:text-[8px] font-medium uppercase tracking-[0.2em] text-[var(--tagline-gold)] mt-1">Your property. Our priority.</p>
            </div>
          </Link>

          {/* Right Side Info & Nav */}
          <div className="flex flex-col">
            {/* Top Row: Contact info — hidden when scrolled to compact the nav */}
            <div className={`lg:flex items-center justify-end gap-1 text-[10px] font-semibold uppercase tracking-wider text-white/70 pb-2 border-b border-white/10 transition-all duration-300 ${scrolled ? "hidden" : "hidden lg:flex"}`}>
              <Link
                href="tel:8643260000"
                className="group flex items-center gap-2 px-3 py-1 rounded-[4px] transition-all duration-200 hover:bg-white/8 hover:text-white active:scale-95 active:bg-white/12 cursor-pointer"
              >
                <Phone size={12} className="text-[var(--brand-gold)] group-hover:scale-110 transition-transform duration-200" strokeWidth={2.5} />
                (864) 326-0000
              </Link>
              <span className="text-white/20 select-none">·</span>
              <Link
                href="https://maps.google.com/?q=Greenville,SC"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-3 py-1 rounded-[4px] transition-all duration-200 hover:bg-white/8 hover:text-white active:scale-95 active:bg-white/12 cursor-pointer"
              >
                <MapPin size={12} className="text-[var(--brand-gold)] group-hover:scale-110 transition-transform duration-200" strokeWidth={2.5} />
                Greenville, SC
              </Link>
              <span className="text-white/20 select-none ml-1">·</span>
              <Link
                href="#"
                aria-label="Facebook"
                className="ml-1 flex h-7 w-7 items-center justify-center rounded-full bg-white/8 text-white/70 transition-all duration-200 hover:bg-[var(--brand-gold)] hover:text-white hover:scale-110 active:scale-95"
              >
                <FacebookIcon className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* Bottom Row: Nav links & Button */}
            <div className="flex items-center justify-end gap-6 pt-2">
              <nav className="hidden md:flex items-center gap-1 lg:gap-2">
                {nav.map((item, index) => {
                  const hasDropdown = item === "Services" || item === "Resources";
                  const dropdownItems = item === "Services" ? servicesDropdownItems : resourcesDropdownItems;

                  return (
                    <div
                      key={item}
                      className="relative py-3"
                      onMouseEnter={() => setHoveredNav(item)}
                      onMouseLeave={() => setHoveredNav(null)}
                    >
                      <Link
                        href={item === "Contact" ? "#contact" : `#${item.toLowerCase().replaceAll(" ", "-")}`}
                        className={`relative flex items-center gap-1 px-3 py-1.5 text-[10.5px] font-semibold uppercase tracking-wider transition-colors duration-300 hover:text-[var(--brand-gold)] ${
                          hoveredNav === item ? "text-[var(--brand-gold)]" : index === 0 ? "text-[var(--brand-gold)]" : "text-white/90"
                        }`}
                      >
                        {item}
                        {hasDropdown && (
                          <motion.span
                            animate={{ rotate: hoveredNav === item ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                            className="inline-block"
                          >
                            <ChevronDown size={11} className="opacity-70" />
                          </motion.span>
                        )}
                        {hoveredNav === item && (
                          <motion.span
                            layoutId="nav-underline"
                            className="absolute bottom-0 left-3 right-3 h-[2px] bg-[var(--brand-gold)]"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                          />
                        )}
                      </Link>

                      {/* Dropdown Menu Container */}
                      <AnimatePresence>
                        {hasDropdown && hoveredNav === item && (
                          <motion.div
                            initial={{ opacity: 0, y: 15, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 15, scale: 0.98 }}
                            transition={{ duration: 0.2 }}
                            className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 rounded-lg border border-white/10 bg-[var(--midnight-navy-95)] backdrop-blur-md p-5 shadow-2xl z-50 text-left ${
                              item === "Services" ? "w-[480px] grid grid-cols-2 gap-4" : "w-[300px] flex flex-col gap-3.5"
                            }`}
                          >
                            {dropdownItems.map((subItem, subIdx) => {
                              const SubIcon = subItem.icon;
                              const isLastOdd = item === "Services" && subIdx === 4;
                              return (
                                <Link
                                  key={subItem.title}
                                  href={subItem.href}
                                  className={`group flex items-start gap-3 p-2.5 rounded-[4px] hover:bg-white/5 transition duration-200 ${
                                    isLastOdd ? "col-span-2" : ""
                                  }`}
                                >
                                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--primary-navy)] text-[var(--brand-gold)] group-hover:bg-[var(--brand-gold)] group-hover:text-white transition-all duration-300">
                                    {SubIcon && <SubIcon size={14} />}
                                  </span>
                                  <div>
                                    <p className="text-[11.5px] font-bold uppercase tracking-wider text-white group-hover:text-[var(--brand-gold)] transition duration-200">
                                      {subItem.title}
                                    </p>
                                    <p className="mt-0.5 text-[10px] leading-normal text-white/60 font-medium">
                                      {subItem.description}
                                    </p>
                                  </div>
                                </Link>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </nav>

              <Link
                href="#contact"
                className="group hidden sm:flex h-[38px] items-center gap-2 bg-[var(--brand-gold)] px-5 text-[10.5px] font-semibold uppercase tracking-wider !text-white hover:!text-white transition-all duration-200 hover:bg-[var(--primary-navy)] active:scale-[0.97] rounded-[4px]"
              >
                <CalendarDays size={13} className="transition-transform duration-300 group-hover:rotate-12" />
                Request a Consultation
              </Link>

              {/* Mobile Hamburger Menu button */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="flex md:hidden h-10 w-10 items-center justify-center border border-white/20 hover:bg-white/5 transition cursor-pointer"
                aria-label="Open menu"
              >
                <Menu size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="fixed inset-y-0 right-0 z-50 w-full max-w-[320px] bg-[var(--midnight-navy-95)] backdrop-blur-md p-6 shadow-2xl flex flex-col justify-between border-l border-white/10"
            >
              <div>
                {/* Top Row */}
                <div className="flex items-center justify-between pb-5 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <LogoMark />
                    <div className="leading-tight">
                      <p className="text-[15px] font-display font-bold uppercase tracking-[0.04em] text-white">First Choice</p>
                      <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-white/80 -mt-0.5">Property Group</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex h-10 w-10 items-center justify-center border border-white/10 hover:border-white/20 hover:bg-white/5 rounded-full transition cursor-pointer text-white"
                    aria-label="Close menu"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="mt-6 flex flex-col">
                  {nav.map((item) => {
                    const hasDropdown = item === "Services" || item === "Resources";
                    const isOpen = item === "Services" ? mobileServicesOpen : mobileResourcesOpen;
                    const setIsOpen = item === "Services" ? setMobileServicesOpen : setMobileResourcesOpen;

                    return (
                      <div key={item} className="border-b border-white/5 last:border-0">
                        {hasDropdown ? (
                          <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="flex w-full items-center justify-between py-3.5 text-[12.5px] font-semibold uppercase tracking-wider text-white/90 hover:text-[var(--brand-gold)] transition duration-200 cursor-pointer"
                          >
                            <span>{item}</span>
                            <motion.span
                              animate={{ rotate: isOpen ? 180 : 0 }}
                              transition={{ duration: 0.2 }}
                              className="inline-block"
                            >
                              <ChevronDown size={13} className="opacity-70" />
                            </motion.span>
                          </button>
                        ) : (
                          <Link
                            href={item === "Contact" ? "#contact" : `#${item.toLowerCase().replaceAll(" ", "-")}`}
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center justify-between py-3.5 text-[12.5px] font-semibold uppercase tracking-wider text-white/90 hover:text-[var(--brand-gold)] transition duration-200"
                          >
                            {item}
                          </Link>
                        )}

                        {/* Collapsible Mobile Submenu */}
                        <AnimatePresence initial={false}>
                          {hasDropdown && isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25, ease: "easeInOut" }}
                              className="overflow-hidden pl-3 pr-1 py-1 flex flex-col gap-2.5 bg-white/5 border-l border-[var(--brand-gold)]/40 rounded-r-[4px] mt-0.5 mb-3.5"
                            >
                              {(item === "Services" ? servicesDropdownItems : resourcesDropdownItems).map((subItem) => {
                                const SubIcon = subItem.icon;
                                return (
                                  <Link
                                    key={subItem.title}
                                    href={subItem.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="flex items-center gap-3 py-2 px-2.5 rounded-[4px] text-[11px] font-semibold text-white/80 hover:text-[var(--brand-gold)] hover:bg-white/5 transition"
                                  >
                                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10 text-[var(--brand-gold)]">
                                      {SubIcon && <SubIcon size={11} />}
                                    </span>
                                    <span>{subItem.title}</span>
                                  </Link>
                                );
                              })}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </nav>
              </div>

              {/* Contact Info at Bottom of Drawer */}
              <div className="p-4 rounded-lg bg-white/5 border border-white/5 mt-auto">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-[var(--brand-gold)]">Need Assistance?</p>
                <div className="mt-3 flex flex-col gap-2.5 text-[12px] font-medium text-white/80">
                  <Link href="tel:8643260000" className="flex items-center gap-2.5 hover:text-[var(--brand-gold)] transition">
                    <Phone size={13} className="text-[var(--brand-gold)]" />
                    (864) 326-0000
                  </Link>
                  <Link href="mailto:info@firstchoicepg.com" className="flex items-center gap-2.5 hover:text-[var(--brand-gold)] transition">
                    <Mail size={13} className="text-[var(--brand-gold)]" />
                    info@firstchoicepg.com
                  </Link>
                </div>
                <Link
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="group mt-4 flex h-[44px] items-center justify-center gap-2 bg-[var(--brand-gold)] px-5 text-[11px] font-semibold uppercase tracking-wider !text-white hover:!text-white transition-all duration-200 hover:bg-[var(--primary-navy)] active:scale-[0.97] rounded-[4px]"
                >
                  <CalendarDays size={14} className="transition-transform duration-300 group-hover:rotate-12" />
                  Request a Consultation
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
