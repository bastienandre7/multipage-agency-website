"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/work", label: "Work" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  const getHeaderBackground = () => {
    if (isScrolled) {
      return "bg-white/90 backdrop-blur-xl border-b border-black/5";
    }
    if (isMenuOpen && !isScrolled) {
      return isHomePage
        ? "bg-black/90 backdrop-blur-xl"
        : "bg-white/90 backdrop-blur-xl border-b border-black/5";
    }
    return isHomePage ? "bg-transparent" : "bg-white/90 backdrop-blur-xl";
  };

  const getTextColor = () => {
    if (isScrolled) return "text-black";
    if (isMenuOpen && !isScrolled)
      return isHomePage ? "text-white" : "text-black";
    return isHomePage ? "text-white" : "text-black";
  };

  const getLinkColor = () => {
    if (isScrolled) return "text-black/70 hover:text-black";
    if (isMenuOpen && !isScrolled)
      return isHomePage
        ? "text-white/80 hover:text-white"
        : "text-black/70 hover:text-black";
    return isHomePage
      ? "text-white/80 hover:text-white"
      : "text-black/70 hover:text-black";
  };

  const getCTAStyle = () => {
    if (isScrolled) return "bg-black text-white hover:bg-black/90";
    if (isMenuOpen && !isScrolled)
      return isHomePage
        ? "bg-white text-black hover:bg-white/90"
        : "bg-black text-white hover:bg-black/90";
    return isHomePage
      ? "bg-white text-black hover:bg-white/90"
      : "bg-black text-white hover:bg-black/90";
  };

  const getBurgerColor = () => {
    if (isScrolled) return "bg-black";
    if (isMenuOpen && !isScrolled) return isHomePage ? "bg-white" : "bg-black";
    return isHomePage ? "bg-white" : "bg-black";
  };

  const getMobileBorderColor = () => {
    if (isScrolled) return "border-t border-black/5";
    return isHomePage ? "border-t border-white/10" : "border-t border-black/5";
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${getHeaderBackground()}`}
    >
      <nav className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 lg:h-24">
          <Link href="/" className="flex items-center">
            <div className="text-2xl lg:text-3xl font-bold tracking-tight">
              <span
                className={`transition-colors duration-300 ${getTextColor()}`}
              >
                Orbit
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center">
            <div className="flex items-center space-x-8 xl:space-x-12">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[15px] font-medium transition-colors duration-300 ${getLinkColor()}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="ml-8 xl:ml-12">
              <Link
                href="/contact"
                className={`inline-flex items-center px-6 py-3 text-[15px] font-medium rounded-full transition-all duration-300 hover:scale-105 ${getCTAStyle()}`}
              >
                Let&apos;s talk
              </Link>
            </div>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 group"
          >
            <span
              className={`w-6 h-0.5 transition-all duration-300 ${getBurgerColor()} ${
                isMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 transition-all duration-300 ${getBurgerColor()} ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 transition-all duration-300 ${getBurgerColor()} ${
                isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </button>
        </div>

        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div
            className={`pb-6 pt-4 space-y-6 transition-colors duration-300 ${getMobileBorderColor()}`}
          >
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block text-lg font-medium transition-colors duration-300 ${getLinkColor()}`}
                onClick={() => setIsMenuOpen(false)}
                style={{
                  animationDelay: isMenuOpen ? `${index * 100}ms` : "0ms",
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className={`inline-flex items-center px-6 py-3 text-[15px] font-medium rounded-full transition-all duration-300 mt-4 ${getCTAStyle()}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Let&apos;s talk
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
