"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <div className="relative h-10 w-10 mr-2">
                <div className="absolute inset-0 bg-gradient-to-r from-[#3E64FF] to-[#7ED957] rounded-lg transform -rotate-6"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">
                  CG
                </div>
              </div>
              <span className="text-2xl font-bold">
                <span className="bg-gradient-to-r from-[#3E64FF] to-[#7ED957] text-transparent bg-clip-text">
                  ChemoGlobal
                </span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/about">About Us</NavLink>
              <NavLink href="/products">Products</NavLink>
              <NavLink href="/services">Services</NavLink>
              <NavLink href="/contact">Contact</NavLink>
              <Link
                href="/request-quote"
                className="bg-gradient-to-r from-[#3E64FF] to-[#536DFE] hover:from-[#3E64FF] hover:to-[#3E64FF] text-white px-6 py-2.5 rounded-full text-sm font-medium ml-4 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Request Quote
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-full text-[#64748B] hover:text-[#3E64FF] hover:bg-blue-50/80 focus:outline-none transition-colors"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg absolute w-full border-t border-gray-100 animate-fadeIn">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <MobileNavLink href="/" onClick={() => setIsMenuOpen(false)}>
              Home
            </MobileNavLink>
            <MobileNavLink href="/about" onClick={() => setIsMenuOpen(false)}>
              About Us
            </MobileNavLink>
            <MobileNavLink
              href="/products"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </MobileNavLink>
            <MobileNavLink
              href="/services"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </MobileNavLink>
            <MobileNavLink href="/contact" onClick={() => setIsMenuOpen(false)}>
              Contact
            </MobileNavLink>
            <Link
              href="/request-quote"
              className="bg-gradient-to-r from-[#3E64FF] to-[#536DFE] text-white block px-4 py-3 rounded-xl text-base font-medium transition-all mt-4 text-center shadow-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Request Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

// NavLink component for desktop
const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="relative text-[#64748B] hover:text-[#3E64FF] px-3 py-2 rounded-md text-sm font-medium transition-colors group"
  >
    {children}
    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#3E64FF] to-[#7ED957] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
  </Link>
);

// NavLink component for mobile
const MobileNavLink = ({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="text-[#64748B] hover:text-[#3E64FF] hover:bg-blue-50/50 block px-4 py-3 rounded-xl text-base font-medium transition-colors flex items-center"
    onClick={onClick}
  >
    {children}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4 ml-auto"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    </svg>
  </Link>
);

export default Navbar;
