import BlogPagination, {
  BLOG_POSTS_PER_PAGE,
} from "@/app/components/BlogPagination";
import SEOBreadcrumb from "@/app/components/SEOBreadcrumb";
import { getAllPosts } from "@/lib/blog";
import blogCategories, {
  getCategoryById,
  getCategoryIdFromArticleCategory,
} from "@/lib/blogCategories";
import {
  BookOpen,
  Building2,
  Calendar,
  Car,
  Clock,
  Compass,
  Heart,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 3600;

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPage({ searchParams }) {
  const allPosts = getAllPosts();
  const resolvedSearchParams = await searchParams;
  const selectedCategoryId = resolvedSearchParams?.category || null;
  const selectedCategory = selectedCategoryId
    ? getCategoryById(selectedCategoryId)
    : null;

  let filteredPosts = allPosts;
  if (selectedCategory) {
    filteredPosts = allPosts.filter((post) => {
      const postCategoryId = getCategoryIdFromArticleCategory(post.category);
      return postCategoryId === selectedCategoryId;
    });
  }

  const totalFiltered = filteredPosts.length;
  const totalPages = Math.max(
    1,
    Math.ceil(totalFiltered / BLOG_POSTS_PER_PAGE),
  );

  const rawPage = Number(resolvedSearchParams?.page);
  const requestedPage =
    Number.isFinite(rawPage) && rawPage >= 1 ? Math.floor(rawPage) : 1;
  const currentPage = Math.min(requestedPage, totalPages);

  const sliceStart = (currentPage - 1) * BLOG_POSTS_PER_PAGE;
  const displayedPosts = filteredPosts.slice(
    sliceStart,
    sliceStart + BLOG_POSTS_PER_PAGE,
  );

  const breadcrumbItems = [
    {
      name: "Blog",
      url: "/blog",
      title: "Blog Taxis La Dracénie",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b mt-20 sm:mt-0">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <SEOBreadcrumb items={breadcrumbItems} />
        </div>
      </div>

      <section className="hero-section relative h-[50vh] overflow-hidden">
        <Image
          src="/hero-taxi-lamparo-dracenie.jpg"
          alt="Blog Taxis La Dracénie"
          fill
          className="hero-bg-image"
          priority
          quality={92}
          sizes="100vw"
        />
        <div className="hero-bg-overlay hero-bg-overlay--blog absolute inset-0" />
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="hero-text-panel text-white max-w-3xl space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold">
              Blog & Actualités Taxis La Dracénie
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Guides pratiques, conseils transfert et actualités mobilité en
              Dracénie.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-linear-to-br from-gray-50 to-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Explorez nos catégories
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Articles organisés par thématiques : CHD, gare Les Arcs, aéroports,
              taxi conventionné CPAM.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogCategories.map((category) => {
              const isActive = selectedCategoryId === category.id;
              const categoryPosts = allPosts.filter((post) => {
                const postCategoryId = getCategoryIdFromArticleCategory(
                  post.category,
                );
                return postCategoryId === category.id;
              });
              const postCount = categoryPosts.length;

              const iconMap = {
                Car,
                Compass,
                Building2,
                Heart,
                BookOpen,
              };
              const IconComponent = iconMap[category.icon] || Car;

              return (
                <Link
                  key={category.id}
                  href={isActive ? "/blog" : `/blog?category=${category.id}`}
                  className={`blog-category-card block rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-2 ${
                    isActive
                      ? `${category.color.bg} ${category.color.border} border-2`
                      : `bg-white ${category.color.border} hover:${category.color.hover}`
                  }`}
                >
                  <div
                    className={`flex items-center gap-3 mb-4 p-3 rounded-xl ${category.color.iconBg}`}
                  >
                    <IconComponent
                      className={`w-6 h-6 shrink-0 ${category.color.iconColor}`}
                    />
                    <h3
                      className={`flex-1 min-w-0 text-xl font-bold text-left ${
                        isActive ? category.color.text : "text-gray-900"
                      }`}
                    >
                      {category.label}
                    </h3>
                    {postCount > 0 && (
                      <span
                        className={`px-2 py-1 ${category.color.bg} ${category.color.text} rounded-full text-xs font-semibold shrink-0`}
                      >
                        {postCount}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed text-left">
                    {category.description}
                  </p>
                </Link>
              );
            })}
          </div>
          {selectedCategory && (
            <div className="mt-6 text-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
              >
                Voir tous les articles
              </Link>
            </div>
          )}
        </div>
      </section>

      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {selectedCategory
                ? `Articles : ${selectedCategory.label}`
                : "Dernières publications"}
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
              {selectedCategory
                ? `Découvrez tous nos articles dans la catégorie "${selectedCategory.label}".`
                : "Guides dédiés au CHD Draguignan, à la gare Les Arcs-Draguignan, aux transferts aéroport Nice/Marseille et au taxi conventionné CPAM en Dracénie."}
            </p>
          </div>
        </div>
      </section>

      <section id="articles" className="scroll-mt-28 py-16">
        <div className="max-w-7xl mx-auto px-4">
          {displayedPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600">
                Aucun article disponible pour le moment.
              </p>
              <p className="text-gray-500 mt-2">
                Revenez bientôt pour découvrir nos actualités !
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedPosts.map((post) => {
                const postCategoryId = getCategoryIdFromArticleCategory(
                  post.category,
                );
                const postCategory = postCategoryId
                  ? getCategoryById(postCategoryId)
                  : null;

                return (
                  <article
                    key={post.slug}
                    className="site-card bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="relative">
                      <Link href={`/blog/${post.slug}`} prefetch>
                        <div className="relative h-64 overflow-hidden group">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105 brightness-105 contrast-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                            quality={90}
                            priority={post.slug === displayedPosts[0]?.slug}
                          />
                        </div>
                      </Link>
                      {postCategory && (
                        <Link
                          href={`/blog?category=${postCategory.id}`}
                          className="absolute top-4 left-4 z-10"
                        >
                          <span
                            className={`px-3 py-1 ${postCategory.color.bg} ${postCategory.color.text} rounded-full text-xs font-semibold uppercase tracking-wide hover:opacity-80 transition-opacity border ${postCategory.color.border}`}
                          >
                            {postCategory.label}
                          </span>
                        </Link>
                      )}
                    </div>

                    <div className="p-6 space-y-4 w-full">
                      <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {formatDate(post.date)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />5 min
                        </span>
                      </div>

                      <Link href={`/blog/${post.slug}`} prefetch>
                        <h2 className="text-2xl font-bold text-gray-900 leading-tight hover:text-primary transition-colors">
                          {post.title}
                        </h2>
                      </Link>

                      <p className="text-gray-600 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex flex-col items-center gap-3 pt-4 border-t border-gray-100">
                        <span className="flex items-center gap-2 text-sm text-gray-500">
                          <User className="w-4 h-4" />
                          {post.author}
                        </span>
                        <Link
                          href={`/blog/${post.slug}`}
                          prefetch
                          className="text-primary font-semibold hover:underline"
                        >
                          Lire plus →
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
          {totalFiltered > 0 && (
            <BlogPagination
              currentPage={currentPage}
              totalPages={totalPages}
              totalPosts={totalFiltered}
              categoryId={selectedCategoryId}
            />
          )}
        </div>
      </section>
    </div>
  );
}
