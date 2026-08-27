"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useRef, useState } from "react";

const faqs = [
  {
    q: "How quickly can you schedule HVAC service?",
    a: "We strive to schedule service as quickly as possible, often offering same-day or next-day appointments. Emergency service is available for urgent situations.",
  },
  {
    q: "Do you provide emergency repairs?",
    a: "Yes. When your comfort can't wait, call us directly at (760) 375-3100 and we'll get a technician to you as fast as possible.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve Ridgecrest, Inyokern, Trona, Kernville, Lake Isabella, Weldon, Lone Pine, California City, Pearsonville, and the broader Indian Wells Valley region.",
  },
  {
    q: "How often should my HVAC system be serviced?",
    a: "We recommend twice-yearly maintenance — once in spring before cooling season and once in fall before heating season. Our maintenance plan makes this easy and affordable.",
  },
  {
    q: "Should I repair or replace my HVAC system?",
    a: "Generally, if repairs cost more than 50% of a new system's price, or your system is over 10–15 years old, replacement is the smarter investment. We'll give you an honest recommendation.",
  },
  {
    q: "Do you offer financing?",
    a: "Yes! We offer flexible financing options to help make system installations and replacements more manageable. Ask us about current offers when you call.",
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

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <FadeUp className="text-center mb-12">
          <p className="text-amber-500 font-semibold text-sm tracking-[0.18em] uppercase mb-3">
            FAQ
          </p>
          <h2 className="text-[#0b1d35] text-5xl sm:text-6xl font-black uppercase leading-none">
            Common Questions
          </h2>
        </FadeUp>
        <div className="space-y-3">
          {faqs.map(({ q, a }, i) => (
            <FadeUp key={q} delay={i * 0.05}>
              <div className="border border-gray-200 rounded-xl overflow-hidden hover:border-amber-300 transition-colors">
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span className="text-[#0b1d35] font-bold text-sm pr-4">
                    {q}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-amber-500 shrink-0 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-gray-500 text-sm leading-relaxed">
                        {a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
