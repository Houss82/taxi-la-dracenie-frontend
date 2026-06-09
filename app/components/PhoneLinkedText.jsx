import { SITE_PHONE_DISPLAY, SITE_PHONE_TEL } from "@/app/lib/contact";

/** Affiche un texte en transformant le numéro du site en lien cliquable tel: */
export default function PhoneLinkedText({ children, className = "" }) {
  const text = String(children ?? "");
  if (!text.includes(SITE_PHONE_DISPLAY)) {
    return <span className={className}>{text}</span>;
  }

  const parts = text.split(SITE_PHONE_DISPLAY);

  return (
    <span className={className}>
      {parts.map((part, index) => (
        <span key={index}>
          {part}
          {index < parts.length - 1 && (
            <a
              href={SITE_PHONE_TEL}
              className="font-bold text-gray-900 tabular-nums hover:underline whitespace-nowrap"
            >
              {SITE_PHONE_DISPLAY}
            </a>
          )}
        </span>
      ))}
    </span>
  );
}
