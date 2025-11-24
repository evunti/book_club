"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export function NavBar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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

        <div className="md:hidden absolute right-4 top-1/2 -translate-y-1/2">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className=" flex flex-col justify-center items-center gap-1 "
            aria-label="Toggle menu"
          >
            <span className="w-6 h-px bg-brand transition-all"></span>
            <span className="w-6 h-px bg-brand transition-all"></span>
            <span className="w-6 h-px bg-brand transition-all"></span>
          </button>
        </div>

        {dropdownOpen && isMobile && (
          <div className="absolute top-full left-0 right-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-lg z-50 flex flex-col">
            <Link
              href="/"
              className={`block px-6 py-4 text-sm font-light tracking-wider uppercase border-b border-gray-100 transition-colors ${
                isActive("/")
                  ? "text-[color-brand] bg-gray-100 font-normal"
                  : "text-[color-brand]/70 hover:bg-gray-50 hover:text-[color-brand]"
              }`}
              onClick={() => setDropdownOpen(false)}
            >
              Home
            </Link>

            <Link
              href="/reviews"
              className={`block px-6 py-4 text-sm font-light tracking-wider uppercase transition-colors ${
                isActive("/reviews")
                  ? "text-[color-brand] bg-gray-100 font-normal"
                  : "text-[color-brand]/70 hover:bg-gray-50 hover:text-[color-brand]"
              }`}
              onClick={() => setDropdownOpen(false)}
            >
              Reviews
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
