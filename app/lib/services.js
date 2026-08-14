/** Données SEO uniques par page service / combo ville+service. */

import { hydrateContactStrings } from "./hydrate-contact";

const rawServices = {
  "taxi-conventionne-dracenie": {
    slug: "taxi-conventionne-dracenie",
    type: "service",
    h1: "Taxi conventionné CPAM en Dracénie",
    title:
      "Taxi conventionné Dracénie | CPAM Vidauban, Draguignan & transport médical",
    description:
      "Taxi conventionné CPAM en Dracénie : Vidauban, Draguignan, CHD, transport médical assis selon éligibilité. Taxis La Dracénie — 04 22 46 04 62.",
    keywords: [
      "taxi conventionné Dracénie",
      "taxi conventionné Vidauban",
      "taxi conventionné Draguignan",
      "taxi CPAM Var",
      "transport médical conventionné Dracénie",
    ],
    intro:
      "Taxis La Dracénie accompagnent vos trajets médicaux conventionnés sur tout le territoire dracénois : Vidauban, Draguignan, Les Arcs, Le Muy et communes voisines. L'éligibilité CPAM se vérifie toujours au téléphone avant le départ.",
    sections: [
      {
        title: "Qui peut bénéficier d'un taxi conventionné ?",
        body: "La prise en charge dépend de votre situation médicale, de la prescription et des règles de votre caisse. Nous vous orientons clairement au 04 22 46 04 62 — sans promesse de remboursement que nous ne pouvons pas garantir à votre place.",
      },
      {
        title: "Établissements desservis",
        body: "Centre Hospitalier de la Dracénie (Draguignan), cabinets spécialistes, imagerie, dialyse, consultations de ville : précisez l'adresse exacte et l'horaire du rendez-vous.",
      },
    ],
    relatedCities: [
      { label: "Taxi conventionné Vidauban", href: "/taxi-conventionne-vidauban" },
      { label: "Taxi conventionné Draguignan", href: "/taxi-conventionne-draguignan" },
      { label: "Taxi Vidauban", href: "/taxi-vidauban" },
      { label: "Taxi Draguignan", href: "/taxi-draguignan" },
    ],
    faq: [
      {
        q: "Comment réserver un taxi conventionné en Dracénie ?",
        a: "Appelez le 04 22 46 04 62 en indiquant votre adresse, la destination médicale et votre numéro de sécurité sociale si pertinent.",
        aText:
          "Appelez en indiquant adresse, destination médicale et informations CPAM utiles.",
      },
      {
        q: "Le taxi conventionné couvre-t-il toute la Dracénie ?",
        a: "Oui, Vidauban, Draguignan, Les Arcs, Le Muy, Lorgues et villages alentour selon disponibilité.",
        aText: "Oui, sur l'ensemble de la Dracénie selon disponibilité des véhicules.",
      },
    ],
  },

  "transport-medical-conventionne-dracenie": {
    slug: "transport-medical-conventionne-dracenie",
    type: "service",
    h1: "Transport médical conventionné en Dracénie",
    title:
      "Transport médical conventionné Dracénie | CHD Draguignan & CPAM",
    description:
      "Transport médical conventionné en Dracénie vers CHD, cliniques et spécialistes. Taxi assis CPAM selon éligibilité — 04 22 46 04 62.",
    keywords: [
      "transport médical conventionné Dracénie",
      "transport médical Draguignan",
      "taxi médical CHD",
      "transport assis CPAM Var",
      "VSL Dracénie",
      "taxi hospitalisation Draguignan",
    ],
    intro:
      "Pour vos rendez-vous au Centre Hospitalier de la Dracénie (CHD), en radiothérapie, dialyse ou consultation spécialisée, Taxis La Dracénie organisent un transport médical assis dans le respect des conditions CPAM. Chaque dossier est unique : appelez avant de monter en voiture pour vérifier votre éligibilité.",
    realTransfersTitle: "Trajets médicaux réels en Dracénie",
    realTransfersText:
      "Nous effectuons quotidiennement des trajets Vidauban → CHD Draguignan, Draguignan → imagerie ou cardiologie, Les Arcs → consultations hospitalières, et des transferts vers Toulon (Hôpital Sainte-Musse) ou Nice pour la radiothérapie et l'oncologie lorsque la prescription le prévoit. Les retours d'hospitalisation et les rendez-vous récurrents (dialyse, kinésithérapie) sont planifiés avec ponctualité.",
    sections: [
      {
        title: "CHD Draguignan — notre destination principale",
        body: "Le Centre Hospitalier de la Dracénie concentre urgences, hospitalisation, maternité, imagerie et de nombreuses spécialités. Nos chauffeurs connaissent les entrées piétonnes et véhicules, les horaires de forte affluence et les services les plus demandés (urgences, consultation externe, hospitalisation de jour).",
      },
      {
        title: "Consultations, imagerie & spécialistes",
        body: "IRM, scanner, échographie, cardiologie, ophtalmologie : nous vous déposez au bon accès avec marge sur le stationnement. Pour les spécialistes hors Dracénie (Toulon, Nice, Fréjus), le trajet est organisé selon votre prescription et votre éligibilité CPAM.",
      },
      {
        title: "Radiothérapie, oncologie & soins lourds",
        body: "Les séances répétées nécessitent ponctualité et fiabilité. Nous planifions des créneaux réguliers depuis Vidauban, Draguignan, Les Arcs ou les villages alentour — transparence sur les formalités CPAM dès le premier appel.",
      },
      {
        title: "Hospitalisation & retours de soins",
        body: "Sortie d'hospitalisation, retour de consultation sous sédation ou rendez-vous avec aide à la marche (sans remplacer l'ambulance) : précisez votre situation au téléphone pour que nous orientions correctement le véhicule adapté.",
      },
      {
        title: "Formalités CPAM & transparence",
        body: "Nous ne remplaçons pas votre caisse ni votre médecin traitant. En revanche, nous vous expliquons ce qu'il faut préparer : prescription médicale, bon de transport, numéro de sécurité sociale. Aucune promesse de remboursement que nous ne pouvons garantir à votre place.",
      },
    ],
    frequentRoutes: [
      {
        title: "Vidauban → CHD Draguignan",
        desc: "Consultations et hospitalisation — trajet quotidien le plus demandé.",
        href: "/taxi-conventionne-vidauban",
      },
      {
        title: "Draguignan → imagerie / cardiologie",
        desc: "Rendez-vous programmés au CHD ou en ville.",
        href: "/taxi-conventionne-draguignan",
      },
      {
        title: "Les Arcs → CHD",
        desc: "Correspondance médicale depuis la gare ou le centre-ville.",
        href: "/taxi-les-arcs",
      },
      {
        title: "Dracénie → Toulon Sainte-Musse",
        desc: "Spécialistes et examens hors secteur, selon prescription.",
        href: "/transport-medical-conventionne-dracenie",
      },
      {
        title: "Retour d'hospitalisation CHD",
        desc: "Prise en charge à la sortie, horaire confirmé avec le service.",
        href: "/taxi-conventionne-draguignan",
      },
    ],
    whyChooseTitle: "Pourquoi Taxis La Dracénie pour le transport médical ?",
    whyChooseUs: [
      {
        title: "Expertise CHD",
        desc: "Entrées, flux et créneaux du Centre Hospitalier de la Dracénie maîtrisés au quotidien.",
      },
      {
        title: "Trajets récurrents",
        desc: "Dialyse, kiné, radiothérapie : créneaux planifiés avec le même interlocuteur.",
      },
      {
        title: "CPAM transparent",
        desc: "Vérification d'éligibilité au téléphone — pas de fausses promesses de remboursement.",
      },
      {
        title: "Toute la Dracénie",
        desc: "Vidauban, Draguignan, Les Arcs, Le Muy, Lorgues et villages voisins.",
      },
      {
        title: "Disponibilité 24h/24",
        desc: "Urgences médicales non vitales ou retours tardifs : appelez à tout moment.",
      },
      {
        title: "Chauffeurs locaux",
        desc: "Connaissance des temps réels Dracénie → Toulon, Nice ou Fréjus.",
      },
    ],
    serviceAreas: [
      "Vidauban et environs",
      "Draguignan — centre et périphérie",
      "Les Selves & Saint-Hermentaire",
      "Les Arcs & Le Muy",
      "Trans-en-Provence & Flayosc",
      "Lorgues, Taradeau & Figanières",
    ],
    relatedCities: [
      { label: "Taxi Draguignan", href: "/taxi-draguignan" },
      { label: "Taxi Vidauban", href: "/taxi-vidauban" },
      { label: "Taxi Les Arcs", href: "/taxi-les-arcs" },
      { label: "Taxi conventionné Dracénie", href: "/taxi-conventionne-dracenie" },
    ],
    faq: [
      {
        q: "Faut-il une prescription pour un transport médical ?",
        a: "En général oui pour la prise en charge CPAM. Vérifiez avec votre médecin et appelez-nous pour confirmer les démarches.",
        aText:
          "Une prescription est généralement requise pour la prise en charge CPAM.",
      },
      {
        q: "Transport médical CHD Draguignan : comment réserver ?",
        a: "Appelez le 04 22 46 04 62 avec votre adresse, l'heure du rendez-vous et le service hospitalier visé. Réservez 24 à 48 h à l'avance si possible.",
        aText:
          "Appelez avec adresse, horaire et service hospitalier. Réservez 24 à 48 h à l'avance si possible.",
      },
      {
        q: "Couvrez-vous la dialyse et la radiothérapie ?",
        a: "Oui, trajets récurrents planifiés sous conditions CPAM. Indiquez la fréquence de vos séances lors de l'appel.",
        aText:
          "Oui, trajets récurrents planifiés sous conditions CPAM selon fréquence des séances.",
      },
      {
        q: "Peut-on aller à Toulon ou Nice en transport conventionné ?",
        a: "Selon prescription et éligibilité pour certains spécialistes ou examens. Nous vérifions votre dossier au téléphone.",
        aText:
          "Possible selon prescription et éligibilité CPAM — vérification au téléphone.",
      },
    ],
  },

  "taxi-aeroport-nice-dracenie": {
    slug: "taxi-aeroport-nice-dracenie",
    type: "service",
    h1: "Taxi aéroport Nice depuis la Dracénie",
    title:
      "Taxi Aéroport Nice Dracénie | Vidauban, Draguignan, Les Arcs & Le Muy",
    description:
      "Taxi vers l'aéroport Nice Côte d'Azur depuis Vidauban, Draguignan, Les Arcs, Le Muy et toute la Dracénie. Départ 24h/24, tarif communiqué à l'avance, suivi de vol — 04 22 46 04 62.",
    keywords: [
      "taxi aéroport Nice Dracénie",
      "taxi Nice Vidauban",
      "taxi Nice Draguignan",
      "taxi Les Arcs aéroport Nice",
      "taxi Le Muy aéroport Nice",
      "transfert aéroport Nice Var",
      "taxi Dracénie Nice Airport",
    ],
    intro:
      "Vous devez rejoindre l'aéroport Nice Côte d'Azur depuis Vidauban, Draguignan, Les Arcs, Le Muy ou une autre commune de la Dracénie ? Taxis La Dracénie organise vos transferts vers les terminaux 1 et 2 avec prise en charge à domicile, horaire adapté à votre vol et tarif communiqué avant confirmation. Les départs tôt le matin, les retours de voyage et les transferts avec bagages peuvent être réservés à l'avance.",
    realTransfersTitle: "Transferts réels vers Nice Côte d'Azur",
    realTransfersText:
      "Les transferts vers Nice Côte d'Azur font partie des longues distances les plus demandées depuis la Dracénie. Nous organisons notamment des départs depuis Vidauban, Draguignan, Les Arcs et Le Muy pour les vols matinaux, ainsi que des retours depuis les terminaux 1 et 2 vers les domiciles, hôtels, domaines et villages du secteur. Le numéro de vol permet d'organiser plus précisément la prise en charge au retour.",
    sections: [
      {
        title: "Taxi vers Nice Airport depuis toute la Dracénie",
        body: "Notre service dessert Vidauban, Draguignan, Les Arcs, Le Muy, Lorgues, Taradeau, Flayosc, Figanières et Trans-en-Provence. La prise en charge peut être organisée depuis votre domicile, un hôtel, une résidence secondaire ou un point de rendez-vous défini lors de la réservation. Pour les départs importants, nous recommandons de réserver dès que l'horaire du vol est connu.",
      },
      {
        title: "Combien de temps prévoir pour rejoindre l'aéroport de Nice ?",
        body: "Selon votre commune et les conditions de circulation, comptez généralement environ 1 h à 1 h 30 de trajet depuis la Dracénie. Le temps réel dépend notamment de l'heure de départ, du trafic sur l'A8, de la saison et du terminal. Pour un vol, nous ajoutons une marge de sécurité afin de ne pas calculer le départ uniquement sur le temps théorique de conduite.",
      },
      {
        title: "Départs tôt le matin et vols matinaux",
        body: "Les vols décollant tôt à Nice nécessitent souvent une prise en charge de nuit depuis Vidauban ou Draguignan. Le service fonctionne sur réservation 24h/24. Lors de votre appel, communiquez l'heure du vol, le terminal et votre adresse exacte : nous déterminons avec vous un horaire de départ adapté.",
      },
      {
        title: "Terminal 1 ou Terminal 2 à Nice Côte d'Azur",
        body: "L'aéroport Nice Côte d'Azur dispose de deux terminaux. Si vous connaissez votre terminal, indiquez-le lors de la réservation. Sinon, communiquez votre compagnie ou votre numéro de vol afin de préparer le transfert. À l'arrivée, la prise en charge est organisée au point de rendez-vous convenu au terminal.",
      },
      {
        title: "Retour depuis l'aéroport Nice vers la Dracénie",
        body: "Nous assurons également les trajets retour Nice Airport → Dracénie. En communiquant votre numéro de vol, la prise en charge peut être ajustée en cas de modification de l'horaire d'arrivée. Une pancarte nominative peut être prévue sur demande pour faciliter la rencontre avec le chauffeur.",
      },
      {
        title: "Bagages, familles et déplacements professionnels",
        body: "Lors de la réservation, indiquez le nombre de passagers et de bagages afin d'adapter le véhicule à la course. Les transferts aéroport concernent aussi bien les voyageurs d'affaires que les familles, couples, touristes ou résidents de la Dracénie. Signalez également les équipements particuliers ou besoins spécifiques avant confirmation.",
      },
      {
        title: "Tarif communiqué avant le transfert",
        body: "Pour un trajet défini entre la Dracénie et l'aéroport de Nice, le tarif est communiqué avant confirmation de la réservation. Le montant dépend notamment du lieu exact de prise en charge, de l'horaire et des caractéristiques de la course. Appelez le 04 22 46 04 62 avec votre adresse et les informations de vol pour obtenir le tarif correspondant.",
      },
    ],
    whyChooseTitle: "Pourquoi réserver avec Taxis La Dracénie ?",
    whyChooseUs: [
      {
        title: "Disponible 24h/24",
        desc: "Départs de nuit et vols matinaux depuis Vidauban, Draguignan ou Les Arcs — un seul numéro.",
      },
      {
        title: "Tarif annoncé",
        desc: "Prix communiqué avant confirmation pour un trajet défini vers Nice Côte d'Azur.",
      },
      {
        title: "Terminaux T1 et T2",
        desc: "Prise en charge et dépose au terminal correspondant à votre vol.",
      },
      {
        title: "Suivi de vol",
        desc: "Numéro de vol au retour : horaire ajusté, pancarte nominative sur demande.",
      },
      {
        title: "Prise en charge à domicile",
        desc: "Centre-ville, lotissement, hôtel, domaine ou village — aide aux bagages.",
      },
      {
        title: "Chauffeurs locaux",
        desc: "Connaissance de l'A8 et des temps réels Dracénie → Nice, sans détour inutile.",
      },
    ],
    serviceAreas: [
      "Vidauban",
      "Draguignan",
      "Les Arcs",
      "Le Muy",
      "Lorgues",
      "Taradeau",
      "Flayosc",
      "Figanières",
      "Trans-en-Provence",
      "Terminaux 1 et 2 — Nice Côte d'Azur",
    ],
    frequentRoutes: [
      {
        title: "Vidauban → aéroport Nice",
        desc: "Transfert direct depuis le centre, domicile ou quartiers périphériques.",
        href: "/taxi-aeroport-vidauban",
      },
      {
        title: "Draguignan → aéroport Nice",
        desc: "Départs privés ou professionnels vers les terminaux 1 et 2.",
        href: "/taxi-aeroport-draguignan",
      },
      {
        title: "Les Arcs → aéroport Nice",
        desc: "Transfert depuis le centre ou après une arrivée en gare TGV.",
        href: "/taxi-les-arcs",
      },
      {
        title: "Le Muy → aéroport Nice",
        desc: "Trajet planifié vers Nice Côte d'Azur depuis Le Muy.",
        href: "/taxi-le-muy",
      },
      {
        title: "Lorgues → aéroport Nice",
        desc: "Transferts depuis le centre, domaines et résidences du secteur.",
        href: "/taxi-lorgues",
      },
    ],
    relatedCities: [
      { label: "Taxi aéroport Vidauban", href: "/taxi-aeroport-vidauban" },
      { label: "Taxi aéroport Draguignan", href: "/taxi-aeroport-draguignan" },
      { label: "Taxi Vidauban", href: "/taxi-vidauban" },
      { label: "Taxi Draguignan", href: "/taxi-draguignan" },
      { label: "Taxi Les Arcs", href: "/taxi-les-arcs" },
      { label: "Taxi Le Muy", href: "/taxi-le-muy" },
      { label: "Taxi Lorgues", href: "/taxi-lorgues" },
    ],
    faq: [
      {
        q: "Quel prix pour un taxi Draguignan → aéroport Nice ?",
        a: "Le tarif dépend de l'adresse exacte, de l'horaire et des caractéristiques du trajet. Nous communiquons le prix avant confirmation au 04 22 46 04 62.",
        aText:
          "Le tarif est communiqué avant confirmation selon l'adresse, l'horaire et le trajet.",
      },
      {
        q: "Combien de temps faut-il entre la Dracénie et l'aéroport de Nice ?",
        a: "Prévoyez généralement environ 1 h à 1 h 30 selon votre commune, le trafic sur l'A8, la saison et le terminal.",
        aText:
          "Environ 1 h à 1 h 30 selon la commune, le trafic et la saison.",
      },
      {
        q: "Peut-on réserver un taxi pour un vol très tôt le matin ?",
        a: "Oui. Les départs de nuit ou très tôt le matin sont possibles sur réservation. Communiquez votre heure de vol afin de déterminer l'heure de prise en charge.",
        aText:
          "Oui, les départs tôt le matin sont possibles sur réservation.",
      },
      {
        q: "Suivez-vous les retards de vol au retour ?",
        a: "Communiquez votre numéro de vol lors de la réservation afin d'organiser la prise en charge à Nice en fonction de votre arrivée.",
        aText:
          "Oui, le numéro de vol permet d'organiser la prise en charge selon l'arrivée.",
      },
      {
        q: "Desserviez-vous les terminaux 1 et 2 de Nice Côte d'Azur ?",
        a: "Oui. Les transferts sont organisés vers le terminal correspondant à votre vol, depuis les principales communes de la Dracénie.",
        aText: "Oui, les transferts desservent les terminaux 1 et 2.",
      },
      {
        q: "Peut-on réserver un taxi depuis Les Arcs ou Le Muy vers Nice Airport ?",
        a: "Oui. Nous organisons des transferts depuis Les Arcs, Le Muy, Vidauban, Draguignan, Lorgues et les autres communes desservies en Dracénie.",
        aText:
          "Oui, les transferts sont possibles depuis Les Arcs, Le Muy et les principales communes de la Dracénie.",
      },
    ],
  },

  "taxi-aeroport-marseille-dracenie": {
    slug: "taxi-aeroport-marseille-dracenie",
    type: "service",
    h1: "Taxi aéroport Marseille depuis la Dracénie",
    title:
      "Taxi aéroport Marseille Dracénie | Transfert Vidauban & Draguignan",
    description:
      "Taxi aéroport Marseille Provence depuis la Dracénie : Vidauban, Draguignan, Les Arcs. Longue distance confortable — 04 22 46 04 62.",
    keywords: [
      "taxi aéroport Marseille Dracénie",
      "taxi Marseille Vidauban",
      "transfert Marseille Provence Var",
    ],
    intro:
      "Marseille Provence est une alternative fréquente pour les vols nationaux et internationaux. Taxis La Dracénie assurent le trajet depuis toute la Dracénie avec véhicule confortable et pause possible sur demande.",
    sections: [
      {
        title: "Itinéraire et durée",
        body: "Environ 1h30 à 2h depuis Draguignan via A8/A57 selon conditions. Départ planifié en fonction de l'heure d'enregistrement recommandée.",
      },
    ],
    relatedCities: [
      { label: "Taxi Draguignan", href: "/taxi-draguignan" },
      { label: "Taxi Vidauban", href: "/taxi-vidauban" },
      { label: "Taxi aéroport Nice", href: "/taxi-aeroport-nice-dracenie" },
      { label: "Taxi Les Arcs", href: "/taxi-les-arcs" },
    ],
    faq: [
      {
        q: "Peut-on partager un taxi vers Marseille aéroport ?",
        a: "Sur demande pour plusieurs passagers du même foyer — précisez le nombre de bagages.",
        aText: "Possible pour plusieurs passagers du même foyer, selon bagages.",
      },
    ],
  },

  "taxi-gare-les-arcs-draguignan": {
    slug: "taxi-gare-les-arcs-draguignan",
    type: "service",
    h1: "Taxi gare Les Arcs-Draguignan — TGV & TER",
    title:
      "Taxi gare Les Arcs Draguignan 24h/24 | Prise en charge TGV & correspondances",
    description:
      "Taxi gare Les Arcs-Draguignan : accueil TGV/TER, transferts Dracénie, aéroports Nice et Marseille. Taxis La Dracénie — 04 22 46 04 62.",
    keywords: [
      "taxi gare Les Arcs Draguignan",
      "taxi gare TGV Les Arcs",
      "taxi gare Draguignan",
    ],
    intro:
      "La gare Les Arcs-Draguignan est le hub ferroviaire de la Dracénie. Taxis La Dracénie accueillent les voyageurs à quai ou au parking, avec suivi des retards SNCF et correspondances vers Draguignan, Vidauban, Le Muy ou un [transfert vers l'aéroport de Nice](/taxi-aeroport-nice-dracenie).",
    sections: [
      {
        title: "Prise en charge à la gare",
        body: "Indiquez votre numéro de train et wagon si possible. Nous vous guidons vers le point de rendez-vous le plus pratique selon l'affluence.",
      },
      {
        title: "Depuis la gare vers la Dracénie",
        body: "Draguignan centre, CHD, Vidauban, Lorgues : tarif annoncé selon destination exacte. Pour la seule liaison [Draguignan ↔ gare Les Arcs](/taxi-draguignan-gare-les-arcs), une page dédiée détaille les quartiers et les deux sens. Cette page reste le point d'entrée pour toute la Dracénie.",
      },
    ],
    relatedCities: [
      { label: "Taxi Les Arcs", href: "/taxi-les-arcs" },
      { label: "Taxi Draguignan", href: "/taxi-draguignan" },
      { label: "Taxi Draguignan ↔ gare Les Arcs", href: "/taxi-draguignan-gare-les-arcs" },
      { label: "Taxi Vidauban", href: "/taxi-vidauban" },
      { label: "Taxi Le Muy", href: "/taxi-le-muy" },
      { label: "Transfert vers Nice Airport", href: "/taxi-aeroport-nice-dracenie" },
    ],
    faq: [
      {
        q: "Où attendre le taxi à la gare Les Arcs ?",
        a: "Sortie principale ou parking taxi — confirmé par SMS ou appel au moment de votre arrivée.",
        aText: "Sortie principale ou parking taxi, confirmé par appel à l'arrivée.",
      },
      {
        q: "Taxi gare Les Arcs la nuit ?",
        a: "Oui, 24h/24. Réservez à l'avance pour les derniers TGV.",
        aText: "Oui 24h/24, réservation conseillée pour les derniers TGV.",
      },
    ],
  },

  "taxi-conventionne-draguignan": {
    slug: "taxi-conventionne-draguignan",
    type: "combo",
    cityName: "Draguignan",
    h1: "Taxi conventionné CPAM à Draguignan",
    title: "Taxi conventionné Draguignan | CHD & transport médical CPAM",
    description:
      "Taxi conventionné à Draguignan : trajets CHD, consultations, radiothérapie, transport médical assis CPAM. Taxis La Dracénie — 04 22 46 04 62.",
    keywords: [
      "taxi conventionné Draguignan",
      "taxi CPAM Draguignan",
      "taxi médical Draguignan",
      "taxi CHD Draguignan",
      "transport assis CPAM Draguignan",
    ],
    intro:
      "À Draguignan, capitale hospitalière de la Dracénie, Taxis La Dracénie accompagnent vos trajets conventionnés CPAM vers le CHD, les cabinets du centre-ville et les communes limitrophes. Vérifiez votre éligibilité au 04 22 46 04 62 — transparence totale sur les formalités avant chaque course.",
    realTransfersTitle: "Trajets conventionnés fréquents à Draguignan",
    realTransfersText:
      "Nous effectuons chaque semaine des trajets Les Selves → CHD, Saint-Hermentaire → imagerie, centre Draguignan → dialyse, et des transferts depuis les villages voisins (Trans-en-Provence, Flayosc, Figanières) vers les consultations dracénoises. Les départs matinaux vers Toulon ou Nice pour la radiothérapie sont organisés sur prescription.",
    sections: [
      {
        title: "CHD Draguignan — cœur de notre activité médicale",
        body: "Urgences, hospitalisation, maternité, imagerie, consultation externe : nous connaissons les accès du Centre Hospitalier de la Dracénie et adaptons l'horaire de prise en charge aux créneaux de rendez-vous. Idéal pour les patients des quartiers Les Selves, Malpassé ou de la périphérie.",
      },
      {
        title: "Consultations & examens en ville",
        body: "Médecins généralistes, spécialistes, laboratoires d'analyses et imagerie privée à Draguignan : précisez l'adresse exacte et l'heure. Nous planifions la marge nécessaire pour le stationnement en centre-ville.",
      },
      {
        title: "Dialyse, kiné & rendez-vous récurrents",
        body: "Les trajets répétés exigent fiabilité. Nous mémorisons vos créneaux habituels lorsque vous réservez une série — même chauffeur si disponible, même point de prise en charge.",
      },
      {
        title: "Depuis les communes voisines vers Draguignan",
        body: "Trans-en-Provence, Flayosc, Figanières, Les Arcs ou Le Muy : le taxi conventionné Draguignan inclut souvent une prise en charge hors commune, sous conditions CPAM et selon distance prescrite.",
      },
      {
        title: "Ce que la CPAM peut (ou non) couvrir",
        body: "L'éligibilité dépend de votre état de santé, de la distance et de la prescription. Nous vous orientons clairement sans promettre un remboursement que seule votre caisse peut confirmer.",
      },
    ],
    frequentRoutes: [
      {
        title: "Les Selves → CHD",
        desc: "Trajet court et fréquent pour consultations hospitalières.",
        href: "/taxi-draguignan",
      },
      {
        title: "Saint-Hermentaire → imagerie CHD",
        desc: "Examens programmés — ponctualité essentielle.",
        href: "/transport-medical-conventionne-dracenie",
      },
      {
        title: "Trans-en-Provence → Draguignan médical",
        desc: "Village voisin → CHD ou cabinet centre-ville.",
        href: "/taxi-trans-en-provence",
      },
      {
        title: "Draguignan → Toulon spécialiste",
        desc: "Sur prescription CPAM lorsque le trajet est éligible.",
        href: "/transport-medical-conventionne-dracenie",
      },
      {
        title: "Retour hospitalisation CHD",
        desc: "Sortie de service — horaire coordonné avec l'établissement.",
        href: "/taxi-conventionne-draguignan",
      },
    ],
    whyChooseTitle: "Pourquoi choisir notre taxi conventionné à Draguignan ?",
    whyChooseUs: [
      {
        title: "Spécialiste CHD",
        desc: "Entrées, parkings et flux du Centre Hospitalier de la Dracénie connus au quotidien.",
      },
      {
        title: "Quartiers maîtrisés",
        desc: "Les Selves, Saint-Hermentaire, Malpassé — prise en charge à domicile précise.",
      },
      {
        title: "CPAM claire",
        desc: "Vérification d'éligibilité avant le trajet — aucune surprise administrative.",
      },
      {
        title: "Trajets récurrents",
        desc: "Dialyse, kiné, imagerie : créneaux planifiés sur plusieurs semaines.",
      },
      {
        title: "24h/24",
        desc: "Consultations matinales ou retours tardifs — un seul numéro.",
      },
      {
        title: "Dracénie entière",
        desc: "Prise en charge possible depuis les villages voisins vers Draguignan médical.",
      },
    ],
    serviceAreas: [
      "Centre-ville Draguignan",
      "Les Selves",
      "Saint-Hermentaire",
      "Malpassé",
      "CHD — toutes entrées",
      "Trans-en-Provence & villages (liaisons)",
    ],
    relatedCities: [
      { label: "Taxi Draguignan", href: "/taxi-draguignan" },
      { label: "Transport médical Dracénie", href: "/transport-medical-conventionne-dracenie" },
      { label: "Taxi conventionné Vidauban", href: "/taxi-conventionne-vidauban" },
    ],
    faq: [
      {
        q: "Taxi conventionné Draguignan : quel délai de réservation ?",
        a: "Pour un rendez-vous médical, réservez 24 à 48 h à l'avance si possible. Urgences : appelez immédiatement.",
        aText: "24 à 48 h à l'avance recommandé ; urgences par appel immédiat.",
      },
      {
        q: "Comment aller au CHD en taxi conventionné ?",
        a: "Appelez le 04 22 46 04 62 avec votre adresse, l'heure du rendez-vous et votre situation CPAM. Nous confirmons l'éligibilité et le tarif.",
        aText:
          "Appelez avec adresse, horaire et situation CPAM pour confirmer éligibilité et tarif.",
      },
      {
        q: "Le taxi conventionné Draguignan couvre-t-il Les Selves ?",
        a: "Oui, prise en charge dans tous les quartiers de Draguignan et communes voisines selon prescription et éligibilité.",
        aText:
          "Oui, tous quartiers de Draguignan et communes voisines selon prescription et éligibilité.",
      },
      {
        q: "Différence taxi conventionné et ambulance ?",
        a: "Le taxi assis convient aux patients autonomes ou semi-autonomes. Pour les urgences vitales ou le transport allongé, contactez le 15 ou un VSL/ambulance adapté.",
        aText:
          "Taxi assis pour patients autonomes ; urgences vitales → 15 ou VSL/ambulance adapté.",
      },
    ],
  },

  "taxi-conventionne-vidauban": {
    slug: "taxi-conventionne-vidauban",
    type: "combo",
    cityName: "Vidauban",
    h1: "Taxi conventionné CPAM à Vidauban",
    title: "Taxi conventionné Vidauban | Transport médical Dracénie & CPAM",
    description:
      "Taxi conventionné à Vidauban : trajets médicaux vers Draguignan, CHD et spécialistes. CPAM selon éligibilité — 04 22 46 04 62.",
    keywords: ["taxi conventionné Vidauban", "taxi CPAM Vidauban", "transport médical Vidauban"],
    intro:
      "Depuis Vidauban, base de Taxis La Dracénie, nous organisons vos trajets médicaux conventionnés vers Draguignan, le CHD ou les praticiens du Var. Transparence sur l'éligibilité CPAM dès le premier appel.",
    sections: [
      {
        title: "Depuis Vidauban",
        body: "Prise en charge au centre, en lotissement ou hameau. Trajets réguliers vers la gare Les Arcs pour les correspondances médicales hors Dracénie.",
      },
    ],
    relatedCities: [
      { label: "Taxi Vidauban", href: "/taxi-vidauban" },
      { label: "Taxi conventionné Draguignan", href: "/taxi-conventionne-draguignan" },
      { label: "Taxi conventionné Dracénie", href: "/taxi-conventionne-dracenie" },
    ],
    faq: [
      {
        q: "Peut-on aller au CHD en taxi conventionné depuis Vidauban ?",
        a: "Oui, sous conditions CPAM. Précisez le service hospitalier visé lors de l'appel.",
        aText: "Oui sous conditions CPAM, en précisant le service hospitalier.",
      },
    ],
  },

  "taxi-aeroport-vidauban": {
    slug: "taxi-aeroport-vidauban",
    type: "combo",
    cityName: "Vidauban",
    h1: "Taxi aéroport depuis Vidauban — Nice & Marseille",
    title: "Taxi aéroport Vidauban | Transfert Nice & Marseille Provence",
    description:
      "Taxi aéroport depuis Vidauban vers Nice Côte d'Azur ou Marseille Provence. Prise en charge à domicile, horaire calé sur votre vol, tarif annoncé — 04 22 46 04 62.",
    keywords: [
      "taxi aéroport Vidauban",
      "transfert Nice Vidauban",
      "taxi Vidauban aéroport",
      "taxi Vidauban Nice Côte d'Azur",
      "Vidauban Marseille Provence taxi",
    ],
    intro:
      "Depuis Vidauban, Taxis La Dracénie organise vos transferts vers l'aéroport Nice Côte d'Azur (terminaux 1 et 2) et, si votre vol le justifie, vers Marseille Provence. Prise en charge au centre, en lotissement ou dans un hameau, horaire adapté à votre vol et tarif communiqué avant confirmation.",
    realTransfersTitle: "Transferts aéroport depuis Vidauban",
    realTransfersText:
      "Les départs matinaux Vidauban → Nice Côte d'Azur font partie des courses longues les plus demandées depuis le centre et les lotissements. Nous organisons aussi des retours depuis les terminaux 1 et 2 vers Vidauban, ainsi que des correspondances après une arrivée en gare Les Arcs-Draguignan. Le numéro de vol permet d'ajuster la prise en charge au retour.",
    sections: [
      {
        title: "Combien de temps entre Vidauban et Nice Airport ?",
        body: "Comptez généralement environ 1 h à 1 h 20 selon l'heure, le trafic sur l'A8 et votre adresse exacte à Vidauban. Ce n'est pas un temps garanti : nous ajoutons une marge pour l'enregistrement et les contrôles, surtout en juillet–août.",
      },
      {
        title: "Départs tôt le matin depuis Vidauban",
        body: "Un vol entre 6 h et 8 h à Nice implique souvent une prise en charge de nuit depuis Vidauban. Le service fonctionne sur réservation 24h/24. Indiquez l'heure du vol, le terminal et l'adresse : nous calculons l'horaire de départ.",
      },
      {
        title: "Nice ou Marseille depuis Vidauban ?",
        body: "Nice est en général plus rapide depuis Vidauban. Marseille Provence convient surtout aux vols non proposés à Nice ou à certains long-courriers. Pour un transfert depuis une autre commune, voir le [taxi vers Nice depuis la Dracénie](/taxi-aeroport-nice-dracenie).",
      },
      {
        title: "Retour Nice Airport → Vidauban",
        body: "Communiquez votre numéro de vol : la prise en charge peut être ajustée en cas de retard. Pancarte nominative possible. Dépose au domicile, au centre-ville ou, si besoin, vers la gare Les Arcs-Draguignan.",
      },
      {
        title: "Bagages et prise en charge à domicile",
        body: "Précisez le nombre de passagers et de valises. Nous intervenons au centre de Vidauban, en lotissement ou vers Le Luc / Le Cannet (secteur). Aide aux bagages incluse dans l'organisation de la course.",
      },
      {
        title: "Tarif annoncé avant confirmation",
        body: "Pour un trajet défini Vidauban → aéroport, le tarif est communiqué au 04 22 46 04 62 avant validation. Il dépend de l'adresse, de l'horaire et des caractéristiques de la course — aucun montant n'est inventé sur cette page.",
      },
    ],
    whyChooseTitle: "Pourquoi un taxi aéroport depuis Vidauban ?",
    whyChooseUs: [
      {
        title: "Départ de chez vous",
        desc: "Centre, lotissement ou hameau — pas de parking aéroport à gérer.",
      },
      {
        title: "Horaire calé sur le vol",
        desc: "Marge A8 et enregistrement : nous partons à l'heure utile, y compris de nuit.",
      },
      {
        title: "Nice et Marseille",
        desc: "Nice en priorité ; Marseille lorsque le billet l'impose.",
      },
      {
        title: "Suivi de vol au retour",
        desc: "Numéro de vol + pancarte sur demande à la sortie du terminal.",
      },
      {
        title: "Tarif avant de partir",
        desc: "Prix annoncé au téléphone pour un trajet défini.",
      },
      {
        title: "Correspondance gare",
        desc: "Enchaînement possible gare Les Arcs-Draguignan puis aéroport, sur deux courses planifiées.",
      },
    ],
    serviceAreas: [
      "Centre-ville de Vidauban",
      "Lotissements et hameaux",
      "Secteur Le Luc / Le Cannet",
      "Terminaux 1 et 2 — Nice Côte d'Azur",
      "Aéroport Marseille Provence",
    ],
    frequentRoutes: [
      {
        title: "Vidauban → Nice Côte d'Azur",
        desc: "Transfert direct, T1 ou T2 selon votre vol.",
        href: "/taxi-aeroport-nice-dracenie",
      },
      {
        title: "Vidauban → Marseille Provence",
        desc: "Alternative long-courrier, horaire planifié.",
        href: "/taxi-aeroport-marseille-dracenie",
      },
      {
        title: "Vidauban → gare Les Arcs",
        desc: "TGV / TER avant une correspondance avion.",
        href: "/taxi-gare-les-arcs-draguignan",
      },
      {
        title: "Taxi à Vidauban",
        desc: "Courses locales et autres trajets depuis la commune.",
        href: "/taxi-vidauban",
      },
    ],
    relatedCities: [
      { label: "Taxi Vidauban", href: "/taxi-vidauban" },
      { label: "Taxi vers Nice depuis la Dracénie", href: "/taxi-aeroport-nice-dracenie" },
      { label: "Taxi aéroport Marseille", href: "/taxi-aeroport-marseille-dracenie" },
      { label: "Taxi aéroport Draguignan", href: "/taxi-aeroport-draguignan" },
    ],
    faq: [
      {
        q: "Départ Vidauban aéroport Nice : quelle heure ?",
        a: "Nous recommandons de partir 2h30 à 3h avant l'enregistrement en été, davantage de marge en cas de vol long-courrier. L'horaire exact se calcule au téléphone selon votre adresse à Vidauban.",
        aText:
          "2h30 à 3h avant enregistrement en été ; l'horaire se calcule selon l'adresse à Vidauban.",
      },
      {
        q: "Combien de temps faut-il entre Vidauban et Nice Airport ?",
        a: "Environ 1 h à 1 h 20 selon le trafic A8 et le point de départ. Ce n'est pas un temps garanti.",
        aText: "Environ 1 h à 1 h 20 selon trafic et adresse, sans garantie.",
      },
      {
        q: "Le prix Vidauban → Nice est-il annoncé à l'avance ?",
        a: "Oui, pour un trajet défini. Appelez le 04 22 46 04 62 : le tarif est communiqué avant confirmation.",
        aText: "Oui, tarif communiqué au téléphone avant confirmation.",
      },
      {
        q: "Peut-on partir très tôt le matin depuis Vidauban ?",
        a: "Oui, sur réservation. Les vols matinaux à Nice impliquent souvent un départ de nuit.",
        aText: "Oui, départs de nuit sur réservation pour les vols matinaux.",
      },
      {
        q: "Suivez-vous les retards au retour vers Vidauban ?",
        a: "Communiquez le numéro de vol : nous ajustons la prise en charge à Nice.",
        aText: "Oui, avec le numéro de vol pour ajuster l'arrivée à Nice.",
      },
      {
        q: "Faut-il passer par la page Dracénie ou rester sur Vidauban ?",
        a: "Cette page concerne les départs depuis Vidauban. Pour une autre commune, utilisez le service régional vers Nice Côte d'Azur.",
        aText:
          "Cette page est dédiée à Vidauban ; les autres communes passent par le service régional.",
      },
    ],
  },

  "taxi-aeroport-draguignan": {
    slug: "taxi-aeroport-draguignan",
    type: "combo",
    cityName: "Draguignan",
    h1: "Taxi aéroport depuis Draguignan — Nice & Marseille",
    title: "Taxi aéroport Draguignan | Nice Côte d'Azur & Marseille Provence",
    description:
      "Taxi aéroport depuis Draguignan vers Nice Côte d'Azur ou Marseille. Les Selves, Malpassé, centre-ville : horaire A8, terminal T1/T2, tarif annoncé — 04 22 46 04 62.",
    keywords: [
      "taxi aéroport Draguignan",
      "transfert Nice Draguignan",
      "taxi Draguignan Nice",
      "taxi Draguignan Nice Côte d'Azur",
      "Draguignan Marseille Provence taxi",
    ],
    intro:
      "Depuis Draguignan (centre, Les Selves, Malpassé, Saint-Hermentaire ou périphérie), Taxis La Dracénie calcule l'heure de départ selon le trafic A8 et votre terminal à Nice Côte d'Azur. Marseille Provence reste possible lorsque le vol n'existe pas à Nice. Tarif communiqué avant confirmation.",
    realTransfersTitle: "Transferts aéroport depuis Draguignan",
    realTransfersText:
      "Nous organisons régulièrement des départs matinaux Draguignan → Nice Côte d'Azur, des retours vers les quartiers dracénois, et des correspondances vers la gare Les Arcs-Draguignan si vous enchaînez un train. Ce n'est pas un trajet médical : pour le CHD ou le Centre Antoine Lacassagne, d'autres pages s'appliquent.",
    sections: [
      {
        title: "Combien de temps entre Draguignan et Nice Airport ?",
        body: "Comptez généralement environ 1 h à 1 h 30 selon le quartier de départ, l'heure et le trafic sur l'A8. En haute saison, prévoyez une marge supplémentaire. L'horaire de prise en charge se calcule à partir de l'heure d'arrivée souhaitée au terminal, pas seulement de la durée théorique.",
      },
      {
        title: "Départs matinaux depuis Draguignan",
        body: "Les vols tôt à Nice demandent souvent un départ avant 6 h depuis Draguignan. Service sur réservation 24h/24. Indiquez l'heure du vol, le terminal (T1 ou T2) et l'adresse exacte.",
      },
      {
        title: "Terminal 1 ou 2 depuis Draguignan",
        body: "Vérifiez le terminal sur votre billet. En cas de doute, communiquez le numéro de vol au 04 22 46 04 62. Une erreur de terminal allonge l'arrivée à Nice.",
      },
      {
        title: "Retour Nice Airport → Draguignan",
        body: "Accueil avec pancarte sur demande, suivi des retards via le numéro de vol. Trajet direct vers votre domicile ou, si correspondance, vers la gare Les Arcs-Draguignan.",
      },
      {
        title: "Nice, Marseille ou trajet médical ?",
        body: "Cette page concerne uniquement les vols. Pour un transfert depuis une autre commune, utilisez le [service de taxi vers Nice Côte d'Azur](/taxi-aeroport-nice-dracenie). Marseille : page dédiée. Un rendez-vous hospitalier à Nice n'est pas le même trajet qu'un vol.",
      },
      {
        title: "Tarif Draguignan → aéroport",
        body: "Le montant est annoncé au téléphone avant confirmation, selon adresse, horaire (jour/nuit) et bagages. Aucun prix n'est affiché ici en dur.",
      },
    ],
    whyChooseTitle: "Pourquoi réserver un taxi aéroport à Draguignan ?",
    whyChooseUs: [
      {
        title: "Quartiers connus",
        desc: "Les Selves, Malpassé, Saint-Hermentaire, centre : prise en charge à l'adresse.",
      },
      {
        title: "Marge A8",
        desc: "Départ calé sur le vol, pas sur un temps théorique.",
      },
      {
        title: "T1 et T2",
        desc: "Dépose et retour au terminal de votre compagnie.",
      },
      {
        title: "Retour suivi",
        desc: "Numéro de vol, retard, pancarte — reprise à Nice vers Draguignan.",
      },
      {
        title: "Tarif annoncé",
        desc: "Prix communiqué avant de valider la course.",
      },
      {
        title: "Gare si besoin",
        desc: "Correspondance possible vers Les Arcs-Draguignan, en course séparée.",
      },
    ],
    serviceAreas: [
      "Centre-ville Draguignan",
      "Les Selves",
      "Malpassé",
      "Saint-Hermentaire",
      "Terminaux 1 et 2 — Nice Côte d'Azur",
      "Aéroport Marseille Provence",
    ],
    frequentRoutes: [
      {
        title: "Draguignan → Nice Côte d'Azur",
        desc: "Transfert vol, T1 ou T2.",
        href: "/taxi-aeroport-nice-dracenie",
      },
      {
        title: "Draguignan → Marseille Provence",
        desc: "Lorsque le vol part de Marignane.",
        href: "/taxi-aeroport-marseille-dracenie",
      },
      {
        title: "Draguignan → gare Les Arcs",
        desc: "Correspondance TGV / TER.",
        href: "/taxi-draguignan-gare-les-arcs",
      },
      {
        title: "Taxi à Draguignan",
        desc: "Courses locales, CHD et autres trajets.",
        href: "/taxi-draguignan",
      },
    ],
    relatedCities: [
      { label: "Taxi Draguignan", href: "/taxi-draguignan" },
      { label: "Service de taxi vers Nice Côte d'Azur", href: "/taxi-aeroport-nice-dracenie" },
      { label: "Taxi gare Les Arcs", href: "/taxi-gare-les-arcs-draguignan" },
      { label: "Taxi aéroport Vidauban", href: "/taxi-aeroport-vidauban" },
    ],
    faq: [
      {
        q: "Combien coûte un taxi Draguignan → Nice ?",
        a: "Forfait annoncé au téléphone selon destination exacte et horaire (jour/nuit). Appelez le 04 22 46 04 62.",
        aText: "Forfait annoncé par téléphone selon destination et horaire.",
      },
      {
        q: "Combien de temps entre Draguignan et l'aéroport de Nice ?",
        a: "Environ 1 h à 1 h 30 selon le quartier et le trafic A8. Ce n'est pas un temps garanti.",
        aText: "Environ 1 h à 1 h 30 selon quartier et trafic, sans garantie.",
      },
      {
        q: "Peut-on réserver un départ très tôt depuis Draguignan ?",
        a: "Oui, sur réservation. Les vols matinaux impliquent souvent une prise en charge avant 6 h.",
        aText: "Oui, départs avant 6 h possibles sur réservation.",
      },
      {
        q: "Suivez-vous les retards de vol au retour ?",
        a: "Oui, avec le numéro de vol. Pancarte nominative possible à Nice.",
        aText: "Oui, numéro de vol et pancarte possible au retour.",
      },
      {
        q: "Est-ce le même trajet que le CHD ou le Centre Antoine Lacassagne ?",
        a: "Non. Cette page concerne les vols. Un rendez-vous médical à Nice ou au CHD se réserve à part.",
        aText: "Non : vols uniquement, distinct du médical CHD ou Lacassagne.",
      },
      {
        q: "Et si je pars d'une autre commune que Draguignan ?",
        a: "Utilisez le service régional vers Nice Côte d'Azur, ou la page Vidauban si vous partez de Vidauban.",
        aText: "Autre commune : service régional Nice, ou page Vidauban si départ Vidauban.",
      },
    ],
  },

  "taxi-draguignan-gare-les-arcs": {
    slug: "taxi-draguignan-gare-les-arcs",
    type: "combo",
    cityName: "Draguignan",
    h1: "Taxi Draguignan ↔ gare Les Arcs — TGV & TER",
    title:
      "Taxi Draguignan gare Les Arcs | Liaison TGV & TER sur réservation",
    description:
      "Taxi Draguignan ↔ gare Les Arcs-Draguignan : centre-ville, Les Selves, Malpassé, Saint-Hermentaire. TGV, TER, départs matinaux et retours tardifs sur réservation — 04 22 46 04 62.",
    keywords: [
      "taxi Draguignan gare Les Arcs",
      "taxi Draguignan gare TGV",
      "taxi gare Les Arcs depuis Draguignan",
      "taxi Les Selves gare Les Arcs",
      "taxi Malpassé gare TGV",
    ],
    intro:
      "Draguignan n'a pas de gare en ville : les TGV et TER partent de Les Arcs-Draguignan. Taxis La Dracénie organise, sur réservation, la liaison dans les deux sens — prise en charge à Draguignan (centre, Les Selves, Malpassé, Saint-Hermentaire) ou reprise à la sortie du train. Pour une autre commune, utilisez le [taxi gare Les Arcs en Dracénie](/taxi-gare-les-arcs-draguignan).",
    realTransfersTitle: "Draguignan ↔ gare Les Arcs-Draguignan",
    realTransfersText:
      "Les demandes les plus fréquentes : un départ matinal depuis le centre ou Les Selves pour un TGV Paris / Lyon, un retour tardif vers Malpassé ou Saint-Hermentaire, et des TER de semaine avec valises. Le numéro de train permet d'ajuster l'horaire si le train est annoncé en retard. Ce n'est pas une page taxi généraliste : les courses CHD, aéroport ou intra-muros se réservent à part.",
    sections: [
      {
        title: "Départ depuis Draguignan vers la gare",
        body: "Indiquez l'adresse exacte à Draguignan, l'heure du train et, si possible, le numéro. Nous calculons l'horaire de prise en charge avec une marge pour le trafic et l'accès aux quais — surtout pour un TGV tôt le matin. Ce n'est pas un temps de trajet garanti : depuis le centre, comptez souvent de l'ordre d'une quinzaine de minutes, davantage aux heures de pointe ou depuis un quartier plus éloigné.",
      },
      {
        title: "Retour gare → Draguignan",
        body: "À l'arrivée, communiquez le numéro de train : le point de rendez-vous (sortie principale ou parking) est confirmé par appel. En cas de retard SNCF, la reprise peut être décalée. Dépose au domicile, au centre-ville, aux Selves, à Malpassé ou à Saint-Hermentaire — précisez l'étage ou le code d'accès si besoin.",
      },
      {
        title: "TGV, TER et départs matinaux",
        body: "Les TGV vers Paris, Lyon ou Marseille se jouent souvent à quelques minutes. Un TER de semaine demande moins de marge, mais un départ avant 7 h depuis Draguignan se réserve à l'avance. Service 24h/24 sur réservation : derniers trains et arrivées tardives compris.",
      },
      {
        title: "Centre-ville, Les Selves, Malpassé, Saint-Hermentaire",
        body: "La prise en charge se fait à l'adresse, sur réservation — pas de station de taxi revendiquée dans chaque quartier. Les Selves et le centre sont les départs les plus demandés vers la gare ; Malpassé et Saint-Hermentaire reviennent surtout au retour, avec bagages. Adresse complète + horaire du train suffisent pour caler la course.",
      },
      {
        title: "Bagages, retards et correspondances",
        body: "Précisez le nombre de passagers et de valises. Un retard de train se gère avec le numéro communiqué. Une correspondance vers l'aéroport de Nice ou un rendez-vous au CHD n'est pas le même trajet : ce sont deux courses à planifier, chacune avec son horaire.",
      },
      {
        title: "Réserver à l'avance — tarif annoncé",
        body: "Pour un TGV, réservez dès que l'horaire est connu, surtout en vacances scolaires. Le tarif de la liaison Draguignan ↔ gare est communiqué au 04 22 46 04 62 avant confirmation, selon l'adresse, l'horaire (jour/nuit) et les bagages. Aucun montant n'est affiché ici en dur.",
      },
    ],
    whyChooseTitle: "Pourquoi réserver cette liaison ?",
    whyChooseUs: [
      {
        title: "Les deux sens",
        desc: "Draguignan → gare pour le départ, gare → Draguignan au retour, sur le même numéro.",
      },
      {
        title: "Quartiers nommés",
        desc: "Centre, Les Selves, Malpassé, Saint-Hermentaire : prise en charge à l'adresse.",
      },
      {
        title: "Numéro de train",
        desc: "Horaire calé sur le TGV ou le TER, y compris en cas de retard annoncé.",
      },
      {
        title: "Matin et nuit",
        desc: "Départs avant 7 h et derniers trains : service sur réservation 24h/24.",
      },
      {
        title: "Bagages inclus",
        desc: "Aide aux valises à l'adresse et à la gare, selon le véhicule convenu.",
      },
      {
        title: "Tarif avant de partir",
        desc: "Prix annoncé au téléphone pour un trajet Draguignan ↔ gare défini.",
      },
    ],
    serviceAreas: [
      "Centre-ville de Draguignan",
      "Les Selves",
      "Malpassé",
      "Saint-Hermentaire",
      "Gare Les Arcs-Draguignan",
    ],
    frequentRoutes: [
      {
        title: "Taxi gare Les Arcs (Dracénie)",
        desc: "Hub régional : toutes les communes vers la gare.",
        href: "/taxi-gare-les-arcs-draguignan",
      },
      {
        title: "Taxi à Draguignan",
        desc: "Courses locales, CHD et autres trajets en ville.",
        href: "/taxi-draguignan",
      },
      {
        title: "Taxi aux Arcs",
        desc: "Gare, centre-ville et correspondances depuis Les Arcs.",
        href: "/taxi-les-arcs",
      },
      {
        title: "Draguignan → aéroport Nice",
        desc: "Transfert vol, distinct de la liaison ferroviaire.",
        href: "/taxi-aeroport-draguignan",
      },
    ],
    relatedCities: [
      { label: "Taxi gare Les Arcs (Dracénie)", href: "/taxi-gare-les-arcs-draguignan" },
      { label: "Taxi Draguignan", href: "/taxi-draguignan" },
      { label: "Taxi Les Arcs", href: "/taxi-les-arcs" },
      { label: "Taxi aéroport Draguignan", href: "/taxi-aeroport-draguignan" },
    ],
    faq: [
      {
        q: "Combien de temps entre Draguignan et la gare Les Arcs ?",
        a: "Souvent de l'ordre d'une quinzaine de minutes depuis le centre-ville, davantage depuis certains quartiers ou en heure de pointe. Ce n'est pas un temps garanti : l'horaire de prise en charge se calcule au téléphone selon l'adresse et l'heure du train.",
        aText:
          "Souvent une quinzaine de minutes depuis le centre, davantage selon quartier et trafic — sans garantie.",
      },
      {
        q: "Faut-il réserver à l'avance un taxi Draguignan → gare ?",
        a: "Oui, surtout pour un TGV matinal, un dernier train ou les vacances scolaires. Appelez le 04 22 46 04 62 dès que vous connaissez l'horaire. La prise en charge à Draguignan se fait sur réservation.",
        aText:
          "Oui, surtout TGV matinaux et derniers trains — prise en charge sur réservation.",
      },
      {
        q: "Suivez-vous les retards de train au retour vers Draguignan ?",
        a: "Communiquez le numéro de train : si la SNCF annonce un retard, la reprise à la gare peut être ajustée. Le point exact (sortie ou parking) est confirmé à l'arrivée.",
        aText:
          "Oui, avec le numéro de train : la reprise à la gare peut être ajustée en cas de retard.",
      },
      {
        q: "Prenez-vous en charge Les Selves, Malpassé ou Saint-Hermentaire ?",
        a: "Oui, sur réservation à l'adresse indiquée. Ce n'est pas une station de taxi dans chaque quartier : nous organisons la course depuis ou vers ces secteurs de Draguignan.",
        aText:
          "Oui, prise en charge sur réservation à l'adresse — Les Selves, Malpassé, Saint-Hermentaire ou centre.",
      },
      {
        q: "Peut-on partir très tôt le matin depuis Draguignan vers la gare ?",
        a: "Oui. Un TGV avant 8 h implique souvent une prise en charge avant 7 h. Le service fonctionne 24h/24 sur réservation.",
        aText: "Oui, départs avant 7 h possibles sur réservation pour les TGV matinaux.",
      },
      {
        q: "Que faire en cas d'arrivée tardive à la gare Les Arcs ?",
        a: "Réservez le retour gare → Draguignan en indiquant le numéro du train. Nous confirmons le point de rendez-vous à l'arrivée, y compris en soirée ou de nuit.",
        aText:
          "Réservez le retour avec le numéro de train ; rendez-vous confirmé à l'arrivée, y compris de nuit.",
      },
      {
        q: "Quelle différence avec la page taxi Draguignan ou le hub gare ?",
        a: "Cette page concerne uniquement Draguignan ↔ gare Les Arcs. La page taxi Draguignan couvre CHD, aéroport et courses locales. Le hub gare sert toute la Dracénie (Vidauban, Le Muy, Lorgues…).",
        aText:
          "Ici : liaison Draguignan ↔ gare. Taxi Draguignan = général. Hub gare = toute la Dracénie.",
      },
    ],
  },
};

export const services = hydrateContactStrings(rawServices);

export function getServiceBySlug(slug) {
  return services[slug] || null;
}

export function getAllServiceSlugs() {
  return Object.keys(services);
}

export function getPageBySlug(slug) {
  const city = getServiceBySlug(slug);
  if (city) return { kind: "service", data: city };
  return null;
}
