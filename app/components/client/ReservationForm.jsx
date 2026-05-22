"use client";

import { useState } from "react";
import { createReservation } from "@/app/lib/api";
import { SITE_PHONE_DISPLAY, SITE_PHONE_TEL } from "@/app/lib/contact";
import Button from "@/app/components/ui/Button";
import Card from "@/app/components/ui/Card";

export default function ReservationForm() {
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
  const [submitted, setSubmitted] = useState(false);
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
      const cleanedPhone = formData.phone.replace(/\s/g, "").replace(/^0/, "");
      await createReservation({
        nom: formData.name,
        indicatifPays: "+33",
        telephone: cleanedPhone,
        email: formData.email || undefined,
        date: formData.date,
        heure: formData.time,
        adresseDepart: formData.from,
        adresseArrivee: formData.to,
        nombreBagages: formData.luggage,
        nombrePassagers: formData.passengers,
        commentaires: formData.notes || undefined,
      });
      setSubmitted(true);
    } catch (err) {
      setError(err.message || "Erreur lors de l'envoi");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <Card className="p-8 md:p-10 text-center border-brand-border bg-brand-subtle/80">
        <p className="text-xl font-bold text-brand-darker mb-3">
          Demande de réservation bien reçue
        </p>
        <p className="text-gray-700 leading-relaxed max-w-md mx-auto">
          Merci pour votre confiance. Nous avons enregistré votre trajet et
          étudions votre demande.{" "}
          <strong className="text-brand-darker">
            D&apos;ici une heure, nous vous contacterons
          </strong>{" "}
          par téléphone ou par email pour confirmer l&apos;horaire, le véhicule
          adapté et le tarif de votre course en Dracénie.
        </p>
        <p className="mt-4 text-sm text-gray-600">
          Besoin d&apos;une course immédiate ? Appelez le{" "}
          <a href={SITE_PHONE_TEL} className="font-semibold text-brand-dark hover:underline">
            {SITE_PHONE_DISPLAY}
          </a>
          .
        </p>
      </Card>
    );
  }

  return (
    <Card centered={false} className="p-6 md:p-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <p className="text-sm text-red-600 bg-red-50 p-3 rounded-lg">{error}</p>
        )}
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
        <Button type="submit" variant="call" size="lg" className="w-full font-bold" disabled={loading}>
          {loading ? "Envoi…" : "Envoyer la demande"}
        </Button>
      </form>
    </Card>
  );
}
