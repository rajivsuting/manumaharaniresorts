"use client";

import { useEffect, useState } from "react";

import {
  ShoppingBagIcon,
  UserIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

const Header = () => {
  const [hideTop, setHideTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let lastScroll = window.scrollY;
    const onScroll = () => {
      const current = window.scrollY;
      setHideTop(current > 40);
      lastScroll = current;
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="w-full backdrop-blur-lg bg-black/70 fixed top-0 left-0 z-50 py-2">
      {/* Top bar remains unchanged */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-2 md:py-3 gap-2 md:gap-0">
        {/* Logo and divider */}
        <div className="flex items-center w-full md:w-auto justify-between">
          <img
            src="https://www.manumaharaniresorts.com/wp-content/uploads/2022/09/Final-Logo_Manu-Maharani.png"
            alt="Manu Maharani Resort & Spa Logo"
            className="h-10 w-auto object-contain md:h-16"
          />
          <button
            className="md:hidden ml-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="w-8 h-8 text-white" />
            ) : (
              <Bars3Icon className="w-8 h-8 text-white" />
            )}
          </button>
        </div>
        {/* Resort name (hidden on mobile) */}
        <div className="hidden md:flex flex-1 flex-col items-start">
          <span className="text-2xl tracking-widest text-white font-thin leading-none uppercase">
            Manu Maharani Resort & Spa
          </span>
        </div>
        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10 min-w-max">
          <nav className="flex items-center gap-8">
            <a
              href="#"
              className="text-white text-xs font-bold tracking-widest hover:text-white/50 transition leading-none pb-1 border-b-1 border-white"
            >
              HOME
            </a>
            <a
              href="#about"
              className="text-white text-xs font-bold tracking-widest hover:text-white/50 transition leading-none pb-1 border-b-1 border-white"
            >
              ABOUT US
            </a>
            <a
              href="#accommodations"
              className="text-white text-xs font-bold tracking-widest hover:text-white/50 transition leading-none pb-1 border-b-1 border-white"
            >
              ACCOMMODATIONS
            </a>
            <a
              href="#dining"
              className="text-white text-xs font-bold tracking-widest hover:text-white/50 transition leading-none pb-1 border-b-1 border-white"
            >
              FINE DINING
            </a>
            <a
              href="#wedding"
              className="text-white text-xs font-bold tracking-widest hover:text-white/50 transition leading-none pb-1 border-b-1 border-white"
            >
              WEDDING/MICE
            </a>
            <a
              href="#experiences"
              className="text-white text-xs font-bold tracking-widest hover:text-white/50 transition leading-none pb-1 border-b-1 border-white"
            >
              EXPERIENCES
            </a>
            <a
              href="#contact"
              className="text-white text-xs font-bold tracking-widest hover:text-white/50 transition leading-none pb-1 border-b-1 border-white"
            >
              CONTACT US
            </a>
          </nav>
          <ShoppingBagIcon className="w-8 h-8 text-white" />
        </div>
      </div>
      {/* Mobile nav */}
      {mobileMenuOpen && (
        <div className="md:hidden w-full bg-black/90 px-4 py-4 flex flex-col gap-4 animate-fadeInUp">
          <nav className="flex flex-col gap-4">
            <a
              href="#"
              className="text-white text-xs font-bold tracking-widest hover:text-white/50 transition leading-none pb-1 border-b-1 border-white"
            >
              HOME
            </a>
            <a
              href="#about"
              className="text-white text-xs font-bold tracking-widest hover:text-white/50 transition leading-none pb-1 border-b-1 border-white"
            >
              ABOUT US
            </a>
            <a
              href="#accommodations"
              className="text-white text-xs font-bold tracking-widest hover:text-white/50 transition leading-none pb-1 border-b-1 border-white"
            >
              ACCOMMODATIONS
            </a>
            <a
              href="#dining"
              className="text-white text-xs font-bold tracking-widest hover:text-white/50 transition leading-none pb-1 border-b-1 border-white"
            >
              FINE DINING
            </a>
            <a
              href="#wedding"
              className="text-white text-xs font-bold tracking-widest hover:text-white/50 transition leading-none pb-1 border-b-1 border-white"
            >
              WEDDING/MICE
            </a>
            <a
              href="#experiences"
              className="text-white text-xs font-bold tracking-widest hover:text-white/50 transition leading-none pb-1 border-b-1 border-white"
            >
              EXPERIENCES
            </a>
            <a
              href="#contact"
              className="text-white text-xs font-bold tracking-widest hover:text-white/50 transition leading-none pb-1 border-b-1 border-white"
            >
              CONTACT US
            </a>
          </nav>
          <div className="flex gap-4 mt-2">
            <UserIcon className="w-6 h-6 text-white" />
            <ShoppingBagIcon className="w-6 h-6 text-white" />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
