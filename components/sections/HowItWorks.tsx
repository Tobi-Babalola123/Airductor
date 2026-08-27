"use client";

import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

const steps = [
  {
    num: "01",
    title: "Request Service",
    desc: "Tell us what you need help with using our simple form or by calling us directly.",
  },
  {
    num: "02",
    title: "We'll Assess the Problem",
    desc: "A trained technician evaluates your HVAC system and diagnoses the issue accurately.",
  },
  {
    num: "03",
    title: "Enjoy Reliable Comfort",
    desc: "We provide the right solution to get your home comfortable and keep it that way.",
  },
];

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

export default function HowItWorks() {
  return (
    <section className="py-20 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <FadeUp className="text-center mb-14">
          <p className="text-amber-500 font-semibold text-sm tracking-[0.18em] uppercase mb-3">
            Simple Process
          </p>
          <h2 className="text-[#0b1d35] text-5xl sm:text-6xl font-black uppercase leading-none">
            <span className="sm:hidden">
              Getting Comfortable
              <br />
              Is Simple
            </span>

            <span className="hidden sm:inline">
              Getting Comfortable Is Simple
            </span>
          </h2>
        </FadeUp>
        <div className="grid sm:grid-cols-3 gap-6 relative">
          {/* Connector line desktop */}
          <div className="hidden sm:block absolute top-10 left-1/6 right-1/6 h-px bg-amber-200 z-0" />
          {steps.map(({ num, title, desc }, i) => (
            <FadeUp key={num} delay={i * 0.1} className="relative z-10">
              <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-amber-300 hover:shadow-lg transition-all text-center">
                <div className="w-16 h-16 rounded-full bg-amber-500 text-black font-black text-2xl flex items-center justify-center mx-auto mb-5">
                  {num}
                </div>
                <h3 className="text-[#0b1d35] text-2xl font-black uppercase mb-3">
                  {title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
        <FadeUp className="text-center mt-10">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-4 rounded text-lg transition-all hover:scale-105"
          >
            Get Started <ArrowRight size={18} />
          </a>
        </FadeUp>
      </div>
    </section>
  );
}
