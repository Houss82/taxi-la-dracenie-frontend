import HomePage from "./components/home/HomePage";
import { SITE_PHONE_DISPLAY } from "./lib/contact";
import { SITE_URL } from "./lib/site";

export const revalidate = 86400;

export const metadata = {
  title:
    "Taxi Dracénie – Vidauban, Draguignan, Le Muy & Taxi Conventionné CPAM",
  description: `Taxi local 24h/24 en Dracénie. Vidauban, Draguignan, gare Les Arcs, aéroports Nice/Marseille et transport médical CPAM. Appelez le ${SITE_PHONE_DISPLAY}.`,
  alternates: { canonical: `${SITE_URL}/` },
};

export default function Page() {
  return <HomePage />;
}
