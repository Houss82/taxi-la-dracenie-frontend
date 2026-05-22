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
      "Taxi aéroport Nice Dracénie | Vidauban, Draguignan, Les Arcs — prix fixe",
    description:
      "Transfert taxi aéroport Nice Côte d'Azur depuis Vidauban, Draguignan, Les Arcs et toute la Dracénie. Prix annoncé, suivi de vol — 04 22 46 04 62.",
    keywords: [
      "taxi aéroport Nice Dracénie",
      "taxi Nice Vidauban",
      "taxi Nice Draguignan",
      "transfert aéroport Nice Var",
    ],
    intro:
      "Depuis la Dracénie, l'aéroport Nice Côte d'Azur est la porte aérienne la plus pratique. Taxis La Dracénie proposent des transferts depuis Vidauban, Draguignan, Les Arcs ou Le Muy avec horaire calé sur votre vol et tarif communiqué à l'avance.",
    sections: [
      {
        title: "Durée indicative",
        body: "Comptez environ 1h à 1h30 depuis Draguignan ou Vidauban selon trafic sur l'A8 et la Moyenne Corniche. Nous partons avec une marge de sécurité.",
      },
      {
        title: "Arrivée à Nice",
        body: "Prise en charge au terminal avec pancarte nominative sur demande. Aide bagages incluse.",
      },
    ],
    relatedCities: [
      { label: "Taxi aéroport Vidauban", href: "/taxi-aeroport-vidauban" },
      { label: "Taxi aéroport Draguignan", href: "/taxi-aeroport-draguignan" },
      { label: "Taxi Vidauban", href: "/taxi-vidauban" },
      { label: "Taxi Draguignan", href: "/taxi-draguignan" },
    ],
    faq: [
      {
        q: "Quel prix pour un taxi Draguignan → Nice aéroport ?",
        a: "Le tarif dépend de l'heure et du trafic. Nous annonçons un prix fixe avant confirmation — appelez le 04 22 46 04 62.",
        aText: "Prix fixe annoncé par téléphone avant confirmation de la réservation.",
      },
      {
        q: "Suivez-vous les retards de vol ?",
        a: "Oui, communiquez-nous votre numéro de vol pour ajuster la prise en charge.",
        aText: "Oui, avec le numéro de vol pour ajuster la prise en charge.",
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
      "La gare Les Arcs-Draguignan est le hub ferroviaire de la Dracénie. Taxis La Dracénie accueillent les voyageurs à quai ou au parking, avec suivi des retards SNCF et correspondances vers Draguignan, Vidauban, Le Muy ou les aéroports.",
    sections: [
      {
        title: "Prise en charge à la gare",
        body: "Indiquez votre numéro de train et wagon si possible. Nous vous guidons vers le point de rendez-vous le plus pratique selon l'affluence.",
      },
      {
        title: "Depuis la gare vers la Dracénie",
        body: "Draguignan centre, CHD, Vidauban, Lorgues : tarif annoncé selon destination exacte.",
      },
    ],
    relatedCities: [
      { label: "Taxi Les Arcs", href: "/taxi-les-arcs" },
      { label: "Taxi Draguignan", href: "/taxi-draguignan" },
      { label: "Taxi Vidauban", href: "/taxi-vidauban" },
      { label: "Taxi Le Muy", href: "/taxi-le-muy" },
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
      "Taxi aéroport depuis Vidauban vers Nice ou Marseille. Prix fixe, prise en charge domicile — Taxis La Dracénie 04 22 46 04 62.",
    keywords: ["taxi aéroport Vidauban", "transfert Nice Vidauban", "taxi Vidauban aéroport"],
    intro:
      "Vidauban est idéalement située pour rejoindre Nice ou Marseille sans stress. Taxis La Dracénie partent de votre domicile avec l'horaire adapté à votre vol et un tarif confirmé par téléphone.",
    sections: [
      {
        title: "Nice ou Marseille ?",
        body: "Nice est souvent plus rapide (~1h15). Marseille convient à certains vols long-courrier — nous vous aidons à choisir selon votre itinerary.",
      },
    ],
    relatedCities: [
      { label: "Taxi Vidauban", href: "/taxi-vidauban" },
      { label: "Taxi aéroport Nice Dracénie", href: "/taxi-aeroport-nice-dracenie" },
      { label: "Taxi aéroport Marseille", href: "/taxi-aeroport-marseille-dracenie" },
    ],
    faq: [
      {
        q: "Départ Vidauban aéroport Nice : quelle heure ?",
        a: "Nous recommandons de partir 2h30 à 3h avant l'enregistrement en été, 2h en basse saison.",
        aText: "2h30 à 3h avant enregistrement en été, 2h en basse saison.",
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
      "Transfert aéroport depuis Draguignan : Nice et Marseille, prix fixe, suivi de vol. Taxis La Dracénie — 04 22 46 04 62.",
    keywords: ["taxi aéroport Draguignan", "transfert Nice Draguignan", "taxi Draguignan Nice"],
    intro:
      "Depuis Draguignan centre ou périphérie, évitez le stress du vol : Taxis La Dracénie calculent l'heure de départ selon le trafic A8 et votre terminal.",
    sections: [
      {
        title: "Retour aéroport → Draguignan",
        body: "Accueil avec pancarte, suivi des retards. Trajet direct vers votre domicile ou la gare Les Arcs si correspondance.",
      },
    ],
    relatedCities: [
      { label: "Taxi Draguignan", href: "/taxi-draguignan" },
      { label: "Taxi aéroport Nice Dracénie", href: "/taxi-aeroport-nice-dracenie" },
      { label: "Taxi gare Les Arcs", href: "/taxi-gare-les-arcs-draguignan" },
    ],
    faq: [
      {
        q: "Combien coûte un taxi Draguignan → Nice ?",
        a: "Forfait annoncé au téléphone selon destination exacte et horaire (jour/nuit).",
        aText: "Forfait annoncé par téléphone selon destination et horaire.",
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
