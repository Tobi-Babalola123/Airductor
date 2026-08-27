"use client";
import { Phone } from "lucide-react";

const PHONE = "(760) 375-3100";
const PHONE_HREF = "tel:7603753100";
const EMAIL = "highdesertairductor@gmail.com";
const COMPANY = "High Desert Air Ductor";

export default function AnnouncementBar() {
  return (
    <div className="bg-[#0b1d35] text-white text-xs sm:text-sm py-2 px-4 text-center flex items-center justify-center gap-3 flex-wrap">
      <Phone size={14} className="text-amber-400 shrink-0" />
      <span className="text-gray-300">
        Need HVAC Help? Call Us Today for Fast, Reliable Service.
      </span>
      <a
        href={PHONE_HREF}
        className="font-bold text-amber-400 hover:text-amber-300 transition-colors whitespace-nowrap"
      >
        {PHONE}
      </a>
      <span className="hidden sm:inline text-gray-400">·</span>
      <span className="hidden sm:inline text-gray-300">
        Emergency Service Available
      </span>
    </div>
  );
}
