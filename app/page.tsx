import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Navbar from "@/components/sections/Navbar";
import Process from "@/components/sections/HowItWorks";
import Projects from "@/components/sections/Financing";
import FinalCTA from "@/components/sections/FinalCTA";
import { MessageCircle } from "lucide-react";
import WhyBoneso from "@/components/sections/WhyChooseUs";
import FAQ from "@/components/sections/FAQ";
import AnnouncementBar from "@/components/sections/AnnouncementBar";
import TrustBar from "@/components/sections/TrustBar";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Promo from "@/components/sections/Promo";
import ReplacementSection from "@/components/sections/ReplacementSection";
import HowItWorks from "@/components/sections/HowItWorks";
import MaintenancePlan from "@/components/sections/MaintenancePlan";
import Testimonials from "@/components/sections/Testimonials";
import ServiceAreas from "@/components/sections/ServiceAreas";
import Financing from "@/components/sections/Financing";
import Contact from "@/components/sections/Contact";
import CertifiedTrusted from "@/components/sections/CertifiedTrusted";
export default function Page() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <WhyChooseUs />
      <Promo />
      <ReplacementSection />
      <HowItWorks />
      <MaintenancePlan />
      <Testimonials />
      <CertifiedTrusted />
      <ServiceAreas />
      <Financing />
      <FAQ />
      <FinalCTA />
      <Contact />
      <Footer />
      {/* <a
        href="#estimate"
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-[9px] bg-amber-500 px-5 py-3 text-sm font-bold tracking-wide text-[#0F1923] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#E2C06A]"
      >
        <MessageCircle size={17} />
        Let's Chat
      </a> */}
      <main></main>
    </>
  );
}
