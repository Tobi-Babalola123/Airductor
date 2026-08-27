"use client";

import { motion, useInView } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
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

export default function Financing() {
  return (
    <section id="financing" className="py-16 bg-[#132845]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
        <FadeUp>
          <p className="text-amber-400 font-semibold text-sm tracking-[0.18em] uppercase mb-3">
            Financing
          </p>
          <h2 className="text-white text-5xl sm:text-6xl font-black uppercase leading-none mb-5">
            Upgrade Your Comfort Without Delaying Your Project
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Flexible financing options can help make your new HVAC system more
            affordable — so you don't have to wait to get comfortable.
          </p>
        </FadeUp>
        <FadeUp delay={0.15}>
          <div className="space-y-4">
            {[
              "Flexible monthly payment options",
              "Quick and easy application process",
              "Available for new installations and replacements",
              "Get approved and scheduled same day",
            ].map((b) => (
              <div
                key={b}
                className="flex items-center gap-3 bg-[#0b1d35] rounded-xl px-5 py-4"
              >
                <CheckCircle2 size={18} className="text-amber-400 shrink-0" />
                <p className="text-gray-300 font-medium">{b}</p>
              </div>
            ))}
            <a
              href="/FinancingOptions"
              className="w-full mt-4 bg-amber-500 hover:bg-amber-400 text-black font-bold py-4 rounded flex items-center justify-center gap-2 transition-all hover:scale-105"
            >
              Explore Financing Options <ArrowRight size={16} />
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
