import Link from "next/link";
import HeaderClient from "./client/HeaderClient";
import { getNavItems } from "@/app/lib/navigation";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-[120]">
      <HeaderClient navItems={getNavItems()}>
        <Link href="/" className="flex items-center gap-2">
          <div className="site-logo-mark w-10 h-10 bg-accent rounded-full flex items-center justify-center">
            <span className="text-accent-foreground font-bold text-lg">D</span>
          </div>
          <span className="font-bold text-lg sm:text-xl">Taxis La Dracénie</span>
        </Link>
      </HeaderClient>
    </header>
  );
}
