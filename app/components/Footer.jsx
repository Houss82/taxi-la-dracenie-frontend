import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import {
  SITE_EMAIL,
  SITE_EMAIL_MAILTO,
  SITE_PHONE_DISPLAY,
  SITE_PHONE_TEL,
  SITE_WHATSAPP_URL,
} from "@/app/lib/contact";
import { ALL_CITY_SLUGS } from "@/app/lib/site";
import { cities } from "@/app/lib/cities";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="site-logo-mark w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-sm">D</span>
              </div>
              <span className="font-bold text-lg">Taxis La Dracénie</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Marque locale de taxi en Dracénie : transport privé, conventionné
              CPAM et transferts gare/aéroport. Basés à Vidauban.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Villes</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              {ALL_CITY_SLUGS.slice(0, 6).map((slug) => (
                <li key={slug}>
                  <Link href={`/${slug}`} className="hover:text-accent transition-colors">
                    Taxi {cities[slug].name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <Link href="/taxi-conventionne-dracenie" className="hover:text-accent">
                  Taxi conventionné
                </Link>
              </li>
              <li>
                <Link href="/taxi-aeroport-nice-dracenie" className="hover:text-accent">
                  Aéroport Nice
                </Link>
              </li>
              <li>
                <Link href="/taxi-gare-les-arcs-draguignan" className="hover:text-accent">
                  Gare Les Arcs
                </Link>
              </li>
              <li>
                <Link href="/reservation" className="hover:text-accent">
                  Réservation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0" />
                <a
                  href={SITE_PHONE_TEL}
                  className="hover:text-accent transition-colors font-mono tabular-nums"
                >
                  {SITE_PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0" />
                <a href={SITE_EMAIL_MAILTO} className="hover:text-accent transition-colors">
                  {SITE_EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 shrink-0" />
                <span>Vidauban, Dracénie (Var)</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 shrink-0" />
                <span>24h/24 · 7j/7</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between gap-4 text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Taxis La Dracénie. Tous droits réservés.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/mentions-legales" className="hover:text-accent">
              Mentions légales
            </Link>
            <a href={SITE_WHATSAPP_URL} className="hover:text-accent">
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
