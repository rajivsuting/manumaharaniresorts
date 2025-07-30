import React from "react";

import {
  BuildingLibraryIcon,
  BuildingStorefrontIcon,
  MapPinIcon,
  PhotoIcon,
  SparklesIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";

const shortcuts = [
  {
    label: "LOCATION",
    icon: MapPinIcon,
  },
  {
    label: "ACCOMMODATIONS",
    icon: BuildingLibraryIcon,
  },
  {
    label: "PHOTOS & VIDEOS",
    icon: PhotoIcon,
  },
  {
    label: "FACILITIES & AMENITIES",
    icon: Squares2X2Icon,
  },
  {
    label: "DINING",
    icon: BuildingStorefrontIcon,
  },
  {
    label: "SPA",
    icon: SparklesIcon,
  },
];

export default function SectionShortcuts() {
  return (
    <section className="w-full flex justify-center py-8 md:py-16 bg-white">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 flex-wrap gap-4 md:gap-8 max-w-5xl w-full justify-center">
        {shortcuts.map(({ label, icon: Icon }) => (
          <div
            key={label}
            className="bg-white border border-gray-300 py-4 md:py-6 px-2 md:px-4 rounded-md flex flex-col items-center justify-center shadow-sm transition hover:shadow-lg hover:border-gray-400"
          >
            <Icon className="w-6 h-6 md:w-8 md:h-8 text-gray-700 mb-3 md:mb-6" />
            <span className="text-gray-800 font-medium tracking-widest text-[0.7rem] md:text-[0.6rem] text-center">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
