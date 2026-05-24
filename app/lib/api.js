const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  (process.env.NODE_ENV === "production"
    ? "https://taxi-la-dracenie-backend.vercel.app"
    : "http://localhost:3001");

export async function createReservation(reservationData) {
  let response;

  try {
    response = await fetch(`${API_BASE_URL}/users/reservation`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reservationData),
    });
  } catch {
    throw new Error(
      "Impossible de joindre le serveur de réservation. Réessayez dans un instant ou appelez le 04 22 46 04 62."
    );
  }

  let data;
  try {
    data = await response.json();
  } catch {
    throw new Error("Réponse invalide du serveur de réservation.");
  }

  if (!response.ok) {
    throw new Error(data.error || "Erreur lors de la création de la réservation");
  }

  return data;
}
