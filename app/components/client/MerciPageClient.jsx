"use client";

import { CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Button from "@/app/components/ui/Button";
import { SITE_PHONE_DISPLAY, SITE_PHONE_TEL } from "@/app/lib/contact";
import { consumeReservationConfirmationFlag } from "@/app/lib/reservation-confirmation";

export default function MerciPageClient() {
  const router = useRouter();
  const [allowed, setAllowed] = useState(null);

  useEffect(() => {
    const ok = consumeReservationConfirmationFlag();
    if (ok) {
      setAllowed(true);
    } else {
      router.replace("/reservation");
      setAllowed(false);
    }
  }, [router]);

  if (allowed === null) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center px-6">
        <p className="text-gray-500 animate-pulse">Chargement…</p>
      </div>
    );
  }

  if (!allowed) {
    return null;
  }

  return (
    <section className="pt-32 pb-20">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <CheckCircle className="w-16 h-16 text-accent mx-auto mb-6" aria-hidden />
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          Merci, votre demande a bien été envoyée
        </h1>
        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          Nous avons bien reçu votre demande de réservation. Vous serez recontacté
          rapidement pour confirmer l&apos;horaire, le véhicule adapté et le tarif.
          Pensez à vérifier vos emails (et vos spams).
        </p>
        <p className="text-sm text-gray-500 mb-10">
          Course immédiate ? Appelez le{" "}
          <a href={SITE_PHONE_TEL} className="font-semibold text-brand-dark hover:underline">
            {SITE_PHONE_DISPLAY}
          </a>
          .
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center">
          <Button href="/" size="lg" className="min-w-[200px]">
            Retour à l&apos;accueil
          </Button>
          <Button href="/reservation" size="lg" variant="outline" className="min-w-[200px]">
            Nouvelle réservation
          </Button>
        </div>
      </div>
    </section>
  );
}
