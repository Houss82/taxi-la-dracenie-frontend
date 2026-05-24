export const dynamic = "force-dynamic";

import MerciPageClient from "@/app/components/client/MerciPageClient";
import { SITE_URL } from "@/app/lib/site";

export const metadata = {
  title: "Demande envoyée",
  description:
    "Votre demande de réservation Taxis La Dracénie a bien été prise en compte.",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: `${SITE_URL}/merci`,
  },
};

export default function MerciPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <MerciPageClient />
    </main>
  );
}
