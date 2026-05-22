import ResponsiveTableWrapper from "@/app/components/ResponsiveTableWrapper";
import SEOBreadcrumb from "@/app/components/SEOBreadcrumb";
import {
  SITE_PHONE_DISPLAY,
  SITE_PHONE_E164,
  SITE_PHONE_TEL,
} from "@/app/lib/contact";
import { SITE_NAME, SITE_URL } from "@/app/lib/site";
import { getAllPosts, getAllPostSlugs, getPostBySlug } from "@/lib/blog";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Script from "next/script";

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((item) => ({ slug: item.slug }));
}

export const revalidate = 3600;

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = getAllPosts();
  const relatedPosts = allPosts.filter((p) => p.slug !== slug).slice(0, 3);

  const breadcrumbItems = [
    { name: "Blog", url: "/blog", title: "Blog Taxis La Dracénie" },
    { name: post.title, url: `/blog/${post.slug}`, title: post.title },
  ];

  const postUrl = `${SITE_URL}/blog/${post.slug}`;
  const imageUrl = post.image.startsWith("http")
    ? post.image
    : `${SITE_URL}${post.image}`;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b pt-24 sm:pt-24">
        <div className="max-w-4xl mx-auto px-6 sm:px-4 pb-4 sm:pb-6">
          <SEOBreadcrumb items={breadcrumbItems} />
        </div>
      </div>

      <article className="pt-4 pb-10">
        <div className="max-w-4xl mx-auto px-6 sm:px-4 pt-6">
          <div className="mb-6">
            <span className="px-4 py-2 bg-primary text-white rounded-full text-sm font-semibold">
              {post.category}
            </span>
          </div>

          <h1 className="article-title">{post.title}</h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
            <span>{post.author}</span>
            <span>{formatDate(post.date)}</span>
            <span>5 min de lecture</span>
          </div>

          <div className="relative w-full rounded-2xl overflow-hidden mb-12 bg-gray-50">
            <div className="relative w-full h-[384px] md:h-[600px] lg:h-[700px]">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover brightness-105 contrast-105 saturate-105"
                priority
                quality={92}
                sizes="(max-width: 768px) 100vw, 1200px"
              />
            </div>
          </div>

          <ResponsiveTableWrapper
            className="prose prose-lg max-w-none blog-article"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />

          {post.keywords?.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center gap-2 flex-wrap">
                {post.keywords.map((keyword) => (
                  <span
                    key={keyword}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          )}

          <Script
            id="article-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BlogPosting",
                headline: post.title,
                image: imageUrl,
                datePublished: post.date,
                dateModified: post.date,
                author: {
                  "@type": "Organization",
                  name: post.author || SITE_NAME,
                },
                publisher: {
                  "@type": "Organization",
                  name: SITE_NAME,
                  logo: {
                    "@type": "ImageObject",
                    url: `${SITE_URL}/logo.svg`,
                  },
                },
                description: post.excerpt,
                articleSection: post.category,
                keywords: Array.isArray(post.keywords)
                  ? post.keywords.join(", ")
                  : post.keywords || "",
                mainEntityOfPage: {
                  "@type": "WebPage",
                  "@id": postUrl,
                },
              }),
            }}
          />
        </div>
      </article>

      <section className="py-12 bg-linear-to-br from-brand-subtle to-brand-subtle border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 sm:px-4">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Nos services taxi en Dracénie
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link
                href="/taxi-conventionne-dracenie"
                className="site-card p-4 rounded-xl bg-brand-subtle hover:bg-brand-subtle-border border border-brand-border transition-colors"
              >
                <div className="font-semibold text-gray-900">
                  Taxi conventionné CPAM
                </div>
                <div className="text-sm text-gray-600">Dracénie & CHD</div>
              </Link>
              <Link
                href="/reservation"
                className="site-card p-4 rounded-xl bg-brand-subtle hover:bg-brand-subtle-border border border-brand-border transition-colors"
              >
                <div className="font-semibold text-gray-900">
                  Réserver un taxi
                </div>
                <div className="text-sm text-gray-600">Formulaire en ligne</div>
              </Link>
              <Link
                href="/taxi-gare-les-arcs-draguignan"
                className="site-card p-4 rounded-xl bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 transition-colors"
              >
                <div className="font-semibold text-gray-900">Gare Les Arcs</div>
                <div className="text-sm text-gray-600">TGV & TER 24h/24</div>
              </Link>
              <Link
                href={SITE_PHONE_TEL}
                className="site-card p-4 rounded-xl bg-purple-50 hover:bg-purple-100 border border-purple-200 transition-colors"
              >
                <div className="font-semibold text-gray-900">
                  {SITE_PHONE_DISPLAY}
                </div>
                <div className="text-sm text-gray-600">Appel direct</div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {relatedPosts.length > 0 && (
        <section className="py-16 bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-6 sm:px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Articles similaires
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="group"
                >
                  <div className="site-card bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500 brightness-105 contrast-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-600 line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Script
        id="taxi-service-blog"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TaxiService",
            name: SITE_NAME,
            url: postUrl,
            telephone: SITE_PHONE_E164,
            areaServed: ["Dracénie", "Vidauban", "Draguignan", "Var"],
            description: post.excerpt,
          }),
        }}
      />
    </div>
  );
}
