"use client";
import { useRef, useState } from "react";

import { PauseIcon, PlayIcon } from "@heroicons/react/24/solid";

import AccommodationsCarousel from "./components/AccommodationsCarousel";
import DiscoverManuMaharani from "./components/DiscoverManuMaharani";
import FeaturedOffers from "./components/FeaturedOffers";
import SectionShortcuts from "./components/SectionShortcuts";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore from "swiper";
SwiperCore.use([Navigation, Autoplay]);

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [paused, setPaused] = useState(false);

  // Swiper images for Experiences section
  const experienceImages = [
    "https://www.manumaharaniresorts.com/wp-content/uploads/2024/04/outdoor-trails-4-1.webp",
    "https://www.manumaharaniresorts.com/wp-content/uploads/2024/04/outdoor-trails-1-1.webp",
    "https://www.manumaharaniresorts.com/wp-content/uploads/2024/04/romantic-getaway-2.webp",
    "https://www.manumaharaniresorts.com/wp-content/uploads/2024/04/manu-maharani-safari-3.webp",
    "https://www.manumaharaniresorts.com/wp-content/uploads/2024/04/manu-maharani-safari-2.webp",
    "https://www.manumaharaniresorts.com/wp-content/uploads/2024/04/friends-and-family-4.webp",
  ];

  const handlePausePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setPaused(false);
    } else {
      videoRef.current.pause();
      setPaused(true);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans bg-black text-white">
      {/* Hero Section */}
      <section className="relative flex-1 flex items-end min-h-screen pt-[100px] md:pt-[140px] pb-0">
        {/* Video Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            ref={videoRef}
            className="w-full h-full object-cover object-center"
            autoPlay
            loop
            muted
            playsInline
            poster="https://www.fourseasons.com/alt/img-opt/~70.1530.0,0000-0,0000-1536,0000-864,0000/publish/content/dam/fourseasons/images/web/BSA/BSA_1200x800.jpg"
          >
            <source
              src="https://cdn.pixabay.com/video/2024/10/07/235219_tiny.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full px-4 md:px-8 pb-20 md:pb-32">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl animate-fadeInUp gap-y-8">
              <p className="text-base md:text-lg font-serif italic text-white/90">
                Manu Maharani Resort & Spa
              </p>
              <h1 className="text-2xl md:text-4xl font-thin tracking-[0.2em] md:tracking-[0.3em] uppercase text-white leading-tight pt-2 pb-4 md:pb-6">
                Your best bet in Corbett
              </h1>
              <div>
                <div className="space-y-2 mb-2 text-base md:text-lg tracking-wider">
                  <p className="text-white/90 text-xs md:text-sm">
                    Village Dhikuli Ramnagar, Dhikuli, Jim Corbett National Park
                    244715 India
                  </p>
                </div>
                <div className="flex gap-2 md:gap-4 flex-wrap">
                  <button className="text-white text-xs font-bold h-5 tracking-widest hover:text-white/50 transition border-b-1 border-white">
                    +91 – 9971889911
                  </button>
                  <button className="text-white text-xs font-bold h-5 tracking-widest hover:text-white/50 transition border-b-1 border-white">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Shortcuts */}
        {/* <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20">
          <div className="flex gap-4">
            {[
              { label: "Location", icon: "📍" },
              { label: "Accommodations", icon: "🏠" },
              { label: "Photos & Videos", icon: "📷" },
              { label: "Facilities & Amenities", icon: "🏊" },
              { label: "Dining", icon: "🍽️" },
              { label: "Spa", icon: "🧘" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-lg px-6 py-4 flex flex-col items-center gap-2 min-w-[120px] text-white shadow-xl hover:bg-black/80 transition cursor-pointer"
              >
                <div className="text-2xl mb-1">{item.icon}</div>
                <span className="text-xs font-semibold tracking-[0.15em] uppercase text-center leading-tight">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div> */}

        {/* Pause/Play Button */}
        <button
          onClick={handlePausePlay}
          className="absolute bottom-8 right-8 z-20 bg-black/60 hover:bg-black/80 border-2 border-white rounded-full w-5 aspect-square flex items-center justify-center text-white shadow-xl transition backdrop-blur-sm"
          aria-label={paused ? "Play video" : "Pause video"}
        >
          {paused ? (
            <PlayIcon className="w-3 h-3" />
          ) : (
            <PauseIcon className="w-3 h-3" />
          )}
        </button>
        {/* Bottom Divider Line */}
        <div className="absolute left-0 right-0" style={{ bottom: "80px" }}>
          <div className="h-0.5 bg-white/40 w-full z-20 relative" />
        </div>
        {/* Vertical Dividers */}
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="absolute bg-white/40 w-0.5 z-20"
            style={{
              left: `${i * 20}%`,
              bottom: 0,
              top: `calc(100vh - 80px)`,
              height: `calc(80px)`,
            }}
          />
        ))}
        {/* Booking Form in 5-part grid below divider */}
        <div
          className="absolute left-0 right-0 flex justify-between items-end px-4"
          style={{ bottom: 0, height: "80px", pointerEvents: "none" }}
        >
          {/* 1st box (empty) */}
          <div className="flex-1" />
          {/* 2nd box: Check In */}
          <div className="flex-1 flex items-center justify-center h-full">
            <label className="text-sm text-white/80" htmlFor="checkin">
              Check In
            </label>
          </div>
          {/* 3rd box: Check Out */}
          <div className="flex-1 flex items-center justify-center h-full">
            <label className="text-sm text-white/80" htmlFor="checkout">
              Check Out
            </label>
          </div>
          {/* 4th box: Book Now */}
          <div className="flex-1 flex items-center justify-center h-full">
            <label className="text-sm text-white/80" htmlFor="checkout">
              Book Now
            </label>
          </div>
          {/* 5th box (empty) */}
          <div className="flex-1" />
        </div>
      </section>

      <SectionShortcuts />

      {/* About Section */}
      <section className="w-full mb-10 flex justify-center items-center">
        <div
          className="max-w-screen-xl mx-auto bg-gray-50 text-gray-800 py-24 flex flex-col justify-center items-center bg-cover bg-center relative"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80)",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-80 z-0"></div>
          <div className="text-center px-16 relative z-10">
            <h2 className="text-2xl md:text-4xl font-thin tracking-[0.08em] uppercase mb-10 leading-snug text-white">
              WHERE LUXURY MEETS COMFORT
            </h2>
            <p className="text-sm md:text-base font-serif text-gray-200 leading-relaxed">
              Nestled between the two primary Jim Corbett National Park entry
              gates of Bijrani and Dhikala, Manu Maharani Resort & Spa is the
              best place to stay in Ramnagar. With the Kosi river flowing by and
              the Shivalik range as the backdrop, the resort offers the most
              luxurious stay in the wilderness of Corbett. Very easily reachable
              from Delhi, Jaipur, Rishikesh and other cities, the resort is
              close to all tourist hotspots in Corbett.
            </p>
            <button className="mt-8 border border-white bg-transparent text-white px-8 py-3 uppercase tracking-widest font-medium text-base hover:bg-black hover:text-[#b68833] hover:border-[#b68833] transition">
              Discover More
            </button>
          </div>
        </div>
      </section>

      <FeaturedOffers />

      {/* Accommodations Section (carousel remains, but update content) */}
      <AccommodationsCarousel />

      {/* Fine Dining Section */}
      <section className="w-full py-24 bg-white">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2
            className="text-3xl md:text-4xl font-thin tracking-widest text-center mb-12 uppercase"
            style={{ color: "#000000" }}
          >
            Fine Dining
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Dasos */}
            <div className="relative group rounded-lg overflow-hidden">
              <img
                src="https://www.manumaharaniresorts.com/wp-content/uploads/2022/10/pexels-pixabay-533325-scaled-1024x654.jpg"
                alt="Dasos"
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-8">
                <h3 className="text-2xl font-serif text-white mb-2">
                  Dasos, River Side Dining
                </h3>
                <p className="text-white/80 mb-4">All Day / night Menu</p>
                <button className="border border-white px-4 py-2 text-white uppercase tracking-widest font-medium text-xs hover:bg-white hover:text-black transition w-max">
                  View More
                </button>
              </div>
            </div>
            {/* Gurney's Grill */}
            <div className="relative group rounded-lg overflow-hidden">
              <img
                src="https://www.manumaharaniresorts.com/wp-content/uploads/2022/09/DSC_9880-scaled-2048x1366.jpg"
                alt="Gurney's Grill"
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-8">
                <h3 className="text-2xl font-serif text-white mb-2">
                  Gurney's Grill
                </h3>
                <p className="text-white/80 mb-4">Timing: 7 p.m - 10 p.m</p>
                <button className="border border-white px-4 py-2 text-white uppercase tracking-widest font-medium text-xs hover:bg-white hover:text-black transition w-max">
                  View More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experiences Section - Swiper Carousel */}
      <section
        className="w-full flex flex-col items-center relative py-16"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/70 z-0 pointer-events-none" />
        <h2 className="text-3xl md:text-4xl font-thin tracking-widest text-white uppercase mb-12 text-center z-10 relative">
          Experiences
        </h2>
        <div className="w-full min-h-[300px] h-[50vw] max-h-[500px] flex items-center justify-center relative z-10">
          <Swiper
            spaceBetween={30}
            slidesPerView={3}
            loop={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            className="w-full h-full"
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {experienceImages.map((img, idx) => (
              <SwiperSlide key={idx}>
                <div className="relative w-full aspect-[16/9] flex items-center justify-center">
                  <img
                    src={img}
                    alt={`Experience ${idx + 1}`}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end">
                    <div className="w-full bg-gradient-to-t from-black/80 to-transparent p-8">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        Experience {idx + 1}
                      </h3>
                      <p className="text-white text-base text-left">
                        This is a short description for experience {idx + 1}.
                        Replace with real content.
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      {/* Wedding at Manu Maharani Section */}
      <section className="w-full py-24 bg-white">
        <div className="w-full px-0">
          <h2
            className="text-3xl md:text-4xl font-thin tracking-widest text-center mb-12 uppercase"
            style={{ color: "#000000" }}
          >
            Wedding at Manu Maharani
          </h2>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mx-auto">
            {/* Card 1 */}
            <div className="flex flex-col h-full bg-white overflow-hidden">
              <img
                src="https://images.unsplash.com/flagged/photo-1572534779127-b64758946728?auto=format&fit=crop&w=600&q=80"
                alt="Wedding 1"
                className="w-full h-80 object-cover object-center"
              />
              <div className="bg-[#000000] text-[#b68833] text-center py-3 text-lg font-serif tracking-widest flex flex-col items-center justify-center">
                <span className="text-xs font-sans tracking-normal mb-1">
                  ELLE x
                </span>
                <span className="text-base font-serif">MANU MAHARANI</span>
              </div>
            </div>
            {/* Card 2 */}
            <div className="flex flex-col h-full bg-white overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1587271636175-90d58cdad458?auto=format&fit=crop&w=600&q=80"
                alt="Wedding 2"
                className="w-full h-80 object-cover object-center"
              />
              <div className="bg-[#000000] text-[#b68833] text-center py-3 text-lg font-serif tracking-widest flex flex-col items-center justify-center">
                <span className="text-xs font-sans tracking-normal mb-1">
                  BRIDES x
                </span>
                <span className="text-base font-serif">MANU MAHARANI</span>
              </div>
            </div>
            {/* Card 3 */}
            <div className="flex flex-col h-full bg-white overflow-hidden">
              <img
                src="https://www.manumaharaniresorts.com/wp-content/uploads/2024/04/romantic-getaway-1.webp"
                alt="Wedding 3"
                className="w-full h-80 object-cover object-center"
              />
              <div className="bg-[#000000] text-[#b68833] text-center py-3 text-lg font-serif tracking-widest flex flex-col items-center justify-center">
                <span className="text-xs font-sans tracking-normal mb-1">
                  TRAVEL+LEISURE x
                </span>
                <span className="text-base font-serif">MANU MAHARANI</span>
              </div>
            </div>
            {/* Card 4 */}
            <div className="flex flex-col h-full bg-white overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?auto=format&fit=crop&w=600&q=80"
                alt="Wedding 4"
                className="w-full h-80 object-cover object-center"
              />
              <div className="bg-[#000000] text-[#b68833] text-center py-3 text-lg font-serif tracking-widest flex flex-col items-center justify-center">
                <span className="text-xs font-sans tracking-normal mb-1">
                  VOGUE x
                </span>
                <span className="text-base font-serif">MANU MAHARANI</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Jim Corbett National Park Section */}
      <section className="w-full bg-[#000000] py-24 flex justify-center items-center">
        <div className="max-w-screen-xl mx-auto w-full flex flex-col md:flex-row items-center justify-between px-6 gap-12">
          {/* Left: Text */}
          <div className="flex-1 flex flex-col justify-center items-start max-w-xl">
            <h2
              className="text-3xl md:text-4xl font-serif tracking-widest text-[#b68833] mb-8"
              style={{ fontFamily: "serif" }}
            >
              JIM CORBETT NATIONAL PARK
            </h2>
            <p className="text-white/90 text-lg mb-8">
              India's first national park and still one of its most iconic,
              Corbett is a living, breathing wilderness. Spanning over 1,300
              square kilometres, its terrain ranges from dense forests to open
              grasslands and winding riverbeds, home to over 600 species of
              birds, elephants, leopards, and the elusive tiger. Named after
              Edward James Corbett, the hunter-turned-conservationist who became
              the forest’s fiercest guardian, the park offers more than just
              safaris — it’s a quiet, powerful reminder of nature in its purest
              form.
            </p>
            <button className="border border-[#b68833] bg-transparent text-[#b68833] px-8 py-3 uppercase tracking-widest font-medium text-base hover:bg-white hover:text-[#000000] transition">
              Discover More
            </button>
          </div>
          {/* Right: Tiger Illustration */}
          <div className="flex-1 flex justify-center items-center">
            <img
              src="/tiger.png"
              alt="Tiger Illustration"
              className="max-w-sm w-full h-auto object-contain"
              style={{ filter: "drop-shadow(0 4px 24px rgba(0,0,0,0.2))" }}
            />
          </div>
        </div>
      </section>
      <DiscoverManuMaharani />

      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
          animation-delay: 0.3s;
        }
      `}</style>
      {/* Floating Chatbot Button */}
      <div className="fixed bottom-4 right-4 z-50 group md:bottom-6 md:right-6">
        <button
          className="bg-[#000] border-2 border-[#b68833] shadow-lg rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center transition-transform duration-200 hover:scale-110 focus:scale-110 focus:outline-none focus:ring-2 focus:ring-[#b68833] hover:shadow-[0_0_24px_4px_rgba(182,136,51,0.25)]"
          aria-label="Chat with us"
          style={{ boxShadow: "0 4px 24px rgba(182,136,51,0.15)" }}
        >
          {/* Heroicons Chat Bubble Left Ellipsis */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#fff"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 15.75a2.25 2.25 0 01-2.25 2.25H6.664c-.513 0-1.02.12-1.478.352l-2.436 1.218a.563.563 0 01-.75-.75l1.218-2.436A2.25 2.25 0 013.75 17.25V6.75A2.25 2.25 0 016 4.5h13.5a2.25 2.25 0 012.25 2.25v9z"
            />
            <circle cx="8.5" cy="12" r="1.25" fill="#fff" />
            <circle cx="12" cy="12" r="1.25" fill="#fff" />
            <circle cx="15.5" cy="12" r="1.25" fill="#fff" />
          </svg>
        </button>
        {/* Tooltip */}
        <span className="absolute bottom-16 md:bottom-20 right-1/2 translate-x-1/2 px-2 md:px-3 py-1 rounded bg-[#000] text-[#b68833] text-xs font-medium opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity pointer-events-none shadow-lg whitespace-nowrap">
          Chat with us
        </span>
      </div>
    </div>
  );
}
