"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  BookOpen,
  Briefcase,
  Car,
  ChevronDown,
  MapPin,
  Menu,
  Phone,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  SITE_PHONE_DISPLAY,
  SITE_PHONE_TEL,
} from "@/app/lib/contact";
import { useMobileMenu } from "./MobileMenuContext";

function hasSubmenu(item) {
  return (item.subGroups?.length ?? 0) > 0 || (item.subItems?.length ?? 0) > 0;
}

function NavSubmenuSections({ item, linkClassName, headingClassName, onNavigate }) {
  if (item.subGroups?.length) {
    return item.subGroups.map((group) => (
      <div key={group.title} className="py-1">
        <p className={headingClassName}>{group.title}</p>
        {group.items.map((sub) => (
          <Link
            key={sub.href}
            href={sub.href}
            className={linkClassName}
            onClick={onNavigate}
          >
            {sub.label}
          </Link>
        ))}
      </div>
    ));
  }

  return item.subItems?.map((sub) => (
    <Link key={sub.href} href={sub.href} className={linkClassName} onClick={onNavigate}>
      {sub.label}
    </Link>
  ));
}

function getIcon(label) {
  const iconMap = {
    Villes: MapPin,
    Services: Briefcase,
    Blog: BookOpen,
    Contact: Phone,
    Réservation: Car,
  };
  return iconMap[label] || Briefcase;
}

function allItemsLabel(label) {
  if (label === "Villes") return "Toutes les villes";
  if (label === "Services") return "Tous les services";
  return `Tous les ${label.toLowerCase()}`;
}

export default function HeaderClient({ navItems, children }) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useMobileMenu();
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(!isHomePage);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileSubmenuKey, setMobileSubmenuKey] = useState(null);
  const timeoutRef = useRef(null);

  const mobileNavItems = navItems.filter((item) => item.label !== "Réservation");

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
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setMobileSubmenuKey(null);
    setOpenDropdown(null);
  }, [pathname, setIsMobileMenuOpen]);

  const mobileMenu = (
    <AnimatePresence mode="wait">
      {isMobileMenuOpen && (
        <>
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 z-60 cursor-pointer bg-black/20 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="md:hidden fixed top-0 right-0 bottom-0 w-full max-w-md z-70 bg-linear-to-br from-white to-gray-50 border-l border-gray-200 shadow-2xl flex flex-col min-h-0 pt-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="shrink-0 px-6 pt-6 pb-4 border-b border-gray-200"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3 min-w-0">
                  <Image
                    src="/logo.svg"
                    alt="Taxis La Dracénie"
                    width={48}
                    height={48}
                    className="h-12 w-12 object-contain shrink-0 shadow-lg rounded-xl"
                  />
                  <div className="text-left min-w-0">
                    <h2 className="text-lg sm:text-xl font-bold text-gray-900 truncate">
                      TAXIS LA DRACÉNIE
                    </h2>
                    <p className="text-sm text-gray-600">Var · Dracénie</p>
                  </div>
                </div>
                <motion.button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors shrink-0"
                  aria-label="Fermer le menu"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-5 h-5 text-gray-600" />
                </motion.button>
              </div>
            </motion.div>

            <nav
              className="flex-1 min-h-0 overflow-y-auto overscroll-contain px-6 py-4 space-y-1"
              aria-label="Navigation principale"
            >
              <div className="space-y-2 pb-2">
                {mobileNavItems.map((item, index) => {
                  const Icon = getIcon(item.label);
                  const hasSubItems = item.subItems && item.subItems.length > 0;
                  const isSubmenuOpen = mobileSubmenuKey === item.href;

                  if (hasSubItems) {
                    return (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                      >
                        <div className="space-y-1">
                          <button
                            type="button"
                            onClick={() =>
                              setMobileSubmenuKey(isSubmenuOpen ? null : item.href)
                            }
                            className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-linear-to-r from-brand-subtle to-brand-subtle/60 hover:from-brand-subtle-border/30 hover:to-brand-subtle text-gray-800 hover:text-accent font-medium transition-all duration-300 group"
                          >
                            <div className="flex items-center space-x-4 min-w-0">
                              <Icon className="w-5 h-5 text-accent group-hover:scale-110 transition-transform shrink-0" />
                              <span className="text-left truncate">{item.label.toUpperCase()}</span>
                            </div>
                            <ChevronDown
                              className={`w-4 h-4 shrink-0 transition-transform ${
                                isSubmenuOpen ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                          <AnimatePresence>
                            {isSubmenuOpen && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden"
                              >
                                <div className="pl-8 space-y-1 mt-1">
                                  <Link
                                    href={item.href}
                                    className="block px-4 py-2 rounded-lg bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-accent transition-colors text-sm font-medium"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                  >
                                    {allItemsLabel(item.label)}
                                  </Link>
                                  {item.subItems.map((subItem) => (
                                    <Link
                                      key={subItem.href}
                                      href={subItem.href}
                                      className="block px-4 py-2 rounded-lg bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-accent transition-colors text-sm"
                                      onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                      {subItem.label}
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </motion.div>
                    );
                  }

                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link
                        href={item.href}
                        className="flex items-center space-x-4 px-4 py-3 rounded-xl bg-linear-to-r from-brand-subtle to-brand-subtle/60 hover:from-brand-subtle-border/30 hover:to-brand-subtle text-gray-800 hover:text-accent font-medium transition-all duration-300 group"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <Icon className="w-5 h-5 text-accent group-hover:scale-110 transition-transform shrink-0" />
                        <span>{item.label.toUpperCase()}</span>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.25, delay: 0.15 }}
              className="shrink-0 mt-auto px-6 pt-3 border-t border-gray-200 bg-linear-to-b from-white to-slate-50/90 pb-[max(1.5rem,env(safe-area-inset-bottom,0px))]"
            >
              <div className="flex flex-col gap-3">
                <motion.a
                  href={SITE_PHONE_TEL}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-linear-to-br from-brand-dark via-brand to-brand-hover px-5 py-4 text-white shadow-xl shadow-brand/25 ring-1 ring-white/20"
                >
                  <span
                    className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/15 blur-2xl transition group-hover:bg-white/25"
                    aria-hidden
                  />
                  <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/20 ring-1 ring-white/30">
                    <Phone className="h-6 w-6" strokeWidth={2.25} aria-hidden />
                  </span>
                  <span className="relative min-w-0 flex-1 text-left">
                    <span className="block text-xs font-semibold uppercase tracking-wider text-brand-subtle">
                      Appeler maintenant
                    </span>
                    <span className="font-mono text-lg font-bold tracking-wide tabular-nums">
                      {SITE_PHONE_DISPLAY}
                    </span>
                  </span>
                  <span
                    className="relative rounded-full bg-white/15 px-2.5 py-1 text-[0.65rem] font-bold uppercase text-brand-subtle ring-1 ring-white/25"
                    aria-hidden
                  >
                    24/7
                  </span>
                </motion.a>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href="/reservation"
                    className="flex items-center justify-center gap-2 w-full border-2 border-accent/30 bg-white py-3.5 px-6 rounded-xl font-bold text-base text-accent shadow-sm hover:bg-accent/5 hover:border-accent/50 transition-all duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Car className="w-5 h-5 shrink-0" />
                    Réserver en ligne
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between relative gap-4">
          <div className={isScrolled ? "[&_span]:text-foreground" : "[&_span]:text-white"}>
            {children}
          </div>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => {
              if (hasSubmenu(item)) {
                return (
                  <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => {
                      if (timeoutRef.current) {
                        clearTimeout(timeoutRef.current);
                        timeoutRef.current = null;
                      }
                      setOpenDropdown(item.href);
                    }}
                    onMouseLeave={() => {
                      timeoutRef.current = setTimeout(() => setOpenDropdown(null), 200);
                    }}
                  >
                    <Link
                      href={item.href}
                      className={`text-sm font-medium transition-colors hover:text-accent flex items-center gap-1 ${
                        isScrolled
                          ? "text-foreground hover:text-accent"
                          : "text-white/80 hover:text-white"
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          openDropdown === item.href ? "rotate-180" : ""
                        }`}
                      />
                    </Link>
                    {openDropdown === item.href && (
                      <div
                        className={`absolute top-full left-0 pt-2 z-50 ${item.menuWidth || "w-56"}`}
                        onMouseEnter={() => {
                          if (timeoutRef.current) {
                            clearTimeout(timeoutRef.current);
                            timeoutRef.current = null;
                          }
                        }}
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        <div className="bg-background rounded-lg shadow-lg border border-border py-2 max-h-[min(70vh,28rem)] overflow-y-auto">
                          <Link
                            href={item.href}
                            onClick={() => setOpenDropdown(null)}
                            className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-accent/10 hover:text-accent transition-colors"
                          >
                            {allItemsLabel(item.label)}
                          </Link>
                          <div className="border-t border-border my-1" />
                          <NavSubmenuSections
                            item={item}
                            headingClassName="px-4 pt-2 pb-1 text-[10px] font-bold uppercase tracking-wider text-brand-dark/65 first:pt-0"
                            linkClassName="block px-4 py-2 text-sm text-foreground/80 hover:bg-accent/10 hover:text-accent transition-colors"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-accent whitespace-nowrap ${
                    isScrolled
                      ? "text-foreground hover:text-accent"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex gap-3 items-center shrink-0">
            <a
              href={SITE_PHONE_TEL}
              className={`group hidden lg:inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold transition-all ${
                isScrolled
                  ? "bg-brand-subtle text-brand-darker ring-1 ring-brand-subtle-border hover:bg-brand-subtle-border/40"
                  : "bg-white/15 text-white ring-1 ring-white/30 backdrop-blur-sm hover:bg-white/25"
              }`}
              aria-label={`Appeler Taxis La Dracénie au ${SITE_PHONE_DISPLAY}`}
            >
              <Phone className="h-4 w-4 shrink-0" strokeWidth={2.25} aria-hidden />
              <span className="font-mono tabular-nums tracking-wide">{SITE_PHONE_DISPLAY}</span>
              <span
                className={`ml-1 rounded-full px-1.5 py-0.5 text-[0.6rem] font-bold uppercase leading-none ring-1 ${
                  isScrolled
                    ? "bg-brand-subtle-border/50 text-brand-darker ring-brand-subtle-border"
                    : "bg-white/20 text-white ring-white/30"
                }`}
              >
                24/7
              </span>
            </a>
            <Link
              href="/reservation"
              className="px-5 lg:px-6 py-2 bg-accent text-accent-foreground rounded-full font-medium hover:bg-brand-hover transition-colors"
            >
              Réserver
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex items-center gap-2 px-2.5 sm:px-3 py-2 rounded-lg hover:bg-white/10 transition-colors shrink-0"
            aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X
                className={`w-7 h-7 sm:w-8 sm:h-8 ${
                  isScrolled ? "text-foreground" : "text-white"
                }`}
                aria-hidden
              />
            ) : (
              <Menu
                className={`w-7 h-7 sm:w-8 sm:h-8 ${
                  isScrolled ? "text-foreground" : "text-white"
                }`}
                aria-hidden
              />
            )}
          </button>
        </div>
      </div>
      {mounted && createPortal(mobileMenu, document.body)}
    </>
  );
}
