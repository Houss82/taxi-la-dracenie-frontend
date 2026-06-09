const blogCategories = [
  {
    id: "taxi",
    label: "Transferts & Déplacements",
    description:
      "Trajets, tarifs, transferts aéroport, taxi conventionné, longues distances et services de transport.",
    icon: "Car",
    color: {
      bg: "bg-brand-subtle",
      border: "border-brand-border",
      text: "text-brand-dark",
      iconBg: "bg-brand-subtle-border",
      iconColor: "text-accent",
      hover: "hover:bg-brand-subtle-border",
    },
    articleCategories: [
      "Transferts Aéroport",
      "Transferts & Déplacements",
      "Taxi",
      "Transport",
    ],
  },
  {
    id: "voyage",
    label: "Découvertes & Activités",
    description:
      "Destinations, activités, Var intérieur, idées de sorties et découvertes en Dracénie.",
    icon: "Compass",
    color: {
      bg: "bg-pink-50",
      border: "border-pink-200",
      text: "text-pink-700",
      iconBg: "bg-pink-100",
      iconColor: "text-pink-600",
      hover: "hover:bg-pink-100",
    },
    articleCategories: [
      "Tourisme",
      "Voyage & Tourisme",
      "Excursions",
      "Découvertes",
    ],
  },
  {
    id: "local",
    label: "Dracénie & Actualités",
    description:
      "Actualités du territoire, communes, événements et nouveautés en Dracénie.",
    icon: "Building2",
    color: {
      bg: "bg-green-50",
      border: "border-green-200",
      text: "text-green-700",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      hover: "hover:bg-green-100",
    },
    articleCategories: [
      "Partenaires",
      "Actualités",
      "Entreprises",
      "Vie locale & Entreprises",
      "Dracénie & Actualités",
    ],
  },
  {
    id: "sante",
    label: "Services & Accessibilité",
    description:
      "CHD Draguignan, mobilité, taxi conventionné CPAM, transport médical et services de santé.",
    icon: "Heart",
    color: {
      bg: "bg-rose-50",
      border: "border-rose-200",
      text: "text-rose-700",
      iconBg: "bg-rose-100",
      iconColor: "text-rose-600",
      hover: "hover:bg-rose-100",
    },
    articleCategories: ["Santé", "Mobilité", "Transport médical"],
  },
  {
    id: "guides",
    label: "Conseils & Astuces",
    description:
      "Conseils pour voyager, checklists, organisation, sécurité, astuces et guides pratiques.",
    icon: "BookOpen",
    color: {
      bg: "bg-purple-50",
      border: "border-purple-200",
      text: "text-purple-700",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      hover: "hover:bg-purple-100",
    },
    articleCategories: [
      "Guides Pratiques",
      "Guide Pratique",
      "Guides pratiques",
      "Conseils",
      "Conseils Pratiques",
      "Lifestyle",
      "Astuces",
    ],
  },
];

export function getCategoryIdFromArticleCategory(articleCategory) {
  const category = blogCategories.find((cat) =>
    cat.articleCategories.includes(articleCategory),
  );
  return category ? category.id : null;
}

export function getCategoryById(categoryId) {
  return blogCategories.find((cat) => cat.id === categoryId) || null;
}

export default blogCategories;
