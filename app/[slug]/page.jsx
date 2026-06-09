import { notFound } from "next/navigation";
import CityPageContent from "@/app/components/CityPageContent";
import ServicePageContent from "@/app/components/ServicePageContent";
import { resolvePage, getAllPageSlugs } from "@/app/lib/pages";
import { hydrateContactStrings } from "@/app/lib/hydrate-contact";
import { buildPageMetadata } from "@/app/lib/seo";

export const revalidate = 86400;

export async function generateStaticParams() {
  return getAllPageSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = resolvePage(slug);
  if (!page) return {};

  const { data } = page;
  const hydrated = hydrateContactStrings(data);
  return buildPageMetadata({
    title: hydrated.title,
    description: hydrated.description,
    path: `/${hydrated.slug}`,
    keywords: hydrated.keywords,
  });
}

export default async function DynamicPage({ params }) {
  const { slug } = await params;
  const page = resolvePage(slug);
  if (!page) notFound();

  if (page.type === "city") {
    return <CityPageContent city={page.data} />;
  }

  return <ServicePageContent service={page.data} />;
}
