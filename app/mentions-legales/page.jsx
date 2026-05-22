import { buildPageMetadata } from "@/app/lib/seo";
import { SITE_EMAIL, SITE_EMAIL_MAILTO, SITE_PHONE_DISPLAY } from "@/app/lib/contact";

export const metadata = buildPageMetadata({
  title: "Mentions légales",
  description: "Mentions légales du site Taxis La Dracénie.",
  path: "/mentions-legales",
});

export default function MentionsLegalesPage() {
  return (
    <div className="pt-24 pb-16 max-w-3xl mx-auto px-4 sm:px-6 prose prose-gray">
      <h1>Mentions légales</h1>
      <p>
        <strong>Éditeur :</strong> Taxis La Dracénie — Vidauban, Var.
      </p>
      <p>
        <strong>Contact :</strong> {SITE_PHONE_DISPLAY} —{" "}
        <a href={SITE_EMAIL_MAILTO} className="text-accent hover:underline">
          {SITE_EMAIL}
        </a>
      </p>
      <p>
        <strong>Hébergement :</strong> à compléter lors de la mise en production.
      </p>
    </div>
  );
}
