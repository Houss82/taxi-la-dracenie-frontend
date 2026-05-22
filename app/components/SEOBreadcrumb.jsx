import Link from "next/link";
import Script from "next/script";
import { SITE_URL } from "@/app/lib/site";

export default function SEOBreadcrumb({ items = [], hideVisual = false }) {
  if (items.length === 0) return null;

  const toAbsoluteUrl = (url) => {
    if (!url) return SITE_URL;
    if (url.startsWith("http://") || url.startsWith("https://")) {
      return url;
    }
    return `${SITE_URL}${url.startsWith("/") ? url : `/${url}`}`;
  };

  const allItems =
    items[0]?.name === "Accueil"
      ? items
      : [{ name: "Accueil", url: "/" }, ...items];

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: toAbsoluteUrl(item.url || item.href),
    })),
  };

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />
      {!hideVisual && (
        <nav
          aria-label="Fil d'Ariane"
          className="flex items-center space-x-2 text-sm text-gray-600 mb-4"
        >
          {allItems.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              {index > 0 && <span className="text-gray-400">/</span>}
              {index === allItems.length - 1 ? (
                <span className="text-gray-900 font-medium" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.url || item.href || "/"}
                  className="hover:text-accent transition-colors"
                  title={item.title || item.name}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </nav>
      )}
    </>
  );
}
