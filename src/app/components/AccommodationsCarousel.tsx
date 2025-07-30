"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

interface Accommodation {
  title: string;
  image: string;
  description: string;
}

const accommodations: Accommodation[] = [
  {
    title: "FAMILY SUITE",
    image:
      "https://www.manumaharaniresorts.com/wp-content/uploads/2025/01/mm-executive-room.webp",
    description:
      "The ideal sanctuary for parents and up to two kids, this spacious luxury accommodation in Bali combines a romantic hideaway with a children's room and ample living space all on one level.",
  },
  {
    title: "RIVERFRONT ONE-BEDROOM VILLA",
    image:
      "https://www.manumaharaniresorts.com/wp-content/uploads/2025/01/mm-executive-room-jaccuzi.webp",
    description:
      "Merging outdoor living with spacious interiors, this luxury Bali riverside villa with private pool includes a canopy bed, walk-in closet and lavish marble bathroom with freestanding tub.",
  },
  {
    title: "RIVER-VIEW TWO-BEDROOM VILLA",
    image:
      "https://www.manumaharaniresorts.com/wp-content/uploads/2022/10/DAP06598.webp",
    description:
      "Our River-View Two-Bedroom Villa boasts a meditation area with the hypnotic sound of the river, a spacious outdoor living room and a private pool that combine to create a true sanctuary at our Bali resort in Ubud.",
  },
  {
    title: "ONE-BEDROOM VILLA",
    image:
      "https://www.manumaharaniresorts.com/wp-content/uploads/2022/04/MOK_9989.webp",
    description:
      "Intricately carved wood, locally sourced shells and traditional ikat fabric harmonize with the surrounding hillside's rich greenery and rice terraces in this luxury Bali accommodation with private pool.",
  },
  {
    title: "ROYAL VILLA",
    image:
      "https://www.manumaharaniresorts.com/wp-content/uploads/2022/11/MOK_0024-HDR.webp",
    description:
      "This three-bedroom, art-filled Royal Villa with private pool – accessible through the Resort's dramatic rooftop – exemplifies casual elegance with its open-sided living and dining areas and Balinese-style accommodation.",
  },
];

const VISIBLE_CARDS = 5;
const CARD_WIDTH =
  typeof window !== "undefined" && window.innerWidth < 640 ? 240 : 320;
const GAP = 24;
const ANIMATION_DURATION = 500;

function getClones(list: Accommodation[], visible: number): Accommodation[] {
  return [...list.slice(-visible), ...list, ...list.slice(0, visible)];
}

export default function AccommodationsCarousel() {
  const [index, setIndex] = useState(accommodations.length); // Start at first real card
  const [isAnimating, setIsAnimating] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const total = accommodations.length;
  const clones = getClones(accommodations, VISIBLE_CARDS);
  const totalCards = clones.length;

  // Update container width on mount and resize
  useEffect(() => {
    function updateWidth() {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    }
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // Center the active card based on container width
  const translateX =
    containerWidth / 2 - CARD_WIDTH / 1.6 - index * (CARD_WIDTH + GAP);

  // Navigation
  const goTo = (newIdx: number) => {
    setIsAnimating(true);
    setIndex(newIdx);
  };

  const goLeft = () => {
    if (isAnimating) return;
    goTo(index - 1);
  };
  const goRight = () => {
    if (isAnimating) return;
    goTo(index + 1);
  };

  // Handle jump after animation for seamless infinite effect
  useEffect(() => {
    if (!isAnimating) return;
    const handle = setTimeout(() => {
      setIsAnimating(false);
      if (index < VISIBLE_CARDS) {
        setIndex(total + index);
      } else if (index >= total + VISIBLE_CARDS) {
        setIndex(index - total);
      }
    }, ANIMATION_DURATION);
    return () => clearTimeout(handle);
  }, [isAnimating, index, total]);

  // Calculate center index for display
  const centerIdx = (((index - VISIBLE_CARDS) % total) + total) % total;

  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2
          className="text-3xl md:text-4xl font-thin tracking-widest text-center mb-12 uppercase"
          style={{ color: "#000000" }}
        >
          Accommodations
        </h2>
        {/* Carousel Row */}
        <div
          ref={containerRef}
          className="overflow-hidden h-full w-full px-2 sm:px-4 md:px-12 "
        >
          <div
            className="flex items-center"
            style={{
              columnGap: GAP,
              width: `${totalCards * (CARD_WIDTH + GAP)}px`,
              transform: `translateX(${translateX}px)`,
              transition: isAnimating
                ? `transform ${ANIMATION_DURATION}ms cubic-bezier(0.4,0,0.2,1)`
                : "none",
            }}
          >
            {clones.map((card, i) => {
              const offset = i - index;
              const isCenter = offset === 0;
              return (
                <div
                  key={i + card.title}
                  className={`bg-white border border-gray-200 flex flex-col items-center justify-start transition-all duration-500
                    ${
                      isCenter ? "shadow-2xl scale-105 z-20" : "opacity-80 z-10"
                    }
                  `}
                  style={{
                    boxShadow: isCenter
                      ? "0 8px 32px rgba(0,0,0,0.12)"
                      : undefined,
                    minWidth: CARD_WIDTH,
                    maxWidth: CARD_WIDTH,
                    marginLeft: i === 0 ? 0 : 0,
                    transform: isCenter ? "scale(1.05)" : "scale(1)",
                  }}
                >
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={400}
                    height={300}
                    className={`w-full object-cover ${
                      isCenter ? "h-48" : "h-60"
                    }`}
                  />
                  <div className="flex flex-col items-center px-6 py-6 w-full">
                    <h3
                      className={`text-center font-semibold tracking-widest text-black mb-2 ${
                        isCenter ? "text-lg" : "text-base"
                      }`}
                    >
                      {card.title}
                    </h3>
                    {isCenter && (
                      <>
                        <div className="w-12 border-t border-gray-300 my-3" />
                        <p className="text-gray-600 text-sm text-center mb-6 min-h-[72px]">
                          {card.description}
                        </p>
                        <div className="flex gap-3 w-full justify-center">
                          <button className="px-5 py-2 bg-black text-[#b68833] text-xs font-semibold rounded-sm tracking-widest hover:bg-gray-800 transition">
                            CHECK RATES
                          </button>
                          <button className="px-5 py-2 border border-black text-black text-xs font-semibold rounded-sm tracking-widest hover:bg-gray-100 transition">
                            DETAILS
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Navigation Bar Below Carousel */}
      <div className="flex items-center justify-center gap-4 md:gap-8 mt-4 md:mt-8 select-none">
        <button
          onClick={goLeft}
          className="p-2 rounded-full transition-transform duration-200 hover:scale-125 hover:bg-gray-100"
          aria-label="Previous"
        >
          <ChevronLeftIcon className="w-8 h-8 text-black" />
        </button>
        <span className="text-xl font-semibold">
          {centerIdx + 1} <span className="mx-1 text-lg font-normal">/</span>{" "}
          {total}
        </span>
        <button
          onClick={goRight}
          className="p-2 rounded-full transition-transform duration-200 hover:scale-125 hover:bg-gray-100"
          aria-label="Next"
        >
          <ChevronRightIcon className="w-8 h-8 text-black" />
        </button>
      </div>
    </section>
  );
}
