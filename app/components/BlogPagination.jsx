import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export const BLOG_POSTS_PER_PAGE = 9;

export function buildBlogHref({ categoryId, page = 1 }) {
  const params = new URLSearchParams();
  if (categoryId) params.set("category", categoryId);
  if (page > 1) params.set("page", String(page));
  const qs = params.toString();
  return qs ? `/blog?${qs}` : "/blog";
}

function getVisiblePages(current, total) {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }
  const pages = new Set([1, total, current, current - 1, current + 1]);
  const sorted = [...pages]
    .filter((p) => p >= 1 && p <= total)
    .sort((a, b) => a - b);
  const out = [];
  for (let i = 0; i < sorted.length; i++) {
    if (i > 0 && sorted[i] - sorted[i - 1] > 1) out.push("ellipsis");
    out.push(sorted[i]);
  }
  return out;
}

export default function BlogPagination({
  currentPage,
  totalPages,
  totalPosts,
  categoryId,
}) {
  if (totalPages <= 1) {
    return (
      <div className="mt-14 flex justify-center px-4">
        <p className="text-sm font-medium text-gray-500">
          <span className="tabular-nums text-gray-900">{totalPosts}</span>{" "}
          article{totalPosts !== 1 ? "s" : ""}
          {categoryId ? " dans cette catégorie" : ""}
        </p>
      </div>
    );
  }

  const start = (currentPage - 1) * BLOG_POSTS_PER_PAGE + 1;
  const end = Math.min(currentPage * BLOG_POSTS_PER_PAGE, totalPosts);
  const visible = getVisiblePages(currentPage, totalPages);
  const prevDisabled = currentPage <= 1;
  const nextDisabled = currentPage >= totalPages;

  return (
    <nav
      className="mt-14 mx-auto max-w-3xl px-4"
      aria-label="Pagination des articles"
    >
      <div className="rounded-2xl border border-gray-200/80 bg-white/90 p-4 shadow-[0_8px_30px_-12px_rgba(15,23,42,0.12)] backdrop-blur-sm md:p-5">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between sm:gap-6">
          <p className="order-2 text-center text-sm text-gray-600 sm:order-1 sm:text-left">
            <span className="tabular-nums font-semibold text-gray-900">
              {start}
            </span>
            {"–"}
            <span className="tabular-nums font-semibold text-gray-900">
              {end}
            </span>
            {" sur "}
            <span className="tabular-nums font-semibold text-gray-900">
              {totalPosts}
            </span>
          </p>

          <div className="order-1 flex w-full flex-wrap items-center justify-center gap-2 sm:order-2 sm:w-auto sm:justify-end">
            {prevDisabled ? (
              <span
                className="inline-flex h-10 min-w-11 items-center justify-center gap-1 rounded-full border border-gray-100 bg-gray-50 px-4 text-sm font-medium text-gray-300"
                aria-disabled="true"
              >
                <ChevronLeft className="h-4 w-4 shrink-0" aria-hidden />
                <span className="hidden sm:inline">Précédent</span>
              </span>
            ) : (
              <Link
                href={buildBlogHref({ categoryId, page: currentPage - 1 })}
                prefetch
                aria-label="Page précédente"
                className="inline-flex h-10 min-w-11 items-center justify-center gap-1 rounded-full border border-gray-200 bg-white px-4 text-sm font-semibold text-gray-700 shadow-sm transition hover:border-gray-300 hover:bg-gray-50 hover:text-gray-900"
              >
                <ChevronLeft className="h-4 w-4 shrink-0" aria-hidden />
                <span className="hidden sm:inline">Précédent</span>
              </Link>
            )}

            <div className="hidden items-center gap-1 px-2 sm:flex" role="group">
              {visible.map((item, idx) =>
                item === "ellipsis" ? (
                  <span
                    key={`e-${idx}`}
                    className="flex h-10 w-8 items-center justify-center text-gray-400"
                    aria-hidden
                  >
                    …
                  </span>
                ) : (
                  <Link
                    key={item}
                    href={buildBlogHref({ categoryId, page: item })}
                    prefetch
                    className={`relative flex h-10 min-w-10 items-center justify-center rounded-full px-3 text-sm font-semibold tabular-nums transition ${
                      item === currentPage
                        ? "bg-primary text-primary-foreground shadow-md ring-2 ring-gray-100"
                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                    }`}
                    aria-current={item === currentPage ? "page" : undefined}
                  >
                    {item}
                  </Link>
                ),
              )}
            </div>

            <p className="flex items-center px-2 text-sm font-medium text-gray-500 sm:hidden">
              Page{" "}
              <span className="mx-1 tabular-nums font-bold text-gray-900">
                {currentPage}
              </span>
              / {totalPages}
            </p>

            {nextDisabled ? (
              <span
                className="inline-flex h-10 min-w-11 items-center justify-center gap-1 rounded-full border border-gray-100 bg-gray-50 px-4 text-sm font-medium text-gray-300"
                aria-disabled="true"
              >
                <span className="hidden sm:inline">Suivant</span>
                <ChevronRight className="h-4 w-4 shrink-0" aria-hidden />
              </span>
            ) : (
              <Link
                href={buildBlogHref({ categoryId, page: currentPage + 1 })}
                prefetch
                aria-label="Page suivante"
                className="inline-flex h-10 min-w-11 items-center justify-center gap-1 rounded-full border border-gray-200 bg-white px-4 text-sm font-semibold text-gray-700 shadow-sm transition hover:border-gray-300 hover:bg-gray-50 hover:text-gray-900"
              >
                <span className="hidden sm:inline">Suivant</span>
                <ChevronRight className="h-4 w-4 shrink-0" aria-hidden />
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
