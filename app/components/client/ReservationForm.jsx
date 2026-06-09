"use client";

import { AlertCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Button from "@/app/components/ui/Button";
import Card from "@/app/components/ui/Card";
import { createReservation } from "@/app/lib/api";
import { FORMSPREE_RESERVATION_URL } from "@/app/lib/formspree";
import { setReservationConfirmationFlag } from "@/app/lib/reservation-confirmation";

function extractCountryCode(raw) {
  const phone = (raw || "").trim();
  if (!phone) return { indicatifPays: "+33", telephone: "" };

  const digits = phone.replace(/\D/g, "");

  if (digits.startsWith("33") && digits.length >= 10) {
    let national = digits.slice(2);
    if (national.startsWith("0")) national = national.slice(1);
    return { indicatifPays: "+33", telephone: national };
  }

  if (digits.length >= 10 && digits.startsWith("0")) {
    return { indicatifPays: "+33", telephone: digits.slice(1) };
  }

  if (digits.startsWith("0")) {
    return { indicatifPays: "+33", telephone: digits.slice(1) };
  }

  return { indicatifPays: "+33", telephone: digits };
}

export default function ReservationForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    from: "",
    to: "",
    date: "",
    time: "",
    passengers: "1",
    luggage: "0",
    notes: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const { indicatifPays, telephone } = extractCountryCode(formData.phone);

      if (!/^\d{8,15}$/.test(telephone)) {
        setError(
          "Numéro invalide : saisissez 8 à 15 chiffres (ex. 06 12 34 56 78 ou +33 6 12 34 56 78)."
        );
        setLoading(false);
        return;
      }

      const reservationData = {
        nom: formData.name,
        indicatifPays,
        telephone,
        email: formData.email || undefined,
        date: formData.date,
        heure: formData.time,
        adresseDepart: formData.from,
        adresseArrivee: formData.to,
        nombreBagages: formData.luggage.toString(),
        nombrePassagers: formData.passengers.toString(),
        commentaires: formData.notes || undefined,
      };

      const result = await createReservation(reservationData);

      if (result.result) {
        try {
          await fetch(FORMSPREE_RESERVATION_URL, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              type: "Réservation Taxis La Dracénie",
              name: formData.name,
              phone: `${indicatifPays} ${telephone}`,
              email: formData.email || "Non renseigné",
              from: formData.from,
              to: formData.to,
              date: formData.date,
              time: formData.time,
              passengers: formData.passengers,
              luggage: formData.luggage,
              notes: formData.notes || "Aucune note",
            }),
          });
        } catch (formspreeError) {
          console.warn("Erreur Formspree (non bloquant):", formspreeError);
        }

        const flagOk = setReservationConfirmationFlag();
        if (flagOk) {
          router.push("/merci");
        } else {
          setError(
            "Impossible de finaliser la redirection depuis ce navigateur. Votre réservation a bien été enregistrée — appelez-nous si besoin."
          );
        }
      }
    } catch (err) {
      setError(err.message || "Une erreur est survenue. Veuillez réessayer.");
      console.error("Erreur lors de la soumission:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card centered={false} className="p-6 md:p-8">
      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          <p className="text-sm font-medium text-red-700">{error}</p>
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <label className="block">
            <span className="text-sm font-medium">Nom *</span>
            <input
              required
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border px-3 py-2"
            />
          </label>
          <label className="block">
            <span className="text-sm font-medium">Téléphone *</span>
            <input
              required
              name="phone"
              type="tel"
              placeholder="+33 6 12 34 56 78"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border px-3 py-2"
            />
          </label>
        </div>
        <label className="block">
          <span className="text-sm font-medium">Email</span>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 w-full rounded-lg border px-3 py-2"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium">Adresse de départ *</span>
          <input
            required
            name="from"
            value={formData.from}
            onChange={handleChange}
            className="mt-1 w-full rounded-lg border px-3 py-2"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium">Destination *</span>
          <input
            required
            name="to"
            value={formData.to}
            onChange={handleChange}
            className="mt-1 w-full rounded-lg border px-3 py-2"
          />
        </label>
        <div className="grid sm:grid-cols-2 gap-4">
          <label className="block">
            <span className="text-sm font-medium">Date *</span>
            <input
              required
              name="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border px-3 py-2"
            />
          </label>
          <label className="block">
            <span className="text-sm font-medium">Heure *</span>
            <input
              required
              name="time"
              type="time"
              value={formData.time}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border px-3 py-2"
            />
          </label>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <label className="block">
            <span className="text-sm font-medium">Passagers</span>
            <select
              name="passengers"
              value={formData.passengers}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border px-3 py-2"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                <option key={n} value={n}>
                  {n} passager{n > 1 ? "s" : ""}
                </option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="text-sm font-medium">Bagages</span>
            <select
              name="luggage"
              value={formData.luggage}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border px-3 py-2"
            >
              {[0, 1, 2, 3, 4, 5, 6, 7].map((n) => (
                <option key={n} value={n}>
                  {n} bagage{n > 1 ? "s" : ""}
                </option>
              ))}
            </select>
          </label>
        </div>
        <label className="block">
          <span className="text-sm font-medium">Commentaires</span>
          <textarea
            name="notes"
            rows={3}
            value={formData.notes}
            onChange={handleChange}
            className="mt-1 w-full rounded-lg border px-3 py-2"
          />
        </label>
        <Button
          type="submit"
          variant="call"
          size="lg"
          className="w-full font-bold disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={loading}
        >
          {loading ? "Envoi en cours…" : "Confirmer la réservation"}
        </Button>
      </form>
    </Card>
  );
}
