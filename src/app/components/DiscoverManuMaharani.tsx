import React from "react";

import { ClockIcon } from "@heroicons/react/24/outline";

const experiences = [
  {
    title: "Night Spa Ritual",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    duration: "2 hours",
    description:
      "Experience the perfect pre-sleep ritual under the stars in a private riverfront location. A ...",
    price: "From INR 50,181",
    priceSuffix: "",
    schedule: "",
  },
  {
    title: "Can You Keep A Secret?",
    image:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    duration: "3 hours",
    description:
      "Can you keep a secret? Embark on a tour to discover the hidden gems of Bali. Some of t…",
    price: "From INR 20,865",
    priceSuffix: "",
    schedule: "",
  },
  {
    title: "Chef's Table Dinner",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80",
    duration: "3 hours",
    description:
      "Indulge in traditional Balinese dining at Sokasi’s riverside kitchen. Enjoy a seven-…",
    price: "From INR 12,413",
    priceSuffix: "/person",
    schedule: "All year round, Monday, Wednesday, Friday",
  },
];

export default function DiscoverManuMaharani() {
  return (
    <section className="w-full flex flex-col items-center py-10 md:py-20 bg-white">
      <h2
        className="text-xl md:text-3xl font-thin tracking-widest uppercase mb-8 md:mb-12 text-center"
        style={{ color: "#000000" }}
      >
        DISCOVER MANU MAHARANI
      </h2>
      <div className="w-full max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 mb-8 md:mb-12 px-2 md:px-0">
        {experiences.map((exp, idx) => (
          <div key={idx} className="flex flex-col items-start">
            <div className="w-full aspect-[4/5] overflow-hidden mb-6">
              <img
                src={exp.image}
                alt={exp.title}
                className="w-full h-full object-cover object-center hover:scale-105 transition-all duration-300"
              />
            </div>
            <h3 className="text-xl font-serif text-black mb-2">{exp.title}</h3>
            <div className="flex items-center gap-2 text-gray-700 text-sm mb-2">
              <ClockIcon className="w-4 h-4" />
              <span>{exp.duration}</span>
            </div>
            {exp.schedule && (
              <div className="flex items-center gap-2 text-gray-700 text-sm mb-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" />
                </svg>
                <span>{exp.schedule}</span>
              </div>
            )}
            <p className="text-gray-800 text-sm mb-2 line-clamp-2">
              {exp.description}
            </p>
            <div className="text-black font-bold text-base mt-2">
              {exp.price}
              <span className="font-normal text-xs ml-1">
                {exp.priceSuffix}
              </span>
            </div>
          </div>
        ))}
      </div>
      <button className="border border-black px-6 md:px-8 py-2 md:py-3 text-black tracking-widest font-medium uppercase text-xs md:text-base hover:bg-black hover:text-white transition">
        Discover More
      </button>
    </section>
  );
}
