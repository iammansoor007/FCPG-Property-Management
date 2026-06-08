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

const navy = "#062746";

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
    <header className="absolute inset-x-0 top-0 z-40 border-b border-white/18 bg-[#031b31]/92 text-white">
      <div className="mx-auto flex h-[74px] max-w-[1160px] items-center justify-between gap-3 px-8 max-[820px]:px-5">
        <a href="#" className="flex min-w-[222px] items-center gap-3 max-[820px]:min-w-[178px] max-[820px]:gap-2" aria-label="First Choice Property Group">
          <LogoMark />
          <div className="leading-none">
            <p className="text-[21px] font-black uppercase tracking-[0.04em] max-[820px]:text-[16px]">First Choice</p>
            <p className="text-[13px] font-black uppercase tracking-[0.17em] text-white/85 max-[820px]:text-[9px]">Property Group</p>
            <p className="mt-1 text-[8px] font-bold uppercase tracking-[0.2em] text-[#d5ad48] max-[820px]:text-[6px]">Your property. Our priority.</p>
          </div>
        </a>

        <nav className="flex items-end self-stretch">
          {nav.map((item, index) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replaceAll(" ", "-")}`}
              className={`flex h-full items-center gap-1 px-4 text-[10px] font-black uppercase tracking-[0.03em] transition hover:text-[#d7ad42] max-[820px]:px-[5px] max-[820px]:text-[6px] ${
                index === 0 ? "border-b-[3px] border-[#d7ad42] text-white" : "text-white/88"
              }`}
            >
              {item}
              {(item === "Services" || item === "Resources") && <ChevronDown size={11} />}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 min-[1120px]:flex">
          <span className="flex items-center gap-2 text-[10px] font-black">
            <Phone size={13} className="text-[#d7ad42]" />
            (864) 326-0000
          </span>
          <span className="flex items-center gap-2 text-[10px] font-black">
            <MapPin size={13} className="text-[#d7ad42]" />
            Greenville, SC
          </span>
          <span className="grid h-4 w-4 place-items-center rounded-full bg-white/10 text-[9px] font-black">f</span>
        </div>

        <a
          href="#contact"
          className="hidden h-10 items-center gap-2 bg-[#c99b31] px-5 text-[10px] font-black uppercase text-white shadow-lg shadow-black/20 transition hover:bg-[#b88923] min-[880px]:flex"
        >
          <CalendarDays size={14} />
          Request a Consultation
        </a>

        <button className="hidden h-10 w-10 place-items-center border border-white/20 max-[620px]:grid" aria-label="Open menu">
          <Menu size={20} />
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative h-[416px] overflow-hidden bg-[#061f38] pt-[74px] text-white max-[820px]:h-[386px]">
      <Image
        src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85"
        alt="Townhome community street"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#031b31] via-[#031b31]/80 to-[#031b31]/12" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#031b31]/25 via-transparent to-transparent" />

      <motion.div
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        className="relative mx-auto flex h-[342px] max-w-[1160px] items-center px-8 py-9 max-[820px]:h-[312px] max-[820px]:px-9 max-[820px]:py-6"
      >
        <div className="max-w-[570px] max-[820px]:max-w-[548px]">
          <motion.p variants={fadeUp} className="text-[13px] font-black uppercase tracking-[0.07em] text-[#d5ad48]">
            Professional Property Management
          </motion.p>
          <motion.h1 variants={fadeUp} className="mt-4 text-[50px] font-black leading-[1.05] tracking-normal text-white max-[820px]:text-[37px]">
            Managing Communities.
            <br />
            Protecting Investments.
            <br />
            Maximizing Value.
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-5 max-w-[520px] text-[15px] font-semibold leading-7 text-white/92 max-[820px]:mt-4 max-[820px]:max-w-[505px] max-[820px]:text-[11px] max-[820px]:leading-5">
            First Choice Property Group is a full-service property management company proudly serving communities, property owners, investors, and developers throughout South Carolina.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-7 flex flex-wrap gap-4 max-[820px]:mt-5">
            <a href="#contact" className="inline-flex h-[45px] items-center gap-2 bg-[#c99b31] px-7 text-[11px] font-black uppercase text-white max-[820px]:px-5 max-[820px]:text-[9px]">
              <CalendarDays size={15} />
              Schedule a Consultation
            </a>
            <a href="#contact" className="inline-flex h-[45px] items-center border border-white/65 bg-[#05233f]/50 px-8 text-[11px] font-black uppercase text-white max-[820px]:px-6 max-[820px]:text-[9px]">
              Request a Proposal
            </a>
          </motion.div>
        </div>
      </motion.div>
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
    <section className="bg-[#052946] text-white">
      <div className="mx-auto grid max-w-[1160px] grid-cols-4 px-8 py-7 max-[820px]:px-5 max-[820px]:py-4">
        {items.map(([title, label, copy, Icon], index) => (
          <motion.div
            key={title}
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="flex min-h-[78px] items-center gap-5 border-r border-white/18 px-8 py-2 first:pl-0 last:border-r-0 max-[820px]:min-h-[62px] max-[820px]:gap-3 max-[820px]:px-4"
          >
            <Icon className="h-12 w-12 shrink-0 text-[#c99b31] max-[820px]:h-8 max-[820px]:w-8" strokeWidth={1.8} />
            <div>
              <p className="text-[24px] font-black uppercase leading-none max-[820px]:text-[14px]">{title}</p>
              <p className="mt-1 text-[11px] font-black uppercase tracking-[0.05em] text-white/95 max-[820px]:text-[7px]">{label}</p>
              <p className="mt-2 max-w-[150px] text-[10px] font-medium leading-4 text-white/72 max-[820px]:text-[7px] max-[820px]:leading-3">{copy}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function ServiceDivisions() {
  return (
    <section id="services" className="bg-white px-8 pb-16 pt-9 max-[820px]:pb-7 max-[820px]:pt-6">
      <div className="mx-auto max-w-[1160px] text-center">
        <p className="text-[11px] font-black uppercase tracking-[0.06em] text-[#c99b31]">Our Service Divisions</p>
        <h2 className="mt-2 text-[28px] font-black tracking-normal text-[#082642] max-[820px]:text-[22px]">Comprehensive Solutions for Every Property Type</h2>
        <div className="mx-auto mt-4 h-[2px] w-12 bg-[#c99b31] max-[820px]:mt-3" />

        <div className="mt-8 grid grid-cols-5 gap-4 max-[820px]:mt-5 max-[820px]:gap-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="relative overflow-hidden bg-[#f6f7f8] text-left shadow-[0_8px_24px_rgba(5,34,61,0.08)]"
              >
                <div className="relative h-[108px] max-[820px]:h-[72px]">
                  <Image src={service.image} alt={service.title} fill sizes="(min-width: 768px) 20vw, 100vw" className="object-cover" />
                </div>
                <div className="relative px-6 pb-7 pt-11 text-center max-[820px]:px-3 max-[820px]:pb-3 max-[820px]:pt-7">
                  <span className="absolute left-1/2 top-0 grid h-[52px] w-[52px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[#052946] text-[#c99b31] ring-4 ring-white max-[820px]:h-[38px] max-[820px]:w-[38px]">
                    <Icon size={20} strokeWidth={1.8} />
                  </span>
                  <h3 className="min-h-[42px] text-[13px] font-black uppercase leading-[1.35] text-[#082642] max-[820px]:min-h-[28px] max-[820px]:text-[7px]">{service.title}</h3>
                  <p className="mt-5 min-h-[82px] text-[10.5px] font-medium leading-[1.65] text-[#526273] max-[820px]:mt-1.5 max-[820px]:min-h-[45px] max-[820px]:text-[5.5px] max-[820px]:leading-[1.28]">{service.text}</p>
                  <a href="#contact" className="mt-5 inline-flex text-[10px] font-black uppercase text-[#c99b31] max-[820px]:mt-2 max-[820px]:text-[7px]">
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
    <section id="about-us" className="bg-white px-8 pb-16 max-[820px]:pb-7">
      <div className="mx-auto grid max-w-[1160px] grid-cols-[260px_1fr] gap-10 min-[980px]:grid-cols-[360px_1fr]">
        <div className="pt-5 max-[820px]:pt-2">
          <p className="text-[11px] font-black uppercase tracking-[0.06em] text-[#c99b31]">Why Choose First Choice</p>
          <h2 className="mt-3 text-[32px] font-black leading-[1.08] tracking-normal text-[#082642] max-[820px]:text-[23px]">
            A Partner You Can
            <br />
            Rely On
          </h2>
          <p className="mt-5 text-[12px] font-medium leading-6 text-[#43566a] max-[820px]:mt-3 max-[820px]:text-[9px] max-[820px]:leading-4">
            We go beyond day-to-day management. We are strategic partners focused on protecting assets, enhancing communities, and delivering exceptional experiences.
          </p>
          <a href="#contact" className="mt-7 inline-flex h-12 items-center bg-[#052946] px-8 text-[10px] font-black uppercase text-white max-[820px]:mt-5 max-[820px]:h-10 max-[820px]:px-6 max-[820px]:text-[8px]">
            About Our Company
          </a>
        </div>

        <div className="grid grid-cols-3 border-[#d9dee5]">
          {values.map(([title, text, Icon], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.035 }}
              className={`min-h-[148px] border-[#d9dee5] p-7 text-center max-[820px]:min-h-[100px] max-[820px]:p-3 ${index % 3 === 2 ? "" : "border-r"} ${index < 3 ? "border-b" : ""}`}
            >
              <Icon className="mx-auto h-9 w-9 text-[#c99b31] max-[820px]:h-6 max-[820px]:w-6" strokeWidth={1.7} />
              <h3 className="mt-4 text-[12px] font-black text-[#082642] max-[820px]:mt-2 max-[820px]:text-[8px]">{title}</h3>
              <p className="mt-2 text-[10.5px] font-medium leading-[1.55] text-[#5b6978] max-[820px]:mt-1 max-[820px]:text-[6px] max-[820px]:leading-[1.25]">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function VendorNetwork() {
  return (
    <section id="vendor-network" className="bg-[#052946] px-8 py-8 text-white max-[820px]:py-6">
      <div className="mx-auto grid max-w-[1160px] grid-cols-[260px_1fr] items-center gap-10 min-[980px]:grid-cols-[390px_1fr]">
        <div>
          <p className="text-[11px] font-black uppercase tracking-[0.06em] text-[#c99b31]">Our Vendor Network</p>
          <h2 className="mt-3 text-[32px] font-black leading-[1.08] tracking-normal max-[820px]:text-[24px]">
            Strong Relationships.
            <br />
            Reliable Results.
          </h2>
          <p className="mt-5 max-w-[330px] text-[12px] font-medium leading-6 text-white/80 max-[820px]:mt-3 max-[820px]:text-[9px] max-[820px]:leading-4">
            Our long-standing network of trusted contractors and vendors across South Carolina allows us to deliver dependable service, responsive communication, and quality workmanship.
          </p>
          <a href="#contact" className="mt-6 inline-flex h-11 items-center bg-[#c99b31] px-7 text-[10px] font-black uppercase text-white max-[820px]:mt-4 max-[820px]:h-9 max-[820px]:px-6 max-[820px]:text-[8px]">
            Learn More About Our Vendor Network
          </a>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {vendorImages.map((image, index) => (
            <motion.div
              key={image}
              initial={{ opacity: 1, scale: 1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
            className="relative h-[114px] overflow-hidden rounded-[3px] ring-1 ring-white/20 max-[820px]:h-[58px]"
            >
              <Image src={image} alt="Vendor service work" fill sizes="(min-width: 768px) 22vw, 33vw" className="object-cover" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  return (
    <section className="bg-white px-8 py-9 max-[820px]:py-5">
      <div className="mx-auto grid max-w-[1160px] grid-cols-[210px_1fr] items-center gap-6 min-[980px]:grid-cols-[280px_1fr]">
        <h2 className="border-r border-[#bec7d2] pr-10 text-[30px] font-black leading-[1.07] tracking-normal text-[#082642] max-[820px]:text-[22px]">
          20+ Years of
          <br />
          Experience You
          <br />
          Can Trust
        </h2>
        <div className="grid grid-cols-4 gap-5">
          {trustStats.map(([value, label, Icon], index) => (
            <motion.div
              key={value}
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="border-r border-[#d9dee5] text-center last:border-r-0"
            >
              <Icon className="mx-auto h-9 w-9 text-[#c99b31] max-[820px]:h-7 max-[820px]:w-7" strokeWidth={1.7} />
              <p className="mt-3 text-[18px] font-black text-[#082642] max-[820px]:mt-2 max-[820px]:text-[14px]">{value}</p>
              <p className="mx-auto mt-1 max-w-[105px] text-[11px] font-bold leading-[1.3] text-[#526273] max-[820px]:text-[8px]">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="resources" className="bg-white px-8 pb-14 pt-4 max-[820px]:pb-7 max-[820px]:pt-1">
      <div className="mx-auto max-w-[980px] text-center">
        <p className="text-[11px] font-black uppercase tracking-[0.06em] text-[#c99b31]">What Our Clients Say</p>
        <h2 className="mt-3 text-[28px] font-black tracking-normal text-[#082642] max-[820px]:text-[21px]">Trusted by Communities. Chosen by Professionals.</h2>

        <div className="mt-8 grid grid-cols-3 gap-8 max-[820px]:mt-5 max-[820px]:gap-5">
          {testimonials.map(([quote, name, city], index) => (
            <motion.article
              key={name}
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-[#f7f8fa] p-7 text-left shadow-[0_6px_20px_rgba(5,34,61,0.05)] max-[820px]:p-4"
            >
              <p className="text-[32px] font-black leading-none text-[#c99b31] max-[820px]:text-[24px]">“</p>
              <p className="min-h-[90px] text-[11.5px] font-medium leading-[1.65] text-[#43566a] max-[820px]:min-h-[58px] max-[820px]:text-[7px] max-[820px]:leading-[1.35]">{quote}</p>
              <div className="mt-5 flex items-center gap-3 max-[820px]:mt-3">
                <Image
                  src={`https://images.unsplash.com/photo-${index === 0 ? "1500648767791-00dcc994a43e" : index === 1 ? "1472099645785-5658abf4ff4e" : "1507003211169-0a1dd7228f2d"}?auto=format&fit=crop&w=120&q=80`}
                  alt={name}
                  width={34}
                  height={34}
                  className="h-[34px] w-[34px] rounded-full object-cover max-[820px]:h-[28px] max-[820px]:w-[28px]"
                />
                <div>
                  <p className="text-[11px] font-black text-[#082642] max-[820px]:text-[8px]">{name}</p>
                  <p className="text-[10px] font-bold text-[#627386] max-[820px]:text-[7px]">{city}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        <div className="mt-7 flex justify-center gap-2 max-[820px]:mt-4">
          <span className="h-2 w-2 rounded-full bg-[#c99b31]" />
          <span className="h-2 w-2 rounded-full bg-[#cdd3d9]" />
          <span className="h-2 w-2 rounded-full bg-[#cdd3d9]" />
        </div>
      </div>
    </section>
  );
}

function ServiceAreas() {
  return (
    <section className="bg-[#f7f8fa] px-8 py-11 max-[820px]:py-4">
      <div className="mx-auto grid max-w-[1160px] grid-cols-[210px_1fr_168px] items-center gap-7 min-[980px]:grid-cols-[300px_1fr_250px]">
        <div>
          <p className="text-[11px] font-black uppercase tracking-[0.06em] text-[#c99b31]">Proudly Serving</p>
          <h2 className="mt-3 text-[32px] font-black leading-[1.08] tracking-normal text-[#082642] max-[820px]:mt-2 max-[820px]:text-[20px]">
            Communities Across
            <br />
            South Carolina
          </h2>
          <p className="mt-5 text-[12px] font-semibold leading-6 text-[#43566a] max-[820px]:mt-2 max-[820px]:text-[7px] max-[820px]:leading-3">
            From the Upstate to the Lowcountry, we provide exceptional property management services statewide.
          </p>
          <a href="#contact" className="mt-6 inline-flex h-11 items-center bg-[#052946] px-7 text-[10px] font-black uppercase text-white max-[820px]:mt-4 max-[820px]:h-8 max-[820px]:px-5 max-[820px]:text-[7px]">
            View Our Service Areas
          </a>
        </div>
        <SouthCarolinaMap />
        <ul className="space-y-3 max-[820px]:space-y-2">
          {cities.map((city) => (
            <li key={city} className="flex items-center gap-3 text-[12px] font-semibold text-[#43566a] max-[820px]:gap-2 max-[820px]:text-[8px]">
              <CheckCircle2 size={15} className="text-[#c99b31] max-[820px]:h-3 max-[820px]:w-3" />
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
    <section id="contact" className="bg-[#c99b31] px-8 py-6 text-white max-[820px]:py-3">
      <div className="mx-auto flex max-w-[1160px] items-center justify-between gap-5">
        <div className="flex items-center gap-5">
          <CalendarDays className="h-11 w-11 max-[820px]:h-7 max-[820px]:w-7" strokeWidth={1.8} />
          <div>
            <h2 className="text-[18px] font-black max-[820px]:text-[12px]">Ready to Experience the First Choice Difference?</h2>
            <p className="text-[12px] font-medium text-white/86 max-[820px]:text-[8px]">Let&apos;s discuss how we can help your community or property thrive.</p>
          </div>
        </div>
        <a href="mailto:info@firstchoicepg.com" className="inline-flex h-11 items-center bg-[#052946] px-9 text-[10px] font-black uppercase text-white max-[820px]:h-8 max-[820px]:px-6 max-[820px]:text-[7px]">
          Schedule a Consultation
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#031b31] px-8 pt-8 text-white max-[820px]:pt-3">
      <div className="mx-auto grid max-w-[1160px] grid-cols-[1.5fr_1fr_1.2fr_1fr_1.4fr] gap-9 pb-8 max-[820px]:gap-3 max-[820px]:pb-2">
        <div>
          <div className="flex items-center gap-3">
            <LogoMark />
            <div className="leading-none">
              <p className="text-[19px] font-black uppercase tracking-[0.04em] max-[820px]:text-[11px]">First Choice</p>
              <p className="text-[12px] font-black uppercase tracking-[0.17em] text-white/85 max-[820px]:text-[7px]">Property Group</p>
            </div>
          </div>
          <p className="mt-5 max-w-[220px] text-[11px] font-medium leading-5 text-white/65 max-[820px]:mt-1.5 max-[820px]:text-[6px] max-[820px]:leading-[1.15]">
            Full-service property management solutions for communities, property owners, investors, and developers across South Carolina.
          </p>
          <div className="mt-5 flex gap-3 max-[820px]:mt-1.5 max-[820px]:gap-2">
            {["f", "in", "ig"].map((item) => (
              <span key={item} className="grid h-7 w-7 place-items-center rounded-full bg-white/10 text-[9px] font-black uppercase max-[820px]:h-5 max-[820px]:w-5 max-[820px]:text-[7px]">
                {item}
              </span>
            ))}
          </div>
        </div>
        <FooterColumn title="Quick Links" items={["Home", "About Us", "Services", "Vendor Network", "Resources", "Contact Us"]} />
        <FooterColumn title="Our Services" items={["HOA Management", "Residential Management", "Commercial Management", "Developer & Builder Services", "Financial Management"]} />
        <FooterColumn title="Resources" items={["Blog", "FAQs", "Owner Resources", "HOA Resources", "Tenant Resources"]} />
        <div>
          <h3 className="text-[11px] font-black uppercase">Contact Us</h3>
          <ul className="mt-4 space-y-3 text-[11px] font-medium leading-5 text-white/68 max-[820px]:mt-2 max-[820px]:space-y-1.5 max-[820px]:text-[6px] max-[820px]:leading-[1.15]">
            <li className="flex gap-3 max-[820px]:gap-2"><Phone size={13} className="mt-1 text-[#c99b31] max-[820px]:h-2.5 max-[820px]:w-2.5" /> (864) 326-0000</li>
            <li className="flex gap-3 max-[820px]:gap-2"><Mail size={13} className="mt-1 text-[#c99b31] max-[820px]:h-2.5 max-[820px]:w-2.5" /> info@firstchoicepg.com</li>
            <li className="flex gap-3 max-[820px]:gap-2"><MapPin size={13} className="mt-1 text-[#c99b31] max-[820px]:h-2.5 max-[820px]:w-2.5" /> 1230 Woodruff Road Suite 101 Greenville, SC 29607</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto flex max-w-[1160px] justify-between gap-3 border-t border-white/10 py-5 text-[10px] text-white/48 max-[820px]:py-2 max-[820px]:text-[6px]">
        <p>© 2026 First Choice Property Group. All Rights Reserved.</p>
        <div className="flex gap-8">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }) {
  return (
    <div>
      <h3 className="text-[11px] font-black uppercase max-[820px]:text-[8px]">{title}</h3>
      <ul className="mt-4 space-y-2 text-[11px] font-medium text-white/68 max-[820px]:mt-3 max-[820px]:space-y-1 max-[820px]:text-[7px]">
        {items.map((item) => (
          <li key={item}>
            <a href="#">{item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function LogoMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 58 58" className="h-[45px] w-[45px] shrink-0 max-[820px]:h-[30px] max-[820px]:w-[30px]">
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
    <div className="mx-auto w-full max-w-[470px] max-[820px]:max-w-[230px]">
      <svg viewBox="0 0 520 390" role="img" aria-label="South Carolina service area map" className="h-auto w-full drop-shadow-sm">
        <path
          d="M147 28 244 44l84 23 122 61-16 35 41 18-53 42-27 58-84 71-62-15-52 30-60-55-56 10-38-65 36-50-38-48 48-39-30-43 38-49Z"
          fill={navy}
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
            <circle cx={x} cy={y} r="7" fill="#c99b31" />
            <circle cx={x} cy={y} r="3" fill="#052946" />
            <text x={x + 10} y={y + 4} fill="#f5f7fb" fontSize="12" fontWeight="700">
              {label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
