import { CalendarCheck, MessageCircle, Phone } from "lucide-react";
import {
  SITE_PHONE_DISPLAY,
  SITE_PHONE_TEL,
  SITE_WHATSAPP_URL,
} from "@/app/lib/contact";
import Button from "./ui/Button";

export default function HeroCTAs({ className = "", secondary = "reservation" }) {
  return (
    <div className={`flex flex-col sm:flex-row gap-3 ${className}`}>
      <Button
        href={SITE_PHONE_TEL}
        variant="call"
        size="xl"
        className="w-full sm:w-auto font-bold"
        aria-label={`Appeler Taxis La Dracénie au ${SITE_PHONE_DISPLAY}`}
      >
        <Phone className="w-5 h-5 shrink-0" aria-hidden />
        Appeler maintenant
      </Button>
      {secondary === "reservation" ? (
        <Button
          href="/reservation"
          variant="reservation"
          size="xl"
          className="w-full sm:w-auto font-bold"
        >
          <CalendarCheck className="w-5 h-5 shrink-0" aria-hidden />
          Réserver en ligne
        </Button>
      ) : (
        <Button
          href={SITE_WHATSAPP_URL}
          variant="whatsapp"
          size="xl"
          className="w-full sm:w-auto font-bold"
          aria-label="Contacter Taxis La Dracénie sur WhatsApp"
        >
          <MessageCircle className="w-5 h-5 shrink-0" aria-hidden />
          WhatsApp
        </Button>
      )}
    </div>
  );
}

export function PhoneBanner({ label = "Réponse immédiate" }) {
  return (
    <a
      href={SITE_PHONE_TEL}
      className="group flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-white text-zinc-900 shadow-lg ring-1 ring-white/30 transition hover:bg-zinc-50 px-5 py-4"
      aria-label={`Appeler au ${SITE_PHONE_DISPLAY}`}
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground site-logo-mark">
        <Phone className="h-5 w-5" aria-hidden />
      </span>
      <span className="text-left">
        <span className="block text-xs font-semibold text-zinc-500 uppercase tracking-wide">
          {label}
        </span>
        <span className="font-mono text-lg font-bold tabular-nums">
          {SITE_PHONE_DISPLAY}
        </span>
      </span>
    </a>
  );
}
