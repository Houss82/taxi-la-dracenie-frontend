import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 pt-24 text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Page introuvable</h1>
      <p className="text-gray-600 mb-8">Cette page n&apos;existe pas sur Taxis La Dracénie.</p>
      <Link href="/" className="text-accent font-semibold hover:underline">
        Retour à l&apos;accueil
      </Link>
    </div>
  );
}
