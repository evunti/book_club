"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export function NavBar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="w-full flex justify-center mb-2 mt-2 relative z-50 px-2 sm:px-6 md:px-10">
      <div className="w-full flex items-center justify-between relative py-2 md:py-3 text-[color-brand] backdrop-blur-sm border-b border-[color-brand]/20 max-w-8xl">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/label.svg"
            alt="Logo"
            width={48}
            height={48}
            className="h-8 md:h-12 w-auto cursor-pointer"
            priority
          />
        </Link>

        <div className="hidden md:flex gap-10 items-center">
          <Link
            href="/"
            className={`no-underline text-sm font-light tracking-wider uppercase transition-all duration-200 ${
              isActive("/")
                ? "text-[color-brand] border-b-2 border-[color-brand] pb-1"
                : "text-[color-brand]/70 hover:text-[color-brand]"
            }`}
          >
            Home
          </Link>

          <Link
            href="/reviews"
            className={`no-underline text-sm font-light tracking-wider uppercase transition-all duration-200 ${
              isActive("/reviews")
                ? "text-[color-brand] border-b-2 border-[color-brand] pb-1"
                : "text-[color-brand]/70 hover:text-[color-brand]"
            }`}
          >
            Reviews
          </Link>
        </div>

        <div className="hidden md:flex flex-col items-end text-right">
          <p className="text-sm font-light tracking-wide text-[color-brand]">
            Book Club Reviews & Discussions
          </p>
        </div>
      </div>
    </nav>
  );
}
