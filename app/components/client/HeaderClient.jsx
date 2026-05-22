"use client";

import { Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { SITE_PHONE_DISPLAY, SITE_PHONE_TEL, SITE_WHATSAPP_URL } from "@/app/lib/contact";
import { useMobileMenu } from "./MobileMenuContext";

export default function HeaderClient({ navItems, children }) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useMobileMenu();
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(!isHomePage);
  const [openDropdown, setOpenDropdown] = useState(null);
  const timeoutRef = useRef(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!isHomePage) {
      setIsScrolled(true);
      return;
    }
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [pathname, setIsMobileMenuOpen]);

  const mobileMenu = isMobileMenuOpen && (
    <>
      <div
        className="md:hidden fixed inset-0 z-200 bg-black/30 backdrop-blur-sm"
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden
      />
      <div className="md:hidden fixed top-0 right-0 bottom-0 w-full max-w-sm z-201 bg-white shadow-2xl flex flex-col pt-16">
        <div className="shrink-0 px-6 pb-4 border-b flex justify-between items-center">
          <span className="font-bold text-gray-900">Taxis La Dracénie</span>
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Fermer le menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
          {navItems.map((item) => (
            <div key={item.href}>
              <Link
                href={item.href}
                className="block px-4 py-3 rounded-lg font-medium text-gray-800 hover:bg-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
              {item.subItems?.map((sub) => (
                <Link
                  key={sub.href}
                  href={sub.href}
                  className="block pl-8 pr-4 py-2 text-sm text-gray-600 hover:text-accent"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {sub.label}
                </Link>
              ))}
            </div>
          ))}
        </nav>
        <div className="shrink-0 p-4 border-t space-y-2 pb-[max(1rem,env(safe-area-inset-bottom))]">
          <a
            href={SITE_PHONE_TEL}
            className="flex items-center justify-center gap-2 w-full rounded-xl bg-accent text-accent-foreground py-3 font-bold hover:bg-brand-hover"
          >
            <Phone className="w-5 h-5" />
            {SITE_PHONE_DISPLAY}
          </a>
          <a
            href={SITE_WHATSAPP_URL}
            className="flex items-center justify-center w-full rounded-xl border-2 border-[#25D366] text-[#128C7E] py-3 font-semibold"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </>
  );

  return (
    <>
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className={isScrolled ? "[&_span]:text-foreground" : "[&_span]:text-white"}>
            {children}
          </div>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) =>
              item.subItems?.length ? (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => {
                    clearTimeout(timeoutRef.current);
                    setOpenDropdown(item.href);
                  }}
                  onMouseLeave={() => {
                    timeoutRef.current = setTimeout(() => setOpenDropdown(null), 200);
                  }}
                >
                  <Link
                    href={item.href}
                    className={`text-sm font-medium ${
                      isScrolled ? "text-foreground hover:text-accent" : "text-white/90 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                  {openDropdown === item.href && (
                    <div className="absolute top-full left-0 pt-2 w-56 z-50">
                      <div className="bg-background rounded-lg shadow-lg border py-2">
                        {item.subItems.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className="block px-4 py-2 text-sm hover:bg-accent/10 hover:text-accent"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium hover:text-accent ${
                    isScrolled ? "text-foreground" : "text-white/90 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <a
            href={SITE_PHONE_TEL}
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-4 lg:px-5 py-2 text-sm font-bold hover:bg-brand-hover"
            aria-label={`Appeler au ${SITE_PHONE_DISPLAY}`}
          >
            <Phone className="w-4 h-4 shrink-0" />
            <span className="font-mono tabular-nums">{SITE_PHONE_DISPLAY}</span>
          </a>

          <button
            type="button"
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? "text-foreground" : "text-white"} />
            ) : (
              <Menu className={isScrolled ? "text-foreground" : "text-white"} />
            )}
          </button>
        </div>
      </div>
      {mounted && createPortal(mobileMenu, document.body)}
    </>
  );
}
