import { Inter } from "next/font/google";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MobileScrollCTA from "./components/client/MobileScrollCTA";
import { Providers } from "./providers";
import "./globals.css";
import { SITE_NAME, SITE_URL } from "./lib/site";
import { SITE_PHONE_DISPLAY } from "./lib/contact";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Taxi en Dracénie – Vidauban, Draguignan, Le Muy & Les Arcs | Taxis La Dracénie",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    `Taxis La Dracénie : taxi Vidauban, Draguignan, Le Muy, Les Arcs. Conventionné CPAM, gare Les Arcs, aéroports Nice & Marseille. 24h/24 — ${SITE_PHONE_DISPLAY}.`,
  keywords: [
    "taxi Dracénie",
    "taxi Vidauban",
    "taxi Draguignan",
    "taxi conventionné Dracénie",
    "taxi gare Les Arcs Draguignan",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Taxi en Dracénie – Taxis La Dracénie",
    description:
      "Transport privé et conventionné CPAM en Dracénie. Vidauban, Draguignan, gare & aéroports.",
    url: "/",
    siteName: SITE_NAME,
    locale: "fr_FR",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export const revalidate = 86400;

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`} suppressHydrationWarning>
        <Providers>
          <Header />
          <main className="min-h-screen pb-28 md:pb-0">{children}</main>
          <Footer />
          <MobileScrollCTA />
        </Providers>
      </body>
    </html>
  );
}
