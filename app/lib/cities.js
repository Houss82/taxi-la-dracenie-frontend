/** Données SEO uniques par ville — pas de copier-coller entre pages. */

import { hydrateContactStrings } from "./hydrate-contact";

const rawCities = {
  "taxi-vidauban": {
    slug: "taxi-vidauban",
    name: "Vidauban",
    h1: "Taxi à Vidauban — prise en charge rapide en Dracénie",
    title:
      "Taxi Vidauban 24h/24 | Dracénie, gare Les Arcs, Draguignan & aéroports",
    description:
      "Taxi à Vidauban : courses locales, transferts gare Les Arcs-Draguignan, trajets médicaux et aéroports Nice/Marseille. Taxis La Dracénie — 04 22 46 04 62.",
    keywords: [
      "taxi Vidauban",
      "taxi à Vidauban",
      "taxi Vidauban Draguignan",
      "taxi conventionné Vidauban",
      "taxi gare Les Arcs Vidauban",
    ],
    intro:
      "Basés à Vidauban, Taxis La Dracénie couvrent le centre-ville, les quartiers résidentiels et les axes vers Les Arcs, Le Muy et Draguignan. Course immédiate ou rendez-vous planifié : un seul numéro pour toute la Dracénie.",
    localContext:
      "Depuis le centre de Vidauban, nous intervenons vers la gare Les Arcs-Draguignan, Le Luc, Le Muy, Draguignan et les villages alentour. Les trajets médicaux et les transferts aéroport Nice ou Marseille font partie de notre activité quotidienne.",
    landmarks: [
      "Centre-ville de Vidauban",
      "Gare Les Arcs-Draguignan",
      "Le Luc-en-Provence",
      "Le Muy",
      "Draguignan",
    ],
    realTransfersText:
      "Nous effectuons régulièrement des transferts entre Vidauban et la gare Les Arcs-Draguignan pour les départs matinaux, ainsi que des trajets vers l'aéroport Nice Côte d'Azur depuis le centre ou les lotissements. Les courses médicales vers le CHD Draguignan et les spécialistes du Var sont organisées chaque semaine pour les habitants de Vidauban.",
    longSeoText:
      "À Vidauban, les demandes portent surtout sur la gare Les Arcs-Draguignan, le CHD Draguignan, l'aéroport de Nice et les courses locales entre centre-ville et lotissements. Habitants, patients, familles et voyageurs matinaux : nous adaptons l'horaire de prise en charge au trafic et à votre rendez-vous.",
    popularNeeds: [
      "Taxi Vidauban → gare Les Arcs-Draguignan (TGV et TER)",
      "Taxi Vidauban → aéroport Nice Côte d'Azur",
      "Taxi pour rendez-vous médical au CHD Draguignan",
      "Taxi conventionné CPAM depuis Vidauban",
      "Taxi Vidauban → Draguignan, Le Muy ou Les Arcs",
    ],
    whyChooseUs: [
      {
        title: "Disponible 24h/24",
        desc: "Un seul numéro, jour et nuit, pour une course immédiate ou un rendez-vous planifié depuis Vidauban.",
      },
      {
        title: "Expert gare Les Arcs",
        desc: "Correspondances TGV et TER sans stress — prise en charge au domicile avec marge sur le trafic.",
      },
      {
        title: "Taxi conventionné CPAM",
        desc: "Trajets médicaux vers Draguignan et le CHD, sous conditions d'éligibilité vérifiées au téléphone.",
      },
      {
        title: "Transferts aéroport",
        desc: "Nice et Marseille : horaire calé sur votre vol, tarif annoncé avant confirmation.",
      },
      {
        title: "Réservation rapide",
        desc: "Appelez directement — pas de plateforme intermédiaire, réponse humaine immédiate.",
      },
      {
        title: "Chauffeur local",
        desc: "Connaissance fine des axes Vidauban–Les Arcs–Draguignan et des accès en village.",
      },
    ],
    serviceAreas: [
      "Centre-ville de Vidauban",
      "Lotissements et hameaux",
      "Le Luc-en-Provence",
      "Le Cannet-des-Maures (secteur)",
      "La Garde-Freinet (liaisons)",
      "Axes vers Les Arcs et Draguignan",
    ],
    frequentRoutes: [
      {
        title: "Vidauban → gare Les Arcs-Draguignan",
        desc: "Départ centre ou domicile, correspondance TGV ou TER sans stress.",
        href: "/taxi-gare-les-arcs-draguignan",
      },
      {
        title: "Vidauban → Draguignan",
        desc: "Hôpital, centre administratif ou rendez-vous en ville.",
        href: "/taxi-draguignan",
      },
      {
        title: "Vidauban → aéroport Nice",
        desc: "Transfert direct, horaire adapté à votre vol.",
        href: "/taxi-aeroport-vidauban",
      },
      {
        title: "Vidauban → Le Muy",
        desc: "Trajet intercommunal rapide en Dracénie.",
        href: "/taxi-le-muy",
      },
      {
        title: "Trajet médical depuis Vidauban",
        desc: "Transport assis vers CHD ou spécialistes, selon éligibilité.",
        href: "/taxi-conventionne-vidauban",
      },
    ],
    services: [
      { label: "Courses locales", href: "/taxi-vidauban" },
      { label: "Taxi conventionné CPAM", href: "/taxi-conventionne-vidauban" },
      { label: "Aéroport Nice", href: "/taxi-aeroport-vidauban" },
      { label: "Gare Les Arcs", href: "/taxi-gare-les-arcs-draguignan" },
    ],
    showCpam: true,
    showAirport: true,
    nearbyCities: [
      { label: "Draguignan", href: "/taxi-draguignan" },
      { label: "Le Muy", href: "/taxi-le-muy" },
      { label: "Les Arcs", href: "/taxi-les-arcs" },
      { label: "Lorgues", href: "/taxi-lorgues" },
    ],
    faq: [
      {
        q: "Combien de temps pour un taxi Vidauban → gare Les Arcs ?",
        a: "Comptez environ 15 à 25 minutes selon le trafic et votre point de départ à Vidauban. Appelez-nous pour une estimation précise au moment de la course.",
        aText:
          "Comptez environ 15 à 25 minutes selon le trafic et votre point de départ à Vidauban.",
      },
      {
        q: "Proposez-vous un taxi conventionné à Vidauban ?",
        a: "Oui, sous conditions d'éligibilité CPAM. Indiquez votre situation au 04 22 46 04 62 avant la course.",
        aText:
          "Oui, sous conditions d'éligibilité CPAM. Indiquez votre situation au téléphone avant la course.",
      },
      {
        q: "Peut-on réserver un transfert aéroport depuis Vidauban ?",
        a: "Oui, vers Nice ou Marseille. Nous confirmons l'horaire de prise en charge selon votre vol.",
        aText:
          "Oui, vers Nice ou Marseille. Nous confirmons l'horaire de prise en charge selon votre vol.",
      },
      {
        q: "Combien coûte un taxi Vidauban → aéroport Nice ?",
        a: "Le tarif dépend de l'heure, du trafic et du point de départ exact à Vidauban. Appelez le 04 22 46 04 62 pour un prix annoncé avant confirmation — pas de surprise sur le trajet défini.",
        aText:
          "Tarif annoncé au téléphone selon heure, trafic et point de départ à Vidauban.",
      },
      {
        q: "Peut-on réserver un taxi tôt le matin depuis Vidauban ?",
        a: "Oui, les départs matinaux sont possibles sur réservation — notamment pour la gare Les Arcs-Draguignan, le CHD Draguignan ou l'aéroport de Nice. Indiquez l'heure d'arrivée souhaitée à destination.",
        aText:
          "Oui, départs matinaux sur réservation pour gare, CHD ou aéroport.",
      },
    ],
  },

  "taxi-draguignan": {
    slug: "taxi-draguignan",
    name: "Draguignan",
    h1: "Taxi à Draguignan — CHD, gare Les Arcs & Dracénie",
    title:
      "Taxi Draguignan 24h/24 | CHD, gare Les Arcs, conventionné CPAM & aéroports",
    description:
      "Taxi à Draguignan : Centre Hospitalier de la Dracénie, gare Les Arcs-Draguignan, Trans-en-Provence, Figanières. Taxis La Dracénie — 04 22 46 04 62.",
    keywords: [
      "taxi Draguignan",
      "taxi conventionné Draguignan",
      "taxi gare Les Arcs Draguignan",
      "taxi CHD Draguignan",
      "taxi aéroport Nice Draguignan",
    ],
    intro:
      "Draguignan est le cœur administratif et hospitalier de la Dracénie. Taxis La Dracénie assurent vos déplacements depuis le centre, les quartiers périphériques et les communes voisines, avec une connaissance fine des accès CHD et de la gare Les Arcs-Draguignan.",
    localContext:
      "Nous desservons naturellement le Centre Hospitalier de la Dracénie (CHD), la gare Les Arcs-Draguignan, Trans-en-Provence, Figanières, Flayosc et Le Muy. Les transferts vers l'aéroport de Nice ou Marseille Provence sont organisés sur rendez-vous avec horaire adapté.",
    landmarks: [
      "Centre Hospitalier de la Dracénie",
      "Gare Les Arcs-Draguignan",
      "Centre-ville Draguignan",
      "Trans-en-Provence",
      "Aéroport Nice Côte d'Azur",
      "Aéroport Marseille Provence",
    ],
    realTransfersText:
      "Nous effectuons régulièrement des transferts Draguignan → aéroport Nice pour les départs matinaux, des trajets médicaux quotidiens vers le CHD et les cabinets du centre-ville, ainsi que les liaisons vers la gare Les Arcs-Draguignan depuis Les Selves, Malpassé ou Saint-Hermentaire.",
    longSeoText:
      "À Draguignan, capitale hospitalière de la Dracénie, les demandes concernent le CHD, la gare Les Arcs, les rendez-vous médicaux, les aéroports Nice et Marseille, et les courses entre quartiers. Patients, familles et voyageurs en gare sollicitent aussi le taxi conventionné CPAM — l'éligibilité se vérifie au téléphone.",
    popularNeeds: [
      "Taxi pour rendez-vous médical au CHD Draguignan",
      "Taxi Draguignan → gare Les Arcs-Draguignan",
      "Taxi depuis Draguignan vers l'aéroport de Nice",
      "Taxi pour consultation, imagerie ou hospitalisation de jour",
      "Taxi conventionné CPAM à Draguignan",
    ],
    whyChooseUs: [
      {
        title: "Disponible 24h/24",
        desc: "Service permanent à Draguignan — urgences, trains de nuit ou consultations matinales au CHD.",
      },
      {
        title: "Accès CHD maîtrisés",
        desc: "Entrées du Centre Hospitalier de la Dracénie, créneaux de dialyse et imagerie : nous connaissons les flux.",
      },
      {
        title: "Gare Les Arcs proche",
        desc: "10 à 20 minutes depuis la plupart des quartiers dracénois — idéal pour les correspondances TGV.",
      },
      {
        title: "Transferts aéroport",
        desc: "Nice et Marseille en départ planifié depuis le centre ou la périphérie de Draguignan.",
      },
      {
        title: "Réservation directe",
        desc: "Ligne téléphonique unique — devis clair, pas de surprise sur le trajet défini.",
      },
      {
        title: "Chauffeurs du territoire",
        desc: "Habitants de la Dracénie qui connaissent Les Selves, Malpassé et les hameaux alentour.",
      },
    ],
    serviceAreas: [
      "Centre-ville Draguignan",
      "Les Selves",
      "Saint-Hermentaire",
      "Malpassé",
      "Trans-en-Provence",
      "Flayosc et Figanières (liaisons)",
    ],
    frequentRoutes: [
      {
        title: "Draguignan → CHD",
        desc: "Consultations, hospitalisations, urgences : prise en charge ponctuelle.",
        href: "/transport-medical-conventionne-dracenie",
      },
      {
        title: "Draguignan → gare Les Arcs",
        desc: "Correspondance train sans retard, bagages pris en charge.",
        href: "/taxi-draguignan-gare-les-arcs",
      },
      {
        title: "Draguignan → aéroport Nice",
        desc: "Environ 1h15 selon trafic — horaire calé sur votre vol.",
        href: "/taxi-aeroport-draguignan",
      },
      {
        title: "Draguignan → Le Muy / Les Arcs",
        desc: "Trajets intercommunaux fréquents en Dracénie.",
        href: "/taxi-le-muy",
      },
      {
        title: "Draguignan → Figanières / Flayosc",
        desc: "Villages du Var intérieur, départs depuis le centre.",
        href: "/taxi-figanieres",
      },
    ],
    services: [
      { label: "Taxi conventionné Draguignan", href: "/taxi-conventionne-draguignan" },
      { label: "Transport médical CHD", href: "/transport-medical-conventionne-dracenie" },
      { label: "Aéroport Nice", href: "/taxi-aeroport-draguignan" },
      { label: "Gare Les Arcs", href: "/taxi-draguignan-gare-les-arcs" },
    ],
    showCpam: true,
    showAirport: true,
    nearbyCities: [
      { label: "Les Arcs", href: "/taxi-les-arcs" },
      { label: "Trans-en-Provence", href: "/taxi-trans-en-provence" },
      { label: "Vidauban", href: "/taxi-vidauban" },
      { label: "Figanières", href: "/taxi-figanieres" },
    ],
    faq: [
      {
        q: "Comment rejoindre le CHD en taxi depuis Draguignan ?",
        a: "Appelez le 04 22 46 04 62 en précisant votre adresse et l'horaire du rendez-vous. Nous connaissons les accès du Centre Hospitalier de la Dracénie.",
        aText:
          "Appelez-nous en précisant votre adresse et l'horaire du rendez-vous. Nous connaissons les accès du CHD.",
      },
      {
        q: "Taxi conventionné Draguignan : comment ça marche ?",
        a: "L'éligibilité CPAM se vérifie au téléphone. Consultez notre page taxi conventionné Draguignan pour les informations pratiques.",
        aText:
          "L'éligibilité CPAM se vérifie au téléphone avant chaque trajet médical conventionné.",
      },
      {
        q: "Quel délai pour la gare Les Arcs depuis Draguignan ?",
        a: "Environ 10 à 20 minutes selon le quartier de départ et la circulation.",
        aText: "Environ 10 à 20 minutes selon le quartier de départ et la circulation.",
      },
      {
        q: "Peut-on réserver un taxi à Draguignan pour un départ tôt le matin ?",
        a: "Oui, les départs matinaux sont possibles sur réservation, notamment pour la gare Les Arcs-Draguignan, le CHD ou les aéroports de Nice et Marseille. Précisez l'heure d'arrivée souhaitée à destination.",
        aText:
          "Oui, départs matinaux sur réservation pour gare, CHD ou aéroports.",
      },
      {
        q: "Proposez-vous un taxi Draguignan → aéroport Nice ?",
        a: "Oui, transfert direct avec horaire calé sur votre vol. Comptez environ 1h15 selon le trafic sur l'A8. Tarif annoncé au 04 22 46 04 62 avant confirmation.",
        aText:
          "Oui, transfert direct vers Nice — environ 1h15, tarif annoncé au téléphone.",
      },
    ],
  },

  "taxi-le-muy": {
    slug: "taxi-le-muy",
    name: "Le Muy",
    h1: "Taxi au Muy — liaison Dracénie & Provence",
    title: "Taxi Le Muy 24h/24 | Draguignan, Les Arcs, Fréjus & aéroports",
    description:
      "Taxi au Muy : courses locales, transferts gare Les Arcs-Draguignan, Draguignan et aéroports. Service Taxis La Dracénie — 04 22 46 04 62.",
    keywords: ["taxi Le Muy", "taxi au Muy", "taxi Le Muy Draguignan", "taxi Le Muy gare"],
    intro:
      "Le Muy, porte est de la Dracénie, mérite un taxi réactif pour les trajets vers Draguignan, Les Arcs ou la côte. Taxis La Dracénie interviennent au centre, en zone commerciale et dans les hameaux environnants.",
    localContext:
      "Position stratégique entre Draguignan, Les Arcs et l'axe Fréjus–Draguignan : nous enchaînons régulièrement Le Muy → gare TGV, CHD ou aéroport Nice pour les résidents et visiteurs.",
    landmarks: ["Centre Le Muy", "Zone commerciale", "Draguignan", "Les Arcs", "Fréjus"],
    realTransfersText:
      "Au Muy, nous enchaînons chaque semaine des trajets matinaux vers la gare Les Arcs-Draguignan et des retours le soir, des transferts vers le CHD Draguignan ou l'aéroport Nice depuis la zone commerciale et les hameaux, ainsi que des courses Le Muy → Marseille Provence pour les vols long-courrier.",
    longSeoText:
      "Au Muy, porte est de la Dracénie, les demandes concernent Draguignan, le CHD, la gare Les Arcs, les aéroports Nice et Marseille, et les courses locales entre centre-bourg et zone commerciale. Résidents et actifs en déplacement : rendez-vous médicaux conventionnés CPAM sur vérification d'éligibilité au téléphone.",
    popularNeeds: [
      "Taxi Le Muy → gare Les Arcs-Draguignan (TGV et TER)",
      "Taxi Le Muy → Draguignan ou CHD",
      "Taxi Le Muy → aéroport Nice Côte d'Azur",
      "Taxi pour rendez-vous médical au CHD depuis Le Muy",
      "Taxi Le Muy → Les Arcs, Vidauban ou communes voisines",
    ],
    whyChooseUs: [
      {
        title: "Réactivité locale",
        desc: "Position stratégique entre Draguignan, Les Arcs et l'axe Fréjus — intervention rapide au Muy.",
      },
      {
        title: "Gare Les Arcs",
        desc: "Trains matinaux et retours tardifs : prise en charge à domicile ou à la zone commerciale.",
      },
      {
        title: "Liaison CHD",
        desc: "Trajet direct vers le Centre Hospitalier de la Dracénie, option taxi conventionné CPAM.",
      },
      {
        title: "Aéroports Nice & Marseille",
        desc: "Transferts longue distance planifiés avec marge de sécurité sur l'A8.",
      },
      {
        title: "Appel direct",
        desc: "Réservation par téléphone — confirmation immédiate du créneau et du tarif.",
      },
      {
        title: "Connaissance du secteur",
        desc: "Accès zone commerciale, centre-bourg et lotissements périphériques du Muy.",
      },
    ],
    serviceAreas: [
      "Centre-bourg Le Muy",
      "Zone commerciale Le Muy",
      "Les Ferrières",
      "La Bouverie",
      "Draguignan (liaison)",
      "Les Arcs (liaison)",
    ],
    frequentRoutes: [
      { title: "Le Muy → Draguignan", desc: "Centre-ville ou CHD.", href: "/taxi-draguignan" },
      { title: "Le Muy → gare Les Arcs", desc: "Départ domicile, arrivée quai.", href: "/taxi-le-muy-gare-les-arcs" },
      { title: "Le Muy → Les Arcs centre", desc: "Quartiers et commerces.", href: "/taxi-les-arcs" },
      { title: "Le Muy → aéroport Nice", desc: "Transfert longue distance planifié.", href: "/taxi-aeroport-nice-dracenie" },
    ],
    services: [
      { label: "Taxi conventionné", href: "/taxi-conventionne-dracenie" },
      { label: "Gare Les Arcs", href: "/taxi-le-muy-gare-les-arcs" },
      { label: "Aéroport Nice", href: "/taxi-aeroport-nice-dracenie" },
    ],
    showCpam: true,
    showAirport: true,
    nearbyCities: [
      { label: "Les Arcs", href: "/taxi-les-arcs" },
      { label: "Draguignan", href: "/taxi-draguignan" },
      { label: "Vidauban", href: "/taxi-vidauban" },
      { label: "Trans-en-Provence", href: "/taxi-trans-en-provence" },
    ],
    faq: [
      {
        q: "Un taxi est-il disponible tôt le matin au Muy ?",
        a: "Oui, service 24h/24. Idéal pour les trains matinaux depuis Les Arcs.",
        aText: "Oui, service 24h/24 pour les trains matinaux depuis Les Arcs.",
      },
      {
        q: "Peut-on aller au CHD depuis Le Muy ?",
        a: "Oui, trajet direct vers Draguignan. Transport médical conventionné sur demande.",
        aText: "Oui, trajet direct vers Draguignan avec option transport médical conventionné.",
      },
      {
        q: "Combien de temps entre Le Muy et la gare Les Arcs en taxi ?",
        a: "Comptez environ 15 à 25 minutes selon le trafic et votre point de départ au Muy (centre-bourg, zone commerciale ou hameau).",
        aText:
          "Environ 15 à 25 minutes selon trafic et point de départ au Muy.",
      },
      {
        q: "Proposez-vous un taxi Le Muy → aéroport Nice ?",
        a: "Oui, transfert planifié avec horaire adapté à votre vol. Tarif annoncé au 04 22 46 04 62 avant confirmation — comptez environ 1h à 1h20 selon l'heure et le trafic sur l'A8.",
        aText:
          "Oui, transfert planifié vers Nice — tarif annoncé au téléphone avant confirmation.",
      },
      {
        q: "Existe-t-il un taxi conventionné au Muy ?",
        a: "Oui, sous conditions d'éligibilité CPAM et selon prescription médicale. Indiquez votre situation au téléphone avant de réserver un trajet vers le CHD ou un spécialiste à Draguignan.",
        aText:
          "Oui, taxi conventionné CPAM sous conditions d'éligibilité — vérifiez au téléphone.",
      },
    ],
  },

  "taxi-les-arcs": {
    slug: "taxi-les-arcs",
    name: "Les Arcs",
    h1: "Taxi aux Arcs — gare TGV & centre-ville",
    title: "Taxi Les Arcs 24h/24 | Gare TGV, Draguignan & transferts aéroport",
    description:
      "Taxi aux Arcs : prise en charge gare Les Arcs-Draguignan, centre-ville, Draguignan et aéroports. Taxis La Dracénie — 04 22 46 04 62.",
    keywords: [
      "taxi Les Arcs",
      "taxi gare Les Arcs Draguignan",
      "taxi Les Arcs Draguignan",
      "taxi gare TGV Les Arcs",
    ],
    intro:
      "Les Arcs concentrent la gare TGV de la Dracénie et un centre-ville animé. Taxis La Dracénie accueillent les voyageurs à la sortie du train et assurent les courses locales vers Draguignan, Le Muy ou Vidauban.",
    localContext:
      "La gare Les Arcs-Draguignan est notre zone d'expertise : pancarte nominative, suivi des retards SNCF, correspondances vers hôtels, domiciles ou aéroports Nice et Marseille.",
    landmarks: [
      "Gare Les Arcs-Draguignan",
      "Centre-ville Les Arcs",
      "Draguignan",
      "Le Muy",
    ],
    realTransfersText:
      "Aux Arcs, notre cœur de métier reste la gare Les Arcs-Draguignan : accueil TGV et TER, correspondances vers Draguignan, Vidauban ou Le Muy, transferts aéroport Nice pour les voyageurs en correspondance train–avion, et trajets quotidiens centre-ville → CHD Draguignan.",
    longSeoText:
      "Aux Arcs, la gare concentre l'essentiel des demandes : sortie de train, correspondances locales, transferts Nice et courses depuis le centre-ville ou les lotissements. Voyageurs, résidents et professionnels : point de rendez-vous clair à la gare, réservation conseillée en haute saison.",
    popularNeeds: [
      "Taxi gare Les Arcs TGV — accueil à la sortie du train",
      "Taxi Les Arcs → Draguignan ou CHD",
      "Taxi gare Les Arcs → aéroport Nice Côte d'Azur",
      "Taxi Les Arcs → Vidauban, Le Muy ou communes voisines",
      "Taxi pour correspondance train–avion depuis Les Arcs",
    ],
    whyChooseUs: [
      {
        title: "Spécialiste gare TGV",
        desc: "Pancarte nominative, suivi des retards SNCF et prise en charge quai ou parking.",
      },
      {
        title: "24h/24 aux Arcs",
        desc: "Derniers TGV, arrivées tardives ou départs à l'aube — même numéro, même service.",
      },
      {
        title: "Correspondances Dracénie",
        desc: "Draguignan, Le Muy, Vidauban : tarif annoncé selon destination exacte.",
      },
      {
        title: "Transferts aéroport",
        desc: "Nice et Marseille depuis la gare ou votre hébergement aux Arcs.",
      },
      {
        title: "Réservation conseillée",
        desc: "Pour les TGV en haute saison, réservez dès que vous connaissez votre horaire.",
      },
      {
        title: "Chauffeurs habitués",
        desc: "Connaissance des flux voyageurs et des accès centre-ville / gare.",
      },
    ],
    serviceAreas: [
      "Gare Les Arcs-Draguignan",
      "Centre-ville Les Arcs",
      "Quartier de la gare",
      "Lotissements périphériques",
      "Draguignan (correspondance)",
      "Le Muy et Vidauban (liaisons)",
    ],
    frequentRoutes: [
      { title: "Gare Les Arcs → domicile", desc: "Accueil quai ou parking.", href: "/taxi-gare-les-arcs-draguignan" },
      { title: "Les Arcs → Draguignan", desc: "CHD, administration, shopping.", href: "/taxi-draguignan" },
      { title: "Les Arcs → aéroport Nice", desc: "Départ gare ou hôtel.", href: "/taxi-aeroport-nice-dracenie" },
      { title: "Les Arcs → Le Muy", desc: "Trajet direct Dracénie.", href: "/taxi-le-muy" },
    ],
    services: [
      { label: "Taxi gare Les Arcs", href: "/taxi-gare-les-arcs-draguignan" },
      { label: "Draguignan ↔ gare", href: "/taxi-draguignan-gare-les-arcs" },
      { label: "Aéroport Nice", href: "/taxi-aeroport-nice-dracenie" },
      { label: "Taxi conventionné", href: "/taxi-conventionne-dracenie" },
    ],
    showCpam: true,
    showAirport: true,
    nearbyCities: [
      { label: "Draguignan", href: "/taxi-draguignan" },
      { label: "Le Muy", href: "/taxi-le-muy" },
      { label: "Vidauban", href: "/taxi-vidauban" },
      { label: "Trans-en-Provence", href: "/taxi-trans-en-provence" },
    ],
    faq: [
      {
        q: "Où se situe la prise en charge à la gare Les Arcs ?",
        a: "Nous vous indiquons le point exact (sortie principale ou parking) lors de la réservation téléphonique.",
        aText:
          "Point de rendez-vous confirmé par téléphone : sortie principale ou parking selon votre train.",
      },
      {
        q: "Taxi gare Les Arcs Draguignan : réservation à l'avance ?",
        a: "Recommandé pour les TGV, surtout en haute saison. Appelez dès que vous connaissez votre horaire.",
        aText:
          "Réservation à l'avance recommandée pour les TGV, surtout en haute saison.",
      },
      {
        q: "Combien de temps entre la gare Les Arcs et Draguignan en taxi ?",
        a: "Comptez environ 10 à 20 minutes selon le trafic et votre destination exacte à Draguignan (centre-ville, CHD, quartiers périphériques).",
        aText:
          "Environ 10 à 20 minutes selon trafic et destination à Draguignan.",
      },
      {
        q: "Peut-on prendre un taxi Les Arcs → aéroport Nice ?",
        a: "Oui, départ depuis la gare, votre hébergement ou le centre-ville. Horaire adapté à votre vol, tarif annoncé au 04 22 46 04 62.",
        aText:
          "Oui, départ gare ou domicile — horaire adapté au vol, tarif annoncé au téléphone.",
      },
      {
        q: "Y a-t-il un taxi disponible la nuit à la gare Les Arcs ?",
        a: "Oui, service 24h/24. Pour les derniers TGV ou arrivées tardives, réservez à l'avance pour garantir la prise en charge à la sortie du train.",
        aText:
          "Oui 24h/24 — réservation conseillée pour les derniers TGV et arrivées tardives.",
      },
    ],
  },

  "taxi-trans-en-provence": {
    slug: "taxi-trans-en-provence",
    name: "Trans-en-Provence",
    h1: "Taxi à Trans-en-Provence — village & Dracénie",
    title: "Taxi Trans-en-Provence | Draguignan, gare Les Arcs & CHD",
    description:
      "Taxi à Trans-en-Provence : liaison Draguignan, CHD, gare Les Arcs et communes voisines. Taxis La Dracénie — 04 22 46 04 62.",
    keywords: ["taxi Trans-en-Provence", "taxi Trans en Provence Draguignan"],
    intro:
      "Trans-en-Provence, entre plaine et collines, nécessite un taxi fiable pour rejoindre Draguignan ou la gare. Taxis La Dracénie couvrent le bourg et les hameaux avec des temps de réponse adaptés au calme du village.",
    localContext:
      "Trajets fréquents vers Draguignan centre, le Centre Hospitalier de la Dracénie et la gare Les Arcs-Draguignan. Nous desservons aussi Flayosc et Figanières sur demande.",
    landmarks: ["Centre Trans-en-Provence", "Draguignan", "CHD", "Gare Les Arcs"],
    realTransfersText:
      "Depuis Trans-en-Provence, nous assurons des trajets réguliers vers Draguignan centre et le CHD pour les consultations, ainsi que des correspondances gare Les Arcs-Draguignan. Les liaisons vers Flayosc et Figanières complètent notre couverture du nord de la Dracénie.",
    whyChooseUs: [
      {
        title: "Village & hameaux",
        desc: "Intervention au bourg et dans les hameaux environnants avec itinéraires adaptés.",
      },
      {
        title: "Liaison CHD",
        desc: "Trajets médicaux vers Draguignan — taxi conventionné sous éligibilité CPAM.",
      },
      {
        title: "Gare Les Arcs",
        desc: "Correspondance train planifiée depuis Trans-en-Provence, créneaux matinaux fréquents.",
      },
      {
        title: "Disponibilité 24h/24",
        desc: "Réservation à l'avance ou course immédiate selon disponibilité locale.",
      },
      {
        title: "Tarif transparent",
        desc: "Prix annoncé au téléphone avant validation — pas de mauvaise surprise.",
      },
      {
        title: "Proximité Dracénie",
        desc: "Connaissance des axes Trans-en-Provence → Draguignan et villages voisins.",
      },
    ],
    serviceAreas: [
      "Centre Trans-en-Provence",
      "Hameaux du secteur",
      "Flayosc (liaison)",
      "Figanières (liaison)",
      "Draguignan centre",
      "Gare Les Arcs (correspondance)",
    ],
    frequentRoutes: [
      { title: "Trans-en-Provence → Draguignan", desc: "Administration, commerces, CHD.", href: "/taxi-draguignan" },
      { title: "Trans-en-Provence → gare Les Arcs", desc: "Correspondance train planifiée.", href: "/taxi-gare-les-arcs-draguignan" },
      { title: "Trans-en-Provence → Flayosc", desc: "Villages du Var intérieur.", href: "/taxi-flayosc" },
    ],
    services: [
      { label: "Transport médical", href: "/transport-medical-conventionne-dracenie" },
      { label: "Taxi conventionné", href: "/taxi-conventionne-dracenie" },
      { label: "Gare Les Arcs", href: "/taxi-gare-les-arcs-draguignan" },
    ],
    showCpam: true,
    showAirport: false,
    nearbyCities: [
      { label: "Draguignan", href: "/taxi-draguignan" },
      { label: "Flayosc", href: "/taxi-flayosc" },
      { label: "Figanières", href: "/taxi-figanieres" },
      { label: "Les Arcs", href: "/taxi-les-arcs" },
    ],
    faq: [
      {
        q: "Délai moyen pour un taxi à Trans-en-Provence ?",
        a: "Variable selon la disponibilité locale ; appelez pour un créneau immédiat ou planifié.",
        aText: "Appelez pour connaître le délai immédiat ou réserver un créneau planifié.",
      },
    ],
  },

  "taxi-lorgues": {
    slug: "taxi-lorgues",
    name: "Lorgues",
    h1: "Taxi à Lorgues — cœur du Var & Dracénie",
    title: "Taxi Lorgues 24h/24 | Draguignan, gare Les Arcs & aéroports",
    description:
      "Taxi à Lorgues : centre viticole, transferts Draguignan, gare Les Arcs, aéroports Nice et Marseille. Taxis La Dracénie — 04 22 46 04 62.",
    keywords: ["taxi Lorgues", "taxi à Lorgues", "taxi Lorgues Draguignan"],
    intro:
      "Lorgues, capitale des coteaux varois, accueille résidents et touristes. Taxis La Dracénie relient le centre de Lorgues à Draguignan, Taradeau, Les Arcs et les aéroports régionaux.",
    localContext:
      "Nous connaissons les accès du centre historique, des domaines viticoles et des résidences secondaires. Trajets réguliers vers la gare TGV et les consultations médicales à Draguignan.",
    landmarks: ["Centre Lorgues", "Draguignan", "Taradeau", "Gare Les Arcs"],
    realTransfersText:
      "À Lorgues, nous organisons des transferts vers la gare Les Arcs-Draguignan pour les départs professionnels, des trajets Draguignan CHD pour le médical, des courses aéroport Nice pour les séjours estivaux, et des liaisons courtes Lorgues → Taradeau très demandées en semaine.",
    longSeoText:
      "À Lorgues, les demandes concernent le centre viticole, Draguignan et le CHD, la gare Les Arcs, Taradeau, les domaines alentour et l'aéroport de Nice en haute saison. Résidents, viticulteurs et touristes : nous connaissons les accès du bourg historique et des lotissements périphériques.",
    popularNeeds: [
      "Taxi Lorgues → aéroport Nice Côte d'Azur",
      "Taxi Lorgues → gare Les Arcs-Draguignan",
      "Taxi Lorgues → Draguignan ou CHD",
      "Taxi Lorgues → Taradeau ou communes voisines",
      "Taxi pour rendez-vous médical depuis Lorgues",
    ],
    whyChooseUs: [
      {
        title: "Centre viticole couvert",
        desc: "Prise en charge au centre historique, domaines et résidences autour de Lorgues.",
      },
      {
        title: "Gare TGV accessible",
        desc: "Départs matinaux vers Les Arcs-Draguignan — réservation recommandée.",
      },
      {
        title: "Consultations Draguignan",
        desc: "Trajets médicaux et administratifs vers la préfecture du Var intérieur.",
      },
      {
        title: "Aéroport Nice",
        desc: "Transferts vacances ou affaires avec tarif fixe communiqué à l'avance.",
      },
      {
        title: "Service 7j/7",
        desc: "Dimanche et jours fériés : même numéro, même engagement de ponctualité.",
      },
      {
        title: "Chauffeurs locaux",
        desc: "Itinéraires optimisés Lorgues–Taradeau–Draguignan sans détours inutiles.",
      },
    ],
    serviceAreas: [
      "Centre-ville Lorgues",
      "Domaines viticoles",
      "Taradeau (voisinage)",
      "Lotissements périphériques",
      "Draguignan (liaison)",
      "Gare Les Arcs (correspondance)",
    ],
    frequentRoutes: [
      { title: "Lorgues → Draguignan", desc: "CHD ou centre administratif.", href: "/taxi-draguignan" },
      { title: "Lorgues → Taradeau", desc: "Commune voisine en quelques minutes.", href: "/taxi-taradeau" },
      { title: "Lorgues → gare Les Arcs", desc: "Départ tôt le matin possible.", href: "/taxi-gare-les-arcs-draguignan" },
      { title: "Lorgues → aéroport Nice", desc: "Transfert vacances ou affaires.", href: "/taxi-aeroport-nice-dracenie" },
    ],
    services: [
      { label: "Aéroport Nice", href: "/taxi-aeroport-nice-dracenie" },
      { label: "Gare Les Arcs", href: "/taxi-gare-les-arcs-draguignan" },
      { label: "Taxi conventionné", href: "/taxi-conventionne-dracenie" },
    ],
    showCpam: true,
    showAirport: true,
    nearbyCities: [
      { label: "Taradeau", href: "/taxi-taradeau" },
      { label: "Draguignan", href: "/taxi-draguignan" },
      { label: "Vidauban", href: "/taxi-vidauban" },
      { label: "Flayosc", href: "/taxi-flayosc" },
    ],
    faq: [
      {
        q: "Taxi Lorgues le dimanche : disponible ?",
        a: "Oui, 24h/24 et 7j/7 sur réservation ou appel direct.",
        aText: "Oui, service 24h/24 et 7j/7 sur réservation ou appel direct.",
      },
      {
        q: "Combien de temps entre Lorgues et la gare Les Arcs en taxi ?",
        a: "Comptez environ 25 à 40 minutes selon le trafic et votre point de départ à Lorgues (centre-ville, domaine ou lotissement).",
        aText:
          "Environ 25 à 40 minutes selon trafic et point de départ à Lorgues.",
      },
      {
        q: "Proposez-vous un taxi Lorgues → aéroport Nice ?",
        a: "Oui, transfert direct pour les séjours estivaux ou les départs professionnels. Horaire calé sur votre vol, tarif annoncé au 04 22 46 04 62 avant confirmation.",
        aText:
          "Oui, transfert direct vers Nice — horaire adapté au vol, tarif annoncé au téléphone.",
      },
      {
        q: "Peut-on réserver un taxi Lorgues → Draguignan pour le CHD ?",
        a: "Oui, trajet régulier vers le Centre Hospitalier de la Dracénie pour consultations, imagerie ou hospitalisation de jour. Option taxi conventionné CPAM selon éligibilité.",
        aText:
          "Oui, trajet vers le CHD — taxi conventionné CPAM selon éligibilité.",
      },
      {
        q: "Faites-vous Lorgues → Taradeau en taxi ?",
        a: "Oui, trajet court et fréquent entre les deux communes voisines — idéal pour un rendez-vous, un dépôt en gare ou une course locale.",
        aText:
          "Oui, trajet court et fréquent entre Lorgues et Taradeau.",
      },
    ],
  },

  "taxi-taradeau": {
    slug: "taxi-taradeau",
    name: "Taradeau",
    h1: "Taxi à Taradeau — village provençal & Dracénie",
    title: "Taxi Taradeau | Lorgues, Draguignan & gare Les Arcs",
    description:
      "Taxi à Taradeau : courses locales, Lorgues, Draguignan et transferts gare ou aéroport. Taxis La Dracénie — 04 22 46 04 62.",
    keywords: ["taxi Taradeau", "taxi Taradeau Lorgues"],
    intro:
      "Taradeau, entre vignes et collines, compte sur un taxi de proximité. Taxis La Dracénie desservent le village pour les courses quotidiennes et les liaisons vers Lorgues ou Draguignan.",
    localContext:
      "Accès parfois étroits dans le village : nos chauffeurs connaissent les itinéraires adaptés. Trajets vers CHD, gare Les Arcs ou aéroport sur rendez-vous.",
    landmarks: ["Centre Taradeau", "Lorgues", "Draguignan", "Les Arcs"],
    realTransfersText:
      "Taradeau étant un village compact, nos trajets les plus courants mènent vers Lorgues pour les commerces, Draguignan pour le CHD ou l'administratif, et la gare Les Arcs pour les départs en vacances. Les transferts aéroport Nice partent souvent tôt le matin depuis les hameaux du secteur.",
    whyChooseUs: [
      {
        title: "Village & ruelles",
        desc: "Chauffeurs qui connaissent les accès étroits et les points de rendez-vous pratiques.",
      },
      {
        title: "Lorgues à proximité",
        desc: "Trajet quotidien Taradeau–Lorgues en quelques minutes, sur appel ou rendez-vous.",
      },
      {
        title: "Santé à Draguignan",
        desc: "Consultations CHD et spécialistes — transport médical conventionné possible.",
      },
      {
        title: "Gare & aéroport",
        desc: "Correspondances TGV et transferts Nice planifiés la veille si besoin.",
      },
      {
        title: "Réponse rapide",
        desc: "Un appel suffit pour confirmer délai et tarif depuis Taradeau.",
      },
      {
        title: "Dracénie maîtrisée",
        desc: "Liaisons vers Vidauban, Lorgues et l'ensemble du territoire dracénois.",
      },
    ],
    serviceAreas: [
      "Centre Taradeau",
      "Hameaux du village",
      "Lorgues (voisinage)",
      "Draguignan (liaison)",
      "Gare Les Arcs (correspondance)",
      "Aéroport Nice (transfert)",
    ],
    frequentRoutes: [
      { title: "Taradeau → Lorgues", desc: "Marché, commerces, rendez-vous.", href: "/taxi-lorgues" },
      { title: "Taradeau → Draguignan", desc: "Santé et administratif.", href: "/taxi-draguignan" },
      { title: "Taradeau → gare Les Arcs", desc: "Vacances et déplacements pro.", href: "/taxi-gare-les-arcs-draguignan" },
    ],
    services: [
      { label: "Gare Les Arcs", href: "/taxi-gare-les-arcs-draguignan" },
      { label: "Aéroport Nice", href: "/taxi-aeroport-nice-dracenie" },
      { label: "Transport médical", href: "/transport-medical-conventionne-dracenie" },
    ],
    showCpam: true,
    showAirport: true,
    nearbyCities: [
      { label: "Lorgues", href: "/taxi-lorgues" },
      { label: "Draguignan", href: "/taxi-draguignan" },
      { label: "Vidauban", href: "/taxi-vidauban" },
    ],
    faq: [
      {
        q: "Peut-on réserver un taxi à Taradeau la veille ?",
        a: "Oui, recommandé pour les trains matinaux ou les rendez-vous médicaux.",
        aText: "Oui, recommandé pour les trains matinaux ou les rendez-vous médicaux.",
      },
    ],
  },

  "taxi-flayosc": {
    slug: "taxi-flayosc",
    name: "Flayosc",
    h1: "Taxi à Flayosc — Var intérieur & Dracénie",
    title: "Taxi Flayosc | Draguignan, Les Arcs, aéroport Nice",
    description:
      "Taxi à Flayosc : centre village, Draguignan, gare Les Arcs et transferts longue distance. Taxis La Dracénie — 04 22 46 04 62.",
    keywords: ["taxi Flayosc", "taxi Flayosc Draguignan"],
    intro:
      "Flayosc, perché au-dessus de la plaine, mérite un taxi ponctuel pour descendre vers Draguignan ou la gare. Taxis La Dracénie interviennent au centre et dans les hameaux.",
    localContext:
      "Liaisons régulières avec Draguignan, Trans-en-Provence, Figanières et la gare Les Arcs-Draguignan. Transferts aéroport Nice planifiés avec marge de sécurité.",
    landmarks: ["Centre Flayosc", "Draguignan", "Trans-en-Provence", "Gare Les Arcs"],
    realTransfersText:
      "Depuis Flayosc, village perché, nous descendons régulièrement vers Draguignan pour le CHD et les rendez-vous médicaux, vers Trans-en-Provence pour les liaisons inter-villages, et vers la gare Les Arcs ou l'aéroport Nice pour les départs plus lointains. Les trajets matinaux sont fréquents en semaine.",
    whyChooseUs: [
      {
        title: "Village en hauteur",
        desc: "Itinéraires adaptés depuis le centre Flayosc et les hameaux des collines.",
      },
      {
        title: "CHD Draguignan",
        desc: "Trajets médicaux quotidiens — option taxi conventionné CPAM selon dossier.",
      },
      {
        title: "Gare Les Arcs",
        desc: "Correspondance TGV depuis Flayosc avec marge sur la descente du village.",
      },
      {
        title: "Aéroport Nice",
        desc: "Départs tôt le matin possibles — horaire calé sur votre vol.",
      },
      {
        title: "24h/24",
        desc: "Service de nuit pour retours de gare ou urgences locales.",
      },
      {
        title: "Secteur connu",
        desc: "Flayosc, Figanières et Trans-en-Provence : un seul interlocuteur taxi.",
      },
    ],
    serviceAreas: [
      "Centre Flayosc",
      "Hameaux des collines",
      "Trans-en-Provence (liaison)",
      "Figanières (voisinage)",
      "Draguignan CHD",
      "Gare Les Arcs (correspondance)",
    ],
    frequentRoutes: [
      { title: "Flayosc → Draguignan", desc: "CHD et centre-ville.", href: "/taxi-draguignan" },
      { title: "Flayosc → Trans-en-Provence", desc: "Trajet inter-villages.", href: "/taxi-trans-en-provence" },
      { title: "Flayosc → aéroport Nice", desc: "Départ tôt possible.", href: "/taxi-aeroport-nice-dracenie" },
    ],
    services: [
      { label: "Taxi conventionné", href: "/taxi-conventionne-dracenie" },
      { label: "Gare Les Arcs", href: "/taxi-gare-les-arcs-draguignan" },
      { label: "Aéroport Nice", href: "/taxi-aeroport-nice-dracenie" },
    ],
    showCpam: true,
    showAirport: true,
    nearbyCities: [
      { label: "Draguignan", href: "/taxi-draguignan" },
      { label: "Figanières", href: "/taxi-figanieres" },
      { label: "Trans-en-Provence", href: "/taxi-trans-en-provence" },
    ],
    faq: [
      {
        q: "Taxi Flayosc nuit : possible ?",
        a: "Oui, service 24h/24 — appelez le 04 22 46 04 62.",
        aText: "Oui, service 24h/24 sur appel direct.",
      },
    ],
  },

  "taxi-figanieres": {
    slug: "taxi-figanieres",
    name: "Figanières",
    h1: "Taxi à Figanières — calme provençal & accès Dracénie",
    title: "Taxi Figanières | Draguignan, CHD & gare Les Arcs",
    description:
      "Taxi à Figanières : village tranquille, liaisons Draguignan, Flayosc et gare TGV. Taxis La Dracénie — 04 22 46 04 62.",
    keywords: ["taxi Figanières", "taxi Figanières Draguignan"],
    intro:
      "Figanières offre un cadre de vie paisible ; pour vos rendez-vous à Draguignan ou votre train aux Arcs, Taxis La Dracénie assurent la liaison sans changement.",
    localContext:
      "Proximité de Flayosc et Trans-en-Provence : nous enchaînons souvent Figanières → CHD ou gare Les Arcs-Draguignan pour les habitants du secteur.",
    landmarks: ["Centre Figanières", "Draguignan", "Flayosc", "CHD"],
    realTransfersText:
      "Figanières, village calme du Var intérieur, génère surtout des trajets vers Draguignan CHD, Flayosc voisin et la gare Les Arcs-Draguignan. Nous accompagnons aussi les habitants vers des consultations spécialisées hors Dracénie, en taxi conventionné lorsque le dossier CPAM le permet.",
    whyChooseUs: [
      {
        title: "Calme & ponctualité",
        desc: "Service adapté aux habitants de Figanières qui planifient leurs rendez-vous à l'avance.",
      },
      {
        title: "CHD & médical",
        desc: "Trajets hospitaliers vers Draguignan — transport assis sous éligibilité.",
      },
      {
        title: "Voisinage Flayosc",
        desc: "Liaisons courtes entre villages sans changement de chauffeur.",
      },
      {
        title: "Gare TGV",
        desc: "Correspondance Les Arcs-Draguignan depuis Figanières, bagages pris en charge.",
      },
      {
        title: "Appel unique",
        desc: "04 22 46 04 62 — réservation et devis en une conversation.",
      },
      {
        title: "Dracénie nord",
        desc: "Couverture Figanières, Flayosc, Trans-en-Provence et Draguignan.",
      },
    ],
    serviceAreas: [
      "Centre Figanières",
      "Hameaux du village",
      "Flayosc (liaison)",
      "Trans-en-Provence (liaison)",
      "Draguignan CHD",
      "Gare Les Arcs (correspondance)",
    ],
    frequentRoutes: [
      { title: "Figanières → Draguignan", desc: "Consultations et courses.", href: "/taxi-draguignan" },
      { title: "Figanières → Flayosc", desc: "Voisinage immédiat.", href: "/taxi-flayosc" },
      { title: "Figanières → gare Les Arcs", desc: "Train TGV ou TER.", href: "/taxi-gare-les-arcs-draguignan" },
    ],
    services: [
      { label: "Transport médical CHD", href: "/transport-medical-conventionne-dracenie" },
      { label: "Taxi conventionné", href: "/taxi-conventionne-dracenie" },
      { label: "Gare Les Arcs", href: "/taxi-gare-les-arcs-draguignan" },
    ],
    showCpam: true,
    showAirport: false,
    nearbyCities: [
      { label: "Draguignan", href: "/taxi-draguignan" },
      { label: "Flayosc", href: "/taxi-flayosc" },
      { label: "Trans-en-Provence", href: "/taxi-trans-en-provence" },
    ],
    faq: [
      {
        q: "Combien de temps Figanières → CHD ?",
        a: "Environ 20 à 30 minutes selon l'itinéraire et le trafic vers Draguignan.",
        aText: "Environ 20 à 30 minutes selon l'itinéraire et le trafic vers Draguignan.",
      },
    ],
  },
};

export const cities = hydrateContactStrings(rawCities);

export function getCityBySlug(slug) {
  return cities[slug] || null;
}

export function getAllCitySlugs() {
  return Object.keys(cities);
}
