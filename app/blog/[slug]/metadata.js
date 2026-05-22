import { getPostBySlug } from "@/lib/blog";
import { SITE_URL } from "@/app/lib/site";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Article non trouvé | Taxis La Dracénie",
      description: "L'article que vous recherchez n'existe pas.",
      robots: { index: false, follow: false },
      alternates: { canonical: `${SITE_URL}/blog` },
    };
  }

  const canonicalUrl = `${SITE_URL}/blog/${post.slug}`;
  const imageUrl = post.image.startsWith("http")
    ? post.image
    : `${SITE_URL}${post.image}`;

  return {
    title: `${post.title} | Taxis La Dracénie`,
    description: post.excerpt || `Découvrez ${post.title.toLowerCase()}.`,
    keywords: Array.isArray(post.keywords)
      ? post.keywords.join(", ")
      : post.keywords || "",
    openGraph: {
      type: "article",
      url: canonicalUrl,
      title: post.title,
      description: post.excerpt,
      siteName: "Taxis La Dracénie",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: "fr_FR",
      publishedTime: post.date,
      section: post.category,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [imageUrl],
    },
    alternates: {
      canonical: canonicalUrl,
      languages: { "fr-FR": canonicalUrl },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
