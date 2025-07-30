import React from "react";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

import { ChevronDownIcon } from "@heroicons/react/24/outline";

const columns = [
  {
    heading: "About",
    links: [
      "About Us",
      "Four Seasons For Good",
      "Health and Safety",
      "Careers",
      "Contact Us",
    ],
  },
  {
    heading: "Reservations",
    links: ["Request an Invoice", "Find a Reservation", "Email Preferences"],
  },
  {
    heading: "News",
    links: ["Press Room", "New Openings", "Magazine", "Newsletter"],
  },
  {
    heading: "More",
    links: [
      "Private Jet",
      "Yachts",
      "Residences",
      "Villa & Residence Rentals",
      "Extraordinary Experiences",
      "Gift Cards",
    ],
  },
];

const legalLinks = [
  { label: "Legal Notice", href: "#" },
  { label: "Privacy Notice", href: "#" },
  { label: "Cookie Preferences", href: "#" },
  { label: "Do Not Sell My Personal Information", href: "#" },
  { label: "Accessibility Policy", href: "#" },
  { label: "Modern Slavery Statement", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#000000] text-white pt-10 pb-4 px-2 md:pt-20 md:pb-6 md:px-4">
      <div className="flex flex-col items-center mb-8 md:mb-16">
        <div className="mb-4 md:mb-6 flex flex-col items-center">
          <Image
            src="https://www.manumaharaniresorts.com/wp-content/uploads/2022/09/Final-Logo_Manu-Maharani.png"
            alt="Manu Maharani Resort & Spa Logo"
            width={200}
            height={64}
            className="h-10 w-auto object-contain mb-2 md:h-16"
          />
        </div>
      </div>
      <div className="w-full max-w-screen-xl mx-auto grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-12 text-center md:text-left">
        {columns.map((col) => (
          <div key={col.heading}>
            <h3
              className="italic font-serif text-lg mb-6"
              style={{ color: "#b68833" }}
            >
              {col.heading}
            </h3>
            <ul className="space-y-3">
              {col.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="uppercase text-xs tracking-widest font-semibold text-white hover:text-white/70 transition"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {/* Bottom Section */}
      <div className="w-full max-w-screen-xl mx-auto mt-8 md:mt-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 mb-4">
          {/* Social Icons */}
          <div className="flex gap-4 md:gap-6 items-center justify-center md:justify-start">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-white/70 transition"
            >
              <FaFacebookF size={22} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-white/70 transition"
            >
              <FaInstagram size={22} />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="hover:text-white/70 transition"
            >
              <FaYoutube size={22} />
            </a>
          </div>
          {/* Language Selector */}
          <div className="flex items-center gap-1 text-xs tracking-widest font-semibold cursor-pointer select-none mt-2 md:mt-0">
            ENGLISH
            <ChevronDownIcon className="w-4 h-4" />
          </div>
        </div>
        <hr className="border-t border-white/40 mb-4" />
        <div className="flex flex-col items-center md:items-start gap-2 text-xs text-white/70">
          {/* Legal Links */}
          <div className="flex flex-wrap gap-x-2 gap-y-2 justify-center md:justify-start">
            {legalLinks.map((link, idx) => (
              <React.Fragment key={link.label}>
                <a
                  href={link.href}
                  className="hover:text-white/70 text-white text-[0.6rem] transition whitespace-nowrap font-medium"
                >
                  {link.label}
                </a>
                {idx < legalLinks.length - 1 && (
                  <span className="mx-1 text-[0.6rem]">&bull;</span>
                )}
              </React.Fragment>
            ))}
          </div>
          {/* Copyright */}
          <div className="text-center md:text-right w-full md:w-auto">
            All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
