"use client";

import Hero from "./Hero";
import ProofBar from "./ProofBar";
import ServiceDivisions from "./ServiceDivisions";
import WhyChoose from "./WhyChoose";
import VendorNetwork from "./VendorNetwork";
import TrustStrip from "./TrustStrip";
import Testimonials from "./Testimonials";
import ServiceAreas from "./ServiceAreas";
import CtaBar from "./CtaBar";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-[#072642]">
      <Hero />
      <ProofBar />
      <ServiceDivisions />
      <WhyChoose />
      <VendorNetwork />
      <TrustStrip />
      <Testimonials />
      <ServiceAreas />
      <CtaBar />
    </main>
  );
}

