import React, { useState, useEffect } from "react";

function Hero() {
  const HERO_IMAGES = [
    "https://etimg.etb2bimg.com/photo/95091199.cms",
    "https://www.cheraibeachresorts.com/images/btm-bg-index.jpg",
    "https://www.cheraibeachresorts.com/images/banner/cherai-banner-02.jpg",
    "https://www.cheraibeachresorts.com/images/banner/cherai-banner-03.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="relative text-white">
      {HERO_IMAGES.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${img})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      ))}

      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-28 sm:py-36">
        <div className="flex flex-col items-start gap-6 max-w-xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight drop-shadow-lg">
            Seaside Serenity Resort
          </h1>
          <p className="text-lg sm:text-xl drop-shadow-md">
            Reconnect with nature — luxury stays, exciting adventures, and total
            relaxation.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#booking"
              className="inline-block rounded-md bg-amber-500 px-5 py-3 font-medium text-gray-900 shadow hover:bg-amber-400 transition"
            >
              Book now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
