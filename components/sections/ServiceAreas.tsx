"use client";

import { motion, useInView } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.55, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const areas = [
  "Ridgecrest",
  "Inyokern",
  "Trona",
  "Kernville",
  "Lake Isabella",
  "Weldon",
  "Lone Pine",
  "California City",
  "Pearsonville",
];

export default function ServiceAreas() {
  return (
    <section id="service-areas" className="py-20 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-14 items-center">
        <FadeUp>
          <p className="text-amber-500 font-semibold text-sm tracking-[0.18em] uppercase mb-3">
            Where We Work
          </p>
          <h2 className="text-[#0b1d35] text-5xl sm:text-6xl font-black uppercase leading-none mb-5">
            Proudly Serving Indian Wells Valley
          </h2>
          <p className="text-gray-500 text-lg mb-8 leading-relaxed">
            We provide fast, reliable HVAC service across the entire Indian
            Wells Valley region and surrounding communities.
          </p>
          <div className="grid grid-cols-3 gap-3 mb-8">
            {areas.map((area) => (
              <div
                key={area}
                className="flex items-center gap-2 bg-white border border-gray-100 rounded-lg px-3 py-2.5 hover:border-amber-300 transition-colors"
              >
                <MapPin size={13} className="text-amber-500 shrink-0" />
                <span className="text-gray-700 text-sm font-medium">
                  {area}
                </span>
              </div>
            ))}
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold px-6 py-3.5 rounded transition-all hover:scale-105"
          >
            Check Your Service Area <ArrowRight size={16} />
          </a>
        </FadeUp>
        <FadeUp delay={0.2}>
          <div className="relative rounded-2xl overflow-hidden bg-[#0b1d35] h-[420px]">
            <img
              src="/images/aerial.jpg"
              alt="Indian Wells Valley region"
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
              <MapPin size={40} className="text-amber-400 mb-4" />
              <p className="text-white text-3xl font-black uppercase">
                Indian Wells Valley
              </p>
              <p className="text-gray-400 text-sm mt-2">
                & Surrounding Communities
              </p>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
