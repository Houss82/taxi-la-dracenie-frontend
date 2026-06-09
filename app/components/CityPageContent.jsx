import {
  ChevronRight,
  Clock,
  HeartPulse,
  MapPin,
  Phone,
  Plane,
  ShieldCheck,
  Train,
  UserCheck,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import HeroCTAs, { PhoneBanner } from "./HeroCTAs";
import PhoneLinkedText from "./PhoneLinkedText";
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
import { getCityHeroImage } from "@/app/lib/heroImages";
import ParallaxImageBanner from "./client/ParallaxImageBanner";

const whyChooseIcons = [Clock, Train, HeartPulse, Plane, Phone, UserCheck];
const popularNeedIcons = [Train, Plane, HeartPulse, ShieldCheck, MapPin];

function matchRouteType(route) {
  const text = `${route.title} ${route.href}`.toLowerCase();
  if (text.includes("gare") || text.includes("les-arcs")) return "train";
  if (text.includes("aeroport") || text.includes("nice") || text.includes("marseille"))
    return "plane";
  if (
    text.includes("conventionne") ||
    text.includes("medical") ||
    text.includes("chd") ||
    text.includes("transport-medical")
  )
    return "medical";
  return "local";
}

function matchServiceType(service) {
  const text = `${service.label} ${service.href}`.toLowerCase();
  if (
    text.includes("conventionne") ||
    text.includes("cpam") ||
    text.includes("medical") ||
    text.includes("transport-medical")
  )
    return "medical";
  if (text.includes("aeroport") || text.includes("nice") || text.includes("marseille"))
    return "plane";
  if (text.includes("gare")) return "train";
  return "local";
}

const routeVisuals = {
  train: {
    Icon: Train,
    iconWrap: "bg-accent/10 text-accent",
    barClass:
      "absolute inset-x-0 top-0 h-1 bg-linear-to-r from-accent via-brand-light to-accent opacity-90",
  },
  plane: {
    Icon: Plane,
    iconWrap: "bg-sky-100 text-sky-700",
    barClass:
      "absolute inset-x-0 top-0 h-1 bg-linear-to-r from-sky-500 via-sky-300 to-accent opacity-90",
  },
  medical: {
    Icon: HeartPulse,
    iconWrap: "bg-warm-subtle text-warm-dark",
    barClass:
      "absolute inset-x-0 top-0 h-1 bg-linear-to-r from-warm via-brand-light to-accent opacity-90",
  },
  local: {
    Icon: MapPin,
    iconWrap: "bg-brand-subtle text-brand-darker",
    barClass:
      "absolute inset-x-0 top-0 h-1 bg-linear-to-r from-brand-light via-accent/70 to-warm opacity-90",
  },
};

const serviceVisuals = {
  medical: {
    Icon: ShieldCheck,
    cardClass:
      "group flex h-full flex-col items-center text-center rounded-2xl border border-brand-subtle-border bg-linear-to-br from-brand-subtle via-white to-brand-subtle/40 p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-accent/45 transition-all duration-200",
    iconClass: "flex h-12 w-12 items-center justify-center rounded-xl shadow-sm bg-accent text-white",
  },
  plane: {
    Icon: Plane,
    cardClass:
      "group flex h-full flex-col items-center text-center rounded-2xl border border-sky-100 bg-linear-to-br from-sky-50 via-white to-brand-subtle/30 p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-sky-300 transition-all duration-200",
    iconClass:
      "flex h-12 w-12 items-center justify-center rounded-xl shadow-sm bg-sky-600 text-white",
  },
  train: {
    Icon: Train,
    cardClass:
      "group flex h-full flex-col items-center text-center rounded-2xl border border-brand-subtle-border bg-linear-to-br from-brand-subtle/90 via-white to-warm-subtle/40 p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-accent/45 transition-all duration-200",
    iconClass: "flex h-12 w-12 items-center justify-center rounded-xl shadow-sm bg-accent text-white",
  },
  local: {
    Icon: MapPin,
    cardClass:
      "group flex h-full flex-col items-center text-center rounded-2xl border border-warm-border bg-linear-to-br from-warm-subtle via-white to-brand-subtle/30 p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-warm-dark/40 transition-all duration-200",
    iconClass:
      "flex h-12 w-12 items-center justify-center rounded-xl shadow-sm bg-warm-dark text-white",
  },
};

function getRouteVisual(route) {
  return routeVisuals[matchRouteType(route)];
}

function getServiceVisual(service) {
  return serviceVisuals[matchServiceType(service)];
}

export default function CityPageContent({ city }) {
  const path = `/${city.slug}`;
  const breadcrumbs = [
    { name: "Accueil", path: "/" },
    { name: `Taxi ${city.name}`, path },
  ];

  const jsonLd = buildTaxiServiceJsonLd({
    name: `${SITE_NAME} — Taxi ${city.name}`,
    url: `${SITE_URL}${path}`,
    areaServed: [city.name, "Dracénie", "Var"],
    description: city.description,
  });

  return (
    <>
      <JsonLd id={`jsonld-city-${city.slug}`} data={jsonLd} />
      {city.faq?.length > 0 && (
        <JsonLd id={`faq-city-${city.slug}`} data={buildFaqJsonLd(city.faq)} />
      )}
      <JsonLd
        id={`breadcrumb-city-${city.slug}`}
        data={buildBreadcrumbJsonLd(breadcrumbs)}
      />

      <SEOBreadcrumb items={breadcrumbs} />

      <section className="hero-section relative overflow-hidden bg-zinc-900 pt-24 pb-14 md:pt-28 md:pb-20">
        <div className="absolute inset-0">
          <Image
            src={getCityHeroImage(city.slug)}
            alt={`Taxi ${city.name} — Taxis La Dracénie`}
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
          <p className="text-sm font-semibold uppercase tracking-wider text-warm/95 mb-3">
            Taxis La Dracénie · {city.name}
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-balance leading-tight">
            {city.h1}
          </h1>
          <p className="mt-5 text-lg text-white/90 leading-relaxed max-w-2xl">
            {city.intro}
          </p>
          <p className="mt-4 text-base text-white font-semibold">
            Appelez le{" "}
            <a
              href={SITE_PHONE_TEL}
              className="font-mono text-lg underline decoration-white/40 underline-offset-4 hover:decoration-white tabular-nums"
            >
              {SITE_PHONE_DISPLAY}
            </a>
          </p>
          <div className="mt-8 max-w-md">
            <HeroCTAs />
          </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Taxi {city.name} et environs
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto">{city.localContext}</p>
          {city.landmarks?.length > 0 && (
            <ul className="mt-6 flex flex-wrap gap-2 justify-center">
              {city.landmarks.map((landmark) => (
                <li
                  key={landmark}
                  className="inline-flex items-center gap-1.5 rounded-full bg-brand-subtle border border-brand-subtle-border px-3 py-1.5 text-sm text-brand-darker"
                >
                  <MapPin className="w-3.5 h-3.5 shrink-0" aria-hidden />
                  {landmark}
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {(city.realTransfersText || city.longSeoText || city.popularNeeds?.length > 0) && (
        <section className="py-16 md:py-20 bg-linear-to-b from-slate-50 via-white to-brand-subtle/40 border-b border-gray-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12 md:mb-14">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-subtle-border bg-brand-subtle px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-darker mb-4">
                <MapPin className="w-3.5 h-3.5 text-accent" aria-hidden />
                Taxi {city.name}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-balance">
                Comment nous vous accompagnons au quotidien
              </h2>
              <p className="mt-3 text-gray-600 leading-relaxed">
                Trajets concrets, habitudes locales et demandes fréquentes — tout ce
                que nos clients sollicitent depuis {city.name} et ses environs.
              </p>
            </div>

            {(city.realTransfersText || city.longSeoText) && (
              <div
                className={`grid gap-6 mb-12 items-stretch ${
                  city.realTransfersText && city.longSeoText
                    ? "md:grid-cols-2"
                    : "max-w-3xl mx-auto"
                }`}
              >
                {city.realTransfersText && (
                  <article className="group relative flex h-full overflow-hidden rounded-2xl border border-gray-200/80 bg-white p-6 sm:p-8 shadow-sm hover:shadow-lg hover:border-accent/30 transition-all duration-300">
                    <div
                      className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-accent via-brand-light to-warm opacity-90"
                      aria-hidden
                    />
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                        <Train className="w-6 h-6" aria-hidden />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-lg font-bold text-gray-900 mb-3">
                          Trajets réels depuis {city.name}
                        </h3>
                        <p className="text-[0.9375rem] text-gray-600 leading-relaxed">
                          {city.realTransfersText}
                        </p>
                      </div>
                    </div>
                  </article>
                )}

                {city.longSeoText && (
                  <article className="group relative flex h-full overflow-hidden rounded-2xl border border-gray-200/80 bg-white p-6 sm:p-8 shadow-sm hover:shadow-lg hover:border-accent/30 transition-all duration-300">
                    <div
                      className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-warm via-brand-light to-accent opacity-90"
                      aria-hidden
                    />
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-warm-subtle text-warm-dark">
                        <HeartPulse className="w-6 h-6" aria-hidden />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-lg font-bold text-gray-900 mb-3">
                          Ce que nous faisons chaque jour
                        </h3>
                        <p className="text-[0.9375rem] text-gray-600 leading-relaxed">
                          {city.longSeoText}
                        </p>
                      </div>
                    </div>
                  </article>
                )}
              </div>
            )}

            {city.popularNeeds?.length > 0 && (
              <div className="rounded-2xl border border-brand-subtle-border bg-linear-to-br from-brand-subtle/70 via-white to-warm-subtle/50 p-6 sm:p-8 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                      Besoins fréquents à {city.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">
                      Les demandes les plus courantes — réponse directe au téléphone.
                    </p>
                  </div>
                  <a
                    href={SITE_PHONE_TEL}
                    className="inline-flex items-center gap-2 rounded-full border border-brand-subtle-border bg-white px-4 py-2 text-sm font-semibold text-accent shadow-sm hover:border-accent/40 hover:shadow-md transition-all shrink-0"
                  >
                    <Phone className="w-4 h-4" aria-hidden />
                    {SITE_PHONE_DISPLAY}
                  </a>
                </div>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {city.popularNeeds.map((need, index) => {
                    const NeedIcon = popularNeedIcons[index % popularNeedIcons.length];
                    return (
                      <li
                        key={need}
                        className="group flex items-start gap-3 rounded-xl border border-white/90 bg-white/95 backdrop-blur-sm px-4 py-3.5 shadow-sm hover:shadow-md hover:border-accent/35 hover:-translate-y-0.5 transition-all duration-200"
                      >
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-accent text-xs font-bold text-white tabular-nums">
                          {index + 1}
                        </span>
                        <div className="flex items-start gap-2 min-w-0">
                          <NeedIcon
                            className="w-4 h-4 text-accent shrink-0 mt-0.5"
                            aria-hidden
                          />
                          <span className="text-sm font-medium text-gray-800 leading-snug">
                            {need}
                          </span>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}

      {city.whyChooseUs?.length > 0 && (
        <section className="py-14 bg-white border-b border-gray-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              Pourquoi choisir Taxis La Dracénie à {city.name} ?
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {city.whyChooseUs.map((item, index) => {
                const Icon = whyChooseIcons[index % whyChooseIcons.length];
                return (
                  <div
                    key={item.title}
                    className="site-card rounded-xl border border-gray-200 p-5 bg-gray-50/50"
                  >
                    <Icon className="w-8 h-8 text-accent mb-3" aria-hidden />
                    <h3 className="font-bold text-gray-900">{item.title}</h3>
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
        src={getCityHeroImage(city.slug)}
        alt={`Taxi ${city.name} — Taxis La Dracénie`}
      />

      {city.serviceAreas?.length > 0 && (
        <section className="py-12 bg-brand-subtle/50 border-b border-brand-subtle-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Zones desservies autour de {city.name}
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Nous intervenons au centre-ville, dans les quartiers résidentiels et
              les hameaux voisins — prise en charge à domicile ou sur rendez-vous.
            </p>
            <ul className="grid sm:grid-cols-2 gap-2">
              {city.serviceAreas.map((zone) => (
                <li
                  key={zone}
                  className="flex items-center gap-2 text-gray-800 text-sm"
                >
                  <MapPin className="w-4 h-4 text-accent shrink-0" aria-hidden />
                  {zone}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="py-16 md:py-20 bg-linear-to-b from-gray-50 via-white to-brand-subtle/30 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-subtle-border bg-brand-subtle px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-darker mb-4">
              <MapPin className="w-3.5 h-3.5 text-accent" aria-hidden />
              Depuis {city.name}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Trajets fréquents depuis {city.name}
            </h2>
            <p className="mt-3 text-gray-600 leading-relaxed">
              Les liaisons les plus demandées — tarif annoncé au téléphone avant
              confirmation.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {city.frequentRoutes.map((route) => {
              const { Icon, iconWrap, barClass } = getRouteVisual(route);
              return (
                <Link
                  key={route.title}
                  href={route.href}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200/80 bg-white p-5 sm:p-6 shadow-sm hover:shadow-lg hover:border-accent/30 transition-all duration-300"
                >
                  <div className={barClass} aria-hidden />
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${iconWrap}`}
                    >
                      <Icon className="w-5 h-5" aria-hidden />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-bold text-gray-900 group-hover:text-accent transition-colors">
                        {route.title}
                      </h3>
                      <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                        {route.desc}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                        En savoir plus
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

      <section className="py-16 md:py-20 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-subtle-border bg-brand-subtle px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-darker mb-4">
              <ShieldCheck className="w-3.5 h-3.5 text-accent" aria-hidden />
              Services
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Nos services à {city.name}
            </h2>
            <p className="mt-3 text-gray-600 leading-relaxed">
              Courses locales, transport médical, gare et aéroports — un seul numéro
              pour toute la Dracénie.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {city.services.map((service) => {
              const { Icon, cardClass, iconClass } = getServiceVisual(service);
              return (
                <Link key={service.href} href={service.href} className={cardClass}>
                  <div className={iconClass}>
                    <Icon className="w-6 h-6" aria-hidden />
                  </div>
                  <span className="mt-4 font-semibold text-gray-900 group-hover:text-accent transition-colors leading-snug">
                    {service.label}
                  </span>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-accent/80 group-hover:text-accent">
                    Voir la fiche
                    <ChevronRight
                      className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5"
                      aria-hidden
                    />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {city.showCpam && (
        <section className="py-10 bg-brand-subtle/80 border-y border-brand-subtle-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <ShieldCheck
              className="w-10 h-10 text-brand-dark mx-auto mb-4"
              aria-hidden
            />
            <h2 className="text-xl font-bold text-gray-900">
              Taxi conventionné CPAM à {city.name}
            </h2>
            <p className="mt-2 text-gray-700 text-sm leading-relaxed max-w-2xl mx-auto">
              Transport médical assis et trajets hospitaliers{" "}
              <strong>sous conditions d&apos;éligibilité</strong>. Appelez avant
              la course pour vérifier votre dossier CPAM.
            </p>
            <div className="mt-6 flex justify-center">
              <Button href="/taxi-conventionne-dracenie" variant="secondary" size="lg">
                Fiche CPAM
              </Button>
            </div>
          </div>
        </section>
      )}

      {city.showAirport && (
        <section className="py-14 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <Plane className="w-10 h-10 text-warm mx-auto mb-4" aria-hidden />
            <h2 className="text-2xl font-bold">
              Transferts aéroport depuis {city.name}
            </h2>
            <p className="mt-3 text-primary-foreground/90 leading-relaxed max-w-2xl mx-auto">
              Nice Côte d&apos;Azur et Marseille Provence : prix fixe annoncé,
              suivi de vol sur demande, départ adapté au trafic A8.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 justify-center">
              <Button href="/taxi-aeroport-nice-dracenie" variant="accent" size="lg">
                Aéroport Nice
              </Button>
              <Button
                href="/taxi-aeroport-marseille-dracenie"
                variant="secondaryInverse"
                size="lg"
              >
                Aéroport Marseille
              </Button>
            </div>
          </div>
        </section>
      )}

      <section className="py-10 bg-secondary/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <Train className="w-8 h-8 text-accent mx-auto mb-3" aria-hidden />
          <p className="text-gray-700 max-w-2xl mx-auto">
            <strong className="text-gray-900">Gare Les Arcs-Draguignan</strong> —{" "}
            <Link href="/taxi-gare-les-arcs-draguignan" className="text-accent font-medium hover:underline">
              taxi gare TGV & TER
            </Link>{" "}
            depuis {city.name} sur réservation ou appel immédiat.
          </p>
        </div>
      </section>

      {city.faq?.length > 0 && (
        <section className="py-14 bg-gray-50" aria-labelledby={`faq-${city.slug}`}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2 id={`faq-${city.slug}`} className="text-2xl font-bold mb-8">
              FAQ — taxi {city.name}
            </h2>
            <div className="space-y-3">
              {city.faq.map((item) => (
                <details
                  key={item.q}
                  className="group rounded-xl border border-gray-200 bg-white open:shadow-sm"
                >
                  <summary className="cursor-pointer list-none font-semibold text-gray-900 px-4 py-4 flex items-center justify-between gap-2">
                    {item.q}
                    <ChevronRight className="w-5 h-5 shrink-0 transition-transform group-open:rotate-90 text-accent" />
                  </summary>
                  <div className="px-4 pb-4 text-gray-700 leading-relaxed">
                    <PhoneLinkedText>{item.a}</PhoneLinkedText>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Villes proches desservies
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {city.nearbyCities.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-800 hover:border-accent hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section-brand py-16 text-accent-foreground">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <HeartPulse className="w-10 h-10 mx-auto mb-4 opacity-90" aria-hidden />
          <h2 className="text-2xl md:text-3xl font-bold">
            Réserver un taxi à {city.name}
          </h2>
          <p className="mt-3 text-accent-foreground/90">
            Disponibilité 24h/24 — prix annoncé quand le trajet est défini.
          </p>
          <div className="mt-8 max-w-sm mx-auto">
            <PhoneBanner />
          </div>
          <p className="mt-4 text-sm">
            <a href={SITE_PHONE_TEL} className="font-bold underline underline-offset-2">
              {SITE_PHONE_DISPLAY}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
