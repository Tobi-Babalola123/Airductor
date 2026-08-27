"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const certifications = [
  {
    name: "Trane Comfort Specialist",
    image: "/images/trane.webp",
  },
  {
    name: "EPA",
    image: "/images/environmental.webp",
  },
  {
    name: "GreenScreened",
    image: "/images/green.webp",
  },
  {
    name: "Comfort Qualified",
    image: "/images/comfort.webp",
  },
];

export default function CertifiedTrusted() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-8 bg-amber-500" />

            <span className="text-amber-500 font-bold text-xs sm:text-sm tracking-[0.18em] uppercase">
              Certified & Trusted
            </span>

            <span className="h-px w-8 bg-amber-500" />
          </div>

          <h2 className="text-[#0b1d35] text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            Quality You Can <span className="text-amber-500">Trust.</span>
          </h2>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mt-4">
            High Desert Air Ductor is backed by recognized industry standards
            and trusted HVAC organizations, giving you confidence in every
            service we provide.
          </p>
        </motion.div>

        {/* Certification badges */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
        >
          {certifications.map((certification) => (
            <div
              key={certification.name}
              className="group bg-gray-50 border border-gray-100 rounded-xl min-h-[150px] sm:min-h-[170px] flex flex-col items-center justify-center px-5 py-6 transition-all duration-300 hover:bg-white hover:border-amber-200 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="relative w-28 h-20 sm:w-32 sm:h-24">
                <Image
                  src={certification.image}
                  alt={certification.name}
                  fill
                  className="object-contain"
                  sizes="128px"
                />
              </div>

              <p className="text-[#0b1d35] text-xs sm:text-sm font-bold text-center mt-4">
                {certification.name}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Supporting trust statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 text-center"
        >
          <div className="w-9 h-9 rounded-full bg-amber-100 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-amber-600"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
          </div>

          <p className="text-gray-600 text-sm">
            <span className="font-bold text-[#0b1d35]">
              Professional standards.
            </span>{" "}
            Reliable service. Local expertise.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
