"use client";

import { motion, useInView } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useRef } from "react";

const replacementSigns = [
  "Rising energy bills",
  "Frequent repairs",
  "Uneven temperatures throughout your home",
  "System is 10–15+ years old",
  "Strange noises or unusual odors",
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

export default function ReplacementSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-14 items-center">
        <FadeUp>
          <p className="text-amber-500 font-semibold text-sm tracking-[0.18em] uppercase mb-3">
            System Replacement
          </p>
          <h2 className="text-[#0b1d35] text-5xl sm:text-6xl font-black uppercase leading-none mb-6">
            Is It Time to Replace Your HVAC System?
          </h2>
          <p className="text-gray-500 text-lg mb-6 leading-relaxed">
            Older systems cost more to run and repair. If you're experiencing
            these warning signs, a new system could save you money long-term.
          </p>
          <ul className="space-y-3 mb-8">
            {replacementSigns.map((s) => (
              <li key={s} className="flex items-center gap-3 text-gray-700">
                <CheckCircle2 size={18} className="text-amber-500 shrink-0" />
                {s}
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#0b1d35] hover:bg-[#132845] text-white font-bold px-6 py-4 rounded transition-all hover:scale-105"
          >
            Request a Free Estimate <ArrowRight size={16} />
          </a>
        </FadeUp>
        <FadeUp delay={0.2}>
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1698479603408-1a66a6d9e80f?w=700&h=540&fit=crop&auto=format"
              alt="Modern HVAC outdoor units"
              className="w-full h-[480px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060f1c]/50 to-transparent" />
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
