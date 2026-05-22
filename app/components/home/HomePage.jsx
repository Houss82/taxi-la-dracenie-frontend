import { cities } from "@/app/lib/cities";
import { SITE_PHONE_DISPLAY, SITE_PHONE_TEL } from "@/app/lib/contact";
import {
  buildFaqJsonLd,
  buildLocalBusinessJsonLd,
  buildTaxiServiceJsonLd,
} from "@/app/lib/seo";
import {
  ALL_CITY_SLUGS,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
} from "@/app/lib/site";
import {
  Car,
  ChevronRight,
  Clock,
  HeartPulse,
  MapPin,
  Phone,
  Plane,
  ShieldCheck,
  Star,
  Train,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import HeroCTAs, { PhoneBanner } from "../HeroCTAs";
import ParallaxImageBanner from "../client/ParallaxImageBanner";
import PhoneLinkedText from "../PhoneLinkedText";
import JsonLd from "../seo/JsonLd";
import Button from "../ui/Button";
import Card from "../ui/Card";
import { HOME_HERO_IMAGE } from "@/app/lib/heroImages";

const trustPills = [
  "24h/24 · 7j/7",
  "Prix fixe selon trajet",
  "Taxi conventionné CPAM",
  "Gare Les Arcs-Draguignan",
  "Aéroports Nice & Marseille",
  "Toute la Dracénie",
];

const frequentRoutes = [
  {
    route: "Vidauban → Aéroport Nice",
    desc: "Transfert direct, horaire adapté à votre vol.",
    href: "/taxi-aeroport-vidauban",
  },
  {
    route: "Draguignan → CHD Draguignan",
    desc: "Consultations, hospitalisation, imagerie.",
    href: "/taxi-conventionne-draguignan",
  },
  {
    route: "Les Arcs → Gare TGV",
    desc: "Accueil quai, correspondances TER & TGV.",
    href: "/taxi-gare-les-arcs-draguignan",
  },
  {
    route: "Le Muy → Marseille Provence",
    desc: "Transfert aéroport ou spécialistes.",
    href: "/taxi-aeroport-marseille-dracenie",
  },
  {
    route: "Vidauban → Draguignan",
    desc: "Courses quotidiennes en Dracénie.",
    href: "/taxi-draguignan",
  },
  {
    route: "Lorgues → Gare Les Arcs",
    desc: "Trajet régulier vers le TGV.",
    href: "/taxi-gare-les-arcs-draguignan",
  },
];

const clientReviews = [
  {
    name: "Isabelle M.",
    city: "Draguignan",
    service: "Taxi conventionné CPAM",
    rating: 5,
    review:
      "Excellent taxi conventionné à Draguignan. Ponctuel pour mes rendez-vous au CHD, chauffeur très professionnel.",
  },
  {
    name: "Philippe R.",
    city: "Vidauban",
    service: "Transfert aéroport Nice",
    rating: 5,
    review:
      "Départ Vidauban vers Nice sans stress, tarif annoncé au téléphone. Je recommande Taxis La Dracénie.",
  },
  {
    name: "Nathalie B.",
    city: "Les Arcs",
    service: "Taxi gare Les Arcs",
    rating: 5,
    review:
      "Prise en charge à la gare TGV Les Arcs-Draguignan, correspondance parfaite. Service fiable 24h/24.",
  },
];

const medicalDestinations = [
  {
    title: "CHD Draguignan",
    desc: "Centre Hospitalier de la Dracénie — urgences, hospitalisation, spécialités.",
    href: "/taxi-conventionne-draguignan",
  },
  {
    title: "Consultations & imagerie",
    desc: "Radiologie, IRM, scanner, cardiologie et cabinets du centre-ville.",
    href: "/transport-medical-conventionne-dracenie",
  },
  {
    title: "Radiothérapie & oncologie",
    desc: "Trajets réguliers vers les centres spécialisés du Var et au-delà.",
    href: "/transport-medical-conventionne-dracenie",
  },
  {
    title: "Dialyse & soins récurrents",
    desc: "Prise en charge planifiée, horaires respectés pour vos séances.",
    href: "/taxi-conventionne-vidauban",
  },
];

const serviceBlocks = [
  {
    title: "Taxi conventionné",
    desc: "Transport médical assis CPAM, sous éligibilité.",
    href: "/taxi-conventionne-dracenie",
    icon: ShieldCheck,
  },
  {
    title: "Aéroport Nice",
    desc: "Transfert depuis Vidauban, Draguignan, Les Arcs…",
    href: "/taxi-aeroport-nice-dracenie",
    icon: Plane,
  },
  {
    title: "Gare Les Arcs",
    desc: "TGV & TER — accueil quai, correspondances.",
    href: "/taxi-gare-les-arcs-draguignan",
    icon: Train,
  },
  {
    title: "Transport médical",
    desc: "CHD Draguignan et spécialistes du Var.",
    href: "/transport-medical-conventionne-dracenie",
    icon: HeartPulse,
  },
];

const faqItems = [
  {
    q: "Couvrez-vous toute la Dracénie ?",
    a: "Oui : Vidauban, Draguignan, Le Muy, Les Arcs, Lorgues, Trans-en-Provence, Taradeau, Flayosc, Figanières et communes voisines.",
    aText: "Oui, toutes les communes principales de la Dracénie.",
  },
  {
    q: "Comment réserver un taxi rapidement ?",
    a: `Appelez le ${SITE_PHONE_DISPLAY} ou écrivez sur WhatsApp — c'est le plus direct pour une course immédiate.`,
    aText: `Appelez le ${SITE_PHONE_DISPLAY} ou WhatsApp pour une course immédiate.`,
  },
  {
    q: "Proposez-vous un taxi conventionné CPAM ?",
    a: "Oui, sous conditions d'éligibilité. Indiquez votre situation médicale au téléphone avant le trajet.",
    aText: "Oui, sous conditions d'éligibilité CPAM vérifiées au téléphone.",
  },
];

export default function HomePage() {
  const cityLinks = ALL_CITY_SLUGS.map((slug) => cities[slug]);

  return (
    <>
      <JsonLd
        id="jsonld-home-taxi-service"
        data={buildTaxiServiceJsonLd({
          name: SITE_NAME,
          url: SITE_URL,
          areaServed: cityLinks.map((c) => c.name),
          description:
            "Taxi en Dracénie — transport privé et conventionné CPAM, gare Les Arcs, aéroports Nice et Marseille.",
        })}
      />
      <JsonLd
        id="jsonld-home-localbusiness"
        data={buildLocalBusinessJsonLd({
          name: SITE_NAME,
          url: SITE_URL,
          areaServed: ["Dracénie", "Var", "Vidauban", "Draguignan"],
        })}
      />
      <JsonLd id="jsonld-home-faq" data={buildFaqJsonLd(faqItems)} />

      <section className="hero-section relative overflow-hidden bg-zinc-900 min-h-[85vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/taxi-transport-medical-dracenie-chd.jpg"
            alt="Taxi Lamparo en Dracénie — Vidauban, Draguignan et tout le Var"
            fill
            priority
            sizes="100vw"
            quality={92}
            className="hero-bg-image"
          />
          <div className="hero-bg-overlay absolute inset-0" aria-hidden />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-16 lg:pt-32 lg:pb-24 grid lg:grid-cols-12 gap-10 items-center w-full">
          <div className="hero-text-panel lg:col-span-7 text-white">
            <p className="text-sm font-semibold uppercase tracking-wider text-warm/95 mb-3">
              {SITE_NAME} · {SITE_TAGLINE}
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-balance leading-tight">
              Taxi Dracénie – Vidauban, Draguignan, Le Muy & Taxi Conventionné
              CPAM
            </h1>
            <p className="mt-5 text-lg text-white/90 max-w-xl leading-relaxed">
              Taxi local disponible 24h/24 en Dracénie. Transferts gare,
              aéroport et transport médical conventionné CPAM — tarif annoncé
              quand le trajet est défini.
            </p>
            <div className="mt-8">
              <HeroCTAs />
            </div>
            <ul className="mt-8 flex flex-wrap gap-2" aria-label="Atouts">
              {trustPills.map((label) => (
                <li
                  key={label}
                  className="rounded-full bg-white/10 border border-warm/25 px-3 py-1.5 text-xs sm:text-sm text-white/95"
                >
                  {label}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-white/95 backdrop-blur border border-warm-border/40 shadow-2xl p-6 md:p-7">
              <h2 className="text-lg font-bold text-gray-900">
                Course immédiate ou sur rendez-vous ?
              </h2>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                Un conseiller répond : adresse de prise en charge, destination,
                passagers et bagages. Priorité au téléphone pour une arrivée
                rapide.
              </p>
              <div className="mt-5">
                <PhoneBanner label="Appeler maintenant" />
              </div>
              <Button
                href="/reservation"
                variant="reservation"
                size="lg"
                className="mt-3 w-full font-bold"
              >
                Formulaire de réservation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-3">
            Trajets fréquents en Dracénie
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            Les courses les plus demandées — signal local fort pour Google et
            réponse immédiate à vos besoins.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {frequentRoutes.map((item) => (
              <Link
                key={item.route}
                href={item.href}
                className="site-card group rounded-xl border border-gray-200 bg-gray-50 p-5 hover:border-accent/40 hover:bg-white hover:shadow-md transition-all"
              >
                <h3 className="font-bold text-gray-900 group-hover:text-accent transition-colors">
                  {item.route}
                </h3>
                <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-accent">
                  Réserver ce trajet
                  <ChevronRight className="w-4 h-4" aria-hidden />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-8">
            <p className="text-gray-700 leading-relaxed pl-4 border-l-4 border-warm">
              <strong className="text-gray-900">Taxis La Dracénie</strong>{" "}
              n&apos;est pas un simple taxi de village : c&apos;est une marque
              locale qui couvre <strong>Vidauban</strong>,{" "}
              <strong>Draguignan</strong>, la{" "}
              <Link
                href="/taxi-gare-les-arcs-draguignan"
                className="text-accent font-medium hover:underline"
              >
                gare Les Arcs-Draguignan
              </Link>
              , le <strong>CHD</strong> et les transferts{" "}
              <Link
                href="/taxi-aeroport-nice-dracenie"
                className="text-accent font-medium hover:underline"
              >
                aéroport Nice
              </Link>{" "}
              /{" "}
              <Link
                href="/taxi-aeroport-marseille-dracenie"
                className="text-accent font-medium hover:underline"
              >
                Marseille
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Taxi local en Dracénie — villes et services
          </h2>
          <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>
              <strong>Taxis La Dracénie</strong> dessert l&apos;ensemble du
              territoire dracénois :{" "}
              <Link
                href="/taxi-vidauban"
                className="text-accent font-medium hover:underline"
              >
                taxi Vidauban
              </Link>
              ,{" "}
              <Link
                href="/taxi-draguignan"
                className="text-accent font-medium hover:underline"
              >
                taxi Draguignan
              </Link>
              ,{" "}
              <Link
                href="/taxi-le-muy"
                className="text-accent font-medium hover:underline"
              >
                taxi Le Muy
              </Link>
              ,{" "}
              <Link
                href="/taxi-les-arcs"
                className="text-accent font-medium hover:underline"
              >
                taxi Les Arcs
              </Link>
              ,{" "}
              <Link
                href="/taxi-lorgues"
                className="text-accent font-medium hover:underline"
              >
                Lorgues
              </Link>{" "}
              et{" "}
              <Link
                href="/taxi-trans-en-provence"
                className="text-accent font-medium hover:underline"
              >
                Trans-en-Provence
              </Link>
              . Que ce soit une course immédiate, un{" "}
              <Link
                href="/taxi-gare-les-arcs-draguignan"
                className="text-accent font-medium hover:underline"
              >
                transfert gare Les Arcs-Draguignan
              </Link>
              , un trajet vers l&apos;
              <Link
                href="/taxi-aeroport-nice-dracenie"
                className="text-accent font-medium hover:underline"
              >
                aéroport Nice
              </Link>{" "}
              ou{" "}
              <Link
                href="/taxi-aeroport-marseille-dracenie"
                className="text-accent font-medium hover:underline"
              >
                Marseille Provence
              </Link>
              , un chauffeur local répond au{" "}
              <PhoneLinkedText>{SITE_PHONE_DISPLAY}</PhoneLinkedText>.
            </p>
            <p>
              Notre activité couvre aussi le{" "}
              <Link
                href="/taxi-conventionne-dracenie"
                className="text-accent font-medium hover:underline"
              >
                taxi conventionné CPAM
              </Link>
              , le{" "}
              <Link
                href="/transport-medical-conventionne-dracenie"
                className="text-accent font-medium hover:underline"
              >
                transport médical conventionné
              </Link>{" "}
              (VSL assis selon éligibilité), les trajets vers le CHD Draguignan,
              les centres médicaux et les spécialistes du Var. Chaque commune
              dispose d&apos;une page dédiée pour un référencement local précis.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-3">
            Taxi par ville en Dracénie
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            Chaque page est dédiée à une commune — contenu local unique pour un
            SEO régional performant.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cityLinks.map((city) => (
              <Link
                key={city.slug}
                href={`/${city.slug}`}
                className="site-card group rounded-xl border border-gray-200 bg-white p-5 hover:border-accent/40 hover:shadow-md transition-all"
              >
                <MapPin className="w-6 h-6 text-accent mb-3" aria-hidden />
                <h3 className="font-bold text-gray-900 group-hover:text-accent transition-colors">
                  Taxi {city.name}
                </h3>
                <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                  {city.intro.slice(0, 100)}…
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-accent">
                  Voir la page
                  <ChevronRight className="w-4 h-4" aria-hidden />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ParallaxImageBanner
        src={HOME_HERO_IMAGE}
        alt="Taxi Lamparo en Dracénie — Vidauban, Draguignan et tout le Var"
      />

      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            Services taxi Dracénie
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceBlocks.map((block) => {
              const Icon = block.icon;
              return (
                <Card
                  key={block.href}
                  className="p-6 hover:shadow-lg transition-shadow h-full"
                >
                  <Icon className="w-8 h-8 text-accent mb-4" aria-hidden />
                  <h3 className="font-bold mb-2">{block.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {block.desc}
                  </p>
                  <Link
                    href={block.href}
                    className="text-sm font-medium text-accent hover:underline"
                  >
                    En savoir plus →
                  </Link>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12 bg-brand-subtle/80 border-y border-brand-subtle-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <ShieldCheck
            className="w-12 h-12 text-brand-dark mx-auto mb-4"
            aria-hidden
          />
          <h2 className="text-xl font-bold text-gray-900">
            Taxi conventionné Vidauban & Draguignan
          </h2>
          <p className="mt-2 text-gray-700 text-sm leading-relaxed max-w-2xl mx-auto">
            Pages dédiées :{" "}
            <Link
              href="/taxi-conventionne-vidauban"
              className="font-semibold text-accent hover:underline"
            >
              taxi conventionné Vidauban
            </Link>
            ,{" "}
            <Link
              href="/taxi-conventionne-draguignan"
              className="font-semibold text-accent hover:underline"
            >
              taxi conventionné Draguignan
            </Link>
            , et{" "}
            <Link
              href="/transport-medical-conventionne-dracenie"
              className="font-semibold text-accent hover:underline"
            >
              transport médical conventionné Dracénie
            </Link>
            .
          </p>
          <div className="mt-6 flex justify-center">
            <Button
              href={SITE_PHONE_TEL}
              variant="call"
              size="lg"
              className="shrink-0 font-bold"
            >
              <Phone className="w-5 h-5" />
              {SITE_PHONE_DISPLAY}
            </Button>
          </div>
        </div>
      </section>

      <section className="py-14 bg-brand-subtle/60 border-y border-brand-subtle-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <HeartPulse
              className="w-10 h-10 text-brand-dark mx-auto mb-4"
              aria-hidden
            />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Transport médical conventionné — notre spécialité
            </h2>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Le médical est un levier majeur en Dracénie : CHD Draguignan,
              consultations, radiothérapie, hospitalisation. Taxi assis CPAM
              sous éligibilité — transparence dès le premier appel.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {medicalDestinations.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="site-card rounded-xl border border-brand-border bg-white p-5 hover:shadow-md transition-shadow"
              >
                <h3 className="font-bold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
              </Link>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              href="/taxi-conventionne-draguignan"
              variant="outline"
              size="lg"
            >
              Taxi conventionné Draguignan
            </Button>
            <Button
              href="/taxi-conventionne-vidauban"
              variant="outline"
              size="lg"
            >
              Taxi conventionné Vidauban
            </Button>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">
            Avis clients — Taxis La Dracénie
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            Des trajets quotidiens en Dracénie — gare, aéroport et transport
            médical conventionné.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {clientReviews.map((item) => (
              <Card key={item.name} className="p-6 flex flex-col h-full">
                <div className="flex gap-1 mb-3">
                  {Array(item.rating)
                    .fill(0)
                    .map((_, j) => (
                      <Star
                        key={j}
                        className="w-4 h-4 fill-warm text-warm"
                        aria-hidden
                      />
                    ))}
                </div>
                <p className="text-gray-800 italic grow text-sm">
                  &ldquo;{item.review}&rdquo;
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="font-bold text-sm text-gray-900">{item.name}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {item.city} · {item.service}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-secondary/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-4 gap-8 text-center">
          {[
            {
              icon: Clock,
              title: "Disponible 24h/24",
              desc: "Même numéro jour et nuit.",
            },
            {
              icon: Car,
              title: "Véhicules confortables",
              desc: "Berlines propres et climatisées.",
            },
            {
              icon: MapPin,
              title: "Chauffeurs locaux",
              desc: "Connaissance fine de la Dracénie.",
            },
            {
              icon: Star,
              title: "Conversion rapide",
              desc: "Appel = réponse humaine directe.",
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title}>
                <Icon
                  className="w-10 h-10 mx-auto mb-3 text-accent"
                  aria-hidden
                />
                <h3 className="font-bold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-14 bg-gray-50" aria-labelledby="faq-home">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 id="faq-home" className="text-2xl font-bold mb-8">
            Questions fréquentes
          </h2>
          <div className="space-y-3">
            {faqItems.map((item) => (
              <details
                key={item.q}
                className="group rounded-xl border border-gray-200 bg-white open:shadow-sm"
              >
                <summary className="cursor-pointer list-none font-semibold px-4 py-4 flex justify-between gap-2">
                  {item.q}
                  <ChevronRight className="w-5 h-5 shrink-0 group-open:rotate-90 text-accent transition-transform" />
                </summary>
                <div className="px-4 pb-4 text-gray-700">
                  <PhoneLinkedText>{item.a}</PhoneLinkedText>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section-brand py-16 text-accent-foreground">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl md:text-4xl font-bold">
            Besoin d&apos;un taxi en Dracénie maintenant ?
          </h2>
          <p className="mt-4 text-accent-foreground/90">
            Appelez — c&apos;est le plus rapide pour confirmer délai et tarif.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              href={SITE_PHONE_TEL}
              variant="soft"
              size="xl"
              className="font-bold gap-2"
            >
              <Phone className="w-5 h-5" />
              {SITE_PHONE_DISPLAY}
            </Button>
            <Button href="/contact" variant="secondaryInverse" size="xl">
              Contact
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
