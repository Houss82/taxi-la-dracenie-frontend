import {
  CalendarCheck,
  ChevronRight,
  Clock,
  HeartPulse,
  Luggage,
  MapPin,
  Phone,
  Plane,
  ShieldCheck,
  Sunrise,
  Train,
  UserCheck,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import HeroCTAs, { PhoneBanner } from "./HeroCTAs";
import PhoneLinkedText from "./PhoneLinkedText";
import LinkedCopy from "./LinkedCopy";
import SEOBreadcrumb from "./SEOBreadcrumb";
import JsonLd from "./seo/JsonLd";
import Button from "./ui/Button";
import { SITE_PHONE_DISPLAY, SITE_PHONE_TEL } from "@/app/lib/contact";
import {
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  buildTaxiServiceJsonLd,
} from "@/app/lib/seo";
import { SITE_NAME, SITE_URL } from "@/app/lib/site";
import { getServiceHeroImage } from "@/app/lib/heroImages";
import ParallaxImageBanner from "./client/ParallaxImageBanner";

const whyChooseIcons = [Clock, Train, HeartPulse, Plane, Phone, UserCheck];

const sectionIcons = [
  MapPin,
  Clock,
  Sunrise,
  Plane,
  Phone,
  Luggage,
  ShieldCheck,
];

function matchLinkType(item) {
  const text = `${item.title || item.label || ""} ${item.href || ""}`.toLowerCase();
  if (text.includes("aeroport") || text.includes("nice") || text.includes("marseille"))
    return "plane";
  if (text.includes("gare") || text.includes("les-arcs")) return "train";
  if (
    text.includes("conventionne") ||
    text.includes("medical") ||
    text.includes("cpam") ||
    text.includes("chd")
  )
    return "medical";
  return "local";
}

const typeVisuals = {
  plane: {
    Icon: Plane,
    iconWrap: "bg-sky-100 text-sky-700",
    barClass:
      "absolute inset-x-0 top-0 h-1 bg-linear-to-r from-sky-500 via-sky-300 to-accent opacity-90",
    chip: "Aéroport",
  },
  train: {
    Icon: Train,
    iconWrap: "bg-accent/10 text-accent",
    barClass:
      "absolute inset-x-0 top-0 h-1 bg-linear-to-r from-accent via-brand-light to-accent opacity-90",
    chip: "Gare",
  },
  medical: {
    Icon: HeartPulse,
    iconWrap: "bg-warm-subtle text-warm-dark",
    barClass:
      "absolute inset-x-0 top-0 h-1 bg-linear-to-r from-warm via-brand-light to-accent opacity-90",
    chip: "Médical",
  },
  local: {
    Icon: MapPin,
    iconWrap: "bg-brand-subtle text-brand-darker",
    barClass:
      "absolute inset-x-0 top-0 h-1 bg-linear-to-r from-brand-light via-accent/70 to-warm opacity-90",
    chip: "Ville",
  },
};

export default function ServicePageContent({ service }) {
  const path = `/${service.slug}`;
  const pageTitle =
    service.type === "combo" && service.cityName
      ? `${service.h1} — ${service.cityName}`
      : service.h1;

  const breadcrumbs = [
    { name: "Accueil", path: "/" },
    { name: pageTitle, path },
  ];

  const jsonLd = buildTaxiServiceJsonLd({
    name: `${SITE_NAME} — ${service.h1}`,
    url: `${SITE_URL}${path}`,
    areaServed: ["Dracénie", "Var", service.cityName].filter(Boolean),
    description: service.description,
  });

  return (
    <>
      <JsonLd id={`jsonld-service-${service.slug}`} data={jsonLd} />
      {service.faq?.length > 0 && (
        <JsonLd id={`faq-service-${service.slug}`} data={buildFaqJsonLd(service.faq)} />
      )}
      <JsonLd
        id={`breadcrumb-service-${service.slug}`}
        data={buildBreadcrumbJsonLd(breadcrumbs)}
      />

      <SEOBreadcrumb items={breadcrumbs} />

      <section className="hero-section relative overflow-hidden bg-zinc-900 pt-24 pb-14 md:pt-28 md:pb-20">
        <div className="absolute inset-0">
          <Image
            src={getServiceHeroImage(service.slug)}
            alt={`${service.h1} — Taxis La Dracénie`}
            fill
            priority
            sizes="100vw"
            quality={92}
            className="hero-bg-image"
          />
          <div className="hero-bg-overlay absolute inset-0" aria-hidden />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-white">
          <div className="hero-text-panel">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm mb-6">
              <ShieldCheck className="w-4 h-4 text-warm" aria-hidden />
              <span>Taxis La Dracénie · Service premium</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-balance leading-tight">
              {service.h1}
            </h1>
            <p className="mt-5 text-lg text-white/90 leading-relaxed max-w-2xl">
              <LinkedCopy>{service.intro}</LinkedCopy>
            </p>
            <p className="mt-4 text-base text-white font-semibold">
              Ligne directe :{" "}
              <a
                href={SITE_PHONE_TEL}
                className="font-mono text-lg underline decoration-white/40 underline-offset-4 hover:decoration-white tabular-nums"
              >
                {SITE_PHONE_DISPLAY}
              </a>
            </p>
            <div className="mt-8">
              <HeroCTAs secondary="reservation" />
            </div>
          </div>
        </div>
      </section>

      {service.sections?.length > 0 && (
        <section className="text-left-headings py-16 md:py-20 bg-linear-to-b from-slate-50 via-white to-brand-subtle/30 border-b border-gray-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-subtle-border bg-brand-subtle px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-darker mb-4">
                <Plane className="w-3.5 h-3.5 text-accent" aria-hidden />
                Organisation du trajet
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Tout ce qu&apos;il faut savoir avant de réserver
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {service.sections.map((section, index) => {
                const Icon = sectionIcons[index % sectionIcons.length];
                return (
                  <article
                    key={section.title}
                    className={`relative overflow-hidden rounded-2xl border border-gray-200/80 bg-white p-6 sm:p-7 shadow-sm hover:shadow-lg hover:border-accent/30 transition-all duration-300 ${
                      service.sections.length % 2 === 1 &&
                      index === service.sections.length - 1
                        ? "md:col-span-2"
                        : ""
                    }`}
                  >
                    <div
                      className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-accent via-brand-light to-warm opacity-90"
                      aria-hidden
                    />
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                        <Icon className="w-5 h-5" aria-hidden />
                      </div>
                      <div className="min-w-0">
                        <h3 className="card-heading-left text-lg font-bold text-gray-900 mb-2">
                          {section.title}
                        </h3>
                        <p className="text-[0.9375rem] text-gray-600 leading-relaxed">
                          <LinkedCopy>{section.body}</LinkedCopy>
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {service.realTransfersText && (
        <section className="text-left-headings py-14 bg-white border-b border-gray-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <article className="relative overflow-hidden rounded-2xl border border-brand-subtle-border bg-linear-to-br from-brand-subtle/80 via-white to-warm-subtle/40 p-6 sm:p-8 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent text-white">
                  <MapPin className="w-6 h-6" aria-hidden />
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                    {service.realTransfersTitle || "Trajets et transferts fréquents"}
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    <LinkedCopy>{service.realTransfersText}</LinkedCopy>
                  </p>
                </div>
              </div>
            </article>
          </div>
        </section>
      )}

      {service.frequentRoutes?.length > 0 && (
        <section className="text-left-headings py-16 bg-gray-50 border-b border-gray-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-subtle-border bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-darker mb-4">
                <MapPin className="w-3.5 h-3.5 text-accent" aria-hidden />
                Trajets demandés
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Trajets fréquents
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              {service.frequentRoutes.map((route) => {
                const visual = typeVisuals[matchLinkType(route)];
                const Icon = visual.Icon;
                return (
                  <Link
                    key={route.title}
                    href={route.href || path}
                    className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200/80 bg-white p-5 sm:p-6 shadow-sm hover:shadow-lg hover:border-accent/30 transition-all duration-300"
                  >
                    <div className={visual.barClass} aria-hidden />
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${visual.iconWrap}`}
                      >
                        <Icon className="w-5 h-5" aria-hidden />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="card-heading-left font-bold text-gray-900 group-hover:text-accent transition-colors">
                          {route.title}
                        </h3>
                        <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                          {route.desc}
                        </p>
                        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                          Voir la page
                          <ChevronRight
                            className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                            aria-hidden
                          />
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {service.whyChooseUs?.length > 0 && (
        <section className="text-left-headings py-16 bg-white border-b border-gray-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              {service.whyChooseTitle || "Pourquoi nous faire confiance ?"}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {service.whyChooseUs.map((item, index) => {
                const Icon = whyChooseIcons[index % whyChooseIcons.length];
                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-gray-200 bg-gray-50/60 p-5 hover:border-accent/35 hover:shadow-md transition-all"
                  >
                    <Icon className="w-8 h-8 text-accent mb-3" aria-hidden />
                    <h3 className="card-heading-left font-bold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <ParallaxImageBanner
        src={getServiceHeroImage(service.slug)}
        alt={`${service.h1} — Taxis La Dracénie`}
      />

      {service.serviceAreas?.length > 0 && (
        <section className="py-12 bg-brand-subtle/50 border-b border-brand-subtle-border">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Communes et zones desservies
            </h2>
            <ul className="flex flex-wrap justify-center gap-2">
              {service.serviceAreas.map((zone) => (
                <li
                  key={zone}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white border border-brand-subtle-border px-3.5 py-1.5 text-sm text-brand-darker shadow-sm"
                >
                  <MapPin className="w-3.5 h-3.5 text-accent shrink-0" aria-hidden />
                  {zone}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {service.relatedCities?.length > 0 && (
        <section className="text-left-headings py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-subtle-border bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-darker mb-4">
                <MapPin className="w-3.5 h-3.5 text-accent" aria-hidden />
                Maillage local
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Pages utiles en Dracénie
              </h2>
              <p className="mt-3 text-gray-600">
                Landings aéroport et pages villes — pour réserver depuis votre commune.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {service.relatedCities.map((link) => {
                const visual = typeVisuals[matchLinkType(link)];
                const Icon = visual.Icon;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group relative flex items-center gap-3 overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 py-4 shadow-sm hover:shadow-md hover:border-accent/40 hover:-translate-y-0.5 transition-all"
                  >
                    <div className={visual.barClass} aria-hidden />
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${visual.iconWrap}`}
                    >
                      <Icon className="w-5 h-5" aria-hidden />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="block text-[0.65rem] font-semibold uppercase tracking-wider text-gray-500">
                        {visual.chip}
                      </span>
                      <span className="block font-semibold text-gray-900 group-hover:text-accent transition-colors leading-snug">
                        {link.label}
                      </span>
                    </div>
                    <ChevronRight
                      className="w-4 h-4 text-accent shrink-0 transition-transform group-hover:translate-x-0.5"
                      aria-hidden
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {service.faq?.length > 0 && (
        <section className="py-16 bg-white" aria-labelledby={`faq-${service.slug}`}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2 id={`faq-${service.slug}`} className="text-2xl font-bold mb-8">
              Questions fréquentes
            </h2>
            <div className="space-y-3">
              {service.faq.map((item) => (
                <details
                  key={item.q}
                  className="group rounded-2xl border border-gray-200 bg-gray-50 open:bg-white open:shadow-sm"
                >
                  <summary className="cursor-pointer list-none font-semibold text-gray-900 px-5 py-4 flex items-center justify-between gap-2">
                    {item.q}
                    <ChevronRight className="w-5 h-5 shrink-0 transition-transform group-open:rotate-90 text-accent" />
                  </summary>
                  <div className="px-5 pb-4 text-gray-700 leading-relaxed">
                    <PhoneLinkedText>{item.a}</PhoneLinkedText>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="cta-section-brand py-16 text-accent-foreground">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            Une question ? Appelez-nous.
          </h2>
          <p className="mt-3 text-accent-foreground/90">
            Devis clair au téléphone — réservation rapide 24h/24.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Button
              href={SITE_PHONE_TEL}
              variant="soft"
              size="xl"
              className="font-bold gap-2"
            >
              <Phone className="w-5 h-5" aria-hidden />
              {SITE_PHONE_DISPLAY}
            </Button>
            <Button href="/reservation" variant="soft" size="xl" className="gap-2 font-bold">
              <CalendarCheck className="w-5 h-5" aria-hidden />
              Réserver en ligne
            </Button>
          </div>
          <div className="mt-8 max-w-sm mx-auto md:hidden">
            <PhoneBanner label="Appel direct" />
          </div>
        </div>
      </section>
    </>
  );
}
