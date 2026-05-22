import { CalendarCheck, ChevronRight, Clock, HeartPulse, MapPin, Phone, Plane, ShieldCheck, Train, UserCheck } from "lucide-react";
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
import { getServiceHeroImage } from "@/app/lib/heroImages";
import ParallaxImageBanner from "./client/ParallaxImageBanner";

const whyChooseIcons = [Clock, Train, HeartPulse, Plane, Phone, UserCheck];

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
            {service.intro}
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

      {service.sections?.map((section) => (
        <section key={section.title} className="py-12 bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
            <p className="text-gray-700 leading-relaxed">{section.body}</p>
          </div>
        </section>
      ))}

      {service.realTransfersText && (
        <section className="py-12 bg-gray-50 border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {service.realTransfersTitle || "Trajets médicaux et transferts fréquents"}
            </h2>
            <p className="text-gray-700 leading-relaxed">{service.realTransfersText}</p>
          </div>
        </section>
      )}

      {service.frequentRoutes?.length > 0 && (
        <section className="py-14 bg-white border-b border-gray-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              Trajets fréquents
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {service.frequentRoutes.map((route) => (
                <Card
                  key={route.title}
                  className="p-5 hover:border-accent/40 hover:shadow-md transition-shadow"
                >
                  <h3 className="font-bold text-gray-900">{route.title}</h3>
                  <p className="text-sm text-gray-600 mt-2">{route.desc}</p>
                  {route.href && (
                    <Link
                      href={route.href}
                      className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
                    >
                      En savoir plus
                      <ChevronRight className="w-4 h-4" aria-hidden />
                    </Link>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {service.whyChooseUs?.length > 0 && (
        <section className="py-14 bg-gray-50 border-b border-gray-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              {service.whyChooseTitle || "Pourquoi nous faire confiance ?"}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {service.whyChooseUs.map((item, index) => {
                const Icon = whyChooseIcons[index % whyChooseIcons.length];
                return (
                  <div
                    key={item.title}
                    className="site-card rounded-xl border border-gray-200 p-5 bg-white"
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
        src={getServiceHeroImage(service.slug)}
        alt={`${service.h1} — Taxis La Dracénie`}
      />

      {service.serviceAreas?.length > 0 && (
        <section className="py-12 bg-brand-subtle/50 border-b border-brand-subtle-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Communes et zones desservies
            </h2>
            <ul className="grid sm:grid-cols-2 gap-2">
              {service.serviceAreas.map((zone) => (
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Villes desservies en Dracénie
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {service.relatedCities.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="site-card flex flex-col items-center text-center rounded-xl border border-gray-200 bg-white px-4 py-3 hover:border-accent/40 transition-colors"
              >
                <span className="font-medium text-gray-900">{link.label}</span>
                <ChevronRight className="w-4 h-4 text-accent" aria-hidden />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {service.faq?.length > 0 && (
        <section className="py-14 bg-white" aria-labelledby={`faq-${service.slug}`}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2 id={`faq-${service.slug}`} className="text-2xl font-bold mb-8">
              Questions fréquentes
            </h2>
            <div className="space-y-3">
              {service.faq.map((item) => (
                <details
                  key={item.q}
                  className="group rounded-xl border border-gray-200 bg-gray-50 open:bg-white open:shadow-sm"
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
            <Button href="/reservation" variant="reservation" size="lg" className="gap-2 font-bold">
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
