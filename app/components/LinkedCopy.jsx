import PhoneLinkedText from "./PhoneLinkedText";

const LINK_RE = /\[([^\]]+)\]\((\/[a-z0-9][a-z0-9\-/]*)\)/g;

/** Texte avec liens Markdown internes [ancre](/slug), puis numéro cliquable. */
export default function LinkedCopy({ children, className = "" }) {
  const text = String(children ?? "");
  const nodes = [];
  let lastIndex = 0;
  let match;
  let key = 0;

  LINK_RE.lastIndex = 0;
  while ((match = LINK_RE.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(
        <PhoneLinkedText key={`t-${key++}`}>
          {text.slice(lastIndex, match.index)}
        </PhoneLinkedText>,
      );
    }
    nodes.push(
      <a
        key={`l-${key++}`}
        href={match[2]}
        className="font-medium text-accent hover:underline"
      >
        {match[1]}
      </a>,
    );
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    nodes.push(
      <PhoneLinkedText key={`t-${key++}`}>{text.slice(lastIndex)}</PhoneLinkedText>,
    );
  }

  if (nodes.length === 0) {
    return <PhoneLinkedText className={className}>{text}</PhoneLinkedText>;
  }

  return <span className={className}>{nodes}</span>;
}
