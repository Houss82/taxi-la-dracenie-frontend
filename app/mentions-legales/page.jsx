import { buildPageMetadata } from "@/app/lib/seo";
import {
  SITE_EMAIL,
  SITE_EMAIL_MAILTO,
  SITE_PHONE_DISPLAY,
} from "@/app/lib/contact";
import { COLLECTIF_NAME, COLLECTIF_URL, SITE_NAME } from "@/app/lib/site";

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
        <strong>Éditeur du site :</strong> {SITE_NAME} — Vidauban, Var.
      </p>
      <p>
        <strong>Contact réservation :</strong> {SITE_PHONE_DISPLAY} —{" "}
        <a href={SITE_EMAIL_MAILTO} className="text-accent hover:underline">
          {SITE_EMAIL}
        </a>
      </p>
      <p>
        <strong>Partenaire opérationnel :</strong> les demandes de réservation
        formulées via ce site sont centralisées et traitées en lien avec les
        chauffeurs indépendants du{" "}
        <a
          href={COLLECTIF_URL}
          className="text-accent hover:underline"
          rel="noopener noreferrer"
          target="_blank"
        >
          {COLLECTIF_NAME}
        </a>
        . {SITE_NAME} reste la marque locale présentée sur ce site ; le Collectif
        assure l&apos;organisation opérationnelle des courses selon les
        disponibilités des chauffeurs.
      </p>
      <p>
        <strong>Hébergement :</strong> à compléter lors de la mise en production.
      </p>
      <p className="text-sm text-gray-600">
        Raison sociale, SIRET, adresse postale complète et responsable de
        publication : informations à confirmer avant publication définitive.
      </p>
    </div>
  );
}
