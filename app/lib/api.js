const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

export async function createReservation(reservationData) {
  const response = await fetch(`${API_BASE_URL}/users/reservation`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(reservationData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Erreur lors de la création de la réservation");
  }

  return data;
}
