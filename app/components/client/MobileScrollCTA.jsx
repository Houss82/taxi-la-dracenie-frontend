"use client";

import { MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  SITE_PHONE_DISPLAY,
  SITE_PHONE_TEL,
  SITE_WHATSAPP_URL,
} from "@/app/lib/contact";
import { useMobileMenu } from "./MobileMenuContext";

const HOME_SCROLL_THRESHOLD = 200;

export default function MobileScrollCTA() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const { isMobileMenuOpen } = useMobileMenu();
  const [isVisible, setIsVisible] = useState(!isHomePage);

  useEffect(() => {
    if (!isHomePage) {
      setIsVisible(true);
      return;
    }
    const handleScroll = () => setIsVisible(window.scrollY > HOME_SCROLL_THRESHOLD);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  if (isMobileMenuOpen || !isVisible) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 md:hidden pointer-events-none"
      role="complementary"
      aria-label="Appeler ou WhatsApp"
    >
      <div className="pointer-events-auto mx-auto max-w-lg px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <div className="mobile-cta-shell--animated rounded-2xl border border-white/40 bg-white/90 backdrop-blur-xl p-3 shadow-xl">
          <p className="text-center text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wide">
            Taxis La Dracénie · réponse rapide
          </p>
          <div className="flex gap-2">
            <a
              href={SITE_PHONE_TEL}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-accent text-accent-foreground py-3.5 font-bold text-sm shadow-md hover:bg-brand-hover"
            >
              <Phone className="w-5 h-5" aria-hidden />
              Appeler
            </a>
            <a
              href={SITE_WHATSAPP_URL}
              className="flex items-center justify-center rounded-xl bg-[#25D366] text-white px-4 py-3.5 shadow-md"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-6 h-6" aria-hidden />
            </a>
            <Link
              href="/contact"
              className="flex items-center justify-center rounded-xl border border-slate-200 bg-white px-3 py-3.5 text-xs font-bold text-slate-700"
            >
              Contact
            </Link>
          </div>
          <p className="text-center text-[0.65rem] text-slate-500 mt-2 tabular-nums">
            {SITE_PHONE_DISPLAY}
          </p>
        </div>
      </div>
    </div>
  );
}
