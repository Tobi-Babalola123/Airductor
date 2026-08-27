"use client";

import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  Phone,
  Zap,
} from "lucide-react";
import { useRef, useState } from "react";

const PHONE = "(760) 375-3100";
const PHONE_HREF = "tel:7603753100";
const EMAIL = "highdesertairductor@gmail.com";
const COMPANY = "High Desert Air Ductor";

/* ─── Fade-up animation variant ─────────────────────────────── */
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
export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    contact: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-14">
        {/* Left */}
        <FadeUp>
          <p className="text-amber-500 font-semibold text-sm tracking-[0.18em] uppercase mb-3">
            Get in Touch
          </p>
          <h2 className="text-[#0b1d35] text-5xl sm:text-6xl font-black uppercase leading-none mb-5">
            Request HVAC Service
          </h2>
          <p className="text-gray-500 text-lg mb-10 leading-relaxed">
            Tell us what you need help with, and our team will get back to you
            as soon as possible.
          </p>
          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-[#0b1d35] flex items-center justify-center shrink-0">
                <Phone size={18} className="text-amber-400" />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide">
                  Phone
                </p>
                <a
                  href={PHONE_HREF}
                  className="text-[#0b1d35] font-bold hover:text-amber-600 transition-colors"
                >
                  {PHONE}
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-[#0b1d35] flex items-center justify-center shrink-0">
                <Mail size={18} className="text-amber-400" />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide">
                  Email
                </p>
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-[#0b1d35] font-bold hover:text-amber-600 transition-colors break-all"
                >
                  {EMAIL}
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-[#0b1d35] flex items-center justify-center shrink-0">
                <Clock size={18} className="text-amber-400" />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide">
                  Business Hours
                </p>
                <p className="text-[#0b1d35] font-bold">
                  Mon–Fri 8am–5pm · Weekends by appt
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-[#0b1d35] flex items-center justify-center shrink-0">
                <MapPin size={18} className="text-amber-400" />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide">
                  Service Area
                </p>
                <p className="text-[#0b1d35] font-bold">
                  Indian Wells Valley & Surrounding Areas
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-red-50 border border-red-200 rounded-xl p-4">
              <Zap size={18} className="text-red-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-red-700 font-bold text-sm">
                  Emergency Service
                </p>
                <p className="text-red-600 text-xs mt-0.5">
                  For urgent HVAC issues, call us directly at {PHONE}
                </p>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* Right – Form */}
        <FadeUp delay={0.15}>
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            {submitted ? (
              <div className="text-center py-12">
                <CheckCircle2
                  size={52}
                  className="text-amber-500 mx-auto mb-4"
                />
                <h3 className="text-[#0b1d35] text-3xl font-black uppercase mb-2">
                  Request Received!
                </h3>
                <p className="text-gray-500 text-sm">
                  We'll get back to you as soon as possible. For urgent needs,
                  call {PHONE}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-gray-500 uppercase tracking-wide font-semibold block mb-1.5">
                      Full Name *
                    </label>
                    <input
                      required
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-500 uppercase tracking-wide font-semibold block mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      required
                      type="tel"
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                      placeholder="(760) 000-0000"
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs text-gray-500 uppercase tracking-wide font-semibold block mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-500 uppercase tracking-wide font-semibold block mb-1.5">
                    Service Needed
                  </label>
                  <select
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-amber-400 transition-colors bg-white"
                    value={form.service}
                    onChange={(e) =>
                      setForm({ ...form, service: e.target.value })
                    }
                  >
                    <option value="">Select a service...</option>
                    <option>AC Repair</option>
                    <option>Heating Repair</option>
                    <option>HVAC Installation</option>
                    <option>HVAC Replacement</option>
                    <option>Preventative Maintenance</option>
                    <option>Indoor Air Quality</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs text-gray-500 uppercase tracking-wide font-semibold block mb-1.5">
                    Preferred Contact Method
                  </label>
                  <select
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-amber-400 transition-colors bg-white"
                    value={form.contact}
                    onChange={(e) =>
                      setForm({ ...form, contact: e.target.value })
                    }
                  >
                    <option value="">Select...</option>
                    <option>Phone Call</option>
                    <option>Text Message</option>
                    <option>Email</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs text-gray-500 uppercase tracking-wide font-semibold block mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-amber-400 transition-colors resize-none"
                    placeholder="Describe your issue or question..."
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-400 text-black font-bold py-4 rounded text-base transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2"
                >
                  Request My Service <ArrowRight size={18} />
                </button>
                <p className="text-center text-gray-400 text-xs">
                  We'll get back to you as soon as possible.
                </p>
              </form>
            )}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
