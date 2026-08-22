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
      { label: "Taxi aéroport Marseille", href: "/taxi-aeroport-marseille-dracenie" },
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
      "L'aéroport Marseille Provence (Marignane) se réserve surtout lorsque votre vol n'existe pas à Nice, ou lorsque l'horaire et le billet le justifient malgré une route plus longue. Sur réservation, Taxis La Dracénie organise l'aller Dracénie → Marseille Provence et le retour vers votre commune. Pour comparer avec le trajet plus court vers Nice, voir le [taxi aéroport Nice depuis la Dracénie](/taxi-aeroport-nice-dracenie).",
    realTransfersTitle: "Exemples de transferts vers Marseille Provence",
    realTransfersText:
      "Aller depuis une adresse en Dracénie (par exemple Draguignan, Vidauban, Les Arcs, Le Muy ou Lorgues) jusqu'au terminal indiqué sur le billet ; retour depuis Marseille Provence vers le domicile ou un hébergement ; enchaînement éventuel après une arrivée en gare Les Arcs-Draguignan — chaque tronçon se réserve à part. L'heure de prise en charge se calcule à partir de l'heure d'arrivée souhaitée à l'aéroport, pas seulement de la durée théorique de conduite.",
    sections: [
      {
        title: "Taxi entre la Dracénie et Marseille Provence",
        body: "La prise en charge se fait à l'adresse communiquée — domicile, hôtel ou point de rendez-vous — sur réservation. Les départs les plus demandés partent de Draguignan, Vidauban, Les Arcs, Le Muy ou Lorgues ; d'autres communes de la Dracénie sont possibles selon la course. Indiquez la date, l'heure du vol et le terminal (T1 ou T2) si vous le connaissez.",
      },
      {
        title: "Temps de trajet et anticipation",
        body: "Depuis Draguignan, comptez généralement environ 1 h 30 à 2 h selon les conditions. Depuis Vidauban ou Les Arcs, la fourchette reste du même ordre, selon l'accès à l'A8 et l'adresse exacte. Ce n'est pas un temps garanti : horaire, circulation, travaux ou haute saison peuvent allonger le trajet. L'itinéraire habituel emprunte surtout l'A8 puis les accès vers Marignane. Ajoutez toujours une marge pour l'enregistrement et les contrôles recommandés par votre compagnie.",
      },
      {
        title: "Vols tôt le matin depuis la Dracénie",
        body: "Un vol vers 7 h à Marseille implique souvent un départ de nuit depuis la Dracénie : durée de route + marge d'enregistrement. Réservez dès que l'horaire est connu. Communiquez l'adresse exacte, l'heure du vol, le terminal, le nombre de passagers et les bagages — nous en déduisons une heure de prise en charge réaliste.",
      },
      {
        title: "Retour Marseille Provence → Dracénie",
        body: "Le retour se réserve aussi à l'avance. Indiquez le numéro de vol, le terminal d'arrivée, la destination en Dracénie, les passagers et les bagages. Le point de rendez-vous (terminal, sortie) est convenu à la réservation — distinct de la file de taxis officielle de l'aéroport. Si l'horaire d'arrivée change de façon importante, prévenez le 04 22 46 04 62.",
      },
      {
        title: "Bagages, familles et professionnels",
        body: "Un transfert vers Marseille est souvent un départ vacances ou un long-courrier. Précisez le nombre de passagers et de valises, ainsi que tout bagage hors format, pour adapter la course. Le tarif est communiqué avant confirmation selon adresse, horaire et caractéristiques du trajet — aucun prix n'est affiché ici en dur.",
      },
      {
        title: "Nice ou Marseille depuis la Dracénie ?",
        body: "Nice Côte d'Azur est en général plus court en temps de route (souvent environ 1 h à 1 h 30 depuis Draguignan). Marseille Provence convient surtout aux vols non proposés à Nice, à certains long-courriers, ou lorsque le billet et l'horaire le rendent plus pertinent malgré la distance. Le bon choix dépend de la destination aérienne, de la compagnie, de l'horaire et du point de départ — pas d'une règle unique. Pour Nice : [taxi aéroport Nice Dracénie](/taxi-aeroport-nice-dracenie).",
      },
      {
        title: "Tarif et réservation",
        body: "Le tarif est communiqué lors de la réservation, avant validation. Pour un devis utile, indiquez l'adresse de départ ou de destination en Dracénie, la date, l'heure du vol, le terminal si connu, le numéro de vol, le nombre de passagers et de bagages, et s'il s'agit d'un aller, d'un retour ou des deux. Appelez le 04 22 46 04 62 ou utilisez le formulaire de réservation.",
      },
    ],
    whyChooseTitle: "Pourquoi réserver ce transfert Marseille ?",
    whyChooseUs: [
      {
        title: "Sur réservation",
        desc: "Aller et retour planifiés selon votre vol — y compris un départ de nuit.",
      },
      {
        title: "Longue distance",
        desc: "Course Dracénie → Marignane anticipée avec marge trafic et enregistrement.",
      },
      {
        title: "Plusieurs communes",
        desc: "Prise en charge à l'adresse depuis les principales communes de la Dracénie.",
      },
      {
        title: "Horaire calé sur le vol",
        desc: "Départ calculé à partir de l'heure d'arrivée souhaitée à l'aéroport.",
      },
      {
        title: "Aller ou retour",
        desc: "Dracénie → Marseille Provence et retour vers votre commune.",
      },
      {
        title: "Tarif avant validation",
        desc: "Montant communiqué au téléphone pour un trajet défini.",
      },
    ],
    serviceAreas: [
      "Vidauban",
      "Draguignan",
      "Les Arcs",
      "Le Muy",
      "Lorgues",
      "Aéroport Marseille Provence (Marignane)",
    ],
    frequentRoutes: [
      {
        title: "Draguignan → Marseille Provence",
        desc: "Transfert longue distance depuis le centre ou la périphérie.",
        href: "/taxi-draguignan",
      },
      {
        title: "Vidauban → Marseille Provence",
        desc: "Départ domicile, lotissement ou centre — sur réservation.",
        href: "/taxi-vidauban",
      },
      {
        title: "Les Arcs → Marseille Provence",
        desc: "Depuis le centre ou après une arrivée en gare.",
        href: "/taxi-les-arcs",
      },
      {
        title: "Le Muy → Marseille Provence",
        desc: "Lorsque le vol part de Marignane.",
        href: "/taxi-le-muy",
      },
      {
        title: "Comparer avec Nice Côte d'Azur",
        desc: "Souvent plus court en route — autre hub aéroport.",
        href: "/taxi-aeroport-nice-dracenie",
      },
    ],
    relatedCities: [
      { label: "Taxi aéroport Nice", href: "/taxi-aeroport-nice-dracenie" },
      { label: "Taxi Draguignan", href: "/taxi-draguignan" },
      { label: "Taxi Vidauban", href: "/taxi-vidauban" },
      { label: "Taxi Les Arcs", href: "/taxi-les-arcs" },
      { label: "Taxi Le Muy", href: "/taxi-le-muy" },
      { label: "Taxi gare Les Arcs", href: "/taxi-gare-les-arcs-draguignan" },
    ],
    faq: [
      {
        q: "Combien de temps prévoir entre la Dracénie et Marseille Provence ?",
        a: "Depuis Draguignan, environ 1 h 30 à 2 h selon la circulation, l'horaire et les conditions. Depuis d'autres communes, la fourchette reste du même ordre selon l'accès à l'A8. Ce n'est pas un temps garanti.",
        aText:
          "Environ 1 h 30 à 2 h depuis Draguignan selon trafic et conditions — sans garantie.",
      },
      {
        q: "Peut-on réserver pour un vol tôt le matin ?",
        a: "Oui, sur réservation. Un vol matinal à Marseille implique souvent un départ de nuit depuis la Dracénie. Indiquez l'heure du vol, le terminal et l'adresse exacte.",
        aText:
          "Oui, sur réservation — départ de nuit fréquent pour les vols matinaux.",
      },
      {
        q: "Peut-on réserver Marseille Provence → Dracénie ?",
        a: "Oui. Communiquez le numéro de vol, le terminal, la destination en Dracénie, les passagers et les bagages. Le point de rendez-vous est convenu à la réservation.",
        aText:
          "Oui — numéro de vol, terminal et adresse en Dracénie pour caler le retour.",
      },
      {
        q: "Quelles communes de la Dracénie sont desservies ?",
        a: "Prise en charge sur réservation depuis notamment Vidauban, Draguignan, Les Arcs, Le Muy et Lorgues, et d'autres communes selon la course. Précisez l'adresse exacte au téléphone.",
        aText:
          "Vidauban, Draguignan, Les Arcs, Le Muy, Lorgues et autres communes selon course.",
      },
      {
        q: "Comment connaître le tarif ?",
        a: "Le tarif est communiqué lors de la réservation, avant validation. Appelez le 04 22 46 04 62 avec adresse, date, heure de vol, passagers et bagages.",
        aText:
          "Tarif communiqué au téléphone avant validation, selon trajet défini.",
      },
      {
        q: "Peut-on voyager avec plusieurs bagages ?",
        a: "Oui. Indiquez le nombre de passagers et de valises (et tout bagage hors format) pour adapter la course.",
        aText:
          "Oui — précisez passagers et bagages pour adapter la course.",
      },
      {
        q: "Faut-il choisir Nice ou Marseille depuis la Dracénie ?",
        a: "Nice est souvent plus court en route. Marseille se justifie surtout si le vol n'existe pas à Nice, pour certains long-courriers, ou si le billet / l'horaire le rend plus pertinent. Comparez avec le hub taxi aéroport Nice.",
        aText:
          "Nice souvent plus court ; Marseille selon le vol et le billet — voir aussi le hub Nice.",
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
      "La gare Les Arcs-Draguignan est le hub ferroviaire de la Dracénie. Sur réservation, Taxis La Dracénie organise les trajets depuis ou vers Draguignan, Vidauban, Le Muy, Lorgues et les communes voisines — départs matinaux, arrivées TGV/TER, retours avec bagages. Pour la seule liaison détaillée depuis Draguignan, voir [Draguignan ↔ gare Les Arcs](/taxi-draguignan-gare-les-arcs). Une correspondance vers [l'aéroport de Nice](/taxi-aeroport-nice-dracenie) se planifie en course séparée.",
    realTransfersTitle: "Trajets Dracénie ↔ gare Les Arcs-Draguignan",
    realTransfersText:
      "Cette page couvre les courses possibles dans les deux sens : départ depuis une commune de la Dracénie vers la gare pour un TGV ou un TER, reprise à l'arrivée du train vers le domicile ou un hébergement, et enchaînement éventuel vers un aéroport ou un rendez-vous médical — chaque tronçon se réserve à part. Le numéro de train permet d'ajuster l'horaire si la SNCF annonce un retard.",
    sections: [
      {
        title: "Taxi vers la gare depuis toute la Dracénie",
        body: "La prise en charge se fait à l'adresse communiquée — domicile, hôtel ou point de rendez-vous — depuis Draguignan, Vidauban, Les Arcs, Le Muy, Lorgues, Taradeau, Trans-en-Provence, Flayosc ou Figanières. Indiquez l'heure du train et, si possible, le numéro : nous calculons un horaire de départ avec une marge pour le trafic. Le tarif est annoncé avant confirmation pour un trajet défini.",
      },
      {
        title: "Prise en charge à l'arrivée d'un TGV ou TER",
        body: "À la sortie du train, le point de rendez-vous (sortie principale ou parking) est confirmé par appel. Une pancarte nominative est possible sur demande. Ce n'est pas une station de taxi revendiquée à la gare : la course est organisée sur réservation, y compris pour un TER de semaine ou un TGV en haute saison.",
      },
      {
        title: "Départs tôt le matin",
        body: "Un TGV avant 8 h implique souvent une prise en charge avant 7 h depuis certaines communes. Le service fonctionne 24h/24 sur réservation. Communiquez l'adresse exacte et l'heure d'arrivée souhaitée à la gare — pas seulement l'heure de départ du train.",
      },
      {
        title: "Arrivées tardives et derniers trains",
        body: "Pour un retour en soirée ou de nuit, réservez dès que l'horaire est connu. Nous confirmons le point de rencontre à l'arrivée. Les derniers TGV et TER se réservent à l'avance, surtout en vacances scolaires.",
      },
      {
        title: "Numéro de train et retards SNCF",
        body: "Le numéro de train (et le wagon si vous l'avez) aide à caler la reprise. Si un retard est annoncé, la prise en charge à la gare peut être décalée. Aucun horaire SNCF n'est garanti sur cette page : seuls votre billet et les informations communiquées au 04 22 46 04 62 font foi.",
      },
      {
        title: "Bagages, familles et voyageurs professionnels",
        body: "Précisez le nombre de passagers et de valises pour adapter le véhicule. Aide aux bagages à l'adresse et à la gare selon la course convenue. Familles, déplacements pro ou retours de week-end : les mêmes règles de réservation s'appliquent.",
      },
      {
        title: "Correspondances vers les communes de la Dracénie",
        body: "Depuis la gare, les destinations typiques sont Draguignan, Vidauban, Le Muy, Lorgues et Les Arcs centre. Pour le détail des quartiers de Draguignan uniquement, utilisez la landing [Draguignan ↔ gare Les Arcs](/taxi-draguignan-gare-les-arcs). Pour le reste de la commune ou d'autres besoins (CHD, courses locales), les pages villes restent le bon point d'entrée.",
      },
      {
        title: "Correspondance gare → aéroport Nice",
        body: "Un enchaînement train puis vol n'est pas une seule course : gare ↔ domicile (ou gare) puis transfert aéroport se réservent séparément, chacun avec son horaire. Voir le [taxi aéroport Nice depuis la Dracénie](/taxi-aeroport-nice-dracenie).",
      },
    ],
    whyChooseTitle: "Pourquoi réserver un taxi gare avec Taxis La Dracénie ?",
    whyChooseUs: [
      {
        title: "Réservation à l'avance",
        desc: "TGV matinaux et derniers trains : réservez dès que l'horaire est connu.",
      },
      {
        title: "Gare ou domicile",
        desc: "Prise en charge à l'adresse en Dracénie, ou reprise à la sortie du train.",
      },
      {
        title: "Horaire calé sur le train",
        desc: "Marge trafic + numéro de train pour organiser départ ou retour.",
      },
      {
        title: "Retards annoncés",
        desc: "Avec le numéro de train, la reprise à la gare peut être ajustée.",
      },
      {
        title: "Bagages",
        desc: "Indiquez valises et passagers : véhicule adapté, aide aux bagages.",
      },
      {
        title: "Toute la Dracénie",
        desc: "Draguignan, Vidauban, Le Muy, Lorgues et communes voisines — tarif annoncé.",
      },
    ],
    serviceAreas: [
      "Gare Les Arcs-Draguignan",
      "Draguignan",
      "Les Arcs",
      "Vidauban",
      "Le Muy",
      "Lorgues",
      "Taradeau",
      "Trans-en-Provence",
      "Flayosc",
      "Figanières",
    ],
    frequentRoutes: [
      {
        title: "Gare Les Arcs ↔ Draguignan",
        desc: "Landing dédiée : quartiers et deux sens depuis Draguignan.",
        href: "/taxi-draguignan-gare-les-arcs",
      },
      {
        title: "Gare Les Arcs ↔ Vidauban",
        desc: "Départ domicile ou retour après TGV / TER.",
        href: "/taxi-vidauban",
      },
      {
        title: "Gare Les Arcs ↔ Le Muy",
        desc: "Landing dédiée : centre-bourg, zone commerciale, deux sens.",
        href: "/taxi-le-muy-gare-les-arcs",
      },
      {
        title: "Gare Les Arcs ↔ Lorgues",
        desc: "Transfert vers le centre viticole ou retour gare.",
        href: "/taxi-lorgues",
      },
      {
        title: "Gare Les Arcs → aéroport Nice",
        desc: "Correspondance train–avion : course distincte.",
        href: "/taxi-aeroport-nice-dracenie",
      },
    ],
    relatedCities: [
      { label: "Taxi Draguignan ↔ gare Les Arcs", href: "/taxi-draguignan-gare-les-arcs" },
      { label: "Taxi Le Muy ↔ gare Les Arcs", href: "/taxi-le-muy-gare-les-arcs" },
      { label: "Taxi Les Arcs", href: "/taxi-les-arcs" },
      { label: "Taxi Draguignan", href: "/taxi-draguignan" },
      { label: "Taxi Vidauban", href: "/taxi-vidauban" },
      { label: "Taxi Le Muy", href: "/taxi-le-muy" },
      { label: "Taxi aéroport Nice", href: "/taxi-aeroport-nice-dracenie" },
    ],
    faq: [
      {
        q: "Combien de temps prévoir entre Draguignan et la gare Les Arcs ?",
        a: "Souvent de l'ordre de 10 à 20 minutes selon le point de départ à Draguignan et la circulation. Ce n'est pas un temps garanti. Pour les quartiers et le détail de cette liaison, voir la page Draguignan ↔ gare Les Arcs.",
        aText:
          "Environ 10 à 20 minutes selon adresse et trafic — sans garantie ; détail sur la landing Draguignan ↔ gare.",
      },
      {
        q: "Peut-on réserver un taxi pour un TGV tôt le matin ?",
        a: "Oui, sur réservation. Communiquez l'adresse en Dracénie, l'heure du train et le numéro si possible. Un départ avant 7 h est fréquent pour les premiers TGV.",
        aText:
          "Oui, sur réservation — adresse, heure du train et numéro si possible.",
      },
      {
        q: "Que faire si mon train est retardé ?",
        a: "Indiquez le numéro de train à la réservation. Si un retard est annoncé, la reprise à la gare peut être ajustée. Appelez le 04 22 46 04 62 si l'horaire change fortement.",
        aText:
          "Communiquez le numéro de train : la reprise peut être ajustée en cas de retard annoncé.",
      },
      {
        q: "Où se fait la prise en charge à la gare Les Arcs ?",
        a: "Sortie principale ou parking — le point exact est confirmé par appel à l'arrivée. Pas de file d'attente « station » garantie sans réservation.",
        aText:
          "Sortie principale ou parking, confirmé par appel à l'arrivée — sur réservation.",
      },
      {
        q: "Peut-on réserver avec plusieurs bagages ?",
        a: "Oui. Précisez le nombre de passagers et de valises au 04 22 46 04 62 pour adapter le véhicule. Aide aux bagages selon la course convenue.",
        aText:
          "Oui — indiquez passagers et valises pour adapter le véhicule.",
      },
      {
        q: "Peut-on réserver un trajet gare → Vidauban ou Le Muy ?",
        a: "Oui. Cette page couvre toute la Dracénie. Indiquez la commune et l'adresse exacte : le tarif est annoncé avant confirmation.",
        aText:
          "Oui, toute la Dracénie — tarif annoncé selon commune et adresse.",
      },
      {
        q: "Peut-on organiser une correspondance vers l'aéroport de Nice ?",
        a: "Oui, en deux courses distinctes (gare puis aéroport, ou l'inverse), chacune avec son horaire. Voir le service taxi aéroport Nice depuis la Dracénie.",
        aText:
          "Oui, en courses séparées — voir le hub taxi aéroport Nice Dracénie.",
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
        body: "Nice est en général plus rapide depuis Vidauban. Marseille Provence convient surtout aux vols non proposés à Nice ou à certains long-courriers — voir le [transfert vers Marseille Provence](/taxi-aeroport-marseille-dracenie). Pour un transfert Nice depuis une autre commune, voir le [taxi vers Nice depuis la Dracénie](/taxi-aeroport-nice-dracenie).",
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
        body: "Cette page concerne uniquement les vols. Pour un transfert depuis une autre commune, utilisez le [service de taxi vers Nice Côte d'Azur](/taxi-aeroport-nice-dracenie). Pour Marignane : [transfert vers Marseille Provence](/taxi-aeroport-marseille-dracenie). Un rendez-vous hospitalier à Nice n'est pas le même trajet qu'un vol.",
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
      { label: "Taxi aéroport Marseille", href: "/taxi-aeroport-marseille-dracenie" },
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
      { label: "Taxi Le Muy ↔ gare", href: "/taxi-le-muy-gare-les-arcs" },
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

  "taxi-le-muy-gare-les-arcs": {
    slug: "taxi-le-muy-gare-les-arcs",
    type: "combo",
    cityName: "Le Muy",
    h1: "Taxi Le Muy ↔ gare Les Arcs — TGV & TER",
    title:
      "Taxi Le Muy gare Les Arcs | Liaison TGV & TER sur réservation",
    description:
      "Taxi Le Muy ↔ gare Les Arcs-Draguignan : centre-bourg, zone commerciale, Les Ferrières, La Bouverie. TGV, TER, départs matinaux et retours sur réservation — 04 22 46 04 62.",
    keywords: [
      "taxi Le Muy gare Les Arcs",
      "taxi Le Muy gare TGV",
      "taxi gare Les Arcs depuis Le Muy",
      "transfert TGV Le Muy",
      "taxi zone commerciale Le Muy gare",
    ],
    intro:
      "Le Muy est à une courte liaison de la gare Les Arcs-Draguignan, porte ferroviaire de la Dracénie. Sur réservation, Taxis La Dracénie organise les trajets dans les deux sens — prise en charge au centre-bourg, en zone commerciale, aux Ferrières ou à La Bouverie, ou reprise à la sortie du train. Pour une autre commune, utilisez le [taxi gare Les Arcs en Dracénie](/taxi-gare-les-arcs-draguignan).",
    realTransfersTitle: "Le Muy ↔ gare Les Arcs-Draguignan",
    realTransfersText:
      "Types de courses concernés : départ matinal depuis le centre-bourg ou la zone commerciale pour un TGV, retour en soirée vers un lotissement ou un hameau, TER de semaine avec bagages. Le numéro de train permet d'ajuster l'horaire si un retard est annoncé. Cette page ne couvre pas le CHD ni l'aéroport : ce sont d'autres trajets.",
    sections: [
      {
        title: "Départ depuis Le Muy vers la gare",
        body: "Indiquez l'adresse exacte au Muy, l'heure du train et, si possible, le numéro. Nous calculons l'horaire de prise en charge avec une marge pour le trafic et l'accès aux quais. Ce n'est pas un temps garanti : comptez souvent environ 15 à 25 minutes selon le point de départ (centre-bourg, zone commerciale, Les Ferrières, La Bouverie) et la circulation.",
      },
      {
        title: "Retour gare → Le Muy",
        body: "À l'arrivée, communiquez le numéro de train : le point de rendez-vous (sortie principale ou parking) est confirmé par appel. En cas de retard SNCF, la reprise peut être décalée. Dépose au domicile, en zone commerciale ou dans un hameau — précisez le code d'accès si besoin.",
      },
      {
        title: "Centre-bourg, zone commerciale, Ferrières, Bouverie",
        body: "La prise en charge se fait à l'adresse, sur réservation — pas de station de taxi revendiquée dans chaque secteur. La zone commerciale et le centre-bourg sont des départs fréquents vers la gare ; Les Ferrières et La Bouverie reviennent surtout pour les retours avec bagages.",
      },
      {
        title: "TGV matinaux et derniers trains",
        body: "Un TGV avant 8 h implique souvent une prise en charge très tôt depuis Le Muy. Les derniers trains et arrivées tardives se réservent à l'avance. Service sur réservation : communiquez l'heure d'arrivée souhaitée à la gare, pas seulement l'heure de départ du train.",
      },
      {
        title: "Bagages, retards et correspondances",
        body: "Précisez le nombre de passagers et de valises. Un retard de train se gère avec le numéro communiqué. Une correspondance vers l'aéroport de Nice ou un rendez-vous au CHD n'est pas le même trajet : ce sont deux courses à planifier séparément.",
      },
      {
        title: "Réserver à l'avance — tarif annoncé",
        body: "Pour un TGV, réservez dès que l'horaire est connu, surtout en vacances scolaires. Le tarif de la liaison Le Muy ↔ gare est communiqué au 04 22 46 04 62 avant confirmation, selon l'adresse, l'horaire (jour/nuit) et les bagages. Aucun montant n'est affiché ici en dur.",
      },
    ],
    whyChooseTitle: "Pourquoi réserver cette liaison depuis Le Muy ?",
    whyChooseUs: [
      {
        title: "Les deux sens",
        desc: "Le Muy → gare pour le départ, gare → Le Muy au retour, sur le même numéro.",
      },
      {
        title: "Secteurs du Muy",
        desc: "Centre-bourg, zone commerciale, Ferrières, Bouverie : prise en charge à l'adresse.",
      },
      {
        title: "Numéro de train",
        desc: "Horaire calé sur le TGV ou le TER, y compris en cas de retard annoncé.",
      },
      {
        title: "Proximité gare",
        desc: "Liaison courte depuis l'est de la Dracénie — marge adaptée au train.",
      },
      {
        title: "Bagages",
        desc: "Indiquez valises et passagers pour adapter la course.",
      },
      {
        title: "Tarif avant de partir",
        desc: "Prix annoncé au téléphone pour un trajet Le Muy ↔ gare défini.",
      },
    ],
    serviceAreas: [
      "Centre-bourg Le Muy",
      "Zone commerciale Le Muy",
      "Les Ferrières",
      "La Bouverie",
      "Gare Les Arcs-Draguignan",
    ],
    frequentRoutes: [
      {
        title: "Taxi gare Les Arcs (Dracénie)",
        desc: "Hub régional : toutes les communes vers la gare.",
        href: "/taxi-gare-les-arcs-draguignan",
      },
      {
        title: "Taxi au Muy",
        desc: "Courses locales, CHD, aéroport et autres trajets.",
        href: "/taxi-le-muy",
      },
      {
        title: "Taxi aux Arcs",
        desc: "Gare, centre-ville et correspondances depuis Les Arcs.",
        href: "/taxi-les-arcs",
      },
      {
        title: "Draguignan ↔ gare Les Arcs",
        desc: "Landing sœur pour les départs depuis Draguignan.",
        href: "/taxi-draguignan-gare-les-arcs",
      },
    ],
    relatedCities: [
      { label: "Taxi gare Les Arcs (Dracénie)", href: "/taxi-gare-les-arcs-draguignan" },
      { label: "Taxi Le Muy", href: "/taxi-le-muy" },
      { label: "Taxi Les Arcs", href: "/taxi-les-arcs" },
      { label: "Taxi Draguignan ↔ gare", href: "/taxi-draguignan-gare-les-arcs" },
      { label: "Taxi aéroport Nice", href: "/taxi-aeroport-nice-dracenie" },
    ],
    faq: [
      {
        q: "Combien de temps entre Le Muy et la gare Les Arcs ?",
        a: "Souvent environ 15 à 25 minutes selon le point de départ au Muy (centre-bourg, zone commerciale, hameau) et la circulation. Ce n'est pas un temps garanti.",
        aText:
          "Environ 15 à 25 minutes selon adresse et trafic — sans garantie.",
      },
      {
        q: "Faut-il réserver à l'avance un taxi Le Muy → gare ?",
        a: "Oui, surtout pour un TGV matinal ou un dernier train. Appelez le 04 22 46 04 62 dès que vous connaissez l'horaire. La prise en charge au Muy se fait sur réservation.",
        aText:
          "Oui, surtout TGV matinaux — prise en charge sur réservation.",
      },
      {
        q: "Prenez-vous en charge la zone commerciale ou Les Ferrières ?",
        a: "Oui, sur réservation à l'adresse indiquée : centre-bourg, zone commerciale, Les Ferrières, La Bouverie ou lotissement.",
        aText:
          "Oui — centre, zone commerciale, Ferrières, Bouverie, sur réservation.",
      },
      {
        q: "Que faire si mon train est retardé au retour ?",
        a: "Communiquez le numéro de train : la reprise à la gare peut être ajustée. Prévenez le 04 22 46 04 62 si le retard est important.",
        aText:
          "Oui, avec le numéro de train — la reprise peut être ajustée.",
      },
      {
        q: "Peut-on enchaîner gare puis aéroport Nice ?",
        a: "Oui, mais en deux courses distinctes, chacune avec son horaire. Voir le hub taxi aéroport Nice depuis la Dracénie.",
        aText:
          "Oui, en courses séparées — voir le hub aéroport Nice.",
      },
      {
        q: "Quelle différence avec le hub gare ou la page taxi Le Muy ?",
        a: "Cette page concerne uniquement Le Muy ↔ gare Les Arcs. Le hub gare couvre toute la Dracénie. La page taxi Le Muy reste générale (CHD, aéroport, courses locales).",
        aText:
          "Ici : liaison Le Muy ↔ gare. Hub = Dracénie. Taxi Le Muy = général.",
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
