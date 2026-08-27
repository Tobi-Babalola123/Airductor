"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Flame,
  Leaf,
  Phone,
  ShieldCheck,
  Wind,
  Wrench,
} from "lucide-react";

const PHONE_HREF = "tel:7603753100";
const PHONE = "(760) 375-3100";
const COMPANY = "High Desert Air Ductor";

const serviceQuickLinks = [
  {
    icon: Wind,
    label: "AC Repair",
    description: "Restore cool, comfortable air",
  },
  {
    icon: Flame,
    label: "Heating Repair",
    description: "Get your heat back",
  },
  {
    icon: Wrench,
    label: "New System Installation",
    description: "Upgrade your HVAC system",
  },
  {
    icon: ShieldCheck,
    label: "HVAC Maintenance",
    description: "Prevent costly breakdowns",
  },
  {
    icon: Leaf,
    label: "Indoor Air Quality",
    description: "Breathe cleaner, healthier air",
  },
];

const trustPoints = [
  "Experienced Technicians",
  "Fast Response",
  "Satisfaction Guaranteed",
  "Serving Indian Wells Valley",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[88vh] lg:min-h-[90vh] flex items-center overflow-hidden"
      style={{
        backgroundImage: "url(/images/airductor-heroimage.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#06111f]/95 via-[#081a2d]/90 to-[#081a2d]/65" />

      {/* Subtle bottom gradient */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/30 to-transparent" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-20 lg:py-24">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_390px] gap-12 xl:gap-20 items-center">
          {/* LEFT CONTENT */}
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-5"
            >
              <span className="h-px w-8 bg-amber-400" />

              <span className="text-amber-400 font-bold text-xs sm:text-sm tracking-[0.18em] uppercase">
                Indian Wells Valley HVAC Experts
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[0.98] tracking-tight mb-6"
            >
              Reliable HVAC Service{" "}
              <span className="text-amber-400">When You Need It Most.</span>
            </motion.h1>

            {/* Supporting copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="text-white/80 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mb-8"
            >
              From AC and heating repairs to new system installations and
              preventative maintenance,{" "}
              <span className="text-white font-medium">{COMPANY}</span> helps
              keep homes comfortable year-round.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.28 }}
              className="flex flex-col sm:flex-row gap-3 mb-9"
            >
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-extrabold px-7 py-4 rounded-md text-base sm:text-lg transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-amber-500/20"
              >
                Request Service
                <ArrowRight
                  size={19}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2 border border-white/40 hover:border-white bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white font-bold px-7 py-4 rounded-md text-base sm:text-lg transition-all duration-200"
              >
                <Phone size={18} />
                Call {PHONE}
              </a>
            </motion.div>

            {/* Veteran-Owned Business Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.36 }}
              className="flex items-center gap-3 mb-7"
            >
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 shrink-0">
                <Image
                  src="/images/veteran.webp"
                  alt="Veteran Owned Business"
                  fill
                  className="object-contain"
                  sizes="96px"
                />
              </div>

              <div>
                <p className="text-white font-bold text-sm sm:text-base">
                  Veteran-Owned & Operated
                </p>
                <p className="text-white/60 text-xs sm:text-sm mt-1">
                  Proudly serving our local community
                </p>
              </div>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 sm:flex sm:flex-wrap gap-x-6 gap-y-3"
            >
              {trustPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-2 text-white/80 text-xs sm:text-sm"
                >
                  <CheckCircle2 size={16} className="text-amber-400 shrink-0" />

                  <span>{point}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT SERVICE CARD */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl shadow-black/30 border border-white/20">
              {/* Card heading */}
              <div className="bg-[#0b1d35] px-6 py-5">
                <p className="text-amber-400 text-xs font-bold uppercase tracking-[0.15em] mb-1">
                  Need HVAC Help?
                </p>

                <h2 className="text-white text-xl font-extrabold">
                  What can we help you with?
                </h2>
              </div>

              {/* Services */}
              <div className="divide-y divide-gray-100">
                {serviceQuickLinks.map(({ icon: Icon, label, description }) => (
                  <a
                    key={label}
                    href="#contact"
                    className="group flex items-center justify-between gap-4 px-5 py-4 hover:bg-amber-50 transition-colors duration-200"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-10 h-10 rounded-lg bg-[#0b1d35]/10 group-hover:bg-amber-500 flex items-center justify-center shrink-0 transition-colors duration-200">
                        <Icon
                          size={18}
                          className="text-[#0b1d35] group-hover:text-white transition-colors"
                        />
                      </span>

                      <div>
                        <p className="text-gray-900 font-bold text-sm">
                          {label}
                        </p>

                        <p className="text-gray-500 text-xs mt-0.5">
                          {description}
                        </p>
                      </div>
                    </div>

                    <ChevronRight
                      size={17}
                      className="text-gray-400 group-hover:text-amber-500 group-hover:translate-x-0.5 transition-all shrink-0"
                    />
                  </a>
                ))}
              </div>

              {/* Card CTA */}
              <div className="bg-gray-50 p-5">
                <a
                  href={PHONE_HREF}
                  className="w-full inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-extrabold py-3.5 rounded-md transition-colors text-sm"
                >
                  <Phone size={16} />
                  Call {PHONE}
                </a>

                <p className="text-center text-gray-500 text-xs mt-3">
                  Speak directly with our team
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
