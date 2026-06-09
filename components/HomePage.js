"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Award,
  BadgeDollarSign,
  Building2,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  Clock3,
  Handshake,
  HardHat,
  Home,
  Landmark,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  UsersRound
} from "lucide-react";

// Colors are declared dynamically in globals.css as CSS variables

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

const values = [
  ["Financial Accountability", "Transparent reporting, accurate reconciliation, and responsible stewardship.", BadgeDollarSign],
  ["Vendor Coordination", "Trusted vendor network ensuring quality service and cost efficiency.", Handshake],
  ["Communication", "Clear, consistent, and proactive communication with all stakeholders.", MessageCircle],
  ["Community Focused", "Enhancing community value through engagement and operational excellence.", UsersRound],
  ["Compliance & Governance", "Ensuring compliance with covenants, regulations, and best practices.", ClipboardCheck],
  ["Technology Forward", "Leveraging modern technology to improve efficiency and provide real-time insights.", Landmark]
];

const vendorImages = [
  "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=600&q=85",
  "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=85",
  "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=600&q=85",
  "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=600&q=85",
  "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=85",
  "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=85"
];

const trustStats = [
  ["20+", "Years in Business", Clock3],
  ["Thousands", "of Properties Managed", Building2],
  ["Experienced", "Management Team", UsersRound],
  ["Proven Results", "& Long-Term Partnerships", Award]
];

const testimonials = [
  ["First Choice Property Group has been an invaluable partner to our HOA. Their communication, professionalism, and attention to detail are unmatched.", "HOA Board President", "Greenville, SC"],
  ["Their team has helped us maximize our rental income while minimizing vacancies and maintenance issues. Highly recommended!", "Real Estate Investor", "Columbia, SC"],
  ["From development startup to ongoing operations, their support has been instrumental in building a successful community.", "Community Developer", "Spartanburg, SC"]
];

const cities = ["Greenville", "Spartanburg", "Anderson", "Columbia", "Charleston", "Myrtle Beach", "Florence", "Beaufort", "And Surrounding Areas"];

const fadeUp = {
  hidden: { opacity: 1, y: 0 },
  show: { opacity: 1, y: 0 }
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-[#072642]">
      <Header />
      <Hero />
      <ProofBar />
      <ServiceDivisions />
      <WhyChoose />
      <VendorNetwork />
      <TrustStrip />
      <Testimonials />
      <ServiceAreas />
      <CtaBar />
      <Footer />
    </main>
  );
}

function Header() {
  const nav = ["Home", "About Us", "Services", "Vendor Network", "Resources", "Contact"];

  return (
    <header className="absolute inset-x-0 top-0 z-40 bg-[var(--midnight-navy-95)] text-white border-b border-white/10">
      <div className="mx-auto max-w-[1160px] px-6 py-3 lg:py-4">
        <div className="grid grid-cols-[auto_1fr] items-center gap-6 lg:gap-10">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 shrink-0" aria-label="First Choice Property Group">
            <LogoMark />
            <div className="leading-tight">
              <p className="text-[17px] sm:text-[21px] font-black uppercase tracking-[0.04em] text-white">First Choice</p>
              <p className="text-[10px] sm:text-[13px] font-black uppercase tracking-[0.17em] text-white/80 -mt-0.5">Property Group</p>
              <p className="text-[7px] sm:text-[8px] font-bold uppercase tracking-[0.2em] text-[var(--tagline-gold)] mt-1">Your property. Our priority.</p>
            </div>
          </a>

          {/* Right Side Info & Nav */}
          <div className="flex flex-col">
            {/* Top Row: Contact info (desktop only) */}
            <div className="hidden lg:flex items-center justify-end gap-6 text-[10px] font-black uppercase tracking-wider text-white/70 pb-2 border-b border-white/10">
              <span className="flex items-center gap-2">
                <Phone size={12} className="text-[var(--brand-gold)]" strokeWidth={2.5} />
                (864) 326-0000
              </span>
              <span className="flex items-center gap-2">
                <MapPin size={12} className="text-[var(--brand-gold)]" strokeWidth={2.5} />
                Greenville, SC
              </span>
              <a href="#" className="text-white/70 hover:text-[var(--brand-gold)] transition" aria-label="Facebook">
                <FacebookIcon className="h-4.5 w-4.5" />
              </a>
            </div>

            {/* Bottom Row: Nav links & Button */}
            <div className="flex items-center justify-end gap-6 pt-2">
              <nav className="hidden md:flex items-center gap-1 lg:gap-2">
                {nav.map((item, index) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replaceAll(" ", "-")}`}
                    className={`flex items-center gap-1 px-3 py-1.5 text-[10.5px] font-black uppercase tracking-wider transition hover:text-[var(--brand-gold)] ${
                      index === 0 ? "text-[var(--brand-gold)]" : "text-white/90"
                    }`}
                  >
                    {item}
                    {(item === "Services" || item === "Resources") && <ChevronDown size={11} className="opacity-70" />}
                  </a>
                ))}
              </nav>

              <a
                href="#contact"
                className="hidden sm:flex h-[40px] items-center gap-2 bg-[var(--brand-gold)] px-5 text-[10px] font-black uppercase tracking-wider text-white shadow-lg transition hover:bg-[var(--brand-gold-90)]"
              >
                <CalendarDays size={13} />
                Request a Consultation
              </a>

              {/* Mobile Hamburger Menu button */}
              <button className="flex md:hidden h-10 w-10 items-center justify-center border border-white/20 hover:bg-white/5 transition" aria-label="Open menu">
                <Menu size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
    </svg>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[580px] lg:min-h-[660px] overflow-hidden bg-[var(--midnight-navy)] pt-[84px] lg:pt-[110px] pb-16 flex items-center text-white">
      <Image
        src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85"
        alt="Townhome community street"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Visual overlay: solid blue/navy on left to transparent on right */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--midnight-navy)] via-[var(--midnight-navy)]/85 to-[var(--midnight-navy)]/15 md:from-[var(--midnight-navy)] md:via-[var(--midnight-navy)]/80 md:to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--midnight-navy)]/40 via-transparent to-transparent" />

      <div className="relative mx-auto w-full max-w-[1160px] px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="max-w-[620px]"
        >
          <motion.p
            variants={fadeUp}
            className="text-[11px] md:text-[13px] font-black uppercase tracking-[0.15em] text-[var(--tagline-gold)]"
          >
            Professional Property Management
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="mt-4 text-[32px] sm:text-[45px] lg:text-[54px] font-extrabold leading-[1.08] tracking-tight text-white"
          >
            Managing Communities.
            <br />
            Protecting Investments.
            <br />
            Maximizing Value.
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-[520px] text-[13.5px] md:text-[15px] font-semibold leading-[1.65] text-white/90"
          >
            First Choice Property Group is a full-service property management company proudly serving communities, property owners, investors, and developers throughout South Carolina.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="inline-flex h-[48px] items-center gap-2 bg-[var(--brand-gold)] px-6 text-[11px] font-black uppercase text-white tracking-wider shadow-lg hover:bg-[var(--brand-gold-90)] transition duration-200"
            >
              <CalendarDays size={14} />
              Schedule a Consultation
            </a>
            <a
              href="#contact"
              className="inline-flex h-[48px] items-center border-2 border-white bg-[var(--midnight-navy-30)] hover:bg-white hover:text-[var(--midnight-navy)] px-7 text-[11px] font-black uppercase text-white tracking-wider transition duration-200"
            >
              Request a Proposal
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function ProofBar() {
  const items = [
    ["20+", "Years Experience", "Proven property management expertise", Award],
    ["Statewide", "South Carolina", "Local knowledge. Statewide commitment.", SouthCarolinaIcon],
    ["Full-Service", "Solutions", "Comprehensive management under one roof", UsersRound],
    ["Trusted", "Partner", "Relationships built on communication & integrity", Handshake]
  ];

  return (
    <section className="bg-[var(--primary-navy)] text-white py-8 lg:py-10 border-b border-white/10">
      <div className="mx-auto grid max-w-[1160px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
        {items.map(([title, label, copy, Icon], index) => (
          <motion.div
            key={title}
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="flex items-center gap-4 py-4 lg:py-2 px-0 lg:px-6 border-b border-white/10 sm:border-b-0 lg:border-r border-white/10 last:border-b-0 last:border-r-0 lg:first:pl-0"
          >
            <Icon className="h-10 w-10 shrink-0 text-[var(--brand-gold)]" strokeWidth={1.8} />
            <div>
              <p className="text-[20px] lg:text-[24px] font-black uppercase leading-none">{title}</p>
              <p className="mt-1 text-[10px] lg:text-[11px] font-black uppercase tracking-[0.05em] text-white/90">{label}</p>
              <p className="mt-2 text-[11px] lg:text-[12px] font-medium leading-relaxed text-white/70">{copy}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function ServiceDivisions() {
  return (
    <section id="services" className="bg-white px-6 py-16 lg:py-24">
      <div className="mx-auto max-w-[1160px] text-center">
        <p className="text-[11px] font-black uppercase tracking-[0.1em] text-[var(--brand-gold)]">Our Service Divisions</p>
        <h2 className="mt-3 text-[28px] md:text-[36px] font-black tracking-tight text-[var(--text-navy)]">
          Comprehensive Solutions for Every Property Type
        </h2>
        <div className="mx-auto mt-4 h-[2px] w-12 bg-[var(--brand-gold)]" />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="relative overflow-hidden bg-[var(--light-gray)] text-left shadow-[0_8px_24px_rgba(5,34,61,0.06)] rounded-[4px] border border-gray-100 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-[130px] w-full">
                    <Image src={service.image} alt={service.title} fill sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
                  </div>
                  <div className="relative px-6 pb-6 pt-10 text-center">
                    <span className="absolute left-1/2 top-0 grid h-[48px] w-[48px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[var(--primary-navy)] text-[var(--brand-gold)] ring-4 ring-white shadow-md">
                      <Icon size={18} strokeWidth={2} />
                    </span>
                    <h3 className="text-[13.5px] font-black uppercase leading-[1.35] text-[var(--text-navy)] tracking-wider min-h-[36px] flex items-center justify-center">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-[12px] font-medium leading-[1.6] text-[var(--text-slate)]">
                      {service.text}
                    </p>
                  </div>
                </div>
                <div className="pb-6 text-center">
                  <a href="#contact" className="inline-flex text-[11px] font-black uppercase text-[var(--brand-gold)] tracking-wider hover:text-[var(--brand-gold)]/90 transition">
                    Learn More&nbsp;→
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WhyChoose() {
  return (
    <section id="about-us" className="bg-white px-6 py-16 lg:py-24">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-12 lg:gap-16 max-w-[1160px]">
        <div className="flex flex-col justify-center items-start">
          <p className="text-[11px] font-black uppercase tracking-[0.1em] text-[var(--brand-gold)]">Why Choose First Choice</p>
          <h2 className="mt-3 text-[32px] md:text-[40px] font-black leading-[1.1] text-[var(--text-navy)]">
            A Partner You Can Rely On
          </h2>
          <p className="mt-6 text-[13.5px] md:text-[14.5px] font-medium leading-relaxed text-[var(--text-slate)]">
            We go beyond day-to-day management. We are strategic partners focused on protecting assets, enhancing communities, and delivering exceptional experiences.
          </p>
          <a href="#contact" className="mt-8 inline-flex h-12 items-center bg-[var(--primary-navy)] px-8 text-[11px] font-black uppercase text-white tracking-wider hover:bg-[var(--midnight-navy)] transition shadow-md">
            About Our Company
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 border-[#d9dee5] border-t md:border-t-0">
          {values.map(([title, text, Icon], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.035 }}
              className={`p-6 lg:p-8 text-center border-b border-[#d9dee5] sm:border-r border-[#d9dee5] ${
                index === 5 ? "border-b-0 sm:border-r-0" : ""
              } ${
                (index + 1) % 2 === 0 ? "sm:border-r-0 md:border-r" : ""
              } ${
                (index + 1) % 3 === 0 ? "md:border-r-0" : ""
              } ${
                index >= 3 ? "md:border-b-0" : ""
              }`}
            >
              <Icon className="mx-auto h-9 w-9 text-[var(--brand-gold)]" strokeWidth={1.8} />
              <h3 className="mt-4 text-[13.5px] font-black uppercase tracking-wider text-[var(--text-navy)]">{title}</h3>
              <p className="mt-3 text-[12px] font-medium leading-[1.6] text-[var(--text-slate)]">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function VendorNetwork() {
  return (
    <section id="vendor-network" className="bg-[var(--primary-navy)] px-6 py-16 lg:py-24 text-white">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-[390px_1fr] items-center gap-12 lg:gap-16 max-w-[1160px]">
        <div>
          <p className="text-[11px] font-black uppercase tracking-[0.1em] text-[var(--brand-gold)]">Our Vendor Network</p>
          <h2 className="mt-3 text-[32px] md:text-[40px] font-black leading-[1.1] text-white">
            Strong Relationships.
            <br />
            Reliable Results.
          </h2>
          <p className="mt-6 text-[13.5px] md:text-[14.5px] font-medium leading-relaxed text-white/80">
            Our long-standing network of trusted contractors and vendors across South Carolina allows us to deliver dependable service, responsive communication, and quality workmanship.
          </p>
          <a href="#contact" className="mt-8 inline-flex h-11 items-center bg-[var(--brand-gold)] px-7 text-[11px] font-black uppercase text-white tracking-wider hover:bg-[var(--brand-gold-90)] transition shadow-lg">
            Learn More About Our Vendor Network
          </a>
        </div>

        <div className="grid grid-cols-3 gap-3 md:gap-4">
          {vendorImages.map((image, index) => (
            <motion.div
              key={image}
              initial={{ opacity: 1, scale: 1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              className="relative h-[80px] sm:h-[120px] lg:h-[140px] overflow-hidden rounded-[4px] ring-1 ring-white/10 shadow-md"
            >
              <Image src={image} alt="Vendor service work" fill sizes="(min-width: 1024px) 22vw, 33vw" className="object-cover hover:scale-105 transition duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  return (
    <section className="bg-white px-6 py-16 lg:py-20 border-b border-gray-100">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-[300px_1fr] items-center gap-10 lg:gap-16 max-w-[1160px]">
        <h2 className="border-b lg:border-b-0 lg:border-r border-[#bec7d2] pb-6 lg:pb-0 lg:pr-12 text-[28px] md:text-[34px] font-black leading-[1.1] text-[var(--text-navy)]">
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
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="text-center md:border-r border-gray-200 last:border-r-0 md:px-2"
            >
              <Icon className="mx-auto h-9 w-9 text-[var(--brand-gold)]" strokeWidth={1.8} />
              <p className="mt-4 text-[20px] lg:text-[24px] font-black text-[var(--text-navy)]">{value}</p>
              <p className="mx-auto mt-2 max-w-[140px] text-[12px] font-bold leading-normal text-[var(--text-slate)]">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="resources" className="bg-[var(--light-gray)] px-6 py-16 lg:py-24">
      <div className="mx-auto max-w-[1160px] text-center">
        <p className="text-[11px] font-black uppercase tracking-[0.1em] text-[var(--brand-gold)]">What Our Clients Say</p>
        <h2 className="mt-3 text-[28px] md:text-[36px] font-black tracking-tight text-[var(--text-navy)]">
          Trusted by Communities. Chosen by Professionals.
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(([quote, name, city], index) => (
            <motion.article
              key={name}
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white p-8 text-left shadow-[0_8px_24px_rgba(5,34,61,0.04)] rounded-[4px] border border-gray-100 flex flex-col justify-between"
            >
              <div>
                <p className="text-[48px] font-serif font-black leading-none text-[var(--brand-gold)] h-8 -mt-2">“</p>
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
                  className="h-[40px] w-[40px] rounded-full object-cover shadow-sm"
                />
                <div>
                  <p className="text-[13px] font-black text-[var(--text-navy)]">{name}</p>
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

function ServiceAreas() {
  return (
    <section className="bg-white px-6 py-16 lg:py-24">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-[1fr_auto] lg:grid-cols-[320px_1fr_260px] items-center gap-12 max-w-[1160px]">
        <div className="flex flex-col items-start justify-center">
          <p className="text-[11px] font-black uppercase tracking-[0.1em] text-[var(--brand-gold)]">Proudly Serving</p>
          <h2 className="mt-3 text-[32px] md:text-[38px] font-black leading-[1.1] text-[var(--text-navy)]">
            Communities Across South Carolina
          </h2>
          <p className="mt-5 text-[13px] md:text-[14px] font-medium leading-relaxed text-[var(--text-slate)]">
            From the Upstate to the Lowcountry, we provide exceptional property management services statewide.
          </p>
          <a href="#contact" className="mt-8 inline-flex h-11 items-center bg-[var(--primary-navy)] px-7 text-[11px] font-black uppercase text-white tracking-wider hover:bg-[var(--midnight-navy)] transition shadow-md">
            View Our Service Areas
          </a>
        </div>
        
        <div className="flex justify-center items-center w-full md:max-w-[420px] lg:max-w-none">
          <SouthCarolinaMap />
        </div>

        <ul className="grid grid-cols-2 md:grid-cols-1 gap-4 w-full border-t border-gray-100 pt-8 md:border-t-0 md:pt-0">
          {cities.map((city) => (
            <li key={city} className="flex items-center gap-3 text-[13.5px] lg:text-[14.5px] font-bold text-[var(--text-slate)]">
              <CheckCircle2 size={16} className="text-[var(--brand-gold)] shrink-0" strokeWidth={2.5} />
              {city}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function CtaBar() {
  return (
    <section id="contact" className="bg-[var(--brand-gold)] px-6 py-10 md:py-12 text-white">
      <div className="mx-auto flex flex-col md:flex-row items-center justify-between gap-6 max-w-[1160px]">
        <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
          <CalendarDays className="h-12 w-12 text-white shrink-0" strokeWidth={1.8} />
          <div>
            <h2 className="text-[18px] md:text-[22px] font-black leading-snug">Ready to Experience the First Choice Difference?</h2>
            <p className="text-[13px] md:text-[14px] font-medium text-white/90 mt-1">Let&apos;s discuss how we can help your community or property thrive.</p>
          </div>
        </div>
        <a 
          href="mailto:info@firstchoicepg.com" 
          className="inline-flex h-[48px] items-center bg-[var(--primary-navy)] px-8 text-[11px] font-black uppercase tracking-wider text-white shadow-lg hover:bg-[var(--midnight-navy)] transition shrink-0"
        >
          Schedule a Consultation
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[var(--midnight-navy)] text-white px-6 pt-16 border-t border-white/5">
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[1.5fr_1fr_1.2fr_1fr_1.4fr] gap-10 pb-12 max-w-[1160px]">
        <div>
          <div className="flex items-center gap-3">
            <LogoMark />
            <div className="leading-tight">
              <p className="text-[19px] font-black uppercase tracking-[0.04em]">First Choice</p>
              <p className="text-[12px] font-black uppercase tracking-[0.17em] text-white/80 -mt-0.5">Property Group</p>
            </div>
          </div>
          <p className="mt-5 max-w-[240px] text-[12px] font-medium leading-relaxed text-white/70">
            Full-service property management solutions for communities, property owners, investors, and developers across South Carolina.
          </p>
          <div className="mt-6 flex gap-3.5">
            <a href="#" className="grid h-8 w-8 place-items-center rounded-full bg-white/10 text-white hover:bg-[var(--brand-gold)] hover:scale-105 transition duration-200" aria-label="Facebook">
              <FacebookIcon className="h-4 w-4" />
            </a>
            <a href="#" className="grid h-8 w-8 place-items-center rounded-full bg-white/10 text-white hover:bg-[var(--brand-gold)] hover:scale-105 transition duration-200" aria-label="LinkedIn">
              <LinkedinIcon className="h-4 w-4" />
            </a>
            <a href="#" className="grid h-8 w-8 place-items-center rounded-full bg-white/10 text-white hover:bg-[var(--brand-gold)] hover:scale-105 transition duration-200" aria-label="Instagram">
              <InstagramIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
        <FooterColumn title="Quick Links" items={["Home", "About Us", "Services", "Vendor Network", "Resources", "Contact Us"]} />
        <FooterColumn title="Our Services" items={["HOA Management", "Residential Management", "Commercial Management", "Developer & Builder Services", "Financial Management"]} />
        <FooterColumn title="Resources" items={["Blog", "FAQs", "Owner Resources", "HOA Resources", "Tenant Resources"]} />
        <div>
          <h3 className="text-[12px] font-black uppercase tracking-wider">Contact Us</h3>
          <ul className="mt-5 space-y-3.5 text-[12px] font-medium leading-relaxed text-white/70">
            <li className="flex gap-3"><Phone size={14} className="mt-0.5 text-[var(--brand-gold)] shrink-0" strokeWidth={2.5} /> (864) 326-0000</li>
            <li className="flex gap-3"><Mail size={14} className="mt-0.5 text-[var(--brand-gold)] shrink-0" strokeWidth={2.5} /> info@firstchoicepg.com</li>
            <li className="flex gap-3"><MapPin size={14} className="mt-0.5 text-[var(--brand-gold)] shrink-0" strokeWidth={2.5} /> 1230 Woodruff Road Suite 101<br />Greenville, SC 29607</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-white/10 py-6 text-[11px] text-white/50 max-w-[1160px]">
        <p>© 2026 First Choice Property Group. All Rights Reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition">Privacy Policy</a>
          <a href="#" className="hover:text-white transition">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }) {
  return (
    <div>
      <h3 className="text-[12px] font-black uppercase tracking-wider">{title}</h3>
      <ul className="mt-5 space-y-2.5 text-[12px] font-semibold text-white/60">
        {items.map((item) => (
          <li key={item}>
            <a href={`#${item.toLowerCase().replaceAll(" ", "-")}`} className="hover:text-[var(--brand-gold)] transition">{item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function LogoMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 58 58" className="h-[45px] w-[45px] shrink-0">
      <path d="M29 4 6 16v5L29 9l23 12v-5L29 4Z" fill="#d3a438" />
      <path d="M12 21h5v28l-5-3V21Zm10-5h5v38l-5-3V16Zm10 0h5v35l-5 3V16Zm10 5h5v25l-5 3V21Z" fill="#d3a438" />
      <path d="M6 51 29 58l23-7V46L29 53 6 46v5Z" fill="#796024" opacity=".55" />
    </svg>
  );
}

function SouthCarolinaIcon(props) {
  return (
    <svg viewBox="0 0 80 56" fill="none" {...props}>
      <path d="m11 15 11-6 19 6 13 1 14 14-7 9-16 8-16-5-12 2-9-11 7-8-4-10Z" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function SouthCarolinaMap() {
  const pins = [
    ["Greenville", 130, 68],
    ["Spartanburg", 205, 64],
    ["Anderson", 112, 112],
    ["Columbia", 245, 164],
    ["Florence", 352, 132],
    ["Myrtle Beach", 430, 190],
    ["Charleston", 352, 292],
    ["Beaufort", 287, 338]
  ];

  return (
    <div className="w-full max-w-[470px]">
      <svg viewBox="0 0 520 390" role="img" aria-label="South Carolina service area map" className="h-auto w-full drop-shadow-sm">
        <path
          d="M147 28 244 44l84 23 122 61-16 35 41 18-53 42-27 58-84 71-62-15-52 30-60-55-56 10-38-65 36-50-38-48 48-39-30-43 38-49Z"
          fill="var(--primary-navy)"
        />
        <path
          d="M147 28 244 44l84 23 122 61-16 35 41 18-53 42-27 58-84 71-62-15-52 30-60-55-56 10-38-65 36-50-38-48 48-39-30-43 38-49Z"
          fill="none"
          stroke="#ffffff"
          strokeOpacity=".16"
          strokeWidth="3"
        />
        {pins.map(([label, x, y]) => (
          <g key={label}>
            <circle cx={x} cy={y} r="7" fill="var(--brand-gold)" />
            <circle cx={x} cy={y} r="3" fill="var(--primary-navy)" />
            <text x={x + 10} y={y + 4} fill="#ffffff" fontSize="12" fontWeight="700">
              {label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
