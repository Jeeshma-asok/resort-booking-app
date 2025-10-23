import React, { useState, useEffect, useContext } from "react";
import Button from "./Botton";
import { BookingContext } from "../App";

function Hero() {

  const { setIsModalOpen } = useContext(BookingContext)
  const HERO_IMAGES = [
    "https://etimg.etb2bimg.com/photo/95091199.cms",
    "https://www.cheraibeachresorts.com/images/btm-bg-index.jpg",
    "https://www.cheraibeachresorts.com/images/banner/cherai-banner-02.jpg",
    "https://www.cheraibeachresorts.com/images/banner/cherai-banner-03.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <header id="hero" className="relative h-250 text-white">
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
              <Button 
                text={"Book Now"}
                variant='Orange'
                className="rounded-md px-4 py-2 font-medium"
                onClick={() => setIsModalOpen(true)}
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Hero;
