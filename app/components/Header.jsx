import Link from "next/link";
import Image from "next/image";
import HeaderClient from "./client/HeaderClient";
import { getNavItems } from "@/app/lib/navigation";
import { SITE_LOGO, SITE_NAME } from "@/app/lib/site";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-[120]">
      <HeaderClient navItems={getNavItems()}>
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={SITE_LOGO}
            alt={SITE_NAME}
            width={40}
            height={40}
            className="h-10 w-10 object-contain shrink-0"
            priority
          />
          <span className="font-bold text-lg sm:text-xl">{SITE_NAME}</span>
        </Link>
      </HeaderClient>
    </header>
  );
}
