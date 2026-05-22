import { Mail, MessageCircle, Phone } from "lucide-react";
import HeroCTAs from "@/app/components/HeroCTAs";
import {
  SITE_EMAIL,
  SITE_EMAIL_MAILTO,
  SITE_PHONE_DISPLAY,
  SITE_PHONE_TEL,
  SITE_WHATSAPP_URL,
} from "@/app/lib/contact";
import { buildPageMetadata } from "@/app/lib/seo";

export const metadata = buildPageMetadata({
  title: "Contact Taxis La Dracénie",
  description:
    "Contactez Taxis La Dracénie par téléphone, WhatsApp ou email. Vidauban, Dracénie — 24h/24.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Contact — Taxis La Dracénie
        </h1>
        <p className="text-gray-700 mb-8 leading-relaxed">
          Pour une course immédiate, privilégiez l&apos;appel ou WhatsApp. Réponse
          directe, devis clair selon votre trajet en Dracénie.
        </p>
        <HeroCTAs className="mb-10" />
        <ul className="site-card space-y-4 bg-white rounded-2xl border p-6">
          <li className="flex flex-col items-center gap-2 text-center">
            <Phone className="w-5 h-5 text-accent" />
            <a href={SITE_PHONE_TEL} className="font-bold tabular-nums hover:underline">
              {SITE_PHONE_DISPLAY}
            </a>
          </li>
          <li className="flex flex-col items-center gap-2 text-center">
            <MessageCircle className="w-5 h-5 text-[#25D366]" />
            <a href={SITE_WHATSAPP_URL} className="font-medium hover:underline">
              WhatsApp
            </a>
          </li>
          <li className="flex flex-col items-center gap-2 text-center">
            <Mail className="w-5 h-5 text-accent" />
            <a href={SITE_EMAIL_MAILTO} className="font-medium hover:underline">
              {SITE_EMAIL}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
