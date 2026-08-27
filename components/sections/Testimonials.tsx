"use client";

import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";
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

const testimonials = [
  {
    name: "Sandra M.",
    location: "Ridgecrest, CA",
    service: "AC Repair",
    rating: 5,
    text: "Our AC went out on the hottest day of the year and they had a technician out within hours. Fast, professional, and fair priced. Couldn't be more impressed.",
  },
  {
    name: "James R.",
    location: "Inyokern, CA",
    service: "System Installation",
    rating: 5,
    text: "Had a full system replaced and they were thorough and clean. Explained every step and left the place spotless. Best HVAC company in the valley.",
  },
  {
    name: "Patricia L.",
    location: "Lake Isabella, CA",
    service: "Maintenance Plan",
    rating: 5,
    text: "Joined the savings club and it's been worth every penny. Two tune-ups a year and my system runs better than ever. Highly recommend these guys.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <FadeUp className="text-center mb-14">
          <p className="text-amber-500 font-semibold text-sm tracking-[0.18em] uppercase mb-3">
            Reviews
          </p>
          <h2 className="text-[#0b1d35] text-5xl sm:text-6xl font-black uppercase leading-none mb-4">
            Trusted by Homeowners Across Indian Wells Valley
          </h2>
          <p className="text-gray-500 text-lg">
            Join hundreds of homeowners
            <br className="sm:hidden" /> who trust us with their comfort.
          </p>
        </FadeUp>
        <div className="grid sm:grid-cols-3 gap-6">
          {testimonials.map(({ name, location, service, rating, text }, i) => (
            <FadeUp key={name} delay={i * 0.1}>
              <div className="bg-[#f8fafc] border border-gray-100 rounded-2xl p-7 hover:shadow-lg hover:border-amber-200 transition-all h-full flex flex-col">
                <div className="flex mb-3">
                  {Array.from({ length: rating }).map((_, j) => (
                    <Star
                      key={j}
                      size={16}
                      className="text-amber-400 fill-amber-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed flex-1 mb-6">
                  "{text}"
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-[#0b1d35] font-bold text-sm">{name}</p>
                  <p className="text-gray-400 text-xs">
                    {location} · {service}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
