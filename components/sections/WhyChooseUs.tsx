"use client";

import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Award,
  ShieldCheck,
  ThumbsUp,
  Users,
  Zap,
} from "lucide-react";
import { useRef } from "react";

const benefits = [
  {
    icon: Users,
    title: "Experienced Technicians",
    desc: "Skilled professionals who diagnose the problem correctly the first time.",
  },
  {
    icon: ThumbsUp,
    title: "Honest Recommendations",
    desc: "Clear explanations and solutions based on your needs — not upsells.",
  },
  {
    icon: Zap,
    title: "Fast Response",
    desc: "Quick and dependable service when comfort can't wait another day.",
  },
  {
    icon: Award,
    title: "Quality Equipment",
    desc: "Reliable HVAC systems and trusted products from top manufacturers.",
  },
  {
    icon: ShieldCheck,
    title: "Satisfaction Guaranteed",
    desc: "We stand behind the quality of every repair, installation, and tune-up.",
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

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-start">
        {/* Image */}
        <FadeUp>
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="/images/whyus.jpg"
              alt="HVAC technician working on equipment"
              className="w-full h-[650px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060f1c]/60 to-transparent" />
            <div className="absolute bottom-6 left-6 bg-amber-500 text-black font-black px-5 py-3 rounded-xl text-2xl">
              Veteran-Owned &amp; Operated
            </div>
          </div>
        </FadeUp>

        {/* Content */}
        <div>
          <FadeUp>
            <p className="text-amber-500 font-semibold text-sm tracking-[0.18em] uppercase mb-3">
              Why Us
            </p>
            <h2 className="text-[#0b1d35] text-5xl sm:text-6xl font-black uppercase leading-none mb-8">
              Why Homeowners Trust High Desert Air Ductor
            </h2>
          </FadeUp>
          <div className="space-y-5">
            {benefits.map(({ icon: Icon, title, desc }, i) => (
              <FadeUp key={title} delay={i * 0.08}>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#0b1d35] flex items-center justify-center shrink-0 mt-0.5">
                    <Icon size={17} className="text-amber-400" />
                  </div>
                  <div>
                    <h4 className="text-[#0b1d35] font-bold text-base mb-1">
                      {title}
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
          <FadeUp delay={0.4}>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold px-6 py-3.5 rounded transition-all hover:scale-105"
            >
              Request Service <ArrowRight size={16} />
            </a>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
