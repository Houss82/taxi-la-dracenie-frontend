import ReservationForm from "@/app/components/client/ReservationForm";
import HeroCTAs from "@/app/components/HeroCTAs";
import { SITE_PHONE_DISPLAY } from "@/app/lib/contact";
import { buildPageMetadata } from "@/app/lib/seo";

export const metadata = buildPageMetadata({
  title: "Réservation taxi Dracénie",
  description: `Réservez votre taxi en Dracénie en ligne ou appelez le ${SITE_PHONE_DISPLAY}.`,
  path: "/reservation",
});

export default function ReservationPage() {
  return (
    <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          Réservation taxi Dracénie
        </h1>
        <p className="text-gray-600 mb-6">
          Pour une course immédiate, appelez le {SITE_PHONE_DISPLAY}. Le formulaire
          sert aux trajets planifiés.
        </p>
        <HeroCTAs className="mb-8" />
        <ReservationForm />
      </div>
    </div>
  );
}
