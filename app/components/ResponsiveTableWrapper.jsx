"use client";

import { useEffect, useRef } from "react";

export default function ResponsiveTableWrapper({
  children,
  className,
  dangerouslySetInnerHTML,
}) {
  const contentRef = useRef(null);

  useEffect(() => {
    if (!contentRef.current) return;

    const tables = contentRef.current.querySelectorAll("table");

    tables.forEach((table) => {
      if (table.parentElement?.classList.contains("table-wrapper")) {
        return;
      }

      const wrapper = document.createElement("div");
      wrapper.className = "table-wrapper";

      table.parentNode.insertBefore(wrapper, table);
      wrapper.appendChild(table);
    });
  }, [dangerouslySetInnerHTML]);

  return (
    <div
      ref={contentRef}
      className={className}
      dangerouslySetInnerHTML={dangerouslySetInnerHTML}
    >
      {children}
    </div>
  );
}
