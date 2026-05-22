import Link from "next/link";
import HeaderClient from "./client/HeaderClient";

const navItems = [
  {
    label: "Villes",
    href: "/taxi-vidauban",
    subItems: [
      { label: "Taxi Vidauban", href: "/taxi-vidauban" },
      { label: "Taxi Draguignan", href: "/taxi-draguignan" },
      { label: "Taxi Le Muy", href: "/taxi-le-muy" },
      { label: "Taxi Les Arcs", href: "/taxi-les-arcs" },
      { label: "Taxi Lorgues", href: "/taxi-lorgues" },
    ],
  },
  {
    label: "Services",
    href: "/taxi-conventionne-dracenie",
    subItems: [
      { label: "Taxi conventionné CPAM", href: "/taxi-conventionne-dracenie" },
      { label: "Transport médical", href: "/transport-medical-conventionne-dracenie" },
      { label: "Aéroport Nice", href: "/taxi-aeroport-nice-dracenie" },
      { label: "Aéroport Marseille", href: "/taxi-aeroport-marseille-dracenie" },
      { label: "Gare Les Arcs", href: "/taxi-gare-les-arcs-draguignan" },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Réservation", href: "/reservation" },
];

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-[120]">
      <HeaderClient navItems={navItems}>
        <Link href="/" className="flex items-center gap-2">
          <div className="site-logo-mark w-10 h-10 bg-accent rounded-full flex items-center justify-center">
            <span className="text-accent-foreground font-bold text-lg">D</span>
          </div>
          <span className="font-bold text-lg sm:text-xl">Taxis La Dracénie</span>
        </Link>
      </HeaderClient>
    </header>
  );
}
