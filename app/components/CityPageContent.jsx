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
import Card from "./ui/Card";
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

      {city.realTransfersText && (
        <section className="py-12 bg-gray-50 border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Trajets réels depuis {city.name}
            </h2>
            <p className="text-gray-700 leading-relaxed">{city.realTransfersText}</p>
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

      <section className="py-14 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Trajets fréquents depuis {city.name}
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {city.frequentRoutes.map((route) => (
              <Card
                key={route.title}
                className="p-5 hover:border-accent/40 hover:shadow-md transition-shadow"
              >
                <h3 className="font-bold text-gray-900">{route.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{route.desc}</p>
                <Link
                  href={route.href}
                  className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
                >
                  En savoir plus
                  <ChevronRight className="w-4 h-4" aria-hidden />
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Nos services à {city.name}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {city.services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="site-card rounded-xl border border-gray-200 p-4 hover:border-accent/40 hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900">{service.label}</span>
              </Link>
            ))}
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
